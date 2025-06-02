# 

**Views System** |  **__**  
---|---  
  
The **Views System** is used to define, present and process customized end-user views of various application data. It allows the system designer to define logical representations of data sources that are relevant and accessible to end users, regardless of the original physical layout. Based on these representations, end users can extract specific data elements for display and reporting purposes without requiring prior in-depth knowledge of the data files, fields and their relationships as they exist in the application.

See **[Views System Components](Introduction.htm#Mark6)** for information on the structural components within the Views System.

Data sources can use the element and key information in the **[Data Dictionary](../Data%20Dictionary/Introduction.md)**. Each data source is presented graphically using a tree view to illustrate hierarchical relationships among the related data sources. To make their function easier to identify, each element in the data source is assigned a descriptive name. From this representation, users can select elements to create their own view of the data that can then be saved and accessed for data extraction.

**_Design and Run-Time Interfaces_**

Data sources and views can be defined by using the following design interfaces:

**[Data Source Maintenance](Data%20Source%20Maintenance/Overview.md)** |  Design interface that includes options for defining or editing data sources, as well as creating views for end-user access.  
---|---  
**[Data Source Definition Wizard](Data%20Source%20Maintenance/Data%20Source%20Definition.md)** |  Wizard that presents a simple six-step process for defining data sources and relationships.  
**[View Maintenance](View%20Maintenance/Overview.md)** |  End-user interface that presents a set of data source definitions, which users can select to generate their own views.  
  
Once a view is defined, the data it represents can be extracted by using one of the following run-time interfaces:

**[View Object](Accessing%20View%20Data/Overview.htm#viewobject)** |  Properties/methods that are used to access output from a view definition.  
---|---  
**[PxPlus SQL ODBC Driver](Accessing%20View%20Data/Overview.htm#odbcdriver)** |  Recognizes views and allows them to be opened much like any other PxPlus file/table for access in any ODBC-compliant application.  
**[Report Writer](../Report%20Writer/Designing%20a%20Report/Defining%20the%20Data/Input%20Source.md)** |  Accepts a view as an input source when selecting the source of the data to display in the report.  
**[Query Subsystem](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.htm#fileinfo)** |  Accepts a view as an input source when selecting the query _File/Table_.  
**[*VIEW* View-based File](../file_handling/~view~.md)** |  Allows a view to be used to define the contents of a logical file for use by an application program. It allows the program to access the contents of a view as if it were a standard read-only file.  
  
**_Multilingual Capability_**

All text messages used in the Views System are derived from the _*msglib.xx_ message library so there is full multilingual capability. See **[Multilingual Capabilities](../NOMADS%20Graphical%20Application/Multilingual%20Capabilities/Introduction.md)**.

##  Views System Components

The Views System consists of five fundamental components: **[Data Sources](Introduction.htm#Mark1)**, **[Elements](Introduction.htm#Mark2)**, **[Relationships](Introduction.htm#Mark3)**, **[Views](Introduction.htm#Mark4)** and **[Groups](Introduction.htm#Mark5)**. All internal references to these components are maintained by internal key references that are invisible to the user. This means that the system designer can change the name of a data source or group without affecting internal references. These internal keys can also contain developer codes that can result in unique key sets for system designers and end users.

**_Data Sources_** |  Generally, a data source is a file or table but can also be a PxPlus object that adheres to a pre-defined interface standard. See **[Custom Data Source Objects](Custom%20Data%20Source%20Objects/Overview.md)**. Native PxPlus data files must contain embedded data dictionaries and can be identified by Logical Table Name or by physical path name. The Views System can also access external databases (e.g. ODBC, ADO, MySQL, Oracle and DB2). It maintains a list of data sources, defining associated files/object names. Each definition can include references to other data sources _(relationships)_ that may be accessed from its data. All data sources must have key definitions. **_Defining a New Data Source_** The **[Data Source Definition Wizard](Data%20Source%20Maintenance/Data%20Source%20Definition.md)** provides a simple six-step process for defining a new data source, which are used in creating new views and defining relationships with other data sources. _(The Data Source Definition Wizard was added in PxPlus 2021.)_ **_Editing an Existing Data Source_** Once a data source has been defined, it can be reviewed and updated as needed in **[Data Source Maintenance](Data%20Source%20Maintenance/Overview.md)**.  
---|---  
**_Elements_** |  Each data source contains a list of selected elements (or columns). Elements represent true data fields from the source file or data that is derived from it (e.g. computational results). Anything that can be defined as an expression within PxPlus can become an element. The definition of an element includes a user-friendly description (used in displays), an identifier name (used as a column name for export purposes), and a source expression (used to derive the value). Data elements are defined in Step 2 of the **[Data Source Definition Wizard](Data%20Source%20Maintenance/Data%20Source%20Definition.htm#step2)**.  
**_Relationships_** |  Each data source definition can contain a list of other data sources that may be accessed from its data. These relationships are basically defined by specifying a related data source, its sort key (or index) identifier, and an expression that, when evaluated, provides the range value for reading the key. The data key value must start with the value derived from the expression - this allows a one-to-one or a one-to-many relationship between each data source and its related data sources. The definition also specifies any "no data" logic to follow in case the related data is not found. Relationships are defined in Step 3 of the **[Data Source Definition Wizard](Data%20Source%20Maintenance/Data%20Source%20Definition.htm#step3)**.  
**_Views_** |  Each view is derived from a data source. The definition of a view includes selected elements from various linked data sources and defined calculated items, a sort key (or index) selection, and optional data filters. For security purposes, view definitions can be locked with a password to control modification. Views are defined using **[View Maintenance](View%20Maintenance/Overview.md)**.  
**_Groups_** |  A group is a way to organize and relate the data sources logically. Groupings should be based upon a user view of the data rather than on a physical or application view. Data sources and views may belong to one or more groups. For example, a _Customer_ data source could belong to the _Customer Info_ , _Billing Info_ and _Master Files_ groups. Groups are defined by clicking the _Groups_ button on the **Data Source Maintenance** tool bar. See **[Create Groups](Data%20Source%20Maintenance/Create%20Groups.md)**.
