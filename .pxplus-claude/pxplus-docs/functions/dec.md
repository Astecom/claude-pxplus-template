# System Functions

**DEC( )** |  **_Get Binary of String_**  
---|---  
  
##  Format

**DEC(**_string$_[,**ERR=**_stmtref_]**)**

**_Where:_** |   
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  Character string or variable containing value to be converted to binary.  
  
##  Returns

Two's complement binary equivalent of the string.

##  Description

The **DEC( )** function converts a string to its corresponding binary equivalent. (The value returned is a two's complement binary integer that corresponds to the value of the string.)

##  Example

A$="a";  
print dec(A$),  
B$=$0040$;  
print " | ",dec(B$),  
C=dec("A");  
print " | ",C,  
A=dec($FE$);  
print " | ",A,  
print " | DONE"  
  
->run  
97 | 64 | 65 | -2 | DONE
