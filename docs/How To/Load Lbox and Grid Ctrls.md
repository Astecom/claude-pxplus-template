# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Load List Box and Grid Controls**|   
---|---  
  
Query definitions can be used to automatically load List Boxes and Grids. All you have to do is create a query definition describing the columns you want to include in your control, including column titles, widths and even images!

To load a control, just add a CALL to the ***winlist** program in your program referencing the query definition and the CTL number of the control to be loaded:

> **CALL** "*winlist",_qName_ _$_ ,_qLibrary_ _$_ ,_controlCTL_

If you are loading a Report View List Box or a Grid, you do not even have to define a format for the control. That will be done automatically based on the column definitions.

#### **Note:**  
Drop Boxes and standard List Boxes are not formatted and will display only one column.

**_Example:_**

> In this example, a Report View List Box is created with a CTL value of 101. Then, the CALL to ***winlist** automatically loads the List Box with the contents of the query.

See **[Using Smart Controls Outside of NOMADS](../NOMADS%20Graphical%20Application/Smart%20Controls/Using%20Smart%20Controls%20Outside%20of%20NOMADS.md)**.
