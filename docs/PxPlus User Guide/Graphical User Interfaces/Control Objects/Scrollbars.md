# Control Objects

**Scrollbar Controls** |  **__**  
---|---  
  
**V_SCROLLBAR** _ctl_id_ , **@(**_col,ln,wth,ht_**)** = _contents$_ [, _ctrlopt_ ]   
**V_SCROLLBAR** _ctl_id_**WINDOW [**_,ctrlopt_**]**  
**V_SCROLLBAR** { **REMOVE** | **DISABLE** | **ENABLE** } _ctl_id_ [, **ERR=**_stmtref_ ]   
**V_SCROLLBAR {GOTO** | **HIDE** | **SHOW}**_ctl_id_**[,ERR=**_stmtref_**]**  
**V_SCROLLBAR READ** _ctl_id, setting, max,_**[**_rgn_chg_**][**_,arrow_chg_**][,ERR=**_stmtref_**]  
V_SCROLLBAR WRITE** _ctl_id, marker, max_**[,ERR=**_stmtref_**]**  
**H_SCROLLBAR** _ctl_id_ , **@(**_col,ln,wth,ht_**)** = _contents$_ [, _ctrlopt_ ] **...**

Vertical and horizontal scrollbars are controls that can be used to create a slider, spinner, and progress bar object. For syntax details, see **[H_SCROLLBAR](../../../directives/h_scrollbar.md)** and **[V_SCROLLBAR](../../../directives/v_scrollbar.md)** directives.

For information on adding a horizontal or vertical scrollbar on a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Scrollbar Controls](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Scrollbar%20Controls/Overview.md)**.

For a list of properties that can be applied to **_scrollbars_** , see **[V_Scrollbar Properties](../../../control_object_properties/vscrollbar_properties.md)** and **[H_Scrollbar Properties](../../../control_object_properties/hscrollbar_properties.md)**.

**_Example:_**

> V_SCROLLBAR 100,@(50,2,2,20)   
>  V_SCROLLBAR WRITE 100,5,10   
>   
>  H_SCROLLBAR 10000,@(5,21,40,1)   
>  H_SCROLLBAR WRITE 10000,10,50   
>  H_SCROLLBAR READ 10000,X,50,1,10   
>  PRINT X   
>  10

> 
