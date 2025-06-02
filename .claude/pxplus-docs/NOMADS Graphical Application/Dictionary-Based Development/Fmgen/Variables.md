# Step 6: File Maintenance Field Layout

**Hidden Variables**|   
---|---  
  
Data dictionary fields and/or additional variables that do not appear on the panel _Layout Grid_ may be added as hidden variables for use in **[HTML Calculations](Html%20Calc.md)** associated with other data dictionary fields or with **[Input Fields](Input.md)** added to the panel _Layout Grid_.

To define hidden variables, click the _Hidden Variables_ button (located below the _Select All_ and _Reset_ buttons). This button is available only when the **[HTML Page](Object%20Definition.htm#formtype)** check box (in **Step 1: Definition**) is selected for _Form Type_.

_(The Hidden Variables button was added in PxPlus 2022.)_

The _Hidden Variables_ button launches the **Include Hidden Fields on HTML Page** window:

> This window consists of the following:

**Fields Available** |  Lists the data dictionary fields that have not been added to the panel _Layout Grid_ and may be optionally added as hidden variables. Adding a data dictionary field to the panel _Layout Grid_ automatically removes it from the **Fields Available** list.  
---|---  
**Hidden Variables** |  Lists the data dictionary fields and/or additional variables that have been added as hidden variables. Adding a data dictionary field to the panel _Layout Grid_ automatically removes it from the **Hidden Variables** list.  
_Options_ |  Clicking the _Options_ check box beside a hidden variable invokes the **Hidden Variable Options** window. This window is used for entering (or editing) an initial value for a hidden variable that is not a data dictionary field or for entering an HTML calculation. A check mark in the _Options_ check box indicates that options have been entered. This window consists of the following: |  _Field Name_ |  **_(Display Only)_** Name of the selected hidden variable.  
---|---  
_Description_ |  **_(Display Only)_** Description of the selected hidden variable (i.e. this will be the data dictionary field description or the words "Additional Variable").  
**Initial Value** |  **_(Available for Additional Variables Only)_** Enter (or edit) the initial value (either a _Fixed_ value or a string _Expression_) for the additional variable. This field is not applicable when the hidden variable is a data dictionary field.  
**Webster+ HTML Calculation** |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** Enter (or edit) an **[HTML Calculation](Html%20Calc.md)** for the selected hidden variable. Set the calculation _Priority_ or leave it at 5 **_(Default)_**. **_Example:_** An example of when entering an HTML calculation for a hidden variable would be useful is when you need to total the taxable items but not show that total, only use it to figure out the amount of tax owed.  
_Clear Options_ |  Clears the hidden variable options and does not close the **Hidden Variable Options** window.  
_OK_ |  Saves any changes to the hidden variable options and closes the **Hidden Variable Options** window.  
_Cancel_ |  Closes the **Hidden Variable Options** window without saving changes.  
  
_(The Options check box column was added in PxPlus 2023.)_  
  
_Assign_ |  The data dictionary fields selected in the **Fields Available** list are added to the **Hidden Variables** list. Double clicking on a single field also adds it to the list. Multiple fields can be selected by using Shift-Click (consecutive selections) or Ctrl-Click (random selections).  
_Drop_ |  The data dictionary field(s) selected in the **Hidden Variables** list are removed from this list and returned to the **Fields Available** list. Any additional variables that are selected are deleted. Double clicking on a single field also removes it from the list. Multiple fields can be selected by using Shift-Click (consecutive selections) or Ctrl-Click (random selections).  
**Additional Variables** |  Enter the name of an additional variable to be added as a hidden variable. Multiple additional variables can be added, one variable at a time. The additional variable(s) must be used in the associated HTML program.  
_Add_ |  Adds the additional variable to the **Hidden Variables** list.  
_OK_ |  Saves any changes and closes the **Include Hidden Fields on HTML Page** window.  
_Cancel_ |  Closes the **Include Hidden Fields on HTML Page** window without saving changes.  
  
When hidden variables are added, the _Hidden Variables_ button displays a check mark. Any data dictionary fields that are added as hidden variables are shown in light gray text in the _Fields_ list box as a visual cue only.

_(The gray text display to indicate hidden variables was added in PxPlus 2023.)_
