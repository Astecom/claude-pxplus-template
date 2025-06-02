# Special Command Tags

**[WDX]** |  **_Direct Action to Client Machine_**  
---|---  
  
##  Formats

1\. _Execute:_ |  **EXECUTE** "**[WDX]**_statement_ "  
---|---  
2\. _Invoke:_ |  **INVOKE** "**[WDX]**_statement_ "  
3\. _Call Subprogram_ _:_ |  **CALL** "**[WDX]**_subprog_ "_,params_  
4\. _Open File:_ |  **OPEN**(_chan_[,_fileopt_])"**[WDX]**_filename_ "  
5\. _Open COM Port:_ |  **OPEN** (_chan_ ,**OPT=**_settings$_)"**[WDX]**_port_id_ "  
6\. _Open Tag Process_ _:_ |  **OPEN**(_chan_[,_fileopt_])"**[WDX][**_tag_**]**_prog_ ;[_params_]"  
7\. _Open Print Devices_ _:_ |  **OPEN** (_chan_[,_fileopt_])"**[WDX]***_device_*****[;_Q_name_[;_Q_options_]]"  
8\. _Create Object:_ |  **NEW(** "**[WDX]**_ClassName_ "**)**  
9\. _Define Windows Object_ _:_ |  **DEF OBJECT** _com_id_ ,"**[WDX]**_objname_ "  
10\.  _Call *WindX.utl_ _:_ |  **CALL** "**[WDX]*WindX.utl;_function_** ",_params_  
  
**_Where_** _:_

**** |  **[WDX]** |  File tag notifies PxPlus that you are directing the action to the WindX client machine instead of the server.  
---|---|---  
__ |  _chan_ |  Channel or logical file number to open.  
__ |  _class$_ |  Name of class for creating new object. String expression.  
__ |  _com_id_ |  Numeric variable to receive a handle (memory pointer to object).  
**** |  *****_device_***  
**_Q_name_ _  
Q_options_ |  Identifier and parameters for either of the two **[WDX]** -supported special device files (***WINDEV*** or ***WINPRT***). See **[*WINDEV* Raw Print Mode](../file_handling/~windev~.md)** and [***WINPRT* Windows Printing**](../file_handling/~winprt~.md).  
|  _filename_ |  Name of the file to open (file must exist on the client PC).  
  
**_Example:_**  
  
open (14)"[WDX]"+TMP$ **_or  
_** open (14)"[WDX]temp_file"  
__ |  _function_ |  A PxPlus utility/function, part of the *WindX.utl utility program. See **[*WindX.utl Utility Program](../windx/windxutl.md)**. For instance, the *WindX.utl;SPAWN function initiates tasks on the server and/or client.  
__ |  _fileopt_ |  File options. Supported options include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**IOL=**_iolref_ |  Default IOList  
**ISZ=**_num_ |  Open file in binary mode  
**OPT=**_char$_ |  File open options  
**REC=**_string$_ |  Record prefix (**REC=VIS**(_string$_) can also be used)  
__ |  _objname_ _$_ |  Name by which the COM object is registered in the Windows system registry subkey HKEY_CLASSES_ROOT.  
__ |  _params_ |  Arguments and variables you pass to the subprogram or function. If you include a list, it is comma-separated.  
__ |  _port_id_ |  System identifier for the port (e.g. COM1).  
|  _prog;function_ |  Parameters for the **[**_tag_**]**.  
  
**_Example:_**  
  
For**[DDE]** to export to Excel, you can open a worksheet using either:  
  
"[WDX][DDE]EXCEL;existing_worksheet.WK1"  
  
**_or_**  
  
"[WDX][DDE]EXCEL;"  
  
In the first example, where a spreadsheet name is included, it must exist on the client PC.  
__ |  _tag_ |  PxPlus special command file tag. (All are listed in this section.)  
  
**_Example:_**  
  
**[DDE]** , **[DLL]** , etc.  
__ |  _settings$_ |  Serial device's attributes (baud rate, etc.). String expression.  
__ |  _statement_ |  Command supported by PxPlus (**_some are not_**) for use with **EXECUTE** or **INVOKE** \+ the **[WDX]** tag in WindX. String expression.  
__ |  _subprog_ |  Subprogram for the **[CALL](../directives/call.md)** directive.  
  
