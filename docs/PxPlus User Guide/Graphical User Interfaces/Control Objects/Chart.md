# Control Objects

**Chart Control** |  **__**  
---|---  
  
**CHART** _ctl_id_ , **@(**_col,ln,wth,ht_**)** ,[, _ctrlopt_ ]   
**CHART** { **REMOVE** | **DISABLE** | **ENABLE** } _ctl_id_ _  
_**CHART** { **HIDE** | **SHOW** } _ctl_id_  
**CHART LOAD** _ctl_id, strvar$  
_**CHART CLEAR** _ctl_id  
_**CHART DELETE** _ctl_id_  
**CHART FIND** _ctl_id, dataset_ , _point,_ { _numvar_ | _label$_ }   
**CHART READ** _ctl_id, dataset,eom$_  
**CHART WRITE** _ctl_id, dataset,point,_ { _numvar_ | _label$_ } 

The charting control feature in PxPlus can be used to create a variety of chart illustrations with 2D or 3D effects. This object type is generally for display purposes only and responds to few events. Available chart types include _Area, Bar, Column, Line, Pie, Ribbon, Scatter_ and _Stack_. For syntax details, see **[CHART](../../../directives/chart.md)** directive.

For information on adding a chart to a panel using the **[NOMADS Panel Designer](../../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**, see **[Chart Control](../../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)**.

For a list of properties that can be applied to a **_chart_** , see **[Chart Properties](../../../control_object_properties/chart_properties.md)**.

**_Example:_**

> ! Chart example   
>  BEGIN   
>  PRINT 'CS',   
>  FOR I=1 TO 2   
>  GOSUB Draw_Chart   
>  NEXT   
>  INPUT @(5,22),"Press any key to end",*,'CS',   
>  END   
> Draw_Chart:   
>  IF i=1 \   
>  THEN c=10,x=5,format$="3DCOLUMN" \   
>  ELSE c=20,x=42,format$="2DCOLUMN"   
>  CHART c,@(x,3,32,18),FMT=format$,SEP=","   
> c'indexmode=1   
> c'AutoScale=1,c'font$="Arial,-10,I"   
> c'BackColour$="Light Gray"   
> c'LegendLocation$="Right"   
>  c'Title1$="Quarterly Sales",c'Title2$="for Tom, Dick and Harry"   
> c'xAxisTitle$="Quarter",c'yAxisTitle$="Sales (in $1000)"   
>  CHART LOAD c,"Tom=500,450,250/Dick=400,250,350/Harry=100,200,300/"   
>  RETURN 

This example creates two- and three-dimensional charts, using properties to add legends, change font and colours, as well as other display attributes.

> 
