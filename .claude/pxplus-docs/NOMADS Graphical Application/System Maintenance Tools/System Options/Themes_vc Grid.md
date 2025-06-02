# Themes and Visual Classes

**Grid Properties**|   
---|---  
  
This table lists all the **_Grid_** properties:

**Property** |  **Description**  
---|---  
**Attributes**  
_Auto Track_ |  Controls the automatic tracking of the contents of a grid relative to movement of the scrollbars (vertical/horizontal). By default, when a scrollbar position is changed by dragging the "thumb", the grid will **_not_** follow the movement until the thumb is released. This reduces the screen re-draw overhead within the system but does not allow the user to view the data during the scroll operation. This property controls whether the grid is to be updated while the thumb is being moved -- in effect having the grid contents track the thumb position. Click the drop-down arrow for available selections: |  _Default_ |  Default setting is _No tracking_.  
---|---  
_No tracking_ |  The grid will not track thumb movements.  
_Track vertical scrollbar_ |  The grid will track thumb movements on the vertical scrollbar.  
_Track horizontal scrollbar_ |  The grid will track thumb movements on the horizontal scrollbar.  
_Track both scrollbars_ |  The grid will track thumb movements on both scrollbars.  
  
_(Auto Track property was added in PxPlus 2018.)_  
  
_Borderless_ |  Control has no border or frame.  
_Enter Mode_ |  Defines how the ENTER key will be processed for the grid. Click the drop-down arrow for available selections: |  _Default_ |  Default setting is _Normal_.  
---|---  
_Normal (Edit)_ |  Normal processing (edits cell).  
_Move right, exit last column_ |  Move right across a grid by column, exit on last column.  
_Move right, wrap_ |  Move right across a grid by column, wrap to first column of next row, exit on last column of last row.  
_Move down, hold at bottom_ |  Move down by row, hold on last row.  
_Move down, return to top_ |  Move down by row, return to column 1, hold on last row.  
  
_(Enter Mode property was added in PxPlus 2018.)_  
  
_Grid Auto Column Size_ |  Controls the automatic adjustment of column sizes so that the total space occupied by the columns will fill the control width. Click the drop-down arrow for a list of available selections: _As is_ , _Off, On_. When this property is set to **_On_** , the system will adjust all columns in the control so that the sum of the column widths will completely fill the control width exclusive of any scrollbars that may be present. Once set, any resizing of the control will again re-apply the automatic columns sizing logic. When adjusting the column sizes, the system will compute the new size based on percentages. **_Example:_**

> Suppose that a grid has three columns: Column 1 is 40 pixels wide, Column 2 is 10 pixels wide, and Column 3 is 50 pixels wide.  
>   
>  If this grid has _Auto Column Size_ enabled, it would determine that Column 1 was 40% of the total column width, Column 2 was 10%, and Column 3 was 50%. These columns would each be adjusted based on the total width of the control to retain the same percentages. Therefore, if the grid itself was 150 pixels wide, Column 1 would become 150*40%=60 pixels, Column 2 would become 150*10%=15 pixels, and Column 3 would become 150*50%=75 pixels.

_Grid Auto Column Size property was added in PxPlus 2018.)_  
_Grid Hide Buttons_ |  Hides query buttons or drop box icons associated with grid cells if there is a bitmap (thus, the bitmap is all that shows on a transparent background). _(Grid Hide Buttons property was added in PxPlus 2020.)_  
_Grid lines_ |  Controls the display of lines for the grid. Click the drop-down arrow for available selections: |  _Default_ |  Default setting is _Full grid_.  
---|---  
_No lines_ |  No horizontal and vertical lines.  
_Full grid_ |  Both horizontal and vertical lines.  
_Vertical lines_ |  Vertical lines only, no horizontal lines.  
_Horizontal lines_ |  Horizontal lines only, no vertical lines.  
  
_(Grid lines property was added in PxPlus 2018.)_  
  
_Header Height_ |  Controls the height of the grid header in pixels. Setting this property to -1 restores the height to its default size. Setting this property to 0 results in no header. _(Header Height property was added in PxPlus 2020.)_  
_Row Height_ |  Number of lines high per row of grid. Valid values are >= 1. Allow for word-wrap. Can also be set to -1 to use the default row height for the grid. _(Row Height property was added in PxPlus 2020.)  
(Support to allow a setting of -1 was added in PxPlus 2024.)_  
_Suppress Header_ |  Suppress grid headers. Possible values are: |  0 |  Headers not suppressed.  
---|---  
1 |  Row header suppressed (left side).  
2 |  Column header suppressed (top).  
3 |  Both headers suppressed.  
  
Suppression is done by setting the header height/width to 0. When not suppressed, the height/width will return to the last value.

_(Suppress Header property was added in PxPlus 2021.)_  
  
_Tab Mode_ |  Defines how the TAB key will be processed with the grid control. Click the drop-down arrow for available selections: |  _Default_ |  Default setting is _Normal (Exit)_.  
---|---  
_Normal (Exit)_ |  Normal processing (exits grid).  
_Move right, exit last column_ |  Move right across a grid by column, exit on last column.  
_Move right, wrap_ |  Move right across a grid by column, wrap to first column.  
_Move down, hold at bottom_ |  Move down by row, hold on last row.  
_Move down, return to top_ |  Move down by row, return to column 1, hold on last row.  
  
