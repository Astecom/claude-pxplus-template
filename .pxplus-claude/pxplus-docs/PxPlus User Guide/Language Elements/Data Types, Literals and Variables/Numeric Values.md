# Data Types, Literals and Variables

**Numeric Values** |  **__**  
---|---  
  
The numeric data type defines values that are used primarily in mathematical operations. In PxPlus, these values can appear in the form of literals, variables, expressions, functions and arrays from 1 to 3 dimensions. When numeric data is output, it can include formatting, such as commas (see **['TH'=](../../../parameters/th.md)**), decimal points (see **['DP'=](../../../parameters/dp.md)**), and currency symbols (see **['CU'=](../../../parameters/cu.md)**). See **[SET_PARAM](../../../directives/set_param.md)** directive and **[System Parameters](../../../parameters.md)**.

The most common format for a numeric value is as a simple number consisting of a sign, followed by series of digits and optional decimal point:

> 7 3.1415 -13.210 .333 -934

By default, PxPlus maintains a precision of 2 (digits to the right of the decimal). During calculations, numeric values are rounded to the currently set precision. The default can be reset (up to 18 digits) using the **[PRECISION](../../../directives/precision.md)** directive.

The rounding of numeric values is controlled using the **[ROUND](../../../directives/round.md)** directive. If rounding is set to the default, a **_divide_** operation in PxPlus will maintain the precision of the starting value.

**_Example:_**

> 1014.475/100 becomes 10.14475 which gets rounded to 10.145

The automatic rounding of **_intermediate_** results can be turned off by setting the **['NR'](../../../parameters/nr.md)** parameter. Various other types of rounding can be controlled using the **['RN'=](../../../parameters/rn.md)** parameter.

Use the **[FLOATING POINT](../../../directives/floatingpoint.md)** directive to set numeric data to _scientific notation. Floating point_ values take the following format:

> **{+-}**_x.xxxxx_**E {+-}**_nn_

**_Where:  
_**  
_x.xxxxx_ is a number multiplied by 10 raised to the power of _nn_. The following numeric values are expressed in different formats:

|  3 |  = 3E+00 |  = 0.3E+01  
---|---|---|---  
|  2.78 |  = 0.278E+01 |  = 278E-02  
|  1000 |  = 1E+03 |  = 0.1E+04  
  
#### **Note:**  
When using scientific notation, the **+** after the **E** is optional, and if omitted, the results will be the same as including the **+** ; e.g. 0.2E10 is the equivalent of 0.2E+10.

## Numeric Variables

The initial value of any numeric variable is 0 (zero). Numeric variables that are named with a trailing **%**_(percent sign)_ are restricted for use with integers only; e.g. COUNT%. If set to a fractional value, the fractional part will be truncated.

**_Example:_**

> x%=1.8   
>  ?x%   
>  1

PxPlus includes a set of **_system variables_** that provide access to internally defined numeric values, such as time, memory size, etc. These may be referenced like any other variable but can never be altered by the program.

For the complete list, see **[System Variables](../../../variables.md)**.

##  Numeric Arrays

Numeric arrays provide the ability to handle numeric lists, tables or matrices. Arrays are created using the **[DIM](../../../directives/dim.md)** directive. This directive defines the array's name, number of dimensions (one, two or three), and minimum to maximum subscript in each dimension.

The names given to arrays are completely independent of the names associated with numeric variables; e.g. a variable named X1 would have no relationship to an array with the name X1. However, the conventions regarding the naming of numeric variables apply as well to array variables. Unless specified, arrays are zero-based.

DIM X[4] yields a one-dimensional array X with 5 elements:

X[0] |  X[1] |  X[2] |  X[3] |  X[4]  
---|---|---|---|---  
  
DIM X[1:4] defines a one-dimensional array X with 4 elements:

X[1] |  X[2] |  X[3] |  X[4]  
---|---|---|---  
  
DIM Y[2,5] defines a two-dimensional array Y with 18 elements:

Y[0,0] |  Y[0,1] |  Y[0,2] |  Y[0,3] |  Y[0,4] |  Y[0,5]  
---|---|---|---|---|---  
Y[1,0] |  Y[1,1] |  Y[1,2] |  Y[1,3] |  Y[1,4] |  Y[1,5]  
Y[2,0] |  Y[2,1] |  Y[2,2] |  Y[2,3] |  Y[2,4] |  Y[2,5]  
  
DIM Y[1:2,1:5] defines a two-dimensional array with 10 elements:

