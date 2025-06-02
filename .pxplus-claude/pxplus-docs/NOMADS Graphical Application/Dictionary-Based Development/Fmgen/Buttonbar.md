# File Maintenance Generator  
  
**Button Bar** |  **_Step 6: Field Layout_**  
---|---  
  
The **Add Button Bar** window is used to add (and edit) Button controls horizontally (in a button bar) on the file maintenance panel. Up to 10 buttons can be added to a button bar, and more than one button bar can be added to a file maintenance panel.

_(The ability to add/edit a Button Bar was added in PxPlus 2023.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Button Bar_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit a Button Bar_ option.

> This window consists of the following:

_(Button Bar Buttons Grid)_ |  Displays a list of the buttons in the button bar. After a new button is defined, it is automatically added to this list.  
---|---  
_Add or Edit a Button Bar Button_ |  Button that launches the **Add a Button** window for adding a new button to the button bar or editing an existing one. If only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , the **Webster+** tab will launch by default when this window is invoked. _(Support to default to the Webster+ tab if only HTML Page is selected was added in PxPlus 2025.)_ These options are also available when defining a Button object on the file maintenance panel in **Step 6: Fields** (see **[Button](Button.md)** object), except for these differences: |  **NOMADS** |   
---|---  
**Size** |  |  _Width_ |  Enter the width (in number of columns only) for the button bar Button on the NOMADS panel or use the spinner control. The default is 10.  
---|---  
**Webster+** |   
**Size** |  |  _Width_ |  **_(Available when button Type is Standard or Drop List)_** Enter the width (in number of columns only) for the button bar Button on the Webster+ page.  
---|---  
**HTML** |  |  _Event/URL_ |  An HTML event or a URL may be added to individual buttons in a button bar when defining a new button or editing a button selected in the **Add Button Bar** window.  
---|---  
_Delete a Button Bar Button_ |  Removes the selected button from the button bar. Prior to deletion, a message will display.  
_Copy a Button Bar Button_ |  Creates a new button bar button by copying the settings from an existing button selected in the same button bar.  
_Move Up  
Move Down_ |  Moves the selected button up or down within the list, changing the order of the buttons in the button bar on the NOMADS panel and Webster+ page.  
_Remove All Buttons_ |  **_(Available when a button bar Button is defined)_** Removes all the buttons in the selected button bar. Prior to deletion, a message will display. Removing all the buttons will also remove the button bar object from the _Layout Grid_ after exiting the **Add Button Bar** window.  
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the button bar spans according to its size. Fields placed in the rows below the button bar and below the adjoining cell (in a two-column layout) are pushed down to accommodate the button bar. The field in the adjoining cell remains in place beside the button bar. Deselecting this option allows fields to be placed beside the button bar (in a two-column layout). However, fields below the button bar (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **[Example - Span Multiple Lines](Listbox.htm#span_example)**.
