# Creating the Report Layout 

**Conditional Cell Definition** |  **__**  
---|---  
  
An alternate definition for individual cells may be specified within the report. The alternate cell definition has a condition associated with it to determine which definition will be used for display when the report is generated. If the specified conditions are not met, then the original cell definition is used for displaying the cell. A cell definition includes cell contents (value, image, hyperlink), display format and attributes (colors, font, alignment, word wrap option and borders).

**_Alternate Cell Condition_**

To create an alternate definition for a cell, select a cell and click the _Cell Condition_ button on the Report Designer tool bar. Alternatively, you can select _Alternate Cell Condition_ either from the _Format_ menu or from the right-click popup menu. The **Define Filters** window displays for specifying the conditions under which the alternate definition will be used.

Conditions are assigned using the same filtering mechanism as for **[Data Filters](../Defining%20the%20Data/Data%20Filters.md)** with the exception that a **_cell definition_** is being accepted/rejected rather than data.

> When the condition is initially defined, the values, format and attributes of the original cell definition are loaded into the alternate definition, and the cell display switched to display the alternate cell definition, which can then be altered. When a cell has alternate definitions, this is signalled by a small tick mark in the top left corner of the cell. A green tick mark means the main cell definition is being displayed, and a red tick mark signals the alternate cell definition. After the alternate cell condition has been set, selecting this option will allow the condition to be changed but will not cause the display to be switched.

**_Switch Cell Definition_**

To switch between the two definitions after the condition has been set, select _Switch Cell Definition_ from the _Format_ menu or from the right-click popup menu. The _Alternate Cell Condition_ and _Switch Cell Definition_ options are also available by using the _Cell Condition_ and _Switch Cell_ buttons on the tool bar.

When altering the contents, format or attributes of a cell with an alternate definition, the changes will only affect the current definition, as indicated by the color of the tick. To change both definitions, you will have to make changes to the currently displayed definition, switch the cell definition, then make the changes again. The only change that will affect all definitions is altering the default font.
