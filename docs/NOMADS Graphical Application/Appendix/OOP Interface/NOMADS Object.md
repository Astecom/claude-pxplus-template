# OOP Interface   
  
**NOMADS Object** |  **__**  
---|---  
  
The NOMADS object (***nomads.pvc**) includes methods for control events, panel events, classes and folders. The available methods are listed below.

**Methods** |  **Description**  
---|---  
**BckLoad** _ctrl_(_evn_(_id$+''''.load''''_)) |  Background load logic for control _ctrl_. Invoked when there is no user input. Return value is the load status. **_Where:_** Load status can be: **0** \- Load in process  
**1** \- Load completed  
**-1** \- Force a reload Control type can be a list box or grid.

#### **Note:  
** To force a reload of a list box or grid, you must define the **controlname.load** variable as a local variable (see **_Example_**). See **[Background Loading](../../Program%20Interaction/Event-Handler%20Routines/Background%20Loading.md)**.

**_Example:_** Sample program to load list box LB1 using the Background Load method:  def class "BCKLOAD"  
like "*nomads"  
property SCREEN_LIB$="TEST.EN"  
property SCREEN_ID$="BCKLOAD"  
local C,Z,X2,Y2  
local LB1.LOAD  
function Preload()Predisplay_Logic ! panel header pre-display logic  
function BckloadLb1(loadstatus)Load_ListBox ! background loading logic for list box 'LB1'  
function Reload_Btn()Reload_Lbx ! on change logic for button 'Reload_Btn' (force background loading to occur for 'LB1')  
end def  
!  
Predisplay_Logic:  
c=0,z=0,X2=0,Y2=0  
LB1.LOAD=0  
return  
! Load_ListBox:  
enter loadstatus  
Y2=Y2+100,z=Y2,c=X2  
if Y2>80000 \  
then loadstatus=1;  
return loadstatus  
settrace print "Loading another 100 items starting at "+str(c)+" for list box 'LB1'"  
for I=c to z  
list_box load LB1.CTL,0,str(I)  
next  
X2=z+1  
return loadstatus  
!  
Reload_Lbx:  
c=0,z=0,X2=0,Y2=0  
LB1.LOAD=-1 ! force a reload  
list_box load LB1.CTL,""  
return  
**Change** _ctrl_( ) |  Invoked whenever the control _ctrl_ changes its value. Return value is ignored.  
**ClassBckLoad** _class_ _$_(_id,evn_(_id$+''''.load''''_)) |  Background load logic for controls in class _class_. Invoked when there is no user input. Return value is the load status. **_Where:_** Load status can be: **0** \- Load in process  
**1** \- Load completed  
**-1** \- Force a reload Control type can be a list box or grid. See **[Background Loading](../../Program%20Interaction/Event-Handler%20Routines/Background%20Loading.md)**.  
**ClassChange** _class_(_id_) |  Invoked whenever the control _id_ changes its value and there is no specific change logic associated with the control. Return value is ignored. 

#### **Note:  
**_class_ refers to the class name.  
  
**ClassDrag** _class1_**ClassDrop** _class2$_(__dragfrom$,_dropon$_) |  Invoked when controls in _class1_ are dropped on controls in _class2_. See **[Object-Oriented Programming](../../Program%20Interaction/Object-Oriented%20Programming/Overview.md)**.  
**ClassFormatter** _class_ _$_(_id,new_val$,id$_) |  Invoked to format the new contents of _id_. It should return an error message if the value is invalid. Returning a null string indicates that the value is acceptable. 

#### **Note:  
**_class_ refers to the class name.  
  
**ClassInitialize** _class_(_id_) |  Invoked to initialize the control _id_ and there is no specific control initialization. Return value is ignored. 

#### **Note:  
**_class_ refers to the class name.  
  
**ClassOnFocus** _class_(_id_) |  Invoked whenever the control _id_ receives focus and there is no specific on focus logic associated with the control. Return value is ignored. 

#### **Note:  
**_class_ refers to the class name.  
  
**ClassOnItemNeeded** _class_(_id_) |  Load On Demand logic for all controls in class _class_. Invoked when user scrolls the control to request items. Supported on the following list box types (Standard, Formatted, List View). Return value is ignored.  
**ClassPush** _class_(_id_) |  Invoked when a button is pressed and there is no specific logic associated with the button. Return value is ignored.

#### **Note:  
**_class_ refers to the class name.  
  
**ClassValidate** _class_ _$_(_id,new_val$,id$_) |  Invoked to validate the new contents of _id_. It should return an error message if the value is incorrect. Returning a null string indicates that the value is acceptable. If the message is blank (**NUL(**_msg_**)** returns true), it is assumed you have displayed the error message in your validator routine, and the field will be rejected upon return to ***winproc**. Control-specific methods override class methods. 

#### **Note:  
**_class_ refers to the class name.  
  
**DefaultBckLoad**(_evn_(_id$+''''.load''''_) |  Default method invoked for background loading of a list box or grid and no field specific logic exists. See **[Background Loading](../../Program%20Interaction/Event-Handler%20Routines/Background%20Loading.md)**.  
**DefaultChange**( ) |  Default method invoked when a field changes and no field specific logic exists. Return value is ignored.  
**DefaultFolderOnExit**( ) |  Default folder on-exit logic. Invoked when the user/application requests the current tab to be terminated or closed. If the method returns 0, then the tab will not be terminated.  
**DefaultFolderPostLoad**( ) |  Default folder post-load logic. Invoked after the tab contents are displayed but before the first input. Return value is ignored.  
**DefaultFolderPreload**( ) |  Default folder pre-load logic. Invoked before the tab contents are displayed. Return value is ignored.  
**DefaultFormatter$**(_new_val_ _$_) |  Default method invoked to format a field and no field specific logic exists.  
**DefaultInitialize**( ) |  Default panel field initialization logic. Return value is ignored.  
**DefaultOnFocus**( ) |  Default method invoked when a field receives focus and no field specific logic exists. Return value is ignored.  
**DefaultOnItemNeeded**( ) |  Default method invoked for standard, formatted or list view list boxes using Load-On-Demand and no field specific logic exists.  
**DefaultPush**( ) |  Default method invoked when a button is pressed and there is no specific logic associated with the button. Return value is ignored.  
**DefaultValidate$**(_new_val_ _$_) |  Default method invoked to validate a field and no field specific logic exists.  
**Drag** _ctrl1_**Drop** _ctrl2_( ) |  Invoked when control _ctrl1_ is dropped on control _ctrl2._ See **[Object-Oriented Programming](../../Program%20Interaction/Object-Oriented%20Programming/Overview.md)**.  
**Formatter** _ctrl_ _$_(_new_val$,id$_) |  Invoked to format the new contents of _ctrl_. It should return an error message if the value is invalid. Returning a null string indicates that the value is acceptable.  
**GetName$**(_id_) |  Get control name for control _id_.  
**GetVariable$**(_id_) |  Get variable name for control _id_. Will return string or numeric variable name.  
**Initialize** _ctrl_( ) |  Invoked to initialize the control _ctrl_. Return value is ignored.  
**Jumpto**(_panel$,library_ _$_) |  Jump to a specific panel and library. **_Where:_** _panel$_ Name of the panel  
_library$_ Path to the library name **_(Optional)_**  
**OnExit**( ) |  Invoked when the user/application requests main panel termination. Return value must be 1 in order to allow the panel to terminate. If the method returns 0, then the panel will not be closed.  
**OnExit** _ffffff_( ) |  This method is invoked when the user/application requests sub-panel _fffffff_ to be terminated or closed. Return value must be 1 in order to allow the sub-panel to terminate. If the method returns 0, then the sub-panel will not be closed.  
**OnFocus** _ctrl_( ) |  Invoked when control _ctrl_ receives focus. Return value is ignored.  
**OnItemNeeded** _ctrl_( ) |  Load On Demand logic for control _ctrl_. Invoked when user scrolls the control to request items. Supported on the following list box types (Standard, Formatted, List View). Return value is ignored.  
**PostLoad**( ) |  Invoked after the main panel is displayed but before the first input. Return value is ignored.  
**PostLoad** _ffffff_( ) |  This method is invoked after the sub-panel _fffffff_ is displayed but before the first input.  
**PostResize_**_ffffff_( ) |  This method is invoked after the panel _fffffff_ has been resized.  
**PreLoad**( ) |  Invoked before the main panel is displayed. Return value is ignored.  
**PreLoad** _ffffff_( ) |  This method is invoked before the sub-panel _fffffff_ is displayed.  
**RefreshScrn**( ) |  Invoke screen refresh logic.  
**Validate** _ctrl_ $(_new_val$,id$_) |  Invoked to validate the new contents of _ctrl_. It should return an error message if the value is invalid. Returning a null string indicates that the value is acceptable. If the message is blank (**NUL(**_msg_**)** returns true), it is assumed you have displayed the error message in your validator routine, and the field will be rejected upon return to ***winproc**.  
_Ctrl_( ) |  Invoked whenever the button _Ctrl_ is pressed; e.g. if a button on the panel has the name _Add_ , pressing it causes the method **Add( )** to be invoked. Return value is ignored.  
**'_Parent** |  Provides the object handle to the prior OOP-based NOMADS panel.
