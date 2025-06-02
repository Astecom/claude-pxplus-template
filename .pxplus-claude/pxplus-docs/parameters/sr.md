# System Parameters

**'SR'** |  **_Small Reads_**  
---|---  
  
##  Description

Attempts to optimize performance when reading fixed length record files over slower networks by reading smaller portions of the data record rather than the defined record size.

If the first "short read" is unable to read the entire record, then a second read is performed to retrieve the remaining portion of the record.

#### **Note:**  
This is used to improve performance in peer-to-peer networks where records are not filled to their maximum size.

##  Default

**_Off_** \- Reads the entire record in one read operation.
