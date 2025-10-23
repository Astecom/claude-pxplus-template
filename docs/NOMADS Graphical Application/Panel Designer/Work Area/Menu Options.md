# Panel Designer

**Menu Options** |  **__**  
---|---  
  
As with other aspects of NOMADS, there is usually more than one way to access Panel Designer functionality: via the **Menu Bar** , the **[Tool Bar](Tool%20Bar.md)**, or **[Controls Toolbar](../Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**.

The options below are listed in the order that they appear on the menu bar: **[Panel](Menu%20Options.htm#panelmenu)**, **[Edit](Menu%20Options.htm#edit)**, **[Controls](Menu%20Options.htm#controls)**, **[Options](Menu%20Options.htm#options)**, **[Utilities](Menu%20Options.htm#utilities)**, **[Sizing](Menu%20Options.htm#sizing)**, **[Projects](Menu%20Options.htm#projects)**, **[iNomads](Menu%20Options.htm#inomads)**, **[Panel Details](Menu%20Options.htm#paneldetails)**, **[Wiki Info](Menu%20Options.htm#wiki_info)**, **[Help](Menu%20Options.htm#help)**, **[Window](Menu%20Options.htm#window)** and **[Quit](Menu%20Options.htm#quit)**.

**Panel** |  Drop-down menu for panel level options.  
---|---  
_Header_ |  Display Panel Definition properties. Same as the _Header_ tool bar button. Also available from the popup menu when right clicking on the panel.  
_Copy to_ |  Copy the current panel to another library or to a new library name. Also available from the popup menu when right clicking on the panel.  
_Print_ |  Print the details of all panel controls. Same as the _Print_ tool bar button. Also available from the popup menu when right clicking on the panel.  
_Menus_ |  Define a menu bar for the panel. See **[Menu Bar](../../Creating%20Panel%20Controls/Menu%20Bar/Overview.md)**.  
_Save_ |  Save changes to the panel without exiting. Same as the _Save_ tool bar button. Also available from the popup menu when right clicking on the panel.  
_Lock to Toolbar_ |  **_(NOMADS+ Only)_** Locks the Design panel to the **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)** to allow these to be moved simultaneously.

#### **Note:  
** The Design panel can be moved independently at any time.  
  
_Show Tooltip_ |  Display a floating tooltip showing the name and position/size co-ordinates for a selected object. When launching the NOMADS Panel Designer for the first time, the default setting of this option coincides with the _Hide tips_ system option, which is found by selecting the PxPlus icon in the upper left corner of the NOMADS Panel Designer. If _Hide tips_ is initially **_Off_** , then _Show Tooltip_ will be set to **_On_**. To suppress tooltips from displaying each time you access the Panel Designer, set _Show Tooltip_ to **_Off_**. _(The Show Tooltip option was added in PxPlus 2014.01 Update 0005.)_  
_Default to Pointer_ |  **_(NOMADS+ Only)_** Sets the **_Pointer Tool_** as the default for the NOMADS+ Toolbar/Design panel. Setting this option to **_Off_** changes the default from the **_Pointer Tool_** to the **_Button_** control. _(The Pointer tool and Default to Pointer option in NOMADS+ were added in PxPlus 2019.)_  
_Test_ |  Switch to test mode. Same as the _Test_ tool bar button. Also available from the popup menu when right clicking on the panel.  
_Close_ |  Exit **[Panel Designer](../Introduction.md)** with the option to save/abandon changes.  
_Delete Panel_ |  Delete the panel from the current library. Also available from the popup menu when right clicking on the panel.  
  
**Edit** |  Drop-down menu for panel editing options. These may also be invoked via quick key sequences (where indicated below).  
---|---  
_Undo_ |  Undo up to 50 changes. Same as the _Undo_ tool bar button. Also available from the popup menu when right clicking on the panel.  
_Redo_ |  Sequentially reapplies the last changes that were undone by the _Undo_ option until a new change is made. After a new change, _Redo_ will recall only changes that were "undone" after the newest change. Same as the _Redo_ tool bar button. Also available from the popup menu when right clicking on the panel.  
_Delete Object_ |  Same function as the Delete key.  
_Size_ |  Set sizing mode for selected object(s). Use arrow keys to change dimensions. Press Enter to set new size.  
_Move_ |  Set moving mode for selected object(s). Use the four arrow keys to move object. Press Enter to set new location.  
_Paste_ |  Paste object(s) from clipboard. Also available from the popup menu when right clicking on the panel.  
_Cut_ |  Cut selected object(s).  
_Copy_ |  Copy selected object(s).  
_Select All_ |  Select all of the components in the panel. Also available from the popup menu when right clicking on the panel.  
_Block Paste_ |  Launch the Block Paste dialog for merging objects from another panel.  
_Duplicate Object_ |  Create a duplicate of a selected object with the same dimensions and properties as the original. See **[Duplicating Components](../Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.htm#Duplicating_Components)**.  
_New Object_ |  Create a new object with the same dimensions as the original but with none of its properties. See **[Duplicating Components](../Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.htm#Duplicating_Components)**.  
_Align or Distribute_ |  Launch options for group spacing of selected controls.  
_Grid Alignment_ |  Change grid alignment for the current panel. See **[Grid Definition Defaults](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.htm#Mark1)**.  
_Show grid_ |  Display grid lines on the panel.  
_Tab order_ |  Launches the **[Tab Order Definition Utility](../Drawing%20and%20Modifying%20Panel%20Objects/Tab%20Order.md)** for defining the tabbing sequence. Same as the _Tabs_ tool bar button _(Folder Style and Property Sheets)_.  
  
**Controls** |  These options are also accessible as buttons in the **[Controls Toolbar](../Drawing%20and%20Modifying%20Panel%20Objects/Controls%20Toolbox.md)**.  
---|---  
_Pointer Tool_ |  **_(NOMADS+ and Property Sheets)_** Use the Pointer Tool **_(default)_** for selecting either a single control or for drawing a selection box around multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time.

#### **Note:**  
**_(NOMADS+ Only)_** Setting the _Default to Pointer_ option (**Panel** menu) to **_Off_** changes the default from the **_Pointer Tool_** to the **_Button_** control.

_(The Pointer tool and Default to Pointer option in NOMADS+ were added in PxPlus 2019.)_  
_Button_ |  Single button.  
_Radio Button_ |  Radio button.  
_Check box_ |  Check box for toggling on/off (or Tri-State) options.  
_List box_ |  View items as a list.  
_Drop box_ |  Drop-down menu of items/values.  
_Multi line_ |  Input field.  
_Grid_ |  Columns and rows of cells for entering information.  
_Chart_ |  Chart-style illustrations.  
_Data Class_ |  Standardized _Data Class_ definitions.  
_Dictionary_ |  Reference to data dictionary table.  
_Standard Text_ |  Plain system font for display text.  
_Fonted Text_ |  Windows fonts for display text (titles, labels).  
_Image_ |  Bitmap or multimedia item.  
_Boxes_ |  Frame lines for grouping panel sections.  
_Shapes_ |  Shapes such as Pies, Arcs, Polygons.  
_Vertical Sbar_ |  Vertical scrollbar.  
_Horizontal Sbar_ |  Horizontal scrollbar.  
_Tab Selector_ |  Create tabbed folder.  
_External Control_ |  Use **[External Control](../../Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)**.  
_Embed Panel_ |  Place contents of another panel onto the current panel. Also available from the popup menu when right clicking on the panel.  
_Group Items_ |  **_(NOMADS+ and Folder Style)_** Used for selecting multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time. When this tool is selected, use the mouse to draw a selection box around the controls to be grouped. (Similar functionality to the **_Pointer Tool_**.)  
  
**Options** |  Miscellaneous options.  
---|---  
_Create Label For Dictionary Element_ |  When selected (displays a check mark), this option generates a fonted text label for a data dictionary _Element_ control (see **[Data Element Controls](../../Creating%20Panel%20Controls/Introduction.htm#Mark5)**) when the control is drawn. At the same time, the **[Incl. Label](../../Creating%20Panel%20Controls/Introduction.htm#label)** check box is selected. (If using NOMADS+ toolbar, the **[Include Element Label](../../../NOMADS+%20Toolbar/Introduction.htm#label)** check box is selected.) Both of these options remain selected until either one is deselected or the panel designer is exited. _(The Incl. Label check box was added in PxPlus 2018 Update 0001.)_

#### **Note:**  
This option has **_no effect_** on Check Box and Radio Button element controls and will be ignored if selected. These controls will be created as normal.

To **_apply_** this option: |  1. |  Select the _Create Label For Dictionary Element_ option.  
---|---  
2. |  Select an element to be placed on the panel (see **[Element](../../Creating%20Panel%20Controls/Introduction.htm#element)**). The _Element_ button changes to dark red and displays the name of the selected element. At the same time, the _Include Element Label_ check box displays, already selected. becomes selected.  
3. |  Draw the element control. (At this point, a message displays **_only_** if the selected element is associated with a **[Dynamic Data Class](../../../Data%20Dictionary/Data%20Classes/Overview.htm#Mark2)**.)  
4. |  A **[Fonted Text Properties](../../Creating%20Panel%20Controls/Text%20Control/Text.md)** window displays for the generated element label. By default, the label is positioned to the left of the control but can be adjusted if needed.  
_Properties Table_ |  **_(Property Sheets Only)_** Presents a list of options for adjusting the format and appearance of **[Property Sheets](../Properties%20Table/Overview.htm#Format)**.  
_Change Bulk Edit/Property Sort Order_ |  **_(NOMADS+ and Folder Style)_** Opens the **[Change Bulk Edit/Property Sort Order](../Options%20and%20Utilities/Change%20Sort%20Order.md)** window for customizing how property groupings are displayed in **[Property Sheets](../Properties%20Table/Overview.md)**, the **[Panel Bulk Edit Utility](../Options%20and%20Utilities/Bulk%20Edit%20Utility.md)**, and the **[Library Bulk Edit and Search Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** (for the **Properties to Edit** grid).  
  
**Utilities** |  Drop-down menu for panel/library utilities.  
---|---  
_Bulk Edit_ |  Launches the **[Panel Bulk Edit Utility](../Options%20and%20Utilities/Bulk%20Edit%20Utility.md)** for changing the design properties of two or more selected panel controls.  
_Dependency Definition_ |  Launches the **[Dependency Definition Utility](../Options%20and%20Utilities/Dependency%20Definitions.md)** that enables selected controls to be hidden, locked, enabled based on a preset condition.  
_Drag &Drop_ |  Launches the **[Drag and Drop Utility](../Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)** that allows selected items to be moved between controls at run time.  
_Group Assignment_ |  Launches the **[Group Assignment Utility](../Options%20and%20Utilities/Group%20Assignment%20\(Panel%20Level\).htm)** for assigning controls to a group name for a selected library and panel.  
_Suppress Groups_ |  Launches the **[Suppress Groups](../Options%20and%20Utilities/Suppress%20Groups.md)** utility that is used for choosing which group(s) of controls to display or temporarily suppress from displaying on the current panel in the NOMADS Panel Designer. _(The Suppress Groups utility was added in PxPlus 2021.)_  
_Visual Class Assignment_ |  Launches the **[Visual Class Assignment Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)** for assigning visual classes to controls.  
_Resize_ |  Launches the **[Custom Sizing Definition Utility](../Resizing%20and%20Persistence/Panel%20Resizing.htm#CustomSizing)** for defining resizing options for the panel and for all the controls on it.  
_Tab Order Definition_ |  **_(NOMADS+ Only)_** Launches the **[Tab Order Definition Utility](../Drawing%20and%20Modifying%20Panel%20Objects/Tab%20Order.md)** for defining the tabbing sequence.  
_User CTLS_ |  Launches the **[User Defined CTL Values Utility](../Options%20and%20Utilities/User-Defined%20CTLs.md)** for assigning CTL values that are used to associate programs or events with specific function key values when running the current panel. Same as the _Ctls_ toolbar button (if using Folder Style or Property Sheets).  
_Auto Complete_ |  Launches the **[Auto Complete Definition Utility](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)** for defining auto complete functionality for use in a **[Multi-Line Control](../../Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md).**  
_Calendar_ |  Launches the **[Calendar Control Definition Utility](../../System%20Maintenance%20Tools/System%20Options/Calendar.md)** for defining calendar functionality for use in a **[Multi-Line Control](../../Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md).**  
_Assign Substitute Panels_ |  Launches **[Substitute Panel Maintenance](../../Program%20Interaction/Substitute%20Panels.md)** for specifying conditions to apply when loading a substitute panel instead of the original one.  
_Assign Alternate Panels_ |  Launches **[Alternate Panel Maintenance](../../Program%20Interaction/Alternate%20Panel%20Layouts/Overview.htm#Mark2)** for specifying conditions to apply when resizing and displaying an alternate panel instead of the original one.  
_Nomads+_ |  Launches a multi-functional dialog that combines Folder Style and Property Sheets and lists all panel controls and specific properties in a grid format. See **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)**.  
_Property Sheets_ |  Displays the properties for a selected control using a two-column table format. See **[Using Property Sheets](../Properties%20Table/Overview.md)**.  
_Folder Style_ |  Displays the properties for a selected control using a tabbed folder format. See **[Using Folder Style](../Folder%20Style/Using%20the%20Folder%20Style.md)**.  
  
**Sizing** |  **_(NOMADS+ Only)_** Drop-down menu for panel and/or objects sizing.  
---|---  
_Fixed_ |  Panel size is fixed and objects have fixed sizes and locations.  
_Resizable_ |  Panel is resizable but objects have fixed sizes and locations.  
_Resizable/Auto Scroll_ |  Panel is resizable, and objects have fixed sizes. However, specific objects can be set to scroll by checking the _Enable Scrolling_ property in their Properties window or in the **[Custom Sizing Definition Utility](../Resizing%20and%20Persistence/Panel%20Resizing.htm#CustomSizing)**.  
_Resizable/Auto Size_ |  Panel is resizable, and objects are resized and relocated based on the ratio of the original size to the new panel size.  
_Resizable/Custom_ |  Panel is resizable, and each object can be resized (Auto Size) or remain fixed in size (Fixed). Auto size objects are automatically relocated, whereas fixed-sized objects will have the following Movement options available: Default, Default (Centered), or Anchored (Top, Bottom, Left, Right, Top/Left, Top/Right, Bottom/Left and Bottom/Right).  
  
**Projects** |  Drop-down menu for projects.  
---|---  
_Create New Project_ |  Launches the **[Create Project](../../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialog for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialog for adding the current task to an existing project that is selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../../../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../../../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
  
**iNomads** | 

#### **Note:**  
iNomads is **_not_** available with a **_base_** PxPlus activation. Contact your PxPlus reseller or visit the PxPlus website **[www.pvxplus.com](http://www.pvxplus.com/)** for product information and licensing.

Lists options for creating and running a panel in iNomads. _(The iNomads menu was added to the Panel Designer in PxPlus 2016.)_  
---|---  
_Create/Edit Transaction_ |  Launches **[iNomads Transaction Maintenance](../../../iNOMADS/Transaction%20Maintenance.md)** for defining the program or NOMADS panel to use for an iNomads application.  
_Run transaction_ |  Displays the current **_saved_** panel in iNomads in "test" mode on a new Web browser page using the _admin_ template. This allows you to preview the panel so you can determine if further adjustments are needed in the NOMADS Panel Designer. If the panel already exists in **[iNomads Transaction Maintenance](../../../iNOMADS/Transaction%20Maintenance.md)**, that transaction will be run.

#### **Note:**  
This "test" functionality is **_not_** available when running WindX.  
  
**Panel Details** |  Launches the **Panel Details** dialog. _(The Panel Details dialog was added in PxPlus 2018.)_  
---|---  
|  Launches the **Panel Details** dialog, which contains a summary list of panel information and includes the following categories: **[Alternate Panels](../../Program%20Interaction/Alternate%20Panel%20Layouts/Overview.md)**, **[Dependencies](../Options%20and%20Utilities/Dependency%20Definitions.md)**, **[Drag and Drop](../Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)**, **[Groups](../Options%20and%20Utilities/Group%20Assignment%20\(Panel%20Level\).htm)**, **[Menu](../../Creating%20Panel%20Controls/Menu%20Bar/Menu%20Bar%20Definition.md)**, **[Substitute Panels](../../Program%20Interaction/Substitute%20Panels.md)**, **[User CTLs](../Options%20and%20Utilities/User-Defined%20CTLs.md)** and **[Visual Classes](../Options%20and%20Utilities/Visual%20Class%20Assignment%20\(Panel%20Level\).htm)**. The category headings are clickable, invoking the associated utility program to edit the panel.  
  
**Wiki Info** |  _(The Wiki Info menu option was added in PxPlus 2023.)_  
---|---  
|  Spawns EZWeb for the **[PxPlus Wiki](../../../PxPlus%20Wiki/PxPlus%20Wiki.md)** (if not already running) and then displays panel information for the current NOMADS panel in a new tab on your default Web browser. **_Example:_** When the PxPlus Wiki launches, the panel information for the current panel, Product_Mnt, displays:  
  
**Help** |  Additional help options.  
---|---  
_Edit Keys_ |  Provides a list of keystroke combinations that are mapped to NOMADS functionality; i.e. Ctrl + S = Save, Ctrl + C = Copy, Ctrl + V = Paste.

#### **Note:**  
The standard edit keys **Home** and **End** apply only when using the **[Folder Style](../Folder%20Style/Using%20the%20Folder%20Style.md)** and **[Property Sheet](../Properties%20Table/Overview.md)** versions of the NOMADS Panel Designer.  
  
_About_ |  NOMADS version number.  
  
**Window** |   
---|---  
|  **_(Property Sheets Only)_** Provides menu access to toggle focus between the work area and the **[Property Sheet](../Properties%20Table/Overview.md)**. Ctrl-Tab performs the same actions.  
  
**Quit** |   
---|---  
|  Exits **[Panel Designer](../Introduction.md)** with the option to save/abandon changes. Same as the Windows close button.
