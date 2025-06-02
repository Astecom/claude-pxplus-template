# Control Objects

**Button Control** |  **__**  
---|---  
  
**BUTTON** [ ***** ] _ctl_id_ , **@(**_col,ln,wth,ht_**)** = _contents$_ [, _ctrlopt_ ]   
**BUTTON** { **REMOVE** | **DISABLE** | **ENABLE** | **ON** | **OFF** } [*] _ctl_id_ _  
_**BUTTON** { **HIDE** | **SHOW** | **GOTO** } [ ***** ] _ctl_id_  
**BUTTON SET_FOCUS** [ ***** ] _ctl_id_ _, ctl_val_  
**BUTTON READ** [ ***** ] _ctl_id_ _, mode$_

When a user clicks a button in a graphical application, it is usually defined to send a signal (_ctl_id_) to the application to perform a specific action. See **[CTL Values](../Introduction.htm#ctlvalues)**.

Several options are available for creating a button control in PxPlus. For syntax details, see **[BUTTON](../../../directives/button.md)** directive.

#### **Note:**  
Other similar "button" behaviour may be defined using **[Radio Button](Radio%20Buttons.md)** or **[Check Box and Tri-State](Check%20Box.md)** controls.

For information on adding a button to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Button Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Button%20Control/Overview.md)**.

The **[BUTTON](../../../directives/button.md)** directive can also be used to place a **[Taskbar Notification Icon](../Taskbar%20Notification%20Icon/Overview.md)** in the bottom right corner of the MS Windows desktop (a.k.a. the _System Tray)_. See **[Handling Images and Icons](../../Appendix%20of%20Miscellaneous%20Topics/Handling%20Images%20and%20Icons/Overview.md)**.

For a list of properties that can be applied to a **_button_** , see **[Button Properties](../../../control_object_properties/button_properties.md)**.

**_Example:_**

> B1=1001;  
>  BUTTON B1,@(5,18,10,2)="{!book_open}Library"  
>  B2=1002;  
>  BUTTON B2,@(20,18,10,2)="Library"  
>  B2'TEXTCOLOUR$="Green"   
>  B3=1003;   
>  BUTTON B3,@(35,18,10,2)="Library",OPT="VUTf";   
>  B3'HOVERCOLOUR$="Red"   
>  INPUT "Press any key to end ",*,'CS',

This example creates three buttons with control IDs of 1001 to 1003, 10 columns wide and 2 lines high.

> The first button contains a bitmap of an open book and the text "Library". The PxPlus installation includes a group of internal bitmaps available for use in control objects identified by a leading**!**_exclamation_ _point_ in the syntax. Braces indicate that the bitmap is to be placed on the button. See **[Displaying Bitmaps/Icons](../../../appendix/displaying_bitmaps~icons.md)**.

The second button is specified with text colour set to "Green" using a dynamic property. For the third button, the "VUTf" options are applied to make it transparent and flat with no border. It also has underlined text that changes colour to "Red" when the mouse hovers over it.
