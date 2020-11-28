# 准备工作

## 采购清单

在使用 FlyDog SDR 前，需要准备一些组件。

 - Raspberry Pi 或 Orange Pi 本体，可用型号参见后文
 - GPS 天线，用于获取时间、校准频率
 - 推荐使用 5.1V 3A 对开发板进行供电，以保证 FlyDog SDR 能够稳定运行
 - Class 10 级别，容量为 8GB 以上的 Micro SD 卡，保证系统的流畅度
 - Micro SD 读卡器，用于向 SD 卡写入镜像
 - 网线用于将开发板接入网络
 - GPS 天线以校准频率

此外，强烈建议使用以下组件，但它们不是必需的。

 - 为开发板加装外壳，保护其免受短路
 - 在 FlyDog SDR 和树莓派上加装散热片，延长使用寿命
 - 若所处地区系雷电频繁地区，请考虑使用 800J 浪涌保护器以保护开发板免遭电涌损坏

## 向 SD 卡写入镜像

根据操作系统的不同，向 SD 卡写入镜像的方式亦有所不同。

在下面的教程中，镜像名为 `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz`。

### Windows

 1. 下载由树莓派提供的刷写工具 [Raspberry Pi Imager](https://mirrors.bfsu.edu.cn/raspberry-pi-os-images/imager/imager.exe)，该工具亦可为 Orange Pi 等开发板刷写系统。
 2. 安装后运行 Raspberry Pi Imager，在主界面按下 CHOOSE OS，然后选择 Use custom，导入将要刷写到 SD 卡的文件 `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz`。
 3. 选择好目标 SD 卡后，按下 WRITE，等待镜像刷写完成即可。
 4. 取出 SD 卡，插入开发板卡槽。

### macOS

macOS 步骤与 Windows 大致相同。

 1. 下载由树莓派提供的刷写工具 [Raspberry Pi Imager](https://mirrors.bfsu.edu.cn/raspberry-pi-os-images/imager/imager.dmg)，该工具亦可为 Orange Pi 等开发板刷写系统。
 2. 安装后运行 Raspberry Pi Imager，在主界面按下 CHOOSE OS，然后选择 Use custom，导入将要刷写到 SD 卡的文件 `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz`。
 3. 选择好目标 SD 卡后，按下 WRITE，等待镜像刷写完成即可。
 4. 取出 SD 卡，插入开发板卡槽。

### Linux

以 Fedora Linux 为例。

 1. 打开命令行，在用户目录下将 `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz` 解压，得到 `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img`
```
[dev@example ~]$ tar -xvf FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz
FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img

[dev@example ~]$ ls
FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img
```
 2. 获取到 SD 卡的盘符后并卸载后，用 `dd` 命令将镜像写入 SD 卡。
```
[dev@example ~]$ df
Filesystem           1K-blocks      Used Available Use% Mounted on
devtmpfs          224784       0    224784   0% /dev
tmpfs             248968      28    248940   1% /dev/shm
tmpfs             248968   33284    215684  14% /run
tmpfs             248968       0    248968   0% /sys/fs/cgroup
/dev/xvda1      20960236 7359508  13600728  36% /
tmpfs              49796       0     49796   0% /run/user/0
/dev/sda1      15643576  4432804  10396388  30% /mnt/sda1
[dev@example ~]$ sudo umount /mnt/sda1
[dev@example ~]$ sudo dd if=FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img of=/dev/sdb bs=4M &
[dev@example ~]$ sudo watch kill -USR1 $(pgrep ^dd)
```
 3. 在命令执行完成后，用 `sync` 检验文件是否已经全部写入 SD 卡。
```
[dev@example ~]$ sync
```
 4. 取出 SD 卡，插入开发板卡槽。
