# Introduction to Using PxPlus

**Client-Server** |  **__**  
---|---  
  
PxPlus includes several facilities that allow your processing workload and/or data to be distributed over network-connected systems, client workstations and shared servers. They allow you to maintain heavy processing and data storage on a secure central server while delivering a flexible user-oriented interface to multiple desktop systems and/or portable devices. The information below explains how the various technologies (i.e. WindX) will work with your PxPlus applications.

Since IT departments first made the transition from large mainframes to PC systems, the **_client-server_** model has been a central concept in distributed computing. It describes a network architecture where a **_client_** process requests/receives data or services, and a **_server_** process provides the data or services. Most Internet applications, including email products, FTP (file transfer) clients and Web browsers, are based on this client-server model. The terms _client_ or _server_ can apply to hardware and/or software components on either side of the configuration.

**_TCP/IP and Remote Processing_**

Transmission Control Protocol/Internet Protocol **(TCP/IP)** is the primary communication language for governing the services that everyone uses over the Internet, including file transfer, electronic mail, and remote logon.

When a TCP/IP connection is established between client and server, the client requests a connection to a specific server by giving its IP address and a service identifier (port/socket number). On the host computer, an application establishes itself by identifying its service number, which typically ranges from 1 to 65535. Typically, numbers below 2000 are reserved for specific Internet applications, while numbers above are available for general use.

PxPlus has built-in support for TCP/IP protocol, which allows developers to create new services or to interact with existing services over a network. The **[[TCP]](../../command_tags/tcp.htm)** interface is used to communicate directly via TCP/IP. The **[[RPC]](../../command_tags/rpc.htm)** remote process control provides a basic method to read/write data in PxPlus files, as well as to execute PxPlus background tasks on one or more remote servers via TCP/IP.

These TCP/IP-based facilities are not required when using the client-server deployment options. The PxPlus thin-client and hosting products described in this section are distributed with pre-built connection/processing functionality that is independent of your hardware and network implementations. Another consideration for remote file access is PxPlus ODBC Client-Server. See **[PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)**.

## Client-Server Deployment Options

Client-server functionality is tightly integrated into the language itself. PxPlus offers a range of software extensions for building distributed systems and for optimizing the deployment of your applications across your user base.

A typical client-server application may be configured as follows:

  * _On the**server** side,_ a PxPlus host program (either *NTHost or Application Server) launches a copy of PxPlus and monitors a TCP/IP socket, "listening" for incoming requests from clients.
  * _On the**client** side,_ WindX opens the client end of the same socket to which the host is listening and passes requests through to the server.



**_Choosing the Right Configuration_**

Different customers have different needs; therefore, choosing the appropriate client software requires careful analysis of the trade-offs between accessibility and expressiveness.

**WindX** |  WindX is a full-featured thin-client that takes advantage of the local OS to deliver a rich graphical environment (along with auto-update capability) from any remote PxPlus host system to any MS Windows client. A WindX client is most effective when:

  * End users are accessing the application from a conventional workstation.
  * Long complex tasks are to be performed on a regular basis.
  * Application developers determine the client platform (not end users).

See **[WindX Thin-Client](../../windx.md)**.  
---|---  
**HTML Forms** |  A PxPlus Web Server/HTML implementation allows for a basic Web user environment that has no access to the local machine. An HTML Forms implementation is an effective client when end users require brief access to fill in a few form fields that are presented using a standard Web page. For information on using HTML with PxPlus to create a Web application, see **[PxPlus Web Server Reference](../../Web%20Server%20Reference/Introduction.md)**.  
  
##  Hosting Facilities

