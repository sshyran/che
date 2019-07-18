<div id="header" align="center">

[![Eclipse Che - Eclipse Next-Generation IDE](https://raw.githubusercontent.com/eclipse/che/assets/eclipseche.png)](
https://www.eclipse.org/che/)

**Next-generation container development platform, developer workspace server and cloud IDE**

[![Eclipse License](https://img.shields.io/badge/license-Eclipse-brightgreen.svg)](https://github.com/codenvy/che/blob/master/LICENSE)
[![Build Status](https://ci.codenvycorp.com/buildStatus/icon?job=che-master-ci)](https://ci.codenvycorp.com/job/che-master-ci)
<a href="https://sonarcloud.io/dashboard?id=org.eclipse.che%3Ache-parent%3Amaster">
<img src="https://sonarcloud.io/images/project_badges/sonarcloud-black.svg" width="94" height="20" href="" />
</a>

*Che is Kubernetes-native and places everything the developer needs into containers in Kube pods including dependencies, embedded containerized runtimes, a web IDE, and project code. This makes workspaces distributed, collaborative, and portable to run anywhere Kubernetes runs ... [Read More](https://www.eclipse.org/che/features/)*

</div>

![Eclipse Che](https://www.eclipse.org/che/images/hero-technology-v2@2x.png "Eclipse Che")

---

**Visit website at: https://www.eclipse.org/che/** and documentation at: https://www.eclipse.org/che/docs

- [**Getting Started**](#getting-started)
- [**Using Eclipse Che**](#using-eclipse-che)
- [**Feedback and Community**](#feedback-and-community)
- [**Contributing**](#contributing)
- [**Roadmap**](#roadmap)
- [**License**](#license)

---

### Getting Started
Here you can find links on how to get started with Eclipse Che:
- [Use Eclipse Che online](https://www.eclipse.org/che/getting-started/cloud/)
- [Run Eclipse Che on your own K8S cluster](https://www.eclipse.org/che/docs/che-7/che-quick-starts.html#running-che-locally_che-quick-starts)


### Using Eclipse Che
Here you can find references to useful documentation and hands-on guides to learn how to get the most of Eclipse Che:
- [Customize Che workspaces for your projects](https://www.eclipse.org/che/docs/che-7/using-developer-environments-workspaces.html#starting-a-workspace-with-a-devfile_making-a-workspace-portable-using-a-devfile)
- [Run VSCode Extensions in Che workspaces (to be provided soon)]()
- [Configure Che for your teams (to be provided soon)]()


### Feedback and Community
We love to hear from users and developers. Here are the various ways to get in touch with us:
* **Support:** You can ask questions, report bugs, and request features using [GitHub issues](https://github.com/eclipse/che/issues).
* **Public Chat:** Join the public [eclipse-che](https://mattermost.eclipse.org/eclipse/channels/eclipse-che) Mattermost channel to discuss with community and contributors.
* **Twitter:** [@eclipse_che](https://twitter.com/eclipse_che)
* **Mailing List:** [che-dev@eclipse.org](https://accounts.eclipse.org/mailing-list/che-dev)
* **Weekly Meetings:** Join us in our [Che community meeting](https://github.com/eclipse/che/wiki/Che-Dev-Meetings) every second monday.


### Contributing
If you are interested in fixing issues and contributing directly to the code base, please see [How to Contribute](https://github.com/eclipse/che/wiki/How-To-Contribute). It covers:
- [Submitting bugs](https://github.com/eclipse/che/wiki/Submitting-Bugs-and-Suggestions)
- [Contributor license agreement](https://github.com/eclipse/che/wiki/Eclipse-Contributor-Agreement)
- Development workflow
   - [Che dashboard (to be provided soon)]()
   - [chectl (to be provided soon)]()
   - [wsmaster (to be provided soon)]()
   - [che-theia](https://github.com/eclipse/che-theia/blob/master/CONTRIBUTING.md)
- Review [source code changes](https://github.com/eclipse/che/pulls)
- :pencil:[Improve docs](https://github.com/eclipse/che-docs)


#### New contributors
The labels [good first issue](https://github.com/eclipse/che/labels/good%20first%20issue)
and [help wanted](https://github.com/eclipse/che/labels/help%20wanted) are for issues and pull request that new contributors can start with. They will appear in the https://github.com/eclipse/che/contribute page.


#### Architecture and Repositories
[Get familiar with Che architecture.(to be provided soon)]()

Che is composed of multiple sub projects. For each projects we provide a *CONTRIBUTE.md* file describing how to setup the development environment to start your contribution. Most of the time, we encourage you to use Che to contribute to Che.

- [eclipse/che](https://github.com/eclipse/che) (this repository) is the main project repository that contains:
   - Che master: orchestrates the che workspaces with devfiles on Kubernetes
   - Che dashboard: UI to manage workspaces, devfiles, etc.
   - Che main container images: source code, dockerfiles to build our main docker images. Note that Che-theia related dockerfiles are located in che-theia repo.
   - End2end test: source code of our integration tests.
- [che-theia](https://github.com/eclipse/che-theia): Theia IDE integrated in Che.
- [chectl](https://github.com/che-incubator/chectl): The CLI to install Che, create and start workspaces and devfiles
- [che-plugin-registry](https://github.com/eclipse/che-plugin-registry): The default set of che plugins (vscode extension + containers) or editors that could be installed on any Che workspaces.
- [che-devfile-registry](https://github.com/eclipse/che-devfile-registry): The default set of devfiles that would be made available on the Che dashboard stacks.
- [redhat-developer/devfile](https://github.com/redhat-developer/devfile): Contribute to the devfile documentation: https://redhat-developer.github.io/devfile/


#### Extending Eclipse Che
- [Add a new language support. (to be provided soon)]()
- [Package your favorite VSCode extensions and make them available in Che.(to be provided soon)]()
- [Write your own VSCode extension that runs on a dedicated side car container.(to be provided soon)]()
- [Build and package your custom Che-Theia editor with your extensions and plugins.(to be provided soon)]()

### Roadmap
We maintain the [Che roadmap](https://github.com/eclipse/che/wiki/Roadmap) in the open way. We welcome anyone to ask question and contribute to the roadmap by joining our [community meetings](https://github.com/eclipse/che/wiki/Che-Dev-Meetings).


### License
Che is open sourced under the Eclipse Public License 2.0.
