# WindX™ Thin-Client

**NTHost /NTSlave** |   
---|---  
  
The NTHost/NTSlave Client-Server environment consists of two distinct elements:

|  ***NTHost** |  Host/Server process  
---|---|---  
|  ***NTSlave** |  Client/Workstation process  
  
On the host computer, the program *NTHost is run to monitor incoming requests from client PCs and to initiate new processes to service these requests. Whenever a new request comes it will launch a new instance of PxPlus which the workstation will ultimately connect to.

On the client computer system, the program *NTSlave begins the initial connection to the host by requesting a new session to be started. Once the session is started, *NTHost will send back the TCP/IP port number to the new process. This port number is used by *NTSlave, which connects to this process then passes control to WindX to handle all of the terminal and graphical user interface interactions.

For the initial connection between *NTHost and *NTSlave to be established, *NTSlave must know the port number that *NTHost is monitoring. By default, this is port number 10000; however, it can be changed in the Command line used to start both programs.

As *NTHost initiates new processes, it assigns new port numbers in increments starting with the port number one higher than the *NTHost port assignment. By default, up to a maximum of 1000 sequential port numbers can be assigned.

**_Using SSL/TLS_**

*NTHost can be set up to use SSL/TLS using the **-SSL=**_pathtocert_ Command line argument. On Windows, this argument can be in any order. On UNIX/Linux, it can be any argument after the third argument.

*NTSlave can be set up to use SSL/TLS using the **-SSL** Command line argument that can be in any order.

See **[SSL/TLS Security Certificates](../ssl_tls_certificates.md)**.

## *NTHost Setup

**_Microsoft Windows_**

To run *NTHost on a Windows PC, set up a shortcut with the following Command line:

> C:\pxplus\pxplus.exe -BKG *nthost  _(assuming C:\pxplus is where PxPlus is installed)_

Three optional arguments that can be supplied are as follows:

  * The port number that *NTHost is to monitor (and the clients to connect to)
  * The maximum port number to use for connections
  * The ability to request using the TCP/IP KEEPALIVE functionality



These can be specified in the Command line as program arguments.

**_Example:_**

> C:\pxplus\pxplus.exe -BKG *nthost -ARG 10000 11999 -k

These arguments direct *NTHost to monitor socket 10000 and assign spawned sessions to port numbers 10001 through 11999. If no arguments are specified, then *NTHost monitors port 10000 and assigns port numbers 10001 through 10999. Each session employs the TCP/IP KEEPALIVE functionality to periodically send commands to a connection to ensure that it is still active.

To run *NTHost, simply launch this shortcut or place it in the PC's Windows Start_up folder to have it run each time the machine is restarted.

During the software installation process, the Windows installer will create a shortcut for *NTHost automatically.

**_Running as a Windows Service_**

If you want to run *NTHost as an NT service, you can use the program _srvany.exe_ that comes with the NT Resource Kit from Microsoft. Once _srvany.exe_ is installed, use _instsrv.exe_ to define your service to NT. See the Microsoft NT Resource Kit for additional details on this process.

#### **Note:**  
On Windows, it is important to include the -BKG options on the Command line. If omitted, the *NTHost process itself will occupy a user slot on your system thus reducing the number of potential active users your system can run. The -BKG parameter should immediately follow the ._exe_ pathname.

**_UNIX/Linux Setup_**

Setting up *NTHost on UNIX is a little more complicated and involves changing the system process 'inittab'. **_This should only be done by someone who is knowledgeable in UNIX_**.

To run *NTHost as a UNIX service, add a line similar to the following to the system '_inittab_ ' file (usually in the directory _/etc/_):

> _pvx1:235:respawn:/pxplus/pxplus \\*nthost_ -ARG port _uid_ _umask_ >/dev/null </dev/null

**_Where:_**

|  _pvx1:235:respawn_ |  '_inittab_ ' parameters that cause UNIX to spawn *NTHost at all normal execution levels and keep it running.

#### **Note:**  
The values 235 may vary based on the OS (generally 235 works for most Linux systems).  
  
---|---|---  
|  _/pxplus/pxplus_ |  Location of the PxPlus executable.  
|  _\\*nthost_ |  Name of *NTHost program name.

#### **Note:**  
The leading backslash is needed to avoid UNIX/Linux treating the asterisk as a wildcard for file name pattern matching.  
  
|  _uid_ |  UNIX User ID used by the spawned process. This must be the **_name_** of the User ID, **_not_** the UID number (e.g. root).  
|  _umask_ |  '_umask_ ' setting for all spawned tasks used when creating files. (The _umask_ value is used to define file permissions.)  
  
Three optional parameters that may be specified after the _umask_ value are as follows:

  * The maximum port number to assign to the spawned sessions
  * A -V which indicates that debugging information is to be sent to the system console
  * A -K that activates the TCP/IP KEEPALIVE functionality



#### **Note:**  
On UNIX, it is important to include the input/output redirection to _/dev/null_ on your Command line. If omitted, the *NTHost process itself will occupy a user slot on your system thus reducing the number of potential active users your system can run.

**_UserID_** ** _Field on UNIX/Linux_**

When the ***** NTHost launches new sessions, it does so via an 'su' command. This ensures that applications do not run as root (which maintains system security).

Since the host program will be spawned from the '_inittab_ ', it will be running with full 'root' privileges. This means that the host is capable of running any application, and can utilize 'su' to launch an application under another user ID.

Special care must be taken when using 'su'. The user ID chosen must be valid and the password must not have expired. If applications refuse to launch, then it is likely that the password for the user ID has expired, or there is an administrative lock on the account. The user account should not launch anything automatically via its profile since the new session picks up the characteristics of the user id being used.

#### **Note:**  
When running under an OS such as IBM AIX, characteristics such as _umask_ in the user's account setup may need to be modified, as they will override the Command line arguments.  
  
Another potential problem is the number of processes a single user may run. Since all applications are spawned as this user, the kernel may need to be re-tuned to increase the number of processes per user.

## *NTSlave Setup

**_Microsoft Windows Workstation Setup_**

Assuming _C:\pxplus_ is where PxPlus is installed, the *NTSlave client Command line would appear as follows:

> C:\pxplus\pxplus.exe *ntslave -arg  _server prog port#_

**_Where:_**

|  _server_ |  This is either the IP address or host name of the host system where *NTHost is running.  
---|---|---  
|  _prog_ |  Contains the name of program to run. If no program name is specified, then a console mode session will be started for development purposes.  
|  _port_ |  TCP/IP Socket Number that the *NTHost is monitoring.  
  
The *NTSlave program will connect to any server running *NTHost, whether it is Windows or UNIX. This makes it possible to have many shortcuts connecting to different servers, all running at the same time.
