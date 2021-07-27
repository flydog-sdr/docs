# Build a Docker Image

FlyDog SDR runs in Docker, so a Docker image of FlyDog SDR needs to be built.

Currently, there are two ways to build a Docker image.

* Build the image cross-platform via Docker Buildx
* Build directly on the Raspberry Pi

The following sections describe each of these build methods in turn.

## Setup the Development Environment

### Docker Buildx

Docker Buildx is a Docker CLI plugin that extends the `docker` command to support the functionality provided by Moby BuildKit, providing users with the same experience as `docker build` and adding many new features.

Moby BuildKit is the next generation of image building components, and with its ability to build images across platforms, this method can be used to build Docker images of FlyDog SDR on Linux, macOS and Windows systems.

Note that this feature is only available for Docker v19.03+.

To use Docker Buildx with Docker already installed, you need to temporarily enable the Docker experimental feature.

On Linux or macOS, use the `export` command to set the environment variables.

```
[fdsdr@flydog-sdr-project ~]$ export DOCKER_CLI_EXPERIMENTAL=enabled

```

For Windows, use the `set` command in Windows PowerShell to enable Docker experimental features.

```
PS C:\Users\FLYDOG> set $env:DOCKER_CLI_EXPERIMENTAL="enabled"

```

Then verify that Docker Buildx is successfully enabled.

```
[fdsdr@flydog-sdr-project ~]$ docker buildx version
github.com/docker/buildx v0.5.1-docker 11057da37336192bfc57d81e02359ba7ba848e4a

```

Create a new Builder instance called `arm_builder`.

```
[fdsdr@flydog-sdr-project ~]$ docker buildx create --name arm_builder --driver docker-container

```

Choose to use the newly created Builder instance.

```
[fdsdr@flydog-sdr-project ~]$ docker buildx use arm_builder

```

Check for an existing Builder instance, `arm_builder` should be included in the returned results.

```
[fdsdr@flydog-sdr-project ~]$ docker buildx ls
NAME/NODE DRIVER/ENDPOINT STATUS PLATFORMS
arm_builder * docker-container
  arm_builder0 unix:///var/run/docker.sock inactive
default docker
  default default running linux/amd64, linux/386

```

Docker does not support building ARM architecture Docker images under the `linux/amd64` system architecture by default, so you need to import `binfmt_misc`.

This setting is not required for Windows installations of Docker.

```
[fdsdr@flydog-sdr-project ~]$ docker run --rm --privileged tonistiigi/binfmt --install all

```

### Raspberry Pi

Do a check on the processor architecture to ensure that the architecture is `armv7l`.

```
[fdsdr@flydog-sdr-project: ~]$ uname -m
armv7l

```

Automate the deployment of your development environment using Docker-related installation scripts.

```
[fdsdr@flydog-sdr-project ~]$ sudo curl -o /tmp/get-docker.sh -fsSL get.docker.com
[fdsdr@flydog-sdr-project ~]$ sudo chmod +x /tmp/get-docker.sh
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh

```

For mainland China developers, you can add the `-mirror AzureChinaCloud` parameter when installing Docker, and use the AzureChinaCloud mirror for installation.

```
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh --mirror AzureChinaCloud

```

Once the installation is complete, add the current user to the Docker usergroup `docker` and reboot.

```
[fdsdr@flydog-sdr-project ~]$ sudo usermod -aG docker ${USER}
[fdsdr@flydog-sdr-project ~]$ sudo systemctl enable docker
[fdsdr@flydog-sdr-project ~]$ sudo reboot

```

## Pull the Dockerfile

Make sure the development machine has Git installed and pull the Dockerfiles needed to build FlyDog SDR from GitHub.

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com/flydog-sdr/docker-builder

```

For mainland Chinese developers, you may need to replace `github.com` with its mirror `github.com.cnpmjs.org` to speed up the pull.

Go to the `docker-builder/flydog-sdr` directory and change the relevant environment variables in the `Dockerfile` as appropriate.

```
[fdsdr@flydog-sdr-project ~]$ cd docker-builder/flydog-sdr
[fdsdr@flydog-sdr-project flydog-sdr]$ vim Dockerfile

```

The relevant variables are described below.

| ENV          | Description                             |
| :----------- | :-------------------------------------- |
| `APT_MIRROR` | Debian mirror                           |
| `GIT_BRANCH` | Specify a Git branch                    |
| `GIT_HOST`   | Specify the Git hostname                |
| `GIT_USER`   | Specify the username for the repository |
| `REPO_NANE`  | Specify the repository name             |

## Build the Image

### Docker Buildx

Use the `docker buildx` command to start the build process.

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker buildx build --platform linux/arm/v7 -t flydog-sdr -o type=docker -f . /Dockerfile .

```

After about 20 minutes, the build is complete and the image you just created is visible in the Docker image list.

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker images
REPOSITORY TAG IMAGE ID CREATED SIZE

flydog-sdr latest 7865b2e324eb 22 hours ago 252MB

```

### Raspberry Pi

Start the build process with the `docker build` command.

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker build -t flydog-sdr .

```

After about 20 minutes, the build is complete and you can see the image you just created in the Docker image list.

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker images
REPOSITORY TAG IMAGE ID CREATED SIZE

flydog-sdr latest 7865b2e324eb 22 hours ago 252MB

```


