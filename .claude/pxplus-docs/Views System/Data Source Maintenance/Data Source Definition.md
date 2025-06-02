# Views System  
  
**Data Source Definition Wizard**|   
---|---  
  
The **Data Source Definition Wizard** provides a simple six-step process that, when completed, creates a new data source definition. See **[Data Source Definition Wizard Steps](Data%20Source%20Definition.htm#steps)**.

From the data source definition, views can be created to display only selected data. The data source definition can be recalled in **[Data Source Maintenance](Overview.md)** and updated as needed.

_(The Data Source Definition Wizard was added in PxPlus 2021.)_

To invoke the **Data Source Definition Wizard** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Views_ category. Select _Data Source Wizard_.  
From **[Data Source Maintenance](Overview.md)** |  Click the _New Data Source_ tool bar button.  
  
##  Data Source Definition Wizard Steps

**[Step 1: Data Source](Data%20Source%20Definition.htm#step1)**

Specify the type and name of the primary data source to be accessed.

**[Step 2: Elements](Data%20Source%20Definition.htm#step2)**

Define the elements (columns) to include in the data source.

**[Step 3: Relationships](Data%20Source%20Definition.htm#step3)**

Define any relationship(s) between the primary data source and its related data sources.

**[Step 4: Logic Procedures](Data%20Source%20Definition.htm#step4)**

Specify logic to be performed in the data source definition.

**[Step 5: Group Assignment](Data%20Source%20Definition.htm#step5)**

Assign the data source definition to an existing group.

**[Step 6: Finish](Data%20Source%20Definition.htm#step6)**

Complete the Data Source Definition Wizard and save the data source definition. Before completion, review selections for previous steps and make any necessary changes.

## Welcome Panel

The **Welcome** panel provides general information about the **Data Source Definition Wizard** and includes a **_How to Define a Data Source_** link that launches PxPlus Help documentation.

> Click _Next_ to proceed to the first step. Each step in the wizard presents a panel made up of three main sections:

> These sections are explained below.

_Progress Bar_ |  Displays the six steps for defining a data source. A white step number against a dark red background indicates the current step being defined. Clicking on a step number goes directly to that step without having to select intermediate steps in order. This is useful when reviewing or changing previous selections before exiting the wizard. Keep in mind that certain steps may require data before advancing to subsequent steps.  
---|---  
_Work Area_ |  Body of the wizard panel and consists of fields used to process each step.  
_Navigation Bar_ |  Consists of buttons that are shown/hidden or enabled/disabled, depending on the step being defined: |  _(First browse button)_ |  Goes directly to **[Step 1: Data Source](Data%20Source%20Definition.htm#step1)**.  
---|---  
_Back_ |  Returns to the previous wizard panel.  
_Next_ |  Advances to the next wizard panel. If information is required before advancing to the next panel, a message will display.  
_(Last browse button)_ |  Goes directly to **[Step 6: Finish](Data%20Source%20Definition.htm#step6)**.  
_Finish_ |  Completes the **Data Source Definition Wizard** and saves the data source definition. See **[Step 6: Finish](Data%20Source%20Definition.htm#step6)**.  
_Cancel_ |  Closes the **Data Source Definition Wizard** without saving the data source definition.  
  
##  Step 1: Data Source

Specify the type and name of the primary data source to be accessed. Enter a description to identify the data source being defined.

> This panel consists of the following:

**Source Type** |  _Specify the type of data source to be accessed. Generally, a data source is a file or table but can also be a PxPlus object that adheres to a pre-defined interface standard. See_ **[Custom Data Source Objects](../Custom%20Data%20Source%20Objects/Overview.md)**. _Native PxPlus data files must contain embedded data dictionaries and can be identified by Logical Table Name or by physical path name. The Views System can also access external databases (e.g. ODBC, ADO, MySQL, Oracle and DB2). All data sources must have key definitions._  
---|---  
_(Source Type Drop Box)_ |  Click the drop-down arrow for a list of source types: _Logical File_ , _Physical File_ , _Data Base Table_ , _Source Object_.  
**Primary Data Source** |  **_(Required)_**_Specify the primary data source containing the data to be accessed._  
|  The fields displayed will vary depending on the _Source Type_ selected: |  **Source Type Selected** |  **Primary Data Source**  
---|---  
_Logical File_ |  |  _Logical File Name_ |  Specify the logical file name of the table defined in the data dictionary. Click the Query button to select from a tree view list of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
---|---  
_Physical File_ |  |  _File Path_ |  Path name of a PxPlus data file or prefix file reference to an external database table (ODBC, ADO, Oracle, MySQL or DB2). Click the Query button to specify a file name. PxPlus data files must have embedded dictionaries, and all files/tables must have keys defined.  
---|---  
_Data Base Table_ |  |  _Database Type_ |  External databases - ODBC, DB2, Oracle or MySQL. The _local_ designation supports a database on a WindX client.  
---|---  
_Database ID_ |  Database identifier. When a valid ID (Data Source Name) is entered, the _Table_ drop box will be populated.  
_Table_ |  Select from the drop-down list or enter a table name.  
_Keys_ |  Defines/updates the keys for the data source. When a new data source is being defined, the **Table Key Definition** window will display automatically. Once keys have been defined, they can be updated by selecting the double-right-arrow button. The **Define Primary Key** window displays automatically when defining/updating the contents of the _Keys_ field. If a Key is added or updated, the **Define Alternate Key** window will display automatically. The _Sort by_ column drop box provides a list of columns from which to select. The _Case_ column drop box provides selections for _Case Sensitive,_  _Use upper case_ or _Use lower case_. The _Sort Order_ column drop box provides selections for _Ascending_ or _Descending_.  
_Open Options_ |  Other connection options (PSWD=, USER=, etc.). Multiple options are separated by a **;**  _(semi-colon)_.  
_Source Object_ |  |  _Source Object Name_ |  Object name.  
---|---  
_Argument_ |  Argument containing the file/table identifier.  
  
#### **Note:**  
If the system accesses the external database using a prefix file and there is an entry in the prefix file for the table, select _Physical File_ as the **Source Type** and enter the file name used to reference the table as the _File Path_.  
  
**Descriptions** |  _Specify descriptions to identify the data source._  
_Data Source Description_ |  Displays a default (depending on the _Primary Data Source_ entered), which can be replaced with a unique description. Maximum 64 characters.  
_Long Description_ |  Enter additional text to identify the data source, if desired. This text also provides a default description for any new views created from the data source. Maximum 255 characters.  
  
##  Step 2: Elements

Define the elements (columns) to include in the data source.

> This panel consists of the following:

**Elements** |  _Each data source contains a list of selected elements (or columns). Elements represent true data fields from the source file or data that is derived from it (e.g. computational results). Anything that can be defined as an expression within PxPlus can become an element._ _The definition of an element includes a user-friendly description (used in displays), an identifier name (used as a column name for export purposes), and a source expression (used to derive the value)._  
---|---  
_Element Identifier_ |  Field or column name for an element (unique within the data source). Click the drop-down to select from a list of existing fields in the data source or enter a new name to create a user-defined element. The new name must begin with an alphabetic character, followed by alphabetic characters (A-Z), digits (0-9) or underscore (_). Maximum 30 characters.  
_Description_ |  Description to identify a data element. Maximum 64 characters. If the element comes directly from the primary data source, the description is automatically loaded but can be changed. If creating a user-defined element, enter a description.  
_Expression_ |  Expression that will be evaluated to derive the value for an element. Maximum 300 characters. An expression can be a simple variable name or a user-defined formula that uses existing fields in the data source to create a calculated element. For example, a new TotalOrders element may be created by adding two existing fields, ytdOrders+prvOrders. A new PriceDiscount element may be created by multiplying an existing field Price with a fixed numeric value, as in Price*.25.

#### **Note:**  
Only fields from the primary data source can be used in an expression.

Calculated items can also be created when defining a view. See **[Define Calculated Items](../View%20Maintenance/Define%20Calculated%20Items.md)**.  
_Length_ |  Maximum length of data to be returned for an element. Required for formulas. If empty, the length set in the data dictionary for the element will be used.  
_Class_ |  Name of the data class that was set in the data dictionary for an element, if applicable; otherwise, this will be blank and disabled.  
_Load All_ |  Loads all file elements for the selected data dictionary file/table into the grid, along with default values for _Description_ , _Expression_ , _Length_ and _Class_ , if applicable.  
_Clear All_ |  Clears all file elements from the grid. Prior to clearing the elements, a message will display.  
_Move Up  
Move Down_ |  Buttons used to rearrange the order of selected file elements within the grid.  
_Delete_ |  Button used to delete a selected file element from the grid.  
  
##  Step 3: Relationships

Define any relationship(s) between the primary data source and its related data sources. File link definitions previously created for the primary data source may also be selected, if applicable.

> This panel consists of the following:

**Relationships** |  _Each data source definition can contain a list of other data sources that may be accessed from its data. These relationships are basically defined by specifying a related data source, its sort key (or index) identifier, and an expression that, when evaluated, provides the range value for reading the key.  
  
The data key value must start with the value derived from the expression - this allows a one-to-one or a one-to-many relationship between each data source and its related data sources. The definition also specifies any "no data" logic to follow in case the related data is not found._  
---|---  
_(Select a Link Definition)_ |  **_(Available only if file link definitions for the primary data source exist)_** Button used to invoke the **Select a Link Definition** window. This window displays **_only_** if the primary data source is a data dictionary file/table **_and_** file link definitions were previously created in **[File Link Maintenance](../../Data%20Dictionary/File%20Link%20Maintenance.md)**. A list of related data sources linked to the data dictionary file/table is displayed. When a link definition is selected, its specifications are used to populate the _Relationship_ entry, which can then be modified if needed.  
_Linked Data Source_ |  Name of a pre-existing data source to be linked with the primary data source (i.e. you must define the data sources to be linked before you can include them as part of a relationship).  
_Link Name_ |  Descriptive relationship name. Loads automatically with the description of the linked data source (but it can be changed). Maximum 64 characters. Must be unique.  
_Item Prefix_ |  Descriptive prefix to be added (optionally) to the related data source element name. Maximum 10 characters. Be aware that when a relationship includes subordinate nested relationships, the prefix cascades down to those relationships as well. This results in compound prefixes for elements in subordinate relationships - a consideration since each prefix becomes part of the column name when selected in a view (and since column names are limited to 60 characters).  
_Access Key_ |  Key (or index) to be used to read the linked data source, selected from the drop box.  
_Key Expression_ |  PxPlus expression consisting of fields from the primary data source whose values are used to build the key value for reading the linked data source. A key expression may be string or numeric. Maximum 300 characters. If the names of the fields that make up the link key are the same as the primary data source elements used to create the key expression, then a partial key expression will be generated automatically. **_Examples:_** TRN_CUSTID$ "D"+FLD#2$(1,3) PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum)  KEY(__fileFN,KNO=0,KEY=Company$:Department$:EmployeeNum) **_Multi-Segment Keys_** When dealing with multi-segmented keys (i.e. keys made up of more than one field), you can use a **+**  _(plus sign)_ to concatenate multiple string segments of a key when entering a free-form expression. Be sure to add the correct padding logic to the initial key segments. By default, the initial segments of native PxPlus keys are padded with $00$ characters, and the final segment is not padded. Such a key definition might look like this: PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum) Individual applications can pad key segments with other characters, such as spaces; therefore, knowledge of the key architecture of individual files is a **_must_**. In addition, partial expressions can be entered to define the beginning of the key value in a one-to-many scenario. Knowledge of segment characteristics is not necessary; however, if the key expression uses the **KEY(__linkFN,KNO=_n_ ,KEY=FLD1$:FLD2$)** format where **__linkFN** is a special channel variable used by the system when evaluating the key, **_n_** is the key number used by the file, and **FLD1$:FLD2$** are the key segment variables. The latter format is also more flexible as it can handle changes in key segment length if keys are updated for a file. In addition, this format allows a mixture of string and numeric segments. **_Key Expression Builder_** An easy way to build a key expression is to use the key builder utility. This is invoked by clicking the dotted button in the cell associated with this option. The key expression is built by specifying key segments to match the target key definition. These segments can consist of fields from the parent file, literal values and variables. Partial items can be defined, and segments can be padded, have characters stripped, or be converted to upper/lower case. In the case of **_multi-segment_** keys, a _Generate a KEY=F1$:F2$ expression_ check box option is available: |  |  If it is not selected, the key segments will be concatenated, and individual key segments would have to be padded or manipulated appropriately.  
---|---  
|  If it is selected, then a key expression in the format **KEY(__linkFN,KNO=_n_ ,KEY=FLD1$:FLD2$)** will be generated where the segments need not be manipulated. (For an explanation of the contents of the generated key, see **[Multi-Segment Keys](Data%20Source%20Definition.htm#multiseg_keys)**.)  
  
Simple numeric keys can be built using a numeric field. Multi-segment numeric keys should be built using the _Generate a KEY=F1$:F2$ expression_ option.

_(The Generate a KEY=F1$:F2$ expression check box was added in PxPlus 2023.)  
__(Support for numeric key definitions when defining key expressions was added in PxPlus 2023 Update 1.)_  
  
_> 1 rec_ |  Check box indicating the correspondence between records returned by a linked data source per record read from the primary data source. When selected, this check box represents _one-to-many_ \- there can be many corresponding records in the linked file. This is accomplished using a partial key in the key expression or if there are duplicate keys in the link file. By default, this check box is not selected, indicating a _one-to-one_ correspondence - the value of the key expression matches the key of the linked data source. Only one relationship can be defined as one-to-many for any data source. These may be nested - the data source definition for a one-to-many relationship may itself contain a link for another one-to-many relationship. In this case, all relationships above must be defined as one-to-many.  
_No Data Option_ |  Options for no key match in the linked file: |  _NULL fields_ |  Sets subordinate strings to null, numerics to zero.  
---|---  
_Display ***_ |  Displays an *****  _(asterisk)_ for string values.  
_Skip record_ |  Skips primary data source record.  
  
##  Step 4: Logic Procedures

Specify logic to be performed in the data source definition. See **[Logic Procedures](../Logic%20Procedures/Overview.md)**.

> This panel consists of the following:

**Logic Procedures** |  _Specify initialization and closing logic. A_ **[Logic Object](https://manual.pvxplus.com/PXPLUS/Views%20System/Logic%20Procedures/Overview.htm#logicobj)**  _can also be specified_ _to supply initialization and closing logic._  
---|---  
**Initialization Logic** |  Specify initialization logic to be performed.  
**Closing Logic** |  Specify closing logic to be performed.  
**Logic Object** |  Specify an object to supply initialization and closing logic.  
  
##  Step 5: Group Assignment

Assign the data source definition to an existing group.

> This panel consists of the following:

**Group Assignment** |  _A group is a way to organize and relate the data sources logically. Groupings are typically based upon a user view of the data rather than on a physical or application view.  
  
Data sources may belong to one or more groups. For example, a Customer data source could belong to the Customer Info, Billing Info and Master Files groups. See_ **[Create Groups](Create%20Groups.md)**.  
---|---  
**Available Groups** |  List box that displays all the existing groups to which the data source definition may be assigned.  
**Assigned Groups** |  List box that is used to show which groups in the **Available Groups** list have been selected for assigning the new data source to.  
_Add_ |  Adds a group selected from the **Available Groups** list to the **Assigned Groups** list.  
_Remove_ |  Removes a selected group from the **Assigned Groups** list and returns it to the **Available Groups** list.  
  
##  Step 6: Finish

Review the selections for the previous steps, which are presented in a grid format with a vertical scroll bar.

> This panel consists of the following:

_Launch a new Data Source Definition after Completion_ |  Select this check box to keep the wizard open to define a new data source after clicking the _Finish_ button. If this check box is not selected **_(default)_** , the wizard will close after clicking the _Finish_ button.  
---|---  
_Finish_ |  Button used to complete the wizard and save the data source definition. If no elements were selected in **[Step 2: Elements](Data%20Source%20Definition.htm#step2)**, a message will display. Responding _Yes_ invokes the **Step 2: Elements** panel so that elements can be selected. (When done, click the _Finish_ button to save.) Responding _No_ saves the data source definition without any elements.  
  
## Updating a Data Source Definition

After the wizard is completed, the data source definition can be recalled in **[Data Source Maintenance](Overview.md)** and updated as needed.

## See Also

**[View Maintenance](../View%20Maintenance/Overview.md)**
