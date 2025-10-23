# File Maintenance Generator  
  
**Button** |  **_Step 6: Field Layout_**  
---|---  
  
The **Add a Button** window is used to add (and edit) a Button control on the file maintenance panel. See Webster+ **[[button ]](../../../Webster/Short%20Codes.htm#button)** short code.

_(The ability to add/edit a Button was added in PxPlus 2021 Update 1.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Button_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit a Button_ option.

> This window is divided into two tabbed folder panels, **[NOMADS](Button.htm#nomads)** and **[Webster+](Button.htm#webster)**, for defining Button properties, depending on whether a NOMADS panel, a Webster+ HTML page, or both are being generated.

If only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , the **Webster+** tab will launch by default when this window is invoked.

_(Support to default to the Webster+ tab if only HTML Page is selected was added in PxPlus 2025.)_

It consists of the following:

_Button Control Name_ |  Enter a unique name or use the default name provided. (Same as **[Name](../../Creating%20Panel%20Controls/Button%20Control/Overview.htm#name)** property in **Button Properties**.)  
---|---  
_Type_ |  Select the type of Button control: |  _Standard_ |  **_(Default)_** Creates a standard button control.  
---|---  
_Hyperlink_ |  Creates a Web-link style button (i.e. no frame, is underscored, and text on the button is highlighted whenever the mouse hovers over the button).  
_Drop List_ |  Creates a drop-down style button.  
  
_(The Drop List button type was added in PxPlus 2022.)_  
  
_Text_ |  Enter the button text or leave blank. If left blank, a bitmap (NOMADS panel) and/or a symbol (Webster+ page) must be entered; otherwise, a message will display.  
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the Button spans according to its size. Fields placed in the rows below the Button and below the adjoining cell (in a two-column layout) are pushed down to accommodate the Button. The field in the adjoining cell remains in place beside the Button. Deselecting this option allows fields to be placed beside the Button (in a two-column layout). However, fields below the Button (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **[Example - Span Multiple Lines](Listbox.htm#span_example)**.  
**NOMADS** |   
_Include Button on NOMADS Panel_ |  **_(Available when_ [NOMADS Panel](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** When adding a new Button, this check box is selected by default to enable the options on the NOMADS folder panel.  
**Appearance** |  |  _Bitmap_ |  **_(Available when button Type is Standard or Hyperlink)_** Bitmap to display on the Button. Click the Bitmap Library button to select a bitmap or enter the text value for the bitmap (e.g. !Checkmark).  
---|---  
_Position_ |  **_(Available when button Type is Standard or Hyperlink)_** Bitmap position on the Button: _Left**(Default)**_ , _Right_. _Top_ or _Bottom_. This option is enabled when button _Text_ is entered. _(The Top and Bottom bitmap positions were added in PxPlus 2022 Update 1.)_  
_Popup Library_ |  **_(Available when button Type is Drop List)_** Library path for the popup menu. Click the drop-down arrow for a list of (up to nine) previous library selections. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Popup Panel_ |  **_(Available when button Type is Drop List)_** Popup menu name. Click the drop-down arrow for a list of existing popup menus in the selected library. Click the Popup button to invoke the **[Menu Bar Definition](../../Creating%20Panel%20Controls/Popup%20Menu/Overview.htm#popup_def)** for the selected popup menu. A new popup menu can be created on-the-fly. Enter a new _Popup Panel_ name and then click the Popup button to define the menu.  
_Visual Class_ |  Associate a **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** for setting up default settings for the Button control such as font, color and various attributes. Click the drop-down arrow for a list of pre-defined visual classes.

#### **Note:**  
Visual class names that begin with an "*"  _(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.  
  
_(The Popup Library and Popup Panel options were added in PxPlus 2022.)_  
  
**Size** |  |  _Width_ |  Enter the width for the Button either in number of _Columns**(Default)**_ or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_. In NOMADS, a width of _Columns - Auto_ will result in the Button filling the entire column or full line. If a Button with an _Auto_ width is the only control in the column, it will default to a width of 35. To set it back to _Auto_ , enter 0. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. If an actual number of columns has been entered and the Button text is edited so that its length exceeds the number of columns, the value will adjust to match the length of the Button text entered plus 2. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  Enter the height for the Button in number of lines or use the spinner control. Valid entries are 0 to 255. The default is 1.5.  
  
_(The default Button Height of 1.5 for NOMADS was added in PxPlus 2023.)_  
  
**When Button Pressed Logic** |  Logic to be executed when focus leaves the Button or the state of the control has changed. Click the drop-down arrow to add/edit logic. See **[Actions and Parameters](../../Program%20Interaction/Events%20Logic/Actions%20and%20Parameters.md)**.  
**Webster+** |   
_Include Button on Webster+ Page_ |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** When adding a new Button, this check box is selected by default to enable the options on the Webster+ folder panel.  
**Appearance** |  |  _Symbol_ |  **_(Available when button Type is Standard or Hyperlink)_** A symbol can be optionally added to the button text. It can be either a Font Awesome symbol or a standard PxPlus bitmap selected from the Bitmap Library lookup button. For a list of Font Awesome symbols, visit <https://fontawesome.com/v4/icons/>.

#### **Note:**  
When specifying the Font Awesome symbol name, do not include the leading 'fa-'.

_(The Bitmap Library lookup button was added in PxPlus 2022 Update 1.)_  
---|---  
_Position_ |  **_(Available when button Type is Standard or Hyperlink)_** Symbol position on the button: _Left**(Default)**_ , _Right_. _Top_ or _Bottom_. This option is enabled when button _Text_ is entered. _(The Top and Bottom symbol positions were added in PxPlus 2022 Update 1.)_  
_List Items_ |  **_(Available when button Type is Drop List)_** Grid used for entering the text and the **[HTML Event](../../../Webster/Webster%20Events.md)** to trigger for each item in the drop list.  
_HTML Class_ |  A single HTML Class can be entered (e.g. bold). Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes (e.g. "bold text_redfill_cyan" or bold,text_red,fill_cyan). See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
  
_(The List Items option was added in PxPlus 2022.)_  
  
**Size** |  |  _Width_ |  **_(Available when button Type is Standard or Drop List)_** Enter the width for the Button either in number of _Columns**(Default)**_ or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_. In Webster+, a width of _Columns - Auto_ will result in the Button being just wide enough to accommodate the text (and symbol if present). To set it back to _Auto_ , enter 0. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. If an actual number of columns has been entered and the Button text is edited so that its length exceeds the number of columns, the value will adjust to match the length of the Button text entered plus 2. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  **_(Available when button Type is Standard or Drop List)_** Enter the height for the Button in number of lines or use the spinner control. Valid entries are 0 to 255. The default is 2.  
  
_(The default Button Height of 2 for Webster+ was added in PxPlus 2023.)_  
  
**HTML** |  |  _Event/URL_ |  If the button _Type_ is set to _Standard_ or _Drop List_ , an **[HTML Event](../../../Webster/Webster%20Events.md)** can be entered for the Button. For _Standard_ buttons only, you can add a **[target=_xxx_](../../../Webster/Short%20Code%20Options.htm#target)** short code option or any other short code options to the event, separated by a space (e.g. sample_event target=same). See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. Instead of an event, you can add a hyperlink by entering a **[link=_xxx_](../../../Webster/Short%20Code%20Options.htm#link)** short code option as the first five characters in the _HTML Event_ field (e.g. link=page:invoices target=same). If the button _Type_ is set to _Hyperlink_ , either an HTML Event or a URL (preceded with http:// or https://) must be entered; otherwise, a message will display if left blank. _(The ability to add Webster+ short code options to Standard buttons was added in PxPlus 2022 Update 1.)_  
---|---  
_Other Options_ |  One or multiple short code options associated with the **[[button]](../../../Webster/Short%20Codes.htm#button)** short code can be entered. Multiple options must be separated by a space. See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Example:_** **tip=** FloatingTip  
**tip=** FloatingTip **link=** https://www.pvxplus.com

#### **Important Note:**  
The _Other Options_ field should not be used for entering **class=**_xxx_ or **event=**_xxx_ short code options.

_(The Other Options field was added in PxPlus 2023 Update 1.)_
