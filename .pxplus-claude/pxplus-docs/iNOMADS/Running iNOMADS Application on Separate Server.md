# iNomads  
  
**Running iNomads Application on a Separate Server**|   
---|---  
  
**_If the preference is to separate your application data from your Web Server_** \- When running on two servers, one server runs the actual application and the other server runs Apache or some other Web Server such as IIS or EZWeb. The Web Server machine needs to be able to see the application server, and the application server needs to be able to read/write files on the Web Server.

**_Up through PxPlus 2017_** , in order to allow the application server to access/update files on the Web Server, a share point/network drive needs to be created on the Web Server into which the application can place temporary files (PDF, etc.) and images needed by the application Web pages. The path to this share point must be provided in the [**Launch_Root**](System%20Configuration.htm#launchroot) configuration setting (**Processes** tab). **_As of PxPlus 2018_** , this share point is no longer needed, and the Launch_Root value should contain an **_http_** (or **_https_**) pointer to the Web Server.

The steps below guide you through the process of setting up an iNomads application to run on a server that is separate from the Apache server.

#### **Note:**  
These instructions assume that: **(a)** the iNomads application and Apache software are running on Server A, and **(b)** the intent is to move the Apache software to Server B and leave the iNomads application on Server A.

**Step** |  **Description**  
---|---  
**1.** |  Download and install **Apache 2.4.x** on Server B.  
**2.** |  Create a new directory on Server B (e.g. _C:\directory_). When this setup is complete, it will contain the entire _*plus/inomads_ directory from Server A.  
  
For Window systems, it must be a directory under a root drive. Make this newly created directory on Server B accessible to Server A with full read/write permissions. Generally, this is done with NFS, Samba or some other network file system interface. For Window systems, on Server A create a Map drive to the new _C:\directory_ on Server B.  
**3.** |  Configure Apache on Server B as originally configured on Server A. Set the DocumentRoot to the new directory on Server B and include the _inomads_ sub-directory (e.g. _C:/directory/inomads_).  
  
The sample below contains the required changes to _httpd24.conf_ for Windows and Linux. Remove the comment symbol "**#** " from the appropriate lines and adjust to the proper path for your system.

#### **Important Note:**  
For the "ServerName" line below, both the real site domain name **_and_** server name should be used.

# Apache 2.4.x  
#  
# PxPlus iNomads setup  
#  
  
LoadModule inomads_module modules/mod_inomads.so  
  
<Location /inomads>  
SetHandler inomads  
</Location>  
  
#  
# **** IMPORTANT NOTICE: Use forward slashes for all directory names and adjust the pathname as reqd  
#  
  
<VirtualHost *:80>  
ServerName inomads.domain.com  
#DocumentRoot "C:/directory/inomads" # Select and adjust accordingly for Windows  
#DocumentRoot #"/var/inomads" # Select and adjust accordingly for Linux/Unix  
DirectoryIndexinomads  
  
# Default to ISO-8859-1  
AddDefaultCharset ISO-8859-1  
  
# Redirect any attempt to view the .conf files to error 404  
RedirectMatch 404 conf$  
</VirtualHost>  
  
#<Directory "C:/directory/inomads"> # Select and adjust accordingly for Windows  
#<Directory "/var/inomads"> # Select and adjust accordingly for Linux/Unix  
Options Indexes FollowSymLinks  
AllowOverride None  
Require all granted  
</Directory>  
**4.** |  Add the following settings to the **[Processes](System%20Configuration.htm#processes)** tab in the _inomads.conf_ file on Server A. They can be manually added by editing _*plus/inomads/inomads.conf_ or by entering **RUN "*plus/inomads/admin"** at the PxPlus Command prompt:

  * Set the system name (Server Name) or IP address (192.168.0.77) for Server A into "Remote process launching IP".
  * Set the port (4093) that will be used by _*plus/cs/host_ in "Remote process launch port address". To configure the system to only use a single port **_(PxPlus 2018 or later)_** , set "Only use the Remote process launch port".
  * Set the pathname _(x:/inomads)_ of the mapped drive/share point on the Web Server that contains the _inomads_ directory. To eliminate the need for a mapped drive/share point **_(PxPlus 2018 or later)_** , place the URL of the Web Server such as _http://inomads.myserver.com_.

  
**5.** |  Copy the complete _lib/_plus/inomads_ directory from Server A to _x:/inomads_ on the shared directory on Server B. Once copied, make sure permissions on Server B are still general read/write so that Apache can access them.  
**6.** |  Start ***plus/cs/host** on Server A. Before you do this, see **Important Note** below.

#### **Important Note:**  
To avoid any issues that might occur due to any START_UP settings, do **_not_** start ***plus/cs/host** in your application directory. The recommendation is to use _C:/PVX Plus Technologies_ or _lib/_plus/inomads_ directories. You will want to ensure that Simplified Host is setup to start after a system restart.  
  
**7.** |  Start/restart Apache on Server B.  
**8.** |  The application should now be accessible on a browser.

  * Using a browser, enter **http://localhost:80** on the Apache system or **http://ServerName:80** on some other system.
  * If there is a problem, try to see if the Apache is setup correctly. You can test this by requesting **http://localhost:80/sysimage/bug.gif**. This should display the tiny red bug on the browser.
  * Another problem that can occur is with the firewall between Servers A and B. Server B needs to be able to connect to Server A. Ensure that it is open and not blocked.
  * Permissions and the setup of the Map drive are problem areas that should be investigated if issues are encountered.
  * Another test would be to confirm that the host connection is working by following these steps: Start the WindX Launcher. Select the _PxPlus Simple CS_ connection type. Enter the server name as defined in Step 4 above. A Simple Client session should launch if properly defined.

  
**9.** |  Changes to modify the behaviour of iNomads are made to the _*plus/inomads/inomads.conf_ file on Server A. Changes made in the **[Processes](System%20Configuration.htm#processes)** tab (in Step 4 above) in regards to the system name, port and pathname must be made to _inomads.conf_ on both servers.  
  
#### **Note:**  
To alternatively set up Apache 2.2, see [**Apache 2.2 HTTP Server Setup**](Apache%202.2%20HTTP%20Server%20Setup.md).

## See Also

Additional information:

_PxPlus Help Reference:_ |  **[iNomads Setup and Installation](Setup%20and%20Installation.md)**  
---|---  
_iNomads Data Flow:  
(YouTube video created by PVX Plus)_ |  **[https://www.youtube.com/watch?v=dV183TSkNtc&feature=youtu.be](https://www.youtube.com/watch?v=dV183TSkNtc&feature=youtu.be)**
