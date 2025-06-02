# Directives 

**KEYED** |  **_Create Single/Multi-Keyed File_**  
---|---  
  
##  Format

**KEYED** _filename$_ ,[,_extkey_len_][,_key_def$_][,_max_recs_[,_rec_size_]][_,fileopt_]

**_Where:_**

_filename$_ |  Name of the Keyed file to create. String expression.  
---|---  
_extkey_len_ |  Numeric expression. Length of the external key for all records in the file.  
_key_def_ _$_ |  String expression defining the key. The Keyed file can be single or multi-keyed. A key definition is made up of one or more key field definitions ranging from 0 to 15 for FLR/VLR files or 0 to 255 for EFF files. Use integers for specific field numbers, 0 (zero for record-based offsets) or KEY to reference a value based on an external key. The key definition formats are as follows: |  **_Single Key Field:_** |  **[**["_keyname_ _"_**:**]_field_**:**_offset_**:**_len_[**:** "_attr_ "] **]**  
---|---  
**_Composite Key Fields (Using the + Operator):_** |  **[**[_"keyname"_**:**]_field_**:**_offset_**:**_len_[**:**_"attr"_] ]**_+_**[_field_**:**_offset_**:**_len_[**:**_"attr"_] **]**  
**_Multi-Keyed Alternate Key Fields are Comma-Delimited:_** |  **[**[_"keyname"_**:**]_field_**:**_offset_**:**_len_[**:**_"attr"_] ]**_,_**[[_"keyname"_**:**]_field_**:**_offset_**:**_len_[**:**_"attr"_] **]**  
  
#### **Note:**  
The outer set of square brackets in the above formats are part of the syntax; the inner brackets indicate optional syntax items (i.e. the brackets enclosing the optional [:"attr"] are not part of the syntax).  
  
**_Where:_**

_keyname_ |  Name of key assigned for use in **KNO=**_name$_ options.  
---|---  
_field_ |  Integer, 1 to number of fields, (0 = record-based offset) or KEY to reference a value based on an external key.  
_offset_ |  Starting position within the field.  
_len_ |  Length, number of characters in the key field (integer).

#### **Note:**  
The maximum key field length, including the field offset value, is 3839.  
  
"_attr_ " |  Attribute characters (see **Key Definition Attributes**).  
**:** |  Colon - the separator for elements in a key segment.  
_max_recs_ |  Maximum number of records the file is allowed. Optional numeric expression. The default is zero (no limit). (Use a comma with no value to set the default.) If a positive value is supplied, PxPlus creates and pre-allocates disk space for the file. With a negative value, PxPlus allocates sufficient disk space for the file but will set the _max_recs_ count back to zero (unlimited).  
_rec_size_ |  Maximum size of the data portion of the record (excluding the key). A negative value creates a variable length record (VLR) data file with the maximum record length equal to the positive value of this field. A positive value creates a fixed length record (FLR) formatted file. If you do not specify size, the default is VLR with a maximum record size of 256. The maximum block size for a VLR file is 31KB, and the maximum record size is 31000 bytes. Attempting to create a VLR file with a record size more than 31000 bytes results in an FLR file with the requested record size.  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSZ=**_num_ |  Block size. Numeric expression (1 - 63).  
---|---  
**ERR=**_stmtref_ __ |  Error transfer.  
**SEP=**_char$_**_| *_** |  Default field separator character. Hex or ASCII string value.  
**OPT=**_char$_ |  Single character parameter: |  "C" |  Compressed. Adds simple compression to record data.  
---|---  
"N" **_or_** "n" |  OPT="N" enables the **['NK'](../parameters/nk.md)** system parameter on the file and OPT="n" disables it. If neither "N" nor "n" is included, the setting of the 'NK' system variable will control the setting on the file. This value ("N" or "n") will also be returned in the FIN(_nn_ , "KEY_OPTIONS") value; however, for compatibility reasons, it will **_not_** be included in the FILE_CREATE FIN ( ) value. _(The "N" and "n" options were added in PxPlus 2020.)_  
"U" |  Enable **UpdatePlus™** logic for file.  _(Only supported on VLR and FLR files as of build 9180 - No EFF support)_  
  
_(The UpdatePlus™ capability was added to PxPlus in version 7.65.)_

