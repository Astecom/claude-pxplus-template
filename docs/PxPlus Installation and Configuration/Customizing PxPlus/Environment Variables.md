# Customizing PxPlus

**Environment Variables** |  **__**  
---|---  
  
PxPlus maintains a set of operating system-level environment variables that can be used to define and control various aspects of its current working environment. If your application requires changes from the default values, you can initialize the required environment variables (using operating system-specific mechanisms) prior to launching PxPlus.

#### **Note:**  
Only set environment variables if you absolutely need them. It is better programming practice to control these actions from inside the PxPlus environment than from outside (where possible).

The following environment variables can be manipulated and accessed for use in your PxPlus applications:

**Variable** |  **Description**  
---|---  
**LANG** |  Default language code. The PxPlus default is **_en_** (English).

#### **Note:**  
The **[PVXLANG](Environment%20Variables.htm#Mark12)** environment variable takes precedence over the **LANG** environment variable and is less likely to be used by the operating system or other applications.  
  
**PVX_CERTIFICATES** |  **_(Applicable to Client Connections Only)_** Defines the default setting (IGNORE | VALIDATE | TRUSTREQD) for certificate validation. |  **IGNORE** |  Performs no validation of the certificate(s) presented by the server. ** _(Default)_**  
---|---  
**VALIDATE** |  Indicates that you want the certificate validated (expiry dates, etc.) but is not required to have been issued by a trusted supplier (i.e. it could be self-signed).  
**TRUSTREQD** |  Validates that the certificate came from a trusted vendor and that the certificate host name must match.  
  
_(PVX_CERTIFICATES functionality was added in PxPlus 2017.)_  
  
**PVX_CERTSTORE** |  Defines the default certificate store. The default certificate store is the _ca-bundle.crt_ file in the PxPlus install directory. The latest version of this file is downloaded from the following location: **<https://raw.githubusercontent.com/bagder/ca-bundle/master/ca-bundle.crt>**. _(PVX_CERTSTORE functionality was added in PxPlus 2017.)_  
**PVX_JOURNAL** |  During system start_up, the system checks to determine if this environment variable is defined. If it is defined, PxPlus will internally perform a **[SYSTEM_JRNL OPEN](../../directives/system_jrnl.md)** on the value in the environment variable and enable journalization on **_all_** files. If the environment variable includes the **;LOCK** suffix, journalization is enabled but the user is **_not_** allowed to close the journal file or to disable journalization either system wide or on specific files. _(PVX_JOURNAL functionality was added in PxPlus 2017.)_  
**PVX_UTF8** |  Can be set to establish whether PxPlus will run in UTF-8 compatibility mode or not. When set to "1", it will enable the **['U8'](../../parameters/u8.md)** system parameter during system initialization. _(PVX_UTF8 functionality was added in PxPlus 2023.)_  
**PVXEDIT** |  Name of editor used to maintain online program help information. (Defaults to **vi** for UNIX.)  
**PVXFID0** |  Value for **FID(0)**. Many PxPlus applications use the logical device name of the terminal; i.e. file 0 (zero) as a unique identifier. Under Windows, the value for **FID(0)** defaults to T0 (T-zero) unless you override it by setting this environment variable.  
  
To avoid the problem of duplicate **FID(0)** values in a Windows multi-user environment or network, this value must be different for each PC user. One of the simplest ways to uniquely identify each PC is to place a different SET PVXFID0=_xx_ command in each AUTOEXEC.BAT. _xx_ is the value for **FID(0)**.  
  
On systems that support NetBIOS, another solution is to use the system variable **[NID](../../variables/nid.md)** (which contains the network station name) or **[UID](../../variables/uid.md)** (User ID) as a key to a file that contains one record for each station. The record in the file contains the **FID(0)** value that your START_UP passes to the **[SETFID](../../directives/setfid.md)** directive.  
  
In the following example, START_UP using NetBIOS node name for **FID(0)** , terminates if the NID is not on file: **_Example:_**  
  
0010 ! START_UP - xxxxx   
......   
0100 X=HFN; OPEN (X) "Z:\PVXAPP\DATA\FIDFILE"   
0110 READ (X,KEY=NID,DOM=0190) F$   
0120 SETFID F$   
0130 CLOSE (X)   
......   
0190 PRINT 'CS','RB',"System restricted!!"   
0200 WAIT 2; CLOSE(X)   
0210 QUIT 

#### **Note:  
** PxPlus does not require unique **FID(0)** values. Only applications that were originally designed to have unique **FID(0)** values need change or control the **FID(0)**.  
  
**PVXFLMAP** |  File name change map. Use this when migrating files from one host environment to another, to translate invalid filename characters to valid ones for the new environment. To create a map, use one or more two-character codes as values. The first is the filename character as it appears in your program; the second is the character PxPlus will pass to the operating system as a substitute. For example, in UNIX, the file name \\\AB\\\ is valid, but to Windows, the backslash is a directory delimiter. To translate the file name to a valid Windows file name: SET PVXFLMAP=\\_   
1000 OPEN(1)"\\\AB\\\" REM would open "AB"  
**PVXINI** |  **_(Windows Only)_** Location of the PxPlus INI file.  
**PVXKEY** |  Location of the PxPlus KEYS directory.  
**PVXLANG** |  Similar to the **[LANG](Environment%20Variables.htm#Mark10)** environment variable except that the **PVXLANG** environment variable takes precedence over the **LANG** environment variable and is less likely to be used by the operating system or other applications.  
**PVXLIB** |  Location of PVX Plus library directory. By default, PxPlus searches for its libraries in the directory where the PXPLUS.EXE program is located.

#### **Note:**  
The library **_must_** have the name LIB.

You can override the location of the library by adding the following directive to your AUTOEXEC.BAT or to a PxPlus start-up batch file: SET PVXLIB=_path  
_  
** _Where:_**  
_  
path_ is the path to your directory containing the PxPlus library. However, if PxPlus cannot locate the library, it will not start. Instead, it generates Error #100 - No driver for terminal type or library missing.  
**PVXLS** |  **_(UNIX/Linux Only)_** ls command. To read a directory under UNIX/Linux, PxPlus internally uses an **ls -a** command. Output from this operating system command is parsed, and a file name list is built from this output. Only set if your operating system does not have an **ls -a** command in this case, set it to whatever command the operating system has that matches the output of an **ls -a** command on a typical UNIX/Linux system.  
**PVXPDFFONTDIR** |  Path location of the font directory for use with **[*PDF*](../../file_handling/~pdf~.md)** in UNIX/Linux versions of PxPlus. This variable is not required for Windows; however, it may be used to resolve some situations where PxPlus is unable to find the default font directory.  
**PVXSTART** |  Path and file name of initialization file to be used in place of the default START_UP. See **[START_UP Initialization Program](START_UP%20Initialization%20Program.md)**.  
**PVXTMP** |  Name of the directory where temporary files will be placed. (**_Default_** is the current directory.)  
**PXP_CRYPTO_LIB** |  Path and file name of an OpenSSL crypto dynamic library (libcrypto-1.1.dll/libcrypto.so). OpenSSL provides SSL and encryption support to PxPlus. Setting this overrides the default operating system library search rules and explicitly sets which library to load. _(PXP_CRYPTO_LIB functionality was added in PxPlus 2020.)_  
**PXP_CS_OPT** |  This environment variable can be set on the **_host_** to define any number of semi-colon separated _options_ that will be added to the option specified on the **_host_** Command line. See **[PxPlus Simple Client-Server Interface](../../simplecs/clienthost.md)**. _(PXP_CS_OPT functionality was added in PxPlus 2016.)_  
**PXP_CS_OPT_CLIENT** |  This environment variable can be set on the **_workstation_** (client) to define any number of semi-colon separated _options_ that will be added to the option specified on the **_client_** Command line. See **[PxPlus Simple Client-Server Interface](../../simplecs/clienthost.md)**. _(PXP_CS_OPT_CLIENT functionality was added in PxPlus 2016.)_  
**PXP_ID_PFX** |  The PXP_ID_PFX value is a prefix associated with the **[*NEXTSEQ](../../utilities/nextseq.md)** utility. To avoid generating duplicate sequence numbers that may be used as key values in data files, a prefix may be assigned for each programmer/workstation.  
**PXP_LOGFILE** |  This environment variable can be set on the **_workstation_** (client) to define the path of the log file that will be used by the **[NOMADS Run-Time Events Logging](../../NOMADS%20Graphical%20Application/Program%20Interaction/NOMADS%20Run-Time%20Utilities/Nomads%20Run-Time%20Logging.md)** tool. When defining the log file, you can specify the maximum file size (in megabytes) that you want the log file to grow. See **[PxPlus Log File](../../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Additional%20Debugging%20Procedures%20and%20Facilities.htm#logfile)**. _(PXP_LOGFILE functionality was added in PxPlus 2017.)_  
**PXP_SSL_LIB** |  Path and file name of an OpenSSL SSL dynamic library (libssl-1.1.dll/libssl.so). OpenSSL provides SSL and encryption support to PxPlus. Setting this overrides the default operating system library search rules and explicitly sets which library to load. _(PXP_SSL_LIB functionality was added in PxPlus 2020.)_  
**PXPSPAWN_CMD** |  Can be set to either NOHUP or SETSID to force its use when spawning a UNIX/Linux version of PxPlus. _(PXPSPAWN_CMD functionality was added in PxPlus 2017.)_  
**PXP_USER_RESERVED_WORDS** |  This environment variable is used to set the full path name (directory and file name) for the user-defined reserved words data file. See **[User Reserved Words Maintenance](../../Reserved%20Words.md)**. _(PXP_USER_RESERVED_WORDS functionality was added in PxPlus 2017.)_  
**PXP_WEB_BSZ** |  This environment variable is used to set a larger TCP block size (BSZ) value in kilobytes for the PxPlus Web Server. The default value is 80 kilobytes. If you want the PxPlus Web Server to handle larger responses, set this to a value greater than 80 kilobytes; however, increasing this value will cause the PxPlus Web Server to use more memory.

#### **Note:**  
If you need to handle responses larger than 700 kilobytes, the recommendation is to use **[EZWeb Server](../../EZWebServer/EZweb%20Introduction.md)**, **[Apache](../../apache.md)** or IIS.

_(PXP_WEB_BSZ functionality was added in PxPlus 2022.)_  
**TERM** |  **_(UNIX Only)_** Terminal type. This environment variable is normally set automatically by your UNIX/Linux operating system and matches the type of terminal you are using such as ANSI, WYSE60, Linux, etc. PxPlus uses the current value of the TERM environment variable to determine which PxPlus device driver is in the _*dev_ directory and which keyboard map to **LOAD/RUN** during initialization.  
**USER** |  **_(Only if No Operating System User ID Set)_** User ID. To establish a user name to make applications work properly, create and/or modify a .BAT file to include the directive: SET USER=_userID_  
  
** _Where:_**  
_  
userID_ is the user's name. The PxPlus system variables **[UID](../../variables/uid.md)** and **[WHO](../../variables/who.md)** return whatever value is in the USER environment variable or an *****__(_asterisk_) when this variable is not set.  
**WDXTRUST** |  **_(WindX Only)_** This environment variable can be set on the **_workstation_** (client) to define any number of **_trusted_** servers (semi-colon separated) to which **[WindX Security](../../windx/Windx%20Security.md)** will allow full access to the workstation files and programs without requesting user authorization. The server name or IP address defined in this variable **_must_** match the server name or address used in the **[WindX Connection Manager](../../windx/connectionmrg.md)**. Entries in this variable are case insensitive. If this variable is set and WindX connects to a server **_not_** in the list of trusted servers, WindX security will deny that server all access to the workstation files and programs. **_Example:_** WDXTRUST=server1;192.168.1.34 In this example, when WindX connects to either "server1" or "192.168.1.34", WindX security will allow only these servers full access to the workstation files and programs. _(WDXTRUST functionality was added in PxPlus 2017.)_
