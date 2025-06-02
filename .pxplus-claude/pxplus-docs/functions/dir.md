# System Functions

**DIR( )** |  **_Get Current Directory_**  
---|---  
  
##  Format

**DIR(**_disk_id_[_$_][,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_disk_id_**[**_$_**]** |  Disk to check. String or numeric expression.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

String, name of current directory.

#### **Note:**  
This function is primarily for use in PVX Windows. Under UNIX, PxPlus assumes that there is only one disk drive and this function only returns the current directory.

##  Description

The **DIR( )** function returns a string naming the current directory for the disk drive specified. Use either a string or numeric value to specify the drive.

If a **_string_** is given, the first character indicates the drive (A, B, C and so on). A null ("") string returns the name of the current directory for the current drive.

If a **_numeric_** value is given, it must be an integer in a positive range starting at zero. A value of 0 (zero) indicates the first drive, 1 the second and so on.

When reporting items based on the **_universal naming convention_** , this function returns the UNC-style pathname; i.e. for a current directory of \\\_server_ \_share_ \_path_ \ **DIR( )** returns \_path_ \\.

##  Example

The following illustrates use of the **DIR( )** function in a Windows environment:

> print "Available Drives by Drive Number"  
>  for X=0 to 25 ! Check for Drives 0 to 25  
>  A$=dir(X,err=*next);  
>  print str(X)," ",A$  
>  next X  
>  print "Available Drives by Drive Letter"  
>  for X=65 to 90 ! Check for Drives A to Z  
>  A$=dir(chr(X),err=*next);  
>  print chr(X)," ",A$  
>  next X  
>   
> ->run  
>  Available Drives by Drive Number  
>  0 \  
>  2 \PVX\  
>  3 \WIN9X\  
>  6 \bestlogos\  
>  7 \  
>  Available Drives by Drive Letter  
>  A \  
>  C \PVX\  
>  D \WIN9X\  
>  G \bestlogos\  
>  H \
