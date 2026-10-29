# PxPlus Installation and Setup

**Launching PxPlus** |  **_ _**  
---|---  
  
To start PxPlus, choose **_either_** of the following methods:

  * Select the PxPlus IDE desktop shortcut to launch PxPlus on a Windows platform (see **[IDE Main Launcher (Windows)](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)**.  
  
**_OR  
  
_**
  * Launch from Command mode (see **Launching from Command Mode** below).



## Launching from Command Mode

**_Formats_**

The formats below describe the various syntax elements you can include in your Command line to start PxPlus. It is strongly recommended that you always include the full (absolute) path name of the executable file in this command.

1. |  **_Windows 32-Bit:_** |  _path_ \pxplus\pxplus.exe [ _winprms_ ][ _ini_ ][ _overrides_ ][ _prog_ ][ _pvxprms_ ][ **-ARG**  _list_ ]  
---|---|---  
2. |  **_UNIX:_** |  _path_ /pxplus/pxplus [ _unixprms_ ][ _overrides_ ][ _prog_ ][ _pvxparms_ ][ **-ARG**  _list_ ]  
  
**_Where:_**

_path_ \pxplus\pxplus.exe  
  
 _path_ /pxplus/pxplus |  Specific Windows or UNIX/Linux command to start PxPlus in Command mode.  
  
Use the _full path name_ (e.g. in Windows: C:\MY_DIRECTORY\pxplus\pxplus.exe). The path and file name of the PxPlus executable may be retrieved during execution using **ARG(0)**.  
---|---  
**-ARG**  _list_ |  The dash and keyword (-ARG) mark the start of a list of optional arguments you can pass to the program on start-up. The list of arguments (_arg1 arg2_ ...) is space separated. If an argument contains spaces, enclose it in quotation marks. For more information on arguments, see **[NAR](../../variables/nar.md)** system variable and **[ARG( )](../../functions/arg.md)** function.  
---|---  
_-__cpl_ |  When the Command line contains the _-cpl_ tag, the *compiler program will look for the source file provided, convert it to a program file and output any errors on *stderr* or an error file specified on the Command line. The syntax of the _-cpl_ option is:   pxplus _-cpl_ [ _sourcetext_ ] _programfile_ [ _-pswd  password ]_ [ _-err errfile_ ] **_Where:_** |  _sourcetext_ |  Optional pathname of the source program. If omitted, the *compiler program is to read the source file from *stdio* (stdin). If provided, this file **_must_** exist.  
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
  
To return the current value, use **ARG(-1)**. PxPlus accepts quotes enclosing your INI file name and spaces within the INI file name in the command line argument. See **[INI Files (Windows)](../Customizing%20PxPlus/INI%20Files%20\(Windows\).htm)**.  
_-__lst_ |  When the Command line contains _-lst_ , the *compiler program is expected to take a program file and list it to either an ASCII text file or stdout. The syntax of the _-lst_ option is:   pxplus _-lst_  _programfile_ [ _sourcetext_ ] [ _-pswd  password ]_ [ _-err errfile_ ] **_Where:_** |  _programfile_ |  Input program file that is to be converted to list format. This file **_must_** exist.  
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
-ID= _FID val_ |  **FID(**  **0)** value that the session is to start with.  
-DR= _path_ |  Path to directory PxPlus will use as its HWD (Home Working Directory).  
-A: _path_ |  Path to the directory containing the **[ACTIVATE.PVX](../../PxPlus%20System%20Programs%20and%20Files/System%20Activation%20Information/Overview.md)** file, regardless of where the PxPlus Library is to the following programs: _pxplus.exe_ , _pxpreg.exe_ and _pxpwactv.exe.__(added in PxPlus 2016)_  
  
#### **Note:**   
All programs - _pxplus.exe_ , _pxpreg.exe_ and _pxpwactv.exe_ \- also utilize the environment setting for **PVXKEY** to define the location of the activation file.  
_(as of PxPlus 2016)_  
  
_prog_ |  Optional name of a program to run at start-up (_lead program_).  
  
**_Example:_**   C:\pxplus\pxplus.exe -PC=10  
  C:\my_program\to_run_first  
_pvxprms_ |  Optional PxPlus system parameters to set from the Command line. Most PxPlus system parameters are valid, including: |  -SZ=_integer_ |  Maximum memory (e.g. -SZ=16000).  
---|---  
-XT=0 or 1 |  Exit direct to OS (e.g. -XT=1).  
  
The dash is **_mandatory_** and indicates that the argument is a parameter. **_Do not use single quotes_** _._ However, it is better programming practice to set/reset parameters from within PxPlus applications via the **[SET_PARAM](../../directives/set_param.md)** directive.

See **[System Parameters](../Customizing%20PxPlus/System%20Parameters.md)**.  
  
_winprms_ |  **_(For Windows Only)_** Optional window parameters: |  -BKG |  Indicates that the process is a background task. See **[-BKG Command Line Parameter](Overview.htm#bkg)**.  
---|---  
-HD |  Force start with initial window hidden.  
-MN |  Force start with initial window minimized.  
-MX |  Force start with initial window maximized.  
-RS |  Force start with initial window restored.  
  
#### **Note:**  
The Command line options **-HD** , **-MN** , **-MX** and **-RS** will override all other initial start window considerations. Normally, if the PxPlus icon is set to be minimized or maximized, then PxPlus will honor that setting for the initial window.  
  
If the icon is set to "Normal Window", then PxPlus will look at its saved window location from the INI file to determine the state in which to bring the window up.  
  
_unixprms_ |  **_(For UNIX/Linux Only)_** Optional parameter to set from the Command line: |  _\- -version_ |  Returns the PxPlus version (including whether it is 32-bit or 64-bit), the SSL version, and Copyright information.  
---|---  
  
_(The - -version parameter was added in PxPlus 2025 Update 1.)_  
  
**_To Return Command Line Values_**

As noted above, you can use the **[ARG( )](../../functions/arg.md)** and **[FID( )](../../functions/fid.md)** functions, as well as the **[HWD](../../variables/hwd.md)**, **[NAR](../../variables/nar.md)** and **[LPG](../../variables/lpg.md)** system variables, to retrieve the values in current use.

**_Example:_**

The following example illustrates the basic command in Windows:

> C:\my_directory\pxplus\pxplus.exe      _(__This command includes a lead program:_ C:\my_directory\pxplus\pxplus.exe my_program)

Other syntax elements appear as follows:

> C:\pxplus\pxplus.exe -mn program_1 -dr=h:\acct_pay  
>  C:\pxplus\pxplus.exe myapp.ini my_program -id=t0 -dr=mary -xt=1  
>  C:\my_directory\pvx\pxplus.exe myapp.ini windx  
>  C:\my_directory\pvx\pxplus.exe myapp.ini *nthost

**_What Happens During PxPlus Start Up?_**

When a new session of PxPlus starts up, several programs are run to establish the environment and launch your application:

1. |  Internally, PxPlus determines the type of terminal being used to run PxPlus and runs its terminal setup program. These are found in ***dev** directory. For Windows, this will be ***dev/windows**. For WindX connections using Simple CS, NTHost or the Application Server, this will be ***dev/winterm**. For UNIX/Linux, the system will get the terminal type from the environment variable **[TERM](../Customizing%20PxPlus/Environment%20Variables.htm#Mark21)** and run ***dev/_xxxxx_** where **_xxxxx_** is the terminal type in lowercase. If this is not found, the system will run ***dev/termcap** , which will try to generate the device driver from the system **termcap** information.

#### **Note:**  
For WindX connections using SSH or Telnet, you should set the environment terminal type to **winterm** or **ansi**.

The device driver will normally exit by running **[*TTY](../../PxPlus%20System%20Programs%20and%20Files/Load%20Keyboard%20Definitions/Overview.md)** to load the device function and edit keys from the keyboard configuration file for the device. This program will also check to see if there is a user device driver in ***udev/devicetype** , and if present, run it.  
---|---  
2. |  Once the terminal is configured, an internal **CALL** to "***start.up** " is executed to do the following:       Call "***plus/start_up** " to handle special PxPlus extensions.  
      Call your start up program specified in the environment variable **[PVXSTART](../Customizing%20PxPlus/Environment%20Variables.htm#Mark13)** or in **[START_UP](../Customizing%20PxPlus/START_UP%20Initialization%20Program.md)** if the environment variable is not set.  
      Check your product activation to see if it is current or needs updating.  
3. |  Runs the program specified on the Command line if any (the "lead" program found in the **[LPG](../../variables/lpg.md)** system variable). If no program is specified, the system will drop to the Command line prompt.  
  
If you want to set your system parameters and prefix(es) or do other initialization logic, you generally will perform this in your start up program in the starting directory for PxPlus. This will be run before your lead program is executed.

#### **Note:**  
As of PxPlus 2014, when using PxPlus Simple CS, the system will run your START_UP program after the workstation connects. Prior releases would run it before the connection was established.

##  -BKG Command Line Parameter

The **-BKG** command line parameter can be used with the Windows _pxplus.exe_ to indicate that the process is a background task and, as such, will not and cannot interact with the desktop/user. Processes that specify this parameter on the Command line will be prevented from accessing the desktop.

As a background, the process will not consume a user slot from the system activation key. This provides the same functionality as specifying >/dev/null </dev/null on the Command line used to launch PxPlus on UNIX/Linux.

_(The '-BKG' system parameter was added in PxPlus v9.00, build 9200.)_

**_Background_**

Normally, using PxPlus on a Windows system, each invocation of the software occupies a user slot regardless of whether the process was merely a background task or was truly going to interact with the end user. Even processes that have no user interaction still require a user slot - in effect, resulting in a "phantom user".

This phantom user problem is a Windows-system issue. On UNIX/Linux, PxPlus can detect true background processes by the fact that the user input and output devices were set to /dev/null. With the user input/output disabled, no user interaction would be possible from the process, thus the process was truly a background task. This is why on UNIX/Linux, we always recommend that you append >/dev/null and </dev/null to any command launching a background process such as NTHOST.

Consequently, with this Windows-only problem/limitation, you often had to purchase an extra user slot for this "phantom user" when running on a Windows server as opposed to UNIX/Linux.

**_Using -BKG_**

Specifying **-BKG** on the Command line can be used to address this situation by identifying a process as a background task that will **_not_** have any end-user interaction.

**_Example:_**

> C:\PVX Plus Technologies\PxPlus _version_number_ \pxplus.exe -**bkg** *plus\cs\host

When a Windows process is initiated with this command line parameter, the process will not occupy a user slot; however, no windows or message boxes will be presented to the user. In effect, the process will, like its UNIX background task counterpart, not have any user input/output capabilities.

However, it will be able to run programs in the background just like a UNIX system and will accept signals from foreground processes to terminate or perform other tasks.

#### **Note:**  
Like the -MN and -HD parameters, the **-BKG** must be the first parameter after the **_.exe_** path name. The **-BKG** parameter is case insensitive and has **_no_** effect in UNIX/Linux.

This feature has been incorporated into *NTHOST and the PxPlus Simple Client Server (***plus/cs/host**) to eliminate the need for an extra user when running on a Windows host.

##  Command Line Compiler/Lister

The *compiler program will automatically be called whenever the Command line starting PxPlus contains **[-cpl](Overview.htm#cpl)** or **[-lst](Overview.htm#lst)**. Internally, when either of these parameters is detected in the Command line, the system will run *compiler as the lead program and pass all Command line parameters starting with the -cpl or -lst to the program.

The purpose of this program is to then parse the Command line to extract the name of a program file and either compile a text file from source to create the program or list the program. Errors will display in the error output as _filename:lineno_ _:chofst_ _: errmsg_.

**_Examples:_**

> [path]pxplus[.exe] -cpl pgm\pgrm.txt pgm\pgrm.pxp -err tmp\err.txt -pswd password  
>   
>  [path]pxplus[.exe] -cpl pgm\pgrm.txt pgm\pgrm.pxp -err tmp\err.txt  
>   
>  [path]pxplus[.exe] -cpl pgm\pgrm.txt pgm\pgrm.pxp 2>tmp\err.txt  
>   
>  [path]pxplus[.exe] -cpl pgm\pgrm.pxp -err tmp\err.txt 0<pgm\pgrm.txt  
>   
>  [path]pxplus[.exe] -cpl pgm\pgrm.pxp 2>tmp\err.txt 0<pgm\pgrm.txt  
>   
>  [path]pxplus[.exe] -lst pgm\pgrm.pxp pgm\pgrm.txt -err tmp\err.txt  
>   
>  [path]pxplus[.exe] -lst pgm\pgrm.pxp pgm\pgrm.txt  
>   
>  [path]pxplus[.exe] -lst pgm\pgrm.pxp -err tmp\err.txt 1>pgm\pgrm.txt  
>   
>  [path]pxplus[.exe] -lst pgm\pgrm.pxp 1>pgm\pgrm.txt  
>   
>  [path]pxplus[.exe] -lst pgm\pgrm.pxp -pswd password 1>pgm\pgrm.txt  
>   
>  [path]pxplus[.exe] -lst pgm\pgrm.pxp -err tmp\err.txt -pswd password 1>pgm\pgrm.txt

 

 

 
