# Language Reference

**Special File Command Tags** |   
---|---  
  
Special file command tags (enclosed in square brackets) are used to modify paths and filenames for specific I/O uses in PxPlus. They may include a series of semi-colon separated parameters to be processed at run time. Some of these tags are supported only in specific operating environments.

#### **Important Note:**  
The square brackets enclosing special tags are **_part of the syntax_**. Other square brackets in syntax examples indicate that elements are optional.

**File Command Tag** |  **Description** |  **Supported Platform**  
---|---|---  
**[[ADO]](command_tags/ADO.htm)** |  Microsoft SQL Server Interface |  Windows only  
**[[DB2]](command_tags/db2.htm)** |  DB2 Support |  Any system  
[**[DDE]**](command_tags/dde.htm) |  Dynamic Data Exchange |  Windows and WindX  
[**[DLL]**](command_tags/dll.htm) |  Dynamic Link Library |  Windows and WindX  
**[[HTTP / HTTPS]](command_tags/http.htm)** |  Remote Call to Apache Server |  Any system  
[**[LCL]**](command_tags/lcl.htm) |  Access User's Local Machine |  Any platform via WindX  
[**[LIB]**](command_tags/lib.htm) |  Program Library |  Windows only  
[**[MYSQL]**](command_tags/mysql.htm) |  Open MySQL Native Database Link |  Windows, some UNIX/Linux  
[**[OCI]**](command_tags/oci.htm) |  Connect to Oracle Server |  Windows, some UNIX/Linux  
[**[ODB]**](command_tags/odb.htm) |  Open Database |  Windows and WindX  
[**[RPC]**](command_tags/rpc.htm) |  Remote Process Control |  Any system  
[**[TCP]**](command_tags/tcp.htm) |  Transmission Control Protocol |  Any system  
[**[WDX]**](command_tags/wdx.htm) |  Direct Action to Client Machine |  Any platform via WindX  
  
#### **Note:**  
**[WDX]** specialty commands can only be used when running under WindX. You can also prefix some (but not all) of the other specialty command tags with a **[WDX]** tag to direct the action to the WindX client machine instead of the server.  
  
**[WindX](windx.md)**, the PxPlus thin-client graphical user interface screen handler, is used to:  
  
Give a Windows graphical user interface look to character-based applications.  
Optimize a network's use of both Windows and UNIX by directing tasks to the most appropriate platform.  
Provide remote processing through serial and/or TCP/IP communications.
