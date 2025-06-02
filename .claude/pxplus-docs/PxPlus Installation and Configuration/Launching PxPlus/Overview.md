# PxPlus Installation and Configuration

**Launching PxPlus** |  **__**  
---|---  
  
## Formats

1. |  **_Windows 32-Bit:_** _path_ \pxplus\pxplus.exe [ _winprms_ ][ _ini_ ][ _overrides_ ][ _prog_ ][ _pvxprms_ ][ **-ARG**  _list_ ]  
---|---  
2. |  **_UNIX:_** _path_ /pxplus/pxplus [ _overrides_ ][ _prog_ ][ _pvxparms_ ][ **-ARG**  _list_ ]  
  
**_Where:_**

_path_ \pxplus\pxplus.exe  
 _path_ /pxplus/pxplus |  Specific Windows or UNIX/Linux command to start PxPlus in Command mode.  
Use the _full path name;_ e.g. in Windows: C:\MY_DIRECTORY\pxplus\pxplus.exe. The path and file name of the PxPlus executable may be retrieved during execution using ARG(0).  
---|---  
**-ARG**  _list_ |  The dash and keyword (-ARG) mark the start of a list of optional arguments you can pass to the program on start-up. The list of arguments (_arg1 arg2_ ...) is space separated. If an argument contains spaces, enclose it in quotation marks. For more information on arguments, see **[NAR](../../variables/nar.md)** system variable and **[ARG( )](../../functions/arg.md)** function.  
---|---  
_-__cpl_ |  When the Command line contains the _-cpl_ tag, the *compiler program will look for the source file provided, convert it to a program file and output any errors on *stderr* or an error file specified on the Command line. The syntax of the _-cpl_ option is: pxplus  _-cpl_ [ _sourcetext_ ] _programfile_ [ _-pswd password_ ] [ _-err errfile_ ] **_Where:_** |  _sourcetext_ |  Optional pathname of the source program. If omitted, the *compiler program is to read the source file from *stdio* (stdin). If provided, this file **_must_** exist.  
---|---  
_programfile_ |  Output program file to receive the compiled code. This file will be created if it does not exist.  
_password_ |  Password to apply to _programfile_.  
_errfile_ |  File to receive the listing of any errors that are found in the source file. If the _-err_ parameter is not supplied, errors (if any) will be sent to *stderr*.  
  
