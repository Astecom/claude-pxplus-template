# Smart Controls 

**Formatting Smart Controls** |  **__**  
---|---  
  
By default, the format of **[Formatted](../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#formatted)** and **[Report View](../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#reportview)** List Boxes, as well as **[Grids](../Creating%20Panel%20Controls/Grid%20Control/Formatting%20a%20Grid.md)**, is derived from the _Columns_ and _Column Options_ specified in the query (or query list) definition. Smart controls that do not have a format associated with them (i.e. **[Drop Boxes](../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[Standard](../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#standard)** and **[List View](../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#listview)** List Boxes) display only the first field as defined in the query definition. The **[Chart](../Creating%20Panel%20Controls/Chart%20Control/Chart.md)** derives its format and titles from the Query+ AutoChart definition.

You can refine the format by changing the _Column Options_ in the query list definition, or you can go back to the control's properties definition and apply options that are not available in the query definition.

## Formatting Smart List Boxes

The format used to display a **_Formatted_** or **_Report View_** List Box can be derived in two ways:

  * If **_no format is defined_** in the List Box definition, then row height, column widths, titles and alignment are derived from the associated Query object definition. This also includes special Query column display options such as bold or colored text, color highlighting, images and percent bars.
  * If **_a format is defined_** in the List Box definition, then this definition will override that of the Query object.



**[Tree View](../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#treeview)** List Boxes can have bitmaps associated with them using the **Tree View Format Definition** window.

## Formatting a Smart Grid

The format used to display a **_Grid_** can be derived in two ways:

  * If **_no format is defined_** in the Grid definition, then columns, column widths and titles are derived from the associated Query object definition. The initial gray column (i.e. column -1) is suppressed. The Grid does **_not_** directly support special Query column display options such as bold or colored text, color highlighting, images and percent bars, although colors and font can be set up in **[Presets](../Creating%20Panel%20Controls/Grid%20Control/Presets%20Definition.md)** Definition.
  * If the Grid definition **_includes formatting_** , then that format takes precedence. If you want to set up different cell types or take advantage of features such as Named Columns, then you must set up your own format.



Grid presets and cell logic can be set up to be used by your Smart Grid control. If the Grid does not have a defined format, then presets involving column titles and widths will be overridden by the titles and widths from the Query object definition.

## Formatting a Chart

By default, the **_Chart_** format (i.e. 2D/3D Area, Bar, Column, etc.) and titles are derived from the Query+ AutoChart definition.

To override this, select the _Ignore Query chart format_ check box in **[Smart Chart Definition](Defining%20Smart%20Controls.htm#Mark5)**. The format and titles of the Chart control definition will then be used.
