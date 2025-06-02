# Panel Designer

**Panel Header** |  **__**  
---|---  
  
By default, Panel _Header_ properties are loaded when the **[Panel Designer](../Introduction.md)** is first launched. These are the overall properties used to define the panel itself, rather than the specific controls within the panel. Some changes to panel header properties (e.g. font and background/foreground colors) are automatically applied to all the controls within the panel. To reverse any changes you make, click the Undo button on the toolbar or select _Edit_ > _Undo_ from the menu bar.

The NOMADS **[Custom Title Bar](../../Custom%20Title%20Bars.md)** feature allows you to design your own title bar to customize the look and feel of your application. A _TitleBar_ _Option_ is available on the **TitleBar** tab in the **[Panel Header](Overview.htm#titlebar)** and in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#titlebar)**. In addition, a custom title bar can be applied system wide by defining the **[%NOMADS'TitleBar$](../../Appendix/NOMADS%20Variables/Overview.htm#titlebar)** property. See **[Assigning Custom Title Bars](../../Custom%20Title%20Bars.htm#assigning)**.

_(The Custom Title Bar feature was added in PxPlus 2017.)_

The **[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** makes it easy to apply changes simultaneously to controls in multiple panels either in a single library or in multiple libraries within a specified directory. This utility provides a convenient way to standardize the appearance of panel headers and panel controls over an entire library.

_(The Library Bulk Edit Utility was added in PxPlus 2017 and renamed to Library Bulk Edit and Search in PxPlus 2023 Update 1.)_

The _Wiki_ Help option on the **[User Aids](Overview.htm#useraids)** tab allows Help documentation to be generated directly from a panel and displayed in the PxPlus Wiki. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**.

_(The Wiki option for NOMADS panels was added in PxPlus 2023.)_

##  Panel Definition

The panel itself can be selected for editing from the Panel Designer by clicking the _Header_ option on the toolbar or selecting _Panel_ > _Header_ from the menu bar. The **Panel Definition** dialogue (pictured below using the **[Folder Style](../Folder%20Style/Using%20the%20Folder%20Style.md)** version of the NOMADS Panel Designer) is displayed.

> ##  Panel Header Properties

The **Panel Definition** dialogue consists of the following folder tabs: **[Display](Overview.htm#display)**, **[Font/Color](Overview.htm#font)**, **[Attributes](Overview.htm#attributes)**, **[Logic](Overview.htm#logic)**, **[User Aids](Overview.htm#useraids)**, **[iNomads Settings](Overview.htm#inomads)** and **[TitleBar](Overview.htm#titlebar)**.  
  
_(The TitleBar tab was added in PxPlus 2017.)_

The design properties displayed on each folder panel are explained below.

_Panel_ |  Display-only field that contains the name of the panel object.  
---|---  
_Last update_ |  Display-only information consisting of a date stamp and User ID. This information is shown when editing an existing panel.  
**Display** |   
**Title** |  Panel title to be displayed (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
**Default Program** |  Default program name to be used for panel and control events (_Fixed_ value or string _Expression_). |  _Tag Field_ |  Free-form information field (_Fixed_ value or string _Expression_).  
---|---  
_Precision_ |  Current precision for panel. If value is set to _< Asis>_, NOMADS will use the value set by the **[Precision](../../../directives/precision.md)** directive.  
**Position** |  Determines where the panel is placed on the desktop. NOMADS provides the capability for the system to remember where a panel was last placed and will attempt to restore it to the same position. See **[Panel Persistence](../Resizing%20and%20Persistence/Panel%20Persistence.md)**. Click the drop-down arrow for a list of selections: _Absolute, Relative, Centered_. |  _Absolute_ |  **_(Default)_** The panel will be positioned on the current monitor at the _Column_ and _Line_ specified. The current monitor will be the main monitor for the initial screen or the monitor in use if you currently have a panel/window being displayed.  
---|---  
_Relative_ |  The panel will be positioned using the _Column_ and _Line_ values as relative positions based on the current panel/window being displayed. If no window is displayed, then the position will be relative top of the screen.

#### **Note:**  
There is almost **_always_** a window logically present even if it is minimized, as PxPlus creates a main window during start up and preserves its last location automatically.  
  
_Centered_ |  The _Column_ and _Line_ values are ignored. The panel is displayed as centered on the current display.  
  
Specify the starting _Column_ and _Line_ values of the panel:

_Column_ |  Starting column for the top left corner of the panel - numeric expression. Format mask is -##0. Valid entries are -620 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of the panel - numeric expression. Format mask is -##0. Valid entries are -255 to 255.  
  
_(Support for increased Column and Line maximums was added in PxPlus 2021.)_  
  
**Size** |  |  _Width_ |  Width of the panel in number of columns - numeric expression. Format mask is ##0. Valid entries are 2 to 620.  
---|---  
_Height_ |  Height of the panel in number of lines - numeric expression. Format mask is ##0. Valid entries are 3 to 255.  
  
#### **Note:**  
If adding an Info message to the panel to display pertinent user information, the height and/or width will need to be adjusted to accommodate this.  
  
To view a video presentation on how to add an informational message to a panel, go to **[How to Add an Info Message](https://www.youtube.com/watch?v=rPbBCcMRWRc)**.

_(Support for increased Width and Height maximums was added in PxPlus 2021.)_  
  
**Panel Transparency (0 - 100%)** |  **_(NOMADS Only)_** Percentage transparency for the current window. A value of "0" indicates completely opaque. A value of "100" is completely transparent.  
**Background Image** |  **_(NOMADS Only)_** Name of the picture (_Fixed_ or string _Expression_). Click the Bitmap Library button to select a bitmap from the Bitmaps dialogue. |  _Widget_ |  Panel is to be used as a Widget with the panel's defined background color transparent. Generally, a bitmap is associated with the panel.  
---|---  
**Image Alignment** |  Alignment options for the background image. Available selections are _Top Left, Centered, Tiled, Scaled_.  
**Font/Color** |   
**Font Specification** |  |  _Font  
Size_ |  Click the drop-down arrow for a list of selections.  
---|---  
**Alignment** |  Sets the defaults for _Fonted Text_ on the panel. |  _Align_ |  Alignment for _Fonted Text_ objects on the current panel. Selections are _Left Justify, Center, Right Justify_.  
---|---  
_Word Wrap_ |  Wraps text. Sets the _Word Wrap_ option for _Fonted Text_.  
  
#### **Note:**  
_Alignment_ , _Word Wrap_ and **Attributes** such as _Bold_ , _Italics_ , _Underline All Characters_ and _Underline &'d Characters_ will apply to controls on the panel that are currently defined with default settings (i.e. _Left Justify_ , no _Word Wrap_ and _ANSI Characters_). These settings will also override the settings in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**.  
  
**Color** |  **_(NOMADS Only)_** |  _Foreground  
Background_ |  Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
  
**Attributes** |  Optional attributes for _Bold, Italics_ , etc.  
**Mnemonics** |  Sets the character-based attributes for _Standard Text_ on the panel. |  _Inverse Video ('BR')_ |  See **['BR'](../../../mnemonics/br.md)** mnemonic.  
---|---  
_Underscore ('BU')_ |  See **['BR'](../../../mnemonics/br.md)** mnemonic.  
_Background ('SB')_ |  See **['BR'](../../../mnemonics/br.md)** mnemonic.  
**Theme** |  Assign a Theme to be applied to the panel. The Theme can be defined as a _Fixed_ value or string _Expression_. Click the Theme Maintenance button to launch the **[Themes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#themesutil)** utility for creating and editing Themes. Click the drop down arrow to select an existing Theme. Theme names that begin with an "***** " (_asterisk_) are predefined Themes used by PVX Plus and may be subject to change without notice.

#### **Note:**  
A Theme applied at the Panel level overrides the General level Theme set in [**%NOMADS'Theme$**](../../Appendix/NOMADS%20Variables/Overview.htm#theme) and the Library level Theme assigned in [**Library Defaults**](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#fonttab).  
  
A Theme assigned to the [**%NOMADS'ThemeOverride$**](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride) property overrides all other Theme settings but does not override the NOMADS **[Toolkit Theme](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.htm#Mark4)**. See [**Applying a Theme to Your Application**](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#applyingtheme).

_(Theme support was added in PxPlus 2017.)  
(The Theme Maintenance button was added in PxPlus 2019.)  
(The ability to select a predefined PxPlus Theme was added in PxPlus 2024.)_  
**Attributes** |   
**Attributes** |  |  _Dialogue_ |  Panel is created as a freestanding dialogue box and is not constrained by the main PxPlus window. **_(Default)_** See **[Note](Overview.htm#note)** at the bottom of this page.  
---|---  
_Child Window_ |  Window is a child of the current window. See **[Note](Overview.htm#note)** at the bottom of this page.  
_Suppress.VAL_ |  If this option is **_Off_** , a suffix of .VAL$ or .VAL (numeric controls) will be added to all control names.  
_Always on Top_ |  Panel is displayed on top of any other open windows.  
_Menu Bar_ |  Panel has a menu bar. To define a menu bar, see **[Menu Bar Definition](../../Creating%20Panel%20Controls/Menu%20Bar/Menu%20Bar%20Definition.md)**.  
_No Windows Title Bar_ |  Panel is drawn with no Windows title bar displayed.  
_Status Bar_ |  Panel will be created with a status line/message bar.  
_Status Bar Segments_ |  **_(NOMADS Only - Available when Status Bar check box is selected)_** Define up to three additional _(optional)_ status bar segments for the current panel by clicking the button next to the input control and entering the starting column number for the segment. The default segment (0) starts at column 0. Additional segments can be defined with a _positive_ column number to specify the starting column from the _left_ , or a _negative_ column number to specify the start of a segment from the _right_. Display text in the individual segments using the **['MESSAGE'](../../../mnemonics/message.md)** mnemonic. **_Example:_**  
  
PRINT 'MESSAGE'(_text$,segnum_) **_Where:_**  
  
The first segment number is 0. If the _Status Bar_ attribute is checked and no segments are defined, the system status bar will be used. If segments are defined for the panel, they will override the system definition.

#### **Note:**  
Use the [ **'MESSAGE'**](../../../mnemonics/message.md) mnemonic to define a system status bar.  
  
_Minimize Box_ |  Enables the _minimize_ box in the top right corner of the window.  
_Maximize Box_ |  Enables the _maximize_ box in the top right corner of the panel.  
_Close Box_ |  Enables the Windows _close_ button at the top right corner of the panel.  
_Synchro-Lock_ |  Snap position to match top lines when moved close to the top corners of the current panel.  
_Auto Refresh_ |  The screen display is refreshed automatically when any control values are changed by the application.  
_Auto Close Files_ |  If enabled, all non-global files opened by the application are closed automatically when the panel terminates.  
_Size Adjustment_ |  Input objects (Multi-Lines, Drop Boxes, List Boxes and Grids) can be resized at run time by dragging their edges. See **[Resizing Input Controls](../Resizing%20and%20Persistence/Resizing%20Input%20Controls.md)**.

#### **Note:**  
_Size Adjustment_ is **_not_** compatible with _Full Screen Drag_ (see below).  
  
_Full Screen Drag_ |  **_(Applicable to "Dialogue" Panels)_** If selected, a panel can be moved by clicking anywhere on the panel _outside of the controls_ (as well as on the title bar) and dragging the panel to the desired location. This setting overrides the **[%NOMADS'Full_Screen_Drag](../../Appendix/NOMADS%20Variables/Overview.htm#fullscreendrag)** property and the _Full Screen Drag_ setting in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**. Available selections are: |  _Default_ |  Use the default setting based on the **[%NOMADS'Full_Screen_Drag](../../Appendix/NOMADS%20Variables/Overview.htm#fullscreendrag)** property and the _Full Screen Drag_ setting in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**.  
---|---  
_Always on_ |  The panel will **_always_** have the _Full Screen Drag_ feature turned **_On_** , regardless of default settings.  
_Always off_ |  The panel will **_always_** have the _Full Screen Drag_ feature turned **_Off_** , regardless of default settings.  
  
#### **Note:**  
_Full Screen Drag_ is **_not_** compatible with _Size Adjustment_ (above).

_(The Full Screen Drag option was added in PxPlus 2016 and enhanced in PxPlus 2017.)_  
  
_Panel Persistence_ |  Controls the ability to suppress **[Panel Persistence](../Resizing%20and%20Persistence/Panel%20Persistence.md)** at the panel level. Available selections are: |  _Default_ |  Panel persistence is based on **[%NOMADS'Panel_Info_Prog$](../../Appendix/NOMADS%20Variables/Overview.htm#panelinfoprog)** and **[%NOMADS'RelPnl_Suppress_Persistence](../../Appendix/NOMADS%20Variables/Overview.htm#relpnlsuppresspersistence)** settings.

#### **Note:**  
The **%NOMADS'RelPnl_Suppress_Persistence** property applies **_only_** to panels with **Position** set to [**Relative**](Overview.htm#position).  
  
---|---  
_Suppress persistence (location & size)_ |  Persistence for the panel is turned **_Off_**.  
_Suppress location persistence only_ |  If panel persistence is turned **_On_** , this setting causes the _size_ of the panel to persist but places the panel in a location based on the original panel definition.  
  
_(The Panel Persistence option was added in PxPlus 2019.)_  
  
**Parameters** |  |  _Sizing_ |  Determines whether the panel will remain fixed in size or can be resized at run time by dragging the edges of the window. Click the drop-down arrow for a list of selections: _Fixed, Resizable, Resizable/Auto Scroll, Resizable/Auto Size, Resizable/Custom_.

#### **Note:  
** To make it possible for users to resize a panel larger than the defined size while still maintaining a minimum panel size, select the _Maximize Box_ attribute and set the _Sizing_ parameter to _Resizable/Custom._  
  
---|---  
_Frame Style_ |  **_(NOMADS Only)_** Controls the type of frame or border for the current window. Click the drop-down arrow for a list of selections: |  _Default_ |  Uses current settings. The standard Windows title bar is displayed.  
---|---  
_Thick border with caption_ |  Adds a thick border and a caption to the current window. The standard Windows title bar is displayed.  
_Thick with no caption_ |  Adds a thick border to the current window but no caption. The standard Windows title bar is **_not_** displayed.  
_Thin with no caption_ |  Adds a thin border to the current window but no caption. The standard Windows title bar is **_not_** displayed.  
_No frame or caption_ |  Does not add a border or a caption. The standard Windows title bar is **_not_** displayed.  
  
For information on the use of the _Frame Style_ parameter when creating a custom title bar, see **[Custom Title Bars](../../Custom%20Title%20Bars.htm#panelheader)**.  
  
_Enter = Tab_ |  Determines behaviour of the <Enter> key. Click the drop-down arrow for a list of selections: |  _Default - Use %NOMAD_ENTER_TAB_  
---  
_On - <Enter> key behaves like <Tab> key_ (Focus moves to the next control and 'On Change' only fires if the value has changed.)  
_Off - <Enter> fires 'On change' and maintains focus_  
**Logic** |   
_Default Program_ |  **_(NOMADS+ and Folder Style)_** Displays the name of the **[Default Program](Overview.htm#display)** (from the **Display** tab). _(The Default Program on the Logic tab was added for display in PxPlus 2019.)_  
**Pre-Display** |  Logic to process before the panel is drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**Post-Display** |  Logic to be processed after the panel and all the controls are drawn. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**On Exit** |  Logic to be executed before the panel is closed. Click the drop-down arrow for a list of selections. See **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**. Click the Program Logic button beside the _Perform_ or _Call_ action to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
**On Timer** |  Implement a timer to run while the panel is active. Select the _Define_ button to enter a definition that consists of a timer duration (in seconds) and logic to execute when the timer event occurs. When another panel, msgbox, etc. is invoked, the timer is suspended until the original panel is active again.

#### **Note:**  
The existing timer logic using the [**%NOMAD_Timeout**](../../Appendix/NOMADS%20Variables/Overview.htm#timeout) variable and User CTL -1900 is still supported.  
  
**User Aids** |   
**Help Reference** |  |  _Type_ |  Available selections are:  
---|---  
|  _External_ |  Standard windows Help system consisting of a Help file name and an optional keyword or reference number (_Fixed_ or _Expression_).  
|  _Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
|  _Wiki_ |  Generates Help documentation directly from a NOMADS panel and displays it in the PxPlus Wiki. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. In the _Wiki Page_ field, enter a title for the Wiki page (defaults to the name of the panel). Can be a Fixed value or a string Expression.  
  
_(The Wiki option was added in PxPlus 2023.)_  
  
**Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
**iNomads Settings** |   
**iNomads Class** |  The iNomads class contains class attribute references associated with the panel in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of predefined classes, see **[iNomads Classes](../../../iNOMADS/iNomads%20Classes.md)**. _(The iNomads Class option was added in PxPlus 2016.)_  
**iNomads Template** |  If specified, the iNomads template will be applied to the panel, overriding the template specified for the session. See **[iNomads Templates](../../../iNOMADS/Templates.md)**. _(The iNomads Template option was added in PxPlus 2016.)_  
**TitleBar** |   
**TitleBar Option** |  **_(NOMADS Only)_** Set the _TitleBar_ option for the panel. See **[Custom Title Bars](../../Custom%20Title%20Bars.md)**. Available selections are: |  _Default_ |  Use the current default _Title Bar_ setting for the panel based on the **[%NOMADS'TitleBar$](../../Appendix/NOMADS%20Variables/Overview.htm#titlebar)** and **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)** settings.  
---|---  
_TitleBar_ |  Use the panel defined in _Panel Information_ as the title bar for the panel.  
_None_ |  The panel will **_not_** have a title bar.  
  
#### **Note:**  
The _TitleBar_ and _None_ settings **_override_** the system-wide setting in [**%NOMADS'TitleBar$**](../../Appendix/NOMADS%20Variables/Overview.htm#titlebar) and the _Library_ setting in [**Library Defaults**](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#titlebar).

_(TitleBar Option was added in PxPlus 2017.)_  
  
**Panel Information** |  **_(Available when TitleBar Option is TitleBar)_** |  _Fixed**or** Expression_ |  The Custom Title Bar panel information can be entered as a _Fixed_ value or as an _Expression_ : |  |  If **_Fixed_** , enter the _Library_ and _Panel_ information (see below).  
---|---  
|  If the information is an **_Expression_** , select _Expression_ from the drop-down list and enter an expression that can be evaluated to a value consisting of the panel name and library, separated by a comma; e.g. _PanelName,LibraryName_.  
_Library_ |  Enter the path to the library containing the Title Bar panel definition. Click the drop-down arrow for a list of recently used libraries. Click the Browse button to look through the directory structure to find the library. Be sure to use the simplest form of the path for your application.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  Name of the panel definition to use as the Title Bar for the panel. Click the drop-down arrow for a list of all panels in the library.  
  
_(Panel Information was added in PxPlus 2017.)_  
  
|   
_Security_ |  Assign security classifications and access levels for the panel header. See **[Restricting Access](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** for information on **Object Security Definition**.  
_Popup Menu_ |  Associate a floating menu that will appear when right clicking the mouse over a control or a blank area on a panel. Valid formats are a NOMADS popup object or a user-supplied program (_Fixed_ value or string _Expression_). See **[Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/Overview.md)**.  
_Notes_ |  Add notes/comments for the panel. Maximum 1024 characters. These notes also display in the Wiki Help documentation for the panel. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**.  
  
#### **Note****:**  
When testing a panel that has been defined with the attributes _Child Window_ turned **_On_** and _Dialogue_ turned **_Off_** , the panel will not be visible if the panel's starting line position is set to a value **_greater_** than the height of the panel.

## See Also

**[Panel Bulk Edit Utility](../Options%20and%20Utilities/Bulk%20Edit%20Utility.md)**  
**[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)**  
**[Custom Title Bars](../../Custom%20Title%20Bars.md)**
