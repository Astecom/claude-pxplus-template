# System Functions

**REF( )** |  **_Control Reference Count_**  
---|---  
  
##  Format

**REF(**{**ADD** |**DROP** |**READ**} _obj_id_**)**

**_Where:_**

**ADD** |  Keyword indicating an increment of the reference count for _obj_id_ _._  
---|---  
**DROP** |  Keyword indicating an decrement of the reference count for _obj_id_ _._  
_obj_id_ |  Object identifier (number/handle) of the object being referenced.  
**READ** |  Keyword indicating no change to the reference count for _obj_id_ _._  
  
##  Returns

Current reference count value (0 if the object is deleted).

##  Description

The **REF( )** function is used in **[Object-Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** to control access to an object by incrementing or decrementing the reference count. The **[DROP OBJECT](../directives/drop_object.md)** directive can also be used to destroy an object.

The system sets the reference count for any newly created object to 1. If you plan to use an object more than once, use **REF(ADD** _obj_id_**)** to increment the reference count. When finished with an object, use **REF(DROP** _obj_id_**)** to decrement the reference count. When the reference count becomes zero, the object is deleted.

Only objects whose reference count is 1 can be deleted. Once an object is destroyed, its identifier may be reassigned to another object. You should no longer use the object identifier in your application, as it may reference a totally different object (if the identifier is reassigned).

All objects are destroyed when the application issues a **[START](../directives/start.md)** directive or if the **[END](../directives/end.md)** directive is entered at Command mode.

**REF(READ** _obj_id_**)** returns the current reference count value. All calls to **REF( )** return the current reference count (or 0, if deleted).

##  See Also

**[Object-Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**  
[**DEF CLASS Define Object Class**](../directives/def_class.md)  
[**PROPERTY Declare Object Properties**](../directives/property.md)  
[**LOAD CLASS Pre-Load Class Definition**](../directives/load_class.md)  
[**DROP CLASS Delete Class Definition**](../directives/drop_class.md)  
[**LOCAL Designation of Local Data**](../directives/local.md)  
[**FUNCTION Declare Object Method**](../directives/function.md)  
[**LIKE Inherit Properties**](../directives/like.md)  
[**PROGRAM Create or Assign Program File**](../directives/program.md)  
[**RENAME CLASS Change Name of Class**](../directives/rename_class.md)  
[**STATIC Add Local Properties at Runtime**](../directives/static.md)  
[**DROP OBJECT Delete Object**](../directives/drop_object.md)  
[**NEW( ) Create New Object**](new.md)
