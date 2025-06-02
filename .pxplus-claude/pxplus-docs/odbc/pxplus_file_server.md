# PxPlus SQL ODBC

**PxPlus SQL Server**|   
---|---  
  
The PxPlus SQL Server allows the PxPlus SQL ODBC Driver, the PxPlus SQL Command Line Client, or any application using the PVKIO library to access PxPlus data on a remote system. The SQL Server can run on Windows and UNIX/Linux boxes; therefore, for example, it allows an ODBC application on Windows to access data on a UNIX/Linux box.

A Windows version and a UNIX/Linux version of the PxPlus SQL Server are available. The Windows version of the PxPlus SQL Server has its own installer. For installation procedures, see **[ODBC Product Installation and Activation (Windows)](installation_procedures/odbc_product_installation_activation.md)**.

The UNIX/Linux version of the PxPlus SQL Server has a stand-alone installation package. For installation procedures, see **[ODBC Product Installation and Activation (UNIX/Linux)](installation_procedures/odbc_product_installation_activation_unix.md)**.

Using a Web browser, you can check that the PxPlus SQL server is running correctly. See **[Checking the Server (Info Page)](pxplus_file_server.htm#Mark2)**.

## Running the Server

Information for running PxPlus SQL Server on Windows and on UNIX/Linux is provided below.

**_Windows_**

PxPlus SQL Server can be run as a Windows service in the background. You can install PxPlus SQL Server as a service using the **NT Service** tab in the **PxPlus SQL Server Configuration** application (_pxpsconf.exe_). See **[PxPlus SQL Server Configuration (Windows)](configuration_procedures/server_settings_windows.md)**.

Once it is installed as a service, you can control the service by using the **Windows Services** dialog that is accessed through the Windows _Start_ menu by searching for "Services".

You can start PxPlus SQL Server to run interactively from the _Start_ menu entry. You can also double click the executable file name (_pxpsconf.exe_) from within the PxPlus installation folder.

When run interactively, a dialog will display, stating that the PxPlus SQL Server is running. If SSL is enabled, the word "_(Secure)_ " is included at the end of _The Server is Running_ message. The dialog also includes the PxPlus SQL Server and OpenSSL version information. A _Shutdown_ button is provided to allow you to shut down the server.

> **_UNIX/Linux_**

Run the server from the Command Line using the following syntax:

> _dir_ _/_ pxpsqlsvr [-f _configfile_] [-p _tcpport_] [-ssl  _sslcertpath_]

**_Where:_**

_dir_ |  Directory path; e.g. /usr/pxpsqlsvr.  
---|---  
**-f**  _configfile_ |  Path and file name of the SQL Server configuration file. If no configuration file is located, the server will not start, and an error message will be displayed or printed to the log file (if debug is enabled). See [**Configuration File**](configuration_procedures/server_settings_unix_linux.md). If this option is not specified, the server defaults to: ./pxpsqlsvr.conf _followed by_  
/usr/pxpsqlsvr/pxpsqlsvr.conf _then_  
/usr/pvxodbc/pvxodbs.conf  
**-p**  _tcpport_ |  TCP/IP port number on which the server is to listen. This overrides the port number specified in the _pxpsqlsvr.conf_ file.  
**-ssl**  _sslcertpath_ |  Path and file name of your SSL Certificate file. If given, it will enable SSL secure communication. _(SSL support was added in version 8.00.0000/PxPlus 2024.)_  
  
**_Other Server Arguments_**

The following arguments can also be used with the PxPlus SQL Server executable _(pxpsqlsvr)_ at the Command Line:

**-h**  _or_**\--help** |  Display a message listing the available command line options with brief descriptions.  
---|---  
**-v**  _or_**\--version** |  Display the PxPlus SQL Server version information, the OpenSSL version information, and the Copyright date. **_Example:_** PxPlus SQL Server Ver:8.00.0000 For: Linux  
OpenSSL 3.0.7 1 Nov 2022  
Copyright (c) 2011-2024 PVX Plus Technologies Ltd.  
**-d**  _or_**\--debug** |  Enable output to the debug log file _pxpsqlsvr.log_.  
**-s**  _or_**\--shutdown** |  Server shutdown. See **Shutting Down the Server**.  
  
##  Checking the Server (Info Page)

Using a Web browser, you can check that the PxPlus SQL server is running correctly and get usage information by pointing at the PxPlus SQL Server IP address and port.

In the browser bar, you would enter:

_sql_server_ip:sql_server_port_

**_Example:_**

Example for server on 192.168.1.104 port 20223:

> http[s]://192.168.1.104:20223

Use **http://** if SSL is not enabled and use **https://** if SSL is enabled.

If the server is running, this will load the **Info** page, which displays information about the server and its usage:

> Hello from: PxPlus SQL Server (Secure)

> Version: 8.00.0000  
>  OpenSSL 3.1.0 14 Mar 2024  
>  Registered: Yes (If not registered, it will show "Registered: Demo".)

> Usage Info

> Number of user slots in use: 0  
>  Number of connections: 0  
>  Number of files opened: 0 (The number of files opened will only display if the PxPlus SQL Server is running on Windows.)

If the PxPlus SQL Server is running with _SSL Secure Communications_ enabled, you will see the word "_(Secure)_ " at the end of the Hello message. If running without SSL, the word "_(Secure)_ " will not display after the Hello message.

_(Support for loading an Info page was added in PxPlus 2023.)  
(SSL support was added in version 8.00.0000/PxPlus 2024.)_

##  Shutting Down the Server

The PxPlus SQL Server records the process ID (_pid_) of the server in the _pxpsqlsvr.pid_ file to assist in shutting down the server.

**_Example:_**

> pxpsqlsvr -s **_or_** _  
> _ pxpsqlsvr --shutdown 

Provided the server can locate the _pxpsqlsvr.pid_ file, the running server will be shut down properly; otherwise, an error message will be displayed on standard out. Alternately, the server can be shut down using a SIGHUP signal:

> kill -1 _pid_

**_Where:_**

> _pid_ is the process ID of the PxPlus SQL Server, _pxpsqlsvr_.
