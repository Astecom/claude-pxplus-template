# Directives

**REM** |  **_Remark_**  
---|---  
  
##  Formats

**REM** _comments ..._

**_or_**

**!**_comments_

**_Where:_**

**!** |  PxPlus accepts the **!** (_exclamation point_) as a substitute for **REM**.  
---|---  
_comments_ |  Remarks. Programmer's comments or documentation.  
  
##  Description

Use the **REM** directive to insert program remarks and comments (e.g. documentation and notes) in a program. The **REM** statement has no effect on the execution of the program. PxPlus treats all characters in a statement following the **REM** directive as comments. The **REM** directive is the last one processed in any statement.

Since PxPlus embeds the comment text following the **REM** directive in the compiled form of the program, remarks occupy memory space when the program is loaded and run.

##  Example

rem Invoice Generation Program - INVGEN  
! Written by: Kathryn Doe, Anytown, Canada
