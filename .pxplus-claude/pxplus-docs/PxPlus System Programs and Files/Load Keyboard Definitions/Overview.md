# PxPlus System Programs and Files

***TTY** |  **_Load Keyboard Definitions_**  
---|---  
  
The ***TTY** program is used by most terminal device drivers to load the keyboard control sequences for the terminal. It uses the tables defined by "*UCK" to configure the device, which is identified by the system variable LFO (Last File Opened).

Whenever a terminal device driver is executed, it should transfer control to this program to load the CTL definitions from the ***KYBRD.CFG** or ***KYBRD.STD** files.

For more information on the ***KYBRD.CFG** and ***KYBRD.STD** files, see **[Keyboard Definition Files](../Keyboard%20Definition%20Files/Overview.md)**.
