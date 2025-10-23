# Themes and Visual Classes

**Font Properties**|   
---|---  
  
The **Font Properties** window presents options for specifying a font name, font size and various other attributes for displaying text.

To invoke this window, click the three-dotted query button associated with a font property (i.e. _Font_ or _Header Font_), which applies only when defining a **[Theme](Themes.md)** or **[Visual Class](Visual%20Classes.md)**.

> This window consists of the following:

**Font Specification** |  |  _Font Name_ |  Name of the font; e.g. Courier New, Times New Roman, etc. Click the drop-down for a list of fonts that reside on the current system. If the font is set to _< Default Graphic Font>_ for both the _Default_ and _Control Type_ settings, then the font will be that defined in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#fonttab)**, the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.htm#font)** or the individual control definition, with the latter taking precedence.  
---|---  
_Use 'Font Name' only  
(* Use Size and Attributes from the library, panel and control settings)_ |  When selected (**_Default_**), only the specified _Font Name_ is used, but the font _Size_ and _Attributes_ from the current definition are not used. Instead, the font _Size_ and _Attributes_ used will be those set in Library Defaults, the Panel Header or the individual control definitions. If this check box is not selected, the _Size_ and _Attributes_ defined in the current **Font Properties** window will override other font settings. _(The Use 'Font Name' only check box option was added in PxPlus 2025.)_  
_Size_ |  **_(Available when Use 'Font Name' only check box is not selected)_** Click the drop-down for a list of sizes. The _Quarter_ , _Half_ , _Regular_ and _Double_ sizes are available for all fonts. (**_Default_** is _Regular_.) Some fonts also allow point sizes, which are fixed sizes. The _Regular_ size is recommended, as it is internally adjusted to match the base font settings.  
**Attributes** |  **_(Available when Use 'Font Name' only check box is not selected)_** |  _Bold_ |  Use bolded text.  
---|---  
_Underscore all_ |  Underline all characters.  
_ANSI characters_ |  Use Windows ANSI character set 0. **_(Default)_**  
_Italics_ |  Use italicized text.  
_Underscore &'ed characters_ |  Underline the character following the **&** (_ampersand_). This is used when defining hot keys.  
_Alignment_ |  The _Left Justify_ , _Center_ and _Right Justify_ alignments are available for Button, Check_Box, Radio_Button and Tristate_Box control types. (**_Default_** is _Center_.) The _Left Justify_ , _Center_ and _Right Justify_ alignments are also available for _Default_ and _Folder_ control types. (**_Default_** is _Left Justify_.) For a Fonted_Text control type, multiple alignments are available: _Left Justify_ , _Center_ , _Right Justify_ , _Left Top_ , _Left Middle_ , _Left Bottom_ , _Center Top_ , _Center Middle_ , _Center Bottom_ , _Right Top_ , _Right Middle_ and _Right Bottom_. (**_Default_** is _Left Justify_.)  
_Word Wrap_ |  Wraps text within the margins. This option is available for Default, Button, Check_Box, Folder, Fonted Text, Radio_Button and Tristate_Box control types.  
_Rotation_ |  Font rotation in degrees. This option is available for the Fonted_Text control type using a True Type font only.  
_Reset to default_ |  Select this check box to reset the font properties to the default settings. The default settings are _< Default Graphic Font>_, _Regular_ size with ANSI characters.
