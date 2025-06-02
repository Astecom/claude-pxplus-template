# System Parameters

**'LU'** |  **_Lock Unnecessary: Serial Files_**  
---|---  
  
##  Description

Makes lock unnecessary on writing to serial files. (No Error #13 on WRITE without lock.)

#### **Note:**  
File access mode is checked once on the first write after opening. An error will not be generated on a subsequent unlocked write if the file number is continuously open between writes (even if the parameter is switched off between writes).

##  Default

**_Off_** \- A "sticky" parameter. PxPlus generates Error #13: File access mode invalid if there is no lock on the first write to an open file number.
