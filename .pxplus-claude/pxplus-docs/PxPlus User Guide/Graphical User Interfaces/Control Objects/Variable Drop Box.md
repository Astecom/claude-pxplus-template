# Drop Box Control

**Variable Drop Box Control** |  **__**  
---|---  
  
**VARDROP_BOX** _ctl_id_ , **@(**_col,ln,wth,ht_**)** [, _ctrlopt_ ]|   
**VARDROP_BOX** { **REMOVE** | **DISABLE** | **ENABLE** } _ctl_id_ _  
_**VARDROP_BOX** { **GOTO** | **HIDE** | **SHOW** | **AUTO** } _ctl_id_ _  
_**VARDROP_BOX SET_FOCUS** _ctl_id_ , _ctl_val_ _  
_**VARDROP_BOX LOAD** _ctl_id_ , _dlm_list_ _$  
_**VARDROP_BOX LOAD** _ctl_id, array_name$_**{ALL}  
VARDROP_BOX LOAD** _ctl_id_ , _index_ , _{element$ |_***** }   
**VARDROP_BOX FIND** _ctl_id, index,var$  
_**VARDROP_BOX READ** _ctl_id, var$_ [, _mode$_ ]   
**VARDROP_BOX READ** _ctl_id, var_ [, _mode$_ ]   
**VARDROP_BOX WRITE** _ctl_id_ , _element$  
_**VARDROP_BOX WRITE** _ctl_id_ , _index_  
**VARDROP_BOX WRITE** _ctl_id_ , ""

A variable drop box normally displays a single line on the screen with a down arrow on the right side and allows variable input. This means that the user can select any element from a list of items associated with the variable drop box or can enter any other value. To view the list, the user clicks on the down arrow. For syntax details, see **[VARDROP_BOX](../../../directives/vardrop_box.md)** directive.

For information on adding a variable drop box to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Drop Box Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)**.

For a list of properties that can be applied to a **_variable drop box_** , see **[Vardrop_Box Properties](../../../control_object_properties/vardropbox_properties.md)**.

For examples on how to process a **_Standard_** list box, see **[List Box](List%20Box.md)**.

**_Example:_**

> VARDROP_BOX 100,@(10,6,12,6)   
>  VARDROP_BOX LOAD 100,"Cat/Dog/Pig/"

> 
