# Build Raspbian

FlyDog SDR provides an image of Raspbian with FlyDog SDR already integrated, or you can build your own Raspbian with FlyDog SDR already integrated.

## Build the Development Environment

To build a Raspbian image for FlyDog SDR, you need to be on an `armv7l` or `x86_64` processor architecture.

### System Requirements

The following requirements need to be met before building Raspbian with FlyDog SDR integrated.

 - The processor architecture of the machine to be built is `armv7l` or `x86_64`
 - The machine to be built uses a Linux distribution of Debian Buster or Ubuntu Bionic
 - The machine to be built is not running in a container (Docker)
 - The machine used for the build has not run Docker and will not run Docker in the future

### Dependencies

Dependencies for building Raspbian need to be installed before you can perform the build task.

```
fdsdr@flydog-sdr-project:~$ apt-get update
fdsdr@flydog-sdr-project:~$ apt-get -y install binfmt-support \
                   coreutils \
                   quilt \
                   parted \
                   qemu-user-static \
                   debootstrap \
                   zerofree \
                   zip \
                   dosfstools \
                   bsdtar \
                   libcap2-bin \
                   rsync \
                   xz-utils \
                   file \
                   git \
                   curl \
                   bc
fdsdr@flydog-sdr-project:~$ apt-get autoremove --purge -y
```

### Get Source Code

Pull the source code from GitHub to build Raspbian with FlyDog SDR integration.

```
fdsdr@flydog-sdr-project:~$ git clone https://github.com/flydog-sdr/raspbian-builder
```

For mainland China, you can pull using the GitHub mirror (github.com.cnpmjs.org).

```
fdsdr@flydog-sdr-project:~$ git clone https://github.com.cnpmjs.org/flydog-sdr/raspbian-builder
```

### Configuration

Go to the `raspbian-builder` directory and modify `config`.

```
fdsdr@flydog-sdr-project:~$ cd raspbian-builder
fdsdr@flydog-sdr-project:~/raspbian-builder$ vim config
```

| variables | description |
| :--- | :--- |
| `IMG_NAME` | Image name |
| `RELEASE` | Debian version code |
| `TARGET_HOSTNAME` | Specify the host name |
| `FIRST_USER_NAME` | Specify the username |
| `FIRST_USER_PASS` | Specify the user password |
| `ENABLE_SSH` | Enable SSH |
| `LOCALE_DEFAULT` | Default Locale |
| `KEYBOARD_KEYMAP` | Default keyboard layout |
| `TIMEZONE_DEFAULT` | Default Time Zone |

## Build

Switch to the `root` user and run `wizard.sh`

```
fdsdr@flydog-sdr-project:~/raspbian-builder$ sudo su
root@flydog-sdr-project:~/raspbian-builder# ./wizard.sh
```

Once the image has been built, the generated image can be found under `builder/deploy/`.
