/*
 * Copyright (c) 2015-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
'use strict';
import {CheWorkspace} from '../../../components/api/workspace/che-workspace.factory';
import {DevfileRegistry, IDevfileMetaData} from '../../../components/api/devfile-registry.factory';

const DEFAULT_COLUMN = 'displayName';

/**
 * @ngdoc controller
 * @name stacks.list.controller:ListStacksCtrl
 * @description This class is handling the controller for listing the stacks
 * @author Ann Shumilova
 * @author Oleksii Orel
 */
export class ListStacksController {

  static $inject = ['$location', '$scope', 'cheWorkspace', 'devfileRegistry', 'cheListHelperFactory'];

  private $location: ng.ILocationService;

  private cheWorkspace: CheWorkspace;
  private devfileRegistry: DevfileRegistry;
  private cheListHelper: che.widget.ICheListHelper;

  private orderBy: string;
  private sortVal: string;
  private searchStr: string;
  private appliedColumn: string;
  private devfileContent: string;
  private pluginRegistryUrl: string;

  private isLoading: boolean;
  private isApplyColumnChanges: boolean;

  /**
   * Default constructor that is using resource
   */
  constructor($location: ng.ILocationService, $scope: ng.IScope, cheWorkspace: CheWorkspace, devfileRegistry: DevfileRegistry, cheListHelperFactory: che.widget.ICheListHelperFactory) {
    this.$location = $location;
    this.cheWorkspace = cheWorkspace;
    this.devfileRegistry = devfileRegistry;

    const helperId = 'devfiles-meta-list';
    this.cheListHelper = cheListHelperFactory.getHelper(helperId);
    $scope.$on('$destroy', () => {
      cheListHelperFactory.removeHelper(helperId);
    });

    this.orderBy = DEFAULT_COLUMN;

    this.appliedColumn = DEFAULT_COLUMN;
    this.isApplyColumnChanges = false;

    this.loadDevfiles();
  }

  loadDevfiles(): void {
    this.isLoading = true;
    this.pluginRegistryUrl = this.cheWorkspace.getWorkspaceSettings().cheWorkspaceDevfileRegistryUrl;
    this.devfileRegistry.fetchDevfiles(this.pluginRegistryUrl).then((data: Array<IDevfileMetaData>) => {
      this.cheListHelper.setList(data, 'displayName');
    }, (error: any) => {
      console.log('Failed to load devfiles', error);
    }).finally(() => {
      this.isLoading = false;
    });
  }

  onSearchChanged(str: string): void {
    this.searchStr = str
    this.updateFilters();
  }

  onOrderByChanged(): void {
    if (!this.isApplyColumnChanges) {
      this.orderBy = this.sortVal;
      return;
    }
    this.appliedColumn = this.sortVal.replace(/^-/, '');
    this.sortVal = this.orderBy;
    this.updateFilters();
  }

  onDevfileSelected(devfile: IDevfileMetaData): void {
    if (devfile.links && devfile.links.self) {
      this.$location.path(`/stack/${this.devfileRegistry.selfLinkToDevfileId(devfile.links.self)}`).search({});
    }
  }

  private updateFilters(): void {
    this.cheListHelper.clearFilters();
    let filter =  {};
    if (this.searchStr) {
      filter[this.appliedColumn] = this.searchStr;
    }
    this.cheListHelper.applyFilter(this.appliedColumn, filter);
  }
}
