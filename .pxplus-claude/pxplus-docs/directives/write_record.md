# Directives 

**WRITE RECORD** |  **_Write Record_**  
---|---  
  
##  Format

**WRITE RECORD (**_filespec_[,_fileopt_]**)**_contents$_

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_contents$_ |  String (literal, expression or variable) that contains the contents of the record to write.  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ |  Traps Error #0: Record/file busy  
---|---  
**DOM=**_stmtref_ |  Duplicate record transfer (taken when record of same primary key already exists)  
**END=**_stmtref_ |  End-of-File transfer  
**ERR=**_stmtref_ |  Error transfer  
**IND=**_num_ |  Record index  
**KEY=**_string$_ |  Record key (See **Automatic Padding with KEY=Option**)  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used to define the prefix)  
**RTY=**_num_ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**TIM=**_num_ |  Maximum time-out (support write operations for TCP channels)  
_stmtref_ |  Program line number or statement label to which to transfer control  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

Use the **WRITE RECORD** directive to add/update a record for a file (logical file number/channel).

If the specific record already exists (indexed, direct or sort files) and you include the **DOM=**_stmtref_ option, control transfers to the _stmtref_ ; otherwise, the specified record is updated.

In keyed files with multiple keys, the **WRITE RECORD** directive automatically updates all alternate keys. PxPlus supports use of the **WRITE RECORD** directive with *MEMORY* and ZIP files.

**_Automatic Padding with_****KEY=_Option_**

When you use **KEY=**_string$_**:**_string_ _$_**[:**_string$_**][...]** , PxPlus automatically pads key segments. This is valid only if you have keyed files with segmented key definitions. PxPlus right pads the key segment using $00$ (nulls) to the segment's full length. The last segment in a compound key is not padded.

**_Example:_**

> keyed "TEST",[1:1:5]+[2:1:6]+[3:1:8]  
>  read (1,key=A$:B$:C$)

is the same as:

> read (1,key=pad(A$,5,$00$)+pad(B$,6,$00$)+C$)

**_Writing to *MEMORY*_**

A **WRITE** operation will check the last entry in the key table for the key being added before proceeding to the top of the key chain to determine the new entry point. This dramatically increases the speed of writing additional records in sequential order.

You can use **WRITE** and/or **WRITE RECORD** directives to update records in a memory file using an IOList or a string expression. You can add records by index, inserting records at the given index number. PxPlus will not overwrite existing records.

Use the **DOM=** option when you write to a memory file.

**_Example:_**

The following two examples insert a new record at index 3 without overwriting the current record at index 3. The record that was at index 3 is now at index 4, and the number of records in the file has increased by 1.

> 0910 write (14,ind=3)iol=2010  
>   
> ** _or_**  
>   
>  write record (14,ind=3)"DOGCATPIG"

To update a given record in a memory file, use **KEY=** with a given key value:

> 0910 write (14,key=KK$,dom=0920)iol=2010  
>   
> ** _or_**  
>   
>  write record (14,key=KK$)A$

##  See Also

[**WRITE Add/Update Data in File**](write.md)  
[**INSERT Insert New Record in File**](insert.md)  
[**UPDATE Update Existing Record in File**](update.md)  
**[Accessing ZIP Files](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**

##  Example

0010 open (1)"OLDFIL"  
0020 open lock (2)"NEWFIL"  
0030 read record (1,end=1000)R$  
0040 write record (2)R$  
0050 goto 0030  
1000 close  
1010 end
