# File Maintenance Generator  
  
**Smart Chart** |  **_Step 6: Field Layout_**  
---|---  
  
The **Add a Smart Chart** window is used to add (and edit) a Smart Chart on the file maintenance panel. See Webster+ **[[chart]](../../../Webster/Short%20Codes.htm#chart)** short code.

_(The ability to add/edit a Smart Chart was added in PxPlus 2021.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Smart Chart_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit a Smart Chart_ option.

> Many of these options are also available when defining a Smart Chart control in the NOMADS Panel Designer (see **[Defining Smart Controls](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark8)**), except for these differences:

_Chart Control Name_ |  Enter a unique name or use the default name provided. (Same as **[Name](../../Creating%20Panel%20Controls/Chart%20Control/Chart.htm#name)** property in **Chart Properties**.)  
---|---  
**Size** |  |  _Width_ |  Enter the width for the Chart either in number of _Columns**(Default)**_ or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_ , which will result in the Chart filling the entire column or full line. If a Chart with an _Auto_ width is the only control in the column, it will default to a width of 35. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  Enter the height for the Chart in number of lines or use the spinner control. Valid entries are 0 to 255. (**_Default_** is 10.)  
**Visual Class** |  **_(Optional)_** Assign a **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** to the Chart control for setting up default settings such as font, color and various attributes.  
**Webster+ HTML** |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** |  _Event_ |  Enter an optional **[HTML Event](../../../Webster/Webster%20Events.md)**.  
---|---  
_Class_ |  A single HTML Class can be entered. Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes. See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
_Other Options_ |  One or multiple short code options associated with the **[[chart]](../../../Webster/Short%20Codes.htm#chart)** short code can be entered. Multiple options must be separated by a space. See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Example:_** **tip=** FloatingTip  
**tip=** FloatingTip **link=** https://www.pvxplus.com

#### **Important Note:**  
The _Other Options_ field should not be used for entering **class=**_xxx_ or **event=**_xxx_ short code options.  
  
_(HTML Event was added in PxPlus 2022.)  
(The Other Options and Class fields were added in PxPlus 2023 Update 1.)_  
  
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the Chart spans according to its size. Fields placed in the rows below the Chart and below the adjoining cell (in a two-column layout) are pushed down to accommodate the Chart. The field in the adjoining cell remains in place beside the Chart. Deselecting this option allows fields to be placed beside the Chart (in a two-column layout). However, fields below the Chart (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **[Example - Span Multiple Lines](Listbox.htm#span_example)**.
