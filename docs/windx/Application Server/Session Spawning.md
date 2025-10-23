# Application Server  
  
**Session Spawning**|   
---|---  
  
The PxPlus Application Server also includes a component, ***SERVER** , that can be run on the server to _programmatically_ establish a new independent session of PxPlus within which another application may be run. This is commonly referred to as **_spawning_** a new session.

The ***SERVER** program takes information from the current session of PxPlus regarding the Application Server and information from the programmer about what to run. It launches a new _instance_ of PxPlus on the server using the credentials of the user from the current session, while also forcing the client's workstation to start a new instance of the client software.

The ***SERVER** program generates a session ticket for the Application Server and informs both the new server-side process and the client-side process about the session. At this point, the new server- and client-side processes connect to the Application Server and begin a new independent session. This session will be running the application with the characteristics for which the programmer coded within the **CALL** list of the ***SERVER** program.

The session of PxPlus which is issuing the **CALL** to the ***SERVER;SPAWN** command must itself be an Application Server-connected session from either a ***CLIENT** or previous ***SERVER;SPAWN**.

The ***SERVER** program has two line label entry points:

|  _Launch_ |  An internal entry point used by newly invoked processes on the server.  
---|---|---  
|  _Spawn_ |  An entry point used by programmers to spawn new independent sessions of PxPlus and the applicable client on the workstation.  
  
**_Command Line Syntax_**

> **CALL "*SERVER;SPAWN"**_,LeadPrg$,AppName$,StartInDir$,ServINI$,ClientINI$, ClientsState$, ExCMDOpts$,Args$,FIDVal$,NoHup$_

**_Where:_**

_LeadPrg_ _$_ |  Either null, indicating a console session, or a valid pathname to a PxPlus program.  
---|---  
_AppName_ _$_ |  Either null, or a descriptive name to appear in the configurator's session listing.  
_StartInDir_ _$_ |  Either null, indicating the current directory, or a specific directory where the server-side process is to start.  
_ServINI_ _$_ |  Either null, or a valid pathname to an INI on the server to use for this new session. If it is null, then the INI used for the new PxPlus session on the server will be the same as that for the current session.  
_ClientINI_ _$_ |  **_(WindX Clients Only)_** Either null, in which case the WindX client will launch a new instance using the same INI it is currently using, or a valid pathname to an INI on the client PC for the new WindX process to use.  
_ClientsState_ _$_ |  Allows you to control the initial viewing state of the new process on the client. This is a string of one-character options: |  **H** |  Hide initial dialogue.  
---|---  
**M** |  Minimize initial dialogue.  
**N** |  Show new process dialogue in the "Normal" state.  
**X** |  Maximize new process dialogue _(currently not implemented)_.  
_ExCMDOpts_ _$_ |  Extra Command line options for server-side process, whereby you can request additional Command line options for the server-side process. (May be null if no arguments are required.)  
  
**_Example:  
  
_** "-XT=1" **_or_** "XT=0 -NE=1"  
  
Extra Command line options are supplied to the server-side process after the program name but before any ARG values.  
  
**_Example:_**  
  
_ServSideCommand_ _LeadProgram$ ExCmdOpts$ -ARG_  
_Args_ _$_ |  Additional Command line arguments for the server-side process, whereby you can request Command line arguments for the server-side process. (May be null if no arguments are required.) Embedded quotes should be used as necessary.  
  
Extra Command line arguments are supplied to the server-side process as ARG values.  
  
**_Example:_**  
  
_ServSideCommand_ _LeadProgram$ -ARG Args$_  
_FIDVal_ _$_ |  The **FID(0)** value requested. If this value is null, then the newly spawned session will have the same **FID(0)** value as the current session. The maximum **FID(0)** value is 12 characters.  
_NoHup_ _$_ |  **_(UNIX/Linux Only)_** Allows you to decide whether the newly spawned session is to be started using Nohup or not. The use of Nohup determines if a process is to remain attached (or not) to the process that spawned it, and if it is attached, then the child process will terminate when the session the parent is running has terminated. This is a one-character string option: |  **""**_(null)_ |  Use the settings in the Application Server to determine if the sessions are Nohup'd or not.  
---|---  
**"Y"** |  Force the session to be Nohup'd.  
**"N"** |  Force the session to remain connected to the parent process (**_not_** Nohup'd).  
  
**_Additional Notes about Spawning_**

The newly spawned session will be spawned as the current user.

If the current session (the one doing the ***SERVER;SPAWN**) is SSL-connected, then the spawned session will also be SSL-connected.

Access to PxPlus console mode for ***SERVER;SPAWN** sessions is governed by the Application Server 's configuration. If the user was not allowed to access console mode in the Application Server configuration, then he/she will not be allowed to access it via a spawn.

The full parameter list on the **CALL** to ***SERVER;SPAWNis** not required.

> **_Examples:_**

> CALL "*server;spawn" _Spawns new console session_  
>  CALL "*server;spawn","**" _Spawns new session running PxPlus utilities_

All text and messages used by ***SERVER** are stored in the ***APPSERV/APSMESG.EN** message library. **EN** can be changed to another language suffix.

**%APS** is an object identifier that has information available to the session about its characteristics. To view the list of session properties, **PRINT %APS'***. The recommendation is that you **_never_** set any of these object properties or use any of its functions. Doing so may make the current session unable to spawn new sessions. See **[Session Object Properties](Session%20Object%20Properties.md)**.
