# System Functions  
  
**GAP( )** |  **_Return Odd Parity String_**  
---|---  
  
##  Format

**GAP(**_string$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string$_ |  Character string to convert to Odd parity.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Odd parity value of string.

##  Description

The **GAP( )** function converts and returns the character string expression in Odd parity. This function is typically used when dealing with communication lines. It is not normally used in operating systems since the standard communications drivers handle the generation of parity.

The number of one**-** bits in each byte of the character string determines the parity of data. Odd parity data always has an odd number of one**-** bits in each byte of data.

##  See Also

**[GEP( ) Return Even Parity String](gep.md)**

##  Example

print "hta(""This is a test"") =",hta("This is a test")  
print "hta(gap(""This is a test""))=",hta(gap("This is a test"))

->run  
hta("This is a test") =5468697320697320612074657374  
hta(gap("This is a test"))=5468E97320E973206120F4E573F4
