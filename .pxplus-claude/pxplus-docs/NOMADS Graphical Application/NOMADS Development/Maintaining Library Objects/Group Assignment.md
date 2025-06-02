# Maintaining Library Objects   
  
**Group Assignment** |  **__**  
---|---  
  
The **Group Assignment** utility is used to define groups to which **[Panel Controls](../../Creating%20Panel%20Controls/Introduction.md)** can be assigned for the purpose of showing/hiding, disabling/enabling and locking/unlocking them collectively based on conditions specified using **[Dependency Definitions](../../Panel%20Designer/Options%20and%20Utilities/Dependency%20Definitions.md)** or the ***wingrp** utility. For information on the ***wingrp** utility, see **[Manipulating and Controlling Groups](../../Program%20Interaction/Event-Handler%20Routines/Manipulating%20and%20Controlling%20Groups.md)**.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[NOMADS Library Object Selection](../Library%20Object%20Selection/Overview.md)** |  Select _Library > Assign Groups_ from the menu bar or click the _Groups_ toolbar button.  
From the **[NOMADS Session Manager](../Getting%20Started.htm#sessionmgr)** |  Select _Options > Group Assignment_ from the menu bar.  
From the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)** |  Select _Utilities_ > _Group Assignment_ from the menu bar.

#### **Note:**  
When accessed from the **Panel Designer** , this utility allows groups to be created and modified only for the currently selected panel. See [**Group Assignment (Panel Level)**](../../Panel%20Designer/Options%20and%20Utilities/Group%20Assignment%20\(Panel%20Level\).htm).  
  
The **Group Assignment** utility is displayed. When the utility is invoked from the NOMADS Panel Designer, the _Library_ and _Panel_ fields are not shown.

> This window consists of the following:

_Library_ |  Pathname of the source library file. Default is the current selection. To specify a different library, click the drop-down arrow for a list of previous selections or click the Query button.  
---|---  
_Panel_ |  Name of an existing panel. Default is the current selection. Click the drop-down arrow for a list of panels in the selected library.  
_Group Name_ |  **_(Available when Panel is selected)_** Name of the group. Click the drop-down arrow for a list of groups defined for the selected panel, if any, or enter a new group name.  
**Controls To Be Assigned** |  Displays a list of the controls on the selected panel that can be assigned to groups. See **[Assigning Controls to a Group](Group%20Assignment.htm#assigning)**.  
**Controls Assigned To Group** |  Displays a list of the controls assigned to the specified group.  
_Add_ |  Adds a selected control in the **Controls To Be Assigned** list to the **Controls Assigned To Group** list.  
_Drop_ |  Removes a selected control from the **Controls Assigned To Group** list and returns it to the **Controls To Be Assigned** list.  
_OK_ |  Saves the changes to the specified group and closes the **Group Assignment** utility.  
_Cancel_ |  Closes the **Group Assignment** utility without saving changes.  
_Apply_ |  Saves the changes to the specified group and keeps the **Group Assignment** utility open.  
  
##  Assigning Controls to a Group

The steps for assigning controls to a group are:

**Step** |  **Description**  
---|---  
1. |  Select the _Library_ and _Panel_. (These fields are not shown when invoking the utility from the NOMADS Panel Designer.)  
2. |  Specify the _Group Name_ to which controls will be assigned by selecting from the drop-down list or entering a new group name.  
3. |  Select the control(s) in the **Controls To Be Assigned** list to assign to this group. To select multiple controls, use either **Shift-Click** (_consecutive_ selections) or **Ctrl-Click** (_random_ selections). Then, add the selected controls to the **Controls Assigned To Group** list by clicking the _Add_ button or using the drag and drop method.  
4. |  **_(Optional)_** To remove a control from the **Controls Assigned To Group** list and return it to the **Controls To Be Assigned** list, select the control and click the _Drop_ button or use the drag and drop method.  
5. |  When you have made your selections, click the _Apply_ or _OK_ buttons. When working in the NOMADS Panel Designer, save the panel to retain these changes.  
  
## See Also

[**Group Assignment (Panel Level)**](../../Panel%20Designer/Options%20and%20Utilities/Group%20Assignment%20\(Panel%20Level\).htm)  
**[Suppress Groups](../../Panel%20Designer/Options%20and%20Utilities/Suppress%20Groups.md)**  
**[Dependency Definitions](../../Panel%20Designer/Options%20and%20Utilities/Dependency%20Definitions.md)**  
**[Manipulating and Controlling Groups](../../Program%20Interaction/Event-Handler%20Routines/Manipulating%20and%20Controlling%20Groups.md)**
