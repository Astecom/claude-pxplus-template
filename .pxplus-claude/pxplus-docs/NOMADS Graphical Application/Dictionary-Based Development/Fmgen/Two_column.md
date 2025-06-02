# Step 6: File Maintenance Field Layout

**Two-Column Layout**|   
---|---  
  
The Two-Column layout is the standard layout used to define file maintenance panels prior to PxPlus 2024.

With the Two-Column layout, the **[Layout Grid](Field%20Layout.htm#layout_grid)** defaults to two columns referred to as _Left Side_ and _Right Side_. Instead of treating each side as a true Half, the generated NOMADS panel makes each side as wide as it needs to be to accommodate the widest control on that side. On the other hand, the generated Webster+ HTML page treats each side as Half of the Web page.

Define the layout for the file maintenance Main panel and any folder panels:

  * Select the **[Fields](Field%20Layout.htm#fields_list)** to add to the panel layout
  * **[Add Objects](Adding%20Objects.md)**
  * Define **[Folder Options](Folder.htm#folderoptions)** and specify the **[Folder Location](Two_column.htm#folderloc)**
  * Add **[Dependency Definitions](Dependency.md)** to panel controls
  * Select **[Right-Click Menu](Two_column.htm#rightclick)** options for manipulating the panel layout
  * **[Preview](Preview.md)** the layout



**_Example:_**

This shows the two-column _Layout Grid_. The right-click popup menu is also displayed:

> When creating a new file maintenance panel, the _Layout Grid_ displays _Left Side_ and _Right Side_ columns by default. The maximum is two columns. Individual rows can be changed from _Half Row_ to _Full Row_ by using the right-click menu.

If the _Use SmartPhone Layout_ check box is selected, only a single-column _Layout Grid_ will display.

##  Right-Click Menus

Right clicking either on a cell or row in the _Layout Grid_ displays the following menu options:

#### **Note:**  
When right clicking on a **_Key_** field, only certain options are available.

_Clear Current Cell_ |  Clears the contents of the currently selected cell. This option is not available when the current cell contains a Key field. If the cell contains a data dictionary field, the cleared field will be returned to the _Fields_ list box.  
---|---  
_Clear All Cells_ |  Clears the contents of all cells (**_except_** Key fields) on the currently selected panel or folder tab. Prior to clearing all cells, a message will display. _(The Clear All Cells option was added in PxPlus 2021.)_  
_Insert Cell Above_ |  Inserts a blank cell above the currently selected cell. If on a Half-row cell, all Half-row cells below (in the same column) will be moved down one row until a Full-row cell is encountered. When a Full-row cell is encountered, if the cell being pushed down is empty, it will be discarded and the insertion ends. If the cell being pushed down into the Full row is not empty, a new row with the contents of the cell being pushed down will be inserted before the Full row, and the last row of the grid will then be deleted. If on a Full-row cell, a new row will be inserted above the current row, and the last row of the grid will be deleted. This will push all subsequent rows down. If using the **[SmartPhone Layout](Field%20Layout.htm#smartphone)**, inserts a new cell above the currently selected cell, and the last cell of the grid will be deleted. This will push all subsequent cells down. _(The Insert Row Above option was changed to Insert Cell Above in PxPlus 2022 Update 1.)_  
_Delete Cell_ |  Deletes the currently selected cell. This option is not available if the current cell contains a Key field. If on a Half-row cell, all Half-row cells below (in the same column) will be moved up one row until a Full-row cell is encountered. When a Full-row cell is encountered, if the row above the Full-row cell is empty (that is, nothing in either column), the row above will be deleted, which effectively moves everything below up one row. A new empty row will be added to the end of the grid. If on a Full-row cell, the current row will be deleted, and an empty row will be added to the end of the grid. This will move all subsequent rows up. If using the **[SmartPhone Layout](Field%20Layout.htm#smartphone)**, deletes the currently selected cell, and an empty cell will be added to the end of the grid. This will move all subsequent cells up. _(The Delete Row option was changed to Delete Cell in PxPlus 2022 Update 1.)_  
_Cut Cell  
Paste Cell(s)_ |  Cuts the contents of a single cell and then pastes the contents into a destination cell. If multiple cells are to be cut and pasted, first cut each cell one at a time in the order in which they are to be pasted and then use the _Paste Cell(s)_ option to paste them all at once into the destination location. To ensure that all cut cells are successfully pasted, it is recommended to remain in the **Step 6: Fields** panel until the cut/paste process has been completed. Cells can be cut and pasted within the same panel or between different panels, such as from the Main panel to a folder panel and vice versa. The _Cut Cell_ option is not available if the cell contains a Key field, Horizontal Line, Section Break, Full Section Break or Folder Location. The _Paste Cell(s)_ option is available only when one or more cells have been previously cut. _(The Cut Cell and Paste Cell(s) options were added in PxPlus 2021.)_  
_Full Row_ |  Changes the selected Half row (in one column) to a Full row (across both columns) **_except_** when a Key field is in the adjoining cell. In that case, a message displays, and the Half row is not changed. This option is not applicable if using the **[SmartPhone Layout](Field%20Layout.htm#smartphone)**.

#### **Note:**  
If the adjoining cell contains a data dictionary field (other than a Key field), the field will be cleared from the grid and returned to the _Fields_ list box.  
  
If the adjoining cell contains fonted text, the fonted text will be removed.

_(The checking for Key fields was added in PxPlus 2021.)_  
_Half Row_ |  Changes the selected Full row (across both columns) to a Half row in **_each_** column. The Half row in the _Right Side_ column will be blank. This option is not applicable if using the **[SmartPhone Layout](Field%20Layout.htm#smartphone)**.  
_Lock/Unlock_ |  Locks or unlocks a data dictionary field. This option is applicable only for data dictionary fields (**_except_** for Key fields or fields set as _Read Only_ or _Required_). When a field is locked, "Locked" displays at the end of the **[Info Line](Field%20Layout.htm#infoline)** for that field. When a field with a Query button is locked, the Query button does not display. _(The Lock/Unlock option was added in PxPlus 2021.)_  
_HTML Section Size_ |  **_(Applicable for HTML Pages Only)_** Sets the width of an HTML section. Possible values are _Half_ , _Third_ , _Quarter_ and _Flex_. Same as **[HTML Section Size](Two_column.htm#section_size)** option when right clicking on a column header. _(The HTML Section Size option was added in PxPlus 2022.)_  
_Add HTML Section Break_ |  **_(Applicable for HTML Pages Only)_** Adds an HTML section break in the current column only. See Webster+ **[[section _xxx_]](../../../Webster/Short%20Codes.htm#section)** short code. This option is not available when the current row contains a Key field. A section is a block of data elements or controls that occupies a specified portion of the page width. Sections are placed across the page until the available space is occupied at which point further sections will start below. An HTML section break indicates the end of one section and the beginning of the next section, which becomes apparent when the panel is resized. See **[HTML Sections](Two_column.htm#html_sections)**. _(The Add HTML Section Break option was added in PxPlus 2021.)_  
_Add Full HTML Section Break_ |  **_(Applicable for HTML Pages Only)_** Adds a full HTML section break across both columns. See Webster+ **[[section _xxx_]](../../../Webster/Short%20Codes.htm#section)** short code. This option is not available when the current row contains a Key field. A section is a block of data elements or controls that occupies a specified portion of the page width. Sections are placed across the page until the available space is occupied at which point further sections will start below. An HTML section break indicates the end of one section and the beginning of the next section, which becomes apparent when the panel is resized. See **[HTML Sections](Two_column.htm#html_sections)**.

#### **Note:**  
Adding a full HTML section break before a row(s) may be necessary to align subsequent rows vertically in the HTML output.

_(The Add Full HTML Section Break option was added in PxPlus 2021.)_  
_Add Half Horizontal Line_ |  Adds a half horizontal line. The _Layout Grid_ displays the text * Horizontal Line *. This option is not available when the current row contains a Key field. _(The Add Half Horizontal Line option was added in PxPlus 2022.)_  
_Add Full Horizontal Line_ |  Adds a full horizontal line. In a two-column layout, the line extends across both columns. The _Layout Grid_ displays the text * Horizontal Line *. This option is not available when the current cell contains a Key field.

#### **Note:**  
If the adjoining Half row contains a Key field, a message will display, and the horizontal line will not be added.

#### If using the **[SmartPhone Layout](Field%20Layout.htm#smartphone)**, adds a full horizontal line. The _Layout Grid_ displays the text * Horizontal Line *.

_(The checking for Key fields was added in PxPlus 2021.)_  
_Folder Location_ |  **_(Available only when_ [Folder](Folder.md) _check box is selected)_** Adds the Folder control to the current row on the Main panel only. See **[Adding a Folder](Folder.md)**. The row displays the text _* Folder Location *_ , and the row size changes to a _Full_ section if it was not a _Full_ section before (i.e. _Half_ , _Third_ , _Quarter_ or _Flex_). If the row contains data dictionary fields, the field(s) will be returned to the _Fields_ list box. If the row contains object controls, a message will display prior to removing the object(s). If **[Folder Tabs](Folder.htm#foldertabs)** have been defined but no Folder Location has been added, the Folder control will be located at the bottom of the Main panel. This option is not available when the current row contains a Key field, or you are not on the Main panel, or a Folder Location has already been added. _(The Folder Location option was added in PxPlus 2023 Update 1.)  
__(Support to automatically format the row as a Full section when specifying the Folder location was added in PxPlus 2025.)_  
_Add Object_ |  Displays a list of objects to add or edit. See **[Adding Objects](Adding%20Objects.md)**. _(The Add Object option was added in PxPlus 2021 Update 1.)_  
  
Right clicking on a column header in the _Layout Grid_ displays the following menu option:

**Menu Option** |  **Description**  
---|---  
_HTML Section Size_ |  **_(Applicable for HTML Pages Only)_** Sets the width of an HTML section. A section is a block of data elements or controls that occupies a specified portion of the page width. Multiple sections can be placed across the page until the available space is occupied at which point further sections will start below. For example, you can have two Half sections, three Third sections, four Quarter sections or one Half and two Quarter sections. Possible values are: |  _Auto_ |  **_Default_** is _Auto_ for the Left side; however, a different value can be set for each side. _Auto_ is the same as a _Half_ section except when nothing is entered in the rows on the Right side in the entire _Layout Grid_ , in which case, _Auto_ makes the Left column a whole section. If using the **[SmartPhone Layout](Field%20Layout.htm#smartphone)**, the default is _Auto_.  
---|---  
_Half_ |  A half section. **_Default_** is _Half_ for the Right side.  
_Third_ |  A third section.  
_Quarter_ |  A quarter section.  
_Flex_ |  A flex section will occupy the width of the largest element inside the section; thus, the number of flex elements that can appear across the page will vary based on contents.  
  
The current setting is indicated with a check mark.

**_HTML Sections_**

When an HTML page is resized, the controls in a section stay together. If the HTML page is resized smaller, a section on the Right side of the _Layout Grid_ will eventually move below a section on the Left side of the _Layout Grid_.

Some section breaks are inserted into the HTML page automatically when it is generated (i.e. when a full line or a line containing two blank cells is encountered). However, at certain times, it may be desirable to control exactly when section breaks occur, especially when using section sizes that result in more than two sections across the page. This can be accomplished by using the right-click menu within the _Layout Grid_ to insert either an **[HTML Section Break](Two_column.htm#section_break)** or a **[Full HTML Section Break](Two_column.htm#section_break)**.  
  
_(The right-click popup menu on a column header was added in PxPlus 2021.)_

## See Also

**[Two-Column Layout Sample Panels](Two_column%20Samples.md)**  
**[Enhanced Layout](Enhanced%20Layout.md)**
