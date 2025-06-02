# OOP Interface   
  
**Tab Object** |  **__**  
---|---  
  
The purpose of the Tab object is to define each tab within a **Folder**. The **[Tab Properties](Tab.htm#tab_props)** and **[Tab Methods](Tab.htm#tab_methods)** are listed below.

##  Tab Properties

Below is a list of Tab properties.

**Tab Properties** |  **Description**  
---|---  
**Active** |  **_(Internal Use Only)_** Active/enabled tab. If non-zero, the tab is active.  
**Bitmap$** |  Bitmap to display to the left of the tab if applicable.  
**BackgroundCnt** |  **_(Read Only)_** Background controls counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**DefId** |  **_(Read Only)_** Default button ID for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)** _._  
**Defk$** |  **_(Read Only)_** Default button key for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)** _._  
**DependsCnt** |  **_(Read Only)_** Dependency controls counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**DragonCnt** |  **_(Read Only)_** Drag and drop controls counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**DynapicCnt** |  **_(Read Only)_** Dynamic pictures counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**ExtCnt** |  **_(Read Only)_** External (VBX) controls counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**Grps$** |  **_(Read Only)_** Comma-separated list of group names for the current tab.  
**Id** |  **_(Read Only)_** Sequential ID number of the tab.  
**NextId** |  **_(Read Only)_** Contains the contents of the NEXT_ID variable. This property is used with the **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)** option only. NOMADS will load this property after the Post-Display logic for the tab executes and if the _Execute Post-Disp One Time_ option is turned **_On_** in the Folder definition panel.  
**ObjVarlst$** |  **_(Read Only)_** Comma-separated list of control names for the current tab.  
**OcxCnt** |  **_(Read Only)_** OCX controls counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**OnExit$** |  **_(Read Only)_** Logic that will execute on exit of the active tab.  
**OneTimePostLoad$** |  **_(Read Only)_** Post-Load logic indicator used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
**0** \- Always execute Post-Load logic **_(Default)_**  
**1** \- Execute Post-Load logic one time only  
**OneTimePreLoad$** |  **_(Read Only)_** Pre-Load logic indicator used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
**0** \- Always execute Pre-Load logic **_(Default)_**  
**1** \- Execute Pre-Load logic one time only  
**PanelName$** |  Panel name for the current tab.  
**PersistenceCnt** |  **_(Read Only)_** Object persistence counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**PostLoad$** |  **_(Read Only)_** Logic that executes after all controls on the active tab are drawn.  
**PreLoad$** |  **_(Read Only)_** Logic that executes before the active tab is drawn.  
**Renamed** |  **_(Read Only)_** Flag indicating whether the controls on the tab have yet been renamed (0 or 1). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**Resize** |  **_(Internal Use Only - Not Used in iNomads)_** Resize indicator for current tab (0 or 1).  
**ScrollCol** |  **_(Read Only)_** Contains the starting scroll column.  
**Scrolled** |  **_(Read Only)_** Scrollable tab indicator (0 or 1).  
**ScrollLn** |  **_(Read Only)_** Contains the starting scroll line.  
**SmartCnt** |  **_(Read Only)_** Smart controls counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**TabTable$** |  **_(Read Only)_** Contains the tab table definition for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**Tag$** |  User defined information for the tab.  
**UsrCnt** |  **_(Read Only)_** User controls counter for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
##  Tab Methods

Below is a list of Tab methods.

**Tab Methods** |  **Description**  
---|---  
**GetAltColour$**( )  
**GetAltColor$**( ) |  **_(Optional)_** Returns the secondary fill colour for the tab. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetAltkey$**( ) |  Returns the Alt key for the tab.  
**GetAutoCloseFiles**( ) |  Returns Auto Close Files option (0 or 1). If 1, then all opened files will be closed on exit of the tab.  
**GetBackColour$**( )  
**GetBackColor$**( ) |  Returns background colour for the tab. This colour will fill the text background (not the whole region) as long as an _S_ is included in the font attributes. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetBackground$**(_idx_ ,_Wdwidx_) |  **_(Used Internally by NOMADS)_** Returns the specified background ID and background logic defined for the tab (each value is separated by a $02$).  
  
