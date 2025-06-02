# Options and Utilities   
  
**Group Assignment (Panel Level)** |  **__**  
---|---  
  
When working in the **[NOMADS Panel Designer](../Introduction.md)**, invoke the **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)** utility by selecting _Utilities_ > _Group Assignment_ from the menu bar. At the panel level, this utility allows groups to be created and modified only for the currently selected panel.

Groups can also be defined for one control at a time. See **[Group Definitions](Group%20Assignment%20\(Panel%20Level\).htm#group_def)**.

> This window consists of the following:

_Group Name_ |  Name of the group. Click the drop-down arrow for a list of groups defined for the current panel, if any, or enter a new group name.  
---|---  
**Controls To Be Assigned** |  Displays a list of the controls on the current panel that can be assigned to groups. See **[Assigning Controls to a Group](Group%20Assignment%20\(Panel%20Level\).htm#assigning)**.  
**Controls Assigned To Group** |  Displays a list of the controls assigned to the specified group.  
_Assign_ |  Adds a selected control in the **Controls To Be Assigned** list to the **Controls Assigned To Group** list.  
_Drop_ |  Removes a selected control from the **Controls Assigned To Group** list and returns it to the **Controls To Be Assigned** list.  
_OK_ |  Saves the changes to the specified group and closes the **Group Assignment** utility.  
_Cancel_ |  Closes the **Group Assignment** utility without saving changes.  
_Apply_ |  Saves the changes to the specified group and keeps the **Group Assignment** utility open.  
  
##  Assigning Controls to a Group

Below are the steps for assigning controls to a group.

**Step** |  **Description**  
---|---  
1. |  Specify the _Group Name_ to which controls will be assigned by selecting from the drop-down list or entering a new group name.  
2. |  Select the control(s) in the **Controls To Be Assigned** list to assign to this group. To select multiple controls, use either **Shift-Click** (_consecutive_ selections) or **Ctrl-Click** (_random_ selections). Then, add the selected controls to the **Controls Assigned To Group** list by clicking the _Assign_ button or using the drag and drop method.  
4. |  **_(Optional)_** To remove a control from the **Controls Assigned To Group** list and return it to the **Controls To Be Assigned** list, select the control and click the _Drop_ button or use the drag and drop method.  
5. |  When you have made your selections, click the _Apply_ or _OK_ buttons. Then, save the panel to retain these changes.  
  
##  Group Definitions

Panel controls can be assigned to a new or existing group one control at a time. When defining the control's properties, select the _Groups_ button to invoke the **Group Definitions** utility.

#### **Note:**  
If assigning multiple controls to a group, the **Group Assignment** utility is a more efficient method.

> This window consists of the following:

_New_ |  Used for entering the name of a new group.  
---|---  
**Known** |  Lists the name(s) of the group(s) defined for the current panel.  
**Selected** |  Lists the name(s) of the group(s) to which the control is assigned.  
_New_ |  Button used to add a _New_ group name to the **Selected** list, indicating that the control is to be assigned to the new group.  
_Add_ |  Button used to add a group from the **Known** list to the **Selected** list, indicating that the control is to be assigned to the group.  
_Drop_ |  Button used to drop a group from the **Selected** list, indicating that the control will not be assigned to that group. The dropped group appears in the **Known** list; however, if no other panel controls are assigned to it, the group will be deleted after changes are saved.  
_OK_ |  Saves any changes and closes the **Group Definitions** utility.  
_Cancel_ |  Closes the **Group Definitions** utility without saving changes.  
  
## See Also

**[Suppress Groups](Suppress%20Groups.md)**  
**[Dependency Definitions](Dependency%20Definitions.md)**  
**[Manipulating and Controlling Groups](../../Program%20Interaction/Event-Handler%20Routines/Manipulating%20and%20Controlling%20Groups.md)**
