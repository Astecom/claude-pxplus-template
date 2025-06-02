# Creating the Report Layout 

**Conditional Detail Groups** |  **__**  
---|---  
  
Multiple detail line groups can be defined. The additional detail groups will have conditions associated with them to determine which group will be used to display the contents of a record. For example, if a record has a TYPE$ field, then the user could define a detail line group for each possible TYPE$ value. The first detail line group is the default group. It has no conditions associated with it and is used if the conditions for the other detail groups are not met. A maximum of 98 additional detail groups can be defined.

To add, update or remove detail line groups, select the **Detail Line Groups** tab on the **Groups** window. To invoke the **Groups** window, select _Groups_ from the Report Designer _Edit_ menu or right click on the data source in the left data pane and select _Define Groups and Group Functions_ from the popup menu. Alternatively, click on the cell displaying a small arrow next to a section line in the leftmost column of the layout.

> The  **Detail Line Groups** tab consists of the following:

_Add_ |  Launches the **[Define Filters](../Defining%20the%20Data/Data%20Filters.md)** window for adding a detail line group.  
---|---  
_Remove_ |  Deletes a selected group. Prior to deleting the group, a message will display.  
_Properties_ |  Updates the settings for a selected group.  
_Move Up  
Move Down_ |  The sequence in which the conditions for each group are tested can be controlled by adjusting their order with the _Move Up/Move Down_ buttons.

#### **Note:**  
Detail Group 01 is the default group and cannot be updated, removed or moved.  
  
_Use Filler line to fill gap between  
last line and page bottom_ |  **_(Available when "Include Filler line section" check box on the Main panel is selected)_** Causes a **[Filler Line](Filler%20Line.md)** to be output between the last detail line on a page and the bottom of the page.  
  
When a group is added or updated, the conditions associated with the group are set. Any conditions that are assigned use the same filtering mechanism as described in **[Data Filters](../Defining%20the%20Data/Data%20Filters.md)** with the exception that a detail group is being accepted/rejected rather than data.

Multiple detail line groups will display in the Report Designer as separate sections with yellow section headers.

## See Also

**[Grouping the Data](Grouping%20the%20Data.md)**
