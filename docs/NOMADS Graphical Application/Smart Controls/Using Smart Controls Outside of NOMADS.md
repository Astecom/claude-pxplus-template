# Smart Controls   
  
**Using Smart Controls Outside of NOMADS** |  **__**  
---|---  
  
Smart controls are designed to work within the confines of NOMADS. It is possible, however, to invoke the auto-load logic for Smart List Box, Drop Box and Grid controls programmatically. To load the Smart control, make a CALL to the program ***winlist** as follows:

> **CALL** **"*winlist"** , _q_name_ _$_ , _q_library_ _$_ , _smartlist.ctl_ **[** ,_var_ __iol_ _$_ , _var_rec_ _$_**]**

**_Where:_**

|  _q_name_ _$_ |  Name of the query object definition to be used.  
---|---|---  
|  _q_library_ _$_ |  Name of the library in which the query object definition is located. If null, default is the currently open library.  
|  _smartlist.ctl_ |  CTL value of the list box to be loaded.  
|  _var_iol_ _$_ |  **_(Optional)_** Compiled IOList of variables to be passed to the Load logic.  
|  _var_rec_ _$_ |  **_(Optional)_** Values of variables in the IOList derived by **REC(**_var_iol_ _$_ **)**.  
  
#### **Note:**  
If you want to use ***winlist** to auto-load a _Formatted_ List Box using the format from the query object, it is necessary to define the List Box with a format of **L1** so that it can be differentiated from a _Standard_ List Box that has no format. (This is not necessary for _Report View_ format whose format can be left blank.)

A native chart can also be auto-loaded by making a CALL to the program ***[TOOLS/CHARTIMAGE](../../utilities/chart_image.md)**:

> **CALL** "***tools/chartimage** ", **ERR** =_stmtref_ _, query$, library$, chart$, control_ , **[** ,_controlSettings_ _, var_iol$, var_rec$_**]**

|  _query$_ |  Name of the query which owns the chart.  
---|---|---  
|  _library$_ |  Path of the library where the query definition resides.  
|  _chart$_ |  Name given to the AutoChart definition associated with the query. (**_Must_** be a _public_ definition)  
|  _control_ |  CTL value of the chart control to be loaded.  
|  _controlSettings_ |  Values are: 0 - Use chart format/titles from the Query+ AutoChart definition  
1 - Use chart format/titles from the control definition  
|  _var_iol_ _$_ |  **_(Optional)_** Compiled IOList of variables to be passed to the Load logic. _(added in PxPlus 2019 Update 1)_  
|  _var_rec_ _$_ |  **_(Optional)_** Values of variables in the IOList derived by **REC(**_var_iol_ _$_**)**. _(added in PxPlus 2019 Update 1)_  
|  _stmtref_ |  Error transfer.  
  
Plus charts may also be auto-loaded. To do this, instantiate the **[*OBJ/CHART](../../utilities/chart_object.md)** object and load it using the CALL to ***tools/chartimage**. Once loaded, use the **[Draw( )](../../utilities/chart_object.htm#methods)** method to display the chart. When done, drop the chart object:

> oChart=new("*obj/chart")  
>  call "*tools/chartimage","Salesqry","query.en","Sales by Class",oChart,0  
> oChart'Draw(0,5,5,40,15)  
>   
>  drop object oChart

_(The *tools/chartimage program was added in PxPlus 2019.)_
