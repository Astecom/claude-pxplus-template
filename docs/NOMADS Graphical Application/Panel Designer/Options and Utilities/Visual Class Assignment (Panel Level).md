# Options and Utilities   
  
**Visual Class Assignment (Panel Level)** |  **__**  
---|---  
  
You can assign **[Visual Classes](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** to controls at the **_panel_** level by using the **Visual Class Assignment** Utility. When a panel is opened, invoking this utility displays a window that lists the panel controls that may be assigned to a Visual Class. You can assign one Visual Class at a time to one or multiple controls, providing that the selected controls are the same _control type_ defined for that Visual Class.

To invoke the **Visual Class Assignment** utility at the **_panel_** level, first open an existing library/panel, and then in the **[NOMADS Panel Designer](../Introduction.md)**, select _Utilities_ > _Visual Class Assignment_ from the menu bar.

The following window is displayed:

> This window consists of the following:

**Class Name** |  Name of the Visual Class to be assigned (either _Fixed_ value or string _Expression_). **_A Class Name must be entered._** Select from the drop-down list of all Visual Class Names or enter an existing Class Name. If the _Class Name_ entered has not been previously defined, you are given an option to use it and apply it to the selected controls; however, you will need to define its properties using the **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility.  
---|---  
**Controls To Be Assigned** |  _(Available when a Class Name is entered/selected)_ Displays a list of the controls on the selected panel to which a Visual Class can be applied or has already been applied. If the specified _Class Name_ was previously applied to any of the panel controls, those controls are displayed separately in the **Controls Assigned To Class** list (see below) to distinguish them from the other controls. Panel controls that cannot be assigned to a Visual Class (i.e. Images, Shapes, External Controls) are not listed.

#### **Note:**  
Visual Classes can be applied only to **_specific control types_** : _Button, Chart, Check Box, Drop Box, Folder, Fonted Text, Frame, Grid, List_Box, Multi-Line, Radio Button, Tristate Box, Variable Drop Box_ and _Variable List Box_. See **[Visual Classes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#vcutility)** utility.

The **Controls To Be Assigned** list displays the following information: |  _Object Name_ |  Name of the control  
---|---  
_Control Type_ |  Type of control (i.e. Button, Dropbox, Grid, Multi-Line)  
_Text_ |  Text entered for the control, if applicable (i.e. button text, drop box list values)  
_Visual Class_ |  Name of the Visual Class previously assigned to the control, if applicable  
**Controls Assigned To Class** |  _(Available when a Class Name is entered/selected)_ Displays a list of the controls on the selected panel to which the specified _Class Name_ was previously assigned. In addition, any controls that you select in the **Controls To Be Assigned** list to be assigned to the specified _Class Name_ are added to this list box. For the steps on applying a Visual Class to one or multiple controls, see **[Applying a Visual Class](Visual%20Class%20Assignment%20\(Panel%20Level\).htm#applyclass)** below. The **Controls Assigned To Class** list displays the following information: |  _Control Name_ |  Name of the control  
---|---  
_Control Type_ |  Type of control (i.e. Button, Dropbox, Grid, Multi-Line)  
_Text_ |  Text entered for the control, if applicable (i.e. button text, drop box list values)  
_Previous Visual Class_ |  Name of the Visual Class previously assigned to the control, if applicable  
_Assign_ |  Moves a selected control from the **Controls To Be Assigned** list to the **Controls Assigned To Class** list in preparation for the Apply process. See **[Applying a Visual Class](Visual%20Class%20Assignment%20\(Panel%20Level\).htm#applyclass)** below.  
_Remove_ |  Removes a selected control from the **Controls Assigned To Class** list and returns it to the **Controls To Be Assigned** list, at the same time removing any previously assigned Visual Class for this control.  
_Ok_ |  Applies the selected Visual Class Name to controls in the **Controls Assigned To Class** list and closes the **Visual Class Assignment** utility.  
_Cancel_ |  Cancels any changes and closes the **Visual Class Assignment** utility.  
_Apply_ |  Applies the selected Visual Class Name to controls in the **Controls Assigned To Class** list and keeps the **Visual Class Assignment** utility open for any additional selections.  
  
##  Applying a Visual Class

The steps below guide you through the process of applying a Visual Class using this utility:

**Step** |  **Description**  
---|---  
1. |  Select the Visual _Class Name_.  
2. |  Select the control(s) in the **Controls To Be Assigned** list that you want to assign to this Visual Class.

#### **Note:**  
Select controls that match the control type defined for the Visual Class; otherwise, the Visual Class will have no effect on the control.

Use the methods below to select the control(s). Your selections are automatically added to the **Controls Assigned To Class** list in preparation for the Apply process.

  * Select a single control and click the _Assign_ button.
  * Select multiple controls by using **Shift-Click** (_consecutive_ selections) or **Ctrl-Click** (_random_ selections) and click the _Assign_ button.
  * Double click on a single control to automatically add it to the **Controls Assigned To Class** list.
  * Drag and drop selected controls to the **Controls Assigned To Class** list.

  
3. |  **_(Optional)_** If you want to remove a control (and its previous Visual Class) from the **Controls Assigned To Class** list (i.e. due to an error), select the control and click the _Remove_ button. This returns the control to the **Controls To Be Assigned** list. You can also double click on the control, or use the drag and drop method.  
4. |  When you have made your selections, click _Apply_ or _Ok_. The Visual Class is then applied to the selected controls, the **Controls Assigned To Class** list is blank, and the **Controls To Be Assigned** list is updated with these changes.

#### **Note:**  
Only one Visual Class can be assigned to a control. If a Visual Class has been previously assigned to a control, it is overwritten when the selected Visual Class is applied.  
  
The **Visual Class Assignment** utility can also be used to assign Visual Classes to controls at the **_library_** level from **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Overview.md)**. To invoke this utility at the **_library_** level, see **[Visual Class Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

To create and assign Themes, see **[Themes](../../System%20Maintenance%20Tools/System%20Options/Themes.md)**.

## See Also

**[Panel Bulk Edit Utility](Bulk%20Edit%20Utility.md)  
[Library Bulk Edit Utility](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Bulk%20Edit.md)**
