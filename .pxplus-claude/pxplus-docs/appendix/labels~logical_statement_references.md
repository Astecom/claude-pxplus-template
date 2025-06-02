# Language Reference - Appendix  
  
**Labels/Logical Statement References**|   
---|---  
  
PxPlus supports the use of logical statement references (labels) in lieu of line number references in your applications. PxPlus supplies a set of built-in labels (keywords with the leading asterisk) that can be used wherever you would use a statement reference (line number or line label).

#### **Note:**  
Some of the logical statement labels and the directives they emulate will remove an item for your stack and perform a RESET.

The built-in PxPlus labels/logical statement references are:

|  ***BREAK** |  Emulates **[BREAK Immediate Exit of Loop](../directives/break.md)**  
---|---|---  
|  ***CONTINUE** |  Emulates **[CONTINUE Initiates Next Iteration of Loop](../directives/continue.md)**  
|  ***END** |  Emulates **[END Halt Execution of Program](../directives/end.md)**  
|  ***ESCAPE** |  Emulates **[ESCAPE Interrupt Program Execution](../directives/escape.md)**  
|  ***NEXT** |  Goes to the beginning of the next line/statement  
|  ***PROCEED** |  Continues to the next statement in a compound statement or to the beginning of the next line  
|  ***RETRY** |  Emulates **[RETRY Re-Execute Failing Instruction](../directives/retry.md)**  
|  ***RETURN** |  Emulates **[RETURN Return From a Subroutine](../directives/return.md)**  
|  ***SAME** |  Goes to the start of the current line/statement  
  
#### **Note:**  
Prior to PxPlus v4.20, the *CONTINUE and *BREAK labels and the corresponding directives are not supported for use with **[SELECT](../directives/select.md)** / **[NEXT RECORD](../directives/next_record.md)** directives. **BREAK** and ***BREAK** commands can now be used in **SELECT** structures.

## Example

A=0,Y$=""  
read (1,ind=A++,err=*next)X$;  
Y$+=X$;  
goto *same

## See Also

**[BREAK Immediate Exit of Loop](../directives/break.md)**  
**[CONTINUE Initiates Next Iteration of Loop](../directives/continue.md)**  
**[END Halt Execution of Program](../directives/end.md)**  
**[ESCAPE Interrupt Program Execution](../directives/escape.md)**  
**[RETRY Re-Execute Failing Instruction](../directives/retry.md)**  
**[RETURN Return From a Subroutine](../directives/return.md)**
