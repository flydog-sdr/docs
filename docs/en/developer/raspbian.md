# Build Raspbian

FlyDog SDR provides an image of Raspbian with FlyDog SDR already integrated, or you can build Raspbian with FlyDog SDR already integrated.

## GitHub Actions

To use GitHub Actions for cloud builds, you need to have a GitHub account.

Go to [github.com/flydog-sdr/raspbian-builder](https://github.com/flydog-sdr/raspbian-builder) and fork the project to your account

## Custom Configuration

The values in the `config` file are described below.

| variables          | description               |
| :----------------- | :------------------------ |
| `IMG_NAME`         | Mirror name               |
| `RELEASE`          | Debian version code       |
| `TARGET_HOSTNAME`  | Specify the hostname      |
| `FIRST_USER_NAME`  | Specify the username      |
| `FIRST_USER_PASS`  | Specify the user password |
| `ENABLE_SSH`       | Enable SSH                |
| `LOCALE_DEFAULT`   | Default Locale            |
| `KEYBOARD_KEYMAP`  | Default keyboard layout   |
| `TIMEZONE_DEFAULT` | Default time zone         |

## Triggering the Build Process

Go to the Actions page and enable the GitHub Actions feature.

![Enable GitHub Actions](/developer/raspbian_1.png "Enable GitHub Actions")

There are two ways to trigger the build process, and each build takes about 40 minutes.

### Build manually

Go to the Actions page, select Build FlyDog SDR Image from the Workflows form, expand the Run workflow menu, and run the workflow to trigger the build.

![Run workflow](/developer/raspbian_2.png "Run workflow")

### Daily build

Edit the `.github/workflows/build.yml` file, uncomment the `schedule` field and commit.

```
on:
  schedule:
  - cron: 0 20 * * * *
  push:
    branches:
      - branches: master
  workflow_dispatch:

```

Thereafter, the build will be triggered automatically at 20:00 UTC each day.

To specify that builds are automatically triggered at other times, please refer to the Crontab expression given in [crontab.guru](https://crontab.guru).
