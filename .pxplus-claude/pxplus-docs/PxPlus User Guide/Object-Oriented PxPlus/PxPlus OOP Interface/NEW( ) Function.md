# OOP Syntax Elements

**NEW( ) Function** |  **__**  
---|---  
  
**NEW**(_class$_)

The **NEW( )** function is used to create a reference to, or _instance_ of, an object based on a specified class name (_class$_). If the class name already exists, then its definition is used. If the class has not been defined previously, the system attempts to load the program _class$_**.pvc** and execute/define the**DEF CLASS** within it.

For example, Comp=NEW("Company") would create a new instance of a Company class. If the class definition for Company does not already exist in memory, then the system attempts to load the program _Company.pvc_. If this is successful, the**NEW( )** function will return the object identifier assigned to the object.

If the label ON_CREATE exists in the class definition, it will be called to perform initialization logic. You can pass parameters to the**NEW( )** function following the class name as well. These parameters will be passed to the ON_CREATE entry point.

**_Example:_**

> C = NEW("Customer", File_number)

In Customer.pvx:

> 0010 ON_CREATE: ENTER File_no 

See **[On Create/On Delete Logic](DEF%20CLASS%20Directive.htm#oncreate)**.

## Reference Count

Internally, each instance of an object sets a hidden reference count property, which is used for handling multiple accesses to the same object by different aspects of an application. Logically, when an object instance is first created, its reference count is set to 1 (_one_).

When an object is dropped, the system reduces the reference count by 1 (_one_). Once the count goes to 0 (_zero_), the object and all its contents are discarded. This reference count (number of instances) may be increased/decreased using the **REF( )** function.

## See Also

**[NEW( ) Function](../../../functions/new.md)  
[REF( ) Function](../../../functions/ref.md)**
