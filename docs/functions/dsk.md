# System Functions

**DSK( )** |  **_Get Current Disk Drive_**  
---|---  
  
##  Format

**DSK(**_disk_id_[_$_][,*****][,**ERR** =_stmtref_]**)**  
  
**_Where:_**

***** |  _(asterisk)_ Returns the name of the volume (rather than the drive).  
---|---  
_disk_id_[_$_] |  Disk to check. String or numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Current disk drive identifier.

#### **Note:**  
This function is primarily for use in Windows. Under UNIX, it is assumed that there is only one disk drive, and this function returns a null ("") string.

##  Description

The **DSK( )** function checks for the existence of a disk drive and returns the current disk drive identifier, volume name. Use either a string or numeric value to specify the drive. If a string is given, the first character indicates the drive (A, B, C, etc.). A null ("") string returns the current disk identifier.

This function returns the operating system's drive prefix ("A:","B:", etc.). If you place an asterisk after _disk_id_ _,_ the function returns the name of the volume mounted on your drive, if any; e.g. DSK("C",*) or DSK(2,*). If the disk drive or volume does not exist, PxPlus returns an Error #17: Invalid file type or contents.

If a numeric value is given, then the value must be a positive integer in a range starting at zero. Use 0 as the value for the first drive, 1 for the second, and so on.

When reporting items based on the **_universal naming convention_** , this function returns the UNC-style pathname; i.e. for a current directory of \\\_server_ \_share_ \_path_ \, **DSK( )** returns \\\_server_ \_share_ \\.

##  Example

?dsk("")  
C:  
?dsk(0)  
A:
