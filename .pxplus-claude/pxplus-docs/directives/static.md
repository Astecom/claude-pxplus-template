# Directives 

**STATIC** |  **_Add Local Properties at Runtime_**  
---|---  
  
##  Format

**STATIC [_varlist_ __ | ***__**]**  
  
**_Where:_**

_varlist_ |  List of variables for use within an object or an ***** (_asterisk_) to enable full variable persistence.  
---|---  
  
##  Description

In **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP), the **STATIC** directive is used to create variables for use within an object at run time that will be preserved within the object instance. **STATIC** is used to extend the list of **LOCAL** _properties_ at run time. This allows for the dynamic creation of variables which are visible to operations within an object, yet which are not directly accessible to outside code.

Specifying an ***** (_asterisk_) indicates all variables are to be considered **LOCAL** and is referred to as **[Full Variable Persistence](static.htm#full)**.

**_Example:_**

> static A$,B,iol=iol(1)

All the named variables will be **LOCAL** so that their values will remain current while executing logic within the object.

Using the **STATIC** clause, an object that is accessing a data file with an embedded IOList will be able to handle extensions to the IOList going forward. This allows the object to then read a record from the file and have the data elements remain available for subsequent calls to the object's _methods_.

Duplicate variables are ignored; i.e. if a variable has already been declared **STATIC** , is a **PROPERTY** , or has been declared **LOCAL** for an object, then no error is reported. Static variables will include their associated arrays; therefore, STATIC A$ also means that A$[1],... are all static.

#### **Note:**  
Ensure that the **STATIC** declaration occurs before the variables are used. Static variables will only take effect on references that follow their declaration.

##  Full Variable Persistence

The **STATIC *** directive indicates that all variables used within an object are to be preserved within the object. This means that any variable value set during the execution of the object will remain set on subsequent method/function calls.

The directive can be placed either within the class definition or executed at any time during the execution of the object. **_Once full variable persistence is enabled within an object, it cannot be disabled._**

#### **Note:**  
Full variable persistence is not honoured for functions/methods within an object that are declared as "performed". This is due to the fact that performed functions share the variable space with the calling logic.

##  See Also

[**DEF CLASS Define Object Class**](def_class.md)  
[**DROP CLASS Delete Class Definition**](drop_class.md)  
[**DROP OBJECT Delete Object**](drop_object.md)  
[**FUNCTION Declare Object Method**](function.md)  
[**LIKE Inherit Properties**](like.md)  
[**LOAD CLASS Pre-Load Class Definition**](load_class.md)  
[**LOCAL Designation of Local Data**](local.md)  
**[PROGRAM Create/Assign Program File](program.md)**  
[**PROPERTY Declare Object Properties**](property.md)  
[**RENAME CLASS Change Name of Class**](rename_class.md)  
[**NEW( ) Create New Object**](../functions/new.md)  
[**REF( ) Control Reference Count**](../functions/ref.md)
