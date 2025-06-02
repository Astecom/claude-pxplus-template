# System Functions

**RDX( )** |  **_Convert ASCII to Radix-40_**  
---|---  
  
##  Format

**RDX(**_ascii_ _$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_ascii_ _$_ |  Character string containing ASCII data. String expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Radix-40 equivalent of given ASCII string.

##  Description

The **RDX( )** function is used to convert data from normal ASCII to Radix-40. Conversion to Radix-40 compresses three characters (any of 0-9, A-Z, **.** , **-** , **$** , or space) into two bytes of data (16 bits).

To convert data back to ASCII, use the inverse function **TRX( )**.

##  See Also

**[TRX( ) Convert Radix-40 to ASCII](trx.md)**

##  Example

A$=lst(pgm(65000));  
print "string: ",quo,A$,quo  
print hta(A$)  
print hta(rdx(A$))  
  
->run  
string: "65000 END "  
363530303020454E4420  
2CB106686E600000
