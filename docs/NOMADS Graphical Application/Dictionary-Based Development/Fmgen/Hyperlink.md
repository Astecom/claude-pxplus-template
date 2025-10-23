# File Maintenance Generator  
  
**Hyperlink Prompt** |  **_Step 6: Field Layout_**  
---|---  
  
#### **Note:**  
The _Hyperlink Prompt_ option is applicable when the field is not the last Key segment.

The **Add a Hyperlink Prompt** window is used to add a hyperlink to a data dictionary field prompt only if the field is not the last Key segment. For example, a hyperlink can be added to the "SalesRepCode" prompt to launch Sales Representatives Maintenance. When a hyperlink prompt is added, the cell contents are underlined.

_(The ability to add/edit a Hyperlink Prompt was added in PxPlus 2021.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Hyperlink Prompt_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit a Hyperlink Prompt_ option.

This window consists of the following:

**Hyperlink Panel** |  Specify the NOMADS panel to display when the hyperlink prompt is clicked at run time. |  _Library_ |  Library that contains the NOMADS panel. Click the drop-down arrow for a list (up to nine) of previous selections. Use the Browse button to locate the library or enter the pathname.  
---|---  
_Panel_ |  NOMADS panel name. Click the drop-down arrow for a list of panels in the selected library. If left blank, the prompt will not be a hyperlink.  
**HTML Page** |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** Specify the HTML page to display when the hyperlink prompt is clicked at run time. Use the HTML query button to locate the HTML page or enter the pathname. If left blank, the prompt will not be a hyperlink.  
_Remove Hyperlink_ |  Clears the _Panel_ and **HTML Page** selections and removes the hyperlink from the prompt.
