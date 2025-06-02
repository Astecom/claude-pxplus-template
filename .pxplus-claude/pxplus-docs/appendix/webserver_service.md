# Language Reference - Appendix 

**Setting Up Web Server as a Windows Service** |   
---|---  
  
The PxPlus Web Server can be installed as a Windows Service using one of the following three methods:

**_Method 1:_** |  From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)**: Expand the _Installation and Setup_ category and select _Install Windows Services_ to launch the **[Install Windows Services](../Install%20Windows%20Services.md)** window. From the _Type of Service_ drop box, select _PxPlus Web Server_. After entering the service settings in the grid, select the _Install_ button.  
---|---  
**_Method 2:_** |  From the Command line: Enter **"*plus/web/service"** to install (or uninstall) the Web Server.  
**_Method 3:_** |  Run the following code: 0010 LET COMMAND$=QUO+ARG(0)+QUO  
0020 LET COMMAND$+=" -i"  
0030 LET COMMAND$+=" PvxWeb"  
0040 LET COMMAND$+=" 'Pvx Web Server'"  
0050 LET COMMAND$+=" 2" ! Manual start (1 = Autostart)  
0060 OPEN (1)"*web"  
0070 LET COMMAND$+=" '"+PTH(1)+"'" ! Web directory  
0080 CLOSE (1)  
0090 LET COMMAND$+=" 'webhide.ini webserv'"  
0100 LET COMMAND$+=" 'The PxPlus web server'"  
0110 !   
0120 INVOKE CONTROL COMMAND$

#### **_Copy and paste the above lines into a PxPlus session and enter "RUN" to execute them._**

To remove the service from the system, execute the following program: 0010 LET COMMAND$=QUO+ARG(0)+QUO  
0020 LET COMMAND$+=" -u"  
0030 LET COMMAND$+=" PvxWeb"  
0040 !   
0050 INVOKE CONTROL COMMAND$

#### **_Copy and paste the above lines into a PxPlus session and enter "RUN" to execute them._**  
  
When installed, the service will default to _Manual_ start. To have the service start automatically when the system is booted, you will need to go to your Windows _Control Panel_ and change the start_up setting to _Automatic_.
