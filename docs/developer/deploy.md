# 手动部署 FlyDog SDR

某些 Raspberry Pi 上可能已运行有其他重要业务，故重新为 Raspberry Pi 刷写 FlyDog SDR Project 所提供的基础镜像，并再次配置其他业务已不现实。所以 FlyDog SDR Project 提供在现有系统上部署 FlyDog SDR 的方案。

经过测试，已知该方案可运行于以下针对树莓派的 Linux 发行版。

* CentOS
* Raspbian
* Raspberry Pi OS
* Ubuntu

## 启用 I2C 和 SPI

在 `/boot/config.txt` 中启用 I2C 和 SPI。

```
[fdsdr@centos ~]$ echo -e "dtparam=i2c_arm=on\ndtparam=spi=on" | sudo tee -a /boot/config.txt

```

让 I2C 模块于系统启动时一并加载。

```
[fdsdr@centos ~]$ echo -e "i2c-dev" | sudo tee -a /etc/modules-load.d/modules.conf

```

加载 I2C 模块。

```
[fdsdr@centos ~]$ sudo dtparam i2c_arm=on
[fdsdr@centos ~]$ sudo modprobe i2c-bcm2708

```

重启以应用配置。

```
[fdsdr@centos ~]$ sudo reboot

```

## 安装 Docker

使用 Docker 相关安装脚本实现自动化安装。

```
[fdsdr@centos ~]$ sudo curl -o /tmp/get-docker.sh -fsSL get.docker.com
[fdsdr@centos ~]$ sudo chmod +x /tmp/get-docker.sh
[fdsdr@centos ~]$ sudo sh -c /tmp/get-docker.sh

```

中国大陆用户，在安装 Docker 时，可以加上 `--mirror AzureChinaCloud` 参数，使用 AzureChinaCloud 镜像进行安装。

```
[fdsdr@centos ~]$ sudo sh -c /tmp/get-docker.sh --mirror AzureChinaCloud

```

安装完成后，将当前用户添加至 Docker 用户组 `docker`，然后重启。

```
[fdsdr@centos ~]$ sudo usermod -aG docker ${USER}
[fdsdr@centos ~]$ sudo systemctl enable docker
[fdsdr@centos ~]$ sudo reboot

```

## 部署主程序

创建一个 Docker 容器网桥（历史遗留问题）。

```
[fdsdr@centos ~]$ docker network create -d bridge flydog-sdr

```

拉取 FlyDog SDR 预编译镜像并部署。

```
[fdsdr@centos ~]$ docker run -d \
             --name flydog-sdr \
             --network host \
             --privileged \
             --restart always \
             --volume kiwi.config:/root/kiwi.config \
             registry.cn-shanghai.aliyuncs.com/flydog-sdr/flydog-sdr:latest

```

## 部署升级模块

FlyDog SDR Project 将升级模块与主程序分离以减小发行版大小，所以升级模块需要另行部署。

```
[fdsdr@centos ~]$ docker run -d \
             --name admin \
             --network flydog-sdr \
             --publish 3708:3708 \
             --restart always \
             --volume /usr/bin/docker:/usr/bin/docker \
             --volume /var/run/docker.sock:/var/run/docker.sock \
             --volume kiwi.config:/etc/kiwi.config \
             registry.cn-shanghai.aliyuncs.com/flydog-sdr/admin:latest

```


