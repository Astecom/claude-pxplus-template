# OOP Syntax Elements

**REF( ) Function** |  **__**  
---|---  
  
**REF(** { **ADD** | **DROP** } _obj_id_**)**

The **REF( )** function can be used to monitor and control multiple instances of a specified object via its internal Reference Count:

|  **REF**(_obj_id_) |  Returns the current reference count for the specified _obj_id_  
---|---|---  
|  **REF**(**ADD** _obj_id_) |  Increments the reference count for the specified _obj_id_  
|  **REF**(**DROP** _obj_id_) |  Decrements the reference count for the specified _obj_id_  
  
When accessing an object, use **REF** (**ADD** _obj_id_) to indicate that the application is to use the object (and to increment the reference count). When finished, use **REF** (**DROP** _obj_id_) to decrement the reference count. When no other references exist, the object is automatically deleted.

Only when an object reference count goes to 0 does the system actually delete the object and all its properties. ON_DELETE logic is only executed at the point when the object reference count goes to zero. See **[On Create/On Delete Logic](DEF%20CLASS%20Directive.htm#oncreate)**. 

The**DROP OBJECT** may be used as another method for deleting an object.

All objects are destroyed automatically when the application issues a **[START](../../../directives/start.md)** directive or if the **[END](../../../directives/end.md)** directive is entered at the Command mode.

## See Also

**[REF( ) Function](../../../functions/ref.md)**
