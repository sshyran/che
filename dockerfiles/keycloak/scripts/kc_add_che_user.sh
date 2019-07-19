#!/bin/bash
#
# Copyright (c) 2018 Red Hat, Inc.
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
#
# SPDX-License-Identifier: EPL-2.0
#

echo "Configuring Keycloak by modifying realm and user templates..."

cat /scripts/che-users-0.json.erb | \
                                  sed -e "/<% if scope.lookupvar('keycloak::che_keycloak_admin_require_update_password') == 'true' -%>/d" | \
                                  sed -e "/<% else -%>/d" | \
                                  sed -e "/<% end -%>/d" | \
                                  sed -e "/\"requiredActions\" : \[ \],/d" > /scripts/che-users-0.json

if [ "${CHE_KEYCLOAK_ADMIN_REQUIRE_UPDATE_PASSWORD}" == "false" ]; then
    sed -i -e "s#\"UPDATE_PASSWORD\"##" /scripts/che-users-0.json
fi