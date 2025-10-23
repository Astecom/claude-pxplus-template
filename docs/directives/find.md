# Directives 

**FIND** |  **_Locate and Read Data_**  
---|---  
  
##  Format

**FIND** (_filespec_[,_fileopt_])_varlist_

**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Record/file busy  
---|---  
**DIR=**_num_ |  Direction indicator (Not supported with **[WDX]** tag)  
**DOM=**_stmtref_ __ |  Missing record transfer  
**END=**_stmtref_ __ |  End-of-File transfer  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index  
**KEY=**_string$/num_ |  Record key  
**KNO=**_num_ | _name$_ |  File access key number (_num_) or name (_name$_)  
**REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used)  
**RNO=**_num_ __ |  Record number  
**RTY=**_num_ __ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**SIZ=**_num_ __ |  Number characters to read  
**TBL=**_stmtref_ |  Data translation table  
**TIM=**_num_ __ |  Maximum time-out value in integer seconds  
_stmtref_ |  Program line number or statement label to which to transfer control  
_varlist_ |  Comma**-** separated list of variables, literals, or **IOL=** options.  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

Use **FIND** to read data from the file (channel) you specify. When PxPlus reads the data, it is split into one or more fields (either separated by the current delimiter or defined by an embedded format with headers, etc.). The contents of the first field are placed in variable 1, the second field in variable 2, and so on.

PxPlus automatically converts numeric data when executing a **FIND** statement and moving numerics into variables. Numeric data converted during a **FIND** directive does **_not_** use the **'DP'** (Decimal Point Symbol) or **'TH'** (Thousands Separator) system parameters for European decimal settings.

If you want to skip a field, use an ***** (_asterisk_) as a placeholder for the variable name. If you include more variables in a **FIND** directive than there are fields in the record, PxPlus initializes the additional variables to either 0 (for a numeric variable) or a null string (for a string variable). The **FIND** directive advances the file position to the next record (or the record you specify if you use a **KEY=** or **IND=** option). Use the **KNO=** option to change the current file access key.

#### **Note:**  
If the record is not found when reading using a **KEY=** or **IND=** option, the current file position is** _not changed_** (unlike **READ**).

##  See Also

[**EXTRACT Read and Lock Data**](extract.md)  
[**READ Read Data from File**](read.md)

##  Example

0410 find (1,err=1000,dom=1200)A,B,*,*,E$
