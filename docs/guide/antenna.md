# 天线选用指南

一副好的天线能极大改善 FlyDog SDR 的接收效果。

## 环形天线

环形天线接收长、中、短波时能取得优秀效果，且不需要接入地网或是接地。

[FlyDog SDR 演示站点](https://sdrotg.com/#%E4%BD%93%E9%AA%8C-demo)使用的正是 SkyLoop 环形天线。

环形天线分为无源和有源两类。有源天线体积更小，且能在一定程度上提升天线灵敏度，但是也会提升背景噪声；无源天线有着更低的背景噪音，但需要较大场地进行架设。

根据使用场景（城市楼房、农村地区），用户可以选择使用有源或是无源天线。

## Mini Whip

Mini Whip 是一款有源天线，轻量便携，可以接收 FlyDog SDR 所覆盖的频率，且能取得较好的接收效果，适合安装于阳台等空间较狭窄的位置。

但是也有人认为 Mini Whip 性能不佳，事实上，这是因为许多人没有以正确的方式进行安装。

有关如何正确安装 Mini Whip 天线，请参考 [swling.com/blog/2020/10/how-to-properly-install-a-mini-whip-antenna-in-an-noisy-urban-environment/](https://swling.com/blog/2020/10/how-to-properly-install-a-mini-whip-antenna-in-an-noisy-urban-environment/) 的安装指南。

## 长线天线

长线天线并非随意一根电线。事实上，当天线长度大于一个波长，而且是其半波长的整数倍时，才被称作长线天线。

长线天线的调谐可以使用四分之一波长匹配线。例如接收 49 公尺的短波广播，使用 `49 / 4 = 12.25` 公尺的长线即可取得较好效果。

需要注意的是，长线天线需要搭配 9:1 巴伦使用以匹配阻抗，且不能用于接收中波信号。
