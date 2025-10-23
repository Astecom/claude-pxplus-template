# WindX™ Thin-Client  
  
**Application Server**|   
---|---  
  
The **Application Server** allows you to create and maintain a secure TCP/IP server environment for connecting WindX implementations via MS Windows, UNIX/Linux and MAC OS X. It provides an enhanced, configurable alternative to the built-in client-server processes supplied with the PxPlus base system, **[Simple Client-Server](../../simplecs/clienthost.md)** or **[*NTHost/*NTSlave](../nthost.md)**, which are sufficient for establishing quick and simple client-server connections within a local area network.

The Application Server extends the usability of your server-based applications and delivers an all-in-one PxPlus solution for protecting and maintaining your data over large networks, including the Internet.

**_Simplified Interface_** |  User-friendly utilities are provided for creating, configuring and administering the different characteristics of your PxPlus client-server applications.  
---|---  
**_Uses Only One TCP/IP Socket_** |  Default client-server processes in PxPlus can end up using many different sockets, depending on the implementation and the number of clients. The Application Server architecture allows you to direct all connections through a single socket.  
**_Designed for Firewalls_** |  If it is too difficult for a firewall to determine which sockets it needs to block, it might as well be disabled. By reducing the number of sockets needing access, the Application Server ensures that your firewall is fully operational.  
**_Session Administration_** |  One of the primary security features in the Application Server is its ability to monitor and control access through session administration, user authentication and limiting client access.  
**_Optional SSL Encryption_** |  The Application Server supports use of a TCP/IP-level Secure Socket Library, a security protocol that allows you to encrypt communications.  
  
## Activation and Product Components

The Application Server is shipped with PxPlus, and it may be activated for use as a part of the PxPlus Web bundle. Use of this product requires a secondary level activation on top of the base system activation.

While the program shortcuts and configuration panels are immediately available and can be accessed from a base system installation of PxPlus, the Application Server itself cannot be run unless it has been properly activated. If the activation has been recorded incorrectly, the session will fail, returning the error message: NO VALID ACTIVATION FOUND!!

Contact your PxPlus reseller or visit the PxPlus website at **[www.pvxplus.com](http://www.pvxplus.com/)** for more information on product options and licensing.

The following software components and supporting files are required to run the Application Server and should be installed within the system's PxPlus directory:

***appserv/server** |  Application Server daemon  
---|---  
***appserv/config** |  Configuration facility  
***client** |  Client-side software (included with WindX)  
***server** |  Spawning software  
***appserv/config.en** |  NOMADS panel library  
***appserv/apsmesg.en** |  Message library  
***appserv/dealer.en** |  Dealer panel library  
  
#### **Note:**  
To maintain settings when moving, upgrading or reinstalling your server, ensure that you copy the appropriate configuration files over to the new location. See **[Server Configuration Files](Server%20Configuration.htm#files)**.
