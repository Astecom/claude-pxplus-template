# Special File Handling

***WINDEV*** |  **_Raw Print Mode_**  
---|---  
  
##  Formats

1. |  _Open Device File_ _:_ |  **OPEN (**_chan_**[,**_fileopt_**])"*WINDEV*[;**_Q_name_**]"**  
---|---|---  
2. |  _Open for Read-Only Mode_: |  **OPEN INPUT (**_chan_**[,**_fileopt_**])"*WINDEV*[;**_Q_name_**]"**  
3. |  _Open for [WDX]_: |  **OPEN [INPUT] (**_chan_**[,**_fileopt_**])"[WDX]*WINDEV*[;**_Q_name_**]"**  
  
**_Where:_**

_chan_ |  Channel or logical file number (e.g. open (1)"*windev*").  
---|---  
_fileopt_ |  File options. Supported options for opening ***WINDEV*** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**OPT=**_char$_ |  File Open options  
  
See **[About File OPEN Options](../directives/open.htm#Mark5)** for the **OPEN** directive.

To obtain the current **OPT=** value, use the [**OPT( )**](../functions/opt.md) function.  
  
_Q_name_ |  Print queue to open. (If you omit the queue name, a printer selection dialogue appears at run time to let the user select the printer and its properties.) Valid _Q_name_ options include: | 

  * OS name of an existing physical print queue on the local Windows machine:  
  
open (14)"*WINDEV*;HP LaserJet"

  
---  
  
  * OS name of print queue **ON** resource (UNC, format: **ON** _\\\machine\resource_ for any shared resource or **ON _lpt_** _#_ for direct local access to a port):  
  
open (14)"*WINDEV*;HPLaserJetON\\\Main_Server\P Laser"  
open (14)"*WINDEV*;LP ON LPT1"

  
  
  * One of the following queue selection keywords:

|  |  **ASIS** |  Most recently selected printer and properties  
---|---|---  
|  **DEFAULT** |  Printer currently "Set As Default" in the system (e.g. open (30,err=9900)"*WINPRT*;DEFAULT")  
|  **NORMAL** |  Normal dialogue with page range (no paper size, source tray)  
|  **SETUP** |  Setup dialogue with paper size, source tray (no page range)  
  
The _Q_name_ is optional. ***WINDEV*** does not support setting queue options (graphical printer properties in the Windows **_Printer_** dialogue box such as ORIENTATION=landscape;copies=3).

See **[*WINPRT* / *WINDEV* Queues](_winprt_windev_queues.md)**.  
  
**[WDX]** |  ***WINDEV*** is specific to Windows operating systems. Under UNIX, PxPlus automatically directs ***WINDEV*** access to the WindX client: open (14)"*windev*" ! For the PC client from UNIX host  
  
In a Windows NT environment, the ***WINDEV*** printer is opened relative to the host unless you prefix the printer name with **[WDX]** : open (14)"*windev*" ! For the NT host  
open (14)"[WDX]*windev*" ! For the NT PC client  
***WINDEV*** |  Keyword, not case sensitive. Special device filename, enclosed in quotation marks within the **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

#### **Note:**  
***WINDEV*** is supported for use in **_WindX_** or **_Windows only_**.

Use ***WINDEV*** with your **OPEN** and/or **OPEN INPUT** directives to gain access to the Windows print subsystem in **_raw_** or **_pass-through_** mode. For standard API access, use [***WINPRT* Windows Printing**](~winprt~.md).

You can identify the LPT for direct local access to the port or use UNCs (Universal Naming Conventions) for transmissions to a shared resource. For both LPT and UNC use, note that you can use raw escape sequences but graphical printing is not supported. LPT identification is not recommended under Windows NT.

Normally, you can take advantage of ***WINDEV*** to send data to the printer without having the driver strip out escape codes (for instance, to pass PCL code to the printer). That is, you **_can_** use escape sequences with ***WINDEV*** , but these must be both valid and supported by your given printer and print driver.

PxPlus recognizes ***WINDEV*** as a special device file in your **OPEN [INPUT]** directive and deals with it internally in the language at run time. PxPlus returns an Error #12: File does not exist (or already exists) on the **OPEN** if no printers are installed or if the user selects the Cancel button in a printer selection dialogue. (This error can also occur if no printer is "Set As Default".)

**_Raw Printing Behavior_******

PxPlus supports **_raw_** mode to send raw data to a Windows printer. You can control raw printing mode using the [**'RP'**](../parameters/rp.md) system parameter. This parameter's default is **ON**. When you turn it **OFF** , PxPlus uses the old **_pass through_** mode.

The printer drivers should not (but might) strip escape sequences from the data you send to ***WINDEV***. Support for raw mode is printer and driver-dependent. Some drivers can destroy certain escape sequences (removing them from the data stream). If escape sequences disappear from your ***WINDEV*** print jobs, check the sequences for validity and check printer/driver appetites with their manufacturers.

#### **Note:**  
Attempting to issue any form of graphical mnemonic to a raw printer connection (***WINDEV***) will result in an Error #13: File access mode invalid.

##  Format 1

**_Open Device File_**

**OPEN (**_chan_**[,**_fileopt_**])"*WINDEV*[;**_Q_name_**]"**

Use this format to open the ***WINDEV*** device file to pass print jobs through in raw mode to the given queue on your open channel. See **[*WINPRT* / *WINDEV* Printing Examples](_winprt_windev_printing.md)**.

#### **Note:**  
Some device drivers issue an extra blank page (some even hang) if an open channel is closed too quickly or if nothing is printed to the channel before it is closed. Use the **[OPEN INPUT](../directives/open.md)** directive to bypass problems of this nature.

##  Format 2

**_Open for Read-Only Mode_**

**OPEN INPUT (**_chan_**[,**_fileopt_**])"*WINDEV*[;**_Q_name_**]"**

Use the **[OPEN INPUT](../directives/open.md)** directive to open ***WINDEV*** in read-only mode when you only want to determine the name and properties of a printer without sending a physical job. With an **OPEN INPUT** directive, you can open the printer, query the printer's properties, and close the channel without starting a physical job.

**_Example:_**

Use the **[WINPRT_SETUP READ PROPERTIES](../directives/winprt_setup.md)** directive or the **[MXC( ) / MXL( )](../functions/mxc.md)** functions without generating a Form Feed:

> if WDX%<>$00$ then open input (30)"*WINDEV*;ASIS"  
>  C=mxc(30)+1 ! Zero-based. For this printer mxc(30)=79, C=80 (0-79 columns)  
>  L=mxl(30)+1 ! Also zero-based  
> winprt_setup read properties WHAT_PROP$  
>  ! WHAT_PROP$ returns printer-specific list (items such as COPIES=1, OFFSET=0:0)

#### **Note:**  
The **['FONT'](../mnemonics/font.md)** mnemonic works with ***WINPRT*** , but not with any of the text-mode printers. To control fonts on a text mode device, send raw escape sequences to the printer using ***WINDEV*** , UNC (Universal Naming Conventions), or direct access to LPT ports. Your choice of fonts via ***WINDEV*** , UNC or LPT is limited to the fonts supported by the given printer.

##  Format 3

**_Open for [WDX]_**

**OPEN [INPUT] (**_chan_**[,**_fileopt_**])"[WDX]*WINDEV*[;**_Q_name_**]"**

On an NT or PC server, if you include **[WDX]** in your **OPEN [INPUT]** directive (e.g. open (30)"[WDX]*WINDEV*"), then that signals PxPlus to direct any print jobs and dialogues to the WindX client PC, which will in turn use its Windows print subsystem to send jobs to the given printer.

If you are using ***WINDEV*** on an NT Server and do not use **[WDX]** in your **OPEN** directive, then the printer selection dialogue will appear on the server console, and any print queue you name directly must exist on the NT server in the Control Panel Printers folder.

#### **Note:  
** You must install and use WindX to use ***WINDEV*** in a UNIX environment; however, you do not need the **[WDX]** tag on a UNIX server because PxPlus automatically directs ***WINDEV*** access to your WindX client PC.

##  See Also

[**WINPRT_SETUP Windows Printer Setup**](../directives/winprt_setup.md)  
**[MXC( ) / MXL( ) Return Maximum Column/Line](../functions/mxc.md)**  
[***WINPRT* / *WINDEV* Printing Examples**](_winprt_windev_printing.md)  
[**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm)
