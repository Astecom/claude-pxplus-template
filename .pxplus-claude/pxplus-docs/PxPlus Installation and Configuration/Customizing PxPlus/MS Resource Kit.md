# Windows Services

**Microsoft Windows Resource Kit Utilities** |  **_Historical Reference_**  
---|---  
  
#### **Important Note:**  
**_This page is for historical reference only._** For information on adding and installing Windows services, see [ **Install Windows Services**](../../Install%20Windows%20Services.md).

PxPlus can be installed as a **_Windows Service_** , which is a special process designed to start and run automatically under Windows directly from start-up; e.g. a networking or remote access procedure. The three primary methods for setting up service entry points to PxPlus (pxplus.exe) are outlined below.

The Windows _Resource Kit_ includes two utilities for creating a service: **instsrv.exe** , which installs/removes system services from Windows, and **srvany.exe** , which allows an application to run as a service. The following steps describe how to use these utilities:

**1.** |  Install **instsrv.exe** and **srvany.exe** in a directory; e.g. create _d:\tools\_ and copy the files to this location.  
---|---  
**2.** |  Create the service using the command line:  
  
instsrv  _ServiceName_ _path_ \srvany.exe   
  
**_Where:_** _ServiceName_ is the name that will appear in the Services control panel.   
_path_ is the full path to the **srvany.exe** executable.  
**_  
Example:  
_  
** D:\tools\instsrv MyApp d:\tools\srvany.exe  
**3.** |  From your desktop, select _Start_ > _Parameters_ > _Control Panel_ > _Services_. Select the service name created in Step 2, and then select the _Start-Up_ button.  
**4.** |  Set up the service as _Auto-Start_ , and select a _user account_ and password, or a LocalSystem account.   
  
If a user account is selected, then the ***NTHOST** program and any spawn tasks will be hidden from the desktop.  
  
If the LocalSystem account is selected, then _Allow Service to Interact with Desktop_ can be enabled. With this option enabled, the ***NTHOST** program and any spawned tasks will be visible on the desktop.

#### **Note:**  
LocalSystem account does not have network access by default.  
  
#### **Important Note:**  
The remaining steps involve editing the registry. Before you change the registry, make sure you understand how to restore it if a problem occurs. For information on how to do this, view the _Restoring the Registry_ Help topic in **Regedit.exe** or the _Restoring a Registry Key_ Help topic in **Regedt32.exe**.

**5.** |  From your desktop, select _Start_ > _Run_ > _regedt32_. Under HKEY_LOCAL_MACHINE\SYSTEM\Current\ControlSet\Services\_ServiceName_ , create a key named 'Parameters'. Under this key, create the following values: |  Name: |  Application  
---|---  
Type: |  REG_SZ  
String: |  PxPlus_Installation_Path\Pxplus.exe  
Name: |  AppParameters  
Type: |  REG_SZ  
String: |  *NTHOST parameters  
Name: |  AppDirectory  
Type: |  REG_SZ  
String: |  PxPlus_Installation_Path\lib  
  
Due to a restriction enforced by Windows NT on services, an application can either be interactive (have a console, read keyboard input, etc.) or have network access - _not both at the same time_.  
  
**6.** |  To allow LocalSystem services on any machine in the domain to access a specific share on a server, use the Registry Editor to add the name of that share to:  
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters\NullSessionShare  
  
To allow access to named pipes, add an entry to:  
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters\NullSessionPipes  
  
To allow **_all_** shares and pipes on the server to be accessed by LocalSystem services, add a value:   
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters\RestrictNullSessAccess  
  
Type: REG_DWORD   
Value: 0   
  
The above entry effectively allows everyone in the domain to access that server.  
**7.** |  Quit regedt32.exe and reboot the server.  
  
The service should start automatically and begin to listen on the socket specified in the AppParameters key, or 10000 if no socket was specified.  
  
#### **Note:**  
The parameters associated with NTHOST should be tested using a shortcut to ensure they are correct prior to creating the service.

## PxPlus Command Line Options

