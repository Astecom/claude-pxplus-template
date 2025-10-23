# System Parameters

**'CL'** |  **_Cache Load_**  
---|---  
  
## Description

The **'CL'** parameter setting **_times 1,000_** defines the maximum number of records that can exist in a file to be cached via OPEN LOAD. The maximum setting for this parameter is 32,000 (32,000,000 records).

Database (ODB, OCI, DB2 and MYSQL) tables, EFF and VLR files that do **_not_** have either external keys or embedded IO procedures are subject to being cached based on the number of records they contain.

_(The 'CL' system parameter was added in PxPlus 2019.)_

## Default

**1** (1,000 records)

## See Also

**[OPEN LOAD Caching](../PxPlus%20User%20Guide/File%20Handling/Open%20Load%20Caching.md)**
