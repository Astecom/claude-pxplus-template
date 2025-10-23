# NOMADS - Appendix

**Color Selections**|   
---|---  
  
The **Color Selections** window presents different formats for specifying a color or creating a custom color. The color format may be a predefined system color, an RGB setting, HTML Hex color codes, a user defined color or a string expression.

To invoke this window, select the color Query button associated with a color property (i.e. Background Color, Border Color, etc.). In most cases, this Query button is displayed with a paint palette bitmap, as shown in the first example below; however, in certain instances, such as Themes Maintenance and Visual Class Maintenance, it is a three-dotted button, as shown in the second example.

|   
---|---  
  
When the color Query button is selected, the **Color Selections** window is displayed:

> This window consists of the following:

**Current Color** |  Name and description of the current color.  
---|---  
**Preview** |  Displays a preview of the specified color.  
**Standard (0-15)** |  Pre-defined system color (i.e. Dark Gray, Black, Dark Red, Light Red, Dark Green, Light Green, Dark Yellow, Light Yellow, Dark Blue, Light Blue, Dark Magenta, Light Magenta, Dark Cyan, Light Cyan, Light Gray, White).  
**User Defined (16-254)** |  User defined color in the format **Color** _n_. **_Where:_** _n_ can be 16 to 255. See **[User Defined Colors](../System%20Maintenance%20Tools/System%20Options/User%20Defined%20Colours.md)**.  
**Custom** |  Custom RGB setting in the format **RGB** :_nnn_. **_Where:_** _n_ can be 0 to 255. Click the Color lookup button to select colors from the system color palette or define custom colors.  
**HTML Hex Color Code** |  Enter a six-character HTML Hex color code or click the drop-down arrow to select from a list of HTML Hex colors. See **[HTML Hex Color Codes](../../control_object_properties/colour_properties.htm#hex_codes)**. **_Example:_** FF0080 _(Support for specifying an HTML Hex color code was added in PxPlus 2020.)  
(The ability to select from a list of HTML Hex colors was added in PxPlus 2023.)_  
**Expression** |  String expression that evaluates to a color setting, such as a pre-defined system color, RGB setting, HTML Hex color code, or user defined color.  
_OK_ |  Sets the specified color and closes the **Color Selections** window.  
_Cancel_ |  Cancels any color selections and closes the **Color Selections** window.
