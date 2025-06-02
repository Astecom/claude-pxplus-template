# System Parameters

**'VW'=** |  **_Verify Write_**  
---|---  
  
##  Description

Verifies all data file writes by re-reading after a write to check data integrity. The value set in **'VW'** defines the number of retries before a data write error is generated.

#### **Note:**  
**'VW'** can be helpful in tracking down hardware-related data corruption problems. (There is some impact on system performance.)

**TCB( )** returns the following values for this parameter:

> **TCB(63)** \- Number of writes verified  
> **TCB(65)** \- Number of writes mis-compares

##  Default

**'VW'=0**

##  See Also

**[TCB( ) Return Task Information](../functions/tcb.md)**
