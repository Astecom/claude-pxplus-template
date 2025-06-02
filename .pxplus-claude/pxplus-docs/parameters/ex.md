# System Parameters

**'EX'** |  **_Apply Execute Level Selector_**  
---|---  
  
##  Description

The **'EX'** parameter controls which program an **EXECUTE** directive will modify when passed a string containing a line number that causes a line to be changed. Possible values are:

|  0 _(Off)_ |  Apply change to current program  
---|---|---  
|  1 _(On)_ |  Apply change to mainline program  
|  2 |  Apply change to calling program (added in PxPlus v7.00)  
  
By default (**'EX'** is set to 0 or _Off_), any lines changed by an **EXECUTE** will affect the current program.

Setting the **'EX'** parameter to 1 (_On_) causes the **EXECUTE** to affect the mainline program (the program at the top of the program stack). 

PxPlus allows this parameter to also be set to 2, which causes the calling program (if any) to be affected. If the **'EX'** parameter is set to 2 and no calling program exists (i.e. the current program is the mainline program), the **EXECUTE** will affect the current program.

##  Default

**0 _(Off)_** \- Changes affect the current program.

##  See Also

[**EXECUTE Execute Basic Instruction**](../directives/execute.md)
