# System Functions

**RCD( )** |  **_Return Next Record_**  
---|---  
  
##  Format

**RCD(**_chan_[,_fileopt_]**)**  
  
**_Where:_**

|  _chan_ |  Channel or logical file number of the file from which to read the data.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**):  
**** |  **BSY=**_stmtref_ |  Traps Error #0: Record/file busy |   
**** |  **DIR=**_num_ |  Direction indicator (**_no_** t supported with **[WDX]** tag) |   
**** |  **DOM=**_stmtref_ |  Missing record transfer |   
**** |  **END=**_stmtref_ |  End**-o** f**-** File transfer |   
**** |  **ERR=**_stmtref_ |  Error transfer |   
**** |  **IND=**_num_ |  Record index |   
**** |  **KEY=**_string$/num_ |  Record key |   
**** |  **KNO=**_num_ | _name$_ |  File access key number (_num_) or name (_name$_) |   
**** |  **REC=**_name$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used) |   
**** |  **RNO=**_num_ |  Record number |   
**** |  **RTY=**_num_ |  Number of retries (one second intervals) |   
**** |  **SIZ=**_num_ |  Number characters to read |   
**** |  **TBL=**_stmtref_ |  Data translation table |   
**** |  **TIM=**_num_ |  Maximum time-out value in integer seconds |   
|  _stmtref_ |  Program line number or statement label to which to transfer control |   
  
##  Returns

Contents of next or given record.

##  Description

The **RCD( )** function returns the contents of either the next record in the given file or of the record identified in a **KEY=** , **RNO=** , or **IND=** option. PxPlus effectively issues a **READ RECORD** directive when it encounters this function and returns the contents of the given record.

##  See Also

[**READ RECORD Read Record from File**](../directives/read_record.md)

##  Example

0010 open (13)"\CONFIG.SYS"  
0020 print rcd(13,end=0040)  
0030 goto 0020  
0040 stop  
  
->run  
rem device=c:\other\tools\ziptools\aspippm1.sys  
FILE=NIBBLE.ILM  
SPEED=10  
QUIET
