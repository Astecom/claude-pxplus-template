# System Variables

**ERS** |  **_Line Number of Last Error_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, line number that generated last error

##  Description

The **ERS** variable contains the line number that generated the last error detected in the program.

##  Example

0030?let X$="" print "Reset"  
Error #20: Syntax error  
  
->run  
0030?let X$="" print "Reset"  
Error #20: Syntax error  
  
?ers  
30  
  
edit 30
