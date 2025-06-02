# PxPlus COM Support   
  
**Referencing a COM Object** |  **__**  
---|---  
  
The **[DEF OBJECT](../../../directives/def_object.md)** directive is used to create a new instance of a specified object.

> **DEF OBJECT _obj_id_** ,[@( _col,ln,wth,ht_ )]{, | **=** } _obj_name_ $ [; **LICENSE** _=key_ ] [; **FINALIZE** _=method_ ] [, **ERR=**_stmtref_ ]

**_Where:_**

**@(**_col,ln,wth,ht_**)** |  Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
**FINALIZE** _=method_ |  Optional method name of the object instance to be run upon release of the object. See **[Finalize Method](Referencing%20a%20COM%20Object.htm#finalizemethod)**.  
**LICENSE** _=key_ |  Optional license key that should be applied when attempting to bind to an object. See **[Using Licensed Objects](Referencing%20a%20COM%20Object.htm#usinglicensedobjects)**.  
_obj_id_ |  Numeric variable that will be used to save the object reference.  
_obj_name_ _$_ |  String expression identifying the object to be referenced, as well as any object-specific parameters. See **[Object Name Contents](Referencing%20a%20COM%20Object.htm#objectname)**.  
**ERR=**_stmtref_ |  Optional program line number or statement label to which to transfer control in case of error. If an error occurs during the**DEF OBJECT** statement, the error code will always equal 12. Use the**MSG(-1)** function to obtain further details on the failure.  
  
Upon successful execution of**DEF OBJECT** , a reference to the object _obj_name$_ will be placed into the supplied numeric variable _obj_id_. Leave out the column and line coordinates for non-visible objects. Use "***** " to list all registered COM controls.

##  Object Name Contents

The options below may be used in the **DEF OBJECT** _obj_name$_ string. Square brackets are part of the statement's syntax (see **[Example Statements](Referencing%20a%20COM%20Object.htm#examplesstatements)**).

***** |  Use an *****_asterisk_ to display a pop-up window listing all 32-bit COM controls installed on the system.  
---|---  
_CLSID_ |  Class identifier (GUID) for the object in the format {_hhhhhhhh-hhhh-hhhh-hhhhhhhhhhhh_}, where the _h_ indicates a hexadecimal character.  
_progID_ |  Programmatic identifier name for the object (i.e. Word.Document).  
**[DESIGN]**_filename_.XML |  Indicates that a previously saved**OLE** /**ActiveX** control definition should be loaded from the specified .XML file. See **[PVXSAVE](Extended%20Properties%20and%20Methods.htm#pvxsave)**.  
**[DCOM]**_server;name_ |  Indicates that the object is located on a remote system.  
  
_server_ parameter is optional and can be specified either by name or by IP address. If not supplied, then the object is considered local.   
_name_ parameter is the _CLSID_ or _progID_ for the object.  
**[FILE]**_x:\filename_ |  Indicates that the object should be created using the specified file name. An example of this would be a Microsoft Word document file.  
**[GETOBJECT]**_name_ |  Indicates that PxPlus should bind to a running instance of the named object.  
  
_name_ parameter is the _CLSID_ or _progID_ for the object or a file-based moniker. File monikers are commonly used when dealing with WMI, LDAP and related services in Windows.  
**[GLOBAL]**_name_ |  Indicates that a reference to an object exposed by the use of PvxMakeGlobal should be obtained.   
  
_name_ parameter is the name used to expose the object.  
**[REGISTER]**_x:\filename;name_ |  Ensures that the object information is properly registered before attempting to create an instance of the object.   
  
_x:\filename_ parameter is the name of the executable file or library that exposes the automation object.   
_name_ parameter is the _CLSID_ or _progID_ for the object.  
**[****RUNNING]**_name_ |  Indicates that PxPlus should bind to a running instance of the named object, where _name_ is given as _CLSID_ or _progID_. An error occurs if the object is not currently running.  
**[****RUNNING OR NEW]**_name_ |  Indicates the same functionality as**[RUNNING]** syntax; however, if the object is not currently running, PxPlus attempts to create a new instance of the named object.  
**[PICTURE]**_*_ |  Indicates creation of an empty IPicture object.  
**[PICTURE]**_filename_ |  Indicates that an IPicture object should be created and the specified image file should be loaded by the object.  
**[PICTURE]**_*_ [#] _name_ ;{ **BMP** | **CUR** | **ICO** } |  Indicates that an IPicture object should be created and specified resource contents loaded by the object.   
  
For numeric resources,_name_ should be prefixed with a**#** ; e.g. #101.   
The image type is specified as the second parameter and indicates the resource group that contains the desired resource.  
  
##  Using Licensed Objects

Redistribution of a third-party COM control may sometimes require the use of a **_license file_** (usually identified by a _.lic_ extension). The license file usually permits developer-level access to the control and is not for redistribution. In some cases, a **_license key_** must be extracted from the license file in order for the control to function in run-time mode.

The following steps outline how to extract the license key from the license file and how to make it available in a run-time environment:

  * On the system where the COM object and license file have been installed, obtain a reference to the object without specifying the license information.
  * Query the PvxLicense$ property of the object for the license key. If the object is licensed, the key data is returned as a string of hex characters.
  * Add the**LICENSE** _=key_ data to the**DEF OBJECT** statement.



Once the new**DEF OBJECT** statement has been generated, the object reference can then be obtained on systems that do not have the license file installed.

##  Finalize Method

A method of the object instance can be specified to run when the object is released. This method should not require any parameters to be passed to it. This is intended to simplify the handling of automation "servers" (such as Word or Excel) that require the Quit( ) method to be executed in order to shut down the server. By specifying a _finalize_ method, the Quit( ) method (or similar) of an object does not need to be called in order to free resources.

See **[Releasing an Object Reference](Releasing%20an%20Object%20Reference.md)**.

##  Example Statements

The following are examples of**DEF OBJECT** statements:

> DEF OBJECT X, "*"   
>  DEF OBJECT X, "Word.Application;Finalize=Quit", ERR=*NEXT   
>  DEF OBJECT X, @(1,1, 70, 20)="Word.Document"   
>  DEF OBJECT X, "[DCOM]MyServer;Shell.Explorer"   
>  DEF OBJECT X, @(10, 2, 20, 10)="[File]c:\my documents\test.doc"   
>  DEF OBJECT X, "VCF1.VCF1Ctrl.1;License=1234567890ABCDEF..."   
>  DEF OBJECT X, "[Running or New]Excel.Application"   
>  DEF OBJECT X, "[Picture]*PVXHAPPY;cur"   
>  DEF OBJECT X, @(40, 1, 40, 15) = "[Design]chartfx.xml"   
>  DEF OBJECT X, "[GetObject]winmgmts:\\\\.\servername\root\cimv2" 

The**DEF OBJECT** statement can also be used to bind child objects, which are returned as the result of either a property access or method call. The syntax is as follows: DEF OBJECT X.
