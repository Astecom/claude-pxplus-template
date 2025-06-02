# System Parameters

**'XI'** |  **_Extract Ignore_**  
---|---  
  
##  Description

Allows extracted records to be read by other PxPlus processes. The blocking of the extracted record is limited to **EXTRACT** , **WRITE** and **REMOVE**.

#### **Note:**  
This parameter is **_not_** applicable to files with Extended records (keyed files created with the 'X' attribute - see **[Keyed](../directives/keyed.md)** directive).

##  Default

**_Off_** \- The **EXTRACT** of a record blocks all other file I/O on that record, **_including_ READ**.

##  See Also

**[EXTRACT Read and Lock Data](../directives/extract.md)**  
**[WRITE Add/Update Data in File](../directives/write.md)  
[REMOVE Delete Record from File](../directives/remove.md)**
