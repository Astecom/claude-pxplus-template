# SQL Interface Objects 

**Subordinate SQL Objects** |  **__**  
---|---  
  
Subordinate objects include the following: **[Idxinfo](Subordinate%20SQL%20Objects.htm#idxinfo)**, **[Colinfo](Subordinate%20SQL%20Objects.htm#colinfo)** and **[Tblinfo](Subordinate%20SQL%20Objects.htm#tblinfo)**. The methods and properties belonging to these objects are described below.

## Idxinfo

Below is a list of _Idxinfo_ methods and properties:

**Idxinfo \- Provides a common means to describe the indexes for a definition (table) or file**  
---  
**Idxinfo** **Methods** |  **Description**  
**AddSegment**(_n_) |  Adds a new index segment at the position specified by _n_. If _n_ is null, then a new index segment will be added at the end. Your index object's **SegNo** will be positioned to the new segment added.  
**DropSegment**(_n_) |  Removes an index segment at the position specified by _n_. If _n_ is null, then the last index segment will be removed. Your index object's **SegNo** will be positioned to the removed segment.  
**GetValues$**(_iol_obj_ _$_) |  Return value of queried property or properties as a data record:  
  
_iol_obj_ _$_ = **CPL(** "_iolistname_ _$_ ")  
_X$_ = **Object'GetValues**(_iol_obj_ _$_)  
_X$_ = Value found in _name$_ for this object  
**InitValues**( ) |  Initializes the object's properties. Strings will be set to null, numeric and Booleans to zero.  
**Segment**(_n_) |  Simple method to change segments. Returns object ID after setting **SegNo**. Allows the user to code:  
  
Obj'Segment(4)'ColumnWidth  
** _  
or_**   
  
X$ = Obj'Segment(3)'Attributes$  
**SetValues**(_val_ _$_ , _iol_obj_ _$_) |  Set object's properties to the value or values specified:  
  
_iol_obj_ _$_ = **CPL**("_iolistname_ _$, attributes$_ ")   
_val_ _$_ = "_newname_ "+**SEP** +"Enter your Name" **Object'SetValues**(_val_ _$, iol_obj$_) will return 1 if passed, 0 if failed.  
**Idxinfo** **Properties** |  **Description**  
**Attributes$** |  Attribute string for current index: |  **U** |  Unique  
---|---  
" " |  Not Unique  
**ColumnAttr$** |  Attribute string for current segment: |  **A** |  Ascending  
---|---  
**D** |  Descending  
**ColumnName$** |  Name of column based on current segment  
**ColumnNullCharacter$** |  _(Not Used)_  
**ColumnOffset** |  Offset into current segment's column (zero-based)  
**ColumnWidth** |  Width to use of current segment's column (zero indicates full column)  
**IsExternal** |  _(Not Used)_  
**IsUnique** |  Boolean indicator for unique index  
**Name$** |  Name of the index  
**NullCharacter$** |  _(Not Used)_  
**NullSuppress** |  _(Not Used)_  
**SegCount** |  **_(Read Only)_** Number of segments for index  
**SegNo** |  Current segment number being referenced  
  
## Colinfo

Below is a list of _Colinfo_ methods and properties:

**Colinfo \- Provides a common definition of a data element and provides for common data validation rules**  
---  
**Colinfo** **Methods** |  **Description**  
**GetValues$**(_iol_obj_ _$_) |  Return value of queried property or properties as a data record:  
  
_iol_obj_ _$_ = **CPL(** "_iolistname_ _$_ ")  
_X$_ = **Object'GetValues**(_iol_obj_ _$_)  
_X$_ = Value found in _Name$_ for this object  
**InitValues**( ) |  Initializes this object's properties. Strings will be set to null, numeric and Booleans to zero.  
**SetValues**(_val_ _$_ , _iol_obj_ _$_) |  Set object's properties to the value or values specified:  
  
_iol_obj_ _$_ = **CPL**("_iolistname_ _$, attributes$_ ")   
_val_ _$_ = "_newname_ "+**SEP** +"Enter your Name" **Object'SetValues**(_val_ _$, iol_obj$_) will return 1 if passed, 0 if failed.  
**Validate**(_val_ __ | _val_ _$_) |  Validate the contents of the column. Will return 1 if valid, 0 if not. Reason for rejection will be in **ErrorCode$** **/ ErrorMessage$**.  
**Colinfo** **Properties** |  **Description**  
**AlternateName$** |  _(Not Used)_  
**Class$** |  _(Not Used)_  
**ColumnNo** |  Column number  
**DefaultValue$** |  _(Not Used)_  
**Description$** |  _(Not Used)_  
**ErrorCode$** |  _(Not Used)_  
**ErrorMessage$** |  _(Not Used)_  
**Extension$** |  _(Not Used)_  
**ExternalFormat$** |  _(Not Used)_  
**Help$** |  _(Not Used)_  
**InputLength** |  **_(Read Only)_** Length required to allow user to input this data  
**InternalFormat$** |  Valid formats include: **ODBC Types** |  "AUTONUMBER" |  "DATE" |  "INT" |  "NUMERIC" |  "TEXT"  
---|---|---|---|---  
"BIGINT" |  "DATETIME" |  "INTEGER" |  "NVARCHAR" |  "TIMESTAMP"  
"BINARY" |  "DATE/TIME" |  "LONG VARCHAR" |  "OLE OBJECT" |  "TINYINT"  
"BIT" |  "DECIMAL" |  "MEMO" |  "REAL" |  "UNIQUEIDENTIFIER"  
"CHAR" |  "DOUBLE PRECISION" |  "MONEY" |  "SMALLDATETIME" |  "VARBINARY"  
"CHARACTER" |  "FLOAT" |  "NCHAR" |  "SMALLINT" |  "VARCHAR"  
"COUNTER" |  "HYPERLINK" |  "NTEXT" |  "SMALLMONEY" |  "YES/NO"  
"CURRENCY" |  "IMAGE" |  "NUMBER" |  "SQL_VARIANT" |   
  
**OCI Types**

"BFILE" |  "NCLOB"  
---|---  
"BLOB" |  "NUMBER"  
"CHAR" |  "NVARCHAR2"  
"CLOB" |  "RAW"  
"DATE" |  "ROWID"  
"FLOAT" |  "UROWID"  
"LONG" |  "VARCHAR2"  
"LONG RAW" |  "XMLTYPE"  
"NCHAR" |   
  
**DB2 Types**

"BIGINT" |  "INTERGER"  
---|---  
"BLOB" |  "LONG VARCHAR"  
"CHARACTER" |  "REAL"  
"CLOB" |  "SMALLINT"  
"DATE" |  "TIME"  
"DECIMAL" |  "TIMESTAMP"  
"DOUBLE" |  "VARCHAR"  
**IsExternal** |  _(Not Used)_  
**IsRequired** |  _(Not Used)_  
**IsUpperCase** |  _(Not Used)_  
**Length** |  Length of data in total bytes/digits  
**Name$** |  Name of the column  
**Notes$** |  _(Not Used)_  
**Occurs$** |  _(Not Used)_  
**ODBCOption$** |  _(Not Used)_  
**Query$** |  _(Not Used)_  
**Scale** |  **_(Numeric Type Only)_** Number of decimal points  
**Security$** |  _(Not Used)_  
**ShortName$** |  Short name to be used for column headers  
**Tag$** |  _(Not Used)_  
**Type$** |  Type of data: |  **S** |  String  
---|---  
**N** |  Numeric  
**Validation$** |  _(Not Used)_  
**Variable$** |  **_(Read Only)_** Variable name to be used to store data. Name plus **$** if string.  
**ViewsExpression$** |  _(Not Used)_  
  
## Tblinfo

Below is a list of _Tblinfo_ methods and properties:

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
_val_ _$_ = "_newname_ "+**SEP** +"Enter your Name" **Object'SetValues**(_val_ _$, iol_obj$_) will return 1 if passed, 0 if failed.  
**Tblinfo** **Properties** |  **Description**  
**BlockSize$** |  _(Not Used)_  
**Description$** |  Short description of the table contents  
**Extension$** |  _(Not Used)_  
**Group$** |  _(Not Used)_  
**IOProgram$** |  _(Not Used)_  
**IsDataCompression** |  _(Not Used)_  
**IsExtendedRecords** |  _(Not Used)_  
**LastChangeBy$** |  _(Not Used)_  
**LastChangeDate$** |  _(Not Used)_  
**Name$** |  Logical file name  
**Notes$** |  _(Not Used)_  
**Options$** |  _(Not Used)_  
**PhysicalFile$** |  _(Not Used)_  
**Security$** |  _(Not Used)_  
**Separator$** |  _(Not Used)_
