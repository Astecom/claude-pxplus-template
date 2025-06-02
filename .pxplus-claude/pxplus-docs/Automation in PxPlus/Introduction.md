#   
  
**Automation in PxPlus** |  **__**  
---|---  
  
**_Automation_** (formerly known as _OLE Automation_) is a feature of the _Component Object Model_ (COM), an industry-standard technology used by applications to **_expose_** objects, methods, properties and events to development tools, macro languages and other applications. For example, a spreadsheet application might expose a worksheet, chart, cell, or range of cells, each as a different type of object. A word processor might expose objects, such as applications, documents, paragraphs, bookmarks or sentences.

When an application or library supports Automation, the objects exposed by the application can be accessed through PxPlus. These objects can be manipulated using PxPlus to invoke their methods and get or set their properties.

In addition to the COM interface, PxPlus also supports the .NET interface.

**_.NET Interface_**

The **[.NET Interface](../Dot%20Net%20Interface.md)** enables seamless integration between PxPlus and the .NET ecosystem. This interface allows developers to leverage the power of .NET's robust libraries in PxPlus when using .NET applications.

The .NET interface allows .NET objects to be added to applications like any PxPlus object.

_(The .NET interface was added in PxPlus 2025.)_

## Concepts and Terminology

To better understand Automation, it is necessary to understand some basic concepts and terminology:

**_Object_** |  Any item that can be programmed, manipulated or controlled. Interfacing with an object is done through property setting and getting and calling of methods.  
---|---  
**_Property_** |  A property is a characteristic of an object (an adjective). For example, properties of a Textbox object might include: Name _,_ Visible _,_ Forecolor, etc.  
**_Method_** |  A function that performs an action on an object (a verb). For example, an Application object might expose a Close method.  
**_Control_** |  An object that exposes a user interface. Controls are now typically based on ActiveX technology versus the older OLE Control technology (OCX).  
**_Late Bound_** |  Obtaining a reference to an object without any prior information about the object. Property and method names are resolved at run time. This is the binding style used by PxPlus.  
  
To program against an object, a reference to that object must first be obtained. This process is commonly referred to as **_binding_**. Unlike other languages, PxPlus simplifies this process by providing one statement that can be used to create new objects, reference running objects, and connect to remote objects.

#### **Note:**  
The file associated with the PxPlus COM interface, _pxpocx.dll_ , is referred to as "the DLL" throughout this section. See **[PXPOCX Misnomer](PXPOCX%20Misnomer/Overview.md)**.

## Referencing an Object

The **[DEF OBJECT](../directives/def_object.md)** directive is used to create a new instance of a specified object.

> **DEF OBJECT** _obj_ID_ ,[@(_col,ln,wth,ht_)]{, | **=**} _obj_name_ $[;**LICENSE** _=key_][,**ERR=**_stmtref_]

**_Where:_**

