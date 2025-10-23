# OOP Syntax Elements

**LOAD CLASS Directive** |  **__**  
---|---  
  
**LOAD CLASS** _class$_

The **LOAD CLASS** directive may be used to preload a class definition into memory from a _.pvc_ file.

**_Example:_**

> LOAD CLASS "aaa" loads from aaa.pvc

The first code in the _.pvc_ file must be a**DEF CLASS .. END DEF** block assigned the same name (_class$_) as specified in the**LOAD CLASS** directive.

## See Also

**[LOAD CLASS Directive](../../../directives/load_class.md)**
