# Running on the Web

**EZWeb Server**|   
---|---  
  
PxPlus EZWeb Server is an easy-to-use Web server that is ideally suited for use with **[iNomads](../iNOMADS/iNOMADS%20Introduction.md)**, **[PxPlus Dashboard](../PxPlus%20Dashboard/Overview.md)**, **[PxPlus Web Services](../PxPlus%20Web%20Services.md)** and **[PxPlus IDE Main Launcher (Web)](../PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)**. For many low volume installations and/or development situations where all that may be needed is a standard Web server, EZWeb Server can meet this need by providing the following functionality:

  * Ability to change port (Default port is 80 for HTTP or 443 for HTTPS)
  * Secure sockets (HTTPS)
  * Logging of process start, stop and errors
  * Multi-user/task support
  * File uploads and downloads



## Configuring EZWeb Server

When EZWeb starts, it looks in the starting directory for a configuration file (optional) called _ezweb.conf_ , which is used to define additional configuration options. If this file is not found, then the defaults will be used, along with any other options that may have been specified when launching EZWeb. See **[Running EZWeb Server](EZweb%20Introduction.htm#Mark1)**.

#### **Note:**  
Lines in this file that start with "**!** " or "**#** " will be considered _comments_. Pathnames with spaces in them **_must_** be within double quotes.  
  
_(Support for pathnames with spaces was added in PxPlus 2019.)_

Below is a list of the valid configuration directives that can optionally be used (in alphabetical order):

**Directive** |  **Description**  
---|---  
**accesslog** __pathname_ _ |  This directive is used to enable the access log. The access log records all requests processed by the server. The location and name of the access log file is determined by __pathname_ _. If the file specified by __pathname_ _ does not exist, it will be created. The directory itself **_must_** exist. Log entries will be in the standardized Common Log Format (CLF). Using this format means that the EZWeb server access logs can be readily analyzed by a variety of Web analysis programs that support the Common Log Format. **_Example:_** 127.0.0.1 - - [10/Feb/2023:16:43:04 -0500] "GET /webster.pxp HTTP/1.1" 200 3892 **_Format:_** _requester_ip identity authorization_user date request_info http_statusresponse_size_ **_Where:_** |  _requester_ip_ |  IP address that made the request to the EZWeb server.  
---|---  
_identity_ |  Not used by EZWeb server; will always be "**-** " (_dash_). Some other servers may return the RFC 1413 identity (visit **<https://en.wikipedia.org/wiki/Ident_Protocol>**) of the client.  
_authorization_user_ |  Not used by EZWeb server; will always be "**-** " (_dash_). Some other servers may return the UserID of the requester as determined by HTTP authentication.  
_date_ |  Square bracket surrounded date, time, and time zone that the request was received, in strftime (visit **<https://en.wikipedia.org/wiki/Strftime>**) format.  
_request_info_ |  Quoted request information made up of the HTTP method, request URL, and HTTP protocol, all separated with spaces.  
_http_status_ |  HTTP status code returned to the client.  
_response_size_ |  Size of the response returned to the client, measured in bytes.  
  
_(The accesslog directive was added in PxPlus 2023.)_  
  
**alias**  _inbound_name_ _alternate_pathname_ |  This directive is used to redirect any request to _inbound_name_ (or its subordinate files/directories) to a specified _alternate_pathname_.  
**host**  _hostname pathname_ |  This directive is used to provide for multiple host directories based on the host name on any inbound request.  
**nobrowse** |  If this directive is specified, the server will disable **_all_** directory browsing. _(The nobrowse directive was added in PxPlus 2018.)_  
**pfxpswd**  _password_ |  This directive is used to indicate the PFX certificate password if a PFX certificate is defined for the **secure** directive. This can be blank or not defined to define an empty password. _(The pfxpswd directive was added in PxPlus 2019.)_  
**port**  _portno_ |  This directive is used to set the port number to be used by EZWeb.

#### **Note:**  
This directive is ignored if the port is passed in ARG(1).  
  
**privkey**  _pathname_ |  This directive is used to indicate the PEM file, which contains the certificate private key. This is needed only if you have defined the **secure** directive and have separate PEM files for the certificate and private key. _(The privkey directive was added in PxPlus 2019.)_  
**root**  _pathname_ |  This directive is used to change the default root directory for EZWeb. By default, EZWeb will run in the ***plus/inomads** directory.  
**secure**  _pathname_ |  This directive is used to indicate the server is to run using SSL/TLS and to provide the PEM or PFX file, which contains the server certificate information. Renewed certificates are automatically reloaded. See **[Automatic Security Certificate Reload](EZweb%20Introduction.htm#Mark4)**. _(PFX support was added in PxPlus 2019.)_  
**shutdown**  _password_ |  This directive specifies a password that can be used to provide for remote shutdown of EZWeb. A remote shutdown will occur if the EZWeb server receives a request for **"/ShutDown?password"**.  
  
## Running EZWeb Server

EZWeb Server is launched either from the PxPlus IDE Main Launcher (see **[Method 1](EZweb%20Introduction.htm#Mark7)**) or from the Command line by running ***ezweb/server** (see **[Method 2](EZweb%20Introduction.htm#Mark8)**). By default, the program will run against port 80 (the standard Web port for HTTP requests) and will support the iNomads interface based on the parameters found in the ***plus/inomads/inomads.conf** file.

**_Method 1_** \- **_From the PxPlus IDE Main Launcher:_**

To start EZWeb Server from the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**, expand the _Web Deployment_ category and select _Launch EZWeb Server_.

The **Launch EZWeb Server** window is displayed. The **[Secure](EZweb%20Introduction.htm#Mark9)** check box allows you to enable (or disable) secure TLS/SSL mode for the EZWeb Server.

_(The ability to enable/disable secure TLS/SSL mode for the EZWeb server was added in PxPlus 2022.)_

> This window consists of the following:

_Port Number_ |  Enter the TCP/IP Port number to be used by the EZWeb Server. To set a different port number as the default, enter the desired port number and click the _Save_ button. The next time you invoke the **Launch EZWeb Server** window, it will default to this port number.  
---|---  
_Secure (HTTPS)_ |  Check box that is used to enable/disable secure TLS/SSL mode for the EZWeb Server. If the _Port Number_ is 80 (the default HTTP port) and the _Secure_ check box is selected, the _Port Number_ will change to 443 (the default HTTPS port). If the _Port Number_ is 443 and the _Secure_ check box is unchecked, the _Port Number_ will change to 80. _(The Secure check box was added in PxPlus 2022.)_  
_SSL Certificate_ |  Specify a pathname to a PEM or PFX file that contains the server certificate information, or click the Query button to select a file. For information on the type of certificate PxPlus uses, see **[PxPlus SSL/TLS Support](../ssl_tls_certificates.htm#support)**. _(The SSL Certificate input was added in PxPlus 2022.)_  
_Certificate Key_ |  Specify a PEM file that contains the certificate private key, or click the Query button to select a file. The _Certificate Key_ is needed only if you have two separate PEM files, one for the certificate and the other for the private key. _(The Certificate Key input was added in PxPlus 2022.)_  
_PFX Password_ |  Specify the PFX certificate password if a PFX certificate is defined for the SSL certificate. This can be blank or not defined to define an empty password. _(The PFX Password input was added in PxPlus 2022.)_  
_Launch_ _EZWeb_ |  The text on this button reflects the current port number (e.g. _Launch EZWeb on port: 80_). When this button is clicked, a message lets you know that EZWeb has started on the specified port number. If the **[Secure](EZweb%20Introduction.htm#Mark9)** option was set to **_On_** , the message also indicates that EZWeb is running in secure (HTTPS) mode. Following that, an EZWeb Server button displays in the system tray to indicate that it is running in the background. Hover over this button to display a tooltip showing the port number. If the _Secure_ option was set to **_On_** , the tooltip shows "**;secure** " after the port number (e.g. PxPlus-_version_number_ :Ezweb Server (8088;secure)). _(Support to show EZWeb running in secure mode was added in PxPlus 2022.)_ When a different port number is entered, the _Launch EZWeb_ button immediately reflects the port number specified, indicating that EZWeb will launch on that port when this button is clicked.

#### **Note:**  
If you launch multiple instances of EZWeb Server at a time, an EZWeb Server button displays in the system tray for each instance.  
  
To keep track of the port number on which each instance is running, hover over each EZWeb button to display the tooltip showing the port number.  
  
_Save_ |  Saves the port number, along with the secure settings (if specified). The next time you invoke the **Launch EZWeb Server** window, it will default to the saved port number and secure settings. If you only want to run an instance of EZWeb Server on a particular port but not save that port number as the default, then **_do not_** click the _Save_ button. Simply select the _Launch EZWeb_ button to start EZWeb on the port you just specified.  
_Exit_ |  Closes the **Launch EZWeb Server** window without launching EZWeb Server and does not save any changes.  
  
_(The ability to launch and save specific port numbers was added in PxPlus 2016.)  
__(The EZWeb tooltip was added to the system tray in PxPlus 2016.)_

**_Method 2_** \- **_From the Command Line:_**

> pxplus.exe -bkg *ezweb\server [-arg  _port_ **[**_security_**[**_root_**]]]**

**_Where:_**

_port_ |  This argument is used to set the port number to be used by EZWeb. If the _port_ argument is omitted, the port will default to the port defined in _ezweb.conf_ , and if that is not defined, then port 80 will be used.  
---|---  
_security_ |  This argument is used to indicate that the server is to run using SSL/TLS and to provide the pathname to a PEM or PFX file, which contains the server certificate information. If the pathname contains spaces or one of the options below is needed, this argument should be within double quotes. Options are supported and can be included by appending a space and one of the following to the security argument: |  **privkey** =_pathname_ |  This option is used to indicate the PEM file, which contains the certificate private key. This is needed only if you have defined the security argument and have separate PEM files for the certificate and private key.  
---|---  
**pfxpswd** =_password_ |  This option is used to indicate the PFX certificate password if a PFX certificate is defined for the security argument. This can be blank or not defined to define an empty password.  
  
The **secure** directive in the _ezweb.conf_ file overrides this argument if defined. If neither this argument nor the **secure** directive in _ezweb.conf_ is defined, EZWeb will run without SSL/TLS encryption.

Renewed certificates are automatically reloaded. See **[Automatic Security Certificate Reload](EZweb%20Introduction.htm#Mark4)**.

_(PFX support, the privkey option and the pfxpswd directive were added in PxPlus 2019.)_  
  
_root_ |  This argument is used to change the default root directory for EZWeb. The root directive in the _ezweb.conf_ file overrides this argument if defined. If neither this argument nor the **secure** directive in _ezweb.conf_ is defined, EZWeb will run in the ***plus/inomads** directory.  
  
## Examples

**_Example 1_** \- To run the EZWeb Server on port 8080, you could use the following Command lines:

|  **_Windows:_**  
---|---  
  
> | 

> "C:\PVX Plus Technologies\PVX Plus\pxplus.exe" -bkg *ezweb\server -arg 8080  
  
|  **_UNIX/Linux:_**  
  
> | 

> /pxplus/pxplus "*ezweb/server" -arg 8080  
  
**_Example 2_** \- If you have a security certificate called  _mycert.pem_ that you would like to use, then your Command line would look something like this (note the use of port **443** , which is the default port for secure HTTPS):

|  **_Windows:_**  
---|---  
  
> | 

> "C:\PVX Plus Technologies\PVX Plus\pxplus.exe" -bkg *ezweb\server -arg 443 mycert.pem  
  
|  **_UNIX/Linux:_**  
  
> | 

> /pxplus/pxplus "*ezweb/server" -arg 443 mycert.pem  
  
**_Example 3_** \- If using an SSL certificate that is not in the single PEM file format, then your Command line would look something like this (note the use of port **443** , which is the default port for secure HTTPS):

|  **_Windows:_**  
---|---  
  
> | 

> "C:\PVX Plus Technologies\PVX Plus\pxplus.exe" -bkg *ezweb\server -arg 443 "C:\Users\User\SSL Certificate\mycert.pfx pfxpswd=mypassword"  
  
|  **_UNIX/Linux:_**  
  
> | 

> /pxplus/pxplus "*ezweb/server" -arg 443 "/home/user/ssl certificates/mycert.pem privkey=/home/user/ssl certificates/mykey.pem"  
  
## Shutting Down EZWeb Server

To shut down EZWeb Server, use one of the following methods:

**Method** |  **Description**  
---|---  
EZWeb Server button (System Tray) |  Click the EZWeb Server button and then click on the tooltip _"Shutdown EzWeb server (xxxx / y users)"_ (**_where_** _xxxx_ = port number and _y_ = user count). If EZWeb Server is running in secure (HTTPS) mode, the tooltip shows "**;secure** " after the port number (e.g. Shutdown EzWeb server (8088;secure / 4 users)). _(EZWeb Server shutdown capability was added to the system tray in PxPlus 2016.)  
__(Support to show EZWeb running in secure mode was added in PxPlus 2022.)  
(The user count in the tooltip was added in PxPlus 2023.)_  
Enter a remote termination request |  To invoke a remote termination request, send the following URL: **http://_servername_/ShutDown?_uuuuuuu-ssssssss_** **_Where:_** |  __ |  _uuuuuuu_ |  User ID of the user who launched the EZWeb process  
---|---|---  
__ |  _ssssssss_ |  8-digit Serial Number of the PxPlus used to run EZWeb  
  
The _uuuuuuu-ssssssss_ code can be overridden in a *EZWeb config file with _ShutDown_ _=xxxxxx_ where _xxxxxx_ is the value required (no limit) instead of User ID and Serial Number.  
  
##  Installing as a Service on Windows

EZWeb Server can be installed as a Windows service using one of the following methods:

**_Method 1_** \- From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**:

> Expand the _Installation and Setup_ category and select _Install Windows Services_ to launch the **[Install Windows Services](../Install%20Windows%20Services.md)** interface.  
>   
>  From the _Type of Service_ drop box, select _EZWeb_ _Server_. After entering the service settings in the grid, select the _Install_ button.

**_Method 2_** \- Run the program ***ezweb/install** from the Command line:

> It will ask you if you want to install the service.  
>   
> If so, you will need to enter the _Starting Directory_ (default is the ***ezweb** directory), the _SSL Certificate_ and the _Port Number_ to use:  
>   
>  ->run "*ezweb/install"  
>  Service Not currently installed  
>  Do you want to install the service (Y/N):Y  
>  Starting directory............:C:\pxplus\lib\\_ezweb  
>  SSL Certificate...............:  
>  Port to use...................:80  
>   
> To delete or change the service settings, simply re-run ***ezweb/install**.

Once installed, you will need to run the Windows _Control Panel_ and start the service manually. If desired, you can set the service to _automatically_ start; however, the install script, by default, sets the service to _Manual_ start.

## Log Files

**_Error Log_**

You can create a directory in the EZWeb start directory called **ezweb_logs** (preferred by EZWeb) or create the directory called ***ezweb/logs**. The EZWeb Server will record each time it starts or stops, as well as any internal errors that it encounters, in textual log files within this new directory.

_(Support for allowing an alternative directory was added in PxPlus 2023.)_

The log files will be named:

> _YYYY-MM.log_

**_Where:_**

> _YYYY_ is the current year.  
> _MM_ is the current month.

These can be deleted at any time, if required.

**_Access Log_**

The **[accesslog _pathname_](EZweb%20Introduction.htm#Mark15)** directive is used to specify a location for the log file and enable the access log. The access log records all requests processed by the server. 

_(Support for using an access log was added in PxPlus 2023.)_

##  Automatic Security Certificate Reload

All SSL/TLS security certificates have an expiry date and time. To avoid having users receive a security warning from the Web browser preventing access, it is important to renew SSL/TLS security certificates before they expire. After renewing the certificate, a manual restart of EZWeb is required to use it if using a version of PxPlus **_prior_** to PxPlus 2019.

**_As of PxPlus 2019_** , a restart of EZWeb is no longer required to use a renewed certificate. EZWeb will check for a renewed SSL/TLS security certificate as part of the first request after midnight. If a renewed certificate is found, EZWeb will automatically be updated to use the renewed certificate. Following that, any new connections will use the renewed certificate. Any existing connections will become unresponsive; however, refreshing the page will restore the session, and after that, it will use the renewed certificate.

It is important to keep this capability in mind if using a free Certificate Authority, such as _Let's Encrypt_ , to get SSL/TLS certificates. Using _Let's Encrypt_ , certificates expire in 90 days but can automatically be renewed.

For information on using _Let's Encrypt_ with the PxPlus EZWeb Server, see **[Let's Encrypt SSL/TLS Certificates](../letsencrypt.md)**.

_(EZWeb Automatic Security Certificate Reload was added in PxPlus 2019.)_
