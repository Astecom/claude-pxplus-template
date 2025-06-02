# System Functions

**KEN( )** |  **_Return Key After Next_**  
---|---  
  
##  Format

**KEN(**_chan_[,_fileopt_]**)**

**_Where:_**

_chan_ |  Channel or logical file number of your given file.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **END=**_stmtref_ |  End**-** of**-** File transfer  
---|---  
**ERR=**_stmtref_ |  Error transfer  
**KEY=**_string$_ |  Record key  
**KNO=**_num_ | _string$_ |  File access key number (_num_) or name (_string$_)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Key of the record that follows the next record in the file.

##  Description

The **KEN( )** function returns the key of the record which directly follows the next record in the file specified. The result is based on the:

  * Current file access key **_or_**
  * Access key specified using the **KNO=** option



If the **['+K'](../parameters/plusk.md)** system parameter is not enabled, the 'Record Key' specified must exist on the file.

For ODBC files, the **KEN( )** function supports some debugging tools:

  * KEN (_nn_) Returns last generated SQL statement passed to the PxPlus SQL ODBC Driver.
  * KEN (_nn_ , IND=1) Returns cursor name for database.
  * KEN (_nn_ , IND=2) Returns ODBC handles.



## See Also

**[File Handling](../PxPlus%20User%20Guide/File%20Handling/Introduction.md)**

##  Example

0010 open (13)"INVDET"  
0020 K$=key(13,end=1000)  
0030 rem Last record is total line - different format  
0040 KN$=ken(13,end=0080); if KN$(1,6)<>K$(1,6) goto 0080  
0050 read (13)iol=8010 ! Get record  
0060 gosub 7000 ! Process invoice line  
0070 goto 0020  
0080 read (13)iol=8010 ! Get total line  
0090 gosub 7500; goto 0020  
1000 end

To return the current ODBC SQL statement being passed to the PxPlus SQL ODBC Driver:

> open (1) "[odb]Database;customer;key=custid"  
>  read (1,key="MIKE")  
>  print ken(1)  
>  select * from customer where custid$="MIKE"
