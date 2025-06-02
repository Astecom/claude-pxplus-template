# Directives 

**REMOVE** |  **_Delete Record from File_**  
---|---  
  
##  Format

**REMOVE**(_filespec_[,_fileopt_])  
  
**_Where:_**

_filespec_ |  Can be a numeric expression indicating the open channel number to use or a string expression containing the pathname or table name (if string is prefixed by the keyword **TABLE**) of the file to use.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **BSY=**_stmtref_ __ |  Traps Error #0: Record/file busy  
---|---  
**DOM=**_stmtref_ __ |  Missing record transfer  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index   
**KEY=**_string$/num_ |  Record key  
**RTY=**_num_ __ |  Number of retries (one-second intervals). This overrides the value defined by the **['WT'](../parameters/wt.md)** system parameter.  
**TIM=**_num_ __ |  Maximum time-out value in integer seconds  
_stmtref_ |  Program line number or statement label to which to transfer control  
  
_(TABLE support was added in PxPlus 2018.)_

##  Description

Use the **REMOVE** directive to delete a record from a file. The directive is only supported for file types that have keys (i.e. not for indexed files). The **REMOVE** directive and the specific options are dependent on the specific file type.

For Keyed, Direct Sort or ZIP files, the **KEY=** option is mandatory to identify the record to be removed. The key specified must be the primary key for the file. With multi-keyed files, PxPlus removes all related alternate keys from the file automatically when executing this directive.

PxPlus supports use of the **REMOVE** directive with ZIP files.

##  See Also

**[Accessing ZIP Files](http://manual.pvxplus.com/?PxPlus%20User%20Guide/File%20Handling/Processing%20Data%20Files/Accessing%20ZIP%20Files.md)**

##  Example

0010 open (20)"CSTFLE"  
0020 input "What customer do we delete?",C$  
0030 if C$="" then stop  
0040 remove (20,key=C$,dom=0100)  
0050 print "Well that's gone.."  
0060 goto 0020  
0100 print "Could not find ",C$  
0110 goto 0020
