# Themes and Visual Classes

**List_Box Properties**|   
---|---  
  
This table lists all the **_List_Box_** properties:

#### **Note:**  
See **[Query Colors](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Colors.md)** for information on applying color settings and Themes to a query display.

**Property** |  **Description**  
---|---  
**Attributes**  
_Borderless_ |  Control has no border or frame.  
_Disable Sorting_ |  Clicking on the column heading does not cause list box elements to be sorted. The column headings will not have the 3D button look but will appear flat. Column resizing is still allowed. _(Disable Sorting property was added in PxPlus 2018.)_  
**Attributes (ReportView)**  
_Auto Column Size_ |  When selected, columns will automatically be proportionally resized when the list box is resized. Default is **_Off_**. _(Auto Column Size property was added in PxPlus 2018.)_  
_Center Text Vertically_ |  When selected, text will be centered vertically in the list box row **_only_** when **[Lines Per Row](Themes_vc%20Listbx.htm#linesperrow)** is > 1\. Text that exceeds the column width is truncated and an _ellipsis_ () is displayed. When this check box is **_not_** selected (_Default_), text is aligned to the top of the list box row, and text that exceeds the column width is word wrapped. _(Center Text Vertically property was added in PxPlus 2019.)_  
_Column Size Lock_ |  When selected, the report view column headers cannot be resized by dragging. Default is **_Off_**. _(Column Size Lock property was added in PxPlus 2018.)_  
_Grid lines_ |  Controls the display of grid lines between the rows and columns. Options are _No lines**(Default)**_ , _Full grid_ , _Vertical lines_ , _Horizontal_ _lines_. _(Grid lines property was added in PxPlus 2018.)_  
_Header Height_ |  Controls the height of the header in report view lists in pixels. Setting this property to -1 restores the height to its default size. Setting this property to 0 results in no header. _(Header Height property was added in PxPlus 2020.)_  
_Header Lock_ |  Locks the column headers so that the user is unable to click on them or drag them. Default is **_Off_**. _(Header Lock property was added in PxPlus 2018.)_  
_Lines Per Row_ |  Number of lines high per row. Valid values are >= 1. Allows for word-wrap. Can also be set to -1 to use the default lines per row for the list box. _(Lines Per Row property was added in PxPlus 2018.)  
(Support to allow a setting of -1 was added in PxPlus 2024.)_  
_Sort Options_ |  Controls how column data is sorted. Click the drop-down arrow for available selections: |  _Default_ |  _Null values at end_  
---|---  
_None (Raw binary sort)_ |  _Ignore case/Nulls last_  
_Ignore case_ |  _Ignore accents/Nulls last_  
_Ignore accents_ |  _Ignore case & accents/Nulls last_  
_Ignore case & accents_ |  __  
  
The _Default_ setting will use the system _StdSortOrder_ setting. See the **'[OPTION](../../../mnemonics/option.md)'** mnemonic or the ['**SortOrder$**](../../../properties/sortorder.md) property.

_(Sort Options property was added in PxPlus 2018.)_  
  
**Colors**  
_Click the dotted_ _Query button or double click inside the cell to access_ **[Color Selections](../../Appendix/Color%20Selections.md)** _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The color tick and color tip were added in PxPlus 2018.)  
__(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Background_ |  Background color of the control in its default state.  
_Foreground_ |  Foreground text color of the control in its default state.  
_Frame Color_ |  Color of the frame/border around the control. _(Frame Color property was added in PxPlus 2024.)_  
_Header Background Color_ |  Sets the background color for the list view header. _(Header Background Color was added in PxPlus 2016.)_  
_Header Text Color_ |  Sets the color of the text for the list view header. _Header Text Color property was added in PxPlus 2016.)_  
_Hilight_ _Color 1_ |  Background color - alternating lines. _(Hilight Color 1 property was added in PxPlus 2016.)_  
_Hilight_ _Color 2_ |  Background color - alternating _three_ lines. _(Hilight Color 2 property was added in PxPlus 2016.)_  
_Hotlink Color_ |  Color applied to the text of a column defined as a hotlink to provide a visual cue. For information on defining a hotlink column, see **[Hotlink](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#listviewdef)**. _(Hotlink Color property was added in PxPlus 2018.)_  
_Line Color_ |  **_(Applicable to Report View and Tree View Only)_** Color of the lines drawn between rows and columns of a report view list box or between entries of a tree view list box. _(Line Color property was added in PxPlus 2020.)_  
**Colors (States)**  
_Disable Background Color_ |  Background color when the control is disabled. _(Disable Background Color property was added in PxPlus 2022.)_  
_Disable Text Color_ |  Foreground text color when the control is disabled. _Not supported for list view._ _(Disable Text Color property was added in PxPlus 2022.)_  
_Focus Background Color_ |  Background color when the control has focus. _(Focus Background Color property was added in PxPlus 2019.)_  
_Focus Text Color_ |  Text color when the control has focus. _(Focus Text Color property was added in PxPlus 2019.)_  
_Hover Background Color_ |  **_(Applicable to Report View Only)_** Background color when the mouse is over a list view row. _(Hover Background Color property was added in PxPlus 2018.)_  
**Font**  
_Font_ |  Click the dotted Query button or double click inside the cell to specify font properties and attributes such as _Bold_ , _Italics_ , etc. See **[Font Properties](Font%20Properties.md)**. _(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
_Header Font_ |  Defines the font for the list view header. See **[Font Properties](Font%20Properties.md)**. _(Header Font property was added in PxPlus 2016.)  
__(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
**Other**  
_iNomads Class_ |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(iNomads Class property was added in PxPlus 2020.)_  
  
## See Also

**[VarList_Box Properties](Themes_vc%20Varlist.md)  
[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**
