# Build a Docker Image

FlyDog SDR runs in Docker, so you need to build a Docker image.

## Build the Development Environment

To build a Docker image for FlyDog SDR, you will need to operate in an `armv7l` architecture or use Docker Buildx for cross-platform builds (not recommended and currently requires Docker experimental features to be enabled).

### Installing Docker

The processor architecture is checked and the architecture needs to be `armv7l`.

```
[fdsdr@flydog-sdr-project: ~]$ uname -m
armv7l
```

Automate the installation using Docker-related installation scripts.

```
[fdsdr@flydog-sdr-project ~]$ sudo curl -o /tmp/get-docker.sh https://get.docker.com
[fdsdr@flydog-sdr-project ~]$ sudo chmod +x /tmp/get-docker.sh
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh
```

For mainland China, you can add the `-mirror Aliyun` parameter when installing Docker, and use the Aliyun image for installation.

```
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh --mirror Aliyun
```

Once the installation is complete, add the current user to the Docker usergroup `docker` and reboot.

```
[fdsdr@flydog-sdr-project ~]$ sudo usermod -aG docker ${USER}
[fdsdr@flydog-sdr-project ~]$ sudo systemctl enable docker
[fdsdr@flydog-sdr-project ~]$ sudo reboot
```

### Pulling Base Images

FlyDog SDR is built using Bebian Buster as the base image.

Pull `debian:buster-slim` from DockerHub.

```
[fdsdr@flydog-sdr-project ~]$ docker pull debian:buster-slim
```

For mainland China, you can use Aliyun's Docker image accelerator when pulling base images.

```
[fdsdr@flydog-sdr-project ~]$ docker pull flydog-sdr.mirror.aliyuncs.com/library/debian:buster-slim
[fdsdr@flydog-sdr-project ~]$ docker tag flydog-sdr.mirror.aliyuncs.com/library/debian:cluster-slim debian:cluster-slim
[fdsdr@flydog-sdr-project ~]$ docker image rm flydog-sdr.mirror.aliyuncs.com/library/debian:cluster-slim
```

## Build

Use Git to get the Dockerfile for FlyDog SDR.

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com/flydog-sdr/docker-builder
```

For mainland China, you can use the GitHub mirror (github.com.cnpmjs.org) to pull it.

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com.cnpmjs.org/flydog-sdr/docker-builder
```

Go to the `flydog-sdr` directory and modify the relevant environment variables in the Dockerfile as appropriate.

```
[fdsdr@flydog-sdr-project ~]$ cd docker-builder/flydog-sdr
[fdsdr@flydog-sdr-project flydog-sdr]$ vim Dockerfile
```

| ENV | Description |
| :--- | :--- |
| `GIT_BRANCH` | Specify a Git branch |
| `GIT_HOST` | Specify the Git hostname |
| `GIT_USER` | Specify the username for the repository |
| `REPO_NANE` | Specify the repository name |

When you're done, start building the main application and it will take about 15 minutes to complete the build.

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker build --no-cache -t flydog-sdr:latest .
```