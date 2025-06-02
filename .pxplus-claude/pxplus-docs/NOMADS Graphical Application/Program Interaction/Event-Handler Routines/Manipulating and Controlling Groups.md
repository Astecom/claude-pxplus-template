# Event-Handler Routines 

**Manipulating and Controlling Groups** |  **__**  
---|---  
  
Event handling in NOMADS often requires manipulating groups of panel controls in order to hide/show, disable/enable or lock/unlock them. The ***wingrp** utility can be used to manipulate groups of controls from within your PxPlus application.

#### **Note:**  
Similar functionality to ***wingrp** may also be handled within NOMADS using **[Dependency Definitions](../../Panel%20Designer/Options%20and%20Utilities/Dependency%20Definitions.md)**.

Controls that are grouped via NOMADS **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)** can be handled as if they were a single unit using the following CALL syntax:

> **CALL** "* **wingrp** ;_action_ ", _group_name_._grp_ _$_

**_Where:_**

_group_name_._grp_ _$_ |  Group name with a _.grp$_ extension. The _dollar sign_ is **_required_**.  
---|---  
;_action_ |  Label entry point in the ***wingrp** program indicating which action is to be applied to the **_specified_** group: |  **Hide | Show** |  Controls visibility of the group of controls  
---|---  
**Enable | Disable** |  Controls access to the (visible) group of controls  
**Lock | Unlock** |  Controls access to the group of multi-line fields  
**UnlockOrEnable | LockOrDisable** |  Controls access to a group of mixed control types by locking or disabling  
  
If no _group_name.__grp_ _$_ is passed with the **CALL** statement, the utility returns Error #36: ENTER parameters don't match those of the CALL.

To manipulate **_all_** the groups in a NOMADS panel, use the following syntax:

> **PERFORM** "* **wingrp** ;_action_ "

**_Where:_**

;_action_ |  Label entry point in the ***wingrp** program indicating which action is to be applied to **_all_** groups in the panel: |  **Hide_All | Show_All** |  Controls visibility  
---|---  
**Enable_All | Disable_All** |  Controls access
