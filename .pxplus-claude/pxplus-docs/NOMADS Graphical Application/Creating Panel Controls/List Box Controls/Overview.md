# Creating Panel Controls

**List Box Controls** |  **__**  
---|---  
  
List Box controls allow users to select items from a displayed list. By default, users make one selection from a preassigned list of items. A predefined **[Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.md)** can also be applied to a List Box control.

When creating a List Box control, the style of the List Box is determined by the _List Box Type_ property. When a _List Box Type_ is selected, the design properties to be specified for that particular style of List Box are displayed. See **[List Box Type](List%20Box%20Type.md)**.

The List Box types that are supported in NOMADS are:

**List Box Type** |  **Description** |  **Example**  
---|---|---  
**[Standard](List%20Box%20Type.htm#standard)** |  Lists a single column of data, with no formatting options. A **[Drop Box](../Drop%20Box%20Control/Overview.md)** uses a similar format. |   
**[Formatted](List%20Box%20Type.htm#formatted)** |  Displays multiple data elements over multiple columns with formatting and color. |   
**[List View](List%20Box%20Type.htm#listview)** |  Displays a single element of data over multiple columns (optionally may include bitmaps). |   
**[Report View](List%20Box%20Type.htm#reportview)** |  Displays multiple data elements in different columns (similar to a _Formatted_ List Box) and allows column headings, sorting, bitmaps and other formatting attributes. |   
**[Tree View](List%20Box%20Type.htm#treeview)** |  Displays data grouped into a tree-like structure that optionally may include **+**  _(plus)_ and **-**  _(minus)_ buttons to expand tree levels, dotted lines and **[State Indicators](List%20Box%20Type.htm#stateindicators)**. |   
  
## Creating a List Box

To draw a new List Box on your panel, select the List Box control tool from the **[Controls Toolbar](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**. Hold down the left-mouse button and drag the mouse to create a rectangle to the desired size. Release the mouse button to create the new object.

A List Box control can also be created from a **_data class_** or a data dictionary **_element_**. See **[Data Class Controls](../Introduction.htm#Mark4)** and **[Data Element Controls](../Introduction.htm#Mark5)**.

For making other adjustments, see **[Modifying Objects](../../Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

A system popup menu consisting of extraction, search and print options can also be added to any Grid or List Box (except Tree Views). See **[List Box and Grid System Popup Menu](../Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**.

Different functionality is available depending on the _List Box Type_. For example, a _Standard_ List Box could allow users to input their own values if the _Allow Variable Input_ attribute is set. To allow more than one selection in a List Box, select the _Multiple Selections_ check box. To define the specific attributes for the new control, see **[List Box Type](List%20Box%20Type.md)**.

For information and examples on the use of **_dynamic data classes_** and **_dynamic control properties_** , see **[Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)**.

## Loading Data Elements

Once a List Box is created, it can be loaded using **LIST_BOX LOAD** syntax in your program code. **[Smart Controls](../../Smart%20Controls/Overview.md)** can also be used to simplify this process by auto-loading data based on query definitions. Use the Auto Load property to set this feature (if activated).

You can programmatically retrieve or set a selected item in a List Box, using the variable with the same name as the control. See **[Accessing and Manipulating Controls](../../Program%20Interaction/Event-Handler%20Routines/Accessing%20and%20Manipulating%20Controls.md)**.

## See Also

**[Variable List Box](Variable%20List%20Box.md)**  
**[LIST_BOX Directive](../../../directives/list_box.htm#Mark3)**
