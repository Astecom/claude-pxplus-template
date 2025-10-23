# Query Subsystem

**Query Header**|   
---|---  
  
When creating a new query, first enter a name and then select _Standard Query_ in the **Query Type** window. This automatically launches the **Query Header Definition** window for defining the characteristics of the query. You can also edit the header information of an existing query by clicking the _Header_ toolbar button on the **[Query Definition](Query%20Definition.md)** window.

#### **Note:**  
When entering a new query object name, valid characters are: letters (A-Z, a-z); numbers (0-9); **~**  _(tilde)_ ; **@**  _(at symbol)_ ; **.**  _(period)_ ; **$**  _(dollar sign)_ ; **_**  _(underscore)_ ; **-**  _(dash)_ ; **+**  _(plus sign)_. If an invalid character is used, a message will display.

##  Query Header Definition

The **Query Header Definition** consists of six categories, each with its own tabbed folder: **[File Info](Query%20Header.htm#fileinfo)**, **[Display](Query%20Header.htm#display)**, **[Options](Query%20Header.htm#options)**, **[Font/Color](Query%20Header.htm#font)**, **[Interfaces](Query%20Header.htm#interfaces)** and **[User Aids](Query%20Header.htm#useraids)**. The design properties displayed on each of these tabbed folders are explained below.

> This window consists of the following:

_Panel_ |  Name of the query.  
---|---  
_Show Query+ Options_ |  Check box to disable/enable options based on their **[Classic Query](Overview.htm#classicquery)** vs. **[Query+](Overview.htm#queryplus)** availability.  
**File Info** |   
**Data Source** |  Options for defining the query's external data source: |  _Database_ |  When this check box is selected, the information to be displayed will be from an external database table. If not selected **_(Default)_** , the information is assumed to be from a PxPlus data file.  
---|---  
_Database Type_ |  Select from the following types: _ODBC, ODBC (Local), Oracle, Oracle (Local), DB2, DB2 (Local), MySQL, MySQL (Local), ADO, ADO (Local)_.  
_Database Name_ |  Enter the database name (_Fixed_ value or _Expression_).  
_Connect Option_ |  Connection options to be appended to an **OPEN** statement when opening the database, such as PSWD=, USER=, etc. Multiple options are separated by **;**  _(semi-colon)_.  
**File/Table** |  Name of the primary file or database table to be displayed in the query (_Fixed_ value or _Expression_). Data can have embedded or external keys or can be sort files. If your data source is a database, you must select a table name from the drop-down list. Otherwise, you can select a known data file from the Data Dictionary table lookup by clicking the Query Table View button _(magnifying glass)_ to display a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**. Type the name of a PxPlus View or the pathname of a data file, or click the Browse button to look through the directory structure to find a file. When entering a pathname, if the file has an embedded dictionary, then the embedded dictionary will be used to determine column information. Otherwise, you must manually define the data fields to be used in the query. See **[Field Definition](Query%20Definition.htm#fielddefinition)**. See also **[Manual Field Definition](Query%20Header.htm#manualfielddef)** below.  
**Key Information** |  **_For an External Database Table:_** Click the _Define Unique Sort Key_ button to display a window where you can define a table key based on fields in the table. The key definition will be added as a connection option on the **OPEN** statement using the KEY= clause. **_For a PxPlus Data File:_** Select the key (from drop-down selections) to sort the file in the query. (At run time, you can override this setting by loading an alternate key number into the **[%NOMADS'Query_Kno](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querykno)** variable.)  
**Display** |   
**Title** |  **_(Not Applicable to Drop Query)_** Text to appear on the title bar at run time. Click the drop-down arrow for a list of selections: _Fixed_ , _Expression, Message Library Reference_.  
**Columns/Lines** |  |  _Static Columns_ |  **_(Classic Query Only)_** Number of columns to remain fixed and kept on display when the user scrolls horizontally.  
---|---  
_Display Line Height_ |  Height of a query line in terms of lines high. Can accommodate larger font sizes. If set > 1 line, then the columns can word wrap. You can also use $0A$ in formulas to break data over multiple lines, showing more information without horizontal scroll.  
_Center Text Vertically_ |  **_(Query+ Only)_** Select this check box to center text vertically in the query line only when _Display Line Height_ is > 1. Text that exceeds the column width is truncated and an _ellipsis_ (...) is displayed. When not selected _(**default**)_, text is aligned to the top of the query line, and text that exceeds the column width is word wrapped.

#### **Note:**  
When an image is used in the query, the setting is ignored and all text is centered vertically.

When the _Show Query+ Options_ check box is not selected, the _Center Text Vertically_ check box is disabled (not applicable).  
  
_(The Center Text Vertically option was added in PxPlus 2019.)_  
  
**Position** |  Column and Line position of the _top left corner_ of the panel. Not used if **[Panel Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md)** is activated. |  _Absolute_ |  Indicates exact position in columns/lines from the top left corner of the display.  
---|---  
_Relative_ |  Column/line position relative to main window.  
_Centered_ |  Position centered relative to the screen (ignores column/line values).  
**Size** |  _Width_ and _Height_ of the panel. Not used if **[Panel Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md)** is activated. For **_Classic Queries_** , minimum width is 42 columns and height is 10 lines. The minimum **_Query+_** panel is 80 columns by 18 lines. When using **_Query+_**  _Toolbar_ , _Hybrid_ or _Menu_ views (see **[Query View](Query%20Header.htm#queryview)** option), the panel dimensions can be modified by clicking the **[Test/Design](Query%20Definition.htm#testdesign)** toolbar button to display the query and dragging the edges of the query panel to the desired size. Click the _Save + Exit_ button to save and incorporate these settings into the query definition when exiting the query. _(The ability to save query changes when in Test/Design mode was added in PxPlus 2023 Update 1.)_  
**Grid Lines** |  Adds grid lines to the display. Click the drop-down arrow for a list of selections: |  _Default_ |  Uses the value set in **[%NOMADS'Query_GridLines](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querygridlines)**. Default is no lines.  
---|---  
_None_ |  No grid lines are displayed.  
_Full grid_ |  Grid lines are displayed ** _both_** between the columns **_and_** between each line in the output.  
_Vertical_ |  Vertical grid lines are displayed between columns.  
_Horizontal_ |  Horizontal grid lines are displayed between lines/rows.  
  
_(The Grid Lines option was added in PxPlus 2017.)_  
  
**Display** |  |  _Gray/White Display_ |  Check box to display alternating gray and white backgrounds. Default (**_Off_**) indicates white only.  
---|---  
**Row Highlight** |  **_(Query+ and Drop Query)_** |  _Add (Edit) row display option_ |  Click the link to invoke the **[Row Display Option](Query%20Header.htm#rowdisplay)** window that is used to assign visual attributes, such as bold text, text color or highlight color, to a row based on specified conditions.  
---|---  
  
_(The Add (Edit) row display option was added in PxPlus 2021.)_  
  
**Options** |   
**Query+ Options** |  The following options apply to the **[Query+](Overview.htm#queryplus)** mode: |  _Query View_ |  This option determines how the query will be displayed when assigned as a _Panel_ to a Multi-Line. See **[Assigning a Query](Invoking%20a%20Query.htm#assigningquery)**.

#### **Note:**  
When the _Use Classic Query_ option (see above) is selected, the _Query View_ option is not available.

Click the drop-down arrow for a list of selections: |  _Default_ |  The setting in **[%NOMADS'Query_View](Designing%20and%20Using%20the%20Query%20Subsystem.htm#queryview)** is used. If %NOMADS'Query_View is not set, the default will be the _Toolbar_ view.  
---|---  
_Drop Query_ |  The **[Drop Query](Overview.htm#dropquery)** displays data in a _Report View_ list box directly on the current panel. Drop queries load the entire dataset prior to display; therefore, it is advisable to prevent queries that are using large datasets from being displayed as Drop queries by setting this option to _Toolbar_ , _Menu_ or _Hybrid_.  
_Toolbar_ |  Standard **[Query+](Overview.htm#queryplus)** display featuring a toolbar to access features.  
_Menu_ |  Features are accessed by a menu (no toolbar).  
_Hybrid_ |  This view has an abridged toolbar with the remaining features available in the menu. The layout is somewhat similar to the **[Classic Query](Overview.htm#classicquery)**.  
_Drop Tree_ |  The **[Drop Tree Query](Overview.htm#dropquery)** displays data in a _Tree View_ list box directly on the current panel. Drop Tree queries are **_not_** recommended for large datasets, as the entire dataset is loaded prior to display. The Drop Tree supports only the _Find_ , _Refresh_ , _Print_ , _Filters_ and _Profile_ features in its right-click popup menu.  
  
In **_iNomads_** , you can also choose to _Set the default Query View_ in the **Template Configuration[Misc](../../../iNOMADS/Template%20Configuration.htm#misc)** tab.

All views require the same Query+ activation level. If not activated, then the query will display as a **[Classic Query](Overview.htm#classicquery)**.

_(The Drop Query selection was added in PxPlus 2016.)  
(The Query View option was added in PxPlus 2017.)  
(The Menu selection was added in PxPlus 2017.)  
(The Hybrid selection was added in PxPlus 2017.)  
(The Drop Tree selection was added in PxPlus 2021.)_  
  
_Auto Column Resize_ |  Automatically adjusts the sizes of the columns to fit the width of the query. Click the drop-down arrow for a list of selections: _Default, Always, Never_. If set to _Default_ , the setting in **[%NOMADS'Query_AutoColSize](../../Appendix/NOMADS%20Variables/Overview.htm#queryautocolsize)** is used. _(The Auto Column Resize option was added in PxPlus 2019.)_  
_No Drop Query Header_ |  Suppresses the display of the column headings in **[Drop Queries](Overview.htm#dropquery)**. Click the drop-down arrow for a list of selections: _Default, Always, Never_. If set to _Default_ , the setting in **[%NOMADS'Query_NoDropHeader](../../Appendix/NOMADS%20Variables/Overview.htm#querynodropheader)** is used. _(The No Drop Query Header option was added in PxPlus 2019.)_  
_Use Classic Query_ |  **_(Classic Query Not Applicable in iNomads)_** Check box to force the query to display data using the **[Classic Query](Overview.htm#classicquery)** mode. This might be used when the query dataset is very large to avoid out-of-memory issues.

#### **Note:**  
When the _Use Classic Query_ option is selected, the _Query View, Auto Column Resize_ and _No Drop Query Header_ options are **_not_** available.  
  
**All Queries** |  The following options apply to all **[Query](Overview.md)** modes: |  _Auto Tab_ |  Check box to pre-input a Tab character ($09$) so that when the query is exited, focus will automatically go to the next control in the tab sequence.  
---|---  
_No Print Button_ |  Check box to suppress the _Print_ button at run time so that users _cannot_ print reports. Default (**_Off_**) enables printing of a simple report showing _title_ , _file name_ , and _column headings_ followed by a list of records that pass the selection criteria. NOMADS automatically adjusts the font size to print all columns on the page. If the font appears too small for the page, you can select landscape orientation. You may need to change the column size and/or the number of fields in the query to have a design that fits.  
_Suppress Favorites_ |  Suppresses the ability to select and display favorite records at run time. Click the drop-down arrow for a list of selections: _Default_ , _Always_ , _Never_. If set to _Default_ , the setting in **[%NOMADS'Query_Suppress_Favorites](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppressfave)** or **[%NOMADS'Query_Suppress_Popup$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppresspopup)** is used.  
_Suppress Export_ |  Suppresses the _Copy_ and _Export_ options normally available at run time. Click the drop-down arrow for a list of selections: _Default_ , _Always_ , _Never_. If set to _Default_ , the settings in **[%NOMADS'Query_Suppress_Export](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppressexport)** and **[%NOMADS'Query_Suppress_Popup$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysuppresspopup)** are used.  
_Read as RECORD_ |  **_(Available Only for Manually-Defined Files)_** Forces NOMADS to read the file using **READ RECORD** , making it possible to read and display data from manually defined files that have fixed-length records that may contain binary data.  
**Classic Query Options** |  The following options apply to the **[Classic Query](Overview.htm#classicquery)** mode: |  _No Sort By_ |  **_(Available when Use Classic Query check box is selected)_** Check box to disable the _Sort By_ drop box on a **[Classic Query](Overview.htm#classicquery)**. The file will be sorted using **[Key Information](Query%20Header.htm#keyinfo)** (**File Info** tab).  
---|---  
_Sort by Columns  
(Pre-load Data)_ |  **_(Available when Use Classic Query check box is selected)_** Check box to enable a **[Classic Query](Overview.htm#classicquery)** to be sorted by clicking the mouse on a column heading. Subsequent clicks toggle the sort between ascending/descending modes. Default (**_Off_**) indicates sort by _file keys_. Database tables can only be displayed in _Sort by Columns_ mode. PxPlus data files can display either _sort by file keys_ or _sort by columns_.

#### **Note:**   
All data must be preloaded to process this option, possibly affecting performance. See [**Performance Considerations**](Designing%20and%20Using%20the%20Query%20Subsystem.htm#performance).  
  
_Switch Scroll Bar  
for Large File_ |  **_(Available when Use Classic Query check box is selected)_** Check box to invoke alternate scroll bar logic to speed up access to large data files in a **[Classic Query](Overview.htm#classicquery)**. See **[Performance Considerations](Designing%20and%20Using%20the%20Query%20Subsystem.htm#performance)**. Used in conjunction with the **[%NOMADS'Query_Sbar_Max](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querysbarmax)** variable.  
_Use OK/Cancel Buttons_ |  **_(Available when Use Classic Query check box is selected)_** _OK/Cancel_ buttons are added to the bottom of the run-time **[Classic Query](Overview.htm#classicquery)** panel, and the status bar is suppressed (query message is displayed to the left of the button). Selecting _OK_ returns the value associated with the query record selected. (Query+ panels have _Select/Close_ buttons.)  
**Start At Value** |  The _Start At Value_ is the value that is passed to the query to determine which record in the query list will be selected when the query is initially loaded. This is done by matching the start value against record keys or return values as the file is read. Two drop box options are available for defining the _Start At Value_ : one to determine the case sensitivity of the _Start At Value_ , and one to determine how the _Start At Value_ is matched. **_Case Sensitivity_** Click the drop-down arrow for available selections: _Case Sensitive**(Default)**_ , _Default to Uppercase_ and _Default to Lowercase_. By default, the comparison is _Case Sensitive_ where the case of both the start value and key value (or return value) must match. It is possible that the start value may be passed in with mixed case; however, the record keys may be all uppercase or lowercase. In these cases, you must set the case of the _Start At Value_ to match that of the key values. In the case where the starting value uses the matching option to match the return value, using either the _Default to Uppercase_ or _Default to Lowercase_ option will result in a case insensitive match. **_Match Key Value/Return Value (Available for Query+ Only)_** Click the drop-down arrow for available selections: _Match key value**(Default)**_ and _Match return value_. By default, the starting value that is passed to the query is tested against the key that is being used to load the query. This is because the starting value generally matches the key value being used to load the query. In this case, the _Match key value_ option is applicable. However, there are instances where a query may be loaded using one key, such as a name or a description, but the return value is another key, such as a code or account number. In this case, use the _Match return value_ option. Be aware that if there are duplicate return values, the match will occur with the first one encountered.

#### **Note:**  
In the case where the return value is unrelated to the key by which the query is loaded, another way to set up the query is to load the query using the key that matches the return value. Use the **[Choose initial sort column](Query%20Definition.htm#initialsort)** link on the **Query Definition** window to set the column by which to sort the query when it is initially displayed.

_(The "Match key value" and "Match return value" options were added in PxPlus 2023 Update 1.)_  
**Return Value** |  Indicates the value to be returned when a record is selected. If omitted, the default is the value in the first column of the query. This value can also be used to determine if lines are to be suppressed when duplicate return values are encountered. Use a PxPlus expression. _(The ability to suppress query lines based on duplicate return values was added in PxPlus 2021.)_ |  _No Return Value_ |  Check box to ensure that the **Return Value** is not set when the query panel is exited. When a query is invoked, you can pass a **Start At** value as an argument. When the query panel exits, the same argument is used for the **Return Value**. Rather than loading this argument with the value of the currently selected record, the argument is left unchanged. The value in a control with an attached query is not changed when the query ends.  
---|---  
_Return Prime Key value in Hex_ |  Check box to return the Hex value of the Primary key. This option applies only when using files with multi-segment keys and must be selected when adding a query to the Webster+ HTML page. See **[Step 5: Keys](../Fmgen/Key%20Settings.htm#recordqry)** in the File Maintenance Generator. When this check box is selected, the **Return Value** multi-line input displays _HTA(__Prime_key_ _$)_ and is disabled. When it is not selected, the **Return Value** multi-line input displays _Default (first column)_ and is enabled. _(The Return Prime Key value in Hex option was added in PxPlus 2023 Update 1.)_  
_Build Return Value_ |  Click the link to invoke the **[Build Return Value](Query%20Header.htm#returnvalue)** window for defining the **Return Value**.  
  
Values can be returned for a single field or multiple fields concatenated in a format you can parse after the value is returned:

PROD_ID$ CST_SMN$+","+CST_NAME$(1,1)  
PAD(X1$,6)+PAD(X2$,12)+STR(LNK.AMT:"00000.00")  
SLS.FLD#1*100

You can also gain access to external keys using the special NOMADS query variable **[PRIME_KEY$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#primekey)** and return an entire record using the special NOMADS query variable **[ENTIRE_RECORD$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#entirerecord)**:

PRIME_KEY$+ENTIRE_RECORD$  
  
**Font/Color** |   
**Font Specification** |  |  _Font_ |  Select an existing font by name. Applies to **_screen presentation only_**. Fonts for printed reports are selected separately.  
---|---  
_Size_ |  Select from the list of available sizes (specific to the selected font) or enter a specific size. Positive sizes relate to the current font (1=Regular, 2=Double, .5=Half, etc.). Negative values are point sizes. Use in conjunction with the _Display Line Height_ setting (see **[Display](Query%20Header.htm#display)** tab) to display larger fonts.  
  
_(Font support for Query+ was added in PxPlus 2021.)_  
  
**Color** |  |  _Background  
Foreground_ |  **_(For Classic Query)_** Select the background and foreground colors for the query panel label region (not the area where records are listed).  
  
**_(For Query+)_** The background color applies to the panel background (the area below the records list), and the foreground color has no effect. Click the Query button to access **[Color Selections](../../Appendix/Color%20Selections.md)**. Valid formats for color selections include predefined system colors (e.g. Light Red), Custom (RGB codes), HTML Hex Color Codes, User Defined colors (e.g. Color17) and string Expressions.  
---|---  
  
_(The Color Selections Query button and dialog were added in PxPlus 2020.)_  
_(Background color support for Query+ was added in PxPlus 2021.)_  
  
**Attributes** |  Check boxes to apply font attributes. Overrides Library and Panel defaults. Available selections are _Bold_ , _Italics_ , and _ANSI Characters_. When the _ANSI Characters_ check box is set to **_Off_** , you can use other character sets such as _Wing Dings_. _(Font attributes support for Query+ was added in PxPlus 2021.)_  
**Theme** |  Assign a Theme to be applied to the query. The Theme can be defined as a _Fixed_ value or string _Expression_. Click the Theme Maintenance button to launch the **[Themes Maintenance](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#themesutil)** utility for creating and editing themes.

#### **Note:**  
A Theme specified at the Query level takes precedence over Themes set at the panel level, the Library level ([**Library Defaults**](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#fonttab)) or the General level Theme set in [**%NOMADS'Theme$**](../../Appendix/NOMADS%20Variables/Overview.htm#theme).  
  
A Theme assigned to the [**%NOMADS'ThemeOverride$**](../../Appendix/NOMADS%20Variables/Overview.htm#themeoverride) property overrides all other Theme settings. See [**Applying a Theme to Your Application**](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#applyingtheme).

_(Theme support was added in PxPlus 2019.)  
(The Theme Maintenance button in Query Header Definition was added in PxPlus 2020.)_  
**Interfaces** |   
**Initialization Procedure** |  Optional program to be called prior to opening the query panel. You may pass a comma-separated list of up to 20 optional parameters using the format: _"program;label",arg$, arg$, arg$..._  
**Closing Procedure** |  Optional program to be called upon exiting the query panel. You may pass a comma-separated list of up to 20 optional parameters using the format: _"program;label",arg$, arg$, arg$..._  
**Maintenance** |  Maintenance program for updating the file: |  _Library_ |  Select a maintenance library name from the drop-down list, click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).

_(Support for entering an expression for a Library name was added in PxPlus 2019.)_  
---|---  
_Panel_ |  Select a file maintenance panel name from the drop-down list. If included, the user can edit the main data file by clicking the _Edit File_ button at run time. The key of the currently selected record is passed to the maintenance program as ARG_1$, and the value returned in this argument is used to reposition the file. In the **[Classic Query](Overview.htm#classicquery)**, if no records exist for display in the query at run time, the File Maintenance program is automatically invoked. If left blank, the button is suppressed when the query is run.  
**User Aids** |   
**Help Reference** |  **_(Classic Query Only)_** Help text. Select from _External_ or _Internal_ Help types. At run time, Help is invoked by pressing **Shift - F1**. |  _Internal_ |  Application supplied message text. Available selections are: |  _Fixed_ |  Displays the text as entered.  
---|---  
_Expression_ |  Indicates that the Help file to be displayed is stored in a string variable or simple expression.  
_Message Lib Ref_ |  Specify a _Key_ associated with an existing message in the current message library.  
_External_ |  Standard windows Help system consisting of a Help file name and an optional Keyword or Reference number (_Fixed_ or _Expression_). Available selections are: |  _Fixed_ |  Allows you to enter the name of a Windows Help file.  
---|---  
_Keyword_ |  Indicates that the text in the adjacent field is the index entry for the topic in the indicated Help file.  
_Reference_ |  Indicates that the adjacent field contains the reference number for a specific topic in the context sensitive help.  
_Popup_ |  Check box to indicate that the Help topic will be displayed as a popup rather than as an independent window.  
_Expression_ |  Indicates that the Help file to be displayed is stored in a string variable or simple expression.  
_Test_ |  Button used to test the Help display.  
**Message Bar** |  **_(Classic Query Only)_** Message text to be displayed at the bottom of the panel. Available selections are: |  _Fixed_ |  Displays text as entered.  
---|---  
_Expression_ |  Indicates that the Help file to be displayed is stored in a string variable or simple expression.  
_Message Lib Ref_ |  Takes the message text from the indicated keyed file.  
  
#### **Note:**  
To set various **[Display](Query%20Header.htm#display)**, **[Options](Query%20Header.htm#options)** and **[Font/Color](Query%20Header.htm#font)** properties simultaneously on multiple query definitions in a library, see **[Query Bulk Edit](../../NOMADS%20Development/Maintaining%20Library%20Objects/Query%20Bulk%20Edit.md)**.

##  Row Display Option

The **Row Display Option** window is used to assign visual attributes, such as bold text, text color or highlight color, to a row in the query data list. The various visual attributes can be assigned based on specified conditions being met.

To assign visual attributes to a column, see **[Query Column Display](Query%20Definition.htm#querycolumndisplay)**.

#### **Note:**  
Display settings on individual columns will override Row Display settings.

**_Invoking Row Display Option_**

In **Query Header Definition** , on the **[Display](Query%20Header.htm#rowhighlight)** tab, click the link _Add (Edit) row display option_ (under the **Row Highlight** heading).

> _(The Row Display Option window was added in PxPlus 2021.)_

This window consists of the following:

**Display Method** |  The following methods are available to assign various visual attributes to a row: |  _None_ |  No display method. **_(Default)_**  
---|---  
_BoldText_ |  Display text in bold font.  
_Colors_ |  Set text and background colors.  
_HiLiteColor_ |  Set background colors.  
_TextColor_ |  Set text colors.  
_User_ |  Specify your own display strings.  
**Parameter Values** |  Specify the query fields that are to be used as part of a condition. **_To Add a Parameter:_** Click the _Add_ button (next to _Parameter Values_) and then click the drop-down arrow at the right of the newly-allotted parameter to select a field from the list, or define field characteristics (i.e. field number, offset, length) for manual fields. Formulas must be named to be included as additional parameters. See **[Query Formula Definition](Query%20Definition.htm#queryformula)**. Each parameter is assigned an ID (such as %1, %2, etc.) that is to be used in a condition rather than the actual name of the field. **_To Remove a Parameter:_** Select the parameter entry to be deleted and then click the _Remove_ button (next to _Parameter Values_). To select multiple entries, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display.  
**Condition** |  Set conditions for the assigned visual attribute(s). Conditions consist of PxPlus expressions that can be evaluated to zero/non-zero, but using the ID placeholder in the place of a field name; e.g. %1="Y". **_To Add a Condition:_** Click the _Add_ button (below _Condition_ grid) and then enter the condition. Multiple conditions can be defined, each with its own assigned display setting (i.e. color, image, etc.). Conditions are evaluated in the order in which they appear until a condition evaluates as true (i.e. non-zero). This means that if two conditions are set, %1<10 and %1<100, then values less than 10 will be assigned the first display setting, and values from 10 to less than 100 will be assigned the second display setting. Values that fall outside of the range of the specified conditions may or may not have an assigned display setting. To assign a setting to these values, simply add a blank condition at the end and assign a display setting. Otherwise, no display setting will be assigned, and default text and color will be used for these values. Use the Move Up/Move Down buttons (below _Condition_ grid) to change the order of the conditions. **_To Remove a Condition:_** Select the condition entry to be deleted and then click the _Remove_ button (below _Condition_ grid). To select multiple entries, use Shift-Click (consecutive selections) or Ctrl-Click (random selections). Prior to deleting, a message will display.  
_Color_ |  **_(Display Method is Colors, HiLiteColor or TextColor)_** To assign a color to a condition, click the dotted button at the right of the Color cell to launch the **[Color Selections](../../Appendix/Color%20Selections.md)** window.

#### **Note:**  
Selecting _Default_ (i.e. no color) is a valid selection.  
  
_Display String_ |  **_(Display Method is User)_** Display strings allow greater flexibility when assigning display attributes for particular conditions; e.g. you can mix bold text and background color. Display strings are PxPlus expressions; therefore, select the _Exp_ check box and enter the expression to use. **_Example:_** '_COLOR'("Light Yellow")+'BB'

#### **Note:**  
Be sure to use placeholder IDs rather than field name variables in your expression, if required.  
  
You can also create your own display methods by creating your own display class. The existing methods are in the ***obj/qrycoldsp** class. Create your own class and inherit the ***obj/qrycoldsp** class in yours by using **LIKE "*obj/qrycoldsp"** in its definition. Then incorporate your new methods. Set **[%NOMADS'Query_ColumnDisplay$](Designing%20and%20Using%20the%20Query%20Subsystem.htm#querycoldis)** to the name of your class, and your new methods will become available.

## Row Display Examples

Below are examples of setting up row display scenarios:

**_Example 1:_** Your query has a BALANCE column. Based on its value, you want the row to display using Red text if the value of BALANCE is negative and Green text if the value is 10000 or greater. The remaining rows are to display using the default text color. |  **_To do this:_** Assign _TextColor_ as the _Display Method_. The conditions are based on the BALANCE column; therefore, select BALANCE from the drop-down list of _Parameter Values_. It is assigned an ID of %1. Then create two _Conditions_ : %1<0 %1>=10000 For the first _Condition_ , assign Light Red as the _Color_ , and Dark Green for the second _Condition_.  
---|---  
**_Example 2:_** Your query has a CUSTOMER_CLASS$ column. You want to display a record in **bold text** if CUSTOMER_CLASS$ contains the value "VAR". |  **_To do this:_** Assign _BoldText_ as the _Display Method_. The condition is based on the CUSTOMER_CLASS$ column; therefore, select CUSTOMER_CLASS$ from the drop-down list of _Parameter Values_. It is assigned an ID of %1. Then create the _Condition:_ %1="VAR"  
  
##  Build Return Value

The **Build Return Value** window is invoked by clicking the _Build Return Value_ link on the **Query Header Definition[Options](Query%20Header.htm#returnvaluehead)** tab (under the **Return Value** heading). It is used for defining the **_Return Value_** (value to be returned when a record is selected).

> #### **Note:**  
When working in this window, you **_cannot_** use external keys or functions in your expression. They **_must_** be entered directly into the **Return Value** input field.

This window consists of the following:

**Field Definition** |  |  _File_ |  Name of the file or table to be used in building the return value. Click the drop-down arrow for a list of the main and link files used in the query. If the file is not maintained in the data dictionary, you must define the data fields manually. See **Manual Field Definition** below, as well as **[Field Definition](Query%20Definition.htm#fielddefinition)**.  
---|---  
_Elements_ |  List of elements for the selected file.  
_Selected_ |  List of elements that comprise the return value.  
_Add_ |  Adds an item from the _Elements_ list to the _Selected_ list.  
_Remove_ |  Removes a _Selected_ item.  
**Manual Field Definition** |  |  _Field No._ |  Ordinal position/sequence number of the field to be displayed in this column. The first field is number 1. If your manual file has an external key, define it as field #0 _(zero)_.  
---|---  
_Offset  
Size_ |  Use _Offset_ and _Size_ to define sub-strings. The first character of a string has an _Offset_ of 1. _Size_ indicates the number of characters in the sub-string.  
**Type** |  Select a field type: _String_ or _Numeric_.  
_Add_ |  Adds the manual field definition to the _Selected_ list.
