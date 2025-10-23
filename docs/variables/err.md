# System Variables

**ERR** |  **_Last System-Detected Error Value_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, last system-detected error code

##  Description

The **ERR** variable contains a numeric value (integer) that indicates the last system**-** detected error. It is reset by the **BEGIN** , **CLEAR** , **END** , **RESET** , **STOP** and **START** directives.

##  See Also

**[ERR( ) Test Error Value](../functions/err.md)  
[Error Codes and Messages](../appendix/list_of_messages.md)  
[BEGIN Reset Files and Variables](../directives/begin.md)**  
**[CLEAR Reset Variables](../directives/clear.md)**  
**[END Halt Execution of Program](../directives/end.md)**  
**[RESET Reset Program State](../directives/reset.md)**  
**[STOP Halt Program Execution](../directives/stop.md)**  
**[START Restart Session](../directives/start.md)**

##  Example

In this example, the "TEST" file is already open:

> open (5)"TEST"  
>  Error #14: Invalid I/O request for file state  
>   
>  ?err  
>  14
