# OOP Syntax Elements

**DROP OBJECT Directive** |  **__**  
---|---  
  
**DROP OBJECT** _obj_id_

The **DROP OBJECT** directive is used to delete an object and its properties (if the reference count is 1). This directive has the same effect as using**REF(DROP** _obj_id_) to decrement the reference count from 1 to 0.

The **DELETE OBJECT** and**DROP OBJECT** directives may be used interchangeably for this purpose.

## See Also

**[DROP OBJECT Directive](../../../directives/drop_object.md)  
[DELETE OBJECT Directive](../../../directives/delete_object.md)**
