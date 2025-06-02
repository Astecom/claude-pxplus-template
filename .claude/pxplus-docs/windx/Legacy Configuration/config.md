# WindX™ Thin-Client

**WindX Configuration** |  **_Historical Reference_**  
---|---  
  
#### **Important Note:**  
**_This page is for historical reference only._** To create multiple thin-client connections to multiple hosts, see **[WindX Connection Manager](../connectionmrg.md)** utility.

## Launching WindX

WindX is automatically installed whenever you install PxPlus on a Windows systems. To launch WindX, simply select the **WindX** entry from the _Start/Programs_ menu selections created during the installation process.

## Configuration Settings

Once WindX is running, pressing ALT-S allows the user to configure the connection settings for WindX. The configuration screen allows the user to choose the type of connection (Serial COM port or Telnet) and set a variety of operational parameters. Two connection types are supplied with WindX -- Telnet and "COM" port connection for use with a dial-up modem.

The connection type determines which options will be available in the configuration screen. Options are saved on the file _WindX.cfg_ or on the file specified in ARG(1), if set, as in the following example:

**_Example:_**

> C:\PVX Plus Technologies\PxPlus\pxplus.exe WindX -ARG "custom.cfg"

## Telnet Configuration

> When selecting the Telnet protocol, the user is required to enter the name and/or IP address of the targeted host computer. Several other configuration options are available:

_Port_ |  Normally, port 23 is used with Telnet communication; however, this can be changed as required.  
---|---  
_Terminal Type_ |  Specify a Terminal Type when connecting to a UNIX server.  
_Translate CR  
Send CR as LF_ |  The _Translate CR_ and _Send CR as LF_ options handle minor variations in the protocol that have been found to exist between vendor implementations. Generally, you will need to enable these options when connecting to a SUN server and disable them for all other servers.  
_Force ACKs_ |  The option to _Force ACKs_ (Forced Communications Acknowledgments) may help improve the performance of WindX when in Telnet mode. It periodically adds a few bytes of data to the packets sent by WindX in an attempt to force the Telnet daemon _(telnetd)_ on the server to communicate faster if it is using the Nagle algorithm (which produces delays in transmission). Most telnetd servers are configured to use this algorithm automatically.  
  
By enabling this feature, WindX sends a few bytes that force an immediate response from the server, which triggers any pending data on the server to be sent immediately. Not all Operating System Telnet Daemons support this feature. Whether this option will have a positive or negative impact on performance can only be determined through testing.  
_Use KeepAlives_ |  This option enables the use of operating system keep-alive packets to help assure that the workstation is still connected during periods of in-activity. PxPlus has a built in keep-alive function (see **['+A'](../../parameters/plusa.md)** system parameter) thus this setting is not needed when connecting to a PxPlus server.  
_Exit on Quit_ |  This option causes WindX to auto-terminate once the connection with the server is severed.  
_Ignore Turbo Mode Errors_ |  When running in Turbo mode (common when running graphical applications), you can suppress the local reporting of unanticipated errors. In 'Turbo mode', most transmission are expected to be successful. Setting this option disables the local reporting of errors that occurred during turbo mode.  
  
## COM Port Configuration

> When selecting any of the COM ports, the user must specify the port name. COM port names consists of the letters COM followed by a number. When configuring a built-in modem, it is often helpful to go to the Windows Control Panel _Phone and Modem_ utility to determine the proper COM port number.

You also need to set the speed for the port and disable the hardware flow control, if necessary.

##  Script Processing

A built-in script processor within WindX is designed to assist in the generation of host sign-on sequences. The script text consists of a series of lines, which start with a single character code followed by a **:**  _colon_. A typical sign-on script for UNIX might be:

**R:login** |  Wait to receive 'login'  
---|---  
**S:Stitch** |  Send the user ID 'Stitch' and CR  
**R:Password** |  Wait to receive 'Password'  
**S:Lilo** |  Send the password 'Lilo'  
**R:$** |  Wait to receive Command prompt  
**S:pxplus MYMENU** |  Send the command to start application  
  
The following codes are supported within the script:

**Code** |  **Function**  
---|---  
M: |  This is used to display progress messages on the message bar. The text following the command will be displayed on the status bar at the bottom of the WindX screen.  
R: |  Tells the script processor to wait until the text following the code is received.  
S: |  Forces the script processor to send the data following the code to the server followed by a CR ($0D$).  
T: |  This code changes the default timeout value (5 seconds) used for an **R:** (receive) function.  
W: |  Causes the script to wait the number of milliseconds before proceeding.  
  
#### **Note:**  
If the first directive of a WindX script is **M:** , then all terminal output is suppressed allowing for a 'hidden' signon. Terminal output will resume automatically at the end of script processing.

## External Sign-On Program

While the script processor is satisfactory in a wide variety of situations, an external script manipulation program _(windx.sgn)_ can be used to alter the script sequence dynamically.

If the option _Use External Sign-on program_ is enabled on the **Configuration** screen, WindX will issue a CALL to the program named _windx.sgn_ just prior to processing the signon script. This program can then alter the script as desired.

**_Example:_**

Assume we have a NOMADS screen (call it Signon in Mylib) that requests the Userid and Password of the user and returns these values in the first and second arguments. We could use the _windx.sgn_ program to alter the Userid and Password fields in a script as follows:

> 0010 enter s$  
>  0020 process "Signon", "Mylib.en",u$,p$  
>  0030 u=pos("$user$"=s$)  
>  0040 if u<>0 s$=s$(1,u-1)+u$+s$(u+6)  
>  0050 p=pos("$pswd$"=s$)  
>  0060 if p<>0 s$=s$(1,p-1)+p$+s$(p+6)  
>  9000 exit

This example assumes that the value **_$user$_** and **_$pswd$_** exist as placeholders in the script and will be replaced with the true Userid and Password as in:

**R:login**  
---  
**S:** ** _$user$_**  
**R:Password**  
**S:** ** _$pswd$_**  
**R:$**  
**S:/pxplus/pxplus MYMENU**
