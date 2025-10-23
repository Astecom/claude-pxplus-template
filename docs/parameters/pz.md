# System Parameters

**'PZ'** |  **_Suppress Program Size Warning_**  
---|---  
  
##  Description

The **'PZ'** parameter stops warnings from PxPlus regarding programs larger than 64K. Some older platforms and versions of PxPlus do not support program size in excess of 64K and thus will not be able to load programs if they exceed this limit. This parameter is provided to help the programmer detect when a program goes over this limit.

##  Default

**_On_** \- Warning will be sent when attempting to **SAVE** a program larger than 64K.

_(Default is**Off** for all versions of PxPlus **prior** v7.00, build 9163.)_
