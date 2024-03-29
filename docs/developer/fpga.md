# 构建 FPGA 比特流

FlyDog SDR 使用 FPGA 处理由 ADC 采样后得到的数据，所以需要构建相关 FPGA 比特流文件（.bit）。

## 搭建开发环境

FlyDog SDR 使用 Vivado 2022.2 进行 FPGA 开发。

### 系统要求

Vivado 2022.2 支持以下版本的操作系统及发行版。

 - Microsoft Windows Professional/Enterprise 10.0 1903 Update; 10.0 1909 Update; 10.0 2004 Update: 10.0 20H2 Update; 10.0 21H1 Update
 - Microsoft Windows 11
 - Red Hat Enterprise Workstation/Server 7.4, 7.5, 7.6, 7.7, 7.9, 8.2, 8.3, 8.4, 8.5, and 8.6 (64-bit), English/Japanese
 - CentOS 7.4, 7.5, 7.6, 7.7, and 7.9 (64-bit), English/Japanese
 - SUSE Linux Enterprise 12 SP and 15 SP2 (64-bit), English/Japanese
 - Amazon Linux 2 AL2 LTS (64-bit)
 - Ubuntu Linux 18.04.1 LTS; 18.04.2 LTS, 18.04.3 LTS; 18.04.4 LTS; 18.04.5 LTS; 18.04.6 LTS; and 20.04 LTS, 20.04.1 LTS, 20.04.2 LTS, 20.04.3 LTS, 20.04.4 LTS; 22.04 LTS (64-bit), English/Japanese

Vivado 2022.2 安装后，将会占用约 34 GB 的磁盘空间。

