# Control Objects

**Drop Box Control** |  **__**  
---|---  
  
**DROP_BOX** _ctl_id_ , **@(**_col,ln,wth,ht_**)** [, _ctrlopt_ ]   
**DROP_BOX** { **REMOVE** | **DISABLE** | **ENABLE** | **ON** | **OFF** } _ctl_id_ _  
_**DROP_BOX** { **GOTO** | **HIDE** | **SHOW** | **AUTO** } _ctl_id_ _  
_**DROP_BOX SET_FOCUS** _ctl_id_ , _ctl_val_  
**DROP_BOX LOAD** _ctl_id_ , _dlm_list_ _$  
_**DROP_BOX LOAD** _ctl_id, array_name$_**{ALL}  
DROP_BOX LOAD** _ctl_id_ , _index_ , _{element$ |_***** }   
**DROP_BOX FIND** _ctl_id, index,var$  
_**DROP_BOX READ** _ctl_id, var$_ [, _mode$_]   
**DROP_BOX READ** _ctl_id, var_ [, _mode$_]   
**DROP_BOX WRITE** _ctl_id_ , _element$  
_**DROP_BOX WRITE** _ctl_id_ , _index_  
**DROP_BOX WRITE** _ctl_id_ , "" 

A drop box control is similar to a **[Standard List Box](List%20Box.htm#standard)**, but the default state only displays a single line of text. The remaining list is made available by clicking the drop down arrow button. The user can select any element from a list of items you assign to the drop box, but variable input is not allowed. For syntax details, see **[DROP_BOX](../../../directives/drop_box.md)** directive.

For information on adding a drop box to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Drop Box Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)**.

For a list of properties that can be applied to a **_drop box_** , see **[Drop_Box Properties](../../../control_object_properties/dropbox_properties.md)**.

**_Example:_**

> DROP_BOX 1001,@(10,8,12,6)   
>  DROP_BOX LOAD 1001,"Cat/Dog/Pig/"   
>  DROP_BOX WRITE 1001,"Dog"

> For examples of how to process a **_Standard_** list box, see **[List Box Controls](List%20Box.md)**.
