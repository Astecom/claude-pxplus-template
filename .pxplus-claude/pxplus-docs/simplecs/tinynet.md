# PxPlus Simplified Client-Server

**Tinynet** |  **_Simple Telnet for Windows_**  
---|---  
  
This interface provides a simple TCP/IP raw telnet-like connection to a host system. Using this server, telnet terminal emulators (such as Putty) that provide a raw "telnet" style communication protocol can be used to connect to a host system. The program is primarily designed for use with Windows where there is generally no telnet server; however, it could be used with other host systems.

## Running Tinynet

The tinynet host program is "*plus/cs/tinynet". It can be run like any other program on the system and, once initiated, will monitor for connections on port 23 (the standard telnet port) by default. If desired, you can change this port either by issuing a CALL and passing a new port number as a string in the first argument or by launching the program with a ARG <portid> in the Command line. Two additional arguments can be entered for the terminal type and the program to run when a telnet session is executed.

**_Command Line:_**

> "*plus/cs/tinynet" -arg  _portid_ _,_  _terminal type,_  _program_

**_Where:_**

__ |  _portid_ |  Port ID to monitor _(Default: 23)_  
---|---|---  
__ |  _terminal type_ |  Terminal type to use _(Default: ansi)__(added in PxPlus 2016)_  
__ |  _program_ |  Program to run _(Default: go to Command mode)__(added in PxPlus 2016)_  
  
**_Examples:_**

> "*plus/cs/tinynet" arg 10000 ansi myprogram.pxp  _(in the Command line)_

> CALL "*plus/cs/tinynet","10000","ansi","myprogram.pxp"

The above examples would launch the tinynet host program to monitor port 10000 as opposed to the default of 23.
