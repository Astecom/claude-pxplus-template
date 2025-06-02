# Directives 

**PROCESS SERVER** |  **_Establish Remote Server_**  
---|---  
  
##  Formats

1\. _Identify Remote Server_ _:_ |  **PROCESS SERVER** _"server"_**ON** _"address"_  
---|---  
2\. _Terminate Remote Server_ _:_ |  **PROCESS SERVER** _"server"_**CLOSE**  
  
**_Where_** _:_

_address_ |  TCP address and services identifier for the server; e.g. "[tcp]192.1.1.100;15000".  
  
To identify an instance of [**PxServer**](../PxServer/Introduction.md), an address string consisting of the following three components can be used: |  _[pxs]_ |  Identifies the server as an instance of PxServer  
---|---  
_host_ |  Identifies the machine on which PxServer is running (or the name _localhost_ can be substituted if PxServer is running on the same machine as PxPlus)  
_port_ |  Identifies the port number on which PxServer is listening  
  
Alternatives to the TCP address are explained in **[Format 1](process_server.htm#Mark3)**.  
  
_server_ |  Name to be associated with a program server. Length is from 1 to 12 characters; e.g. "INVENTORY".  
  
##  Description

The **PROCESS SERVER** directive is used to identify a remote program server or the PxServer to a **CALL** ing application.

If desired, "_address_ " can be set to "LOCAL", which results in any RPC call to this server simply becoming a local **CALL** directive. Alternatively, the _address_ can specify a pipe on UNIX or a DLL on Windows.

To **_terminate_** the remote server connection, use the **CLOSE** keyword.

##  Format 1

**_Identify Remote Server_**

**PROCESS SERVER** _"server"_**ON** _"address"_

Establishes the remote server with a logical name (between 1 and 12 characters in length). The server address may take one of several forms, depending on the circumstances:

**_Examples:_**

|  process server "Inventory" on "[tcp]192.1.1.100;15000" |  TCP address and port/service identifier for the server.  
---|---|---  
|  process server "Inventory" on "LOCAL" |  **LOCAL** keyword results in any **CALL** to this server becoming local.  
|  process server "Inventory" on "|/u/sys001/inventory" |  **_(UNIX/Linux Only)_** Pathname of **|** (_pipe_) server instead of TCP address.  
|  process server "Inventory" on "[DLL]c:\app\server.dll;Entry" |  **_(Windows Only)_** Pathname DLL and entry point instead of TCP address.  
|  process server "server" on "[pxs]host;port" |  Identifies the server as PxServer, the host machine on which PxServer is running, and the port number on which PxServer is listening.  
  
##  Format 2

**_Terminate Remote Server_**

**PROCESS SERVER** _"server"_**CLOSE**

Terminates the remote server connection identified by the name "_server"_.

**_Example:_**

> process server "Inventory" close

##  See Also

[**[RPC] Remote Process Control**](../command_tags/rpc.htm)  
**[Remote Process Capability](../Remote%20Process%20Capability/Introduction.md)**
