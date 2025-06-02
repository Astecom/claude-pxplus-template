# Application Server

**Client Configuration**|   
---|---  
  
A **WindX** thin-client implementation is required to establish a user interface connection from a remote system to the PxPlus Application Server. The Windows thin-client employs the Application Server ***CLIENT** program to connect to the server. ***CLIENT** is also used by the spawning process to initiate new sessions on the client workstation. See **[WindX Thin-Client](../../windx.md)** for information on using WindX.

The Command line syntax is described as follows:

> _PVXpath_ _$_ **[**_state_**]** **[**_ini_**]** ***client ARG**  _ServName_**[**_Socket_**]** **[**_"App"_**]** **[**_parms_**]**

**_Where:_**

_PVXpath_ |  Path to PxPlus (e.g. C:\pxplus\pxplus.exe).  
---|---  
_state_ |  Option setting for governing the initial WindX window. Either **_null_** for normal window, **_-mn_ **to start minimized, **__ _hd_ **to start hidden.  
_ini_ |  Optional user-defined INI file. The initial session will use this INI for its client-side PxPlus characteristics. Spawned sessions will reuse the same INI, unless specifically overridden during the spawn.  
_ServName_ |  IP Address or DNS resolvable name of the server to which to connect.  
_Socket_ |  TCP/IP port (socket) to which the server daemon is listening. Default is 10000.  
_"App"_ |  Optional lead program or configured application name that the server is to run. Quotes are required if it contains spaces. If Null or not given, then the request is for a PxPlus Console Mode Session.  
_parms_ |  Optional dashed parameters. See **[*CLIENT Dashed Parameters](Client%20Configuration.htm#parameters)** below. |  **-ARG=**_xxx_ |  **-KA** |  **-USR1=**_xxx_****  
---|---|---  
**-CMD=**_xxx_ |  **-LANG=**_xx_**** |  **-USR2=**_xxx_  
**-DIR=**_xxx_ |  **-LOGIN** |  **-USR3=**_xxx_  
**-FID=**_xxx_ |  **-SSL** |  **-USR4=**_xxx_  
  
***CLIENT _Dashed Parameters_**

The following parameters may be included on the Command line in any order as long as they are entered after the lead program name, _"App"_(or _Socket_ , if no application is given):

**-ARG=**_xxx_ |  This is an "addition to" value, whereby you can request additional command line arguments for the server-side process. These are in addition to any application configured command line arguments. Extra command line arguments are supplied to the server-side process after any configured ARG values.  
  
**_Example:_**  
  
_Server-Side_Process_Command Application$ -ARG arg1 arg2 ExtraArg1 ExtraArg2  
  
_ The application configuration may be set to refuse such an addition (quoting is optional, but required if there are spaces).  
---|---  
**-CMD=**_xxx_ |  This is an "addition to" value, whereby you can request additional command line options for the server-side process.  
  
**_Examples:  
  
_** -CMD=-XT=1 **_or_**   
-CMD=-XT=0 -NE=1 **_or  
_** -CMD="-XT=0 -NE=1"  
  
Extra command line options are supplied to the server-side process after the program name but before any **ARG** _xxx_ values.  
  
**_Example:_**  
  
_Server-Side_Process_Command Application XtraCmdLineOptions$_ -ARG _  
_  
The application configuration may be set to refuse such an addition (quoting is optional, but required if there are spaces).  
**-DIR=**_xxx_ |  Server-side Start-In directory. This is an override value, whereby you can request a specific directory in which to start the server session. The Application Configuration may be set to not allow such an override (quoting of value is optional, even if the path contains spaces).  
**-FID=**_xxx_ |  **FID(0)** value requested. This is an override value, whereby you can request a specific **FID(0)** for this session. The Application configuration may be set to not allow such an override. The maximum **FID(0)** value is 12 characters (quotes are optional).  
  
**_Example:  
  
_** -FID=T999 **_or_** -FID="JoesPC"  
**-KA** |  Indication that the client is to use TCP/IP _KeepAlives_ __ on its end of the connection.  
**-LANG=**_xx_ |  Two-character Language Code for displaying message boxes and dialogue information ( e.g. -LANG=EN for _English_).  
  
The following rules are used to select the correct language suffix. An attempt is made to load the _apsmesg_ _.??_ message library in a specific order. If an attempt succeeds, then that is considered to be the correct language suffix for all message library and NOMADS Panel library files. Attempts will continue until successful, or "**EN** " is chosen as the default. The order of the attempts is:  
  
1\. %LANG$ Global variable set possibly via a START_UP program  
2\. Environment variable PVXLANG  
3\. Environment variable LANG  
4\. Default of **EN**  
**-LOGIN** |  Forces a login to the server. By default, ***CLIENT** will first attempt an anonymous connection to the server. Depending on the server's configuration, the server may accept anonymous requests, or it may require a login. If the server is set for login, then the user is presented with the login screen.  
  
By setting **LOGIN** , you are telling the ***CLIENT** program to skip the attempt at an anonymous session and force the user to log in.  
**-SSL** |  Indication that the ***CLIENT** program is to connect to the server using SSL. If the server is using SSL, the client must also use it.  
**-USR1=**_xxx_  
  
_to  
  
-**USR4=**_ xxx |  You may specify user-defined strings containing any information you wish. This information will be available to your server-side process from the %APS object as properties. If the strings supplied contain spaces, then you should enclose the string in quotes.  
  
**_Example:_**  
  
-USR1="My Directory Info"
