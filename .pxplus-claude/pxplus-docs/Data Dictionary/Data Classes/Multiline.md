# Data Classes

**Multi-Line Data Class** |  **__**  
---|---  
  
When creating or editing a data class for a _Multi-Line_ control type, **Data Class Definitions** maintenance displays the following:

> #### **Note:**  
Properties marked with an *****  _(asterisk)_ can be **_dynamic_**. Expressions that come from a data class **_must_** be global variables. See **[Dynamic Control Properties](Dynamic.md)**.

The following tabbed panels are available: **[Display](Multiline.htm#display)**, **[Attributes](Multiline.htm#attributes)**, **[User Aids](Multiline.htm#useraids)**, **[Validation](Multiline.htm#validation)** and **[Query](Multiline.htm#query)**.

_Class Name_ |  Key to the data classes file  _(providex.dcl)_. When entering a new data class name, spaces are **_not_** allowed. Maximum length is 30 characters. Click the Query button _(binoculars)_ for a list of defined data classes (if any). Click the Browse buttons to browse to existing data classes. Click the Copy Class button to copy an existing data class to a new data class. If unsaved changes are detected when selecting these buttons, a message will display to save the changes. If a data class with the _Class Name_ "Email" or "URL" (case insensitive) is assigned to a data dictionary field, the input entered for the field will be validated as either an email address or URL on a generated Webster+ HTML page. See **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**. _(First/Last Class browse buttons were added in PxPlus 2019.)  
__(Email and URL input validation for generated Webster+ HTML pages was added in PxPlus 2021 Update 1.)_  
---|---  
_(Add/Edit Notes)_ |  **_(Available when a new or existing data Class Name is entered or selected)_** Button used to add (or edit) notes for a new or existing data class. Maximum 1024 characters. The button's appearance and tooltip change to indicate that a note was added for the data class. _(The Add/Edit Notes button was added in PxPlus 2022.)_  
_(Copy Class)_ |  **_(Available when an existing data Class Name is selected)_** Button used to create a new data class by copying the settings from an existing data class. Once it is created, **_the new data class must be saved_** , as the Copy process does not do this. _(The Copy Class button was added in PxPlus 2019.)_  
_Last Class Change_ |  This information is updated automatically whenever a change is made to the data class definition. _(Last Class Change was added in PxPlus 2023.)_  
_Control Type_ |  Default control type used to represent the data that belongs to your defined data class. Click the drop-down arrow for a list of selections: _Multi Line, Drop Box, List Box, Radio Buttons, Check Box_. (Default is _Multi Line_.) The control type lets the NOMADS **[Panel Designer](../../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** and **[File Maintenance Generator](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** know which type of control to use for representing the data element.  
_Description_ |  Generic description of the data class (_Fixed_ value, _Expression_ or _Message Library Reference_). This will be copied to the data dictionary when the data class is applied to an element. See **[Element Description](../Data%20Dictionary%20Maintenance/Element%20Description.md)**.  
_*Dynamic_ |  For new data classes created **_in PxPlus 2018_** , this check box is selected by default. For data classes created **_prior to PxPlus 2018_** , this check box is **_not_** selected by default. Select this check box to set dynamic control properties to _Dynamic_ automatically when the data class is entered for a control in the Panel Designer. If _Dynamic_ is **_not_** selected, dynamic control properties must be set to _Dynamic_ manually after entering the data class for a control. See **[Dynamic Control Properties](Dynamic.md)**. _(The Dynamic check box was added in PxPlus 2018.)_  
_Internal Data Type_ |  Internal format of the data when manipulated by a program, either _String_ or _Numeric_. (Default is _String_.)  
_Internal Size_ |  Maximum size of the stored data element: If the _Internal Data Type_ is for a **_String_** variable, the _Internal Size_ value will define the maximum string length. If the _Internal Data Type_ is for a **_Numeric_** variable, enter _nnn.dd**where** nnn_ is the total number of digits (not including the decimal) and _dd_ is the number of digits after the decimal (i.e. the **[PRECISION](../../directives/precision.md)** of the number). **_Example:_** 6.2: 6 represents the total length of the field (excluding explicit signs and decimals, where applicable), and 2 represents scaling factor or number of decimal places.  
**Display****_( * indicates_ a _Dynamic property)_**  
**Properties** |  |  _Multi-Line Width_ |  Width of the control in number of columns - numeric expression. Format mask is ##0.00 and valid entries are 0 to 255.  
---|---  
_Multi-Line Height_ |  Height of the control in number of lines - numeric expression. Format mask is ##0.00 and valid entries are 0 to 240.  
  
_(Multi-Line Width and Height were added in PxPlus 2021.)_  
  
***Initial Value** |  Value to be loaded when the Multi-Line is drawn (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
***Input Length** |  Maximum input characters (_Fixed_ or numeric _Expression_). If no _Input Length_ is entered and the **[Input Format](Multiline.htm#inputfmt)** field is blank, the _Input Length_ will be set automatically when saving a new data class: If the _Internal Data Type_ is for a **_String_** variable, the _Input Length_ will be equal to the **[Internal Size](Multiline.htm#internalsz)** value. If the _Internal Data Type_ is for a **_Numeric_** variable, the _Input Length_ will be set to the integer value of the _Internal Size_ field. If the _Internal Size_ value includes a decimal (e.g. 6.2), the _Input Length_ value will increase by 2 (e.g. 8) to allow for the decimal and the negative sign. _(The automatic setting of the Input Length value was added in PxPlus 2023 Update 1.)_  
_Implied Decimal Point_ |  Determines implied decimal support for numeric Multi-Lines. Click the drop-down arrow for a list of selections: |  _Default_ |  NOMADS uses the PxPlus setting for the **['+I'](../../mnemonics/+i.md)** or **['-I'](../../mnemonics/+i.md)** mnemonic to enable/disable implied decimals for all Multi-Lines, system wide.  
---|---  
_Never_ |  Disable implied decimals. NOMADS displays the value starting at the far left of the decimal point (i.e. 100.00).  
_Always_ |  Enable implied decimals. NOMADS displays the value starting from the far right of the decimal (i.e. 1.00).  
_*Empty Value_ |  Text to display if null input (_Fixed_ value or an _Expression_). _(Support for Empty Value to be an expression was added in PxPlus 2018.)_  
***Input Format** |  Format mask for the Multi-Line (_Fixed_ or string _Expression_). |  _Separator_ |  Delimiter character. Click the drop-down arrow for a list of selections.  
---|---  
  
#### **Note:**  
When defining a Multi-Line **_with a height greater than one_** , it is strongly advised to use a different Separator character, rather than the <Std> default, as the <Std> default can also be translated as a field separator when the user presses Enter to add another line during data entry.

_(Separator was added in PxPlus 2018.)_  
  
_Numeric_ |  Value for the control is returned in a numeric variable.  
***Visual Class** |  Assign visual class to the control. See **[Visual Class Assignment](../../NOMADS%20Graphical%20Application/NOMADS%20Development/Maintaining%20Library%20Objects/Visual%20Class%20Assignment.md)**.

#### **Note** :  
Visual class names that begin with an *****_(asterisk)_ are pre-defined visual classes used by PVX Plus and may be subject to change without notice.

_(added in PxPlus 2018)_  
***iNomads Class** |  The iNomads class contains class attribute references used when defining the control in the HTML code generated in iNomads. An iNomads class reference must start with an alpha character (A-Z or a-z), followed by any combination of A-Z, a-z, 0-9, underscore or dash. Multiple references may be entered, separated by a space. For a list of pre-defined iNomads classes, see **[iNomads Classes](../../iNOMADS/iNomads%20Classes.md)**. _(added in PxPlus 2018)_  
**Attributes****_( * indicates_ a _Dynamic property)_**  
**Attributes** |  |  _Auto Tab Skip_ |  Control is skipped when tabbing forward but is still accessible via Shift - Tab or the mouse.  
---|---  
_Initially Disabled_ |  Multi-Line is displayed but is grayed out. It is not accessible to the user for input.  
_Initially Hidden_ |  Multi-Line is not displayed when the panel is drawn.  
_Locked_ |  User cannot change the Multi-Line's data. Associated query button is disabled. Users can still tab into the Multi-Line and highlight existing text (unlike when the Multi-Line is disabled). This is useful when users need to copy and paste (e.g. copy an address or name into a Word document).  
_PermaLock_ _/Query Input_ |  Multi-Line is permanently locked. Associated query button is enabled. Forces input through the query only. _(added in PxPlus 2018)_  
_Signal On Exit_ |  A signal is generated when focus leaves the control whether the selection or value has changed or not. NOMADS will execute the On Change logic.  
_Signal All Chg (Auto)_ |  A signal is returned on any changes in the control.  
_Signal When Full_ |  Generates a signal upon maximum input length. NOMADS will execute the On Change logic for the control. _(added in PxPlus 2018)_  
_Signal To/From Null_ |  Generates a signal when the Multi-Line value changes from null to non-null or vice versa. Triggers On Change logic without focus leaving the control.  _(added in PxPlus 2018)_  
_Center Text_ |  Centers the input.  
_Right Justify Text_ |  Text is right-aligned in the Multi-Line input field.  
_Numeric_ |  Value for the control is returned in a numeric variable.  
_Password_ |  Password entry displays a **$**  _(dollar sign)_ as substitute for each character entered.  
_Strip Trailing Spaces_ |  Strips trailing spaces when reading/writing data for the control.  
_Uppercase_ |  Converts text from lowercase to uppercase automatically  
_Borderless_ |  Multi-Line is drawn with no border or frame.  
_Tab Support_ |  Supports the use of the Tab key in the Multi-Line input region.  _(added in PxPlus 2018)_  
_Append Text_ |  Edit mode. Append to the end of existing text.  
_Ignore Change Flag_ |  Select this check box when you do **_not_** want the NOMADS **[CHANGE_FLG](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#reserved)** variable to be updated when the control value is changed _(added in PxPlus 2017)_  
_Enable Scrolling_ |  Allows the control to scroll in a resizable/scrollable dialogue box.  
_Reverse Input_ |  Support for Arabic characters (right to left entry).  
_Auto Fill_ |  Select this check box if you want to set up the _Auto Fill_ feature, which completes the entry of a Multi-Line control based on the matches available from a pre-defined query. _(added in PxPlus 2018)_  
  
Additional check box options are: |  _Must Match_ |  **_(Available when Auto Fill check box is selected)_** When selected, forces the entry to match an entry from the pre-defined query.  
---|---  
_Not Empty_ |  **_(Available when Must Match check box is selected)_** When selected, the Auto Fill input cannot be left empty. A value must be specified.  
_Rich Text Input_ |  Use Rich text control to enable RTF data and user formatting. _(added in PxPlus 2018)_  
_Transparent_ |  Multi-Line background and border are transparent; i.e. the window contents behind the Multi-Line show through. _(added in PxPlus 2018)_  
_Spell Check_ |  Select this check box to enable spell checker for the Multi-Line. If not set, the system-wide **[AutoSpellCheck](../../mnemonics/option.htm#spellcheck)** setting will be in effect. The spell checker uses a wavy red underline to flag words that appear misspelled or duplicated. Words that are **_all_** uppercase are **_not_** spell checked. This option is ignored for Multi-Lines that are defined as _Uppercase_ or are used for Arabic (right to left) input when the _Reverse Input_ check box is selected. _(added in PxPlus 2019)_  
_Scrollbars (if required)_ |  Scrollbar(s) to display when the height of the Multi-Line is **_greater_** than one line. Selection options are _Vertical (default), No scrollbar, Horizontal, Both scrollbars_. _(added in PxPlus 2018)_  
**Other** |  |  _Object Persistence_ |  Sets **[Object Persistence](../../NOMADS%20Graphical%20Application/Panel%20Designer/Resizing%20and%20Persistence/Object%20Persistence.md)**. _(added in PxPlus 2018)_  
  
Click the drop-down arrow for a list of selections: |  _Default_ |  Set via global variable  
---|---  
_Always_ |  **_On_** , overriding global activation  
_Never_ |  **_Off_** , overriding global activation  
_*User Tag Field_ |  For controls, data/tag field that can be used to pass information on such things as formatting, error messages or validation rules. Field contents are placed in a variable using the control name with a .TAG$ extension.  
_Alt-Key_ |  Hot key for the control. Click the drop-down arrow for a list of selections. _(added in PxPlus 2018)_  
**User Aids****_( * indicates_ a _Dynamic property)_**  
***Help Reference** |  |  _Type_ |  Click the drop-down arrow to select either _Internal_ or _External_ help reference: |  _Internal_ |  Application supplied message text (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
---|---  
_External_ |  Standard Windows help system consisting of a help file name and an optional keyword or reference number (_Fixed_ or _Expression_).  
***Floating Tip** |  Mouse pointer message for the control (_Fixed_ value, string _Expression_ or _Message Library Reference_). You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** Multi-Line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The **Floating Tip** drop box and Multi-Line input cannot be changed once an [**HTML**](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.htm#tiptype) tip has been defined.  
  
***Message Bar** |  Text to be displayed in the panel's status bar when focus is on the control (_Fixed_ value, string _Expression_ or _Message Library Reference_).  
**Validation****_( * indicates_ a _Dynamic property)_**  
***Data Validation/Display Logic** |  **_(Available when Use Extended Validation check box is not selected)_** |  _Validator_ |  Name of validation program with an optional entry point label. See **[Format and Validation Logic](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Format%20and%20Validation%20Logic.md)**.  
---|---  
_Formatter_ |  Name of formatter program with an optional entry point label. See **[Format and Validation Logic](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Format%20and%20Validation%20Logic.md)**.  
_Rules_ |  Input validation range and/or values (comma-separated); e.g. A, C, R-T.  _Fixed_ value or string _Expression_.  
**Extended Validation** |  **_(Available when_ [Dynamic](Multiline.htm#dynamic)** ** _check box is selected)_** Extended Validation is used to provide additional table validation and allow access to data elements for creating _display-only_ Multi-Line controls when designing NOMADS panels. See **[Extended Class Validation](Extended%20Validation.md)**. |  _Use Extended Validation_ |  Select this check box to set up Extended Validation for the data class. This starts with specifying a _Table_ , which will then enable other Extended Validation properties.

#### **Note:**  
When using Extended Validation, the _Validator_ , _Formatter_ and _Rules_ properties are disabled.  
  
---|---  
_Table_ |  **_(Available when Use Extended Validation check box is selected)_**  
  
Name of the data table/file to use for the validation. When a valid table/file is entered, the _Key_ field is populated. Click the Query Table View button _(magnifying glass)_ for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**. Click the Query button _(binoculars)_ for a query view of tables by table name. For information on using the query features (i.e. search, sort, filter, etc.), see **[Run-Time Query](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.md)**.

#### **Note:**  
If the _Table_ is changed or removed for the data class, the data class must be reapplied for associated Multi-Line controls. See **[Reapply Data Class](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#reapply)**.  
  
_Key_ |  **_(Available when a Table is selected)_**  
  
Key definition to use to verify the value entered. Click the drop-down arrow for a list of Keys defined for the table. Defaults to the Primary key when a _Table_ is entered.

#### **Note:**  
If the _Key_ is changed or removed for the data class, the data class must be reapplied for associated Multi-Line controls. See [**Reapply Data Class**](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#reapply).  
  
_Descriptive Field_ |  **_(Available when a Table is selected)_**_  
  
_ Specify a descriptive field (either _Fixed_ or _Expression_) to allow it to be available when creating display-only Multi-Line controls in the NOMADS Panel Designer. See **[Extended Class Browse](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Extended%20Class%20Browse.md)**. |  _Fixed_ |  Click the drop-down arrow to select from a list of **_string_** elements in the selected _Table_. This list includes numeric elements (if defined), which display either as **=STR(**_value:_ "_format_ "**)** or **=STR(**_value_**)** , depending on whether a _Display_ format mask was defined for the numeric element in the Data Dictionary. **_Examples:_** |  =STR(_ytdSales_ :"##,###,##0.00") |  With _Display_ format mask ##,###,##0.00  
---|---  
=STR(_QtyOnHand_) |  Without a _Display_ format mask  
  
If a numeric element is selected when the data class is saved, the _Descriptive Field_ drop box will show _Expression_ the next time this data class is accessed.  
  
_Expression_ |  Enter an expression that will be available when creating display-only Multi-Line controls. The expression will be evaluated while validating the data. Only variables available to the **%nomads'class** object may be used, which includes any columns from the Extended Validation _Table_ or global variables or any system wide variables. Constant string values may also be used. **_Examples:_** ClientCode$+': '+ClientName$ 'Date = '+DTE(InvoiceDate$:%Dl %Ml %D/%Y) SalespersonCode$+SEP+SalespersonName$ (see **Note**)

#### **Note:**  
If a **SEP** is included in an expression, it will insert another line in the display-only Multi-Line control, which will require a _Height_ setting **_greater_** than 1.  
  
If entering an expression that includes columns from the selected _Table_ , the _Populate All Fields_ check box **_must_** be selected.  
  
_(The ability to use numeric elements and specify an Expression was added in PxPlus 2020.)_  
  
_Populate All Fields_ |  **_(Available when a Descriptive Field is entered or selected)_** Select this check box to allow **_all_** data elements in the selected _Table_ to be available when creating display-only Multi-Line controls in the NOMADS Panel Designer.  
_Error if Invalid_ |  **_(Available when a Table is selected)_** **_(Optional)_** Enter an error message to display if the value entered fails validation (i.e. not found in the table). Click the Query button _(binoculars)_ to select an existing message from the *MSGLIB message library. If no error message is specified _(default)_ , the error code FW_NOTFOUND will be used, which displays the following message: "_value$_ is not a valid entry. No corresponding record was found in the system."  
_Logic if not found_ |  **_(Available when a Table is selected)_** **_(Optional)_** Enter the logic to execute (using the **[EXECUTE](../../directives/execute.md)** directive) if the value entered is not found instead of displaying an error message (e.g. logic to allow a new value to be defined if it cannot be found).  
  
_(Extended Validation was added in PxPlus 2019.)_  
  
**Query****_( * indicates_ a _Dynamic property)_**  
***Query Type** |  Type of query to associate to the control: _Panel, Query Program, Non-Query Logic, Spinner Controls_. Valid formats include a NOMADS query object or query list, a custom query panel, or user-supplied query program. Depending on the _Query Type_ selected, different information is entered. For an explanation of each type and the information to enter, see **[Query Type](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)**.

#### **Important Note** :  
Query buttons are only drawn if the associated Multi-Line is **_one line high_**.  
  
***Panel Information** |  **_(Applicable when Query Type is Panel)_** For an explanation of the information to enter, see **[Query Type: Panel](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#panel)**. The **[Define](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#define)** button uses the _Panel_ name to either create a new or edit an existing query definition. _(The Define button was added to Data Class Definitions maintenance in PxPlus 2023 Update 1.)_  
***Query Program** |  **_(Applicable when Query Type is Query Program)_** For an explanation of the information to enter, see **[Query Type: Query Program](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#queryprogram)**.  
***Non-Query Logic** |  **_(Applicable when Query Type is Non-Query Logic)_** For an explanation of the information to enter, see **[Query Type: Non-Query Logic](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#nonquerylogic)**.  
***Spinner Controls** |  **_(Applicable when Query Type is Spinner Controls)_** For an explanation of the information to enter, see **[Query Type: Spinner Controls](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#spinner)**.  
***Query Button Options** |  **_(Available when Query Type is Panel, Query Program or Non-Query Logic)_** Options that can be set to refine the appearance of the query button for the Multi-Line. For an explanation of these options, see **[Query Button Options](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#options)**.  
_Popup Menu_ |  Button that is used to assign a popup menu to a data class (_Fixed_ value or _Expression_ , to be evaluated at run time when the popup signal occurs). A check mark displayed on the button indicates that a popup menu is currently assigned to the data class. This button invokes the **[Assign Popup Menu](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/Applying%20a%20Popup%20Menu.md)** window for assigning _Prior Popup_ logic, a pre-defined popup object or user-defined program. If selected, _Prior Popup_ logic will be executed before the popup menu is displayed. If _On Select_ logic exists for the control with the popup menu, this will be triggered before the popup event.  
  
Select the _Panel_ option in the **Assign Popup Menu** window to display a pre-set list of popup objects available for the highlighted library. The _Program_ option is used to add a user-defined program. This can be either a _Fixed_ value or an _Expression_ to be evaluated at run time when the popup signal occurs.  
_Write_ |  Adds a new data class definition or updates an existing definition.  
_Delete_ |  **_(Available when an existing data class is selected)_** Removes the selected data class definition. Before proceeding, a message asks to confirm the deletion, as deleting a data class in use may cause issues.  
_Clear_ |  Clears the current data class definition to allow you to define a new data class or select an existing definition.  
_Exit_ |  Closes **Data Class Definitions** maintenance without saving any changes.  
  
_(The User Aids tab was added in PxPlus 2018.)_
