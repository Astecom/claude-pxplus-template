# Directives 

**RESET** |  **_Reset Program State_**  
---|---  
  
##  Format

**RESET**

##  Description

The **RESET** directive does the following:

1. |  Resets **PRECISION** to the default value of 2.  
---|---  
2. |  Sets **ERR** , **RET** and **CTL** to zero.  
3. |  Clears **FOR** /**NEXT** , **GOSUB** /**RETURN** stack.  
4. |  Re-enables rounding mode.  
  
The **RESET** directive will reset **FLOATINGPOINT** to standard decimal notation, and if the system parameter **'RR'** is set, the system will also perform a reset on a **RUN** directive. _(added in PxPlus v4.20)_

#### **Note:**  
Use the **POP *** directive to clear the complete **GOSUB/FOR** stack without changing the **CTL** and **ERR** values.

##  See Also

[**BEGIN Reset Files and Variables**](begin.md)  
[**CLEAR Reset Variables**](clear.md)  
[**START Restart Session**](start.md)  
[**RUN Transfer and Execute a Program**](run.md)  
[**'RR' Reset on RUN**](../parameters/rr.md)  
**[FLOATINGPOINT Switch to Scientific Notation](floatingpoint.md)**  
**[POP Premature Exit from Stack](pop.md)**
