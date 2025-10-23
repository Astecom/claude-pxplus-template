# Directives 

**PROCESS** |  **_Call a NOMADS Panel_**  
---|---  
  
##  Formats

1\. _Invoke a NOMADS Panel:_ |  **PROCESS** "_panel_ ","[_lib_]",_arg_1_ $,_arg_2_ $, ... _arg_20_ $  
---|---  
2\. _Invoke a NOMADS Query:_ |  **PROCESS** "_panel_ ","[_lib_]",_val_ $  
3\. _Invoking File Maintenance:_ |  **PROCESS** "_panel_ ","[_lib_]",_arg_1_ $  
  
**_Where:_**

_arg_1$ ... arg_20$_ |  List of valid arguments for a _Panel_ object. Optional string expressions. You can use up to 20 arguments. These arguments are accessible in the invoked panel as values in the reserved NOMADS variables ARG_1$ through ARG_20$. For _Query_ or _File Maintenance_ objects, you are limited to one argument, the value of which is accessible in the reserved variable ARG_1$. The others are reserved.  
---|---  
_lib_ |  Optional. Name of the NOMADS library containing the _panel_ name. String expression. If you use null (""), NOMADS uses your currently active library.  
_panel_ |  Name of the NOMADS _Panel_ , _Query_ or _File Maintenance_ object. String expression.  
_val_ _$_ |  Starting/return value for a Query. See **[Example](process.htm#Mark4)**.  
  
##  Description

Use the **PROCESS** directive to call a NOMADS panel from a program. NOMADS returns to the program when the panel is exited. You can pass optional arguments to and from the NOMADS panel.

When you use the **PROCESS** directive, PxPlus converts the statement internally into a **CALL** to *winproc (the NOMADS engine) to process the panel.

##  See Also

**[Invoking a Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.md)**

##  Example

These examples illustrate the different uses for the **PROCESS** directive.

**_Panel Example:_**

In this example, the PxPlus **PROCESS** statement invokes the "SALES" panel through the program and passes two arguments, SALES_ID$ and STR(SALES_AMT), to the "SALES" panel to get the values:

> process "SALES","LIBRARY.EN",SALES_ID$,str(SALES_AMT)

In the NOMADS Panel Header **_Pre-Display_** logic, you would execute the following assignments:

> SALES_ID$=ARG_1$;  
>  SALES_AMT=num(ARG_2$)

**_Query Example:_**

For queries that are **_not_** attached to a NOMADS control object:

> process "MY_QUERY","",X$

When "MY_QUERY" runs, the value of X$ is used to set the starting position in the file. When "MY_QUERY" is exited, NOMADS passes the return value to the calling program in X$.
