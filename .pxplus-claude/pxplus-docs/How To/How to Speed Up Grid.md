# How to Tutorials

**How to Speed Up Grid Loading and Processing**|   
---|---  
  
Grid controls are a very useful way of dealing with tabular data. However, loading and interacting with a grid can sometimes be slow, especially when working in a WindX environment.

The information below looks at ways to speed up grid interactions, specifically different ways to load data into a grid, retrieve grid contents, and how to get/set various grid properties.

## Loading a Grid

A grid can be loaded in several ways:

  * Load all the data into the grid in one command.
  * Load the data row by row.
  * Load the data cell by cell.



Each of these methods is explained in more detail below.

**_Loading the Entire Grid_**

Loading the entire grid in one command is by far the fastest way to load a grid. This method will speed up the grid load in both the WindX and non-WindX environments.

To do this, you would build a string by concatenating the data for each row with the proper separators. By default, the column separator is the **SEP** value, but this can be changed by selecting the _Column Separator_ option in the **[Grid Format Definition](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Formatting%20a%20Grid.md)** in NOMADS or by setting the grid's **['SEP$](../properties/sep_.md)** property. The default row separator is $0A$, but this can be changed with the **['SEPLOAD$](../properties/sepload_.md)** property. Then, load the entire grid using column 0 and row 0.

**_Example:_**

> myData$=""  
>  SELECT a$,b$,c$ FROM myfile$  
> myData$+=a$+SEP+b$+SEP+c$+SEP+$0A$  
>  NEXT RECORD  
>  GRID LOAD mygrid.ctl,0,0,myData$

> **_OR_**

> myData$=""  
>  OPEN (HFN,IOL=*)myfile$  
>  channel=LFO  
>  SELECT * from channel  
> myData$+=REC(IOL(channel))+$0A$ ! The REC function includes the column separators  
>  NEXT RECORD  
>  CLOSE(channel)  
>  GRID LOAD mygrid.ctl,0,0,myData$

**_Loading Row by Row_**

The second fastest way to load a grid is to load it row by row. Each row must include column separators for the columns, but a row separator is not needed.

**_Example:_**

> SELECT a$,b$,c$ FROM myfile$  
>  GRID LOAD mygrid.ctl,0,0, a$+SEP+b$+SEP+c$+SEP  
>  NEXT RECORD

This method is slower, as the grid control must be refreshed as each row is added. To speed this up, you can hide the grid while it is being loaded, or you can turn the screen refresh _Off_ by printing the **'-U'** mnemonic before the grid is loaded and then turn it back _On_ by printing the **'+U'** mnemonic when done. See **['+U' & '-U'](../mnemonics/+u.md)** mnemonics. This will speed up the grid load in both the WindX and non-WindX environments.

**_Example:_**

> row=0  
>  OPEN(HFN,IOL=*)myfile$  
>  channel=LFO  
>  PRINT '-U',  
>  SELECT * FROM channel  
>  row++  
>  GRID LOAD mygrid.ctl,0,row,REC(IOL(channel))  
>  NEXT RECORD  
>  PRINT '+U',  
>  CLOSE(channel)

When using the **'-U'** and **'+U'** mnemonics, the grid control will be displayed, as well as any properties that are set prior to printing **'-U'**. If you set column headings and formats prior to turning _Off_ screen refresh, these will be displayed. However, the loading of the grid rows with data will not be shown until screen refresh is turned back _On_ with **'+U'**.

If the grid has been formatted with column names, you can also load the grid row by row by using grid row properties **['LOADIOLIST$](../properties/loadiolist_.md)** and **['ROWDATA$](../properties/rowdata_.md)**. See **[Load/Access by Row Grid Properties](../control_object_properties/grid_by_row.md)**.

**_Example:_**

> rowIOList$=myGrid.ctl'LoadIOList$ ! Gets the IOList for grid row

> Then, the row can be loaded using the **[GRID LOAD](../directives/grid.htm#Mark16)** directive:

> GRID LOAD mygrid.ctl,0,row,REC(rowIOList$)

> Or, it can be loaded using the **'ROWDATA$** property:

> mygrid.ctl'row=row  
>  mygrid'ctl'RowData$=rec(rowIOList$)

Using properties to load a grid is slower in a WindX environment, as every property **SET** or **GET** requires a packet to be sent on the WindX connection.

See **[Setting/Getting Properties](How%20to%20Speed%20Up%20Grid.htm#setgetprops)** below for information on how to speed up the use of properties.

**_Loading Cell by Cell_**

Loading a grid cell by cell is the slowest way to load a grid. This method is generally used when rows and/or columns do not have a consistent format or when you want to update a single cell. This can be done by using the **[GRID LOAD](../directives/grid.htm#Mark16)** directive or by specifying properties to set the column, row and value.

**_Example:_**

> GRID LOAD mygrid.ctl,col,row,value$

> **_OR_**

> mygrid.ctl'colno=col  
> mygrid.ctl'row=row  
> mygrid.ctl'value$=myVal$

The example using properties would be slower in a WindX environment, as three packets would have to be sent to set the three properties.

See **[Setting/Getting Properties](How%20to%20Speed%20Up%20Grid.htm#setgetprops)** below for information on how to speed up the use of properties.

## Retrieving Grid Contents

Just as there are several ways to load data into the grid, you can also retrieve data by the cell, by the row, or by the entire contents, depending on how you are processing the data.

**_Processing the Entire Grid_**

The fastest way to process a grid is to retrieve the entire contents of the grid and parse the contents programmatically. This is useful if you are processing the grid as a whole, in which case you do not process each individual change but wait until all the changes are made and then submitted.

You can retrieve the entire contents of the grid by using the **[GRID FIND](../directives/grid.htm#Mark35)** directive with row and column set to 0 (zero):

> myGrid.ctl'SEPLOAD$=$00$  
>  GRID FIND myGrid.ctl,0,0,contents$

This will return the contents of the entire grid with each row separated by the value in the **'SEPLOAD$** property. The columns in each row are separated by the value in the **'SEP$** property (default is **SEP**).

An easy way to process the contents row by row is to use the **[FOR..NEXT](../directives/for.md)** directive to parse the resulting string into substrings, which hold the contents of each row. Using this syntax, the last character of the **_contents$_** string is the row separator, and the **FOR..NEXT** loop will parse out each row based on that character.

**_Example:_**

> FOR rowContents$ FROM contents$  
>  ! rowContents$ has the contents of the entire row which can then be parsed into columns  
>  READ DATA FROM rowContents$ TO col1$,col2$,col3$  
>  ! Now process the data as required  
>  NEXT

You could also retrieve the IOList for the row using the **['LOADIOLIST$](../properties/loadiolist_.md)** property and use that to parse the fields:

> mySep$=myGrid.ctl'SEP$  
> myIOLIST$=myGrid.ctl'LoadIOList$  
>  GRID FIND myGrid.ctl,0,0,contents$  
>  FOR rowContents$ FROM contents$  
>  READ DATA FROM rowContents$,SEP=mySep$ TO IOL=myIOLIST$  
>  ! Process the data as required  
>  NEXT

**_Processing Row by Row_**

To process data in a grid row by row, you can use the **[GRID FIND](../directives/grid.htm#Mark35)** directive or retrieve data using the **['ROWDATA$](../properties/rowdata_.md)** property.

**_Example:_**

> GRID FIND myGrid.ctl,0,row,rowContents$

> **_OR_**

> myGrid.ctl'row=row  
> rowContents$=myGrid.ctl'rowData$

Both of the above examples would populate rowContents$ with the data in the row, with columns separated by the value in the **'SEP$** property (default is **SEP**), which can then be parsed and processed as needed, perhaps by using the **'LOADIOLIST$** property. For information on using this property, see **[Loading Row by Row](How%20to%20Speed%20Up%20Grid.htm#loadrow)**.

**_Example:_**

> READ DATA from rowContents$ TO IOL=myGrid.ctl'LoadIOList$

When using properties, consider using the methods described below to increase speed. See **[Setting/Getting Properties](How%20to%20Speed%20Up%20Grid.htm#setgetprops)**.

**_Processing a Single Cell_**

In the case where you are processing the data in a single cell whenever it changes, there are two considerations:

**_If you are using the NOMADS environment:_**

> Whenever a grid cell changes, the corresponding grid control variable is populated with the new value. In addition, the **_xxxxx_.ROW** and **_xxxxx_.COLUMN** variables (where **_xxxxx_** is the grid control name) are populated with the current row and column being processed by the grid.  
>   
> **_Example:_**  
>   
>  myGrid$ would hold the value, and myGrid.ROW and myGrid.COLUMN would hold the row and column of the changed cell. These values can be used without having to access the grid properties.

**_If you are processing individual cells by using properties:_**

> You would have to get/set several properties to retrieve the value:

> myGrid.ctl'row=myGrid.ctl'currentrow  
> myGrid.ctl'colno=myGrid.ctl'currentColno  
>  value$=myGrid.ctl'value$

> This would be slower in a WindX environment but could be speeded up by using the methods described below. See **[Setting/Getting Properties](How%20to%20Speed%20Up%20Grid.htm#setgetprops)**.

##  Setting/Getting Properties

To Set/Get properties of a grid can be slow in a WindX environment if properties are accessed on an individual basis, one at a time. For example, setting a value in a grid cell requires setting the column and row numbers, as well as the value. Setting these separately would require three packets to be set on a WindX connection.

However, there are two ways to combine access to properties to reduce the number of packets. This includes utilizing **_pseudo multi-properties_** or using **_multi-property access_** by employing the **'_PropList$** , **'_PropValues$** and **'_PropSep$** properties.

**_Pseudo Multi-Properties_**

**[Pseudo Multi-Properties](../control_object_properties/psuedo_multi.md)** can be used to read or update a number of properties at the same time. A **_pseudo multi-property_** is basically a property whose name is made up of multiple "string" properties with each property name terminated by a **.** (_period_).

**_Example:_**

> mygrid.ctl'row.colno.celltype$.value.$

> A string comprised of the row and column numbers, a celltype and value as strings separated by a trailing separator character would be used to set the four properties:

> mygrid.ctl'row.colno.celltype.value.$=str(row)+"/"+str(col)+"/ellipsis/"+val$+"/"

> In this case, the last character of the assigned string, "/", is used to separate the values into the associated properties. The separator can be any character depending on usage.

You can also use pseudo multi-properties to read multiple property values. In this case, the property values would be returned in a string comprised of the values separated by the column separator, i.e. the **'SEP$** property.

**_Example:_**

> S$=mygrid.ctl'sep$  
>  X$=mygrid.ctl'row.colno.celltype$.value.$  
>  READ DATA FROM X$, SEP=S$ TO R,C,Type$,Val$

In the above examples, rather than sending five packets over a WindX connection, only two packets would be required: one to get the separator (not needed if the default is used) and one for the other four properties.

There is a limit on the number of properties that can be included in pseudo multi-properties. The limit is dependent on the length of the string used to define the properties, which is the same as that of a variable name, i.e. 127 characters.

**_Multi-Property Access using _PropList$, _PropValues$ and _PropSep$ Properties_**

**[Multi-Property Access](../control_object_properties/multi_prop.md)** allows you to set/get values for more than one property for a control. A list of the properties to be updated or read would be set in the **'_PropList$** property. The string of values for the properties would be in the **'_PropValues$** property, separated by the default **SEP** character or the character defined in the **'_PropSep$** property.

**'_PropList$** contains a comma-separated list of the property names to read/write.

**'_PropValues$** contains a string of values for each of the properties in **'PropList$** , separated by the field separator in **'PropSep$**.

**_Example to Set Properties:_**

> myGrid.ctl'_PropList$="Row,Colno,Celltype$,Value$"  
>  myGrid.ctl'_PropValues$=str(row)+SEP+str(col)+SEP+"ellipsis"+SEP+"data"

**_Example to Read Properties:_**

> myGrid.ctl'_PropList$="CurrentColumn,CurrentRow,Value$"  
>  x$=myGrid.ctl'_PropValues$  
>  READ DATA FROM x$ to Col,Row,Val$

In the above examples, two packets would be sent on a WindX connection, one for setting **'_PropList$** and one for **'_PropValues$**. A third packet would be sent as well if **'_PropSep$** were set. **'_PropList$** and **'_PropSep$** can be changed as needed but do not need to be reset if they do not change.

The limit on the number of properties that can be processed in one statement is dependent on the maximum PxPlus statement length (32K).
