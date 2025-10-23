# Language Reference - Appendix   
  
**Operators**|   
---|---  
  
The information below describes the traditional operators (e.g. + - * /) you can use in PxPlus, along with other operators for which support has been added in recent versions (e.g. the auto-increment and decrement operators, assignment operators, the **LIKE Operator**, and the **[Apostrophe Operator](apostrophe_operator.md)**).

See **[Numeric Values](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Numeric%20Values.md)** and **[String Values](../PxPlus%20User%20Guide/Language%20Elements/Data%20Types,%20Literals%20and%20Variables/String%20Values.md)** for additional information on the use of some of these operators.

##  Arithmetic Operators

The following operators are used to perform calculations:

|  **+** |  _Where:_ A + B **_adds_** A to B  
---|---|---  
|  **-** |  _Where:_ A - B **_subtracts_** B from A  
|  ***** |  _Where:_ A * B **_multiplies_** A by B  
|  **/** |  _Where:_ A / B **_divides_** A by B  
|  **^** |  _Where:_ A ^ B raises A to the **_power_** of B (** is equivalent to ^)  
|  **|** |  _Where:_ A | B divides A's **_remainder_** by B  
  
##  Assignment Operators

The following assignment operators are included in the general syntax of the language:

**Operator** |  **Meaning** |  **Description**  
---|---|---  
**+=** |  **Add To** |  Can be used with numerics or strings. **_Example:_** |  _Numeric:_ |  A+=1 is the same as A=A+1  
---|---  
_String:_ |  A$+="G" is the same as A$=A$+"G"  
**-=** |  **Subtract From** |  Not valid for strings. **_Example:_** |  _Numeric Only:_ |  B-=A+1 is the same as B=B-(A+1)  
---|---  
***=** |  **Multiply By** |  Can be used with numerics or strings. **_Example:_** |  _Numeric:_ |  B*=A+1 is the same as B=B*(A+1)  
---|---  
_String:_ |  A$*=5 is the same as A$=A$+A$+A$+A$+A$  
**/=** |  **Divide By** |  Not valid with strings. **_Example:_** |  _Numeric Only:_ |  B/=A+1 is the same as B=B/(A+1)  
---|---  
**^=** |  **Exponentiation** |  Raise to. Not valid with strings. **_Example:_** |  _Numeric Only:_ |  B^=A is the same as B=B^A  
---|---  
**|=** |  **Modulus/Remainder from Division** |  Not valid with strings. **_Example:_** |  _Numeric Only:_ |  B|=A is the same as B=MOD(B,A)  
---|---  
  
##  Auto

**Increment and Decrement**  
  
In addition to the assignment operators, there are **_increment_** and **_decrement_** features:

|  **++** |  Auto-increment (pre-increment when prefixed to variable name, post-increment if suffixed); e.g. ++variable **_or_** variable++.  
---|---|---  
|  **\--** |  Auto-decrement (pre-decrement when prefixed to variable name, post-decrement if suffixed); e.g.--variable **_or_** variable--.  
  
#### **Note:**  
If an error occurs during execution of your directive, no increment or decrement takes place. (This is true for both pre- and post-operations.)  
  
With **_pre_** -increment or decrement, the value returned is the value of the variable after the increment or decrement.  
  
With **_post_** -increment or decrement, the value returned is the value of the variable before the increment or decrement. After your directive is executed, your variable is incremented or decremented by 1.

**_Example:_**

> A=0, Y$=""   
>  READ (1,IND=A++,ERR=*NEXT)X$; Y$+=X$; GOTO *SAME  
>   
> ** _or_**   
>   
>  Y$+=RCD(1,IND=A++,ERR=*NEXT); GOTO *SAME

See **[Labels/Logical Statement References](labels~logical_statement_references.md)**.

##  LIKE Operator

Use the **LIKE** operator for string comparisons. The PxPlus default (with the **['TL'](../parameters/tl.md)** system parameter set to **_Off_**) is to take the string expression on the left and compare it to the string mask on the right. In the default mode, you can apply all the regular expression rules of the **[MSK( )](../functions/msk.md)** function to using the **LIKE** operator. Use the following format:

> IF A$ LIKE "ABC" THEN ... 

To make your conversions from Thoroughbred easier, set **'TL'** to **_On_**. With this parameter **_On_** , the **LIKE** operator emulates the Thoroughbred matching of patterns.

See **[SET_PARAM](../directives/set_param.md)** directive, **[MSK( )](../functions/msk.md)** function and **['TL'](../parameters/tl.md)** system parameter.

##  Apostrophe Operator

The apostrophe operator is used to assign, retrieve, list, and make dynamic changes to a given control or object's properties.

For the syntax and use of the apostrophe, see **[Apostrophe Operator](apostrophe_operator.md)**.

Thoroughbred is a registered trademark of Thoroughbred Software International Inc.
