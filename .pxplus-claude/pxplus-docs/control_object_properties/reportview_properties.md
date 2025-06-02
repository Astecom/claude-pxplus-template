# LIST_BOX Create/Control List Box

**REPORT_VIEW Properties**|   
---|---  
  
The Report View control is a type of list box that displays multiple data elements in different columns (like a Formatted list box) with the use of column headings, sorting and other attributes.

This control can be created either by using the **[LIST_BOX](../directives/list_box.md)** directive (to create a Report Style List View control) or by using the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to draw a Report View **[List Box Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)** and apply the desired attributes.

Below is a list of properties used to define and manipulate Report View List Box controls. For a list of properties for other list box types, see **[List_Box Properties](listbox_properties.md)**, **[List_View Properties](listview_properties.md)** and **[Tree_View Properties](treeview_properties.md)**.

Use the links in the **Property** column to access the PxPlus Help page for a selected property. The Help page may provide additional details, particularly if the property can be used to define other controls.

For a complete list of all the properties available, see **[Properties List](properties_list.md)**.

**Property** |  **Description**  
---|---  
**[Auto](../properties/auto.md)** |  When set, the control will generate a 'Change' event whenever its value changes as opposed to the default _Off_ state where the control will only generate the change event when losing focus. Possible values are: |  0 |  Only signal change when exiting the control or on special event such as double click/Enter. **_(Default)_**  
---|---  
1 |  Signal all changes to the value of the control regardless of why the change occurred.  
2 |  Signal all changes done by the user but not done by the program.  
**[AutoColSize](../properties/autocolsize.md)** |  This property is used to control the automatic adjustment of column sizes so that the total space occupied by the columns will fill the control width. When this property is set to 1, the system will adjust all columns in the control so that the sum of the column widths will completely fill the control width exclusive of any scrollbars that may be present. Once set, any resizing of the control will again re-apply the automatic columns sizing logic. (**_Default:_** 0 - No automatic column resizing) When adjusting the column sizes, the system will compute the new size based on percentages. **_Example:_** Consider the following - Control has three columns:

  * Column 1 is 40 pixels wide.
  * Column 2 is 10 pixels wide.
  * Column 3 is 50 pixels wide.

