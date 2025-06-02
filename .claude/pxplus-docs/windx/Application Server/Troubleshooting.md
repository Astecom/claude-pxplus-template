# Application Server

**Troubleshooting**|   
---|---  
  
This page provides general troubleshooting information regarding some of the issues you may encounter when running the Application Server.

## Network Connectivity

Verify IP connections if the client is unable to communicate with the server. Even if a client has successfully connected to the server in the past, several events could cause unsuccessful attempts at any time; i.e. changed TCP/IP settings, router problems, DNS services down, duplicate IP address on the network, etc.

## Server-Side Issues

Difficulties can be caused by several server-specific issues; i.e. incorrect permission settings, daemon not running, invalid daemon command line syntax, socket in use by another application, daemon starting in the wrong directory, etc.

#### **Note:**  
To maintain settings when moving, upgrading or reinstalling your server, ensure that your configuration files are saved and copied to the appropriate new location. See **[Server Configuration Files](Server%20Configuration.htm#configfiles)**.

The most common problems involve UNIX **_file permissions_**. When the Application Server's configuration system is first run, and every time the software is upgraded, the ***.pvk** files in the _Lib/_appserv_ directory are either created or recreated as required. If the user that you are logged in as has not set a UMASK 000, then these files may not be writable by other users. The _Lib/_appserv/sessions.pvk_ requires Read/Write file permissions for all users for whom sessions will be launched.

File permissions on the PxPlus ACTIVATE.PVX file must be Read/Write, and all utility programs must have at least Read permissions for the user under which the sessions will be run.

## Client-Side Issues

Verify that the client configuration is using the correct domain and password. The client may fail if the server is unreachable, which is a symptom related to Network Connectivity. The client's firewall configuration may be the cause of a failure if programs are unable to receive data from the server.
