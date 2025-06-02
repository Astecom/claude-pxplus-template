# Special File Handling 

***QUERY*** |  **_Query-based File_**  
---|---  
  
##  Format

**OPEN (**_chan_**[,**_fileopt_**]) "*QUERY*;**_query_**;**_library_**[;**_option_**] [...]"**

**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_fileopt_ |  File options. Supported options for opening *QUERY* include: |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**OPT=**_options_ |  Additional query parameters (see **[File Parameters](~query~.htm#fileparameters)**)  
_query_ |  Defines the name of the query whose definition will determine the logical file contents.  
_library_ |  Defines the NOMADS library that contains the _query_.  
_options_ |  Supported parameters (see **[File Parameters](~query~.htm#fileparameters)**).  
***QUERY*** |  Case insensitive keyword. Special device file name, enclosed in quotation marks within **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

The ***QUERY*** interface allows a NOMADS query to be used to define the contents of a logical file for use by an application program. It allows the program to access the contents of a query as if it was a standard read-only file.

_(The *QUERY* logical file name was added in PxPlus v9.00.)_

## Opening the Query

To open the contents of a query, specify the file name *QUERY* followed by the panel and library name for the query you wish to access, separated by **;** (_semi-colons_).

> open (1)"*QUERY*;CustQry;mylib.en"

When opened, the system will process the query definition and return the contents of the query in the channel number specified as a memory file.

By default, the memory file will have an external key, which is derived from the return value of the query or from the "KNO=_n_ " option specified in the **OPT=** clause. See **[File Parameters](~query~.htm#fileparameters)**.

If neither is specified, then the value in the first column of the query will be used as the record key.

If there is a possibility of duplicate keys, data can be lost when the records with duplicate keys are overwritten. In this case, it is recommended that you use the SEQPFX=Y clause, which prefixes the key with a 10-digit sequence number to guarantee unique keys and no data loss. See **[File Parameters](~query~.htm#fileparameters)**.

_(The SEQPFX=Y file option was added in PxPlus 2021.)_

To load the file that will be returned by *QUERY*, the data is read using the key specified in the query definition. It is then written to the *memory* file using the key as derived above. If neither "KNO=_n_ " nor SEQPFX=Y are specified as file options, the resulting data records will be returned in ascending order based on the derived key value, and not necessarily based on the original order read.

If the SEQPFX=Y file option is specified, then the resulting data records will be returned in the order read, maintaining ascending/descending key segment sequence, and key values returned by a key function (i.e. **[KEY( )](../functions/key.md)**, **[KEC( )](../functions/kec.md)**, **[KEF( )](../functions/kef.md)**, **[KEL( )](../functions/kel.md)**, etc.) will include the 10-digit sequence number.

If the "KNO=_n_ " option is specified but **_not_** SEQPFX=Y, **_and_** the key by which the *QUERY* file is read has a descending segment, the key value returned by a key function will contain an altered value in the location of the descending segment to maintain the descending sequence. To **_revert_** the key back to an unaltered value, it can be manipulated using the **%_KeyMask$** variable, which is set when *QUERY* is opened:

> k$=kec(_channel_);  
> TrueKeyValue$=xor(k$,%_KeyMask$(1,len(k$)))

_(Support for descending keys was added in PxPlus 2019 Update 2.)_

The file will also have an IOList consisting of the column names as specified in the query, with the exception of array elements and formulas. Array elements will consist of the column name followed by __s1.s2.s3 **_where_** s1, s2 and s3 are subscript numbers for up to three dimensions (with .s2 and .s3 being optional); e.g. a variable such as MyArray$[2,3] will become MyArray__2.3$.

_(Support for array elements in the query was added in PxPlus 2022.)_

For query formulas, the system will use the formula name assigned in the query definition. If none is assigned, the column will be assigned a generic column name (COL___nnn_).

The actual contents of the returned memory file will be a static data set of the column values for the specified query; that is, the file returned will be a "snapshot" of the query results as of the time the file was opened. No updates or changes to the original data sources will be reflected in the file as your application is processing it.

_(The ability to assign a formula name in the query definition was added in PxPlus 2020.)_

Closing the channel will free the memory file and free its contents.

#### **Note:**  
The file returned will always have an internal IOList.

## Handling Bad Data

By default, should the query report any columns with invalid/bad data when the data is READ, the value for invalid string data will be *Error*; for numeric, the value will be zero. Examples of bad/invalid data would be non-numerics in numeric fields or formulas that result in an error such as divide by zero.

Like normal files, the actual column with the bad data will terminate the READ command; however, you can skip fields that may return bad data by placing an ***** (_asterisk_) in the IOList definition, thereby causing the system not to return that field.

**_Example:_**

If you had a query returning four fields, the normal READ would look like:

> read (fileno)Client$,Name$,DateDue$,SalePerson$

If there was a problem with the data and the Date Due field had a data error in it (perhaps it was a formula derived column), you could skip this field as follows:

> read (fileno)Client$,Name$,*,SalePerson$

Obviously, this can only be done if **_not_** using the internal IOList provided with the query file. If you are processing queries where bad data is likely to occur, you can specify an **OPT=** clause that defines what action to take in the case of bad data. See **File Parameters** below.

##  File Parameters

The following parameters are available for use in the **OPT=** clause:

**OPT= Clause** |  **Description/Function**  
---|---  
BADDATA=SKIP |  If the BADDATA=SKIP clause is included in the OPEN, the system will skip any records that have any invalid/bad data.  
BADDATA=SCAN |  If the BADDATA=SCAN clause is included in the OPEN, the system will effectively pre-scan the data and report any errors on the OPEN without opening the file. This option can be used to assure clean data will be returned by the query.  
BADDATA=FLAG |  If the BADDATA=FLAG clause is specified, the invalid data will be replaced with default values and the record will be returned. The default value for invalid **_string_** data is *Error*, and for **_numeric_** , the value will be zero. This default value can be overridden by the BADNUM and BADSTR options below.   
BADNUM=_value_ |  Defines the value to be placed in any numeric field whose data is considered invalid. If not specified, the value of 0 (zero) will be used.  
BADSTR=_value_ |  Defines the value to place in any string field whose data is considered invalid. If not specified, the value of *Error* will be used.  
KEYPAD=Y |  Replaces $00$ padding in compound keys with spaces.  
KNO=_keynum_  
  
  
KNO=* |  Defines the key number to use as the record key when loading the associated memory file. The selected key should have unique values so data is not lost. Suggested value is 0; i.e. the primary key. Specifying KNO=* will use the key specified in the query definition. If no key is specified, then the return value specified for the query is used as the key. If none is specified, then the contents of the first column are used. _(The KNO=* file option was added in PxPlus 2021.)_  
SEQPFX=Y |  Causes a 10-digit sequence number to be prefixed to the key value. This will ensure unique key values and correct record sequence. _(The SEQPFX=Y file option was added in PxPlus 2021.)_  
  
**_Example:_**

> open (channel,opt="BADDATA=SKIP;KNO=1;SEQPFX=Y")"*QUERY*;CUSTQRY;scrnlib.en"
