# OOP Syntax Elements

**LOCAL Directive** |  **__**  
---|---  
  
**LOCAL** _prop1_**[OBJECT]** ,_prop2_ **[OBJECT]**

To create a _private_ property, use the **LOCAL** directive within the class definition instead of the **PROPERTY** directive. Properties that are declared**LOCAL** are not visible to applications outside of the execution of the object itself, nor are they available to be read or updated.

Other typical uses of**LOCAL** properties wouldinclude values, such as file numbers, status flags, handles to subordinate object libraries, confidential information (such as security codes/passwords), as well as other types of information that you do not want applications outside of the object to access.

## See Also

**[LOCAL Directive](../../../directives/local.md)  
[PROPERTY Directive](../../../directives/property.md)**