_obj_ID_ |  Numeric variable that will be used to save the object reference.  
---|---  
_@(col,ln,wth,ht)_ |  Optional left, top, width and height values to be applied against the object. If the object is a control, then the control will be placed at coordinates left, top (PxPlus-based) with the size specified by width and height.  
One underlying side effect of this argument is that it determines which PxPlus window will "own" the object.  
_obj_name_ _$_ |  String expression identifying the object to be referenced, as well as any object specific parameters. See **[Object Name Contents](Introduction.htm#objectname)** below.  
**LICENSE** _=key_ |  Optional license key that should be applied when attempting to bind to an object. See **[Licensed Controls and Objects](Introduction.htm#licensedcontrols)** below.  
**ERR=**_stmtref_ |  Optional program line number or statement label to which to transfer control in case of error.  
  
#### **Note:**  
If an error occurs during the **DEF OBJECT** statement, the error code will always equal 12. Use the **MSG( -1)** function to determine the exact reason for the failure.

##  Object Name Contents

The **DEF OBJECT** _obj_name$_ string may contain one of the following:

***** |  _Asterisk_ displays a pop-up window listing all 32-bit OLE and ActiveX controls installed on the system.  
---|---  
_CLSID_ |  Class identifier GUID for the object in the format {_hhhhhhhh-hhhh-hhhh-hhhhhhhhhhhh_}, where the _h_ indicates a hexadecimal character.  
_progID_ |  Programmatic identifier name for the object. An example of this is Word.Document.  
**[FILE]**_x:\filename_ |  Keyword indicates that the object should be created using the specified file name. An example of this would be a Microsoft Word document file.  
**[DCOM]**_server;name_ |  Keyword indicates that the object being referenced is located on a remote system.  
The _server_ parameter is optional and can be specified either by name or by IP address. If not supplied, then the object is considered local.  
The _name_ parameter is the _CLSID_ or _progID_ for the object.  
**[GLOBAL]**_name_ |  Keyword indicates that a reference to an object exposed by the use of PvxMakeGlobal should be obtained.  
The _name_ parameter is the name that was used to expose the object. PvxMakeGlobal is described in detail in the section **[Extended Properties and Methods](PxPlus%20COM%20Interface%20Extensions/Overview.htm#extendedproperties)**.   
**[REGISTER]**_x:\filename;name_ |  This syntax is used to ensure that the object information is properly registered before attempting to create an instance of the object.  
The _x:\filename_ parameter is the name of the executable file or library that exposes the automation object.  
The _name_ parameter is the _CLSID_ or _progID_ for the object.  
**[RUNNING]**_name_ |  Keyword indicates that PxPlus should bind to a running instance of the named object.  
The _name_ parameter is given as _CLSID_ or _progID_. An error will occur if the object is not currently running.  
**[RUNNING OR NEW]**_name_ |  Keyword indicates the same functionality as **[RUNNING]** syntax, with one difference: If the object is not currently running, PxPlus attempts to create a new instance of the named object.  
  
##  Licensed Controls/Objects

Redistribution of a third-party COM control can sometimes involve the use of a **_license file_** (usually identified by a .LIC extension). The license file usually permits developer-level access to the control and is not for redistribution. In some cases, a **_license key_** must be extracted from the license file for the control to function in run-time mode.

The following steps outline how to extract the license key from the license file and how to make it available to the control in a run-time environment:

|  1. |  On the system where the automation object and license file have been installed, obtain a reference to the object without specifying the license information.  
---|---|---  
|  2. |  Query the **PvxLicense$** property of the object for the license key. If the object is licensed, the key data is returned as a string of hex characters.  
|  3. |  Append the **LICENSE** _=key_ data to the parameter expression of the **DEF OBJECT** statement.  
  
Once the new **DEF OBJECT** statement has been generated, the object reference can then be obtained on systems that do not have the license file installed.

**_Examples:_**

Upon successful execution of the **DEF OBJECT** statement, PxPlus will place the object reference into the supplied numeric variable. Some examples of the **DEF OBJECT** statement include the following:

> DEF OBJECT X, "*"   
>  DEF OBJECT X, "Word.Application", ERR=*NEXT   
>  DEF OBJECT X, @(1,1, 70, 20)="Word.Document"   
>  DEF OBJECT X, "[dcom]MyServer;Shell.Explorer"   
>  DEF OBJECT X, @(10, 2, 20, 10)="[file]c:\my documents\test.doc"   
>  DEF OBJECT X, "VCF1.VCF1Ctrl.1;License=8041207972768742028669631967"   
>  DEF OBJECT X, "[running or new]Excel.Application"

The **DEF OBJECT** statement can also be used to bind child objects, which are returned as the result of either a property access or method call. The syntax for this binding is:

> DEF OBJECT X

##  Releasing an Object Reference

To manage the lifetime of an object, the PxPlus developer has been provided with the **DELETE OBJECT** statement.

> **DELETE OBJECT** _obj_ID_ [,**ERR=**_stmtref_]

**_Where:_**

_obj_ID_ |  Numeric variable name of object reference  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control  
  
The **DELETE OBJECT** statement takes one parameter, which is the PxPlus variable that has been bound to an object reference. After execution of this statement, the reference to the object is terminated, and the object is released from memory. For child objects, it is an error to perform a **DELETE OBJECT** if the **DEF OBJECT** has not been performed first.
