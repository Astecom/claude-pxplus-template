# Themes and Visual Classes

**Button Properties**|   
---|---  
  
For the **_Button_** control type, the button's default appearance can be controlled by setting the standard properties for _Background, Foreground_ , _Border Color_ and _Border Color 2_. Additional button properties can be set that control the button's appearance when the button's **_state_** is changed, thus providing a further visual cue. Possible button states are **_Active_** , **_Disable_** , **_Focus_** and **_Hover_** :

  |  _Active_ |  Button is pressed down.  
---|---|---  
  |  _Disable_ |  Button is disabled.  
  |  _Focus_ |  Button has focus.  
  |  _Hover_ |  Mouse is over the button.  
  
To set the properties that control the button's appearance when the button's **_state_** is changed, see the **[Colors (States)](Themes_vc%20Btn.htm#states)** category.

**_Example:_**

> You can set a "Dark Green" _Background Color_ (for the button's default state), a "Light Green" _Active Background Color_ (when clicking and holding down the mouse on the button), and a "Light Red" _Hover Background Color_ (when hovering the mouse over the button).

This table lists all the **_Button_** properties:

**Property** |  **Description**  
---|---  
**Attributes**  
_Bitmap Button_ |  Button has a bitmap whose width is divided into four images. Use this to custom design buttons with any color, style or shape by controlling the image that appears.  
_Border Style_ |  Style of button border. Options are _None, Solid, Double, Groove, Ridge, Inset_ and _Outset_ :      If not set, the default Windows style is used. This must be set to a non-blank value to use the _Border Width_ and various _Border Color_ settings.  
_Border Width_ |  Width of the button border (in pixels). Options are _None, 1, 2, 3, 4_ and _5_. Only takes effect if the button is not flat and a _Border Style_ is specified.  
_Corner Radius_ |  Sets the radius for the button corners. Works only in **4D** mode. Possible values are _Null (blank)_ , _Round_ , _Square_ or a value from 0 to 255 inclusive. See **[CornerRadius$](../../../control_object_properties/button_properties.htm#cornerradius)** property. **_Example:_** Corner Radius set to **Round** :  
  
     Corner Radius set to **Square** :  
  
     Corner Radius set to a value of 10:  
  
    

#### **Note:**  
Corner rounding is limited based on the control type and/or the control size.

_(Corner Radius property was added in PxPlus 2026.)_  
_Drop-List Button_ |  An extra button with an arrow bitmap is attached to the right of the main button. When the arrow bitmap button is clicked, the associated popup menu is displayed.  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the button or the button is pressed down.  
_Flat - No Border_ |  Button has no border and shows no raised outline unless the button is pressed down.  
_Focus Rectangle_ |  Controls whether a dotted focus rectangle displays around the Button text. Possible values are: |    |  _Default_ |  Uses the default setting.  
---|---|---  
  |  _Display_ |  Focus rectangle is shown (On).  
  |  _Suppress_ |  Focus rectangle is not shown (Off).  
  
**_Example:_**

Button focus is **_Off_** :

    

Button focus is **_On_** :

    

_(Focus Rectangle property was added in PxPlus 2026.)_  
  
_Hover Color_ |  Text on the button is highlighted when the mouse is over the button. The default color is controlled by the **['CH'](../../../parameters/ch.md)** system parameter that defaults to 'Light Blue'.  
_Hover Cursor_ |  Controls the type of cursor to display whenever the mouse moves over the control. Options are _Default, Arrow, Wait, Insert, Movement arrows, Sizing arrow, Hand, Crossed hand, Rabbit in hat, Happy face, Sad face, Up/Down arrow, Left/Right arrow_ and _Not_ _allowed_.  
_Moveable_ |  Button can be moved by dragging it with the mouse. This movement will **_not_** be saved. _(Moveable property was added in PxPlus 2019.)_  
_Transparent_ |  Button is transparent; i.e. the window contents behind the button show through. This style can be used to place buttons onto bitmaps.  
_Underscore_ |  Text on the button is underscored.  
**Colors**  
_Click the dotted Query button or double click inside the cell to access_**[Color Selections](../../Appendix/Color%20Selections.md)** _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The color tick and color tip were added in PxPlus 2018.)  
__(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Background Color_ |  Button background color. See _Background Color 2_ below.  
_Background Color 2_ |  Used in conjunction with _Background Color_ to generate a two-color gradient fill for the button background. The gradient fill starts with _Background Color_ at the top and flows to _Background Color 2_ at the bottom. _Background Color**must** be specified_; otherwise, _Background Color 2_ will be ignored.  
_Border Color_ |  Button border color. See _Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Btn.htm#border_style)** (other than the system default) is specified for the button.  
_Border Color 2_ |  Used in conjunction with _Border Color_ to generate a two-color button border. _Border Color_  is applied to the top and left borders, _Border Color 2_ to the bottom and right borders. When **[Corner Radius](Themes_vc%20Btn.htm#cornerradius)** is set to _Round_ or a value, _Border Color 2_ is applied to all the button borders when the button is pressed down. _Border Color**must** be specified_; otherwise, _Border Color 2_ will be ignored.  
_Foreground_ |  Foreground text color of the control in its default state.  
**Colors (States)**  
_Active Background Color_ |  Background color when the button is pressed down. See _Active Background Color 2_ below.  
_Active Background Color 2_ |  Used in conjunction with _Active Background Color_ to generate a two-color gradient fill when the button is pressed down. The gradient fill starts with _Active Background Color_ at the top and flows to _Active Background Color 2_ at the bottom. _Active Background Color**must** be specified_; otherwise, _Active Background Color 2_ will be ignored.  
_Active Border Color_ |  Button border color when the button is pressed down. See _Active Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Btn.htm#border_style)** (other than the system default) is specified for the button.  
_Active Border Color 2_ |  When used in conjunction with _Active Border Color_ , these two colors represent the border colors:  _Active Border Color 2_ (top and left borders) and _Active Border Color_ (bottom and right borders). When **[Corner Radius](Themes_vc%20Btn.htm#cornerradius)** is set to _Round_ or a value, _Active Border Color 2_ is applied to all the button borders when the button is pressed down. _Active Border Color**must** be specified_; otherwise, _Active Border Color 2_ will be ignored.  
_Active Text Color_ |  Foreground text color when the button is pressed down.  
_Disable Background Color_ |  Background color when the button is disabled. See _Disable Background Color 2_ below.  
_Disable Background Color 2_ |  Used in conjunction with _Disable_ _Background Color_ to generate a two-color gradient fill for the button background when the button is disabled. The gradient fill starts with _Disable_ _Background Color_ at the top and flows to _Disable Background Color 2_ at the bottom. _Disable Background Color**must**_ be specified; otherwise, _Disable Background Color 2_  will be ignored.  
_Disable Border Color_ |  Button border color when the button is disabled. See _Disable Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Btn.htm#border_style)** (other than the system default) is specified for the button.  
_Disable Border Color 2_ |  Used in conjunction with _Disable_ _Border Color_ to generate a two-color button border when the button is disabled. _Disable Border Color_  is applied to the top and left borders, _Disable Border Color 2_ to the bottom and right borders. _Disable Border Color**must**_ be specified; otherwise, _Disable Border Color 2_  will be ignored. When **[Corner Radius](Themes_vc%20Btn.htm#cornerradius)** is set to _Round_ or a value, _Disable Border Color 2_ has no effect.  
_Disable Text Color_ |  Foreground text color when the button is disabled.  
_Focus Background Color_ |  Background color when the button has focus. See _Focus Background Color 2_ below.  
_Focus Background Color 2_ |  Used in conjunction with _Focus Background Color_ to generate a two-color gradient fill for the button background when the button has focus. The gradient fill starts with _Focus Background Color_ at the top and flows to _Focus Background Color 2_ at the bottom. _Focus Background Color**must** be specified_; otherwise, _Focus Background Color 2_ will be ignored.  
_Focus Border Color_ |  Button border color when the button has focus. See _Focus Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Btn.htm#border_style)** (other than the system default) is specified for the button.  
_Focus Border Color 2_ |  Used in conjunction with _Focus Border Color_ to generate a two-color button border when the button has focus. _Focus Border Color_  is applied to the top and left borders, _Focus Border Color 2_ to the bottom and right borders. _Focus Border Color**must** be specified_; otherwise, _Focus Border Color 2_ will be ignored. When **[Corner Radius](Themes_vc%20Btn.htm#cornerradius)** is set to _Round_ or a value, _Focus Border Color 2_ has no effect.  
_Focus Text Color_ |  Foreground text color when the button has focus.  
_Gray Disabled Bitmap_ |  Controls how the image on the button will display when the button is disabled. Applicable only when there is a bitmap on the button. Click the drop-down arrow for available selections:    _Default gray disabled setting**(Default)**_  
   _Images display as shadows_  
   _Images converted to gray scale_ _(Gray Disabled Bitmap property was added in PxPlus 2024.)_  
_Hover Background Color_ |  Background color when the mouse is over the button. See _Hover Background Color 2_ below.  
_Hover Background Color 2_ |  Used in conjunction with _Hover Background Color_ to generate a two-color gradient fill for the button background when the mouse is over the button. The gradient fill starts with _Hover Background Color_ at the top and flows to _Hover Background Color 2_ at the bottom. _Hover Background Color**must** be specified_; otherwise, _Hover Background Color 2_ will be ignored.  
_Hover Border Color_ |  Button border color when the mouse is over the button. See _Hover Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Btn.htm#border_style)** (other than the system default) is specified for the button.  
_Hover Border Color 2_ |  Used in conjunction with _Hover Border Color_ to generate a two-color button border when the mouse is over the button. _Hover Border Color_  is applied to the top and left borders, _Hover Border Color 2_ to the bottom and right borders. _Hover Border Color**must** be specified_; otherwise, _Hover Border Color 2_ will be ignored. When **[Corner Radius](Themes_vc%20Btn.htm#cornerradius)** is set to _Round_ or a value, _Hover Border Color 2_ has no effect.  
_Hover Text Color_ |  Foreground text color when the mouse is over the control.  
**Font**  
_Font_ |  Click the dotted Query button or double click inside the cell to specify font properties and attributes, such as _Bold_ , _Italics_ , etc. In addition, _Alignment_ (default: _Center_) and _Word Wrap_ can be specified. See **[Font Properties](Font%20Properties.md)**. _(Alignment and Word Wrap options were added in PxPlus 2022.)  
__(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
**Other**  
_iNomads_ _Class_ |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(iNomads Class property was added in PxPlus 2020.)_  
  
## See Also

**[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**

 

 

 
