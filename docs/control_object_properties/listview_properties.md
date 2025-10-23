# LIST_BOX Create/Control List Box

**LIST_VIEW Properties**|   
---|---  
  
The List View control operates like a Standard list box but provides for columnar lists with optional bitmaps. The format appears similar to the right-side pane of "classic" Windows Explorer.

This control can be created either by using the **LIST_BOX** directive (see **[List View List Boxes](../directives/list_box.htm#Mark33)**) or by using the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** to draw a List View **[List Box Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)** and apply the desired attributes.

Below is a list of properties used to define and manipulate List View List Box controls. For a list of properties for other list box types, see **[List_Box Properties](listbox_properties.md)**, **[Report_View Properties](reportview_properties.md)** and **[Tree_View Properties](treeview_properties.md)**.

Use the links in the **Property** column to access the PxPlus Help page for a selected property. The Help page may provide additional details, particularly if the property can be used to define other controls.

For a complete list of all the properties available, see **[Properties List](properties_list.md)**.

**Property** |  **Description**  
---|---  
**[Auto](../properties/auto.md)** |  When set, the control will generate a 'Change' event whenever its value changes as opposed to the default _Off_ state where the control will only generate the change event when losing focus. Possible values are: |  0 |  Only signal change when exiting the control or on special event such as double click/Enter. **_(Default)_**  
---|---  
1 |  Signal all changes to the value of the control regardless of why the change occurred.  
2 |  Signal all changes done by the user but not done by the program.  
**[BackColor$  
BackColour$](../properties/backcolor_.md)** |  Background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. (**_Default:_** "DEFAULT")  
**[BringToTop](../properties/bringtotop.md)** |  This property, when set to **_any_** value, will cause the control to be moved to the top of the display order. Once at the top of the display order, the control will appear visually on top of any other control on the window. (**_Default:_** Not Applicable - Always returns 0)  
**[Col](../properties/col.md)** |  Screen position (column) of control.  
**[Colno](../properties/colno.md)** |  Column number of list view. This property is fundamentally the same as referring to the 'Column property, however, is included to allow a numeric column number to be specified as a string with accessing the properties. Referencing 'Colno$ will return the column number as a string.  
**[Cols](../properties/cols.md)** |  Width of control in column units.  
**[Column](../properties/column.md)** |  Currently referenced column number of list view: This property does not contain the current column number of the control, but rather the column number being referenced when used in conjunction with other properties.  
**[Column$](../properties/column_.md)** |  List view column name.  
**[ColumnClicked](../properties/columnclicked.md)** |  This property contains the column number of the column where the last mouse click occurred in the list view. It is set automatically by the system when the user clicks the mouse on a line within the list view. It is reset to 0 (zero) if the user positions/selects items in the list view using the keyboard.  
**[ColumnHdrTip$](../properties/columnhdrtip.md)** |  This property is used to control the tip to display below the column header in a list view control. To set/reference the tip, you must first set the 'Column property for the list view to identify the column you are referencing. By default, if no column tip is defined, the standard list view tip will be displayed.  
**[ColumnsWide](../properties/columnswide.md)** |  Number of columns.  
**[ColumnWidth](../properties/columnwidth.md)** |  Width of column in column units.  
**[CtlName$](../properties/ctlname_.md)** |  Control type ("LIST_VIEW"). See **[LIST_BOX](../directives/list_box.md)** directive.  
**[CurrentItem](../properties/currentitem.md)** |  Current item with focus/selected. (**_Default_** : 1; 0 if no data)  
**[DisableBackColor$  
DisableBackColour$](../properties/disablebackcolor.md)** |  Background color when the control is disabled. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(List View support was added in PxPlus 2019.)_  
**[DisableOnEmpty](../properties/disableonempty.md)** |  This property can be set to have the system automatically disable a list style control (list box, list view, report view or drop box) if the list contents are empty -- that is, there are no potential selections for the user to select. Once the list is populated (with at least one entry), the list box will be re-enabled. This setting is independent of the **['Enabled](../properties/enabled.md)** property; that is, if the list box is already forcibly disabled, adding entries to the list will not cause the list to be re-enabled. (**_Default:_** 0 - The list will not be automatically disabled.)  
**[DroppedOn](../properties/droppedon.md)** |  This property indicates the index number that dragged items were dropped onto; if items are not dropped onto a specific line, 0 is returned.  
**[Enabled](../properties/enabled.md)** |  Enabled indicator: 1 = True; 0 = False (**_Default:_** 1)  
**[Eom$](../properties/eom_.md)** |  Last change terminator. See also **[LIST_BOX](../directives/list_box.htm#Mark18)** directive.  
**[FindItemText$](../properties/finditemtext.md)** |  This property, when set, causes the system to search the list box or grid for the text supplied. If the text is found, the system will set the **['Column](../properties/column.md)** and **['Item](../properties/item.md)** (or **['Row](../properties/row.md)**) property for the control to the entry where the match was found. If no match is found, the 'Column and 'Item ('Row for the grid) property is set to zero. A typical use of this property would be to locate a value in the list box and then change or delete it. It can also be used to validate that an entry exists in the list box. This property is generally only written to. Reading this value will return the same as reading the **['ItemText$](../properties/itemtext_.md)** property. **Controlling the Search (List View/Grid Only):** The search is controlled by the settings found in 'FindOptions$. These options are provided as a series of characters in 'FindOptions$: |  **Char.** |  **Function**  
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
  
**[Fmt$](../properties/fmt_.md)** |  Control format definition. Refer to the **FMT=** option as described in the **[LIST_BOX](../directives/list_box.htm#Mark6)** directive.  
**[Focus](../properties/focus.md)** |  Focus indicator: 1 = Control has focus (**_Default:_** 0)  
**[FocusBackColor$  
FocusBackColour$](../properties/focusbackcolor_.md)** |  Background color when the control has focus. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(List View support was added in PxPlus 2018.)_  
**[FocusTextColor$  
FocusTextColour$](../properties/focustextcolor_.md)** |  Foreground text color when the control has focus. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(List View support was added in PxPlus 2018.)_  
**[Font$](../properties/font_.md)** |  This property is used to reference the font for a control. It will contain (or can be set to) a string containing three comma-separated fields of the font name, size and attributes. See **['FONT'](../mnemonics/font.md)** mnemonic. **_Example:_** To set the font to Arial, 1.5 times normal size, and Bold, the format would be xxx'Font$="Arial,1.5,B".  
**[FrameColor$  
FrameColour$](../properties/framecolor_.md)** |  Color of the frame/border around the control. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The FrameColor$ property was added in PxPlus 2024.)_  
**[Height](../properties/height.md)** |  Height of control in pixels.  
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
**[LinePixels](../properties/linepixels.md)** |  Returns the height of a row in a list view in pixels. (Read Only) _(The LinePixels property was added in PxPlus 2017.)_  
**[Lines](../properties/lines.md)** |  Height of control in number of lines.  
**[LoadPoint](../properties/loadpoint.md)** |  Insertion point for list/drop box loads. This property controls where the data loaded to a list_box, drop_box, varlist_box or vardrop_box will be inserted. When a list/drop box **LOAD** directive is issued with no index, the current contents of the control will first be cleared and the new data will replace it. Setting the 'LoadPoint property to a non-zero value alters this behavior. If 'LoadPoint is set to -1, the data included with the list/drop box **LOAD** directive will be appended to the list box contents. If 'LoadPoint is set to -2, the data included with the list/drop box **LOAD** directive will replace the current contents of the list starting at the item number set in the 'Item property, which will be updated to the next item number once the load is complete (new items will be added, if required). If 'LoadPoint is set to a value > 0, the data will be inserted into the list at the point specified and the value in 'LoadPoint will be reset.

#### **Note:**  
A positive value in the 'LoadPoint property is reset to 0 (zero) when a list/drop box **LOAD** directive is executed. A value of -1, which indicates 'append', is not reset by the **LOAD** directive.

This functionality allows drop boxes to be loaded a block of records at a time. _(The LoadPoint setting of -2 was added in PxPlus 2019.)_  
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
**[ScrollWheel](../properties/scrollwheel.md)** |  Set scroll wheel increment. This property is used to define how many lines each click of the scroll wheel will move a list box or grid. Possible values are: |  0 |  Scroll wheel support (all events go to parent window).  
---|---  
1 |  Scroll only if the control has focus (mouse can hover on or off control).  
2 |  Scroll only if the control has focus (mouse must be hovered over control).  
3 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 1).  
4 |  If control does not have focus, then scroll when mouse hovers over this control (otherwise, same as 2).  
**[SelectBackColor$](../properties/selectbackcolor_.md)  
[SelectBackColour$](../properties/selectbackcolor_.md)** |  Sets the background color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The SelectBackColor$ (or SelectBackColour$) property was added in PxPlus 2018.)_  
**[SelectCount](../properties/selectcount.md)** |  Number of items selected: Set this property to zero to deselect all items. See [**Multiple Selections**](multipleselect.md).  
**[SelectIndex](../properties/selectindex.md)** |  Index to 'SelectItem: Set this property to point to a selected element; e.g. 1 points to the first item selected, 2 points to the second item selected, etc. See [**Multiple Selections**](multipleselect.md).  
**[SelectItem](../properties/selectitem.md)** |  Item number in list selected: This property returns the sequential location within the list of the item being pointed to by 'SelectIndex property. See [**Multiple Selections**](multipleselect.md).  
**[SelectTextColor$](../properties/selecttextcolor_.md)  
[SelectTextColour$](../properties/selecttextcolor_.md)** |  Sets the text color. For information on valid color names and color specifications, see **[Color Properties](colour_properties.md)**. _(The SelectTextColor$ (or SelectTextColour$) property was added in PxPlus 2018.)_  
**[Sep$](../properties/sep_.md)** |  Separator character between each field, column or data point.  
**[SepLoad$](../properties/sepload_.md)** |  Separator character for each row or data set.  
**[SepSort$](../properties/sepsort_.md)** |  This property is used to define a character, which will separate the contents of a list view column that is to be displayed from the values of the column as it will be used for column sorting. Often when displaying data in a list view, it is desirable to have what is displayed be different from how the value should be sorted. For instance, the display value of a list view may be a bitmap or some other graphical information, which is not able to be sorted. If you define a SepSort$ value, any data in the column before the specified character will define what will be displayed, and data following the character will be used for the purposes of sorting.  
**[SignalOnExit](../properties/signalonexit.md)** |  This property controls whether a 'Change' signal will be generated when the control (or region of a grid control) is exited regardless of whether the control's value changes. Normally, controls only signal changes when the control loses focus **_and_** the contents have changed. Setting 'SignalOnExit allows a change signal to also be generated whenever focus leaves the control (or region for grid). |  0 |  No signal on exit unless control value has changed.  
---|---  
1 |  Signal on exit regardless of whether value has changed (on grid, signals whenever changing cell).  
2 |  Signal when changing row or on exit of grid (sets column value to 0 and row value to last row exited)._**(Grid Only)**_  
3 |  Signal when exiting the grid (sets column and row values to zero). **_(Grid Only)_**  
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
