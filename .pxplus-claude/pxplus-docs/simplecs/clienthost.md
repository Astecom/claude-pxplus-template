# PxPlus Simplified Client-Server

**PxPlus Simple Client-Server Interface** |   
---|---  
  
This is a stripped down client-server interface that allows WindX workstations to connect to a host system. It provides more functionality than NTHost by using a single port and advanced security but less functionality than the Application Server. Due to the use of the ONESHOT functionality, a single port can be shared by multiple processes.

The simplified host/client server interface consists of the three programs explained below: **[*plus/cs/host](clienthost.htm#host)**, **[*plus/cs/client](clienthost.htm#client)** and **[*plus/cs/spawn](clienthost.htm#spawn)**.

## *plus/cs/host

This TCP port monitoring program runs on the server. Normally, this program will be launched from the Command line. Generally, this is initiated during system start-up.

#### **Note:**  
**_Prior to PxPlus 2016_** , the start_up program was run before the terminal connected and in the directory in which ***plus/cs/host** was run.  
  
**_As of PxPlus 2016_** , the start_up will be run after the terminal connects and will be run from whatever directory the user specifies in the **-DR** Command line option supplied by the workstation.

**_Command Line:_**

> pxplus.exe *plus\cs\host -arg  _portid_**[**_;options_**]** **[**_program_**]**

**_Where:_**

|  _portid_ |  This argument contains the Port ID to monitor. If the _portid_ is not supplied, port 4093 is used.  
---|---|---  
|  _options_ |  Additional _options_ (separated by semi-colons) can be specified in the _portid_ argument. If a secure server is required, you will need to include the SECURE=_xxxxx_ option following the _port id_ (separated by a semi-colon).

#### **Note:   
**Due to the fact that the semi-colon is a shell delimiter, you usually need to surround the _portid_ with quote marks on a UNIX/Linux Command line.

|  _TCP Options_ |  Any server option that is valid for a TCP connection (see **[[TCP] Transmission Control Protocol](../command_tags/tcp.htm)**) can be specified. **_Example:_** SECURE=/home/user/cert.pem;PRIVKEY=/home/user/privkey.pem;NOSSLV2;NOSSLV3;NOTLSV1 Additional options such as defining the ciphers and SSL protocols may be specified by setting the system environment variable **[PXP_CS_OPT](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark1)**. Any settings in the variable will be used when issuing the **[[TCP]](../command_tags/tcp.htm)** **OPEN** command.

#### **Note:**  
This setting impacts **_all_** *plus/cs/host programs running on the system. When running a secure host, you cannot use the **iNomads** function to spawn via the *plus/cs/host as **iNomads** does not have the ability to send secured transmission internally.

_(Client-Server host security using the system environment variable PXP_CS_OPT was added in PxPlus 2016.)_  
---|---  
RECON=_nn_ |  When provided, this option allows automatic client reconnection to the host in case of a disconnect. See **[Reconnect](clienthost.htm#reconnect)**. The value in _nn_ defines the number of seconds that the host will wait for a reconnect before forcibly terminating the session. _(The auto-reconnection feature was added in PxPlus V11.)_  
USERKEYS=_pathname_ |  When a user connects and the USERKEYS option is present, PxPlus will get the key supplied from the ***plus/cs/client ARG(1)** value and compare it to the values in the Userkeys file for that User ID. A common key can also be provided under a * User ID in the Userkeys file. If the key matches, the connection will be allowed; otherwise, the user will be denied connection. On the host, the Userkeys file will be specified in the first ARG: pxplus.exe *plus/cs/host -arg 4093;userkeys=_pathname_ **_Example:_** Suppose that a Userkeys file called _connectkeys_ is located at the following pathname: c:/pvx plus technologies/pxplusconnect/connectkeys _connectkeys_ is a simple text file that might look something like this: User1=akey  
User2=anotherkey  
*=commonkey **_Where:_** User1 and User2 are the User ID values (returned from the WHO function) for two specific workstations. The command used to launch the host would be: pxplus.exe *plus/cs/host -arg '4093;userkeys='c:\pvx plus technologies\pxplusconnect/connectkeys' (The single quotes are necessary if the pathname contains spaces.) _(The USERKEYS option was added in PxPlus 2019.)_  
|  _program_ |  This optional argument, if supplied, defines the program to be run on the server whenever a user connects. If specified, the "program" parameter submitted with client (workstation) setup will be ignored and placed into %LPG_USER$.  
  
If the server program (the one supplied on the ***plus/cs/host** Command line) wants to run the program requested by the client, it should issue a **RUN "*plus/cs/host;FORCED_RUN"**. Otherwise, it may take whatever action it desires to complete the connection. _(Logic to allow forced programs to spawn sessions was added in PxPlus 2016.)_  
  
**_Example:_**

**_On Windows_** \- To launch this program to monitor port 12345:

> pxplus.exe *plus\cs\host -arg 12345

**_On UNIX/Linux_** \- To launch this program to monitor port 4093, provide a 5 minute reconnect and run MySys:

> ./pxplus/pxplus "*plus/cs/host" -arg "4093;recon=300" MySys >/dev/null </dev/null

#### **Note:**  
The [**'NR'**](../parameters/nr.md) system parameter will be reset to 0 (zero) when leaving a CALL program.

## *plus/cs/client

This client program will be run on each workstation to connect to the server. This program is normally run from the Command line.

**_Command Line:_**

> pxplus.exe *plus\cs\client -arg  _server_**[**_;portid_**[**_;options_**]] [**_program_**]**

**_Where:_**

|  _server_ |  This argument defines the server TCP address. The server name can be either a recognized TCP host name or a TCP/IP address consisting of a "dotted quad" (e.g. 201.129.10.23).  
---|---|---  
|  _portid_ |  This argument defines the port number. If no port number is specified, port 4093 is assumed.  
__ |  _options_ |  Additional options (separated by semi-colons) can be specified. _(Support for additional options was added in PxPlus 2017.)_ If connecting to a secure server (one that has a SECURE=_xxxxx_ option), you will need to include the keyword "SECURE" following the _port id_ (separated by a semi-colon).

#### **Important Note:**  
The _portid_ _**must**_ be specified **_before_** any option specification.

|  _TCP Options_ |  Any client option that is valid for a TCP connection (see **[[TCP] Transmission Control Protocol](../command_tags/tcp.htm)**) can be specified. Example: SECURE;CERTIFICATES=TRUST The system environment variable **[PXP_CS_OPT_CLIENT](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark2)** can be set on the workstation (client) to define additional options. Any settings in the variable will be used when issuing the **[TCP] OPEN** command. _(Client-Server host security using the system environment variable PXP_CS_OPT_CLIENT was added in PxPlus 2016.)_  
---|---  
PUBKEY=_xxxxxxx_ |  Defines how to validate the server's public key.  
  
If _xxxxxxx_ contains the word "_check_ ", then on the first connect to the server, the client process will ask the user to confirm that the public key signature it received is correct.  
  
If _xxxxxxx_ contains a public key signature (Base 64 of the SHA-256 of the X509 public key), then it **_must_** match the server value.  
  
For information on validating the server public key when using the PxPlus Simple Client-Server interface, see **[Simple Client-Server Public Key Validation](../windx/Windx%20Security.htm#validation)**.  
  
_(The PUBKEY option was added in PxPlus 2017.)_  
USERKEY=_xxxxxxxxxxxx_ |  USERKEY value that will be checked against the Userkeys file that was specified by the host connection. This file will contain entries for each User ID and a key value that the workstation must supply on their *plus/cs/client connection. On the workstation, the USERKEY value will be specified in the first ARG: pxplus.exe *plus/cs/client -arg servername;4093;userkey=_xxxxxxxxxxxx_ Referring back to the above **[Example](clienthost.htm#host_example)** where the host specified the _connectkeys_ file, if the workstation belongs to User1, the command might look like this: pxplus.exe *plus/cs/client -arg servername;4093;userkey=akey Or if a common key is used for **_all_** users, the command might look like this: pxplus.exe *plus/cs/client -arg servername;4093;userkey=commonkey _(The USERKEY option was added in PxPlus 2019.)_  
__ |  _program_ |  This optional argument contains the program to run on the server, along with any associated Command line parameters and/or arguments. If this argument is not supplied, the client will be launched to standard Command mode.  
  
**_Example:_**

> pxplus.exe *plus\cs\client -arg MySrvr;12345 "*winstar -dr=c:\demo -arg main panel.en"

This example would connect to the ***plus/cs/host** program running on a server called _MySrvr_ on port 12345. The host program would run program _*winstar_ in the directory _c:\demo_ with the ARG(1) = _"main"_ and ARG(2) = _"panel.en"_.

## *plus/cs/spawn

This utility program can be used to spawn additional sessions when running the PVX Plus Host/Client Server interface. The **[*TOOLS/HOSTTEST](../utilities/hosttest.md)** utility is used to test the ***plus/cs/spawn** interface.

**_Calling Sequence_ :**

> **CALL "*plus/cs/spawn"** , _cmd_line_ _$_ , _fid_id_ _$_ , _hideflag_ _, INI_file$_

**_Where:_**

__ |  _cmd_line_ _$_ |  Program name and associated arguments to be launched in a separate session.  
---|---|---  
__ |  _fid_id_ _$_ |  FID to use in the launched task. Generally, this will be FID(0). By default, the launched task assumes the FID(0) value of the originating task.  
__ |  _hideflag_ |  This parameter can be used to control whether the main window will be hidden on the launched task. If set to a non-zero value, the main window of the launched task will be hidden (minimized). Generally, you want to set this flag if you are launching a NOMADS application where the panel is a freestanding dialogue box.  
__ |  _INI_file_ _$_ |  INI file to use on the WindX workstation when spawning the process. If omitted, the default INI file will be used. If an *****  _(asterisk)_ is specified as the name of the _INI_file_ _$_ , the sub-routine will use the INI file for the current session.  
  
#### **Note:**  
The standard **"*windx.utl;spawn"** has been altered to detect that the application is running with PxPlus Host/Client Server interface and will internally call the ***plus/cs/spawn** routines.

##  Reconnect

If desired, you can enable a session reconnect capability. This will allow workstations to reconnect to the server in case the connection is severed or dropped. To reconnect, the client session (WindX - CS/Client) must remain active. When the disconnection occurs, the workstation will attempt to reconnect automatically to the server. If the reconnect can be successfully completed with 10 seconds, the session will continue uninterrupted. If the reconnect takes longer than 10 seconds, the user will be informed that a reconnect is being attempted and given the opportunity to abandon the session.

To enable the reconnect capability, append ";recon=_nnn_ " to the server ***plus/cs/host** first argument (the port number), where _nnn_ is the number of seconds to allow the user to reconnect. See **[RECON=](clienthost.htm#options)** above.

During the reconnect time period, all session resources will remain intact, and the session will be released only if the reconnect timeout period is exceeded and the workstation has not reconnected. If the client can reconnect to the host but the host cannot find the task, the timeout is executed immediately.

##  Shutting Down the Host

To shut down **_all_** ***plus/cs/host** processes, you can either run **./pxplus/pxplus "*plus/cs/host;shutdown"** or create the following file:

> ***plus/cs/shutdown**

To shut down a **_specific_** server, create the following file **_where_** _####_ is the port number:

> ***plus/cs/shutdown**._####_

You can also shut down the ***plus/cs/host** process(es) by calling this program with the following format:

> **CALL "*plus/cs/host;shutdown"** ,_port#_  
>   
> **_Where:_**

> You can specify the _port#_ to shut down a specific server. If no _port#_ is specified, the default is to shut down the ***plus/cs/host** process on port 4093. If 0 (zero) is specified as the _port#_ , **_all_** host processes on **_all_** ports will shut down.

If you shut down the ***plus/cs/host** process(es) either by using a **shutdow** n file or by calling **"*plus/cs/host;shutdown",0** , the process(es) will shut down once the next client connects and disconnects from them.

If you shut down a ***plus/cs/host** process by calling **"*plus/cs/host;shutdown",_port#_** , then it will shut down immediately.

The **shutdown** file will be deleted when the server is started again, making it possible to see who created the **shutdown** file to determine who terminated the host process.

#### **Note:**  
If the host is running as a Windows service, the start-up and shut down of services is handled by Windows. As a result, the above shut down methods do **_not_** apply and will **_not_** work if attempted.

If you run a ***plus/cs/host** process on Windows **_(not as a service)_** , a button displays in the system tray to indicate it is running in the background. Hover the mouse pointer over this button to display a tooltip that includes the port number of the server. Right clicking on this button displays a different tooltip with an option to shut down the server, as well as see the port number and the number of PxPlus user slots currently occupied. If the host process is running in secure (HTTPS) mode, the tooltip shows "**;secure** " after the port number (e.g. Shutdown Simple CS Host (4093;secure / 4 users)). As an alternative, you can shut down the server by selecting the _Terminate_ button in the minimized PxPlus window of the host process.

_(The ability to shutdown specific host processes was added in PxPlus 2017.)  
__(The "secure" text in the tooltip was added in PxPlus 2023.)_

## Global Variables

The host sets the following global variables before running your application:

**** |  **%PXPLUS_HOST$** |  IP address and port number of the host system  
---|---|---  
**** |  **%PXPLUS_NID$** |  Network ID (computer name) of the workstation (NID from local workstation)  
**** |  **%PXPLUS_WHO$** |  User ID from the workstation (WHO from local workstation)  
  
##  Installing as a Service on Windows

The Simple Client Server can be installed and run as a Windows Service using either of the following two methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Installation and Setup_ category and select _Install Windows Services_ to launch the **[Install Windows Services](../Install%20Windows%20Services.md)** interface. From the _Type of Service_ drop box, select _Simple Client Server_. After entering the service settings in the grid, select the _Install_ button.  
From the Command line |  Enter the following: **RUN "*plus/cs/service"** PxPlus includes this special installation and monitoring program call that will confirm that you want to install the service and request the _Starting Directory_ and _Port Number_ to use: |  ->**run "*plus/cs/service"**  
Service Not currently installed  
Do you want to install the service (Y/N): **Y**  
---  
Starting directory:  
Port to use:  
Forced Prog: |  **C:\Pvxsrc  
4093**  
  
To alter any of the settings or to remove the service from the system, simply run the program again. It will detect that the service is already installed and ask if you wish to delete it or modify its settings.  
  
When installed, the system will default to _Manual_ start. To have the service start automatically when the system is booted, you will need to go to your Windows _Control Panel_ and change the start-up setting to _Automatic_.
