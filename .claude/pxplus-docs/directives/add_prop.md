# Directives 

**ADD PROPERTY** |  **_Add Object Properties at Runtime_**  
---|---  
  
##  Format

**ADD PROPERTY [**  _varlist_ __**]**  
  
**_Where:_**

_varlist_ |  List of variables used within an object that will be added dynamically to the property list.  
---|---  
  
##  Description

In **[Object-Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP), the **ADD PROPERTY** directive is used to create new property within an instance object at runtime. Properties created using this directive are visible to both operations within an object and to outside code.

If a variable included in the _varlist_ is already declared as STATIC, it will be converted into an externally accessible property.

#### **Note:**  
Ensure that the **ADD PROPERTY** declaration occurs before the variables are used - static variables will only take effect on references that follow their declaration.

_(The ADD PROPERTY directive was added in PxPlus v8.01.)_

##  See Also

[**DEF CLASS Define Object Class**](def_class.md)  
[**DROP CLASS Delete Class Definition**](drop_class.md)  
[**DROP OBJECT Delete Object**](drop_object.md)  
[**FUNCTION Declare Object Method**](function.md)  
[**LIKE Inherit Properties**](like.md)  
[**LOAD CLASS Pre-Load Class Definition**](load_class.md)  
[**LOCAL Designation of Local Data**](local.md)  
[**PROPERTY Declare Object Properties**](property.md)  
[**STATIC Add Local Properties at Runtime**](static.md)  
[**RENAME CLASS Change Name of Class**](rename_class.md)  
[**NEW( ) Create New Object**](../functions/new.md)  
[**REF( ) Control Reference Count**](../functions/ref.md)
