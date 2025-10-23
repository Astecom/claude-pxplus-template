# Directives 

**DEF FN** |  **_Define Function_**  
---|---  
  
##  Formats

1\. _Single Line:_ |  **DEF** **FN** _name_[_$_][([**LOCAL**]_argvar_[,[**LOCAL**]_argvar_][, ])]=_expression_[_$_]  
---|---  
2\. _Multi-Line:_ |  **DEF** **FN** _name_[_$_][([**LOCAL**]_argvar_[,[**LOCAL**]_argvar_][, ])]  
**RETURN** _expression_[_$_]  
**END DEF**  
  
**_Where:_**

_argvar_ _..._ |  Comma-separated list of variables that correspond to arguments passed to the function or returned in the expression. Alternatively, a function can be defined with no arguments.  
---|---  
_expression_[_$_] |  String or numeric expression. In multi-line functions, the _expression_ is the value returned. In single line functions, the _expression_ defines the value of the function.  
**FN** _name_[_$_] |  Name of the function with "FN" prefix. Use a valid string or numeric variable name; e.g. FNX or FNABC$.  
**LOCAL** |  Optional keyword. Indicates that an argument variable is local to the function. Use **LOCAL** to prevent permanent changes to program variables. PxPlus defers processing the **LOCAL** clause in functions until all arguments are parsed.  
  
##  Description

Use the **DEF FN** directive to define single- or multi-line functions. These functions are considered string or numeric, depending on the type of variable used in the function name.

In execution mode, PxPlus skips past the function without executing it. PxPlus resumes after the **DEF FN** directive, executing the rest of the code until it reaches the statement that invokes **FN** _name**(**_**)**... whereupon it applies the defined function.

If desired, a function can be defined with no arguments by leaving out the parenthesis:

**_Example:_**

> def fnmyfunc  
>  read record ("myFile",key="2020")data$  
>  return data$  
>  end def  
>   
>  x=fnmyfunc

#### **Note:**  
The maximum number of recursive calls to a user-defined function is 100.

##  Format 1

**_Single Line Function_**

**DEF** **FN** _name_[_$_][([**LOCAL**]_argvar_[,[**LOCAL**]_argvar_][, ])]=_expression_[_$_]

In a single line function assignment, _expression_ defines the value to be returned by the function. Include the optional keyword **LOCAL** to define argument variables as local.

**_Example:_**

> def fnX(A,B)=A^B  
>  A=1,B=2  
>  print A,B,fnX(3,4),A,B  
>  stop  
>   
>  ->run  
>  1 2 81 3 4

When fnX is invoked (as in print fnX(3,4)), the values in the variable list are assigned to the variables in the function definition.

#### **Note:**  
The variables in the function definition's argument list represent actual variables in the program. Their values are subject to change every time the function is invoked.  
  
Unless you define variables as **LOCAL** , changes to the variables in your program will be permanent. In the example above, variables A and B in the program are changed by fnX(3,4) because they are not defined as **LOCAL**.

##  Format 2

**_Multi-Line Function_**

**DEF** **FN** _name_[_$_][([**LOCAL**]_argvar_[,[**LOCAL**]_argvar_][, ])]  
**RETURN** _expression_[_$_]  
**END DEF**

When PxPlus encounters a multi-line definition, execution skips the subsequent statements until an **END DEF** directive is found. (Again, the function is not executed until it is invoked.)

Include the optional keyword **LOCAL** to define variables as local.

The **RETURN**  _expression_ specifies the value to be returned by the multi-line function. To generate an error value in a multi-line function, use the **ESCAPE** directive followed by your given value.

**_Example:_**

> def fnX(A,B)  
>  if A<0 or B<0 \  
>  then escape 40 ! Variables' values must be >=0  
>  return sqr(A^2+B^2) ! Length of hypotenuse  
>  end def  
>  print fnX(7,8)  
>   
>  ->run  
>  10.63