#### **Note:**  
This feature requires **_WindX_** activation.

##  Description

The **[WDX]** tag is used as a prefix to perform an action on a remote **_client_** machine (**_if_** your given command could be used on either client or server, and **_if_** the command supports using **[WDX]**). The **[WDX]** tag can only be used in specialty commands when running under **_WindX_**.

WindX supports the use of the following directives via the **[WDX]** tag: **[SERIAL](../directives/serial.md)**, **[KEYED](../directives/keyed.md)**, **[DIRECT](../directives/direct.md)**, **[SORT](../directives/sort.md)**, **[PROGRAM](../directives/program.md)**, **[DIRECTORY](../directives/directory.md)**, **[REFILE](../directives/refile.md)**, **[ERASE](../directives/erase.md)**, **[EXECUTE](../directives/execute.md)**, **[INVOKE](../directives/invoke.md)**, **[OPEN](../directives/open.md)**, **[CALL](../directives/call.md)**, **[DEF OBJECT](../directives/def_object.md)** and **[INDEXED](../directives/indexed.md)**, as well as the use of the **[NEW](../functions/new.md)** function. The use of the **[WDX]** tag is also supported in Format 2 of the **[PTH( )](../functions/pth.md)** function.

#### **Note:**  
The **DIR=** option and the **PURGE** and **FILE** directives are **_not_** supported by WindX and must be encapsulated in an **[EXECUTE](../directives/execute.md)** directive.

**_To Detect WindX_**

To detect whether or not you are actually working on a WindX PC in Command mode, look for the special prompt **-}** ... i.e. a hyphen with a curly brace. In your applications, a test for one of the following indicators will tell you that your session is running under WindX:

> DEC(MID(MSE, 22,1))>0  
>  TCB(88)<>0

See **[TCB( )](../functions/tcb.md)** function and **[MSE](../variables/mse.md)** system variable.

You can create a global variable in your WindX setup and use it later to test for the presence of a WindX client PC connection. Then, if WindX is running the session, you can use the **[WDX]** tag.

**_Example:_**

In this example, the user-defined variable %WDX is only set when WindX is running; otherwise, its value is null:

> if mid(mse,22,1)>$00$ and mid(mse,22,1)<$FF$ \  
>  then %WDX$="[WDX]"

Use such a global variable in a statement like OPEN (30)%WDX$+"*WINPRT*" to bypass an Error #12: File does not exist (or already exists) when WindX is not running.

#### **Note:**  
WindX will support all the directives and functions that are used against a file channel that was previously opened with a **[WDX]** or **[[LCL]](lcl.htm)** tag.

**_How PxPlus Detects WindX_** __

PxPlus uses terminal type to detect a WindX session. In UNIX, PxPlus recognizes two terminal types as potential WindX stations (TERM="winterm" for the WindX client PC and TERM="ansi"). Since most UNIX systems and applications cannot recognize or use the winterm type, the PxPlus ansi device driver sends a special escape sequence to a terminal to test for a WindX client. If the terminal is a WindX PC, a special response is generated. If no response is generated before a time-out occurs, PxPlus assumes that the device is ansi.

**_Graphical User Interface Requests_**

Once the PxPlus session on the server recognizes the terminal as a WindX station, it changes the internal settings to allow graphical requests to be routed correctly. (Then, graphical requests are automatically tokenized and forwarded to WindX for processing; that is, you do not need the **[WDX]** tag.)

For instance, a server command to print a picture in a UNIX environment would automatically be sent to WindX for the client. PxPlus transmits standard mnemonics to WindX as an escape ($1B$) followed by the mnemonic in native form. Traffic from the host/server is minimized because the WindX client's PxPlus interpreter handles a lot of the functionality locally (on the client) for screen refreshing and graphical requests.

In WindX, your instruction to print is sent to the client, bundled as is. When you use mnemonics and/or graphics, such as _.bmp_ , they must exist on the client or be accessible to the client.

**_Example:_**

