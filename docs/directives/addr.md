# Directives   
  
**ADDR** |  **_Load and Lock Program in Memory_**  
---|---  
  
##  Format

**ADDR** _prog_name$_[, **ERR=**_stmtref_]  
  
**_Where_** _:_

_prog_name_ _$_ |  Name of the program to be loaded and kept in memory. String expression. If you omit the pathname, PxPlus search rules apply.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **ADDR** directive loads the specified program into memory and keeps it there until you unload it.

For as long as the **ADDR-** loaded program is in memory, that specific program will be referenced (using its absolute path) even if you change the system **PREFIX** or current directory after executing the **ADDR** directive. That is, all subsequent references to any program whose name matches that string will still refer to the **ADDR-** loaded program.

You can see this in the example below. When the program is executed, PxPlus **ADDR-** loads "**DATECHK** ", changes directories and executes the **ADDR-** loaded program even though there is a different current directory and a different program with the same name might exist in that directory.

To unload a program that is **ADDR-** loaded, either use the **DROP** directive or execute the **START** directive.

##  See Also

[**DROP Removes Program from Memory**](drop.md)  
[**START Restart Session**](start.md)

##  Example

cwdir "USR/UTILS"  
addr "DATECHK" ! USR/UTILS/DATECHK is loaded in memory.  
cwdir "USR/AR" ! New working directory: could contain a different DATECHK.  
run "DATECHK" ! Still runs USR/UTILS/DATECHK.
