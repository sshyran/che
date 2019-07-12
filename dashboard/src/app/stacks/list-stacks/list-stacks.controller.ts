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
  private devfileRegistry: DevfileRegistry;
  private cheWorkspace: CheWorkspace;
  private cheListHelper: che.widget.ICheListHelper;

  private devfileContent: string;
  private pluginRegistryUrl: string;
  private orderBy: string;
  private searchStr: string;

  private isLoading: boolean;

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

    this.orderBy = 'displayName';

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
    this.onOrderByChanged();
  }

  onOrderByChanged(): void {
    this.cheListHelper.clearFilters();
    let filter =  {};
    if (this.searchStr) {
      filter[this.orderBy] = this.searchStr;
    }
    this.cheListHelper.applyFilter(this.orderBy, filter);
  }

  onDevfileSelected(devfile: IDevfileMetaData): void {
    if (devfile.links && devfile.links.self) {
      this.$location.path(`/stack/${this.devfileRegistry.selfLinkToDevfileId(devfile.links.self)}`).search({});
    }
  }
}
