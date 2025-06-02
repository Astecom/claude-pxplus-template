# Directives

**DELETE** |  **_Remove Lines from Program_**  
---|---  
  
##  Format

**DELETE** [_start_stmtref_][,[_end_stmtref_]]  
  
**_Where:_**

_end_stmtref_ |  Last program statement to be deleted. Line label or number.  
---|---  
_start_stmtref_ |  Starting program statement to be deleted. Line label or number.  
  
##  Description

Use the **DELETE** directive to delete a range of statements from the current program.

**_Example:_**

> delete SECT1,450 deletes from statement label SECT1: to line 0450 inclusive.

If you only include a starting statement reference, only that statement is deleted:

> delete 510 ! Deletes statement 0510  
> 510 ! Is the same as delete 510

If you include both a starting reference and a comma, all statements from the reference to the end of the program are deleted. If you include a comma and an ending reference, statements from the start of the program up to and including the ending reference are deleted:

> delete 260, ! Deletes statements from line 0260 to program end  
> delete ,890 ! Deletes from program start, up to and including line number 0890

If you omit statement references, the complete program is deleted from memory.

##  Example

->list  
rem "TEST"  
print "TEST"  
stop  
->delete  
->list

No program is in memory, so PxPlus does not return a listing and will report errors if you try to **EDIT** or **SAVE**.
