# System Parameters

**'+O'** |  **_BIN Function Overflow Detection_**  
---|---  
  
##  Description

The **'+O'** parameter is used to control the generation of errors on the BIN function/format when the data cannot fit in the output length specified.

If this parameter is **_Off_** , PxPlus will emulate older versions and simply truncate the high order data.

_(The '+O' system parameter was added in PxPlus v8.00.)_

##  Default

**_On_** \- An error will occur if the value exceeds the allotted length.
