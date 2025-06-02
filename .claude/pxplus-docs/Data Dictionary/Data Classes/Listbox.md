# Data Classes

**List Box Data Class** |  **__**  
---|---  
  
When creating or editing a data class for a _List Box_ control type, **Data Class Definitions** maintenance displays the following:

|  **  
List Box Data Class** **([Load From File](Listbox.htm#display)  _On_)**   
 _(**Load From File** was added in PxPlus 2019)_ |    
**List Box Data Class** **([Load From File](Listbox.htm#display)  _Off_)**  
---|---|---  
  
#### **Note:**  
Properties marked with an *****  _(asterisk)_ can be **_dynamic_**. Expressions that come from a data class **_must_** be global variables. See **[Dynamic Control Properties](Dynamic.md)**.

The following tabbed panels are available: **[Display](Listbox.htm#display)**, **[Attributes](Listbox.htm#attributes)**, **[User Aids](Listbox.htm#useraids)**, **[Validation](Listbox.htm#validation)** and **[Query](Listbox.htm#query)**.

_Class Name_ |  Key to the data classes file  _(providex.dcl)_. When entering a new data class name, spaces are **_not_** allowed. Maximum length is 30 characters. Click the Query button _(binoculars)_ for a list of defined data classes (if any). Click the Browse buttons to browse to existing data classes. Click the Copy Class button to copy an existing data class to a new data class. If unsaved changes are detected when selecting these buttons, a message will display to save the changes. _(First/Last Class browse buttons were added in PxPlus 2019.)_  
---|---  
_(Add/Edit Notes)_ |  **_(Available when a new or existing data Class Name is entered or selected)_** Button used to add (or edit) notes for a new or existing data class. Maximum 1024 characters. The button's appearance and tooltip change to indicate that a note was added for the data class. _(The Add/Edit Notes button was added in PxPlus 2022.)_  
_(Copy Class)_ |  **_(Available when an existing data Class Name is selected)_** Button used to create a new data class by copying the settings from an existing data class. Once it is created, **_the new data class must be saved_** , as the Copy process does not do this. _(The Copy Class button was added in PxPlus 2019.)_  
_Last Class Change_ |  This information is updated automatically whenever a change is made to the data class definition. _(Last Class Change was added in PxPlus 2023.)_  
_Control Type_ |  Default control type used to represent the data that belongs to your defined data class. Click the drop-down arrow for a list of selections: _Multi Line, Drop Box, List Box, Radio Buttons, Check Box_. (Default is _Multi Line_.) The control type lets the NOMADS **[Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** and **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** know which type of control to use for representing the data element.  
_Description_ |  Generic description of the data class (_Fixed_ value, _Expression_ or _Message Library Reference_). This will be copied to the data dictionary when the data class is applied to an element. See **[Element Description](../Data%20Dictionary%20Maintenance/Element%20Description.md)**.  
_*Dynamic_ |  For new data classes created **_in PxPlus 2018_** , this check box is selected by default. For data classes created **_prior to PxPlus 2018_** , this check box is **_not_** selected by default. Select this check box to set dynamic control properties to _Dynamic_ automatically when the data class is entered for a control in the Panel Designer. If _Dynamic_ is **_not_** selected, dynamic control properties must be set to _Dynamic_ manually after entering the data class for a control. See **[Dynamic Control Properties](Dynamic.md)**. _(The Dynamic check box was added in PxPlus 2018.)_  
_Internal Data Type_ |  Internal format of the data when manipulated by a program, either _String_ or _Numeric_. (Default is _String_.)  
_Internal Size_ |  Maximum size of the stored data element. If the _Internal Data Type_ is for a **_String_** variable, the _Internal Size_ value will define the maximum string length. For a **_Numeric_** variable, enter _nnn.dd**where** nnn_ is the maximum number of digits (including the decimal) and _dd_ is the number of digits after the decimal point (i.e. the **[PRECISION](../../directives/precision.md)** of the number). If the selected _Control Type_ is _Radio Buttons_ or _Check Box_ , the _Internal Size_ is 1.  
**Display****_( * indicates_ a _Dynamic property)_**  
**List Box Type** |  Select the type of list box. |  _Standard_ |  **_(Default)_** Used to review and access a single column of data.  
---|---  
_Report View_ |  Displays multiple data elements in a tabular list with the use of headings and other attributes.  
_Formatted_ |  Used to define multiple columns, line breaks and other formatting.  
_Tree View_ |  Provides a tree-like structure view with optional bitmaps.  
_List View_ |  Produces vertically wrapping columns (with optional bitmaps) where only the first element of each record is displayed.  
  
_(List Box Type was added in PxPlus 2018.)_  
  
**Properties** |  |  _List Box Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00 and valid entries are 0 to 255.  
---|---  
_List Box Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00 and valid entries are 0 to 240.  
***List Values** |  List of values that NOMADS uses to preload the list box. Can be a _Fixed_ value or a string _Expression_. A data table/file can also be used. |  _Load From File_ |  **_(Available when the_ [Dynamic](Listbox.htm#main)  _check box is selected)_** Select this check box to define a data table/file as the source when populating a list box at run time. See **[Populate from Data Source](Populate%20from%20Data%20Source.md)**. _(The Load From File check box was added in PxPlus 2019.)_ |  _Table_ |  **_(Available when Load From File check box is selected)_** Name of the data table/file. When a valid table/file is entered, the _Key_ and _Return Value_ fields are populated. Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**. Click the Query button _(binoculars)_ for a query view of tables by table name. For information on using the query features (i.e. search, sort, filter, etc.), see **[Run-Time Query](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.md)**.  
---|---  
_Key_ |  **_(Available when a Table is selected)_** Key definition to use to read the selected _Table_. Defaults to the Primary key when a _Table_ is entered. This key controls the sort sequence for the list box values. If no _Display Value_ is entered, the values for the selected _Key_ will be loaded into the list box.  
_Display Value_ |  **_(Available when a Table is selected)_** **_(Optional)_** Specify a display value (either _Fixed_ or _Expression_) to use to load the list box or leave blank. If no _Display Value_ is specified, the _Key_ values will be used to load the list box. |  _Fixed_ |  Select an element whose values will be used to load the drop box instead of the _Key_ values. Click the drop-down arrow for a list of **_string_** elements in the selected _Table_. This list includes numeric elements (if defined), which display either as **=STR(**_value:_ "_format_ "**)** or **=STR(**_value_**)** , depending on whether a _Display_ format mask was defined for the numeric element in the Data Dictionary. **_Examples:_** |  =STR(_ytdSales_ :"##,###,##0.00") |  With _Display_ format mask ##,###,##0.00  
---|---  
=STR(_QtyOnHand_) |  Without a _Display_ format mask  
  
If a numeric element is selected when the data class is saved, the _Display Value_ drop box will show _Expression_ the next time this data class is accessed.  
  
_Expression_ |  Enter an expression for the values to load in the list box. The expression will be evaluated while loading the list box. Only variables available to the **%nomads'class** object may be used, which includes any columns from the Load From File _Table_ or global variables or any system-wide variables. Constant string values may also be used. Depending on the **[List Box Type](Listbox.htm#display)** associated with the data class, the format of these expressions will vary slightly, as explained below. **_Standard and List View List Boxes_** Individual lines in a _Standard_ or _List View_ list box are all one string. If desired, separate individual components with a separator such as '**:** ' _(colon)_ , '**/** ' _(forward slash)_ or '**-** ' _(dash)_. **_Examples:_** ClientCode$+': '+ClientName$ 'Date = '+DTE(InvoiceDate$:%Dl %Ml %D/%Y) **_Formatted List Boxes_** _Formatted_ and _Report View_ list boxes allow multiple columns to be used for one line of data. In this case, the standard column separator (**SEP**) should be used between components.

#### **Note:**  
When using the _Report View_ format, the names and lengths of the columns will be determined from the Data Dictionary.

When using a _Tree View_ list box, use **SEP** to create nodes in the tree structure. **_Examples:_** ProductCode$+SEP+ProductDescription$ %CompanyCode$+SalesPersonCode$+SalespersonName$  
  
_(The ability to use numeric elements and specify an Expression was added in PxPlus 2020.)_  
  
_Include Key and Value_ |  **_(Available when Display Value is Fixed and a non-numeric element is selected)_** **_(Optional)_** Select this check box to use **_both_** the _Key_ value **_and_** the _Display Value_ to load the list box in the following format: _Keyvalue_ _: DisplayValue_. (By default, this check box is not selected.) **_Example:_** If the _Key_ is ClientIDKey:Client ID and the _Display Value_ is ClientName$, the list box will load using **_both_** these values:  
_Filter Test_ |  **_(Available when a Table is selected)_** **_(Optional)_** Enter an expression to filter the records that will be loaded in the list box if the expression is evaluated as True. **_Examples:_** UCS(DepartmentCode$)=''EAST'' MID(ProductCode$,1,3)=''CAR'' ytdSales>0 _(Filter Test option was added in PxPlus 2020.)_  
_Return Value_ |  **_(Available when a Table is selected)_** Select the return value when an entry is selected from the list box. This value is used to define the **[Translation](Listbox.htm#validation)** table for the list box. Click the drop-down arrow for a list of defined Key values for the selected _Table_. Defaults to the Primary key when a _Table_ is entered. If an element is selected for the _Display Value_ , then "List Box Display Value" will be added as an available selection to the top of the _Return Value_ drop-down list.  
_Descriptive Field_ |  **_(Available when a Table is selected)_** **_(Optional)_** Specify a descriptive field (either _Fixed_ or _Expression_) to allow it to be available when creating display-only Multi-Line controls in the NOMADS Panel Designer. See **[Extended Class Browse](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Extended%20Class%20Browse.md)**. |  _Fixed_ |  Click the drop-down arrow to select from a list of **_string_** elements in the selected _Table_. This list includes numeric elements (if defined), which display either as **=STR(**_value:_ "_format_ "**)** or **=STR(**_value_**)** , depending on whether a _Display_ format mask was defined for the numeric element in the Data Dictionary. **_Examples:_** |  =STR(_ytdSales_ :"##,###,##0.00") |  With _Display_ format mask ##,###,##0.00  
---|---  
=STR(_QtyOnHand_) |  Without a _Display_ format mask  
  
If a numeric element is selected when the data class is saved, the _Descriptive Field_ drop box will show _Expression_ the next time this data class is accessed.  
  
_Expression_ |  Enter an expression to populate the value in the Multi-Line control when making a selection from the list box. The expression will be evaluated while validating the data. Only variables available to the **%nomads'class** object may be used, which includes any columns from the Load From File _Table_ or global variables or any system-wide variables. Constant string values may also be used. **_Examples:_** ClientCode$+': '+ClientName$ 'Date = '+DTE(InvoiceDate$:%Dl %Ml %D/%Y) SalespersonCode$+SEP+SalespersonName$ (see **Note**)

#### **Note:**  
If a **SEP** is included in an expression, it will insert another line in the display-only Multi-Line control, which will require a _Height_ setting **_greater_** than 1.  
  
If entering an expression that includes columns from the selected _Table_ , the _Populate All Fields_ check box **_must_** be selected.  
  
_(Descriptive Field option for List Box data classes was added in PxPlus 2020.)_  
  
_Populate All Fields_ |  **_(Available when a Descriptive Field is entered or selected)_** Select this check box to allow **_all_** data elements in the selected _Table_ to be available when creating display-only Multi-Line controls in the NOMADS Panel Designer. _(Populate All Fields option for List Box data classes was added in PxPlus 2020.)_  
***Visual Class** |  Assign visual class to the control. See **[Visual Class Assignment](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note** :  
Visual class names that begin with an *****_(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(added in PxPlus 2018)_  
***iNomads Class** |  The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../iNOMADS/iNomads%20Classes.md)**. _(added in PxPlus 2018)_  
**Attributes****_( * indicates_ a _Dynamic property)_**  
**Attributes** |  |  _Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via**Shift - Tab** or the mouse.  
---|---  
_Initially Disabled_ |  Control region is grayed out and is not accessible to the user for input. The control is accessible programmatically.  
_Initially Hidden_ |  Control is not displayed but is accessible programmatically.  
_Borderless_ |  The control is drawn with no border or frame.  
_Strip Trailing_ |  Strips trailing spaces when reading/writing data for control.  
_Signal On Exit_ |  A signal is generated when focus leaves the control whether the selection or value has changed or not. NOMADS will execute the On Change logic.  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box. See **[Panel Resizing](../../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**.  
_Automatic (Signal All Changes)_ |  A signal is returned on any changes in the control.  
_Disable On Empty_ |  The system automatically disables the list box when it contains no entries. When populated, the list box is re-enabled. Overridden when the **['Enabled](../../control_object_properties/properties_list.htm#Mark45)** property is turned **_Off_**. Default is **_Off_**. _(added in PxPlus 2018)_  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed. _(added in PxPlus 2017)_  
**Standard Listbox Attributes** |  **_(Applicable when List Box Type is Standard)_** |  _Allow Variable Input_ |  Enables the user to select any element from the list or enter any other value.  
---|---  
_Input Length_ |  **_(Applicable when List Box Type is Standard and Allow Variable Input check box is selected)_** Maximum input characters (_Fixed_ or numeric _Expression_).  
_Multiple Selections_ |  Users can select more than one entry from the list box.  
_No Height Adjustment_ |  The list box will not be forced to show only complete lines. The last line will be truncated horizontally (i.e. displaying a partial line to ensure that the height of the list box matches the size defined). See **[Resizing Input Controls](../../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Resizing%20Input%20Controls.md)**.  
**ReportView Attributes** |  **_(Applicable when List Box Type is Report View)_** |  _Partial Match_ |  Partial matches in the list box data are highlighted. If selected, the text string used in a **LIST_BOX WRITE** will be considered a partial match for highlighting list box data; e.g. if you write "ABC", then the first item that starts with "ABC" is highlighted. (If the _Multiple Selections_ attribute is also set, _all_ items starting with "ABC" would be selected.)  
---|---  
_Multiple Selections_ |  Users can select more than one entry from the list box.  
_Disable Sorting_ |  Clicking on the column heading does not cause list box elements to be sorted. The column headings will not have the 3D button look but will appear flat. Column resizing is still allowed.  
_Suppress Buttons_ |  If this attribute is selected, the heading line is suppressed. The area that is occupied normally by the header is used for list output.  
_Column Size Lock_ |  When selected, the _Report View_ column headers cannot be resized by dragging. Default is **_Off_**.  
_Auto Column Size_ |  When selected, columns will automatically be proportionally resized when the list box is resized. Default is **_Off_**.  
_Header Lock_ |  Locks the column headers so that the user is unable to click on them or drag them. Default is **_Off_**.  
_Lines Per Row_ |  Number of lines high per row. Valid values are >= 1. Allows for word wrap. Default is **_1.0_**.  
_Lock Top Rows_ |  Number of rows at the top of the list box to exclude from sorting. Enter a value or use the spinner controls to increase/decrease the value. _(added in PxPlus 2019)_  
_Lock Bottom Rows_ |  Number of rows at the bottom of the list box to exclude from sorting. Enter a value or use the spinner controls to increase/decrease the value.  
_Grid Lines_ |  Controls the display of grid lines between the rows and columns. Options are _None**(Default)** , Full grid, Vertical, Horizontal_.  
_Center Text Vertically_ |  Select this check box to center text vertically in the list box row only when **_Lines Per Row_ is > 1**. Text that exceeds the column width is truncated and an _ellipsis_ () is displayed. When not selected _(Default)_ , text is aligned to the top of the list box row, and text that exceeds the column width is word wrapped. _(added in PxPlus 2019)_  
_Sort Options_ |  Controls how column data is sorted. Click the drop-down arrow for a list of selections: |  _Default_ |  _Null values at end_  
---|---  
_None (Raw binary sort)_ |  _Ignore case/Nulls last_  
_Ignore case_ |  _Ignore accents/Nulls last_  
_Ignore accents_ |  _Ignore case & accents/Nulls last_  
_Ignore case and accents_ |   
  
The _Default_ setting will use the system _StdSortOrder_ setting. See **'[OPTION](../../mnemonics/option.md)'** mnemonic or ['**SortOrder$**](../../properties/sortorder.md) property in the PxPlus _Language Reference_.  
  
_*Format_ |  Button that launches the **[Report View Format Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#listviewdef)** dialogue used to define various format options (i.e. title, width, alignment, sorting, etc.) for the columns in a _Report View_ list box.  
**Formatted Listbox Attributes** |  **_(Applicable when List Box Type is Formatted)_** |  _Multiple Selections_ |  Users can select more than one entry from the list box.  
---|---  
_No Height Adjustment_ |  The list box will not be forced to show only complete lines. The last line will be truncated horizontally (i.e. displaying a partial line to ensure that the height of the list box matches the size defined). See **[Resizing Input Controls](../../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Resizing%20Input%20Controls.md)**.  
_*Format_ |  Button that launches the **[Formatted List Box Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#formatteddef)** dialogue used to define various format options (i.e. width, alignment, special options, etc.) for the columns in a _Formatted_ list box.  
**TreeView Attributes** |  **_(Applicable when List Box Type is Tree View)_** |  _Data Has Bitmaps_ |  As each entry in the tree view is added/written, then the beginning of the data is tested for the existence of a bitmap pathname enclosed within curly brackets. If a bitmap is present, then it overrides the standard bitmaps.  
---|---  
_Direct Edit_ |  Enables automatic editing so that the user can double click on an item to change its value.  
_Disable Sorting_ |  The contents of the tree view will not be sorted automatically.  
_Suppress Buttons_ |  By default, a tree view shows small buttons to the left of the entries with subordinate levels: either a **'+'** to indicate the existence of subordinates that have not been shown, or a **'-'** to indicate that the subordinates are being shown. Clicking the button toggles the display. If this attribute is selected, these buttons are suppressed.  
_Show Lines_ |  Sets the tree view to draw connecting lines between the various entries.  
_*Format_ |  Button that launches the **[Tree View Format Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#treeviewdef)** dialogue, which is used to set the _Column Separator_ (delimiter character) and define default images to be displayed in the tree. You can define up to six default bitmaps or icons in tree views.  
_*States_ |  Button that launches the **[State Indicators](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#stateindicators)** dialogue, which is used to set up images that will appear in front of a list box entry that can be used to indicate whether the item has been selected or not.  
  
_(Tree View States were added to Dynamic Data Classes in PxPlus 2019.)_  
  
**ListView Attributes** |  **_(Applicable when List Box Type is List View)_** |  _Partial Match_ |  Partial matches in the list box data are highlighted. If selected, the text string used in a **[LIST_BOX WRITE](../../directives/list_box.md)** will be considered a partial match for highlighting list box data; e.g. if you write "ABC", then the first item that starts with "ABC" is highlighted. (If the _Multiple Selections_ attribute is also set, _all_ items starting with "ABC" would be selected.)  
---|---  
_Multiple Selections_ |  Users can select more than one entry from the list box.  
_*Format_ |  Button that launches the **[List View Format Definition](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#listviewdef)** dialogue used to define various format options (i.e. title, width, alignment, sorting, etc.) for the columns in a _List View_ list box.  
**Other** |  |  _Alt-Key_ |  Hot key for the control. Click the drop-down arrow for a list of selections. _(added in PxPlus 2018)_  
---|---  
_*User Tag Field_ |  For controls, data/tag field which can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
_Full Line Highlight_ |  **_(Applicable when List Box Type is Report View or List View)_** Full line highlight style allows the user to click any column to highlight the row; otherwise, the user can only click in the first column to highlight the row. Select from the drop-down list to set: _Default, On, Off_. _Default_ indicates use of the PxPlus setting of the **['+V' or '-V'](../../mnemonics/+v.md)** mnemonic. _(added in PxPlus 2018)_  
_Object Persistence_ |  Sets **[Object Persistence](../../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Object%20Persistence.md)**. _(added in PxPlus 2018)_ Click the drop-down arrow for a list of selections: |  _Default_ |  Set via global variable  
---|---  
_Always_ |  **_On_** , overriding global activation  
_Never_ |  **_Off_** , overriding global activation  
**User Aids****_( * indicates_ a _Dynamic property)_**  
***Help Reference** |  |  _Type_ |  Click the drop-down arrow to select either _Internal_ or _External_ help reference: |  _Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
---|---  
_External_ |  Standard Windows help system consisting of a help file name and an optional keyword or reference number (_Fixed_ or _Expression_).  
***Floating Tip** |  Mouse pointer message for the control (_Fixed_ value, string _Expression_ or _Message Library Reference_). You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** multi-line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**.

#### **Note** :  
The **Floating Tip** drop box and multi-line input cannot be changed once an [**HTML**](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.htm#tiptype) tip has been defined.  
  
***Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
**Validation****_( * indicates_ a _Dynamic property)_**  
***Default Setting** |  Initial value to be highlighted when the list box is drawn (_Fixed_ value or string _Expression_).  
***Translation** |  Click the _Translate_ check box to set up a table of values representing list box selections. Definition consists of a _Table Value Length_ (length of each of the items in the table) and the translation value (_Fixed_ or string _Expression_). If the **[Dynamic](Listbox.htm#main)** check box is selected **_and_** the **[Load From File](Listbox.htm#display)** option is defined, the translation value will be set to _Expression_ , the _Table Value Length_ will be set to 0, and both will be locked. _(The setting of translation values for dynamic List Box data classes with Load From File functionality was added in PxPlus 2021.)_  
**Query****_( * indicates_ a _Dynamic property)_**  
***Query Type** |  Type of query to associate to the control: _Panel, Query Program, Non-Query Logic_. Valid formats include a NOMADS query object or query list, a custom query panel, or user-supplied query program. Depending on the _Query Type_ selected, different information is entered. For an explanation of each type and the information to enter, see **[Query Type](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)**.  
***Panel Information** |  **_(Applicable when Query Type is Panel)_** For an explanation of the information to enter, see **[Query Type: Panel](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#panel)**. The **[Define](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#define)** button uses the _Panel_ name to either create a new or edit an existing query definition. _(The Define button was added to Data Class Definitions maintenance in PxPlus 2023 Update 1.)_  
***Query Program** |  **_(Applicable when Query Type is Query Program)_** For an explanation of the information to enter, see **[Query Type: Query Program](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#queryprogram)**.  
***Non-Query Logic** |  **_(Applicable when Query Type is Non-Query Logic)_** For an explanation of the information to enter, see **[Query Type: Non-Query Logic](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#nonquerylogic)**.  
**** |   
_Popup Menu_ |  Button that is used to assign a popup menu to a data class (_Fixed_ value or _Expression_ , to be evaluated at run time when the popup signal occurs). A check mark displayed on the button indicates that a popup menu is currently assigned to the data class. This button invokes the **[Assign Popup Menu](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/Applying%20a%20Popup%20Menu.md)** window for assigning _Prior Popup_ logic, a pre-defined popup object or user-defined program. If selected, _Prior Popup_ logic will be executed before the popup menu is displayed. If _On Select_ logic exists for the control with the popup menu, this will be triggered before the popup event.  
  
Select the _Panel_ option in the **Assign Popup Menu** window to display a pre-set list of popup objects available for the highlighted library. The _Program_ option is used to add a user-defined program. This can be either a _Fixed_ value or _Expression_ to be evaluated at run time when the popup signal occurs.  
_Write_ |  Adds a new data class definition or updates an existing definition.  
_Delete_ |  **_(Available when an existing data class is selected)_** Removes the selected data class definition. Before proceeding, a message asks to confirm the deletion, as deleting a data class in use may cause issues.  
_Clear_ |  Clears the current data class definition to allow you to define a new data class or select an existing definition.  
_Exit_ |  Closes **Data Class Definitions** maintenance without saving any changes.  
  
_(The User Aids tab was added in PxPlus 2018.)_