_(Tab Mode property was added in PxPlus 2018.)_  
  
**Colors**  
_Click the dotted_ _Query button or double click inside the cell to access_ **[Color Selections](../../Appendix/Color%20Selections.md)** _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The color tick and color tip were added in PxPlus 2018.)  
__(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Background_ |  Background color of the control in its default state.  
_Button Color_ |  Background color for system-generated buttons in a grid, including Drop Box buttons and Query buttons. This property will also be applied to cells with the **['Lock](../../../properties/lock.md)** property set to 1 only when creating a **["Button"](../../../directives/grid.htm#Mark8)** cell type, providing that the **[BackColor$](../../../properties/backcolor_.md)** property has not been set specifically for that cell. _(Button Color property was added in PxPlus 2021.)_  
_CB Mark Color_ |  Color of the check mark in the check box. _(CB Mark Color property was added in PxPlus 2025.)_  
_Current Cell Color_ |  Background color for the current cell. _(Current Cell Color property was added in PxPlus 2018.)_  
_Current Cell Text Color_ |  Text color for current cell. _(Current Cell Text Color property was added in PxPlus 2024.)_  
_Fill Color_ |  Defines the color to be used to fill in the empty regions of a grid (blank space to the right and below the grid).  
_Foreground_ |  Foreground text color of the control in its default state.  
_Foreground Button Color_ |  Foreground text color for system-generated buttons in a grid, including drop box buttons and query buttons. _(Foreground Button Color property was added in PxPlus 2024.)_  
_Grid Hilight Color 1_ |  Background color - alternating rows. (Will not display if **[Background](Themes_vc%20Grid.htm#background)** is set to a color other than Default.) _(Grid Hilight Color 1 property was added in PxPlus 2018.)_  
_Grid Hilight Color 2_ |  Background color - alternating three rows. (Will not display if **[Background](Themes_vc%20Grid.htm#background)** is set to a color other than Default.) _(Grid Hilight Color 2 property was added in PxPlus 2018.)_  
_Header Background Color_ |  Background color for the **_top row only_** (Row -1) and does **_not_** affect the leading left column (Colno -1). _(Header Background Color property was added in PxPlus 2018.)_  
_Header Line Color_ |  Color of the border lines drawn between columns when the **['ExcelStyle](../../../properties/excelstyle.md)** property is set for the **_top row only_** of the grid (Row -1) and does **_not_** affect the leading left column (Colno -1). _(Header Line Color property was added in PxPlus 2025.)_  
_Header Text Color_ |  Color of the text for the **_top row only_** (Row -1) and does **_not_** affect the leading left column (Colno -1). _(Header Text Color property was added in PxPlus 2018.)_  
_Line Color_ |  Color of the lines drawn between rows and columns. _(Line Color property was added in PxPlus 2020.)_  
_Row Header Background Color_ |  Background color for the **_leading left column only_** (Colno -1) and does **_not_** affect the top row (Row -1). _(Row Header Background Color property was added in PxPlus 2024.)_  
_Row Header Line Color_ |  Color of the border lines drawn between rows when the **['ExcelStyle](../../../properties/excelstyle.md)** property is set for the **_leading left column only_** of the grid (Colno -1) and does **_not_** affect the grid top row (Row -1). _(Row Header Line Color property was added in PxPlus 2025.)_  
_Row Header Text Color_ __|  Color of the text for the **_leading left column only_** (Colno -1) and does **_not_** affect the top row (Row -1). _(Row Header Text Color property was added in PxPlus 2024.)_  
_Track Color_ |  Header cells corresponding to a cell that currently has focus are switched to the color set by this property as the user moves around the grid. This provides a visual cue to the user for which column and row they are on currently. Only header cells that use their default color will change to the tracking color. _(Track Color property was added in PxPlus 2018.)_  
**Colors (States)**  
_CB Disable Mark Color_ |  Color of the check mark in the disabled check box. _(CB Disable Mark Color property was added in PxPlus 2025.)_  
_Lock Background Color_ |  Background color when the cell is locked. _(Lock Background Color property was added in PxPlus 2024.)_  
_Lock Button Color_ |  Background color for locked system-generated buttons in a grid, including drop box buttons and query buttons. _(Lock Button Color property was added in PxPlus 2025.)_  
_Lock Foreground Button Color_ |  Foreground text color for locked system-generated buttons in a grid, including drop box buttons and query buttons. _(Lock Foreground Button Color property was added in PxPlus 2025.)_  
_Lock Text Color_ |  Foreground text color when the cell is locked. _(Lock Text Color property was added in PxPlus 2024.)_  
**Font**  
_Font_ |  Click the dotted Query button or double click inside the cell to specify font properties and attributes such as _Bold_ , _Italics_ , etc. See **[Font Properties](Font%20Properties.md)**. _(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
_Header Font_ |  Defines the font for the **_top row only_** (Row -1) and does **_not_** affect the leading left column (Colno -1). See **[Font Properties](Font%20Properties.md)**. _(Header Font property was added in PxPlus 2018.)  
__(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
**Other**  
_iNomads Class_ |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(iNomads Class property was added in PxPlus 2020.)_  
  
## See Also

**[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**
