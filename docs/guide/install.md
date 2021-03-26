# FlyDog SDR 组装指南

FlyDog SDR 使用 40 针 GPIO 与 Raspberry Pi 进行通信。然而，不正确的组装方式会使 FlyDog SDR 无法正常进行，甚至损坏设备。

在组装设备时，请遵循以下安装指南，确保设备已被正确安装，以避免上述情况发生。

## 组装流程

 1. 将 FlyDog SDR 拓展板较宽一侧同 Raspberry Pi 本体较宽一侧对齐
 2. 将 FlyDog SDR 拓展板插槽和 Raspberry Pi 本体 GPIO 针脚对齐
 3. 轻微用力将 Raspberry Pi 本体 GPIO 针脚推入 FlyDog SDR 拓展板插槽，保证两者连接稳固
 4. 使用螺丝等将两者固定

![Install](/guide/install_1.png "Install")

**需要注意，若要将 FlyDog SDR 拓展板从 Raspberry Pi 本体上取下，请轻微用力将 FlyDog SDR 拓展板缓慢抽出，以防折弯 GPIO 针脚。**  

## 选用合适的 HF 接口

FlyDog SDR 提供两个 HF 输入接口（HF-1、HF-2），带宽越低，信号衰减越明显。

 - HF-1：配备 30 MHz 低通滤波器
 - HF-2：配备 62 MHz 低通滤波器

一般来说，FlyDog SDR Project 推荐用户将天线连接到 HF-2 接口，这样可以取得较好效果；而当用户所处环境具有强烈电磁干扰时，可以考虑使用 HF-1 接口。

## 注意事项

 1. 请勿在潮湿的环境中使用本设备
 2. 请不要将 FlyDog SDR 拓展板放在高温、 高湿度、 通风不良，或者灰尘多的地方
 3. 由于 FlyDog SDR 拓展板在运行时会产生大量热量，所以请不要在 FlyDog SDR 上覆盖任何易燃材质，以免发生火灾，并做好散热措施
 4. 在 FlyDog SDR 拓展板运行时请勿触摸其电路板及芯片，以防烫伤
 5. 尽量不要直接用手触摸电路板上的芯片，以防身体所带静电损坏 FlyDog SDR 拓展版

对以下项目应当每月进行一次检查。

 1. FlyDog SDR 拓展板与 Raspberry Pi 本体连接牢靠
 2. FlyDog SDR 拓展板上未积攒大量灰尘
 3. Raspberry Pi 本体供电之电源无任何异常、电源电缆亦没有生锈或弯曲
 4. 电源电缆上没有裂纹或划痕
