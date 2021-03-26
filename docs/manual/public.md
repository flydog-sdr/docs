# 将 FlyDog SDR 开放于公网

## 可用的外部访问方式

用户可以通过以下三种方式将 FlyDog SDR 开放于公网。

 - 使用固定 IP
 - 使用 DDNS
 - 使用反向代理

## 选用何种方式

用户应先了解自己所处的网络环境，然后作出选择。

一般来说， 用户所处的网络环境有三种，分别对应上述三种将 FlyDog SDR 开放于公网的方式。

 - 具备固定公共 IP 位址：用户只需在 FlyDog SDR 所处同一网段的路由器或交换机上做相关端口转发后，即可使用 IP 在公网实现访问
 - 具备动态公共 IP 位址：用户需要使用 DDNS 服务，将动态的 IP 绑定到 DDNS 所分配的域名后，使用 DDNS 分配的域名实现公网访问
 - 不具备公共 IP 位址：由于 ISP 未向用户提供公共 IP 位址（例如使用了 NAT 转换服务），或是运营商拒绝了用户所在 IP 的传入连接，则需要使用由 FlyDog SDR Project 提供的反向代理服务现公网访问

## 使用固定 IP

 - 由 ISP 提供的固定 IP 以 `1.1.1.1` 为例
 - 网关（路由器或交换机）上的操作以 OpenWRT 为例，其他网关设备操作方法类似

登入 OpenWRT 后台，转到 Firewall - Port Forwards，配置端口转发。

![Port Forwarding](/manual/public_1.png "Port Forwarding")

设定好相关端口转发后，保存并应用设定。

登入 FlyDog SDR 后台管理，转到 Connect 标签页，选中 Public IP，在表单中填写由 ISP 提供的固定 IP 位址，将该 IP 位址绑定到系统。

根据系统提示，重启 FlyDog SDR 应用。

![Bind IP](/manual/public_2.png "Bind IP")

重启完毕后，不出意外，现在已经可以使用 `1.1.1.1:8073` 从外部访问 FlyDog SDR。

## 使用 DDNS

FlyDog SDR 内建由 [No-IP](https://www.noip.com/) 提供的免费 DDNS 服务。

 - 注册 No-IP 时的电邮地址以 `example@example.org` 为例
 - 登入 No-IP 时的密码以 `password` 为例
 - 在 No-IP 申请的主机名（Hostname）以 `example.hopto.org` 为例

前往 [No-IP](https://www.noip.com/) 注册一个账户，并设定一个主机名。

![Hostname](/manual/public_3.png "Hostname")

登入 FlyDog SDR 后台管理，转到 Connect 标签页，在 Dynamic DNS update client (DUC) configuration 表单中填入在 No-IP 注册和获取到的相关资讯，并将 Enable DUC at startup 设定为 Yes。

![DUC configuration](/manual/public_4.png "DUC configuration")

填写完表单后，按下 Click to (re)start DUC 在系统注册 DDNS 服务。

滑动到页面上半部分，选中 DUC 以启用 DDNS 服务。

![Enable DUC domain](/manual/public_5.png "Enable DUC domain")

启用 DDNS 服务后，根据系统提示重启应用。

重启完成后，即可使用 `example.hopto.org:8073` 进行访问。

**由于 No-IP 为避免域名滥用问题，免费用户申请的主机名每 30 日需认证一次。有关认证方式请参阅 [why-is-my-hostname-pending-deletion](https://www.noip.com/support/knowledgebase/why-is-my-hostname-pending-deletion/)。用户亦可选用其他 DDNS 服务商，以避免认证的麻烦，但是需要单独运行相关服务（例如在路由器上）。**

## 使用反向代理

FlyDog SDR Project 为用户提供免费的反向代理服务，并提供两个 URL 以供访问。

 - 针对全球加速：`example.p.sdrotg.com`
 - 针对中国大陆优化：`cn.example.p.sdrotg.com`

### 获取连接凭据

用户可以发送电邮到 [flydog_sdr-project@yahoo.co.jp](mailto:flydog_sdr-project@yahoo.co.jp) 来获取使用反向代理的连接凭据。

电邮中需要附上 FlyDog SDR 内置序列号（Serial Number），用户可以在后台管理页的 Network 选项卡中获取。

电邮格式如下。

```
收件人：flydog_sdr-project@yahoo.co.jp
邮件主旨：Reserve proxy request
邮件正文：
    Serial number: 4321
    Requested hostname: example
    Mainland China optimisation: yes
```

FlyDog SDR Project 收到请求后，会在 3 个工作日内将反向代理连接凭据分发给用户。

当用户需要更改 Hostname 时，需要重新发送一封相同电邮以变更记录。

### 配置反向代理

 - User key 示例：`fa51b0d8-f92c-4acb-bace-ddfc8d92107f`
 - Hostname 示例：`example`

登入 FlyDog SDR 后台管理，转到 Connect 标签页，在 Reverse proxy configuration 表单中填入由 FlyDog SDR Project 所分配的反向代理连接凭据。

![Reverse proxy configuration](/manual/public_6.png "Reverse proxy configuration")

填写完成后，按下 Click to (re)register，等待页面返回 Existing account, registration successful，即说明注册成功。

滑动到页面上半部分，选中 Reverse Proxy 以启用反向代理服务。

![Enable reverse proxy](/manual/public_7.png "Enable reverse proxy")

启用反向代理后，根据系统提示重启应用。

重启完成后，即可使用 `example.p.sdrotg.com` 或 `cn.example.p.sdrotg.com` 进行访问。

## 更改从外部访问的端口

由于 FlyDog SDR 运行于容器，所以不能变更默认端口 8073。

但在将 FlyDog SDR 映射至公网时，用户可以通过路由器或交换机上的端口转发功能，让外部网络使用其他端口访问。

以 OpenWRT 为例，在 Firewall - Port Forwards 中可以变更外部访问 FlyDog SDR 的端口。

例如需要在外网使用 8074 端口访问到 FlyDog SDR，则需要在外部端口（External port）处填入 8074，内部端口（Internal port）处填入 8073。

![Change port on OpenWRT](/manual/public_8.png "Change port on OpenWRT")

保存并应用规则后，然后前往 FlyDog SDR 后台管理，转到 Network 标签页，将 External port 表单中的 8073 修改改为 8074。

![External port](/manual/public_9.png "External port")

这是为了在更改外部端口的后，FlyDog SDR 向 `rx.linkfanel.net` 上传的站点资讯亦能更新。

此后，用户可以在外部网络用 8074 端口访问 FlyDog SDR，而内网仍然用 8073 端口访问。
