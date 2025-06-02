# List Box Controls

**Variable List Box Control** |  **__**  
---|---  
  
**VARLIST_BOX** _ctl_id_ , **@(**_col,ln,wth,ht_**)** [, _ctrlopt_ ]   
**VARLIST_BOX** { **REMOVE** | **DISABLE** | **ENABLE** } _ctl_id_ _  
_**VARLIST_BOX** { **GOTO** | **HIDE** | **SHOW** | **AUTO** } _ctl_id_ _  
_**VARLIST_BOX SET_FOCUS** _ctl_id_ , _ctl_val_ _  
_**VARLIST_BOX LOAD** _ctl_id_ , _dlm_list_ _$_  
**VARLIST_BOX LOAD** _ctl_id, array_name$_**{ALL}  
VARLIST_BOX LOAD** _ctl_id_ , _index_ , _{element$ |_***** }   
**VARLIST_BOX FIND** _ctl_id, index,var$  
_**VARLIST_BOX READ** _ctl_id, var$_ [, _mode$_ ]   
**VARLIST_BOX READ** _ctl_id, var_ [, _mode$_ ]   
**VARLIST_BOX WRITE** _ctl_id_ , _element$  
_**VARLIST_BOX WRITE** _ctl_id_ , _index  
_**VARLIST_BOX WRITE** _ctl_id_ , _""_

A variable list box is a **_Standard_** list box that allows the user to select any element from the list of items and/or enter any other value. For syntax details, see **[VARLIST_BOX](../../../directives/varlist_box.md)** directive.

For examples on how to process a **_Standard_** list box, see **[List Box](List%20Box.md)**.

For information on adding a variable list box to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[List Box Controls](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)**.

For a list of properties that can be applied to a **_variable list box_** , see **[Varlist_Box Properties](../../../control_object_properties/varlistbox_properties.md)**.

**_Example:_**

> VARLIST_BOX 100,@(12,8,12,6)   
>  VARLIST_BOX LOAD 100,"Cat/Dog/Pig/"

> 
