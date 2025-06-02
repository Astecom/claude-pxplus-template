# Device Drivers

**Defining Devices** |  **__**  
---|---  
  
Depending on the associated device, device driver code will begin with one of the following directives:

|  **DEFPRT** (_chan_) _col_ , _ln_ |  For a printer device  
---|---|---  
__ |  **_or_**|   
|  **DEFTTY** (_chan_) _col_ , _ln_ |  For a terminal device  
  
**DEFTTY** and **DEFPRT** tell PxPlus that the channel opened is either a terminal or a printer and will give you the **[FIN( )](../../../functions/fin.md)** information back in either terminal format or printer format. It uses the column and line information to give you some starting values to use, if you query the **[FIN( )](../../../functions/fin.md)**, **[MXC( ) and MXL( )](../../../functions/mxc.md)** functions.

See **[DEFTTY](../../../directives/deftty.md)** and **[DEFPRT](../../../directives/defprt.md)**.

## *DEV and *UDEV Directories

The associated device driver file must be located in the PxPlus***DEV** directory (e.g. /pvx/lib/_dev) and is referenced via ***DEV/**_xxxxxxxx_ _**where** xxxxxxxx_ is the name of the driver specified. Driver names are limited to 12 characters in length, lowercase only. If the driver cannot be located, this may result in an Error #100 - No driver for terminal type or library missing.

If you plan to customize one of the drivers supplied with PxPlus, it is not recommended that you resave the driver using the same file name in***DEV**. Unfortunately, the PxPlus installation process will automatically overwrite these files and you will lose all changes.

For terminal drivers, you have the option of using the***UDEV** directory (e.g. /pvx/lib/_udev) to store customized drivers. This option is **_not_** available for printer device drivers.

See **[Creating a Supplemental Device Driver](Terminal%20Devices.md)**.
