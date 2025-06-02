# System Parameters

**'WL'** |  **_Use Write Locks_**  
---|---  
  
##  Description

**_(UNIX/Linux Only)_**

Temporarily blocks all other access for both **READ** and **WRITE** directives to a Keyed data file. (For that split second, only one access will be allowed.)

##  Default

**_Off_** \- PxPlus allows multiple simultaneous **READ** accesses to a Keyed file but only one **WRITE** access.

##  See Also

**[WRITE Add/Update Data in File](../directives/write.md)**  
**[READ Read Data from File](../directives/read.md)**
