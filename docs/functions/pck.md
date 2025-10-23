# System Functions

**PCK( )** |  **_Pack Numeric Data_**  
---|---  
  
##  Format

**PCK**(_num_ __**[**_, size_**] [** ,**ERR=**_stmtref_** __]** )  
  
**_Where:_**

_num_ |  Integer numeric value to be packed.  
---|---  
_size_ |  Optional length of output value. (Default is 8, if omitted)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String expression whose value represents a packed number.

##  Description

**PCK( )** is used to pack a numeric value into a string expression. It is the counterpart of the **UPK( )** function. The packing algorithm used takes a numeric value and splits it into a series of two-digit values where each of the two-digit values represents a number between 0 and 99. The output length should be half the number of digits in the number being packed (rounded up) with the system default being 8 bytes.

These numbers are then added to 32 to create the series of single-byte printable characters that comprise the packed string. To unpack the value, each byte of the string has 32 subtracted from it, and the resultant values become a series of two-digit values in the final result.

Should the value of any two-digit pair (when added to 32) equal or exceed the standard file separator ($8A$), the value will be incremented by one when the output string is created. When unpacking the string, any byte exceeding the field separator will be reduced by one prior to subtracting 32.

#### **Note:**  
Only positive integers can be packed/unpacked.

##  See Also

[**UPK( ) Unpack Numeric Data**](upk.md)
