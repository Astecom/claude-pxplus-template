# Directives 

**DEF OBJECT** |  **_Define Windows Object_**  
---|---  
  
##  Formats

1. |  _Invisible External Object:_ |  **DEF OBJECT**  _ext_id,objDef_ _$_[,_arg_ __1_[$],_arg_ __2_[$],,_arg_n_[$]][,**ERR=**_stmtref_]  
---|---|---  
2. |  _Visible External Object_ _:_ |  **DEF OBJECT**  _ext_id_ ,**@(**_col,ln,wth,ht_**)**{,|=} _objDef_ _$_[,_arg_ __1_[$],_arg_ __2_[$],,_arg_n_[$]] [,**ERR=**_stmtref_]  
3. |  _List Available COM Objects_ _:_ |  **DEF OBJECT** _ext_id_ , "*" [,**ERR=**_stmtref_]  
  
**_Where:_**

"*" |  An _asterisk_ displays registered COM controls.  
---|---  
**@(**_col,ln,wth,ht_**)** |  Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
_ext_id_ |  Numeric variable to receive a handle (memory pointer to object).  
_objDef_ _$_ |  For **COM** objects, this should be the name by which the COM object is registered in the Windows system registry sub-key HKEY_CLASSES_ROOT. For **[.NET](../Dot%20Net%20Interface.md)** objects, this should be a string prefixed with [.NET] and followed by either the path of the .NET dll or the name of the .NET system dll in the Global Assembly Cache (GAC), followed by a comma and then the namespace and object name of the .NET object to load (i.e. System.Windows.Forms.MonthCalendar).

#### **Important Note:**  
The object name is **_case sensitive_** , as .NET objects are case sensitive.  
  
**_Example:_**  
  
"[.NET]System.Windows.Forms,System.Windows.Forms.MonthCalendar"

