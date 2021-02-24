# Common Troubleshootings

Depending on the problems users may encounter when using the device, some basic troubleshooting methods are provided here.

## Unable to Connect

Description of the problem: The router can see the hostname of the FlyDog SDR (flydog-sdr.lan) in the background, but when accessing the corresponding IP, it prompts that the connection is denied or the connection timeout.

Possible cause.

 - First boot of the system, slightly slow
 - System corruption
 - SD card not fast enough
 - Insufficient power supply current
 - The router does not update the DHCP client list instantly after restarting FlyDog SDR

Solution.

 - Wait for a while and then visit again
 - Go to [d.sdrotg.com](https://d.sdrotg.com) to download and flush the latest system image
 - Replace the Micro SD card with a Class 10 card with a capacity of 8GB or more
 - Use the original Raspberry Pi power supply or a power supply with a higher full load current
 - Access the FlyDog SDR directly using the hostname or reboot the router

## Device Drops Out for No Apparent Reason

Description of fault: The device drops out for no apparent reason after a period of operation and needs to be re-powered before it returns to normal.

Possible causes.

 - Insufficient power supply current
 - Aging of the power cable
 - Poor contact with the power socket

Solution.

 - Use the original Raspberry Pi power supply or a power supply with a higher full load current
 - Replace with a good quality Micro-USB, USB Type-C power cable
 - Replace the power socket

## Very Slow Web Page Loading

Description: After several quick refreshes of the FlyDog SDR webpage, the webpage loading speed suddenly becomes extremely slow.

Possible cause.

 - Frequent page refreshes triggered the system protection mechanism and the request was misinterpreted as a malicious attack

Solution.

 - Close the current tab and wait 15 seconds before revisiting

## GPS Signal Not Being Received

Description: The FlyDog SDR expansion board is connected to the GPS antenna, but still cannot locate and calibrate the frequency.

Possible cause.

 - GPS antenna is damaged
 - FlyDog SDR uses Navstar, QZSS, Galileo satellites for positioning and the signal is weak

Solution.

 - Replace the GPS antenna
 - Place the GPS antenna in an open area

## Intermittent Bursts of Sound

Description of fault: Intermittent popping when receiving certain stations.

Possible cause.

 - Short signal overload due to fluctuating signals from shortwave stations
 - AGC-related options are incorrectly set

Solution.

 - Enable the Synchronous AM function on the instrument panel
 - Adjust the AGC-related options in the dashboard until no popping occurs

## Spectrogram is Black

Description: The web page opens, but the spectrum graph is black and there is no sound, and the Status tab in the dashboard does not output statistics.

Possible cause.

 - External ADC clock is incorrectly enabled
 - FlyDog SDR failed to initialise the FPGA
 - The FPGA chip has been damaged

Solution.

 - Set External ADC clock to No in the background management Connect tab
 - Try to reboot the device by unplugging the power supply
 - Contact the aftermarket for repair of the FlyDog SDR expansion board
