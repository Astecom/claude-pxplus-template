# Application Server  
  
**Session Object Properties**|   
---|---  
  
Each new session, whether created from a request by ***CLIENT** or from a ***SERVER;SPAWN** , has an OOP object whose object identifier is stored in %APS that can be used to get information about a session's characteristics.

**_Example:_**

The following test can be applied to determine if program code is running within an Application Server session:

if %APS and %APS'SessionID$>""  
then UsingAppServer=1  
  
Not all properties will be available in all sessions or for all circumstances.

## Server-Side Information

The following **%APS** properties provide information about the PxPlus process on the server-side:

**Administrator$** |  _Unused - future feature._  
---|---  
**AllowConsoleMode$** |  **0** = No access to console mode  
**1** = Console mode allowed  
**AllowReconnect** |  Numeric value representing the type of reconnect allowed.  
  
**0** = None  
**AppEnvVars$** |  _Unused - future feature._  
**AppName$** |  Name of the application that the user requested to be run.  
**AppUMask$** |  **_(UNIX/Linux)_** File creation umask with which the session was created (not honored by all OS's).  
**Arguments$** |  Additional arguments passed to this session by a request from the client.  
**ClientConnectionID$** |  Internal socket number (IND value) that the server daemon has for the client side of the connection.  
**ClientConnTimeStamp** |  8-decimal place Julian time/date when the client-side process connected to the server daemon.  
**ClientDomain$** |  **_(Windows Only)_** OS domain name from the client-side workstation.  
**ClientLang$** |  The 2-character language code that the client is using.  
**ClientNID$** |  PxPlus **NID**(machine ID) from the client-side process.  
**ClientOS$** |  Descriptive name of the client's operating system.  
**ClientPID$** |  OS process ID for the client-side process (from client).  
**ClientSoftware$** |  The "WindX"client software that is connecting.  
**ClientSoftwareVersion$** |  9-digit number representing the client's software version with 7 being the PxPlus **TCB(29)** and 2 being the WindX major revision code.  
**ClientsOfType$** |  Client access.  
  
**_Where:  
_**  
**1** = Any kind of client can access  
**2** = WindX clients only  
**ClientTCPProperties$** |  String of TCP/IP characteristics: IP; socket; machine for the channel that the client-side process has opened to the server daemon.  
**ClientUID$** |  PxPlus UID from the client-side process.  
**ClientUSR1$** |  The client's user-defined string information from the **USR1** argument.  
**ClientUSR2$** |  The client's user-defined string information from the **USR2** argument.  
**ClientUSR3$** |  The client's user-defined string information from the **USR3** argument.  
**ClientUSR4$** |  The client's user-defined string information from the **USR4** argument.  
**ClientWHnd$** |  **_(Windows Only)_** OS Window handle for the client-side process (from the client machine).  
**ClientWHO$** |  PxPlus **WHO** from the client-side process.  
**ConnMethod$** |  **""** if the session was started by ***CLIENT** or **"Spawn"** if started by ***SERVER;SPAWN**.  
**CreatedTimeStamp** |  8-decimal place Julian time/date when the session was first created.  
**DestroyedTimeStamp** |  8-decimal place Julian time/date when the session was terminated.  
**DetachSpawns$** |  **0** = Spawns new sessions as attached processes  
**1** = nohup any new spawns  
**ExtraCMDOptions$** |  Additional command line parameters passed to this session by a request from the client.  
**FIDValue$** |  **FID(0)** value requested by the client.  
**KeepAlives$** |  **0** = No KeepAlives  
**1** = Using KeepAlives  
**Lang$** |  Language code: EN or FR, etc.  
**LeadProgram$** |  CONSOLE for a console mode session, or PxPlus program name used as the lead program for the server-side session (**LPG** contains internal use information only).  
**ListeningSocket$** |  TCP/IP socket number to which the server daemon is listening for _ServerName$._  
**MaxWindXVer$** |  9-digit number representing the maximum WindX version which may connect (all 0's is any).  
**MinWindXVer$** |  9-digit number representing the minimum WindX version which may connect (all 0's is any).  
**Protocol$** |  Always set to **PVXAS/1.0**.  
**PxPlusEXELocation$** |  Location of the PxPlus executable used to start the client process and to start any subsequent spawns from the Application server.  
**SecureSSL$** |  **0** = Normal session  
**1** = SSL-encrypted session  
**ServerConnectionID$** |  Internal socket number that the server daemon has for the server side of the connection.  
**ServerConnTimeStamp** |  8-decimal place Julian time/date of when the server-side process connected to the server daemon.  
**ServerDir$** |  Always set to ***APPSERV**.  
**ServerName$** |  Name of the Application Server through which the session is being run.  
**ServerPID$** |  OS process ID for the server-side process.  
**ServerProg$** |  Name of the server-side program that was launched to start the physical session, usually ***SERVER**.  
**ServerProgLabel$** |  Name of the entry point for the server-side program that was launched to start the physical session, usually **Launch**.  
**ServersINI$** |  INI file that the server-side process was told to use by the Application Server.  
**ServerTCPProperties$** |  A string of TCP/IP characteristics: IP; socket; machine for the channel that the server-side process has opened to the server daemon.  
**ServerUID$** |  PxPlus **UID** for the server-side process.  
**ServerUserDomain$** |  **_(Windows Only)_** OS domain name that the server-side session was launched as.  
**ServerUserName$** |  OS user name that the server-side session was launched as.  
**ServerWHnd$** |  **_(Windows Only)_** OS window handle for the server-side process.  
**ServerWHO$** |  PxPlus **WHO** for the server-side process.  
**SessionID$** |  Session identification token. Each session is identified by a unique token between 17 and 24 characters.  
**SessionStatus** |  Session status.  
  
**_Where:  
  
_** **0** = None connected  
**1** = One side connected  
**2** = Both sides connected  
**255** = Terminated  
**ShowSpawnsOnDesktop$** |  **_(Windows Only)  
_**  
**1** = Server to show tasks on taskbar  
**0** = Server to hide task bar buttons  
**SocketOptions$** |  TCP/IP socket options that the server-side session is using to talk to the server daemon.  
**StartInDirectory$** |  Directory in which the current session was told to start by the application.  
  
## Client-Side Information

The following **%APS** properties provide information about the PxPlus process on the client-side:

**AllowReconnect** |  Numeric value indicating what type of reconnect, if any, is allowed for this session.  
---|---  
**AppName$** |  Name of the application that the user requested to be run.  
**ClientArguments$** |  Additional arguments for the server process that the client requested.  
**ClientCMDOptions$** |  Additional command line parameters for the server process that the client requested.  
**ClientDomain$** |  **_(Windows Only)_** Client workstation's OS domain name.  
**ClientFID$** |  **FID(0)** value requested by the client.  
**ClientINI$** |  INI file in use for the client-side process.  
**ClientLabel$** |  Name of the entry point for the client-side program which was launched to start the physical session, usually "" or **Spawn**.  
**ClientNID$** |  PxPlus **NID**(machine ID) from the client-side process.  
**ClientOS$** |  Descriptive name of the client's operating system.  
**ClientPID$** |  OS Process ID for the client-side process.  
**ClientSoftwareVersion** |  9-digit number representing the client software's version (7 being the PxPlus TCB(29) and 2 being the WindX major revision code).  
**ClientStartinDirectory$** |  The start-in directory for the server process that the client requested (not the client's start-in directory).  
**ClientTCPProperties$** |  String of TCP/IP characteristics: IP; socket; machine for the channel that the client-side process has opened to the server daemon.  
**ClientUID$** |  PxPlus **UID** from the client-side process.  
**ClientUSR1$** |  Value that has passed to the client on the command line for **USR1**.  
**ClientUSR2$** |  Value that has passed to the client on the command line for **USR2**.  
**ClientUSR3$** |  Value that has passed to the client on the command line for **USR3**.  
**ClientUSR4$** |  Value that has passed to the client on the command line for **USR4**.  
**ClientWHnd$** |  **_(Windows Only)_** OS Window handle for the client-side process.  
**ClientWHO$** |  PxPlus **WHO** from the client-side process.  
**KeepAlives$** |  **0** = Do not use KeepAlives  
**1** = Use KeepAlives  
**Lang$** |  Language code: EN or FR, etc.  
**LeadProgram$** |  Name of the lead program that the user supplied from a spawn request.  
**Protocol$** |  Always set to **PVXAS/1.0**.  
**PxPlusEXELocation$** |  Location of the PxPlus executable used to start the client process and to start any subsequent spawns from the Application Server.  
**SecureSSL$** |  **0** = Normal session  
**1** = SSL-encrypted session  
**ServerDir$** |  Always set to ***APPSERV**.  
**ServerName$** |  IP address or DNS resolvable machine name of the server that the client used to contact the server initially.  
**ServerSocket$** |  TCP/IP port or socket number that the client used to contact the server.  
**SessionID$** |  Session identification token. Each session is identified by a unique token between 17 and 24 characters.  
**SocketOptions$** |  TCP/IP socket options that the client-side session is using to talk to the server daemon.