Y[1,1] |  Y[1,2] |  Y[1,3] |  Y[1,4] |  Y[1,5]  
---|---|---|---|---  
Y[2,1] |  Y[2,2] |  Y[2,3] |  Y[2,4] |  Y[2,5]  
  
Access to an entry within a numeric array is specified using the array name, followed by array subscripts (contained within square or round parentheses). The subscripts may be specified as **[Literals](Literals.md)**, **[Variables](Variables.md)** or **[Numeric Expressions](Numeric%20Values.htm#numeric_exp)**.

**_Example:_**

> A(3) CUST[6,A] TABLE(A*5) Z(3,A(M,N,O))

Attempting to use non-integer subscript results in an Error #41: Invalid integer encountered (range error or non-integer). Specifying subscripts on a variable for which no array has been defined yields an error.

Use the **[DIM( )](../../../functions/dim.md)** function to determine information about array dimensions.

**_Example:_**

> DIM X[1:10]   
>  PRINT DIM(READ NUM(X)) ! Read total number of elements   
>  10   
>  PRINT DIM(READ MIN(X)) ! Read minimum element number   
>  1   
>  PRINT DIM(READ MAX(X)) ! Read maximum element number   
>  10

To access a **_range_** of entries, specify the array name, followed by subscripts ranging **_from_** : ** _to_** (or ALL) enclosed in _braces_ instead of parentheses.

**_Example:_**

__ |  _Assigning a value to an entire array:_ |  LET A{ALL}=10  
---|---|---  
__ |  _Assigning a value to a range of array elements:_ |  LET A{1:5}=10  
__ |  _Copying the contents of one array into another:_ |  LET A{ALL}=B{ALL}  
__ |  _Assigning a range of values from one array to another:_ |  LET A{1:5}=A{6:10}  
  
The element positions in an array can be shifted/rearranged using a combination of subscripts (literals, variables, expressions and ranges).

**_Example:_**

__ |  _Shift up by deleting at subscript_ P: |  X{P:ElementCount}=X{P+1:ElementCount+1}  
---|---|---  
__ |  _Shift down by inserting at subscript_ P: |  X{ElementCount+1:P+1}=X{ElementCount:P}  
|  |  X[P]=NewValue  
  
## Dynamic Arrays

The **DIM** statement can also be used to create dynamic numeric arrays by using an *****_(asterisk)_ as subscript_1 in the DIM directive. This type of array will have no upper bound; that is, elements can be appended dynamically without the need to predefine the number of subscripts in the array. Dynamic arrays can only contain a single dimension and always have a base offset of 1 (i.e. 1 is the first element in the array).

When assigning values to an array element, if the element does not exist but the index specified is one above the current maximum subscript, the element will be appended to the array. Alternately, the subscript of [*] may be used to explicitly append to the array.

Referencing invalid elements in the array (elements less than 1 or more than 1 beyond the current maximum) will result in a subscript error, as per normal arrays.

**_Example:_**

The following would be used to define a dynamic array X:

> DIM X[*]

Once defined, elements can be appended to the array either by sequential numbering the subscript starting with 1 or by using an *****_(asterisk)_ as the subscript. For example, to append an element to the end of the array X as defined above, you would simply code X[*] = value. This would append a new element to the array and assign it the value specified.

You can code the specific element in the code and if the subscript is equal to the next higher element in the array, it will be appended. Attempting to append to dynamic arrays with an element that is greater than the maximum plus 1 will result in an Error #42: Subscript out of range/Invalid subscript.

**_Example:_**

> DIM CUST$[*]   
>  SELECT * FROM "Custfile" WHERE Amt_OWING>1000   
>  CUST$[*] = CustId$   
>  NEXT RECORD

The above example will load an array with the customer IDs for all customers owing more than $1,000. Using Dynamic arrays simplifies the application logic when the number of elements needed is not known in advance.

#### **Note:**  
When arrays are defined as static, you cannot switch to dynamic.

_(Dynamic arrays were added in PxPlus v10.00.)_

##  Numeric Expressions

A numeric expression can consist of numeric constants, variables, functions, and/or other numeric expressions each separated by arithmetic or logical operators. See **[Footnotes](Numeric%20Values.htm#footnotes)** below for information on the listed numeric operations.

The following operators are grouped by **_order of precedence_** (see **[Footnote c](Numeric%20Values.htm#footnote_c)**):

**_Auto-Increment/Decrement_** (see **[Footnote d](Numeric%20Values.htm#footnote_d)**)

**++** |  ++var1 _pre-increments_ by 1, var1++_post-increments_ by 1.  
---|---  
**\- -** |  \--var1 _pre-decrements_ by 1, var1--_post-decrements_ by 1.  
  
**_Exponentiation_** (see **[Footnote e](Numeric%20Values.htm#footnote_e)**)

**^** |  A ^ B _raises_ A to the _power_ of B (** is equivalent to ^).  
---|---  
  
**_Multiplication, Division, Modulus_** (see **[Footnote e](Numeric%20Values.htm#footnote_e)**)

***** |  A * B _multiplies_ A by B.  
---|---  
**/** |  A / B _divides_ A by B.  
**|** |  A | B _remainder_ resulting when A is divided by B.  
  
**_Addition, Subtraction_** (see **[Footnote e](Numeric%20Values.htm#footnote_e)**)

**+** |  A + B _adds_ A to B.  
---|---  
**-** |  A - B _subtracts_ B from A.  
  
**_Relational_** (see **[Footnote f](Numeric%20Values.htm#footnote_f)**)

**=** |  A = B yields 1 if A and B are equal, else yields 0 _zero_.  
---|---  
**<** |  A < B yields 1 if A is less than B, else yields 0 _zero_.  
**>** |  A > B yields 1 if A is greater than B, else yields 0 _zero_.  
**< >** |  A <> B yields 1 if the A and B are not equal, else yields 0 _zero_.  
**< =** |  A <= B yields 1 if A is less than or equal to B, else yields 0 _zero_.  
**> =** |  A >= B yields 1 if A is greater than or equal to B, else yields 0 _zero_.  
  
**_Logical_** (see **[Footnote g](Numeric%20Values.htm#footnote_g)**)

**AND** |  A **AND** B yields 1 if both values are non-zero, else yields 0 _zero_.  
---|---  
**OR** |  A **OR** B yields 1 if either values are non-zero, else yields 0 _zero_.  
  
##  Footnotes

**c****\- Precedence**

If two operators of equal precedence occur, execution takes place left to right. In the following expression 

> A + B - C * D

C and D are first multiplied together and the result saved; A and B are then added together; and finally, the saved value (C*D) is subtracted.

Round parentheses ( ) may be used to change the order of evaluation. The expressions within parentheses are evaluated first.

Where parentheses are nested, as in the following expression 

> (A ^ (B * (A + 2)))

the innermost parenthesized expression (A + 2) is evaluated first. The use of parentheses is encouraged in complex expressions in order to make these expressions more readable and easier to understand.

**d****\- Auto-Increment/Decrement**

If an error occurs during execution of a directive, no increment or decrement (++**_or_ \- -)** takes place. This is true for both pre- and post- operations.

With **_pre_** -increment/decrement, the value returned is the value of the variable after the increment or decrement. With **_post_** -increment/decrement, the value returned is the value of the variable before the increment or decrement. After your directive is executed, your variable is incremented or decremented by 1.

**_Example:_**

> A=0, Y$=""   
>  READ (1,IND=A++,ERR=*NEXT)X$; Y$+=X$; GOTO *SAME

**e****\- Assignment Operators**

PxPlus supports an alternate notation for defining numeric expressions that result in assignments. A combination of a numeric operator ( + - * / | ^ ) with an = _equals sign_ is used to form shorthand expressions; e.g. A+=1 is equivalent to the expression A=A+1, and B^=A is equivalent to the expression B=B^A. See **[Assignment Operators](../../../appendix/operators.htm#Mark2)**.

**f****\- Relational Operators**

**< >**,** <=**, and** >=** may be entered as** ><**,**= <**, and**= >** respectively.

**g****\- Logical Operators**

When PxPlus encounters either an**AND** or an**OR** logical operator, it attempts to perform a shortcut in the evaluation of the expression. If the value to the left of an**AND** operator is zero (false), then the expression/value on the right is skipped and the relationship returns 0  _(zero)_. If the value to the left of an**OR** is non-zero, then the expression/value on the right is skipped and the relationship returns 1.

## Numeric System Functions

PxPlus includes various internal functions that return numeric values based on the parameters provided. System functions can be used to evaluate or convert specific values, but many of them perform built-in mathematical (arithmetical or algebraic) calculations. These include trigonometry (**SIN( )** ,**COS( )** ,**TAN( )** ,**ASN( )_,_ ACS( )_,_ ATN( )** ), logical comparison (**AND( )** ,**IOR( )** ,**XOR( )** ,**NOT( )** ), and several other numeric operations (**EPT( )_,_ EXP( )**,**LOG( )** ,**MAX( )** ,**MIN( )** ,**MOD( )** ,**PRC( )** ,**SQR( )** ).

See **[System Functions](../../../functions.md)**.
