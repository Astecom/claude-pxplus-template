# Maintaining Library Objects 

**Library Defaults** |  **__**  
---|---  
  
**Library Defaults** is used to set design defaults for panels and objects in the _current library_. These defaults may be overridden at any time during the design process for a specific object (e.g. within the **[Panel Designer](../../Panel%20Designer/Introduction.md)**).

To set defaults that will be applied to _all new libraries_ , change the settings under **[System Defaults](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.md)**.

The NOMADS **[Custom Title Bar](../../Custom%20Title%20Bars.md)** feature allows you to design your own title bar to customize the look and feel of your application. A _TitleBar_ _Option_ is available on the **TitleBar** tab in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.htm#titlebar)** and in **[Library Defaults](Library%20Defaults.htm#titlebar)**. In addition, a custom title bar can be applied system wide by defining the **[%NOMADS'TitleBar$](../../Appendix/NOMADS%20Variables/Overview.htm#titlebar)** property. See **[Assigning Custom Title Bars](../../Custom%20Title%20Bars.htm#assigning)**.

_(The Custom Title Bar feature was added in PxPlus 2017.)_

The **[Library Bulk Edit and Search Utility](Library%20Bulk%20Edit.md)** makes it easy to apply changes to a single library or multiple libraries within a specified directory. This utility provides a convenient way to standardize the appearance of panel headers and panel controls over an entire library.

_(The Library Bulk Edit Utility was added in PxPlus 2017 and renamed to Library Bulk Edit and Search in PxPlus 2023 Update 1.)_

To invoke the **Library Defaults** window, in **[Library Object Selection](../Library%20Object%20Selection/Overview.md)**, click the _Defaults_ toolbar button or select _Library > Library Defaults_ from the menu bar.

