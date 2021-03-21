# 构建 Raspbian 镜像

FlyDog SDR 提供已经集成好了 FlyDog SDR 的 Raspbian 的镜像，同时用户亦可自行构建已集成 FlyDog SDR 的 Raspbian。

## 搭建开发环境

要构建用于 FlyDog SDR 的 Raspbian 镜像，需要在 `armv7l` 或 `x86_64` 处理器架构的环境下进行操作。

### 系统要求

构建集成 FlyDog SDR 的 Raspbian 前，需要满足以下要求。

 - 用于构建的机器处理器架构为 `armv7l` 或 `x86_64`
 - 用于构建的机器使用的 Linux 发行版为 Debian Buster 或 Ubuntu Bionic
 - 用于构建的机器没有运行在容器中（Docker）
 - 用于构建的机器没有运行过 Docker，亦不会在今后运行 Docker

### 安装依赖项

在执行构建任务前，需要安装用于构建 Raspbian 的依赖项。

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

### 获取构建代码

从 GitHub 拉取构建集成 FlyDog SDR 的 Raspbian 的源码。

```
fdsdr@flydog-sdr-project:~$ git clone https://github.com/flydog-sdr/raspbian-builder
```

对于中国大陆，可以使用 GitHub 镜像（github.com.cnpmjs.org）进行拉取。

```
fdsdr@flydog-sdr-project:~$ git clone https://github.com.cnpmjs.org/flydog-sdr/raspbian-builder
```

### 自定义配置

进入 `raspbian-builder` 目录，修改 `config`。

```
fdsdr@flydog-sdr-project:~$ cd raspbian-builder
fdsdr@flydog-sdr-project:~/raspbian-builder$ vim config
```

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

## 执行构建

切换到 `root` 用户，运行 `wizard.sh`

```
fdsdr@flydog-sdr-project:~/raspbian-builder$ ./wizard.sh
```

镜像构建完毕后，可以在 `builder/deploy/` 下找到生成的镜像。
