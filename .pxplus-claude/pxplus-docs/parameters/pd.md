# System Parameters

**'PD'=** |  **_Default Precision for Current Session_**  
---|---  
  
##  Description

Assigns the default number of decimal places for the current session. This value will be used to set the **PRECISION** directive default setting whenever a **BEGIN** , **RESET** , **END** , **STOP** , **RUN** , **LOAD** or **CLEAR** directive is executed.

Its value must be between 0 and 18 (the range supported by the **PRECISION** directive).

#### **Note:**  
This parameter is reset to 2 if a **START** command is issued.

##  Default

**'PD'=2**

## See Also

**[PRECISION Change Current Precision](../directives/precision.md)  
[BEGIN Reset Files and Variables](../directives/begin.md)**  
**[RESET Reset Program State](../directives/reset.md)**  
**[END Halt Execution of Program](../directives/end.md)**  
**[STOP Halt Program Execution](../directives/stop.md)**  
**[RUN Transfer and Execute a Program](../directives/run.md)**  
**[LOAD Read Program into Memory](../directives/load.md)**  
**[CLEAR Reset Variables](../directives/clear.md)**
