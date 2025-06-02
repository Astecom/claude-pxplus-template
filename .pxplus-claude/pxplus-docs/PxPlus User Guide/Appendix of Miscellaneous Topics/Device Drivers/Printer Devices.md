# Device Drivers

**Printer Devices** |  **__**  
---|---  
  
PxPlus device drivers for printers are used to consolidate mnemonics and (legacy) control sequences into a single file to be called from the main program whenever the target printer is opened.

A printer device can also be defined to the system by a logical device descriptor or _link file_. This type of file is used in PxPlus to define the actual device path and device type. The use of a link file allows you to maintain a common printer name (**_alias_**) that will represent all possible print destinations from your application. Link files can be edited directly or maintained using the PxPlus utility***UCL**. 

For information on printer device drivers, see **[Printing](../../Printing/Introduction.md)**.
