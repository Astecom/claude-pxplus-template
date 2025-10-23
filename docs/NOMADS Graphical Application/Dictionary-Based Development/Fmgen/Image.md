# File Maintenance Generator  
  
**Image** |  **_Step 6: Field Layout_**  
---|---  
  
The **Add an Image** window is used to add (and edit) an Image control on the file maintenance panel. See Webster+ **[[image]](../../../Webster/Short%20Codes.htm#image)** short code.

#### **Note:**  
To properly view images on HTML pages, [**Webster+ Security**](../../../Webster/General%20Configuration.htm#security) must be enabled.

_(The ability to add/edit an Image was added in PxPlus 2021.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Image_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit an Image_ option.

> This window consists of the following:

_Image Control Name_ |  Enter a unique name or use the default name provided. (Same as **[Name](../../Creating%20Panel%20Controls/Image%20Control/Image.htm#name)** property in **Image/Picture Properties**.)  
---|---  
**Image Type** |  Specify whether the Image is a _Fixed_ value, string _Expression_ or _Dynamic_. (**_Default_** is _Fixed_.)  
**Image Path** |  **_(Available when Image Type is Fixed or Expression)_** Name and path of the image (_Fixed_ value or string _Expression_). Click the Bitmap Library button to select a bitmap from the **Bitmaps** dialog. This button is available when the _Image Type_ is _Fixed_.  
**Variable Name** |  **_(Available when Image Type is Dynamic)_** Name of the variable that will contain the name of the image.  
**Image Format** |  |  _Graphic Display_ |  Defines how the Image is to be drawn. See **[Image Format](../../Creating%20Panel%20Controls/Image%20Control/Image.htm#display)**.

#### **Note:**  
Image formats are not currently supported in Webster+.  
  
---|---  
**Size** |  |  _Width_ |  Enter the width for the Image either in number of _Columns**(Default)**_ or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_ , which will result in the Image filling the entire column or full line. If an Image with an _Auto_ width is the only control in the column, it will default to a width of 35. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  Enter the height for the Image in number of lines or use the spinner control. Valid entries are 0 to 255. (**_Default_** is 10.)  
**Webster+ HTML** |  **_(Available when_ [HTML Page](Object%20Definition.htm#formtype) _check box is selected for Form Type)_** |  _Event_ |  Enter an optional **[HTML Event](../../../Webster/Webster%20Events.md)**.  
---|---  
_Class_ |  A single HTML Class can be entered. Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes. See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
_Other Options_ |  One or multiple short code options associated with the **[[image/picture]](../../../Webster/Short%20Codes.htm#image)** short code can be entered. Multiple options must be separated by a space. See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Example:_** **tip=** FloatingTip  
**tip=** FloatingTip **link=** https://www.pvxplus.com

#### **Important Note:**  
The _Other Options_ field should not be used for entering **class=**_xxx_ or **event=**_xxx_ short code options.  
  
_(HTML Event was added in PxPlus 2022.)  
(The Other Options and Class fields were added in PxPlus 2023 Update 1.)_  
  
_Span Multiple Lines_ |  **_(Applicable for NOMADS Panels Only)_** When selected **_(Default)_** , the Image spans according to its size. Fields placed in the rows below the Image and below the adjoining cell (in a two-column layout) are pushed down to accommodate the Image. The field in the adjoining cell remains in place beside the Image. Deselecting this option allows fields to be placed beside the Image (in a two-column layout). However, fields below the Image (in the same column) are not pushed down, which may result in overlapping and hidden fields. This option works the same for Smart List Boxes, Smart Charts, Images and Embedded Panel/HTML Short Codes. For an example using a Smart List Box, see **[Example - Span Multiple Lines](Listbox.htm#span_example)**.