For an embedded **Chromium Browser** object, this should be *Browser. See **[*BROWSER Chromium Browser Object](../utilities/browser.md)**. _(The Chromium Browser object was added in PxPlus 2017.)  
(.NET support was added in PxPlus 2025.)_  
_arg_1_[$],_arg_2_[$],,_arg_n_[$] |  You can optionally pass in arguments when creating .NET objects. These arguments can be strings, numbers, or .NET object handles. See **[PvxHandle$](def_object.htm#Mark12)**. _(The optional arguments were added in PxPlus 2025.)_  
  
##  Description

The **DEF OBJECT** directive is used to create a new instance of a specified external control. It can be used to create a **COM** , **.NET** or ***Browser** control.

Upon successful execution of **DEF OBJECT** , a reference to the object _objDef_ _$_ will be placed into the supplied numeric variable _ext_id_.

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. DEF OBJECT "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an **EXECUTE** directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

For **COM** objects, this is done through the PxPlus Event Handling interface and Component Object Model (COM), an industry-standard technology used by applications to expose methods, properties and events to development tools, macro languages and other applications. See **[Automation in PxPlus](../Automation%20in%20PxPlus/Introduction.md)**.

**_Using .NET Objects_**

Once you define a **[.NET](../Dot%20Net%20Interface.md)** object, you can use it like any PxPlus object through properties, methods and events.

#### **Important Note:**  
All formats are **_Windows only_** , and you must have installed **Windows Desktop Runtime 8**.  
  
If using 64-bit PxPlus, you must have the x64 Runtime installed. If using 32-bit PxPlus, you must have the x86 Runtime installed.  
  
The .NET interface can be used when running under WindX, in which case, **Windows Desktop Runtime 8** must be installed on client machines.

The following How To Tutorials provide detailed steps on how to create .NET Button and Calendar objects:

> **[How to Create a .NET Button (Program)](../How%20To/How%20to%20Create%20Dot%20NET%20Button%20\(Pgm\).htm)  
>  [How to Create a .NET Calendar Control (Program)](../How%20To/How%20to%20Create%20Dot%20NET%20Calendar%20\(Pgm\).htm)**

_(.NET support was added in PxPlus 2025.)_

You can list the properties and methods via:

> print ext_id'*

You can access the properties and methods of the object using the **'** (_apostrophe operator_):

> ext_id'prop$="foxtrot"  
> ext_id'doMethod$()

#### **Note:**  
Attempting to access properties and methods that have the same name as one of the PxPlus system variables or functions, such as **DAY** or **LOG()** , will result in a syntax error.  
  
To avoid this syntax error and access these properties and methods, prefix the property or method name with **NotPvx_**.  
  
**_Examples:_**  
  
ext_id'NotPvx_Day=12  
  
ext_id'NotPvx_Log("foxtrot")

The .NET objects also define several **_extended_** ** _properties_**:

**PvxCaseSensitive******|  **_(Read/Write Property)_** Used to control whether the .NET objects properties and methods are case sensitive. Case sensitivity may be needed if a .NET object defines multiple properties or methods with the same name using different case. |  0 |  Properties and methods are case insensitive. _(Default)_  
---|---  
1 |  Properties and methods are case sensitive.  
**PvxCol******|  **_(Read/Write Property)_** Used to get/set the position of the left side of the .NET container form control (in columns) from the left side of the panel.  
**PvxCols******|  **_(Read/Write Property)_** Used to get/set the width (in columns) of the .NET container form control. It also sets the width (in columns) of the .NET control itself while maintaining any offset with the size of the form previously established. If the object is not a control, then setting this property has no effect.  
**PvxLine******|  **_(Read/Write Property)_** Used to get/set the position of the top of the .NET container form control (in lines) from the top of the panel.  
**PvxLines** |  **_(Read/Write Property)_** Used to get/set the height (in lines) of a .NET container form control. It also sets the height (in lines) of the .NET control itself while maintaining any offset with the size of the form previously established. If the object is not a control, then setting this property has no effect.  
**PvxEvents[$]** |  **_(Read-Only Property)_** Returns the PxPlus class object that is handling events or returns a list of events names (depending on the **$** suffix) for the object. Subscribed to events will be prefixed with a **+** (_plus sign_) while unsubscribed events will be prefixed with a ****(_minus sign_). If no events are subscribed to this, returns an empty string.  
**PvxForm******|  **_(Read-Only Property)_** Returns the handle/ctl to the .NET form container object for the .NET control.  
**PvxHandle$******|  **_(Read-Only Property)_** Used for assigning or passing in a .NET object to a .NET object constructor, property or method. **_Examples:_** def object font,"[.NET]System.Drawing,System.Drawing.Font","Verdana",12,fontStyle'PvxHandle$ dotNetObjA'AddObj(dotNetObjB'PvxHandle$) dotNetObjA'ChildObj$ = dotNetObjB'PvxHandle$

#### **Note:**  
In the third example above, the **$** at the end of **ChildObj** is not a string type, even though it is an object reference.  
  
This is done so that it can be assigned with the special property **PvxHandle$** , which is a string type, and you cannot assign a string type to a non-string type.  
  
**PvxHeight******|  **_(Read/Write Property)_** Used to get/set the height (in pixels) of a .NET container form control. It also sets the height (in pixels) of the .NET control itself while maintaining any offset with the size of the form previously established. If the object is not a control, then setting this property has no effect.  
**PvxLeft******|  **_(Read/Write Property)_** Used to get/set the left border (in pixels) of a .NET container form control. If the object is not a control, then setting this property has no effect.  
**PvxTop******|  **_(Read/Write Property)_** Used to get/set the top border (in pixels) of a .NET container form control. If the object is not a control, then setting this property has no effect.  
**PvxWidth******|  **_(Read/Write Property)_** Used to get/set the width (in pixels) of a .NET container form control. It also sets the width (in pixels) of the .NET control itself while maintaining any offset with the size of the form previously established. If the object is not a control, then setting this property has no effect.  
  
You can/should drop/delete any .NET objects once they are no longer needed to free up resources (ctls/memory):

> drop object ext_id  
>  delete object ext_id

#### **Note:**  
If returning a .NET object via a property or method, you should save the handle/ctl so you can drop/delete it when it is no longer needed.  
  
This is true even if creating the .NET object just to pass it in as an argument to another object.

Events can be subscribed to and unsubscribed to via **[ON EVENT](on_event.md)**, just like COM and *Browser. All .NET events have two arguments, _sender_ and _evtArgs_ , where _sender_ is the .NET object that triggered the event while _evtArgs_ is a .NET object that contains additional event arguments, if needed. What these are exactly will depend on the .NET object, and you can use the .NET objects documentation to find out details about specific events, _evtArgs_. Event arguments are supported only when handling events via a class.

Everything in .NET is an object, even numbers and strings. When passing in arguments to create an object or to call a method, and when setting properties, PxPlus will automatically convert a PxPlus **_number_** to a .NET Int16, UInt16, Int32, UInt32, Int64, UInt64, or Double object, and a PxPlus **_string_** to a .NET String, Char, Char[], Byte, Bye[], SByte, or SByte[] object, and a PxPlus **0** or **1** to a .NET Boolean object. What the PxPlus number or string gets converted to depends on the .NET property or argument type. Other .NET property or argument types are **_not_** converted, and you need to use a .NET object handle. When setting a property of a non-converted type or when passing in an argument via **DEF OBJECT** or a method call, use the **PvxHandle** **$** property of a PxPlus .NET object. See **[PvxHandle$](def_object.htm#Mark12)** for examples.

The return value of a property or method is also automatically converted where .NET Int16, UInt16, Int32, UInt32, Int64, UInt64, or Double objects are converted to PxPlus **_numbers_** , .NET String, Char, Char[], Byte, Bye[], SByte, or SByte[] objects are converted to PxPlus **_strings_** , and a .NET Boolean object is converted to a **0** or **1**. Other types are **_not_** converted and are returned to PxPlus as a handle/ctl to the.NET object, which can then be used the same as the originally created .NET object.

In .NET, enumerator objects are common. Enumerators allow you to have a pre-set list of named values that a property can be set to. PxPlus treats the enumerator as a .NET object. The enumerator object will have properties for each of the named values. These properties return their own enumerator object set to that named value. The enumerator object is set to a specific named value via the **value_** property with a numeric representation of which named enumerator it is. If you know the numeric value for the named enumerator type you want, you can set the **value_** property directly.

#### **Note:**  
Care should be taken to give returned enumerator objects handles so you can drop/delete them when done.  
  
def object fontStyle,"[.NET]System.Drawing,System.Drawing.FontStyle"  
bold=fontStyle'Bold  
drop object fontStyle  
def object font,"[.NET]System.Drawing,System.Drawing.Font","Verdana",12,bold'PvxHandle$  
drop object bold  
  
drop object font

In .NET, some objects are value type objects where each time you return the object, it will be a unique object. In this case, you cannot just access that value type object's properties or methods to change it and have the parent object changed. You must get a handle to a value type object, modify it, and then set the parent object property to the modified value type object. For example, enumerators are value type objects. You want to drop/delete these objects when finished with them.

In .NET, non-value type objects will return the same object each time they are accessed. You can access a non-value type object's properties and methods to change the behavior of the parent object. PxPlus will use the same ctl value each time you access these types of objects. You generally do not drop/delete these objects, as they are part of the parent object.

Static .NET classes are supported as well. A static class is a class with only static members, such as System.Math, which can be used to get constant values and perform operations on passed-in values but does not store any data. You do a **DEF OBJECT** on it the same as you would a .NET object and work with it in the same way.

Error messages are returned via **MSG(-1)**.

##  Format 1

**_Define Invisible External Object_**

**DEF OBJECT**  _ext_id,objDef_ _$_[,_arg_ __1_[$],_arg_ __2_[$],,_arg_n_[$]][,**ERR=**_stmtref_]

Use this format to create a link to an invisible external object (COM, .NET or *Browser). This format associates the object with the current window, yet it is hidden from view.

**_COM Example:_**

> def object this_com_id,"Mabry.SoundX"

**_.NET Example:_**

> def object this_ext_id,"[.NET]Newtonsoft.Json.dll,Newtonsoft.Json.JsonConvert"

Once the definition is complete, _this_ext_id_ will contain a handle to the object. This handle will be used to get and set _properties_ and _methods_ and service _events_. Note that since the value returned in _this_ext_id_ is a handle (memory pointer) to the object, it should not be changed by the application.

##  Format 2

**_Define Visible External Object_**

**DEF OBJECT**  _ext_id_ ,**@(**_col,ln,wth,ht_ **)**{,|=} _objDef_ _$_[,_arg_ __1_[$],_arg_ __2_[$],,_arg_n_[$]] [,**ERR=**_stmtref_]

This format defines a visible object and associates it with a location in the current window:

> def object numvar,@(col,row,wide,high),"object_name",err=2000  
> def object numvar,@(col,row,wide,high)="object_name",err=2000

> def object numvar,@(col,row,wide,high),"[.NET]dll_path,object_name",err=2000  
> def object numvar,@(col,row,wide,high)="[.NET]dll_path,object_name",err=2000

For graphical .NET controls, a .NET form is created, and the .NET control requested is added to it. The form is then embedded at the coordinates given in the **DEF OBJECT** directive. The .NET control is positioned at the top left of the .NET form and given the same width and height as the form. The end result is that you see only your .NET control embedded in the PxPlus screen. You can, however, change the position and size of the control within a .NET frame, if needed. You may want to do this if the form supports menus, for example, where you can position the control lower in the frame and shorten the height to make room for the menu.

The position and size of the .NET frame is controlled via the following **[properties](def_object.htm#Mark13)**: **PvxCol** , **PvxCols** , **PvxLine** , **PvxLines** , **PvxLeft** , **PvxTop** , **PvxHeight** and **PvxWidth**. The position and size of the .NET control within the .NET form is controlled via the .NET object properties **Left** , **Top** , **Height** , **Width** , **Bottom** and **Right**.

When moving and/or resizing the .NET container form control via the **Pvx** _nnnnn_ properties, the size of the .NET control will be moved and/or resized as well. If the position/size of the .NET control was modified to be different from the form, then that difference will be maintained when moving/resizing. For example, if you moved the .NET control lower and made it shorter than the form to fit a menu, and then you move and/or resize the form, the space created at the top for the menu will be kept intact.

**_Example:_**

> def object pdf,@(80,2,100,65),"[.NET]C:\Program Files\DevExpress 24.2\Components\Bin\NetCore\DevExpress.XtraPdfViewer.v24.2.dll,DevExpress.XtraPdfViewer.PdfViewer"  
> pdf'Top=150  
> pdf'Height=pdf'Height-150  
> pdf'CreateRibbon()  
> pdf'LoadDocument(_path_to_pdf_ _$_)

#### **Note:**  
Only WinForms graphical .NET controls are supported.

##  Format 3

**_List Available COM Objects_**

**DEF OBJECT** _ext_id_ , "*" [,**ERR=**_stmtref_]

Use this format to display a pop-up window listing the COM controls currently installed on the system.

##  Examples

**_COM Examples:_**

> def object X,"*"

> def object X,"Word.Application",err=*next

> def object X,@(1,1,70,20)="Word.Document"

> def object X,"[dcom]MyServer;Shell.Explorer"

> def object X,@(10,2,20,10)="[file]c:\y documents\test.doc"

> def object X,"VCF1.VCF1Ctrl.1;License=8041207972768742028669631967"

> def object X,"[running or new]Excel.Application"

.**_NET Examples:_**

> def object mathDotNet,"[.NET]mscorlib,System.Math"

> def object devExpressGrid,@(80,1,50,20),"[.NET]C:\Program Files\DevExpress 24.2\Components\Bin\NetCore\DevExpress.XtraGrid.v24.2.dll,DevExpress.XtraGrid.GridControl"

> def object font,"[.NET]System.Drawing,System.Drawing.Font","Verdana",12,fontStyle'PvxHandle$,err=bad_font

> def object calendarDotNet,@(100,10,30,20),"[.NET]System.Windows.Forms,System.Windows.Forms.MonthCalendar"

##  See Also

[**DELETE OBJECT Remove Object**](delete_object.md)  
[**ON EVENT Event Processing**](on_event.md)  
[**Apostrophe Operator**](../appendix/apostrophe_operator.md)  
**[Automation in PxPlus](../Automation%20in%20PxPlus/Introduction.md)  
[External Controls - *Browser, ActiveX (COM), PVX Plus, .NET](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)  
[How To Tutorials (for .NET Interface)](../How%20To/Dot%20NET%20Tutorials%20Intro.md)**
