# How To Tutorials

**How to Use PxPlus Query Definitions in Non-NOMADS Environments**|   
---|---  
  
Your application does not have to be running in a NOMADS environment to take advantage of some of the PxPlus NOMADS features. One of the multi-faceted features is the **[NOMADS Query Subsystem](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**.

A query definition basically defines a custom dataset that can draw data from multiple related files and specify fields and formulas to include. It can be used to:

**[Display a Lookup Table](Display%20Lookup%20Table.md)** |  Display a table lookup for displaying records from a defined dataset and return a selected value.  
---|---  
**[Read a Query Dataset](Read%20a%20Qry%20Dataset.md)** |  Read records from a custom dataset that can comprise multiple files and selected fields.  
**[Load List Box and Grid Controls](Load%20Lbox%20and%20Grid%20Ctrls.md)** |  Automatically load List Box and Grid controls based on a query definition.  
**[Create Charts](Create%20Charts.md)** |  Generate charts in the query Lookup Table and create chart images.  
**[Generate Spreadsheet Data](Generate%20Spreadsheet%20Data.md)** |  Generate export files to be used in spreadsheets.  
**[Print a Simple Report](Print%20Simple%20Rpt.md)** |  Print a simple report based on the query definition.  
**[Supply Data to the PxPlus Report Writer](Supply%20Data%20to%20Rpt%20Writer.md)** |  Serve as an input source for the PxPlus Report Writer to generate more complex reports.  
**[Display Information in a Browser](Display%20Info%20in%20Browser.md)** |  Display information in various formats (lookup, chart, report) in a browser.  
**[Display Data in Webster+](Display%20Data%20in%20Webster.md)** |  Used in conjunction with several Webster+ short codes to display data.  
  
All of the above features are also available when using the NOMADS environment.

## Defining a Query

These steps explain how to define a query.

1. |  The first step is to get ready to define a query. A query definition consists of selecting a main file, related files to link to, and fields and formulas to include. The main file could be a native PxPlus file or an external database table. While it is possible to define a query for a native file with no embedded data dictionary, using field number references with offsets and field lengths, it is much easier to use files with data dictionary definitions. If your native file consists of delimited fields, you can use the **[Visual Dictionary Utility](../Visual%20Dictionary/Visual%20Dictionary%20Introduction.md)** to help define the data dictionary for the file or use **[Data Dictionary Maintenance](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** to define native files with more complex structures or add more detail. As for external data bases, you can use the **[Database Import Utility](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Database%20Import.md)** to create data dictionary entries for the tables in the database, as well as prefix file entries or link files that allow you to reference the tables using a simple table name. You should also define data dictionaries for any related files you wish to access.  
---|---  
2. |  The next step in defining a query is creating and **[Opening a Library File](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Opening%20a%20Library%20File.md)**. Use the **[Library Object Selection](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** window, which is used for **[Creating Library Objects](../NOMADS%20Graphical%20Application/NOMADS%20Development/Library%20Object%20Selection/Creating%20Library%20Objects.htm#query)**, to create a **_Query_** object. Give the query object a name. The name you give to the library and query object will be used later to identify the query definition.  
3. |  Continue with the next step by **[Defining the Query](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Defining%20a%20Query.md)**. If your native file or table has a data dictionary, you can select it in the **[Query Header Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.md)** using the logical file name from the data dictionary.  
4. |  In the **[Query Definition](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**, you can invoke the **[Query File Link](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20File%20Link.md)** panel to add the links to related files.  
5. |  In the query definition, select the fields and define any **[Formulas](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Formula.md)** you wish to include in your dataset. Depending on your intended use for the query definition, you may wish to alter some of the column settings and display options if the query is used for visual display.  
6. |  You can also set up **[Query Selection Criteria](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Selection%20Criteria.md)** to filter your data.  
7. |  When your query definition is complete, the next step is to test it, make any adjustments and save it. After that, the query is ready to use.
