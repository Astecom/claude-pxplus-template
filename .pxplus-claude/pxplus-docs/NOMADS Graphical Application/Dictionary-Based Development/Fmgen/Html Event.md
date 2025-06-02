# File Maintenance Generator  
  
**HTML Event/Other Options** |  **_Step 6: Field Layout_**  
---|---  
  
#### **Note:**  
The _HTML Event/Other Options_ option is only available when the [**HTML Page**](Object%20Definition.htm#formtype) check box is selected for _Form Type_.

The **Add an HTML Event/Other Options** window is used to add an **[HTML Event](../../../Webster/Webster%20Events.md)** and/or Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)** to a cell that contains either a data dictionary field or fonted text.

_(The ability to add/edit an HTML Event was added in PxPlus 2022.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _HTML Event/Other Options_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit an HTML Event/Other Options_ option.

> This window consists of the following:

_Field Name_**or** _Text_ |  Displays the name of the data dictionary field or the fonted text.  
---|---  
**Webster+ HTML** |  |  _Event_ |  Enter an **[HTML Event](../../../Webster/Webster%20Events.md)**.  
---|---  
_Other Options_ |  One or multiple short code options can be entered for a cell that contains a non-key data dictionary field or fonted text. Multiple options must be separated by a space. See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Example:_** **tip=** FloatingTip  
**tip=** FloatingTip **link=** https://www.pvxplus.com

#### **Important Note:**  
The _Other Options_ field should not be used for entering the **event=**_xxx_ short code option.  
  
_(The Other Options field was added in PxPlus 2023 Update 1.)_  
  
_OK_ |  Saves the HTML event and returns to the _Layout Grid_. A red tick displays in the top left corner of the cell to indicate that an HTML event was added. If a data dictionary field has both an **[HTML Calculation](Html%20Calc.md)** and an HTML event defined, a magenta tick will display. _(The colored tick indicator was added in PxPlus 2023.)_  
_Cancel_ |  Cancels any changes and returns to the _Layout Grid_.
