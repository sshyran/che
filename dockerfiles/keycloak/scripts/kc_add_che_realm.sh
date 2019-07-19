#!/bin/bash
#
# Copyright (c) 2019 Red Hat, Inc.
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
#
# SPDX-License-Identifier: EPL-2.0
#
DEFAULT_CHE_HOST="che-${NAMESPACE}.${ROUTING_SUFFIX}"
CHE_HOST=${CHE_HOST:-${DEFAULT_CHE_HOST}}

cat /scripts/che-realm.json.erb | \
                                sed -e "s@<%= scope\.lookupvar('che::che_server_url') %>@${PROTOCOL}://${CHE_HOST}@" \
                                > /scripts/che-realm.json