If this control had AutoColSize enabled, it would determine that column 1 was 40% of the total column width, column 2 was 10%, and column 3 was 50%. These columns would each be adjusted based on the total width of the control to retain the same percentages. Therefore, if the control itself was 150 pixels wide, column 1 would become 150*40%=60 pixels, column 2 would become 150*10%=15 pixels, and column 3 would become 150*50%=75 pixels.  
**[BackColor$  
BackColour$](../properties/backcolor_.md)** |  Background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[BackHilight1$](../properties/backhilight1_.md)** |  Background color, alternating lines: Background color for every second line. (**_Default:_** "DEFAULT") If set to other than the value "DEFAULT", the color set in this property will be used as the background color on every second line in a list. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[BackHilight2$](../properties/backhilight2_.md)** |  Background color, alternating three lines: Background color for every third line. (**_Default:_** "DEFAULT") If set to other than the value "DEFAULT", the color set in this property will be used as the background color on every third line in a list. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**.  
**[BringToTop](../properties/bringtotop.md)** |  This property, when set to **_any_** value, will cause the control to be moved to the top of the display order. Once at the top of the display order, the control will appear visually on top of any other control on the window. (**_Default:_** Not Applicable - Always returns 0)  
**[Col](../properties/col.md)** |  Screen position (column) of control.  
**[Colno](../properties/colno.md)** |  Column number of report view. This property is fundamentally the same as referring to the 'Column property, however, is included to allow a numeric column number to be specified as a string with accessing the properties. Referencing 'Colno$ will return the column number as a string.  
**[Cols](../properties/cols.md)** |  Width of control in column units.  
**[Column](../properties/column.md)** |  Currently referenced column number of report view: This property does not contain the current column number of the control, but rather the column number being referenced when used in conjunction with other properties.  
**[Column$](../properties/column_.md)** |  Report view column name.  
**[ColumnClicked](../properties/columnclicked.md)** |  This property contains the column number of the column where the last mouse click occurred in the report view. It is set automatically by the system when the user clicks the mouse on a line within the report view. It is reset to 0 (zero) if the user positions/selects items in the report view using the keyboard.  
**[ColumnHdrTip$](../properties/columnhdrtip.md)** |  This property is used to control the tip to display below the column header in a report view control. To set/reference the tip, you must first set the 'Column property for the report view to identify the column you are referencing. By default, if no column tip is defined, the standard report view tip will be displayed.  
**[ColumnSizeLock](../properties/columnsizelock.md)** |  This property controls the ability of the user to resize the width of a column by dragging the column header. If set to 0, the column may not be resized. If set to 1, the column is resizable. (**_Default:_** 1 - resizable)  
**[ColumnsWide](../properties/columnswide.md)** |  Number of columns.  
**[ColumnWidth](../properties/columnwidth.md)** |  Width of column in column units.  
**[CtlName$](../properties/ctlname_.md)** |  See **[LIST_BOX](../directives/list_box.md)** directive.  
**[CurrentItem](../properties/currentitem.md)** |  Current item with focus/selected. (**_Default_** : 1; 0 if no data)  
**[DisableBackColor$  
DisableBackColour$](../properties/disablebackcolor.md)** |  Background color when the control is disabled. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(Report View support was added in PxPlus 2019.)_  
**[DisableOnEmpty](../properties/disableonempty.md)** |  This property can be set to have the system automatically disable a list style control (list box, list view, report view or drop box) if the list contents are empty -- that is, there are no potential selections for the user to select. Once the list is populated (with at least one entry), the list box will be re-enabled. This setting is independent of the **['Enabled](../properties/enabled.md)** property; that is, if the list box is already forcibly disabled, adding entries to the list will not cause the list to be re-enabled. (**_Default:_** 0 - The list will not be automatically disabled.)  
**[DisableTextColor$  
DisableTextColour$](../properties/disabletextcolor.md)** |  Foreground text color when the control is disabled. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(Report View support was added in PxPlus 2019.)_  
**[DroppedOn](../properties/droppedon.md)** |  This property indicates the index number that dragged items were dropped onto; if items are not dropped onto a specific line, 0 is returned.  
**[Enabled](../properties/enabled.md)** |  Enabled indicator: 1 = True; 0 = False (**_Default:_** 1)  
**[Eom$](../properties/eom_.md)** |  Last change terminator. See also **[LIST_BOX](../directives/list_box.htm#Mark18)** directive.  
**[ExcelStyle](../properties/excelstyle.md)** |  This property is used to control the display of grid lines in either the grid or the report view controls. Possible values are: |  0 |  No grid lines appear. **_(Default for Report View)_**  
---|---  
1 |  Grid lines appear both between the columns and between each line in the output. **_(Default for Grid)_**  
2 |  Vertical grid lines will be shown between columns.  
3 |  Horizontal grid lines will be shown between lines/row.  
  
#### **Note:**  
Prior to PxPlus v8.11 (build 9182), this property was only available on the grid and only accepted a value of 0 or 1. As of PxPlus v8.11, PxPlus supported the property in the report view and options 2/3.  
  
**[FindColNo](../properties/findcolno.md)** |  This property is used to control which column the 'FindItemText will search. If not set, the search encompasses all rows/columns within the report view. See **[FindItemText$](../properties/finditemtext.md)** and **[FindOptions$](../properties/findoptions.md)** properties. (**_Default:_** 0 - No column specified; searches all columns)  
**[FindItemText$](../properties/finditemtext.md)** |  This property, when set, causes the system to search the list box or grid for the text supplied. If the text is found, the system will set the **['Column](../properties/column.md)** and **['Item](../properties/item.md)** (or **['Row](../properties/row.md)**) property for the control to the entry where the match was found. If no match is found, the 'Column and 'Item ('Row for the Grid) property is set to zero. A typical use of this property would be to locate a value in the list box and then change or delete it. It can also be used to validate that an entry exists in the list box. This property is generally only written to. Reading this value will return the same as reading the **['ItemText$](../properties/itemtext_.md)** property. **Controlling the Search (List View/Grid Only):** The search is controlled by the settings found in 'FindOptions$. These options are provided as a series of characters in 'FindOptions$: |  **Char.** |  **Function**  
---|---  
C |  Search is case insensitive.  
A |  Accents will be ignored when comparing data.  
W |  Search should start from current position and wrap around.  
* |  Match is for data anywhere in the text (cannot be used with Sort option).  
S |  Data is sorted.  
R |  Search backwards.  
  
**Search Range (List View/Grid Only):** When searching, if the "W"rap option is not specified, the search will start from the beginning of the data in the control and proceed through the end. If the "R"everse option is set, the search starts at the end and proceeds to the beginning. If the "W"rap option is set, the search will start from the position immediately after that specified in the 'Item ('Row for Grid) and 'Column and search through all the data wrapping around the end/start back to the starting point.

If the property 'FindColNo (or 'Column for Grid) is set, only data in that column will be searched. If the "S"ort option is specified, only the column specified in the **['Sort](../properties/sort.md)** property will be checked and its setting (Ascending/Descending) will be used to determine the assumed sort sequence. If 'Sort is not set, the system will assume that the column specified in 'FindColNo has been pre-sorted in Ascending order. If 'FindColNo is not set, then the system will assume the first column is to be used and is in ascending sequence. 

If both "W"rap and "S"ort options are specified, the system will use the starting point set in 'Item ('Row on Grid) and 'Column and determine the search direction based on the value at the starting point. If the value at the start point matches that of the search value, the "R" option will determine the search direction.

See [**'FindColNo**](../properties/findcolno.md) and [**'FindOptions$**](../properties/findoptions.md) properties.

#### **Note:**  
Prior to PxPlus v11, this property and functionality was not available on the grid. In addition, the 'Column was not set nor were the 'FindOptions$ and 'FindColNo ** _(list view only)_** supported.

**_Example 1:_ Changing item text in a list box**

To change the value of the list box entry of "CAT" to "DOG" for list box "LIST1", you could do the following:

List1'FindItemText$="CAT" ! Locate the item  
List1'ItemText$ = "DOG" ! Change the value

**_Example 2:_ Locate and delete an item from a list box**

To locate and delete a value from a list box:

List1'FindItemText$="CAT" ! Locate the item to delete  
LIST_BOX LOAD List1, List1'Item, *

**_Example 3:_ Validate the existence of an item in a list**

To search a list box to find a specific value, set the FindItemText$ to the desired search value then read 'Item. If zero, the item does not exist.

List1'FindItemText$=X$ ! Locate the item  
IF List1'Item=0 THEN MSGBOX X$+" is not found"  
  
**[FindOptions$](../properties/findoptions.md)** |  This property is used to control how the 'FindItemText will search the data in the report view. It can have one of the following characters specified in its value: |  **Char.** |  **Function**  
---|---  
C |  Search is case insensitive.  
A |  Accents will be ignored when comparing data.  
W |  Search should start from current position and wrap around.  
* |  Match is for data anywhere in the text (cannot be used with Sort option).  
S |  Data is sorted.  
R |  Search backwards.  
I |  _(Uppercase "i")_ In a list box with a bitmap, include the name of the bitmap in the search.  
  
(**_Default_** value is "" - no options specified.)

See [**'FindItemText$**](../properties/finditemtext.md) and **['FindColNo](../properties/findcolno.md)** properties.

_(The "I" option was added in PxPlus 2023.)_  
  
**[Fmt$](../properties/fmt_.md)** |  Control format definition. Refer to the **FMT=** option as described in the **[LIST_BOX](../directives/list_box.htm#Mark6)** directive.  
**[Focus](../properties/focus.md)** |  Focus indicator: 1 = Control has focus. (**_Default:_** 0)  
**[FocusBackColor$  
FocusBackColour$](../properties/focusbackcolor_.md)** |  Background color when the control has focus. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(Report View support was added in PxPlus 2018.)_  
**[FocusTextColor$  
FocusTextColour$](../properties/focustextcolor_.md)** |  Foreground text color when the control has focus. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(Report View support was added in PxPlus 2018.)_  
**[Font$](../properties/font_.md)** |  This property is used to reference the font for a control. It will contain (or can be set to) a string containing three comma-separated fields of the font name, size and attributes. See **['FONT'](../mnemonics/font.md)** mnemonic. **_Example:_** To set the font to Arial, 1.5 times normal size, and Bold, the format would be xxx'Font$="Arial,1.5,B".  
**[FrameColor$  
FrameColour$](../properties/framecolor_.md)** |  Color of the frame/border around the control. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The FrameColor$ property was added in PxPlus 2024.)_  
**[HdrBackColor$  
HdrBackColour$](../properties/hdrbackcolor_.md)** |  This property sets the background color for the report view header. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The HdrBackColor$ (or HdrBackColour$) property was added for Report Views in PxPlus 2016.)_  
**[HdrFont$](../properties/hdrfont_.md)** |  This property defines the font for the report view header. _(The HdrFont$ property was added for Report Views in PxPlus 2016.)_  
**[HdrHeight](../properties/hdrheight.md)** |  This property can be used to control the height of the header in the report view in pixels. Setting this property to -1 restores the height to its default size. Setting this property to 0 results in no header. _(The HdrHeight property was added in PxPlus 2020.)_  
**[HdrTextColor$  
HdrTextColour$](../properties/hdrtextcolor_.md)** |  This property sets the color of the text for the report view header. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The HdrTextColor$ (or HdrTextColour$) property was added for Report Views in PxPlus 2016.)_  
**[HeaderLock](../properties/headerlock.md)** |  This property controls the ability of the user to click on or drag the header of a report view. If set to 0 (zero), the column header is not locked. If set to 1, the column header is locked and mouse clicks or dragging of the column header is not accepted. (**_Default:_** 0)  
**[Height](../properties/height.md)** |  Height of control in pixels.  
**[HotLinkColor$  
HotLinkColour$](../properties/hotlinkcolor_.md)** |  This color is applied to the text of a column defined as a hotlink in the report view to provide a visual cue. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The HotLinkColor$ property was added in PxPlus 2018.)_  
**[HoverBackColor$  
HoverBackColour$](../properties/hoverbackcolor_.md)** |  Background color when mouse is over a report view row. If two colors are specified, use the / _(slash)_ as a separator (i.e. RGB:100 100 100/Light Blue). For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(Report Views support was added in PxPlus 2018.)_  
**[HoverColor$  
HoverColour$](../properties/hovercolor_.md)** |  Hover color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[hWnd](../properties/hwnd.md)** |  Windows handle for control.  
**[Item](../properties/item.md)** |  Index number of item in list.  
**[ItemCount](../properties/itemcount.md)** |  Number of items in list. See [**Load on Demand**](loadondemand.md).  
**[ItemLoadedCtl](../properties/itemloadedctl.md)** |  Signal/CTL event number to generate when items are loaded in the list.  
**[ItemNeededCnt](../properties/itemneededcnt.md)** |  Number of items whose text value is still undefined when using **[Load on Demand](loadondemand.md)** for lists. **_Example:_** You can define a list box to contain 1000 items but only supply the item values (display text) as the user scrolls them into view. The 'ItemNeededCnt is the number of items whose value has still not been loaded.  
**[ItemNeededCtl](../properties/itemneededctl.md)** |  Signal/CTL event number to generate when items are requested from the list box: This property must be set prior to pre-declaring the number of items the list box is to have by setting the 'ItemCount property. See [**Load on Demand**](loadondemand.md).  
**[ItemNeededFrom](../properties/itemneededfrom.md)** |  Index number of the items requested: The 'ItemNeededFrom and 'ItemNeededTo properties are set once the user scrolls the list box to request more items to be loaded. See [**Load on Demand**](loadondemand.md).  
**[ItemNeededTo](../properties/itemneededto.md)** |  Index number of the items requested: See [**Load on Demand**](loadondemand.md).  
**[ItemText$](../properties/itemtext_.md)** |  Value of the current item set by 'Item.  
**[Key$](../properties/key_.md)** |  Hot key to jump to control.  
**[Left](../properties/left.md)** |  Left margin for control in pixels.  
**[Line](../properties/line.md)** |  Screen position of control.  
**[LineColor$](../properties/linecolor_.md)  
[LineColour$](../properties/linecolor_.md)** |  This property contains the color of the lines drawn between rows and columns when the **['ExcelStyle](../properties/excelstyle.md)** property is set. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** DEFAULT (normally BLACK)) _(The LineColor$ (or LineColour$) property was added in PxPlus 2020.)_  
**[LinePixels](../properties/linepixels.md)** |  Returns the height of a row in a report view in pixels. (Read Only) _(The LinePixels property was added in PxPlus 2017.)_  
**[Lines](../properties/lines.md)** |  Height of control in number of lines.  
**[LinesPerRow](../properties/linesperrow.md)** |  This property is used to define the number of lines that each entry on a list box contains. When set to a value > 1, the system will apply word wrap to the text in the list box and support line breaks with the line feed ($0a$) character. (**_Default:_** 1 - Each row in the list box is one line high.)  
**[LoadPoint](../properties/loadpoint.md)** |  This property controls where the data loaded to a list_box, drop_box, varlist_box or vardrop_box will be inserted. When a list/drop box **LOAD** directive is issued with no index, the current contents of the control will first be cleared and the new data will replace it. Setting the 'LoadPoint property to a non-zero value alters this behavior. If **'LoadPoint** is set to -1, the data included with the list/drop box **LOAD** directive will be appended to the list box contents. If **'LoadPoint** is set to -2, the data included with the list/drop box **LOAD** directive will replace the current contents of the list starting at the item number set in the 'Item property, which will be updated to the next item number once the load is complete (new items will be added, if required). If **'LoadPoint** is set to a value > 0, the data will be inserted into the list at the point specified and the value in 'LoadPoint will be reset.

#### **Note:**  
A positive value in the 'LoadPoint property is reset to 0 (zero) when a list/drop box **LOAD** directive is executed. A value of -1, which indicates 'append', is not reset by the **LOAD** directive.

This functionality allows drop boxes to be loaded a block of records at a time. (The LoadPoint setting of -2 was added in PxPlus 2019.)  
**[LockBottom](../properties/lockbottom.md)** |  Number of rows at the bottom of the report view to exclude from sorting. See **[LockTop](../properties/locktop.md)** property.  
**[LockTop](../properties/locktop.md)** |  Number of rows at the top of the report view to exclude from sorting. See **[LockBottom](../properties/lockbottom.md)** property. _(The LockTop property was added in PxPlus 2019.)_  
**[LookAndFeel](../properties/lookandfeel.md)** |  Defines how a control will look. It can have the following values: |  2 |  Old Windows 3.1 2D look.  
---|---  
3 |  Windows 95/98 3D look.  
4 |  Windows XP/Vista/Windows 7 look.  
**[MenuCtl](../properties/menuctl.md)** |  This property reports/sets the CTL value to generate when an object is selected on a right-click of the mouse.  
**[MouseOver](../properties/mouseover.md)** |  This property returns the item number of an object when the mouse pointer is over it. If the mouse is not over an object, -1 is returned. 0 is returned if the cursor is over an area in the control with no data.  
**[Msg$](../properties/msg_.md)** |  Message line text for the control.  
**[ObjectID](../properties/objectid.md)** |  User object method. (**_Default:_** 0 - No object specified) The 'ObjectID property allows applications to intercept property values and add methods to controls. When set to a valid Object ID by the application, you can add methods and add/override property logic for any control in the system. When set in the system, it allows the application to logically request methods against the control that, in turn, will be performed by the related Object ID. It will also first check the object for any property requests and, if the property is defined in the object, set or get that property instead of the controls. To allow the specified object to get true access to the control, while executing within the object identified by the 'ObjectID property, the system will direct any property requests directly to the control.

#### **Note:**  
When a control is deleted from the system, any object identified by an 'ObjectID property will be automatically dropped.  
  
**[OnFocusCtl](../properties/onfocusctl.md)** |  On Focus CTL event. 0 is returned if no On Focus CTL value is set up for the control.  
**[OnLoadCtl](../properties/onloadctl.md)** |  This property, when set to a non-zero value, causes the system to generate an internal CTL event following any changes to a list box. It can be used to monitor changes to a list style control so that external action (such as updating screen or files) can be performed. (**_Default:_** 0) If the value of this property is non-zero, the system will use its value as a CTL event to generate. If zero (default state), no event will be generated. To avoid multiple signals being generated, the system will defer the generation for approximately 1/2 second following the last update. This means that when multiple rows are being updated, the event will generally only occur once the updating is complete.  
**[OnTipCtl](../properties/ontipctl.md)** |  This property controls the CTL event that will be fired prior to the system displaying the Tip for any control. If the value of this property is non-zero, the system will use its value of a CTL event to fire and will defer the display of the tip until the application changes the value in 'Tip$. If the value in 'Tip$ is not changed, no tip will be displayed. Setting this to zero **_(Default)_** disables the event from being sent and the current 'Tip$ will be displayed.  
**[Parent](../properties/parent.md)** |  Parent window handle.  
**[RowHeight](../properties/rowheight.md)** |  Height of current row in lines.  
**[ScrollWheel](../properties/scrollwheel.md)** |  This property is used to define how many lines each click of the scroll wheel will move a list box. Possible values are: |  0 |  Scroll wheel support (all events go to parent window).  
---|---  
1 |  Scroll only if the control has focus (mouse can hover on or off control).  
2 |  Scroll only if the control has focus (mouse must be hovered over control).  
3 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 1).  
4 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 2).  
**[SelectBackColor$](../properties/selectbackcolor_.md)** |  Sets the background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The SelectBackColor$ property was added in PxPlus 2018.)_  
**[SelectCount](../properties/selectcount.md)** |  Number of items selected: Set this property to zero to deselect all items. See [**Multiple Selections**](multipleselect.md).  
**[SelectIndex](../properties/selectindex.md)** |  Index to 'SelectItem: Set this property to point to a selected element; e.g. 1 points to the first item selected, 2 points to the second item selected, etc. See [**Multiple Selections**](multipleselect.md).  
**[SelectItem](../properties/selectitem.md)** |  Item number in list selected: This property returns the sequential location within the list of the item being pointed to by 'SelectIndex property. See [**Multiple Selections**](multipleselect.md).  
**[SelectTextColor$  
SelectTextColour$](../properties/selecttextcolor_.md)** |  Sets the text color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The SelectTextColor$ property was added in PxPlus 2018.)_  
**[Sep$](../properties/sep_.md)** |  Separator character between each field, column or data point.  
**[SepLoad$](../properties/sepload_.md)** |  Separator character for each row.  
**[SepSort$](../properties/sepsort_.md)** |  This property is used to define a character, which will separate the contents of a report view column that is to be displayed from the values of the column as it will be used for column sorting. Often when displaying data in a report view, it is desirable to have what is displayed be different from how the value should be sorted. For instance, the display value of a report view may be a bitmap or some other graphical information, which is not able to be sorted. If you define a SepSort$ value, any data in the column before the specified character will define what will be displayed, and data following the character will be used for the purposes of sorting.  
**[SignalOnExit](../properties/signalonexit.md)** |  This property controls whether a 'Change' signal will be generated when the control (or region of a grid control) is exited regardless of whether the control's value changes. Normally, controls only signal changes when the control loses focus **_and_** the contents have changed. Setting 'SignalOnExit allows a change signal to also be generated whenever focus leaves the control (or region for grid). |  0 |  No signal on exit unless control value has changed.  
---|---  
1 |  Signal on exit regardless of whether value has changed (on grid, signals whenever changing cell).  
2 |  Signal when changing row or on exit of grid (sets column value to 0 and row value to last row exited)._**(Grid Only)**_  
3 |  Signal when exiting the grid (sets column and row values to zero). **_(Grid Only)_**  
**[Sort](../properties/sort.md)** |  Column sorting: Sorts the contents of the control. In report views, this property sets the number of the column on which the data is to be sorted. Positive integers indicate normal ascending sort order; negative integers indicate descending order. (**_Default for Report View:_** 0)  
**[SortOnHdrClick](../properties/sortonhdrclick.md)** |  This property is used to control the sorting of report view columns based on the user clicking the column header. This property is used to enable/disable the column sorting options. Possible values are: |  0 |  Disable sorting - column does not sort on click of column header.  
---|---  
1 |  Enable sorting - column will sort on click of column header.  
-1 |  Clicking the header generates a CTL event and places an EOM code of "H" in the READ queue. The **['ColumnClicked](../properties/columnclicked.md)** property will have the column number of the column whose header was clicked. Application can respond accordingly.  
  
(**_Default for Report View:_** 1 - Column sorting is enabled; column will sort on click of column header.)

_(Value of -1 for Report Views was added in PxPlus 2017.)_  
  
**[SortOrder$](../properties/sortorder.md)** |  Sorting control settings. This property is used to control how column data will be sorted in the report view. It can have one of the following values or be set to Null, which indicates the sort order is defined by the system StdSortOrder setting using the **[SETDEV SET](../directives/setdev_set.md)** directive or the **['OPTION'](../mnemonics/option.md)** mnemonic. |  Null |  Uses StdSortOrder setting (if StdSortOrder not set, uses raw sort).  
---|---  
R |  Raw binary sort.  
C |  Case insensitive sort.  
A |  Sort ignores accents.  
N |  Null values at end of sort.  
CA |  Ignore case and accents.  
CN |  Ignore case/Null values last.  
AN |  Ignore accents/Null values last.  
CAN |  Ignore case and accents/Null values last.  
  
(**_Default:_** Null - Data is sorted using the StdSortOrder setting.)

Alternatively, this property can be accessed as a string comprising the characters C, A or N. An empty string is used to indicate all settings are Off.  
  
**[Tbl$](../properties/tbl_.md)** |  Controls the translation of the values selected in a control and how the value will be passed to/from the application. Generally, it contains a table of single-character values representing selections from the controls with each character representing each of the values in the control in sequence. The size of each entry can be changed using the 'TblWidth property.  
**[TblWidth](../properties/tblwidth.md)** |  This property can be used to set the length of each of the items in the 'Tbl$ property. It can be set to any positive value. (**_Default:_** 1) Setting 'TblWidth to 0 (zero) indicates that 'Tbl$ contains a delimited string with the last character of the string being the delimiter character.  
**[TextColor$  
TextColour$](../properties/textcolor_.md)** |  Foreground text color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[Tip$](../properties/tip_.md)** |  Tip message for control.  
**[Top](../properties/top.md)** |  Top of control in pixels.  
**[TopVisibleItem](../properties/topvisibleitem.md)** |  This property is used to access the item number that is currently displayed at the top of the list. It can be used to determine/control vertical scrolling of the data. If set, it must be set to a value between 1 and the number of items in the list. (**_Default:_** 1) Setting this property to a row near the bottom of the list contents does not always guarantee that the row identified will be the first line within the control. The system will attempt to leave the bottom few lines visible; however, it will assure that the item indicated is visible.  
**[Value$](../properties/value_.md)** |  Current item value.  
**[ValueNoSignal$](../properties/valuennosignal_.md)** |  Change control's value without generating OnChange event: Same as 'Value$; however, when used to change the value in the control, no OnChange event will occur. Normally, on list style or input controls which have Signal All Changes enabled, changing the control value under either program control or by user input will generate an OnChange event. Changing the value of a control using the ValueNoSignal$ property allows the control's value to change without generating the OnChange event.  
**[Visible](../properties/visible.md)** |  Control visible flag: 1 = Yes; 0 = No (**_Default:_** 1)  
**[Width](../properties/width.md)** |  Width of control in pixels.  
**[_PropList$](../properties/_proplist_.md)** |  Controls the list of properties to be returned in '_PropValues$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropSep$](../properties/_propsep_.md)** |  Controls the separator used between each of the values of the properties returned in '_PropValues$ as defined by '_PropList$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
**[_PropValues$](../properties/_propvalue_.md)** |  Accesses the values of the properties defined in '_PropList$. Each value is separated by the value in '_PropSep$. This property can be used to speed up the processing of multiple property accesses but reducing the number of interactions with the control. See **[Multi-Property Access](multi_prop.md)**.  
  
## See Also

**[Multiple Selections](multipleselect.md)**  
**[Load on Demand](loadondemand.md)**  
**[Color Properties](colour_properties.md)**  
**['COLOUR' & '_COLOUR' Mnemonic](../mnemonics/colour.md)**  
**[Using Property Names](../control_object_properties.htm#Mark1)**  
**[Compound Properties](compound_properties.md)**
