# 构建 Docker 镜像

FlyDog SDR 在 Docker 中运行，所以需要构建 FlyDog SDR 的 Docker 镜像。

目前，用户可通过两种方式构建 Docker 镜像。

* 通过 Docker Buildx 跨平台构建镜像
* 通过树莓派上直接构建

下述内容将依次介绍这两种构建方式。

## 搭建开发环境

### 通过 Docker Buildx

Docker Buildx 是一个 Docker CLI 插件，扩展了 `docker` 命令，支持 Moby BuildKit 提供的功能，为用户提供了与 `docker build` 相同的体验，并增加了许多新功能。

Moby BuildKit 是下一代的镜像构建组件，利用其可以跨平台构建镜像的特性，本方法可以用于在 Linux、macOS 和 Windows 系统下构建 FlyDog SDR 的 Docker 镜像。

需要注意，该功能仅适用于 Docker v19.03+ 版本。

在已经安装了 Docker 的情况下，要使用 Docker Buildx，需要临时开启 Docker 实验特性。

Linux 或 macOS 下，使用 `export` 命令设置环境变量。

```
[fdsdr@flydog-sdr-project ~]$ export DOCKER_CLI_EXPERIMENTAL=enabled

```

对于 Windows 系统，在 Windows PowerShell 中使用 `set` 命令打开 Docker 实验特性。

```
PS C:\Users\FLYDOG> set $env:DOCKER_CLI_EXPERIMENTAL="enabled"

```

然后检验 Docker Buildx 是否成功启用。

```
[fdsdr@flydog-sdr-project ~]$ docker buildx version
github.com/docker/buildx v0.5.1-docker 11057da37336192bfc57d81e02359ba7ba848e4a

```

新建一个 Builder 实例，名为 `arm_builder`。

```
[fdsdr@flydog-sdr-project ~]$ docker buildx create --name arm_builder --driver docker-container

```

指定使用新建的 Builder 实例。

```
[fdsdr@flydog-sdr-project ~]$ docker buildx use arm_builder

```

检查已有的 Builder 实例，`arm_builder` 应当包含于返回的结果中。

```
[fdsdr@flydog-sdr-project ~]$ docker buildx ls
NAME/NODE      DRIVER/ENDPOINT             STATUS   PLATFORMS
arm_builder *  docker-container
  arm_builder0 unix:///var/run/docker.sock inactive
default        docker
  default      default                     running  linux/amd64, linux/386

```

Docker 在 `linux/amd64` 系统架构下默认不支持构建 ARM 架构 Docker 镜像，因此需导入 `binfmt_misc`。

Windows 下安装的 Docker 无需进行此项设置。

```
[fdsdr@flydog-sdr-project ~]$ docker run --rm --privileged tonistiigi/binfmt --install all

```

### 通过树莓派

对处理器架构进行检查，确保架构为 `armv7l`。

```
[fdsdr@flydog-sdr-project: ~]$ uname -m
armv7l

```

使用 Docker 相关安装脚本实现自动化部署开发环境。

```
[fdsdr@flydog-sdr-project ~]$ sudo curl -o /tmp/get-docker.sh -fsSL get.docker.com
[fdsdr@flydog-sdr-project ~]$ sudo chmod +x /tmp/get-docker.sh
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh

```

对于中国大陆开发者，在安装 Docker 时，可以加上 `--mirror AzureChinaCloud` 参数，使用 AzureChinaCloud 镜像进行安装。

```
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh --mirror AzureChinaCloud

```

安装完成后，将当前用户添加至 Docker 用户组 `docker`，然后重启。

```
[fdsdr@flydog-sdr-project ~]$ sudo usermod -aG docker ${USER}
[fdsdr@flydog-sdr-project ~]$ sudo systemctl enable docker
[fdsdr@flydog-sdr-project ~]$ sudo reboot

```

## 拉取 Dockerfile

确保开发机器已经安装 Git，并从 GitHub 拉取构建 FlyDog SDR 所需的 Dockerfiles。

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com/flydog-sdr/docker-builder

```

对于中国大陆开发者，可能需要将 `github.com` 替换为其镜像地址 `github.com.cnpmjs.org`，以加速拉取速度。

进入 `docker-builder/flydog-sdr` 目录，对 `Dockerfile` 中相关环境变量酌情修改。

```
[fdsdr@flydog-sdr-project ~]$ cd docker-builder/flydog-sdr
[fdsdr@flydog-sdr-project flydog-sdr]$ vim Dockerfile

```

相关变量说明如下。

| 变量           | 说明                        |
| :----------- | :------------------------ |
| `APT_MIRROR` | Debian 镜像源                |
| `GIT_BRANCH` | 指定 Git 分支                 |
| `GIT_HOST`   | 指定 GitHub 域名，针对中国大陆加快构建速度 |
| `GIT_USER`   | 指定要拉取之专案所对应的用户名           |
| `REPO_NANE`  | 指定专案名称                    |

## 执行构建

### 通过 Docker Buildx

使用 `docker buildx` 命令启动构建进程。

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker buildx build --platform linux/arm/v7 -t flydog-sdr -o type=docker -f ./Dockerfile .

```

大约 20 分钟后，即可完成构建，Docker 镜像列表中亦可看到刚刚生成的镜像。

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker images
REPOSITORY                                                TAG        IMAGE ID       CREATED        SIZE

flydog-sdr                                                latest     7865b2e324eb   22 hours ago   252MB

```

### 通过树莓派

使用 `docker build` 命令启动构建进程。

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker build -t flydog-sdr .

```

大约 20 分钟后，即可完成构建，Docker 镜像列表中亦可看到刚刚生成的镜像。

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker images
REPOSITORY                                                TAG        IMAGE ID       CREATED        SIZE

flydog-sdr                                                latest     7865b2e324eb   22 hours ago   252MB

```


