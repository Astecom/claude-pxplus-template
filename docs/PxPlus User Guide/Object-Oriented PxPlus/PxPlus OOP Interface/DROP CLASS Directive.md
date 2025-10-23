# OOP Syntax Elements

**DROP CLASS Directive** |  **__**  
---|---  
  
**DROP CLASS** _class$_

Once a class definition is established, it may not be changed; however, it can be deleted using the **DROP CLASS** directive. This would allow the class to be redefined.

Deletion is only possible if no objects exist for that class. Any attempt to delete a class that has a reference to it will return an Error #50: Class in use or already defined.

The **DELETE CLASS** and**DROP CLASS** directives may be used interchangeably for this purpose.

## See Also

**[DROP CLASS Directive](../../../directives/drop_class.md)**
