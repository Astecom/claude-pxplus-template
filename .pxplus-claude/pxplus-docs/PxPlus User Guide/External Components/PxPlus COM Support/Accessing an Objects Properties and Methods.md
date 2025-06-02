# PxPlus COM Support   
  
**Accessing an Object's Properties and Methods** |  **__**  
---|---  
  
Once a reference to an object has been obtained, the next step would be to manipulate or control the object. Use the **'***_(tick asterisk)_ internal property to find out which properties and methods are available:

> **PRINT**  _obj_ID_ **'***

This statement returns a comma-separated list of all exposed properties and methods. Methods are indicated by having trailing parentheses "**( )** " appended to their name.

This list is merely an overview of the object and does not include data type or parameter information.

#### **Note:**  
Some objects return a listing that only contains the PxPlus **[Extended Properties and Methods](Extended%20Properties%20and%20Methods.md)**. This occurs when the object does not expose run-time type information.

Proper object documentation is very important. Without proper documentation, it will be impossible to tell:

  * What parameters are to be passed to methods.
  * What return values can be expected from properties or methods.
  * What parameters are considered by reference vs. those that are by value.
  * What method parameters are optional.
  * What properties are indexed, and what data types are used for the indexes.



PVX Plus only provides support for the PxPlus object **_interface_**. Specific interface information for an object must be obtained from the respective vendor.

## Retrieving Property Values

To retrieve a property value, place the object variable and property name on the right-hand side of the assignment:

> _variable_ **=**  _object'property_**[$]**

Automation is case insensitive; therefore, a property name can be written in upper, lower, mixed or proper case. If the property is to return a string data type, then a**$** symbol should be placed at the end of the property name. Properties may also be collections or arrays, which would require a slightly different syntax when retrieving values:

> _variable_ **=**  _object'property_**.get[$](**  _index_ **[$], )**

The**.get** that is appended to the property name indicates to PxPlus that this is a property and not a method call. For string type properties, the**$** symbol should be placed at the end of the **.get** and before the open parentheses. The _index_ parameter indicates the property element to retrieve. Unlike PxPlus arrays, the index for the property might not be a numeric data type (check the object documentation).

**_Example:_**

> STYLE=DOCUMENT'Styles.get("Normal")

**_Where:_**

> _Styles_ is a property and "Normal" indicates the indexed value to retrieve.

#### **Note:**  
Some objects allow indexed property access without specifying**.get** notation.

## Assigning Property Values

To assign a property value, place the object variable and property name on the left-hand side of the equation:

> _object'property_ **[$]=**  _variable_

Automation is case insensitive; therefore, a property name can be written in upper, lower or mixed case. If the property is to return a string data type, then a**$** symbol should be placed at the end of the property name. Properties may also be collections or arrays, which would require a slightly different syntax when assigning values:

> _result_ **=**  _object'property_ _**.**_ **put** ( _index_ [ **$** ], , _data_ [ **$** ])

This syntax is identical to a method call but with a few exceptions. The _result_ of the property assignment is always zero, and it can be disregarded. The **_._ put** indicates to PxPlus that this is a property and not a method call. The _data_ to be assigned to the property is passed in as the last parameter between the parentheses.

This syntax style is also required when assigning an object to a non-index/non-array property. The reason for this is due to a syntax conflict in PxPlus where the following would be invalid:

> _object'property_ =* _other_object_

The correct syntax for the above example would be:

> _result_ **=**  _object'property_**.put(***_other_object_**)**

#### **Note:**  
When assigning or passing an object, it is required that an *****  _(asterisk)_ appears before the object reference. This allows PxPlus to differentiate between a variable holding a numeric value and one that holds an object reference.

There may also be cases where the property assignment is expecting to be set by reference. A common example occurs when an object property is changed to refer to a new object. For most properties that are object types, the**.put** syntax will work correctly. If an error does occur, then the following syntax should be tried:

> _result_ **=**  _object'property_**.putref(***_otherobject_**)**

## Calling Methods

To call a method, place the object variable, method name, and parameter list on the right-hand side of the equation:

> _result_ **=**  _object'method_**[$] (**_param1,_  _param2_ **[, ])**

Automation is case insensitive; therefore, a method name can be written in upper, lower, mixed or proper case. If the method is to return a string data type, then a**$** symbol should be placed at the end of the method name. Some methods are written to accept **_optional_** parameters. In PxPlus, these would be passed using an *****_asterisk._ See **[Passing Optional Parameters](Advanced%20COM%20Usage.htm#Mark1)**.

## Invocation Hints

Due to PxPlus syntax restrictions, desired control of how a method is invoked and how data is returned, a set of invocation hints have been developed that can be used to direct the control of the COM interop layer:

**.GET** |  Indicates that the call should be performed as a property "get". This is normally required when dealing with indexed properties, as the syntax of the statement is translated as a call. **_Example:_** S$ = OBJ'CELLS.GET$(1, 2)  
---|---  
**.PUT** |  Indicates that the call should be performed as a property assignment. This is normally required when dealing with indexed properties, as the syntax of the statement is translated as a call. **_Example:_** OBJ'CELLS.PUT$(1, 2, S$) This syntax is also required when assigning an object to a property. **_Example:_** OBJ'SELRANGE.PUT$(*X)  
**.PUTREF** |  Indicates that the call should be performed as a property reference assignment. This is normally required when assigning an object reference to an object's property.  
**.CALL** |  Indicates the call should be performed as a method only. Normally, the COM interop layer will attempt (through trial and error) to resolve the call as either a method or property.  
**.GETB$** |  Indicates that the returned property data, if a string type, should not be converted from double byte to ANSI string.  
**.CALLB$** |  Indicates that the returned method data, if a string type, should not be converted from double byte to ANSI string.  
**.GETV** |  Indicates that the returned property data should be returned as variant vs. its base data type. **_Do not_** use on a property that returns an internal object; e.g. *CONSTANT, *PROXY, *ERROR, *MASTER, etc. are internal objects that cannot be expressed in a variant.  
**.CALLV** |  Indicates that the returned method data should be returned as variant vs. its base data type. **_Do not_** use on a method that returns an internal object; e.g. *CONSTANT, *PROXY, *ERROR, *MASTER, etc. are internal objects that cannot be expressed in a variant.  
  
These hints are added to the end of a method/property name so that the call reads as _object'method_ **{.**_hint_**}(**_parameters_**)**. If you attempt to get or set array properties without using an "invoke hint", the DLL will attempt to resolve the calling type; however, it can only do this by trial and error (up to four separate attempts).

**_Example:_**

The following is an example of a grid object that exposes a CELL property that is accessed using a row and column indicator:

> 10 DATA=GRID'CELL.GET(ROW, COL) ! Get the cell value  
>  20 DATA= DATA+10 ! Add 10 to the value  
>  30 NULL=GRID'CELL.PUT(ROW, COL, DATA) ! Set the cell value

For speed reasons, as well as for clarity, the developer should always specify a hint when calling a property using the syntax of a method call. In the previous example, line 30 should be changed to:

> 30 NULL=X'VAL.PUT(*Y) ! Assign object Y to X'VAL
