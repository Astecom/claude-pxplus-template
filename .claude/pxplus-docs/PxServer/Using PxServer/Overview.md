# PxServer 

**Using PxServer** |  **__**  
---|---  
  
## Running PxServer

Information for running PxServer on Windows and on UNIX is provided below.

#### **Important Note:**  
PxServer is installed as part of PxPlus and **_requires the Web bundle to run_**.  
  
_(The installation of PxServer as part of PxPlus (Web bundle only) was added in PxPlus 2019 Update 2.)_

**_Windows_**

PxServer can be run as a Windows service in the background. You can install PxServer as a service using the _Service_ tab in the PxServer Configuration application (_PxServerConfig.exe_). See **[Configuring PxServer](../Configuring%20PxServer/Overview.md)**. Once it is installed as a service, you can control the service using either the _Service_ tab or the Windows **Services** dialog that is accessed through the Windows _Start_ menu by searching for "Services".

You can start PxServer to run interactively from the **[IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** (expand the _Data Management_ category and select _Launch PxServer_) or from the _Start_ menu entry. You can also double click the executable file name (_PxServerConfig.exe_) from within the PxPlus installation folder.

_(PxServer capability to run as a Window service was added in PxPlus 2019.)_

**_UNIX_**

On UNIX, run PxServer from the Command line using the following syntax:

> _dir_ /pxserver**[** -f _configfile_**][** -p _tcpport_**]**

**_Where:_**

_dir_ |  Directory path (e.g. /usr/pxserver).  
---|---  
-f ** _or_** \--file _configfile_ |  Path and file name of the PxServer configuration file. If no configuration file is located, the server will not start, and an error message will be displayed or printed to the log file (if debug is enabled). See [**Configuring PxServer**](../Configuring%20PxServer/Overview.md). If this option is not specified, the PxServer defaults to _./pxserver.conf._  
-p ** _or_** \--port _tcpport_ |  TCP/IP port number on which the server is to listen. This overrides the port number specified in the _pxserver.conf_ file.  
  
**_Other Server Arguments_**

The following arguments can also be used with the PxServer executable at the Command line:

-h ** _or_** \--help |  Display a message listing the available Command line options with brief descriptions.  
---|---  
-v ** _or_** \--version |  Display the server version information.  
-s ** _or_** \--shutdown |  Standard PxServer shutdown. If there are clients connected, PxServer will wait until they disconnect and then shutdown. See **Shutting Down PxServer** below.  
\--immediate-shutdown |  Forced PxServer shutdown. If there are clients connected, they will be disconnected safely and then PxServer will be shutdown. See **Shutting Down PxServer** below.  
  
##  Shutting Down PxServer

A detailed explanation for shutting down PxServer on Windows and on UNIX is provided below.

**_Windows_**

To shutdown PxServer running as a Windows service on Windows, use one of the following:

Use the _Stop_ button in the Windows _Services_ dialog accessed through the _Control Panel_ (in the _Administrative Tools_ sub-folder).

**_OR_**

Use the _Stop_ button on the _Service_ tab in the PxServer Configuration application _(PxServerConfig)_. See **[Configuring PxServer](../Configuring%20PxServer/Overview.htm#service)**.

You can also shutdown a manually run interactive PxServer by clicking the _Shutdown_ button on the PxServer window.

If you need the server to shutdown quickly and there are active connections, click the _Force Immediate Shutdown_ check box and then click the _Shutdown_ button. PxServer will shutdown immediately.

_(PxServer capability to run as a Window service was added in PxPlus 2019.)_

**_UNIX_**

To shutdown PxServer on UNIX, run PxServer from the Command line using one of the shutdown arguments:

> _pxserver_ -s **_OR_**

> _pxserver_ \--shutdown **_OR_**

> _pxserver_ \--immediate-shutdown

The PxServer records the process ID (_pid_) of the server in the _pxserver.pid_ file to assist in shutting down the server. Provided that the server can locate the _pxserver.pid_ file, the running server will be shutdown properly; otherwise, an error message will be displayed on standard out.

Alternately, the server can be shutdown using a SIGHUP signal:

> kill -1 _pid_

**_Where:_**

|  _pid_ |  Process ID of the PxServer  _pxserver_.  
---|---|---  
  
## PxPlus Remote File I/O

The process of interfacing with a file on PxServer is very easy and is similar to doing so with the PxPlus RPC protocol. Attaching to a server is done using the **[PROCESS SERVER](../../directives/process_server.md)** directive:

> **PROCESS SERVER** "_server_ " ON "**[**_pxs_**]**_host_ ;_port_ "

**_Where:_**

|  _server_ |  Similar to the RPC dialog, the term "_server_ " is a logical name that will be associated with this server for the duration of the connection. Maximum length is 12 characters.  
---|---|---  
  
The address string following the ON keyword is composed of three components:

|  **[**_pxs_**]** |  The initial "**[**_pxs_**]** " is obligatory and never changes. Its presence identifies the server as an instance of PxServer.  
---|---|---  
|  _host_ |  The second section of the string identifies the machine on which the PxServer is running. If PxServer is running on the same machine as PxPlus, the name "localhost" can be substituted. This section will also accept an IPv4 address.  
|  _port_ |  The third section after the **;**  _(semi-colon)_ is the port number on which the PxServer is listening. The default port is 4193 (see **Note** below); however, this can be changed in the PxServer configuration.  
  
#### **Note:**  
This port number has been registered with the Internet Assigned Numbers Authority (IANA) for this application.

Therefore, if you are running PxServer on the same machine as PxPlus, this will initiate a connection:

> **PROCESS SERVER** "myserver" ON "**[**_pxs_**]** localhost;4193"

Additional options, which correspond to PxServer permissions (and are separated by **;**_semi-colons_), may be added to the end of the address string:

|  "SSL" |  Use secure sockets  
---|---|---  
|  "CAFILE=" |  Specify the path and file name of the certificate authority file  
|  "USERID=" |  User identification  
|  "COMPANY=" |  Company code  
  
**_Example:_**

The following example makes use of all of these options:

> **PROCESS SERVER** "myserver" ON "[pxs]localhost;4193;SSL;CAFILE=C:\certificate; USERID=me;COMPANY=mycompany"

As with RPC, the **[PROCESS SERVER](../../directives/process_server.md)** directive is also used to disconnect:

> **PROCESS SERVER** "_server_ " **CLOSE**

**_Where:_**

|  _server_ |  The name assigned earlier when connecting to PxServer  
---|---|---  
  
To **_open a file_** on PxServer, the **[OPEN](../../directives/open.md)** directive syntax is as follows:

> **OPEN**(1)"**[** PXS:server**]**_filename_ "

**_Where:_**

Within the sub-string surrounded by square brackets is the required "PXS:", followed by the server name assigned earlier with the **[PROCESS SERVER](../../directives/process_server.md)** directive. From this point onwards, PxPlus file I/O commands should behave exactly the same as regular file I/O. There are no verboten file I/O commands. All file creation directives can be executed using PxServer. Insert the "[PXS:server]" substring before the filename.

**_Example:_**

To create a keyed file named "myfile" on PxServer to which you are currently connected with a name of "myserver", use the following syntax:

> DIRECT "[PXS:myserver]myfile",10
