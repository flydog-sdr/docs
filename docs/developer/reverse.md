# 自行构建反向代理服务器

FlyDog SDR Project 为购买了 FlyDog SDR 的用户免费提供反向代理服务，但用户亦可自行构建反向代理服务器。

## 准备和要求

要构建反向代理服务器，用户需要做如下准备。

 - 租用一个云服务器（IP 以 `1.2.3.4` 为例）
 - 购买一个域名（本文以 `example.org` 为例）

此外，对于所租用的云服务器还有如下要求。

 - 该云服务器运行内存不少于 512 MB（可通过配置 Swapfile 扩充运行内存）
 - 该云服务器至少有一个公网 IP 地址
 - 该云服务器有适合的流量配额

在下文中，在云服务器的操作以 CentOS 7 为例。

## 搭建运行环境

通过 SSH 登入云服务器，安装 Docker。

```
[centos@flydog-server ~]$ curl -fsSL get.docker.com | sudo bash
[centos@flydog-server ~]$ sudo usermod -aG docker ${USER}
[centos@flydog-server ~]$ sudo systemctl enable docker
```

安装并启用 Docker 后，重启云服务器。

```
[centos@flydog-server ~]$ sudo reboot
```

重启完成后，通过 SSH 重新连接到服务器，并安装 Git。

```
[centos@flydog-server ~]$ yum install -y git
```

## 拉取配置并构建镜像

将 FlyDog SDR Project 提供的反向代理服务器配置自 GitHub 拉取至用户根目录（该目录及目录名不可改变）。

```
[centos@flydog-server ~]$ git clone https://github.com/flydog-sdr/reverse-proxy ~/reverse-proxy
```

构建 Frps，这是用于和 FlyDog SDR 对接的 NAT 穿透工具的服务器端，构建过程约 3-5 分钟。

```
[centos@flydog-server ~]$ docker build -f ${HOME}/reverse-proxy/docker/frps/Dockerfile -t frps:latest
```

## 自定义配置

在部署应用前，需要修改一些配置，否则应用会报错。

下述命令中，`example.org` 是要写入配置文件的域名。该域名用于 Frp 客户端（Frpc）接入服务器，以及供访客访问 FlyDog SDR 实例。

```
[centos@flydog-server ~]$ sed -i "s/YOUR_DOMAIN/example.org/g" `grep -lr "YOUR_DOMAIN" ${HOME}/reverse-proxy/*`
```

此外，用户需要修改用于 Frp 客户端登入至服务器时的凭据。FlyDog SDR Project 推荐使用 UUID 作为认证凭据。

下述命令中，`c62868fd-5889-4904-8145-d57b5104cb64` 即 Frp 客户端登入所需之凭据。

```
[centos@flydog-server ~]$ sed -i "s/YOUR_UUID/c62868fd-5889-4904-8145-d57b5104cb64/g" ${HOME}/reverse-proxy/config/frp/frps.ini
```

## 部署应用

创建一个 Docker 网桥，用于容器之间的直接通信。

```
[centos@flydog-server ~]$ docker network create -d bridge reverse-proxy
```

首先部署 Frps。

```
[centos@flydog-server ~]$ docker run -d \
 --hostname frps \
 --name frps \
 --network reverse-proxy \
 --restart always \
 --volume ${HOME}/reverse-proxy/config/frp:/etc/frp \
 frps:latest
```

然后部署 PHP。

```
[centos@flydog-server ~]$ docker run -d \
 --hostname php \
 --name php \
 --network reverse-proxy \
 --restart always \
 --volume ${HOME}/reverse-proxy/htdocs:/var/www \
 php:7.4-fpm-alpine
```

最后部署 Nginx。

```
[centos@ip-172-26-19-76 ~]$ docker run -d \
 --hostname nginx \
 --name nginx \
 --network reverse-proxy \
 --publish 80:80 \
 --restart always \
 --volume ${HOME}/reverse-proxy/config/nginx:/etc/nginx \
 --volume ${HOME}/reverse-proxy/htdocs:/var/www \
 --volume /var/log/nginx:/var/log/nginx \
 nginx:stable-alpine
```

检查容器运行状态，此时三个容器都应在正常运行中。

```
[centos@ip-172-26-19-76 ~]$ docker ps
CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS          PORTS                               NAMES
d990b1839f13   php:7.4-fpm-alpine    "docker-php-entrypoi…"   33 seconds ago   Up 33 seconds   9000/tcp                            php
c0a8d3521340   nginx:stable-alpine   "/docker-entrypoint.…"   40 seconds ago   Up 40 seconds   0.0.0.0:80->80/tcp, :::80->80/tcp   nginx
023904ff1bea   frps:latest           "frps -c /etc/frp/fr…"   57 seconds ago   Up 57 seconds                                       frps
```

## 添加域名解析

在域名提供商处，添加两个记录

| 类型 | 名称 | 值 |
| :--- | :--- | :--- |
| A | `@` | `1.2.3.4` |
| A | `*` | `1.2.3.4` |

`@` 代表根域，即 `example.org`；`*` 为通配符，匹配 `*.example.org`。

## 应用该节点

前往 FlyDog SDR 后台管理，转到 Network 标签页，将 Proxy server hostname 表单中的 `p.sdrotg.com` 修改为 `example.org`，并根据系统提示，重启 FlyDog SDR 应用。

![Change proxy server hostname](/developer/reverse_1.png "Change proxy server hostname")

重启完成后，再次进入 FlyDog SDR 后台管理，转到 Connect 标签页，在 Reverse proxy configuration 表单中填入新的反向代理资讯。

按下 Click to (re)register，等待页面返回 Existing account, registration successful，即说明注册成功。

![Reregister](/developer/reverse_2.png "Reregister")

滑动到页面上半部分，再次选中 Reverse Proxy 以更新反向代理服务，并根据系统提示再次重启应用。

重启完成后，即可使用新的地址来访问，如 `flydog.example.com`。
