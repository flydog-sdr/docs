# Dashboard

This chapter provides an introduction to the FlyDog SDR dashboard related features.

## Selecting Listening Modes

FlyDog SDR offers several radio listening modes.

 - AM: Amplitude Modulation, which allows the user to select the reception bandwidth (wideband, narrowband) with several clicks
 - SAM: AM synchronous detection, which provides a degree of protection against adjacent frequency interference
 - DRM: decoding for DRM broadcasts, which evokes the DRM add-on
 - LSB: Lower sideband communication, where the user can select the reception bandwidth (wideband, narrowband) with multiple clicks
 - USB: Upper sideband communication, where the user can select the received bandwidth (broadband, narrowband) with multiple clicks
 - CW: Wireless telegraph communication, where the user can select the reception bandwidth (broadband, narrowband) with multiple clicks
 - NBFM: Narrowband FM
 - IQ: direct IQ data stream output

User switchable via mode options on the dashboard, effective in real time

![Mode](/manual/dashboard_1.png "Mode")

## Jump to Band

As the radio channels are not evenly distributed between 0-30 MHz, the user can quickly switch to the band to be listened to via the dashboard.

By expanding the select band menu on the dashboard, the user can jump to the band they want to receive, depending on their needs. The menu also offers other bands in addition to general radio.

![Band](/manual/dashboard_2.png "Band")

## Enabling Extensions

In addition to the basic functionality, FlyDog SDR has a number of extensions, for example the DRM decoder.

To decode a DRM broadcast, switch the frequency to the active DRM broadcast, expand the extension menu on the dashboard and select DRM.

Once the reception strength has reached the decoding target, you can then listen to the DRM broadcast.

![Extension](/manual/dashboard_3.png "Extension")

## Record a Broadcast

The user can record the current broadcast by clicking the Record button in the top right corner of the dashboard.

As the process of recording a broadcast is done by the browser, if the browser is closed abnormally during the recording (e.g. crashes), the recording will also be lost.

To end the recording, just click on the button again.

![Record](/manual/dashboard_4.png "Record")

## Adjustments to Spectrum

A clear spectrum graph is essential for capturing weak receptions and the FlyDog SDR offers a variety of spectrum colour schemes and display parameters for adjustment.

By clicking on the tab called WF at the bottom of the dashboard, the user can slide the slider to adjust the display parameters of the spectrum graph.

 - WF ceil: adjusts the contrast of the spectrum
 - WF floor: adjusts the brightness of the spectrum graph
 - WF rate: adjusts the scroll rate of the spectrum graph
 
For older devices, too fast WF rate can cause screen lag and even browser crashes. In this case, users can tap Slow Dev to make even older devices have a good experience.

To change the colour scheme of the spectrum, you can expand the menu at the bottom of the WF tab and choose from a variety of spectrum colour schemes including Kiwi.

![Waterfall](/manual/dashboard_5.png "Waterfall")

## Volume and Audio

Adjust the output audio by clicking on the Audio tab at the bottom of the dashboard.

Control the volume by sliding the Volume slider, the channel of the audio output by sliding the Pan slider and the squelch slider to adjust the squelch level.

In case of good network connectivity, you can turn off audio compression by clicking on the Comp button to get better audio quality.

In some cases, you can suppress some of the noise to a certain extent by enabling de-emphasis. To enable de-emphasis, simply flip the corresponding switch.

![De-emphasis](/manual/dashboard_6.png "De-emphasis")

## AGC Control

Switch the dashboard tab to AGC, where you can adjust the AGC-related parameters.

AGC status can be switched by clicking the AGC button under the AGC tab.

The FlyDog SDR Project does not recommend that users turn off the AGC and use a fixed gain. With the AGC function enabled, the following parameters can be customised by the user.

* Threshold: measured in dB, this parameter determines the threshold of the AGC input signal level, AGC will be activated when the input signal level exceeds this value
* Slope: in dB, this parameter sets the difference in output signal level between a weak signal and a strong signal input, with an optimal range of 3-10 dB, depending on the user's perception
* Decay: This parameter adjusts the speed of the gain change controlled by the AGC. Generally speaking, a setting of 1000-5000 ms is appropriate. In some cases, too short a decay time can affect the listening experience

The FlyDog SDR Project also recommends that users enable the AGC Hang function, which allows the AGC gain to remain unchanged for a short period of time when the level drops (e.g. during a news break), and is suitable for SSB where the reception is above average.

## Mobile Device Touch

 - To display the right-click menu on the PC, tap on the spectrum map with both fingers at the same time
 - To zoom in and out of the spectrum graph, pinch and manipulate with both fingers, like zooming in on a photo
 - On small screens, the default is the Lite interface, but you can switch between interfaces by tapping the Off key on the dashboard several times