_idx_ \- Table index number   
  
_Wdwidx_  _-_ Window index (0 - 4)  
**GetButtonSts**( ) |  Returns the button status for the tab. Returns 1 if enabled, 0 if disabled.  
**GetClassHelpQry$**(_idx_ ,_Wdwidx_) |  **_(Used Internally by NOMADS)_** Returns the specified class names, help IDs and query names defined for the tab (each value is separated by a $02$).  
  
_idx_ \- Table index number   
_  
Wdwidx_  _-_ Window index (0 - 4)  
**GetColourNum**( )  
**GetColorNum**( ) |  Returns the colour number (0 - 15). Used for panels created in an older version of NOMADS.  
**GetCtlId**( ) |  Returns the CTL value for the tab.  
**GetDeleteImages$( )** |  Returns a string containing the images to be deleted for the current tab.  
**GetDemandPersist$**(_idx_ ,_Wdwidx_) |  Returns the specified load on demand logic and the object persistence flags defined for the tab (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
 _  
Wdwidx_  _-_ Window index (0 - 4)  
**GetDepends$**(_idx_ ,_Wdwidx_) |  Returns the specified dependency definitions (conditions, actions and condition values) defined for the tab (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetDragons$**(_idx_ ,_Wdwidx_) |  Returns the specified drag and drop definition for the tab - drop on control name, drag from control name, drop on CTL value and drop logic (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetFillPattern**( ) |  Returns the fill pattern to be used for the tab. Values returned:   
  
**1** \- Solid fill  
**2** \- Top to bottom  
**3** \- Left to right  
**4** \- Crossed line  
**5** \- Top-left to bottom-right  
**6** \- Bottom-left to top-right  
**7** \- Diagonal crossed lines  
**GetFocus**( ) |  Returns the index number of the tab with focus.  
**GetGridRefresh$**(_idx_ ,_Wdwidx_) |  Returns the specified grid information for the current tab - row refresh flag and no cell refresh flag (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetGroups$**(_idx_ ,_Wdwidx_) |  Returns the specified group definition for the current tab - name and value (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetHideImages$**( ) |  Returns a string containing the hidden images for the current tab.  
**GetInitDraw**( ) |  Returns the initial draw indicator (0 or 1).  
**GetLogic$**(_idx_ ,_Wdwidx_) |  Returns the specified on select logic, validator logic, formatter logic and on focus logic defined for the tab (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetNameTypeSts$**(_idx_ ,_Wdwidx_) |  Returns the specified control name, object type and control attributes defined for the tab (each value is separated by $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
_  
idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetObjCount**( ) |  Returns the number of controls on the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**GetOcxDefn$**(_idx_ ,_Wdwidx_) |  Returns the specified OCX definition for the current tab - event name, event function and on event CTL value (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetOcxId**(_idx_ ,_Wdwidx_) |  Returns the specified OCX IDs defined for the tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetOrigText$**( ) |  Returns the original text for the tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
**GetPopup$**(_idx_ ,_Wdwidx_) |  Returns the specified popup name and popup logic defined for the tab (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetShowImages$**( ) |  Returns a string of images to be shown for the current tab.  
**GetSmartCtl$**(_idx_ ,_Wdwidx_) |  Returns the specified smart trigger variable/control information for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
 _idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetSmartDefn$**(_idx_ ,_Wdwidx_) |  Returns the specified smart list definition for the current tab - smart query name, CTL, IOL definition, test condition, MSG, pre-load logic, post load logic, selection logic, format definition, record definition, button IOList and button record definition (each value is separated by a $03$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetSuppress$**( ) |  Returns the suppress tab option (0 or 1). If 1, then at run time, the tab will not be drawn if the sub-panel does not exist or the sub-panel does not have security access.  
**GetTabColour$**( )  
**GetTabColor$**( ) |  Returns the first fill colour for the tab. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetTextColour$**( )  
**GetTextColor$**( ) |  Returns the colour of the text in the tab. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetText$**( ) |  Returns the text for the tab. Can contain a fixed value or expression ("=" precedes the expression text).  
**GetUsrCtls$**(_idx_ ,_Wdwidx_) |  Returns the specified user CTL definition for the current tab - user CTL value and logic (each value is separated by a $02$). Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetValid$**(_idx_ ,_Wdwidx_) |  Returns the specified validation rules defined for the tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
**GetTip$**( ) |  Returns the tip that is displayed below the tab.  
**LoadBackGround**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified background definition for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the background ID and background logic (each value is separated by a $02$)  
**LoadClassHelpQry**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified class, help, and query definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the class name, help ID and query name (each value is separated by a $02$)  
**LoadDemandPersist**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified load on demand logic and object persistence flags for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the load on demand logic and object persistence flag (each value is separated by a $02$)  
**LoadDepends**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified dependency definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the dependency condition, action and condition value (each value is separated by a $02$)  
**LoadDragons**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified drag and drop definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the drop on control name, drag from control name, drop on CTL value and drop logic (each value is separated by a $02$)  
**LoadGridRefresh**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified grid refresh definition for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.   
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the grid row refresh flag and no cell refresh flag (each value is separated by a $02$)  
**LoadGroups**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified group definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the name and value (each value is separated by a $02$)  
**LoadLogic**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified logic definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the on select logic, validator logic, formatter logic and on focus logic (each value is separated by a $02$)  
**LoadNameTypeSts**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified control name, type and control attributes for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
_  
idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the control name, object type and control attributes (each value is separated by a $02$)  
**LoadOcxDefn**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified OCX definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the OCX event name, event function and on event CTL value (each value is separated by a $02$)  
**LoadOcxId**(_idx_ ,_Wdwidx_ ,_Val_) |  Loads the specified OCX IDs for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val -_ Contains the OCX identifier  
**LoadPopup**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified popup definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the popup name and popup logic (each value is separated by a $02$)  
**LoadSmartCtl**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified smart trigger variable/controls for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the trigger variable/control  
**LoadSmartDefn**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified smart lists definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the smart query name, CTL, IOL definition, test condition, MSG, pre-load logic, post-load logic, selection logic, format definition, record definition, button IOList and button record definition (each value is separated by a $03$)  
**LoadUsrCtls**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified User CTL definitions for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the user CTL value and logic (each value is separated by a $02$)  
**LoadValid**(_idx_ ,_Wdwidx_ ,_Val_ _$_) |  Loads the specified validation rules for the current tab. Used with **[Preserve Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Preserve%20Controls.md)**.  
  
_idx_ \- Table index number  
  
 _Wdwidx_  _-_ Window index (0 - 4)  
  
_Val$ -_ Contains the validation rules  
**SetAltColour**(_Aclr_ _$_)  
**SetAltColor**(_Aclr_ _$_) |  Sets the secondary fill colour for the tab. Returns 1 if successful, 0 if unsuccessful.   
  
 _Aclr_ _$ -_ String containing one of four possible colour selections. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetAltkey**(_A$_) |  Sets the Alt key for the tab. Returns 1 if successful, 0 if unsuccessful.  
**SetAutoCloseFiles**(_A_) |  **_(Internal Use Only)_** Sets the auto close files option. Returns 1 if successful, 0 if not.   
  
 _A_ \- Can contain 0 or 1. If 1 is assigned, all opened files will be closed on exit of the tab.  
**SetBackColour**(_BC$_)  
**SetBackColor**(_BC$_) |  **_(Internal Use Only)_** Sets the background colour for the tab. Returns 1 if successful, 0 if unsuccessful.  
  
_BC$ -_ String containing one of four possible colour selections. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetColourNum**(_C_)  
**SetColorNum**(_C_) |  **_(Internal Use Only)_** Sets the colour number (0 - 15) for the tab (used for panels created in older NOMADS versions). Returns 1 if successful, 0 if unsuccessful.  
**SetCtlId**(_C_) |  **_(Internal Use Only)_** Sets the CTL value for the tab. Returns 1 if successful, 0 if unsuccessful.  
**SetDeleteImages**(_DI$_) |  **_(Internal Use Only)_** Sets the deleted images for the current tab. Returns 1 if successful, 0 if unsuccessful.  
**SetFillPattern**(_F_) |  Sets the fill pattern for the tab. Returns 1 if successful, 0 if unsuccessful.  
  
_F_ can contain:  
  
**1** \- Solid fill  
**2** \- Top to bottom  
**3** \- Left to right  
**4** \- Crossed line  
**5** \- Top-left to bottom-right  
**6** \- Bottom-left to top-right  
**7** \- Diagonal crossed lines  
**SetFocus**(_F_) |  **_(Internal Use Only)_** Sets the index number of the tab with focus. Returns 1 if successful, 0 if unsuccessful.  
**SetHideImages**(_HI$_) |  **_(Internal Use Only)_** Sets the hidden images for the current tab. Returns 1 if successful.  
**SetInitDraw**(_ID_) |  **_(Internal Use Only)_** Sets the initial draw flag for the current tab. Returns 1 if successful.  
**SetObjCount**(_OC_) |  **_(Internal Use Only)_** Sets the control count for the current tab. Returns 1 if successful, 0 if unsuccessful.  
**SetOrigText**(_T$_) |  **_(Internal Use Only)_** Sets the original text for the tab.  
**SetShowImages**(_SI$_) |  **_(Internal Use Only)_** Sets the hidden images for the current tab. Returns 1 if successful, 0 if unsuccessful.  
**SetTabColour**(_Tclr_ _$_)  
**SetTabColor**(_Tclr_ _$_) |  Sets the first fill colour for the tab. Returns 1 if successful, 0 if unsuccessful.  
  
_Tclr_ _$ -_ String containing one of four possible colour selections. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetTextColour**(_TC$_)  
**SetTextColor**(_TC$_) |  Sets the text colour for the tab. Returns 1 if successful, 0 if unsuccessful.  
  
_TC$ -_ String containing one of four possible colour selections. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetText**(_T$_) |  Sets the text for the tab. Returns 1 if successful, 0 if unsuccessful.  
  
_T$ -_ Can contain a fixed value or an expression. An **=**  _(equals sign)_ must precede the expression.  
**SetTip**(_T$_) |  Sets the tip message that will display below the tab.  
  
_T$_ \- Can contain a fixed value or an expression. An **=**  _(equals sign)_ must precede the expression.  
**SetSuppress**(_S_) |  Sets the suppress tab option.  
  
_S_ \- Can contain 0 or 1. If 1 is assigned, then at run time, the tab will not be drawn if the sub-panel does not exist or the sub-panel does not have security access.  
  
##  Valid Colour Assignments

The four options for colour assignment are:

|  1. |  Predefined system colour: Default, Dark Gray, Black, Dark Red, Light Red, Dark Green, Light Green, Dark Yellow, Light Yellow, Dark Blue, Light Blue, Dark Magenta, Light Magenta, Dark Cyan, Light Cyan, Light Gray, White.  
---|---|---  
|  2. |  RGB setting; i.e. RGB: _n n n**where** n =_ 0 - 255.  
|  3. |  User defined colour; i.e. Colour _n_ or Color _n_ ** _where_** _n =_ 16 - 255.  
|  4. |  An expression containing one of the above colour assignments. An **=**  _(equals sign)_ must precede the expression.
