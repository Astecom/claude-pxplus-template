# Language Reference - Appendix

**COM Ports and Serial Devices**|   
---|---  
  
##  Formats

1. |  _Open Device in Windows:_ |  **OPEN**(_chan_[,_fileopt_])"_port_ :"  
---|---|---  
2. |  _Open Device in Windows:_ |  **OPEN** (_chan_ ,_fileopt_ ,**OPT=**_string$_)"_port:_ "  
3. |  _Open Device in UNIX:_ |  **OPEN**(_chan_[,_fileopt_])_dev_path_ _$_  
  
**_Where_**** _:_**

_chan_ |  Channel or logical file number to assign to the file.  
---|---  
_dev_path_ _$_ |  Path to a UNIX device file.  
_fileopt_ |  File options. Supported options for opening a COM port include: |  **BSZ=**_num_ |  Block size |   
---|---|---  
**ERR=**_stmtref_ |  Error transfer |   
**ISZ=**_num_ |  Open file in binary mode |   
**NBF=**_num_ |  Dedicated number of buffers  
**OPT=**_string$_ |  Options for **_Windows Only_** (See **Windows OPT= Settings**)  
_port:_ |  Port ID (e.g. OPEN(1,_settings$_)"COM2:").  
_string$_ |  String defining the characteristics of the connection.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

You can **OPEN** a COM port for direct serial communication and gain access to special serial devices, including label printers, weigh scales, modems, and access card readers.

Some devices, such as modems, involve two-way communications where you can set up tasks such as background processes to monitor the port with ACK-NAK and/or READ-do processing. Other devices, such as label printers, use one-way serial communication; e.g. in **PRINT** statements.

##  Format 1

**_Open Device in Windows_**

**OPEN** (_chan_[,_fileopt_])"_port_ :"

When you **OPEN** a serial device in Windows, PxPlus uses the current Windows "mode" settings for the port.

##  Format 2

**_Open Device in Windows_**

**OPEN** (_chan_ ,_fileopt_ ,**OPT=**_string$_)"_port_ :"

Use this format in Windows to open a serial device for direct access.

**_For Windows only_** , you can include **OPT=**_string$_ ; e.g. in OPEN(1,OPT=settings$)"COM2:", the string variable in the **OPT=** option contains settings for the attributes.

#### **Note:**  
If the **OPT=** option is omitted from the communications settings, PxPlus will default to the setup in the Windows Control Panel.

**_Windows OPT= Settings_**** _  
  
_** The settings for the **OPT=** option use the following attributes and format. Note that _flow_rate_ is optional.

**OPT=** "_baud_rate,parity,data_bits,stop_bits_[,_flow_rate_]"

**_Where:_**

_baud rate_ |  Valid range is 300 to 115200.  
---|---  
_data_bits_ |  Use one of three valid values: 1, 7 or 8.  
_flow_rate_ |  _(Optional)_ Valid values include: |  **x** \- XON/XOFF software flow  
**p** \- RTS/CTS physical/hardware flow  
  
(Omit the value for "None")|   
---|---  
_parity char_ |  Use one of three alpha characters: **N** \- None  
**O** \- Odd parity  
**E** \- Even parity  
_stop_bits_ |  Use one of the valid values: **-1** (minus one), **0** (zero), **1** , **1.5** , **2**.  
  
**_Example_**** _:_**  
  
The setting$ assigned in the Windows example below are for the serial communications attributes: baud rate, parity (n=none), data bits (8), stop bit (1) and flow rate (xon/xoff switch).

> 12540 let setting$="9600,n,8,1,x"  
>  12550 let printer=hfn  
>  12560 open (printer,isz=1,opt=setting$,err=13000)"COM2:"  
>  12570 print (printer)"Title"

##  Format 3

**_Open Device in UNIX_**  
  
**OPEN**(_chan_[,_fileopt_])_dev_path_ _$  
_  
When you **OPEN** the serial device using this format in UNIX, the port is opened with the current characteristics. To change the settings, you can either set line characteristics at the OS level before starting PxPlus or use an **[INVOKE](../directives/invoke.md)** directive after you open the device:

> INVOKE "stty 38400 -IXANY IXON IXOFF ... </dev/tty2A"

#### **Note:**  
**_WindX Tip -_** While it is possible to open a serial device on the client PC by using the **[WDX]** tag, this is not recommended. Instead, use a **CALL** from the host to a **[WDX]** sub-program on the remote client PC. Design your sub-program to open and control the device and its settings. You can return your results to the host via your **CALL** 's parameters.  
  
See **[[WDX] Direct Action to Client Machine](../command_tags/wdx.htm)**.

##  See Also

**[OPEN Open a File for Processing](../directives/open.md)**

****
