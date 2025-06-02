# OOP Syntax Elements

**DEF CLASS Directive** |  **__**  
---|---  
  
**DEF CLASS** _class_ _$_[**UNIQUE**] [**ACCEPT PROPERTIES**]  
[**CREATE** _label_[**REQUIRED**]]  
[**DELETE** _label_[**REQUIRED**]]

The **DEF CLASS** directive is used to declare the start of a**Class Definition Construct**. It provides the name of the object (_class$_), and it can be used to override object creation and deletion logic. Class names are case insensitive and forward/backward slashes are considered equivalent. Duplicate names are not allowed within the system. A definition closes with the **END DEF** directive.

##  On Create/On Delete Logic

Sometimes, it may be necessary to perform initialization (or cleanup) routines when the object is created or destroyed. Initialization logic can be used to establish default values for properties, open files that the object may need, validate security, etc. Cleanup logic should be used to close files and release system resources (such as other objects) whenever an object is dropped.

By default, PxPlus executes a call to the label ON_CREATE within an object definition whenever an object is created. This logic can open files, initialize variables, and process additional parameters passed in the **NEW( )** function call. When an object is deleted from the system, PxPlus executes a call to the label ON_DELETE.

Default label names can be overridden via the**DEF CLASS** options**CREATE** _label_ and**DELETE** _label._ If there is no**CREATE** or**DELETE** declaration, PxPlus executes the default ON_CREATE / ON_DELETE in the primary class definition file only. The creation/delete entries of inherited classes are not executed unless the**CREATE/DELETE** options specify the**REQUIRED** clause. If an object inherits another object that has creation logic, the creation logic for the inherited object is performed first. Deletion logic is performed in the opposite order.

#### **Note:**  
To avoid syntax/logic errors, it is recommended that your create/on delete logic be placed outside of the **DEF CLASS .. END DEF** block.

## UNIQUE Option

For many applications, it may be desirable to limit an object to a single instance in memory. For example, an object that is essentially a subroutine library only one instance of this library is necessary.

The**UNIQUE** option for the**DEF CLASS** directive forces a single instance of an object in memory. Any object declared as**UNIQUE** will have a single instance created, and any subsequent attempt to create an instance will simply return the same object identifier and increment the object reference count by one.

**_Example:_**

> DEF CLASS "WindowsAPI" UNIQUE ON_CREATE REQUIRED ,,,

This allows programs to logically create the object then drop the object when done. The**UNIQUE** clause guarantees only a single instance of the object will ever exist.

Another use of a unique object could be a session or application control object that could have information, such as the company codes, user information, operating date, etc. By declaring this object as unique, only one instance will ever be created and any application can access it.

## See Also

**[DEF CLASS Directive](../../../directives/def_class.md)  
[END DEF Directive](../../../directives/end_def.md)  
[NEW( ) Function](../../../functions/new.md)**
