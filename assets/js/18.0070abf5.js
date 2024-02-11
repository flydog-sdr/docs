(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{379:function(e,t,r){"use strict";r.r(t);var a=r(18),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"build-a-docker-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-a-docker-image"}},[e._v("#")]),e._v(" Build a Docker Image")]),e._v(" "),r("p",[e._v("FlyDog SDR runs in Docker, so a Docker image of FlyDog SDR needs to be built.")]),e._v(" "),r("p",[e._v("Currently, there are two ways to build a Docker image.")]),e._v(" "),r("ul",[r("li",[e._v("Build the image cross-platform via Docker Buildx")]),e._v(" "),r("li",[e._v("Build directly on the Raspberry Pi")])]),e._v(" "),r("p",[e._v("The following sections describe each of these build methods in turn.")]),e._v(" "),r("h2",{attrs:{id:"setup-the-development-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-development-environment"}},[e._v("#")]),e._v(" Setup the Development Environment")]),e._v(" "),r("h3",{attrs:{id:"docker-buildx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-buildx"}},[e._v("#")]),e._v(" Docker Buildx")]),e._v(" "),r("p",[e._v("Docker Buildx is a Docker CLI plugin that extends the "),r("code",[e._v("docker")]),e._v(" command to support the functionality provided by Moby BuildKit, providing users with the same experience as "),r("code",[e._v("docker build")]),e._v(" and adding many new features.")]),e._v(" "),r("p",[e._v("Moby BuildKit is the next generation of image building components, and with its ability to build images across platforms, this method can be used to build Docker images of FlyDog SDR on Linux, macOS and Windows systems.")]),e._v(" "),r("p",[e._v("Note that this feature is only available for Docker v19.03+.")]),e._v(" "),r("p",[e._v("To use Docker Buildx with Docker already installed, you need to temporarily enable the Docker experimental feature.")]),e._v(" "),r("p",[e._v("On Linux or macOS, use the "),r("code",[e._v("export")]),e._v(" command to set the environment variables.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ export DOCKER_CLI_EXPERIMENTAL=enabled\n\n")])])]),r("p",[e._v("For Windows, use the "),r("code",[e._v("set")]),e._v(" command in Windows PowerShell to enable Docker experimental features.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('PS C:\\Users\\FLYDOG> set $env:DOCKER_CLI_EXPERIMENTAL="enabled"\n\n')])])]),r("p",[e._v("Then verify that Docker Buildx is successfully enabled.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ docker buildx version\ngithub.com/docker/buildx v0.5.1-docker 11057da37336192bfc57d81e02359ba7ba848e4a\n\n")])])]),r("p",[e._v("Create a new Builder instance called "),r("code",[e._v("arm_builder")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ docker buildx create --name arm_builder --driver docker-container\n\n")])])]),r("p",[e._v("Choose to use the newly created Builder instance.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ docker buildx use arm_builder\n\n")])])]),r("p",[e._v("Check for an existing Builder instance, "),r("code",[e._v("arm_builder")]),e._v(" should be included in the returned results.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ docker buildx ls\nNAME/NODE DRIVER/ENDPOINT STATUS PLATFORMS\narm_builder * docker-container\n  arm_builder0 unix:///var/run/docker.sock inactive\ndefault docker\n  default default running linux/amd64, linux/386\n\n")])])]),r("p",[e._v("Docker does not support building ARM architecture Docker images under the "),r("code",[e._v("linux/amd64")]),e._v(" system architecture by default, so you need to import "),r("code",[e._v("binfmt_misc")]),e._v(".")]),e._v(" "),r("p",[e._v("This setting is not required for Windows installations of Docker.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ docker run --rm --privileged tonistiigi/binfmt --install all\n\n")])])]),r("h3",{attrs:{id:"raspberry-pi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi"}},[e._v("#")]),e._v(" Raspberry Pi")]),e._v(" "),r("p",[e._v("Do a check on the processor architecture to ensure that the architecture is "),r("code",[e._v("armv7l")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project: ~]$ uname -m\narmv7l\n\n")])])]),r("p",[e._v("Automate the deployment of your development environment using Docker-related installation scripts.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ sudo curl -o /tmp/get-docker.sh -fsSL get.docker.com\n[fdsdr@flydog-sdr-project ~]$ sudo chmod +x /tmp/get-docker.sh\n[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh\n\n")])])]),r("p",[e._v("For mainland China developers, you can add the "),r("code",[e._v("-mirror AzureChinaCloud")]),e._v(" parameter when installing Docker, and use the AzureChinaCloud mirror for installation.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh --mirror AzureChinaCloud\n\n")])])]),r("p",[e._v("Once the installation is complete, add the current user to the Docker usergroup "),r("code",[e._v("docker")]),e._v(" and reboot.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ sudo usermod -aG docker ${USER}\n[fdsdr@flydog-sdr-project ~]$ sudo systemctl enable docker\n[fdsdr@flydog-sdr-project ~]$ sudo reboot\n\n")])])]),r("h2",{attrs:{id:"pull-the-dockerfile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-the-dockerfile"}},[e._v("#")]),e._v(" Pull the Dockerfile")]),e._v(" "),r("p",[e._v("Make sure the development machine has Git installed and pull the Dockerfiles needed to build FlyDog SDR from GitHub.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ git clone https://github.com/flydog-sdr/docker-builder\n\n")])])]),r("p",[e._v("For mainland Chinese developers, you may need to replace "),r("code",[e._v("github.com")]),e._v(" with its mirror "),r("code",[e._v("github.com.cnpmjs.org")]),e._v(" to speed up the pull.")]),e._v(" "),r("p",[e._v("Go to the "),r("code",[e._v("docker-builder/flydog-sdr")]),e._v(" directory and change the relevant environment variables in the "),r("code",[e._v("Dockerfile")]),e._v(" as appropriate.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project ~]$ cd docker-builder/flydog-sdr\n[fdsdr@flydog-sdr-project flydog-sdr]$ vim Dockerfile\n\n")])])]),r("p",[e._v("The relevant variables are described below.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("ENV")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("APT_MIRROR")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Debian mirror")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GIT_BRANCH")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Specify a Git branch")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GIT_HOST")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Specify the Git hostname")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("GIT_USER")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Specify the username for the repository")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("code",[e._v("REPO_NANE")])]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Specify the repository name")])])])]),e._v(" "),r("h2",{attrs:{id:"build-the-image"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-the-image"}},[e._v("#")]),e._v(" Build the Image")]),e._v(" "),r("h3",{attrs:{id:"docker-buildx-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-buildx-2"}},[e._v("#")]),e._v(" Docker Buildx")]),e._v(" "),r("p",[e._v("Use the "),r("code",[e._v("docker buildx")]),e._v(" command to start the build process.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project flydog-sdr]$ docker buildx build --platform linux/arm/v7 -t flydog-sdr -o type=docker -f . /Dockerfile .\n\n")])])]),r("p",[e._v("After about 20 minutes, the build is complete and the image you just created is visible in the Docker image list.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project flydog-sdr]$ docker images\nREPOSITORY TAG IMAGE ID CREATED SIZE\n\nflydog-sdr latest 7865b2e324eb 22 hours ago 252MB\n\n")])])]),r("h3",{attrs:{id:"raspberry-pi-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-2"}},[e._v("#")]),e._v(" Raspberry Pi")]),e._v(" "),r("p",[e._v("Start the build process with the "),r("code",[e._v("docker build")]),e._v(" command.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project flydog-sdr]$ docker build -t flydog-sdr .\n\n")])])]),r("p",[e._v("After about 20 minutes, the build is complete and you can see the image you just created in the Docker image list.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[fdsdr@flydog-sdr-project flydog-sdr]$ docker images\nREPOSITORY TAG IMAGE ID CREATED SIZE\n\nflydog-sdr latest 7865b2e324eb 22 hours ago 252MB\n\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);