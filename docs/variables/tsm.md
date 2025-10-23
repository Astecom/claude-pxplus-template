# System Variables

**TSM** |  **_Error Status of Current Program_**  
---|---  
  
**_String System Variable_**

##  Contents

String, error status of current program

#### **Note:**  
This variable is included for compatibility with other languages.

##  Description

The **TSM** variable indicates the error status of the currently running program. (This is included in PxPlus primarily for compatibility with other Business Basics.)

Its contents are:

|  (1,1) |  "0"  
---|---|---  
|  (2,16) |  Name of program with last error, padded with nulls  
|  (18,5) |  Line with error  
|  (23,5) |  Error status  
|  (28,5) |  Operating system error code
