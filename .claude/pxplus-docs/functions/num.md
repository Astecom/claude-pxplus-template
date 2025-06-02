# System Functions

**NUM( )** |  **_Convert String to Value_**  
---|---  
  
##  Format

**NUM(**_string$_[_, errval_ ] [,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_string$_ |  Character string whose value is to be converted to a numeric value. Numeric in string expression (e.g. "19990317").  
---|---  
_errval_ |  Value to return if _string$_ is not numeric. Optionally can be an ***** (_asterisk_) to test _string$_. See **Numeric String Testing**.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Numeric value from string.

##  Description

The **NUM( )** function returns the numeric value of a numeric expression in a string (e.g. 19990317 from "19990317"). The string is evaluated and converted to a numeric value.

If the value in _string$_ does not contain a valid numeric value, the system returns an Error #26: Variable type invalid. Your string expression can include any number of the following valid characters: 0 - 9, a space, a comma, an equals sign, or a dollar sign. You can also include one decimal point along with one sign character (either '**-** ' or '**+** ').

**NUM( )** ignores the decimal point and thousands separator settings in the **['DP'](../parameters/dp.md)** and **['TH'](../parameters/th.md)** system parameters and assumes the North American standard of "," for thousands and "." for the decimal point.

Scientific notation is supported; e.g. num("0.2E+10") returns a numerical value of 2000000000. As of PxPlus 2021, the **+** after the **E** is optional, and if omitted, the results will be the same as including the **+** ; e.g. num("0.2E10") is the equivalent of num("0.2E+10"). Prior to PxPlus 2021, converting scientific notation only worked if the format included a **+** or **-** after the **E**.

_(Support for optionally including + after the E was added in PxPlus 2021.)_

##  Numeric String Testing

If an ***** (_asterisk_) is used in place of _errval_ , the**NUM( )** function does not convert the value of _string$_ but rather validates it can be converted to numeric. It will return a 0 if the value in _string$_ is not a valid numeric string, or 1 if it is a valid number.

_(The ability to use errval or to specify an asterisk in the NUM function was added in PxPlus v6.30.)_

##  Example

A=num("1.34") |  Yields 1.34  
---|---  
A=num("-1,005.") |  Yields -1005  
A=num("A",err=0050) |  On error, transfers to 0050 and sets err=26  
A=num("A",1234) |  Yields 1234  
A=num("1.34",*) |  Yields 1  
A=num("A",*) |  Yields 0
