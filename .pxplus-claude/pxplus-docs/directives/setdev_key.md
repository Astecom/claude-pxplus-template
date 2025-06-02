# Directives

**SETDEV KEY** |  **_Alter Keys of Open Channel_**  
---|---  
  
## Format

**SETDEV (**_chan_**) KEY:**_numexpr,strexpr_  
  
**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_numexpr_ |  Valid KNO value (file access key) for the file.  
_strexpr_ |  New key name.  
  
##  Description

Use the **SETDEV KEY** directive to either assign or alter named keys for an open channel. The name assigned to any given key is only valid while the channel is open and will not physically alter the file.

##  Example

open (1)"*msglib.en"  
setdev (1)key:0,"PrimaryKey"  
print rcd(1,key="!PRINT",kno="PrimaryKey")  
[&P!Print]
