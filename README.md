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
We love to hear from users and developers, here are the various ways to get in touch with us:
* **Support:** You can ask questions, report bugs, and request features using [GitHub issues](https://github.com/eclipse/che/issues).
* **Public Chat:** Join the public [eclipse-che](https://mattermost.eclipse.org/eclipse/channels/eclipse-che) Mattermost channel to discuss with community and contributors.
* **Twitter:** 
* **Mailing List:** 
* **Weekly Meetings:** Join us in our [Che community meeting](https://github.com/eclipse/che/wiki/Che-Dev-Meetings) every second monday. 


### Contributing
If you are interested in fixing issues and contributing directly to the code base, please see [How to Contribute](https://github.com/eclipse/che/wiki/How-To-Contribute). It covers:
- [Submitting bugs](https://github.com/eclipse/che/wiki/Submitting-Bugs-and-Suggestions)
- [Contributor license agreement](https://github.com/eclipse/che/wiki/Eclipse-Contributor-Agreement)
- [Development workflow]()
- Review [source code changes](https://github.com/eclipse/che/pulls)
- [Improve docs](https://github.com/eclipse/che-docs)


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


#### Extending Eclipse Che
- sample extending use cases : point to doc link


### Roadmap
We maintain the [Che roadmap](https://github.com/eclipse/che/wiki/Roadmap) in the open way. We welcome anyone to ask question and contribute to the roadmap by joining our [community meetings](https://github.com/eclipse/che/wiki/Che-Dev-Meetings).


### License
Che is open sourced under the Eclipse Public License 2.0.
