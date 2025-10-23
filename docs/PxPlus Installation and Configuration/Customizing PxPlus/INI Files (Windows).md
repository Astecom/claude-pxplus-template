# Customizing PxPlus

**INI Files (Windows)** |  **__**  
---|---  
  
Various properties of the PxPlus Windows environment can be specified with the use of flat text files identified by an .INI (or .PVX) suffix. The contents of these files must adhere to the standard format for Windows initialization files: headers are enclosed in square brackets and parameters are indicated by name, **=**  _(equals sign)_ , and associated value.

INI parameters can be used to load/maintain several environment settings, including:

  * Font and font size (used in calculating column/row sizes for the screen display).
  * Location of the initial window and its state (minimized, maximized or normal).
  * Title of the initial window.



The PxPlus INI file is passed as an argument to _pxplus.exe_ on the Command line.

See **[Launching PxPlus](../Launching%20PxPlus/Overview.md)**.

## Specifying an INI File

If an INI file is **_not_** specified, then PxPlus resorts to the default _pxplus.ini_. However, there are many reasons to create and use application-specific INI files:

  * Control resources between different PxPlus applications running on the same system. Without controls, there can be severe problems due to conflicting libraries, resource files, and even activation keys.
  * Specify unique icons and other resources to identify your application and extend its functionality.
  * Launch different types of programs from within your application; i.e. you may have one INI for starting your application, and a different one to run hidden tasks.
  * Lock users out of modifying basic properties, such as font and font size, which could have an adverse effect in your application.
  * Control resources between PxPlus-built applications and applications from different companies running on the same system.



The INI file that PxPlus uses when starting is determined on the Command line.

**_Example:_**

> c:\pxplus\pxplus.exe c:\myapp\ _myapp.ini mystartprog -_ ARG _myarguments_  
>  c:\pxplus\pxplus.exe c:\myapp\ _myapp.ini_ windx  
>  c:\pxplus\pxplus.exe c:\myapp\ _myapp.ini_ *nthost

#### **Note:**  
If the INI file is specified on the WindX, *NTSlave or *NTHost Command line, then any instances of PxPlus started from within the PxPlus session will make use of the same INI file automatically.

## File Locations

The following search rules apply to the default _pxplus.ini_ file and for any INI file specified on the Command line that does not have an explicit path:

> 1\. Current user's data directory 

> 2\. All users' data directory

> 3\. Windows directory (except on Vista)

> 4\. Current directory

> 5\. Executable directory

When PxPlus needs to update an INI for items such as the last window state, it will update the INI file found during PxPlus initialization, based on the search pattern above. If no INI is found during initialization and PxPlus needs to update some INI values, then a new _pxplus.ini_ file will be automatically created/updated in the directory where _pxplus.exe_ was executed.

INI files can also be set to _Read Only,_ which prevents PxPlus from updating window properties on exit. This ensures that no matter the location (or in what state) the window is in when PxPlus is exited, it will be restored to default properties when PxPlus is restarted.

## See Also

**[INI Contents](INI%20Contents.md)**