有关 Vivado 2022.2 的版本发布通知，详见 [Vivado Design Suite User Guide: Release Notes, Installation, and Licensing (UG973)](https://docs.xilinx.com/r/2022.2-English/ug973-vivado-release-notes-install-license)。

### 下载 Vivado

要下载 Vivado 2022.2，开发者需先 [创建一个 AMD 账户](https://www.amd.com/en/registration/create-account.html)。

登入账户后前往 [Vivado 2022.2 下载页面](https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/2022-2.html)，选择 **Vivado ML Edition - 2022.2  Full Product Installation** 并填写相关表格后，获取文件下载链接。

Vivado 2022.2 文件大小为 89.4 GB，下载时需要保持网络通畅。

### 安装 Vivado

解压 `Xilinx_Unified_2022.2_1014_8888.tar.gz` 后，Windows 下以管理员身份执行 `xsetup.exe`，Linux 下以特权模式执行 `xsetup` 。

在安装过程中，选择安装 ISE WebPACK Design Software。

安装完成后，用户可以设定相关环境变量，以保证能够在终端中执行 Vivado 相关命令（可选设置）。

对于 Windows 系统，在“高级系统设置”中将 `Vivado 安装路径/bin` 添加到 `PATH` 中。

对于 Linux 系统，将 `export PATH=/opt/Xilinx/Vivado/2022.2/bin:$PATH` 添加到当前用户 `.bashrc` 文件中即可。

## 创建 Vivado 专案

### 获取源码和 IP 核

使用 Git 获取 `FlyDog_SDR_GPS`  核心源码。

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com/flydog-sdr/FlyDog_SDR_GPS.git

```

对于中国大陆开发者，可以使用 GitHub 镜像 `github.com.cnpmjs.org`  进行拉取。

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com.cnpmjs.org/flydog-sdr/FlyDog_SDR_GPS.git

```

新建一个名为 `project` 的空目录，并在这个空目录中新建子目录 `flydog`。

然后在 `flydog` 目录下新建 `import_src` 和 `import_ip` 两个目录，目录树结构如下。

```
[fdsdr@flydog-sdr-project ~]$ tree -d project
project
└── flydog
    ├── import_ip
    └── import_src

3 directories

```

将 `FlyDog_SDR_GPS/verilog` 下的所有内容拷贝到 `project/flydog/import_src`，将 `FlyDog_SDR_GPS/verilog.Vivado.2022.2.ip` 下的所有内容拷贝到 `project/flydog/import_ip`。

`import_src` 包含了 FPGA 相关工程文件，`flydog/import_ip` 包含了相关 IP 核。

### 创建专案并导入源码和 IP 核

启动 Vivado 2022.2，在主页 Quick Start 下方选择 Create Project，新建一个专案。

1. 在出现的向导中填入专案名称（flydog），并选择 `project` 目录所在的路径。
   ![Project Name](/developer/fpga_1.png "Project Name")
2. Project Type 选择 RTL Project，不勾选 Do not specify source at this time。
3. 按下 Add Directories，选择 `project/flydog/import_src`。勾选 Scan and add RTL include files into project 和 Add sources from sub directories，取消勾选 Copy sources into project。
   ![Add Sources](/developer/fpga_2.png "Add Sources")
4. 在 Add Constraints 页面中按下 Add Files，选择 `KiwiSDR.xdc`，不勾选 Copy constraints files into project。
   ![Add Constraints](/developer/fpga_3.png "Add Constraints")
5. 在 Default Part 页面中选择硬件。在搜索框中输入 `xc7a35tftg256-1`，选中列出的硬件。
   ![Default Part](/developer/fpga_4.png "Default Part")

专案创建完成后，在 Vivado 2022.2 主界面左侧选单按下 Add Sources，添加 IP 核。

1. 在出现的向导中选择 Add or create design sources。
2. 在随后出现的 Add or Create Design Sources 页面中按下 Add Directories，选择 `project/flydog/import_ip`。勾选 Copy sources into project 和 Add sources from subdirectories，取消勾选 Scan and add RTL include files into project。
   ![Add or Create Design Sources](/developer/fpga_5.png "Add or Create Design Sources")
3. 按下 Finish，完成 IP 核的导入。

IP 核导入时出现的严重警告是安全的，可以忽略。

### 升级 IP 核

为了保证构建流程顺利进行，需要对 IP 核进行升级。

在 Vivado 2022.2 主界面上方选单中按下 Reports，选择 Report IP Status。

![Report IP Status](/developer/fpga_6.png "Report IP Status")

在 Vivado 2022.2 主界面下方 IP Status 页面中，按下 Upgrade Selected，在弹出的对话框中按下 OK，即可对 IP 核进行升级。

![IP Status](/developer/fpga_7.png "Upgrade Selected IP")

## 生成 FPGA 比特流

在 Sources 窗口中展开 Verilog Header 一项，双击 `kiwi.cfg.vh` 对其进行编辑。

`kiwi.cfg.vh` 会指定 Vivado 2022.2 生成不同的 FPGA 比特流文件，对应 FlyDog SDR 的 4 种接收模式。

### 生成 KiwiSDR.rx4.wf4.bit

默认情况下，`kiwi.cfg.vh` 中的配置为四用户（rx4）四频谱（wf4）。

在 Vivado 2022.2 主界面左侧选单按下 Generate Bitstream，随后 Vivado 2022.2 会对 IP 核进行综合，综合完成后，开始生成 FPGA 比特流。

根据计算机配置的不同，该过程所使用的时间亦有差异。

在综合过程中，会出现 Synthesis out-of-date 的警告，可以忽略。

生成的 FPGA 比特流文件路径为 `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`。将该文件重命名为 `KiwiSDR.rx4.wf4.bit` 后，移动到其他目录。

直接关闭 Vivado 2022.2，然后通过 `project/flydog/flydog.xpr` 重新打开专案，避免 Vivado 2022.2 因 Synthesis out-of-date 警告而导致接下来构建其他模式 FPGA 比特流时再次对 IP 核进行综合。

### 生成 KiwiSDR.rx3.wf3.bit

修改 `kiwi.cfg.vh` 文件 `RX_CFG` 对应值为 `3`。

代码如下。

```
parameter RX_CFG = 4;
`define USE_WF

```

然后在 Vivado 2022.2 主界面左侧选单按下 Generate Bitstream。

生成的 FPGA 比特流文件路径为 `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`。将该文件重命名为 `KiwiSDR.rx3.wf3.bit` 后，移动到其他目录。

### 生成 KiwiSDR.rx8.wf2.bit

操作与生成 `KiwiSDR.rx3.wf3.bit`  大致相同，但 `kiwi.cfg.vh` 文件 `RX_CFG` 字段对应值为 `8`。

代码如下。

```
parameter RX_CFG = 8;
`define USE_WF

```

生成的 FPGA 比特流文件路径为 `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`。将该文件重命名为 `KiwiSDR.rx8.wf2.bit` 后，移动到其他目录。

### 生成 KiwiSDR.rx14.wf0.bit

操作与生成 `KiwiSDR.rx3.wf3.bit`  大致相同，但 `kiwi.cfg.vh` 文件 `RX_CFG` 字段对应值为 `14`，且需要移除或者注释掉 `define USE_WF` 字段。

代码如下。

```
parameter RX_CFG = 14;

```

生成的 FPGA 比特流文件路径为 `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`。将该文件重命名为 `KiwiSDR.rx14.wf0.bit` 后，移动到其他目录。
