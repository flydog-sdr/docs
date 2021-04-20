# 准备工作

## 采购清单

在使用 FlyDog SDR 拓展板前，需要准备一些组件。

 - Raspberry Pi 本体
 - 合适的天线以接收无线电信号，可以前往[天线选用指南](https://sdrotg.com/guide/antenna.html)选择购买合适的天线
 - 推荐使用 Raspberry Pi 原装电源进行供电，以保证 FlyDog SDR 拓展板能够稳定运行
 - Class 10 级别，容量为 8GB 以上的 Micro SD 卡，保证系统的流畅度
 - Micro SD 读卡器，用于向 SD 卡写入镜像
 - 网线用于将 Raspberry Pi 接入网络，推荐使用超五类双屏蔽网线以降低干扰

此外，强烈建议使用以下组件，但它们不是必需的。

 - GPS 天线，用于获取时间、校准频率
 - 为开发板加装外壳，保护其免受短路
 - 为 FlyDog SDR 拓展板和 Raspberry Pi 加装散热片，延长使用寿命
 - 若所处地区系雷电频繁地区，请考虑使用 800J 浪涌保护器以保护开发板免遭电涌损坏

## 向 SD 卡写入镜像

前往 [d.sdrotg.com](https://d.sdrotg.com) 下载得到最新的 FlyDog SDR 安装镜像。

![Download images](/guide/requirements_1.png "Download images")

根据操作系统的不同，向 SD 卡写入镜像的方式亦有所不同。

在下面的教程中，镜像名为 `2020-12-13-FlyDog-SDR-lite.zip`。

### Windows

 1. 前往[下一章](https://sdrotg.com/guide/tools.html#sd-%E5%8D%A1%E7%83%A7%E5%BD%95%E5%B7%A5%E5%85%B7)选择安装一款 SD 卡烧录工具，这里以 balenaEtcher 为例。
 2. 安装后运行 balenaEtcher，导入将要刷写到 SD 卡的文件 `2020-12-13-FlyDog-SDR-lite.zip`。
 3. 选择好目标 SD 卡后，按下 Flash，等待镜像刷写完成即可。
 4. 取出 SD 卡，插入开发板卡槽。

### macOS

macOS 步骤与 Windows 大致相同。

 1. 前往[下一章](https://sdrotg.com/guide/tools.html#sd-%E5%8D%A1%E7%83%A7%E5%BD%95%E5%B7%A5%E5%85%B7)获取 balenaEtcher 下载地址。
 2. 安装后运行 balenaEtcher，导入将要刷写到 SD 卡的文件 `2020-12-13-FlyDog-SDR-lite.zip`。
 3. 选择好目标 SD 卡后，按下 Flash，等待镜像刷写完成即可。
 4. 取出 SD 卡，插入开发板卡槽。

### Linux

该方法适用于 Fedora Linux、Debian Linux、Ubuntu Linux、Arch Linux 等主流 Linux 发行版。

 1. 前往[下一章](https://sdrotg.com/guide/tools.html#sd-%E5%8D%A1%E7%83%A7%E5%BD%95%E5%B7%A5%E5%85%B7)获取 balenaEtcher 下载地址。
 2. 根据所使用的系统位数，下载 balenaEtcher 提供的 Appimage 压缩档，解压得到以 `.AppImage` 结尾的文件后，以右键选定执行。
 3. 待 balenaEtcher 启动后，导入将要刷写到 SD 卡的文件 `2020-12-13-FlyDog-SDR-lite.zip`。
 4. 选择好目标 SD 卡后，按下 Flash，等待镜像刷写完成即可。
 5. 取出 SD 卡，插入开发板卡槽。
