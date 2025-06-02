# Panel Designer  
  
**Using NOMADS+ Toolbar** |  **__**  
---|---  
  
The NOMADS+ Toolbar is a toolset that is used for application screen development and works in conjunction with the Design panel. The NOMADS+ Toolbar consists of two main components: **_NOMADS+ Toolbar_** and **_Design panel_**. Each of these windows can be moved and positioned anywhere on the desktop. The functionality of the other components, such as _Properties_ , _Header Panel_ , etc., remains unchanged.

To select the NOMADS+ Toolbar, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** |  Select _Utilities > Nomads+_ from the menu bar.  
From the **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** |  Select _Designer > Nomads+_ from the menu bar **_before_** creating a new panel or selecting an existing panel.  
  
Starting with PxPlus 2025, the NOMADS+ Toolbar is the panel designer by default, but this can be changed, if desired. Panel designer settings are saved by project. See **[Working with Projects](../PxPlus%20IDE/Introduction%20to%20PxPlus%20IDE.htm#projects)**.

Below is an example of the NOMADS+ Toolbar. The design panel on the right shows the _ProductCode_ multi-line control is selected, and the NOMADS+ **[Controls Grid](Introduction.htm#controlgrid)** on the left shows the corresponding PRODUCTCODE row is highlighted.

The NOMADS+ Toolbar is comprised of a **Menu Bar**, **[Controls Toolbar](Introduction.htm#controlbar)**, **Ribbon Bar**, **Control Grid** and a separate Design panel. The name of the current project is also displayed.

_(The project name display was added in PxPlus 2023.)_

When selecting a panel object from the **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Overview.md)** window, the NOMADS+ Toolbar and Design panel are launched. Each NOMADS+ Toolbar/Design panel that is launched is associated with a unique ID number, with each having the same background color.

#### **Note:  
** The background color is only used for identification purpose when in design mode. When testing a panel, the panel reverts to the true background color that has been assigned to it.

The size and location of the NOMADS+ Toolbar/Design panel persist, which means that the size and location at closing will be retained the next time these are accessed.

The Design panel can be locked to the NOMADS+ Toolbar so that these can move simultaneously, although the Design panel can be moved independently at any time.

The NOMADS+ Toolbar and Design panel windows work concurrently so that making changes to one is immediately reflected in the other.

_(The NOMADS+ Toolbar was added in PxPlus 2014.)_

##  Menu Bar

The **_Menu Bar_** consists of the following selections: **[Panel](Introduction.htm#panel)**, **[Edit](Introduction.htm#edit)**, **[Controls](Introduction.htm#controls)**, **[Options](Introduction.htm#options)**, **[Utilities](Introduction.htm#utilities)**, **[Sizing](Introduction.htm#sizing)**, **[Projects](Introduction.htm#projects)**, **[iNomads](Introduction.htm#inomads)**, **[Panel Details](Introduction.htm#paneldetails)**, **[Wiki Info](Introduction.htm#wiki_info)**, **[Help](Introduction.htm#help)** and **[Quit](Introduction.htm#quit)**.

The options available for each of these selections are listed below in the order they are displayed on the Menu Bar.

**Panel** |  Drop-down menu for panel level options.  
---|---  
_Header_ |  Display Panel Definition properties. Same as the _Header_ tool bar button.  
_Copy to_ |  Copy the current panel to another library or to a new library name.  
_Print_ |  Print the details of all panel controls. Same as the _Print_ tool bar button.  
_Menus_ |  Define a menu bar for the panel. See **[Menu Bar](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Menu%20Bar/Overview.md)**.  
_Save_ |  Save changes to the panel without exiting. Same as the _Save_ tool bar button.  
_Lock to Toolbar_ |  Locks the Design panel to the NOMADS+ Toolbar to allow these to be moved simultaneously.

#### **Note:  
** The Design panel can be moved independently at any time.  
  
_Show Tooltip_ |  Display a floating tooltip showing the name and position/size co-ordinates for a selected object. When launching the NOMADS Panel Designer for the first time, the **_default_** setting of this option coincides with the _Hide tips_ system option, which is found by selecting the PxPlus icon in the upper left corner of the NOMADS Panel Designer. If _Hide tips_ is initially **_Off_** , then _Show Tooltip_ will be set to **_On_**. To suppress tooltips from displaying each time you access the Panel Designer, set _Show Tooltip_ to **_Off_**.  
_Default to Pointer_ |  Sets the **[Pointer Tool](Introduction.htm#pointer)** as the default for the NOMADS+ Toolbar/Design panel. Setting this option to **_Off_** changes the default from the **_Pointer Tool_** to the **_Button_** control. _(The Pointer tool and Default to Pointer option in NOMADS+ were added in PxPlus 2019.)_  
_Test_ |  Switch to test mode. Same as the _Test_ tool bar button.  
_Close_ |  Exits the NOMADS+ Toolbar/Design panel with the option to save/abandon changes.  
_Delete Panel_ |  Delete the panel from the current library.  
  
**Edit** |  Drop-down menu for panel editing options. These may also be invoked via quick key sequences (where indicated). A list of Edit Keys is also available on the NOMADS+ Toolbar **[Help](Introduction.htm#help)** menu.  
---|---  
_Undo_ |  Undo up to 50 changes. Same as the _Undo_ tool bar button.  
_Redo_ |  Sequentially reapplies the last changes that were undone by the _Undo_ option until a new change is made. After a new change, _Redo_ will recall only changes that were "undone" after the newest change. _(The Redo functionality was added in PxPlus 2014 Feature Pack 1 - Update 0005.)_  
_Delete Object_ |  Same function as the Delete key.  
_Size_ |  Set sizing mode for selected object(s). Use arrow keys to change dimensions. Press Enter to set the new size.  
_Move_ |  Set moving mode for selected object(s). Use the four arrow keys to move object. Press Enter to set the new location.  
_Paste_ |  Paste object(s) from Clipboard.  
_Cut_ |  Cut selected object(s).  
_Copy_ |  Copy selected object(s).  
_Select All_ |  Select all of the components on the panel.  
_Block Paste_ |  Launch the Block Paste dialogue for merging objects from another panel.  
_Duplicate Object_ |  Create a duplicate of a selected object with the same dimensions and properties as the original. See **[Duplicating Components](../NOMADS%20Graphical%20Application/Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.htm#Duplicating_Components)**.  
_New Object_ |  Create a new object with the same dimensions as the original but with none of its properties. See **[Duplicating Components](../NOMADS%20Graphical%20Application/Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.htm#Duplicating_Components)**.   
_Align or Distribute_ |  Launch options for group spacing of selected controls.  
_Grid Alignment_ |  Change grid alignment for the current panel.  
_Show grid_ |  Display grid lines on the panel.  
_Tab order_ |  Launch the **Tab Order Definition** dialogue. See **[Tab Order](../NOMADS%20Graphical%20Application/Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Tab%20Order.md)**.  
  
**Controls** |  These options are also accessible as buttons in the **[Controls Toolbar](Introduction.htm#controlbar)**.  
---|---  
_Button_ |  Single button.  
_Radio Button_ |  Radio button.  
_Check box_ |  Check box for toggling On/Off (or Tri-State) options.  
_List box_ |  View items as a list.  
_Drop box_ |  Drop-down menu of items/values.  
_Multi-line_ |  Input field.  
_Grid_ |  Columns and rows of cells for entering information.  
_Chart_ |  Chart-style illustrations.  
_Data Class_ |  Standardized _Data Class_ definitions.  
_Dictionary_ |  Reference to data dictionary table.  
_Standard Text_ |  Plain system font for display text.  
_Fonted Text_ |  Windows fonts for display text (titles, labels).  
_Image_ |  Bitmap or multimedia item.  
_Boxes_ |  Frame lines for grouping panel sections.  
_Shapes_ |  Shapes such as _Pie, Arc, Polygon_ , etc.  
_Vertical Sbar_ |  Vertical scrollbar.  
_Horizontal Sbar_ |  Horizontal scrollbar.  
_Tab Selector_ |  Create tabbed folder.  
_External Control_ |  Use an **[External Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)**.  
_Embed Panel_ |  Place contents of another panel onto the current panel.  
_Group Items_ |  Used for selecting multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time. When this tool is selected, use the mouse to draw a selection box around the controls to be grouped. (Similar functionality to the **_Pointer Tool_**.)  
_Pointer Tool_ |  Use the Pointer Tool **_(default)_** for selecting either a single control or for drawing a selection box around multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time. (Similar functionality to the **_Pointer Tool_** used in **[Property Sheets](../NOMADS%20Graphical%20Application/Panel%20Designer/Properties%20Table/Overview.md)**.) Setting the _Default to Pointer_ option (on the **[Panel](Introduction.htm#panel)** menu) to **_Off_** changes the default from the **_Pointer Tool_** to the **_Button_** control. _(The Pointer tool and Default to Pointer option in NOMADS+ were added in PxPlus 2019.)_  
  
**Options** |  Miscellaneous options.  
---|---  
_Create Label For Dictionary Element_ |  When selected (displays a check mark), this option generates a fonted text label for a data dictionary _Element_ control (see **[Data Element Controls](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark5)**) when the control is drawn on the panel. At the same time, the **[Include Element Label](Introduction.htm#label)** check box is selected. Both of these options remain selected until either one is deselected or the Panel Designer is exited. _(The Include Element Label check box was added in PxPlus 2018 Update 0001.)_

#### **Note:**  
This option has **_no effect_** on Check Box and Radio Button element controls and will be ignored if selected. These controls will be created as normal.

To **_apply_** this option: |  1. |  Select the _Create Label For Dictionary Element_ option.  
---|---  
2. |  Select an element to be placed on the panel (see **[Element](Introduction.htm#element)**). The _Element_ button changes to dark red and displays the name of the selected element. At the same time, the _Include Element Label_ check box displays, already selected.  
3. |  Draw the element control. (At this point, a message displays **_only_** if the selected element is associated with a **[Dynamic Data Class](../Data%20Dictionary/Data%20Classes/Overview.htm#Mark2)**.)  
4. |  A **[Fonted Text Properties](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Text%20Control/Text.md)** window displays for the generated element label. By default, the label is positioned to the left of the control but can be adjusted if needed.  
_Change Bulk Edit/Property Sort Order_ |  Opens the **[Change Bulk Edit/Property Sort Order](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Change%20Sort%20Order.md)** window for customizing how property groupings are displayed in **[Property Sheets](../NOMADS%20Graphical%20Application/Panel%20Designer/Properties%20Table/Overview.md)**, the **[Panel Bulk Edit Utility](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md)**, and the **[Library Bulk Edit and Search Utility](../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** (for the **Properties to Edit** grid).  
  
**Utilities** |  Drop-down menu for panel/library utilities.  
---|---  
_Bulk Edit_ |  Allows you to change the design properties of two or more selected panel controls within the current active panel. See **[Panel Bulk Edit Utility](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md)**.  
_Dependency Definition_ |  Launches utility that enables selected controls to be hidden, locked, enabled based on a preset condition. See **[Dependency Definitions](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Dependency%20Definitions.md)**.  
_Drag &Drop_ |  Launches utility that allows selected items to be moved between controls at run time. See **[Drag and Drop Utility](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)**.  
_Group Assignment_ |  Launches utility for assigning controls to a group name for a selected library and panel. See **[Group Assignment (Panel Level)](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Group%20Assignment%20\(Panel%20Level\).htm).**  
_Suppress Groups_ |  Launches utility for choosing which group(s) of controls to display or temporarily suppress from displaying on the current panel in the NOMADS Panel Designer. See **[Suppress Groups](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Suppress%20Groups.md)**. _(The Suppress Groups utility was added in PxPlus 2021.)_  
_Visual Class Assignment_ |  Launches utility for assigning visual classes to controls. See **[Visual Class Assignment](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Visual%20Class%20Assignment%20\(Panel%20Level\).htm)**.  
_Resize_ |  Launches the **[Custom Sizing Definition Utility](../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.htm#CustomSizing)** for defining resizing options for the panel and for all the controls on it.  
_Tab Order Definition_ |  Launches utility for defining the tab sequence. See **[Tab Order](../NOMADS%20Graphical%20Application/Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Tab%20Order.md)**.  
_User CTLS_ |  Launches utility for assigning CTL values that are used to associate programs or events with specific function key values when running the current panel. See **[User-Defined CTLS](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/User-Defined%20CTLs.md)**.  
_Auto Complete_ |  Launches utility for defining auto complete functionality for use in a **[Multi-Line Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)**. See **[Auto Complete](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)**.  
_Calendar_ |  Launches utility for defining calendar functionality for use in a **[Multi-Line Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)**. See **[Calendar](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Calendar.md)**.  
_Assign Substitute Panels_ |  Launches **[Substitute Panel Maintenance](../NOMADS%20Graphical%20Application/Program%20Interaction/Substitute%20Panels.md)** for specifying conditions to apply when loading a substitute panel instead of the original one.  
_Assign Alternate Panels_ |  Launches **[Alternate Panel Maintenance](../NOMADS%20Graphical%20Application/Program%20Interaction/Alternate%20Panel%20Layouts/Overview.htm#Mark2)** for specifying conditions to apply when resizing and displaying an alternate panel instead of the original one.  
_Nomads+_ |  Launches a multi-functional dialogue that combines folder style and property sheets, listing all panel controls and specific properties in a grid format.  
_Property Sheets_ |  Displays the properties for a selected control using a two-column table format. See **[Using Property Sheets](../NOMADS%20Graphical%20Application/Panel%20Designer/Properties%20Table/Overview.md)**.  
_Folder Style_ |  Displays the properties for a selected control using a tabbed folder format. See **[Using Folder Style](../NOMADS%20Graphical%20Application/Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)**.  
  
**Sizing** |  Drop-down menu for panel and/or objects sizing.  
---|---  
_Fixed_ |  Panel size is fixed and objects have fixed sizes and locations.  
_Resizable_ |  Panel is resizable but objects have fixed sizes and locations.  
_Resizable/Auto Scroll_ |  Panel is resizable, and objects have fixed sizes. However, specific objects can be set to scroll by selecting the _Enable Scrolling_ property in their Properties table or in the **[Custom Sizing Definition Utility](../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.htm#CustomSizing)**.  
_Resizable/Auto Size_ |  Panel is resizable, and objects are resized and relocated based on the ratio of the original size to the new panel size.  
_Resizable/Custom_ |  Panel is resizable, and each object can be resized (Auto Size) or remain fixed in size (Fixed). Auto size objects are automatically relocated, whereas fixed-sized objects will have the following _Movement_ options available: Default, Default (Centered), or Anchored (Top, Bottom, Left, Right, Top/Left, Top/Right, Bottom/Left and Bottom/Right).  
  
**Projects** |  Drop-down menu for projects.  
---|---  
_Create New Project_ |  Launches the **[Create Project](../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add to Project_ |  Launches the **Add to Project** dialogue for adding the current task to an existing project that is selected from the _Project_ drop box. To manage all the tasks within a project, see **[Project Maintenance](../Project%20Maintenance.md)**. For information on adding tasks to a project from other locations, see **[Adding Tasks to Projects from Other Locations](../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
  
**iNomads** | 

#### **Note:**  
iNomads is **_not_** available with a **_base_** PxPlus activation. Contact your PxPlus reseller or visit the PxPlus website **[www.pvxplus.com](http://www.pvxplus.com/)** for product information and licensing.

Lists options for creating and running a panel in iNomads. _(The iNomads menu was added to the Panel Designer in PxPlus 2016.)_  
---|---  
_Create/Edit Transaction_ |  Launches **[iNomads Transaction Maintenance](../iNOMADS/Transaction%20Maintenance.md)** for defining the program or NOMADS panel to use for an iNomads application.  
_Run transaction_ |  Displays the current **_saved_** panel in iNomads in "test" mode on a new Web browser page using the _admin_ template. This allows you to preview the panel so you can determine if further adjustments are needed in the NOMADS Panel Designer. If the panel already exists in **[iNomads Transaction Maintenance](../iNOMADS/Transaction%20Maintenance.md)**, that transaction will be run.

#### **Note:**  
This "test" functionality is **_not_** available when running WindX.  
  
**Panel Details** |  Launches the **Panel Details** dialog. _(The Panel Details dialog was added in PxPlus 2018.)_  
---|---  
|  Launches the **Panel Details** dialog, which contains a summary list of panel information and includes the following categories: **[Alternate Panels](../NOMADS%20Graphical%20Application/Program%20Interaction/Alternate%20Panel%20Layouts/Overview.md)**, **[Dependencies](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Dependency%20Definitions.md)**, **[Drag And Drop](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)**, **[Groups](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Group%20Assignment%20\(Panel%20Level\).htm)**, **[Menu](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Menu%20Bar/Menu%20Bar%20Definition.md)**, **[Substitute Panels](../NOMADS%20Graphical%20Application/Program%20Interaction/Substitute%20Panels.md)**, **[User CTLS](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/User-Defined%20CTLs.md)** and **[Visual Classes](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Visual%20Class%20Assignment%20\(Panel%20Level\).htm)**. The category headings are clickable, invoking the associated utility program to edit the panel.  
  
**Wiki Info** |  _(The Wiki Info menu option was added in PxPlus 2023.)_  
---|---  
|  Spawns EZWeb for the **[PxPlus Wiki](../PxPlus%20Wiki/PxPlus%20Wiki.md)** (if not already running) and then displays panel information for the current NOMADS panel in a new tab on your default Web browser. **_Example:_** When the PxPlus Wiki launches, the information for the current panel, Product_Mnt, displays:  
  
**Help** |  Additional Help options.  
---|---  
_Edit Keys_ |  Provides a list of keystroke combinations that are mapped to NOMADS functionality; i.e. Ctrl + S = Save, Ctrl + C = Copy, Ctrl + V = Paste.

#### **Note:**  
The standard edit keys **Home** and **End** apply only when using the **[Folder Style](../NOMADS%20Graphical%20Application/Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** and **[Property Sheet](../NOMADS%20Graphical%20Application/Panel%20Designer/Properties%20Table/Overview.md)** versions of the NOMADS Panel Designer.  
  
_About_ |  NOMADS Designer version number.  
  
**Quit** |   
---|---  
|  Exits the NOMADS+ Toolbar/Design panel with the option to save/abandon changes.  
  
##  Controls Toolbar

The **_Controls_** toolbar is a collection of creation tools that are used when adding controls to any panel. These tools are explained below.

**_To create a control:_**

|  1. |  Click the appropriate tool in the _Controls_ toolbar.  
---|---|---  
|  2. |  Draw the control on the panel by holding down the left mouse button, dragging the dotted outline to the desired size and releasing the mouse button. The control's **Properties** window displays.  
|  3. |  Enter the associated logic and set other design properties as needed.  
  
For information on drawing, resizing, moving and arranging objects in the Panel Designer, see **[Creating Panel Controls](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md)** and **[Modifying Objects](../NOMADS%20Graphical%20Application/Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Modifying%20Objects.md)**.

|  **Pointer Tool** |  Use the Pointer Tool **_(default)_** for selecting either a single control or for drawing a selection box around multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time. (Similar functionality to the **_Pointer Tool_** used in **[Property Sheets](../NOMADS%20Graphical%20Application/Panel%20Designer/Properties%20Table/Overview.md)**.) Setting the _Default to Pointer_ option (**Panel** menu) to **_Off_** changes the default from the **_Pointer Tool_** to the **_Button_** control. _(The Pointer tool and Default to Pointer option in NOMADS+ were added in PxPlus 2019.)_  
---|---|---  
|  **[Button](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Button%20Control/Overview.md)** |  Standard button control familiar to all graphical user interface users.  
|  **[Radio Button](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.md)** |  Radio buttons typically appear in a group of two or more circular buttons, where only one button in the group may be activated (set to **_On_**) at any time.  
|  **[Check Box and Tri-State](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)** |  Users can toggle check boxes between states: **_On_** to select an option, **_Off_** to disable it. An optional **_third_** state may be defined (for a _Tri-State_ control).  
|  **[List Box](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/Overview.md)** |  List box controls allow users to select items from a displayed list. The different list box styles available in NOMADS include **[Standard](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#standard)**, **[Formatted](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#formatted)**, **[List View](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#listview)**, **[Report View](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#reportview)** and **[Tree View](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#treeview)**.  
|  **[Drop Box](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Drop%20Box%20Control/Overview.md)** |  A drop box is similar to a list box, but it only displays a single line of text and provides a drop-down arrow button for access to other items in the list.  
|  **[Multi-Line](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)** |  A multi-line control is an input field used primarily for entering one or more lines of text.  
|  **[Fonted/Fixed Text](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Text%20Control/Text.md)** |  Provides headings and labels for controls in a panel. _Fonted_ text provides several style options. _Fixed (standard)_ text is for fixed PxPlus font only.  
|  **[Image/Picture](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Image%20Control/Image.md)** |  Places a graphic on the panel. Does not respond to events.  
|  **[Box/Frame](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Frame%20Control/Frame.md)** |  Draws a box/frame around a selected group of controls on the panel. Does not respond to events.  
|  **[Shape](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Shape%20Control/Shape.md)** |  Draws graphics on a panel. Does not respond to events.  
|  **[Folder](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Folder%20Controls/Overview.md)** |  Panels can be set up to display as a layered file folder to provide access to tabbed sub-panels.  
|  **[Grid](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Grid%20Control/Overview.md)** |  The grid is a two-dimensional array of cells (similar to a spreadsheet) that may comprise a combination of different panel components.  
|  **[Chart](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)** |  Creates a chart-style illustration on the panel.  
|  **[Vertical/Horizontal Scrollbar](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Scrollbar%20Controls/Overview.md)** |  Vertical and horizontal scrollbars provide slider controls.  
|  **[External Control](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/COM%20Control/COM%20Control.md)** |  Creates a control that allows you to integrate external components produced by third-party vendors into your Windows-based PxPlus application (e.g. progress bar, spreadsheet, browser or calendar). The types of external controls that can be created are _Chromium Browser_ , _ActiveX Controls_ , _PVX Plus Controls_ and _.NET Controls_. _(The Chromium Browser Object was added in PxPlus 2017.)  
__(Support for .NET controls was added in PxPlus 2025.)_  
|  **[Embed Panel](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Embedded%20Panels/Overview.md)** |  Allows you to place the contents of another panel onto the current panel.  
|  **Group Items** |  Used for selecting multiple controls in a group so that the same function (i.e. copying/pasting, moving, deleting) can be applied to them at the same time. When this tool is selected, use the mouse to draw a selection box around the controls to be grouped. (Similar functionality to the **_Pointer Tool_**.)  
|  **Data Class** |  **_(Available only if Data Class Definitions file exists)_** This button (or the Query down arrow) displays a list of defined data classes stored in the _providex.dcl_ file. For information on creating data classes, see **[Data Classes](../Data%20Dictionary/Data%20Classes/Overview.md)**. Select a data class for the type of control to be placed on the panel. When selected, the text _Data Class_ is replaced with the name of the selected class, and the button color changes to dark red. When the control is drawn, the **Properties** window is automatically loaded with information from the selected class.  
|  **File** |  **_(Available only if Data Dictionary file exists)_** This button (or the Query down arrow) displays a list of dictionary files stored in the _providex.ddf_ file. Select the dictionary file that contains the element(s) to be placed on the panel, and then use the _Element_ button to select an element from the selected file. When a file is selected, the text _File_ is replaced with the name of the selected file, and the button color changes to dark red.  
|  **Element** |  **_(Available only if Data Dictionary file exists)_** If a dictionary _File_ was selected previously, this button (or the Query down arrow) displays a list of the elements in the selected file only. If **_no_** dictionary _File_ was selected, this button displays a list of **_all_** the elements in **_all_** dictionary files (sorted by _Table Name_). Elements are stored in the _providex.dde_ file. For information on defining elements, see **[Element Description](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Element%20Description.md)**. Select an element to be placed on the panel. When selected, the text _Element_ is replaced with the name of the selected element. If a dictionary _File_ was not selected previously, then the text _File_ is replaced with the name of the dictionary file containing the selected element. The _Element_ button color changes to dark red. When the control is drawn, the **Properties** window is displayed for the selected element.

#### **Note:**  
  
**_When drawing a data element control:_**  
  
If the element was defined with a data class that is **_not dynamic_** , the element values will be written to the control properties.  
  
If the element was defined with a **_dynamic_** data class, a message will ask if the element values are to overwrite data class values for corresponding properties. Respond _Yes_ to apply the element values or _No_ to apply the data class values. See **[Dynamic Control Properties](../Data%20Dictionary/Data%20Classes/Dynamic.md)**.  
  
_(Dynamic data classes and properties were added in PxPlus 2018.)_  
  
|  **Include Element Label******|  **_(Available only when a Data Dictionary element is selected)_** When selected, this option generates a fonted text label for a data dictionary _Element_ control (see **[Data Element Controls](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.htm#Mark5)**) when the control is drawn on the panel. At the same time, the **[Create Label For Dictionary Element](Introduction.htm#options)** option (**Options** menu) is selected. Both of these options remain selected until either one is deselected or the Panel Designer is exited.

#### **Note:**  
This option has **_no effect_** on Check Box and Radio Button element controls and will be ignored if selected. These controls will be created as normal.

To **_apply_** this option: |  1. |  Select an element to be placed on the panel (see **[Element](Introduction.htm#element)**). The _Element_ button changes to dark red and displays the name of the selected element. At the same time, the _Include Element Label_ check box displays.  
---|---  
2. |  Click the _Include Element Label_ check box.  
3. |  Draw the element control. (At this point, a message displays **_only_** if the selected element is associated with a **[Dynamic Data Class](../Data%20Dictionary/Data%20Classes/Overview.htm#Mark2)**.)  
4. |  A **[Fonted Text Properties](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Text%20Control/Text.md)** window displays for the generated element label. By default, the label is positioned to the left of the control but can be adjusted if needed.  
  
_(The Include Element Label check box was added in PxPlus 2018 Update 0001.)_  
  
##  Ribbon Bar

The **_Ribbon Bar_** consists of functions that are commonly used for the development of screen panels. A list of available selections is provided below.

|  _Save_ |  Saves changes to the panel without exiting.  
---|---|---  
|  _Test_ |  Switches to test mode.  
|  _Properties_ |  Displays the properties for the selected control.  
|  _Header Panel_ |  Displays Panel Definition properties.  
|  _Menu_ |  Defines a menu bar for the panel. See **[Menu Bar](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Menu%20Bar/Overview.md)**.  
|  _Undo_ |  Undo up to 50 changes.  
|  _Redo_ |  Sequentially reapplies the last changes that were undone by the _Undo_ option until a new change is made. After a new change, _Redo_ will recall only changes that were "undone" after the newest change. _(The Redo functionality was added in PxPlus 2014 Feature Pack 1 - Update 0005.)_  
|  _Bulk Edit_ |  Allows you to change the design properties of two or more selected panel controls within the current active panel. See **[Panel Bulk Edit Utility](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Bulk%20Edit%20Utility.md).**  
|  _Cut_ |  Cut selected object(s).  
|  _Copy_ |  Copy selected object(s).  
|  _Paste_ |  Paste object(s) from the Clipboard.  
|  _Commit_ |  Invokes the TortoiseSVN Commit procedure for committing panel changes to the repository. This option is enabled only if **_both_** of the following conditions are met: The programs/files associated with the current panel are integrated with the **[PxPlus Version Control System Using TortoiseSVN](../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md)**. Changes to the current panel have been saved.  
|  _Up  
Down_ |  Moves a selected row up or down within the grid _only_ if that row has the **Tab Stop** check box selected. Moving a selected row changes the tab order of the controls in the current panel.  
  
The tab order can also be modified in the **Tab Order Definition** window, which is accessed either by selecting _Tab order_ from the _Edit_ menu or by selecting _Tab Order Definition_ from the _Utilities_ menu. See **[Tab Order](../NOMADS%20Graphical%20Application/Panel%20Designer/Drawing%20and%20Modifying%20Panel%20Objects/Tab%20Order.md)**.  
|  **Test using Alternate/Substitute Panels** |  **_(Available only when_ [Alternate Panels](../NOMADS%20Graphical%20Application/Program%20Interaction/Alternate%20Panel%20Layouts/Overview.md)** _**and/or**_**[Substitute Panels](../NOMADS%20Graphical%20Application/Program%20Interaction/Substitute%20Panels.md)** _**have been assigned to the current panel)**_ Select this check box to test the alternate or substitute panel logic for the current panel when the **[Test](Introduction.htm#test)** option is selected. To test the current panel without the alternate or substitute panel logic, uncheck this option _(default)_. _(The Test using Alternate/Substitute Panels check box was added in PxPlus 2017 Update 0002.)_  
|  **Suppress Groups** |  Click the text portion of this button to launch the **[Suppress Groups](../NOMADS%20Graphical%20Application/Panel%20Designer/Options%20and%20Utilities/Suppress%20Groups.md)** utility that is used for choosing which group(s) of controls to display or temporarily suppress from displaying on the current panel in the NOMADS Panel Designer. Click the drop down arrow to access a _Display All Groups_ option for displaying all groups on the current panel. _(The Suppress Groups utility was added in PxPlus 2021.)_  
  
##  Controls Grid

The **_Controls_** grid displays all the controls in the current panel in tab order sequence.

> Within this grid, the following most commonly used parameters for each control can be modified, and any changes made are automatically reflected in the Design panel:

_Control_ |  Unique name assigned to the control.  
---|---  
_(Properties Button)_ |  Brings up the properties window for the selected control. Works the same as the _Properties_ button on the **[Ribbon Bar](Introduction.htm#ribbonbar)**. **_Example:_** If the row selected is a _Multi-Line_ control, clicking the _Properties_ button invokes the **Multi-Line Properties** window.  
_Type_ |  Type of control (i.e. _Button_ , _Multi Line_ , etc.). When creating **[List Box](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**, **[Chart](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Chart%20Control/Chart.md)** and **[Shape](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Shape%20Control/Shape.md)** controls, the specific _type_ of List Box, Chart and Shape is also displayed. _(The specific type of List Box, Chart and Shape was added in PxPlus 2019.)_  
_Text_ |  Text associated with the control.  
_Column_ |  Starting column position of the control.  
_Line_ |  Starting line position of the control.  
_Width_ |  Width of the control in number of columns.  
_Height_ |  Height of the control in number of lines.  
_Tab Stop_ |  Indicates whether the control is included in the tabbing sequence.  
_Movement_ |  Indicates the resizing behavior set for the control. See **[Panel Resizing](../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_(Delete Button)_ |  Deletes the currently selected control. If the control was deleted in error, use the _Undo_ toolbar button to bring it back. The deleted control is not written to the Clipboard; therefore, it cannot be pasted. _(The Delete button was added in PxPlus 2020.)_
