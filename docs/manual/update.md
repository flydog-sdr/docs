# 自动更新

FlyDog SDR 与 KiwiSDR 相比，有着完全不同的更新方式。

每次有更新时，FlyDog SDR Project 会预先编译并打包好相关 Docker 镜像（约 100 MB），然后再将更新下发至客户设备中。

要停用自动更新，用户无法从后台管理中操作。FlyDog SDR Project 不希望用户停用自动更新，因为目前 FlyDog SDR Project 仍然在对 FlyDog SDR 进行相关调整，但用户仍然可以通过 SSH 进入 FlyDog SDR 系统，然后停用自动更新功能。

以下是停用自动更新的方法。

 1. 使用 SSH 工具登入到 FlyDog SDR
 2. 在终端中输入命令以停用自动更新
```
flydog@flydog-sdr:~ $ docker exec admin bash -c "echo 0 > /etc/kiwi.config/_UPDATE"
```
 3. 用户可以测试自动更新是否停用
```
flydog@flydog-sdr:~ $ docker exec admin updater.sh
Auto-update is disabled, exiting...
```
