# PxPlus COM Support

**Releasing an Object Reference** |  **__**  
---|---  
  
To manage the life time of an object, the PxPlus developer has been provided with the**DELETE OBJECT** statement.

> **DELETE OBJECT** _obj_ID_ [, **ERR=**_stmtref_ ]

**_Where:_**

_obj_ID_ |  Numeric variable name of object reference.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
The **[DELETE OBJECT](../../../directives/delete_object.md)** statement takes one parameter, which is the PxPlus variable that has been bound to an object reference. After execution of this statement, the reference to the object is terminated, and the object is released from memory.

When dealing with automation "servers" (multi-client applications such as MS Word or Excel), it may be necessary to execute a method of the object in order to close the application; e.g. for MS Office applications, this method is Quit( ). If a**FINALIZE=**_method_ was specified in the**DEF OBJECT** statement, the method name will be executed automatically before the object is released.

#### **Note:**  
For child objects, it is an error to perform a**DELETE OBJECT** if a**DEF OBJECT** has not been performed first. All child objects will be automatically released from memory when the parent object is released.
