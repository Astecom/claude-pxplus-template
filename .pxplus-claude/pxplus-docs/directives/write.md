# Directives 

**WRITE** |  **_Add/Update Data in File_**  
---|---  
  
##  Formats

1. |  _Write_ _:_ |  **WRITE (**_filespec_[,_fileopt_]**)**_varlist_  
---|---|---  
2. |  _Write Lock_ _:_ |  **WRITE LOCK (**_filespec_[,_fileopt_]**)**_varlist_  
  
**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Record/file busy  
---|---  
**DOM=**_stmtref_ __ |  Duplicate record transfer (taken when record of same primary key already exists)  
**END=**_stmtref_ __ |  End-of-File transfer  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index  
**KEY=**_string$_ |  Record key (See **Automatic Padding with KEY=Option**)  
**REC=**_name$_ |  Record prefix where the **_name_** of the variable (rather than its contents) defines the prefix. (**REC=VIS(**_name$_**)** can also be used where the **_contents_** of the _name$_ variable defines the prefix.) For information on using the **REC=** option, see **[Prefixing Variables in an IOList via REC=](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Input%20and%20Output%20Parameters.htm#Mark1)**.  
**RTY=**_num_ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**TIM=**_num_ |  Maximum time-out (support write operations for TCP channels)  
_stmtref_ |  Program line number or statement label to which to transfer control  
_varlist_ |  Comma**-** separated list of variables, literals, mnemonics, **IOL=** options, and/or location functions **'@(...)'**.  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

Use the **WRITE** directive to add/update a record to a file (logical file number/channel). PxPlus also supports use of the **WRITE** directive with ***MEMORY*** (a memory-resident file or queue of records).

**_Automatic Padding with_ KEY=_Option_**

When you use **KEY=**_string$_**:**_string_ _$_**[:**_string$_**][...]** , PxPlus automatically pads key segments. This is valid only if you have Keyed files with segmented key definitions. PxPlus right pads the key segment using $00$ (nulls) to the segment's full length. The last segment in a compound key is not padded:

> keyed "TEST",[1:1:5]+[2:1:6]+[3:1:8]  
>  read (1,key=A$:B$:C$)

is the same as:

> read (1,key=pad(A$,5,$00$)+pad(B$,6,$00$)+C$)

##  Format 1

**_Write_**

**WRITE (**_filespec_[,_fileopt_]**)**_varlist_

If the specific record already exists (indexed, direct or sort files) and you include the **DOM=**_stmtref_ __ option, control transfers to the _stmtref_ ; otherwise, the specified record is updated.

**_Example:_**

> 0410 write (1,err=1000,dom=1200)A,B,Z9$

An **IND=**_index_ clause is _mandatory_ if you are writing to an indexed file:

> 0810 let I=0  
>  0820 open (8)"PVX_INDX"  
>  0830 read (8)iol=110,err=0950  
>  0840 let I=I+1 ! This reserves an empty record at index 0  
>  0850 call "SOMETHING",iol=0110,err=950  
>  0900 write (8,ind=I,err=9000)iol=0110  
>  0910 goto 0830 

The **KEY=**_string$_ is _mandatory_ if you are writing to a Keyed file with an external key or to a **DIRECT** or **SORT** file:

> 0710 open (7)"PVX_SORT"  
>  0720 read (6)CUST$,NAME$,*,*,*,*,*,*,*,*,*,err=0750  
>  0730 write (7,key=CUST$)

No **KEY=** option is allowed if you are writing to a Keyed file whose primary key is composed of data fields embedded in the record data.

#### **Note:**  
When writing to a file without an external key and the **['BX'](../parameters/bx.md)** system parameter is **_On_** , the **KEY=** option will be ignored.

In Keyed files with multiple keys, the **WRITE** directive will automatically update all alternate keys.

**_Example:_**

Alternate keys 0 [1:1:6] and 1 [2:1:10] are updated as follows:

> keyed "PVX_KEYD",[1:1:6],[2:1:10],,256  
>   
>  0210 open (2)"PVX_KEYD"  
>  0220 read (6)CUST$,NAME$,*,*,*,*,*,START_DT$,CRED_LIM,TERMS,END_DT$,err=0250  
>  0230 write (2)iol=0100

PxPlus uses the variables in the variable list either in delimited form or in accordance with any format specified (with headers, etc.). The contents of these fields are used to generate the actual data record. Numeric data converted during a **WRITE** directive does not use the **'DP'** (Decimal Point Symbol) or **'TH'** (Thousands Separator) system parameters for European decimal settings.

The list of variables can refer to an IOList (using **IOL=**_iolref_) as above. The _iolref_ can be the line number or statement label of the line containing the IOList, or it can be a string containing a compiled IOList. If you omit the list of variables from the **WRITE** directive, PxPlus uses the IOL specified (if any) on your **OPEN** statement for the file.

**_Writing to *MEMORY*_**

A **WRITE** operation will check the last entry in the key table for the key being added before proceeding to the top of the key chain to determine the new entry point. This dramatically increases the speed of writing additional records in sequential order. You can use **WRITE** and/or **WRITE RECORD** directives to update records in a memory file using an IOList or a string expression. You can add records by index, inserting records at the given index number.

PxPlus will not overwrite existing records. Use the **DOM=** option when you write to a memory file. The following two examples insert a new record at index 3 without overwriting the current record at index 3. The record that was at index 3 is now at index 4, and the number of records in the file has increased by 1.

**_Example:_**

> 0910 write (14,ind=3)iol=2010  
>   
> ** _or  
> _  
> ** write record (14,ind=3)"DOGCATPIG"

To update a given record in a memory file, use **KEY=** with a given key value:

> 0910 write (14,key=KK$,dom=0920)iol=2010  
>   
> ** _or  
> _  
> ** write record (14,key=KK$)A$

##  Format 2

**_Write Lock_**

**WRITE (**_filespec_[,_fileopt_]**)**_varlist_

Use the **WRITE LOCK** format to ensure that once the file has been written to, it remains locked:

> 9010 write lock (9,err=2000)iol=0110

When you use the **LOCK** option, PxPlus does not release an extracted record. It maintains the extraction to prevent potential timing problems and maintain counters and totals in batch processing, sparing you the need to re-extract:

> 9010 write lock (9,key=K$)

#### **Note:**  
If a serial file is not locked before you write to it, an Error #13: File access mode invalid will occur on the **WRITE** directive. Use **OPEN LOCK** for your serial file to prevent this error from occurring on the **WRITE**.

**_Example_** :

> serial "PVX_SER",,256  
>  0510 open lock (5)"PVX_SER"  
>  0520 read (6)CUST$,NAME$,ADDR1$,ADDR2$,CITY$,PROV$,POSTAL$,START_DT$,CREDLIM,  
>  0520:TERMS,END_DT$,err=0550  
>  0530 write (5)iol=0090  
>  0540 goto 0520  
>  0550 stop

##  See Also

[**INSERT Insert New Record in File**](insert.md)  
[**UPDATE Update Existing Record in File**](update.md)   
[**WRITE RECORD Write Record**](write_record.md)  
[**OPEN Open a File for Processing**](open.md)  
[**RCD( ) Return Next Record**](../functions/rcd.md)  
[**'XI' Extract Ignore**](../parameters/xi.md)  
[***MEMORY* Create and Use Memory File**](../file_handling/~memory~.md)
