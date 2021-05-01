# 在地图中列出 FlyDog SDR 实例

如同 KiwiSDR，用户在设定好 FlyDog SDR 的外部访问地址后，可以考虑将该实例列出在一些地图（线上 SDR 站点导览）上，以供他人访问。

在决定列出实例之前，用户需要满足以下要求。

 - 用户已经在后台中设定好相关站点资讯（位于 Public 标签页，包含经纬度等参数）
 - FlyDog SDR 没有设定访客密码
 - FlyDog SDR 后台默认管理密码已经修改

## 选择地图服务

目前，用户可以选择在如下地图服务中列出 FlyDog SDR 实例。

 - Receiverbook：FlyDog SDR Project 推荐使用 Receiverbook。这是由 [Jakob Ketterl](https://github.com/jketterl) 所维护的线上 SDR 站点导览网站
 - LinkFanel：由 KiwiSDR 所维护的线上 SDR 站点导览网站

此外，实例亦可在上述网站同时列出。

### Receiverbook

前往 [Receiverbook - add new receiver](https://www.receiverbook.de/receivers/new)，并在该页面中输入 FlyDog SDR 的 URL。

```
example.p.sdrotg.com
```

若 URL 为非标准 HTTP 端口时，则需要加上端口号。

```
mydns.org:8073
```

稍等片刻，即可在 [receiverbook.de/map](https://www.receiverbook.de/map) 看到自己的设备。

### Linkfanel

前往 FlyDog SDR 后台管理中的 Public 标签页，打开 `Register on rx.kiwisdr.com?` 开关即可。

但是根据用户反馈，KiwiSDR 似乎会屏蔽某些 FlyDog SDR 站点。这一情况主要发生在使用了反向代理时。

要让 FlyDog SDR 在 Linkfanel 长期稳定地列出，用户可以采取如下措施。

 - 后台管理中 Public 标签页内的站点资讯避免包含 FlyDog SDR 字样
 - 使用 IP 或者 DDNS 作为访问 URL