# System Functions

**TRX( )** |  **_Convert Radix-40 to ASCII_**  
---|---  
  
##  Format

**TRX(**_rdx_40$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_rdx_40$_ |  Character string containing Radix-40 data.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

ASCII equivalent of given Radix-40 data.

##  Description

The **TRX( )** function converts data from Radix-40 to normal ASCII. The input to this function is generally the result of a call to the **RDX( )** function, which performs the inverse of converting ASCII to Radix-40. Radix-40 lets you compress three characters into two bytes of data (16 bits).

The compression algorithm only supports the characters A-Z, 0-9, **.** , **-** , **$** or space. Lowercase letters are converted to their uppercase equivalent. All other characters are replaced with spaces.

##  See Also

**[RDX( ) Convert ASCII to Radix-40](rdx.md)**

##  Example

A$=lst(pgm(65000));  
print "string: ",quo,A$,quo  
B$=hta(rdx(A$));  
print B$  
print hta(trx(B$))  
  
->run  
string: "65000 END "  
2CB106686E600000  
37304F394B4D36504A374F20374F41374E54365044365044
