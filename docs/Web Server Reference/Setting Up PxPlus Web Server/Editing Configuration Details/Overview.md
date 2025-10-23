# Web Server Reference

**Editing Configuration Details** |  **__**  
---|---  
  
## Edit Button

When you click on the _Edit_ button in the **Web Server Status/Configuration** display, the **Details Configuration** dialogue box appears. The prompts and set up information are listed in the charts in the following sections for the three main areas of this dialogue box:

  * Server Basics (i.e. port monitor basics)
  * Port Style
  * Task Handlers



You can create up to 100 port monitors (each with a different "root" directory, if desired). Each port monitor must oversee a different, unique TCP/IP port (socket number).

##  Server Basics Configuration

**Prompt** |  **Web Server Basics**  
---|---  
_Server_ |  Your server name can be up to 14 characters long and is case sensitive. The server name is solely for your reference.  
  
**_Example:_** Test Server  
_Description_ |  Using your site name is recommended, e.g. **www.mydomain.com**. This description is used for Directory Browsing if the browser does not send a host_name.  
_TCP Socket_ |  This is the TCP/IP socket number you want this port monitor to oversee. **_Do not_** use a duplicate of one that is in use by other applications. Web servers typically default to port 80. You can override the default with any valid TCP socket number.   
  
**_Example:_** You can use **4000** as your port number to resolve a potential conflict with Apache, which defaults to port 80.  
  
(Valid range: 1 to 65535. Ports below 2000 are normally reserved for standard Internet applications, such as FTP and mail services.)  
_Default Root Dir_ |  The Web Server will treat this as the "Root" directory for a given port monitor and will restrict clients' access to files in this "root" directory and its sub-directories.  
  
**_Example:_** \pvx410\direxions\web\webroot If you make use of Virtual Directories, then the default Root directory will be used if either the browser does not send the HOST NAME typed in by the user or if you do not have a directory set up for the specific HOST NAME in your Virtual Directory Mapping. See **[Details Configuration](Overview.htm#details)**.  
_Default Doc_ |  You can declare one or more default document names, e.g. **home.htm**. When the client requests a Directory: |  (a) |  If you have declared default documents, then the Web Server responds to a browser's Directory request with the first of your listed default documents that exists in the directory. The Web Server scans the directory for default documents in the order in which they appear on your list.  
---|---  
(b) |  If you do not declare default document names (or none of the documents exist), then the Web Server responds to a browser's Directory request in one of two possible ways: If Directory Browsing is _On_ , the Web Server returns a directory listing.  
If Directory Browsing is _Off_ , the Web Server returns an **_Error 403 Forbidden_**. See **[Port Style Configuration](Overview.htm#portstyle)**.  
_Secure (HTTPS)_ |  Selecting this check box tells the system that the server supports HTTPS. When selected, the _Cert/Key_ field becomes enabled. A Certificate/Key file must also be provided.  
_Cert/Key_ |  **_(Available when the Secure (HTTPS) check box is selected)_** Specify the pathname of the file that contains both your SSL Certificate and Key.  
  
##  Port Style Configuration

**Prompt** |  **Port Style**  
---|---  
_Deny Start_ |  **_On:_** The port monitor cannot be started. If the port monitor is already running when you toggle this _On_ , it will continue to run until you stop it. Then it cannot be restarted.  
  
**_Off:_** The base launcher will automatically start the port monitor or you can manually start it.  
_Server Enabled_ |  **_On:_** The port monitor is available to serve incoming requests from clients.  
  
** _Off:_** Your port monitor returns a **_Server Busy_** message to any browser making a request. (The port monitor will still accept administration commands.)  
_Directory Browsing_ |  **_On:_** When the user requests a directory listing, the Web Server returns a directory listing page.

#### **Exception:   
**If you assigned a value in Default Document (see **[Default Doc](Overview.htm#defaultdoc)**) and that page exists in the directory requested, then the default document is returned instead of the directory listing.

**_Off:_** If you toggle this _Off_ and you have not assigned a Default Document (or the default document does not exist), the Web Server returns an **_Error 403 Forbidden_** to the client.  
  
##  Task Handlers Configuration

**Prompt** |  **Task Handlers**  
---|---  
_Max Idle Time (mins)_ |  In minutes. If your port monitor is idle for the given number of minutes, the Web Server shuts down extra task handlers to the minimum number you set (see below). Use value = 0 (zero minutes) to prevent the shutdown of your extra task handlers.  
_Min Task Handlers_ |  This is the minimum number of task handlers you want your given port monitor to launch automatically, e.g. 0 (zero is a valid value for minimum).  
_Max Task Handlers_ |  This is the maximum number of task handlers you want your given port monitor to launch, e.g. 5. The valid range is 1 to your total licensed number of task handlers (maximum 1,000). The Web Server can process many simultaneous incoming requests by passing the requests on to available task handlers for processing. 

#### **Important Note:   
**Each task handler requires an instance of PxPlus. It is important to watch your memory requirements.  
  
##  Details Configuration

**Button** |  **Purpose**  
---|---  
_Virtual Dirs_ |  Jumps to **Virtual Directories** mapping, where you can update, delete or display the virtual directory names you are using as your logical host names. You can map incoming requests by their declared host name to different directories on your hard drive. **_Example:_** With a port monitor listening to TCP port 80:

  * Default Root Dir: c:\inetpub\pvxweb
  * Host Name : www.pvxplus.com and Root Directory: c:\inetpub\pvxweb
  * Host Name: www.edias.com and Root Directory: c:\inetpub\edias

If a request does not include a host name, the Web Server will use the default Root directory. In addition, Web Server will change to the correct Root directory before running a PxPlus program.  
_Hit Counters_ |  Jumps to **Hit Counter Configuration** , which lists the number of hits and the date/time of the last hit for a given Web page or URL. You can add, remove and reset items in the Hit Counter list. Hit counters track how many times a specific URL on your site has been sent to a browser. Radio buttons give you three _Hit Counters_ options: |  _Off_ |  No hit count is tracked.  
---|---  
_Specified List_ |  Web Server only tracks the Web pages or URLs you list in the Hit Counter dialogue.  
_Automatic_ |  Web Server tracks all pages hit (whether or not they are in the hit list already).  
  
The Web Server returns the current hit count to you in the global system variable **%hit_counter**. See **[PxPlus Web Server Variables](../PxPlus%20Web%20Server%20Variables/Overview.md)**. The count is based on the URL of your PxPlus application.  
  
_Templates_ |  _(Templates will be available in a future version.)_  
_SMTP_ |  Jumps to **SMTP Configuration** where you can maintain the settings you want to use with PxPlus e-mail tools. If you assign a value for the SMTP Server name, it is available to your applications in a variable named **%SMTP_gateway$**. If you assign an SMTP Port number, it is available to your applications in a variable named **%SMTP_socket**. See **[PxPlus Web Server Variables](../PxPlus%20Web%20Server%20Variables/Overview.md)**.  
_Statistics_ |  Jumps to **Web Server Statistics** , which displays port monitor configuration details and statistics, including:

  * Server name, socket number and state (e.g. Stopped)
  * Status (e.g. Old Statistics from Thu, 14 Oct 1999 12:24:54)
  * Min and Max task handler settings, how many used and currently running
  * Number of requests served, maximum number and time in the queue

  
_Debug_ |  Jumps to **Debugging Configuration**. See **[Troubleshooting](../Troubleshooting/Overview.md)**.  
_Remove_ |  Use this button to remove a server (port monitor) from your Web Server configuration.
