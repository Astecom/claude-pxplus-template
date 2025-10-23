# System Parameters

**'SB'** |  **_Self-Block Extracts_**  
---|---  
  
##  Description

**_(UNIX/Linux Only)_**

By default, UNIX/Linux locks records by file and process, not by channel number. This can cause unexpected results if you lock a record on one channel and access it on another.

This issue can be avoided by setting the **'SB'** (Self Block) parameter, which will check to see if the record is locked (EXTRACTED) on another channel.

Like Windows, the '**XI** ' system parameter will govern whether you can read a locked record, regardless of the setting of the **'SB'** parameter.

##  Default

**_On_** \- as of PxPlus 2021

(Prior to PxPlus 2021, the default setting was **_Off_**.)

## See Also

**['XI' Extract Ignore](xi.md)**'
