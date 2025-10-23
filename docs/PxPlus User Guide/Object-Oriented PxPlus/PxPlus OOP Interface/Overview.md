# Object-Oriented PxPlus

**PxPlus OOP Interface** |  **__**  
---|---  
  
Specific OOP-related directives and functions have been added to the language for the definition, creation and deletion of classes and objects. The PxPlus environment takes care of all of the housekeeping chores required for their implementation.

Applications only have to request that a new instance of an object be created, and PxPlus will locate and load its definition. When the object is no longer needed, the object and all its properties are released. Class definitions are handled similarly. Unless specifically defined, PxPlus will dynamically load the definition of an object class and maintain it in memory until there are no references to it (either by an object or another class inheriting it).

PxPlus enlists the use of several OOP-related syntax elements. See **[OOP Syntax Elements](OOP%20Syntax%20Elements.md)**.

The following is a brief explanation of PxPlus OOP mechanisms. For a collection of sample objects (illustrating the various mechanisms available), see **[Putting It All Together](../Putting%20It%20All%20Together/Overview.md)**.

## Classes and Objects

Object-oriented programming in PxPlus begins with the definition of _classes_. Each class provides the name given to an object definition (such as **[Company](../Putting%20It%20All%20Together/Overview.htm#company)**, **[Customer](../Putting%20It%20All%20Together/Overview.htm#customer)** or **[Supplier](../Putting%20It%20All%20Together/Overview.htm#supplier)**), as well as access to the object's properties and methods. Classes are saved in the form of a _class_ .**pvc** program file and can include:

  * Property definitions (both hidden and exposed)
  * Method definitions
  * References to other objects whose characteristics are to be inherited
  * References to programs and related logic that supports the object



A class definition begins with a **[DEF CLASS](../../../directives/def_class.md)** directive, followed immediately by the object description (comprising various PxPlus OOP-related directives). An **[END DEF](../../../directives/end_def.md)** directive is used to mark the end of the definition. The **DEF CLASS** statement must appear at the beginning of the .**pvc** program file.

Several OOP-related directives are available for use in a **_class definition construct_** :

> 0010 **DEF CLASS** " _class$_ " ...   
>  0020 **PROPERTY**  _prop1, prop2, ..._  
>  0030 **LOCAL**  _prop1, prop2, ..._  
>  0040 **FUNCTION**  _method (param) "_  
>  0050 **LIKE**  _"otherclass", ..._  
>  0060 **PROGRAM**  _"interface_prog"_  
>  0070 **PRECISION**  _nnn_ **FOR OBJECT**  
>  0080 **END DEF**

## Creating/Accessing an Object

PxPlus has a built-in feature that simplifies the loading and unloading of classes. Once an object class has been defined, it can then be used to create objects via the **[NEW( )](../../../functions/new.md)** function. Whenever a class is referenced by **NEW( )** , and the class is not already defined in the system, the system will automatically load the class definition from the **.pvc** file. The **[LOAD CLASS](../../../directives/load_class.md)** directive can also be used to auto-load a class definition from a file. This definition remains in memory until no references (handles) to it exist - at which point the system automatically deletes the class definition. Definitions are also deleted using the **[DROP CLASS](../../../directives/drop_class.md)** directive or when a **[START](../../../directives/start.md)** directive is issued.

**NEW( )** loads the class definition (if necessary), instantiates the object, and creates a logical handle to the object. Because the system automatically tracks the number of open handles to each class, an application can have multiple references to the same class; and as long as they always have a corresponding **[DROP OBJECT](../../../directives/drop_object.md)** for each **NEW( )** , the system will keep track of the loading and unloading of class definitions. The **[REF( )](../../../functions/ref.md)** function can also be used to monitor and control access to objects by controlling the reference count. All objects are destroyed automatically when a **START** directive is issued.

##  Using Methods and Properties

The properties and methods defined in an object are accessible to a program via the apostrophe operator _(' tick)_ using the format:

> _obj_id_**'**_method_ [$](_args_)   
> _obj_id_**'**_property_ [$]

The syntax **'***  _(tick asterisk_) can be used to return a comma-separated list of all the methods and properties within an object.

When referencing a method, a **$**  _dollar sign_ means that the method will return a string; otherwise, a numeric value would be returned. Methods that end in **%** are assumed to return an integer. Methods usually return values; however, sometimes they are used to perform logic that returns a simple indication of success or failure; e.g. **1** or **0**.

Properties are referenced via the apostrophe operator in the same manner as for methods. However, when executing **_within_** an object, all object properties become simple PxPlus variables (as far as the application logic is concerned). An object's properties and their values are preserved for as long as the object exists (similar to the way global variables are preserved throughout the life of a PxPlus session).

To reference properties and methods within the object that you are currently executing (e.g. PayRate), use the **_Obj** prefix (_Obj'PayRate). This prefix is a system-supplied variable containing the current object identifier.

During the execution of program logic, direct property manipulation will not invoke any **[PROPERTY GET/SET](../../../directives/property.md)** logic (e.g. PayRate=n); however, if you refer to a property using its object identifier (_Obj'PayRate=n), the system will invoke the **GET** /**SET** logic.

For sample objects, see **[Putting It All Together](../Putting%20It%20All%20Together/Overview.md)**.

#### **Note:**  
As of PxPlus v11.50, the capability to use properties on a READ/INPUT directive has been added. Prior to this version, you could only specify properties on an output directive, e.g. WRITE, PRINT.

**_OOP Methods_**

When invoking an object method/function, the caller may include one or more values to be pre-initialized in the method using **WITH**  _variable=expression, ..._ in the parameter list. String and/or numeric variables may be provided. Should these variables also be properties of the object, the object property value will be temporarily replaced with the value from the expression for the duration of the method/function. Upon exit, the property value will be restored.

See **[CALL](../../../directives/call.md)** and **[PERFORM](../../../directives/perform.md)** directives.

#### **Note:**  
The **WITH** clause cannot be used with remote objects (those created with **[[WDX]](../../../command_tags/wdx.htm)** or **[[LCL]](../../../command_tags/lcl.htm)**) nor with non-PxPlus objects such as OCX controls.

_(Support for a WITH clause to pre-set variables was added in PxPlus 2021.)_

## See Also

**[OOP Syntax Elements](OOP%20Syntax%20Elements.md)  
[Putting It All Together](../Putting%20It%20All%20Together/Overview.md)**
