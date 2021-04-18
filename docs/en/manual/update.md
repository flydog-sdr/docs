# Automatic Updates

FlyDog SDR has a completely different approach to updates compared to KiwiSDR.

Each time an update is available, FlyDog SDR Project pre-compiles and packages the relevant Docker image (approximately 100 MB) and then distributes the update to the customer's device.

The FlyDog SDR Project does not want users to disable automatic updates as it is still working on the FlyDog SDR, but users can still use SSH to login to the FlyDog SDR system and disable automatic updates.

Here's how to disable automatic updates.

 1. Login to FlyDog SDR using a SSH tool
 2. Enter the command in the terminal to disable automatic updates
```
flydog@flydog-sdr:~ $ docker exec admin bash -c "echo 0 > /etc/kiwi.config/_UPDATE"
````
 3. The user can test if automatic updates are disabled
```
flydog@flydog-sdr:~ $ docker exec admin updater.sh
Auto-update is disabled, exiting...
```