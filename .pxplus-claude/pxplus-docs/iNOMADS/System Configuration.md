# Setup and Installation

**System Configuration**|   
---|---  
  
You can establish settings for iNomads system parameters such as timeouts, default template and admin password using **Configuration Maintenance**.

To invoke **Configuration Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup_. From the **[iNomads Setup](iNomads%20Setup.md)** window, select the _Config_ button.  
From a Web browser |  Launch iNomads from a Web browser. From the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** window, invoke the **[iNomads Setup](iNomads%20Setup.md)** window by either clicking the _Admin_ button or selecting _admin_ from the _Transaction_ drop box. Select the _Config_ button.  
From the PxPlus Command prompt |  Invoke the **[iNomads Setup](iNomads%20Setup.md)** window by entering the following: **RUN "*plus/inomads/admin"**. Select the _Config_ button.  
  
The following window is displayed:

> The iNomads system parameters are presented in a series of eight tabs: **[General](System%20Configuration.htm#general)**, **[Processes](System%20Configuration.htm#processes)**, **[Timeouts](System%20Configuration.htm#timeouts)**, **[Templates](System%20Configuration.htm#templates)**, **[Security](System%20Configuration.htm#security)**, **[Compatibility](System%20Configuration.htm#compatibility)**, **[Pathnames](System%20Configuration.htm#pathnames)** and **[Misc](System%20Configuration.htm#misc)**. These parameters represent properties of the iNomads object and are listed in the tables below. These properties are set whenever the iNomads object is instantiated (%iNomads) but can also be set programmatically by referencing them directly.

**_Example:_**

> %iNomads'Default_Txid$="admin"

The tables below describe the options found on each of the eight tabs. In each table, the first column displays the actual property name, and the second column displays the corresponding system parameter with any additional information.

**General**  
---  
**Directory$** |  _Default starting directory for sessions. If not specified then the directory defined for the web server will be used._  
**Language$** |  _Default system language that will be used for any internal messages._ The language code will be appended to the file _*msglib_ in order to locate the proper language specific messages.  
**Default_Txid$** |  _Default transaction ID to use when launching without a TXID specification on the URL. Leave blank to force user to supply TXID._ 'Default' will run the iNomads Application Launchpad.  
**Txid_Lookup$** |  _Application sub-program that will be called to process the TXID and return the library and panel name to be processed._ Leave blank to have the system use the _tx.conf_ file.  
**Show_Tasks** |  _Don't_ _run spawned tasks in background when launching directly on server (Windows only)._ By default, spawned tasks will be in the background and thus unable to be directly debugged. Select this option and the debug option below when developing on Windows.  
**Show_Debug** |  _Enable debugging/tracing by issuing a 'SHOW' of the background window when launching a window._  
**Override_File$** |  _Pathname to file which defines the control overrides to be applied._ This file allows you to externally hide, disable or otherwise edit specific controls (by name) throughout the system.  
  
**Processes**  
---  
**Launch_Ip$** |  _Remote process launching IP address or server name._ If specified, instead of spawning the task from the HTTP server, the request is sent to this server.  
**Launch_Port$** |  _Remote process launch port address. If not specified port 4093 is used._ If you want the system to **_only use_** the launch port for access, enable the **[Single_Port](System%20Configuration.htm#singleport)** option.  
**Single_Port** |  **_(Available Only with Apache and EZWeb Server.__Not Available with IIS.)_** _Only use the Remote process launch port (ignores Min/Max below)._ Enable this option if you want the system to **_only use_** the launch port (see **[Launch_Port$](System%20Configuration.htm#launchport)** option) for access. When enabled, the system will ignore the Minimum/Maximum launcher ports (see **[Launch_Min_Port](System%20Configuration.htm#minport)** and **[Launch_Max_Port](System%20Configuration.htm#maxport)** options). _(This option was added in PxPlus 2018.)_  
**Launch_Pswd$** |  _Remote process launch password. Used to assist in securing the launch port process._  
**Launch_Root$** |  _Pathname to the Web root directory as seen from the remote process server._ This can contain either the pathname to a shared directory on the Web facing server or a base URL to the Web server (e.g. http://yourserver.ca, https://192.168.0.123). See **[Running iNomads Application on a Separate Server](Running%20iNOMADS%20Application%20on%20Separate%20Server.md)**.  
**Crypto_Seed$** |  _Cryptographic seed value used to access Web root directory if not shared._ This value should be set to some random string to help assure security on access to iNomads directory on the Web server. Only used if **Launch_Root$** is a URL. This option is used when two servers are involved with iNomads - one is an Internet-facing Web server (usually running IIS or Apache), and the other, not accessible via the Internet, actually runs the application. The _seed value_ is used to encrypt any control messages sent between the application server and the front-end server. _(This option was added in PxPlus 2020.)_  
**Launch_Min_Port** |  _Minimum port to use for Launcher.__(Both Min/Max must be provided.)_ This is the minimum port number that the Launcher will use to connect to the application server.  
**Launch_Max_Port** |  _Maximum port to use for Launcher.__(Both Min/Max must be provided.)_ This is the maximum port number that the Launcher will use to connect to the application server.  
  
**Timeouts**  
---  
**Poll_Time** |  _Poll time in minutes for each browser session to send message to host confirming activity._ Browser will send a dummy message to the server periodically based on this value.  
**Timeout** |  _Idle time timeout in minutes after which the session will be automatically terminated if no activity (other than polls)._ Maximum is 1440 minutes (1 day). Zero indicates no Idle time timeout.  
**Warn_time** |  _Disconnect warning time in seconds. The number of seconds warning the user will be given before an inactivity disconnect._ Maximum of 300 (5 min). If zero, no warning will be issued.  
**Reconnect_Time** |  _Reconnect time in minutes. How long a task will be kept alive after polls stop being received._ Maximum is 1440 minutes (1 day). Zero indicates drop task immediately after missed poll.  
**Tcp_Timeout** |  _Internal network timeout in seconds for messages sent from server to application._ Default is 300 (5 min). Maximum is 36000 (ten hours). If zero, no timeout will be set.  
  
**Templates**  
---  
**Std_Template$** |  _System template to be used on panels that don't specify a specific template._ Template names are case insensitive and will refer to sub-directories within the ***plus/inomads/templates** directory.  
**Cache_Template$** |  _Enable caching of templates. For debugging purposes it is desirable not to have the system cache the 'xxx.tpl' files._ This should be enabled in a production system to improve performance.  
  
**Security**  
---  
**Admin_Pswd$** |  _Password to administration functions within the system._  
**Get_File_Popup$** |  _Do you want the GET_FILE_BOX to have popup menus enabled that allow for file creation, deletion or renaming?_ For security on an open system, the suggestion is to set this to **_No_**.  
**Get_Dir_Tbl$** |  _List of directories that GET_FILE_BOX will allow access to._ Each entry in this list should be separated by a comma or semi-colon. If empty, then GET_FILE_BOX is unrestricted **_(not recommended on an open system)_**.  
**No_Dumps** |  _Disable to creation of DUMPs when an error occurs._  
**Forcelogon** |  _Force Signon for all transactions regardless of TXID settings._ If set, users are prompted to sign on based on a security file in the default directory; otherwise, security will only be requested for transactions that request it.  
**Inid_Lock** |  _Lock session to specific browser once started._ If set, the session cannot be switched to another browser for debug or recover purposes.  
**Failed_Logon_Tries** |  _Number of failed logon attempts before locking out browser._ Enter the number of failed logon attempts allowed before the browser will be locked out. The lockout is done based on the browser INID. (**_Default:_** 5) _(This option was added in PxPlus 2020.)_  
**Failed_Logon_Delay** |  _How long (minutes) to lockout browser after failed logon._ Enter the number of minutes to lock out the user after a failed logon attempt. (**_Default:_** 10) _(This option was added in PxPlus 2020.)_  
**Failed_Logon_Log** |  _Log file to record invalid signon attempts._ Pathname of a log file to record invalid logon attempts. If left empty/blank, invalid logon attempts will **_not_** be logged. _(This option was added in PxPlus 2020.)_  
  
**Compatibility**  
---  
**Wdx_Err_Ignore$** |  _WindX error suppression enabled?_ When running using WindX, often errors are ignored under turbo mode. Setting this option will allow iNomads to ignore many errors.  
**Wdx_Call_Prog$** |  _Program to call whenever the system detects a "[WDX]" or "[LCL]" prefix on a CALL directive._ If left blank, the CALL will be logged and simply return.  
**Web_Url_Map$** |  _"Shell.explorer" mappings.__Comma separated entries defining replacement text for URLs passed to the shell explorer emulation._ Each entry should be formatted as: **old_string_text=new_string_text,**  
**Tbl_Emul** |  _Emulate the creation of standard NOMADS Name, Class, and Type tables._  
**Fldr_Autoclose** |  _Enable "Auto-Close" option on folders. (Not available in NOMADS)._  
  
**Pathnames**  
---  
**Pxplus_Exec$** |  _Pathname to PxPlus executable._ This pathname is needed when running **[IIS ASP.NET](IIS%20ASP_NET%20Setup.md)** or the **[Apache](Apache%20Overview.md)** LoadModule.  
**Pxplus_Lib$** |  _System library directory._ This pathname is needed when running **[IIS ASP.NET](IIS%20ASP_NET%20Setup.md)** or the **[Apache](Apache%20Overview.md)** LoadModule. If omitted, the same directory as PXPLUS_EXEC will be used.  
**Syshtml_Dir$** |  _Relative URL location of system HTML files. If blank, then /syshtml will be used._ You can override where the system gets the internal HTML files from in order to change the formatting/text. The value must point to the relative URL directory containing the files.  
**Image_Map_File$** |  _Pathname to file used to map program supplied image paths to URLs._ You can provide a keyed file to be checked whenever an image is requested. If a record exists with the key for the requested image, the record contents will be used as URL.  
  
**Misc**  
---  
**Calendar_2Dig_Yr** |  _Two-digit year conversion range.__If zero, force current century else max years in future that a two-digit year will allow before using date in the past._ The default is 20, meaning if a 2-digit year is provided that exceeds 20 years into the future, the year will be considered in the past.  
**Allow_User_Input$** |  _URL tag that must be present in order to enable any command/console input._ If this is non-blank, its value must be present on the launching URL in order to allow the application to break out to console mode or request user input. Setting helps avoid hung sessions waiting for user input.  
**Character_Set$** |  _Character set to use on Web pages._  
**Character_Set_Int$** |  _Character set to use internally in application._  
**F4_Close** |  _Enable F4 to close panels._
