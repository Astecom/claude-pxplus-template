# Options and Utilities   
  
**Dependency Definitions** |  **__**  
---|---  
  
Dependency definitions in NOMADS are basically the equivalent of **IF THEN** and (optionally) **ELSE** conditions. They can define selected controls to be _hidden_ , _shown_ , _locked_ , _unlocked_ , _enabled_ or _disabled_ based on preset conditions. This functionality is similar to the PxPlus ***wingrp** utility but with the following differences:

|  Dependency definitions can be applied to a single control or several controls without first creating a group, although groups may also be used.  
---|---  
|  Unlike **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**, the definitions are maintained within NOMADS (*winproc manages the implementation at run time). Dependencies are scanned after Post Display logic executes for the panel and will continue to be monitored after each logic event executes on a control. All definitions are created and maintained entirely within the utility - no code needs to be added to your panels or program.  
  
Invoke the **Dependency Definition** utility from the **[NOMADS Panel Designer](../Introduction.md)** by selecting _Utilities > Dependency Definition_ from the menu bar.

The following window is displayed:

> Each dependency definition created in the table will consist of a _conditional expression_ , as well as one or more _actions_ and/or _logic_ to be performed when the _Condition_ is true.

This window consists of the following:

_Condition_ |  Conditional expression to be tested.  
---|---  
_Actions for Controls_ |  Assigns functions to be applied to selected controls when the _Condition_ tests true. Click the dotted button to invoke the **Actions for Controls** window. This window consists of the following: |  _Condition_ |  Conditional expression (previously entered).  
---|---  
_Control Name_ |  Preset list of controls existing in the current active panel. This includes controls from embedded panels, which are identified by including their panel name. _(Embedded panels were added to the Dependency Definition in PxPlus 2018.)_  
_Type_ |  Control type.  
_Function_ |  Function to be applied to the control when the _Condition_ is **_true_**. Click the drop-down arrow for a list of selections: _Ignore, Enable, Disable, Show, Hide, Lock, Unlock_.  
_Tab Table_ |  **_(Applicable to Controls on the Main Panel Only)_** Tab behaviour override to be applied to the control when the _Condition_ is **_true_**. Click the drop-down arrow for a list of selections: _Ignore, Add, Remove_.  
_Insert Before_ |  Sets location in **Tab Order** for when the _Action_ is to be applied (if _Tab Table_ override is set to _Add_). Click the drop-down arrow for a list of existing panel controls.  
_OK_ |  Saves any changes and closes the **Actions for Controls** window.  
_Cancel_ |  Cancels any changes and closes the **Actions for Controls** window.  
_Actions for Groups_ |  Assigns functions to be applied to selected groups when the _Condition_ tests true. Click the dotted button to invoke the **Actions for Groups** window. This window consists of the following: |  _Condition_ |  Conditional expression (previously entered _)._  
---|---  
_Group Name_ |  Preset list of groups created in the current active panel. See **[Group Assignment](../../NOMADS%20Development/Maintaining%20Library%20Objects/Group%20Assignment.md)**. This includes groups from embedded panels, which are identified by including their panel name. _(Embedded panels were added to the Dependency Definition in PxPlus 2018.)_  
_Function_ |  Function to be applied to the group when the _Condition_ is **_true_**. Click the drop-down arrow for a list of selections: _Ignore, Enable, Disable, Show, Hide, Lock, Unlock_.  
_OK_ |  Saves any changes and closes the **Actions for Groups** window.  
_Cancel_ |  Cancels any changes and closes the **Actions for Groups** window.  
_Invert_ |  Check box to apply the _opposite_ function for when the _Condition_ tests **_false_**. Same as an **ELSE** statement.  
  
**_Example:_**  
  
If a control is set to _Enabled_ and the _Condition_ tests false, the control will be _Disabled_ instead. This does **_not_** apply to _Logic_ functions.  
_Logic_ |  Logic to be executed when the _Condition_ tests **_true_**. Click the dotted button to invoke the **Logic** window for creating or editing this string. Available processes include _Ignore, Link, Perform, Call, Execute, Help, Jumpto_ and _End_. See **[Actions and Parameters](../../Program%20Interaction/Events%20Logic/Actions%20and%20Parameters.md)**.  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row.  
_Delete_ |  Removes the currently selected row (i.e. removes the definition).  
_Move Up  
Move Down_ |  Changes the order of the existing definitions.
