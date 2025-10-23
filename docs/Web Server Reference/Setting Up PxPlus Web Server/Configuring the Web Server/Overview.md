# Web Server Reference

**Configuring the Web Server** |  **__**  
---|---  
  
## Web Server Configuration Icon

For a Web Server installed in a Windows environment, select the Configuration icon to view the Status/Configuration list. This displays the status of your base launcher (e.g. Stopped/Running) and any port monitors you have set up.

For a Web Server installed in a UNIX environment, you must use WindX (installed on your PC) to configure the Web Server. That is, you must gain access to the UNIX box through WindX, then change to the PxPlus directory and run the **runconfig** script.

#### **Note:**  
The Web Server Configuration application is a PxPlus NOMADS application which runs only in Windows. Some features are restricted to Windows. For instance, Debug mode is only for Windows (not accessible in UNIX through WindX).

You can create and/or modify your individual port monitor's configuration by clicking on the following buttons in the **Status/Configuration** window:

**Button** |  **Purpose**  
---|---  
_Edit_ |  Jumps to the **Details Configuration** dialogue, where you can set up:

  * Server Basics (i.e. port monitor basics)
  * Port Style
  * Task Handlers

In addition, buttons in **Details Configuration** allow you to jump to dialogues for:

  * Virtual directories
  * Hit counter lists
  * SMTP values (i.e. simple mail protocols and settings)
  * PxPlus Web and Debug Mode
  * Statistics

See **[Editing Configuration Details](../Editing%20Configuration%20Details/Overview.md)**.  
_Mime_ |  Jumps to the **Mime Configuration** dialogue (a listing of available mime types for file extensions such as **jpeg** , **zip** , **dll** , **bin**). You can add, edit or remove mime types. See **[Mime Configuration](../Mime%20Configuration/Overview.md)**.  
_Logging_ |  Jumps to the **Log Configuration** dialogue.  
_Templates_ |  _(Templates will be available in a future version.)_  
_Admin_ |  Jumps to the **Administrator Configuration** listing of time zones. Make sure you select the _Local Time Zone_ that is appropriate for your application.

#### **Important Note:   
**All Web documents use GMT (Greenwich Mean Time). The PxPlus Web Server converts times automatically for you (offsetting your selected local time zone from GMT). The wrong setting here can have adverse effects on your results (e.g. when you send or receive data, cookies, etc. that rely on date/time information such as expiry times).

You can toggle check boxes on this screen to **_On_** to hide the Web Server and your port monitors (so that they do not appear on your task bar) and to tell PxPlus to shut down all port monitors when the Base Launcher is **Stopped**.  
  
## Status Control

The Web Server refreshes the **Status/Configuration** list every 5 seconds, returning the current status of your base launcher and your configured port monitors. The base launcher is suspended from overseeing the port monitors while the Configuration application is running. (The Configuration application takes responsibility for dynamic changes to the various port monitors.)

You can use the _Start/Stop_ toggle button at any time for any port monitor or the base launcher.

#### **Note:**  
You do not have to shut down or restart a port monitor when you change its configuration. The Web Server will dynamically update itself.

## About Web Server

The **Status/Configuration** menu bar offers you many of the above selections. A _Help > About_ option jumps to the **About Web Server** screen, which displays your Web Server version and O/S information.
