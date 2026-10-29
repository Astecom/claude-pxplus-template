# Language Reference

**Special File Command Tags** |     
---|---  
  
Special file command tags (enclosed in square brackets) are used to modify paths and filenames for specific I/O uses in PxPlus. They may include a series of semi-colon separated parameters to be processed at run time. Some of these tags are supported only in specific operating environments.

#### **Important Note:**  
The square brackets enclosing special tags are **_part of the syntax_**. Other square brackets in syntax examples indicate that elements are optional.

 

**File Command Tag** |  **Description** |  **Supported Platform**  
---|---|---  
**[[ADO]](command_tags/ADO.md)** |  Microsoft SQL Server Interface |  Windows only  
**[[DB2]](command_tags/db2.md)** |  DB2 Support |  Any system  
[**[DDE]**](command_tags/dde.md) |  Dynamic Data Exchange |  Windows and WindX  
[**[DLL]**](command_tags/dll.md) |  Dynamic Link Library |  Windows and WindX  
**[[HTTP / HTTPS]](command_tags/http.md)** |  Remote Call to Apache Server |  Any system  
[**[LCL]**](command_tags/lcl.md) |  Access User's Local Machine |  Any platform via WindX  
[**[LIB]**](command_tags/lib.md) |  Program Library |  Windows only  
[**[MYSQL]**](command_tags/mysql.md) |  Open MySQL Native Database Link |  Windows, some UNIX/Linux  
[**[OCI]**](command_tags/oci.md) |  Connect to Oracle Server |  Windows, some UNIX/Linux  
[**[ODB]**](command_tags/odb.md) |  Open Database |  Windows and WindX  
[**[RPC]**](command_tags/rpc.md) |  Remote Process Control |  Any system  
[**[TCP]**](command_tags/tcp.md) |  Transmission Control Protocol |  Any system  
[**[WDX]**](command_tags/wdx.md) |  Direct Action to Client Machine |  Any platform via WindX  
  
 

#### **Note:**  
**[WDX]** specialty commands can only be used when running under WindX. You can also prefix some (but not all) of the other specialty command tags with a **[WDX]** tag to direct the action to the WindX client machine instead of the server.  
  
**[WindX](windx.md)**, the PxPlus thin-client graphical user interface screen handler, is used to:  
  
    Give a Windows graphical user interface look to character-based applications.  
    Optimize a network's use of both Windows and UNIX by directing tasks to the most appropriate platform.  
    Provide remote processing through serial and/or TCP/IP communications.

 

 

 
