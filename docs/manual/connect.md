# 连接到 FlyDog SDR

## 通过主机名

使用由 FlyDog SDR Project 官方构建的系统刷入 SD 卡，正常启动 Raspberry Pi 并联网后，在位于同一个局域网的设备的浏览器中输入如下地址。

```
http://flydog-sdr:8073

```

浏览器会自动寻找此主机名对应的 IP 位址，即可访问到 FlyDog SDR。

## 通过 IP 位址

如果同一局域网中存在多个 FlyDog SDR 设备，则需要通过 IP 位址访问到 FlyDog SDR。

安装 Advanced IP Scanner 并运行，对局域网中的设备进行扫描，找到主机名 `flydog-sdr`  所对应的 IP 位址，然后在浏览器中输入如下地址（以 10.10.10.132 为例）。

```
http://10.10.10.132:8073

```

浏览器会直接通过 IP 位址连接到 FlyDog SDR。

一般来说，由网关 DHCP 服务器分配的 IP 位址不会轻易变更，但您仍然可以通过路由器相关功能为多个 FlyDog SDR 分配相应的内网 IP 位址。

## 通过 My KiwiSDR

默认设定下，FlyDog SDR 在每次启动时，会向 my.kiwisdr.com 提交设备自身 IP、序列号等资讯，用户在确保自己与 FlyDog SDR 处于同一局域网下时，可以通过 [My KiwiSDR](http://my.kiwisdr.com) 查看当前 FlyDog SDR 设备之 IP 地址。

![My KiwiSDR](/manual/connect_1.png "My KiwiSDR")

## 不推荐的浏览器

部分浏览器在访问 FlyDog SDR 时，可能会出现音频欠载、频谱显示不正确、附加组件不能使用等问题。

强烈建议避免使用以下浏览器连接 FlyDog SDR。

* Internet Explorer
* 360 安全浏览器
* 360 极速浏览器
* 2345 加速浏览器
* QQ 浏览器
* 搜狗高速浏览器 
* 遨游浏览器
* 猎豹浏览器


