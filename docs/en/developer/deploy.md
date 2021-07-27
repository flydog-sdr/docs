# Deploy FlyDog SDR manually

Some Raspberry Pi's may already have other important services running on them, so it is no longer practical to rewrite the base image provided by the FlyDog SDR Project for the Raspberry Pi and reconfigure the other services again. The FlyDog SDR Project therefore offers the option of manually deploying FlyDog SDR on an existing system.

After testing, this solution is known to run on the following Linux distributions for the Raspberry Pi.

* CentOS
* Raspbian
* Raspberry Pi OS
* Ubuntu

## Enabling I2C and SPI

Enable I2C and SPI in `/boot/config.txt`.

```
[fdsdr@centos ~]$ echo -e "dtparam=i2c_arm=on\ndtparam=spi=on" | sudo tee -a /boot/config.txt

```

Make I2C module be loaded at system boot time.

```
[fdsdr@centos ~]$ echo -e "i2c-dev" | sudo tee -a /etc/modules-load.d/modules.conf

```

Load the I2C module.

```
[fdsdr@centos ~]$ sudo dtparam i2c_arm=on
[fdsdr@centos ~]$ sudo modprobe i2c-bcm2708

```

Reboot to apply the configuration.

```
[fdsdr@centos ~]$ sudo reboot

```

## Installing Docker

Automate the installation using Docker-related installation scripts.

```
[fdsdr@centos ~]$ sudo curl -o /tmp/get-docker.sh -fsSL get.docker.com
[fdsdr@centos ~]$ sudo chmod +x /tmp/get-docker.sh
[fdsdr@centos ~]$ sudo sh -c /tmp/get-docker.sh

```

For mainland China users, you can add the `-mirror AzureChinaCloud` parameter when installing Docker, and use the AzureChinaCloud image for installation.

```
[fdsdr@centos ~]$ sudo sh -c /tmp/get-docker.sh --mirror AzureChinaCloud

```

Once the installation is complete, add the current user to the Docker usergroup `docker` and reboot.

```
[fdsdr@centos ~]$ sudo usermod -aG docker ${USER}
[fdsdr@centos ~]$ sudo systemctl enable docker
[fdsdr@centos ~]$ sudo reboot

```

## Deploy the Main Application

Create a Docker container network bridge (historical legacy).

```
[fdsdr@centos ~]$ docker network create -d bridge flydog-sdr

```

Pull the FlyDog SDR pre-compiled image and deploy it.

```
[fdsdr@centos ~]$ docker run -d \
             --name flydog-sdr \
             --network host \
             --privileged \
             --restart always \
             --volume kiwi.config:/root/kiwi.config \
             registry.cn-shanghai.aliyuncs.com/flydog-sdr/flydog-sdr:latest

```

## Deploy the Upgrade Module

The FlyDog SDR Project separates the upgrade module from the main application to reduce the size of the distribution, so the upgrade module will need to be deployed separately.

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


