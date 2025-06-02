# Directives

**EXECUTE** |  **_Execute Basic Instruction_**  
---|---  
  
##  Format

**EXECUTE** _statement$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_statement$_ |  Character string to be processed by the system **_as if_** entered in Command mode. String expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use **EXECUTE** to embed Command mode statements directly into a program. A typical use of this directive is to modify the current program dynamically. When used in a compound statement, **EXECUTE** must be the last directive in the line.

#### **Note 1:**  
By default, PxPlus changes the current program. If the **EXECUTE** directive starts with a line number, PxPlus modifies the current program and the line becomes part of the current program, possibly overwriting the existing code. However, if the system parameter ['**EX** '](../parameters/ex.md) is **_On_** , it modifies the program at level 1 (the main level).  
**  
Note 2:  
**Under WindX, you can use EXECUTE "[WDX]..." or EXECUTE "[LCL]..." to encapsulate a directive or statement that is not supported across a WindX connection. See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) and **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

##  Example

0010 let X$=lst(pgm(tcb(4)+1));execute X$(5),err=*end  
0100 if WDX then execute "[WDX]SET_PARAM 'SD' "
