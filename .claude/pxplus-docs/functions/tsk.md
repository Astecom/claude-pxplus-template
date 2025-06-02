# System Functions  
  
**TSK( )** |  **_Returns Entry from Task List_**  
---|---  
  
##  Format

**TSK( {**_num_**| EVENT }** [,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_num_ |  Desired index entry in the internal task table. Numeric expression, range 0 to _n_.  
---|---  
**EVENT** |  Keyword to indicate that the return value should be a list of active event handlers.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
_(The EVENT option was added in PxPlus v11.00.)_

##  Returns

String, value of task internal task table.

##  Description

The **TSK( )** function returns a string value from the internal task table. The returned table entry is determined by the task number specified, _num_ _,_ or the presence of the keyword **EVENT**.

If the **EVENT** keyword is used, the system will return a list of all events that currently have actions associated with them. Each entry will consist of the event name followed by a TAB ($09$) and the action followed by another TAB ($09$) and a line feed ($0A$).

If the format specifying a value _n_ is used, an error will be generated if the entry has not been set up in the task table (using a **SETDEV TSK( )** directive).

##  See Also

[**SETDEV TSK( ) Add to TSK( ) List**](../directives/setdev_tsk.md)

##  Example

setdev tsk()"this is table entry 0"  
setdev tsk()"this is table entry 1"  
print tsk(1)  
  
->run  
this is table entry 1

#### **Note:**  
An argument of -1 always returns "[Pvx", which is the internal header for files.
