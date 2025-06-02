# Directives 

**READ** |  **_Read Data from File_**  
---|---  
  
##  Format

**READ** (_filespec_[,_fileopt_])_varlist_

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ |  Traps Error #0: Record/file busy  
---|---  
**DIR=**_num_ |  Direction indicator (Not supported with **[WDX]** tag)  
**DOM=**_stmtref_ |  Missing record transfer  
**END=**_stmtref_ |  End-of-File transfer  
**ERR=**_stmtref_ |  Error transfer  
**IND=**_num_ |  Record index  
**KEY=**_string$/num_ |  Record key  
**KNO=**_num_ | _name$_ |  File access key number (_num_) or name (_name$_)  
**REC=**_name$_ |  Record prefix where the **_name_** of the variable (rather than its contents) defines the prefix. (**REC=VIS(**_name$_**)** can also be used where the **_contents_** of the _name$_ variable defines the prefix.) For more information on using the **REC=** option, see **[Prefixing Variables in an IOList via REC=](../PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Input%20and%20Output%20Parameters.htm#Mark1)**.  
**RNO=**_num_ |  Record number  
**RTY=**_num_ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**SIZ=**_num_ |  Number characters to read  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ |  Maximum time-out value in integer seconds  
_stmtref_ |  Program line number or statement label to which to transfer control  
_varlist_ |  Comma**-** separated list of variables, literals or **IOL=** options.  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

Use the **READ** directive to read data from the file you identify by channel. When it is read, the data will be split into one or more fields, either separated by the currently defined separator character or defined by embedded formats, with the contents of the first field placed in variable 1, the second field in variable 2, etc. The system will convert numeric data automatically on a **READ** statement when moving it to numeric variables. Numeric data converted during a **READ** directive does not use the **['DP'](../parameters/dp.md)** (Decimal Point Symbol) or **['TH'](../parameters/th.md)** (Thousands Separator) system parameters for European decimal settings.

If you want to skip a field in the record, use an ***** (_asterisk_) as a placeholder instead of a variable name. You can refer to an IOList instead of using a list of variables in _varlist_. To do this, use **IOL=**_iolref_. The _iolref_ can be a line number or statement label for the line containing an IOList, or it can be a string containing a compiled IOList.

If you do not include variables in the **READ** directive, the system will use the **IOL=** option (if you included one) in the **OPEN** statement for the given file. If _varlist_ __ contains more variables than there are current fields in the record, the additional variables are set to either 0 (for numeric variables) or a null string (for string variables).

The **READ** directive will advance the file position to the next record (or if you use a **KEY=** or **IND=** option, to the record you identify then) and if you use the **KNO=** option, the current access key will be changed accordingly.

**_Automatic Padding with_ KEY=_Option_**

When you use **KEY=**_string$_**:**_string_ _$_**[:**_string$_**][...]** , the system automatically pads key segments. This is valid only if you have Keyed files with segmented key definitions. The system right pads the key segment using $00$ (nulls) to the segment's full length. The last segment in a compound key will not be padded.

**_Example:_**

> keyed "TEST",[1:1:5]+[2:1:6]+[3:1:8]  
>  read (1,key=A$:B$:C$)

is the same as:

> read (1,key=pad(A$,5,$00$)+pad(B$,6,$00$)+C$)

##  Read Next Physical

If you specify **KNO=*** on the **READ** directive, the system will read and return the next physical record from the file. The read will **_not_** utilize any of the key tables in order to access the data. This significantly reduces the overhead involved in the data retrieval process.

Use of the Read Next Physical capability can greatly reduce the time it takes to process a file where the order of the data is not important.

_(The ability to read next by physical location was added in PxPlus v6.30.)_

##  See Also

[**FIND Locate and Read Data**](find.md)**  
** [**EXTRACT Read and Lock Data**](extract.md)  
[**OPEN Open a File for Processing**](open.md)  
[***MEMORY* Create and Use Memory File**](../file_handling/~memory~.md)

##  Example

0410 read (1,err=1000,dom=1200)A,B,*,*,E$
