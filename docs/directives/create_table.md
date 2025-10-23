# Directives 

**CREATE TABLE** |  **_Create Keyed File (EFF)_**  
---|---  
  
##  Format

**CREATE TABLE** _filename$_ ,[,_extkey_len_][,_key_def$_][,_max_recs_][,_rec_size_][_,fileopt_]  
  
**_Where:_**

_filename$_ |  Name of the Keyed file to create. String expression.  
---|---  
_extkey_len_ |  Numeric expression. Length of the external key for all records in the file.  
_key_def_ _$_ |  String expression defining the key. The Keyed file can be single or multi-keyed. A key definition is made up of one or more key field definitions ranging from 0 to 15 for FLR/VLR files or 0 to 255 for EFF files. Use integers for specific field numbers, 0 (zero for record-based offsets) or KEY to reference a value based on an external key. The key definition formats are as follows: |  **_Single Key Field:_** |  **[**["_keyname_ _"_**:**]_field_**:**_offset_**:**_len_[**:** "_attr_ "] **]**  
---|---  
**_Composite Key Fields (Using the + Operator):_** |  **[**[_"keyname"_**:**]_field_**:**_offset_**:**_len_[**:**_"attr"_] ]**_+_**[_field_**:**_offset_**:**_len_[**:**_"attr"_] **]**  
**_Multi-Keyed Alternate Key Fields are Comma-Delimited:_** |  **[**[_"keyname"_**:**]_field_**:**_offset_**:**_len_[**:**_"attr"_] ]**_,_**[[_"keyname"_**:**]_field_**:**_offset_**:**_len_[**:**_"attr"_] **]**  
  
#### **Note:  
** The _outer_ set of square brackets in the above formats are part of the syntax. The _inner_ brackets indicate optional syntax items (i.e. the brackets enclosing the optional [:"_attr_ "] are not part of the syntax).  
  
**_Where:_**

_keyname_ |  Name of key assigned for use in **KNO=**_name$_ options.  
---|---  
_field_ |  Integer, 1 to number of fields, (0 = record-based offset) or KEY to reference a value based on an external key.  
_offset_ |  Starting position within the field.  
_len_ |  Length - number of characters in the key field (integer).

#### **Note:**  
The maximum key field length, including the field offset value, is 3839.  
  
"_attr_ " |  Attribute characters (see **Key Definition Attributes**).  
**:** |  A _colon_ is the separator for elements in a key segment.  
_max_recs_ |  Maximum number of records the file is allowed. Optional numeric expression. The default is zero (no limit). (Use a comma with no value to set the default.) If a positive value is supplied, PxPlus creates and pre-allocates disk space for the file. With a negative value, PxPlus allocates sufficient disk space for the file but will set the _max_recs_ count back to zero (unlimited).  
_rec_size_ |  Maximum size of the data portion of the record (excluding the key). A negative value creates a variable-length record (VLR) data file with the maximum record length equal to the positive value of this field. A positive value creates a fixed-length record (FLR) formatted file. If you do not specify size, the default is VLR with a maximum record size of 256.  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSZ=**_num_ |  Block size. Numeric expression (1 - 63).  
---|---  
**ERR=**_stmtref_ __ |  Error transfer.  
**SEP=**_char$_**_| *_** |  Default field separator character. Hex or ASCII string value.  
**OPT=**_char$_ |  Single character parameter: |  "C" |  Compressed. Adds simple compression to record data.  
---|---  
"X" |  Extended Record Size. Extends record sizes up to 2GB per record.  
"Z" |  Set ZLib Compression for VLR and EFF Files.  
"0" |  Create VLR/FLR files (default if 'KF'=0).  
"1" |  Create EFF Files with 2GB limit.  
"2" |  Create EFF Files without 2GB limit (supported platforms).  
  
#### **Note:**  
OPT="2" generates Error #99: Feature not supported on platforms that do not offer Large File Support (LFS).  
  
##  Description

Use the **CREATE TABLE** directive to create a file with one or more keys. If the first field in the directive after the filename is a number, PxPlus creates an _external_ file key (i.e. an index to the file). If the first field in the directive is a key definition enclosed in square brackets [ ], then PxPlus uses only _internal_ key fields instead.

#### **Note:**  
By default, the **CREATE TABLE** directive will create Enhanced File Format (EFF) files on platforms that support Large File System (LFS), 64-bit addressing; however, by setting OPT="0" in the syntax, **CREATE TABLE** can also be used to create variable-length record (VLR) data files or fixed-length record (FLR) formatted files.  
  
