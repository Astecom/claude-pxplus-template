# WindX™ Thin-Client  
  
**PxPlus Simplified Client-Server** |   
---|---  
  
The ***plus/cs** directory contains two types of Simple Client-Server interfaces that can be easily tailored to suit your needs:

|  [**Tinynet**](simplecs/tinynet.md) |  This interface provides a simple TCP/IP raw telnet-like connection to a host system. Using this server, telnet terminal emulators (such as putty) that provide a raw "telnet" style communication protocol can be used to connect to a host system. The program is primarily designed for use with Windows where there is generally no telnet server; however, it could be used with other host systems.  
---|---|---  
|  [**Host/Client**](simplecs/clienthost.md) |  This is a stripped down client-server interface that allows WindX workstations to connect to a host system. It provides more functionality than NTHost by using a single port and advanced security but less functionality than the Application Server.  
  
These two interfaces take advantage of the new [**ONESHOT**](command_tags/tcp.htm#ONESHOT) capability of the PxPlus TCP interface in order to allow multiple sessions to share a single connection port.

**_General Concept_**

Both Tinynet and the PxPlus Host/Client Server interface use the same concept to run your application. The host program uses the [**ONESHOT**](command_tags/tcp.htm#ONESHOT) option for TCP to wait for the connection of a new workstation. When a workstation connects to the system, the host program spawns a new copy of itself, which in turn will wait for the next connection.

After launching the new copy, the host program will then configure and flip its channel 0 connection using the **[LINE_SWITCH](directives/line_switch.md)** directive. The host process then runs as a standard PxPlus session in response to the workstation input.

One of the limitations of this process is that there exists a short interval of time after the first connection has been made and before a new copy of the host server application has been started. This problem can be alleviated by actually running multiple copies of the host program since they do allow sharing of the monitor port using the _TCP Reuse_ option.

#### **Note:**  
One potential problem with the general approach used by these two host systems is the possibility of the spawn failure that could leave the port unattended. This is highly unlikely and not much different from the current *NTHOST interface that relies on the host program running at all times.
