# Step 6: File Maintenance Field Layout

**Dependency Definition**|   
---|---  
  
Click the button beside the _Maintain Folder Tabs_ button to launch the **Dependency Definition** window.

_(The Dependency Definition button was added in PxPlus 2023 Update 1.)_

Dependency definitions are the equivalent of **IF THEN** and (optionally) **ELSE** conditions. The **Dependency Definition** window is used to define selected controls to be _hidden_ , _shown_ , _locked_ , _unlocked_ , _enabled_ or _disabled_ based on preset conditions. Dependency definitions are applied to the current file maintenance main panel or folder panel (if **[Folder Tabs](Folder.htm#foldertabs)** have been defined) or Webster+ HTML page to be generated.

Each dependency definition created in the table will consist of a _conditional expression_ , as well as one or more _actions_ and/or _logic_ to be performed when the _Condition_ is true.

> This window consists of the following:

_Condition_ |  Conditional expression to be tested.  
---|---  
_Actions for Controls_ |  **_(Applicable for NOMADS Panels and Webster+ HTML Pages)_** Assigns functions to be applied to selected controls when the _Condition_ tests true. Click the dotted button to invoke the **Actions for Controls** window. This window consists of the following: |  _Condition_ |  Conditional expression (previously entered).  
---|---  
_Control Name_ |  Preset list of controls existing in the current active panel. This includes controls from embedded panels, which are identified by including their panel name.  
_Type_ |  Control type.  
_Function_ |  Function to be applied to the control when the _Condition_ is **_true_**. Click the drop-down arrow for a list of selections: _Ignore, Enable, Disable, Show, Hide, Lock, Unlock_.  
_Tab Table_ |  **_(Applicable to Controls on the NOMADS Main Panel Only)_** Tab behavior override to be applied to the control when the _Condition_ is **_true_**. Click the drop-down arrow for a list of selections: _Ignore, Add, Remove_.  
_Insert Before_ |  **_(Applicable for NOMADS Panels Only)_** Sets location in **Tab Order** for when the _Action_ is to be applied (if _Tab Table_ override is set to _Add_). Click the drop-down arrow for a list of existing panel controls.  
_OK_ |  Saves any changes and closes the **Actions for Controls** window.  
_Cancel_ |  Cancels any changes and closes the **Actions for Controls** window.  
_Actions for Groups  
(NOMADS Only)_ |  **_(Applicable for NOMADS Panels Only)_** Assigns functions to be applied to selected groups when the _Condition_ tests true. Click the dotted button to invoke the **Actions for Groups** window. This window consists of the following: |  _Condition_ |  Conditional expression (previously entered _)._  
---|---  
_Group Name_ |  Preset list of groups created in the current active panel. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**. This includes groups from embedded panels, which are identified by including their panel name.  
_Function_ |  Function to be applied to the group when the _Condition_ is **_true_**. Click the drop-down arrow for a list of selections: _Ignore, Enable, Disable, Show, Hide, Lock, Unlock_.  
_OK_ |  Saves any changes and closes the **Actions for Groups** window.  
_Cancel_ |  Cancels any changes and closes the **Actions for Groups** window.  
_Actions for Classes  
(Webster+ Only)_ |  **_(Applicable for Webster+ HTML Pages Only)_** Assigns functions to be applied to selected groups when the _Condition_ tests true. Click the dotted button to invoke the **Actions for Groups** window. This window consists of the following: |  _Condition_ |  Conditional expression (previously entered _)._  
---|---  
_Class Name_ |  Name of Webster+ class. See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
_Function_ |  Function to be applied to the HTML class when the _Condition_ is **_true_**. Click the drop-down arrow for a list of selections: _Ignore_ , _Enable_ , _Disable_ , _Show_ , _Hide_ , _Lock_ , _Unlock_.  
_OK_ |  Saves any changes and closes the **Actions for HTML Classes** window.  
_Cancel_ |  Cancels any changes and closes the **Actions for HTML Classes** window.  
_Invert_ |  **_(Applicable for NOMADS Panels and Webster+ HTML Pages)_** Check box to apply the _opposite_ function for when the _Condition_ tests **_false_**. Same as an **ELSE** statement. **_Example:_** If a control is set to _Enabled_ and the _Condition_ tests false, the control will be _Disabled_ instead. This does **_not_** apply to _Logic_ functions.  
_Logic  
(NOMADS Only)_ |  **_(Applicable for NOMADS Panels Only)_** Logic to be executed when the _Condition_ tests **_true_**. Click the dotted button to invoke the **Logic** window for creating or editing this string. Available processes include _Ignore, Link, Perform, Call, Execute, Help, Jumpto_ and _End_. See **[Actions and Parameters](../../Program%20Interaction/Events%20Logic/Actions%20and%20Parameters.md)**.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row.  
_Delete_ |  Removes the currently selected row (i.e. removes the definition).  
_Move Up  
Move Down_ |  Changes the order of the existing definitions.  
_OK_ |  Saves any changes and closes the **Dependency Definition** window.  
_Cancel_ |  Cancels any changes and closes the **Dependency Definition** window.
