# Adjusting the Frequency

On the FlyDog SDR you can jump to the frequency you want to listen to in two ways.

## Enter the Frequency Directly

Enter the frequency you want to listen to in the top left corner of the dashboard on the main FlyDog SDR screen and press Enter.

![Frequency](/manual/freq_1.png "Frequency")

Note that the frequency unit is kHz and the conversions between the different frequency units are as follows.

 - 1 kHz = 1, 000 Hz
 - 1 MHz = 1, 000 kHz
 - 1 GHz = 1, 000 MHz

## Selecting Frequencies on Spectrum

On the PC, navigate through the spectrum with the mouse wheel and, once you have found the frequency you want to listen to, click on it in this position on the spectrum.

![Waterfall](/manual/freq_2.png "Waterfall")

As the clicked position may be slightly different from the frequency to be locked, the frequency can then be fine-tuned using the `+` or `-` icons on the dashboard.

On mobile devices (mobile phones, tablets, etc.), it is necessary to use both fingers to manipulate the spectrum, find the frequency to be listened to and then tap in this position to switch frequencies.

## Adjusting the Bandwidth

When the station being listened to receives slight interference from a neighbouring station, the user can adjust the reception bandwidth to obtain the best possible reception.

![Bandwidth](/manual/freq_3.png "Bandwidth")

By dragging the width covered by the pointer until the neighbouring frequency interference level is minimised.

## Locking the Frequency

To prevent misuse, the user can lock the frequency being listened to.

On a PC, you can lock the frequency by selecting the station you want to listen to, right-clicking on the spectrum graph and selecting lock tunning in the pop-up menu; on a mobile device, you can lock the frequency by clicking on the spectrum graph with both fingers and selecting lock tunning in the pop-up menu.

![lock tunning](/manual/freq_4.png "lock tunning")

Once the frequency is locked, the user can still scale the spectrogram, but cannot switch to another frequency.

If you need to unlock the frequency, repeat the above operation again and select unlock tunning from the pop-up menu.

## Save Station

You can save your favourite frequencies in the FlyDog SDR database for future use.

Note that this operation needs to be done on the PC.

 1. Jump to the station you want to save in the main screen of the FlyDog SDR
 2. Press and hold the Shift key on the keyboard
 3. Click on the blank space above the frequency scale on the main screen of FlyDog SDR.
 4. Enter the password for the background management (you can skip this step if you have an intranet connection)
 5. Complete the DX label edit form and press Add

The meaning of the values in the form is as follows.

 - Freq: Frequency to be saved, fill in as required or leave as default
 - Mode: Broadcast mode, fill in as required or leave as default
 - Passband: the bandwidth to be used, fill in or leave blank according to your needs
 - Type: classification, depending on the type selected by the user, the label will be coloured differently
 - Offset: frequency offset, fill in or leave blank as required
 - Ident: the name of the radio station, to be filled in as required
 - Notes: notes, to be filled in or left blank according to the user's needs
 - Extension: the add-on that is called up when jumping to the frequency, fill in or leave blank as required

![DX label edit](/manual/freq_5.png "DX label edit")

## Share Radio Stations

Users can share the radio station they are listening to, generating a URL that they can listen to with others.

When others access this URL, FlyDog SDR will automatically jump to the appropriate frequency.

This URL can be copied to the clipboard by pressing the button in the bottom right corner of the dashboard frequency input box on the main FlyDog SDR screen.

![Share URL](/manual/freq_6.png "Share URL")

## Manual Frequency Correction

In many cases when the user does not have a GPS antenna connected to the FlyDog SDR, the frequency can be corrected manually.

 1. tune the frequency to a timing station, e.g. 5000 kHz, 10000 kHz, 15000 kHz, using a higher frequency station if possible
 2. Amplify the spectrum and align the pointer exactly with the signal carrier line
 3. Right-click on the PC (on mobile devices quickly double-tap on the spectrum) and select cal ADC clock (admin) in the pop-up menu
 4. Enter the password and press Confirm

![Frequency Correction](/manual/freq_7.png "Frequency Correction")
