# 构建 Raspbian 镜像

FlyDog SDR 提供已经集成好了 FlyDog SDR 的 Raspbian 的镜像，同时用户亦可自行构建已集成 FlyDog SDR 的 Raspbian。

## 使用 GitHub Actions 构建

要使用 GitHub Actions 进行云构建，需要具备 GitHub 账户。

前往 [github.com/flydog-sdr/raspbian-builder](https://github.com/flydog-sdr/raspbian-builder)，将该专案 Fork 至自己的账户

## 自定义配置

`config` 文件各项值说明如下。

| 变量                 | 说明          |
| :----------------- | :---------- |
| `IMG_NAME`         | 镜像名称        |
| `RELEASE`          | Debian 版本代号 |
| `TARGET_HOSTNAME`  | 指定主机名       |
| `FIRST_USER_NAME`  | 指定用户名       |
| `FIRST_USER_PASS`  | 指定用户密码      |
| `ENABLE_SSH`       | 启用 SSH      |
| `LOCALE_DEFAULT`   | 默认 Locale   |
| `KEYBOARD_KEYMAP`  | 默认键盘布局      |
| `TIMEZONE_DEFAULT` | 默认时区        |

## 触发构建流程

转到 Actions 页面，启用 GitHub Actions 功能。

![Enable GitHub Actions](/developer/raspbian_1.png "Enable GitHub Actions")

有两种方式触发构建流程，每次构建所需时间大约为 40 分钟。

### 手动执行构建

转到 Actions 页面，在 Workflows 表单中选择 Build FlyDog SDR Image，展开 Run workflow 菜单，执行 Run workflow，即可触发构建。

![Run workflow](/developer/raspbian_2.png "Run workflow")

### 每日自动构建

编辑 `.github/workflows/build.yml` 文件，取消对 `schedule` 字段的注释，并提交代码。

```
on:
  schedule:
  - cron: 0 20 * * *
  push:
    branches:
      - master
  workflow_dispatch:

```

此后，构建将于每日 20:00 UTC 自动触发。

要指定在其他时段自动触发构建，请参考 [crontab.guru](https://crontab.guru) 给出的 Crontab 表达式。
