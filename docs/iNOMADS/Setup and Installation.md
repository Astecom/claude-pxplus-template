# iNomads

**Setup and Installation**|   
---|---  
  
##  Supported Web Servers

iNomads requires the use of a Web server to process end user requests and to send HTML documents. Any of the following Web servers can be used:

> **[PxPlus EZWeb Server](../EZWebServer/EZweb%20Introduction.md)  
> **  
> **[Apache HTTP Server](Apache%202.4%20HTTP%20Server%20Setup.md)  
> **  
> **[IIS ASP.NET Setup](IIS%20ASP_NET%20Setup.md)**

See **[Frequently Asked Questions](Frequently%20Asked%20Questions.md)** for answers to some commonly asked questions about iNomads.

#### **Note:**  
For the purposes of this documentation, the assumption is that PxPlus has been properly installed onto your computer system.

## License Requirements

iNomads requires a supported PxPlus Web license. The user count on the license will control the number of concurrent sessions that can be run.

If using the PxPlus Web Server, you will need a Web license. No additional license is needed if using the Apache Web Server.

**_Demo License_**

For the purposes of demonstration and initial testing, the single user Demo license can be used.

##  Configuring PxPlus Pathnames

PxPlus pathnames are defined using **[Configuration Maintenance](System%20Configuration.md)**, which is accessed from the **[iNomads Setup](iNomads%20Setup.md)** window.

To invoke the **iNomads Setup** window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup._  
From the PxPlus Command prompt |  Enter the following command: **RUN "*plus/inomads/admin"**  
  
The steps for defining PxPlus pathnames are:

|  1. |  From the **iNomads Setup** window, select the _Config_ button to invoke **[Configuration Maintenance](System%20Configuration.md)**.  
---|---|---  
|  2. |  Select the **_Pathnames_** tab. For the _Pathname to PxPlus executable_ and _System library directory_ fields, enter the full pathname as shown below:  
|  3. |  Click _OK_ to apply the changes and close Configuration Maintenance. The _inomads.conf_ file will be configured to run your test.  
  
#### **Note:**  
If you are using EZWeb Server, setting the pathname is not necessary.

## Testing the Configuration

Once you have the Web Server configured and running, you can test the setup using a browser.

**_Authorization Message_**

If the system is **_not_** iNomads enabled, a message box will be displayed.

> This message is displayed once every hour as a new session is launched. Click the _OK_ button and resubmit your request, which will take you to the normal Demo **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)**.

This message will not be displayed on a fully activated iNomads license.

**_iNomads_** ** _Application Launchpad_**

You can select any of the pre-configured transactions from the system, or enter the _Panel_ name, _Library_ and working _Directory_ of the NOMADS panel you want to run. See **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)**.

##  Launch Port

By default, when running iNomads programs, the Web server process itself launches the applications. This means that the application will need to be able to run on the same machine under the same user ID and same authorization levels associated with the Web server.

If desired, the PxPlus Simple Client Server can be used in conjunction with iNomads to launch the application processes. You can set the **[Launch_Port](Object%20Properties%20and%20Methods.htm#launchport)** variable within the iNomads configuration to contain the IP address (name or direct address in the form _xxx.xxx.xxx.xxx_), followed by a **;**  _(semi-colon)_ and the port address used by the Simple Client Server host (default 4093). When a process is launched, the request will be forwarded to the Client Server host, which can be on a different server and/or running a different user with different authentication rights.

See **[Running iNomads Application on a Separate Server](Running%20iNOMADS%20Application%20on%20Separate%20Server.md)**.

When using IIS or Apache with iNomads, the pathnames must also be defined. See **[Configuring PxPlus Pathnames](Setup%20and%20Installation.htm#pathnames)** above.

If you want the system to **_only use_** the Remote process Launch_Port for access, set the **[Single_Port](Object%20Properties%20and%20Methods.htm#singleport)** variable (available **_only_** with Apache and EZWeb Server, **_not_** with IIS).

_(The Single_Port variable was added in PxPlus 2018.)_

## Popup Blockers

One problem you may encounter in running iNomads is popup blockers. By default, iNomads launches new windows as popups, which are often blocked either internally by the browser or by a toolbar plug in such as the Google or Yahoo toolbar.

If iNomads is denied a request to create a new window, it will display an alert message box and wait for you to disable the blocker. Depending on the blocker, when you disable the blocking, the transaction may proceed as usual or get re-initialized.

For information on setting up your own transactions and system defaults, see **[Running Your Application](Running%20Your%20Application.md)**.

##  Character Sets

iNomads supports mixed character sets between the server process and the Web pages with on-the-fly character set translation. On the _Misc_ tab of **[Configuration Maintenance](System%20Configuration.md)**, the following two _Character set_ options are available: _Character set to use on Web pages_ and _Character set to use internally in application_.

These can be set to any combination of UTF-8 or ISO-8859-1 (Windows standard). Changing the _Character set to use on Web pages_ option requires that you restart the Web server being used.

#### **Note:**  
If the _internal_ character set is set to UTF-8, then the system parameter **['U8'](../parameters/u8.md)** is enabled. In addition, if the system parameter 'U8' is set during the iNomads start_up, then the internal character set will be set to UTF-8 regardless of what the configuration states.

##  System HTML Messages

iNomads stores system error messages as internal HTML files in the _syshtml_ directory (_*plus/inomads_). By specifying "blank" as the On Exit URL, the system will display the contents in _sys_blank.htm_. If "close" is specified as the On Exit URL, the system will display the contents in _sys_close.htm_. Both of these HTML files are in the _syshtml_ directory.

You can also customize the system-loaded error message displayed in iNomads. This is done first by tailoring the contents in _*plus/inomads/syshtml/sys_loaded.htm_ as desired and then setting the On Exit URL to "loaded" to have the system display the custom message.

_(Support for customizing the system-loaded message was added in PxPlus 2020.)_
