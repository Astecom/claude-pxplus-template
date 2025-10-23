# OOP Syntax Elements

**PROPERTY Directive** |  **__**  
---|---  
  
**PROPERTY [HIDE]**_prop1_ **[OBJECT]**_, prop2_**[OBJECT]**_, ..._

The **PROPERTY** directive is used within a **DEF CLASS .. END DEF** block to declare an object's properties _(data)_. These properties can be treated like any other variable and are accessible using the **[Apostrophe Operator](../../../appendix/apostrophe_operator.md)**.

To define properties for an object class that is not to be exposed to external applications, see **[LOCAL Directive](LOCAL%20Directive.md)**.

If the property contains an object identifier to another object, specify the keyword**OBJECT** after the property _name._ When the object is deleted, PxPlus will use the **REF( )** function against the object identifier to remove it (as long as it has no other references).

**_Example:_**

> DEF CLASS "Customer"   
>  PROPERTY File OBJECT

When you delete an object whose class is "Customer", then the system reduces the reference count of the object whose identifier is in "File", and if it is no longer being referenced, deletes it as well.

You can also specify logic to be called automatically whenever a property is read or written. This capability allows the application designer to control how the underlying application will view and update any of the object properties.

## On Read Logic

A property name _prop_ can be followed by a**GET** _label_ to define the location of the logic to call whenever the property is read in the application. With a**GET** in place, the specified logic issues a**RETURN** value, which returns the actual value of the property to the application.

**_Example:_**

> PROPERTY ExtendedAmount GET Extension   
>  ...   
>  Extension:   
>  RETURN Quantity*Price

If the logic resides outside of the defining program, then the name of the program and entry point is provided in quotes instead. If the logic required to do a read is simply a formula, then it can be inserted directly into the**PROPERTY** definition clause using an **=**_equals sign_ instead.

**_Example:_**

> PROPERTY ExtendedAmount = Quantity*Price

## On Write Logic

To intercept all of the property updates, you can specify**SET** label. With a**SET** in place, the system calls the logic whenever the property is being updated and passes it the value being set. Like the**GET** option, an external program/entry point can be provided.

**_Example:_**

> PROPERTY Quantity SET "Invline;ChgQty"

**_Where:_**

Invline contains:

> 2000 ChgQty:\   
>  2010 ENTER NewQty   
>  2020 IF NewQty = Quantity then RETURN   
>  2030 ! .. Update inventory...then RETURN

If the logic is within the defining program, then you would simply specify the statement label:

> PROPERTY Quantity SET ChgQty

## Blocking GET/SET

To prevent a user from being able to**GET** or**SET** a property, specify the keyword**ERR** following the**GET/SET** declaration.

**_Example:_**

> PROPERTY ExtendedAmount GET Extension SET ERR

The**SET ERR** after this property makes it **_read only_**. An error exit within the**GET/SET** causes an error to be returned to the application.

## See Also

**[PROPERTY Directive](../../../directives/property.md)  
[REF( ) Function](../../../functions/ref.md)  
[LOCAL Directive](../../../directives/local.md)**
