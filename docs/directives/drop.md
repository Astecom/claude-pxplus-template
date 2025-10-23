# Directives

**DROP** |  **_Removes Program from Memory_**  
---|---  
  
##  Format

**DROP** _prog_ _$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_prog_ _$_ |  Name of the program to be unloaded from memory. String expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **DROP** directive to unload a program previously loaded into memory by the **ADDR** directive. The memory used while the program was loaded is returned to the system. PxPlus returns an Error #17: Invalid file type or contents if you use a **DROP** statement for a program that is not currently loaded in memory.

#### **Note:**  
In **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**, **DROP OBJECT** can be used to delete an object and **[DROP CLASS](drop_class.md)** can be used to delete a class. See **[DELETE](delete.md)** and **[DELETE OBJECT](delete_object.md)**.

##  See Also

**[ADDR Load and Lock Program in Memory](addr.md)**

##  Example

drop "ARDATE"
