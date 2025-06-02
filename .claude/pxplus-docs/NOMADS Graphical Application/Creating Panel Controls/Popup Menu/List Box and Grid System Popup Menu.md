# Popup Menu   
  
**List Box and Grid System Popup Menu** |  **__**  
---|---  
  
A system popup menu consisting of the following extraction, search and print options can be added to any Grid or List Box (**_except Tree Views_**):

> _Copy Column_  
>  _Copy Selected Record(s)_  
> _Copy All Records_  
>  _Export All Records to File_  
>  _Export All Records to Spreadsheet (MS Excel 2003 or later)_  
> _Find..._  
> _Find Next_  
>  _Find Previous_  
>  _Goto_ __  
> _Define a chart_  
>  _Display chart_  
>  _Print  
>  Advanced Print_

_(The List Box and Grid system popup menu was added in PxPlus v10.)  
(The AutoChart functionality was added to the system popup menu in PxPlus v11.00.)  
(The Export to Spreadsheet option was added to the system popup menu in PxPlus 2014.)  
(The Advanced Print option was added to the system popup menu in PxPlus 2021 Update 1.)_

The functionality associated with these options is summarized below:

**_Copy_** |  These options place data on the Windows Clipboard. Available Copy options are dependent on the List Box type and, in iNomads, on browser type (IE only).  
---|---  
**_Export to File_** |  These formats include comma-separated _(.csv)_ , symbolic link _(.slk)_ , Microsoft 2003 XML _(.xml)_ and tab delimited _(.txt, *.*)_.  
**_Export to Spreadsheet_** |  This option creates an _.xml_ file and opens it with the default spreadsheet application.  
**_Find_** |  These options are used to search the contents of the List Box for occurrences of a specified string.  
**_Goto_** |  This option is used to go to a specific item.  
**_Define a chart_** |  This option invokes the **Chart Wizard** that is used to define a **[NOMADS AutoChart](../../../NOMADS%20AutoChart/Introduction.md)** for the list.  
**_Display chart_** |  This option shows the AutoCharts that have been defined.  
**_Print_** |  This option outputs a formatted version of the List Box contents to the viewer in NOMADS or a PDF file in **[iNomads](../../../iNOMADS/iNOMADS%20Introduction.md)**.  
**_Advanced Print_** |  This option invokes the **Advanced Print Options** window used for customizing the report by changing the main title or adding a sub-heading containing selected information from the current panel. This window consists of the following: |  _Report Title_ |  Main title at the top of the report. By default, the title from the panel header definition is displayed.  
---|---  
_Select_ |  Select this check box to indicate that the description and value are to display in the report sub-heading. This information can be displayed as shown or edited to be more meaningful. If none of the _Select_ check boxes is checked, a message will display when the _Ok_ button is selected.  
_Description_ |  This column displays the names of the panel controls, which can include Multi-lines, List Boxes, Drop Boxes, Check Boxes, Radio Buttons, and Grid cells. A comment can also be added as a Note to the report.  
_Value_ |  This column displays the original values (if applicable) for the panel controls; otherwise, it will be blank. If the original value is edited, an *****  _(asterisk)_ will display in front of the value when the report is printed to indicate that the original value was changed.  
_Ok_ |  Generates a preview of the report.  
_Cancel_ |  Cancels the report.  
  
##  Handling the System Popup Menu

**_Adding/Removing the System Popup Menu_**

System popup menus can be added to **_all_** List Boxes and Grids by setting the global variable **%LIST_POPUP** to non-zero.

The system popup can also be added or removed from **_individual_** List Boxes and Grids. This is done by first selecting the _Popup Menu_ button in the List Box or Grid definition and then setting the **[System Popup](Applying%20a%20Popup%20Menu.htm#Mark2)** option to **_On_** or **_Off_**. This setting overrides the **%LIST_POPUP** setting unless the _Default_ setting is selected.

If a List Box or Grid already has a popup menu assigned to it, a new menu group, **_List Options..._** , is added to the bottom of the existing popup menu for accessing the additional options.

**_Modifying the System Popup Menu_**

To change the text of the menu group, load the desired menu text into the **%LIST_POPUP$** variable. Since the text will become a popup menu item, an **&** (_ampersand_) character may be used to indicate the hot key associated with the item.

**_Example:_**

S&ystem Items ...

If no **&** (_ampersand_) is included in the text, it will be assumed to be at the beginning of the text entered; therefore, the first character will be used as the hot key.

#### **Note:**  
The popup menu associated with the Grid in general is affected, not cell-level popup menus.

To suppress options displayed in the popup menu, set the **%LIST_POPUP_SUPPRESS_OPTIONS$** global variable to indicate which options are to be suppressed. Any combination of "C", "E", "F", "G", "L", and/or "P" will cause the _Copy_ , _Export_ , _Find_ , _Chart_ , _Goto_ and/or _Print_ items respectively to be suppressed.

**_Example:_**

> **%LIST_POPUP_SUPPRESS_OPTIONS$="CE"** will cause the _Copy_ and _Export_ items to be suppressed, while the _Find_ and _Print_ items remain available. This setting will apply to all List Box and Grid system popup menus for the session.

To attach the popup menu to an event other than the right-click popup event of the List/Grid control (such as a button click), invoke the menu as follows:

> ! Set the Popup_Ctlval variable to the CTL value of the associated List/Grid control  
> Popup_Ctlval =ctl_val  
> Popup_Select =0  
>  ! Then perform the following program:  
>  PERFORM "*plus/winutl/listpopup;Popup_Menu"

The items displayed in the popup will be dependent on the value in **%LIST_POPUP_SUPPRESS_OPTIONS$**.

To use any of the individual popup features without using the system popup menu, invoke the feature as follows:

> Popup_Ctlval=ctl_val  
> Popup_Select=option  
> **PERFORM** "*plus/winutl/listpopup;Popup_Menu

**_Where:_**

Options for _Popup_Select_ are:

|  1 |  Copy row to Clipboard  
---|---|---  
|  2 |  Copy all to Clipboard  
|  3 |  Export all to file (Prompts for file name)  
|  4 |  Print  
|  5,6,7 |  Find, Find Next, Find Previous  
|  8 |  Define Chart  
|  9 |  Display Chart  
|  11 |  Export All to Spreadsheet  
  
#### **Note:**  
Individual items are **_not_** suppressed by the setting of **%LIST_POPUP_SUPPRESS_OPTIONS$**.

To invoke the _Export All Records to File_ feature with a file name:

> **CALL** "*plus/winutl/listpopup;Export_to_File",_ctl_no,exportfile_ _$_

**_Where:_**

|  _ctl_no_ |  CTL value of the List Box or Grid  
---|---|---  
|  _exportfile_ _$_ |  Path of the resulting file. The file extension will indicate the type of export: |  _.txt or none_ |  Tab-separated file  
---|---  
_.csv_ |  Comma-separated  
_.slk_ |  Symbolic link  
_.xml_ |  Microsoft 2003 XML  
  
#### **Note:**  
The three global variables (**%LIST_POPUP** , **%LIST_POPUP$** and **%LIST_POPUP_SUPPRESS_OPTIONS$**) correspond to the three %NOMADS object properties **%NOMADS'List_Popup** , **%NOMADS'List_Popup$** and **%NOMADS'List_Popup_Suppress_Options$**.  
  
See **[%NOMADS Properties](../../Appendix/NOMADS%20Variables/Overview.htm#list_popup)**.  
  
_(The NOMADS object properties %NOMADS'List_Popup, %NOMADS'List_Popup$ and %NOMADS'List_Popup_Suppress_Options$ were added in PxPlus 2020.)_
