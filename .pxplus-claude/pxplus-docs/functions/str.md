# System Functions

**STR( )** |  **_Convert Numeric to String_**  
---|---  
  
##  Formats

1\. _Convert Numeric String to ASCII_ _:_ |  **STR(**_num_[:_mask$_][,_err_val_ _$_] **[ DEFAULT ]**[,**ERR=**_stmtref_]**)**  
---|---  
2\. _Convert ASCII String to Mask_ _:_ |  **STR(**_string$_**:**_mask$_[,_err_val_ _$_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_err_val_ _$_ |  Error value to return should the conversion fail. String expression. If you omit _err_val_ _$_ and the conversion fails, PxPlus either reports Error #43: Format mask invalid or returns the value unformatted, depending on your setting for the **'FI'** system parameter.  
---|---  
_mask$_ |  Format mask to be used in the conversion process. Maximum string size 8KB. For a list of valid mask characters, see [**Data Format Masks**](../appendix/data_format_masks.md).  
_num_ |  Numeric value to convert to a character string.  
_string$_ |  String expression to be processed.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
**DEFAULT** |  Optional keyword that, when specified, forces the function to use the system defaults for the decimal point (**.**), currency symbol (**$**) and thousand separator (**,**) as opposed to the characters defined by the **'DP'** , **'CU'** and **'TH'** system parameters.  
  
(The DEFAULT keyword was added in PxPlus 2014.)

##  Returns

String, converted and validated.

##  Description

The **STR( )** function converts and validates strings. Add a format mask to specify the size and format of the resultant character string.

When a format mask is included, **STR( )** returns a string value converted from numeric using the default decimal point and thousands separator set by **'DP'** and **'TH'**. If the format mask is omitted, '**DP'** and **'TH'** settings are ignored.

##  See Also

[**'FI' Ignore Format Mask Error**](../parameters/fi.md)  
[**'DP'= Decimal Point Symbol**](../parameters/dp.md)  
**['CU'= Currency Symbol](../parameters/cu.md)**  
[**'TH'= Thousands Separator**](../parameters/th.md)  
[**Data Format Masks**](../appendix/data_format_masks.md)

##  Format 1

**_Convert Numeric String to ASCII_**

**STR(**_num_[:_mask$_][,_err_val_ _$_][,**ERR=**_stmtref_]**)**

Use this format to convert a numeric value to an ASCII character string.

**_Example:_**

**Function** |  **String Value Returned**  
---|---  
A$=str(5*6) |  Yields A$="30"  
A$=str(5*6:"000") |  Yields A$="030"  
A$=str(.01:"0.00") |  Yields A$="0.01"  
A$=str(99:"0.00","****") |  Yields A$="****"  
  
##  Format 2

**_Convert ASCII String to Mask_**

**STR(**_string$_ :_mask$_[,_err_val_ $][,**ERR=**_stmtref_]**)**

Use this format to convert and validate a _string_ value based on the format _mask_ (which dictates the size and content of the results).

**_Example:_**

**Function** |  **String Value Returned**  
---|---  
A$=str("1234567":"000-0000") |  Yields A$="123-4567"  
A$=str("AB":"00","**") |  Yields A$="**"  
  
##  Example

The following example will print **OverFlow** if the value is too large for the mask:

> x=1234567890.12  
>  print str(x:"####,##0.00-","**OverFlow**") ! Yields **OverFlow**

If the value is too large with pennies, try it without the pennies or else print **OverFlow**:

> x=1234567890.12  
>  print str(x:"####,##0.00-",str(x:"####,###,##0","**OverFlow**")) ! Yields 1234,567,890
