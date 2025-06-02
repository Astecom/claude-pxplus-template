# System Functions

**HSA( )** |  **_Highest Sector Available_**  
---|---  
  
##  Format

**HSA(**_drive_num_[,**ERR** =_stmtref_]**)**

**_Where:_** |   
---|---  
_drive_num_ |  Numeric value representing the disc drive number.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Always 0 (zero).

#### **Note:**  
Included for compatibility with other languages.

##  Description

PxPlus includes the **HSA( )** function for compatibility with Business Basic languages where it returns the highest sector number available on the disk drive specified. Since this function is not applicable in PxPlus, it always returns 0 (zero).
