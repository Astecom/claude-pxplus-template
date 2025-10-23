# File Maintenance Generator

**Step 3: File Maintenance Screen Layout**|   
---|---  
  
Define the options for screen positioning, browse and action buttons locations, and the panel header. Specify whether an optional **[Embedded Panel](../../Creating%20Panel%20Controls/Embedded%20Panels/Overview.md)** and/or HTML page will be included.

When only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , options that are not applicable are not displayed, as shown in the second screen shot:

|    
**_When only "HTML Page" is selected_**  
---|---  
  
This panel consists of the following:

**Define screen position** |  _Define the options for screen position for the NOMADS panel. Click the Additional Options button for panel header options._  
---|---  
_Position_ |  **_(Applicable for NOMADS Panels Only)_** Determines where the panel is placed on the desktop. NOMADS provides the capability for the system to remember where a panel was last placed and will attempt to restore it to the same position. See **[Panel Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md)**. Click the drop-down arrow for a list of selections: |  _Absolute_ |  The panel will be positioned on the current monitor at the _Column_ and _Line_ specified. The current monitor will be the main monitor for the initial screen or the monitor in use if you currently have a panel/window being displayed.  
---|---  
_Relative_ |  **_(Default)_** The panel will be positioned using the _Column_ and _Line_ values as relative positions based on the current panel/window being displayed. If no window is displayed, then the position will be relative top of the screen.

#### **Note:  
** There is almost **_always_** a window logically present even if it is minimized, as PxPlus creates a main window during start up and preserves its last location automatically.  
  
