# OOP Syntax Elements

**FUNCTION Directive** |  **__**  
---|---  
  
**FUNCTION** **[PERFORM]** **[LOCAL]**_method_**(**_args_**)**_logic_ **[FUNCTION END]**

A method (function) is declared via the **FUNCTION** directive within the **DEF CLASS .. END DEF** block. Every method declaration needs to have associated logic that will be called when it is invoked. If arguments (args) are used, then the type and number must match parameters that the application code provides. Parentheses are part of the method name (whether or not arguments are used).

**PERFORM** indicates that the _logic_ is to be loaded and executed (as in a **PERFORM** directive); therefore, all variables will be shared with the calling program. While this does have some uses, it clearly violates the rules of _Encapsulation_. **LOCAL** indicates that the method is only to be called internally from within the object. It cannot be called externally.

## Statement Label or In-Line Logic

A statement label is normally used to access _logic_ defined as a procedure outside the **DEF CLASS .. END DEF** block.

**_Example:_**

> 0060 FUNCTION Find(X$) LookupCust  
>  ...   
>  0120 END DEF   
>  ...   
>  0210 LookupCust:   
>  0220 ENTER Cst_id$   
>  ... ! Logic to find the client   
>  0240 RETURN sts ! Return value indicates success

However, the _logic_ can also appear directly following the**FUNCTION** directive.

**_Example:_**

> 0060 FUNCTION Find(X$)   
>  0070 ENTER Cst_id$   
>  ... ! Logic to find the client   
>  0090 RETURN sts ! Return value indicates success   
>  0100 FUNCTION END   
>  ...   
>  0170 END DEF

In which case, the method declaration should close with a**FUNCTION END** clause. However, the logic ends automatically with the start of the next method declaration or**END DEF** (whichever comes first).

## Return Value

Each method should return a value. The value can take the form of a string or numeric value, depending on the name associated to the method (strings must end with**$**).

If no**RETURN** value is specified, then the system will return a value of zero for numeric methods and " " (_null_) for string methods.

## Naming Conventions

Multiple definitions of the same method name can be specified, as long as each method has different _args_. To determine which method to actually use, PxPlus attempts to match up the arguments specified with the lists provided in the application.

**_Example:_**

**_In the Class Definition:_**

> FUNCTION Find(X$) LookupByName   
>  FUNCTION Find(X) LookupByNumber   
> ... ... ...   
> LookupByName:   
>  ENTER Cst_id$   
>  ... ... ... ! Logic to find the client by name   
>  RETURN ...   
> LookupByNumber:   
>  ENTER Cst_id   
>  ... ... ... ! Logic to find the client by number   
> RETURN ... 

**_In the Application:_**

> Cst'Find("ABCD") This calls LookupByName  
> Cst'Find(1234) This calls LookupByNumber

## See Also

**[FUNCTION Directive](../../../directives/function.md)  
[PERFORM Directive](../../../directives/perform.md)**
