# File Maintenance Generator

**Smart List Box** |  **_Step 6: Field Layout_**  
---|---  
  
The **Add a Smart List Box** window is used to add (and edit) a Smart List Box on the file maintenance panel. See Webster+ **[[list]](../../../Webster/Short%20Codes.htm#list)** short code.

_(The ability to add/edit a Smart List Box was added in PxPlus 2021.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Smart List Box_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit a Smart List Box_ option.

> Many of these options are also available when defining a Smart List Box control in the NOMADS Panel Designer (see **[Defining Smart Controls](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark10)**), except for these differences:

_List Box Control Name_ |  Enter a unique name or use the default name provided. (Same as **[Name](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#properties)** property in **List Box Properties**.)  
---|---  
_List Box Type_ |  Style of the Smart List Box. Click the drop-down arrow for a list of selections: _Report View**(Default)**_ and _Tree View_. |  _Report View_ |  Displays multiple data elements in a tabular list with the use of headings and other attributes. **_Example:_**  
---|---  
_Tree View_ |  Displays data using a tree-like structure view. In the NOMADS Panel Designer, the following **[Tree View Attributes](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#treeview_attrib)** in **List Box Properties** are automatically set: _Data Has Bitmaps_ and _Show Lines_. **_Example:_**  
  
_(The ability to create a Tree View type of Smart List Box was added in PxPlus 2023 Update 1.)_  
  
**Size** |  |  _Width_ |  Enter the width for the List Box either in number of _Columns**(Default)**_ or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_ , which will result in the List Box filling the entire column or full line. If a List Box with an _Auto_ width is the only control in the column, it will default to a width of 35. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  Enter the height for the List Box in number of lines or use the spinner control. Valid entries are 0 to 255. (**_Default_** is 10.)  
**Visual Class** |  **_(Optional)_** Assign a **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** to the List Box control for setting up default settings such as font, color and various attributes.  
**Webster+ HTML** |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** |  _Event_ |  Enter an optional **[HTML Event](../../../Webster/Webster%20Events.md)**.  
---|---  
_Class_ |  A single HTML Class can be entered (e.g. noborder). Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes (e.g. "bold text_red fill_cyan" or bold,text_red,fill_cyan). See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
_Other Options_ |  One or multiple short code options associated with the **[[list]](../../../Webster/Short%20Codes.htm#list)** short code can be entered. Multiple options must be separated by a space. See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Example:_** **tip=** FloatingTip  
**tip=** FloatingTip **link=** https://www.pvxplus.com

#### **Important Note:**  
The _Other Options_ field should not be used for entering **class=**_xxx_ or **event=**_xxx_ short code options.  
  
_(HTML Event was added in PxPlus 2022.)  
(The Other Options and Class fields were added in PxPlus 2023 Update 1.)_  
  
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the List Box spans according to its size. Fields placed in the rows below the List Box and below the adjoining cell (in a two-column layout) are pushed down to accommodate the List Box. The field in the adjoining cell remains in place beside the List Box. Deselecting this option allows fields to be placed beside the List Box (in a two-column layout). However, fields below the List Box (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **_Example - Span Multiple Lines_** below.  
  
**_Example - Span Multiple Lines_** **_:_**

This panel layout shows a List Box on the left side, a field in the adjoining cell on the right side, and fields in the rows below.

>   
>  **_Panel Layout with Smart List Box_**

To demonstrate the effect of the _Span Multiple Lines_ option, two screen shots are provided, showing this NOMADS panel in Preview mode.

For this first screen shot, the _Span Multiple Lines_ option is _On_. Notice that the field in the adjoining cell beside the List Box remains in place, and the fields below the List Box are pushed down to accommodate it.

>   
>  **_Smart List Box - Span Multiple Lines (On)_**

For this second screen shot, the _Span Multiple Lines_ option is _Off_. Notice that the field in the adjoining cell and the fields on the right side remain in place. The fields on the left side below the List Box are not pushed down. In this case, the List Box is overlapping the fields below it.

>   
>  ** _Smart List Box - Span Multiple Lines (Off)_**
