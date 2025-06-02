# Library Object Selection 

**Menu Options** |  **__**  
---|---  
  
Several methods are available for accessing **Library Object Selection** functionality: selecting drop-down menu bar options, clicking on associated buttons or tool bar options (see **[Button Options](Button%20Options.md)**), or right clicking on a selected object in the Object list.

####  **Note****:**  
For all **[View](Menu%20Options.htm#views)** displays (_Button View, Toolbar View_ or _Menubar View_), right clicking in the Objects list displays a popup menu with the following selections: **[Open](Button%20Options.htm#Mark1)**, **[Copy](Menu%20Options.htm#options)**, **[Delete](Menu%20Options.htm#options)**, **[Test NOMADS Panel](Menu%20Options.htm#options)**, _Preview HTML Page_ , **[Customize Panel](Menu%20Options.htm#utilities)**, **[Add to Project](Menu%20Options.htm#projects)** and **[Refresh](Menu%20Options.htm#options)**. Some of these are also available as **[Button Options](Button%20Options.md)**.  
  
The _Preview HTML Page_ option is available only when right clicking on a file maintenance panel object (object **[Type](Console%20and%20Object%20List.htm#objectlist)** "Dh") where an HTML page was generated. To preview an HTML page, a valid **[Webster Preview URL](Menu%20Options.htm#webster)** is required. If the URL has not been defined, a message will display.  
  
_(The Refresh option was added in PxPlus 2019.)  
(The Preview HTML Page option was added in PxPlus 2021.)  
(The Open option on the right click menu was added in PxPlus 2021 Update 1.)_

The options and utilities below are listed in the order that they appear on the menu bar in Library Object Selection: **[Objects](Menu%20Options.htm#objects)**, **[Options](Menu%20Options.htm#options)**, **[Library](Menu%20Options.htm#library)**, **[Utilities](Menu%20Options.htm#utilities)**, **[Views](Menu%20Options.htm#views)**, **[Projects](Menu%20Options.htm#projects)**, **[Designer](Menu%20Options.htm#designer)**, **[iNomads](Menu%20Options.htm#inomads)**, **[Webster+](Menu%20Options.htm#webster)**, **[Details](Menu%20Options.htm#details)** and **[Quit](Menu%20Options.htm#quit)**.

**Objects** |  Lists options for creating or editing various object definitions. For information on these object definitions, see **[Creating Library Objects](Creating%20Library%20Objects.md)**.  
---|---  
_Panel Object_ |  Provides the graphical user interface layout for the control objects required to interact with your application.  
_Query Object_ |  Consists of a panel that displays records from a data file and returns a value associated with a record selected by the user (default is the value in the first column).  
_File Maint_ |  Launches the **[File Maintenance Generator](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** after the name of a new panel has been entered. _(The File Maintenance Generator was added in PxPlus 2019.)_  
_Popup Menu Object_ |  Menu objects that appear when the user right clicks while hovering the mouse pointer over a selected control or panel area. They appear much like the drop-down menus on a menu bar except that they can be placed anywhere on the panel and are invisible until they are invoked.  
  
**Options** |  Lists options for editing, copying, deleting, testing and printing.  
---|---  
_Edit_ |  Launches the creation/maintenance tool specific to the currently highlighted object name (has the same effect as _double-clicking_ the item).  
_Copy_ |  **_(Available on the right click popup menu - see_ [Note](Menu%20Options.htm#note1) _above)_** Launches the **[Copy Screen Objects](../Maintaining%20Library%20Objects/Copying%20Library%20Objects.md)** utility.  
_Delete_ |  **_(Available on the right click popup menu - see_ [Note](Menu%20Options.htm#note1) _above)_** Removes the selected object(s). Prior to deleting, a message will display.

#### **Note:**  
The Delete key can also be used to remove one or more selected objects.  
  
_(Support for the Delete key was added in PxPlus 2019.)_  
  
_Test_ |  **_(Available on the right click popup menu - see_ [Note](Menu%20Options.htm#note1) _above)_** Runs the selected panel object in _test mode_ within NOMADS. Use the **Esc** or the **F4** key to exit test mode. See **[Edit Mode vs. Test Mode](../../Panel%20Designer/Introduction.htm#editmode)**.  
_Print_ |  Launches the **[Print Panels](../Maintaining%20Library%20Objects/Print%20Panels%20Utility.md)** dialogue to print a report of a library or selected panels within a library.  
_Refresh_ |  **_(Available on the right click popup menu - see_ [Note](Menu%20Options.htm#note1) _above)_** Refreshes the list of Library objects. _(The Refresh option was added in PxPlus 2019.)_  
  
**Library** |  Lists options to set library defaults and assign groups.  
---|---  
_Library Defaults_ |  Launches **[Library Defaults](../Maintaining%20Library%20Objects/Library%20Defaults.md)**.  
_Assign Groups_ |  Launches **[Group Assignment](../Maintaining%20Library%20Objects/Group%20Assignment.md)**.  
  
**Utilities** |  Lists options for various library utilities.  
---|---  
_Compare_ |  Launches the **[Library Compare](../Maintaining%20Library%20Objects/Compare%20Utility.md)** utility.  
_Search/Replace_ |  Launches the **[Search/Replace](../Maintaining%20Library%20Objects/Search%20and%20Replace%20Utility.md)** utility.  
_Merge_ |  Launches the **[Merge Panels](../Maintaining%20Library%20Objects/Merge%20Utility.md)** utility.  
_Export_ |  Launches the **[Export Library Objects to Text File](../Maintaining%20Library%20Objects/Export%20and%20Import%20Utilities.md)** utility.  
_Import_ |  Launches the **[Import Library Objects from Text File](../Maintaining%20Library%20Objects/Export%20and%20Import%20Utilities.md)** utility.  
_AutoChart File Maintenance_ |  Launches the **[AutoChart Definition File Maintenance](../../../NOMADS%20AutoChart/AutoChart%20Definition%20File%20Maintenance/Overview.md)** utility.  
_Chart Image Scheduler_ |  Launches the **[Chart Image Generation Schedule Maintenance](../../../Chart%20Images%20Generation/Schedule%20the%20Chart%20Generation.md)** utility.  
_Create/Remove Customizer Library_ |  Creates (or removes) the **[Customizer Definition](../../Customizer/Defining%20Custom%20Information.md)** file for the current library. _(The Create/Remove Customizer Library option was added in PxPlus 2017.)_  
_Customize Panel_ |  **_(Available on the right click popup menu - see_ [Note](Menu%20Options.htm#note1) _above)_** Launches the **[Customizer General Maintenance](../../Customizer/Working%20with%20Custom%20Information.md)** utility.  
_Library Bulk Edit_ |  Launches the **[Library Bulk Edit and Search](../Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)** utility.  
_Query Bulk Edit_ |  Launches the **[Query Bulk Edit](../Maintaining%20Library%20Objects/Query%20Bulk%20Edit.md)** utility.  
_Query Profile Maintenance_ |  Launches the **[Query Profile Information Maintenance](../../../NOMADS%20Query%20Profile%20Maintenance%20Utility/Introduction.md)** utility.  
_Calendar_ |  Launches the **[Calendar Control Definition](../../System%20Maintenance%20Tools/System%20Options/Calendar.md)** utility. _(The Calendar utility was added to the Utilities menu in PxPlus 2022.)_  
_Themes Maintenance_ |  Launches the **[Themes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#themesutil)** utility. _(Themes Maintenance was added to the Utilities menu in PxPlus 2019.)_  
_Visual Class Maintenance_ |  Launches the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility. _(Visual Class Maintenance was added to the Utilities menu in PxPlus 2019.)_  
_Visual Class Assignment_ |  Launches the **[Visual Class Assignment](../Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)** utility.  
_Copy Theme_ |  Launches the **[Copy Theme](../../System%20Maintenance%20Tools/System%20Options/Copy%20Theme.md)** utility. _(The Copy Theme utility was added in PxPlus 2024.)_  
  
**Views** |  Lists options for the display style to use for accessing common functions in the **Library Object Selection** window.  
---|---  
_Button View_ |  Presents a series of buttons at the bottom of the window.  
_Toolbar View_ |  Presents a series of tool bar options at the top of the window.  
_Menubar View_ |  Presents a menu bar.  
  
**Projects** |  Lists options for projects. For information on adding tasks to projects, see **[Adding Tasks to Projects from Other Locations](../../../PxPlus%20IDE/Adding%20Tasks%20to%20Projects%20from%20Other%20Locations.md)**.  
---|---  
_Create New Project_ |  Launches the **[Create Project](../../../PxPlus%20IDE/IDE%20Main%20Launcher.htm#createproject)** dialogue for entering a new project for the current working directory. Click the Query button to select a different working directory.  
_Add All Objects to Project_ |  Launches the **Add to Project** dialogue for selecting the existing project to which _all_ objects in the current screen library will be added.  
_Add Selection(s) to Project_ |  Launches the **Add to Project** dialogue for specifying the existing project to which only the highlighted object(s) selected from the list will be added.

#### **Note:**  
You can also select **Add to Project** from the popup menu that is invoked by right clicking on a selected object.  
  
**Designer** |  Lists options for **[Panel Designer](../../Panel%20Designer/Introduction.md)** styles. _(The Designer menu was added in PxPlus 2016.)_  
---|---  
_Nomads+_ |  Select this option to use the **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)** panel designer style.  
_Property Sheets_ |  Select this option to use **[Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)** panel designer style.  
_Folder Style_ |  Select this option to use the **[Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** panel designer style.  
  
**iNomads** | 

#### **Important Note:**  
iNomads is **_not_** available with a **_base_** PxPlus activation. Contact your PxPlus reseller or visit the PxPlus website **[www.pvxplus.com](http://www.pvxplus.com/)** for product information and licensing.

Lists options for creating and running the selected object in iNomads. ** _The selected object must be a Dialogue or Window._** An object must be selected ** _first_** in the **[Object List](Console%20and%20Object%20List.htm#objectlist)** prior to selecting the _iNomads_ menu; otherwise, a message displays as a reminder. If multiple objects are selected, the object listed first in the range of highlighted selections is used to determine whether the _iNomads_ menu can be enabled. _(The iNomads menu was added in PxPlus 2017.)_  
---|---  
_Create/Edit Transaction_ |  Launches **[iNomads Transaction Maintenance](../../../iNOMADS/Transaction%20Maintenance.md)** for the selected object, using this object's details to populate certain fields.  
_Run Transaction_ |  Displays the selected object in iNomads in "test" mode on a new Web browser page using the _admin_ template. This allows you to preview the object so you can determine if further adjustments are needed in the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)**. If the selected object already exists in **iNomads Transaction Maintenance** , that transaction will be run.

#### **Note:**  
This "test" functionality is **_not_** available when running WindX.  
  
**Webster+** |  PxPlus HTML generation and processing application used to create HTML pages.  
  
_(The Webster+ menu was added in PxPlus 2021.)_  
---|---  
_Define Webster+ Pages Directory_ |  Launches a separate window for entering the directory in which the generated **[File Maintenance](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** HTML pages will be created. The recommended directory is the **_\pages_** directory under the location in which Webster+ was installed; however, any directory location can be used. **_Example:_** _C:\web\pages_ (assumes that Webster+ was installed in _C:\web_)  
_Webster Preview URL_ |  Launches a separate window for entering a valid URL, which is required to preview an HTML page created by the **[File Maintenance Generator](../../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**. A Web server must be running and pointing to an installation of Webster+. The URL should specify the server and the port number, separated by a **:**  _(colon)_. **_Example:_** localhost:8088/ (indicates that the Web server is running on your local machine on port 8088)  
_Create Base Webster+ Panel(s)_ |  Launches the **[Create Base Webster+ Page(s)](Create%20Base%20Webster%20Pages.md)** utility for converting existing NOMADS panels into base Webster+ HTML pages. _(The Create Base Webster+ Panel(s) utility was added in PxPlus 2025.)_  
  
**Details** |  Displays a concurrent window with information about the currently selected object. _(The Details menu was added in PxPlus 2017 Update 0002.)_  
---|---  
|  The information displayed varies depending on the type of object selected: |  |  _Panels (Dialogues and Windows)_ |  Displays control names, alternate and substitute panels, and customization.  
---|---|---  
|  _Queries (Queries and Query Lists)_ |  Displays the main file, file links and columns (fields and formulas).  
|  _Popup Menus_ |  Displays the top-level menu items.  
  
Once invoked, this information window continues to display for the session until it is closed.

**_Example:_**

Below is an example of the information window displayed for a selected panel:  
  
**Quit**|   
---|---  
|  Closes the **Library Object Selection** window.
