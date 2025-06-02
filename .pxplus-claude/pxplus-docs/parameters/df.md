# System Parameters

**'DF'=** |  **_Enforced Delay Time After 'FF'_**  
---|---  
  
##  Description

Adds automatic delay times after each **'FF'** without having to insert **WAIT** statements into your application. Use this parameter to have PxPlus return control to the OS for longer periods of time.  
  
**'DF'=**_num_ is a numeric value from 0 to 1000:

> 0 indicates no delay. _(default)_  
>  1 indicates a forced **WAIT 0** when the event occurs.  
>  All other values from 2 through 1000 indicate the _number of 100ths of a second_ to delay on each event occurrence.

#### **Note:**  
The **'DF'** delay only applies to '**FF'** when sent to a device, Windows print spooler or a WindX-connected file.

##  Default

**'DF'=****0 _No Delay_**

## See Also

**['FF' Form Feed](../mnemonics/ff.md)**
