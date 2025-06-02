# System Parameters

**'Q_'=** |  **_Lowest Task Priority_**  
---|---  
  
##  Description

**_(Windows/WindX Only)_**

Assigns the lowest task priority level. When an application exceeds the value of the parameter **'WI'** , its priority level is decremented until it reaches the value of the **'Q_'** parameter.

#### **Note:**  
Three parameters (**'Q_'** , **'Q^'** and **'QF'**) control the priority of a task, primarily to balance the load in a Client/Server environment. PXPLUS.EXE supports five levels (range: lowest 0 to highest 4). The current priority level is stored in **TCB(91)**.

##  Default

**'Q_'=2**

## See Also

**['WI' Windows Instruction Count](wi.md)  
['Q^' Highest Task Priority](q%5e.md)  
['QF' Task Priority Factor](qf.md)  
[TCB( ) Return Task Information](../functions/tcb.md)**
