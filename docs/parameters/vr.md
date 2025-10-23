# System Parameters

**'VR'=** |  **_Verify Read_**  
---|---  
  
##  Description

Verifies all data file reads by re-reading and comparing. The values set in **'VR'** define the number of retries before a data read error is generated.

#### **Note:**  
**'VR'** can be helpful in tracking down hardware-related data corruption problems. (There is some impact on system performance.)

**TCB( )** returns the following values for this parameter:

> **TCB(63)** \- Number of reads verified  
> **TCB(65)** \- Number of reads mis-compares

##  Default

**'VR'=0**

##  See Also

**[TCB( ) Return Task Information](../functions/tcb.md)**
