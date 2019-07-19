#!/bin/bash
#
# Copyright (c) 2019 Red Hat, Inc.
# This program and the accompanying materials are made
# available under the terms of the Eclipse Public License 2.0
# which is available at https://www.eclipse.org/legal/epl-2.0/
#
# SPDX-License-Identifier: EPL-2.0
#

if [ "${CHE_SELF__SIGNED__CERT}" != "" ]; then
    echo "${CHE_SELF__SIGNED__CERT}" > /scripts/openshift.cer
    keytool -importcert -alias HOSTDOMAIN -keystore /scripts/openshift.jks -file /scripts/openshift.cer -storepass openshift -noprompt
    keytool -importkeystore -srckeystore $JAVA_HOME/jre/lib/security/cacerts -destkeystore /scripts/openshift.jks -srcstorepass changeit -deststorepass openshift
    /opt/jboss/keycloak/bin/jboss-cli.sh --file=/scripts/cli/add_openshift_certificate.cli && rm -rf /opt/jboss/keycloak/standalone/configuration/standalone_xml_history
fi