See **[Command Line Compiler/Lister](Overview.htm#compiler)**.

#### **Note:**  
When using the -tag (-err|-pswd) optional parameters, the -tag is required. [ ] indicates optional parameters.  
  
_ini_ |  Name of an INI file to use _(for Windows and UNIX/Linux as of PxPlus v10)_. Optional. String expression. You can have different start_up commands with different INI files so that each application can be set up with its own defaults for fonts, window size, etc. **_Default:_**   
  
 _windows dir path_ \pxplus.ini  
  
** _Example:_**  
  
C:\pxplus\pxplus.exe _this.ini that_program_  
  
To return the current value, use ARG(-1). PxPlus accepts quotes enclosing your INI file name and spaces within the INI file name in the command line argument. See **[INI Files (Windows)](../Customizing%20PxPlus/INI%20Files%20\(Windows\).htm)**.  
_-__lst_ |  When the Command line contains _-lst_ , the *compiler program is expected to take a program file and list it to either an ASCII text file or stdout. The syntax of the _-lst_ option is: pxplus  _-lst_  _programfile_ [ _sourcetext_ ] [ _-pswd password_ ] [ _-err errfile_ ] **_Where:_** |  _programfile_ |  Input program file that is to be converted to list format. This file **_must_** exist.  
---|---  
_sourcetext_ |  Optional pathname of the file to receive the ASCII list of the program. If omitted, the program will be listed to *stdio* (stdout). If provided, this file will be created if it does not already exist.  
_password_ |  Password to apply to _programfile_.  
_errfile_ |  Optional file to receive the listing of any errors that are found in the source file. If the _-err_ parameter is not supplied, errors (if any) will not be presented.  
  
See **[Command Line Compiler/Lister](Overview.htm#compiler)**.

#### **Note:**  
When using the -tag (-err|-pswd) optional parameters, the -tag is required. [ ] indicates optional parameters.  
  
_overrides_ |  Optional arguments that override start_up. Valid overrides are: |  -L: _path_ |  Path to PxPlus library location.  
---|---  
-K: _path_ |  Path to keys directory (i.e. location of ACTIVATE.PVX).  
-C: _path_ |  Path to location of the INI to use for this session of PxPlus. The original _ini_ syntax (above) is preserved, but the addition of this argument adds consistency with the activation program.  
-ID= _FID val_ |  **FID(** **0)** value that the session is to start with.  
-DR= _path_ |  Path to directory PxPlus will use as its HWD (Home Working Directory).  
-A: _path_ |  Path to the directory containing the **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)** file, regardless of where the PxPlus Library is to the following programs: _pxplus.exe_ , _pxpreg.exe_ and _pxpwactv.exe.__(added in PxPlus 2016)_

#### **Note:**  
All programs - _pxplus.exe_ , _pxpreg.exe_ and _pxpwactv.exe_ \- also utilize the environment setting for **PVXKEY** to define the location of the activation file. _(as of PxPlus 2016)_  
  
_prog_ |  Optional name of a program to run at start-up (_lead program_).  
  
**_Example:_** C:\pxplus\pxplus.exe -PC=10   
C:\my_program\to_run_first  
_pvxprms_ |  Optional PxPlus system parameters to be set from the Command line. Most PxPlus system parameters are valid, including: |  -SZ= _integer_ |  Maximum memory (e.g. -SZ=16000).  
---|---  
-XT=0 or 1 |  Exit direct to OS (e.g. -XT=1).  
  
The dash is **_mandatory_** and indicates that the argument is a parameter. **_Do not use single quotes_** _._ However, it is better programming practice to set/reset parameters from within PxPlus applications via the **[SET_PARAM](../../directives/set_param.md)** directive.

See **[System Parameters](../Customizing%20PxPlus/System%20Parameters.md)**.  
  
_winprms_ |  **_(For Windows Only)_** Optional window parameters: |  -HD |  Force start with initial window hidden.  
---|---  
-MN |  Force start with initial window minimized.  
-MX |  Force start with initial window maximized.  
-RS |  Force start with initial window restored.  
  
#### **Note:**  
The Command line options -MN, -MX, -HD and -RS will override all other initial start window considerations. Normally, if the PxPlus icon is set to be minimized or maximized, then PxPlus will honour that setting for the initial window.  
  
If the icon is set to "Normal Window", then PxPlus will look at its saved window location from the INI file to determine the state in which to bring the window up.

## Description

The formats above describe the various syntax elements you can include in your Command line to start PxPlus. It is strongly recommended that you always include the full (absolute) path name of the executable file in this command.

**_To Return Command-Line Values_**

As noted above, you can use the **[ARG( )](../../functions/arg.md)** and **[FID( )](../../functions/fid.md)** functions, as well as the **[HWD](../../variables/hwd.md)**, **[NAR](../../variables/nar.md)** and **[LPG](../../variables/lpg.md)** system variables, to retrieve the values in current use.

**_Example:_**

The following example illustrates the basic command in Windows:

> C:\my_directory\pxplus\pxplus.exe _This_ _command includes a lead program:_ C:\my_directory\pxplus\pxplus.exe my_program

Other syntax elements appear as follows:

> C:\pxplus\pxplus.exe -mn program_1 -dr=h:\acct_pay  
>  C:\pxplus\pxplus.exe myapp.ini my_program -id=t0 -dr=mary -xt=1  
>  C:\my_directory\pvx\pxplus.exe myapp.ini windx  
>  C:\my_directory\pvx\pxplus.exe myapp.ini *nthost

##  Command Line Compiler/Lister

The *compiler program will automatically be called whenever the Command line starting PxPlus contains **[-cpl](Overview.htm#cpl)** or **[-lst](Overview.htm#lst)**. Internally, when either of these parameters is detected in the Command line, the system will run *compiler as the lead program and pass all Command line parameters starting with the -cpl or -lst to the program.

The purpose of this program is to then parse the Command line to extract the name of a program file and either compile a text file from source to create the program or list the program. Errors will display in the error output as _filename:lineno:chofst_ _: errmsg_.

**_Examples:_**

> [path]pxplus[.exe] -cpl pgm\pgrm.txt pgm\pgrm.pxp -err tmp\err.txt -pswd password

> [path]pxplus[.exe] -cpl pgm\pgrm.txt pgm\pgrm.pxp -err tmp\err.txt

> [path]pxplus[.exe] -cpl pgm\pgrm.txt pgm\pgrm.pxp 2>tmp\err.txt

> [path]pxplus[.exe] -cpl pgm\pgrm.pxp -err tmp\err.txt 0<pgm\pgrm.txt

> [path]pxplus[.exe] -cpl pgm\pgrm.pxp 2>tmp\err.txt 0<pgm\pgrm.txt

> [path]pxplus[.exe] -lst pgm\pgrm.pxp pgm\pgrm.txt -err tmp\err.txt

> [path]pxplus[.exe] -lst pgm\pgrm.pxp pgm\pgrm.txt

> [path]pxplus[.exe] -lst pgm\pgrm.pxp -err tmp\err.txt 1>pgm\pgrm.txt

> [path]pxplus[.exe] -lst pgm\pgrm.pxp 1>pgm\pgrm.txt

> [path]pxplus[.exe] -lst pgm\pgrm.pxp -pswd password 1>pgm\pgrm.txt

> [path]pxplus[.exe] -lst pgm\pgrm.pxp -err tmp\err.txt -pswd password 1>pgm\pgrm.txt
