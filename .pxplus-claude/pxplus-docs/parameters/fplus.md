# System Parameters

**'F+'** |  **_Set Dynamic File Open Limit_**  
---|---  
  
##  Description

This system parameter is used to control the number of files that will be dynamically opened by PxPlus.

When issuing IO directives, you can specify either a channel number or pathname to the file. If a pathname is given, the system will dynamically open the file. These files will be kept open until a **BEGIN** or the limit of dynamic opens, as defined by this parameter, has been reached. When the limit is hit, the oldest referenced dynamically opened file will be closed.

_(The 'F+' system parameter and dynamic file opening was added in PxPlus v9.00.)_

##  Default

Default setting is **50**.

## See Also

**[BEGIN Reset Files and Variables](../directives/begin.md)**
