# OOP Interface 

**Folder Objects** |  **__**  
---|---  
  
The purpose of the **Folder** object **(*obj/folder.pvc)** is to define information pertaining to a folder. A **Tab** object **(*obj/tab.pvc)** is created for each tab within a Folder. The **[Folder Properties](Folder%20Objects.htm#fldr_props)** and **[Folder Methods](Folder%20Objects.htm#fldr_methods)** are listed below.

##  Folder Properties

Below is a list of Folder properties.

**Folder Properties** |  **Description**  
---|---  
**BackColours$**( )  
**BackColors$**( ) |  **_(Read Only)_** Background colours for each tab (each colour separated by /). See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**CtlIncrement** |  **_(Internal Use Only)_** Value assigned to each control drawn. **_Default_** is 0 for main window. Incremented by 200 for each concurrent window.  
**CurrentTab** |  Reference to the currently active tab object.  
**DefaultProg$** |  Default program for tab.  
**Designer** |  **_(Internal Use Only)_** Designer mode.  
  
**0** \- No  
**1** \- Yes  
  
When editing a folder definition in NOMADS, this property will be set to 1. At run time, this property is set to 0 by *winproc.  
**DispTabCount** |  **_(Read Only)_** Contains the number of tabs that will display on the panel. This value is assigned to the **TabCount** property.  
**FirstTab$** |  **_(Read Only)_** Contains the panel _name_ \+ _title_ for the first tab (used with the scroll buttons option).  
**LastTab$** |  **_(Read Only)_** Contains the panel _name_ \+ _title_ of the last tab (used with the scroll buttons option).  
**Nomads** |  Set to 0 if the folder object will be used outside NOMADS; otherwise, the default is 1.  
**OneTimePostLogic$** |  **_(Internal Use Only)_** Post-Load logic indicators for tabs.  
  
**0** \- Always execute Post-Load logic **_(Default)_**  
**1** \- Execute Post-Load logic one time only  
**OneTimePreLogic$** |  **_(Internal Use Only)_** Pre-Load logic indicators for tabs.  
  
**0** \- Always execute Pre-Load logic **_(Default)_**  
**1** \- Execute Pre-Load logic one time only  
**OrigColumn** |  **_(Read Only)_** Contains the original starting column for the folder region.  
**OrigColumns** |  **_(Read Only)_** Contains the original overall width of the folder in terms of columns.  
**OrigLine** |  **_(Read Only)_** Contains the original starting line number for the folder region.  
**OrigLines** |  **_(Read Only)_** Contains the original overall height of the folder in terms of lines.  
**PreserveControls** |  **_(Internal Use Only)_** Property indicating whether controls will be redrawn or not when moving between tabs.  
  
**0** \- Destroy and redraw controls **_(Default)_**  
**1** \- Rename and hide/show controls  
**ScrollCol** |  **_(Read Only)_** Contains starting column for scroll region.  
**ScrollHeight** |  **_(Read Only)_** Contains the height of scroll region.  
**ScrollLn** |  **_(Read Only)_** Contains starting line of scroll region.  
**ScrollWidth** |  **_(Read Only)_** Contains the width of the scroll region.  
**TabCol** |  **_(Read Only)_** Contains the column position of the flat/transparent button assigned to the tab.  
**TabCount** |  **_(Read Only)_** Contains number of tabs in the folder.  
**TabLine** |  **_(Read Only)_** Contains the line position of the flat/transparent button assigned to the tab.  
**TabTable$** |  Contains the tab table definition for the current tab.  
**TextColours$**( )**  
TextColors$**( ) |  **_(Read Only)_** Text colours for each tab (each colour is separated by a **/**  _slash_). See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**TruWidth** |  **_(Read Only)_** Contains the true computed width of the tab.  
**WindowIndex** |  **_(Read Only)_** Window index (values can be 0, 1, 2, 3 or 4).  
  
**_Where:  
_**  
Window index is incremented for each concurrent window drawn. **_Default_** is 0.  
  
##  Folder Methods

Below is a list of Folder methods.

**Folder Methods** |  **Description**  
---|---  
**AddTab**(_Text$_ ,_PanelName$_ ,_Suppress_ ,_FillClr1$_ ,_FillClr2$_ ,_FillPattern_) |  Add tab at run time (to the end of the current tab list).  
_  
Text$_ \- Text for the tab. Fixed value or expression (**"="**  _equals sign_ must precede expression).  
  
_PanelName_ _$_ \- Name of sub-panel.  
  
_Suppress_ \- 1 to suppress tab, 0 if not. **_(Optional)_**  
  
_FillClr1$_ \- First fill colour for the tab. **_(Optional)_**  
  
_FillClr2$_ \- Second fill colour for the tab. **_(Optional)_**  
  
_FillPattern_ \- Possible values are:  
  
**1** \- Solid fill **_(Default)_**  
**2** \- Top to bottom  
**3** \- Left to right  
**4** \- Crossed line  
**5** \- Top-left to bottom-right  
**6** \- Bottom-left to top-right  
**7** \- Diagonal crossed lines  
**ClearTabs**( ) |  **_(Internal Use Only)_** This method drops all tab objects.  
**DisableActiveTab**( ) |  Used to disable all the controls on the current active tab and the folder tab button.

#### **Note:**  
Only the controls on the current active tab will be affected since the controls on the other tabs are not drawn until that tab is active.  
  
These methods can also be used for tab-less folders. Only the controls in the folder region will be enabled or disabled as there are no tab buttons on a tab-less folder.  
  
**DisableFldr**( ) |  Used to disable all the controls on the active tab and all the folder tab buttons.

#### **Note:**  
Only the controls on the current active tab will be affected since the controls on the other tabs are not drawn until that tab is active.  
  
These methods can also be used for tab-less folders. Only the controls in the folder region will be enabled or disabled as there are no tab buttons on a tab-less folder.  
  
**DisableTab**(_idx_) |  Disable tab. (The colour setting in the **'GetDisabledColour$( )** method will be applied to the tab title.)   
  
_idx_ \- Contains the sequential number of the tab.  
**Draw**( ) |  This method causes the complete folder to be drawn. It is called to draw the initial folder once the tabs have been defined and is automatically invoked by the **Redraw(** **)** method after any change to the tab or folder information (such as a screen resize or dropping/adding a tab).  
**DrawTab**(_Tab_) |  **_(Internal Use Only)_** Method that draws a tab (invoked through the **ProcessTabs(** **)** method).   
  
_Tab_ \- Contains the object identifier.  
**DropTab**(_idx_) |  Drops a tab from the folder and invokes the **ReDraw(** **)** method.  
  
_idx_ \- Contains the sequential number of the tab.  
**EnableActiveTab**( ) |  Used to enable all the controls on the current active tab and the folder tab button.

#### **Note:**  
Only the controls on the current active tab will be affected since the controls on the other tabs are not drawn until that tab is active.  
  
These methods can also be used for tab-less folders. Only the controls in the folder region will be enabled or disabled as there are no tab buttons on a tab-less folder.  
  
**EnableFldr**( ) |  Used to enable all the controls on the active tab and all the folder tab buttons.

#### **Note:**  
Only the controls on the current active tab will be affected since the controls on the other tabs are not drawn until that tab is active.  
  
These methods can also be used for tab-less folders. Only the controls in the folder region will be enabled or disabled as there are no tab buttons on a tab-less folder.  
  
**EnableTab**(_idx_) |  Enable tab (the original tab title colour is applied).  
  
_idx_ \- Contains the sequential number of the tab.  
**FldrInit**( ) |  **_(Internal Use Only)_** Invokes folder initialization method. Parses and builds tab information, calculates tab count, tab width, tab height, folder coordinates (_col_ , _ln_ , _width_ and _height_) and so on. This is invoked via the **Draw(** **)** method.  
**GetActiveTabWidth**( ) |  Returns the tab width of the active tab. See **[SetActiveTabWidth(AW)](Folder%20Objects.htm#setactivetabwid)**. _(Added in PxPlus 2024)_  
**GetBackColour$**( )   
**GetBackColor$**( ) |  Returns default background colour for all tabs. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetColourNumbers$**( )  
**GetColorNumbers$**( ) |  Returns colour numbers 0 - 15 (used with panels created in an older NOMADS version).  
**GetColours$**( )  
**GetColors$**( ) |  Returns background/foreground colours. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetColumn**( ) |  Returns starting column of folder region.  
**GetColumns**( ) |  Returns the overall width of the folder in terms of columns.  
**GetCtlid**( ) |  Returns the Ctl ID assigned to the folder (a value within the 10001 - 10999 range).  
**GetDisabledColour$**( )  
**GetDisabledColor$**( ) |  Returns the default colour applied to a disabled tab. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetFillColours1$**( )  
**GetFillColors1$**( ) |  Returns the first fill colours assigned to each tab (each colour is separated by a **/**_slash_). See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetFillColours2$**( )  
**GetFillColors2$**( ) |  Returns the secondary fill colours assigned to each tab (each colour is separated by a **/**  _slash_). See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GetFont$**( ) |  Returns a comma-separated string denoting the default font name, its point size and attributes (such as **C** for Centered, **B** for Bold, **I** for Italics).  
**GetFrameType$**( ) |  Returns a numeric value of the frame type that is used for a tab-less folder.  
  
**0** \- None   
**2** \- Raised   
**3** \- Recessed   
**4** \- 3D **_(Default)_**  
**GetIdLst**(_Idlst_) |  Returns sequential number of the folder control on the panel. This number represents the control placement on the panel.  
**GetLine**( ) |  Returns the starting line number of the folder region.  
**GetLines**( ) |  Returns the overall height of the folder in terms of lines.  
**GetPanelIndex**( ) |  Returns index for the current panel. Only executes if the folder has scroll buttons, the panel is resized, and the original tab count is greater than the displayed tab count.  
**GetPanelNames$**( ) |  Returns a $01$ delimited string of the names of the panels for each tab.  
**GetOrigTabCount**( ) |  Returns the original number of tabs (if the scroll button option is on then this number will be greater than the numbers of tabs displayed).  
**GetOrigTabWidth**( ) |  Returns the original tab width assigned in the folder definition.  
**GetResize**( ) |  Returns either a 0 or 1 indicating whether the folder is resized.  
**GetScrolling**( ) |  Returns either a 0 or 1 indicating whether the folder is being scrolled.  
**GetShowArrows**( ) |  Returns a 0 or 1 indicating the scroll button setting.  
  
**0** \- Hide scroll buttons  
**1** \- Show scroll buttons  
**GetTab**(_idx_) |  Returns the object identifier for the specified tab index.  
  
_idx_ \- Contains the sequential number of the tab.  
**GetTabAlignment$**( ) |  Returns the tab alignment setting (placement of tabs).  
  
**T** \- Top **_(Default)_**  
**B** \- Bottom  
**L** \- Left  
**R** \- Right  
**GetTabHeight**( ) |  Returns the height of the tabs (or width if the tabs are horizontal). If 0, then no tabs are drawn (tab-less folder). System will default to 1.5 lines high, which is the current NOMADS size.  
**GetTabInfo$**( ) |  Returns a $00$-separated string containing tab information. Each tab definition consists of _panelname_ +"**=** "+ _title_ +$01$+ _suppress tab option_.  
**GetTabless**( ) |  Returns a 0 or 1 indicating whether tabs are drawn or not. **_Default_** is 0.  
**GetTextColour$**( )  
**GetTextColor$**( ) |  Returns the default text colour assigned to all tabs. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**GotoTab**(_idx_) |  This method causes the current tab to be changed. All controls in the current tab will be deleted and the new tab highlighted and folder region initialized to proper background colours.   
  
_idx_ \- Contains the sequential number of the tab.  
**InsertTab**(_idx,Text$,PanelName$,Suppress,FillClr1$,FillClr2$,FillPattern_) |  Insert tab at run time. All tabs following the inserted tab are re-sequenced.   
  
_idx_ \- Contains the sequential number of the tab.  
  
_Text$_ \- Text for the tab. Can be a fixed value or an expression. An "=" _(equals sign)_ must precede the expression.  
  
_PanelName_ _$_ \- Name of sub-panel.  
  
_Suppress_ \- Set to 1 if this tab should be suppressed or 0 if not.  
  
_FillClr1$_ \- First fill colour for the tab. **_(Optional)_**  
  
_FillClr2$_ \- Second fill colour for the tab. **_(Optional)_**  
  
_FillPattern_ \- Possible values are:  
  
**1** \- Solid fill **_(Default)_**  
**2** \- Top to bottom  
**3** \- Left to right  
**4** \- Crossed line  
**5** \- Top-left to bottom-right  
**6** \- Bottom-left to top-right  
**7** \- Diagonal crossed lines  
**NewTab**(_Tab_) |  **_(Internal Use Only)_** Add a tab to the folder. Used by folder.pvc.  
_  
Tab -_ Contains the object identifier.  
**ProcessTabs**( ) |  **_(Internal Use Only)_** Method that invokes the **DrawTab**(_tab_) method.  
**ReDraw**( ) |  Redraw folder. Resets scroll region and invokes **Draw(** **)** method. This must be executed after changing any folder or tab properties.  
  
**_Example:  
  
_** To change the font at run time:  
  
SetFont("Comic Sans MS,1,&CS")  
Redraw( )  
**RemoveTab**(_idx_) |  **_(Internal Use Only)_** Get object identifier for the current tab index and drop the corresponding tab object.  
  
_idx_ \- Contains the sequential number of the tab.  
**SetActiveTabWidth(AW)** |  Sets the width of the active tab to AW. The default is to be .9 wider than an inactive tab to make it stand out. See **[GetActiveTabWidth( )](Folder%20Objects.htm#getactivetabwid)**. _(Added in PxPlus 2024)_  
**SetBackColour**(_Bclr_ _$_)  
**SetBackColor**(_Bclr_ _$_) |  Sets default background colour for all tabs. Returns 1 if successful, 0 if unsuccessful.   
  
 _Bclr_ _$ -_ String containing one of four possible colour selections. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetColourNumbers**(_Cnums_ _$_)  
**SetColorNumbers**(_Cnums_ _$_) |  Sets colour numbers (used with older panels). Returns 1 if successful, 0 if unsuccessful. This must be a value between 0 - 15.  
**SetColours**(_Clrs_ _$_)  
**SetColors**(_Clrs_ _$_) |  Sets up the background/foreground colour properties). Returns 1 if successful, 0 if unsuccessful.  
  
_Clrs_ _$_ \- String containing background/foreground colours separated by a **;**_(semi-colon)_.

#### **Note:  
** If both colours are numeric values between (0 - 15), no semi-colon is necessary. Format mask: 0000. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
  
**SetColumn**(_Col_) |  Sets starting column of the folder. Returns 1 if successful, 0 if unsuccessful.  
**SetColumns**(_Cols_) |  Sets the overall width of the folder in terms of columns. Returns 1 if successful, 0 if unsuccessful.  
**SetCtlId**(_C_) |  Sets the Ctl ID for the folder. Returns 1 if successful, 0 if unsuccessful.  
  
_C_ \- Ctl ID generated by *winproc (10000+ _sequential number of the tab_).  
**SetDisabledColour**(_Dclr_ _$_)  
**SetDisabledColor**(_Dclr_ _$_) |  Sets the default colour that will be applied to the title on a disabled tab.   
_  
Dclr$_ \- String containing a valid tab colour. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetFillColours1**(_F1$_)  
**SetFillColors1**(_F1$_) |  Sets the first fill colours for each tab (each colour is separated by a **/**  _slash_). Returns 1 if successful, 0 if unsuccessful.  
  
_F1$_ \- String containing a valid tab colour followed by a **/**  _slash_. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetFillColours2**(_F2$_)  
**SetFillColors2**(_F2$_) |  Sets the secondary fill colours for each tab (each colour is separated by a **/**_slash_). Returns 1 if successful, 0 if unsuccessful.  
  
