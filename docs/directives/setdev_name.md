# Directives 

**SETDEV** |  **_Set Device Type Name_**  
---|---  
  
##  Format

**SETDEV (**_chan_**)**_lcs_ __devtype_ _$_  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file for which the device type is being overridden.  
---|---  
_lcs_devtype_ _$_ |  Lowercase string value defining the device type. Its maximum length is 12 characters. String expression.  
  
##  Description

Use the **SETDEV** directive to make dynamic changes in the value of the **DEVICE TYPE** field maintained by PxPlus for device files. This directive is applicable primarily to device drivers and then only to those that can support more than one device type on the same port.

When you use this directive, the device driver **'*DEV/DIAL-UP"** changes the device type field for a dial-up terminal based on the type of terminal actually connecting to PxPlus.