For more information on VLR/FLR, see [**KEYED**](keyed.md) directive.

PxPlus considers the first key specified for an **_EFF_** file to be the primary key. Every record must have a unique primary key. You can have duplicate secondary keys from record to record. There is a maximum of 255 keys allowed on a file with a maximum of 255 data components making up these 255 keys. For **_VLR/FLR_** files, there is a maximum of 16 key fields allowed on a file with a maximum of 96 data components making up the 16 keys. There is no limit (other than the maximum of 96 key components) to the number of fields that comprise a key.

If a given filename already exists, PxPlus returns Error #12: File does not exist (or already exists). 

Keys have the following limits:

  * Maximum External key size is 127 bytes.
  * Maximum Segment size within any key is 127 bytes.
  * Total maximum multi-segmented key size is 240 bytes.



**_Enhanced File Format (EFF) Notes_**

EFF records are always variable length. In future, EFF files will support transactions. See [**SYSTEM_JRNL**](system_jrnl.md) directive.

The following file limitations exist for EFF files:

|  1. |  63Kb (64512 bytes) is the maximum block size.  
---|---|---  
|  2. |  The maximum record size is 64000 bytes. When using extended records, the record size is limited to 32000 bytes when created, although records can be as large as 2GB.  
|  3. |  EFF files do not support the multi-segmented techniques available for VLR files.  
|  4. |  **_Refer to the table for sample file size limitations._** The block size determines the maximum file size. EFF files will only use 3-byte pointers _(as of PxPlus v6.00)_. The ability to use 4-byte pointers is part of the design to allow larger file sizes and will be enabled in a future version of PxPlus. |  **Block Size** |  **3-Byte Pointers** |  **4-Byte Pointers**(_future_)  
---|---|---  
(KB) |  Max Pages per Inventory Segment |  Max Addressable Pages |  Size of File in MB |  Max Pages per Inventory Segment |  Max Addressable Pages |  Size of File in MB  
4 |  1,022 |  2,056,264 |  8,032 |  818 |  1,645,816 |  6,429  
8 |  2,046 |  8,388,607 |  65,536 |  1,637 |  9,998,796 |  78,116  
12 |  3,070 |  8,388,607 |  98,304 |  2,456 |  25,061,024 |  293,684  
16 |  4,094 |  8,388,607 |  131,072 |  3,275 |  46,832,500 |  731,758  
20 |  5,118 |  8,388,607 |  163,840 |  4,094 |  75,313,224 |  1,470,961  
24 |  6,142 |  8,388,607 |  196,608 |  4,914 |  110,525,688 |  2,590,446  
28 |  7,166 |  8,388,607 |  229,376 |  5,733 |  152,429,004 |  4,167,981  
32 |  8,190 |  8,388,607 |  262,144 |  6,552 |  201,041,568 |  6,282,549  
36 |  9,214 |  8,388,607 |  294,912 |  7,371 |  256,363,380 |  9,012,775  
40 |  10,238 |  8,388,607 |  327,680 |  8,190 |  318,394,440 |  12,437,283  
44 |  11,262 |  8,388,607 |  360,448 |  9,010 |  387,177,720 |  16,636,543  
48 |  12,286 |  8,388,607 |  393,216 |  9,829 |  462,631,372 |  21,685,846  
52 |  13,310 |  8,388,607 |  425,984 |  10,648 |  544,794,272 |  27,665,334  
56 |  14,334 |  8,388,607 |  458,752 |  11,467 |  633,666,420 |  34,653,632  
60 |  15,358 |  8,388,607 |  491,520 |  12,286 |  729,247,816 |  42,729,364  
63 |  16,126 |  8,388,607 |  516,096 |  12,901 |  805,383,628 |  49,549,969  
  
##  See Also

[**KEYED Create Single/Multi-Keyed File**](keyed.md)  
[**DIRECT Create File with Keyed Access**](direct.md)  
[**SYSTEM_JRNL File System Journalization**](system_jrnl.md)  
[**ADD INDEX Add Key to Keyed File**](add_index.md)  
[**DROP INDEX Drop Key from Keyed File**](drop_index.md)  
[**RENAME..INDEX Rename Keys in Keyed File**](rename_index.md)  
[**SORT Create File for Sorting**](sort.md)
