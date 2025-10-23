# Data Dictionary Objects 

**Database and PVXDb Objects** |  **__**  
---|---  
  
**Database** and **PVXDb** are the primary objects for data dictionary maintenance. Methods belonging to primary object methods are described in the tables below. Methods are organized according to functionality: **[Creating and Updating Files](DataBase%20and%20PVXDb%20Objects.htm#creatingfiles)**, **[Accessing Information](DataBase%20and%20PVXDb%20Objects.htm#accessinginfo)** and **[Updating Definitions and Tables](DataBase%20and%20PVXDb%20Objects.htm#updatingdef)**.

##  Creating and Updating Files

The following table lists and describes the methods used for creating, deleting and importing data dictionary files:

**Database** **Methods** |  **Description**  
---|---  
**AdjustTable(** "_table_ "**)  
  
AdjustTable(**"_table", pass$, lvl_**)** |  Reapplies any dictionary changes to the physical table if the file already exists. If the physical file has a password, then enter the file's password and password level.  
**Close(**_fh_**)** |  **_(PVXDb Only)_** Close the physical table.  
**CreateDataBase(**_x$_**)** |  Create the PxPlus data dictionary control files. _x_ _$_ is the full path where the files are to be created.  
**CreateTable(** "_table_ "**)** |  Create the physical table.  
**DeleteDefinition(** "_table_ "**)** |  Delete data dictionary definition for _table_.  
**DeleteTable(** "_table_ "**)** |  Delete the physical table (leave dictionary entries).  
**ImportTable(**_fh_**)  
  
ImportTable(**_fh_ _,_ "_table_ "**)** |  Import file description contained in file or existing table.  
  
_fh_ is an open channel to the file whose description will be loaded.  
  
_table_ , if specified, indicates the table name in the data dictionary.  
**LoadDictionary(**_fh_ _, target$_**)  
  
LoadDictionary(**_fh_ _, target$, pass$, lvl_**)** |  Loads/updates the dictionary information for the table identified by _fh_ into the file specified by _target$_. It should be noted that the dictionary information will be taken from the Database definition and not the physical file referenced by _fh_. The physical file _target$_ must exist, and if it has a password, its password and password level are required.  
**Open(** "_table_ "**)  
  
Open(**"_table", pass$_**)** |  **_(PVXDb Only)_** Return file handle to be used for subsequent **READ/WRITE** commands. Include password for physical file, if required.  
**SetDataBase(**_x$_**)** |  Sets the dictionary source files to be used for all subsequent methods.  
  
_x_ _$_ is the full path to the source files.  
  
##  Accessing Information

These methods access information related to a data dictionary definition _(table)_. The first parameter (_fh_ in the examples below) can be a string (table name) or a number (channel number). A table name indicates that the data dictionary files will be read; otherwise, the channel number will be used for querying the physical table.

**Information Methods** |  **Description**  
---|---  
**GetAltIOList$(**_fh_**)** |  Return table's alternate IOList, if any.  
**GetColumnCount(**_fh_**)** |  Return total number of data columns present in the specified table.  
**GetColumnDescription$(**_fh_ , _n_ | _n$_**)** |  Return queried data column's description.  
**GetColumnInfo(**_fh_ _, n_ | _n$_**)** |  Return a **ColumnInfo** object that contains a description of the column. This object is static and will be reused on all subsequent calls to this function. It will be released when the database object is released. You can pass either a column number or name (which may contain a trailing **$**).  
**GetColumnList$(**_fh_ _, sep$_**)** |  Return a list of all the data columns' names for the specified table. The default separator is a Hex$8A$; however, you can specify _sep_ _$_ to be used.  
**GetColumnName$(**_fh_ , _n_**)** |  Return name of column (specified by column number). Name is type independent. Strings will not have trailing **$**. An error will be generated if the name accessed has an invalid column number.  
**GetColumnNo(**_fh_ , _n$_**)** |  Return queried data column's number.  
**GetColumnVariable$(**_fh_ , _n_ | _n$_**)** |  Return the variable name of column (specified by column number). For string variables, the return value will have a trailing **$**.  
**GetGroupList$(**_sep_ _$_**)** |  Return a list of all the groups presently found in the currently set _providex.ddf_. The default separator is a Hex $8A$; however, you can specify the _sep_ _$_ to be used.  
**GetIndexCount(**_fh_**)** |  Return the number of indices on the table.  
**GetIndexDescription$(**_fh_ _, n_ | _n$_**)** |  Return a list of the column descriptions that were used to make up the index, each separated by a **+** (_plus sign_). Columns in descending order are appended with "/d". You can pass either an index name or number (where the primary key is 1). _(The appending of "/d" to indicate descending order was added in PxPlus 2022.)_  
**GetIndexInfo(**_fh_ _, n_ | _n$_**)** |  Return an **IndexInfo** object that contains a description of the index. This object is static and will be reused on all subsequent calls to this function. It will be released when the database object is released. You can pass either an index name or number (where the primary key is 1).  
**GetIndexList$(**_fh_ _, sep$_**)** |  Return a list of all indexes for the specified tables. If the index does not have a name, then **#** followed by the index number will be in the list. The default separator is a Hex $8A$; however, you can specify the _sep_ _$_ to be used.  
**GetIndexName$(**_fh_ , _n_**)** |  Return the name of the index on the table.  
**GetIOList$(**_fh_**)** |  Return table's IOList.  
**GetKeyColumnCount(**_fh_**)** |  Return total number of external key columns present in the specified table.  
**GetKeyColumnDescription$(**_fh_ _, n_ | _n$_**)** |  Return queried external key column's description.  
**GetKeyColumnInfo(**_fh_ _, n_ | _n$_**)** |  Return external key **ColumnInfo** object containing information about the key column. This object is static and will be reused on all subsequent calls to this function. It will be released when the DB object is released. You can pass either a key column number or name. The name may contain a trailing **$**.  
**GetKeyColumnList$(**_fh_ _, sep$_**)** |  Return a list of all the external key columns' names for the specified table. The default separator is a Hex $8A$; however, you can specify the _sep_ _$_ to be used.  
**GetKeyColumnName$(**_fh_ _, n_**)** |  Return queried external key column's name, which is type independent. Strings will not have trailing **$**.  
**GetKeyColumnNo(**_fh_ , _n$_**)** |  Return queried external key column's number.  
**GetKeyColumnVariable$(**_fh_ _, n_ | _n$_**)** |  Return the queried external key column's variable name. String variables will return the variable with a trailing **$**.  
**GetKeyIOList$(**_fh_**)** |  Return table's external key IOList, if any.  
**GetTableCount( )** |  Return the total number of tables presently found in _providex.ddf_.  
**GetTableInfo(**_fh_**)** |  Return **TableInfo** object that contains information about the file. This object is static and is reused on all subsequent calls to this method. It will be released when the database object is released.  
**GetTableList$(**_sep_ _$_**)** |  Return a list of all the tables presently found in the currently set _providex.ddf_. The default separator is a Hex $8A$; however, you can specify the _sep_ _$_ to be used.  
**GetTableListByGroup$(**_group$, sep$_**)** |  Return a list of all tables presently found in the currently set _providex.ddf_ for the group specified. If _group$_ is null, then all tables found will be returned in group order. The default separator is a Hex $8A$; however, you can specify the _sep_ _$_ to be used.  
**GetTableName$(**_fh_**)** |  **_(Only Supports Numeric Parameter)_** Return logical table name.  
**_The following only applies to tables with variant records:_**  
**GetRecordName$(**_fh_**)** |  Return logical name of the current record type.  
**GetRecordNo( )** |  Return numeric value of the currently set record type (what **SetRecordNo** had been set to).  
**GetRecordTypes(**_fh_**)** |  Return number of record types for the specified table.  
**GetVariantInfo(**_fh_**)** |  Return **VariantInfo** object that contains information about the non-normalized information. This object is static and will be reused on all subsequent calls.  
**SetRecordNo(**_n_**)** |  Set record type to be dealt with by all subsequent **GetColumn** type methods. If not set, then the default record type is 1. (Maximum record number is 36.)  
  
##  Updating Definitions and Tables

These methods will update the data dictionary definition. The first parameter (_fh_ in the examples below) can be a string (table name) or a number (channel number). A table name indicates that the data dictionary files will be read; otherwise, the channel number will be used for querying the physical table.

When updating the data dictionary, you will need to issue an **AdjustTable(** **)** to make the changes onto the physical tables. When updating physical tables, you may want to issue an **ImportTable(** **)** to have the change reflected into the data dictionary.

**Update Methods** |  **Description**  
---|---  
**AddColumn(**_fh_ , _obj_**)** |  Add a new column based on the description supplied by the **ColumnInfo** object. The new column will be assigned the next available position in the table. Assigning the column number property has no effect on an **AddColumn(** **)** method.  
**AddIndex(**_fh_ , _obj_**)** |  Add a new index to the table based on the description in the **IndexInfo** object. The new index will be assigned the next index number. In the case of a physical table, the index will be loaded and made accessible. Any current positional information in the table will be lost (the table will be closed/reopened).

#### **Note:**  
This function may fail due to concurrent access to the table - it requires exclusive use of the table.  
  
**AddPassword(**_fh_ _, pass$, level_**)** |  Applies the password and access level to a non-passworded file.  
**AddTable(**_obj_**)** |  Add new table based on the description supplied by the **TableInfo** object.  
**ChangePassword(**_fh_ _, orig_pass$, new_pass$, level_**)** |  Updates the file with the modified password and access level. If no new password is given, then the original password will be used.  
**DropColumn(**_fh_ _, n_ | _n$_**)**  
**  
DropKeyColumn(**_fh_ _, n_ | _n$_**)** |  Deletes the specified column from that table. In the case of a physical file, the file will be recreated, and all the data for that column will be lost. In addition, all index information containing this column will be adjusted.  
  
**_Example:_** FieldA + FieldB  
Delete Column FieldA  
New Index is FieldB  
**DropIndex(**_fh_ _, n_ | _n$_**)** |  Delete specified index for _fh_. Any current positional information in the table will be lost (the table will be closed/reopened).

#### **Note:  
** This function may fail due to concurrent access to the table - it requires exclusive use of the table.  
  
**DropTable(**_n$_**)** |  Deletes the table and all its related information.  
**Merge(**_srcddf_ _$_ | _srcchn_ _, srctbl$, desddf$_ | _deschn_ _, mergeopt$_**)**  
**  
Merge(**_srcddf_ _$_ | _srcchn_ _, desddf$_ | _deschn_ _, mergeopt$_**)** |  Merge table definitions from one set of dictionary files _(providex.ddf_ and _providex.dde_ _)_ to another. |  _srcddf_ _$_ |  Path to dictionary source file _(.ddf)_.  
---|---  
_srcchn_ |  Open channel to dictionary source file.  
_srctbl_ _$_ |  Name of the table to be merged from source dictionary. If omitted - then all the tables.  
_desddf_ _$_ |  Path to the dictionary destination file.  
_deschn_ |  Open channel to dictionary destination file.  
_mergeopt_ _$_ |  Options for dealing with tables that exist in both source/destination files: |  **1** |  Replace contents of destination table with those of source.  
---|---  
**2** |  Merge contents of the two tables, with precedence given to source.  
**3** |  Skip the table.  
**RemovePassword(**_fh_ _, pass$_**)** |  Removes given password from the file.  
**RenameColumn(**_fh_ _, old$_ , _new$_**)** |  Rename column.  
**RenameIndex(**_fh_ , _old$, new$_**)** |  Rename the index.  
**RenameTable(**_fh_ , _oldname_ _$_**)** |  Renames the table.  
**UpdateColumn(**_fh_ , _obj_**)** |  Update specified column with information supplied by the **ColumnInfo** object.  
**UpdateIndex(**_fh_ , _obj_**)** |  Update specified index for _fh_ with information supplied by the **Idxinfo** object. In the case of a physical table, the index will be loaded and made accessible. Any current positional information in the table will be lost (the table will be closed/reopened).

#### **Note:  
** This function may fail due to concurrent access to the table - it requires exclusive use of the table.  
  
**UpdateTable(**_obj_**)** |  Update table information based on the information supplied by the **TableInfo** object.  
**UpdateVariant(**_fh_ , _obj_**)** |  Updates the variant information for _fh_ with the information supplied by the **VariantInfo** object.  
  
##  Subordinate Maintenance Objects

Subordinates to the primary maintenance **Database and PVXDb Objects** include **[Idxinfo](DataBase%20and%20PVXDb%20Objects.htm#idxinfo)**, **[Colinfo](DataBase%20and%20PVXDb%20Objects.htm#colinfo)**, **[Tblinfo](DataBase%20and%20PVXDb%20Objects.htm#tblinfo)** and **[Variantinfo](DataBase%20and%20PVXDb%20Objects.htm#variantinfo)**.

**_Idxinfo_**

**Idxinfo \- Provides a common means to describe the indexes for a definition (table) or file**  
---  
**Idxinfo Methods** |  **Description**  
**AddSegment(**_n_**)** |  Adds a new index segment at the position specified by _n_. If _n_ is null, then a new index segment will be added at the end. Your index object's segment number will be positioned to the new segment _n_ added.  
**DropSegment(**_n_**)** |  Removes an index segment at the position specified by _n_. If _n_ is null, then the last index segment will be removed. Your index object's segment number will be positioned to the removed segment.  
**GetValues$(**_iol_obj_ _$_**)** |  Return value of queried property or properties as a data record.  
  
**_Example:_**  
_  
iol_obj$_ = **CPL(** "_iolistname_ _$_ "**)  
**_X$_ = **Object'GetValues(**_iol_obj_ _$_**)  
**_X$_ = Value found in _name$_ for this object  
**InitValues( )** |  Initializes the object's properties. Strings will be set to null, numeric and Booleans to zero.  
**Segment(**_n_**)** |  Simple method to change segments. Returns object ID after setting segment number. Allows the user to code:  
  
Obj'Segment (4)'ColumnWidth  
  
** _or  
  
_** X$ = Obj'Segment(3)'Attributes$  
**SetValues(**_val_ _$_ , _iol_obj_ _$_**)** |  Set object's properties to the value or values specified.  
  
_iol_obj_ _$_ = **CPL(** "_iolistname_ _$, attributes$_ "**)**  
_val_ _$_ = "_newname_ " + **SEP** \+ "Enter your Name"  
  
**Object'SetValues**(_val_ _$, iol_obj$_) will return 1 if passed, 0 if failed.  
**Idxinfo Properties** |  **Description**  
**Attributes$** |  Attribute string for current index: |  **U** |  Unique  
---|---  
**K** |  Suppress key if null  
**ColumnAttr$** |  Attribute string for current segment: |  **A** |  Ascending  
---|---  
**D** |  Descending  
**C** |  Uppercase  
**L** |  Lowercase  
**T** |  **_(PVX Only)_** Translate using accent table  
**S** |  **_(PVX Only)_** Swap byte order - binary field  
**N** |  **_(PVX Only)_** Suppress key if column null  
**-** |  Signed Integer  
  
**_For Auto Increment_** _:_

**+** |  Zero-filled, right-justified ASCII numeric (e.g. "0001").  
---|---  
**#** |  Space-filled, right-justified ASCII numeric (e.g. " 1").  
**I** |  Binary integer in native machine format. Field length is limited to 1, 2 or 4 bytes.  
**ColumnName$** |  Name of column based on current segment.  
**ColumnNullCharacter$** |  ASCII hexadecimal value. The default is a null byte ($00$).  
**ColumnOffset** |  Offset into current segment's column (zero-based).  
**ColumnWidth** |  Width to use of current segment's column (zero indicates full column).  
**IsExternal** |  **_(PVX-Hosted DB Only)_** Boolean indicator for external key.  
**IsUnique** |  Boolean indicator for unique index.  
**Name$** |  Name of the index.  
**NullCharacter$** |  ASCII hexadecimal value. The default is a null byte ($00$).  
**NullSuppress** |  **_(PVX Only)_** Suppresses index if key is completely null.  
**SegCount** |  **_(Read Only)_** Number of segments for index.  
**SegNo** |  Current segment number being referenced.  
  
**_Colinfo_**

**Colinfo \- Provides a common definition of a data element and provides for common data validation rules**  
---  
**Colinfo Methods** |  **Description**  
**GetValues$(**_iol_obj_ _$_**)** |  Return value of queried property or properties as a data record:  
  
_iol_obj_ _$_ = **CPL(** "_iolistname_ _$_ "**)**  
_X$_ = **Object'GetValues**(_iol_obj_ _$_)  
_X$_ = Value found in _name$_ for this object  
**InitValues( )** |  Initializes this object's properties. Strings will be set to null, numeric and Booleans to zero.  
**SetValues(**_val_ _$_ , _iol_obj_ _$_**)** |  Set object's properties to the value or values specified:  
  
_iol_obj_ _$_ = **CPL(**_"iolistname$, attributes$"_**)**  
_val_ _$_ = "_newname_ "+**SEP** +"Enter your Name"  
**  
Object'SetValues**(_val_ _$, iol_obj$_) will return 1 if passed, 0 if failed.  
**Validate(**_val_ | _val_ _$_**)** |  Validate the contents of the column. Will return 1 if valid, 0 if not. Reason for rejection will be in **ErrorCode$** / **ErrorMessage$**.  
**ViewForceType( )** |  **_Internal (PxPlus) Use Only_**  
**Colinfo Properties** |  **Description**  
**AlternateName$** |  Alternate name for data field used to convert legacy applications.  
**Class$** |  Class used to define data.  
**ColumnNo** |  Column number.  
**DefaultValue$** |  Default value to use when initializing data.  
**Description$** |  One line description of data element.  
**ErrorCode$** |  Last error condition that occurred.  
**ErrorMessage$** |  Descriptive text about the last error.  
**Extension$** |  Application-specific extension values expressed as a string of value pairs.  
**ExternalFormat$** |  Output display format as per PVX formatting rules.  
**Help$** |  Help text and/or help file reference.  
**InputLength** |  **_(Read Only)_** Length required to allow user to input this data.  
**InternalFormat$** |  Internal format as used by PxPlus. Valid formats include: |  **D** |  Default (Delimited column in PVX, standard VARCHAR in SQL)  
---|---  
**F** |  Fixed length  
**P** |  Padded to length  
**S** |  Internal sub-string of a larger field  
**L** |  Last sub-string of a larger field  
**B** |  Binary data  
**I** |  Unsigned integer  
**G** |  Signed fixed numeric  
**C** |  Decimal numeric  
**Z** |  Decimal-delimited numeric  
**R** |  Space padded  
**IsExternal** |  Boolean indicator for external column.  
**IsPartOfPrimaryKey** |  Boolean to indicate that this column is part of the Primary key.  
**IsPartOfUniquekey** |  Boolean to indicate that this column is part of a Unique key definition.  
**IsReadOnly** |  Boolean to indicate that this column is designated as read only or locked. _(The IsReadOnly property was added in PxPlus 2021.)_  
**IsRequired** |  Boolean to indicate that the data in this column is mandatory (_not null_).  
**IsUpperCase** |  Boolean to indicate that the data should always be uppercase.  
**Length** |  Length of data in total bytes/digits.  
**Name$** |  Name of the column.  
**Notes$** |  General programmer notes.  
**Occurs$** |  Occurs definition.  
**ODBCOption$** |  ODBC presentation: |  _Null_ |  Show (default for new columns)  
---|---  
**H** |  Hide  
**N** |  No Show  
**Query$** |  Query information for online system.  
**Scale** |  Number of decimal points (numeric type only, 0 for string).  
**Security$** |  Security classes used to identify the type of user and control access to file system.  
**ShortName$** |  Short name to be used for column headers.  
**TableName$** |  **_(Read Only)_** Name of the table to which this column belongs.  
**Tag$** |  User defined information.  
**Type$** |  Type of data: |  **S** |  String  
---|---  
**N** |  Numeric  
**Validation$** |  Validation rules; comma-separated values and/or ranges.  
**Variable$** |  **_(Read Only)_** Variable name to be used to store data. Name plus **$** if string.  
**ViewsExpression$** |  Used to store column expression during Views processing.  
  
**_Tblinfo_**

**Tblinfo \- Provides information about the file**  
---  
**Tblinfo** **Methods** |  **Description**  
**GetValues$**(_iol_obj_ _$_) |  Return value of queried property or properties as a data record:  
  
_iol_obj_ _$_ = **CPL(** "_iolistname_ _$_ ")  
_X$_ = **Object'GetValues**(_iol_obj_ _$_)  
_X$_ = Value found in _name$_ for this object  
**InitValues( )** |  Initialize this object's properties. Strings are set to null, numeric and Booleans are set to zero.  
**SetValues**(_val_ _$_ , _iol_obj_ _$_) |  Set object's properties to the value or values specified:  
  
_iol_obj_ _$_ = **CPL**("_iolistname_ _$, description$_ ")   
_val_ _$_ = "_newname_ "+**SEP** +"Enter your Name"  
**  
Object'SetValues**(_val_ _$, iol_obj$_) will return 1 if successful, 0 if failed.  
**Tblinfo** **Properties** |  **Description**  
**BlockSize$** |  Specify a block size when creating a data file. Null or 'Default' = Let language determine the most suitable size. Valid ranges are: |  **1 - 31** |  Variable format  
---|---  
**1 - 32** |  Fixed format  
**4 - 63** |  EFF (2GB limit)  
**4 - 63** |  EFF (>2GB limit)  
**Description$** |  Short description of the table contents.  
**Extension$** |  **_(Read Only)_** Variable name used to store data. Name plus **$** if string.  
**Group$** |  Allows you to group files by a common theme or application; e.g. Accounting, Billing, GL.  
**IOProgram$** |  Name of the program that contains logic for controlling file access.  
**IsDataCompression** |  Boolean indicator for data compression.  
**IsExtendedRecords** |  Boolean indicator for records larger than 32 KB.  
**IsZlibCompression** |  **_(Applies to VLR and EFF Files Only)_** Boolean indicator for data compression.  
**LastChangeBy$** |  **_(Read Only)_** User ID.  
**LastChangeDate$** |  **_(Read Only)_** Date and User ID in the format: CCYY/MM/DD HH:MM:SS-USERID.  
**Name$** |  Logical file name.  
**Notes$** |  Provide free-form area for recording notes on the table and its use (limited to 1024 characters).  
**Options$** |  **_File Options_** \- Allows you to directly set these options; e.g. obj'Options$="XC". Setting any of these values will also change the Boolean indicator for these values: |  **C** |  Data compression  
---|---  
**X** |  Extended records  
**Z** |  **_(Applies to Variable and EFF File Types Only)_** Zlib compression  
  
**_File Types_** \- Allows you to directly set these options; e.g. obj'Options$="2".

You may only select one of these options:

**V** |  Variable format  
---|---  
**F** |  Fixed format  
**1** |  EFF (2GB limit)  
**2** |  EFF (>2GB limit)  
**PhysicalFile$** |  The physical file path and file name of your keyed data file. You can use a fixed value (e.g. CST_FILE) or expression (e.g. %COMPANY$+"AR").  
**Security$** |  Security classes used to identify the type of user and control access to file system.  
**Separator$** |  The field separator for your file. Default is the standard PxPlus separator $8A$.  
  
**_Variantinfo_**

**Variantinfo** **\- Provides a common means to update or change non-normalized record information for a definition (_table_) or file**  
---  
**Variantinfo Methods** |  **Description**  
**AddConditionSegment**(_num_) |  Add new condition segment at the position specified by _num_. If _num_ is null, then a new condition segment will be added at the end. Your variant object's **ConditionSegment** will be positioned to the new segment added.  
**AddFormatSegment**(_num_) |  Add new format segment at the position specified by _num_. If _num_ is null, then a new format segment will be added at the end. Your variant object's **FormatSegment** will be positioned to the new segment added.  
**ConditionSegment**(_n_) |  Simple method to change condition segments. Returns object ID after setting condition segment.  
  
Allows the user to code:   
  
Obj'ConditionSegment (2)'Length=10  
  
** _or  
  
_** X$ = Obj'ConditionSegment(2)'ColumnName$  
**DropConditionSegment**(_num_) |  Remove condition segment at the position specified by _num_. If _num_ is null, then the last condition segment will be removed. Your variant object's **ConditionSegment** will be positioned to the removed segment.  
**DropFormatSegment**(_num_) |  Remove format segment at the position specified by _num_. If _num_ is null, then the last format segment will be removed. Your variant object's **FormatSegment** will be positioned to the removed segment.  
**FormatSegment**(_n_) |  Simple method to change format segments. Returns object ID after setting format segment. Allows the user to code:  
  
Obj'FormatSegment (2)'Length=10  
  
** _or  
  
_** X$ = Obj'FormatSegment(2)'Name$  
**GetValues$**(_iol_obj_ _$_) |  Return value of queried property or properties as a data record:  
  
_iol_obj_ _$_ = **CPL(** "_iolistname_ _$_ ")  
_X$_ = **Object'GetValues**(_iol_obj_ _$_)  
_X$_ = Value found in _name$_ for this object  
**InitValues**( ) |  Initializes this object's properties. Strings are set to null, numeric and Booleans are set to zero.  
**SetValues**(_val_ _$_ , _iol_obj_ _$_) |  Set object's properties to the value or values specified:  
  
_iol_obj_ _$_ = **CPL**("_iolistname_ _$, description$_ ")  
_val_ _$_ = "_newname_ "+**SEP** +"Enter your Name" **Object'SetValues**(_val_ _$, iol_obj$_) will return 1 if passed, 0 if failed.  
**Variantinfo Properties** |  **Description**  
**ColumnName$** |  Name of column based on current condition segment.  
**ConditionCount** |  **_(Read Only)_** Number of condition segments for this non-normalized definition.  
**ConditionSegment** |  Current condition being referenced.  
**FormatCount** |  **_(Read Only)_** Number of format types for this non-normalized definition.  
**FormatSegment** |  Current format type being referenced.  
**Length** |  Length of data in total bytes/digits.  
**Name$** |  Name of the record type.  
**Offset** |  Offset into current segment's column (zero-based).  
**TestCondition$** |  Condition for this record type.
