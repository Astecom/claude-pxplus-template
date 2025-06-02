# OOP Syntax Elements

**PROGRAM Directive** |  **__**  
---|---  
  
**PROGRAM** _"interface_prog"_

The **PROGRAM** directive is used within a **DEF CLASS .. END DEF** block to define the default program name that is going to service a class of object. Entry points can process methods and read/write properties.

The following optional entry point labels are supported:

|  **ON_CREATE** |  Called when the object is created  
---|---|---  
|  **ON_DELETE** |  Called when the object is deleted  
  
No error will be reported if the label does not exist. Any references to program logic in a property read/write or a method definition can contain a leading **;**  _(semi-colon)_.

**_Example:_**

The following class definitions are effectively the same:

> PROGRAM "Cust"   
>  FUNCTION Find(X$) "LookupByName"   
>   
> **_or_   
> **  
>  FUNCTION Find(X$) "Cust;LookupByName"

## See Also

**[PROGRAM Directive](../../../directives/program.md)**
