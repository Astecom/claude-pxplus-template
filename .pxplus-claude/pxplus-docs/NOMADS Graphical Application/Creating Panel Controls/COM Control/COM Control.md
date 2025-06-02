# Creating Panel Controls

**External Controls - *Browser, ActiveX (COM), PVX Plus, .NET**|   
---|---  
  
The PxPlus **External Control Properties** dialogue allows you to integrate external components produced by third-party vendors into your MS Windows-based PxPlus application (e.g. progress bar, spreadsheet, browser or calendar). This dialogue is used to obtain information about, as well as access to, the internal properties and methods of the external control being used.

This table lists the types of external controls that can be created:

**_Chromium Browser_** |  The **[Chromium Browser Object](../../../utilities/browser.md)** allows you to embed a Chromium Browser into PxPlus windows. This object can be used to display a Web page, execute JavaScript, and subscribe to browser events. The Chromium Browser was developed as an alternative to the Microsoft Web Browser (Shell Explorer). _(The Chromium Browser Object was added in PxPlus 2017.)_  
---|---  
**_ActiveX Controls_** |  ActiveX controls are specific components that provide applet-like functionality for Web pages. These controls can be accessed and executed via Web browsers and other applications over the Internet. However, ActiveX offers little cross-platform support, compared to Java, and is limited to software based on Microsoft's **C** omponent **O** bject **M** odel (COM).  
**_PVX Plus Controls_** |  The types of PVX Plus external controls that can be created are Ace Editor Control, **[Google Maps Control](../../../Extended%20NOMADS%20Objects/Google%20Maps%20Interface/Google%20Maps%20Interface%20Overview.md)**, **[Signature Capture Control](../../../Extended%20NOMADS%20Objects/eSignature%20Capture/esignature%20capture.md)** and **[TinyMCE Editor Control](../../../Extended%20NOMADS%20Objects/TinyMCE%20HTML%20Editor/TinyMCE%20HTML%20Editor%20Overview.md)**.  
**_.NET Controls_** |  The **[.NET Interface](../../../Dot%20Net%20Interface.md)** allows .NET objects to be added to applications and used like any PxPlus object.

#### **Important Note:**  
All formats are **_Windows only_** , and you must have installed **Windows Desktop Runtime 8**.  
  
If using 64-bit PxPlus, you must have the x64 Runtime installed. If using 32-bit PxPlus, you must have the x86 Runtime installed.  
  
The .NET interface can be used when running under WindX, in which case, **Windows Desktop Runtime 8** must be installed on client machines.

The following How To Tutorials provide detailed steps on how to create .NET Button and .NET Calendar controls and add a .NET Calendar query button to a NOMADS Multi-Line control:

> **[How to Create a .NET Button (NOMADS](../../../How%20To/How%20to%20Create%20Dot%20NET%20Button%20\(NOM\).htm))  
> ** **[How to Create a .NET Calendar Control (NOMADS)](../../../How%20To/How%20to%20Create%20Dot%20NET%20Calendar%20\(NOM\).htm)  
> ** **[How to Display a Date in a PxPlus Multi-Line from a NOMADS .NET Calendar](../../../How%20To/How%20to%20Display%20Date%20in%20Mline.md)**

_(The .NET interface was added in PxPlus 2025.)_  
  
