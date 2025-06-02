# Data Files

**Keyed Files** |  **__**  
---|---  
  
This is the most common file format used in PxPlus. It contains at least one unique (primary key) field that identifies each record on the file. PxPlus supports internally and externally defined keys with record sizes up to 2GB. A wide variety of key segment options is available.

Keyed files support fixed length records (FLR), variable length records (VLR), and the PxPlus enhanced file format (EFF). Up to 16 keys and 96 segments are supported for FLR and VLR based files, and EFF is up to 255 keys and 255 segments per key.

For information on EFF files, see **[Enhanced File Format](Enhanced%20File%20Format.md)**. For an explanation of EFF vs. VLR file formats, see **[EFF vs. VLR File Formats](EFF%20vs%20VLR%20File%20Formats.md)**.

Three types of Keyed files can be created:

**** |  **[Direct Files](Keyed%20Files.htm#direct)** |  Consist of an external key (FLR/VLR, EFF)  
---|---|---  
**** |  **[Sort Files](Keyed%20Files.htm#sort)** |  Consist of keys but no data (FLR/VLR, EFF)  
**** |  **[Multi-Keyed Files](Keyed%20Files.htm#multi_keyed)** |  Consist of one or more keys (FLR/VLR, EFF)  
  
All PxPlus I/O directives work with keyed files. See **[Processing Data Files](../Processing%20Data%20Files/Overview.md)**.

The **[READ](../../../directives/read.md)** directive without a **KEY=** option reads the record with the next higher key. When reading a file with an external key, it is normal to first retrieve the key of the next record.

**_Example:_**

> k$=KEY(1,end=done)  
>  READ (1,key=k$)

The **[WRITE](../../../directives/write.md)** directive without a **KEY=** option is invalid unless the record was previously extracted or has an imbedded key. See **[Multi-Keyed Files](Keyed%20Files.htm#multi_keyed)**.

The **[REMOVE](../../../directives/remove.md)** directive deletes the record whose key matches the key specified. When the record is deleted, its associated disk space is returned for reuse within the file.

Accessing or attempting to access a record whose key does not exist positions the file pointer to the next higher existing key. The only exception is when using the **[FIND](../../../directives/find.md)** directive. This directive is a variation of the**READ** verb that does not update the current file pointer if the key is not found.

**_Example:_**

This assumes that the file ACTNME has a key of name with a data field of account number.

> 0010 OPEN (2) "ACTNME" ! Assign ACTNME to file 2   
>  0020 INPUT "Enter name:",NM$   
>  0030 IF NM$="" THEN END   
>  0040 K$=NM$   
>  0050 READ (2,KEY=K$,DOM=0070) A_NUM$ ! Read record info   
>  0060 PRINT A_NUM$, " ", K$   
>  0070 K$=KEY(2,END=0020) ! Get next higher key   
>  0080 IF K$<=NM$+$FF$ THEN GOTO 0050   
>  0090 CLOSE (2)

##  Direct Files

A **_direct file_** is a keyed file with an external key. The key size must be specified along with the file name. The **[DIRECT](../../../directives/direct.md)** directive is used to create a direct file:

> **DIRECT** _filename$_ , _max_len_ [, _max_recs_ [, _rec_size_ ]]

**_Where:_**

_filename$_ |  File name of the**DIRECT** (Keyed) file. String expression.  
---|---  
_max_len_ |  Maximum length of the key for all records in the file. Numeric expression, integer.  
_max_recs_ |  Maximum number of records in the file. Optional numeric expression. Use a comma with no value to set the default (zero - unlimited). If a positive value is supplied, PxPlus creates and pre-allocates disk space for the file (for FLR/VLR formats). With a negative value, PxPlus allocates sufficient disk space for the file (for FLR/VLR formats), but will set _max_recs_ back to zero.  
_rec_size_ |  Maximum size of the data portion of each record (excluding the key). Optional. Numeric expression. You can use: |  _No Value_ |  Default is VLR with maximum size of 256.  
---|---  
_Positive Integer_ |  FLR of size specified.  
_Negative Integer_ |  VLR with maximum length specified.  
  
**_Example:_**

> DIRECT "CSTFLE",6

##  Sort Files

The **_sort file_** is a type of keyed file that consists of a key only with no data record portion. Key size must be specified, along with the file name. The **[SORT](../../../directives/sort.md)** directive is used to create a sort file:

> **SORT** _filename$_**,**_max_keysize_ [, _max_rec_ ]

**_Where:_**

_filename$_ |  Name of the**SORT** file to create. String expression.  
---|---  
_max_keysize_ |  Maximum key size to be maintained for this file. Numeric expression.  
_max_rec_ |  Estimated number of records that the file is to contain. Default is no initial allocation of file space with no limit on final size. Numeric expression.  
  
**_Example:_**

> SORT "CSTFLE",6

##  Multi-Keyed Files

The **[KEYED](../../../directives/keyed.md)** directive can create a file with one or more keys. The primary key may be external or internal. If the first field after the file name is a number, an external file key is created; if it contains a key definition (enclosed within [ ] ), then only internal key fields may be used.

The first key specified is considered the primary key. Every record must have a unique primary key. You can have duplicate secondary keys from record to record.

A **_multi-keyed_** file is a keyed file with one primary record key and up to 15/255 secondary keys. The primary key must be unique within the file, while the secondary keys may be duplicated between records; e.g. where two JONES may exist. Multi-keyed files are defined like any keyed file except that the key definition contains a series of comma-separated key declarations. The first key declaration is for the primary key; the remaining declarations are for secondary keys.

The**KEYED** directive is used to create a file with one or more keys:

> **KEYED** _filename$_ ,[,_extkey_len_][,_key_def$_][,_max_recs_[,_rec_size_]][_,fileopt_]

**_Where:_**

_filename$_ |  Name of the Keyed file to create. String expression.  
---|---  
_extkey_len_ |  Numeric expression. Length of the external key for all records in the file.  
_key_def_ _$_ |  String expression defining the key. The Keyed file can be single or multi-keyed. A key definition is made up of one or more key field definitions, ranging from 0 to 15 for FLR/VLR files or 0 to 255 for EFF files. Use integers for specific field numbers, 0 (zero for record-based offsets) or KEY to reference a value based on an external key. The key definition formats are as follows: |  **_Single Key Field:_** |  **[**["_keyname_ _"_**:**]_field_**:**_offset_**:**_len_[**:** "_attr_ "] **]**  
---|---  
**_Composite Key Fields (Using the + Operator):_** |  **[**[**_"_**_keyname_ _"_**:**]_field_**:**_offset_**:**_len_[**:_"_**_attr_** _"_**] ]**_+_**[_field_**:**_offset_**:**_len_[**:_"_**_attr_** _"_**] **]**  
**_Multi-Keyed Alternate Key Fields are Comma-Delimited:_** |  **[**[**_"_**_keyname_ _"_**:**]_field_**:**_offset_**:**_len_[**:_"_**_attr_** _"_**] ]**_,_**[[**_"_**_keyname_ _"_**:**]_field_**:**_offset_**:**_len_[**:_"_**_attr_** _"_**] **]**  
  
#### **Note:  
** The _outer_ set of square brackets in the above formats are part of the syntax; the _inner_ brackets indicate optional syntax items (i.e. the brackets enclosing the optional [:"_attr_ "] are not part of the syntax).  
  
**_Where:_**

_keyname_ |  Name of key assigned for use in**KNO=**_name$_ options.  
---|---  
_field_ |  Integer, 1 to number of fields, (0 = record-based offset) or KEY to reference a value based on an external key.  
_offset_ |  Starting position within the field.  
_len_ |  Length, number of characters in the key field (integer).

#### **Note:**  
The maximum key field length, including the field offset value, is 3839.  
  
"_attr_ " |  Attribute characters.  
**:** |  Colon - the separator for elements in a key segment.  
_max_recs_ |  Maximum number of records the file is allowed. Optional numeric expression. The default is zero (no limit). Use a comma with no value to set the default. If a positive value is supplied, PxPlus creates and pre-allocates disk space for the file (for FLR/VLR formats). With a negative value, PxPlus allocates sufficient disk space for the file (for FLR/VLR formats) but will set the _max_recs_ count back to zero (unlimited).  
_rec_size_ |  Maximum size of the data portion of the record (excluding the key). A negative value creates a variable length record (VLR) data file with the maximum record length equal to the positive value of this field. A positive value creates a fixed length record (FLR) formatted file. If you do not specify size, the default is VLR with a maximum record size of 256. The maximum record size for a VLR file is 31000 bytes. Attempting to create a VLR file with a record size more than 31000 bytes results in an FLR file with the requested record size.  
_fileopt_ |  Supported file options: |  **BSZ=**_num_ |  Block size. Numeric expression (1 to 31K for VLR, 1 to 63K for EFF).  
---|---  
**ERR=**_stmtref_ |  Error transfer.  
**SEP=**_char$_**_| *_** |  Default field separator character. Hex or ASCII string value.   
**OPT=**_char$_ |  Single character parameter: |  "C" |  Compressed. Adds simple compression to record data.  
---|---  
"U" |  Enable [**UpdatePlus™**](../../../directives/keyed.htm#updateplus) logic for file.  _(UpdatePlus™ was added to PxPlus version 7.65)_ Only supported on VLR and FLR files - no EFF support.  _(as of build 9180)_  
"X" |  Extended Record Size. Extends record sizes up to 2GB per record.  
"Z" |  Set ZLib Compression for VLR and EFF Files.

#### **Note:**  
"Z" and "C" together will result in an Error #32.  
  
"0" |  Create VLR/FLR files (default if 'KF'=0).  
"1" |  Create EFF Files with 2GB limit.  
"2" |  Create EFF Files without 2GB limit (supported platforms).

#### **Note:**  
OPT="2" generates Error #99: Feature not supported on platforms that do not offer Large File Support (LFS).  
  
##  Key Definitions

The _key_definitions_ parameter contains one or more key declarations, each comma separated. The first key declaration is for the primary key; the remaining declarations are for the secondary keys. If an external key field is to be created, it must be a primary key and its length given as the first key declaration.

Keys that exist with the data portion of the record are defined by a key declaration in the following format:

> [{"_keyname_ ":}_field_ __no_ :_offset_ :_length_{:"_options_ "}]

**_Where:_**

_keyname_ |  This is an optional name for the key. Within the program, the key can be accessed either by its number (primary key is zero) or by using its key name.  
---|---  
_field_no_ |  This value indicates the field number within the data record. If the _field_no_ is specified as zero, then the complete data record is considered a field. If desired, _field_no_ can be specified as KEY indicating the external key.  
_offset_ |  This field contains the offset within the field to be used. One (1) indicates the first position.  
_length_ |  This field contains the length of data to be used. If the actual _field_no_ specified is longer than the length, it will be truncated within the key value. If the field is shorter, it will be padded with nulls.  
_options_ |  This optional string can consist of one or more of the following values: |  "#" |  Auto-increment - Space filled string. (See **Note** below.)  
---|---  
"+" |  Auto-increment - Zero filled string. (See **Note** below.)  
"-" |  Signed binary integers key segments. This option cannot be used in conjunction with the following segment options on the same segment: "#", "+", "B", "C", "D", "I", "L", "T", "U", "Z" string.  
"A" |  Ascending key _(assumed)_.  
"B[.n]" |  Indicates that the segment contains a numeric value. Field will internally be converted to its binary equivalent and stored into the data file. Negative numbers will occur before position numbers in ordinary numeric value sequence.  
  
If '.n' is provided, the value 'n' is assumed to be the number of digits to the right of the decimal point that are to be maintained. Before the internal value is created, the value will be TRUNCATED to the number of decimal places specified. _(The "B" segment attribute was added to PxPlus in version 6.30.)_  
"C" |  Force uppercase for individual key segments to create case-insensitive keys. **_Example:_** KEYED "filename",[1:1:10:"C"],[2:1:40:"L"]+[1:1:10:"C"]

#### **Note:**  
The conversion tables for upper/lowercase conversions are located in the PxPlus message file **[*MLFILE.EN](../../../PxPlus%20System%20Programs%20and%20Files/Message%20Library/Overview.md)**. You can set these tables using the **[DEF UCS and DEF LCS](../../../directives/def_cvs~dte~lcs~ucs.htm#Mark8)** directives and retrieve values using the **[UCS(*)](../../../functions/ucs.md)** and **[LCS(*)](../../../functions/lcs.md)** functions.  
  
"D" |  Descending order (_Default:_ Ascending).  
"I" |  Binary auto-increment. Field (1, 2, or 4 bytes in length) will be auto-incremented as records are added to the file. Key must be record-based; i.e. field is 0 and offset is location in record. (See **Note** below.)  
"K[:n]" |  Null key suppression.  _n_ is the Hex value of the character to suppress if all characters match (defaults to $00$ if not specified). If the entire key evaluates to null, the key will not be a part of this key tree. This cannot be used on a primary key or in conjunction with the "N" option.  
"L" |  Force lowercase for individual key segments to create lowercase insensitive keys.  
"N[:n]" |  Null segment suppression.  _n_ __ is the Hex value of the character to suppress if all characters match. If any segment within the key evaluates to null, the key will not be a part of this key tree. This cannot be used on a primary key or in conjunction with the "K" option.  
"S" |  Swapped (same as **SWP( )** type 7, Intel x86 style swapping only).  
"T" |  Force automatic accent translation for individual key segments (i.e. to translate accented/extended characters to their non-accented counterparts). You will find this useful for sorting multilingual characters into a single unified sort sequence.  
  
**_Example:_**  
  
KEYED "_filename_ ",[1:1:40:"T"],[2:1:40:"TCD"]

#### **Note:  
** The conversion tables for accent translations are located in the PxPlus message file **[*MLFILE.EN](../../../PxPlus%20System%20Programs%20and%20Files/Message%20Library/Overview.md)**. You can set this table using the **[DEF CVS](../../../directives/def_cvs~dte~lcs~ucs.md)** directive and retrieve values using the **[CVS(*)](../../../functions/cvs.md)** function.  
  
"U" |  If you declare an alternate key segment as _unique_ , then no duplicate keys are allowed on writing a record. PxPlus generates Error #11: Record not found or Duplicate key on write. If you designate any segment in a key definition as unique, then the entire key will be unique.

#### **Note:  
** The primary key must always be unique.  
  
"Z" |  Zero terminated strings. This will consider a null byte ($00$) in a string as the end of the data within the field, and will ignore any data between the null byte and the end of the key field. (Also known in C as a Z-String.)  
  
#### **Note:**  
Only one of the auto-increment options ("#", "+" or "I") can be used per file.  
  
If desired, multiple key descriptors can be specified for a single key. This will generate a composite key. The data fields will be concatenated together to form a complete key. When defining a composite key, the individual key descriptors are to be separated by a (+) _plus sign_.

**_Example:_**

Given customer file with an external key as follows:

**External Key** |  **Field #1** |  **Field #2** |  **Field #3** |  **. . .**  
---|---|---|---|---  
CUSTNO |  NAME |  ADDRESS |  TYPE |  . . .  
  
The following KEYED directive would be used to create the above file with CUSTNO as the primary key, a secondary key of NAME and a composite secondary key of TYPE and CUSTNO:

> KEYED "CUSTDB",5,[1:1:20],[3:1:1]+[KEY:1:5],,200

This directive would create the file "CUSTDB" with a five-character external key (CUSTNO), a 20-character secondary key of the first 20 characters of field 1 (NAME), and a six-character secondary key of the TYPE (1 ch), followed by the primary key. The record size would be 200 bytes each with no limit to the number of records.

#### **Note:**  
If, when generating a key, the descriptor references data outside the data field (either by an offset outside of field specified or a length which exceeds the field length) and the descriptor is other than the last descriptor within a composite key, the key is padded with Hex $00$ in order to achieve the length specified.

There is a limit of 96 total data fields allowable in a file for use within keys (on FLR/VLR files). This means that the total number of data fields that can be used to define keys must be no more than 96 with the maximum number of keys being 1 primary and 15 secondary. If, for example, one key consists of 20 data fields, the maximum number of additional fields would now be limited to 76 for a total of 15 keys, 96 data fields.

If no external key is desired on the file, only key descriptors would be specified with the first key descriptor being considered the primary key.

## Using the Secondary Keys

For the purposes of accessing multi-keyed data files, each key is assigned a key number. The primary key is assigned the key number of zero (0), the first secondary key is assigned one (1), and so on. When reading a multi-keyed file, the system performs the read based on the current key number being used. The key number is specified by the**KNO=** option in the **[WRITE](../../../directives/write.md)**, **[FIND](../../../directives/find.md)**, **[EXTRACT](../../../directives/extract.md)** directives or any of the key functions; i.e. **[KEC( )](../../../functions/kec.md)**, **[KEF( )](../../../functions/kef.md)**, **[KEL( )](../../../functions/kel.md)**, **[KEN( )](../../../functions/ken.md)**, **[KEP( )](../../../functions/kep.md)**, **[KEY( )](../../../functions/key.md)**. Once **KNO=** is specified, it remains the current key number until changed by a subsequent**KNO=** option. When a file is initially opened, the key number is set to zero (primary key).

All file input directives function basically the same on multi-keyed files as they do on normal single-keyed files. One exception is the **READ (**_n,**KEY**_**=**_xxx_**)** directive on secondary keys. This directive will read the first record that contains the desired key. Specifying a**KEY=** on an alternate key that contains duplicates will result in what appears to be an endless loop; i.e., the read will continue to re-position the key pointer to the first of the duplicates. Therefore, do not use the**KEY=** option in this case.

## Updating Multi-Keyed Files

Adding or updating records on a multi-keyed file uses the same **[WRITE](../../../directives/write.md)** directive as does a single-keyed file. The record to be changed or added is determined by the primary key. If the file contains an external primary key, the **KEY=** option must be specified in the **WRITE** statement. If the file does not contain an external key, then the key will be determined by the data fields presented in the**WRITE** statement.

#### **Note:**  
If a**KEY=** option is specified in a**WRITE** directive and no external key exists, or conversely, if no**KEY=** option is specified and an external key does exist, an Error #80: Invalid key definition, number or name is generated.

The**REMOVE** statement is used to delete a record from a multi-keyed file. The**KEY=** option is recommended on the **[REMOVE](../../../directives/remove.md)** directive. The key specified must be the primary key of the record to be removed, regardless of whether the key is external or not. If the**KEY=** option is not specified, then the last record read or extracted will be removed.

## Multi-Keyed Memory Files

Memory files (***memory***) can now have alternate keys specified. When opening a memory file, you can add a **KEYDEF=** option that defines the alternate key definition. Standard PxPlus alternate key definitions can be used.

**_Example:_**

The following will create a memory file with a six-character external key and two alternate keys based on fields 2 and 3 of the data:

> OPEN (1) "*memory*;KEYDEF=6,[2:1:6:""U""],[3:1:30]"

If desired, the key definition for a memory file can include Key names.

#### **Note:**  
Unlike standard *MEMORY* files, *MEMORY* files created with key definitions cannot have record inserted by record index. The key fields are always used.
