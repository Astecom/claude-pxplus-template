# Directives 

**MERGE** |  **_Read/Append Lines from File_**  
---|---  
  
##  Formats

1\. _Specify Source File by Channel_ _:_ |  **MERGE** (_chan_ ,_fileopt_)  
---|---  
2\. _Specify Source File by Serial Filename_ _:_ |  **MERGE** _filename$_  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file to reference.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**IND=**_num_ |  Record index  
**TBL=**_stmtref_ |  Data translation table  
_filename_ |  Name of the serial file to be used as the source file for the merge.  
  
##  Description

Use the **MERGE** directive to add program statements from a source file to the current (target) program. You can use a **MERGE** directive for serial or indexed files. You can also use it with memory files. The source file must contain records that are statements in a valid list format (i.e. with correct syntax, line numbers, etc.).

#### **Warning!**  
During the **MERGE** process, if a statement from the source file has a line number matching a line number in the target program, the statement from the source file will overwrite the corresponding statement in the target program.

You have to include line numbers in the source file; however, you do not have to put them in numeric order. PxPlus reads them into the target program in ascending sequence as if they were entered in Command mode but will place them in the correct numeric sequence, using the source file's numbering.

If a source file contains a statement without a statement number or with an invalid statement number (outside of the allowed range), PxPlus generates Error #21: Statement number is invalid and halts the **MERGE** process. PxPlus terminates the **MERGE** process when it encounters an End-of-File status in the source file.

##  Format 1

**_Specify Source File by Channel_**

**MERGE** (_chan_ ,_fileopt_)

This opens the source file and uses its current channel/logical file number to identify it. You can use this format with a memory-resident file (i.e. ***MEMORY***).

##  Format 2

**_Specify Source File by Serial Filename_**

**MERGE** _filename$_

You can use a serial filename to identify it as the source for the **MERGE** (instead of opening it and referring to the channel).

##  See Also

[**INDEXED Create Indexed File**](indexed.md)  
[***MEMORY* Create and Use Memory File**](../file_handling/~memory~.md)  
[**SERIAL Create a Sequential File**](serial.md)

#### **Note:**  
**MERGE** does not support code generated using the LIST EDIT format.

##  Example

The following is a sample terminal session using the **MERGE** directive to combine two programs:

> load "TIME.PRT"  
>  list  
>  1000 rem Time output routine  
>  1010 T$=str(int(tim)*100+fpt(tim)*60:"00:00")  
>  1020 return  
>  serial "WORKFILE"  
>  open (1)"WORKFILE"; lock(1)  
>  list (1)  
>  close (1) ! WORKFILE has list of program  
>  load "PASS.CTRL"  
>  list  
>  0010 gosub 1000; print "1st pass: ",T$  
>  0020 call "PASS1"  
>  0030 gosub 1000; print "2nd pass: ",T$  
>  0040 call "PASS2"  
>  0050 gosub 1000; print "End both: ",T$  
>  0060 stop  
>  open (1)"WORKFILE"  
>  merge (1)  
>  close (1)  
>  list  
>  0010 gosub 1000; print "1st pass: ",T$  
>  0020 call "PASS1"  
>  0030 gosub 1000; print "2nd pass: ",T$  
>  0040 call "PASS2"  
>  0050 gosub 1000; print "End both: ",T$  
>  0060 stop  
>  1000 rem Time output routine  
>  1010 T$=str(int(tim)*100+fpt(tim)*60:"00:00")  
>  1020 return
