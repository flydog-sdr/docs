---
home: true
heroImage: /flydog-sdr.png
heroText: FlyDog SDR
tagline: 我们现在不建议您现在购买此 SDR，因为材料价格上涨，我们已经提高了价格。 我们将要在今年推出第二代产品，敬请期待...
#tagline: 功能与性能兼备，就差下单了。
#actionText: 🛒 即刻购入
#actionLink: https://item.taobao.com/item.htm?id=633348873330
features:
- title: 良好相容性
  details: FlyDog SDR 同 KiwiSDR 相兼容，且能够在 Raspberry Pi 多系列开发板上流畅运行。
- title: 低价高可靠
  details: FlyDog SDR 能够以更低的价格获得，且拥有于 KiwiSDR 等同的可靠性。
- title: 反向代理
  details: FlyDog SDR Project 提供专用反向代理服务器，以用于穿透内网，实现远程访问 FlyDog SDR，并配置有内容分发网络（Content Delivery Network）全球加速。
- title: 完全开源
  details: 从 FlyDog SDR 核心源码到系统镜像构建脚本，FlyDog SDR 代码全部开源，不留任何后门。
- title: 专有更新通道
  details: FlyDog SDR Project 为 FlyDog SDR 提供专有更新通道，版本发布前经过多次测试，以保证可用性。
- title: 优良性能
  details: FlyDog SDR 使用 16 位 ADC 进行采样，覆盖宽带最大可达 62 MHz，性能与 KiwiSDR 相媲美。
footer: Licensed under CC-BY-SA 4.0 | Copyleft 2020 FlyDog SDR Project
---

## 给海外买家的重要提示

我们最近了解到有海外买家**通过分销商从速卖通（AliExpress）购买 FlyDog SDR 后，却收到 RaspSDR 的案例**。

然而，我们无权干涉分销商，**因此请确保您在购买 FlyDog SDR 之前已与他们达成协议（并保留证据）**，以防止您受骗，并造成不必要的损失。

已知以下商家不被信任。

 - [HamRadioshop Store](HamRadioshop Store)

## FlyDog SDR 是什么？

![FlyDog SDR 样品](/sample.jpg "FlyDog SDR 样品")

如您所见，FlyDog SDR 衍生自 KiwiSDR，遵循相关开源协定发布，是一款使用 16 位 ADC 采样的 SDR 产品，覆盖宽带高达 62MHz。

FlyDog SDR 目前能在 Raspberry Pi 多系列上流畅使用，满足多种场景需求。

 - Raspberry Pi 2B
 - Raspberry Pi 3B/3B+/3A+
 - Raspberry Pi 4B

## FlyDog SDR Project 由谁主导？

FlyDog SDR Project 由“杰至工作室”主导。

“杰至工作室”由一群热爱无线电技术的人们组成，并致力于为中国大陆玩家提供可靠且廉价的 SDR 解决方案。

## 体验 Demo！

FlyDog SDR Project 现在提供以下实例供用户体验，这些实例均由用户自愿提供。

| 序号 | 国家 | 地区 | 天线 | 访问 URL | 访问密码 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 芬兰 | 屈米区科特卡市 | NTi MegaDipol MD300DX | [pso.p.sdrotg.com](http://pso.p.sdrotg.com/) | 无 |
| 2 | 中国 | 江苏省镇江市 | 3x8 metres SkyLoop | [demo.p.sdrotg.com](http://demo.p.sdrotg.com/) | `2020` |
| 3 | 日本 | 大分县宇佐市 | ApexRadio 303WA-2 | [sdr-swl.p.sdrotg.com](http://sdr-swl.p.sdrotg.com/) | 无 |

## 问与答（Q&A）

针对一些人可能会产生的疑问，这里给出了相应的解答。

### 问：你们和 KiwiSDR 是什么关系，算抄袭吗？

答：FlyDog SDR 是由 KiwiSDR 二次开发得来，且完全开源，所以不算抄袭。

### 问：FlyDog SDR 会被 KiwiSDR 认定为盗版被禁掉吗？

答：不会的，FlyDog SDR 本身就不是盗版，且 FlyDog SDR 代码在独立仓库，不受 KiwiSDR 影响。

### 问：FlyDog SDR 维护者有可能放弃这个项目吗？

答：同类产品 RaspSDR 似乎对他们的项目很不上心。但可以保证的是，FlyDog SDR 会始终对用户负责。

### 问：我听说 FlyDog SDR 电路设计有问题？

答：[之前放在专案自述文件中的图片](https://i.loli.net/2020/08/28/8hHytJLSk5UlYRx.jpg)，是初期供开发者测试用的样品，与现在发售的 FlyDog SDR 完全不同，所以请放心，FlyDog SDR 电路设计没有问题，而且会向着低噪声的方向发展。

### 问：FlyDog SDR 怎么有三个天线接口？

答：FlyDog SDR Project 为用户配备了两种不同低通滤波器（30 MHz 和 62 MHz）以供使用。有关天线接口的选用，FlyDog SDR 配套文档中亦有详细介绍。

### 问：LTC2208 是劣质芯片？为何不选用更低底噪的 LTC2217？

答：与 LTC2217 对比，LTC2208 底噪稍高，但选用 LTC2208  作为 ADC 是权衡了性能和成本的结果。事实上，LTC2208 根本不是劣质芯片。

## 与 FlyDog SDR Project 保持互动

有关本专案的任何询问或是反馈，请发送电邮到 [flydog_sdr-project@yahoo.co.jp](mailto:flydog_sdr-project@yahoo.co.jp)（一般能在两个工作日内得到回覆），请尽量使用 Yahoo!、Gmail、Outlook 等知名邮件提供商。

FlyDog SDR 在 Telegram 和 Facebook 上还成立了相关小组（仅限英文），用户可以加入这些小组，并在小组中获得有关 FlyDog SDR 的最新资讯，同时与开发者保持互动。

 - Telegram：[t.me/flydog_sdr](https://t.me/flydog_sdr)
 - Facebook：[facebook.com/groups/flydogsdr](https://facebook.com/groups/flydogsdr)

对于中国大陆用户，可以加入 FlyDog SDR 官方 QQ 群：1015109717。

## 授权

 - FlyDog SDR 源码由 [Beagle_SDR_GPS](https://github.com/jks-prv/Beagle_SDR_GPS) 修改得来，已遵照相关开源协定开源。
    * Copyright (c) 2014-2021 John Seamons, ZL/KF6VO
    * Copyright (c) 2018-2021 Christoph Mayer, DL1CH
 - 本站（[sdrotg.com](https://sdrotg.com)）源码位于 [github.com/flydog-sdr/docs](https://github.com/flydog-sdr/docs)，以 [CC-BY-SA 4.0 国际许可协议](https://creativecommons.org/licenses/by/4.0/deed.zh) 授权。
    * 包括网站中所有可见的文字内容和图片
    * 包括 FlyDog SDR Project 图标文件
    * 包括生成网站所使用到的源代码，即 [flydog-sdr/docs](https://github.com/flydog-sdr/docs)
 - 第三方创作内容，其版权应归其创作者所有，故 FlyDog SDR Project 放弃对以下内容的所有权。
    * 包括 FlyDog SDR Project 文档中所附相片、截图
