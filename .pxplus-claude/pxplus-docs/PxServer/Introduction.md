# 

**PxServer** |  **__**  
---|---  
  
## What is PxServer?

|  PxServer is a simple server application that allows remote workstations (clients) to access data files residing on a host machine by using a proprietary network protocol. PxServer itself is a process that resides on a network-accessible machine (Windows, Linux, Mac or AIX) on which the application data files reside. PxServer currently supports remote access to the following PxPlus **_file types_** : _Keyed_ (VLR/Fixed), _Indexed_ , _Programs_ , _Program Libraries_ , _Serial_ and _Binary_.

#### **Important Note:**  
PxServer is installed as part of PxPlus and **_requires the Web bundle to run_**.  
  
_(The installation of PxServer as part of PxPlus (Web bundle only) was added in PxPlus 2019 Update 2.)_  
  
---|---  
  
Once PxServer is running, PxPlus applications can then access the remote data using standard TCP/IP network communication.

Both PxPlus and the stand-alone PxIO subroutine library may be used to access files controlled by PxServer. _(as of PxPlus v11.50 and higher)_

When compared with other network-based access methods, such as mapped drives or the original RPC PxPlus implementation, PxServer provides several key benefits:

**_Reduced Network Traffic  
_**  
When using a network shared drive, the system sends portions (pages) of the data between the network drive and PxPlus. This means that internal control structures and unnecessary data are sent across the network. With the PxServer, only the data records are sent over the network, so there is less overall traffic.

**_Shared File Structure Information between Processes on the Server  
_**  
In a network drive environment, each client must maintain independent copies of the current file structure and state (key tables, space allocation, etc.). Since PxServer serves as a central file access host process, it can share this information among the various clients.

**_Centralized Access to Shared Files  
_**  
In a network drive environment, multiple clients requiring access to a common file struggle for control. This is because only one process at a time can be updating or processing the file key tables and internal structures. PxServer centralizes all access and, with the use of a centralized multi-threaded environment, quickly provides concurrent access to the clients.

**_Less Risk of File Corruption_** _  
_  
When using network drives, control structures, such as key tables and free space tables, are transferred from the network drive to the client over the network where they are updated and sent back to be written to the file. These key elements of the data files can be corrupted by network and/or client hardware problems, making them unusable. With the PxServer, all file control information is maintained on the server, which means that the risk of data integrity failures is much smaller.

**_Reliable PxServer Protocol  
_**  
When network failures do occur on network drives, data is generally lost. The PxServer protocol can recover from most transient failures through automatic reconnection and IO process recovery. This minimizes the potential of applications receiving file access failures, which can cause problems with overall system integrity.

**_Simple Set Up Process  
_**  
PxServer is a simple to use/configure server application that provides PxIO library and PxPlus remote file access capabilities. It uses an ICANN authorized network port specifically dedicated to the PxServer file IO. PxServer can be run on Windows, Linux, Mac and AIX.

**_Multi-Threaded Capability_** _  
_  
Each client connection to PxServer is run in its own thread, which reduces resource contention on the server. This provides better performance and scalability than the existing RPC interface, which uses a single thread to service all requests.

**_Keepalive_ _Messages to Monitor Connections Supported  
_**  
Active connections are constantly monitored to make sure communication is not lost. Keepalive messages are sent between the client and PxServer to ensure that the connection stays active. The frequency with which this keepalive message is sent is a configurable option on the server.

**_Auto-Reconnect Supported  
_**  
When an unexpected disconnect occurs on a network, PxServer keeps the session alive for a configurable period of time. This allows clients to reconnect to it so that their work is not lost. This auto-reconnect facility is transparent to the application and reduces the errors that the application needs to handle.

**_Secure Data Encryption  
_**  
PxServer supports secure encrypted TCP/IP network communication between the client and itself.

**_Controlled Access_** _  
_  
Server permissions can be setup on PxServer so that certain users and companies can have read-only or read-write access to certain directories and files.

**_Smart Shutdown_**  
  
When PxServer is shutdown, it will ignore any further requests for new connections and will wait for all current connections to disconnect before terminating. Instead of waiting for all connections to disconnect, you can select the _Force Immediate Shutdown_ check box. When PxServer is shutdown, it will disconnect all active connections. To prevent file corruption when disconnecting the active connections, PxServer will wait for any connection currently performing file I/O to complete the file I/O before disconnecting.

## See Also

**[Configuring PxServer](Configuring%20PxServer/Overview.md)**  
**[Using PxServer](Using%20PxServer/Overview.md)**
