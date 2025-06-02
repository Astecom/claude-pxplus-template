# Utility Routines

***TOOLS/QRYEXPORT** |  **_Create an Export File Based on Query Definition_**  
---|---  
  
## Invocation

**CALL "*tools/qryexport"** , _queryName_ _$, queryLib$, exportfile$_[_, queryopts$, show_flg$_]

**_Where:_**

_queryName_ _$_ |  Required |  Input |  Name of the query to use to generate the export file.  
---|---|---|---  
_queryLib_ _$_ |  Required |  Input |  Library where the query is defined.  
_exportfile_ _$_ |  Required |  Input |  Name of the export file to write to. (To write to a client machine, include the **[lcl]** prefix in the file name.) Export file types are determined by their file extension. Supported types include: |  _.csv_ |  Comma-separated  
---|---  
_.slk_ |  Symbolic link  
_.txt_ |  Tab delimited  
_.xml_ |  Microsoft XML  
_queryopts_ _$_ |  Optional |  Input |  Flag to determine additional content to add to the file. Possible values are: |  **""** Null __|  **_(Default)_** No additional content.  
---|---  
H |  Show hidden columns in the query definition. (By default, hidden columns are excluded from the file.)  
_show_flg_ _$_ |  Optional |  Input |  Flags to determine interactive behavior at run time. Possible values are: |  **""** Null |  **_(Default)_** The export file is generated silently.  
---|---  
D |  The generated file is displayed using the default app (e.g. Excel).  
E |  Error message for errors that occur during file generation are displayed in message boxes.  
P |  A progress bar is displayed while the file is generated.  
***** |  All of the above.  
  
#### **Note:**  
Any combination of D, E and P is acceptable.  
  
## Description

This utility is a CALLed program that exports data to a spreadsheet-supported file based on a query definition. The file has of a header record consisting of the column headings defined in the query, followed by data records of the resulting query data set. By default, columns defined as _hidden_ in the query definition are excluded but can be included by setting the _queryopts_ _$_ optional parameter to "H".

The file types that are supported are comma separated (_.csv_), tab delimited (_.txt_), symbolic link (_.slk_) and Microsoft XML (_.xml_). The type of file is determined by its file extension. Unsupported file extensions will result in Error #17: Invalid file type or contents.

#### **Note:**  
This program will EXIT ERR if an error is encountered.

_(The QryExport utility was added in PxPlus 2024.)_
