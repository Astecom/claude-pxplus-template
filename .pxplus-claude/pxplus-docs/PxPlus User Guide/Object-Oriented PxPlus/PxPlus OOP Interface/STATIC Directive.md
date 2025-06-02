# OOP Syntax Elements

**STATIC Directive** |  **__**  
---|---  
  
**STATIC** _varlist_

The **STATIC** directive is used to declare that all the variables specified (_varlist_) are to be added to the list of variables maintained within the object in effect, adding the variables to the**LOCAL** list at run time. This allows the object to read a record from the file and have the data elements remain available for subsequent calls to the object's methods. All elements of an array are defined as static by specifying the simple array name in the statement.

**_Example:_**

> STATIC A$ sets all elements of the A$ array as static.

Static variables only take effect on references that follow the**STATIC** declaration.

## See Also

**[STATIC Directive](../../../directives/static.md)**
