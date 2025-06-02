# Utilities and Extended Commands  
  
**Extended Commands** |   
---|---  
  
Whenever an unrecognized command is entered in Command mode without a line number, the system will take the first word of the command and use it to look up a program in the ***cmd** or ***cmd/system** directory.

**_Example:_**

If you enter the command 

> **- >mike was here**

the system will look for the program "***cmd/mike** " or, if not found, "***cmd/system/mike** ". If the program is found, the system will call the program and pass the complete line following the file name (or "was here" in this example) to the program.

This facility allows developers to extend the development environment with their own programs, as well as provide simple access to a variety of additional commands included with the development suite. By convention, user developed commands should be placed in the "***cmd** " directory with system supplied commands in "***cmd/system** ". This allows system commands to be updated whenever new versions of the software are downloaded.

Some of the most **_commonly used_** system commands are:

**Command** |  **Description**  
---|---  
**cd** |  Change the current working directory for the process (similar to the '**cd** ' command in UNIX/Linux). See **[CD Console Command](commands/cd.md)**. _(The CD command was added in PxPlus v6.30.)_  
**chartsched** |  Invokes **[Chart Image Generation Schedule Maintenance](Chart%20Images%20Generation/Schedule%20the%20Chart%20Generation.md)** for adding schedule entries for chart image generation. _(The CHARTSCHED command was added in PxPlus v11.50.)_  
**clip** |  Utility to copy lines to the Clipboard.  
**cls** |  Clears the Command Line editing screen. _(The CLS command was added in PxPlus 2025.)_  
**color/colour** |  Utility to control the syntax colors used to list programs on the screen.  
**cp** |  Copies a file from one location to another. See **[CP Console Command](commands/cp.md)**. _(The CP command was added in PxPlus v7.65.)_  
**dbg** |  Text mode debug utility. See **[DBG Console Command](commands/dbg.md)**. _(The DBG command was added in PxPlus v8.30.)_  
**dd** |  Invokes **[Data Dictionary Maintenance](Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** for building and maintaining data definitions. To invoke **Data Dictionary Maintenance** for a specific table in the current working directory, enter **DD**  _tablename_.  
**dir** |  Directory list and display utility. See **[DIR Console Command](commands/dir.md)**.  
**dm** |  Invokes **[Data Mirroring Configuration](Data%20Mirroring/Data%20Mirroring%20Configuration.md)** for configuring and monitoring the different processes for the Data Mirroring system. _(The DM command was added in PxPlus v2018.)_  
**ds** |  Invokes **[Data Source Maintenance](Views%20System/Data%20Source%20Maintenance/Overview.md)** for defining Views data sources.  
**ed +** |  Invokes the Web-based **[Ed+ Program Editor](Ed%20Program%20Editor.md)** for creating and modifying your application programs. _(The ED+ command was added in PxPlus 2016.)_  
**errors** |  Display error history. See **[ERRORS Console Command](commands/errors.md)**. _(The ERRORS command was added in PxPlus v11.00.)_  
**f** |  Simple find string utility. Enter **"f _xxxx_ "** to find and display all occurrences of **_xxxx_** in your program.  
**fm** |  Invokes the **[File Update Utility](File%20Update%20Utility.md)** for viewing, modifying and updating the records within a selected data file.  
**fmgen** |  Invokes the **[NOMADS Session Manager](NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for opening an existing file maintenance panel or defining a new one in the NOMADS **[File Maintenance Generator](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**. See **[FMGEN Console Command](commands/fmgen.md)**. (_The FMGEN command was added in PxPlus 2025.)_  
**gui** |  Invokes the graphical user interface based **[System Utilities](PxPlus%20User%20Guide/Getting%20Started/System%20Utilities/Graphical%20Utilities.md)** that are used for the creation, debugging, and management of PxPlus programs, files and directories.  
**help** |  Launches the PxPlus Help file.  
**ide** |  Invokes the PxPlus **[IDE Main Launcher (Windows)](PxPlus%20IDE/IDE%20Main%20Launcher.md)**, which presents all the PxPlus development tools, installation and setup components in a tree-like format. _(The IDE command was added in PxPlus 2014.)_  
**it** |  Invokes the PxPlus **[Integrated Toolkit](toolkit1/sect1.1/a.md)**. When executed, the current program (if not passworded) will be automatically loaded into the graphical program editor.  
**join** |  Command to join two lines together. Enter **"join _xxxxx_ _yyyyy_ "** to append line **_xxxxx_** to the end of line **_yyyyy_**.  
**kill** |  Terminate a process. See **[KILL Console Command](commands/kill.md)**. _(The KILL command was added in PxPlus v7.65.)_  
**ll** |  List Labels command to display all line labels in the current program.  
**loadbbx** |  Utility to do an inline conversion and load of a BBx program. Enter **"loadbbx _pathname_ " **to convert and load the BBx program in the pathname specified.  
**ls** |  List directory is a command similar to the UNIX/Linux "ls" command. Enter **"ls _pathname_ " **to list the filenames found in the directory. Wild cards (*) can be provided. To display the file size, type and date changed for each filename listed, use the **-l**  _(dash lowercase L)_ option: **"ls _pathname_ -l"**. _(The -l option was added in PxPlus 2014 Feature Pack 1 - Update 0002.)_  
**lv** |  List all the variables used by the current program, or if invoked with a variable name following the **'lv'** command, the utility will list all lines that reference the specified variable.  
**new** |  Issues a **DELETE** and **BEGIN** to clear the current workspace and close all open files.  
**nom** |  Invokes the **[NOMADS Session Manager](NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for accessing the NOMADS graphical application development toolset. Specifying a _panel_name_ _$_ and _library_file_ _$_ opens an existing NOMADS panel or creates a new one in the **[NOMADS Panel Designer](NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**. If the panel object was created with the **[File Maintenance Generator](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**, a message will ask you to choose between opening the panel in the File Maintenance Generator or in the NOMADS Panel Designer. See **[NOM Console Command](commands/nom.md)**. _(The ability to open a file maintenance panel in the File Maintenance Generator was added in PxPlus 2025.)_  
**obj** |  Utility to display the properties and methods for an object. Enter **"obj _xxxxx_ "** where **_xxxxx_** contains the object handle to display.  
**olhelp** |  Launches the online PxPlus Help manual in a Web browser. _(The olhelp command was added in PxPlus 2024.)_  
**password** |  Command to prompt the user for the password to be used against the current program in memory. See **[PASSWORD Console Command](commands/password.md)**. _(The PASSWORD command was added in PxPlus v8.30.)_  
**paste** |  Command to paste the contents of the Clipboard into the current program.  
**pkg** |  Command to display the current activation status and list of enabled packages on the system.  
**popup** |  Invokes the **[NOMADS Session Manager](NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for opening an existing NOMADS popup menu or defining a new one. See **[POPUP Console Command](commands/popup.md)**. (_The POPUP command was added in PxPlus 2025.)_  
**pwd** |  Display the current directory. See **[PWD Console Command](commands/pwd.md)**. _(The PWD command was added in PxPlus v7.65.)_  
**qry** |  Invokes the **[NOMADS Session Manager](NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for opening an existing NOMADS query or defining a new one. See **[QRY Console Command](commands/qry.md)**. (_The QRY command was added in PxPlus 2025.)_  
**recall** |  Recall a prior version of the current program from the internal version history buffers.  
**register** |  Register software online. See **[REGISTER Console Command](commands/register.md)**. _(The REGISTER command was added in PxPlus v11.00.)_  
**rw** |  Invokes the **[Report Writer](Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)** for designing and generating reports.  
**sa** |  Invokes the **[System Analysis](utilities/system_analysis.md)** utility for analyzing the PxPlus installation and setup. (_The SA command was added in PxPlus 2022.)_  
**set_nk** |  Sets/resets the **['NK'](parameters/nk.md)** system parameter for a file. See **[SET_NK Console Command](commands/set_nk.md)**. (_The SET_NK command was added in PxPlus 2020.)_  
**tasks** |  View a list of PxPlus tasks currently running and/or search for open files. See **[TASKS Console Command](commands/tasks.md)**. _(The TASKS command was added in PxPlus v7.65.)_  
**users** |  View PxPlus users and their associated process IDs. See **[USERS Console Command](commands/users.md)**. _(The USERS command was added in PxPlus v9.00.)_  
**ver** |  Utility to display information about the program currently in memory including date saved, who saved it, program size, and security information. See **[VER Console Command](commands/version.md)**.  
**vu** |  Invokes **[View Maintenance](Views%20System/View%20Maintenance/Overview.md)** for creating View definitions.  
**wdw** |  Adjust the window size of the main (Command) window. See **[WDW Console Command](commands/wdw.md)**. _(The WDW command was added in PxPlus v9.00.)_  
  
BBx is a registered trademark of BASIS International Ltd.
