# Application Server

**Sample Setup Procedure**|   
---|---  
  
This page describes a typical procedure for setting up and running the Application Server for use with a PxPlus client-server application. Configuration details are slightly different, depending on whether the server is a Windows or a UNIX/Linux system.

The procedure uses the following sample PxPlus application saved as _app1_ :

> 0010 PRINT 'CS'  
>  0020 BEGIN:  
>  0030 PRINT @(0,0),"Wecome to the Applicaton Server",  
>  0040 PRINT @(0,3),"You are currently running "+PGN,  
>  0050 PRINT @(0,4),"Local Work Directory: "+LWD,  
>  0060 PRINT @(0,5),"User ID: "+WHO  
>  0070 PRINT @(0,7),"Press any key to escape to console mode:",  
>  0080 OBTAIN (0,SIZ=1)X$  
>  0090 ESCAPE  
>  0100 GOTO BEGIN

**_Windows:_** |  The Windows configuration assumes that _app1_ is saved on the server system in the directory _C:\app\_.  
---|---  
**_UNIX/Linux:_** |  The UNIX\Linux configuration assumes that _app1_ is saved on the server system in the directory _/home/user1/app/_. UNIX\Linux examples also assume a user login on a machine named _user1_ , which has access to run PxPlus. This user also has a home directory of _/home/users1/_ and a password of _password_. Change these references to your user name, password, and home directory.  
  
## Step 1: Start the Configuration Utility

Launch the user interface to the **[Server Configuration](Server%20Configuration.md)** utility.

**_Windows:_** |  From the Windows Start menu, select Start > Programs > PVX Plus Technologies > PxPlus _version_number_ > Application Server > App Server Configuration. Another method is to enter the following in PxPlus console mode: **RUN "*appserv/config"**.  
---|---  
**_UNIX/Linux:_** |  Start *NTHost. At the system prompt, enter: **#\usr\pvx \\*nthost -arg 10000 root 000 10005**. This will launch an *NTHost session on the server as user ID root starting from port 10000 to 10005.  
  
## Step 2: Create a New Application Server

Once the **[Server Configuration](Server%20Configuration.htm#mainpanel)** utility is started, the interface will appear in a new window. It is divided into tabbed panels, indicating the different options and fields available for configuring the new server.

Enter a new name in the _Server_ field (e.g. _app_), then click the _New_ button.

## Step 3: Specify Server Properties

Click on the **[Server](Server%20Configuration.htm#server)** tab to begin entering the primary attributes for the currently selected server.

**_Windows:_** |  In the **Server** panel, keep Socket 10000, select the _KeepAlives_ check box, and change the _Start-In Directory_ to "_C:\app\_ ".  
---|---  
**_UNIX/Linux:_** |  In the **Server** panel, keep Socket 10000, enter _User Name_ (**Default User** section) as _user1_ , and change the _Start-In Directory_ to "_/home/user1/app_ ".  
  
## Step 4: Define Client Preferences

In the **[Clients](Server%20Configuration.htm#clients)** panel, ensure that the _Client Must Login_ check box is selected, and keep the following (default) information for these **Timeouts (Seconds)** options:

_New Connections_ |  60  
---|---  
_User Requests_ |  300  
_Admin Requests_ |  1800  
_Re-Connect Timeout_ |  180  
  
## Step 5: Configure Application Properties

In the **[Apps](Server%20Configuration.htm#apps)** panel, click the _New_ button. In the **[New - App Props](Server%20Configuration.htm#applicationprops)** panel, enter _App Name_ as _app1_ and _Lead Program_ as _app1_. From the _Client Type_ drop box, select _Any Client Type_.

## Step 6: Configure User Properties

In the **[Users](Server%20Configuration.htm#users)** panel, select the _New_ button.

**_Windows:_** |  In the **[New/Current Users Properties](Server%20Configuration.htm#usersprops)** panel, enter _Remote User Name_ as _user1_ , _Full Name_ as _user1_ , and _Password_ as _password_. Select the _User Can Change Password_ check box. Select _Run Any Configured App_ from the drop box in the **Miscellaneous** section.  
---|---  
**_UNIX/Linux:_** |  In the **[New/Current Users Properties](Server%20Configuration.htm#usersprops)** panel, enter _Remote User Name_ as _user1_ , _Full Name_ as _user1_ , and _Password_ as _password_ (i.e. valid user ID and password). Select the _User Can Change Password_ check box. Select _Run Any Configured App_ from the drop box in the **Miscellaneous** section. Select the _Server User Name Same as Remote User Name_ check box.  
  
## Step 7: Start the Server

In the **[Server](Server%20Configuration.htm#server)** panel, click the _Start_ button to run the server. Once the server has started, a PID (Process ID) will appear in the _Status_ box to indicate that the server is now running.

## Step 8: Run the WindX Client

On the client system, ensure that WindX (Plug-in) is installed. Create a shortcut that includes a _Target_ similar to the following:

> _"C:\pxplus\pxplus.exe"_ **-mn**  _"*client"_ **-ARG** 1.160.10.240 10000 _"app1"_

**_Where:_**

_"C:\pxplus\pxplus.exe"_ |  **_Example path_** to PxPlus on the client system.  
---|---  
**-mn** |  Starts minimized.  
_"*client"_ |  PxPlus program used to connect the client to the Application Server.  
**-ARG** |  Keyword marking the start of the argument list.  
1.160.10.240 |  **_Example IP address_** of the server.  
10000 |  TCP/IP port (socket) to which the server daemon is listening.  
_"app1"_ |  Lead program that the server is to run.  
  
When you click on (run) the shortcut, the **Client Log In** dialog will display. Enter _User Name_ as _user1_ and _Password_ as _password_ , then click OK to connect to the Application Server. If the connection is successful, the WindX session will start up in a new interface window.
