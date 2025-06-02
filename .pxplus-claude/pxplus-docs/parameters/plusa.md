# System Parameters

**'+A'** |  **_Enable Built-in Keep Alive for WindX_**  
---|---  
  
##  Description

The **'+A'** parameter is used to control the built-in keep-alive logic for WindX. The value specified in this parameter defines the number of minutes between automatically generated internal transmissions to a WindX workstation. The successful delivery of these transmissions will verify that the workstation is still connected. A failure will indicate that the workstation has been disconnected and that the normal terminal-disconnect processing should be initiated.

This parameter can be set to a value between 0 and 1440 (24 Hours - 1 day).

_(The '+A' system parameter was added in PxPlus v7.00.)_

##  Default

**10**
