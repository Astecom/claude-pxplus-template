# Control Object Properties

**BorderColor $ (or BorderColour$)** |  **_Define Color(s) of Button Border_**  
---|---  
  
## Description

Define color(s) of button border

This property controls the color of the border for any button or button-style check box or radio button whose border style (see **[Border$](border_.md)** property) is other than the system default. For information on valid color names and color specifications, see **[Color Properties](../control_object_properties/colour_properties.md)**.

This property can include either one or two colors separated by a **/** (_slash_). If only a single color is provided, then this color is used for all four borders. If two colors are supplied, the first color is used to define the Top/Left borders, while the second color is used to define the Bottom/Right borders.

The value can be set to either a numeric or a string value. If setting a numeric value, the value set is the internal color number for the desired color. If setting a string value, any form of color specification may be used (color name, RGB, HSL, or HTML color code).

#### **Note:**  
This property is effective on a check box or radio button only when it is drawn as a button, which occurs when a bitmap is added.

## Used By

**BUTTON****CHECK_BOX****RADIO_BUTTON****TRISTATE_BOX**
