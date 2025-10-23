# System Parameters

**'BY'=** |  **_Base Year_**  
---|---  
  
##  Description

Defines the base year for the **JUL( )** and **DTE( )** functions.

##  Default

**'BY'=1970**

#### **Note:**  
The **JUL( )** function uses January 1 of the base year as day 0 (zero).  
  
In addition, if you **SET_PARAM 'BY'=0** (zero), the **JUL( )** and **DTE( )** functions operate under the Julian calendar where day 0 is around **_4713 BC_**.

## See Also

**[JUL( ) Return Julian Date](../functions/jul.md)**  
**[DTE( ) Convert Date](../functions/dte.md)**
