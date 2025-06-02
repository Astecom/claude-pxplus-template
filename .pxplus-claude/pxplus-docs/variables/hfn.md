# System Variables

**HFN** |  **_Highest Available Local Channel_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, highest local channel/file number not open

##  Description

The **HFN** variable contains a numeric value (integer) representing the highest available local channel/file number. This value will be in the range 0 to 63 (0 to 32767 if the **'XF'** system parameter is set).

## See Also

**['XF' Extended File Channels](../parameters/xf.md)**

##  Example

?hfn  
63  
  
set_param -'XF'  
?hfn  
32767
