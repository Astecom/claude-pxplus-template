# System Functions

**GEP( )** |  **_Return Even Parity String_**  
---|---  
  
##  Format

**GEP(**_string$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string$_ |  Character string to convert to Even parity.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Even parity value of string.

##  Description

The **GEP( )** function converts and returns the character string expression in Even parity. This function is typically used when dealing with communication lines. It is not normally used by the operating system since the standard communications drivers handle the generation of parity.

The number of one**-** bits in each byte of the character string determines the parity of data. Even parity data always has an even number of one**-** bits in each byte of data.

##  See Also

**[GAP( ) Return Odd Parity String](gap.md)**

##  Example

print "hta(""This is a test"") =",hta("This is a test")  
print "hta(gep(""This is a test""))=",hta(gep("This is a test"))

->run  
hta("This is a test") =5468697320697320612074657374  
hta(gep("This is a test"))=D4E869F3A069F3A0E1A07465F374
