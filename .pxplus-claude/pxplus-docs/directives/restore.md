# Directives

**RESTORE** |  **_Reset Program Data Position_**  
---|---  
  
##  Format

**RESTORE** [_stmtref_]  
  
** _Where_ _:_**

_stmtref_ |  Program line number or statement label the data read pointer is set to.  
---|---  
  
##  Description

Use the **RESTORE** directive to change the position of the data read pointer. When a program is first loaded (or following a **BEGIN** directive), the data read pointer is set to the start of the program. As the data is read, the pointer is advanced through the various data statements in the program.

To set the data read pointer to a given location, include a statement reference in the **RESTORE** directive. Omit _stmtref_ to set the data read pointer to the default position at the start of the program. PxPlus returns an End of File message when all data statements in the program have been read.

##  See Also

**[BEGIN Reset Files and Variables](begin.md)  
[DATA Define Data Elements](data.md)**  
**[READ DATA Read Data from Program](read_data.md)  
[LOAD Read Program into Memory](load.md)**

##  Example

0010 data 1,2,3,"Cat"  
0020 data 4,5,6,"Dog"  
0030 read data X,Y,Z,A$,err=0050  
0040 print X,Y,Z,A$; goto 0030  
0050 input "Do you want to see the last one again? (Y/N)",X$  
0060 if X$="Y" or X$="y" then restore 0020; goto 0030  
0070 print " DONE"; stop  
  
->run  
1 2 3Cat  
4 5 6Dog  
Do you want to see the last one again? (Y/N)y  
4 5 6Dog  
Do you want to see the last one again? (Y/N)n  
DONE
