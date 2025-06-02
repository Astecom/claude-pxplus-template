# System Parameters

**'VA'** |  **_Data Validation of IOLIST_**  
---|---  
  
## Description

Controls how to handle data validation of IOLIST.

Valid settings for the **'VA'** parameter are:

|  **0** |  Report error if invalid data detected  
---|---|---  
|  **1** |  Log the validation failure on the system log file but continue  
|  **2** |  Ignore all data validation  
  
Setting **'VA'** to 1 allows the system to log all validation failures so that these issues can be addressed prior to fully implementing data validation within an application.

_(The 'VA' system parameter was added in PxPlus 2017.)_

## Default

**0** \- Report error if invalid data detected.
