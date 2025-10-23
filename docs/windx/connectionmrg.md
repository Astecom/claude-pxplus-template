# WindX™ Thin-Client  
  
**WindX Connection Manager** |   
---|---  
  
The WindX **Connection Manager** utility is designed to assist users that have multiple thin-client connections to multiple hosts. The **Connection Manager** provides users with the ability to define and save connection information in a control file that can later be recalled to simplify connection.

To invoke the **Connection Manager** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Client Server_ category and select _Launch Workstation_.  
From the Windows Start menu |  Locate _WindX Plugin_ and select _Client Launcher_.  
From the PxPlus Command line or a program |  Run the "launcher" program found in the WindX directory.

#### **Note:**  
The normal install for PxPlus and WindX creates a shortcut in the Start menu:  
  
"<install dir>\pxplus.exe" launcher  
_(starting directory is <install dir>\windx)_  
  
To force the **Connection Manager** to immediately connect to a specific server, specify the connection name in the Command Line as the first ARG to pass to PxPlus as follows (current directory is assumed to be the install directory):  
  
"<install dir>\pxplus.exe" windx/launcher -arg "Connection"  
  
## Connection Settings

Each connection can have the following information:

_Connection Name_ |  Name that is entered to identify the connection.  
---|---  
_Connection type_ |  Type of host, which can be one of the following: _PxPlus Simple Client Server, SSH, Application Server, NThost/NTslave_ or _Telnet_.  
_Server_ |  This is generally the IP address and/or host name.  
_Port_ |  Connection port, which can vary based on the _Connection type_. By default, Port 4093 is used by the Simple Client Server, Port 10000 for NThost or the Application Server, or Port 23 for Telnet.  
_Secure_ |  The Simple Client Server, Application Server and NThost/NTslave support SSL and allow this option to be selected, if needed.  
_Reset WindX/CS Security_ |  This button (located in the upper right corner of the WindX launcher) is used to reset the WindX/CS security settings. If selected, a prompt asking to confirm the security reset will display. _(The Reset WindX/CS Security button was added in PxPlus 2019.)_  
_Parameter(s)_ |  For additional connection parameters that can be specified, see **[Parameters](connectionmrg.htm#Mark3)**.  
_Default Host_ |  Check box that is used to define the connection as the default.  
  
For information on COM port and Telnet configurations, see **[WindX Configuration](Legacy%20Configuration/config.md)**.

#### **Note:**  
WindX debug mode can be enabled by setting **%wdx_dbg** to 1.

##  Saving, Recalling and Removing a Connection

Connections can be named and saved to the _< install dir>/windx/connections.dat_ data file. If desired, a "default" connection can be defined. If a default is present when the **Connection Manager** is run, the settings for the connection marked as _Default_ will be automatically loaded.

To **_create_** a new connection, enter the desired _Connection Name_ , _Connection type_ , _Server_ name and _Port_. Click the _Save_ button.

To **_recall_** a connection, select it from the list on the left side of the panel. Double clicking a connection will immediately load the settings and connect to the server.

To **_remove_** a connection, right click on the connection in the list on the left side of the panel. A _Remove connection_ option displays. When selected, a message displays to ask for confirmation to remove the connection.

The _Make Link File_ button creates a link file with the extension **_.windx_** , which is used as a shortcut for starting the connection in the directory in which this file is located. See **[PxPlus Link File Extensions](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/PxPlus%20Link%20File%20Extensions.md)**.

_(The Make Link File button was added in PxPlus 2017.)_

##  Parameters

The PxPlus Simple Client Server, NThost and the Application Server allow additional connection parameters to be specified:

|  **_Simple Client Server_** |  Name of program to run  
---|---|---  
|  **_NThost_** |  Name of program to run  
|  **_Application Server_** |  Name of 'process' to run  
  
#### **Note:**  
The _Parameter(s)_ field is **_not_** used for Telnet connections.

To run an SSH connection, four additional parameters can be specified, as shown in the example below:

The parameters for an SSH connection are:

_User  
Password_ |  **_(Required)_** User name and password.  
---|---  
_Term_ |  Enter a terminal type or click the drop-down arrow to select one from the list: _winterm_ , _xterm_ or _ansi_. _(The Term field was added in PxPlus 2025.)_  
_PxPlus Path_ |  Enter the path to the directory where the PxPlus executable is located. _(The PxPlus Path field was added in PxPlus 2025.)_  
  
## Browser Launching

A Web shortcut can be provided for users who are connecting via Simple Client Server or SSH:

**_Example:_**

|  **_For Simple Client Server_** |  windx://server:scs/4093/program  
---|---|---  
|  **_For SSH_** |  windx://192.168.1.117:ssh/  
  
Windows shortcuts _(.url_ files) can be created, which users can put on the desktop.

See **[Launching WindX from a Browser](browser.md)**.

#### **Note:**  
The registry entries are created automatically when a user installs WindX; therefore, once WindX has been installed, all that is needed is the URL.

## See Also

**[Link File Extensions](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/PxPlus%20Link%20File%20Extensions.md)**
