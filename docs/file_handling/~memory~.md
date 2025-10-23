# Special File Handling

***MEMORY*** |  **_Create and Use Memory File_**  
---|---  
  
##  Format

**OPEN** (_chan_**[** , _option_**]**)"***MEMORY*[**_; keydef_**]** "

**_Where:_**

_chan_ |  Channel or logical file number.  
---|---  
_option_ |  **BSZ=**_num_ file option for specifying record size (number of bytes). The default record size is 1024 bytes unless it is overridden via **BSZ=**.  
_keyde_ f |  The _keyde_ f field, if supplied, can be used to define alternate logical keys for the data in the ***MEMORY*** file. See **Alternate Keys**.  
***MEMORY*** |  Keyword, not case sensitive. Logical filename, enclosed in quotation marks within **[OPEN](../directives/open.md)** directive. (Include *****  _asterisks_ in syntax)  
  
##  Description

PxPlus supports a memory-resident logical file called ***MEMORY*** ; i.e. this file is a memory-resident queue of records. Create the memory-queue file and assign the given logical file number (channel) via the **[OPEN](../directives/open.md)** directive.

#### **Note:**  
The maximum key size for memory files (without a _keydef_ \- see **Alternate Keys**) has been increased from 255 to 8192 characters. _(as of PxPlus v5.10)_

PxPlus recognizes ***MEMORY*** at run time and deals with it internally. Once ***MEMORY*** is open, you can gain I/O access to memory-resident records in the same manner as you can to Direct files by record index or by key using the following I/O directives:

|  [**READ Read Data from File**](../directives/read.md)  
---|---  
|  [**READ RECORD Read Record from File**](../directives/read_record.md)  
|  [**WRITE Add/Update Data in File**](../directives/write.md)  
|  [**WRITE RECORD Write Record**](../directives/write_record.md)  
|  [**CLOSE Close File**](../directives/close.md)  
|  [**MERGE Read/Append Lines from File**](../directives/merge.md)  
|  [**REMOVE Delete Record from File**](../directives/remove.md)  
  
The first **WRITE** determines the file access method (i.e. the **IND=** option specifies Indexed file handling), and **KEY=** specifies Direct file handling (externally keyed files).

The functions **[IND( )](../functions/ind.md)**, **[KEF( )](../functions/kef.md)**, **[KEL( )](../functions/kel.md)**, **[KEN( )](../functions/ken.md)**, **[KEP( )](../functions/kep.md)**, **[KEY( )](../functions/key.md)** and **[RNO( )](../functions/rno.md)** can be used with memory-queue files.

#### **Note:**  
Adding records to a memory file by **IND( )** pushes all the records at that index down one and inserts a new record. To modify a record in an index file, remove the old record and then insert the new one.

**_To Delete a Memory File_**

Use **CLOSE (_chan_) **to delete a memory file and return memory to the system.

##  Alternate Keys

Memory files can have alternate keys specified. When opening a memory file, you can add a **KEYDEF=** option that defines the alternate key definition. Standard PxPlus alternate key definitions can be used as follows:

**Code** |  **Description**  
---|---  
"A" |  Ascending key (_assumed_).  
"B[.n]" |  Indicates that the segment contains a numeric value. Field will internally be converted to its binary equivalent and stored into the data file. Negative numbers will occur before position numbers in ordinary numeric value sequence. If '_.n_ ' is provided, the value in '_n_ ' is assumed to be the number of digits to the right of the decimal point that are to be maintained. Before the internal value is created, the value will be TRUNCATED to the number of decimal places specified. See [**Numeric Key Segments**](../directives/keyed.htm#NumericKey). _(Numeric key support was added in PxPlus v6.30.)_  
"C" |  Force uppercase for individual key segments to create uppercase insensitive keys.  
"D" |  Descending order (default is ascending).  
"K[:n]" |  Null key _suppression.n_ is the Hex value of the character to suppress if all characters match (defaults to $00$ if not specified). If the entire key evaluates to null, the key will not be a part of this key tree. This cannot be used on a primary key. Unlike standard keyed files, this can be used in conjunction with the "N" option.  
"L" |  Force lowercase for individual key segments to create lowercase insensitive keys.  
"N[:n]" |  Null segment _suppression.n_ is the Hex value of the character to suppress if all characters match. If any segment within the key evaluates to null, the key will not be a part of this key tree. Unlike standard keyed files, this can be used in conjunction with the "N" option.  
"T" |  Force automatic accent translation for individual key segments (i.e. to translate accented/extended characters to their non-accented counterparts), useful when sorting multilingual characters into a single unified sort sequence.  
"U" |  If you declare an alternate key segment as unique, then no duplicate keys are allowed on writing a record. System will generate an Error #11: Record not found or Duplicate key on write if the key being added already exists on the file. If any segment in a key definition is marked as unique, then the entire key is considered unique.  
  
**_Example:_**

To create and open a memory file with a 6-byte external key, an 8-byte UNIQUE key on field 2 and a 30-byte key on field 3, you could use:

> open (1)"*memory*;KEYDEF=6,[2:1:8:""U""],[3:1:30]"

Key names can also be specified, if desired.

#### **Note 1:**  
Unlike standard ***MEMORY*** files,***MEMORY*** files created using the _keydef_ option cannot have record inserted by record index. The key fields are always used.  
  
**Note 2:**  
Unlike standard keyed files, the number of keys, the number of key segments and the field length for keys in ***MEMORY*** has no pre-set limit and is only bound by the amount of memory available in the system.  
  
_(The removal of standard keyed file limits on *MEMORY* files was added in PxPlus v7.00.)_

##  See Also

[**DIRECT Create File with Keyed Access**](../directives/direct.md)**  
** [**KEYED Create Single/Multi-Keyed File**](../directives/keyed.md)

##  Example

This example illustrates how to open and use the memory file:

> 0010 mmf=hfn  
>  0020 open (mmf)"*memory*"  
>  0030 print 'CS'  
>  0040 input "Name (Press F4 to end):",name$  
>  0050 if ctl=4 then goto 0100  
>  0060 input "Address:",addr$  
>  0070 input "Position:",pos$  
>  0080 write (mmf,key=name$)iol=mmfLst  
>  0090 goto 0030  
>  0100 print 'CS'  
>  0110 select iol=mmfLst from mmf begin "" end "z"  
>  0120 print "Name:",name$  
>  0130 print "Address:",addr$  
>  0140 print "Position:",pos$  
>  0150 print "----------"  
>  0160 next record  
>  0170 end  
>  0180 mmfLst: iolist name$,addr$,pos$