In a direct TCP/IP client-server environment, the WindX thin-client would be set up to access server-side applications using the **[PxPlus Application Server](../../windx/Application%20Server/Introduction.md)** or **[*NTHost/*NTSlave](../../windx/nthost.md)**.

**_*NTHost/*NTSlave_**

These facilities are supplied with the PxPlus base system for establishing a very simple TCP/IP connection. On the host computer, the program *NTHost is run to monitor incoming requests from client PCs and to initiate new processes to service these requests. On a Windows client system, the program *NTSlave begins the initial connection to the host by requesting a new session to be started.

While the **[*NTHost/*NTSlave](../../windx/nthost.md)** combination is sufficient for establishing quick client-server connections, they were not designed for use "as is" outside of a closed local area network. For exposure to large networking environments or the Internet, it is much safer to run the PxPlus Application Server.

**_Application Server_**

The **[PxPlus Application Server](../../windx/Application%20Server/Introduction.md)** provides an enhanced, configurable alternative to the built-in client-server processes supplied with the PxPlus base system. It extends the usability of your server-based applications and delivers an all-in-one PxPlus solution for protecting and maintaining your data over large networks, including the Internet:

**_Simplified Interface_** |  User-friendly utilities are provided for creating, configuring and administering the different characteristics of your PxPlus client-server applications.  
---|---  
**_Uses Only One TCP/IP Socket_** |  Default client-server processes in PxPlus can end up using many different sockets, depending on the implementation and the number of clients. The Application Server architecture allows you to direct all connections through a single socket.  
**_Designed for Firewalls_** |  If it is too difficult for a firewall to determine which sockets it needs to block, it might as well be disabled. By reducing the number of sockets needing access, the Application Server ensures that your firewall is fully operational.  
**_Session Administration_** |  One of the primary security features in the Application Server is its ability to monitor and control access through session administration, user authentication and limiting client access.  
**_Optional SSL Encryption_** |  The Application Server supports use of a TCP/IP-level Secure Socket Library, a security protocol that allows you to encrypt communications.  
  
## Thin-Clients

Once one of the **[Hosting Facilities](Introduction.htm#hosting)** is configured and running on the server, an installed/configured thin-client should be able to establish communication with the server-based PxPlus system.

The PxPlus thin-client allows application processing and data storage to be maintained on a secure, centralized server, while delivering graphical interface components to the client desktop. WindX runs in conjunction with a copy of PxPlus for Windows, so WindX can issue virtually any command of which PxPlus is capable. This product may be integrated directly into your application and shipped as an integral component.

With a PxPlus thin-client in place, most content is routed automatically to the client without the need for special programming techniques. Code related to printing, keyboard input, mouse movement, printer selection and graphical user interface elements are routed to the client or server automatically. PxPlus client-side functionality is designed to minimize network traffic and improve system performance. See **[Printing via Thin-Clients](../Printing/Printing%20via%20Thin-Clients/Overview.md)**.

**_Client or Server?_**

PxPlus includes some server-side indicators for detecting a thin-client session. **MSE** bytes 32 for 1 byte will be a W for Windows-based (WindX) or $00$ for neither. **TCB(88)** will be zero for no client or will contain the revision level of the WindX communications protocol that the client is using.

Once PxPlus on the server recognizes the existence of the client station, it changes internal settings that route graphical requests to the thin-client. Graphical directives and functions invoked by the application are tokenized and sent to the client.

Code that may be executed on either side needs to indicate if it is to execute on the server or the client. Execution defaults to the server side. To perform an operation on the client side, use the **[[WDX]](../../command_tags/wdx.htm)** tag.

**_Example:_**

> CALL "[WDX]*windx.utl;get_num","tcb(29)",number   
>  OPEN(channel)"[WDX]Path\Filename"

When using the Application Server, an OOP object **%APS** is created on both the server side and the client side of the connection. This contains properties about both server and client instances of PxPlus that may be used in your code.

**_Mnemonics_**

Thin-clients respond directly to the internal form of all mnemonics. Therefore, unlike conventional terminals, no translation table is required. Mnemonics, such as **'CS'** , are transmitted as $1B$+"CS", and screen position commands, such as**@(1,2)** , are sent as $1B$+"@2"+CHR(1)+CHR(2). Long-form mnemonics, such as **'[WINDOW](../../mnemonics/window.md)'** and **'[DROP](../../mnemonics/drop.md)'**, are sent in their native form as well.

**_Graphical Control Requests_**

PxPlus tokenizes all graphical directives and references and then forwards them to the client for processing. Access to the control attributes (e.g. BackColour$, Height, Enabled) is tokenized as well and forwarded to the client for processing.

**_Turbo Mode_**

During normal operation, each tokenized message sent by the host to the client requires an acknowledgment. While this process guarantees that the application and client are synchronized fully, it can slow down overall transmission speeds. **_Turbo_** mode in PxPlus (see **['TU'](../../parameters/tu.md)** system parameter) allows the thin-client to receive and process many requests locally without the need to acknowledge each transmission from the host. However, since no return result is acknowledged, be aware that some error reporting may be ignored.

**_Help_**

Help documents with their associated application may be launched from the client via the **[SYSTEM_HELP](../../directives/system_help.md)** directive.

**_Notes on Efficient Coding_**

While thin-client functionality is fully integrated into PxPlus, how you design your application and how it handles data may have an impact on performance. Inefficient code can lead to sluggish application response, overall network congestion, and higher CPU usage on the server. It is best to avoid:

  * Requesting the same information more than once.


  * Sending the same data repeatedly, especially long strings of information.


  * Loops of code to set/retrieve properties or characteristics on the server side.


  * Loops of code to calculate values based on items that need to come from the PC.



Platform diversity, available bandwidth, and other network issues should also be considered when developing a PxPlus application for a client-server environment. Regardless of your network constraints, it is best to keep the following in mind:

  * The less data you send, the less bandwidth you use.


  * Loading 10,000 lines of 100 characters each in a list box on the client will be slow. The slower the bandwidth, the slower the application.


  * The fewer questions you ask of the client the better, as latencies can build up.


  * If you need to get data from a client (**FIN( )** information or object properties), ask the question once and keep the answer on the server in case you need it again.


  * Each time information is needed, the request must be packaged, sent, decoded, a result gathered, the result packaged then sent back to the server and decoded.



##  WindX

Fundamentally, WindX is designed to provide a feature-rich, graphical user interface to a Windows client from any server-based PxPlus application, even if the host system does not support that type of interface (e.g. UNIX). WindX can also be configured to take full advantage of each platform's functionality by allowing processing and file access to be handled on either side of the client-server configuration. The WindX Plug-in can be obtained from your PxPlus reseller or from the PxPlus website **[www.pvxplus.com](http://www.pvxplus.com/)**.

It is freely distributable for clients but must connect with a PxPlus application on a server that maintains a multi-user Base with Thin-Client package, Professional or Web license. If the server is not licensed for Plug-in access, server file/directory permissions are incorrect, or a PxPlus session cannot be established within two (2) minutes of start-up, then the Plug-in will terminate automatically.

See **[WindX Thin-Client](../../windx.md)**.

#### **Note:**  
The Plug-in download for WindX is for installation on **_Windows client machines only_**.

**_Running PxPlus Applications in WindX_**

Any file type that PxPlus can access may be accessed locally across a WindX connection (Serial, Keyed, Indexed, ODBC, OCI, TCP, etc.). WindX allows you to **CALL** programs that exist on the client; however, you may not **LOAD** or **RUN** local programs. The **[*WindX.utl Utility](../../windx/windxutl.md)** may be used to simplify many client requests.

OOP objects and COM controls may be utilized by the server for WindX clients via:

> NEW("[WDX]Classname") _  
> _ DEF OBJECT X,"[WDX]RemoteCOMObject"

DLL( ) functions may be used, provided they are wrapped in a PxPlus program that is installed on the client that can be called from the server.

## Upgrading Client Software

Multiple options are available for upgrading/updating PxPlus-based client-server applications. Developers may take advantage of third-party update services, such as those supplied by _Install Shield,_ or they may create their own software update packages. In addition, PxPlus comes with an **_AutoUpdater_** for updating any WindX client from software repositories on the server to which they connect.

**_AutoUpdater_**

This utility is included with the PxPlus base activation to provide a means for automatically updating (or downgrading) and repairing client installations of WindX. It can be configured to check for and install critical patches/upgrades on all client workstations whenever they are connected to the server.
