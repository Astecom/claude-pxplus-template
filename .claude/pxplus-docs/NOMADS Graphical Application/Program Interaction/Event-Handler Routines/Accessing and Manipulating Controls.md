# Event-Handler Routines 

**Accessing and Manipulating Controls** |  **__**  
---|---  
  
When controls are created, they are assigned a unique CTL identifier. NOMADS places this CTL value into a variable with the same name as the control with a **.ctl** suffix; i.e. _controlname_**.ctl**.

**_Example:_**

To load a list box control named CompanyList, you would use code similar to the following:

> LIST_BOX LOAD CompanyList.ctl,0,item$

NOMADS places the current value of the control into a variable with the same name as the control, but with an optional **.val($)** suffix; i.e. _controlname_ _$_ or _controlname_.**val$** for a string value, or _controlname_ or _controlname._**val** for a numeric. (Use of the **.val($)** suffix is dependent upon a setting in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** and **[System Defaults](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.md)**.) The current value of the control can be retrieved by referencing this variable name, or it can be loaded with a new value. For example, the current value of a multi-line called Name would be found in the NAME$ (or name.val$) variable.

When the value of a control is changed programmatically, the control must be loaded with the new value to keep the control synchronized. This is accomplished by **_refreshing_** the controls. To refresh controls, you can either set a special reserved NOMADS variable called REFRESH_FLG (see **[NOMADS Reserved Variables](../../Appendix/NOMADS%20Variables/Overview.htm#reserved)**) in the event-handler routine prior to exiting or set the _Auto Refresh_ attribute in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** when defining the panel, which automatically refreshes any control value changed by the application.

**_Example:_**

The following routine, associated with the On Change logic of the TransactionCode control, will alter the value of the control:

> Check_Transaction_Code: IF TransactionCode$=""   
>  THEN TransactionCode$=DefaultCode$;  
> Refresh_Flg=1   
>  RETURN

The Refresh_Flg=1 statement in the above code would not be necessary if the _Auto Refresh_ attribute in the Panel Header was set.

If you name your controls using actual data file field names, you can load those fields simply by reading a record.

**_Example:_**

A panel is created for entering client information with multi-lines that have the same names as the data file fields.

> Auto Refresh is set in the panel header and a default program is assigned. Pre-Display and Exit events are also assigned to the panel header to open and close the data file, although the latter is not necessary if Auto Close is set. When the user enters a Client ID, On Change logic is triggered to read the file and load the controls with the data.

> PANEL_PREDISPLAY:   
>  channel=0   
>  OPEN (HFN,IOL=*)"client";   
>  channel=LFO   
>  RETURN   
>  !   
>  PANEL_EXIT:   
>  CLOSE (channel)   
> RETURN   
>  !   
>  PROCESS_CLIENTID:   
>  ! Reading the record loads the controls   
>  READ (channel,KEY=ClientID$,ERR=*NEXT)   
>  RETURN 

NOMADS also creates the following variable for each control:

|  _Controlname_**._tag_ _$_** |  Contains the tag value from the control definition.  
---|---|---  
|  _Controlname_**._nochange_** |  If set to 1, causes NOMADS to ignore changes affecting the control when updating the CHANGE_FLG variable.  
  
The following variables will get loaded when an On Change event occurs:

|  _Controlname_**._row_** _  
Controlname**.column**_ |  **_(Grid Controls Only)_** Contains the current row and column being processed in a grid.  
---|---|---  
|  _Controlname_**._dataset_** |  **_(Chart Controls Only)_** Contains current dataset for a chart.