To add an external control to a NOMADS panel, see **[Adding an External Control](COM%20Control.htm#addingCOM)**.

To define an external control once it has been added to a panel, see **[Defining an External Control](COM%20Control.htm#definingCOM)**.

For information on handling events for an external control, see **[Handling Events](COM%20Control.htm#events)**.

##  Adding an External Control

To add an external control to your panel, select the External Control button from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)** in the **[Panel Designer](../../Panel%20Designer/Introduction.md)**. Hold down the left mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object. Select the type of external control you want to create and define its properties.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

##  External Control Properties

When creating or editing an external control, the **External Control Properties** dialogue is displayed:

> This dialogue is divided into the following tabbed panels for viewing and/or changing external control properties: **[Display](COM%20Control.htm#display)**, **[Properties](COM%20Control.htm#properties)** and **[Logic](COM%20Control.htm#logic)**. The control properties that display depend on the type of external control being created.

_Object Name_ |  Enter a unique name for the external control. NOMADS provides a default; e.g. EXT_1. Naming conventions for variables apply. When a new control name is entered, it will be checked against the [**Reserved Words**](../../../Reserved%20Words.md) list to determine if it is restricted for use as a NOMADS control name. If it is found, a warning message will display. _(User Reserved Words Maintenance was added in PxPlus 2020.)_  
---|---  
_Ext. Control_ |  Click the Query button to select the type of external control to create: |  _Chromium Browser_ |  Used for adding a **[Chromium Browser](../../../utilities/browser.md)** control to the current NOMADS panel.  
---|---  
_ActiveX Controls_ |  Launches a separate **ActiveX Controls** dialogue with a list of ActiveX controls registered on the system. Highlighting an ActiveX control also displays the _Programmatic ID_ for that control. If you already know the Programmatic ID of a control, you can enter it in the _Ext. Control_ field instead of selecting from the list (some controls may not be listed). For a description of _ActiveX_ controls, see **[Concepts and Terminology](../../../PxPlus%20User%20Guide/External%20Components/Introduction.htm#terminology)**.  
_PVX Plus Controls_ |  Launches a separate **PVX Plus Controls** dialogue. Select from the list of available PVX Plus external controls: Ace Editor Control, **[Google Maps Control](../../../Extended%20NOMADS%20Objects/Google%20Maps%20Interface/Google%20Maps%20Interface%20Overview.md)**, **[Signature Capture Control](../../../Extended%20NOMADS%20Objects/eSignature%20Capture/esignature%20capture.md)** and **[TinyMCE Editor Control](../../../Extended%20NOMADS%20Objects/TinyMCE%20HTML%20Editor/TinyMCE%20HTML%20Editor%20Overview.md)**.  
_.NET Controls_ |  Used for adding a **[.NET](../../../Dot%20Net%20Interface.md)** control to the current NOMADS panel. When selected, additional fields display for specifying a .NET _DLL Name_ , _Object Name_ and any optional _Arguments_. The following How To Tutorials provide detailed steps on how to create .NET Button and .NET Calendar controls and add a .NET Calendar query button to a NOMADS Multi-Line control:

> **[How to Create a .NET Button (NOMADS](../../../How%20To/How%20to%20Create%20Dot%20NET%20Button%20\(NOM\).htm))  
> ** **[How to Create a .NET Calendar Control (NOMADS)](../../../How%20To/How%20to%20Create%20Dot%20NET%20Calendar%20\(NOM\).htm)  
> ** **[How to Display a Date in a PxPlus Multi-Line from a NOMADS .NET Calendar](../../../How%20To/How%20to%20Display%20Date%20in%20Mline.md)**  
  
See **[Defining an External Control](COM%20Control.htm#definingCOM)**.

_(The Chromium Browser Object was added in PxPlus 2017.)  
__(Support for .NET controls was added in PxPlus 2025.)_  
  
_Alternate control names to load at runtime if primary not found_ |  **_(Applicable only for ActiveX Controls)_** Assign alternate control names (separated by semi-colons) to be used at runtime if the generic name cannot be found. This field is shown only when creating ActiveX controls; otherwise, it is hidden.  
_DLL Name_ |  **_(Applicable only for .NET Controls)_** Enter the .NET DLL name or click the Browse button to select the .NET DLL file location. This field is shown only when creating .NET controls; otherwise, it is hidden. _(The DLL Name field was added in PxPlus 2025.)_  
_Object Name_ |  **_(Applicable only for .NET Controls)_** Enter the .NET object name. This field is shown only when creating .NET controls; otherwise, it is hidden.

#### **Important Note:**  
The object name is **_case sensitive_** , as .NET objects are case sensitive.  
  
**_Example:_**  
  
"System.Windows.Forms.MonthCalendar"

_(The Object Name field was added in PxPlus 2025.)_  
_Arguments_ |  **_(Applicable only for .NET Controls)_** Enter any optional arguments to be used by the .NET control. This field is shown only when creating .NET controls; otherwise, it is hidden. _(The Arguments field was added in PxPlus 2025.)_  
**Display**  
**Position** |  |  _Column_ |  Starting column for the top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the control - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the control in number of columns - numeric expression. Format mask is #0.00. Valid entries are 0 to 620.  
---|---  
_Height_ |  Height of the control in number of lines - numeric expression. Format mask is #0.00. Valid entries are 0 to 255.  
  
_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Properties**  
**Objects** |  Assign property/method values (_Fixed_ or _Expression_) and set up logic that will execute when an external control event is triggered. See **[Defining an External Control](COM%20Control.htm#definingCOM)**.  
**Logic**  
_Default Program_ |  Displays the name of the **[Default Program](../../Panel%20Designer/Panel%20Header/Overview.htm#display)** used in the Panel Header definition. _(The Default Program was added for display in PxPlus 2019.)_  
**Post Create** |  Logic to be processed after the external control is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
_Groups_ |  Button used to assign the external control to a group. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
_Notes_ |  Add notes/comments for the external control. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. _(The Notes button was added in PxPlus 2023.)_  
  
##  Defining an External Control

After an external control is created on the panel (see **[Adding an External Control](COM%20Control.htm#addingCOM)**), the control's properties need to be defined.

This table lists the steps to define a new external control. (These steps are based on the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer.)

**Step** |  **Description**  
---|---  
**1\. Select an external control** |  In the **External Control Properties** dialogue, click the Query button for the **[Ext. Control](COM%20Control.htm#COMcontrol)** property. Available selections are _Chromium Browser_ , _ActiveX Controls_ , _PVX Plus Controls_ and _.NET Controls_.  
**2\. Define Properties** |  Once the _Ext. Control_ is selected, assign property/method values using the **Properties** tab. The **Item** grid lists all the sub-objects, properties and methods for the external control selected. This grid consists of the following: |  _Item_ |  Contains the property or method name.  
---|---  
_Type_ |  Contains the details on each item; i.e. Num|Str, Num, Str, pNum|Str, pNum, Meth, Obj, pObj, pArray or Array (**_where_** _"p"_ indicates a PxPlus property or object).  
_Current Value_ |  Contains the current value for an item.  
_Value/Expression_ |  If enabled, the _Value/Expression_ column accepts either an _expression_ or a _value_ , depending on the _Exp_ check box selection. PxPlus properties are prefixed with _Pvx_. Both properties and methods are sorted in alphabetical order and will later be set in alphabetical order. If the assigned value for a property is an _expression_ , place a check mark in the _Exp_ column for that property. The default is no check mark, indicating a literal value. Use the _Value/Expression_ column to assign a value to the property. The value is assigned after the external control is created. If the property is Read Only, this cell will be locked. Methods are identified by "Meth" (in the _Type_ column) and by empty brackets appended to their name; e.g. AboutBox( ). If the method accepts a string value as a single parameter, it may be defined in the _Value/Expression_ column. **_Example:_** _Ext. Control:_ ***browser** **Item** **Value/Expression**  
Navigate2( ) www.pvxplus.com Both properties and methods may also be defined in the **Post Create** logic (on the **[Logic](COM%20Control.htm#logic)** tab). If an application needs access to methods that take no parameters, numeric parameters or more than one parameter, then it must be defined either in the **Post Create** logic or within the application itself. **_Example:_** _Ext. Control:_ ***browser**  
  
**Post Create Logic:** Execute EXT_1.CTL'Navigate2("www.pvxplus.com")  
**3\. Define Events** |  The **Events** grid contains all the events available for the external control. This grid consists of the following: |  _Event_ |  Event names are obtained from the **'PVXEVENTS$** property (see **[Extended Properties and Methods](../../../Automation%20in%20PxPlus/PxPlus%20COM%20Interface%20Extensions/Overview.htm#extendedproperties)**) and are loaded into the _Event_ column in alphabetical order.  
---|---  
_Function_ |  Describes how the event (if any) will execute. The following preset values are available in the drop-down list: |  _Ignore_ |  No event occurs.  
---|---  
_Link_ |  Invoke a panel. Syntax: "_object name_ ","[ _library_ ]"[, _arg_1$_ , _arg_2$_ ... _arg_20$_ ]  
_Perform_ |  Perform a program with optional label entry point. (For proper syntax, see **[PERFORM](../../../directives/perform.md)** directive.)  
_Call_ |  Call a sub-program with optional label entry point. (For proper syntax, see **[CALL](../../../directives/call.md)** directive.)  
_Execute_ |  Run a series of PxPlus commands separated by semi-colons.  
_Logic_ |  Contains associated logic that will execute when an event signal is triggered. If the _Function_ is a _Perform_ or _Call_ , you can click the _magnifying glass_ button in the _Logic_ cell to launch the **[Program Editor](../../Program%20Interaction/Events%20Logic/Program%20Editor.md)**. If the program and label _already exist_ for the event, then the Editor will be positioned to that label automatically. If the program label on an event _does not exist_ , then NOMADS will generate a label automatically (_eventname_**+"_"+**_control_) and insert it in the program. The program will be created if it does not exist. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**.  
**4\. Assign Post Create Logic** |  Add/edit **Post Create** logic using the **[Logic](COM%20Control.htm#logic)** tab. Enter the program/entry point to be performed, called or executed after the external control is created. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**.  
  
##  Handling Events

It is strongly recommended that event functions be kept relatively short and simple. One reason for this is that normal code execution will be suspended when an event is handled and will not resume until the event function is finished. It is also possible to introduce code (or use commands, such as **[MSGBOX](../../../directives/msgbox.md)**) to create a re-entrance issue in the event function.

**_How NOMADS Handles the Events_**

External controls generate a unique CTL value for each event defined in NOMADS. NOMADS reserves CTL values between 22001 and 22999. These are loaded into a table at run time after the external control is created using:

> **ON EVENT** "_event_name_ " **FROM**  _EXT_id_ **PREINPUT**  _CTL_value_

#### **Note:**  
_EXT_id_ is stored in _control_name.ctl_. When an event occurs, NOMADS will scan the event CTL table. If a match is found, then the logic for that event is executed.

**_Working with Events that Supply Parameters_**

Most of the time, it is sufficient to trap events through the external control interface. However, NOMADS does not normally receive the parameters that may be passed back (if the events are capable).

To receive event parameters from an external control, a PxPlus class must first be designed. A class function must be written for each event to be handled.

**_Example:_**

If you were writing an event class for the external object Shell.Explorer.2, you could receive parameters from the exposed event BEFORENAVIGATE2 (URL, [Flags], [TargetFrameName], [PostData], [Headers]) by defining a class as follows:

> def class "menuevent"  
>  property TXID$  
>  function BEFORENAVIGATE2(*)BEFORE for event "BeforeNavigate2"  
>  end def  
>    
>  BEFORE:  
>  enter *,U$,*,*,*,*,C  
>  if mid(lcs(U$),1,3)="tx:" \  
>  then C=1;  
>  TXID$=U$(4) \  
>  else TXID$=""  
>  return 1

The function and label name are not required to match the name of the event. It is the string after the **FOR EVENT** portion of the statement that determines the event name that will be handled. The event name is not case sensitive, and argument names are not required to match the external control's event declaration. When the OOP method name matches the external control event name, then SAME can be used to describe the name of the event.

Once the class is complete, an instance of the class must be instantiated to bind the external object to the event handler. In NOMADS, this code should be invoked by the external object **Post Create** logic:

> create_object:  
>  EVNTOBJ=new("menuevent",EXPLORER.CTL,100)  
>  return

Once bound, the PxPlus event class function will be called when the corresponding event occurs.

## See Also

**[.NET Interface](../../../Dot%20Net%20Interface.md)  
[DEF OBJECT Define Windows Object](../../../directives/def_object.md)**  
**[How to Create a .NET Button (NOMADS](../../../How%20To/How%20to%20Create%20Dot%20NET%20Button%20\(NOM\).htm))  
[How to Create a .NET Calendar Control (NOMADS)](../../../How%20To/How%20to%20Create%20Dot%20NET%20Calendar%20\(NOM\).htm)  
[How to Display a Date in a PxPlus Multi-Line from a NOMADS .NET Calendar](../../../How%20To/How%20to%20Display%20Date%20in%20Mline.md)**

TinyMCE is a registered trademark of Tiny Technologies Inc.
