# 系统基本资讯

## 后台管理

后台管理页面位于 [flydog-sdr:8073/admin](http://flydog-sdr:8073/admin)，其初始密码为 `flydog-sdr`。

**您需要在登入后立刻修改默认密码，以免系统被他人恶意破解。**

登入后台后，在 Security 标签页中即可修改密码，请尽量使用强大安全密码。

前往 [sdrotg.com/manual/admin.html#登入到后台管理页面](https://sdrotg.com/manual/admin.html#%E7%99%BB%E5%85%A5%E5%88%B0%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E9%A1%B5%E9%9D%A2) 了解如何修改后台管理页面密码。

有关设定密码的技巧，可以参考文章：[BBC 教你如何搞定好记而不易攻破的安全密码](https://www.bbc.com/zhongwen/simp/50282159)

## SSH 密码

FlyDog SDR 配套系统默认启用 SSH，若要进入终端对系统进行调试，请借助以下认证凭据登入到 FlyDog SDR 系统终端。

| 名称 | 值 |
| :--- | :--- |
| 主机名 | flydog-sdr |
| SSH 端口 | 22 |
| 用户名 | flydog |
| 密码 | flydog-sdr |

**进入终端后请谨慎操作，避免因失误而致设备无法正常运行，甚至丢失数据。**

**切勿将 SSH 端口（22）直接开放于公网，以免被他人恶意破解。**
