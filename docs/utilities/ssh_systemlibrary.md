# Utilities

***SSH** |  **_SSH System Library_**  
---|---  
  
## Description

The ***SSH** System Library utility provides the ability to connect WindX to a remote host running UNIX or Linux via the SSH protocol.

It can be launched directly from the workstation and takes up to six **_-arg_** values:

  |  _server_ |  Server IP address or Putty saved connection.  
---|---|---  
  |  _port_ |  _(Optional)_ Port number; will use 22 or value from saved connection.  
  |  _userid_ |  _(Optional)_ User ID to use; will prompt if omitted.  
  |  _password_ |  _(Optional)_ Password to use; will prompt if needed.  
  |  _term_ |  _(Optional)_  _Term_ setting for Linux.  
  |  _exepath_ |  _(Optional)_ PxPlus executable path.  
  
The SSH interface can use connections that are pre-configured using Putty (visit **<https://www.putty.org/>**). To use a saved connection, simply enter the saved connection name as the server name, and the system will use the Port number, User ID and Password as saved in Putty, regardless of the arguments passed.

_(The *SSH System Library utility was added in PxPlus 2016.)  
(The two -arg values, term and exepath, were added in PxPlus 2025.)_

 

 

 
