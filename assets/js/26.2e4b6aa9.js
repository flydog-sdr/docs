(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{389:function(a,e,r){"use strict";r.r(e);var s=r(18),t=Object(s.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),r("h2",{attrs:{id:"采购清单"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#采购清单"}},[a._v("#")]),a._v(" 采购清单")]),a._v(" "),r("p",[a._v("在使用 FlyDog SDR 前，需要准备一些组件。")]),a._v(" "),r("ul",[r("li",[a._v("Raspberry Pi 或 Orange Pi 本体，可用型号参见后文")]),a._v(" "),r("li",[a._v("GPS 天线，用于获取时间、校准频率")]),a._v(" "),r("li",[a._v("推荐使用 5.1V 3A 对开发板进行供电，以保证 FlyDog SDR 能够稳定运行")]),a._v(" "),r("li",[a._v("Class 10 级别，容量为 8GB 以上的 Micro SD 卡，保证系统的流畅度")]),a._v(" "),r("li",[a._v("Micro SD 读卡器，用于向 SD 卡写入镜像")]),a._v(" "),r("li",[a._v("网线用于将开发板接入网络")])]),a._v(" "),r("p",[a._v("此外，强烈建议使用以下组件，但它们不是必需的。")]),a._v(" "),r("ul",[r("li",[a._v("为开发板加装外壳，保护其免受短路")]),a._v(" "),r("li",[a._v("在 FlyDog SDR 和树莓派上加装散热片，延长使用寿命")]),a._v(" "),r("li",[a._v("若所处地区系雷电频繁地区，请考虑使用 800J 浪涌保护器以保护开发板免遭电涌损坏")])]),a._v(" "),r("h2",{attrs:{id:"向-sd-卡写入镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向-sd-卡写入镜像"}},[a._v("#")]),a._v(" 向 SD 卡写入镜像")]),a._v(" "),r("p",[a._v("根据操作系统的不同，向 SD 卡写入镜像的方式亦有所不同。")]),a._v(" "),r("p",[a._v("在下面的教程中，镜像名为 "),r("code",[a._v("FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz")]),a._v("。")]),a._v(" "),r("h3",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),r("ol",[r("li",[a._v("下载由树莓派提供的刷写工具 "),r("a",{attrs:{href:"https://mirrors.bfsu.edu.cn/raspberry-pi-os-images/imager/imager.exe",target:"_blank",rel:"noopener noreferrer"}},[a._v("Raspberry Pi Imager"),r("OutboundLink")],1),a._v("，该工具亦可为 Orange Pi 等开发板刷写系统。")]),a._v(" "),r("li",[a._v("安装后运行 Raspberry Pi Imager，在主界面按下 CHOOSE OS，然后选择 Use custom，导入将要刷写到 SD 卡的文件 "),r("code",[a._v("FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz")]),a._v("。")]),a._v(" "),r("li",[a._v("选择好目标 SD 卡后，按下 WRITE，等待镜像刷写完成即可。")]),a._v(" "),r("li",[a._v("取出 SD 卡，插入开发板卡槽。")])]),a._v(" "),r("h3",{attrs:{id:"macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),r("p",[a._v("macOS 步骤与 Windows 大致相同。")]),a._v(" "),r("ol",[r("li",[a._v("下载由树莓派提供的刷写工具 "),r("a",{attrs:{href:"https://mirrors.bfsu.edu.cn/raspberry-pi-os-images/imager/imager.dmg",target:"_blank",rel:"noopener noreferrer"}},[a._v("Raspberry Pi Imager"),r("OutboundLink")],1),a._v("，该工具亦可为 Orange Pi 等开发板刷写系统。")]),a._v(" "),r("li",[a._v("安装后运行 Raspberry Pi Imager，在主界面按下 CHOOSE OS，然后选择 Use custom，导入将要刷写到 SD 卡的文件 "),r("code",[a._v("FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz")]),a._v("。")]),a._v(" "),r("li",[a._v("选择好目标 SD 卡后，按下 WRITE，等待镜像刷写完成即可。")]),a._v(" "),r("li",[a._v("取出 SD 卡，插入开发板卡槽。")])]),a._v(" "),r("h3",{attrs:{id:"linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),r("p",[a._v("以 Fedora Linux 为例。")]),a._v(" "),r("ol",[r("li",[a._v("打开命令行，在用户目录下将 "),r("code",[a._v("FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz")]),a._v(" 解压，得到 "),r("code",[a._v("FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img")])])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[dev@example ~]$ tar -xvf FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.tar.gz\nFlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img\n\n[dev@example ~]$ ls\nFlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[a._v("获取到 SD 卡的盘符后并卸载后，用 "),r("code",[a._v("dd")]),a._v(" 命令将镜像写入 SD 卡。")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[dev@example ~]$ df\nFilesystem           1K-blocks      Used Available Use% Mounted on\ndevtmpfs          224784       0    224784   0% /dev\ntmpfs             248968      28    248940   1% /dev/shm\ntmpfs             248968   33284    215684  14% /run\ntmpfs             248968       0    248968   0% /sys/fs/cgroup\n/dev/xvda1      20960236 7359508  13600728  36% /\ntmpfs              49796       0     49796   0% /run/user/0\n/dev/sda1      15643576  4432804  10396388  30% /mnt/sda1\n[dev@example ~]$ sudo umount /mnt/sda1\n[dev@example ~]$ sudo dd if=FlyDog-SDR_4.02_2020-11-07_Raspberry-Pi.img of=/dev/sdb bs=4M &\n[dev@example ~]$ sudo watch kill -USR1 $(pgrep ^dd)\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[a._v("在命令执行完成后，用 "),r("code",[a._v("sync")]),a._v(" 检验文件是否已经全部写入 SD 卡。")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[dev@example ~]$ sync\n")])])]),r("ol",{attrs:{start:"4"}},[r("li",[a._v("取出 SD 卡，插入开发板卡槽。")])])])}),[],!1,null,null,null);e.default=t.exports}}]);