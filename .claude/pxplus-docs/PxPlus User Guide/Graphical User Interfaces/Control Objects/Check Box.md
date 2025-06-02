# Control Objects

**Check Box and Tri-State Control** |  **__**  
---|---  
  
**CHECK_BOX** [ ***** ] _ctl_id_ , **@(**_col,ln,wth,ht_**)** = _contents$_ [, _ctrlopt_ ]   
**CHECK_BOX** { **REMOVE** | **DISABLE** | **ENABLE** | **ON** | **OFF** }[ ***** ] _ctl_id_ _  
_**CHECK_BOX** { **GOTO** | **HIDE** | **SHOW** } [ ***** ] _ctl_id_  
**CHECK_BOX SET_FOCUS** _ctl_id_**,**_ctl_val  
_**CHECK_BOX READ** [ ***** ] _ctl_id_ _, state$_ [ _,mode$_ ]   
**CHECK_BOX WRITE** [ ***** ] _ctl_id_ , _state$_

The check box is a button type control that allows users to toggle between states: **_On_** to select it, **_Off_** to deselect it. Check boxes may include a text label and graphics. For complete syntax, see **[CHECK_BOX](../../../directives/check_box.md)** directive.

For information on adding a check box to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Check Box and Tri-State Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)**.

The **CHECK_BOX** directive can also be used to create a **[Taskbar Notification Icon](../Taskbar%20Notification%20Icon/Overview.md)**.

For a list of properties that can be applied to a **_check box_** , see **[Check_Box Properties](../../../control_object_properties/checkbox_properties.md)**.

**_Example:_**

> CHECK_BOX 10,@(10,18,20,1.5)="&Toggle for Status"   
>  CB2=20   
>  CHECK_BOX CB2,@(10,20,20,1.5)="Option &B",FNT="Arial,1,I"   
>  CB2'VALUE=1   
>  CB3=30   
>  CHECK_BOX CB3,@(40,18,4,2.5)="{!Unlock|!Lock}"   
>  CB4=40   
>  CHECK_BOX CB4,@(48,18,4,2.5)="{!Unlock|!Lock}",OPT="F",TBL="YN";   
>  CB4'VALUE$="N"   
>  INPUT "Press any key to end ",*,'CS',

This example creates four check box controls.

> The first two are **_standard_** check boxes in the **_Off_** (default) and **_On_** states. Notice the use of the **&**_ampersand._ This makes the T in Toggle a _hot key_ , which, when used in conjunction with the**Alt** key, will transfer focus to this control.

The last two check boxes contain images. When an image is included, the check box takes on the appearance of a button, in this case a regular and a flat button. These check boxes are created with two images, one for each state. The last check box is also created with a translation table "YN". This means that the **_Off/On_** values are**Y** and**N** , rather than 0 and 1.

## Tri-State Box Control

**TRISTATE_BOX** [ ***** ] _ctl_id_ , **@(**_col,ln,wth,ht_**)** = _contents$_ [, _ctrlopt_ ]   
**TRISTATE_BOX** { **REMOVE** | **DISABLE** | **ENABLE** | **ON** | **OFF** } [ ***** ] _ctl_id_ _  
_**TRISTATE_BOX** { **GOTO** | **HIDE** | **SHOW** } [ ***** ] _ctl_id_  
**TRISTATE_BOX READ** [ ***** ] _ctl_id,state_ _$_  
**TRISTATE_BOX WRITE** [ ***** ] _ctl_id,state_ _$_

A tri-state box is a type of **Check Box** that allows a **_third_** state to be activated; e.g. the third state may have the control greyed out to indicate that the option is unavailable. See **[TRISTATE_BOX](../../../directives/tristate_box.md)** directive.

For information on adding a tri-state box to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Check Box and Tri-State Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)**.

The **TRISTATE_BOX** directive can also be used to create a **[Taskbar Notification Icon](../Taskbar%20Notification%20Icon/Overview.md)**.

For a list of properties that can be applied to a **_tri-state_ _box_** , see **[Tristate_Box Properties](../../../control_object_properties/tristate_box_properties.md)**.

**_Example:_**

> CB1=10,CB2=20,CB3=30,CB4=40,CB5=50,CB6=60   
>  TRISTATE_BOX CB1,@(10,18,20,1.5)="&Toggle for Status"   
>  TRISTATE_BOX CB2,@(10,20,20,1.5)="Option &B",FNT="Arial,1,I"   
>  CB2'VALUE=1   
>  TRISTATE_BOX CB3,@(10,22,20,1.5)="Option &C",TIP="Check to select"   
>  CB3'VALUE=2   
> ButtonText$="&Destroy{!Trash|!Trash_open|!Bomb_blast}"   
>  TRISTATE_BOX CB4,@(40,18,10,2)=ButtonText$   
>  TRISTATE_BOX CB5,@(40,20,10,2)=ButtonText$   
>  TRISTATE_BOX CB6,@(40,22,10,2)=ButtonText$   
>  CB4'VALUE=0,CB5'VALUE=1,CB6'VALUE=2   
>  INPUT "Press any key to end ",*,'CS', 

> 
