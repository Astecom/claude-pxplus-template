# System Functions 

**EVS( )** |  **_Evaluate String Expression_**  
---|---  
  
##  Formats

1. |  _Evaluate String Expression_: |  **EVS(**_var_ _$_ **[** ,_val_ _$_ **] [** ,**ERR=**_stmtref_**])**  
---|---|---  
  
The following was added in PxPlus v9.00:

2. |  _Evaluate Expression_: |  **EVS(**_=strexpr_**[** ,_val_ _$_**] [** ,**ERR=**_stmtref_**])**  
---|---|---  
  
**_Where:_**

_val_ _$_ |  Value to be returned if the evaluation fails at run time (with any error except a syntactical error). Optional. If you include a value, the error will be ignored and the value will be returned instead.  
  
**_Example:_** A=9999;  
print evs("str(a:""##0"")","<OverFlow>") This would display the value <Overflow> rather than generate an Error #43: Format mask invalid.  
---|---  
_var_ _$_ |  String variable name. Receives the returned evaluated contents of the variable. You can build the variable name using string expressions (see **[Example](evs.htm#Mark6)**).  
_strexpr_ |  String expression to be processed and whose value will be returned by the **EVS** function.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Evaluated contents of string variable.

##  Format 1

**EVS(**_var_ _$_ **[** ,_val_ _$_ **] [** ,**ERR=**_stmtref_**])**

This format evaluates and returns the value (evaluated contents) of a string variable.

## Format 2

**EVS(**_=strexpr_**[** ,_val_ _$_**] [** ,**ERR=**_stmtref_**])**

This format simply returns the value of the expression supplied in _strexpr_. You can use this format when you have a constant expression that you need to place an error trap around (e.g. an expression that includes a reference to an object method or function that you do not know if it exists).

#### **Note:**  
In both formats, if the default value (_val_ _$)_ is supplied, it will be returned if the expression results in an error. If no default value is supplied and an error occurs, the **ERR=** trap will be taken.

_(The ability to pass an expression to the EVS function was added in PxPlus v9.00.)_

##  See Also

[**EVN( ) Evaluate Numeric Expression**](evn.md)  
[**VIN( ) / VIS( ) Obtain Value of Variable**](vin.md)

##  Example

In this example, **EVS( )** builds the string variable's field name ("CST_"+X$+"$") based on the user's input and returns the value stored in it:

> CST_NAME$=who,CST_ADDR$="8920 Woodbine Avenue"  
>  CST_CITY$="Markham",CST_CONTACT$="Support"  
>  input "Which field (NAME,ADDR,CITY,CONTACT):",X$  
>  print evs("CST_"+X$+"$")  
>  stop

If the user's input for X$ is ADDR, the variable name will be CST_ADDR$. The value in evs(CST_ADDR$) for the current record could be 8920 Woodbine Avenue, which is what the system would return and then print.
