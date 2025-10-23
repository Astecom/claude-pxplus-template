# System Variables  
  
**BKG** |  **_Background Process Status_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, process status code

##  Description

The **BKG** variable contains the following numeric status codes:

|  **0** |  Current program is directly connected to a terminal user (background/ghost process), and on Windows, the initial window was not minimized or hidden.  
---|---|---  
|  **1** |  Current program is not directly connected to a terminal user (background/ghost process), or on Windows, the initial window was minimized or hidden.  
  
#### **Note:**  
If you only want to determine if PxPlus is being run as a background process and are not concerned about whether the initial window was minimized or hidden, use the following:  
  
IF TCB(27)=0 THEN 1 ELSE 0

## See Also

**[TCB( ) Return Task Information](../functions/tcb.md)**

##  Example

?bkg  
0