This example uses a **'PICTURE'** that is defined and shared on a common Windows server instead of being stored on each individual client machine:

> print 'picture'(10,10,10,10),"\\\serv_name\driveshare\your_bmps\that.bmp"

##  Formats 1 and 2

**_Initiate Remote Command_**

**EXECUTE** "**[WDX]**_statement_ "  
**INVOKE** "**[WDX]**_statement_ "

Use the **EXECUTE** and **INVOKE** formats with the **[WDX]** tag to process commands on the WindX PC (remote client). Common applications of the **EXECUTE** format would be changing the client's local directory, setting system parameters, or altering the prefix and in file creation.

#### **Warning!**  
When you use the **EXECUTE** and **INVOKE** directives from your server to initiate action remotely on a client, the client PC might be running a PxPlus activation with a different set of syntax tables. As a result, your **MNEMONIC** s might be invalid.

**_Example:_**

This example illustrates the use of an **EXECUTE** "**[WDX]_statement_** " in an application on the host/server to define a **MNEMONIC** directive locally on the WindX client:

> if WDX%<>$00$  
>  then execute "[WDX]mnemonic(lfo)'5X'=$1B+hex$"  
>  else goto MY_LABEL

This next example sets the [**'B0'**](../parameters/b0.md) system parameter on a WindX PC using a **[WDX]** command from a UNIX host:

> execute "[WDX]SET_PARAM 'B0'"

