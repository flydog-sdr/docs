(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{409:function(t,e,a){"use strict";a.r(e);var s=a(18),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"停用自动更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停用自动更新"}},[t._v("#")]),t._v(" 停用自动更新")]),t._v(" "),a("p",[t._v("FlyDog SDR 与 KiwiSDR 相比，有着完全不同的更新方式。")]),t._v(" "),a("p",[t._v("每次有更新时，FlyDog SDR Project 会预先编译并打包好相关 Docker 镜像（约 100 MB），然后再将更新下发至客户设备中。")]),t._v(" "),a("p",[t._v("要停用自动更新，用户无法从后台管理中操作。FlyDog SDR Project 不希望用户停用自动更新，因为目前 FlyDog SDR Project 仍然在对 FlyDog SDR 进行相关调整，但用户仍然可以通过 SSH 进入 FlyDog SDR 系统，然后停用自动更新功能。")]),t._v(" "),a("p",[t._v("以下是停用自动更新的方法。")]),t._v(" "),a("ol",[a("li",[t._v("使用 SSH 工具登入到 FlyDog SDR")]),t._v(" "),a("li",[t._v("在终端中输入命令以停用自动更新")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('flydog@flydog-sdr:~ $ docker exec admin bash -c "echo 0 > /etc/kiwi.config/_UPDATE"\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("用户可以测试自动更新是否停用")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flydog@flydog-sdr:~ $ docker exec admin updater.sh\nAuto-update is disabled, exiting...\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);