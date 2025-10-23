# Folder Controls 

**Auto Detection of Folder Tabs** |  **__**  
---|---  
  
Specific folder tabs can be set to be suppressed at run time. This allows folder controls to be created with extra sub-panels that only appear when the sub-panel exists in the installed library file; e.g. a folder tab marked as _Extensions_ or _Custom Fields_.

The _Suppress if not found_ property prevents a tab from being drawn if the specified panel is not found in the library. If this check box is not selected and the associated panel is not found, then the tab will be drawn along with a blank folder region. The purpose for this feature is to allow folder controls to be created with optional sub-panels that can be omitted where they do not apply; e.g. panels with user-specific fields, customized panels, etc.

With _Suppress if not found_ selected, if one or less sub-panels exist, the folder will be drawn as a **[Tabless Folder](Tabless%20Folders.md)** (a frame around the folder area and no tab).

## Defining Auto Detection

The two steps for defining auto detection of folder tabs are:

|  1. |  Select the _Suppress if not found_ check box in the **[Tabs Definition](Folder%20Properties.htm#tabsdef)** grid of the **Tabs/Folder Properties** dialogue for the Folder control. |   
---|---|---|---  
|  2. |  Set the **Frame Style** in the **Tabs/Folder Properties** dialogue (on **[Display](Folder%20Properties.htm#display)** panel). The **Frame Style** can be a _Fixed_ value or an _Expression_. Click the drop down arrow for a list of possible _Fixed_ values: _None_ , _3D Frame_ ** _(default)_** , _Recessed Frame_ , _Raised Frame_ and _Top/Bottom line_. If using an _Expression_ , the expression can contain one of five possible values: |  **** |  **0** |  No Frame Required  
---|---|---  
**** |  **2** |  3D Frame  
**** |  **3** |  Recessed Frame  
**** |  **4** |  Raised Frame  
**** |  **5** |  Top/Bottom Line  
  
**_Example:_**

If the expression is %frametype$, setting %frametype$="3" results in a recessed frame being drawn around the folder region.

#### **Note:**  
_Frame Style_ is only used if (at run time) only one sub-panel exists.
