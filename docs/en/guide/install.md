# FlyDog SDR Assembly Guide

The FlyDog SDR uses a 40-pin GPIO to communicate with the Raspberry Pi. However, incorrect assembly can prevent the FlyDog SDR from functioning properly or even damage the device.

When assembling the device, please follow the installation guidelines below to ensure that the device has been installed correctly to avoid this.

## Assembling

 1. Align the wider side of the FlyDog SDR expansion board with the wider side of the Raspberry Pi body
 2. Align the FlyDog SDR expansion board slot with the GPIO pins on the Raspberry Pi body
 3. Push the Raspberry Pi body GPIO pins into the FlyDog SDR expansion board slot with a slight force to ensure a secure connection
 4. Secure the two with screws etc.

![Install](/guide/install_1.png "Install")

**Note that to remove the FlyDog SDR expansion board from the Raspberry Pi body, pull the FlyDog SDR expansion board out slowly with a slight force to prevent bending the GPIO pins.**  

## Selecting the Appropriate HF Interface

The FlyDog SDR offers two HF input jacks (HF-1, HF-2), the lower the bandwidth, the more significant the signal attenuation.

 - HF-1: with 30 MHz low-pass filter
 - HF-2: with 62 MHz low-pass filter

In general, the FlyDog SDR Project recommends that users connect the antenna to the HF-2 interface for better results, while the HF-1 interface may be considered when the user is in an environment with strong electromagnetic interference.

## Precautions

 1. Do not use the unit in a humid environment
 2. Do not place the FlyDog SDR expansion board in areas with high temperatures, high humidity, poor ventilation, or dust
 3. Do not cover the FlyDog SDR with any flammable material as it generates a lot of heat during operation, to avoid fire and to dissipate heat
 4. Do not touch the board and chips of the FlyDog SDR when it is in operation to prevent burns
 5. Do not touch the chips on the board directly with your hands to prevent damage to the FlyDog SDR from static electricity

The following items should be checked once a month.

 1. the FlyDog SDR expansion board is securely connected to the Raspberry Pi body
 2. The FlyDog SDR expansion board has not accumulated a lot of dust
 3. the power supply to the Raspberry Pi body is not abnormal and the power cable is not rusted or bent
 4. no cracks or scratches on the power cable
