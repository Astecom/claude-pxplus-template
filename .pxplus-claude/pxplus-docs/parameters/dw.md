# System Parameters

**'DW'=** |  **_Delay Time After 'WI'_**  
---|---  
  
##  Description

Adds automatic delay times after **'WI'** is exhausted without having to insert **WAIT** statements into your application. Use this parameter to have PxPlus return control to the operating system for longer periods of time.

**'DW'=**_num_ is a numeric value from 0 to 1000:

> 0 indicates no delay. _(Default)_  
>   
>  1 indicates a forced **WAIT 0** when the event occurs.  
>   
>  All other values from 2 through 1000 indicate the _number of 100ths of a second_ to delay on each event occurrence.

##  Default

**'DW'=****0** \- No delay
