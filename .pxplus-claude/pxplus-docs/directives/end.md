# Directives 

**END** |  **_Halt Execution of Program_**  
---|---  
  
##  Format

**END**

##  Description

Use the **END** directive to halt the currently running program. If the current program is a subprogram, then control is immediately passed back to the calling program. Otherwise, all open files are closed, a **RESET** operation is performed, and the next location counter is set to the start of the program.

If an application is invoked directly by an operating system command that specifies a lead program, then the **END** directive performs the function of a**QUIT** and automatically returns the user to the operating system. If the application is **RUN** from Command mode, PxPlus returns to Command mode.

When you use the **END** directive in a compound statement, it must be the final directive. (**_Exception:_** A remark can follow the **END** directive.)

The ***END** label emulates an **END** directive for use as a statement reference.

The **END** directive is functionally identical to the **STOP** directive.

##  See Also

[**QUIT Terminate PxPlus**](quit.md)**  
** [**RELEASE Terminate PxPlus**](release.md)  
[**STOP Halt Program Execution**](stop.md)  
[**Labels/Logical Statement References**](../appendix/labels~logical_statement_references.md)
