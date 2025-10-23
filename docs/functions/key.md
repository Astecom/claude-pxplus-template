# System Functions

**KEY( )** |  **_Return Key of Next Record_**  
---|---  
  
##  Format

**KEY(**_chan_[,_fileopt_]**)**

**_Where:_**

_chan_ |  Channel or logical file number of the file to reference.  
---|---  
_fileopt_ |  Supported file options: |  **END=**_stmtref_ __ |  End**-** of**-** File transfer  
---|---  
**ERR=**_stmtref_ __ |  Error transfer  
**KNO=**_num_ | _string$_ |  File access key number (_num_) or name (_string$_)  
**KEY=**_keyvalue_ |  Key value to convert/generate (see **Generate Key Option**)  
**IND=**_num_ __ |  Record index  
**RNO=**_num_ |  Record number   
_stmtref_ |  Program line number or statement label to which to transfer control in case of an error/exception.  
  
##  Returns

Key of next record in file.

##  Description

The **KEY( )** function returns the key of either the next record in the file specified or, via the **IND=** or **RNO=** options, the key of the record at the index/record number specified. The result is based on the:

  * Current file access key **_or_**
  * Access key specified using the **KNO=** option



## See Also

**[File Handling](../PxPlus%20User%20Guide/File%20Handling/Introduction.md)**

## Generate Key Option

The **KEY** function allows the user to get the internal generated key value for a file when specifying a **KEY=** option in the function. This feature is supported for those files/tables that allow multi-segment alternate keys such as standard PVX keyed files, EFF files, databases, and memory tables.

Internally, when dealing with a multiple segment alternate key, the system generates a simple string consisting of the various field values used to reference the file. When accessing a file by a multi-segmented key, the programmer can specify each of the segment values to be provided in the **KEY=** clause of the I/O operation with each key segment separated by a colon. For example, read (1, key=A$:B$:C$) tells the system to use A$ as the value for the first field segment of the key, B$ for the second, and C$ for the third.

The **KEY** function allows you to specify a **KEY=** clause with the segments in order to return the generated key based on the segments you provided.

**_Example:_**

> Suppose a multi-segment key has the following segments: the first is 10 characters long, the second is 5 characters long, and the third is 5 characters long. A key(_fileno_ , key=A$:B$:C$) will return a string comprised of the individual key elements, each $00$ padded to the corresponding lengths of the multi-segment key. Therefore, A$ would be a length of 10, B$ would be a length of 5, etc.

The **KNO=** clause can be specified in order select the specific key you want generated.

A typical example might be to set the BEGIN or END values in a **SELECT** directive:

> SELECT .... FROM <_fileno_ > BEGIN **KEY( <_fileno_ >**, **KEY=S1$:S2$:S3$)**  
>  ....  
>  NEXT RECORD

A **KEY** function that specifies a **KEY=** clause does not affect the current status or position of the file.

_(The KEY generation capability was added in PxPlus v8.00.)_

##  Example

0010 open (13)"CUSTNO"  
0020 let K$=key(13,end=1000)  
0030 read (13,key=K$)R$  
0040 print "Key: ",K$," Data: ",R$  
0050 goto 0020  
1000 print "End-of-file"  
1010 end
