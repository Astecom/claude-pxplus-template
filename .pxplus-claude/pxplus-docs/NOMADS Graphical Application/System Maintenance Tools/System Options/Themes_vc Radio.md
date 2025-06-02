# Themes and Visual Classes

**Radio_Button Properties**|   
---|---  
  
For the **_Radio_Button_** control type, the button's default appearance can be controlled by setting the standard properties for _Background, Foreground_ , _Border Color_ and _Border Color 2_. Additional button properties can be set that control the button's appearance when the button's **_state_** is changed, thus providing a further visual cue. Possible button states are **_Active_** , **_Disable_** , **_Focus_** and **_Hover_** :

|  _Active_ |  Button is pressed down.  
---|---|---  
|  _Disable_ |  Button is disabled.  
|  _Focus_ |  Button has focus.  
|  _Hover_ |  Mouse is over the button.  
  
To set the properties that control the button's appearance when the button's **_state_** is changed, see the **[Colors (States)](Themes_vc%20Radio.htm#states)** category.

**_Example:_**

> You can set a "Dark Green" _Background Color_ (for the button's default state), a "Light Green" _Active Background Color_ (when clicking and holding down the mouse on the button), and a "Light Red" _Hover Background Color_ (when hovering the mouse over the button).

This table lists all the **_Radio_Button_** properties.

#### **Note:**  
Certain properties (where indicated) are applicable to Radio_Button controls **_only when they have a bitmap associated with them_** , in which case they resemble standard Button controls.

**Property** |  **Description**  
---|---  
**Attributes**  
_Bitmap Button_ |  Button has a bitmap whose width is divided into four images. Use this to custom design buttons with any color, style or shape by controlling the image that appears.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Border Style_ |  Style of button border. Options are _None, Solid, Double, Groove, Ridge, Inset_ and _Outset_ : If not set, the default Windows style is used. This must be set to a non-blank value to use the _Border Width_ and various _Border Color_ settings.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Border Width_ |  Width of the button border (in pixels). Options are _None, 1, 2, 3, 4_ and _5_. Only takes effect if the button is not flat and a _Border Style_ is specified.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Drop-List Button_ |  An extra button with an arrow bitmap is attached to the right of the main button. When the arrow bitmap button is clicked, the associated popup menu is displayed.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Flat Button_ |  Button shows no raised outline unless the mouse is over the button or the button is pressed down.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Flat - No Border_ |  Button has no border and shows no raised outline unless the button is pressed down.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Hover Color_ |  Text on the button is highlighted when the mouse is over the button. The default color is controlled by the **['CH'](../../../parameters/ch.md)** system parameter that defaults to 'Light Blue'.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Transparent_ |  Button is transparent; i.e. the window contents behind the button show through. This style can be used to place buttons onto bitmaps.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Underscore_ |  Text on the button is underscored.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
**Colors**  
_Click the dotted Query button or double click inside the cell to access_**[Color Selections](../../Appendix/Color%20Selections.md)** _. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions._ _After a color property is set, a tick in the selected color displays in the top left corner. A floating tip with a sample of the selected color displays when hovering the mouse over the color setting._ _(The color tick and color tip were added in PxPlus 2018.)  
__(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_Background Color_ |  Button background color. See _Background Color 2_ below.  
_Background Color 2_ |  Used in conjunction with _Background Color_ to generate a two-color gradient fill for the button background. The gradient fill starts with _Background Color_ at the top and flows to _Background Color 2_ at the bottom. _Background Color**must** be specified_; otherwise, _Background Color 2_ will be ignored.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Border Color_ |  Button border color. See _Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Radio.htm#border_style)** (other than the system default) is specified for the button.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Border Color 2_ |  Used in conjunction with _Border Color_ to generate a two-color button border.  _Border Color_ is applied to the top and left borders, _Border Color 2_ to the bottom and right borders. _Border Color**must** be specified_; otherwise, _Border Color 2_ will be ignored.  
_Foreground_ |  Foreground text color of the control in its default state.  
_RB Frame Color_ |  Color of the frame/outline circle of the radio button. Applies only to radio buttons that look like radio buttons (no bitmap defined), not for radio buttons that look like normal buttons. _(Radio Button Frame Color property was added in PxPlus 2024.)  
(The name change from Radio Button Frame Color to RB Frame Color was added in PxPlus 2025.)_  
_RB Mark Color_ |  Color of the circle in the radio button. Applies only to radio buttons that look like radio buttons (no bitmap defined), not for radio buttons that look like normal buttons. _(Radio Button Mark Color property was added in PxPlus 2024.)  
(The name change from Radio Button Mark Color to RB Mark Color was added in PxPlus 2025.)_  
**Colors (States)**  
_Active Background Color_ |  Background color when the button is pressed down. See _Active Background Color 2_ below.  
_Active Background Color 2_ |  Used in conjunction with _Active Background Color_ to generate a two-color gradient fill when the button is pressed down. The gradient fill starts with _Active Background Color_ at the top and flows to _Active Background Color 2_ at the bottom. _Active Background Color**must** be specified_; otherwise, _Active Background Color 2_ will be ignored.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Active Border Color_ |  Button border color when the button is pressed down. See _Active Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Radio.htm#border_style)** (other than the system default) is specified for the button.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Active Border Color 2_ |  When used in conjunction with _Active Border Color_ , these two colors represent the border colors: _Active Border Color 2_ (top and left borders) and _Active Border Color_ (bottom and right borders). _Active Border Color**must** be specified_; otherwise, _Active Border Color 2_ will be ignored.  
_Active Text Color_ |  Foreground text color when the button is pressed down.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Disable Background Color_ |  Background color when the button is disabled. See _Disable Background Color 2_ below.  
_Disable Background Color 2_ |  Used in conjunction with _Disable Background Color_ to generate a two-color gradient fill for the button background when the button is disabled. The gradient fill starts with _Disable Background Color_ at the top and flows to _Disable Background Color 2_ at the bottom. _Disable Background Color**must**_ be specified; otherwise, _Disable Background Color 2_ will be ignored.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Disable Border Color_ |  Button border color when the button is disabled. See _Disable Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Radio.htm#border_style)** (other than the system default) is specified for the button.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Disable Border Color 2_ |  Used in conjunction with _Disable Border Color_ to generate a two-color button border when the button is disabled. _Disable Border Color_ is applied to the top and left borders, _Disable Border Color 2_ to the bottom and right borders. _Disable Border Color**must**_ be specified; otherwise, _Disable Border Color 2_ will be ignored.  
_Disable Text Color_ |  Foreground text color when the button is disabled.  
_Focus Background Color_ |  Background color when the button has focus. See _Focus Background Color 2_ below.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Focus Background Color 2_ |  Used in conjunction with _Focus Background Color_ to generate a two-color gradient fill for the button background when the button has focus. The gradient fill starts with _Focus Background Color_ at the top and flows to _Focus Background Color 2_ at the bottom. _Focus Background Color**must** be specified_; otherwise, _Focus Background Color 2_ will be ignored.  
_Focus Border Color_ |  Button border color when the button has focus. See _Focus Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Radio.htm#border_style)** (other than the system default) is specified for the button.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Focus Border Color 2_ |  Used in conjunction with _Focus Border Color_ to generate a two-color button border when the button has focus. _Focus Border Color_ is applied to the top and left borders, _Focus Border Color 2_ to the bottom and right borders. _Focus Border Color**must** be specified_; otherwise, _Focus Border Color 2_ will be ignored.  
_Focus Text Color_ |  Foreground text color when the button has focus.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Gray Disabled Bitmap_ |  Controls how the image on the button will display when the button is disabled. Applicable only when there is a bitmap on the button. Click the drop-down arrow for available selections: _Default gray disabled setting**(Default)**_  
_Images display as shadows_  
_Images converted to gray scale_

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.

_(Gray Disabled Bitmap property was added in PxPlus 2024.)_  
_Hover Background Color_ |  Background color when the mouse is over the control. See _Hover Background Color 2_ below. _(Support for standard Radio Buttons with no bitmap was added in PxPlus 2025.)_  
_Hover Background Color 2_ |  Used in conjunction with _Hover Background Color_ to generate a two-color gradient fill for the button background when the mouse is over the button. The gradient fill starts with _Hover Background Color_ at the top and flows to _Hover Background Color 2_ at the bottom. _Hover Background Color**must** be specified_; otherwise, _Hover Background Color 2_ will be ignored.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Hover Border Color_ |  Border color when the mouse is over the control. See _Hover Border Color 2_ below. Border colors are applied only if a **[Border Style](Themes_vc%20Radio.htm#border_style)** (other than the system default) is specified for the control. _(Support for standard Radio Buttons with no bitmap was added in PxPlus 2025.)_  
_Hover Border Color 2_ |  Used in conjunction with _Hover Border Color_ to generate a two-color button border when the mouse is over the button. _Hover Border Color_ is applied to the top and left borders, _Hover Border Color 2_ to the bottom and right borders. _Hover Border Color**must** be specified_; otherwise, _Hover Border Color 2_ will be ignored.

#### **Note:**  
This property is effective on a radio button only when it is drawn as a button, which occurs when a bitmap is added.  
  
_Hover Text Color_ |  Foreground text color when the mouse is over the control. _(Support for standard Radio Buttons with no bitmap was added in PxPlus 2025.)_  
_RB Disable Frame Color_ |  Color of the disabled radio button frame. Applies only to radio buttons that look like radio buttons (no bitmap defined), not for radio buttons that look like normal buttons. _(RB Disable Frame Color property was added in PxPlus 2025.)_  
_RB Disable Mark Color_ |  Color of the circle in the disabled radio button. Applies only to radio buttons that look like radio buttons (no bitmap defined), not for radio buttons that look like normal buttons. _(RB Disable Mark Color property was added in PxPlus 2025.)_  
_RB Hover Color_ |  Color of the hover circle in the radio button when the mouse is over the control. Applies only to radio buttons that look like radio buttons (no bitmap defined), not for radio buttons that look like normal buttons. _(Radio Button Hover Color property was added in PxPlus 2024.)  
(The name change from Radio Button Hover Color to RB Hover Color was added in PxPlus 2025.)_  
**Font**  
_Font_ |  Click the dotted Query button or double click inside the cell to specify font properties and attributes, such as _Bold_ , _Italics_ , etc. In addition, _Alignment_ (default: _Center_) and _Word Wrap_ can be specified. See **[Font Properties](Font%20Properties.md)**. _(Alignment and Word Wrap options were added in PxPlus 2022.)  
__(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
**Other**  
_iNomads Class_ |  Assign an iNomads class to the control. The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(iNomads Class property was added in PxPlus 2020.)_  
  
## See Also

**[Themes](Themes.md)**  
**[Visual Classes](Visual%20Classes.md)**
