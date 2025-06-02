# Application Server

**Server Configuration**|   
---|---  
  
The Application Server includes a utility for creating and setting up server characteristics, including security and administration. The Windows interface for the configuration utility is a NOMADS application that can be run locally via PxPlus for Windows or by using WindX connected to a UNIX/Linux server. A character-based method for running this utility is also available.

This utility may be launched from a shortcut supplied with the PxPlus for Windows installation. Otherwise, the Command line syntax is described as follows:

|  In **_Windows_** : |  _PVXpath$_ **[-hd] [apscfg.ini] *appserv\config [ARG**  _arguments_**]**  
---|---|---  
|  In **_UNIX/Linux_** : |  _PVXpath$_ **"*appserv"/config**  
  
**_Where:_**

_PVXpath_ |  Path to PxPlus.  
---|---  
**-hd** |  Command line option indicating that the utility starts with the initial window hidden. **_(Windows Only)_**  
**apscfg.ini** |  Configuration's standard INI file. **_(Windows Only)_**  
_arguments_ |  Optional configuration flags. **_(Windows Only)_** |  _AsService_ |  Indicates start/stop is not allowed on the desktop if server daemons are running as Windows services. When started with this flag, global variable **%AsService** =1.  
---|---  
_WithLimits_ |  Disables folders **[Clients](Server%20Configuration.htm#clients)**, **[Apps](Server%20Configuration.htm#apps)**, **[Users](Server%20Configuration.htm#users)**, **[Service](Server%20Configuration.htm#service)** and **[Logging](Server%20Configuration.htm#logging)** in the main panel. This only allows **[Sessions](Server%20Configuration.htm#sessions)** and **[Server](Server%20Configuration.htm#server)** tabs to be accessed. When started with this flag, global variable **%WithLimits** =1.  
_WithGlobal_ |  Starts the server in global mode only, allowing access to folders **[Apps](Server%20Configuration.htm#apps)** and **[Users](Server%20Configuration.htm#users)**. Allows definition of **< Global Config>** settings. When started with this flag, global variable **%WithServer$** (which holds the names of servers) will also have the global configuration added.  
  
##  Main Panel

Application servers are created and maintained from the main panel of this utility. This panel is divided into several tabbed panels for viewing and/or changing different configuration and administration options: **[Sessions](Server%20Configuration.htm#sessions)**, **[Server](Server%20Configuration.htm#server)**, **[Clients](Server%20Configuration.htm#clients)**, **[Apps](Server%20Configuration.htm#apps)**, **[Users](Server%20Configuration.htm#users)**, **[Service](Server%20Configuration.htm#service)** and **[Logging](Server%20Configuration.htm#logging)**.

> The main panel is where new servers are named and created, and it is where the system administrator controls which server is currently selected to be started, stopped or updated. Changed settings are saved in different files under the Lib/_appserv directory.

See **[Server Configuration Files](Server%20Configuration.htm#configfiles)** below.

**_Creating a New Server_**

Using this utility, a new Application Server is created by entering a name in the _Server_ field. All information about the new server will then be stored under this name, and it can be recalled later (by server name) for further editing. Once the server is saved, this name can also be used to start the server from the Command line via the server daemon program (***appserv\server**).

Server names are case insensitive and may comprise any legal characters up to 20 characters in length. However, you **_cannot_** use characters less than Hex $20$, spaces or any of the following: **" < > , / \ * ? & | ; : { } ( ) $ ! `**

**_Modifying or Deleting Server Properties_**

If the configuration of any current server has been changed, you will be asked to save those changes before proceeding to configure the next server.

To **_delete a server_** , select its name from the _Server_ drop list and then click the _Delete_ button. All server names can be deleted unless they are currently running.

Any changes made to fields in the **[Server](Server%20Configuration.htm#server)**, **[Clients](Server%20Configuration.htm#clients)**, **[Apps](Server%20Configuration.htm#apps)**, **[Users](Server%20Configuration.htm#users)** or **[Logging](Server%20Configuration.htm#logging)** panels are considered changes to the currently selected server. To save these changes, click the _Apply_ button or switch to a different server name.

**_Updating On-the-Fly_**

If you save changes to a server while it is running, the new configuration will be applied automatically. Changes made under **< Global Config>** will apply to **_all_** servers that are currently running. The update will take place unless you opted to change **[TCP/IP](Server%20Configuration.htm#server)** properties, which results in a conditional update procedure. Because Application Servers play "man-in-the-middle", closing the TCP/IP socket will disconnect all connected users. If the server's TCP/IP properties have been changed and the TCP/IP socket needs to be closed and reopened, then the server will perform the following:

  * If no users are currently connected, the server will simply be updated.
  * If users are currently connected, you will receive an "OK to Continue (Yes/No)" warning message.
  * If you proceed with the changes, then all users will be disconnected, the changes will be made, and the server will begin accepting new connections with the new configuration.
  * If you do not proceed, then the changes you made will be saved, but the currently running server will not be updated. To update it, you will need to either apply the changes later or stop/start the server.



**_Switching Between Servers_**

Switch to another configured server by selecting a different server name from the _Server_ drop list or by entering the name directly into the field. You can also switch from a specific server to define **< Global Config>**. If you change any characteristics of the currently selected server, you will be asked to save your changes before proceeding.

**_Starting a Server_**

From the Command line, use the ***appserv/server** daemon program.

From the Configuration utility, click the _Start_ button that appears under the _Server_ panel while the specific server name is currently selected.

**_Stopping a Server_**

From the Configuration utility, click the _Stop_ button that appears under the _Server_ panel while the specific server name is currently selected.

From a Windows operating system, select _Close_ from the right mouse menu when clicking on the server's taskbar button.

Under UNIX/Linux, use:

> Kill -2 _pid_

**_Where:_**

_pid_ is the server's process ID.

**_Server Status_**

Adjacent to the _Server_ field is the server _Status_ indicator, which reports if the currently selected server is _Running_ or _Stopped_ , _Starting_ or _Stopping_ , and reports when an update is in progress.

The status is only updated when:

  * Moving from one tab to the next.
  * Selecting the _Refresh_ button on the **[Sessions](Server%20Configuration.htm#sessions)** panel.
  * Attempting to _Start_ or _Stop_.
  * Clicking the _Apply_ button.



##  Sessions

The **Sessions** panel lists (and allows the termination of) currently running sessions. The drop box under the **Sessions** panel lists **[View Options](Server%20Configuration.htm#viewoptions)** for viewing sessions. The list is purged each time the server is started.

The columns listed are customizable. Right click any column header to select which columns are listed. Drag on the headers to change the order of the columns.

_User_ |  Remote user name that the user signed onto the Application Server with to start his/her session.  
---|---  
_Client_ |  Type of client software that the client workstation is using to access the server (e.g. WindX).  
_Type_ |  Specific type of session that the user is running, either _Client_ or _Spawn_.  
_Status_ |  State of the session, either _Connected_ or _Terminated_.  
_Application_ |  Name of the application that the user requested to be run, or the lead program if the application was not configured.  
_Connect Time_ |  Either the amount of time (in days, hours, minutes, seconds) that an active session has been running, or the amount of time a terminated session had been running prior to termination.  
_Refresh_ |  Button used to update the **Sessions** list. The list will also be refreshed whenever the user switches back from another tab.  
_Details_ |  Button used to display the **[Session Details](Server%20Configuration.htm#sessiondetails)** panel with details on the currently selected session.  
_Terminate_ |  Button used to drop a session. This disconnects the user and terminates the session on the server, no matter what that session is doing.

#### **Warning!**  
**_Exercise extreme caution when using this option._** Terminating without knowing the state of a session is dangerous since you could interrupt critical file processing.  
  
_Interrupt_ |  Button used to interrupt a session and drop the user into console mode on the client side (for troubleshooting purposes).  
_(View Options Drop Box)_ |  Lists options for viewing sessions: |  _View Connected Only_ |  Currently running sessions  
---|---  
_View Terminated Only_ |  Information about sessions that are no longer running  
_View All_ |  Both active and terminated sessions in a single listing  
  
**_Session Details_**

The **Session Details** panel is invoked by clicking the _Details_ button for a selected session. It provides further information about the session. Scroll down the list for complete details of the session, organized as follows:

  * Session ID, its status, how and when the session was created or terminated, and the running time of the session.
  * Client's User ID, IP address, operating system, software, handle numbers, process IDs, and information from the user's workstation itself.
  * Which application the user chose to run and the properties used to launch it.
  * User name that was used by the process on the server, as well as the server's process ID, handles, and TCP/IP socket parameters.



##  Server

The **Server** panel is used to configure the primary server attributes. You can start, stop, modify, create or delete the currently selected server. See **[Main Panel](Server%20Configuration.htm#mainpanel)** above.

**TCP/IP** |  These fields are used to define TCP/IP settings.  
---|---  
_Socket_ |  TCP/IP port number (socket) that the server will open and on which it will listen for requests. This socket will be used for all aspects of the server, from the initial connections through handling of session traffic. Select any valid TCP/IP port from 1 to 65535. Sockets 1 to 1024 are usually governed by the operating system, and only processes running as root or users classed as Administrators will be allowed to open sockets in this range.  
_KeepAlives_ |  Check box for using TCP/IP KeepAlives on the socket. If this option is selected, the operating system will send KeepAlive packets to the server- and client-side processes to check if they are still connected. The amount of time before sending KeepAlives, the number of KeepAlives sent, and the interval between sending them are configured at the operating system level.  
_Encrypt_ |  Check box for using SSL encryption on the socket. If this option is selected, the Application Server will only accept connections from clients who use SSL encryption. All traffic between the server and the client processes will be SSL encrypted. If **_On_** , a valid SSL certificate file must be entered (see _Certificate_ below).  
_Certificate_ |  SSL certificate file to be used for SSL-encrypted communications. This field is active **_only_** if SSL encryption is turned **_On_**. The file must be in the standard format that PxPlus SSL requires, which is a plain text file containing both the X509 certificate and the private key.  
**Default User** |  These fields are for configuring default user characteristics for running server-side processes and are only applicable when running in a UNIX/Linux environment or in MS Windows (in conjunction with **[CmdAsUser](Server%20Configuration.htm#options)**).  
_Run All as Default User_ |  When this check box is selected, all client session requests will have their server-side process run as the user given in _User Name_. Any user name listed in **[Current Users Properties](Server%20Configuration.htm#usersprops)** will be ignored. This causes all PxPlus processes on the server to be run using the default user ID. Under **_Windows_** , all server-side processes will be run as the currently logged-on user or whatever user name is set when running this software as a service. In a **_UNIX/Linux_** environment, the Application Server will use **[DEF UID](../../directives/def_gid~uid.md)** to launch new sessions if **DEF UID** is supported by the operating system. Otherwise, the "su" command will be used. There is no provision in the "su" command to pass the user's password as an argument; therefore, the only way you can run the Application Server and have it launch processes as other users is if the Application Server daemons are running as "root"; i.e. it does not require a password to run processes as other users.  
_User Name_ |  This provides the user name that the server-side PxPlus sessions will be run as. (This has no effect when running Windows or when not using **[CmdAsUser](Server%20Configuration.htm#options)** in a Windows environment.) Where the client is not forced to log on, any session request that is not preceded by a logon is classified as an anonymous user. The default user name is used to run any server-side PxPlus session for any connecting anonymous user.  
_User Password_ |  **_Windows_** option for setting the password for the user ID given in the User Name. It is only used by the **[CmdAsUser](Server%20Configuration.htm#options)** utility and is not required under UNIX/Linux.  
_User Domain_ |  **_Windows_** option for specifying the domain name for the user ID given in the User Name. It is only used by the **[CmdAsUser](Server%20Configuration.htm#options)** utility and is not required under UNIX/Linux. This is used only when _Run All as Default User_ is set or when sessions connect anonymously.  
**State** |  These fields allow an administrator to control the current state of the Application Server being configured.  
_Disable Server_ |  Check box to determine whether this server can be started (if currently not running). If disabled, the server will terminate before it starts accepting connections.  
_Disable New Connections_ |  Check box for disabling new sessions (for maintenance purposes). If set, then a _Reason_ should be specified to present to users attempting to connect. Only new sessions that are started from the client's PC will be disabled  it does not affect currently connected users. Current users will still be able to spawn additional sessions, but new connections via *CLIENT will be refused. This setting does not affect the configuration system's ability to talk to the server daemons.  
_Disable All Connections_ |  Check box to prevent all new sessions from being started. This includes new Client sessions (from *CLIENT), as well as any newly spawned sessions from currently connected users. This will not affect currently connected users, but it will prevent current users or potential users from starting new sessions of any kind. This setting does not affect the configuration system's ability to talk to the server daemons.  
_Reason_ |  Descriptive reason for disabling the server. If either the _Disable New Connections_ or _Disable All Connections_ check box is set, then the user will receive an error message informing him/her that the server is disabled for the reason provided.  
**Options** |   
_Show Sessions in Taskbar_ |  **_Windows_** option that determines whether the client sessions that get launched show up as a button on the Window's task bar.  
_Use CmdAsUser_ |  **_Windows_** option that determines whether the Application Server is to use the **CmdAsUser** utility to launch sessions on the server as specific users.

#### **Note:**  
**CmdAsUser** is a third-party program (not supported by PxPlus) that allows Windows software to be run as a specific user.  
  
_Detach Spawns via Nohup_ |  **_UNIX/Linux_** option to indicate that any spawns from within this session will use Nohup. The use of Nohup determines if a process is to remain attached (or not) to the process that spawned it. If it is attached, then the child process will terminate when the session the parent is running has terminated. This is the default setting for programs that are run, but not configured, as applications. Applications that are configured will use their own setting.  
_Default Umask_ |  **_UNIX/Linux_** option for setting the umask to use when running programs that are not configured as applications. Applications that are configured will use their own setting.  
_If the following fields are not specified, then the INI file and Start-In directory of the server daemon itself will be used instead by default:_  
_Server's INI_ |  **_Windows_** option for providing the name of the INI file to use for the ***appserv/server** daemon. It is only required if you use the _Start_ button to start the server daemons from within the configuration utility.  
_Start-In Directory_ |  Directory where the ***appserver/server** daemon is to be started in. It is only required if you use the _Start_ button to start the server daemons from within the configuration utility.  
  
##  Clients

The **Clients** panel is used to configure some general properties of the server as they relate to the clients that will be connecting.

**Clients** |  These fields allow an administrator to control the current state of the Application Server being configured.  
---|---  
_Client Must Login_ |  Check box to prevent anonymous sessions. If selected, the server must receive a valid login request before it receives a session request. In this case, the user on the client side must log in with a valid user name and password as configured in the Users panel. Only valid clients are allowed to request that sessions be run. Currently connected clients whose software does a spawn within the server-side process do not need to log in again. Sessions "spawned" from within a current session pick up the current user's characteristics. If not selected, then anonymous sessions are accepted pending other validation. The *CLIENT program tries to establish an anonymous session when it first connects. Using the -LOGIN option on the *CLIENT program, it is possible to have both anonymous and logged-on clients. This argument tells the *CLIENT program to skip the anonymous session attempt, process the Login panel, and log in the user. Using this method, it is possible to have both types of users (where validated users have more privileges than anonymous ones).

#### **Note:**  
Anonymous users can only request and run applications that are configured within the Apps panel and cannot run any other PxPlus program on the server.  
  
_Allow Anonymous Console Access_ |  Check box to allow users that have not given a valid logon to access the PxPlus console mode.

#### **Important Note:**  
From a security standpoint, anonymous users should never be given this access; however, in a trusted environment, you may wish to set this option to simplify connections to the server for development purposes.  
  
_Re-Connect_ |  Options for controlling the ability of client sessions to reconnect to the server if their network connection fails or is interrupted: |  _None_ |  Never allow a client to reconnect if their network connection fails.  
---|---  
_Prompted_ |  Inform the client that their connection has failed and ask if they wish to reconnect. This also informs the user if the reconnection is successful or not.  
_Automatic_ |  Reconnect automatically, then inform the user that their session was interrupted and has been reconnected.  
_Hidden_ |  Reconnect automatically without informing the user that their session had been interrupted/reconnected.  
_Max Total Clients_ |  Maximum number of unique clients who may be connected to the server at one time. If set to 0, then there is no limit. This does not affect the number of active connections or the number of spawned sessions any one client may have. The number of unique clients is dependent on the _Client Must Login_ option. If the _Client Must Login_ option is selected, then the number of unique clients is the number of different user names that may log in. Otherwise, the number of unique clients is determined by the number of different client IP Addresses that the server sees.  
_Max Total Sessions_ |  Maximum number of sessions that this server will allow at any one time. If set to 0, then there is no limit. The total is determined as a count of both client- and spawn-connected sessions.  
**Timeout (Seconds)** |  These fields represent the timeout values (in seconds) for completing certain session-related operations.  
_New Connections_ |  Time limit (in seconds) that a connecting client has to make its first valid request. Any connection that does not make a request in this time will be disconnected. This keeps other TCP/IP-based software (port scanners or hackers) from tying up server resources.  
_User Requests_ |  Time limit (in seconds) that a connected client has to make any additional requests after their first valid request. Setting this value keeps the server from holding open or using up resources when a client may have disconnected without notifying the server while in the process of making requests.  
_Admin Requests_ |  Time limit (in seconds) for internal administration requests between the Configuration system and running server daemons.  
_Re-Connect Timeout_ |  Time limit (in seconds) that a connecting client has to perform a reconnect from the moment the Application Server daemon realizes that the connection has been severed. Server-side processes will be kept running for this length of time before terminating. Once terminated, the client will not be able to reconnect to that session.  
  
#### **Note:**  
When the reconnect limit is set to a value other than 0, the Application Server daemon will maintain a 64K buffer of data for each PxPlus process serviced, and the Client will maintain a 64K buffer of data it last sent to the server.

Clients will only be able to reconnect to their sessions within the same instance of the client. If the client exits and its process terminates, then it will not have the information required to reconnect  therefore, a reconnect would not be possible.

The client may not notice that its connection to the server has been severed. The client will only notice this happening if the user is currently performing some task within the client. That is, the client may sit idle for an extended period of time and not notice that the connection had been severed when a user begins to type or click the mouse - the server daemons reconnect timeout may have already expired, and the user will not be able reconnect.

Setting a long duration for a reconnect timeout may leave processes running on the server for that entire time, consuming server resources until their timeout expires.

##  Apps

The **Apps** panel defines the applications that may be run by the currently selected server. Application entries may be created, changed or deleted using this panel.

_Type_ |  Indicates whether an application is **L** (configured locally within this server) or **G** (configured within the **< Global Config>**).  
---|---  
_Deny_ |  Check box (On/Off) method for denying access to a listed application.  
_Application Name_ |  Case insensitive application name. This is the name used in *CLIENT to identify and run the application.  
_Command Line_ |  Representation of PxPlus Command line syntax for the defined application. This syntax is not used by the Application Server, as it requires other properties and programs, but is simply a way to describe properties used by the application when it is launched.  
_Include Global Apps_ |  Check box to determine whether the current server should use the globally configured applications (from the **< Global Config>**), in addition to any locally configured applications.  
_Details_ |  Button used to view or modify properties of a listed application. Highlight an application entry and click this button to invoke the **[Application Properties](Server%20Configuration.htm#applicationprops)** panel to allow an administrator to configure application properties.  
_New_ |  Button used to create a new application. Click this button to invoke the **[Application Properties](Server%20Configuration.htm#applicationprops)** panel to allow an administrator to configure application properties. To define an application that is available to **_all_** configured servers, switch the _Server_ field to **< Global Config>**.  
_Delete_ |  Button used to delete a selected application entry.  
  
**_Application Properties_**

The **Application Properties** panel is invoked by clicking the _Details_ or _New_ button. It allows an administrator to configure application properties.

**Application** |  These fields provide the name for and the properties of a given application.  
---|---  
_App Name_ |  Descriptive name to identify a set of application properties. These are the properties it takes to run an application. Each application is created, referenced and stored by using a descriptive name. This name is also used in *CLIENT to request the specific application. Application names are case-insensitive. The name entered may contain any legal characters up to 40 characters in length. However, you cannot use a character less than Hex $20$ or any of the following: **" < > , / \ * ? & | ; : { } ( ) $ ! `**  
_PxPlus EXE_ |  Location on the server of the PxPlus executable to run this application. A null or <Default> setting indicates using the same executable that the Application Server daemon itself is using.  
_Server INI_ |  **_Windows_** option for naming the INI file to use for the server-side PxPlus process. A null or <Default> setting indicates using the same INI that the Application Server daemon itself is using.  
_Lead Program_ |  Actual name of the PxPlus program to be run, known in PxPlus as the _lead program_. If null or CONSOLE, then this is classified as a console session and is subject to console restrictions.  
_Extra CMD Options_ |  Options that are to go between the lead program name and any statement on the Command line. It is intended for system parameter settings (e.g. -XT=1 or -XT=0 -NE=1). Extra command line options are supplied to the server-side process after the lead program name, but before any **-ARG** values. **_Example:_** _ServSideCMD "LeadProgram" XtraCMDoptions$_ **-ARG ...** The client can send additional command line arguments. Any such additional arguments will be added to the end of this argument string.  
_Arguments_ |  Command line arguments for the server-side process. These arguments will be available to the launching process via the **[ARG( )](../../functions/arg.md)** function and **[NAR](../../variables/nar.md)** system variable. These are supplied to the server-side process as **ARG** values. **_Example:_** _ServSideCMD "LeadProgram"_ **-ARG**  _arguments$_  
_Start-In Directory_ |  Server directory where the Application Server is to launch the process for running the specified lead program. This will become the home working directory (HWD) of the process.  
_Init Window_ |  Initial window. Available selections are _Normal, Minimized, Maximized, Hidden_.  
**Options** |  These fields provide On/Off functionality for Application properties.  
_Disable Application_ |  Check box to deny access for all users; otherwise, the application will be available to all users who are configured in this server.  
_Allow Client Extra CMD Options_ |  Check box to enable extra command line options. If this is not selected, extra options sent by a client will be ignored. Extra options received by the server are in addition to the application's own. **_Example:_** _ServSideCMD "LeadProgram" ServXtraCMDoptions$_ **[-ARG ...]**  
_Allow Client Arguments_ |  Check box to enable clients to send additional command line arguments. Otherwise, such arguments sent by a client will be ignored. Extra arguments sent by a client are used in addition to the application's predefined arguments. **_Example:_** _ServSideCMD "LeadProgram"_ **-ARG**  _App_Args$ AddClient_Args$_  
_Allow Client to Set FID_ |  Check box to set **FID(0)** for the server-side process to match the value used/requested by the client system. Otherwise, the server-side process lets PxPlus select whatever **FID(0)** value it chooses.  
_Allow Client to Set Start-In Directory_ |  Check box to enable the client to request a different Start-In directory for the server-side process. Otherwise, any such request by a client is ignored.  
**Clients** |  These fields can be used to control the type (WindX), as well as the minimum/maximum version numbers of the client software accessing this application.  
_Client Type_ |  Client software permitted to access this application. Available selections are _Any Client Type, WindX Clients Only, JavX Clients Only_.  
_WindX Ver_ |  Minimum version of WindX that may run this application. See **[Version Codes](Server%20Configuration.htm#version)** below.  
_Max WindX Ver_ |  Maximum version of WindX that may run this application. See **[Version Codes](Server%20Configuration.htm#version)** below.  
_JavX Ver_ |  Minimum version of JavX that may run this application. See **[Version Codes](Server%20Configuration.htm#version)** below.  
_Max JavX Ver_ |  Maximum version of JavX that may run this application. See **[Version Codes](Server%20Configuration.htm#version)** below.  
**OS Level** |  These fields set properties needed for running applications under UNIX/Linux.  
_Default Umask_ |  Umask setting for running this application.

#### **Note:**  
Not all operating systems have this override.  
  
_Detach Spawns via Nohup_ |  Check box to determine whether any spawns from within this application session will use Nohup. The use of Nohup determines if a process is to remain attached (or not) to the process that spawned it and, if it is attached, then the child process will terminate when the session the parent is running has terminated.  
_Additional Environment Vars_ |  Operating system environment variables for the process that is to run this application.  
  
**_Version Codes_**

Version codes are 9 characters in length, split into 2 parts. The first part is the 7-digit software revision; i.e. **TCB(29)**. The second part is the 2-digit thin-client version number; i.e. **TCB(88)**. When the Application Server evaluates the minimum/maximum version numbers, it evaluates the two parts separately. If the 7-digit software revision number is 0, then no check will be made. If the 2-digit internal client level is 0, then no check will be made.

You can set just the software revision, just the internal client level, or both.

**_Example:_**

|  0.00.0000/00 |  No level checking is performed.  
---|---|---  
|  5.01.0000/00 |  Only a software level of "5.01.0000" is checked.  
|  0.00.0000/08 |  Only an internal client level of "08" is checked.  
|  5.01.0123/09 |  Both the software revision and the internal client level are checked.  
  
##  Users

The **Users** panel lists all of the valid or configured users that may log into this server.

_Type_ |  Indicates whether a user name is **L** (configured locally within this server) or **G** (configured within the **< Global Config>**).  
---|---  
_Remote User Name_ |  Case insensitive name that the user logs in as. This is the login ID that users must supply to their *CLIENT software.  
_Deny_ |  Check box (On/Off) method for denying access to the listed user.  
_Server User Name_ |  User ID associated with this user when running processes on the server. The **[Users Properties](Server%20Configuration.htm#usersprops)** panel allows you to associate the user ID of the remote users with a user ID the server can use.  
_Sessions_ |  Indicates the number of sessions a listed user is currently running. The number of **c**  _(client)_ and **s**  _(spawned)_ sessions is given.  
_Last Logon_ |  Date that the user last logged on to any of the configured servers.  
_Include Global Users_ |  Check box to determine whether the current server should use the globally configured user listing (from the **< Global Config>**) in addition to any locally configured users.  
_Details_ |  Button used to view or modify properties of a listed user name. Highlight a user entry and click this button to invoke the **[Users Properties](Server%20Configuration.htm#usersprops)** panel to allow an administrator to configure a user's abilities to access the server.  
_New_ |  Button used to create a new remote user name. Click this button to invoke the **[Users Properties](Server%20Configuration.htm#usersprops)** panel to allow an administrator to configure a user's abilities to access the server. To define a user that has access to **_all_** configured servers, switch the _Server_ field to **< Global Config>**.  
_Delete_ |  Button used to delete a selected user entry.  
  
**_Users Properties_**

The **Users Properties** panel is invoked by selecting the _Details_ or _New_ button. It allows an administrator to configure a user's abilities to access the server.

**Remote User** |  These fields define access for a remote user name.  
---|---  
_Remote User Name_ |  Case insensitive login name for the remote user. This is the name the user would enter in any Login dialogue on the remote workstation running *CLIENT (maximum 60 characters). Internally, this name is the one that appears within a login request to the server.  
_Full Name_ |  Descriptive name for the remote user provided for reference.  
_Password_ |  Password that the user must enter while logging into the server.  
_User Can Change Password_ |  Check box to enable users to change their password from the *CLIENT program.  
_Password Change at Next Logon_ |  Check box to force the user to change a password the next time he/she logs into the Application Server. Internally, when set, the server refuses any command from a user other than a "PASSWORD" change request after it receives a "LOGIN" request from a client workstation. Once a successful password change request has been completed, this setting is automatically turned off by the server.  
**Server User** |  These fields allow you to define the name, password and Windows domain that the server uses when launching processes on the server for a remote user. These settings are only in effect either when running under a UNIX/Linux environment or when using **[CmdAsUser](Server%20Configuration.htm#options)** in a Windows environment.

#### **Note:**  
The **[Run All as Default User](Server%20Configuration.htm#defaultuser)** setting (**Server** panel) has an effect on these settings  when this option is selected, these settings are ignored.  
  
_Server User Name Same as Remote User Name_ |  Check box to enable the _Remote User Name_ and _Password_ , along with the default user's (or current Windows domain) to be used to start the server process. Otherwise, the following values _(Server User Name, Password, Domain)_ must be set.  
_Server User Name_ |  User ID on the server for running these processes.  
_Password_ |  **_Windows_** password required for the user account given to run processes on this server as the _Server User Name_.  
_Domain_ |  **_Windows_** domain name required for the user account given to run these processes on this server. The domain defaults to the domain name of the currently logged in user if available.  
**Miscellaneous** |  These fields control user access.  
_Deny Access_ |  Check box to deny access. When selected, the user will receive an "Invalid Login" message when attempting to log in.  
_Enable Console Mode Access_ |  Check box to allow the user to access a PxPlus console prompt either by sending a null or by using CONSOLE as an application name. This setting also controls access to PxPlus console mode for all spawned sessions of this user.  
_Run Any Program  
Run Any Configured App_ |  This field determines what the user may run: any program or any configured application. _Run Any Program_ means that the user will be able to access any application defined on the **[Apps](Server%20Configuration.htm#apps)** panel, and if the application is not found, then the application name given will be used as the lead program name of an application to run. **_Example:_** If a user is set to _Run Any Program_ , and if the requested application name _Test_ is not configured in the **Apps** panel, then the server will run _Test_ if it exists. _Run Any Configured App_ means that the listed user will have access only to those application names listed on the **[Apps](Server%20Configuration.htm#apps)** panel.  
  
##  Service

The **Service** panel sets up the Application Server daemon to be run as a Windows service.

**Service Properties** |   
---|---  
_Name_ |  A unique service name, generated automatically.  
_Display Name  
Description_ |  Users will see these displayed in the MS Windows Services listing.  
_Start Type_ |  Drop box options to set up the Windows service for _Automatic_ or _Manual_ start or to have it _Disabled_.  
_Domain  
User Name  
Password_ |  If the service is to run as a user other than "local system", then these properties may be set.  
_Interact With Desktop_ |  Check box to enable access to the desktop. This is only valid when running as the "local system" account (not as another user).  
_Install  
Un-Install_ |  Buttons used to add or remove the service from Windows.  
  
To start or stop the service, use the _Start_ and _Stop_ buttons on the **[Server](Server%20Configuration.htm#server)** panel. If the service is not installed, then selecting _Start_ will start it on the Windows desktop.

#### **Note:**  
Changing any NT Service properties when the App Server daemon is running will require the daemon to be stopped, uninstalled, reinstalled and restarted.

Running each server daemon as a separate service can cause difficulties with PxPlus user count licensing. If you have more than one daemon running and they are set to interact with the desktop, then they can share the total user license count. However, if they do not interact with the desktop, then they will not be able to share the user count.

**_Example:_**

There are two server daemons (A and B) and 5 workstations. If all 5 connect to daemon A, you will use 6 user slots - one for the daemon and one for each of the WindX workstations 1 through 5. If all 5 of those workstations also connect to server B and each runs one session, then you will use another 6 user slots - one for the B server daemon and one for each of the 5 workstations. This means you will have used 12 user slots in total. However, if you set both daemons A and B to interact with the desktop and each of the 5 workstations connects one session to both server A and server B, then you will only use a total of 6 user slots, rather than a total of 12.

##  Logging

The **Logging** panel allows administrators to maintain aspects of the Application Server's logging functions. All log files are saved as plain ASCII text files in a subdirectory of the ***appserv** directory, which has the same name as the server.

Use the check box in the _Enable_ column to select logging of the different listed actions.

_Log All Server Errors_ |  Log of internal errors involving the Application Server daemon. Errors encountered in this log should be reported immediately.  
---|---  
_Log All Connections_ |  Simple log of all machines that connect or disconnect from the server, including clients and server-side connections.  
_Log Any Invalid Requests_ |  Log of all the requests that are invalid, unknown or not supported, as well as of all the responses from the server. An example of an invalid request would be when someone opens the Application Server daemon's socket and attempts an HTTP or FTP request.  
_Log All Client Requests_ |  Log of acceptable requests made by client workstations and the response they received from the server.  
_Log All Administrator Requests_ |  Log of administrative commands received by the server daemon and its response to that request. Currently, only the Application Server's Configuration tool makes administrative requests.  
_Log All Internal Housekeeping Requests_ |  Log of internal requests and their responses. These are requests that the servers made when their processes were invoked, as well as server and client requests when their processes were spawned.  
_Log All Applications Launched_ |  Log of all the sessions that clients requested and the command lines that the server used to launch those sessions.  
_View_ |  Button used to invoke the **[Log Viewer](Server%20Configuration.htm#logviewer)** for viewing the currently selected log.  
_Clear  
Clear All_ |  Buttons used to clear the selected log or all logs.  
_Rotate_ |  Button used to rename all logs with a leading date. **_Example:_** 20050622.140253.error.log YYYYMMDD.HHMMSS.*  
  
**_Log Viewer_**

The **Log Viewer** panel is invoked by clicking the _View_ button for a selected log. All log files are in ASCII text and follow a standard format where applicable. The | pipe symbol is used as the separator between items of information. The *****  _(asterisk)_ is used in place of a PxPlus $8A$ field separator. All passwords in valid requests are hidden using 10 periods (**. . . . . . . . . .**).

Logs typically show the following information:

  * Date/Time the entry was made.
  * IP address and internal handle (port) number of the connection making the request.
  * Request that was made.
  * Response from the server.



##  Server Configuration Files

Application Server configuration and run-time files are located under _Lib/_appserv_ within the system's PxPlus directory. Some of these data files should be preserved and copied to maintain configuration settings when you plan to move, upgrade or reinstall your server.

**_Dynamic Information_**

The following files are updated by the system at run time:

|  _Sessions.pvk_ |  Existing sessions since daemon started, relevant records cleared each time the daemon is started or stopped. This file also stores the location of the PxPlus executable.  
---|---|---  
|  _Pid.pvk_ |  Lock file for tracking running daemons, configuration screens, records added by daemons and configuration automatically.  
|  _Locate.pvk_ |  Tracks screen location and columns to display for the **[Sessions](Server%20Configuration.htm#sessions)** list for the **Application Server Configuration** utility, records added automatically.  
  
**_Static Information_**

The following data files are used specifically for the configuration of Application Server daemons. These are based on your changes to the **Application Server Configuration** utility and should be preserved/copied if you decide to change the location of your existing server:

|  _Server.pvk_ |  1 record per server daemon, tracking your selected information on a per-server basis.  
---|---|---  
|  _Apps.pvk_ |  1 record per application per server daemon, tracking your selected information for configuration applications within an Application Server daemon.  
|  _Users.pvk_ |  1 record per user per server daemon, tracking your selected information for users within an Application Server daemon.
