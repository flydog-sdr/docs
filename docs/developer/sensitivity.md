# 频率响应问题和补救方案

根据来自一些用户的反馈，目前销售的第一代 FlyDog SDR 在天线接口设计上存在缺陷。

## 频率响应问题

使用 NanoVNA 分别检测 HF-1、HF-2 接口的频率响应，由下图可见，HF-1 和 HF-2 于某些频率上存在不同程度的衰减。

导致部分频率范围出现衰减的原因在于 HF-1 和 HF-2 接口上的输入电容不够。

### HF-1

![HF-1](/developer/sensitivity_1.jpg "HF-1")

### HF-2

![HF-2](/developer/sensitivity_2.jpg "HF-2")

## 补救方案

需要注意，下述涉及改造设备的操作，要求用户具备一定动手能力和相关专业知识，此外，在经过如下改装后，HF-1 接口将不再可用。

若用户在改造过程中不慎导致 FlyDog SDR 拓展板损坏，FlyDog SDR Project 将不对其负责。

### 拆除保护壳

拆除 HF-1、HF-2 接口所对应的金属外壳（Emoji 标记处）。

![Mental Case](/developer/sensitivity_3.jpg "Mental Case")

使用电烙铁将 FlyDog SDR 拓展板金属外壳边缘焊锡熔化，并缓慢揭开金属盖。

![Circuit](/developer/sensitivity_4.jpg "Circuit")

拆除过程中，注意不要损伤到其他元件。

### 改装电路

![Circuit](/developer/sensitivity_5.jpg "Circuit")

依照上图，分别短接 C1，移除 C2、L1。

![Circuit](/developer/sensitivity_6.jpg "Circuit")

在改装时，注意不要损伤到其他元件。

改装完成后，此前部分频率存在衰减的问题即可解决。

![Changes](/developer/sensitivity_7.jpg "Changes")

由另一位用户的提供的照片（来自 Matjaz Zibert）。

![Matjaz Zibert](/developer/sensitivity_8.jpg "Matjaz Zibert")
