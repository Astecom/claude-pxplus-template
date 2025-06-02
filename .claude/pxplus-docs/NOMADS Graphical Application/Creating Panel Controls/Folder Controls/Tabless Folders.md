# Folder Controls 

**Tabless** **Folders** |  **__**  
---|---  
  
Tabless folders do not have a visible tab but only a frame surrounding the region (wizard style). The developer is responsible for setting up and programming browse buttons _(Next/Prior)_ to control the display of the various folder tabs. The button logic would use the variable **NEXT_FOLDER** to activate a specific sub-panel.

**_Example:_**

> Next_Folder =Fldr.panel1.ctl

## Activating Tabless Folders

To activate tabless folders for the Folder control, follow these steps to set the properties in the **[Tabs/Folder Properties](Folder%20Properties.md)** dialogue:

|  1. |  Select the _Tabless_  _Folder_ check box on the **Display** panel (same option is also on the **Tabs** panel).

#### **Note:**  
When the _Tabless_ _Folder_ check box is selected, the _Tabs_ options _(Position, Width, Offset)_ and the _Include Scroll Buttons_ check box will be locked.  
  
---|---|---  
|  2. |  Set up the panel names in the **Tabs Definition** grid on the **Tabs** panel. The remaining columns, including _Title Format_ , _Title_ text, _Suppress if not found_ option, _Fill Pattern_ and _Fill Colors,_ are not required and will be locked.  
|  3. |  On the **Display** panel, select the **Frame Style** that will appear around the folder region. The **Frame Style** can be a _Fixed_ value or an _Expression_. Click the drop down arrow for a list of possible _Fixed_ values: _None, 3D Frame**(default)** , Recessed Frame, Raised Frame_ and _Top/Bottom line_.
