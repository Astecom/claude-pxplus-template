# System Parameters

**'DL'=** |  **_Enforced Delay Time After 'LF'_**  
---|---  
  
##  Description

Adds automatic delay times after each **'LF'** without having to insert **WAIT** statements into your application. Use this parameter to have PxPlus return control to the operating system for longer periods of time.  
  
**'DL'=**_num_ is a numeric value from 0 to 1000:

> 0 indicates no delay. _(Default)  
> _  
>  1 indicates a forced **WAIT 0** when the event occurs.  
>   
>  All other values from 2 through 1000 indicate the _number of 100ths of a second_ to delay on each event occurrence.

#### **Note:**  
The **'DL'** delay only applies to **'LF'** when sent to a device, Windows print spooler or a WindX-connected file.

##  Default

**'DL'=****0** \- No Delay
