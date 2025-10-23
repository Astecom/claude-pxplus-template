# Directives 

**PROPERTY** |  **_Declare Object Properties_**  
---|---  
  
##  Formats

1\. _Declare Property:_ |  **PROPERTY [HIDE]**_prop1_ **[OBJECT]**_, prop2_**[OBJECT]**_, ..._  
---|---  
2\. _Specify Read/Write Procedure:_ |  **PROPERTY [HIDE]**  _prop1_ **[_getOptions_] [_setOptions_]**, _prop2_ ...  
  
**_Where_** _:_

_prop1  
prop2_ |  Property names treated like any other variable in the system. (In **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**, data is referred to as _properties_.)  
---|---  
**_getOptions_** |  Defined as **{**  _=expr_ **|** **[ OBJECT ]** **[ GET**  _label_ **] }** (See **[Example](property.htm#Mark8)**) **_Where:_** |  _expr_ |  Defines an expression that will be evaluated to return the property value when referenced externally or via the object handle. By default, if an expression is used to define a property, the system will not allow the property to be **SET** externally unless a specific **SET** procedure is defined.  
---|---  
**GET** |  Keyword indicating that logic is to be called when properties are _read_.  
_label_ |  Can be a statement label within the program or **ERR** to restrict read access.  
**_setOptions_** |  Defined as **SET**  _label_ (See **[Example](property.htm#Mark8)**) **_Where:_** |  **SET** |  Keyword indicating that logic is to be called when properties are _written_.  
---|---  
_label_ |  Can be a statement label within the program or **ERR** to restrict updating.  
**ERR** |  Keyword blocking reads or writes to a property following a **GET** /**SET** declaration.  
**HIDE** |  Keyword indicating that method is not to be displayed in the list of methods returned by '*.  
**OBJECT** |  Optional keyword identifies that the property contains an object identifier to another object.  
  
_(The HIDE option was added in PxPlus v8.11.)_

##  Description

The **PROPERTY** directive is used in Object Oriented Programming to declare the properties that can be accessed by the application program. These properties can be treated like any other variable in the system and are accessible using the [**Apostrophe Operator**](../appendix/apostrophe_operator.md).

A property name can be followed by a **GET** _label_ to define the location of the logic to call whenever the property is read in the application. With **GET** in place, the specified logic issues a **RETURN** value that returns the actual value of the property to the application.

**_Example:_**

> property ExtendedAmount get Extension  
>    
>  Extension:  
>  return Quantity*Price

If the logic resides outside of the defining program, then the name of the program and entry point can be provided in quotes instead.

#### **Note:**  
If the logic required to do a read is simply a formula, then it can be inserted directly into the **PROPERTY** definition clause using an **=** (_equals sign_) instead of using a subroutine and a **GET** declaration.  
  
**_Example:_**  
  
property ExtendedAmount=Quantity*Price

Specify the **SET** _label_ to intercept all of the property updates. With **SET** in place, the system calls the logic whenever the property is being updated and passes it the value being set.

**_Example:_**

> property Quantity set ChgQty

Like the **GET** option, an external program/entry point can be provided:

> property Quantity set "Invline;ChgQty"

**_Where:_**

Invline contains:

> ChgQty:  
>  enter NewQty  
>  if NewQty=Quantity \  
>  then return  
> ! .. Update inventory then return

Use the keyword **ERR** to prevent the user from being able to **GET** or **SET** a property following the **GET** or **SET** declaration:

> property ExtendedAmount set err

If the property contains an object identifier to another object, specify the keyword **OBJECT** after the property _name_. When the object is deleted, PxPlus will use the **[REF( )](../functions/ref.md)** function against the object identifier to remove it (as long as it has no other references):

> def class "Customer"  
>  property File object

> When you delete an object whose class is "Customer", then the system reduces the reference count of the object whose identifier is in "File", and if it is no longer being referenced, deletes it as well.

For defining properties for an object class that are not exposed to external applications, see [**LOCAL**](local.md) directive.

##  See Also

[**DEF CLASS Define Object Class**](def_class.md)  
[**DROP CLASS Delete Class Definition**](drop_class.md)  
[**DROP OBJECT Delete Object**](drop_object.md)  
[**FUNCTION Declare Object Method**](function.md)  
[**LIKE Inherit Properties**](like.md)  
[**LOAD CLASS Pre-Load Class Definition**](load_class.md)  
[**LOCAL Designation of Local Data**](local.md)  
[**PROGRAM Create/Assign Program File**](program.md)  
[**RENAME CLASS Change Name of Class**](rename_class.md)  
[**STATIC Add Local Properties at Runtime**](static.md)  
[**NEW( ) Create New Object**](../functions/new.md)  
[**REF( ) Control Reference Count**](../functions/ref.md)

##  Example

These examples illustrate the use of the **PROPERTY** directive:

> property session$ set err ! Allows user to read value but not set

> property errmsg_valid$="Invalid input data:\n\n"

> property objChild object set err
