# Apache HTTP Interface

**Apache Configuration** |   
---|---  
  
##  Configuring Apache

Apache uses a configuration file **_httpd.conf_** that is normally found either in **_/etc/httpd/conf_** or **_/etc/apache2_** on UNIX or in the _Program Files_ directory for Apache on Windows. Apart from changing this configuration file to meet your own needs, you will need to add a few lines to define the CGI interface for PxPlus.

Two methods can be employed to configure Apache to run the PxPlus interface. You can define it either as a **_handler_** based on a file suffix or as a **_script processor_** based on a pattern match.

## Defining PxPlus Interface as a Handler

To define the interface as a handler, the following lines need to be added to the Apache configuration:

> #  
>  # PxPlus program CGI handler  
>  #  
> AddHandler pxplus-srvr .pxp .pvp  
>  Action pxplus-srvr /cgi-bin/pxp.cgi

The first line defines the suffixes that the CGI interface will handle. In the above example, any requests for a file with a _.pxp_ or _.pvp_ suffix will be handled by the **_pxplus-srvr_** interface.

The second line identifies that the **_pxplus-srvr_** interface will run the CGI script in **_/cgi-bin/pxp.cgi_** file.

When configured as a handler, the requests must come in with a standard/defined suffix such as _.pxp_ or _.pvp_. This suffix must be the last part of the requested file name; thus, you cannot use entry points. (For example, _www.mysite.com/orders/entry.pxp;Chk_cust_ will not work since _.pxp_ is not the last part of the request.)

## Defining PxPlus Interface as a Script Processor

To define the interface as a Script processor, the following line needs to be added to the Apache configuration:

> #  
>  # PxPlus as a script processor  
>  #  
> ScriptAliasMatch ** _< regexp>_** /var/www/cgi-bin/pxp.cgi

The ScriptAliasMatch allows you to specify a regular expression that will be used to match up with the incoming request. If the request matches the regular expression, the CGI script file will be processed. Some typical regular expressions are:

