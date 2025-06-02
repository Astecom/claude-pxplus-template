# PxServer 

**Configuring PxServer** |  **__**  
---|---  
  
## Windows

The server is configured in Windows via the **PxServer Configuration** application, **_PxServerConfig.exe_** , which can be accessed directly from the **[IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** (expand the _Data Management_ category and select _Configure PxServer_) or from the _Start_ menu entry. You can also double click the executable file name from within the PxPlus installation folder.

PxServer configuration allows you to set the server network settings, file I/O permissions and debug logging.

> This window is divided into the following tabbed panels for viewing and/or changing the configuration settings: **[Server](Overview.htm#server)**, **[Permissions](Overview.htm#permissions)**, **[Service](Overview.htm#service)**, **[Debug](Overview.htm#debug)** and **[About](Overview.htm#about)**.

**Server** |  _Server configuration settings_  
---|---  
|  |  _Port_ |  TCP/IP port number on which the PxServer will listen. Default port is 4193, which is registered with IANA to PVX Plus Technologies.  
---|---  
_Keepalive Interval_ |  Number of seconds between individual keepalive messages to maintain an active TCP/IP connection. The timeout of the TCP/IP connection is always double this value. Setting this value should be a balance between PxServer being responsive to losing a connection (timeout) and not tying up too many resources by sending keepalive messages. Default value is 60 seconds, making the default _Timeout_ value 120 seconds.  
_Reconnect Timeout_ |  Number of seconds that a session will persist (to allow for reconnections) before being deleted. Default is 120 seconds. Setting this value should balance the needs of users needing to reconnect and how much memory PxServer should use. The higher this value, the more memory is tied up by keep sessions around for possible reconnects.  
_Enable SSL Secure Communication_ |  Check box to toggle between unencrypted TCP/IP communication and SSL encrypted TCP/IP communication. Default is unencrypted TCP/IP communication.  
_SSL Certificate_ |  **_(Available when Enable SSL Secure Communication check box is selected)_** Specify the path and file name of the server's SSL certificate file. By default, this is blank. Click the Browse button beside the input field to select an SSL certificate file (should be in PEM format) using the Windows **Open File** dialog.  
_Prefix_ |  A comma-separated list of search paths (without quotes) that the server should use when a relative pathname is used. By default, this is blank. Using **=** (_equals sign_) for matching and ***** (_asterisks_) for wildcards is also supported, similar to prefixes in PxPlus. See **[PREFIX Directive](../../directives/prefix.md)** and **[Prefix Processing](../../PxPlus%20User%20Guide/File%20Handling/Prefix%20Processing/Overview.md)**.  
_Enable Exclusive File Use_ |  Check box to turn on or turn off exclusive file use. Default is **_Off_**. Turning _On_ exclusive file use results in better performance but does not allow any processes other than PxServer to access any files that the PxServer has open. Turning _Off_ exclusive file use allows other processes to access files that PxServer has open but sacrifices a little performance. _(The Enable Exclusive File Use option was added in PxPlus 2019.)_  
**Permissions** |  _Settings to add, edit or remove access permissions_  
|  The server starts with default access permissions. These permissions can be viewed/changed: |  **Setting** |  **Default** |  **Definition**  
---|---|---  
_Access_ |  A |  Access allowed  
_R/W_ |  R |  Read only  
_User ID_ |  * |  Any users  
_Company Code_ |  * |  Any company  
_Data Dictionary Path_ |  * |  Any data dictionaries  
_INI File Path_ |  * |  Any INI files  
  
The above default settings grant users almost unrestricted read access to the server's data sources (***** is a wildcard and will match any input). Therefore, for security reasons, you should reset the parameters based on your own business rules before the PxServer is used.

PxServer checks access permissions by searching the permission rules from the maximum restriction to the lowest one. It is a method to grant access to specific directories on the server based on a client's User ID and Company Code.

If the check for a specific User ID and Company Code fails, then the User ID is substituted with an ***** (wildcard) and the combination for User ID = ***** with Company Code = specific is checked against the corresponding rule if it is present on the system. The next check is performed for User ID = specific, Company Code = ***** , and the last check is for User ID = ***** , Company Code = *****.

Refer to the table below:

**Sequence** |  **User ID** |  **Company Code**|   
---|---|---|---  
1. |  Specific |  Specific |  Highest Restriction  
2. |  * |  Specific|   
3. |  Specific |  *|   
4. |  * |  * |  Lowest Restriction  
  
**_Example:_**

In the previous example above, user John from ABC Company is granted access to the data files in the C:\workspace\data and/or C:\users\john\abc directories. According to this example, the server administrator has temporarily denied John access; however, John would still have read-only access to directories, as all users of all companies may access any directory.  
  
**Service** |  _Settings to install and control the PxServer as a service_  
|  The PxServer Windows service can be installed/uninstalled and controlled (_Start_ , _Stop_ and _Restart_). If the PxServer service is installed, the current status of the service will be displayed. If any action is taken, the result of that action will be displayed. You can also install/uninstall and control Windows services using the Windows _Services_ interface accessed through the _Control Panel_ (in the _Administrative Tools_ sub-folder).

#### **Important Note:**  
If any PxServer settings are changed, you will need to restart the service for the changes to take effect.

_(PxServer capability to run as a Window service was added in PxPlus 2019.)_  
**Debug** |  _Debug mode settings_  
|  |  _Enable Debug_ |  Check box to enable Debug mode and turn on logging.  
---|---  
_Log File_ |  Specify the path name of the log file to which to write log messages. Default is _pxserver.log_.  
**About** |  _PxServer information_  
|  Includes information about the PxServer version, as well as PVX Plus Technologies links.  
  
## UNIX

In UNIX, the server is configured by editing the plain text Configuration file, **_pxserver.conf_**. The **_pxserver.conf_** file can be found in the PxPlus installation directory.

The Configuration file consists of "settings" entries with the format:

> setting=_value_

Comments are also allowed in the Configuration file and are indicated by any line that starts with the **#**_(number sign)._ The default Configuration file provides several descriptive comments to make it easy to modify.

The default **_pxserver.conf_** is as follows:

> #Server Configuration  
>  # Port number (Default is 4193)  
>  # Keepalive message interval in seconds (Default is 60)  
>  # Reconnect wait period in seconds (Default is 120)  
>  port=4193  
> keepalive interval=60  
>  reconnect timeout=120  
>   
>  #SSL Configuration  
>  # SSL Certificate path  
>  # To enable SSL specify a certificate file  
>  #ssl=/myapp/sslcert.pem  
>   
>  #Permissions Configuration  
>  # List of permission entries, a permission entry is of the form 'permission=User_ID,Company_Code,Access_Flag,Read_Write_Flag,Directories_&_Files'  
>  # User_ID - string representing a user ID, or '*' so this permission matches all user IDs  
>  # Company_Code - String representing a company code, or '*' so this permission matches all company codes  
>  # Access_Flag - 'A' for access is Allowed, or 'D' for access is Denied  
>  # Read_Write_Flag - 'R' for Read only access, or 'RW' for Read & Write access  
>  # Directories_&_Files - String that contains a comma separated list of directories & files that this permission allows access to, or '*' so this permission matches all directories & files  
>  permission=*,*,A,R,*  
>   
>  #Prefix Configuration  
>  # Prefix paths   
>  # This is a comma separated list of prefixes.  
>  #prefix=/myapp/data/,/myapp/data/==/  
>   
>  #Debug Configuration  
>  # Log File Path (Default is blank for no logging)  
>  log file path=  
>   
>  #File Exclusivity Configuration  
>  # By turning this flag on PxServer will use exclusive file locks for improved performance  
>  exclusive=0
