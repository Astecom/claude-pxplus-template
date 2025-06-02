# System Functions

**MIN( )** |  **_Return Minimum Value_**  
---|---  
  
##  Format

**MIN(**_compare_1_ ,_compare_2_ , ... [,**ERR=**_stmtref_]**)**

**_Where:_**

_compare1,compare2, ..._ |  Comma-separated list of values and/or expressions to be compared in order to determine the lowest value.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

The smallest numeric or string value from the list of supplied values.

##  Description

The **MIN( )** function returns the minimum (smallest) value of the values or expressions specified. There is no limit to the number of values or expressions that can be passed to the **MIN( )** function. All compare values must be the same type -- numeric or string.

_(The ability to use the MIN function on a string was added in PxPlus v8.01, build 9181.)_

##  See Also

[**MAX( ) Return Maximum Value**](max.md)

##  Example

In this example, the **MIN( )** function evaluates an expression (13/2.96=4.39), a literal (4.5) and a variable (evaluated, A=5.69):

> A=12.345/2.71  
>  B=min(13/2.96,4.5,A);  
>  print B

> ->run  
>  4.39

> > > 
