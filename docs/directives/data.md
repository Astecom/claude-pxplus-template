# Directives

**DATA** |  **_Define Data Elements_**  
---|---  
  
##  Format

**DATA** _expression_[_$_][, _..._]  
  
**_Where:_**

_expression[$], ..._ |  A series of string or numeric expressions.  
---|---  
  
##  Description

Use the **DATA** directive to define the values for the **READ DATA** directive. The values to be read can include constants, variables, and/or expressions. You can use a formatted IOList with a **READ DATA** statement. When PxPlus executes the **READ DATA** directive, it evaluates each expression in order and places its value into the corresponding variable(s) defined in the **READ DATA** directive.

When PxPlus progresses through reading the data, it increments an internal pointer to the next data expression. When the end of **DATA** statement is reached, PxPlus proceeds to the next **DATA** statement in the program. PxPlus returns Error #2: END-OF-FILE on read or File full on write when no further **DATA** statements exist in the program.

#### **Note:**  
You cannot use the **DATA** directive in a compound statement.

##  See Also

**[READ DATA Read Data from Program](read_data.md)  
[RESTORE Reset Program Data Position](restore.md)  
[BEGIN Reset Files and Variables](begin.md)**  
**[LOAD Read Program into Memory](load.md)**

##  Example

0010 data 1,"Dog"  
0020 data 2,"Cat"  
0030 data 3,"Pig"  
0040 read data n,x$,err=DONE  
0050 print n,x$  
0060 goto 0040  
0070 DONE: print "done"  
0080 end  
  
->run  
1Dog  
2Cat  
3Pig done