#### **Note:**  
Data Dictionary Maintenance provides a check box option to enable UpdatePlus™ logic for a specified file. See **[Data Dictionary Maintenance](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.htm#options)**.  
  
_(The Enable UpdatePlus™ logic option in Data Dictionary Maintenance was added in PxPlus 2017 Update 0002.)_  
  
"X" |  Extended Record Size. Extends record sizes up to 2GB per record. See **[Extended Length Records](keyed.htm#Mark10)**.  
"Z" |  Set ZLib Compression for VLR and EFF Files.

#### **Note:   
**"Z" and "C" together will result in an Error #32.  
  
"0" |  Create VLR/FLR files (default if 'KF'=0).  
"1" |  Create EFF Files with 2GB limit.  
"2" |  Create EFF Files without 2GB limit (supported platforms).

#### **Note:   
**OPT="2" generates Error #99: Feature not supported on platforms that do not offer Large File Support (LFS).  
  
**_Key Definition Attributes_**

Optional key definition segment attribute characters "_attr_ " can be used to refine key segment definitions.

**_Example:_**

> keyed "MES_FACTURES",[1:1:40:"T"],[2:1:40:"TCD"]

The following table defines the various attribute definition characters:

> **Character** |  **Definition**  
> ---|---  
> "#" |  Auto-increment - Space filled string.
> 
> #### **Note:**  
>  Only one of the auto-increment options ("#", "+" or "I") can be used per file.  
>   
> "+" |  Auto-increment - Zero filled string.
> 
> #### **Note:**  
>  Only one of the auto-increment options ("#", "+" or "I") can be used per file.  
>   
> "-" |  Signed binary integers key segments.
> 
> #### **Note:**  
>  This option cannot be used in conjunction with the following segment options on the same segment: "#", "+", "B", "C", "D", "I", "L", "T", "U", "Z" string.  
>   
> "A" |  Ascending key (_assumed_).  
> "B[.n]" |  Indicates that the segment contains a numeric value. Field will internally be converted to its binary equivalent and stored into the data file. Negative numbers will occur before position numbers in ordinary numeric value sequence.  
>   
>  If '.n' is provided, the value 'n' is assumed to be the number of digits to the right of the decimal point that are to be maintained. Before the internal value is created, the value will be TRUNCATED to the number of decimal places specified. See **Numeric Key Segments**. _(The "B" segment attribute was added in PxPlus v6.30.)_  
> "C" |  Force uppercase for individual key segments to create case insensitive keys.  
>   
> **_Example:_**  
>   
>  keyed "_filename_ ",[1:1:10:"C"],[2:1:40:"L"]+[1:1:10:"C"]
> 
> #### **Note:  
> ** The conversion tables for upper/lowercase conversions are located in the PxPlus message file **[*MLFILE.EN](../PxPlus%20System%20Programs%20and%20Files/Message%20Library/Overview.md)**. You can set these tables using the **[DEF UCS and DEF LCS](def_cvs~dte~lcs~ucs.htm#Mark8)** directives and retrieve values using the **[UCS(*)](../functions/ucs.md)** and **[LCS(*)](../functions/lcs.md)** functions.  
>   
> "D" |  Descending order (**_Default_ :** Ascending).  
> "I" |  Binary auto-increment. Field (1, 2, or 4 bytes in length) will be auto-incremented as records are added to the file. Key must be record-based; i.e. field is 0 and offset is location in record.
> 
> #### **Note:**  
>  Only one of the auto-increment options ("#", "+" or "I") can be used per file.  
>   
> "K[:_n_]" |  Null key suppression. _n_ is the Hex value of the character to suppress if all characters match (defaults to $00$ if not specified). If the entire key evaluates to null, the key will not be a part of this key tree. This cannot be used on a primary key or in conjunction with the "N" option, nor with numeric keys.  
> "L" |  Force lowercase for individual key segments to create case insensitive keys. (See the **_Example_** and **Note** in "C" above.)  
> "N[:_n_]" |  Null segment suppression.  _n_ __ is the Hex value of the character to suppress if all characters match. If any segment within the key evaluates to null, the key will not be a part of this key tree. This cannot be used on a primary key or in conjunction with the "K" option, nor with a numeric key segment.  
> "S" |  Swapped (same as **SWP( )** type 7, Intel x86 style swapping only).  
> "T" |  Force automatic accent translation for individual key segments (i.e. to translate accented/extended characters to their non-accented counterparts). You will find this useful for sorting multilingual characters into a single unified sort sequence.  
>   
> **_Example:_**  
>   
>  keyed "_filename_ ",[1:1:40:"T"],[2:1:40:"TCD"]
> 
> #### **Note:  
> ** The conversion tables for accent translations are located in the PxPlus message file **[*MLFILE.EN](../PxPlus%20System%20Programs%20and%20Files/Message%20Library/Overview.md)**. You can set this table using the **[DEF CVS](def_cvs~dte~lcs~ucs.md)** directive and retrieve values using the **[CVS(*)](../functions/cvs.md)** function.  
>   
> "U" |  If you declare an alternate key segment as _unique_ , then no duplicate keys are allowed on writing a record. PxPlus generates Error #11: Record not found or Duplicate key on write. If you designate any segment in a key definition as unique, then the entire key will be unique.
> 
> #### **Note:  
> ** The primary key must always be unique.  
>   
> "Z" |  Zero terminated strings. This will consider a null byte ($00$) in a string as the end of the data within the field and will ignore any data between the null byte and the end of the key field. (Also known in C as a Z-String.)  
  
##  Description

Use the **KEYED** directive to create a file with one or more keys. If the first field in the directive after the filename is a number, PxPlus creates an _external_ file key (i.e. an index to the file). If the first field in the directive is a key definition enclosed in square brackets [ ], then PxPlus uses only _internal_ key fields instead. 

PxPlus considers the first key specified for a Keyed file to be the primary key. Every record must have a unique primary key. You can have duplicate secondary keys from record to record.

#### **Note:**  
By default, the **KEYED** directive will create the type of file indicated by the value of the **'KF'** parameter. Normally, this is 0; thus, a variable length record (VLR) data file or a fixed length record (FLR) formatted file will be created.  
  
Setting **'KF'** to 1 creates an EFF file with a 2GB limit. Setting the **'KF'** system parameter to 2 (or by setting OPT="2") in the syntax, **KEYED** can create Enhanced File Format (EFF) files on platforms that support Large File System (LFS), 64-bit addressing.  
  
For information on EFF, see [**CREATE TABLE**](create_table.md) directive.

For **VLR/FLR** files, there is a maximum of 16 key fields allowed on a file with a maximum of 96 data components making up the 16 keys. There is no limit (other than the maximum of 96 key components) to the number of fields that comprise a single key. For **EFF** , there is a maximum of 255 keys allowed on a file with a maximum of 255 data components making up the 255 keys.

If a given filename already exists, PxPlus returns Error #12: File does not exist (or already exists).

Use the **SEP=** option to set the default separator for a given file. Use any character from $00$ to $FF$, or use **SEP=***. When the asterisk is your value, the fields will not be delimited. PxPlus writes records to the file with field type and length headers. This feature can provide better results in overall file performance. 

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. KEYED "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

See [**DIRECT Create File with Keyed Access**](direct.md) and **[Multi-Keyed Files](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.htm#multi_keyed)**.

If you see the message _Corrected Missing Key_ when PxPlus attempts to **INSERT** , **UPDATE** or **REMOVE** a record in a Keyed file where a change to the primary or alternate key table is needed (e.g. for an alternate key to a customer name when the name changes or for removal of all keys when a record is deleted), the message indicates that the key entry to be changed was not found. This is not a fatal message but usually means that the file has been corrupted in some way. You should check the file using *UFAC or try to recover it using *UFAR (PxPlus utilities).

#### **Note:**  
**_As of PxPlus 2016_** , the *UFAC file check utility no longer supports split files, multi-segmented files and files greater than 2GB, as rebuilding the entire file is a more efficient process.

**_Key Block Size and Performance_**

PxPlus stores a maximum of 16 keys per block, with block sizes ranging from 1Kb to 32Kb. The maximum key block size for a variable record length file is 31Kb, while the maximum for a fixed record length file is 32Kb and an EFF file is 63Kb. The size of the key block also governs the size of the blocks used to store data records. As with key blocks, the maximum number of records per data block is limited to 255.

By default, PxPlus uses the size of the primary key to determine the optimum key block size to a maximum of 4Kb when creating a file. This calculation involves taking the (size of the primary key + 5 bytes) multiplied by a maximum of 255 entries, then rounding up to the nearest Kb to a maximum of 4Kb.

The block size can be overridden by using the **BSZ=** option on the **KEYED** directive. This can be used to optimize the usage of key and/or data blocks to improve performance. For example, using a BSZ=1 improves the performance on WANs (Wide Area Networks) by reducing the overall network traffic when accessing Keyed files.

The number of keys stored per block also affects the number of active levels on the key tree. Storing a smaller number of keys per block results in additional levels of blocks on the key tree, whereas a larger number of keys often results in fewer levels. Having fewer levels translates into improved performance as this reduces overall network traffic. For example, a key size of 50 would yield a maximum of 74 keys per block using a 4 Kb block size while an 8Kb block size would accommodate 148 keys per block. In a 4K file, three levels on the key tree would be capable of managing 405,224 records (74*74*74) and 3,241,792 records (148*148*148) for an 8K block size.

Keys have the following limits:

  * Maximum External key size is 127 bytes.
  * Maximum Segment size within any key is 127 bytes.
  * Total maximum multi-segmented key size is 240 bytes.



#### **Note:**  
For VLR and EFF files, the **BSZ=** must be large enough to accommodate the record size; e.g. 4Kb block size for a 4000-byte record. As of Version 4.20, you no longer have to use **BSZ=** in a Keyed file definition if defining record sizes over 4000 bytes. PxPlus now calculates the minimum block size necessary.

**_Variable Length Records_**

When using variable length records or EFF files, PxPlus will not pad the record to the record size with extra null characters (as is done with fixed length record files). The record data is stored using its exact length. This allows for much denser files by avoiding the null padding on each record. Files are smaller thus when doing reads of large portions of the file, less disk accesses have to be performed because the records fit into a much smaller space and disk cache is better utilized.

In addition, with a variable length keyed file, the maximum record size is a logical maximum and not a physical one. A variable length file will simply allow you to write records from 0 to the maximum record size defined. Anything beyond the maximum record size causes an Error #1: Logical END-OF-RECORD reached. This design allows the maximum record size for a variable length record file to be increased at any time through the use of system utilities, *UFAM.

Only variable length record files support the file segmentation, which allows you to have files that total a logical size of up to about 248 GB. See [**'MB'=**](../parameters/mb.md) system parameter.

**_Extended Length Records_**

When a file is created with the _Extended Record Size_ option enabled ("X"), the system will allow records of any size up to 2GB to be written to the file. Physically within the file, the logical record and any associated keys will be broken down into multiple segments with each segment being up to the record size defined for the file.

**_Example:_**

> If you create an extended record size file with a 2000-byte record size, storing a 9000-byte record would result in 5 physical segments being written to the file. These segments will be reconstructed into the full record when read, and all segments will be modified (or deleted) when the record is changed (or deleted).

**_Numeric Key Segment_**** _s_**

Key segments can be numeric in which case the system will maintain the keys in sorted numeric order starting with the lowest negative value through the highest positive value. The key itself will be generated by taking the numeric value indicated in the segment descriptor and right justifying it in the key. The number of decimal places will be adjusted to match the scale specified in the descriptor or zero if not specified. Invalid/non-numeric values will result in a key value of zero.

When reading a file using a numeric key segment, a null key is considered the lowest key value thus will position before all other values (positive or negative).

**_Example:_**

> **Data Layout:** |  iolist CUSTNO$,NAME$,OWED  
> ---|---  
> **Key Definition:** |  [1:1:6],[3:10:1:"B.2"]  
> **Sample Data:** |  **Data order using Key number 0** |  **Custno** |  **Name** |  **Owed**  
> ---|---|---  
> "000011" |  "ABC Corporation" |  1234.56  
> "000022" |  "XYZ Mortgages" |  0.00  
> "000033" |  "DEF Ping Pong Tables" |  250.11  
> "000044" |  "IOU World Bank" |  -1.15  
> |  **Data order using Key number 1** |  **Custno** |  **Name** |  **Owed**  
> ---|---|---  
> "000044" |  "IOU World Bank" |  -1.15  
> "000022" |  "XYZ Mortgages" |  0.00  
> "000033" |  "DEF Ping Pong Tables" |  250.11  
> "000011" |  "ABC Corporation" |  1234.56  
  
## Update Plus™

This PxPlus feature allows for partial updates to records within keyed files. When a file is created with the UpdatePlus™ feature enabled, record rewrites will only update the fields specified in the **[WRITE](write.md)** or **[UPDATE](update.md)** directive.

For instance, if a record on the file currently has 10 fields and a WRITE directive is issued that specifies only 8 fields, the last two fields from the original record will be preserved. This feature is exceptionally useful when adding fields to data files where the record layout has been hard-coded within existing application programs. The new fields can be added to the end of the record and when the old programs update the records, the new fields will not be lost.

**_Example:_**

> erase "testfile",err=*next  
>  keyed "testfile",[1:1:6],0,0,opt="U" ! Create with UpdatePlus enabled  
>  !  
>  ! This IOLIST defines the record as having five fields which  
>  ! includes a new field CST_EMAIL$ that may not have existed before  
>  !  
>  NEW_IOL: \  
>  iolist CST_ID$,CST_NAME$,CST_ADDR$,CST_AMT,CST_EMAIL$  
>  !  
>  open (1)"testfile"  
>  CST_ID$="123456"  
>  CST_NAME$="ABC Corp"  
>  CST_ADDR$="123 Main Street"  
>  CST_AMT=1000.00  
>  CST_EMAIL$="john.doe@abc_corp.com"  
>  write (1)iol=NEW_IOL ! Write 5 fields  
>  close (1)  
>  !  
>  ! This following represents the original IOLIST in older programs  
>  ! that only defines four fields -- no CST_EMAIL$ is defined  
>  !  
>  OLD_IOL: \  
>  iolist CST_ID$,CST_NAME$,CST_ADDR$,CST_AMT ! ** Four fields  
>  !  
>  begin ! Clear everything  
>  open (1)"testfile"  
>  read (1,key="123456")iol=OLD_IOL ! Read four fields  
>  CST_AMT=CST_AMT+500  
>  write (1)iol=OLD_IOL ! Write four fields  
>  close (1)  
>  !  
>  ! Now if we re-read back the 'updated' record requesting all five  
>  ! fields using the new iolist, we see that the fifth field (CST_EMAIL$)  
>  ! has been preserved  
>  !  
>  begin  
>  open (1)"testfile"  
>  read (1,key="123456")iol=NEW_IOL ! Read five field  
>  print "Cst_id :",CST_ID$  
>  print "Cst_amt :",CST_AMT  
>  print "Cst_email:",CST_EMAIL$ ! Fifth field preserved

To enable UpdatePlus™ for a file, it needs to be defined with an OPT="U" and is only supported on VLR and FLR files as of build 9180 (no EFF support).

_(The UpdatePlus™ capability was added in PxPlus v7.65.)_

#### **Note:**  
Data Dictionary Maintenance provides a check box option to enable UpdatePlus™ logic for a specified file. See **[Data Dictionary Maintenance](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.htm#options)**.  
  
_(The Enable UpdatePlus™ logic option in Data Dictionary Maintenance was added in PxPlus 2017 Update 0002.)_

## Enhanced File Format (EFF)

EFF records are always variable length. In future, EFF files will support transactions. See [**SYSTEM_JRNL**](system_jrnl.md) directive.

The following file limitations exist for EFF files:

|  1. |  63 Kb (64512 bytes) is the maximum block size.  
---|---|---  
|  2. |  The default block size of 4K generates a file with an 8 GB limit.  
|  3. |  The maximum record size is 64000 bytes. When using extended records, the record size is limited to 32000 bytes when created, although records can be as large as 2GB.  
|  4. |  EFF files do not support the multi-segmented techniques available for VLR files.  
|  5. |  **_Refer to the chart below for sample file size limitations._** (The block size determines the maximum file size.) |  **Block Size** |  **3-Byte Pointers** _(current implementation)_  
---|---  
(KB) |  Max Pages per Inventory Segment |  Max Addressable Pages |  Size of File in MB  
4 |  1,022 |  2,056,264 |  8,032  
8 |  2,046 |  8,388,607 |  65,536  
12 |  3,070 |  8,388,607 |  98,304  
16 |  4,094 |  8,388,607 |  131,072  
20 |  5,118 |  8,388,607 |  163,840  
24 |  6,142 |  8,388,607 |  196,608  
28 |  7,166 |  8,388,607 |  229,376  
32 |  8,190 |  8,388,607 |  262,144  
36 |  9,214 |  8,388,607 |  294,912  
40 |  10,238 |  8,388,607 |  327,680  
44 |  11,262 |  8,388,607 |  360,448  
48 |  12,286 |  8,388,607 |  393,216  
52 |  13,310 |  8,388,607 |  425,984  
56 |  14,334 |  8,388,607 |  458,752  
60 |  15,358 |  8,388,607 |  491,520  
63 |  16,126 |  8,388,607 |  516,096  
  
## Multi-Segmented VLR

**Controls Segment Size in Multi-Segmented Files**

The [**'MB'**](../parameters/mb.md) system parameter must be set to a value to activate the VLR multi-segmented file feature. When this option is enabled, large data sets can be split into multiple physical files or segments. This allows you to avoid potential issues with file systems or drives that limit the size of a physical file. When the file grows and hits the segment size set by the MB parameter, a new physical file will be created with a 3-digit sequence number appended to the file name (e.g. INVOICES, INVOICES.001, INVOICES.002).

PxPlus calculates the approximate size of each segment in megabytes with the exact value based on the block size of a file using the following algorithm:

> Segment size in bytes = 512 + ((_bksz_ \- 6) * _bksz_)

The value _bksz_ above represents the block size of the file -- normally between 1 and 8 kilobytes. You can use the **BSZ=** option when you create the file, to override the default block size for a file.

The following table lists the maximum number of segments allowed for a file based on valid block sizes (1 to 31 kilobytes):

**Block Size** |  **Segments** |  **Block Size** |  **Segments** |  **Block Size** |  **Segments**  
---|---|---|---|---|---  
31 _K_ |  **124** |  30 _K_ |  **120** |  29 _K_ |  **116**  
28 _K_ |  **112** |  27 _K_ |  **108** |  26 _K_ |  **104**  
25 _K_ |  **100** |  24 _K_ |  **96** |  23 _K_ |  **92**  
22 _K_ |  **88** |  21 _K_ |  **84** |  20 _K_ |  **80**  
19 _K_ |  **76** |  18 _K_ |  **72** |  17 _K_ |  **68**  
16 _K_ |  **64** |  15 _K_ |  **60** |  14 _K_ |  **56**  
13 _K_ |  **52** |  12 _K_ |  **48** |  11 _K_ |  **44**  
10 _K_ |  **40** |  9 _K_ |  **36** |  8 _K_ |  **32**  
7 _K_ |  **28** |  6 _K_ |  **24** |  5 _K_ |  **20**  
4 _K_ |  **16** |  3 _K_ |  **12** |  2 _K_ |  **8**  
1 _K_ |  **4**| | | |   
  
##  See Also

[**CREATE TABLE Create Keyed File (EFF)**](create_table.md)  
[**DIRECT Create File with Keyed Access**](direct.md)  
[**SYSTEM_JRNL File System Journalization**](system_jrnl.md)  
[**ADD INDEX Add Key to Keyed File**](add_index.md)  
[**DROP INDEX Drop Key from Keyed File**](drop_index.md)  
[**RENAME..INDEX Rename Keys in Keyed File**](rename_index.md)  
[**SORT Create File for Sorting**](sort.md)  
**[Accessing Data Files](../introduction/basic_concepts.htm#Mark11)**

##  Examples

**_Example 1:_**

keyed A$+"_"+B$,10,100,50,err=1090

Creates a Keyed file with this structure:

|  Maximum Record Size: |  50  
---|---|---  
|  Maximum # Records: |  100  
|  Current # Records: |  0  
|  Size of Key Block: |  3072 bytes  
|  External Key Size: |  10  
  
**_Example 2:_**

keyed "CSTFLE1",6,,140

Creates a file with an external primary key (6 bytes).

**_Example 3:_**

keyed "CSTFLE2",6,[1:1:10],,500

Creates a file with an external primary key (6 bytes) and a single internal alternate key.

**_Example 4:_**

keyed "CSTFLE3",[1:1:6],[2:1:10],,500

Creates a multi-keyed file with 2 internal alternate keys. Note that alternate key 0 (field 1) is the primary key:

Keyed file: C:\OTHER\MANUALS\PVX\CST\CSTFLE3  
---  
|  Maximum Record Size: |  500  
|  Maximum # Records: |  (No limit)  
|  Current # Records: |  0  
|  Size of Key Block: |  2048 bytes  
|  External Key Size: |  0  
|  Alt. Key 0: |  [1:1:6]  
|  Alt. Key 1: |  [2:1:10]  
  
**_Example 5:_**

keyed "CSTFLE4",6,[2:1:10]+[1:1:6]

Creates a file with an external primary key and a composite internal alternate key:

Keyed file: C:\OTHER\MANUALS\PVX\CST\CSTFLE4  
---  
|  Maximum Record Size: |  256 (Variable)  
|  Maximum # Records: |  (No limit)  
|  Current # Records: |  0  
|  Size of Key Block: |  2048 bytes  
|  Record Expansion Factor: |  10%  
|  External Key Size: |  6  
|  Alt. Key 1: |  [2:1:10]+[1:1:6]  
  
To use a variable for the key definition:

X$="[1:1:6],[2:1:10]"  
keyed "CSTFLE",X$,,500

X$="6,[1:1:6],[2:1:10]"  
keyed "CSTFLE",X$,,500
