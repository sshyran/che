![Eclipse Che - Eclipse Next-Generation IDE](https://raw.githubusercontent.com/eclipse/che/assets/eclipseche.png)

[![Eclipse License](https://img.shields.io/badge/license-Eclipse-brightgreen.svg)](https://github.com/codenvy/che/blob/master/LICENSE)
[![Build Status](https://ci.codenvycorp.com/buildStatus/icon?job=che-master-ci)](https://ci.codenvycorp.com/job/che-master-ci)
<a href="https://sonarcloud.io/dashboard?id=org.eclipse.che%3Ache-parent%3Amaster">
<img src="https://sonarcloud.io/images/project_badges/sonarcloud-black.svg" width="94" height="20" href="" />
</a>


https://www.eclipse.org/che/. Next-generation container development platform, developer workspace server and cloud IDE. Che is Kubernetes-native and places everything the developer needs into containers in Kube pods including dependencies, embedded containerized runtimes, a web IDE, and project code. This makes workspaces distributed, collaborative, and portable to run anywhere Kubernetes runs ... [Read More](https://www.eclipse.org/che/features/)

![Eclipse Che](https://www.eclipse.org/che/images/hero-technology-v2@2x.png "Eclipse Che")

### Getting Started
- Try Che live. *no installation required*: https://www.eclipse.org/che/getting-started/cloud/
- Run Che on your own Kubernetes cluster: https://www.eclipse.org/che/docs/che-7/che-quick-starts.html#running-che-locally_che-quick-starts


### Customize Che for your projects and teams
If your goal is to provide to your developers a Ready-to-code environment that completly fits
your projects developer flows, you are in the right place:

1. **Portable developer environment: Devfile**\
   Devfiles provide the ability to create on demand developer environments.\
   A devfile gives these powers:
    - Import any git projects
    - Use plugins that you have coded or the ones available from the **Che plugin registry** or the **VSCode market place** or your own hosted plugin registry.
    - Include your build time/runtime containers and your kube-native applications for building and testing production application in the inner loop.
    - Make available customized commands to build and run your projects.

   To go further, you can follow this [hands-on guide](https://www.eclipse.org/che/docs/che-7/using-developer-environments-workspaces.html#starting-a-workspace-with-a-devfile_making-a-workspace-portable-using-a-devfile) to learn how to create a workspace based on a devfile.

2. **Customize your developer environments with VSCode extensions.**\
   Che-plugins are a combination of VSCode extension and a dedicated container image with all the system dependencies that an extension would require to work.
Thus, a Che Java plugin is actually the VSCode Java extension + the container image with the right JDK, Maven and so on.\
To go further, you can follow this [hands-on guide (TODO)]() to learn how to configure your containerized VSCode extension and include it in your devfile.

3. **Customize the dashboard for your team to start coding on your projects.**\
   Developers would access to the dashboard with your own devfiles to create on demand workspaces.\
   To go further, you can follow this [hands-on guide (TODO)]() to learn how to set a custom devfile registry to provide Ready-to-code on-demand developer environment for your projects.



### Contributing
#### New contributors
The labels [good first issue](https://github.com/eclipse/che/labels/good%20first%20issue)
and [help wanted](https://github.com/eclipse/che/labels/help%20wanted) are for issues and pull request that new contributors can start with. They will appear in the https://github.com/eclipse/che/contribute page.

#### Repositories
Che is composed of multiple sub projects. For each projects we provide a *CONTRIBUTE.md* file describing how to setup the development environment to start your contribution. Most of the time, we encourage you to use Che to contribute to Che.

- [eclipse/che](https://github.com/eclipse/che): main project repository
   - Che master: orchestrate the che workspaces with devfiles on Kubernetes
   - Che dashboard
   - Che main container images
   - End2end test
- [che-theia](https://github.com/eclipse/che-theia): Theia IDE integrated in Che.
- [chectl](https://github.com/che-incubator/chectl): The CLI to install Che, create and start workspaces and devfiles
- [che-plugin-registry]()
- [che-devfile-registry](https://github.com/eclipse/che-devfile-registry)
- [redhat-developer/devfile](https://github.com/redhat-developer/devfile): Contribute to the devfile documentation: https://redhat-developer.github.io/devfile/


If you are interested in fixing issues and contributing directly to the code base, please see [How to Contribute](https://github.com/eclipse/che/wiki/How-To-Contribute). It covers:
- [Submitting bugs](https://github.com/eclipse/che/wiki/Submitting-Bugs-and-Suggestions)
- [Contributor license agreement](https://github.com/eclipse/che/wiki/Eclipse-Contributor-Agreement)


The `che` repository is where we do development and there are many ways you can participate, for example:

- [Submit bugs and feature requests](https://github.com/eclipse/che/issues) and help us verify them
- Review [source code changes](https://github.com/eclipse/che/pulls)
- [Improve docs](https://github.com/eclipse/che-docs)


### Feedback
* **Support:** You can ask questions, report bugs, and request features using [GitHub issues](https://github.com/eclipse/che/issues).
* **Public Chat:** Join the public [eclipse-che](https://mattermost.eclipse.org/eclipse/channels/eclipse-che) Mattermost channel to discuss with community and contributors.
* **Roadmap:** We maintain [the roadmap](https://github.com/eclipse/che/wiki/Roadmap) on the wiki. 
* **Weekly Meetings:** Join us in our [Che community meeting](https://github.com/eclipse/che/wiki/Che-Dev-Meetings) every second monday.

### License
Che is open sourced under the Eclipse Public License 2.0.

### Roadmap and Community Meetings
We publish the [Che roadmap](https://github.com/eclipse/che/wiki/Roadmap) in the open and welcome anyone to join our [community meetings](https://github.com/eclipse/che/wiki/Che-Dev-Meetings). We love to hear from users and developers!
