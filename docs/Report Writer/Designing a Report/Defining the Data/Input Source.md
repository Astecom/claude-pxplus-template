# Defining the Data 

**Input Source** |  **__**  
---|---  
  
To determine the source of the data to be displayed in the report, select _Input Source_ from the Report Designer _Data_ menu. The input source can be any native PxPlus file with an embedded data dictionary, a PxPlus View, a Query Definition, or any other data source whose data can be accessed using a Custom Data Source Object. External databases, such as ODBC, Oracle or DB2, can also be accessed via Views.

Select the type of _Input Source_ :

_Table Name_ |  Identify an input table using its logical table name as defined in **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)**.

#### **Note:**  
To make it easier to locate a specific table name, apply a filter in the Table Names lookup. See **[Filtering the Table Names Lookup](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**.  
  
---|---  
_File Path_ |  Select a native PxPlus file using its physical path name. You can also enter a prefix file reference to an external database table (ODBC, ADO, Oracle, MySQL or DB2 are supported). PxPlus data files must have embedded dictionaries and all files/tables must have keys defined.  
_View_ |  Select a View from the presented list. Direct access to **[View Maintenance](../../../Views%20System/View%20Maintenance/Overview.md)** may also be available, allowing you to update and create Views. To suppress the View Maintenance option, set the **%RW_Suppress_View_Maintenance** global variable to a non-zero numeric value.  
_Query Definition_ |  Select a Query definition. The Query definition must be a **_Query List_** or a **_Standard Query_**. See **[Query Type](../../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Defining%20a%20Query.htm#type)**. Query definitions whose main data source is based on PxPlus files with embedded dictionaries, Views definitions, or external data base tables are supported. Queries whose main data source is based on manual field definitions (i.e. fields based on a field number, such as Fld#1) are **_not_** supported. For information on defining the contents of a query, see **[Query Header](../../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.htm#fileinfo)** and **[Query Definition](../../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.htm#columnoptions)**. Ensure that formula definitions in selected queries have been assigned names that will be used to identify the formula. If formula names have not been specified in the Query definition, temporary names will be assigned; however, these are subject to change. See **[Query Formula Definition](../../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.htm#queryformula)**. The above window consists of the following: |  _Query Lookup_ |  Button that invokes the **Select a Query Definition** window: This window presents a tree view format showing Query Lists and Queries that exist at the current display level and lower, arranged by directory, screen library and query. Select a Query definition by clicking on a Query in the list. When a Query List or Query is selected, the _Library_ and _Query Definition_ input fields are automatically populated.

#### **Note:**  
A Query definition can also be selected by entering the _Library_ and _Query Definition_ input fields manually.  
  
---|---  
_Library_ |  Enter the path to the library containing the Query List or Query definition. The Browse button allows you to browse the directory to locate the library. Be sure to **_use the simplest form of the path_** for your application.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../../../NOMADS%20Graphical%20Application/Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).  
  
_Query Definition_ |  Select a Query definition from the list of queries in the specified library.  
  
_(The ability to select a query definition as an input source was added in PxPlus 2020.)_  
  
_Source Object_ |  Enter the name of the source object and an argument to identify the input source. The source object must adhere to the **[Custom Data Source Objects](../../../Views%20System/Custom%20Data%20Source%20Objects/Overview.md)** interface standard (used by the **[Views System](../../../Views%20System/Introduction.md)**).  
  
#### **Note:**  
If a report requires data from multiple related files, additional related data sources may be available for selection if the main data source is defined using a _Table Name_ or _File Path_. See **[Related Data Sources](Related%20Data%20Sources.md)**.  
  
You can also use a View as the input source (see **[Views System](../../../Views%20System/Introduction.md)**) or a Query definition (see **[Query Subsystem](../../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**), both of which support linking data from multiple sources.

Once an input source is selected, its elements and their descriptions appear in the data items list on the left side of the Report Designer, ready to drag and drop into place on the report layout.

If you want to change the input source, a warning will be displayed to inform you that data elements, sort sequence, filters and data groupings may no longer be valid. You can choose to ignore this warning or clear the selected items.

A report can be defined with no data source selected. The output will consist of one page with a page header, report summary and a page footer.

#### **Note:**  
To suppress any of the input sources from the _Data_ > _Input Source_ menu or from the data source types in **Step 2** of the **[Report Wizard](../../Report%20Wizard/Introduction.htm#steps)**, create a string consisting of input source codes to be excluded (V=View, F=File Name, T=Table Name, Q=Query Definition, O=Source Object). Then load it into the **%RW_Suppress$** global variable.