PxPlus supports command line options for installation as a true Windows Service. Currently, only _Start_ and _Stop_ functions are supported - _Pause_ and _Continue_ functions may be added in a future release. 

**Install Service**

> path\pvx\pxplus.exe -i [pxplus.ini] _ServiceName ServiceDisplayName StartType StartInDirectory CommandLine_[ _ServiceDescription_ ][ _Account_ ][ _Password_ ]

**_Where:_**

_ServiceName_ |  Name that will appear in the Services control panel.  
---|---  
_ServiceDisplayName_ |  Name that appears in the Services control panel.  
_StartType_ |  Service start-up option, value between 1 and 3:  
  
1 - Auto start service  
2 - Manually start service   
3 - Service is disabled  
_StartInDirectory_ |  Directory used as the start-up directory for the service.  
_CommandLine_ |  Command-line arguments with which to start PxPlus.  
_ServiceDescription_ |  Description that appears in the Services control panel.  
_Account_ |  Domain and account to run the service as. If the account is set to "interactive" (case insensitive), then the service will be setup to use the LocalSystem account and interact with the desktop.  
_Password_ |  Password for the above account.  
  
**Start Service**

> path\pvx\pxplus.exe -s [pxplus.ini] _ServiceName_

**_Where:_**

_ServiceName_ is the name that will appear in the _Services_ control panel.

**Uninstall Service**

> path\pvx\pxplus.exe -u [pxplus.ini] _ServiceName_

**_Where:_**

_ServiceName_ is the name that will appear in the _Services_ control panel.

The **-s** option will not start the service unless it is executed by the Service Manager. It will appear as the command line argument in the _Service Properties_ panel. If the pxplus.ini file used by the executable contains a LogFile= entry, then any errors that occur during the install, uninstall, or start of the service will be logged.

If a Windows function fails, then the last error code will be logged. These can be found in MSDN under "System Error Codes" (index entry "error codes [Win32]"). Any parameter containing spaces requires a delimiter character of either **"**_(__quote)_ or **'**_(apostrophe)_. Leading/trailing apostrophes are always stripped. Leading/trailing quotes are stripped from _StartType_ , _ServiceDisplayName_ , _ServiceDescription_ , _Account_ and _Password_.

TCB(170) returns the service handle. The value will be zero if the program is not running as a service. This only applies to a PxPlus executable installed and started using the **-i** and **-s** options above.

**_Example:_**

>pxplus.exe -i "PvxWeb" "PxPlus WebConfig" 1 "C:\PVX Plus Technologies\PxPlus _version_number_ " "*web\webcfg" "My PxPlus Web Configuration Screen" "interactive"   
>pxplus.exe -u "PvxWeb" 

> ## PxPlus Object *obj\ntservice

The PxPlus object ***obj\ntservice** can be used to manipulate Windows Services. The following methods are currently available:

**** |  **CreatePxPlusService( )** |  **DeletePxPlusService( )** |  **StartService( )**  
---|---|---|---  
**** |  **StopService( )** |  **ServiceState( )** |  **OpenService( )**  
**** |  **CloseService( )** |  |   
  
**_Example:_**

00010 let a=new("*obj/ntservice")   
00020 let servicename$="pvxapp"   
00030 let displayname$="PxPlus appcfg"   
00040 let description$="PxPlus application server config"   
00050 let commandline$="-bkg *appserv\config"   
00060 let startindirectory$="C:\PVX Plus Technologies\PxPlus _version_number_ "   
00070 let starttype=1   
00080 let useraccount$=""   
00090 let userpassword$=""   
00100 let interactwithdesktop=1   
00110 print a'createpxplusservice(servicename$,displayname$, description$,commandline$,startindirectory$,starttype,useraccount$,userpassword$,interactwithdesktop)   
00120 let sh=a'openservice(servicename$)   
00130 print a'servicestate(sh)   
00140 print a'startservice(sh)   
00150 print a'servicestate(sh)   
00155 escape   
00160 print a'stopservice(sh)   
00170 print a'deletepxplusservice(servicename$)   
00180 end 
