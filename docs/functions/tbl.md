# System Functions

**TBL( )** |  **_Convert String Via Table_**  
---|---  
  
##  Formats

1. |  _Translation Table in Program_: |  **TBL(**_string$_ ,**TBL=**_tbl_stmtref_[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Translation Table in Variable_ _:_ |  **TBL(**_string$_**,**_tbl_var_ _$_[,**ERR=**_stmtref_]**)**  
3. |  _Translate Using Position_ _:_ |  **TBL(**_position_**,**_expr_0_[$],_expr_1_[$]**... ,**_expr_n_[$][,**ERR=**_stmtref_]**)**  
4. |  _Character to Character Conversion_: |  **TBL(**_var_ _$_**,**_compare$_**,**_table_ _$_**)**  
  
**_Where:_**

_compare$_ |  String table to compare character by character with the value in _var_ _$_. String expression.  
---|---  
_expr_0[$]n_ |  List of expressions to be returned. Numeric or string expressions. ** _Restriction:_** The expressions must all be the same type (i.e. all characters or all numeric).  
_position_ |  Determines which expression to use. Positional or numeric expression, range 0 (zero) to _n_.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_string$_ |  String to be translated/replaced (must be all characters or all numeric).  
 _table$_ |  Table to use for conversion when a character in the compared value matches the value in _var_ _$._ String expression.  
_tbl_stmtref_ |  Optional, if your table is embedded in the same statement as the **TBL( )** function. If you refer to a program _tbl_stmtref_ , it must contain a conversion table.  
_tbl_var_ _$_ |  String variable. Contains conversion table to replace elements in the _string$_. String expression.  
_var_ _$_ |  String variable. Contains a string to be translated or replaced.  
  
##  Returns

Converts string to values in table.

##  Description

The **TBL( )** function converts a string (all characters or all numeric) to the corresponding values set in a given translation table.

##  Format 1

**_Translation Table in Program_**  
  
**TBL(**_string$_**,TBL=**_tbl_stmtref_[,**ERR=**_stmtref_]**)**

Use this format if the translation table to convert the _string$_ is an embedded table in your program.

If you include a _tbl_stmtref_ , it must refer to a program statement containing a conversion table defined by a **[TABLE](../directives/table.md)** directive. This statement reference is optional if the conversion table is embedded in the same statement as the **TBL( )** function.

##  Format 2

**_Translation Table in Variable_**  
  
**TBL(**_string$_**,**_tbl_var_ _$_[,**ERR=**_stmtref_]**)**

Use this format if the translation table to convert the _string$_ is in a variable.

##  Format 3

**_Translate Using Position_**

**TBL(**_position_**,**_expr_0_[$],_expr_1_[$]**... ,**_expr_n_[$][**,ERR=**_stmtref_]**)**

Use this format to obtain a value based on the numeric value of an expression. The value that the **TBL( )** function returns depends on the value of position. If it is 0 (zero), then the value of _expr_0_ will be returned. If it is 1, then _expr_1_ will be returned, and so on.

#### **Note:**  
The values for _expr_0_[$]_, expr_1_[$]_, n_[$]__ can be either string or numeric. The only requirement is that they must be _all_ the same (i.e. _all_ string or _all_ numeric).

##  Format 4

**_Character to Character_ _Conversion_**

**TBL(**_var_ _$_**,**_compare$_**,**_table_ _$_**)**

Use this format to do a character-to-character conversion of a string. PxPlus replaces each character in the string variable that matches a character in the first comparison string expression with the corresponding character from the table; that is, when a character in the string variable matches a character in _compare$_ , then:

> _compare_ _$_ character 1 is replaced by _table$_ character 1 in _var_ _$_ ,

> _compare$_ character 2 is replaced by _table$_ character 2 in _var_ _$_ ,

> _compare$_ character 3 is replaced by _table$_ character 3 in _var_ _$_ ,

> ... and so on

**_Example:_**

> X$=tbl(X$,"abc","ABC")

The above would replace all lower a, b or c's with A, B or C respectively.

##  Example

**_Example 1:_**

> T$="W"  
>  P$=tbl(pos(T$="DWM"),"???","Daily","Weekly","Monthly")  
>  print P$  
>  Weekly

In the above example, the value in T$ is passed to a **POS** function to determine where in the string "DWM" it occurs. The **POS** function will return 1, 2 or 3 based on which character it matches, or 0 if none. This value is then processed by the **TBL** function to return "???" for zero or the appropriate text.

**_Example 2:_**

> print "Expires:",tbl(EXP_DT$="",EXP_DT$,"Never")

If EXP_DT$ is null, the logical expression EXP_DT$=" " yields 1. A null date will print "Never"; otherwise, it yields 0 (zero) and the value of EXP_DT$ is printed. In effect, this form of **TBL( )** becomes **TBL(**_logical_expr_ ,_else_value_ ,_true_value_**)**_._

**_Example 3:_**

> string$="ABCDEFG 123"  
> newstring$=tbl(string$,"ACF ","123_") ! newstring$ is "1B2DE3G_123"

This format of the **TBL** function replaces each character found in "ACF " with its corresponding character in "123_".
