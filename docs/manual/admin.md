# 后台管理

在启动 FlyDog SDR 后，其站点资讯等均为默认状态，需要由用户自行修改和完善。

## 登入到后台管理页面

要登入到后台，只需在所访问地址后加上 `/admin ` 即可。

![flydog-sdr:8073/admin](/manual/admin_1.png "flydog-sdr:8073/admin")

以 `flydog-sdr:8073` 为例，若要进入到后台管理页面，则 URL 应如下所示。

```
http://flydog-sdr:8073/admin
```

在输入后台管理登入的默认密码 `flydog-sdr` 后，按下 Enter 键，即可登入到后台管理页面。

## 修改默认登入密码

由于 FlyDog SDR 后台登入密码在初始时统一为 `flydog-sdr`，极易被他人恶意破解，所以在登入后台后应该修改默认登入密码。

将标签页切换到 Security，将 Admin password 一项中的默认密码更换为其他密码，如图所示。

有关设定密码的技巧，可以参考文章：[BBC 教你如何搞定好记而不易攻破的安全密码](https://www.bbc.com/zhongwen/simp/50282159)

![Change admin password](/manual/admin_2.png "Change admin password")

修改完密码后，按下 Enter 键即可生效。

在下次登入到 FlyDog SDR 后台管理页面时，请使用新设定的密码登入。

## 设定访客密码

若不想将搭建的 SDR 站点公开，而是只将其分享给朋友使用的话，可以对站点设定访客密码。

将标签页切换到 Security，在 User password 一栏中填入一个**不同于后台登入密码的访客密码**，按下 Enter 键保存，如图所示。

![Set user password](/manual/admin_3.png "Set user password")

此后，当其他用户访问这个 SDR 站点时，需要输入访客密码后才能使用。

访客密码并非后台管理密码，所以可以将该密码告诉他人。

## 设定接收模式

FlyDog SDR 提供多种接收模式，用户可以根据实际需求，选择合适的接收模式。

将标签页切换到 Mode，选择好接收模式后，按照页面提示重启应用后即可生效。

![Select FPGA mode](/manual/admin_4.png "Select FPGA mode")

不同的接收模式各有其特点，大致区别如下。

 - Kiwi calssic：传统接收模式，四用户对应四个频谱
 - More receivers：最大可以容纳 8 用户同时在线，前两个用户（rx1、rx2）可以查看频谱
 - More bandwidth：用户可使用更大带宽（20 kHz）收听广播，取得更好的音质，三用户对应三个频谱
 - MCORE rx14_wf0：最大可以容纳 14 用户同时在线，不能查看频谱，不能使用插件

## 对 FlyDog SDR 进行控制

将标签页切换到 Control，用户可以对 FlyDog SDR 进行简单控制，例如重启 FlyDog SDR，强制用户下线等。

![Control FlyDog SDR](/manual/admin_5.png "Control FlyDog SDR")

 - KiwiSDR server restart：重启应用
 - Daily restart：设定为 Yes 后，服务器将每日重启
 - Enable user connections：设定为 No 后，FlyDog SDR 将拒绝任何传入连接
 - Close all active user connections：强制所有已连接到 FlyDog SDR 的用户下线
 - Number of simultaneous channels available for connection by non-Kiwi apps：允许第三方应用占用连接的上限
 - Disable waterfalls/spectrum：禁用频谱图
 - Reason if disabled：当 Enable user connections 设定为 No 时，向用户显示站点关闭的原因，可使用 HTML 标签
 - Inactivity time limit：针对连入用户的时间限制，0 为不限制
 - 24hr per-IP addr time limit：针对连入 IP 的时间限制，0 为不限制
 - Time limit exemption password：绕过时间限制的密码

## 从外部连入 FlyDog SDR

用户可以使用多种方式从外部连入 FlyDog SDR，但是不同的方式亦对用户所处网络有不同要求。

将标签页切换到 Connect，用户可以指定访问到 FlyDog SDR 的相关方式，同时，用户可以设定多种方式访问到 FlyDog SDR。

有关如何将 FlyDog SDR 开放于公网的方法及教学，请参考[下一章](https://sdrotg.com/manual/public.html#%E5%B0%86-flydog-sdr-%E5%BC%80%E6%94%BE%E4%BA%8E%E5%85%AC%E7%BD%91)。

![Incoming connection settings](/manual/admin_6.png "Incoming connection settings")

## 修改初始化参数

将标签页切换到 Config，用户可以根据当地情况自行修改相关初始化参数。该参数还决定了新连接传入时 FlyDog SDR 向用户展示的默认设定。

![Initial values](/manual/admin_7.png "Initial values")

对于一般用户，修改以下值即可。

 - Frequency (kHz)：初始频率
 - Mode：广播模式（AM、SSB、CW 等）
 - Colormap：频谱图配色方案（根据自身喜好设定）
 - Max receiver frequency：FlyDog SDR 所接收频率范围（最大 62 MHz）
 - ITU region：国际电联区域（根据用户所在国家设定）
 - Initial AM BCB channel spacing：中波步进单位（9 kHz、10 kHz）

## 修改站点资讯

在 Webpage 标签页，用户可以修改访客访问站点时，站点向访客显示的资讯。

在修改资讯时，部分表单可以使用 HTML 标签（例如超链接）。

 - Top bar title：页面大标题，可使用 HTML 标签
 - Owner info：管理者资讯，可使用 HTML 标签
 - Status：站点状态，位于仪表盘选项卡，可使用 HTML 标签
 - Window/tab title：浏览器标题
 - Location：站点位置
 - Grid square：梅登黑德网格坐标
 - Altitude：海拔，由 GPS 自动设定
 - Map：站点坐标
 - Photo file：由用户自行上传相片
 - Photo maximum height：相片最大高度，以像素（px）为单位
 - Photo title：相片标题
 - Photo description：相片描述

![Site information](/manual/admin_8.png "Site information")

## 查看设备序列号

如果设备在使用过程中出现问题，需要与售后联系时，请提供 FlyDog SDR 在出售时分配的唯一序列号。

序列号可以在后台管理中获取。

将标签页切换到 Network，定位到 KiwiSDR serial number 后的四位数，则是 FlyDog SDR 的设备序列号。

![KiwiSDR serial number](/manual/admin_9.png "KiwiSDR serial number")

## 使用控制台

如果需要在终端中对 FlyDog SDR 进行某些操作，可以使用后台管理提供的控制台服务。

如果是在局域网之外使用控制台，用户需要前往 Security 标签页将 Restrict console connections to the local network 设定为 No。

将标签页切换到 Console，按下 Connect 后，即可输入相关 Linux 命令，对 FlyDog SDR 所在系统进行操作。

但是由于 FlyDog SDR 采用了容器隔离技术，所以用户在后台管理的控制台中执行的操作，并非是对宿主机进行操作，这在一定程度上保证了系统安全。

此外，用户在控制台中所做的一切改动，都会在程序升级时被复位。

![Console](/manual/admin_10.png "Console")
