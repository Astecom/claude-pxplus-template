# Directives

**GOTO** |  **_Transfer Within Program_**  
---|---  
  
##  Format

**GOTO** _stmtref_  
  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
  
##  Description

Use the **GOTO** directive to have PxPlus transfer execution to the given statement number or label. If the line does not exist, then the statement with the next higher number will be used.

The **GOTO** directive can be used in either Execution or Command mode. In Command mode, the **GOTO** directive causes execution to begin at the statement number specified upon execution of the next **[RUN](run.md)** directive.

If you use **GOTO** in a compound statement, it must be the final directive.

##  Example

**_In Execution Mode:_**  
  
0010 input "Enter a number: ",A  
0020 if A=0 then print "DONE"; stop  
0030 print A," multiplied by 2 is ",A*2  
0040 goto 0010  
  
**_In Command Mode:_**  
  
->goto 10  
->run  
Enter a number: 1  
1 multiplied by 2 is 2  
Enter a number: 3  
3 multiplied by 2 is 6  
Enter a number: 0  
DONE
