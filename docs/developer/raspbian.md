# 构建 Raspbian 镜像

FlyDog SDR 提供已经集成好了 FlyDog SDR 的 Raspbian 的镜像，同时用户亦可自行构建已集成 FlyDog SDR 的 Raspbian。

## 使用 GitHub Actions 构建

要使用 GitHub Actions 进行云构建，需要具备 GitHub 账户。

前往 [github.com/bclswl0827/raspbian-builder/actions](https://github.com/bclswl0827/raspbian-builder/actions)，将该专案 Fork 至自己的账户，转到 Actions 页面，启用 GitHub Actions 功能。

对专案根目录中的 `config` 文件进行修改，提交代码后，即可触发云构建流程。

整个构建过程约 40 分钟，构建完成后，即可得到相应系统镜像。

## 自定义配置

`config` 文件各项值说明如下。

| 变量 | 说明 |
| :--- | :--- |
| `IMG_NAME` | 镜像名称 |
| `RELEASE` | Debian 版本代号 |
| `TARGET_HOSTNAME` | 指定主机名 |
| `FIRST_USER_NAME` | 指定用户名 |
| `FIRST_USER_PASS` | 指定用户密码 |
| `ENABLE_SSH` | 启用 SSH |
| `LOCALE_DEFAULT` | 默认 Locale |
| `KEYBOARD_KEYMAP` | 默认键盘布局 |
| `TIMEZONE_DEFAULT` | 默认时区 |
