# Directives

**RENAME CLASS** |  **_Change Name of Class_**  
---|---  
  
##  Format

**RENAME CLASS** _old_name_ _$_**TO** _new_name_ _$_  
  
**_Where:_**

_old_name_ _$_ |  Previously defined class to be renamed.  
---|---  
_new_name_ _$_ |  New name for the class.  
**TO** |  Mandatory keyword, not case sensitive.  
  
##  Description

The **RENAME CLASS** directive is used in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP) to alter the name of a previously defined class. This functionality allows the application designer to alter an existing object class easily without having to change programs.

##  See Also

**[DEF CLASS Define Object Class](def_class.md)**  
**[DROP CLASS Delete Class Definition](drop_class.md)**  
**[DROP OBJECT Delete Object](drop_object.md)**  
**[FUNCTION Declare Object Method](function.md)**  
**[LIKE Inherit Properties](like.md)**  
**[LOAD CLASS Pre-Load Class Definition](load_class.md)**  
**[LOCAL Designation of Local Data](local.md)**  
**[PROGRAM Create or Assign Program File](program.md)**  
**[PROPERTY Declare Object Properties](property.md)**  
**[STATIC Add Local Properties at Runtime](static.md)**  
**[NEW( ) Create New Object](../functions/new.md)**  
**[REF( ) Control Reference Count](../functions/ref.md)**

##  Example

If you had an existing application with a Product class object but needed to add a new field to the object such as Lot_Number:

> rename class "Product" to "Orig_Product"  
> def class "Product"  
>  like "Orig_Product"  
>  property Lot_Number  
>  end def

All subsequent uses of a Product class object would be identical now to the standard Product class and have the property Lot_Number.
