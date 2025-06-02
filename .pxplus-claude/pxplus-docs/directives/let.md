# Directives

**LET** |  **_Assign Value to Variable_**  
---|---  
  
##  Format

[**LET**] _var_[_$_]=_expression_ ,[_var_[_$_]=_expression,..._]

**_Where:_**

_var_ |  Numeric or string variable to be set to the value of the expression.  
---|---  
_expression_ |  Numeric or string expression whose value will be assigned to the variable.  
  
##  Description

Use the **LET** directive to set a variable to the value of an expression. If the variable is numeric, use a numeric expression. If it is a string variable, use a string expression. You can use substrings with string variables. (Specify the starting position and optional length.)

The word **_L E T_** is optional in Command mode. PxPlus assumes use of the **LET** directive when it encounters a directive starting with a variable. You can include multiple **LET** directives in one statement by using comma delimiters. In this case, if you use the word **_L E T_** , it only occurs once before the first assignment.

You can initialize, copy or manipulate a complete array by specifying **{ALL}** following the variable name. **{ALL}** can be used on both sides of an equation.

#### **Note:**  
The curly brackets **{ }** are part of the syntax.

##  Example

0080 let A$="THIS IS AN EXAMPLE"  
0100 A$(1,4)="WHAT",A$(19)="!",Z$=""  
0110 A$(5,4)=Z$

If Z$ is more than 4 characters, A$(5,4) is set as the first 4 characters of Z$. If Z$ is less than 4 characters, the A$(5,4) value is Z$ plus space padding up to a length of 4 characters:

> ->run  
>  ->?A$  
>  WHAT AN EXAMPLE!

**_Other Examples:_**

> Z4=A+4.5,Z5=Z4*.85

> let D$=day,T=tim*3600

> dim A[30]; let A{all}=A{all}*4
