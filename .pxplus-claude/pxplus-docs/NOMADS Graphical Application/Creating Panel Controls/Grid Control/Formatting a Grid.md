# Grid Control 

**Formatting a Grid** |  **__**  
---|---  
  
## Grid Format Definition

Once the grid control is placed on a panel, you can set properties to change the grid's appearance and functionality.

The **Grid Format Definition** dialogue is used to format the grid and specify grid cell attributes. It is invoked by clicking the _Format_ button located on the **Attributes** and **Presets** panels of the **Grid Properties** dialogue.

> This dialogue consists of the following:

_Title_ |  Title to appear above each column. Click the dotted button to invoke a separate dialogue to input a fixed value or expression or to reference a user-defined message.  
---|---  
_Width_ |  Click the dotted button to invoke a separate dialogue for entering the starting width of the column, either a fixed value or an expression.  
_Alignment_ |  Select a text alignment from the drop-down list: _Left, Right, Center_. This alignment is applied to all the rows as they are added to the grid by default.  
_Cell Type_ |  Click the drop-down arrow for a list of available cell types for the column. The various cell types are listed below. Default cell type is _Normal_. |  **Cell Type** |  **Description**  
---|---  
_Button_ |  Cell works like a button if clicked. Cell can be changed if not locked (on double click). Set the **['Lock](../../../properties/lock.md)** property to 1 to achieve standard button behavior for cell.  
_CheckBox_ |  Check box with no 3D effect.  
_CheckBoxRaised_ |  3D check box that looks raised.  
_CheckBoxRecessed_ |  3D check box that looks recessed.  
_CheckMark_ |  Check box that uses a check mark.  
_CheckMarkRaised_ |  Raised check box that uses a check mark.  
_CheckMarkRecessed_ |  Recessed check box that uses a check mark.  
_DropBox_ |  A text cell that, when editing, allows the user to make a selection from a drop-down list. The drop list is loaded from the **['Text$](../../../properties/text_.md)** property. Drop boxes provide a multiple character search capability that makes it easier to search for an exact match in a drop box list. See **[Multiple Character Search](Formatting%20a%20Grid.htm#search)**. _(Multiple character search in drop boxes was added in PxPlus 2019.)_  
_DropBoxHideBtn_ |  Same as _DropBox_ , but the drop-down button is shown only when focus is on the cell. Drop boxes provide a multiple character search capability that makes it easier to search for an exact match in a drop box list. See **[Multiple Character Search](Formatting%20a%20Grid.htm#search)**. _(Multiple character search in drop boxes was added in PxPlus 2019.)_  
_Ellipsis_ |  Normal text cell that will show three dots () if text exceeds displayable area. **Ctrl - Enter** can be used to force a new line in the cell (inserts $0D0A$ into cell value).  
_EllipsisDrop_ |  Same as _Ellipsis_ , but forces the cell to drop vertically only during an edit. **Ctrl - Enter** can be used to force a new line in the cell (inserts $0D0A$ into cell value).  
_FlatButton_ |  A flat button that shows no visible change when clicked. _(Added in PxPlus 2014 Feature Pack 1 - Update 0001)_  
_FlatButtonInOnly_ |  A button that looks flat only when not depressed. _(Added in PxPlus 2014 Feature Pack 1 - Update 0001)_  
_FlatTextButton_ |  Similar to _TextButton_ , but the button is flat and shows no visible change when clicked. _(Added in PxPlus 2014 Feature Pack 1 - Update 0001)_  
_FlatTextButtonInOnly_ |  Similar to _TextButton_ , but the button looks flat only when not depressed. _(Added in PxPlus 2014 Feature Pack 1 - Update 0001)_  
_Lookup_ |  Small button at the right side of the cell used to invoke a lookup. Button image is defined via the cell's **['Bitmap$](../../../properties/bitmap_.md)** property. If no image is given, button shows three dots ().  
_LookupHideBtn_ |  Same as _Lookup_ , but indicates that the button is hidden when the cell is not selected.  
_Multi_line_ |  Normal text cell that can contain multiple lines of text. Press **Enter** or **Ctrl - Enter** to create a new line (value $0D0A$). When the cell being edited contains multiple lines of text, the Up/Down arrow keys can be used to move within the lines of text. Pressing **Enter** twice consecutively exits the cell being edited. _(Added the use of Enter and Up/Down arrow keys when editing a cell in PxPlus 2017 Update 0004)_  
_Normal_ |  Normal text cell that contains one line of data.  
_Query_ |  Same as _Lookup_ , but the user is unable to edit the cell.  
_QueryHideBtn_ |  Same as _LookupHideBtn_ , but the user is unable to edit the cell.  
_SingleLine_ |  Normal text cell that allows for a single line of entry, expanding the cell horizontally according to the overlap rules. It does not allow vertical expansion like a multi-line.  
_TextButton_ |  Similar to _Button_ , except that the text on the button adheres to the **['Align$](../../../properties/align_.md)** property and will wrap. _(Added in PxPlus 2014 Feature Pack 1 - Update 0001)_  
_UseTextEllipsis_ _  
UseTextNormal  
UseTextSingleLine_ |  Similar to _Ellipsis_ , _Normal_ and _SingleLine_ __ respectively, except the value of **['Text$](../../../properties/text_.md)** property is displayed. During input and editing, the **['Value$](../../../properties/value_.md)** property is presented and entered into the cell. Sorting on a column is done using the 'Value$ property. To sort a **_date_** column, set the cell type to _UseTextNormal_ , and then write a sortable value to the cell's 'Value$ property and set the 'Text$ property to the value to be displayed.  
_VarDropBox_ |  A text cell that, when editing, allows the user to make a selection from a drop-down list or enter any other value. Drop list selections are loaded using the **['Text$](../../../properties/text_.md)** property. Drop boxes provide a multiple character search capability that makes it easier to search for an exact match in a drop box list. See **[Multiple Character Search](Formatting%20a%20Grid.htm#search)**. _(Multiple character search in drop boxes was added in PxPlus 2019.)_  
_VarDropBoxHideBtn_ |  Same as _VarDropBox_ , but the drop-down button is shown only when focus is on the cell. Drop boxes provide a multiple character search capability that makes it easier to search for an exact match in a drop box list. See **[Multiple Character Search](Formatting%20a%20Grid.htm#search)**. _(Multiple character search in drop boxes was added in PxPlus 2019.)_  
_Column Name_ |  Logical name of the column. (See **[Named Columns](Named%20Columns.md)**.)  
_Column Separator_ |  Click the drop-down arrow to select a Hex or ASCII string value as the default separator character to use between columns during a load.  
_Static Columns_ |  Used to set the number of leftmost columns that will remain fixed and will not be resized when the display is scrolled horizontally.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row for creating a new column.  
_Delete_ |  Removes the currently selected row (i.e. removes the column from the grid).  
_Move Up  
Move Down_ |  Changes the order of the existing columns in the grid.  
  
**_Multiple Character Search_**

Drop boxes provide a multiple character search capability that makes it easier to search for an exact match in a drop box list.

#### **Note:**  
Multiple character search applies to the following drop box **[Cell Types](Formatting%20a%20Grid.htm#cell_types)**: "DropBox", "DropBoxHideBtn", "VarDropBox" and "VarDropBoxHideBtn".

To use this capability effectively, the characters **_must_** be entered within a second of one another and **_must_** exactly match the start of an item in the drop box.

**_Example:_**

Assume that a drop box contains the following items:

> C10000  
>  C30000  
>  C50000

Typing the character "c" followed within second by the number "3" would select the "C30000" item.

#### **Note:**  
In drop boxes, searching always starts from the current selection and wraps.

_(Multiple character search in drop boxes was added in PxPlus 2019.)_
