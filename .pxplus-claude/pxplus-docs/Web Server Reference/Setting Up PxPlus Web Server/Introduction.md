# Web Server Reference

**Setting Up PxPlus Web Server** |  **__**  
---|---  
  
## Environment

The PxPlus Web Server can be installed on either Windows or UNIX/Linux/AIX systems.

## Installing as a Service on Windows

The PxPlus Web Server can be installed as a Windows Service using one of the following methods:

**_Method 1:_** From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)**

Expand the _Installation and Setup_ category and select _Install Windows Services_ to launch the **[Install Windows Services](../../Install%20Windows%20Services.md)** interface. From the _Type of Service_ drop box, select _PxPlus Web Server_. After entering the service settings in the grid, select the _Install_ button.

**_Method 2:_** By entering **"*plus/web/service"**

This utility can be run to install/uninstall the Web Server. See **[Setting Up Web Server as a Windows Service](../../appendix/webserver_service.md)**.

## Running the Web Server on UNIX/Linux/AIX

In UNIX, Linux or AIX, the standard PxPlus installation comes complete with three shell scripts:

|  **runconfig** |  Runs the Web Server Configuration  
---|---|---  
|  **runserver** |  Starts the Web Server in the background  
|  **stopserver** |  Stops the Web Server  
  
Use these scripts to start, stop and configure your Web Server, or if using WindX to connect to the server, use the **[PxPlus IDE](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** to access them.

##  Running the Web Server on Windows

For Windows installations, you will need the following two shortcuts:

**_Shortcut 1:_**  
---  
Name: |  PxPlus Web Server  
Command Line: |  _Your path\PxPlus VX.X\pxplus.exe webhide.ini *web\webserv -arg server_name_  
Start In: |  _Your path\PxPlus VX.X\lib\\_web_  
Run: |  Minimized  
Description: |  This application is the basic PxPlus Web Server launcher or engine. It is responsible for reading the configuration and launching the individual port monitors.  
  
**_Shortcut 2:_**  
---  
Name: |  PxPlus Web Server Configuration  
Command Line: |  _Your path\PxPlus VX.X\pxplus.exe webcfg.ini *web\webcfg_  
Start In: |  _Your path\PxPlus VX.X\lib\\_web_  
Run: |  Minimized  
Description: |  This application allows you to create or change port monitors and their configurations dynamically.  
  
If you used the standard PxPlus installer, these shortcuts will already have been created in the Windows START menu. You can copy from there to the desktop as desired.

In addition, the Web Server and its configuration utility can be run from the **[PxPlus IDE](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)**.
