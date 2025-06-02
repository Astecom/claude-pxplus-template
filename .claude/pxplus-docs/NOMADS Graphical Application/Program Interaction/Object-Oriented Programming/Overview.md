# Program Interaction

**Object-Oriented Programming** |  **__**  
---|---  
  
The PxPlus OOP interface for NOMADS allows for the definition of standard methods and properties within objects and enables them to be used by NOMADS. This allows developers to create objects with consistent method names and to have the system automatically link to these methods without having to define the method on every field on the panels.

See **[NOMADS Object](Overview.htm#nomads_obj)** and **[Folder Object](Overview.htm#folder_obj)** below.

##  NOMADS Object

To interface NOMADS with objects, the NOMADS class ***nomads.pvc** must be inherited when a new class is defined using the **[LIKE](../../../directives/like.md)** directive:

**_Example:_**

> 0010 DEF CLASS "demo"   
>  0020 LIKE "*nomads"   
>  ...

This defines the **PROCESS(** **)** method which is used to invoke the NOMADS panel. The panel name and library must be declared as either properties or local properties within your object and return the name of the panel and library respectively.

**_Example:_**

> 0030 PROPERTY SCREEN_LIB$="abc.en"   
>  0040 PROPERTY SCREEN_ID$="test"   
>  ...

#### **Note:**  
The Library name may be a specific or generic reference. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.

In addition to **PROCESS(** **)** , the NOMADS class includes methods for control events, panel events, panels, classes and folders.

**_Control, Panel and Folder Event Methods_**

Suppose that a control named **WRITE_BUTTON** exists on a panel. If a method called **WRITE_BUTTON( )** is included in a class written to process the panel, it will be invoked by NOMADS automatically in response to a _button press_ event for this button.

Similarly, if a multi-line called **CLIENT_ID** exists on a panel, its methods could include **ChangeCLIENT_ID(** **)** , **OnFocusCLIENT_ID( )** and **ValidateCLIENT_ID$(**_new_val$,id$_**)**.

#### **Note:**  
The **ValidateControlName$( )** method takes two parameters and returns a string.

Panel event methods include **PreLoad(** **)** , **PostLoad( )** and **OnExit( )**. It is not necessary to specify the panel name for these methods.

**_Default and Class Methods_**

Methods are invoked if they exist and no logic is specified for the panel or field. Logic on the panel or field overrides the methods invocation. If the method is not defined, then no action is taken.

**Default.** methods (if present) are invoked when there is no method specified for a control or panel; the default is overridden by a control-specific method or logic.

Default control methods include **DefaultInitialize(** **)** , **DefaultPush( )** , **DefaultChange( )** , **DefaultOnFocus( )** , **DefaultValidate$(**_new_val_ _$_**)** , and **DefaultFormatter$(**_new_val_ _$_**)**.

**Class...** methods (if present) are applied to controls based on data classes. Like default methods, they are invoked only when no control-specific method is present. For example, if we have a multi-line named DATE defined on a panel and it is based on the DATEFIELD data class, then we can invoke the method **ClassInitialize** DATEFIELD(_id_).

Other available methods include **ClassValidate** _class_ _(__id,new_val$,id$_), **ClassOnFocus** _class_(_id_), **ClassPush** _class_(_id_) where _class_ represents the class name.

**_Using the Methods_**

The NOMADS object (***nomads.pvc**) includes methods for control events, panel events, classes and folders. The available methods are listed below.

**Methods** |  **Description**  
---|---  
**BckLoad** _ctrl_(_evn_(_id$+''''.load''''_)) |  Background load logic for control _ctrl_. Invoked when there is no user input.   
  
Return value is the load status, where load status can be **0** (load in process), **1** (load completed) or **-1** (force a reload). Control type can be a List Box or Grid.

#### **Note:  
** To force a reload of a list box or grid, you must define the **controlname.load** variable as a local variable (see **_Example_**).  
  
See **[Background Loading](../Event-Handler%20Routines/Background%20Loading.md)**.

**_Example:_** Sample program to load list box LB1 using the Background Load method:  DEF CLASS "BCKLOAD"   
LIKE "*nomads"   
PROPERTY SCREEN_LIB$="TEST.EN"   
PROPERTY SCREEN_ID$="BCKLOAD"   
LOCAL C,Z,X2,Y2   
LOCAL LB1.LOAD   
FUNCTION Preload()Predisplay_Logic ! panel header pre-display logic   
FUNCTION BckloadLb1(loadstatus)Load_ListBox ! background loading logic for list box 'LB1'   
FUNCTION Reload_Btn()Reload_Lbx ! on change logic for button 'Reload_Btn' (force background loading to occur for 'LB1')   
END DEF  
!   
Predisplay_Logic:   
LET c=0,z=0,X2=0,Y2=0  
LET LB1.LOAD=0   
RETURN   
! Load_ListBox:   
ENTER loadstatus   
LET Y2=Y2+100,z=Y2,c=X2  
IF Y2>80000 THEN LET loadstatus=1; RETURN loadstatus   
SETTRACE PRINT "Loading another 100 items starting at "+STR(c)+" for list box 'LB1'"   
FOR I=c TO z   
LIST_BOX LOAD LB1.CTL,0,STR(I)   
NEXT   
LET X2=z+1   
RETURN loadstatus   
!   
Reload_Lbx:   
LET c=0,z=0,X2=0,Y2=0   
LET LB1.LOAD=-1 ! force a reload   
LIST_BOX LOAD LB1.CTL,""   
RETURN  
**Change** _ctrl_( ) |  Invoked whenever the control _ctrl_ changes its value. Return value is ignored.  
**ClassBckLoad** _class_ _$_(_id,evn_(_id$+''''.load''''_)) |  Background load logic for controls in class _class_. Invoked when there is no user input.  
  
Return value is the load status, where load status can be **0** (load in process), **1** (load completed) or **-1** (force a reload). Control type can be a List Box or Grid.  
  
See **[Background Loading](../Event-Handler%20Routines/Background%20Loading.md)**.  
**ClassChange** _class_(_id_) |  Invoked whenever the control _id_ changes its value and there is no specific change logic associated with the control. Return value is ignored.

#### **Note:  
**_class_ refers to the class name.  
  
**ClassDrag** _class1_**ClassDrop** _class2$_(__dragfrom$,_dropon$_) |  Invoked when controls in _class1_ are dropped on controls in _class2_.  
**ClassFormatter** _class_ _$_(_id,new_val$,id$_) |  Invoked to format the new contents of _id_. It should return an error message if the value is invalid. Returning a null string indicates that the value is acceptable.

#### **Note:  
**_class_ refers to the class name.  
  
**ClassInitialize** _class_(_id_) |  Invoked to initialize the control _id_ and there is no specific control initialization. Return value is ignored.

#### **Note:  
**_class_ refers to the class name.  
  
**ClassOnFocus** _class_(_id_) |  Invoked whenever the control _id_ receives focus and there is no specific on focus logic associated with the control. Return value is ignored.

#### **Note:  
**_class_ refers to the class name.  
  
**ClassOnItemNeeded** _class_(_id_) |  Load On Demand logic for all controls in class _class_.Invoked when user scrolls the control to request items.  
  
Supported on the following List Box types (Standard, Formatted, List View). Return value is ignored.  
**ClassPush** _class_(_id_) |  Invoked when a button is pressed and there is no specific logic associated with the button. Return value is ignored.

#### **Note:  
**_class_ refers to the class name.  
  
**ClassValidate** _class_ _$_(_id,new_val$,id$_) |  Invoked to validate the new contents of _id_. It should return an error message if the value is incorrect. Returning a null string indicates that the value is acceptable.  
  
If the message is blank (**NUL(**  _msg_ **)** returns true), it is assumed you have displayed the error message in your validator routine, and the field will be rejected upon return to ***winproc**. Control-specific methods override class methods. 

#### **Note:  
**_class_ refers to the class name.  
  
**DefaultBckLoad**(_evn_(_id$+''''.load''''_) |  Default method invoked for background loading of a List Box or Grid and no field specific logic exists. See **[Background Loading](../Event-Handler%20Routines/Background%20Loading.md)**.  
**DefaultChange**( ) |  Default method invoked when a field changes and no field specific logic exists. Return value is ignored.  
**DefaultFolderOnExit**( ) |  Default folder On-Exit logic. Invoked when the user/application requests the current tab to be terminated or closed. If the method returns 0, then the tab will not be terminated.  
**DefaultFolderPostLoad**( ) |  Default folder Post-Load logic. Invoked after the tab contents are displayed but before the first input. Return value is ignored.  
**DefaultFolderPreload**( ) |  Default folder Pre-Load logic. Invoked before the tab contents are displayed. Return value is ignored.  
**DefaultFormatter$**(_new_val_ _$_) |  Default method invoked to format a field and no field specific logic exists.  
**DefaultInitialize**( ) |  Default panel field initialization logic. Return value is ignored.  
**DefaultOnFocus**( ) |  Default method invoked when a field receives focus and no field specific logic exists. Return value is ignored.  
**DefaultOnItemNeeded**( ) |  Default method invoked for standard, formatted or list view list boxes using Load-On-Demand and no field specific logic exists.  
**DefaultPush**( ) |  Default method invoked when a button is pressed and there is no specific logic associated with the button. Return value is ignored.  
**DefaultValidate$**(_new_val_ _$_) |  Default method invoked to validate a field and no field specific logic exists.  
**Drag** _ctrl1_**Drop** _ctrl2_( ) |  Invoked when control _ctrl1_ is dropped on control _ctrl2._  
**Formatter** _ctrl_ _$_(_new_val$,id$_) |  Invoked to format the new contents of _ctrl_. It should return an error message if the value is invalid. Returning a null string indicates that the value is acceptable.  
**GetName$**(_id_) |  Get control name for control _id_.  
**GetVariable$**(_id_) |  Get variable name for control _id_. Will return string or numeric variable name.  
**Initialize** _ctrl_( ) |  Invoked to initialize the control _ctrl_. Return value is ignored.  
**Jumpto**(_panel$,library_ _$_) |  Jump to a specific panel and library:  
  
_panel$_ \- Name of panel   
_library$_ \- Path to library name _(Optional)_  
**OnExit**( ) |  Invoked when the user/application requests main panel termination. Return value must be 1 in order to allow the panel to terminate. If the method returns 0, then the panel will not be closed.  
**OnExit** _ffffff_( ) |  Invoked when the user/application requests sub-panel _fffffff_ to be terminated or closed. Return value must be 1 in order to allow the sub-panel to terminate. If the method returns 0, then the sub-panel will not be closed.  
**OnFocus** _ctrl_( ) |  Invoked when control _ctrl_ receives focus. Return value is ignored.  
**OnItemNeeded** _ctrl_( ) |  Load On Demand logic for control _ctrl_. Invoked when user scrolls the control to request items.  
  
Supported on the following List Box types (Standard, Formatted, List View). Return value is ignored.  
**PostLoad**( ) |  Invoked after the main panel is displayed but before the first input. Return value is ignored.  
**PostLoad** _ffffff_( ) |  Invoked after the sub-panel _fffffff_ is displayed but before the first input.  
**PostResize_**_ffffff_( ) |  Invoked after the panel _fffffff_ has been resized.  
**PreLoad**( ) |  Invoked before the main panel is displayed. Return value is ignored.  
**PreLoad** _ffffff_( ) |  Invoked before the sub-panel _fffffff_ is displayed.  
**RefreshScrn**( ) |  Invoke screen refresh logic.  
**Validate** _ctrl_ $(_new_val$,id$_) |  Invoked to validate the new contents of _ctrl_. It should return an error message if the value is invalid. Returning a null string indicates that the value is acceptable.  
  
If the message is blank (**NUL(**_msg_**)** returns true), it is assumed you have displayed the error message in your validator routine and the field will be rejected upon return to ***winproc**.  
_Ctrl_( ) |  Invoked whenever the button _Ctrl_ is pressed.  
  
**_Example:  
  
_** If a button on the panel has the name _Add_ , pressing it causes the method **Add( )** to be invoked. Return value is ignored.  
**'_Parent** |  Provides the object handle to the prior OOP-based Nomads panel.  
  
**_Variables_**

See **[NOMADS Reserved Variables](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)** for a list of variables inherited from the NOMADS class.

**_Drag and Drop Methods_**

In OOP methodology, it is generally desirable to _encapsulate_ the logic pertaining to the functionality of an object into itself. To this end, NOMADS objects may include the **Drag** _Ctrl1_**Drop** _Ctrl2_( ) and/or **ClassDrag** _Class1_**ClassDrop** _Class2$_( ) method to process drag and drop events. In addition to coding the methods to process the drag and drop events, the application must include a **POSTLOAD(** **)** function to interface with the program **_*winproc.drg;build_method_**.

**_Setting Up DragCtrl1DropCtrl2( ) Method_**

In the **POST_LOAD( )** method of the class, the variable **_CLASS_DRAG** must be initialized equal to 0, **_DRAGFROM_NME$** and **_DROPON_NME$** receive the names for the controls which are dragged from and dropped on respectively. Lastly, the program **_*winproc.drg;build_method_** must be performed.

#### **Note:**  
If a panel requires more than one drag and drop event, all steps must be repeated for each of the drag and drop events.

**_Setting Up ClassDragClass1ClassDropClass2$( ) Method_**

To set up drag and drop methods for a data class, set the **_CLASS_DRAG** variable equal to 1 and load the variables **_DRAGFROM_CLASS$** and **_DROPON_CLASS$** with the name of the class to drag from and drop on. **_DRAGFROM_NME$** receives the name of the control being dragged from while **_DROPON_NME$** contains the name of the dropped on control. **PERFORM"*winproc.drg;build_method"**.

##  Folder Object

The **[Folder Object](../../Appendix/OOP%20Interface/Folder%20Objects.md)** (***obj/folder.pvc**) can be used to draw and manage folders in both NOMADS and non-NOMADS environments. This allows developers to design and implement different looking folders to satisfy their own application requirements.

General folder information is defined via the Folder object. A **[Tab Object](../../Appendix/OOP%20Interface/Tab.md)** (***obj/tab.pvc**) is created for each tab within a Folder.

In NOMADS, the Folder object is instantiated by ***winproc**. The object identifier for the Folder is stored in the variable **Fldr**. The object identifier for the current tab is stored in the property **Fldr'CurrentTab.**

#### **Note:**  
Many of the **_F_** and **_Fldr_** tables and variables that were previously used in ***winproc** are now obsolete.

**_Using the Methods_**

The following methods can be used at run time after the Folder is drawn (see **[Folder Methods](../../Appendix/OOP%20Interface/Folder%20Objects.htm#fldr_methods)** for a complete list):

**AddTab**(_Text$_ ,_PanelName$_ ,_Suppress_ ,_FillClr1$_ ,_FillClr2$_ ,_FillPattern_) |  Used to add a tab to the end of the tab list. The _Suppress_ , _FillClr1$_ , _FillClr2$_ and _FillPattern_ parameters are **_optional_**. **_Example:_** Fldr'AddTab("NewTab","Newpnl",0,"rgb:255 174 174","Light Cyan",2)  
Fldr'AddTab("Another Tab","AnotherPnl")  
---|---  
**DisableActiveTab**( ) |  Used to disable all the controls on the current active tab and the folder tab button. See **[Note](Overview.htm#note1)**.  
**DisableFldr**( ) |  Used to disable all the controls on the active tab and all the folder tab buttons. See **[Note](Overview.htm#note1)**.  
**DropTab**(_Idx_) |  Used to drop a tab at run time. The remaining tabs are re-sequenced and the folder control is redrawn. **_Example:_** DropTab(2)  
**EnableActiveTab**( ) |  Used to enable all the controls on the current active tab and the folder tab button. See **[Note](Overview.htm#note1)**.  
**EnableFldr**( ) |  Used to enable all the controls on the active tab and all the folder tab buttons. See **[Note](Overview.htm#note1)**.  
**GotoTab**(_Idx_) |  Used to activate a specific tab. **_Example:_** GotoTab(3)  
**InsertTab**(_Idx,Text$,PanelName$,Suppress,FillClr1$,FillClr2$,FillPattern_) |  Used to insert a tab at run time. All tabs following the inserted tab are re-sequenced. _Suppress_ , _FillClr1$_ , _FillClr2$,_ and _FillPattern_ parameters are **_optional_**. **_Example:_** Fldr'InsertTab(3,"NewTab","Newpnl",0,"rgb:255 174 174","Light Cyan",2)  
**Redraw**( ) |  Used to change folder and tab information; i.e. change text, fill pattern and fill colours for the current tab. **_Example:_** 0010 Fldr'CurrentTab'SetText("New Tab Text")  
0020 Fldr'CurrentTab'SetFillPattern(3)  
0030 Fldr'CurrentTab'SetTabColour("Light Magenta")  
0040 Fldr'CurrentTab'SetAltColour("Light Green")  
0050 Fldr'SetFont("Comic Sans MS,1,&C")  
0060 Fldr'Redraw()  
  
#### **Note****:**  
When using the **DisableActiveTab( )** , **EnableActiveTab( )** , **DisableFldr** **( )** and **EnableFldr( )** methods:  
  
Only the controls on the current active tab will be affected since the controls on the other tabs are not drawn until that tab is active.  
  
These methods can also be used for tabless folders. Only the controls in the folder region will be enabled or disabled as there are no tab buttons on a tabless folder.

**_Using the Object Outside NOMADS_**

The Folder object can also be used outside of NOMADS. To do so, the NOMADS property must be set to 0. The application will be responsible for handling the Folder events.

**_Example:_**

> 1000 ! 1000   
>  1010 PRINT 'DIALOGUE'(10,5,80,35,"Draw Folder Object",'B?'),'SR','CS',   
>  1020 LET Fldr=New("*obj/folder")   
>  1030 LET Fldr'Nomads=0   
>  1040 Fldr'SetColours("RGB:215 0 230;Light yellow") ! this is the colour for the tabs (text and background)   
>  1050 Fldr'SetTabAlignment("T") ! top, bottom, left, right (T,B,L,R)  
>  1060 Fldr'SetFont("Verdana,1,&CS") ! S - fill textbackground (not whole region) with chosen colour   
>  1070 Fldr'SetLine(5)  
>  1080 Fldr'SetColumn(4)   
>  1090 Fldr'SetColumns(60)   
>  1100 Fldr'SetLines(18)   
>  1110 Fldr'SetFillColours1("Light yellow/Light Green/")   
>  1120 Fldr'SetFillColours2("2,Light red/2,RGB:255 128 0/")   
>  1130 LET T$="Panel1=Tab 1"+$01$+""+$00$+"Panel2=Tab 2"+$01$+""+$00$   
>  1140 Fldr'SetTabInfo(T$)   
>  1150 Fldr'SetOrigTabCount(2)   
>  1160 Fldr'SetOrigTabWidth(15)   
>  1170 Fldr'draw()   
>  1180 OBTAIN (0,SIZ=1)'ME',*,'MN',; IF CTL<>0 THEN END ELSE GOTO *SAME   
>  1190 Drop Object Fldr   
>  1200 End
