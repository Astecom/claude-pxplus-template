# Directives 

**ENTER** |  **_Specify Arguments_**  
---|---  
  
##  Format

**ENTER** [_arglist_][, ...]][,**ERR=**_stmtref_]

**_Where:_**

_arglist_ |  Variables in a subprogram to receive the arguments passed by a calling program. Use:

  * **IOL** =_iolref_ (e.g. ENTER IOL=8000)
  * A complete numeric array (e.g. ENTER ARRAY_NAME{ALL}) **_OR_**
  * A comma-separated list of simple numeric and/or string variables (subscripts or substrings are **_not_** allowed)

Each simple variable (numeric or string) may be followed by an **=**  _(equals sign)_ and an expression that will be used to define its default value. See **Default Values**. An *****  _(asterisk)_ can be used in place of any variable in the inbound argument list if the inbound value is to be ignored.

#### **Important Note:**  
If the **ENTER** directive does **_not_** include an argument list, the subprogram will share **_all_** variables with its caller, effectively turning the **CALL/ENTER** into a **PERFORM**. This form of the **ENTER** directive will generate an Error #36 should the program have already declared/defined any variable prior the **ENTER** directive.  
  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
#### **Restrictions:   
**You can only use this directive in called programs (subprograms). You **_cannot_** receive the same argument more than once from the calling program.

##  Description

Use **ENTER** in a called subprogram to define the total number, relative positions and types of variables it will receive from the calling program.

The arguments passed to the subprogram via the calling program's **CALL** statement. The variables in the calling program's **CALL** statement must ordinarily match those in the subprogram exactly. That is, each argument in the **CALL** statement must correspond by position and in type (numeric or string) to a variable in the **ENTER** statement; otherwise, the system returns an Error #36: ENTER parameters don't match those of the CALL.

If the calling program is passing a complete numeric array, the name of the array must be specified, followed by **{ALL}** in both the **ENTER** and **CALL** statements. (The curly brackets are part of the syntax.) See **[Examples](enter.htm#Mark5)**.

Where a **CALL** statement specifies a simple variable, all changes made to the variable entered in your subprogram will be reflected in the calling program when the subprogram terminates. You can protect a simple variable in either the **CALL** or **ENTER** statement by placing the argument inside parentheses. This turns the variable into an expression, which has the effect of making it read only. See **[Examples](enter.htm#Mark5)**.

String templates cannot be passed if they are defined prior to the **ENTER** statement in the called program.

To pass an array as a read-only copy, surround the array specification with parentheses on either the **CALL** or **ENTER** directive:

> call "someprog",(X${all}) ! Passes copy of the array

> enter (X${all}) ! Loads copy of array regardless of CALL

_(Support for passing an array as a read-only copy was added in PxPlus 2019.)_

##  Default Values

If desired, variables on the **ENTER** statement can have default values specified:

**_Example:_**

> enter Cust$,DB$=%Current_DB$

When using a default value with parentheses characters, the parentheses characters surround both:

> enter Cust$,(DB$=%Current_DB$)

When a variable is followed by _an**=** (equals sign)_ and the calling program does not provide a value in its calling sequence, the value of the expression following the _equals sign_ is used to establish a starting/default value for the variable.

In the above example, if this program was called with only one parameter, the second variable (DB$) would be set to a value found in %Current_DB$. This means that a caller could simply code:

> call "Program",CUST$ ! To access customers in current Database
> 
> call "Program",CUST$,COMPANY_DEF$ ! To override the Database

The use of default values allows application designers and programmers to reduce the complexity of **CALL** parameters for many common functions.

_(The ability to specify default values was added in PxPlus v7.00, build 9162.)_

##  See Also

[**CALL Transfer to Subprogram**](call.md)

##  Examples

In calling program:

> call "SUBR",len(A$),N,A$,T{all}

In subprogram "SUBR":

> enter A,B,Z$,N{all}

Use **( )**  _parentheses_ to surround the variable (i.e. "PRODUCTNAME$") in the ENTER statement in the called program:

> enter PRODUCTID$,(PRODUCTNAME$),SALESYTD

The value in the first argument is to be _read-only_ ; i.e. any changes to the variable "A$" inside the "SUBR" program would not affect the caller's variable:

> enter (A),B,Z$,N{all}

Use an *****  _asterisk_ in place of any variable in the inbound argument list if the inbound value is to be ignored:

> enter *,*,*,CUSTID$,CUSTNAME$
