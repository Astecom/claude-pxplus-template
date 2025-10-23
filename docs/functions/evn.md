# System Functions

**EVN( )** |  **_Evaluate Numeric Expression_**  
---|---  
  
##  Formats

1. |  _Evaluate Numeric String Expression_: |  **EVN(**_var_ _$_[ ,_val_ ]__[,**ERR=**_stmtref_]**)**  
---|---|---  
  
The following was added in PxPlus v9.00:

2. |  _Evaluate Numeric Expression_: |  **EVN(**_=numexpr_[ ,_val_ ]__[,**ERR=**_stmtref_]**)**  
---|---|---  
  
**_Where:_**

_val_ |  Default value to be returned if the evaluation fails at run time (with any error except a syntactical error). If supplied, the error will be ignored and the value will be returned instead. **_Example:_**  
  
print evn("40/0",0)  
  
This would return _val_ _=_ 0 rather than generate an Error #40: Divide check or numeric overflow.  
---|---  
_var_ _$_ |  String expression containing numeric variable name. Maximum string size 8KB. Receives the returned evaluated contents of the variable. You can build the variable name using string expressions (see **[Example](evn.htm#Mark6)**).  
_numexpr_ |  Numeric expression to be processed and whose value will be returned by the **EVN** function.  
_stmtref_ __ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Returns the value of the evaluated numeric expression.

##  Format 1

**EVN(**_var_ _$_[ ,_val_ ]__[,**ERR=**_stmtref_]**)**

This format evaluates and returns the numeric value of a numeric variable or computed expression. Use this function to process a stored or computed expression and obtain its current value. Any error (syntax or run-time error) will be trapped by the function and can be processed by the **ERR=** option.

If the default value (_val_ _)_ is supplied, it will be returned if the expression results in an error.

##  Format 2

**EVN(**_=numexpr_[ ,_val_ ]__[,**ERR=**_stmtref_]**)**

This format simply returns the value of the expression supplied in _numexpr_. You can use this format when you have a constant expression that you need to place an error trap around (e.g. an expression that includes a reference to an object method or function that you do not know if it exists).

#### **Note:**  
In both formats, if the default value (_val_ _)_ is supplied, it will be returned if the expression results in an error. If no default value is supplied and an error occurs, the **ERR=** trap will be taken.

_(The ability to pass an expression to the EVN function was added in PxPlus v9.00.)_

##  See Also

[**EVS( ) Evaluate String Expression**](evs.md)  
[**VIN( ) / VIS( ) Obtain Value of Variable**](vin.md)

##  Example

In this example, evn("GL_"+X$) builds the variable name based on user input and returns the value stored in the variable:

> 0010 GL_YTD=10000,GL_MTD=3000,GL_CUR=10  
>  0020 input "Which field (YTD,MTD,CUR):",X$  
>  0030 print evn("GL_"+X$):"$###,##0.00-"  
>  0040 stop

> If the user's input is CUR for X$, the variable name will be GL_CUR. If the value stored in GL_CUR in the current record is, for example, 9999.63, the system prints that value (using the format mask) as $9,999.63.

In this next example, evn(V$) will print the numeric value stored in V$ for the current record of logical file number RPT_FN:

> 0090 K$=key(RPT_FN); if K$(1,12)<>RPT_ID RETURN  
>  0100 read (RPT_FN)L,C,V$  
>  0110 print (RPT_FN) @(C,L),evn(V$)  
>  0120 goto 0090