_F2$_ \- String containing a valid tab colour followed by a **/**  _slash_. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**SetFont**(_F$_) |  Sets the font to be used when drawing text on the tabs. Returns 1 if successful, 0 if unsuccessful.  
  
_F$ -_ Comma-separated string containing font name, point size and attributes.  
**SetFrameType**(_FT$_) |  Sets the type of frame to use when drawing a tab-less folder. Returns 1 if successful, 0 if unsuccessful.  
  
_FT$_ \- Possible values are:  
  
**0** = None  
**2** = Raised  
**3** = Recessed  
**4** = 3D **_(Default)_**  
**SetIdLst**(_IdLst_) |  Sets the sequential number for the folder control. This number represents the control placement on the panel.  
**SetLine**(_L_) |  Sets the starting line number for the folder. Returns 1 if successful, 0 if unsuccessful.  
**SetLines**(_Lns_) |  Sets the overall height of the folder in terms of lines. Returns 1 if successful, 0 if unsuccessful.  
**SetOrigTabCount**(_OC_) |  Sets the original number of tabs (if the scroll button option is on then this number will be greater than the number of tabs displayed). Returns 1 if successful, 0 if unsuccessful.  
**SetOrigTabWidth**(_OW_) |  Sets the original tab width assigned in folder definition. Returns 1 if successful, 0 if unsuccessful.  
**SetPanelNames**(_Pnls_ _$_) |  Sets the names of the sub-panels separated by a $01$. Returns 1 if successful, 0 if unsuccessful.  
**SetResize**(_R_) |  **_(Internal Use Only)_** Sets the resize indicator (0 or 1). Returns 1 if successful, 0 if unsuccessful.  
**SetScrolling**(_S_) |  **_(Internal Use Only)_** Sets the scrolling indicator (0 or 1). Returns 1 if successful, 0 if unsuccessful.  
**SetShowArrows**(_SA_) |  Sets the scroll buttons option. Returns 1 if successful, 0 if unsuccessful.  
  
**0** \- Hide scroll buttons  
**1** \- Show scroll buttons  
**SetTabAlignment**(_Align$_) |  Sets the tab alignment (placement of tabs). **T** \- Top  
**L** \- Left  
**B** \- Bottom  
**R** \- Right  
**SetTabHeight**(_Theight_) |  Sets the height in lines of a tab (or width in columns if tabs are on the right/left).  
  
If 0, then no tabs are displayed (tab-less folder). System default is 1.5 lines high if tab alignment is top or bottom or 2.5 for left/right tabs.  
  
Returns 1 if successful, 0 if unsuccessful.  
**SetTabInfo**(_Info$_) |  Sets the tabs information (panel name, title and suppress option for each tab). Returns 1 if successful, 0 if unsuccessful.  
  
_Info$ -_ String containing tab info for the folder. A $00$ separates each tab definition. Tab definition consists of _panelname_ +"="+_title_ +$01$+_suppress option._  
**SetTabless**(_T_) |  Sets the tab-less folder option (0 or 1).  
**SetTextColour**(_TC$_)  
**SetTextColor**(_TC$_) |  Sets the default text colour for all tabs.  
  
_TC$ -_ String containing one of four possible colour selections. See **[Valid Colour Assignments](Tab.htm#assignments)**.  
**ShufflePanels**(_GetNextTab_) |  **_(Internal Use Only)_** Method to change the order of the tabs (invoked when next/prior scroll buttons are pressed).  
  
_GetNextTab_ \- Will contain a value of 1 if the next button is pressed or a value of 0 if the prior button is pressed.
