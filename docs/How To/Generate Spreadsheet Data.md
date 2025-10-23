# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Generate Spreadsheet Data**|   
---|---  
  
The **[*TOOLS/QRYEXPORT](../utilities/qryexport.md)** utility can be used to export data to a spreadsheet-supported file based on a query definition. It can be invoked in your program using the **[CALL](../directives/call.md)** directive:

> CALL "*tools/qryexport", _queryName_ _$_ , _queryLib_ _$_ , _exportfile_ _$_ [, _queryopts_ _$_ , _show_flg_ _$_]

The file has a header record consisting of the column headings defined in the query, followed by data records of the resulting query data set. The file types that are supported are comma separated (_.csv_), tab delimited (_.txt_), symbolic link (._slk_) and Microsoft XML (._xml_), dependent upon the extension on the export file name.

There are also options to include hidden query columns and determine interactive run-time behavior.

**_Example:_**

> CALL "*tools/qryexport","qClient","panels.en","customer.xml","","PD"

> This code generates an XML file based on the qClient query definition, excludes any hidden columns, displays a progress bar while it is generating the file, and displays the result using the default app (e.g. Excel).