_Centered_ |  The panel is displayed as centered on the current display. _Column_ and _Line_ values are **_not_** applicable.  
_Column_ |  **_(Applicable for NOMADS Panels Only - Available when Position is Absolute or Relative)_** Starting vertical position for the top left corner of the generated panel. Valid values are 1 - 620. (**_Default_** is 5.) _(Support for increased Column maximum was added in PxPlus 2021.)_  
_Line_ |  **_(Applicable for NOMADS Panels Only - Available when Position is Absolute or Relative)_** Starting horizontal position for the top left corner of the generated panel. Valid values are 1 - 255. (**_Default_** is 5.) _(Support for increased Line maximum was added in PxPlus 2021.)_  
_Additional Options_ |  **_(Applicable for NOMADS Panels Only)_** Button that launches the **[Additional Options](Screen%20Layout.htm#addtl_options)** window with more options for defining the panel header.  
_Panel Notes_ |  Button that is used to add notes/comments for the panel. Maximum 1024 characters. (Same as the **[Notes](../../Panel%20Designer/Panel%20Header/Overview.htm#notes)** button in NOMADS **Panel Definition**.) _(The Panel Notes button was added in PxPlus 2022.)_  
**Location of browse buttons** |  _Specify the location of the browse buttons. Define any_**[Additional Buttons](Screen%20Layout.htm#addtl_buttons)** _to be added before and/or after the browse buttons._  
_(Location Drop Box)_ |  Click the drop-down arrow for a list of locations. If selecting a _Location_ that is either identical to or conflicts with the location of the _Action_ buttons, a message will display, in which case, select a different location. For additional information, see **[Browse and Action Buttons in HTML Pages](Screen%20Layout.htm#buttons)**. |  _Bottom Left_ |  **_(Default)_** Buttons are positioned horizontally in the bottom left corner of the main panel.  
---|---  
_Bottom Right_ |  Buttons are positioned horizontally in the bottom right corner of the main panel.  
_Top Left_ |  Buttons are positioned horizontally in the top left corner of the main panel.  
_Top Right_ |  Buttons are positioned horizontally in the top right corner of the main panel.  
_Beside Key_ |  Buttons are positioned horizontally next to the primary Key field.  
_Beside Last Key Seg._ |  **_(Available when primary Key has more than one segment)_** If the data dictionary table selected in **[Step 1: Definition](Object%20Definition.htm#ddtable)** has a primary Key with more than one segment, buttons will be positioned horizontally next to the last segment. _(The Beside Last Key Seg. option was added in PxPlus 2021.)_  
_Toolbar_ |  Fixed toolbar (i.e. does not stretch) comprised of individual button controls and is positioned at the top left of the main panel. **_Example:_** If _Toolbar_ is selected for both the _Browse_ and _Action_ buttons, the toolbar will contain browse **_and_** action buttons. _(The Toolbar selection for browse buttons was added in PxPlus 2020.)_  
_Embedded Panel_ |  **_(Applicable for NOMADS Panels Only)_** Select an existing embedded panel to use in place of the standard browse buttons. The **[Library](Screen%20Layout.htm#lib_browse)** and embedded **[Panel](Screen%20Layout.htm#panel_browse)** name must be entered or selected; otherwise, a message will display.  
_Embedded Toolbar_ |  **_(Applicable for NOMADS Panels Only)_** Embedded toolbar that extends horizontally across the top of the main panel and contains embedded button controls. **_Example:_** If _Embedded Toolbar_ is selected for both the _Browse_ and _Action_ buttons, the embedded toolbar will contain browse **_and_** action buttons. _(The Embedded Toolbar selection for browse buttons was added in PxPlus 2020.)_  
_None_ |  No browse buttons.  
  
_(The Toolbar and Embedded Toolbar selections were added in PxPlus 2020.)_  
  
_Library_ |  **_(Applicable for NOMADS Panels Only - Available when browse buttons Location is Embedded Panel)_** Library path for the existing embedded panel. Click the drop-down arrow for a list of (up to nine) previous library selections. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:**  
The Library name may be a specific or generic reference. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.  
  
_Panel_ |  **_(Applicable for NOMADS Panels Only - Available when a Library is selected)_** Embedded panel name. Click the drop-down arrow for a list of panels in the selected library.

#### **Note:**  
It is **_not recommended_** to embed a generated file maintenance panel into another file maintenance panel to be generated, as this may cause issues when the NOMADS panel or HTML page is displayed.  
  
_Position_ |  **_(Applicable for NOMADS Panels Only - Available when an Embedded Panel Name is selected)_** Position of the selected embedded panel on the file maintenance panel. Click the drop-down arrow for a list of positions: _Top Left, Top Center, Top Right, Bottom Left, Bottom Center, Bottom Right, to Right of Key, Right of Last Key Seg_. (The _Right of Last Key Seg._ position is available when the data dictionary table selected in **Step 1: Definition** has a primary Key with more than one segment.)

#### **Note:** ,  
The _Position_ cannot be duplicated if using more than one embedded panel to define the screen layout in **Step 3: Screen** ; otherwise, a message will display.  
  
_Tab Stops_ |  **_(Not Available when browse buttons Location is Toolbar, Embedded Panel, Embedded Toolbar or None)_** Select this check box to add the browse buttons to the panel's tabbing sequence.  
**Location of action buttons** |  _Specify the location of the action buttons (i.e. Write, Delete, Clear, Exit). Define any_**[Additional Buttons](Screen%20Layout.htm#addtl_buttons)** _to be added before and/or after the action buttons._ _If the location is set to "Embedded Panel" and the Position selected is either Top Bar or Bottom Bar, any before/after Action buttons that are added will be ignored when generating the NOMADS panel. In that case, the additional buttons should be added directly to the panel being embedded._  
_(Location Drop Box)_ |  Click the drop-down arrow for a list of locations. If selecting a _Location_ that is either identical to or conflicts with the location of the _Browse_ buttons, a message will display, in which case, select a different location. For additional information, see **[Browse and Action Buttons in HTML Pages](Screen%20Layout.htm#buttons)**. |  _Bottom Right_ |  **_(Default)_** Buttons are positioned horizontally in the bottom right corner of the main panel.  
---|---  
_Bottom Left_ |  Buttons are positioned horizontally in the bottom left corner of the main panel.  
_Top Right_ |  Buttons are positioned horizontally in the top right corner of the main panel.  
_Top Left_ |  Buttons are positioned horizontally in the top left corner of the main panel.  
_Right Side_ |  **_(Applicable for NOMADS Panels Only)_** Buttons are aligned vertically (one below the other) at the right side of the main panel.  
_Toolbar_ |  Fixed toolbar (i.e. does not stretch) comprised of individual button controls and is positioned at the top left of the main panel. **_Example:_** If _Toolbar_ is selected for both the _Browse_ and _Action_ buttons, the toolbar will contain browse **_and_** action buttons.  
_Embedded Panel_ |  **_(Applicable for NOMADS Panels Only)_** Select an existing embedded panel to use in place of the standard action buttons (i.e. _Write, Delete, Clear, Exit_). The **[Library](Screen%20Layout.htm#lib_action)** and embedded **[Panel](Screen%20Layout.htm#panel_action)** name must be entered or selected; otherwise, a message will display.  
_Embedded Toolbar_ |  **_(Applicable for NOMADS Panels Only)_** Embedded toolbar that extends horizontally across the top of the main panel and contains embedded button controls. **_Example:_** If _Embedded Toolbar_ is selected for both the _Browse_ and _Action_ buttons, the embedded toolbar will contain browse **_and_** action buttons.  
_Library_ |  **_(Applicable for NOMADS Panels Only - Available when action buttons Location is Embedded Panel)_** Library path for the existing embedded panel. Click the drop-down arrow for a list of (up to nine) previous library selections. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:**  
The Library name may be a specific or generic reference. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.  
  
_Panel_ |  **_(Applicable for NOMADS Panels Only - Available when a Library is selected)_** Embedded panel name. Click the drop-down arrow for a list of panels in the selected library.

#### **Note:**  
It is **_not recommended_** to embed a generated file maintenance panel into another file maintenance panel to be generated, as this may cause issues when the NOMADS panel or HTML page is displayed.  
  
_Position_ |  **_(Applicable for NOMADS Panels Only - Available when an Embedded Panel Name is selected)_** Position of the selected embedded panel on the file maintenance panel. Click the drop-down arrow for a list of positions: _Top Left, Top Center, Top Right, Top Bar, Bottom Left, Bottom Center, Bottom Right_ , _Bottom_ _Bar_. Embedding a panel in the _Top Bar_ or _Bottom Bar_ position is similar to embedding it in the _Top Left_ or _Bottom Left_ position except that when _Top Bar_ or _Bottom Bar_ is selected, the **[Stretchable](../../Creating%20Panel%20Controls/Embedded%20Panels/Overview.htm#stretch)** check box is automatically selected for the embedded panel control on the generated panel. This allows an embedded panel that contains a rectangle shape to be stretched to fill the entire width of the panel, which is useful when creating a Toolbar. When _Top Bar_ or _Bottom Bar_ is selected, any **[Additional Buttons](Screen%20Layout.htm#addtl_buttons)** that are added before and/or after the Action buttons will be ignored; therefore, any additional buttons that are required should be added directly to the panel being embedded.

#### **Note:**  
The _Position_ cannot be duplicated if using more than one embedded panel to define the screen layout in Step 3; otherwise, a message will display.  
  
_Tab Stops_ |  **_(Not Available when action buttons Location is Toolbar, Embedded Panel or Embedded Toolbar)_** Select this check box to add the action buttons to the panel's tabbing sequence.  
_Additional Buttons_ |  Button that launches the **[Maintain Additional Buttons](Screen%20Layout.htm#addtl_buttons)** window for adding (and editing) additional buttons that are placed before and/or after the browse and action buttons. _(The Additional Buttons button was added in PxPlus 2022.)_  
**Optional embedded panel** |  _Define the options for adding an embedded panel to the NOMADS panel._  
_Library_ |  **_(Applicable for NOMADS Panels Only)_** Library path for the existing embedded panel to be added. Click the drop-down arrow for a list of (up to nine) previous library selections. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  **_(Applicable for NOMADS Panels Only - Available when a Library is selected)_** Embedded panel name. Click the drop-down arrow for a list of panels in the selected library.

#### **Note:**  
It is **_not recommended_** to embed a generated file maintenance panel into another file maintenance panel to be generated, as this may cause issues when the NOMADS panel or HTML page is displayed.  
  
_Position_ |  **_(Applicable for NOMADS Panels Only - Available when an Embedded Panel Name is selected)_** Position of the selected embedded panel on the file maintenance panel. Click the drop-down arrow for a list of positions: _Top Left**(Default)** , Top Center, Top Right, Top Bar, Left Edge, Right Edge, Bottom Left, Bottom Center, Bottom Right, Bottom Bar_.

#### **Note:**  
The _Position_ cannot be duplicated if using more than one embedded panel to define the screen layout in **Step 3** ; otherwise, a message will display.  
  
**Optional Include HTML page******|  _Specify an HTML page to include on the file maintenance panel to be generated._  
_(Input field)_ |  **_(Applicable for HTML Pages Only)_** **_(Optional)_** Enter the directory and an existing HTML page to include or click the Query button. _(The option to include an HTML page was added in PxPlus 2021.)_  
_Position_ |  **_(Applicable for HTML Pages Only - Available when an HTML Page is specified)_** Position of the HTML page on the file maintenance panel, either _Top**(Default)**_ or _Bottom_. _(The Position option was added in PxPlus 2021.)_  
**Webster+ Template******|  _Specify a Webster+ template file._  
_(Input field)_ |  **_(Applicable for HTML Pages Only)_** Enter the template file name. If no suffix is entered, an _.html_ suffix is added at run time. _(The Webster+ Template option was added in PxPlus 2023 Update 1.)_  
  
##  Browse and Action Buttons in HTML Pages

The browse and action buttons that are used in generated Webster+ HTML pages work a little differently from the way they work in NOMADS panels, as explained below.

The _Embedded Panel_ options for browse and action buttons do not apply to generated HTML pages.

The browse and action buttons are added to the HTML page using the Webster+ **[[include]](../../../Webster/Short%20Codes.htm#include)** short code **_and_** one of the following pages located in the ***webster/pages** directory:

**FM_BROWSE.HTML** |  Standard browse buttons (not in a toolbar)  
---|---  
**FM_ACTION.HTML** |  Standard action buttons (_Write_ , _Delete_ , _Clear_ , _Exit_)  
**FM_INQ_ACTION.HTML** |  Standard action buttons for an inquiry panel (_Clear_ , _Exit_)  
**FM_BROWSE_TOOLBAR.HTML** |  Browse buttons in a toolbar  
**FM_ACTION_TOOLBAR.HTML** |  Action buttons in a toolbar  
**FM_INQ_ACTION_TOOLBAR.HTML** |  Inquiry panel action buttons in a toolbar  
**FM_FULL_TOOLBAR.HTML** |  Browse and action buttons in a toolbar  
**FM_INQ_FULL_TOOLBAR.HTML** |  Browse and inquiry panel action buttons in a toolbar  
  
#### **Note:**  
If custom versions of the browse and action buttons are required, these files may be copied to a location that will be found in the prefix prior to ***webster/pages** and edited.

##  Additional Options

The _Additional Options_ button is available only when creating a **_NOMADS Panel_** and launches the **Additional Options** window with more options for defining the panel header.

These options do not apply to HTML pages.

> This window consists of the following:

**TitleBar Option** |  Specify a panel to insert as a title bar at the top of the panel. You can also specify that the default title bar or no title bar will be used. Click the drop-down arrow for a list of selections: |  _Default_ |  Use the current default _Title Bar_ setting for the panel based on the **[%NOMADS'TitleBar$](../../Appendix/NOMADS%20Variables/Overview.htm#titlebar)** and **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)** settings.  
---|---  
_TitleBar_ |  Use the panel defined in the **Panel Information** section as the title bar for the panel.  
_None_ |  The panel will **_not_** have a title bar.  
  
For information on the use of the _Frame Style_ parameter when creating a custom title bar, see **[Custom Title Bars](../../Custom%20Title%20Bars.md)**.  
  
**Panel Information** |  **_(Available when the TitleBar Option is TitleBar)_** |  _Fixed or Expression_ |  The Custom Title Bar panel information can be entered as a _Fixed_ value or as an _Expression_ : |  |  If  _Fixed_ is selected, enter the _Library_ and _Panel_ information.  
---|---  
|  If  _Expression_ is selected, enter an expression that can be evaluated to a value consisting of the panel name and library, separated by a comma (e.g. _PanelName,LibraryName_).  
_Library_ |  Library path that contains the Title Bar panel definition. Click the drop-down arrow for a list of recently used libraries. Click the Browse button to look through the directory structure to find the library. Be sure to use the simplest form of the path for your application.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Panel_ |  Name of the panel definition to use as the Title Bar for the panel. Click the drop-down arrow for a list of all panels in the library.  
**Theme** |  Assign a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** to be applied to the panel. The Theme can be defined as a _Fixed_ value or string _Expression_.

#### **Note:**  
A Theme applied at the Panel level overrides the General level Theme set in **[%NOMADS'Theme$](../../Appendix/NOMADS%20Variables/Overview.htm#theme)** and the Library level Theme assigned in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**.  
  
A Theme assigned to the **[%NOMADS'ThemeOverride$](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride)** property overrides all other Theme settings. See **[Applying a Theme to Your Application](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#applyingtheme)**.  
  
**Attributes** |  |  _Menu Bar_ |  Panel has a **[Menu Bar](../../Creating%20Panel%20Controls/Menu%20Bar/Overview.md)**.  
---|---  
_Status Bar_ |  Panel will be created with a status line/message bar.  
_Close Box_ |  Enables the Windows _close_ button at the top right corner of the panel.  
_Status Bar Segments_ |  **_(Available when Status Bar check box is selected)_** Define up to three additional (optional) status bar segments for the current panel by clicking the button next to the input control and entering the starting column number for the segment. The default segment (0) starts at column 0. Additional segments can be defined with a positive column number to specify the starting column from the left, or a negative column number to specify the start of a segment from the right. Display text in the individual segments using the **['MESSAGE'](../../../mnemonics/message.md)** mnemonic. **_Example:_** PRINT 'MESSAGE'(_text$,segnum_) **_Where:_** The first segment number is 0. If the _Status Bar_ attribute is checked and no segments are defined, the system status bar will be used. If segments are defined for the panel, they will override the system definition.

#### **Note:**  
Use the **['MESSAGE'](../../../mnemonics/message.md)** mnemonic to define a system status bar.  
  
_Minimize Box_ |  Enables the _minimize_ box in the top right corner of the window.  
_Maximize Box_ |  Enables the _maximize_ box in the top right corner of the panel.  
_Auto Refresh_ |  The screen display is refreshed automatically when any control values are changed by the application.  
_Auto Close Files_ |  If enabled, all non-global files opened by the application are closed automatically when the panel terminates.  
_Full Screen Drag_ |  If selected, a panel can be moved by clicking anywhere on the panel outside of the controls (as well as on the title bar) and dragging the panel to the desired location. This setting overrides the **[%NOMADS'Full_Screen_Drag](../../Appendix/NOMADS%20Variables/Overview.htm#fullscreendrag)** property and the _Full Screen Drag_ setting in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**. Click the drop-down arrow for a list of selections: |  _Default_ |  Use the default setting based on the **[%NOMADS'Full_Screen_Drag](../../Appendix/NOMADS%20Variables/Overview.htm#fullscreendrag)** property and the _Full Screen Drag_ setting in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**.  
---|---  
_Always on_ |  The panel will **_always_** have the _Full Screen Drag_ feature turned **_On_** , regardless of default settings.  
_Always off_ |  The panel will **_always_** have the _Full Screen Drag_ feature turned **_Off_** , regardless of default settings.  
**Parameters** |  |  _Sizing_ |  Determines whether the panel will remain fixed in size or can be resized at run time by dragging the edges of the window. Click the drop-down arrow for a list of selections: _Fixed, Resizable, Resizable/Auto Scroll, Resizable/Auto Size, Resizable/Custom_.

#### **Note:**  
To make it possible for users to resize a panel larger than the defined size while still maintaining a minimum panel size, select the _Maximize Box_ attribute and set the _Sizing_ parameter to _Resizable/Custom_.  
  
---|---  
_Frame Style_ |  Controls the type of frame or border for the current window. Click the drop-down arrow for a list of selections: |  _Default_ |  Uses current settings. The standard Windows title bar is displayed.  
---|---  
_Thick border with caption_ |  Adds a thick border and a caption to the current window. The standard Windows title bar is displayed.  
_Thick with no caption_ |  Adds a thick border to the current window but no caption. The standard Windows title bar is **_not_** displayed.  
_Thin with no caption_ |  Adds a thin border to the current window but no caption. The standard Windows title bar is **_not_** displayed.  
_No frame or caption_ |  Does not add a border or a caption. The standard Windows title bar is **_not_** displayed.  
  
For information on the use of the _Frame Style_ parameter when creating a custom title bar, see **[Custom Title Bars](../../Custom%20Title%20Bars.md)**.  
  
**iNomads Template** |  If specified, the **[iNomads Template](../../../iNOMADS/Templates.md)** will be applied to the panel, overriding the template specified for the session.  
_OK_ |  Saves changes and closes the **Additional Options** window, returning to the **Step 3: Screen** panel.  
_Cancel_ |  Does not save changes and closes the **Additional Options** window, returning to the **Step 3: Screen** panel.  
  
##  Maintain Additional Buttons

The **Maintain Additional Buttons** window is launched when the _Additional Buttons_ button is selected. It is used for adding (and editing) the additional buttons to be placed before and/or after the browse and action buttons. Up to 20 additional buttons can be added.

> This window consists of the following:

_(Additional Buttons Grid)_ |  Displays a list of the additional buttons. After a new additional button is defined, it is automatically added to this list.  
---|---  
_Add or Edit an Additional Button_ |  Button that launches the **Add an Additional Button** window for defining a new additional button and editing an existing one. If only _HTML Page_ is selected as the **[Form Type](Object%20Definition.htm#formtype)** in **Step 1: Definition** , the **Webster+** tab will launch by default when this window is invoked. _(Support to default to the Webster+ tab if only HTML Page is selected was added in PxPlus 2025.)_ Many of these options are also available when adding a Button object on the file maintenance panel in **Step 6: Fields** (see **[Button](Button.md)** object), except for these differences: |  _Location_ |  Select the location of the additional Button control: _Before Action, After Action, Before Browse, After Browse_.  
---|---  
**NOMADS** |   
**Appearance** |  |  _Popup Library_ |  **_(Available when button Type is Drop List)_** Library path for the popup menu. Click the drop-down arrow for a list of (up to nine) previous library selections. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
---|---  
_Popup Panel_ |  **_(Available when button Type is Drop List)_** Popup menu name. Click the drop-down arrow for a list of existing popup menus in the selected library. Click the Popup button to invoke the **[Menu Bar Definition](../../Creating%20Panel%20Controls/Popup%20Menu/Overview.htm#popup_def)** for the selected popup menu. A new popup menu can be created on-the-fly. Enter a new _Popup Panel_ name and then click the Popup button to define the menu.  
**Size** |  |  _Width  
Height_ |  Enter the width (in number of columns only) and the height for the additional Button on the NOMADS panel or use the spinner control. The width and height of the additional Button will default based on the location selected for the action or browse buttons:

> New "browse" buttons default to a width of 3 and a height of 1.5. If the location of the browse buttons is set to _Toolbar_ or _Embedded Toolbar_ , then they will default to a width of 6 and a height of 3.

> New "action" buttons default to a width of 10 and a height of 1.5. If the location of the action buttons is set to _Toolbar_ or _Embedded Toolbar_ , then they will default to a width of 6 and a height of 3.

If an actual number of columns has been entered and the Button text is edited so that its length exceeds the number of columns, the value will adjust to match the length of the Button text entered plus 2.  
---|---  
**Webster+** |   
**Appearance** |  |  _List Items_ |  **_(Available when button Type is Drop List)_** Grid used for entering the text and the **[HTML Event](../../../Webster/Webster%20Events.md)** to trigger for each item in the drop list.  
---|---  
_HTML Class_ |  A single HTML Class can be entered (e.g. bold). Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes (e.g. "bold text_red fill_cyan" or bold,text_red,fill_cyan). See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**. Three system defined classes are used: |  **fm_action** |  Assigned to the action buttons on the system fm_action.html page. Can be defined to change the appearance of the action buttons.  
---|---  
**fm_browse** |  Assigned to the buttons on the system fm_browse.html page. Changes the appearance of buttons located beside a key segment to be borderless and one line high.  
**fm_toolbar** |  Assigned to the various system toolbar html pages. Can be defined to change the appearance of toolbar buttons.  
**Size** |  |  _Width  
Height_ |  Enter the width (in number of columns only) and the height for the additional Button on the Webster+ page or use the spinner control. In Webster+, the width defaults to _Auto_. A width of _Columns - Auto_ will result in the Button being just wide enough to accommodate the text (and symbol if present). To set it back to _Auto_ , enter 0. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. The height of the additional Button will default based on the location selected for the action or browse buttons:

> New "browse" buttons default to a height of 2. If the location of the browse buttons is set to _Toolbar_ or _Embedded Toolbar_ , then they will default to a height of 5. If the location is set to _Beside Key_ , they will default to a height of 1.25.

> New "action" buttons default to a height of 2. If the location of the action buttons is set to _Toolbar_ or _Embedded Toolbar_ , then they will default to a height of 5.

If an actual number of columns has been entered and the Button text is edited so that its length exceeds the number of columns, the value will adjust to match the length of the Button text entered plus 2.  
---|---  
_Delete an Additional Button_ |  Removes the selected additional Button. Prior to deletion, a message will display.  
_Copy an Additional Button_ |  Creates a new additional button by copying the settings from an existing button selected in the grid. _(Copy an Additional Button was added in PxPlus 2023.)_  
_Move Up  
Move Down_ |  Moves the selected additional Button up or down within the list, changing the order of the additional Buttons on the NOMADS panel and Webster+ page.  
_Remove All Buttons_ |  **_(Available when an additional Button is defined)_** Removes all the additional Buttons listed in the grid. Prior to deletion, a message will display. _(Remove All Buttons was added in PxPlus 2023.)_  
  
_(The ability to add/maintain Additional Buttons was added in PxPlus 2022.)_

## See Also

**[File Maintenance Generator Steps](Fmgen%20Introduction.htm#steps)**