#### **Note:**  
If you run your application with **'B0'** set, make sure that it is set on both the host and the WindX PC; otherwise, the wrong windows will be addressed. (You can set **'B0'** either by executing it from the host, as in the example, or by using **-B0** as an argument on the WindX PC's Start_up Command line.)

##  Format 3

**_Call Subprogram_**

**CALL** "**[WDX]_subprog_** "_,params_

This format enables the server to CALL a subprogram that exists and runs remotely on the client. It is true distributed processing. The server's files and global variables are not accessible to your subprogram. Your remote call passes parameters back and forth, not data files. You can pass a maximum of 20 parameters/arguments in a comma-separated list.

**_Example:_**

You can call applications such as special printer device drivers you have built on the client to handle print mnemonics:

> CALL "[WDX]*dev/your_driver_name"

You can use a similar format to call the PxPlus *WindX.utl (utility) functions. See **Format 10: [WDX] and *WindX.utl**.

##  Formats 4 and 5

**_Open Files, Serial Ports on Client_**

**OPEN (**_chan_**[,**_fileopt_**])** "**[WDX]**_filename_ "**  
OPEN (**_chan_**,OPT=**_settings$_**)** "**[WDX]**_port_id_ "

Use this format in programs running on your server when you are opening remote files or ports; that is, using **[WDX]** as a prefix to the pathname of your file (or port, etc.) tells WindX to open it remotely on the client. WindX automatically forwards requests (i.e. file I/O directives) for processing.

#### **Note:**  
When you need a statement that is not supported on a WindX PC, encapsulate your commands in an **EXECUTE "[WDX]..."** directive or design your applications to run remotely on the client.

**_Example_** :

The following example opens a remote file:

> open (1)"[WDX]CLIENT_PATH\CLIENT_FILE"

Use a similar format to open a COM port for direct access to a serial device (e.g. a serial printer or weigh scale) on the client PC without going through a spooler:

> SETTING$="9600,n,8,1,x"  
>  open (5,opt=SETTING$)"[WDX]COM2"  
>   
>  **_or_**** _  
> _**  
>  open (5,opt="9600,n,8,1,x",err=OOPS)"[WDX]COM2"

##  Format 6

**[WDX]_with Other Tags_**

**OPEN**(_chan_[,_fileopt_])"**[WDX][**_tag_**]**_prog_ ;[_params_]"

**[WDX]** can be used in conjunction with other file tags.  
  
**_Example:_**

> open (1)"[WDX][DDE]excel;existing_worksheet.wk1"

##  Format 7

**_Windows Print Subsystem on Client_**

**OPEN** [**INPUT**] (_chan_[,_fileopt_])"**[WDX]***_device_*****[;_Q_name_[;_Q_options_]]"

PxPlus opens the special device files ***WINPRT*** and ***WINDEV*** on the PC/server that issues the command. Except in UNIX (where it is done automatically), use **[WDX]** with **OPEN**[**INPUT**] directives for the two specialty files to direct any print jobs and dialogues to the WindX client PC, which will in turn use its Windows print subsystem API to deal with the jobs and send them to the given printer.

**_Example:_**

> open (7,err=1500)"[WDX]*WINPRT*"

With a WindX client and an NT Server, if you **_do not_** use **[WDX]** in your **OPEN** directive, then the printer selection dialogue will appear on the server console, and any print queue you name directly must exist on the NT server in the _Control Panel, Printers_ folder.

See **[*WINDEV* Raw Print Mode](../file_handling/~windev~.md)** and [***WINPRT* Windows Printing**](../file_handling/~winprt~.md).

##  Formats 8 and 9

**_Remote Object Support_**

**NEW(** "**[WDX]**_ClassName_ "**)**  
**DEF OBJECT** _com_id_ ,"**[WDX]**_objname_ "

The **[WDX]** tag can be used to create OOP/COM objects and manipulate them across a WindX connection as if they existed locally.

Methods can be passed arguments and receive results; however, only the result of a method will be returned across a remote connection. Any changes to the arguments of a method by the remote object will not be returned across the connection. Arguments are therefore considered to be passed by value only. If you need to retrieve arguments as well as the result, you must place your code in a program on the WindX workstation and interact with that code.

Event handling is not supported across a remote connection. Event mapping must occur within the remote object. The remote object will not have access to any server resources. At most, the remote event could pass a CTL back to the local server for action. It is recommended that objects requiring event processing exist completely on the remote and interact only with the local WindX session on the remote.

##  Format 10

**[WDX]_and *_** **_WindX.utl_**

**CALL** "**[WDX]*WindX.utl;_function_** ",_params_

Use this format to call the utilities/functions in the WindX.utl utility program. See **[*WindX.utl Utility Program](../windx/windxutl.md)**.

**_Example:_**

> call "[WDX]*WindX.utl;GET_LWD",Station_dir$  
>  call "*WindX.utl;SPAWN",cmdline$,inifile$,appfid$

The following functions are built into WindX to simplify development tasks:

CALL "[WDX]*WindX.utl;CWDIR",_dir_ _$_ |  Changes to the specified directory on the WindX client.  
---|---  
CALL "[WDX]*WindX.utl;GET_ADDR",_X_ _$_ |  Returns the IP address of the WindX client.  
CALL "[WDX]*WindX.utl;GET_ARG",_X,Y_ _$_ |  Returns the Command line argument number specified by _X_ in _Y$_.  
CALL "[WDX]*WindX.utl;GET_DIR",_X,Y_ _$_ |  Returns the **[DIR( )](../functions/dir.md)** information for the directory specified by _X_ (or _X$_) in _Y$_.  
CALL "[WDX]*WindX.utl;GET_DSK",_X,Y_ _$_ |  Returns the **[DSK( )](../functions/dsk.md)** information for the disk specified by _X_ (or _X$_) in _Y$_.  
CALL "[WDX]*WindX.utl;GET_FILE_BOX",_path$,dir$,title$,ex_list$,def_ex$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_DIRECTORY",_path$,dir$,title$,root$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_READ",_path$,dir$,title$,ex_list$,def_ex$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_WRITE",_path$,dir$,title$,ex_list$,def_ex$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_READ_LIST",_path$,dir$,title$,ex_list$,def_ex$  
_   
_(Support for GET_FILE_BOX_READ_LIST was added in PxPlus 2017.)_ |  Emulates a local call to **[GET_FILE_BOX](../directives/get_file_box.md)** directly on the WindX client. The parameters are: |  _path$_ |  String variable that contains the file path.  
---|---  
_dir_ _$_ |  Initial directory to display. String expression.  
_title$_ |  Window title. String expression. If not specified, the defaults for the various formats will be used.  
_ex_list_ _$_ |  List of standard file extensions (e.g. .jpg, .pdf, .txt, etc.). Comma or your choice of character as the delimiter (the last extension must end with the delimiter). Optional.String expression. Use the format _Description|*.XXX,_ as in the following example:  
  
**_Example:_**  
  
"Applications|*.EXE,Text|*.TXT,PDFs|*.PDF,All|*.*,"

#### **Note:**  
If defining only one file type, a delimiter (i.e. comma) **_must_** be added to the end. PxPlus uses this last character as the delimiter.  
  
_def_ex_ _$_ |  Default file extension to use if no file extension is specified via the file extension drop box or the file path input field. Optional. String expression.  
  
**_Example:_**  
  
"TXT"  
_root$_ |  Optional highest level directory in which browsing can occur. (This parameter overrides _dir_ _$_.)  
CALL "[WDX]*WindX.utl;GET_LPG",_X_ _$_ |  Returns the **[LPG](../variables/lpg.md)** (Lead Program Name) system value for the WindX session.  
CALL "[WDX]*WindX.utl;GET_LWD",_X_ _$_ |  Returns the current **[LWD](../variables/lwd.md)** (Local Working Directory) for the WindX session.  
CALL "[WDX]*WindX.utl;GET_NEWPORT",_X_ |  Returns the port number of an unused TCP/IP port on the WindX station.  
CALL "[WDX]*WindX.utl;GET_NUM",_X$,Y_ |  Evaluates/returns the value of the numeric expression _X$_ in _Y_. **_Example:_** Y=EVN(X$)  
CALL "[WDX]*WindX.utl;GET_TCB",_X_ |  Returns the value of the **[TCB](../functions/tcb.md)** function task specified by _X_ in _X_. **_Example:_**  
  
X=TCB(X)  
CALL "[WDX]*WindX.utl;GET_VAL",_X$,Y_ _$_ |  Evaluates/returns the value of the string expression _X$_ in _Y$_. **_Example:_**  
  
Y$=EVS(X$)  
CALL "[WDX]*WindX.utl;GET_WINDX",_X_ _$_ |  Returns the absolute pathname of the WindX program.  
CALL "*WindX.utl;SPAWN",_X$,I$,F$,HideClient,HideServer_  
  
(See **Notes** below) |  Spawns a new session of PxPlus on the host and an associated WindX session on the client PC. By default, if the main session terminates, then the spawned session terminates.  
  
The parameters are: |  _X$_ |  Command line parameters to be used on the host.  
---|---  
_I$_ |  Pathname of the INI file to be used on the client PC.  
_F$_ |  Value of FID(0) for the session.  
_HideClient_ |  An optional parameter that is provided, and non-zero indicates that the spawned WindX session is to start hidden.  
_HideServer_ |  An optional parameter that is provided, and non-zero indicates that the spawned host session is to start hidden as opposed to being started minimized **_(only applicable to Windows servers)_**.  
CALL "*WindX.utl;SPAWN_NOHUP",_X$,I$,F$,HideClient,HideServer_  
  
(See **Notes** below) |  Same as SPAWN but detaches the session from the main user task. If the main task terminates, then the spawned task continues executing.  
  
#### **Notes:**  
The CALL to *WindX.utl;SPAWN and *WindX.utl;SPAWN_NOHUP should **_not_** have the [WDX] prefix in front, as they are performed locally. The spawn interface uses the value found in the global variables **%PXPLUS_HOST$** and **%APS** to determine how to spawn the new process.  
  
If **%APS** is set, it is assumed to contain the object handle to the Application Server client object module, and the spawn logic will use it to spawn the new process.  
  
If **%PXPLUS_HOST$** is set, it is used to define the host name/IP address and port number to use when spawning a task.  
If the first character is an *****  _(asterisk)_ , the system will internally spawn the new process and use the host and port number to connect to it.  
If the first character is **_not_** an *****  _(asterisk)_ , the system will assume you are running ***plus/cs/host** on the host/port specified and spawn a process to connect to this host process.  
If **_neither_** of the above is defined, the system will attempt to spawn a new process locally and connect using a random port number.

## See Also

**[*WindX.utl Utility Program](../windx/windxutl.md)**
