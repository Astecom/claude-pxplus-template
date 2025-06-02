# Directives 

**ESCAPE** |  **_Interrupt Program Execution_**  
---|---  
  
##  Format

**ESCAPE** [_err_val_] [**ON | OFF**]

**_Where:_**

_err_val_ |  Optional numeric value to be placed in the **ERR** variable. (PxPlus interprets this as an error code and the system logic kicks in.)  
---|---  
**ESCAPE ON** |  Restores the standard functioning of the **ESCAPE** directive with no error value, which is to halt processing and enter Command mode.  
**ESCAPE OFF** |  Causes the system to ignore any **ESCAPE** directives that do not have error values, which would normally cause processing to halt and enter Command mode.  
  
##  Description

When you use the **ESCAPE** directive in Execution mode, PxPlus suspends execution of the current program, lists the current statement (the line number with the **ESCAPE** directive), and returns you to Command mode. Use the **[RUN](run.md)** directive to have the program resume where it left off.

You can simplify the debugging process by placing **ESCAPE** statements strategically in your program. When execution is suspended, you are returned to Command mode, where you can evaluate execution and the values of variables, etc. (up to the line where you placed the **ESCAPE** in your application).

If you enter **ESCAPE** in Command mode, PxPlus lists the next statement to be processed, if any. If you specify an error value, the **ESCAPE** directive will generate an error with that specific error value. Use this to provide an error exit in a multi**-** line function.

The *ESCAPE label emulates an **ESCAPE** directive for use as a statement reference.

#### **Note:**  
When an **ESCAPE** directive is executed within a program, the system will reset the [**'XT'**](../parameters/xt.md) system parameter to avoid accidental session termination.

##  See Also

[**DEF FN Define Function**](def_fn.md)  
[**Labels/Logical Statement References**](../appendix/labels~logical_statement_references.md)

##  Example

0100 print "BEGIN"; escape; print "DONE"

When 'run', this would yield:

> BEGIN  
>  0100 PRINT "BEGIN"; ESCAPE ; PRINT "DONE"  
>  1> (_Command mode prompt_)  
>   
>  Entry of a 'run' command would yield:  
>   
>  DONE
