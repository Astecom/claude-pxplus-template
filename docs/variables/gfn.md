# System Variables

**GFN** |  **_Highest Available Global Channel_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, highest available global channel

##  Description

The **GFN** variable contains a numeric value (integer) representing the highest available (i.e. not open) global file channel. This value will be in the range 64 to 127 (32768 to 65000 if the **'XF'** system parameter is set).

## See Also

**['XF' Extended File Channels](../parameters/xf.md)**

##  Example

set_param 'XF'  
?gfn  
65000  
  
set_param -'XF'  
?gfn  
127
