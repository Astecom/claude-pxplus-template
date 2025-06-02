# File Maintenance Generator  
  
**Input Field** |  **_Step 6: Field Layout_**  
---|---  
  
The **Add an Input Field** window is used to add (and edit) an Input Field on the file maintenance panel.

_(The ability to add/edit an Input Field was added in PxPlus 2022.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Input Field_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit an Input Field_ option.

This window is divided into tabbed folder panels for defining Input Field properties, depending on whether a NOMADS panel and/or a Webster+ HTML page are being generated.

Many of these properties are also available when defining a Multi-line control (see **[Multi-line Properties](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)**) in the NOMADS Panel Designer, except for these differences:

_Name_ |  Enter a unique name or use the default name provided. (Same as **[Name](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#name)** property in **Multi-Line Properties**.)  
---|---  
_Prompt_ |  Enter text to describe the Input Field. The text displays as a field name on the generated panel.  
_Options_ |  Button that launches the **Prompt Options** window for defining the Input Field prompt. This window consists of the following: |  **Prompt** |  Click the drop-down arrow to select whether the prompt will be defined as a _Fixed_ value **_(Default)_** , a string _Expression_ , or a _Message Library Reference_. If a _Message Library Reference_ will be used and the Input Field will be added to a Webster+ HTML page, the message that is selected must also exist (with the same key) in the Webster+ Message Library. See Webster+ **[Message Library Maintenance](../../../Webster/Message%20Library%20Maintenance.md)**.  
---|---  
_Ok_ |  Updates the _Prompt_ field on the **Add an Input Field** window with the value entered. The value will be preceded with an **=** (_equals sign_) if an _Expression_ or _Message Library Reference_ was entered.  
_Cancel_ |  Cancels any changes and returns to the **Add an Input Field** window.  
  
_(The Options button was added in PxPlus 2022 Update 1.)_  
  
**Display** |   
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the Input control spans according to its size. Fields placed in the rows below the Input control and below the adjoining cell (in a two-column layout) are pushed down to accommodate the Input control. The field in the adjoining cell remains in place beside the Input control. Deselecting this option allows fields to be placed beside the Input control (in a two-column layout). However, fields below the Input control (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **[Example - Span Multiple Lines](Listbox.htm#span_example)**.  
**Webster+** |   
**HTML** |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** |  _Class_ |  A single HTML Class can be entered (e.g. bold). Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes (e.g. "bold text_red fill_cyan" or bold,text_red,fill_cyan). See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
---|---  
_Event_ |  Enter an optional **[HTML Event](../../../Webster/Webster%20Events.md)**.  
_Calculation_ |  Enter an HTML calculation. Fields used in the calculation must either exist on the panel _Layout Grid_ or be included as **[Hidden Variables](Variables.md)**. **_Example:_** ytdSales+prvSales  
_Priority_ |  **_(Available when an HTML Calculation is entered)_** Controls the order in which the HTML calculations are done. Can be any number between 1 and 9 (1 is first priority). The **_default_** priority is 5 for each calculation defined. The **[[addcalc]](../../../Webster/Short%20Codes.htm#addcalc)** short codes, which correspond to all the HTML calculations entered on the panel _Layout Grid_ , are added at the end of the generated HTML page, sorted by priority. If two or more HTML calculations are assigned the same priority level, calculations will be done in field name sequence within each priority level. If the order of the HTML calculations is not important, the priority can be left as 5 for all HTML calculations. _(The HTML Calculation Priority was added in PxPlus 2022 Update 1.)_  
_Other Options_ |  One or multiple short code options associated with the **[[input]](../../../Webster/Short%20Codes.htm#input)** short code can be entered. Multiple options must be separated by a space. See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Example:_** **tip=** FloatingTip  
**tip=** FloatingTip **link=** https://www.pvxplus.com

#### **Important Note:**  
The _Other Options_ field should not be used for entering **class=**_xxx_ or **event=**_xxx_ short code options.
