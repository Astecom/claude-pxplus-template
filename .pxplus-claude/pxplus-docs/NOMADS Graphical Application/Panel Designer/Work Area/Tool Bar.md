# Panel Designer  
  
**Tool Bar Options** |  **__**  
---|---  
  
The Panel Designer **_tool bar_** provides convenient access to many of the functions that are also available as **[Menu Options](Menu%20Options.md)**.

#### **Note:**  
The tool bar options vary slightly depending on whether you are using the [ **NOMADS+**](../../../NOMADS+%20Toolbar/Introduction.md), [ **Folder Style**](../Folder%20Style/Using%20the%20Folder%20Style.md) or [**Property Sheets**](../Properties%20Table/Overview.md) version of the Panel Designer. For a list of **NOMADS+** options, see **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.htm#ribbonbar)**.

The tool bar options are listed below.

**Tool Bar Option** |  **Description**  
---|---  
_Always on top_ |  Display the panel on top of any other open windows.  
_Save_ |  Save changes to the panel without exiting. Also available from the _Panel_ menu or from the popup menu when right clicking on the panel.  
_Print_ |  Print the details of all panel controls. Also available from the _Panel_ menu or from the popup menu when right clicking on the panel.  
_Undo_ |  Undo up to 50 changes. Also available from the _Edit_ menu or from the popup menu when right clicking on the panel.  
_Redo_ |  Sequentially reapplies the last changes that were undone by the _Undo_ option until a new change is made. After a new change, _Redo_ will recall only changes that were "undone" after the newest change. Also available from the _Edit_ menu or from the popup menu when right clicking on the panel.  
_Delete_ |  Deletes the currently selected control. If the control was deleted in error, use the _Undo_ toolbar button to bring it back. The deleted control is not written to the Clipboard; therefore, it cannot be pasted. _(The Delete button was added in PxPlus 2020.)_  
_Object Name_ |  Drop box on the tool bar that displays the name of the currently selected control or design element. Select the drop-down arrow to obtain a list of all other objects belonging to the current panel.

#### **Note:**  
Use this drop box as an alternate method for selecting an object for editing. This is particularly useful for accessing objects that may be hidden from view or difficult to select via the mouse pointer.  
  
_Properties_ |  Display the design properties for the selected panel control.  
_Test_ |  Switch to test mode. Also available from the _Panel_ menu or from the popup menu when right clicking on the panel.  
_Header_ |  Display Panel Definition properties. Also available from the _Panel_ menu or from the popup menu when right clicking on the panel.  
_Ctls_ |  Launches the **[User Defined CTL Values Utility](../Options%20and%20Utilities/User-Defined%20CTLs.md)** for assigning CTL values that are used to associate programs or events with specific function key values when running the current panel. Also available from the _Utilities_ menu.  
_Tabs_ |  Launches the **[Tab Order Definition Utility](../Drawing%20and%20Modifying%20Panel%20Objects/Tab%20Order.md)** for defining the tabbing sequence. Also available from the _Edit_ menu.  
_Bulk Edit_ |  Launches the **[Panel Bulk Edit Utility](../Options%20and%20Utilities/Bulk%20Edit%20Utility.md)** for changing the design properties of two or more selected panel controls. Also available from the _Utilities_ menu. (If using _Property Sheets_ , select _Bulk Edit_ from the drop-down list at the far right side of the tool bar.)  
_Drag/Drop_ |  Launches the **[Drag and Drop Utility](../Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)** that allows selected items to be moved between controls at run time. Also available from the _Utilities_ menu. (If using _Property Sheets_ , select _Drag &Drop_ from the drop-down list at the far right side of the tool bar.)  
_Dependencies_ |  Launches the **[Dependency Definition Utility](../Options%20and%20Utilities/Dependency%20Definitions.md)** that enables selected controls to be hidden, locked, enabled based on a preset condition. Also available from the _Utilities_ menu. (If using _Property Sheets_ , select _Dependencies_ from the drop-down list at the far right side of the tool bar.)  
_Groups_ |  Launches the **[Group Assignment Utility](../Options%20and%20Utilities/Group%20Assignment%20\(Panel%20Level\).htm)** for assigning controls to a group name for a selected library and panel. Also available from the _Utilities_ menu. (If using _Property Sheets_ , select _Groups_ from the drop-down list at the far right side of the tool bar.)  
_Re-Size_ |  Launches the **[Custom Sizing Definition Utility](../Resizing%20and%20Persistence/Panel%20Resizing.htm#CustomSizing)** for defining resizing options for the panel and for all the controls on it. Also available from the _Utilities_ menu. (If using _Property Sheets_ , select _Resize_ from the drop-down list at the far right side of the tool bar.)  
_Auto Complete_ |  Launches the **[Auto Complete Definition Utility](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)** for defining auto complete functionality for use in a **[Multi-Line Control](../../Creating%20Panel%20Controls/Multi-Line%20Control/Overview.md)**. Also available from the _Utilities_ menu. (If using _Property Sheets_ , select _Auto Complete_ from the drop-down list at the far right side of the tool bar.)  
_Commit_ |  If your application programs and files are integrated with the **[PxPlus Version Control System Using TortoiseSVN](../../../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md)**, a _Commit_ button displays in the tool bar **_after saving_** any changes to the current panel. Selecting this button invokes the TortoiseSVN Commit procedure for committing the saved changes to the repository.  
_Test Alt/Subs_ _Pnls_ |  _(Available only when_**[Alternate Panels](../../Program%20Interaction/Alternate%20Panel%20Layouts/Overview.md)** _and/or_**[Substitute Panels](../../Program%20Interaction/Substitute%20Panels.md)** _have been assigned to the current panel)_ Select this check box to test the alternate or substitute panel logic for the current panel when the **[Test](Tool%20Bar.htm#test)** option (see above) is selected. To test the current panel without the alternate or substitute panel logic, uncheck this option _(default)_. _(The Test Alt/Subs Pnls check box was added in PxPlus 2017 Update 0002.)_
