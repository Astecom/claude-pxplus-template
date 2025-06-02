# Directives

**DROP CLASS** |  **_Delete Class Definition_**  
---|---  
  
##  Format

**DROP CLASS** _class_ _$_  
  
**_Where:_**

_class$_ |  Name of the class to be deleted. String expression.  
---|---  
  
##  Description

The **DROP CLASS** directive is used in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** to delete a class definition and all related information. Once a class definition is established, then it may not be changed but it can be deleted and recreated using **DROP CLASS**. Only class definitions that have no references to them may be deleted. This means that no class can be deleted when:

  * Any object exists which refers to this class.
  * Any other class exists which refers to this class by its **LIKE** clause.



Any attempt to delete a class that has a reference to it will return an Error #50: Class in use or already defined. All class definitions will be deleted when a **START** directive is issued. Either **DROP CLASS** or **DELETE CLASS** can be used to delete a class definition.

##  See Also

**[DEF CLASS Define Object Class](def_class.md)**  
**[DROP OBJECT Delete Object](drop_object.md)**  
**[FUNCTION Declare Object Method](function.md)**  
**[LIKE Inherit Properties](like.md)**  
**[LOAD CLASS Pre-Load Class Definition](load_class.md)**  
**[LOCAL Designation of Local Data](local.md)**  
**[PROGRAM Create/Assign Program File](program.md)**  
**[PROPERTY Declare Object Properties](property.md)**  
**[RENAME CLASS Change Name of Class](rename_class.md)**  
**[STATIC Add Local Properties at Runtime](static.md)**  
**[NEW( ) Create New Object](../functions/new.md)**  
**[REF( ) Control Reference Count](../functions/ref.md)**