|  \\.pxp |  Request contains ".pxp"  
---|---|---  
|  /prog/ |  Request contains "/prog/"  
|  /orders/*.pxp |  Request contains request for /orders/ directory and has _pxp_ following  
  
#### **Note:**  
The actual configuration of the Apache HTTP server is beyond the scope of this document. Refer to the documentation provided with the Apache software or visit **<https://www.apache.org/>** for details on the general configuration and setup of an Apache HTTP server.

## CGI Script File on UNIX/Linux

You then need to create the CGI script file **_pxp.cgi_**. This file should contain the following:

> #!/bin/bash  
>  /pxplus/pxplus /pxplus/lib/_plus/apache/pxp_cgi -arg  _< args>_

It must also be set with execute permissions for the Apache server.

On some UNIX systems, you may need to include the following line just before the command to run PxPlus (/pxplus/pxplus):

> export TERM=unknown

## CGI Script File on Windows

The CGI script file for Windows is fundamentally the same as the file on UNIX; however, instead of running the OS shell script (bash), you will run PxPlus directly.

A typical CGI script file for Windows would be as follows:

> #!"C:\Program Files\\...\\...\pxplus.exe" -bkg *plus/apache/pxp_cgi -arg debug

The actual pathname to the _pxplus.exe_ will need to be tailored to suite your installation and the version number of PxPlus you are using. The quotes around the pathname are needed since the pathname will likely contain spaces. (For Windows, make sure you include the **-BKG** option to avoid user count problems.)

#### **Note:**  
The **_pxp.cgi_** file **_must_** contain at least one Line Feed after the command that should be started.

See **[Sample Demo Windows Installation](sampleinstall.md)** for details on how to do a sample/demo Windows installation.

**_Arguments Used by pxp_cgi Program_**

The **_pxp_cgi_** program can be passed a number of parameters in the form of command line arguments in the CGI script file. These arguments are listed below.

**Arg Value** |  **Purpose/Function**  
---|---  
**debug** |  Indicates that the process is to be run in debug mode. The output will be deferred until the processing terminates properly. If an error should occur, a variable dump will be reported.  
**cookie**  _or_ **cookies** |  Indicates that the programs being run are using the **_*web/cookie_** sub-program to generate and send cookies. If this variable is not set, only inbound cookies will be supported. Sending of cookies to the workstation will not be supported. This feature defers output until after the program completes thus performance is slightly slower than when cookies are not supported. The **_pxp_cgi_** program also supports the storing of cookies. _(added in PxPlus 2016)_  
**noglobal** |  Prevents any HTTP request from altering the value of any global variable. This can increase the security of the Web site should the applications utilize global variables.

#### **Note:**  
The global variables used to locate the application and control cookies are never allowed to be altered.  
  
**task=** ** _nn_** |  Allows the designer to establish the maximum number of concurrent tasks that the server will process. If omitted, the system will support up to the maximum user count on the PxPlus license. This option allows for sharing user counts between Web services and other PxPlus users by limiting the number of Web tasks active at any given time.  
**timeout=** ** _nn_** |  Changes the default 30 second timeout for the maximum run time that a task can take. If a spawned task takes longer than the number of seconds in the timeout period, the system will terminate the task and report an error.  
**wait=** ** _nn_** |  This option can be used in conjunction with the **Task=_nn_** option to set a limit as to how long a Web user will wait (in seconds) until an online task is available. This allows a fallback for the Apache interface to borrow non-Web users in periods of heavy load. **_Example:_** **'-arg Task=5 Wait=3'** would normally allow up to 5 concurrent Web tasks; however, should a Web task wait longer than 3 seconds for a slot to become available, the system will allow the task to start regardless. Wait=0 (the default) will cause the task to wait forever.  
  
Multiple script files can be used to define different options by using different file names and Apache configuration lines.

## Dynamic Timeout Control

Using the **"*system"** object, your application can change and/or disable the timeout settings. Simply instantiate the "*system" object, and then invoke the **'SetTimer( )** method passing it the new timeout value in seconds. Passing it a value of zero disables the timeout.

> sysobj = new("*system")  
>  ...  
> sysobj'SetTimer( new_timeout )

#### **Security Note:**  
On some Linux systems (Fedora Core in particular), the Apache server is restricted as to which directories it can access using SELinux. You may have to alter these settings to run the Apache server.

## Start_Up Program

Like any PxPlus application, whenever the Apache server starts up a PxPlus application, it will first run the **START_UP** program located in the **_cgi_ _-bin_** directory. This start up program can establish global variables, open files and set other environment variables, as required.

If desired, the **START_UP** program can be located elsewhere or given a different name by setting the system ENV variable **"PVXSTART"** prior to launching PxPlus. This environment variable can be set in the Apache configuration file using the **SetEnv** directive. This allows you to have multiple start_ups, each for different sites.

**_Example:_**

If you had multiple 'Virtual sites' within your Apache configuration and wanted _siteabc.pvxplus.com_ to use **Start_ABC** as its start-up, your configuration could be set to:

> <VirtualHost 192.168.1.200:80>  
> ServerName **siteabc.pvxplus.com**  
>  DocumentRoot "/var/www/siteabc"  
> DirectoryIndex welcome.pxp  
> **SetEnv PVXSTART Start_ABC   
> **Alias /images/ "/var/www/common/images/"  
>  </VirtualHost>

##  HTTP Call Configuration

If the Apache server is to service PxPlus **CALL "[HTTP: ...]"** or **CALL "[HTTPS: ...]"** requests (see [**[HTTP] Command Tag**](../command_tags/http.htm)), it will need to include the following line in the Apache configuration:

> #  
>  # PxPlus HTTP interface CGI definition   
>  #  
> AddHandler pxplus-call .pxc  
>  Action pxplus-call /cgi-bin/pxcall.cgi

The first line defines the _.pxc_ suffix that is required for any CALLed program and will be provided within the SOAP/XML request generated by the caller.

The second line identifies that the **_pxplus_ _-call_** interface will run the CGI script in **_/cgi-bin/pxcall.cgi_** file.

**_CALL "[HTTP:...]" CGI Script File on UNIX/Linux_**

You then need to create the CGI script file **_pxcall.cgi_**. This file should contain the following:

> #!/bin/bash  
>  /pxplus/pxplus /pxplus/lib/_plus/apache/pxp_call

It must also be set with execute permissions for the Apache server.

**_CALL "[HTTP:...]" CGI Script File on Windows_**

The CGI script file for windows is fundamentally the same as the file on UNIX; however, instead of running the OS shell script (bash), you will run PxPlus directly. A typical CGI script file for Windows would be as follows:

> #!"C:\Program Files\\...\\...\pxplus.exe" *plus/apache/pxp_call

The actual pathname to the _pxplus.exe_ will need to be tailored to suit your installation and the version number of PxPlus you are using. The quotes around the pathname are needed since the pathname will likely contain spaces.

#### **Note:**  
Samples of the UNIX and Windows _cgi_ files are included in the files **_unix.pxcall.cgi_** and **_windows.pxcall.cgi_** found in the **_"_plus/apache"_** library directory.
