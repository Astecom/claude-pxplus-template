# Step 6: File Maintenance Field Layout  
  
**Enhanced Layout**|   
---|---  
  
Starting with PxPlus 2024, the _Enhanced_ layout is the default layout used when creating a new file maintenance panel. This can be changed by setting the **[Layout](Object%20Definition.htm#layout)** option in **Step 1: Definition**.

See the tutorial **[How to Use the Enhanced Layout in File Maintenance Generator](../../../How%20To/How%20to%20Use%20Enhanced%20Layout.md)**.

#### **Important Note:**  
The _Enhanced_ layout is **_not_** backwards compatible with previous versions.

With the _Enhanced_ layout, options are provided for formatting individual rows in the panel layout as _Full_ , _Half_ , _Third_ and _Quarter_ sections. You can choose which rows to format as Full sections, two Half sections, three Third sections, four Quarter sections or one Half and two Quarter sections. When the NOMADS panel and Webster+ HTML page are generated, each section is treated as true _Full_ , _Half_ , _Third_ or _Quarter_ sections.

In NOMADS, the width of the generated panel is calculated by using the _maximum_ width of the controls added to the different Section sizes. This calculation takes into account the following:

  * the widest _Full_ section
  * the widest _Half_ section (multiplied by two)
  * the widest _Third_ section (multiplied by three)
  * the widest _Quarter_ section (multiplied by four)



It is strongly recommended to avoid adding wide controls to smaller Section sizes, as this will result in wide panels with blank space on the right side.

Define the layout for the file maintenance Main panel and any folder panels:

  * Select the **[Fields](Field%20Layout.htm#fields_list)** to add to the panel layout
  * **[Add Objects](Adding%20Objects.md)**
  * Define **[Folder Options](Folder.htm#folderoptions)** and specify the **[Folder Location](Enhanced%20Layout.htm#folderloc)**
  * Add **[Dependency Definitions](Dependency.md)** to panel controls
  * Select **[Right-Click Menu](Enhanced%20Layout.htm#rightclick)** options for manipulating the panel layout
  * **[Preview](Preview.md)** the layout



**_Example:_**

The _Layout Grid_ initially displays all rows as _Half_ sections. Right clicking inside the _Layout Grid_ displays a menu showing the Section size options:

> By default, the _Layout Grid_ displays each row as two Half sections when creating a new file maintenance panel. This can be changed by right clicking on a section and selecting a Section size option from the **[Right-Click Menu](Enhanced%20Layout.htm#rightclick)**.

The Section size options are enabled or disabled, depending on the Section size of the currently selected cell:

  * When the current cell is a _Half Section_ , only the _Full Section_ and _Quarter Section_ options are enabled (see above example).
  * When the current cell is a _Third Section_ , only the _Full Section_ option is enabled.
  * A cell formatted as a _Half Section_ or _Quarter Section_ cannot be made into a _Third Section_.
  * The _Flex Section_ option is available if a Webster+ HTML Page is being generated.



**_Example:_**

This panel _Layout Grid_ shows rows formatted as _Full_ , _Half_ , _Third_ and _Quarter_ sections. Below that is shown the NOMADS panel at run time:

> ##  Section Size Formatting

If the Section size formatting of a row is changed, the formatting of any non-populated rows below it will also change, providing that the non-populated rows had the same original formatting.

If the first cell on a non-populated row is changed, all cells on that row will be formatted to the same size.

**_Example:_**

Changing the current row from _Half_ section to _Quarter_ section changed the non-populated cells on the same row, as well as the two non-populated rows below it. The populated rows in the lower half of the panel remain unchanged:

  
**_BEFORE_** |    
**_AFTER_**  
---|---  
  
When all cells on a row are populated and any cell on that row is changed to a _Full_ section, the other populated cells on that row will be dropped. This means that data dictionary fields will be returned to the _Fields_ list box. If any of the cells on the row contained an object, a message will display prior to removing any objects from that row.

**_Example:_**

Changing the second cell (Email Address) from _Quarter_ section to _Full_ section dropped the other data dictionary fields on that row and returned them to the _Fields_ list box:

  
**_BEFORE_** |    
**_AFTER_**  
---|---  
  
When the Section size of a cell is increased (e.g. from _Third_ section to _Half_ section), the other cells on that row are moved to the right. If there is no longer room for the cell, the populated cells will be dropped. This means that data dictionary fields will be returned to the _Fields_ list box. If any of the cells on the row contained an object, a message will display before removing any objects from that row.

If there is no room to increase the size of the last cell on the right, a message will display, except if changing the cell to a _Full_ section. In that case, the other populated cells on that row will be dropped.

**_Example:_**

Increasing the size of the first cell (Department) from _Quarter_ section to _Half_ section moved the other cells on that row to the right:

  
**_BEFORE_** |    
**_AFTER_**  
---|---  
  
##  Right-Click Menus

Right clicking either on a cell or row in the _Layout Grid_ displays the following menu options:

#### **Note:**  
When right clicking on a **_Key_** field, only certain options are available.  
  
The Section size options (_Full_ , _Half_ , _Third_ , _Quarter_ and _Flex_) do not apply if using the **[SmartPhone Layout](Field%20Layout.htm#smartphone)**.

_Clear Current Cell_ |  Clears the contents of the currently selected cell. This option is not available when the current cell contains a Key field. If the cell contains a data dictionary field, the cleared field will be returned to the _Fields_ list box.  
---|---  
_Clear All Cells_ |  Clears the contents of all cells (**_except_** Key fields) on the currently selected panel or folder tab. Prior to clearing all cells, a message will display.  
_Insert Full Row Above_ |  A new full row is inserted above the currently selected row, and the last row of the grid will be deleted. This will push all subsequent rows down.  
_Delete Row_ |  The current row is deleted, and an empty row will be added to the end of the grid. This will move all subsequent rows up. If the current row contains a Key field, a message will display.  
_Cut Cell  
Paste Cell(s)_ |  Cuts the contents of a single cell and then pastes the contents into a destination cell. If multiple cells are to be cut and pasted, first cut each cell one at a time in the order in which they are to be pasted and then use the _Paste Cell(s)_ option to paste them all at once into the destination location. To ensure that all cut cells are successfully pasted, it is recommended to remain in the **Step 6: Fields** panel until the cut/paste process has been completed. Cells can be cut and pasted within the same panel or between different panels, such as from the Main panel to a folder panel and vice versa. The _Cut Cell_ option is not available if the cell contains a Key field, Horizontal Line, Section Break, Full Section Break or Folder Location. The _Paste Cell(s)_ option is available only when one or more cells have been previously cut.  
_Full Section_ |  A full section. A _Full_ section can be changed to any other Section size.  
_Half Section_ |  **_(Available when current cell is a Full or Quarter Section)_** A half section. A _Half_ section can be changed to any other Section size **_except_** a _Third_ section. The alternative is to insert a Full row by using the **[Insert Full Row Above](Enhanced%20Layout.htm#insert_full)** option and then format the Full row as a _Third Section_. Fields or objects can be cut/paste or dragged/dropped into the new row.  
_Third Section_ |  **_(Available when current cell is a Full Section)_** A third section. A _Third_ section can only be changed to a _Full_ section.  
_Quarter Section_ |  **_(Available when current cell is a Full or Half Section)_** A quarter section. A _Quarter_ section can be changed to either a _Full_ or _Half_ section. A _Quarter_ section cannot be made into a _Third_ section.  
_Flex Section_ |  **_(Applicable for HTML Pages Only)_** Available only when the current cell is populated. A flex section will occupy the width of the largest element inside the section; thus, the number of flex elements that can appear across the page will vary based on contents. A _Flex_ section can be changed to any other Section size.  
_Lock/Unlock_ |  Locks or unlocks a data dictionary field. This option is applicable only for data dictionary fields (**_except_** for Key fields or fields set as _Read Only_ or _Required_). When a field is locked, "Locked" displays at the end of the **[Info Line](Field%20Layout.htm#infoline)** for that field. When a field with a Query button is locked, the Query button does not display.  
_Add Horizontal Line_ |  Adds a horizontal line to the currently selected cell. The _Layout Grid_ displays the text * Horizontal Line *. The length of the line depends on whether the current cell is a _Full_ , _Half_ , _Third_ or _Quarter_ section.  
_Folder Location_ |  **_(Available only when_ [Folder](Folder.md) _check box is selected)_** Adds the Folder control to the current row on the Main panel only. See **[Adding a Folder](Folder.md)**. The row displays the text _* Folder Location *_ , and the row size changes to a _Full_ section if it was not a _Full_ section before (i.e. _Half_ , _Third_ , _Quarter_ or _Flex_). If the row contains data dictionary fields, the field(s) will be returned to the _Fields_ list box. If the row contains object controls, a message will display prior to removing the object(s). If **[Folder Tabs](Folder.htm#foldertabs)** have been defined but no Folder Location has been added, the Folder control will be located at the bottom of the Main panel. This option is not available when the current row contains a Key field, or you are not on the Main panel, or a Folder Location has already been added. _(Support to automatically format the row as a Full section when specifying the Folder location was added in PxPlus 2025.)_  
_Add Object_ |  Displays a list of objects to add or edit. See **[Adding Objects](Adding%20Objects.md)**.  
  
Right clicking on a column header in the _Layout Grid_ displays the following menu option:

**Menu Option** |  **Description**  
---|---  
_Clear All Cells_ |  Clears the contents of all cells, **_except_** Key fields, on the currently selected panel or folder tab. Prior to clearing all cells, a message will display.  
  
## See Also

**[Enhanced Layout Sample Panels](Enhanced%20Samples.md)**  
**[Two-Column Layout](Two_column.md)**
