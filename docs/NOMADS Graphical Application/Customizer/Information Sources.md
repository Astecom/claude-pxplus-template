# Customizer   
  
**Information Sources** |  **__**  
---|---  
  
When a panel is set up for custom information, the custom information is displayed automatically in a _Custom Information_ grid whenever the panel is displayed. See **[Displaying Custom Information](Overview.htm#Mark1)**.

The information items that are needed to populate the _Custom Information_ grid can come from various sources:

|  **[Application Files](Information%20Sources.htm#applicationfiles)** |  Restricted to **[Data Dictionary](../../Data%20Dictionary/Introduction.md)** files and are **_display only_**  
---|---|---  
|  **[User Files](Information%20Sources.htm#userfiles)** |  Defined by the user and are modifiable  
|  **[Formulas](Information%20Sources.htm#formulas)** |  Consist of numeric calculations or text manipulation  
  
The information source and the items to include for the custom definition are specified by using the **Update Custom Information** window. This is accessed from the **[Customize](Working%20with%20Custom%20Information.htm#custom_info)** window by selecting either the _Add_ button (to add a new item) or the _Properties_ button (to change an existing item).

By using the **Update Custom Information** window, you can:

  * Add or remove information items.
  * Change the current properties of existing information items.
  * Modify the order in which selected information items are listed.



##  Application Files

Additional information from application data files may be included in a custom definition. Application files are restricted to those defined in a **[Data Dictionary](../../Data%20Dictionary/Introduction.md)**.

To include information from an **_application data file_** , select _Application File_ as the **Information Source** , and then select a _File_ and an _Information Item_. Security classifications assigned to files or individual file elements may limit the selection offered to a particular user.

> The options for including an **_application data file_** are:

_File_ |  Enter a valid application data file name or click the Query button to select one.  
---|---  
_Information Item_ |  Select an item from the drop-down list of elements in the selected file.  
_Record Identifier_ |  Define a _Record Identifier_ (or key) to access records in the file. If the file key components can be matched to existing panel information, this will be done automatically; otherwise, you must build the key definition by clicking the _Build_ button.  
_Build_ |  Launches the **Record Identifier (Key) Definition** window for specifying the literal values, program variables and panel information items whose values can be used to build the key to access records. Key segments may be padded with spaces, and partial values may be used. The original key definition for the file is displayed for reference.  
_Allow this item to be shared_ |  Select this check box to mark the item as _shareable_. This means that the item will be displayed in the **[Merge Customizer Items](Working%20with%20Custom%20Information.htm#merge)** window, allowing other users to copy it into their custom definitions. _(The Allow this item to be shared option was added in PxPlus 2018.)_  
_Display_ |  Specify a display option for numeric values. (**_Default_** is _Normal_.) If the value of the selected element represents a percentage value, select _Percent Bar_ as the _Display_ option and then select a _Bar Color_. The value will then be displayed as a colored bar followed by the literal value, where a value of 100 (or greater) will create a bar taking up 80% of the _Value_ column width, with 20% left for the literal value. A value of 50 would create a bar half that length, and a value of zero (or less) would display only the literal value. _(The Display option was added in PxPlus 2017.)_  
  
#### **Note:**  
Application data is for **_display only_** and cannot be updated in the _Custom Information_ grid.

##  User Files

User files are files with content defined by the user. For information on creating these files, see **[Custom User Files](Custom%20User%20Files.md)**.

To include information from a **_user file_** , select _User File_ as the **Information Source** , and then select a _File_ and an _Information Item_. The selection includes **_public_** user files for public definitions, and both **_personal and public_** user files for personal definitions, although security levels assigned to public user files and/or their individual file elements may limit the selection offered to a particular user.

> The options for including a **_user file_** are:

_File_ |  Enter a valid user file name or click the Query button to select one.  
---|---  
_Information Item_ |  Select an item from the drop-down list of elements in the selected file.  
_Record Identifier_ |  Define a _Record Identifier_ (or key) to identify and access records in the file.  
_Build_ |  Launches the **Record Identifier (Key) Definition** window to build keys from literal values, program variables and panel information items. Key segments may be padded with spaces, and partial values may be used.  
_Allow this item to be shared_ |  Select this check box to mark the item as _shareable_. This means that the item will be displayed in the **[Merge Customizer Items](Working%20with%20Custom%20Information.htm#merge)** window, allowing other users to copy it into their custom definitions. _(The Allow this item to be shared option was added in PxPlus 2018.)_  
_Allow update_ |  Select this check box to enter, update and delete information in user files. This option allows user data to be updated as soon as it is entered at run time. To remove a record in a user file **_at run time_** , the user must right click on one of the user fields in the _Custom Information_ grid to access the following the _Delete_ options: |  _Delete fields related to selected user records_ |  Removes the entire record; i.e. all the fields associated with the record, not just the selected item.  
---|---  
_Delete All user records currently displayed_ |  Removes the current record from all user files that are displayed in the _Custom Information_ grid.  
  
#### **Note:**  
The contents of user files are updated automatically when a user alters the contents of the _Custom Information_ grid. This logic is entirely separate from the existing logic used to process updates to the panel. See **[Custom User Files](Custom%20User%20Files.md)**.

##  Formulas

Formulas can be used to derive values to be displayed. These can consist of numeric calculations or text manipulation.

To include a **_formula_** , select _Formula_ as the **Information Source**.

> The options for including a **_formula_** are:

_Short Description_ |  Enter a short description that will appear as the label for the formula results in the _Custom Information_ grid.  
---|---  
**Info Type** |  Select the type of data to be manipulated: _Numeric/Calculation_ or _Text_.  
_Max. Length_ |  Enter the maximum length (in characters) of the result. This will be used to determine column width.  
_Display Format_ |  **_(Optional)_** Displays the formatting that was entered or selected using the _Define_ button. Formatting for numeric data includes currency symbols, thousands separators, signs, etc. Formatting for text data, such as dates, includes dashes, slashes, etc.  
_Define_ |  Launches a **Numeric Format** or **Text Format** window for defining a numeric or text display format, depending on the **Info Type** selected.  
_Formula_ |  The formula may be entered as a free-form PxPlus expression by users who have ADMIN or CUSTOMIZER security classifications. See **[Security Considerations](Security%20Considerations.md)**. Others must use the _Build_ button to define a formula. Numeric formulas can be built from digits and panel information items. Addition, subtraction, multiplication, division, exponentiation and modulus operations are supported. PxPlus functions such as **ABS(** **)**  _absolute value_ , **INT( )**  _integer_ , **MIN( )**  _minimum value_ , and **MAX( )**_maximum value_ can be used to manipulate values as well. Text formulas can be built that concatenate text components. These components can be comprised of literal values, program variables (ADMIN or CUSTOMIZER classes **_only_**) and values from panel items. Partial items may be defined and segments may be padded, have characters stripped, or be converted to upper/lower case. Formulas are displayed as PxPlus expressions in the definition, and free-form formulas may be any valid PxPlus expression.  
_Build_ |  Launches a separate **Define a Numeric Formula** or **Define a Text Formula** window for defining a numeric or text formula, depending on the **Info Type** selected.  
_Allow this item to be shared_ |  Select this check box to mark the item as _shareable_. This means that the item will be displayed in the **[Merge Customizer Items](Working%20with%20Custom%20Information.htm#merge)** window, allowing other users to copy it into their custom definitions. _(The Allow this item to be shared option was added in PxPlus 2018.)_  
_Display_ |  Specify a display option for numeric values. (**_Default_** is _Normal_.) If the value of the formula represents a percentage value, select _Percent Bar_ as the _Display_ option and then select a _Bar Color_. The value will then be displayed as a colored bar followed by the literal value where a value of 100 (or greater) will create a bar taking up 80% of the _Value_ column width, with 20% left for the literal value. A value of 50 would create a bar half that length, and a value of zero (or less) would display only the literal value. _(The Display option was added in PxPlus 2017.)_
