# File Handling

**OPEN LOAD Caching**|   
---|---  
  
PxPlus 2019 includes a new option that allows the system to locally cache data files/tables in memory resident keyed tables to improve performance. With this option enabled, the system will automatically convert an OPEN LOAD of a database table or any keyed file (VLR/EFF) to a memory file with the same data, key structure, IOLIST and embedded Data Dictionary elements. This reduces the number of SQL requests or disc/network requests for files that will remain static during batch processing.

For example, a Sales report might want to access the Salesperson Name, Department and Vendor information when producing a listing. These files would likely not change during the report execution; therefore, they could be loaded in a quick access memory table. By caching the file contents in the memory file, the processing time for the report will improve, particularly in cases where the same file/table is being accessed repeatedly.

Since a file opened using an OPEN LOAD is read-only, existing logic would remain intact with no application changes required.

## Controlling the Caching Option

The caching of files that were accessed via OPEN LOAD is automatic based on the file type and the number of records. Database (ODB, OCI, DB2 and MYSQL) tables, EFF and VLR files that do **_not_** have either external keys or embedded IO procedures are subject to being cached based on the number of records they contain.

The **['CL'](../../parameters/cl.md)** (Cache Load) system parameter setting **_times 1,000_** defines the maximum number of records that can exist in a file to be cached. By default, this is set to 1 (1,000 records); therefore, any file that contains less than 1,000 records and adheres to the guidelines mentioned above will be cached. The maximum setting for the **'CL'** parameter is 32,000 (32,000,000 records).

Alternatively, individual OPEN LOAD directives can include an **OPT=** clause of **CACHE=**_xxx_ to indicate if caching is to be done ** _where_** _xxx_ can contain:

|  _YES_ |  Caching is to be done regardless of record count.  
---|---|---  
|  _NO_ |  Caching is **_not_** to be done regardless of record count.  
|  _nnnnn_ |  Caching is to be done if the file/table contains less than _nnnnn_ ** _times 1,000_** records (overrides the **'CL'** system parameter setting for this OPEN). The maximum number is 32,000 (32,000,0000 records), and numbers higher than that will be treated as 32,000.  
  
**_Example:_**

The following example will open and cache the file "SalesReps", regardless of the setting of the **'CL'** parameter:

> **OPEN LOAD** (HFN, IOL=*, OPT="Cache=Y") "SalesReps"

#### **Important Note:**  
The use of OPEN LOAD caching will likely increase the memory demands on your application as the table contents are loaded into memory. It may be necessary to increase the **['SZ'](../../parameters/sz.md)** system parameter or set the **['IZ'](../../parameters/iz.md)** system parameter to ignore memory size limitations.

_(OPEN LOAD Caching was added in PxPlus 2019.)_
