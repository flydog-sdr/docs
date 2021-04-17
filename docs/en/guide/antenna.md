# Antenna Selection Guide

A good pair of antennas can greatly improve the reception of the FlyDog SDR.

## Loop Antennas

A loop antenna provides excellent reception of long, medium and short waves without the need for a ground grid or grounding.

The [FlyDog SDR demo site](https://sdrotg.com/en/#experience-the-demo) uses a SkyLoop loop antenna.

There are two types of loop antennas, passive and active. Active antennas are smaller and provide a certain degree of sensitivity, but they also increase background noise; passive antennas have a lower background noise, but require a larger site to set up.

Depending on the usage scenario (urban buildings, rural areas), users can choose to use either active or passive antennas.

Below are the recommended loop antennas for use by the FlyDog SDR Project.

 - W6LVP Active Magnetic Loop Antenna
 - MegaLoop MLA-30 Active Magnetic Loop Antenna
 - Wellbrook ALA1530 Active Loop Antenna
 - K-180WLA Active Loop Antenna

## Whip and Probe Antenna

### PA0RDT Mini Whip

The PA0RDT Mini Whip is an active antenna that is lightweight and portable, and can receive the frequencies covered by the FlyDog SDR with good reception, making it suitable for installation in tight spaces such as balconies.

However, there are some who believe that the PA0RDT Mini Whip is not a good performer, and in fact this is because many people do not install it in the correct way.

For information on how to properly install a PA0RDT Mini Whip antenna, please refer to the installation guide at [swling.com/blog/2020/10/how-to-properly-install-a-mini-whip-antenna-in-an-noisy-urban-environment/](https://swling.com/blog/2020/10/how-to-properly-install-a-mini-whip-antenna-in-an-noisy-urban-environment/) for the installation guide.

### Apex 303WA-2

The Apex 303WA-2 is a Japanese made long, medium and shortwave passive antenna with low noise. The Apex 303WA-2 is more shortwave friendly and as this is a passive antenna, no gain can be gained.

## Long Wire Antennas

A long wire antenna is not a random wire. In fact, an antenna is called a long-wire antenna when it is longer than one wavelength and an integer multiple of its half-wavelength.

A quarter wavelength matching wire can be used to tune a long wire antenna. For example, to receive a shortwave broadcast of 49 m, a long wire of `49 / 4 = 12.25` m will give good results.

Please note that long wire antennas need to be used with a 9:1 Barron to match the impedance to receive medium and long wave broadcasts.
