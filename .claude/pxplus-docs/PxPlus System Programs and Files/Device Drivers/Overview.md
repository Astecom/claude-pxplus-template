# PxPlus System Programs and Files

***DEV** |  **_Device Drivers_**  
---|---  
  
PxPlus supports a wide variety of device drivers. Each device driver has its own PxPlus basic program, which resides in the ***DEV** directory.

Each device driver is responsible for defining the terminal characteristics, mnemonics and CTL definitions. The device driver for your terminal is loaded and executed during system initialization. Device drivers are also executed whenever a PxPlus device link file is opened. Device drivers are standard PxPlus programs and have access to the full complement of PxPlus functions and directives.

See **[Device Drivers](../../PxPlus%20User%20Guide/Appendix%20of%20Miscellaneous%20Topics/Device%20Drivers/Overview.md)**.
