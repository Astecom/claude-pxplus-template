# System Functions

**UPK( )** |  **_Unpack Numeric Data_**  
---|---  
  
##  Format

**UPK**(_string$[,_**ERR=**_stmtref_ _])  
_  
**_Where:_**

_stmtref_ |  Program line number or statement label to which to transfer control.  
---|---  
_string$_ |  String expression whose value represents a packed number.  
  
##  Returns

Numeric expression of whose value has been packed into a string.

##  Description

**UPK( )** is used to convert a packed string into its numeric value. It is the counterpart of the **PCK( )** function.

The packing algorithm used takes a numeric value and splits it into a series of two-digit values where each of the two-digit values represents a number between 0 and 99. These numbers are then added to 32 to create the series of single-byte printable characters that comprise the packed string. To unpack the value, each byte of the string has 32 subtracted from it, and the resultant values become a series of two-digit values in the final result.

Should the value of any two-digit pair (when added to 32) equal or exceed the standard file separator ($8A$), the value will be incremented by one when the output string is created. When unpacking the string, any byte exceeding the field separator will be reduced by one prior to subtracting 32.

#### **Note:**  
Only positive integers can be packed/unpacked.

##  See Also

**[PCK( ) Pack Numeric Data](pck.md)**

****

****
