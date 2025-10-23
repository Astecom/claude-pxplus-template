# Themes and Visual Classes

**Multi_Line Properties**|   
---|---  
  
This table lists all the **_Multi_Line_** properties:

**Property** |  **Description**  
---|---  
**Attributes**  
_Borderless_ |  Control has no border or frame.  
_Center Text_ |  Centers the input. _(Center Text property was added in PxPlus 2018.)_  
_Locked_ |  User can set focus but cannot change the multi-line input region. Associated query button is disabled. _(Locked property was added in PxPlus 2018.)_  
_Right Justify_ |  Text is right-aligned in the multi-line input field. _(Right Justify property was added in PxPlus 2018.)_  
_Transparent Background_ |  Multi-line background and border are transparent; i.e. the window contents behind the multi-line show through. _(Transparent Background property was added in PxPlus 2018.)_  
_Uppercase_ |  Converts text from lowercase to uppercase automatically. _(Uppercase property was added in PxPlus 2018.)_  
**Colors**  
_Click the dotted_ _Query button or double click inside the cell to access_ [ **Color Selections**](../../Appendix/Color%20Selections.md) _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The color tick and color tip were added in PxPlus 2018.)  
__(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Background_ |  Background color of the control in its default state. When a multi-line control is disabled, it retains the background color that has been set instead of showing the standard disabled color.  
_Foreground_ |  Foreground text color of the control in its default state.  
_Frame Color_ |  Color of the frame/border around the control. _(Frame Color property was added in PxPlus 2024.)_  
**Colors (States)**  
_Disable Background Color_ |  Background color when the control is disabled. _(Disable Background Color property was added in PxPlus 2022.)_  
_Disable Text Color_ |  Foreground text color when the control is disabled. _(Disable Text Color property was added in PxPlus 2022.)_  
_Focus Background Color_ |  Background color when the control has focus. _(Focus Background Color property was added in PxPlus 2019.)_  
_Focus Text Color_ |  Text color when the control has focus. _(Focus Text Color property was added in PxPlus 2019.)_  
_Hover Background Color_ |  Background color when the mouse is over the control. See _Hover Background Color 2_ below. _(Hover Background Color property was added in PxPlus 2025.)_  
_Hover Border Color_ |  Border color when the mouse is over the control. _(Hover Border Color property was added in PxPlus 2025.)_  
_Hover Text Color_ |  Foreground text color when the mouse is over the control. _(Hover Text Color property was added in PxPlus 2025.)_  
_Lock Background Color_ |  Background color when the control is locked. _(Lock Background Color property was added in PxPlus 2024.)_  
_Lock Text Color_ |  Foreground text color when the control is locked. _(Lock Text Color property was added in PxPlus 2024.)_  
**Font**  
_Font_ |  Click the dotted Query button or double click inside the cell to specify font properties and attributes such as _Bold_ , _Italics_ , etc. See **[Font Properties](Font%20Properties.md)**. _(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
**Query Button Display**  
_Query Button Attributes_ |  Click the dotted Query button or double click inside the cell to invoke the **Query Button Attributes** window to set attributes for the query button. Options are: |  _Suppress Query Button_ |  Suppresses the query button on the multi-line.  
---|---  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the button or the button is pushed.  
_Flat - No Border_ |  Button has no border and shows no raised outline when the mouse hovers or the button is pushed.  
_Embedded_ |  Button is displayed within the multi-line, rather than shortening the multi-line and displaying the query button to its right.  
_Transparent_ |  Button is "see-through" to the window contents behind the button area.  
_Bitmap Button_ |  Button is a bitmap button.  
  
#### **Important Note:**  
The height of a multi-line control with an associated query **_must be set to 1_** ; otherwise, NOMADS will not draw the query button.

_(Query Button Attributes property was added in PxPlus 2023.)_  
  
_Query Button Bitmap_ |  Click the dotted Query button or double click inside the cell to invoke the **Query Button Bitmap** window to define the bitmap for the query button (_Fixed_ or string _Expression_). Click the Bitmap Library button to select a bitmap from the **Bitmaps** dialog. _(Query Button Bitmap property was added in PxPlus 2023.)_  
_Query Button Width (columns)_ |  Enter the width of the query button (in number of columns). _(Query Button Width property was added in PxPlus 2023.)_  
**Spinner Button Display**  
_Spinner Arrow Color_ |  Color of the chevrons in a spinner button. _(Spinner Arrow Color property was added in PxPlus 2024.)_  
_Spinner Background Color_ |  Color of the background of a spinner button. If the _Transparent_ button attribute is used, this is ignored. _(Spinner Background Color property was added in PxPlus 2024.)_  
_Spinner Button Attributes_ |  Click the drop-down arrow for a list of display attributes for setting the appearance of the spinner button. Options are: |  _Default_ |  Gray up/down chevrons on a White background. Button is flat with no border.  
---|---  
_Flat_ |  Button shows no raised outline unless the mouse is over the button or the button is pushed.  
_Flat - No Border_ |  Button has no border and shows no raised outline when the mouse hovers or the button is pushed.  
_Transparent_ |  Button is "see-through" to the window contents behind the button area.  
_Flat and Transparent_ |  Button shows no raised outline and is "see-through" to the window contents behind the button area.  
_Flat - No Border and Transparent_ |  Button has no border and is "see-through" to the window contents behind the button area.  
  
#### **Note:**  
_Transparent_ settings will override _Spinner Background Color_.

_(Spinner Button Attributes property was added in PxPlus 2024.)_  
  
_Spinner Hover Color_ |  Color of the chevron when hovering over it in the spinner button. _(Spinner Hover Color property was added in PxPlus 2024.)_  
**Other**  
_iNomads Class_ |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(iNomads Class property was added in PxPlus 2020.)_  
  
## See Also

**[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**
