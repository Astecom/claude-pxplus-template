# WindX™ Thin-Client

***WindX.utl** |  **_WindX Utility Program_**  
---|---  
  
The WindX utility program, ***WindX.utl** , provides a variety of functions that simplify the development of applications that make use of WindX.

## Format

Format of the CALL:

> **CALL** "**[WDX]*WindX.utl;_function_** ",_params_

Use this format to call the utilities/functions in the WindX.utl utility program.

**_Example:_**

> CALL "[WDX]*WindX.utl;GET_LWD",Station_dir$  
>  CALL "*WindX.utl;SPAWN",cmdline$,inifile$,appfid$

## Functions

The following functions are built into WindX to simplify development tasks:

CALL "[WDX]*WindX.utl;CWDIR",_dir_ _$_ |  Changes to the specified directory on the WindX client.  
---|---  
CALL "[WDX]*WindX.utl;GET_ADDR",_X_ _$_ |  Returns the IP address of the WindX client.

#### **Note:**  
For SSH WindX connection, this does not return the IP address of the client, but rather the plink command used on the client to connect to the SSH server.  
  
To get the SSH client IP address, use the **[ENV](../functions/env.md)** function to return the IP address. The function must be run on the server, not the client; i.e. do not use [WDX]/[LCL].  
  
CALL "[WDX]*WindX.utl;GET_ARG",_X,Y_ _$_ |  Returns the command line argument number specified by _X_ in _Y$_.  
CALL "[WDX]*WindX.utl;GET_DIR",_X,Y_ _$_ |  Returns the **[DIR( )](../functions/dir.md)** information for the directory specified by _X_ (or _X$_) in _Y$_.  
CALL "[WDX]*WindX.utl;GET_DSK",_X,Y_ _$_ |  Returns the **[DSK( )](../functions/dsk.md)** information for the disk specified by _X_ (or _X$_) in _Y$_.  
CALL "[WDX]*WindX.utl;GET_FILE_BOX",_path$,dir$,title$,ex_list$,def_ex$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_DIRECTORY",_path$,dir$,title$,root$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_READ",_path$,dir$,title$,ex_list$,def_ex$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_WRITE",_path$,dir$,title$,ex_list$,def_ex$_ CALL "[WDX]*WindX.utl;GET_FILE_BOX_READ_LIST",_path$,dir$,title$,ex_list$,def_ex$_  
_  
__(Support for GET_FILE_BOX_READ_LIST was added in PxPlus 2017.)_ |  Emulates a local call to **[GET_FILE_BOX](../directives/get_file_box.md)** directly on the WindX client. The parameters are: |  _path$_ |  String variable that contains the file path.  
---|---  
_dir_ _$_ |  Initial directory to display. String expression.  
_title$_ |  Window title. String expression. If not specified, the defaults for the various formats will be used.  
_ex_list_ _$_ |  List of standard file extensions (e.g. .jpg, .pdf, .txt, etc.). Comma or your choice of character as the delimiter (the last extension must end with the delimiter). Optional. String expression. Use the format _Description|*.XXX,_ as in the following example: **_Example:_**  
  
"Applications|*.EXE,Text|*.TXT,PDFs|*.PDF,All|*.*,"

#### **Note:**  
If defining only one file type, a delimiter (i.e. comma) **_must_** be added to the end. PxPlus uses this last character as the delimiter.  
  
_def_ex_ _$_ |  Default file extension to use if no file extension is specified via the file extension drop box or the file path input field. Optional. String expression. **_Example:_**  
  
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
If the first character is an *****_asterisk_ , the system will internally spawn the new process and use the host and port number to connect to it.  
If the first character is **_not_** an *****  _asterisk_ , the system will assume you are running ***plus/cs/host** on the host/port specified and spawn a process to connect to this host process.  
If **_neither_** of the above is defined, the system will attempt to spawn a new process locally and connect using a random port number.
