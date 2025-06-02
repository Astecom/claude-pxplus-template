# System Parameters

**'WI'=** |  **_Windows Instruction Count_**  
---|---  
  
##  Description

**_(Windows/WindX Only)_**

Sets the number of instructions to be executed before passing control to the operating system.

#### **Note:**  
The overall number of instructions between priority level switching is based on an exponential formula using the values of the **'WI'** and **'QF'** parameters. See **['Q_'](q_.md)**, **['Q^'](q%5e.md)** and **['QF'](qf.md)** system parameters, which control task priority.

##  Default

**'WI'=1000**

##  See Also

**[TCB( ) Return Task Information](../functions/tcb.md)**; i.e. **TCB(91)**

****

****
