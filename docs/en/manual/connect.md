## Connect to FlyDog SDR

## Via Hostname

With the official system built by the FlyDog SDR Project flashed onto the SD card, the Raspberry Pi booted normally and networked, enter the following address into the browser of a device located on the same LAN.

```
http://flydog-sdr:8073
```

The browser will automatically look for the IP address corresponding to this host name and you will be able to access the FlyDog SDR.

## Via IP Address

If there are multiple FlyDog SDR devices on the same LAN, you need to access the FlyDog SDR by IP address.

Install and run Advanced IP Scanner, scan the LAN for devices, find the IP address of the host name flydog-sdr and enter the following address in your browser (10.10.10.132 for example).

```
http://10.10.10.132:8073
```

The browser will connect directly to the FlyDog SDR via the IP address.

Generally speaking, the IP address assigned by the gateway DHCP server will not change easily, but you can still assign the appropriate intranet IP address to multiple FlyDog SDRs via the router-related functions.

## Not Recommended Browsers

Some browsers may cause problems such as audio underload, incorrect display of the spectrum and non-functional extensions when accessing the FlyDog SDR.

It is strongly recommended to avoid using the following browsers to connect to the FlyDog SDR.

 - Internet Explorer
 - 360 Secure Browser
 - UC Browser
 - Sogou Browser
 - Baidu Browser
 - QQ Browser
