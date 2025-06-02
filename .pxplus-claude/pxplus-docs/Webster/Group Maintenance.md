# Webster+ Setup and Configuration

**Group Maintenance**|   
---|---  
  
The **Group Maintenance** utility allows you to create and maintain the security hierarchy used in Webster+ via user groups. Within the security system, every user belongs to a group. Each group in turn has its own permissions and may inherit the permissions of sub-groups.

**_Example:_**

> A system has two Groups: Managers and Staff. Typically, managers would be allowed all of the capabilities of a staff member: thus, you would have the "Managers" group include/inherit the "Staff" group.

To run the **Group Maintenance** utility, select **Groups** from the top menu of the Webster+ system setup. The following window is displayed:

> The initial window will display the _Admin_ group, its description, and a list of all the other groups in the system. Enter the name in the _Group Name_ field or click on the hyperlinked _Group_ name in the list of sub-groups

This window consists of the following:

_Group Name_ |  Name of the group.

#### **Note:**  
When entering a new _Group Name_ , valid characters are: letters (A-Z, a-z), numbers (0-9), **-** (_dash_), **_** (_underscore_) or a space.  
  
---|---  
_Description_ |  Description for the group.  
_Group template_ |  **_(Optional)_** If provided, this will override the system default **[Template](General%20Configuration.htm#dflttemplate)** settings for any user in this group. _(The Group template option was added in PxPlus 2023 Update 1.)_  
_Start Page_ |  **_(Optional)_** If provided, this will override the system default **[Starting Page](General%20Configuration.htm#dfltstartpg)** for any user in this group. _(The Start Page option was added in PxPlus 2023 Update 1.)_  
_Sub-Groups_ |  Displays a list of all the groups in the system.  
_Select_ |  Click the check box by any sub-group you want inherited by this group.  
_Save_ |  Click this button to record the entries for the group.  
_Delete_ |  Click this button to delete the group.  
  
**_Example:_**

**_To add a new group_** , enter the new name in the _Group Name_ field (in this example, "Testing") and press the Tab key. This will advance focus to the _Description_ field and update the list of sub-groups to select from. Now you can _Select_ the sub-groups you want to inherit.
