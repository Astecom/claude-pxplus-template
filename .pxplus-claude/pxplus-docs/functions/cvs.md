# System Functions

**CVS( )** |  **_Convert String_**  
---|---  
  
##  Formats

1. |  _Reformat String_: |  **CVS(**_data$_ ,[_cvs_code_[:_ctl_char_ _$_],_..._][,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Return Accent Table_: |  **CVS( * )**  
3. |  _Return Character String_: |  **CVS(**_num_val_ _, num_val, num_val, ..._ **)** (Added in PxPlus v7.00)  
  
**_Where:_**

***** |  _(asterisk)_ Returns the current 256-byte accent translation table.  
---|---  
_ctl_char_ _$_ |  Optional control character. String expression. Default: blank character.  
_cvs_code_ |  Conversion type. Numeric expression. See the table in **[Format 1](cvs.htm#Mark7)**.  
_data$_ |  Data to convert. String expression.  
_num_val_ |  Numeric values of the characters to be converted into a string.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Converted value of string expression or accent translation table.

##  Format 1

The **CVS( )** function converts a string of data to different forms based on the numeric values used for _cvs_code_ (e.g. to convert to uppercase, stripped string, etc.). The numeric expression tells the function the type of conversion to perform. If you append a **:** (_colon_) and string value, the control character used in the conversion will be the first character of the string; otherwise, it will be a space.

You can also use the function to return the current accent translation table and do translations based on it. See **[DEF CVS/DTE/LCS/UCS](../directives/def_cvs~dte~lcs~ucs.md)** directives.

The value of _cvs_code_ is made up of a series of binary values indicating:

**Value** |  **Conversion to Take Place**  
---|---  
1 |  Strip leading control characters.  
2 |  Strip trailing control characters.  
4 |  Convert string to uppercase.  
8 |  Convert string to lowercase.  
16 |  Replace non**-** printable characters with the control character.  
32 |  Replace multiple occurrences of the character with one.  
64 |  Replace $ with a defined currency symbol, comma with a defined thousands separator, and period with a defined decimal point. See the following system parameters:  
  
[**'CU'= Currency Symbol**](../parameters/cu.md)  
[**'DP'= Decimal Point Symbol**](../parameters/dp.md)  
[**'TH'= Thousands Separator**](../parameters/th.md)  
128 |  Replace a defined currency symbol, thousands separator and decimal point with $, comma, and period respectively (inverse of value 64 above).  
256 |  Convert string to mixed case (first letter of each word is uppercase, the rest of the letters are lowercase).  
512 |  Translate the string expression provided in _data$_ based on the current accent translation table.  
  
##  See Also

[**STP( ) Strip Leading/Trailing Characters**](stp.md)  
[**LCS( ) Return Lowercase String**](lcs.md)  
[**UCS( ) Return Uppercase String**](ucs.md)

##  Example

print "|",cvs(" The Cat ",1:" "),"|" |  _yields_ |The Cat|  
---|---  
print "|",cvs(" The Cat ",2:" "),"|" |  _yields_ |The Cat|  
print "|",cvs(" The Cat ",39),"|" |  _yields_ |THE CAT|

#### **Note:**_  
_ 32+4+2+1=39 (you can use a sum)  
  
print cvs("$$$123",32:"$") |  _yields_ $123  
  
##  Format 2

The **CVS( * )** format returns a 256-byte string consisting of the character mapping table used for accented characters. Each byte in the table represents the character that the system uses when applying the accented character mapping for keyed files.

**_Example:_**

If the character is found in the text, its binary value (194 - Hex $C2$) will be used as the offset into the mapping table. For purposes of computing the offset, the first character in the table is considered offset 0, the second offset 1, and so on; therefore, an will be substituted with the character at position 195 in the string.

##  Format 3

The **CVS( )** function can also be used to return a character string based on a series of numeric values. When using Format 3, each numeric value passed is considered to be the binary UNICODE value for each character in the string to be returned.

**_Example:_**

The value of cvs(77,105,107,101) will return the string "Mike" since the binary value of "M" is 77, "i" is 105, etc.:

> cvs(77,105,107,101) = chr(77)+chr(105)+chr(107)+chr(101)

The primary purpose of this function is to provide for the easy conversion of UNICODE data into UTF-8.

_(The CVS extension to provide UNICODE values was added in PxPlus v7.00.)_
