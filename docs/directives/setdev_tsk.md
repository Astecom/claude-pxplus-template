# Directives

**SETDEV TSK( )** |  **_Add to TSK( ) List_**  
---|---  
  
##  Format

**SETDEV TSK( )**_task$_  
  
**_Where:_**

_task$_ |  String of characters to add to the **TSK( )** table. String expression.  
---|---  
  
##  Description

Use the **SETDEV TSK( )** directive to add a string to the end of the internal table for the **TSK( )** function. Each time **SETDEV TSK( )** is used, the _task$_ is evaluated and appended to the internal table.

Do not include a task number in the **SETDEV TSK( )** directive. PxPlus automatically supplies the next available number in sequence. The order of the table is determined by the order in which **SETDEV TSK( )** directives are executed. PxPlus places the string from the first **SETDEV TSK( )** into **TSK(0)** , the second into **TSK(1)** and so on. If you use the **TSK( )** function with an invalid task number, PxPlus returns an Error #41: Invalid integer encountered (range error or non-integer).

##  See Also

**[TSK( ) Returns Entry from Task List](../functions/tsk.md)**

##  Example

setdev tsk()"lp - hp laserjet on johns desk"  
setdev tsk()"p1 - epson printer - spooled"  
print tsk(0),'LF',tsk(1)  
  
LP - hp laserjet on johns desk  
P1 - epson printer - spooled
