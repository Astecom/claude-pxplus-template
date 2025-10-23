# Views System

**Logic Procedures** |  **__**  
---|---  
  
The Views System allows you to specify logic to be performed at various levels in the definition and/or execution of a view. You can access and input the initialization, closing, and execution logic directly via the Logic Procedures panel in **[Data Source Maintenance](../Data%20Source%20Maintenance/Overview.md)** and **[View Maintenance](../View%20Maintenance/Overview.md)**. You can also supply a **[Logic Object](Overview.htm#logicobj)** to perform these procedures using the methods OnLoad( ), OnClose( ), and OnExecute( ).

Logic procedures can be invoked at three levels:

|  _Initialization Logic_ |  Can be used to set up environment variables, parameters, pathnames, functions, and other global information that may be needed by the Views System.  
  
For example, this might be useful for establishing a working environment for accessing views through the **[PxPlus SQL ODBC Driver](../../odbc/pxplus_odbc.md)**.  
---|---|---  
|  _Close Logic_ |  Opportunity to reset any environment settings that were established during the initialization level.  
|  _Execution Logic_ |  Allows for final adjustments of a definition after opening a view but before data retrieval. For example, this might be useful for suppressing certain columns based on user security levels.  
  
The following list outlines the order in which logic procedures are applied:

|  1. |  **_General Initialization_** |  When initially entering the Views System  
---|---|---|---  
|  2. |  **_General Execution_** |  Prior to retrieving/displaying data  
|  3. |  **_View Initialization_** |  When a view is opened via 'Open( ) method  
|  4. |  **_Data Source Initialization_** |  When a data source handler is established  
|  5. |  **_Data Source Close_** |  When a data source handler is dropped  
|  6. |  **_View Close_** |  When a view is closed via 'Close( ) method  
|  7. |  **_General Close_** |  Prior to exiting the Views System  
  
**_Logic Procedures Panel_**

General Logic procedures can be accessed from the **[Data Source Maintenance](../Data%20Source%20Maintenance/Overview.md)** main panel. Similar panels, but without reference to Execution Logic, can be accessed during the definition of data sources and views _._

##  Logic Object

Logic procedures can also be set using the methods SetInitLogic( ), SetExecutionLogic( ) and SetCloseLogic( ). If an _Object Name_ is specified under **Logic Object** , the object created by the user must supply the following methods:

|  **OnLoad(vctl)** |  Containing initialization logic. OnLoad( ) will be passed an argument with the **[ViewCtl](../Views%20Definition%20Object/ViewCtl.md)** object identifier.  
---|---|---  
|  **OnClose( )** |  Containing closing logic.  
  
If the object is supplying logic at the general level, it must also have:

|  **OnExecute( )** |  Contains logic to be invoked prior to executing a view.  
---|---|---  
  
The methods can be referenced when defining data source elements by using special object identifiers when invoking a method in the Expression column of the element grid. If a general view object is specified, its methods can be accessed using the object identifier **_view'**. Methods defined in the object for a specific view can be accessed using the object identifier **_v'** , and the object identifier **_ds'** can be used to access methods from the object specified for a data source.

#### **Note:**  
Column methods will always be executed at the data source level; therefore, you cannot combine field references from multiple data sources in their logic.
