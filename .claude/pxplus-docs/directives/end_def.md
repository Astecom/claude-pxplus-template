# Directives

**END DEF** |  **_End Definition of Multi-line Function_**  
---|---  
  
##  Format

**END DEF**

##  Description

Use the **END DEF** directive to mark the end of a multi**-** line function.

In Execution mode, when PxPlus encounters a **DEF FN** directive for a multi**-** line function, it skips forward until it encounters an **END DEF** directive; that is, control is transferred to the line or statement after the end definition.

If you use an **END DEF** directive without a preceding **DEF FN** directive, PxPlus returns an Error #45: Referenced statement invalid.

##  See Also

**[RETURN Return From a Subroutine](return.md)**  
**[ESCAPE Interrupt Program Execution](escape.md)**  
**[DEF FN Define Function](def_fn.md)**

##  Example

0010 def fnX(A,B)  
0020 if A<0 or B<0 escape 40 ! Variables' values must be >=0  
0030 return sqr(A^2+B^2) ! Length of hypotenuse  
0040 end def  
0100 print fnX(7,8)  
  
->run  
10.63
