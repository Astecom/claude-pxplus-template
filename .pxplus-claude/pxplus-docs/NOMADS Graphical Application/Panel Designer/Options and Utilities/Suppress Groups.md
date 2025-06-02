# Options and Utilities  
  
**Suppress Groups**|   
---|---  
  
A _group_ is a name defined in NOMADS to which one or multiple panel controls can be assigned for showing/hiding, disabling/enabling and locking/unlocking them collectively based on specified conditions. See **[Group Assignment (Panel Level)](Group%20Assignment%20\(Panel%20Level\).htm)**.

The **Suppress Groups** utility is used for choosing which group(s) of controls to display or temporarily suppress from displaying on the current panel in the NOMADS Panel Designer. This is particularly useful when working on a panel with overlapping controls, as suppressing a group makes it easier to access and edit other controls.

Groups can be displayed or suppressed as needed during the design session. Each time a new design session is started, the selections in the **Suppress Groups** utility are automatically reset to display all groups.

> _(The Suppress Groups utility was added in PxPlus 2021.)_

The **Suppress Groups** utility is invoked from all three versions of the NOMADS Panel Designer (see **[NOMADS+ Toolbar](../../../NOMADS+%20Toolbar/Introduction.md)**, **[Folder Style](../Folder%20Style/Using%20the%20Folder%20Style.md)** or **[Property Sheets](../Properties%20Table/Overview.md)**) by using any of the methods below.

If no groups have been previously defined for the current panel, a message will display.

**Panel Designer** |  **Method**  
---|---  
NOMADS+ Toolbar |  Select _Utilities_ > _Suppress Groups_ from the menu bar. **_OR_** Click the text portion of the _Suppress Groups_ button located beside the _Help_ button (top right corner).  
Folder Style  
Property Sheets |  Select _Utilities_ > _Suppress Groups_ from the menu bar. **_OR_** Click the text portion of the _Suppress Grps_ button located in the **Controls** toolbox.  
  
The **Suppress Groups** window consists of the following:

_(Groups Grid)_ |  Lists the names of all the existing groups defined for the current panel. To define a group, see **[Group Assignment (Panel Level)](Group%20Assignment%20\(Panel%20Level\).htm)**. |  _Group_ |  Name of the group.  
---|---  
_Display Group_ |  Use this check box to indicate whether the group will be displayed on the panel. (Defaults to **_On_**.) If unchecked, the controls in the selected group will be suppressed temporarily. A suppressed group can be redisplayed at any time during the design session. Each time a new design session is started, the _Display Group_ selections are automatically reset to **_On_** to display all groups.  
_Display All Groups_ |  Button that is used to set all the _Display Group_ check boxes to **_On_** to display all groups on the current panel.

#### **Note:**  
A _Display All Groups_ option is available by clicking the drop-down arrow on the _Suppress Groups_ button (see **[Method](Suppress%20Groups.htm#method)**) in the NOMADS+ Toolbar or the **Controls** toolbox if using Folder Style or Property Sheets.  
  
_Suppress All Groups_ |  Button that is used to set all the _Display Group_ check boxes to **_Off_** to suppress all groups on the current panel.  
_OK_ |  Saves any changes and closes the **Suppress Groups** utility, returning to the current panel.  
_Cancel_ |  Closes the **Suppress Groups** utility and returns to the current panel without saving changes.  
  
#### **Note:**  
The selections for displaying and suppressing groups can only be changed by using the **Suppress Groups** utility. The _Undo_ button will not undo these selections.

## Applying Suppressed Groups

After selecting which group(s) to suppress, the design panel redisplays without showing the controls in the suppressed group(s).

#### **Note:**  
If a panel control is assigned to more than one group **_and_** at least one of the groups is not suppressed, the control will still display.

**_NOMADS+ Toolbar_**

Panel controls that are associated with a suppressed group are listed in the Controls grid with a red *****  _(asterisk)_ in the row header column. The entire row is also disabled, which indicates that the control is not accessible. The words "All Groups Not Displayed" (white characters on a dark red background) displays in the bottom right corner.

> **_Folder Style and Property Sheets_**

Panel controls that are associated with a suppressed group are listed in the Controls drop box in the top toolbar. When selected from the drop box, a message displays to indicate that the control is currently not displayed. The words "All Groups Not Displayed" (white characters on a dark red background) displays in the bottom right corner.

> 
