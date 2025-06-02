# Control Objects

**Radio Button Control** |  **__**  
---|---  
  
**RADIO_BUTTON** [ ***** ] _ctl_id:sub_id_ , **@(**_col,ln,wth,ht_**)** = _contents$_ [, _ctrlopt_ ]   
**RADIO_BUTTON** { **REMOVE** | **DISABLE** | **ENABLE** | **ON** | **OFF** } [ ***** ] _ctl_id:sub_id_ _  
_**RADIO_BUTTON** { **GOTO** | **HIDE** | **SHOW** } [ ***** ] _ctl_id:sub_id_  
**RADIO_BUTTON READ** [ ***** ] _ctl_id_ _, var, mode$_

These control types are laid out in a group of one or more related buttons, each representing one possible value for the variable the group represents. Only one button can be active at a time; i.e. when a user selects one of the radio buttons, that selection is activated **_On_ _,_** and all other related radio buttons are automatically set to **_Off_**. For syntax details, see **[RADIO_BUTTON](../../../directives/radio_button.md)** directive.

For information on adding a radio button to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Radio Button Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.md)**.

For a list of properties that can be applied to a **_radio button_** , see **[Radio_Button Properties](../../../control_object_properties/radiobutton_properties.md)**.

**_Example:_**

> PRINT 'PEN'(1,2,8),'FILL'(0,8),   
>  PRINT 'RECTANGLE'(@X(6.5),@Y(20.5),@X(30),@Y(28),10),   
>  RADIO_BUTTON 100:1,@(8,21,10,2)="&Daily"   
>  RADIO_BUTTON 100:2,@(8,23,10,2)="&Weekly"   
>  RADIO_BUTTON 100:3,@(8,25,10,2)="&Monthly"   
>  RADIO_BUTTON ON 100:1   
>  !   
> rbctl=200,images$="{!File|!File_open}RadioButton"   
> rb=3   
>  FOR rb   
>  RADIO_BUTTON rbctl:rb,@(30+(rb-1)*15,20,15,1.5)=images$+STR(rb)   
>  NEXT rb   
> rbctl'value=2   
>  INPUT @(0,31),"Press any key to end ",*,

This example creates two sets of radio buttons.

> The standard set of radio buttons (left side examples) appears as a series of circular/radio knob buttons, of which only one button is active at a time. When images are defined within the button content (right side examples), they appear as regular buttons, with the exception that when one is selected, it remains depressed, and the other related buttons are automatically deselected.

When referencing a specific radio button, the individual index must be used to identify it:

> RADIO_BUTTON 100:1,@(8,21,10,2)="&Daily"

When referencing specific radio buttons using **[Dynamic Control Properties](../Introduction.htm#dynamic)**, you must set the **['Id](../../../properties/id.md)** property first to identify it:

> rbctl'id=2,rbctl'text$="{!File}Newtext"
