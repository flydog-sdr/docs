# Common Troubleshootings

Depending on the problems users may encounter when using the device, some basic troubleshooting methods are provided here.

## Unable to Connect

Description: The router can see the hostname of the FlyDog SDR (flydog-sdr.lan) in the background, but when accessing the corresponding IP, it prompts that the connection is denied or the connection timeout.

Possible Cause:

 - First boot of the system, slightly slow
 - System corruption
 - SD card not fast enough
 - Insufficient power supply current
 - The router hadn't updated the DHCP client list instantly after rebooting FlyDog SDR

Solution:

 - Wait for a while and then visit again
 - Go to [github.com/flydog-sdr/raspbian-builder/releases](https://github.com/flydog-sdr/raspbian-builder/releases) to download and flash the latest distribution
 - Replace the Micro SD card with a Class 10 card with a capacity of 8GB or more
 - Use the official Raspberry Pi power supply or a power supply with a higher full load current
 - Access the FlyDog SDR directly using the hostname or reboot the router

## Device Drops Out

Description: The device drops out for no apparent reason after a period of operation and needs to be re-powered before it returns to normal.

Possible Cause:

 - Insufficient power supply current
 - Aging of the power cable
 - Poor contact with the power socket

Solution:

 - Use the official Raspberry Pi power supply or a power supply with a higher full load current
 - Replace with a good quality Micro-USB, USB Type-C power cable
 - Replace the power socket

## Very Slow Webpage Loading

Description: After several quick refreshes of the FlyDog SDR webpage, the webpage loading speed suddenly becomes extremely slow.

Possible Cause:

 - You are being rate limited

Solution:

 - Close the current tab and wait a few seconds before revisiting

## Can't Receive GPS Signal

Description: The FlyDog SDR expansion board is connected to the GPS antenna, but still cannot locate and calibrate the frequency.

Possible Cause:

 - GPS antenna is damaged
 - FlyDog SDR uses Navstar, QZSS, Galileo satellites for positioning and the signal is weak

Solution:

 - Replace the GPS antenna
 - Place the GPS antenna in an open area

## Intermittent Bursts of Sound

Description: Intermittent bursts of sound when receiving certain stations.

Possible Cause:

 - Short signal overload due to fluctuating signals from shortwave stations
 - AGC-related options are incorrectly set

Solution:

 - Enable the Synchronous Aperture Detection (SAM) function on the dashboard or connect the antenna to HF-1 interface
 - Adjust the AGC-related options in the dashboard until no popping occurs

## Spectrogram is Black

Description: The webpage opens, but the spectrum graph is black and there is no sound, and the Status tab in the dashboard does not output statistics.

Possible Cause:

 - External ADC clock is mistakenly enabled
 - FlyDog SDR failed to initialise the FPGA
 - The FPGA chip has been damaged

Solution:

 - Set External ADC clock to No in the Connect tab in the administration 
 - Try to reboot the device by unplugging the power supply
 - Contact the dealer for repair of the FlyDog SDR expansion board