> This window is divided into the following tabbed panels for viewing and/or changing Library Default settings: **[Setup](Library%20Defaults.htm#setup)**, **[Display](Library%20Defaults.htm#display)**, **[Font/Color](Library%20Defaults.htm#fonttab)**, **[User Aid](Library%20Defaults.htm#useraid)** and **[TitleBar](Library%20Defaults.htm#titlebar)**.

_(The Display and TitleBar tabs were added in PxPlus 2017.)  
(The Setup tab was added in PxPlus 2019.)_

_Library_ |  Displays the path and name of the current library.  
---|---  
_Description_ |  A free-form description to identify the library.  
**Setup**  
**Library Information** |  |  _Message Lib_ |  Message Library to use when processing this library. Enter the name or click the Find Message Library button to select. If the file does not exist, you will be prompted to create the file.  
---|---  
_Directory_ |  Default directory to use when processing an object. Enter the name or click the Get Directory button to select. Before processing an object, NOMADS changes to the directory defined in this field. When the object is closed, NOMADS switches back to your home working directory.  
_Prefix_ |  Prefix to use when processing an object. Before processing an object, NOMADS changes the PxPlus **PREFIX** to the one defined in this field. When the object is closed, NOMADS changes back to the original **PREFIX**.  
_User Tag Field_ |  This user-defined field can be used to pass along information for such things as formatting, error messages, and validation rules. NOMADS places the contents of this field in a variable using the control name with a **.tag$** extension. Unlike the other library defaults, this field is simply a self-documenting description text and is not passed on to controls in the library.  
**Library Object Selection Display** |  |  _Save Sort Settings for this Library on Exit_ |  Select this check box to save the sort order for the list of objects in the current library when Library Object Selection is exited. The next time Library Object Selection is invoked for the same library, this sort order is retained. By default, this check box is not selected.  
---|---  
  
_(The Save Sort Settings for this Library on Exit option was added in PxPlus 2023.)_  
  
**Display**  
**Visual Effects** |  |  _Display_ |  Sets the corresponding PxPlus mnemonic for visual mode. Click the drop down arrow for a list of selections: _Default, 2D Effect, 3D Effect, 4D Effect_. If not previously set, this will default to _4D Effect_. Settings **_cannot_** be overridden during the design process if set.

#### **Note:**  
To take full advantage of NOMADS and the new visual enhancements, **4D** mode is required.

|  _Default_ |  Assumes the currently set mnemonic in PxPlus.  
---|---  
_2D Effect_ |  Two-dimensional look will be applied.  
_3D Effect_ |  Three-dimensional look will be applied.  
_4D Effect_ |  Four-dimensional look will be applied.  
  
_(Support to default the Display option to "4D Effect" was added in PxPlus 2024.)_  
  
**Background Image** |  **_(NOMADS Only)_** Bitmap image that displays in the background for objects in the current library. Enter the name of the image or click the Bitmap Library button to select an image.  
**Alignment** |  Alignment options for the background image. Available selections are _Top Left_ , _Centered_ , _Tiled_ , _Scaled_.  
**Attributes** |  |  _Full Screen Drag_ |  **_(Applicable to "Dialogue" Panels)_** If selected, a panel can be moved by clicking anywhere on the panel _outside of the controls_ (as well as on the title bar) and dragging the panel to the desired location. This setting overrides the **[%NOMADS'Full_Screen_Drag](../../Appendix/NOMADS%20Variables/Overview.htm#fullscreendrag)** property; however, it is overridden by the _Full Screen Drag_ setting in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)**. Available selections are _Default_ , _Always on_ , _Always off_ : |  _Default_ |  Use the setting in %NOMADS'Full_Screen_Drag.  
---|---  
_Always on_ |  The Library default is to turn on the _Full Screen Drag_ feature (overrides the default set in %NOMADS'Full_Screen_Drag).  
_Always off_ |  The Library default is to turn off the _Full Screen Drag_ feature (overrides the default set in %NOMADS'Full_Screen_Drag).  
  
#### **Note:**  
_Full Screen Drag_ is **_not_** compatible with _Size Adjustment_.  
  
_(Full Screen Drag support in Library Defaults was added in PxPlus 2017.)_  
  
**Font/Color**  
**Font Specification** |  Default font for all objects in the current library. |  _Font_ |  Click the drop-down arrow for a list of available fonts. <Default Graphic Font> indicates use of the graphic font defined via the PxPlus INI file or **'[GF](../../../mnemonics/gf.md)'** mnemonic.  
---|---  
_Size_ |  Click the drop-down arrow for a list of available sizes (specific to the selected Font).  
_Alignment_ |  Alignment for Fonted Text objects in the current library. Selections are _Left Justify, Centre, Right Justify._  
_Word Wrap_ |  Wraps text within the margins.  
  
#### **Note:**  
_Alignment_ , _Word Wrap_ and **Attributes** such as _Bold_ , _Italics_ , _Underline All Characters_ and _Underline &'d Characters_ will apply to text in subordinate hierarchical levels that are currently defined with default settings (i.e. _Left Justify_ , no _Word Wrap_ and _ANSI Characters_).  
  
**Attributes** |  Check boxes for various font attributes for text objects in the current library, including _Bold_ , _Italics_ ,  _Underline All Characters_ and the following: |  _Underline &'d Chars_ |  Underlines the first character after the **&**  _(ampersand)_ when displaying hot keys for text controls.  
---|---  
_ANSI Characters_ |  Prevents use of other character sets such as _Wingdings_.  
**Color** |  **_(NOMADS Only)_** Default colors for all text regions for all objects within the current library. |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Menu Color** |  **_(NOMADS Only)_** Define menu colors to be used in the library. See **[Menu Colors](../../Creating%20Panel%20Controls/Menu%20Bar/Menu%20Colors.md)** to determine how to define colors and how the various colors are applied at run time. |  _Background_ |  Applies a background color to the menu. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
_Edge_ |  Applies a background color to the left edge portion of the menu. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Text_ |  Applies a text color to the menu items. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
_Apply Menu Colors to Top Menu_ |  Option that is used to apply the _Text_ and _Background_ menu colors to the top level of the menu bar. Available selections are _Default_ , _Yes_ , _No_ : |  _Default_ |  Use the system default setting.  
---|---  
_Yes_ |  Apply the colors to the top menu levels.  
_No_ |  Do not apply the colors to the top menu levels.  
  
_(The renaming of the options "Item Color" to "Background" and "Edge Color" to "Edge" was added in PxPlus 2024.)  
(The "Text" and "Apply Menu Colors to Top Menu" options were added in PxPlus 2024.)_  
  
**Theme** |  Assign a Theme to be applied to all panels in the current library. The Theme can be defined as a _Fixed_ value or string _Expression_. Click the Theme Maintenance button to launch the **[Themes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#themesutil)** utility for creating and editing Themes. Click the drop down arrow to select an existing Theme. Theme names that begin with an "***** " (_asterisk_) are predefined Themes used by PVX Plus and may be subject to change without notice.

#### **Note:**  
A Theme applied at the Library level overrides the General level Theme set in [**%NOMADS'Theme$**](../../Appendix/NOMADS%20Variables/Overview.htm#theme).  
  
A Theme assigned to the [**%NOMADS'ThemeOverride$**](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride) property overrides all other Theme settings but does not override the NOMADS **[Toolkit Theme](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.htm#Mark4)**. See [**Applying a Theme to Your Application**](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#applyingtheme).

_(Theme support was added in PxPlus 2017.)  
(The Theme Maintenance button was added in PxPlus 2019.)  
(The ability to select a predefined PxPlus Theme was added in PxPlus 2024.)_  
**User Aid**  
**Help Reference** |  NOMADS panels have built-in functionality that allows the user to get help via **Shift - F1** while focus is on a control. |  _Type_ |  Available selections are _External_ and _Internal_ : |  _External_ |  Standard windows Help system consisting of a Help file name (_.html, .hlp, .doc,_ etc.) and an optional keyword or reference number (fixed value or expression). Select _Popup_ to display Help as a popup instead of an independent window.  
---|---  
_Internal_ |  Application supplied message text. This may be a fixed value, string expression or message library reference (pulled from a message library file rather than hard-coded).  
_Test_ |  Button used for testing the current Help settings.  
**TitleBar**  
**TitleBar Option** |  **_(NOMADS Only)_** Set the default _TitleBar_ option for the library. See **[Custom Title Bars](../../Custom%20Title%20Bars.md)**. Available selections are _Default_ , _TitleBar_ and _None_ : |  _Default_ |  Use the current default Title Bar setting for the library panels.  
---|---  
_TitleBar_ |  Use the panel defined in Panel Information as the default Title Bar for the library.  
_None_ |  The Library default is to **_not use_** a Title Bar on the library panels.  
  
#### **Note:**  
The _TitleBar_ and _None_ settings override the system-wide setting in [**%NOMADS'TitleBar$**](../../Appendix/NOMADS%20Variables/Overview.htm#titlebar).

_(TitleBar support was added in PxPlus 2017.)_  
  
**Panel Information** |  **_(Available when TitleBar Option is TitleBar)_** |  _Fixed**or** Expression_ |  The Custom Title Bar panel information can be entered as a _Fixed_ value or as an _Expression_ : If _Fixed_ , enter the _Library_ and _Panel_ information (explained below). If the information is an expression, select _Expression_ from the drop-down list and enter an expression that can be evaluated to a value consisting of the panel name and library, separated by a comma; e.g. _PanelName,LibraryName_.  
---|---  
_Library_ |  Enter the path to the library containing the Title Bar panel definition. Click the drop-down arrow to invoke a list of recently used libraries. Click the Browse button to look through the directory structure to find the library. Be sure to use the simplest form of the path for your application.

#### **Note:**  
The Library name may be a specific or generic reference. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.  
  
_Panel_ |  Name of the panel definition to use as the Title Bar for the panel. Click the drop-down arrow to invoke a list of all panels in the library.  
**Notes** |  Add notes/comments about the library. Maximum 1024 characters.  
  
## See Also

**[Panel Bulk Edit Utility](../../Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md)**  
**[Library Bulk Edit and Search Utility](Library%20Bulk%20Edit.md)**
