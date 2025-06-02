# Processing Data Files

**Processing Records** |  **__**  
---|---  
  
File data is usually grouped into **[Records and Fields](../Data%20Files/Overview.htm#records)**. The **[File Processing Directives](File%20Processing%20Directives.md)** are typically used to read/write records in a file separating the data into one or more fields.

## Record-Specific Directives

In some cases, it is necessary to read the contents of a record from a file that does not contain fields; e.g. when reading data files not created by PxPlus or writing data files that are to be processed by some other application. To handle files of this type, PxPlus includes a set of record-specific directives. In these cases, only a single string parameter can be specified in the parameter list.

The **[READ RECORD](../../../directives/read_record.md)** directive reads the record specified and places its contents into the string variable specified in the parameter list. The **[WRITE RECORD](../../../directives/write_record.md)** directive writes the string specified in the parameter list to the file without the insertion of a field separator. If the file contains fixed length records, the**WRITE RECORD** statement will append nulls (Hex $00$) to the record being written. Other record-specific directives include **[FIND RECORD](../../../directives/find_record.md)** and **[EXTRACT RECORD](../../../directives/extract_record.md)**.

**_Example:_**

> 0010 OPEN INPUT (1) "." ! open current directory   
>  0020 READ RECORD (1,END=DONE)R$   
>  0030 PRINT R$   
>  0040 GOTO 0020   
>  0050 DONE: CLOSE (1); END   
>  run

## *MEMORY* File

A ***MEMORY*** logical file is simply a memory-resident queue of records that can be accessed by index or (external) record key. The system functions **[KEC( )](../../../functions/kec.md)**, **[KEF( )](../../../functions/kef.md)**, **[KEL( )](../../../functions/kel.md)**, **[KEN( )](../../../functions/ken.md)**, **[KEP( )](../../../functions/kep.md)**, **[KEY( )](../../../functions/key.md)**, and **[IND( )](../../../functions/ind.md)** will work with a memory file. As well, you can access memory files by record number, **RNO( )**. The record index will equal the logical placement of the records in key order sequence.

See **[*MEMORY*](../../../file_handling/~memory~.md)** for complete syntax details.

**_Creating/Deleting the File_**

Two types of memory files may be created. The following syntax creates a memory-resident queue of records:

> **OPEN** _(chan) "_***MEMORY*_"_**

The following creates a memory-resident multi-key file similar to a regular-keyed file:

> **OPEN (_chan_ [,_fileopt_ ]**)" ***MEMORY* [** ; **KEYDEF=**_key_def_ _$_**]** "

The following syntax deletes a memory file and returns memory to the system:

> **CLOSE (_chan_)**

## Keyed (Direct File) Handling

The following syntax adds/updates a record:

> **WRITE** (_chan_ , **KEY=**_string$_) _iolist_ _  
> _  
> **_or_**  
>   
> **WRITE RECORD** (_chan_ , **KEY=**_string$_) _strexpr_

**_To read a record:_**

> **READ** (_chan_ , **KEY=**_string$_) _iolist_ _  
> _  
> **_or_**  
>   
> **READ RECORD** (_chan_ , **KEY=**_string$_) _strvar_

**_To remove a record:_**

> **REMOVE** (_chan_ , **KEY=**_string$_) _iolist_

## Indexed Handling

The following syntax writes to the open file:

> **WRITE** (_chan_ , **IND=**_num_) _iolist_ _  
> _  
> **_or  
> _**  
> **WRITE RECORD** (_chan_ , **IND=**_num_) _strexpr_

This will insert records at the specified point in the memory queue file. It will insert and not overwrite the existing records. If you currently have 5 records in the file and issue a WRITE (chan,IND=3), the record formerly at index 4 will now be at index 5.

**_To read a record:_**

> **READ** (_chan_ , **IND=**_num_) _iolist_ _  
> _  
> **_or  
> _**  
> **READ RECORD** (_chan_ , **IND=**_num_) _strvar_

**_To remove a record:_**

> **REMOVE** (_chan_ , **IND=**_num_)
