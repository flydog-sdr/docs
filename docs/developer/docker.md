# 构建 Docker 镜像

FlyDog SDR 在 Docker 中运行，所以需要构建 Docker 镜像。

## 搭建开发环境

要构建用于 FlyDog SDR 的 Docker 镜像，需要在 `armv7l` 处理器架构的环境下进行操作，或是使用 Docker Buildx 进行跨平台构建（不推荐，且目前需要开启 Docker 实验特性）。

### 安装 Docker

对处理器架构进行检查，架构需要为 `armv7l`。

```
[fdsdr@flydog-sdr-project: ~]$ uname -m
armv7l
```

使用 Docker 相关安装脚本实现自动化安装。

```
[fdsdr@flydog-sdr-project ~]$ sudo curl -o /tmp/get-docker.sh https://get.docker.com
[fdsdr@flydog-sdr-project ~]$ sudo chmod +x /tmp/get-docker.sh
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh
```

对于中国大陆，在安装 Docker 时，可以加上 `--mirror Aliyun` 参数，使用 Aliyun 镜像进行安装。

```
[fdsdr@flydog-sdr-project ~]$ sudo sh -c /tmp/get-docker.sh --mirror Aliyun
```

安装完成后，将当前用户添加至 Docker 用户组 `docker`，然后重启。

```
[fdsdr@flydog-sdr-project ~]$ sudo usermod -aG docker ${USER}
[fdsdr@flydog-sdr-project ~]$ sudo systemctl enable docker
[fdsdr@flydog-sdr-project ~]$ sudo reboot
```

### 拉取 Docker 基础镜像

FlyDog SDR 使用 Bebian Buster 作为基础镜像进行构建。

从 DockerHub 拉取 `debian:buster-slim`。

```
[fdsdr@flydog-sdr-project ~]$ docker pull debian:buster-slim
```

对于中国大陆，在拉取基础镜像时，可以使用 Aliyun 的 Docker 镜像加速器。

```
[fdsdr@flydog-sdr-project ~]$ docker pull flydog-sdr.mirror.aliyuncs.com/library/debian:buster-slim
[fdsdr@flydog-sdr-project ~]$ docker tag flydog-sdr.mirror.aliyuncs.com/library/debian:buster-slim debian:buster-slim
[fdsdr@flydog-sdr-project ~]$ docker image rm flydog-sdr.mirror.aliyuncs.com/library/debian:buster-slim
```

## 执行构建

使用 Git 获取 FlyDog SDR 的 Dockerfile。

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com/flydog-sdr/docker-builder
```

对于中国大陆，可以使用 GitHub 镜像（github.com.cnpmjs.org）进行拉取。

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com.cnpmjs.org/flydog-sdr/docker-builder
```

进入 `flydog-sdr` 目录，对 Dockerfile 中相关环境变量酌情修改。

```
[fdsdr@flydog-sdr-project ~]$ cd docker-builder/flydog-sdr
[fdsdr@flydog-sdr-project flydog-sdr]$ vim Dockerfile
```

| 变量 | 说明 |
| :--- | :--- |
| `GIT_URL` | 指定 GitHub 域名，针对中国大陆加快构建速度 |
| `BRANCH` | 指定 Git 分支 |
| `REPO` | 指定专案名称 |

修改完成后，开始构建主程序，大约 15 分钟即可完成构建。

```
[fdsdr@flydog-sdr-project flydog-sdr]$ docker build --no-cache -t flydog-sdr:latest .
```
