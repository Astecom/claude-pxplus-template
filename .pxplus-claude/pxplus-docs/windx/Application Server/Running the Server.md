# Application Server

**Running the Server**|   
---|---  
  
The operation side of the Application Server is handled by the **_server daemon_** , a platform-independent PxPlus program called ***appserv/server**. This program is designed to run as a background task and is responsible for:

  * Listening for client/server connections
  * Responding to requests
  * Launching new sessions
  * Moving traffic between the client- and server-side processes



The Start-In directory for the server daemon is an important consideration. When the daemon launches new processes (applications), it will start them in the same directory in which the server daemon was started. This occurs unless either the application requested had a designated Start-In directory, or the client requested a specific Start-In directory.

Associated files should be given a path that is relative to the Start-In directory of the server daemon.

## Command Line Syntax

The server daemon Command line syntax is described as follows:

|  In **_Windows_** : |  _PVXpath_ _$_ **[**_state_**]** **[**_ini_**]** ***appserv\server** **ARG**  _ServerName_  
---|---|---  
|  In **_UNIX/Linux_** : |  _PVXpath_ _$_ **\\*appserv/server ARG**  _ServerName_  
  
**_Where:_**

|  _PVXpath_ |  Path to PxPlus.  
---|---|---  
|  _state_ |  Option setting for governing the initial WindX window: **_null_** \- Normal window  
** _-mn_** \- To start minimized  
** _hd_** \- To start hidden  
|  _ini_ |  Optional user-defined INI file (or _..__\Lib\\_appserv\apssrv.ini_). Do **_not_** use a ***** in the INI path, as PxPlus does not resolve them as it does program names. **_(Windows Only)_**  
|  _ServerName_ |  Name of a server defined in the configuration. Case insensitive. May be quoted.  
  
## Starting the Server Daemon - Examples

The following are examples of a Start command for an Application Server daemon:

**_Under Windows_**

If the _Start-In Directory_ is C:\PxPlus:

C:\pxplus\pxplus.exe -mn "C:\pxplus\Lib\\_appserv\appsrv.ini"  
*appserv\server -ARG "MainServer"

**_Under UNIX/Linux_**

**_Method 1:_** From a Shell script

> #!/bin/sh  
>  TERM=ansi; export TERM  
>  cd /usr/pvx  
>  /usr/pvx/pvx \\*appserv/server -ARG MainServer </dev/null >/dev/null 2>&1

**_Method 2:_** Directly from _/etc/inittab_. This uses "/ "as its starting directory.

> pvd1:2345:respawn:/usr/pvx/pvx \\*appserv/server -ARG MainServer  
>  </dev/null >/dev/null 2>&1

**_Method 3:_** From the _/etc/rc_ set of directories **_(Linux Method)_**

Create a file in _/etc/init.d_. The simplest method is to copy an existing script from that directory and modify it to start the above command line. The script should contain the **START( )** and **STOP( )** functions required. Use symbolic links in the _/etc/rc?.d_ directories to link to your script.

## Stopping the Server Daemon

**_Under Windows_**

Right click on the PxPlus Application Server icon for the server daemon in the Windows Taskbar, then select _Close_ or _Interrupt_.

**_Under UNIX/Linux_**

Send a SIGBREAK to the server daemon process.

**_Example:_**

> Kill -2 _pid_

**_Where:_**

_pid_ is the process ID of the server daemon.
