# File Maintenance Generator

**Text** |  **_Step 6: Field Layout_**  
---|---  
  
The **Add Text** window is used to add (and edit) a Text field on the file maintenance panel.

_(The ability to add/edit a Text field was added in PxPlus 2022.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Text_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit a Text Field_ option.

> This window is divided into two tabbed folder panels, **[NOMADS](Text.htm#nomads)** and **[Webster+](Text.htm#webster)**, for defining Text properties, depending on whether a NOMADS panel, a Webster+ HTML page, or both are being generated.

If only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , the **Webster+** tab will launch by default when this window is invoked.

_(Support to default to the Webster+ tab if only HTML Page is selected was added in PxPlus 2025.)_

This window consists of the following:

_Text Control Name_ |  Enter a unique name or use the default name provided.  
---|---  
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the Text spans according to its size. Fields placed in the rows below the Text and below the adjoining cell (in a two-column layout) are pushed down to accommodate the Text. The field in the adjoining cell remains in place beside the Text. Deselecting this option allows fields to be placed beside the Text (in a two-column layout). However, fields below the Text (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **[Example - Span Multiple Lines](Listbox.htm#span_example)**.  
**NOMADS** |   
_Include Text on NOMADS Panel_ |  **_(Available when_ [NOMADS Panel](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** When adding new Text, this check box is selected by default to enable the options on the NOMADS folder panel.  
**Text** |  Click the drop-down arrow to select whether the Text will be a _Fixed_ value _**(Default)**_ , a string _Expression_ , or a _Message Library Reference_.  
**Visual Class** |  Assign a **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** to the Text.

#### **Note:**  
Visual class names that begin with an "***** " _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.  
  
**Size** |  |  _Width_ |  Enter the width for the Text either in number of _Columns**(Default)**_ or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_. In NOMADS, a width of _Columns - Auto_ will result in the text filling the entire column or full line. If Text with an _Auto_ width is the only control in the column, it will default to a width of 35. To set it back to _Auto_ , enter 0. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. If an actual number of columns has been entered and the Text is edited so that its length exceeds the number of columns, the value will adjust to match the length of the Text entered plus 2. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  Enter the height for the Text in number of lines or use the spinner control. Valid entries are 0 to 255. **_Default_** is 1.  
**Webster+** |   
_Include Text on Webster+ Page_ |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** When adding new Text, this check box is selected by default to enable the options on the Webster+ folder panel.  
**Text** |  Click the drop-down arrow to select whether the text will be a _Fixed_ value _**(Default)**_ , string _Expression_ , or _HTML_. If _HTML_ is selected, a TinyMCE HTML Editor control with a menu and tool bar options will display. See **[TinyMCE HTML Editor](../../../Extended%20NOMADS%20Objects/TinyMCE%20HTML%20Editor/TinyMCE%20HTML%20Editor%20Overview.md)**. |  _HTML Class_ |  **_(Applicable if Text is Fixed or Expression)_** A single HTML Class can be entered (e.g. bold). Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes (e.g. "bold text_red fill_cyan" or bold,text_red,fill_cyan). See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
---|---  
**Size** |  **_(Applicable if Text is Fixed or Expression)_** |  _Width_ |  Enter the width for the Text either in number of _Columns**(Default)**_ or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_. In Webster+, a width of _Columns - Auto_ will result in the Text being just wide enough to accommodate the text (and symbol if present). To set it back to _Auto_ , enter 0. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. If an actual number of columns has been entered and the Text is edited so that its length exceeds the number of columns, the value will adjust to match the length of the Text entered plus 2. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  Enter the height for the Text in number of lines or use the spinner control. Valid entries are 0 to 255. **_Default_** is 1.  
**HTML** |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** |  _Event_ |  Enter an optional **[HTML Event](../../../Webster/Webster%20Events.md)**.  
---|---  
_Other Options_ |  One or multiple short code options associated with the **[[show]](../../../Webster/Short%20Codes.htm#show)** short code can be entered. Multiple options must be separated by a space. See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Example:_** **tip=** FloatingTip  
**tip=** FloatingTip **link=** https://www.pvxplus.com

#### **Important Note:**  
The _Other Options_ field should not be used for entering **class=**_xxx_ or **event=**_xxx_ short code options.  
  
_(The Other Options field was added in PxPlus 2023 Update 1.)_
