# List FlyDog SDR Instance on Maps

As with KiwiSDR, once an external URL was set by user for FlyDog SDR, they can consider listing the instance on a number of maps (online SDR site guides) for others to access.

Before deciding to list an instance, the user needs to meet the following requirements.

 - The user has already set up the relevant site information in the administration (on the Public tab, with parameters such as latitude and longitude)
 - FlyDog SDR does not have a guest password set
 - FlyDog SDR default admin password has been changed in the administration

![Public Tab](/manual/map_1.png "Public Tab")

## Selecting Map Services

Currently, users have the option to list FlyDog SDR instances in the following map services.

 - Receiverbook: The FlyDog SDR Project recommends the use of Receiverbook, an online SDR site guide maintained by [Jakob Ketterl](https://github.com/jketterl)
 - LinkFanel: an online SDR site guide maintained by KiwiSDR

Instances can also be listed on both of the sites at a same time.

## Receiverbook

Go to [Receiverbook - add new receiver](https://www.receiverbook.de/receivers/new) and enter the URL of the FlyDog SDR on that page.

```
example.p.sdrotg.com
```

If the URL is a non-standard HTTP port, you will need to add the port number.

```
mydns.org:8073
```

![Receiverbook - add new receiver](/manual/map_2.png "Receiverbook - add new receiver")

Wait a moment and you will see your instance at [receiverbook.de/map](https://www.receiverbook.de/map).

## Linkfanel

Go to the Public tab in the FlyDog SDR administration and turn on the `Register on rx.kiwisdr.com?` switch.

![Register on rx.kiwisdr.com?](/manual/map_3.png "Register on rx.kiwisdr.com?")

However, according to user feedback, KiwiSDR seems to block FlyDog SDR sites. This happens when a reverse proxy is used.

To keep FlyDog SDR be listed on Linkfanel permanently, users can take the following measures.

 - Avoid including the keywords FlyDog SDR in the site information on the Public tab of the administration
 - Use IP or DDNS as the access URL instead of reverse proxy
