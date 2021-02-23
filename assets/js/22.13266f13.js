(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{385:function(t,_,v){"use strict";v.r(_);var a=v(18),l=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"调节频率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调节频率"}},[t._v("#")]),t._v(" 调节频率")]),t._v(" "),v("p",[t._v("在 FlyDog SDR 上可以用两种方法跳转到要收听的频率。")]),t._v(" "),v("h2",{attrs:{id:"直接输入频率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#直接输入频率"}},[t._v("#")]),t._v(" 直接输入频率")]),t._v(" "),v("p",[t._v("在 FlyDog SDR 主界面上的仪表盘左上角输入要收听的频率后，按下 Enter 键即可。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/manual/freq_1.png",alt:"Frequency",title:"Frequency"}})]),t._v(" "),v("p",[t._v("需要注意的是，频率单位为 kHz。有关不同频率单位间换算如下。")]),t._v(" "),v("ul",[v("li",[t._v("1 kHz = 1, 000 Hz")]),t._v(" "),v("li",[t._v("1 MHz = 1, 000 kHz")]),t._v(" "),v("li",[t._v("1 GHz = 1, 000 MHz")])]),t._v(" "),v("h2",{attrs:{id:"在频谱图上选择频率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在频谱图上选择频率"}},[t._v("#")]),t._v(" 在频谱图上选择频率")]),t._v(" "),v("p",[t._v("在 PC 端上，通过滑鼠滚轮浏览频谱，在寻找到要收听的频率后，在频谱的这个位置点击即可。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/manual/freq_2.png",alt:"Waterfall",title:"Waterfall"}})]),t._v(" "),v("p",[t._v("由于所点击的位置可能和要锁定的频率稍有偏差，这时可以通过仪表盘上的 "),v("code",[t._v("+")]),t._v(" 或 "),v("code",[t._v("-")]),t._v(" 图标来对频率进行微调。")]),t._v(" "),v("p",[t._v("在移动设备上（手机、平板电脑等），则需要使用双指对频谱进行操作，寻找到要收听的频率后，然后在这个位置点击以切换频率。")]),t._v(" "),v("h2",{attrs:{id:"调节带宽"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#调节带宽"}},[t._v("#")]),t._v(" 调节带宽")]),t._v(" "),v("p",[t._v("当正在收听的电台收到邻近电台的轻微干扰时，用户可以通过调节接收带宽来获得最佳接收效果。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/manual/freq_3.png",alt:"Bandwidth",title:"Bandwidth"}})]),t._v(" "),v("p",[t._v("通过拖拽指针所覆盖的宽度，直到邻频干扰程度最小为止。")]),t._v(" "),v("h2",{attrs:{id:"锁定频率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁定频率"}},[t._v("#")]),t._v(" 锁定频率")]),t._v(" "),v("p",[t._v("为防止误操作，用户可以锁定正在收听的频率。")]),t._v(" "),v("p",[t._v("在 PC 端上，选择好要收听的电台后，在频谱图上按下滑鼠右键，在弹出的选单中选择 lock tunning 即可锁定频率；在移动设备上，使用双指同时点击频谱图，在弹出的选单中选择 lock tunning 即可锁定频率。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/manual/freq_4.png",alt:"lock tunning",title:"lock tunning"}})]),t._v(" "),v("p",[t._v("频率锁定后，用户仍然可以对频谱图进行缩放操作，但是无法切换到其他频率。")]),t._v(" "),v("p",[t._v("如果需要解锁频率，再次重复上述操作，在弹出的选单中选择 unlock tunning 即可解锁。")]),t._v(" "),v("h2",{attrs:{id:"保存电台"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保存电台"}},[t._v("#")]),t._v(" 保存电台")]),t._v(" "),v("p",[t._v("用户可以将自己喜欢的电台频率存入 FlyDog SDR 的数据库中，方便日后使用。")]),t._v(" "),v("p",[t._v("需要注意的是，该操作需要在 PC 端上进行。")]),t._v(" "),v("ol",[v("li",[t._v("在 FlyDog SDR 的主界面跳转到要存入的电台")]),t._v(" "),v("li",[t._v("按住键盘 Shift 键不放")]),t._v(" "),v("li",[t._v("在 FlyDog SDR 主界面频率刻度上方空白处点击")]),t._v(" "),v("li",[t._v("输入后台管理密码（如果是内网连接则可跳过该步骤）")]),t._v(" "),v("li",[t._v("完成 DX label edit 表单，然后按下 Add")])]),t._v(" "),v("p",[t._v("表单中的各项值含义如下。")]),t._v(" "),v("ul",[v("li",[t._v("Freq：保存的频率，根据实际需求填写或保持默认")]),t._v(" "),v("li",[t._v("Mode：广播模式，根据实际需求填写或保持默认")]),t._v(" "),v("li",[t._v("Passband：使用的带宽，根据实际需求填写或留空")]),t._v(" "),v("li",[t._v("Type：分类，根据用户选中的类型，标签亦会有不同颜色")]),t._v(" "),v("li",[t._v("Offset：频率偏移，根据实际需求填写或留空")]),t._v(" "),v("li",[t._v("Ident：电台名称，根据实际需求填写")]),t._v(" "),v("li",[t._v("Notes：备注，根据实际需求填写或留空")]),t._v(" "),v("li",[t._v("Extension：跳转到该频率时唤起的附加组件，根据实际需求填写或留空")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/manual/freq_5.png",alt:"DX label edit",title:"DX label edit"}})]),t._v(" "),v("h2",{attrs:{id:"分享电台"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分享电台"}},[t._v("#")]),t._v(" 分享电台")]),t._v(" "),v("p",[t._v("用户可以分享自己正在收听的电台，生成一段 URL，和他人一同收听。")]),t._v(" "),v("p",[t._v("当他人访问这串 URL 后，FlyDog SDR 将会自动跳转到相应的频率，")]),t._v(" "),v("p",[t._v("按下 FlyDog SDR 主界面上的仪表盘频率输入框右下角的按钮，即可将这串 URL 复制到剪贴板。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/manual/freq_6.png",alt:"Share URL",title:"Share URL"}})])])}),[],!1,null,null,null);_.default=l.exports}}]);