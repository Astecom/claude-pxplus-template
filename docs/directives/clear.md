# Directives 

**CLEAR** |  **_Reset Variables_**  
---|---  
  
##  Formats

1\. _Clear_ _,_  _Reset_ _:_ |  **CLEAR[ *] [ [ EXCEPT** **]**_varlist_ __**]**  
---|---  
2\. _Clear Composite String_ _:_ |  **CLEAR** _template$_  
  
**_Where:_**

_template$_ |  Name of a variable **DIM** ensioned as a string template. String expression.   
---|---  
_varlist_ |  An optional list of variables.  
  
##  Description

The **CLEAR** directive performs the following functions:

1\. Resets **PRECISION** to the default value of 2 (the value set in the [**'PD'**](../parameters/pd.md) system parameter).

2\. Clears local variables. (_Global variables are not affected unless using CLEAR *)_

> (a) All variables if no _varlist_ appears on directive.  
> (b) Only those in _varlist_ if no **EXCEPT** clause given.  
>  (c) All but those in _varlist_ if **EXCEPT** clause present.  
>   
>  See **[Example](clear.htm#Mark6)**.

3\. Sets **ERR** , **RET** and **CTL** to zero. 

4\. Clears **FOR/NEXT** , **GOSUB/RETURN** , **WHILE/WEND** , etc. stack.

The **CLEAR *** directive also clears all global variables including those defined using the **[GBL](../functions/gbl.md)** function. **CLEAR *** will also accept an **EXCEPT**  _varlist_ clause to omit specific variables from being cleared.

#### **Note:**  
When executed within an object (in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**), the **CLEAR** directive will clear all of the object's properties, along with standard variables.

_(The CLEAR * directive was added in PxPlus v7.10.)_

##  Format 1

**_Clear, Reset_**

**CLEAR** [**EXCEPT**] [_varlist_] 

**_Example:_**

The following examples show respectively clearing all variables, clearing only a selected list of variables, and **CLEAR** ing all **EXCEPT** a selected list of variables:

> clear  
>  clear A3$,B3$,C3,D3  
>  clear except CST_ID$,TX_VAL,TX_TBL${all}

##  Format 2

**_Clear Composite String_**  
  
Use this format to clear the value(s) **DIM** ensioned as a string template:

> clear CUST$  
>   
> **_or_**  
>   
>  clear CUST.NAME$

For information on string templates, see [**DIM Define Arrays and Strings**](dim.md).

##  See Also

[**BEGIN Reset Files and Variables**](begin.md)  
[**RESET Reset Program State**](reset.md)  
[**START Restart Session**](start.md)  
[**ERR( ) Test Error Value**](../functions/err.md)  
[**CTL Control Code: Key to End Input**](../variables/ctl.md)  
[**RET Operating System's Last Error Code**](../variables/ret.md)
