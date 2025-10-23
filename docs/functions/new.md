# System Functions

**NEW( )** |  **_Create New Object_**  
---|---  
  
##  Formats

1. |  _Create Object:_ |  **NEW(**_class$_[**,**_param1_[_$_]_, param2_[_$_]_,..._]**[ FOR** _dependency_**]**[,**ERR=**_stmtref_]**)**  
---|---|---  
2. |  _Clone Object:_ |  **NEW(**_obj_id_**[ FOR** _dependency_**]**[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_class$_ |  Object identifier of an existing Object. The cloning process does not run the ON_CREATE for the new clone nor provide access to files from the original.  
---|---  
_dependency_ |  Other object, window, file, control or such on which this object is dependent. If this other item is deleted from the system, the object will also be deleted. See **Dependencies**.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Object identifier.

##  Description

The **NEW( )** function is used in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** to create a new object based on a specified class name or an existing object (_obj_id_ _)_. If the class name already exists, then its definition is used. If it has not been defined previously, the system attempts to load the program _class_.pvc and execute/define the **DEF CLASS** within it (the **DEF CLASS** clause must be at the start of the program). If the system is unable to properly determine the class definition, an Error #90: Unable to locate Object class definition is generated.

#### **Note:**  
WindX supports the use of the **NEW** function via the [WDX] or [LCL] tag. See **[[WDX] Direct Action to Client Machine](../command_tags/wdx.htm)** and **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

**_Example:_**

If the class definition for Customer does not already exist in memory, then the system attempts to load the program Customer.pvc:

> Cst=new("Customer")

If this is successful, the **NEW( )** function returns the object identifier assigned to the object. The label ON_CREATE is called to initialize the object (if ON_CREATE logic exists in the class definition). Optional parameters can also be used with the **NEW( )** function to be passed on to the ON_CREATE entry point:

> C=new("Customer",File_number)

In Customer.pvc:

> ON_CREATE: \  
>  enter File_no

#### **Note:**  
Use **[REF( )](ref.md)** to increment the reference count.

##  Dependencies

The OOP interface included in PxPlus allows for the automatic linking of objects to other system components, such as programs, windows, controls, files and other objects. As these other components are closed or deleted, its linked objects will automatically have their usage count decremented. Potentially, the linked objects could also be freed up. This allows programmers to leave much of the housekeeping logic related to objects up to the system as opposed to having to worry about coding for it themselves. By linking objects to items such as the current window, the programmer no longer needs to worry about dropping the object when the window is deleted.

To establish this linkage, the **NEW** function includes a **FOR** option where the programmer can specify the component that will be linked to the object:

**Syntax** |  **Causes the Object to be Deleted When**  
---|---  
NEW(..... **FOR WINDOW**) |  ... the current window is destroyed.  
NEW(..... **FOR CONTROL** _ctlid_) |  ... the specified control is destroyed.  
NEW(..... **FOR FILE** _fileno_) |  ... the specified file is closed.  
NEW(..... **FOR OBJECT [**  _objid_ **]** ) |  ... the current object or object specified is destroyed.  
NEW(..... **FOR PROGRAM**) |  ... the current program level is exited.  
  
**_Where:_**

_ctlid_ |  Control identifier that will be linked to the object  
---|---  
_fileno_ |  File number that will be linked to the object  
_objid_ |  Object identifier  
  
_(The object dependency capability for the NEW function was added in PxPlus v6.30.)_

##  See Also

[**Object Oriented Programming**](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)  
[**DEF CLASS Define Object Class**](../directives/def_class.md)  
[**REF( ) Control Reference Count**](ref.md)
