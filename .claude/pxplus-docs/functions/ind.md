# System Functions

**IND( )** |  **_Return Next Record Index_**  
---|---  
  
##  Format

**IND(**_chan_[,_fileopt_]**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file to reference.  
---|---  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **ERR=**_stmtref_ |  Error transfer  
---|---  
**END=**_stmtref_ |  End-of-File transfer  
**KEY=**_string$_ |  Record key  
**KNO=**_num_ __ | _string$_ |  File access key number (_num_) or name (_string$_)  
**RNO=**_num_ |  Record number  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Record index (next or specified record).

##  Description

The **IND( )** function returns the record index of either the next record in the file specified or, on a Direct or Keyed file using the **KEY=** option, the record index for the record identified by the key.

For Direct/Keyed or Sort files without the **KEY=** option, the value returned is the record index for the record with the next higher key value. For variable length Direct/Keyed files, the value returned is an internal pointer to the record.

## See Also

**[File Handling](../PxPlus%20User%20Guide/File%20Handling/Introduction.md)**

##  Example

0010 open (13)"CUSTNO"  
0020 let I=ind(13,end=1000)  
0030 read (13,ind=I) R$  
0040 print "Rec#: ",I," Data: ",R$  
0050 goto 0020  
1000 print "End-of-file"  
1010 end
