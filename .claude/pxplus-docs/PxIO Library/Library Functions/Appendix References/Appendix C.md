# Library Functions - Appendix References 

**Appendix C** |  **__**  
---|---  
  
The following options are the allowed readType values for the **[PxIORead](../File%20Read%20Functions/PxIORead.md)**, **[PxIOKeyRead](../File%20Read%20Functions/PxIOKeyRead.md)**, **[PxIOIndexRead](../File%20Read%20Functions/PxIOIndexRead.md)**, and **[PxIORecordRead](../File%20Read%20Functions/PxIORecordRead.md)** functions.

**Option** |  **Description**  
---|---  
READ_TYPE_NO_OPTIONS |  No special options are necessary for the read  
READ_TYPE_IGNORE_LOCK |  Ignore any locks on the record  
READ_TYPE_LOCK |  Lock the record before reading it  
READ_TYPE_FIND |  If the record is not found, do not change the file position. This option is not an allowed parameter for the PxIORead function.
