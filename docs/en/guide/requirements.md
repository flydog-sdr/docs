# Requirements

## Shopping List

A few components are required before you can use FlyDog SDR.

 - Raspberry Pi itself, see later for available models
 - 5.1V 3A power supply to the development board is recommended to ensure stable operation of the FlyDog SDR
 - Class 10 Micro SD card with 8GB or more capacity to ensure smooth system performance
 - Micro SD card reader for writing images to SD cards
 - Network cables are used to connect development boards to the network
 - GPS Antenna for frequency calibration.

In addition, the following components are highly recommended, but they are not required.

 - Adding an enclosure to the development board to protect it from short circuits
 - Add heat sinks to the FlyDog SDR and Raspberry Pie for longer life
 - If you are in a lightning-prone area, consider using an 800J surge protector to protect your development board from surge damage.

## Writing images to the SD card

The way to write an image to the SD card varies depending on the operating system.

In the following tutorial, the image will be named `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz`.

### Windows

 1. download the [Raspberry Pi Imager](https://mirrors.bfsu.edu.cn/raspberry-pi-os-images/imager/imager.exe) provided by Raspberry Pi, which can also be used for development of the Orange Pi, etc. The Raspberry Pi Imager will be installed.
 2. After installation, run Raspberry Pi Imager, click CHOOSE OS in the main interface, and then select Use custom to import the file `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz` that will be flushed to the SD card.
 3. After selecting the target SD card, press WRITE and wait for the image to be written.
 4. Remove the SD card, insert the development board card slot.

### macOS

The macOS procedure is essentially the same as for Windows.

 1. download the [Raspberry Pi Imager](https://mirrors.bfsu.edu.cn/raspberry-pi-os-images/imager/imager.dmg) provided by Raspberry Pi, which can also be used for development of the Orange Pi, etc. The Raspberry Pi Imager will be installed.
 2. After installation, run Raspberry Pi Imager, click CHOOSE OS in the main interface, and then select Use custom to import the file `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz` that will be flushed to the SD card.
 3. After selecting the target SD card, press WRITE and wait for the image to be written.
 4. Remove the SD card, insert the development board card slot.

### Linux

Take Fedora Linux as an example.

 1. open the command line, unzip `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz` in the user directory, and get `FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img`.
```
[dev@example ~]$ tar -xvf FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz
FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img

[dev@example ~]$ ls
FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img
```
 2. After getting the drive letter of the SD card and uninstalling it, use the `dd` command to write the image to the SD card.
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
 3. After the command is executed, use `sync` to verify that the file has been fully written to the SD card.
```
[dev@example ~]$ sync
```
 4. Remove the SD card and insert it into the card slot on the development board.
