# Data Dictionary Maintenance   
  
**Element Description** |  **__**  
---|---  
  
The **Element Description** window is used to add, edit, copy and delete a data element for a selected table. To make bulk changes to multiple data elements in the PxPlus data dictionary and apply the changes to selected tables, use the **[Bulk Edit Data Elements](Bulk%20Edit%20Elements.md)** utility.

After a table is entered or selected on the Data Dictionary Maintenance **[Main Panel](Overview.htm#mainpanel)**, click the **[Elements](Overview.htm#elements)** tab. Invoke the **Element Description** window by clicking the button in the _Dtl_ column of the **Data Elements** grid.

> This window is divided into four tabbed folders - **[Display](Element%20Description.htm#Mark5)**, **[User Aids](Element%20Description.htm#Mark2)**, **[Query](Element%20Description.htm#Mark3)** and **[ODBC](Element%20Description.htm#Mark4)** \- for defining the attributes of an element.

_Name_ |  Unique name of the element - this is the _variable name_ used in the primary IOList. Naming conventions for variables apply. Select from a drop-down list of data elements defined in the Data Dictionary for the selected table or type a new element name. A new element name must start with an alpha character (A-Z or a-z) or an**_**  _(underscore)_ , followed by any combination of A-Z, a-z, 0-9 or **_**  _(underscore)_. If an element name contains a **.**  _(dot)_ , a message will display, warning that column names containing a _dot_ may not be ODBC-compliant.

#### **Note:**  
When a new element name is entered, it will be checked against the **[Reserved Words](../../Reserved%20Words.md)** list to determine if it is restricted for use in the Data Dictionary. If it is found, a warning message will display.  
  
_(User Reserved Words Maintenance was added in PxPlus 2020.)_

Click the Browse buttons to browse to existing elements. Click the Copy Element button to copy an existing element to a new element. If unsaved changes are detected when selecting these buttons, a message will display to save the changes. The **[Update Global Dictionary Elements in other Files](Element%20Description.htm#Mark9)** button is used to update other data files in the data dictionary when an element in the Global Dictionary has been changed. It is possible to restrict element names. To exclude names, such as SQL keywords, create a list of rejected names (one item per line) in the text file _dde_exclude.txt_ located in the ***ext** directory; i.e. _PathToPxPlus_ _/lib/_ext/dde_exclude.txt_. If you choose your own file/location for this list, the path must be loaded into the **%DDE_Exclude$** variable. When this file is present, new names will be checked against the restricted list and rejected if found. No action is taken for elements that already exist. Text in this file is treated as case insensitive and spaces are stripped. If the _Name_ field of an **_existing_** element is changed and that element name does not exist, a message will display. Responding _Yes_ renames the current element. Responding _No_ creates a new element. Responding _Cancel_ puts back the original _Name_. Save any changes by clicking the _OK_ or _Apply_ buttons. _(First/Last Element browse buttons were added in PxPlus 2019.)  
(The changed Name message was added in PxPlus 2020.)_  
---|---  
_(Copy Element)_ |  **_(Available when an existing Element Name is selected)_** Button used to create a new element by copying the settings from an existing element. Once it is created, **_the new element must be saved_** , as the Copy process does not do this. _(The Copy Element button was added in PxPlus 2014.)_  
_(Update Global Dictionary Elements in other Files)_ |  **_(Available when an existing Global Dictionary Element Name is selected)_** Button used to invoke the **[Update Global Dictionary Elements](Update%20Global%20Dictionary%20Elements.md)** window **_only_** if both of these conditions are met: |  1. |  The element being updated is a **[Global Dictionary](Overview.htm#global)** element. **_AND_**  
---|---  
2. |  Elements with the same _Name_ and _Type_ as the global element exist in other data files. If no such elements exist, a message will display, and the **Update Global Dictionary Elements** window will not be invoked.  
  
This button is disabled while a global element is being edited. When the element is recalled, this button is enabled.

_(The Update Global Dictionary Elements in other Files button was added in PxPlus 2019.)_  
  
_Class_ |  Enter a data class to load the information from the data class definition into the element's fields. See **[Data Classes](../Data%20Classes/Overview.md)**. The class is also used to associate a control type (i.e. **[Multi-Lines](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)**, **[Drop Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[List Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**, **[Radio Buttons](../Data%20Classes/Radiobuttons.md)** and **[Check Boxes](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.md)**) with the element for use within NOMADS and its sub-systems, as well as in **[iNomads](../../iNOMADS/iNOMADS%20Introduction.md)**. To enter a data class, use any of the following methods:

  * Click the Query button _(binoculars)_ to select from a list of predefined data classes (if any).
  * Type the name of an existing data class.
  * Create a new data class by clicking the _Data Class Maintenance_ button to launch **[Data Class Definitions](../Data%20Classes/Overview.htm#Mark1)** maintenance.

If the data class is changed, a message will display prior to overwriting any information. If the data class assigned to the element has been deleted in **Data Class Definitions** maintenance, the text **** Class not on File **** will display. _(The dark red text indicating a deleted Data Class was added in PxPlus 2021.)_  
_(Data Class Maintenance)_ |  Button used to launch **[Data Class Definitions](../Data%20Classes/Overview.htm#Mark1)** maintenance for creating or editing a data class.  
_(Reapply Data Class)_ |  **_(Available when a Class is entered)_** Button used to update element fields with current information from the selected data class. A message will display **_only_** if element fields are found that are populated with existing values **_different_** from the values in the selected data class. Clicking _Yes_ will overwrite existing values for the listed element fields. Clicking _No_ will **_not_** overwrite existing values for the listed element fields but will update element fields not currently populated. Clicking _Cancel_ will not make any changes.

#### **Note:**  
If a _Class_ is entered for the element, changes to that class will not be reflected in the element until the _Reapply Data Class_ button is selected.  
  
Care should be taken when using the _Reapply Data Class_ button or changing the _Class_ entered for the element, as this will overwrite any existing values.

_(The Reapply Data Class button was added in PxPlus 2018.)_  
_Alt. Name_ |  Alternate name for use in the alternate IOList (for legacy programs). If an alternate IOList is defined, then you must define an alternate name for all elements in the file. The alternate name must be a variable name (e.g. A$ or A$[1]). Supports only fields that use the _Delimited_ format mask. See **[Format Mask](Element%20Description.htm#Mark5)**.  
_DB Null if Empty_ |  **_(Not Applicable when_ [File Type](Overview.htm#file_type) _is a PxPlus Native File)_** Check box to indicate that a null value can be returned for the element when interacting with a Prefix or Link file created from an external database. See **[Using External Databases to Create a Data Dictionary](../Introduction.htm#external_db)**. _(The DB Null if Empty check box was added in PxPlus 2023.)_  
_External Only_ |  Check box to indicate that the element forms part of an external key and is not duplicated in the data portion of the record. This check box is enabled only when the **Display** tab is selected. **_Example:_** Key: CST_ID$ Data: CST_NM$, CST_ADDR$, CST_PHONE$ In this case, CST_ID$ forms the key and is not duplicated in the data portion of the record.  
_Required_ |  Check box to indicate that the element is a **_required_** field and must contain data before the record can be written in File Maintenance.  
_Upper Case_ |  Check box to indicate that the data should always be in uppercase letters. Used by NOMADS sub-systems.  
_Read Only_ |  Check box to indicate that the element is designated as read only or locked. Used by NOMADS sub-systems. _(The Read Only check box was added in PxPlus 2021.)_  
**Display**  
**Properties** |  |  _Type_ |  Field indicates whether the element is _Numeric_ or _String_.  
---|---  
_Format Mask_ |  Options that define the format for writing the data field to the file. See **[Format Mask Options](Element%20Description.htm#Mark1)**. |  _Delimited_ |  Delimited by field separator. Sample IOL format: DELIMITED$, NUMERIC_DLM  
---|---  
_Fixed_ |  Padded to the specified length when written but stripped of trailing spaces when read. Sample IOL format: FIXED$:[CHR(7)], NUM_FIXED:[NUM(7)]  
_Padded_ |  Padded with spaces based on the defined length. Numerics are padded with leading zeros. Sample IOL format: PADDED$:[LEN(6)], NUM_PADDED:[NUM(7)]  
_Substring_ |  Similar to _Fixed_ , but if the stored data is shorter than the specified length, a **READ** will return up to but not including the field separator. (Used in conjunction with Last Substring.) This format is often used for flag fields. Sample IOL format: SUBSTRING$:[LEN(5,SEP=SEP)]  
_Last Substring_ |  Similar to _Fixed_ , but delimited by field separator. Sample IOL format: LAST_SUBSTRING$:[LEN(SEP,SIZ=4)]  
_Binary Numeric_ |  Signed binary, maximum 6 bytes, no delimiter binary numeric. Sample IOL format: Binary_Num :[BIN(Length,Scale)]   
**_Example:_** Length=2 stores a value ranging from -32768 to +32767. Stores 1 as $0001$. Stores -1 as $FFFF$.  
_Decimal_ |  Maintains the sign, decimal is explicit, no delimiter. Sample IOL format: [DEC(Length,Scale)] e.g. Length=10.2   
Stores -1 as ^^^^^-1.00 (where ^ is a space). Stores 123.45 as ^^^^123.45 (where ^ is a space).  
_Decimal Delimited_ |  Maintains the sign, decimal is explicit, delimited (same as Decimal, but followed by a delimiter). Sample IOL format: [DEC(Length,Scale,SEP=SEP)]  
_Signed Fixed Numeric_ |  Maintains the sign, decimal is implied, no delimiter. Sample IOL format: [SGN(Length,Scale)] e.g. Length=10.2   
Stores -1 as 000000100-. Stores 123.45 as 000012345+.  
_Unsigned Integer_ |  Unsigned binary, maximum 6 bytes, no delimiter. Sample IOL format: [INT(Length,Scale)] e.g. Length=2 stores a value ranging from 0 to 65535. Stores 1 as $0001$. Stores 65535 as $FFFF$.  
**Short Description** |  Brief description of the element, which can be a _Fixed_ value, _Expression_ or _Message Library Reference_.  
**Default / Input Value** |  See **[Format Mask Options](Element%20Description.htm#Mark1)**.  
**Validation / Rules** |  See **[Format Mask Options](Element%20Description.htm#Mark1)**.  
**Print / Input Format** |  See **[Format Mask Options](Element%20Description.htm#Mark1)**.  
**User Defined Tag Field** |  See **[Format Mask Options](Element%20Description.htm#Mark1)**.  
**User Aids**  
**Help Reference** |  Help text to be launched when the user presses **Shift - F1**. Click the drop-down arrow for selections to access form fields for specifying the different definitions (either _External_ or _Internal_). |  _External_ |  Standard (default) help definition. This assigns a predefined help file that can be _Fixed_ text (string literal) or an Expression (or string variable). Specify the starting point in the help file by _Keyword_ or by _Reference_. The _Popup_ check box allows you to set the display to be a popup rather than an independent window.  
---|---  
_Internal_ |  Simplified help stored in the library file. This help consists of text only, _Fixed_ , Expression or _Message Library Reference_. Because the help text is preserved in the library itself, it eliminates the need to create separate help files.  
**Floating Tip** |  Mouse pointer message for the control (_Fixed_ value, string _Expression_ or _Message Library Reference_). You can customize the floating tip by adding a tip title, descriptive tip text and a hyperlink. These features enhance the visual display and functionality of the tip by providing users with much needed information at their fingertips. You can define either a _Standard_ tip or an _HTML_ tip that provides a simplified HTML Editor for customizing the tip text. To do this, click the button to the right of the **Floating Tip** multi-line input to invoke the **Define Info Tip** dialogue. See **[Defining an Info Tip](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.md)**.

#### **Note:**  
The Floating Tip drop box and multi-line input cannot be changed once an [**HTML**](../../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Defining%20an%20Info%20Tip.htm#tiptype) tip has been defined.

_(The Floating Tip option was added in PxPlus 2021.)_  
**Notes** |  A multi-line input control used for entering notes about the element. Press Enter to start a new line. Maximum 1024 characters. Alternatively, notes can be added or edited for an element by using the **[Add/Edit Notes](Overview.htm#notes)** button beside the **Data Elements** grid. _(Support for increasing input maximum was added in PxPlus 2022.)_  
**Query**  
_Query Type_ |  Type of query to associate to the control: _Panel, Program, Non-Query Logic, Spinner_. Depending on the _Query Type_ selected, different information is entered. For an explanation of each type and the information to enter, see **[Query Type](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#querytype)**. _(Support for Non-Query Logic was added in PxPlus 2018.)_  
**Panel/Program Attributes** |  **_(Available if Query Type is Panel or Program)_** |  _Panel_ |  Process a query panel (from the specified _Library_). Can be either a _Fixed_ value or an _Expression_ (evaluated at run time). See **[Panel Information](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#panel)**. The **[Define](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#define)** button uses the _Panel_ name to either create a new or edit an existing query definition.  
---|---  
_Program_ |  Execute a specified **[Query Program](../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Invoking%20a%20Query.htm#queryprogram)**. Can be either a _Fixed_ value or an _Expression_ (evaluated at run time).  
  
_(The Define button was added to Element Description in PxPlus 2023 Update 1.)_  
  
**Non-Query Logic** |  **_(Available if Query Type is Non-Query Logic)_** Select the type of logic (_Link, Perform, Call, Execute_ , etc.) and the program logic reference  _"program;label"_.  
  
**_Example:_**  
  
PERFORM  
"programs/browse;Browse_Directory" _(Support for Non-Query Logic was added in PxPlus 2018.)_  
**Spinner Attributes** |  **_(Available if Query Type is Spinner)_** **_(Numeric_** ** _Only)_** Associate a spinner control with the element in place of a query. Sets the Increment value for scrollbar movement, as well as the _Start_ (initial) and _End_ (maximum) values. **_Example:_** If _Increment_ = 1, _Start_ = 1, and _End_ = 9999, then the initial value would be 1, scrollbar movement would increase/decrease by 1 and the maximum would be 9999.  
**ODBC**  
**ODBC Hide/No Show Options** |  |  _Show Column_ |  **_(Default)_** Indicates no data suppression.  
---|---  
_Hide Column (Column is suppressed)_ |  Indicates that the field will not be presented to the user. Primarily used for filler values.  
_No Show (Value is not displayed)_ |  Indicates that the field name will be presented to the user; however, the data will never be returned.  
_Security_ |  Button used to set up and access the optional security system that controls user access to the system. See **[Security Manager](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)**.  
_Clear_ |  Button used to clear the current record and put focus on the _Name_ field.  
_Delete_ |  **_(Available when an existing element is selected)_** Button used to delete the selected data element. When selected, a message asks to confirm the deletion.  
_OK_ |  Adds or updates the current element, then closes the **Element Description** window. The new element is added to the bottom of the **[Data Elements](Overview.htm#grid)** grid. Use the _Move Up/Move Down_ buttons beside the grid to change the position of the new element. If saving changes to a **[Global Dictionary](Overview.htm#global)** element **_and_** elements with the same _Name_ and _Type_ exist in other data files, a message asks if you want to apply the same changes to the other elements. Responding _Yes_ invokes the **[Update Global Dictionary Elements](Update%20Global%20Dictionary%20Elements.md)** window for updating all or only selected elements. Responding _No_ does not change the other elements. _(Update Global Dictionary Elements was added in PxPlus 2019.)_  
_Cancel_ |  Closes the **Element Description** window without saving any changes and returns to the **Elements** tab.  
_Apply_ |  Allows you to consecutively insert or update multiple data elements to the Data Dictionary for the current table without having to exit the **Element Description** window. After entering all the details for the element being added or modified, select _Apply_. A message displays to confirm that the element has been added or updated. The **Element Description** window is then cleared, and you can add or modify another element. If saving changes to a **[Global Dictionary](Overview.htm#global)** element **_and_** elements with the same _Name_ and _Type_ exist in other data files, a message asks if you want to apply the same changes to the other elements. Responding _Yes_ invokes the **[Update Global Dictionary Elements](Update%20Global%20Dictionary%20Elements.md)** window for updating all or only selected elements. Responding _No_ does not change the other elements. New elements that are entered consecutively and then saved using the _Apply_ button are added to the bottom of the **[Data Elements](Overview.htm#grid)** grid in the same entry order. Use the _Move Up/Move Down_ buttons beside the grid to change the order of the elements. _(Update Global Dictionary Elements was added in PxPlus 2019.)_  
  
> #### **Note:**  
A Space-Padded format is also available for numeric table elements, which results in a non-delimited fixed-length numeric field padded with spaces on the left. It applies the existing **LEN(** **)** format. This type is **_not_** supported by the PxPlus SQL ODBC Driver, and it is only available in the Data Dictionary Maintenance window if the global variable %ALLOW_NON_ODBC_TYPE_LEN is set to non-zero.

## Data Storage Formats

**Data Storage Formats**  
---  
**String Formats** |  **IOL Format  
** _(l = length)_ |  **Size** |  **Dlm** |  **Sign** |  **Decimal** |  **Pad**  
_Delimited_|  |  Variable |  Y |  N/A |  N/A |  N/A  
_Fixed_ |  [**CHR**(_l_)] |  Fixed |  N |  N/A |  N/A |  Right/Space  
_Padded_ |  [**LEN**(_l_)] |  Fixed |  N |  N/A |  N/A |  Right/Space  
_Substring_ |  [**LEN**(_l_ ,**SEP=**_sep_ _$_)] |  Fixed |  N |  N/A |  N/A |  Right/Space  
_Last Substring_ |  [**LEN**(_sep_ _$_ , **SIZ=**_l_)] |  Fixed |  Y |  N/A |  N/A |  Right/Space  
  
**Data Storage Formats**  
---  
**Numeric Formats** |  **IOL Format _  
_**_(l = length, s = scale)_ |  **Size** |  **Dlm** |  **Sign** |  **Decimal** |  **Pad**  
_Delimited_|  |  Variable |  Y |  Explicit |  Explicit |  N/A  
_Fixed_ |  [**NUM**(_l_ ,_s_)] |  Fixed |  N |  None |  Implied |  Left/Zero  
Right/Zero  
_Padded_ |  [**NUM**(_l_ ,_s_)] |  Fixed |  N |  None |  Implied|   
_Substring_ |  [**NUM**(_l_ ,_s_)] |  Fixed |  N |  None |  Implied|   
_Last Substring_ |  [**NUM**(_l_ ,s,**SEP=**_sep_ _$_)] |  Fixed |  Y |  None |  Implied|   
_Signed Fixed Numeric_ |  [**SGN**(_l_ ,_s_)] |  Fixed |  N |  Explicit |  Implied |  Left/Zero  
Right/Zero  
_Decimal_ |  [**DEC**(_l_ ,_s_)] |  Fixed |  N |  Explicit |  Explicit |  Left/Space  
Right/Zero  
_Decimal Delimited_ |  [**DEC**(_sep_ _$_ , **SIZ=**_l_ ,_s_)] |  Fixed |  Y |  Explicit |  Explicit|   
_Binary Numeric*_ |  [**BIN**(_l_ ,_s_)] |  Fixed |  N |  Implied |  Implied |  Left/$00$  
_Unsigned Integer*_ |  [**INT**(_l_ ,_s_)] |  Fixed |  N |  N/A |  Implied |  Left/$00$  
  
**Examples _  
  
_(Space characters are represented by "^" and field delimiters by "|")**  
---  
**String Formats** |  **Length** |  **Stores null as** |  **Stores "abc" as *** |  **Stores "abcdef" as ***  
_Delimited_ |  5 |  **|** |  abc**|** |  abcdef**|**  
_Fixed_ |  5 |  **^^^^^** |  abc **^^** |  abcde  
_Padded_ |  5 |  **^^^^^** |  abc **^^** |  abcde  
_Substring_ |  5 |  **^^^^^** |  abc **^^** |  abcde  
_Last Substring_ |  5 |  **^^^^^|** |  abc **^^|** |  abcde**|**  
**Numeric Formats** |  **Length** |  **Stores 0 as *** |  **Stores -1.1 as *** |  **Stores 12345.678 as ***  
_Delimited_ |  6.2 |  0**|** |  -1.1**|** |  12345.678**|**  
_Fixed_ |  6.2 |  000000 |  000110 |  234567  
_Padded_ |  6.2 |  000000 |  000110 |  234567  
_Substring_ |  6.2 |  000000 |  000110 |  234567  
_Last Substring_ |  6.2 |  000000**|** |  000110**|** |  234567**|**  
_Signed Fixed_ |  6.2 |  00000+ |  00110- |  34567+  
_Decimal_ |  6.2 |  **^^** 0.00 |  **^** -1.10 |  Error #43  
_Decimal Delimited_ |  6.2 |  **^^** 0.00**|** |  **^** -1.10**|** |  Error #43  
|  **1 / 32767** |  **-1 / 65535**  
_Binary Numeric_ |  2 |  $0000$ |  $0001$ / $7FFF$ |  $FFFF$  
_Unsigned Integer_ |  2 |  $0000$ |  $0001$ / $7FFF$ |  $FFFF$  
  
##  Format Mask Options

The following _Format Mask_ options apply to key fields that are **_external only_** ; i.e. not found in the data portion of the record:

_Padded Key_ |  Field padded with spaces based on the defined length.  
---|---  
_Fixed Key_ |  Field padded to the specified length, unless it is the last key component. For redundant external key fields (i.e. fields that form both the external key, as well as part of the data portion of the record), define the format as it should be defined for the data portion. Depending on the format chosen, the format for the corresponding key field defaults to the following: |  **_Data Field Format_** |  **_Resulting Key Format_**  
---|---  
Delimited |  Fixed [**CHR(**_n_**)**]  
Fixed [**CHR(**_n_**)**] |  Fixed [**CHR(**_n_**)**]  
Padded [**LEN(**_n_**)**] |  Padded [**LEN(**_n_**)**]  
Substring [**LEN(**_n_**,SEP=SEP)**] |  Padded [**LEN(**_n_**)**]  
Last Substring [**LEN(SEP,SIZ=**_n_**)**] |  Padded [**LEN(**_n_**)**]  
_Length_ |  Set the maximum length of the data field. Numeric field lengths can be defined using implied decimal format. **_Example:_** 6.2: 6 represents total length of the field, including explicit signs and decimals, where applicable; 2 represents scaling factor or number of decimal places.  
_Occurs_ |  Dimension, if element represents an array (e.g. 1:3). If a single number (e.g. 3), represents a single element in the third position of an array (e.g. X$[3]) rather than the entire array.

#### **Note:**  
Arrays are **_not_** supported by the File Maintenance and Query utilities.  
  
**Default Value** |  Value to be loaded when the field is first initialized. Can be a _Fixed_ value, _Expression_ or _Message Library Reference_.  
**Validation** |  Comma-separated validation rules; e.g. 1-3,9 or Y,N,M. Can be _Fixed_ text or an _Expression_.  
**Print Format** |  Output format mask, either _Fixed_ text (string literal) or _Expression_.  
**User Defined Tag Field** |  Data/tag field used to pass information on such things as formatting, error messages and validation rules. Can be _Fixed_ text (string literal) or an _Expression_ (evaluated when the object is created). NOMADS places the contents of this field in a variable using the element name with a .TAG$ extension.
