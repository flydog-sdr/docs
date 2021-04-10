# Build Raspbian

FlyDog SDR provides an image of Raspbian with FlyDog SDR already integrated, or you can build Raspbian with FlyDog SDR already integrated.

## Building with GitHub Actions

To use GitHub Actions for cloud builds, you need to have a GitHub account.

Go to [github.com/bclswl0827/raspbian-builder/actions](https://github.com/bclswl0827/raspbian-builder/actions), fork the project to your account, go to the Actions page and enable the GitHub Actions feature.

Make changes to the `config` file in the project's root directory, submit the code, and the cloud build process will be triggered.

The build will take about 40 minutes to complete, and you will be able to get the appropriate system image when the build is complete.

## Configuration

The values of the `config` file are described below.

| Variables | Descriptions |
| :--- | :--- |
| `IMG_NAME` | Image name |
| `RELEASE` | Debian version |
| `TARGET_HOSTNAME` | Specify hostname |
| `FIRST_USER_NAME` | Specify username |
| `FIRST_USER_PASS` | Specify user password |
| `ENABLE_SSH` | Enable SSH |
| `LOCALE_DEFAULT` | Default Locale |
| `KEYBOARD_KEYMAP` | Default keyboard layout |
| `TIMEZONE_DEFAULT` | Default time zone |








