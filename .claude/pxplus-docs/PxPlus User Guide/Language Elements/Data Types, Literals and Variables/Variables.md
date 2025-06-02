# Data Types, Literals and Variables

**Variables** |  **__**  
---|---  
  
A variable is a named location in memory that is used for storing data temporarily during program execution. In PxPlus, the methods for creating/changing variables include **_assigning_** (using the **[LET](../../../directives/let.md)** directive) and **_inputting_** (using the **[INPUT](../../../directives/input.md)** or **[READ](../../../directives/read.md)** directives). The data type is determined when the variable is created, either **_string_** or **_numeric_** (**_not both_**). The initial value of a numeric variable is 0 (zero). The initial value of a string variable is a _null string_.

The two variable/data types are distinguished by the fact that string variables have names that end with a**$**_dollar sign._ In the following example, the numeric variable X is assigned the number 1234 and string variable X$ is assigned the text "START TEST, X=".

**_Example:_**

> LET X=1234,X$="START TEST, X="; PRINT X$,X   
>  START TEST, X= 1234

The first character of a variable name must be alphabetic (**A** through**Z**); the remaining characters may contain any of the following:**A** through**Z** ,**0** through**9** ,**__underscore_** , or **._period_**. By default, variable names are not case-sensitive but are listed in uppercase only. The **['MC'](../../../parameters/mc.md)** and **['LC'](../../../parameters/lc.md)** parameters can be used to maintain mixed or lowercase variable names in listings. Variable names cannot start with **FN** , as this denotes a user-defined function. See **[DEF FN](../../../directives/def_fn.md)** directive.

Variables should have unique names that do not conflict with PxPlus keywords. It is also best to avoid three-character names - PxPlus reserves three-character names for system variables. See **[System Variables](../../../variables.md)** to access a complete list.

See **[Reserved Words](../../../appendix/reserved_words.md)** for a complete list of reserved words.

A**%**_percent sign_ before a variable name is used to denote a _global_ variable - a percent sign _following_ a variable name indicates that the contents is an _integer_. Every variable in PxPlus is defined for a specific **_scope_** , which indicates to what extent the variable can be accessed and used (**_local_** or **_global_**). Typically, a variable is only visible to subroutines within the current program that created it.

##  Global Variables

The scope of a variable can be extended for "global" use if it is named with a leading**%**_percent sign;_ e.g. %VAR1 will be visible to **_all programs_** that are executed within a given PxPlus session.

#### **Note:**  
Global variables can only exist within one session of PxPlus - they cannot be shared or carried between sessions.

Remember that VAR1 and %VAR1 are two different variables. The variable named VAR1 can be deleted at any time using the **[CLEAR](../../../directives/clear.md)** or **[BEGIN](../../../directives/begin.md)** directives; whereas, the one named %VAR1 would remain active until the end of the user session or the execution of a **[START](../../../directives/start.md)** directive.

## Local Variables

The scope of a variable can also be narrowed for "local" use if it is declared using the **[LOCAL](../../../directives/local.md)** directive. This means that an existing variable can be reassigned for the duration of a specific subroutine, subprogram, for/next loop, or user-defined function. The local declaration does not affect the original contents of the variable. If the variable name is already in use, the system preserves the current value. Once the stack entry has been removed, the system restores the variables to their original values.

**_Example:_**

In the following example, the variables X$, I, and N are declared**LOCAL** for the duration of the subroutine:

> 0130 GOSUB 1000   
>  ....   
>  1000 REM Subroutine 1   
>  1010 LOCAL X$, I, N   
>  1020 READ (1, KEY=K$) X$   
>  1030 I = POS(","=X$)   
>  1040 IF I <> 0 THEN X$(I,1)=" "; N++; GOTO 1040   
>  1050 PRINT "There were ",n, " commas"   
>  1060 RETURN

Original values will be restored upon execution of the **[RETURN](../../../directives/return.md)** directive. The local declaration can also be placed in front of variables within a **[DEF FN](../../../directives/def_fn.md)** definition.

**_Example:_**

> DEF FN%DATE$(LOCAL DT$) = DT$(1,2)+"/"+DT$(3,2)+"/"+DT$(5,2)
