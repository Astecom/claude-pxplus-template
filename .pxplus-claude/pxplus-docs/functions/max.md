# System Functions

**MAX( )** |  **_Return Maximum Value_**  
---|---  
  
##  Format

**MAX (**_compare1_ ,_compare2_ ,...[,**ERR=**_stmtref_]**)**

**_Where:_**

_compare1, compare2, ..._ |  Comma-separated list of values and/or expressions to be compared in order to determine the highest value.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

The largest numeric or string value from the list of supplied values.

##  Description

The **MAX( )** function evaluates and returns the maximum (largest) value of the values or expressions specified. There is no limit to the number of values or expressions that can be passed to the **MAX( )** function.

All compare values must be the same type -- numeric or string.

_(The ability to use the MAX function on a string was added in PxPlus v8.01, build 9181.)_

##  See Also

[**MIN( ) Return Minimum Value**](min.md)

##  Example

In this example, **MAX( )** evaluates an expression (12*3.7=44.4), a literal (44.8) and a variable (evaluated, A=43.2):

> A=13.21*3.27  
>  B=max(12*3.7,44.8,A)  
>  print B

> ->run  
>  44.8
