# Generate FPGA Bitstreams

FlyDog SDR uses an FPGA to process the data sampled by the ADC, so the associated FPGA bitstream file (.bit) needs to be built.

## Build the Development Environment

FlyDog SDR uses Vivado 2017.4 for FPGA development.

### System Requirements

Vivado 2017.4 supports the following versions of operating systems and distributions (x86-64 based processor architectures only)

* Microsoft Windows 7
* Microsoft Windows 10
* Red Hat Enterprise Linux 6.6
* SUSE Linux Enterprise 11.4
* CentOS 7
* Ubuntu Linux 16.04 LTS

Vivado 2017.4 will take up approximately 23 GB of disk space after installation.

For Vivado 2017.4 release notes, see [ug973-vivado-release-notes-install-license.pdf](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2017_4/ug973-vivado-release-notes-install-license.pdf).

### Get Vivado

To download Vivado 2017.4, developers will need to [create a Xilinx account](https://www.xilinx.com/registration/create-account.html).

After logging in to your account, go to the [Vivado 2017.4 download page](https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/archive.html), select **Vivado HLx 2017.4: All OS installer Single-File Download** and fill in the relevant form to obtain the file download link.

The file size of Vivado 2017.4 is 26.55 GB and you will need to have a good internet connection to download it.

### Installing Vivado

After unzipping `Xilinx_Vivado_SDK_2017.4_1216_1.tar.gz`, execute `xsetup.exe` as administrator on Windows and `xsetup`  in privileged mode on Linux.

During the installation process, choose to install ISE WebPACK Design Software.

Once the installation is complete, the user can set the relevant environment variables to ensure that Vivado-related commands can be executed in the terminal (optional setting).

For Windows systems, add `Vivado-installation-path/bin` to the `PATH` in the Advanced System Settings.

For Linux systems, add `export PATH=/opt/Xilinx/Vivado/2017.4/bin:$PATH` to the current user's `.bashrc` file.

## Create a Vivado Project

### Source and IP Cores

Use Git to get the `FlyDog_SDR_GPS` core source code.

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com/flydog-sdr/FlyDog_SDR_GPS.git

```

For mainland China developers, it's recommend to pull using the GitHub mirror `github.com.cnpmjs.org` .

```
[fdsdr@flydog-sdr-project ~]$ git clone https://github.com.cnpmjs.org/flydog-sdr/FlyDog_SDR_GPS.git

```

Create a new empty directory called `project` and create a new subdirectory `flydog` in this empty directory.

Then create two new directories `import_src` and `import_ip` in the `flydog` directory, with the following directory tree structure.

```
[fdsdr@flydog-sdr-project ~]$ tree -d project
project
└── flydog
    ├── import_ip
    └── import_src

3 directories

```

Copy everything under `FlyDog_SDR_GPS/verilog` to `project/flydog/import_src` and everything under `FlyDog_SDR_GPS/verilog.Vivado.2017.4.ip` to `project/flydog/import_ip`.

`import_src` contains the FPGA related project files and `flydog/import_ip` contains the related IP cores.

### Create a Project and Import the Source and IP Cores

Start Vivado 2017.4 and select Create Project under Quick Start on the home page to create a new project.

1. In the wizard that appears, fill in the project name (flydog) and select the path to the `project` directory.
   ![Project Name](/developer/fpga_1.png "Project Name")
2. Select RTL Project for Project Type and leave Do not specify source at this time unchecked.
3. Click Add Directories and select `project/flydog/import_src`. Check Scan and add RTL include files into project and Add sources from sub directories, uncheck Copy sources into project.
   ![Add Sources](/developer/fpga_2.png "Add Sources")
4. Click Add Files on the Add Constraints page, select `KiwiSDR.xdc` and leave Copy constraints files into project unchecked.
   ![Add Constraints](/developer/fpga_3.png "Add Constraints")
5. Select the hardware in the Default Part page. Type `xc7a35tftg256-1` in the search box and check the listed hardware.
   ![Default Part](/developer/fpga_4.png "Default Part")

Once the project has been created, click Add Sources in the left menu of the Vivado 2017.4 main screen to add the IP cores.

1. Select Add or create design sources in the wizard that appears.
2. In the Add or Create Design Sources page that appears, click Add Directories and select `project/flydog/import_ip`. Check Copy sources into project and Add sources from subdirectories, uncheck Scan and add RTL include files into project.
   ![Add or Create Design Sources](/developer/fpga_5.png "Add or Create Design Sources")
3. Click Finish to complete the import of the IP cores.

The critical warning that appears during IP core import is safe and can be ignored.

## Generate FPGA Bitstream

In the Sources window, expand the Verilog Header entry and double click on `kiwi.cfg.vh` to edit it.

`kiwi.cfg.vh` will specify that Vivado 2017.4 generates different FPGA bitstream files, corresponding to the 4 FPGA modes of the FlyDog SDR.

### KiwiSDR.rx4.wf4.bit

By default, the configuration in `kiwi.cfg.vh` is 4 users (rx4) 4 waterfalls (wf4).

Click Generate Bitstream in the left menu of the Vivado 2017.4 main interface, Vivado 2017.4 will then synthesize the IP cores and, once the synthesis is complete, start generating the FPGA bitstream.

The time used for this process varies depending on the configuration of the computer.

During synthesis, a Synthesis out-of-date warning will appear and can be ignored.

The path to the generated FPGA bitstream file is `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`. Rename the file to `KiwiSDR.rx4.wf4.bit` and move it to another directory.

Close Vivado 2017.4 directly and reopen the project via `project/flydog/flydog.xpr` to avoid a Synthesis out-of-date error in Vivado 2017.4 that will cause the IP to be synthesized again when generating other mode FPGA bitstreams next time.

### kiwiSDR.rx3.wf3.bit

Change the `RX_CFG` string in the `kiwi.cfg.vh` file to `3`.

The code is as follows.

```
parameter RX_CFG = 4;
``define USE_WF

```

Then click Generate Bitstream in the left menu of the Vivado 2017.4 main screen.

The path to the generated FPGA bitstream file is `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`. Rename the file to `KiwiSDR.rx3.wf3.bit` and move it to another directory.

### KiwiSDR.rx8.wf2.bit

The operation is roughly the same as generating `KiwiSDR.rx3.wf3.bit` , but the `kiwi.cfg.vh` file has a corresponding value of `8` for the `RX_CFG` field.

The code is as follows.

```
parameter RX_CFG = 8;
``define USE_WF

```

The path to the generated FPGA bitstream file is `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`. Rename the file to `KiwiSDR.rx8.wf2.bit` and move it to another directory.

### KiwiSDR.rx14.wf0.bit

The operation is much the same as generating `KiwiSDR.rx3.wf3.bit` , except that the `RX_CFG` field in the `kiwi.cfg.vh` file has a corresponding value of `14` and the `define USE_WF` field needs to be removed or commented out.

The code is as follows.

```
parameter RX_CFG = 14;

```

The path to the generated FPGA bitstream file is `project/flydog/flydog.runs/impl_1/KiwiSDR.bit`. Rename the file to `KiwiSDR.rx14.wf0.bit` and then move it to another directory.
