# Directives 

**VIA** |  **_Assign Variable Indirectly_**  
---|---  
  
##  Formats

1. |  _Assign to Variable_ _:_ |  **VIA** _var$=expression**[**_ , _var_ _$=..._**]**  
---|---|---  
2. |  _Assign to Composite Variable_ _:_ |  **VIA** _composite$,var_1$_[**[,**_subscr_**]**]_=expression_[,..._n_]

#### **Note:**  
The inner set of brackets enclosing **[** ,_subscr_**]** are part of the syntax.  
  
**_Where:_**

_composite$_ |  Composite string variable. (Name of a variable defined as composite string.).  
---|---  
**[** ,_subscr_**]** |  Optional subscript(s) of a variable in the composite string. String expression. You can include from 1 to 3 optional numeric expressions in square brackets, comma-separated, as subscripts for the variable.  
_expression_ |  Value you want assigned to the named variable.  
_var_ _$_ |  String variable containing the name of the variable to be used.  
_var_1$_ to _var_2$_ |  String expression containing the name of a variable in the composite string.  
  
##  Description

Use the **VIA** directive to assign a value to a variable where the variable name is contained in another string variable. The target variable's type (numeric or string) is based on the type of expression.

##  Format 1

**_Assign to Variable_**

**VIA** _var$=expression_

Use this **VIA** format to assign the value in the expression to a variable whose name is stored in _var_ $ (i.e. to assign **VIA** the _var_ _$_).

If you use a string, then PxPlus automatically appends a **$** (_dollar sign_) to the variable name. If desired, a string expression can be substituted for _var_ _$_ (is enclosed in parenthesis).

**_Example:_**

> ANIMAL$="pet",PET$="dog"  
>  via ANIMAL$="cat"  
>  print ANIMAL$," ",PET$;  
>  end

> When run, the result is pet cat.

##  Format 2

**_Assign to Composite Variable_**

**VIA** _composite$,var_1$_[[,_subsc_]]_=expression_[,..._n_]

You can assign the value of the expression to a variable in a composite string. In this format, you can specify up to three subscripts for the variable(s).

**_Example:_**

> 0010 iolist X$,Y$,Z$  
>  0020 dim PET$:iol=0010  
>  0030 let X$="Dogs",Y$="Cats",Z$="!" rem Assign values to variables  
>  0040 via PET$,"X$"="Lotsa",PET$,"Y$"="and",PET$,"Z$"="It's raining"  
>  0050 print PET.X$," ",X$," ",PET.Y$," ",Y$  
>  0060 let PET.X$=X$,PET.Y$=Y$  
>  0070 print PET.Z$," ",PET.Y$," and ",PET.X$,Z$  
>   
>  ->run  
> Lotsa Dogs and Cats  
>  It's raining Cats and Dogs!
