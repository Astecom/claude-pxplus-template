# Special File Handling

***WINPRT*** |  **_Windows Printing_**  
---|---  
  
##  Formats

1. |  _Open Device File_ _:_ |  **OPEN (**_chan_**[,**_fileopt_**])"*WINPRT*[;**_Q_name_**[**_Q_options_**]"**  
---|---|---  
2. |  _Open for Read-Only_ _:_ |  **OPEN INPUT (**_chan_**[,**_fileopt_**])"*WINPRT*[;**_Q_name_**[**_Q_options_**]"**  
3. |  _Open for [WDX]__:_ |  **OPEN [INPUT] (**_chan_**[,**_fileopt_**])"[WDX]*WINPRT*[;**_Q_name_**[**_Q_options_**]"**  
  
**_Where:_**

_chan_ |  Channel or logical file number (e.g. open (1)"*winprt*").  
---|---  
_fileopt_ |  File options. Supported options for opening ***WINPRT*** include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**OPT=**_char$_ |  File open options  
  
See **[About File OPEN Options](../directives/open.htm#Mark5)** for the **OPEN** directive.

To obtain the current **OPT=** value, use the [**OPT( )**](../functions/opt.md) function.  
  
_Q_name_ |  Print queue to open. (If you omit the queue name, a printer selection dialogue appears at run time to let the user select the printer and its properties.)  
  
Valid _Q_name_ options include: | 

  * OS name of an existing physical print queue on the local Windows machine:  
  
open (14)"*WINPRT*;HP LaserJet"

  
---  
  
  * OS name of print queue **ON** resource (UNC, format: **ON** _\\\machine\resource_ for any shared resource **_or_** **ON** _LPT#_ for direct local access to a port):  
  
open (14)"*WINPRT*;HPLaserJet ON \\\Main_Server\P Laser"  
open (14)"*WINPRT*;LP ON LPT1"

  
  
  * One of the following queue selection keywords:

|  |  **ASIS** |  Most recently selected printer and properties  
---|---|---  
|  **DEFAULT** |  Printer currently "Set As Default" in the system (e.g. open (30,err=9900)"*WINPRT*;DEFAULT")  
|  **NORMAL** |  Normal dialogue with page range (no paper size, source tray)  
|  **SETUP** |  Setup dialogue with paper size, source tray (no page range)  
  
While the _Q_name_ is optional, it is mandatory in directives if you want to assign or override queue properties (_Q_options_ below). See **[*WINPRT* / *WINDEV* Queues](_winprt_windev_queues.md)**.  
  
_Q_options_ |  Override printer properties. String expressions. You can override printer and driver specific values by assigning a new value to the queue (e.g. copies=2 instead of copies=1).  
  
Use **;** (_semi-colons_) to separate items if you have a list._(Q_options must be preceded by a Q_name; i.e. HP LaserJet in the example below or a queue keyword like**DEFAULT**_).  
  
Specific properties are listed under [**WINPRT_SETUP Properties**](../directives/winprt_setup.htm#Mark5). See [***WINPRT* and *WINDEV* Queue Properties**.](_winprt_windev_queues.htm#Mark8) **_Example:  
  
_** open (30)"*WINPRT*;HP LaserJet;orientation=landscape;copies=3"  
**[WDX]** |  ***WINPRT*** is specific to Windows operating systems. Under UNIX, PxPlus automatically directs ***WINPRT*** access to the WindX client:  
  
open (14)"*winprt*" ! For the PC client from UNIX host  
  
In a Windows NT environment, you are opening the ***WINPRT*** printer relative to the host unless you prefix the printer name with the **[[WDX]](../command_tags/wdx.htm)** tag: open (14)"*winprt*" ! For the NT host  
open (14)"[WDX]*winprt*" ! For the NT PC client The ***WINPRT*** Keyword is not case sensitive. Special device filename, enclosed in quotation marks within the **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

#### **Note:**  
***WINPRT*** is supported for use in **_WindX_** or **_Windows only_**.

Use ***WINPRT*** with your **OPEN** and/or **OPEN INPUT** directives to gain standard API access to the Windows print subsystem. For raw or pass-through mode, use [***WINDEV* Raw Print Mode**](~windev~.md).

The device driver for your given printer interprets the data you send to the * **WINPRT** * channel and then sends the output to the Windows spooling subsystem for transmission to its destination. You can identify the LPT for direct local access to the port or use UNCs (Universal Naming Conventions) for transmissions to a shared resource. LPT identification is **_not_** recommended under Windows NT.

PxPlus recognizes ***WINPRT*** as a special device file in your **OPEN [INPUT]** directive and deals with it internally in the language at run time. PxPlus returns an Error #12: File does not exist (or already exists) on the **OPEN** if no printers are installed or if the user selects the Cancel button in a printer selection dialogue. (This error can also occur if no printer is "Set As Default".)

Some printer device drivers are unable to handle invalid _Q_options_ ; i.e. unknown property assignments and/or syntax errors (e.g. range=1,5 instead of the correct range=1:5). The result can be unpredictable. The driver can even cause your PxPlus session to hang during the open. If you encounter unexpected problems, invalid _Q_options_ __ for the given driver are the likely cause.

#### **Note:**  
Escape sequences are **_not_** allowed with ***WINPRT*** and may have an unpredictable effect on the device and/or printer driver. If you need access to the print subsystem to send PCL, escape sequences, etc., use [***WINDEV* Raw Print Mode**](~windev~.md).

##  Format 1

**_Open Device File_**

**OPEN (**_chan_**[,**_fileopt_**])"*WINPRT*[;**_Q_name_**[**_Q_options_**]"**

Use this format to open the ***WINPRT*** device file. PxPlus will recognize and deal with this special device file at run time to give you access to the Windows print subsystem. Then you can send print jobs to the given queue on your open channel.

See [***WINPRT* / *WINDEV* Printing Examples**.](_winprt_windev_printing.md)

#### **Note:**  
Some device drivers issue an extra blank page (some even hang) if an open channel is closed too quickly or if nothing is printed to the channel before it is closed. Use the **[OPEN INPUT](../directives/open.md)** directive to bypass problems of this nature.

##  Format 2

**_Open for Read-Only Mode_**

**OPEN INPUT (**_chan_**[,**_fileopt_**])"*WINPRT*[;**_Q_name_**[**_Q_options_**]"**

Use the **[OPEN INPUT](../directives/open.md)** directive to open ***WINPRT*** in read-only mode when you only want to determine the properties (_Q_options_) of a printer without sending a physical job. With an **OPEN INPUT** directive, you can open the printer, process your queries, and close the channel without starting a physical job.

**_Example:_**

Use the [**WINPRT_SETUP READ PROPERTIES**](../directives/winprt_setup.htm#Mark12) directive, a **['FONT'(LIST)](../mnemonics/font.md)** graphics mnemonic or the **[MXC( ) / MXL( )](../functions/mxc.md)** functions without generating a Form Feed:

> if WDX%<>$00$ then open input (30)"*WINPRT*;ASIS"  
>  X$='font'(list*,30) ! Get font list  
>   
>  ?X$  
> System,Fixedsys,Terminal,MS Serif,MS Sans Serif,Courier,Symbol,Small Fonts,Modern,FrameMakerSmallFont,Marlett,Arial,CourierNew,Times New Roman, _... etc._

#### **Note:**  
The **['FONT'](../mnemonics/font.md)** mnemonic works with ***WINPRT*** but not with any of the text-mode printers.

Maximum column and line values are zero-based. In the following example, the **MXC( )** value returned is 79, for 0-79 = 80 columns:

> C=mxc(30)+1 ! For this printer MXC(30) returns 79, C=80 (0-79)  
>  L=mxl(30)+1 ! For this printer MXL(30) returns 55, L=56 (0-55)

Your string variable in reading properties returns a printer-specific list (in the following example, it is for the **ASIS** printer):

> winprt_setup read properties WHAT_PROP$  
>   
>  ?WHAT_PROP$  
>  RANGE=ALL;COLLATE=NO;COPIES=1;ORIENTATION=PORTRAIT;PAPERSIZE=1;SOURCE=1;RESOLUTION=300:300;OFFSET=0:0;TRUETYPE=2;DRIVER=WINSPOOL  
>  close (30)

##  Format 3

**_Open for [WDX]_**

**OPEN [INPUT] (**_chan_**[,**_fileopt_**])"[WDX]*WINPRT*[;**_Q_name_**[**_Q_options_**]"**

On an NT or PC server, if you include **[WDX]** in your **OPEN [INPUT]** directive (e.g. open (30)"[WDX]*WINPRT*"), that signals PxPlus to direct any print jobs and dialogues to the WindX client PC, which will in turn use its Windows print subsystem to send jobs to the given printer.

If you are using ***WINPRT*** on an NT Server and do not use **[WDX]** in your **OPEN** directive, then the printer selection dialogue will appear on the server console, and any print queue you name directly must exist on the NT server in the Control Panel Printers folder.

#### **Note:**  
You must install and use WindX to use ***WINPRT*** in a UNIX environment; however, you do not need the **[WDX]** tag on a UNIX server because PxPlus automatically directs ***WINPRT*** access to your WindX client PC.

##  See Also

[**WINPRT_SETUP Windows Printer Setup**](../directives/winprt_setup.md)  
[**MXC( ) / MXL( ) Return Maximum Column/Line**](../functions/mxc.md)  
[**'FONT' Define/List Fonts**](../mnemonics/font.md)  
**['TEXT' Draw Text](../mnemonics/text.md)**  
[***WINPRT* / *WINDEV* Printing Examples**](_winprt_windev_printing.md)  
[**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm)
