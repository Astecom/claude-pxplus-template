# Query Subsystem  
  
**Query Security**|   
---|---  
  
By default, no security is assigned to a query. This means that all users can view all data that can be displayed via a **[Query Definition](Query%20Definition.md)**. Security can be added to the Query Definition through the NOMADS **[Security Manager](../../System%20Maintenance%20Tools/Security%20Manager/Overview.md)** by using security classifications to identify and control user access.

Three levels of security can be set up for a query:

The _top level_ of security determines whether the query can be displayed at all.

> The initial setting at this level is dependent on the _Security_ setting on the main file in **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** (on the _Utilities_ menu). If file security is set and the file is selected when initially creating a new query, the file security setting may be applied to the query. This setting can be changed on an individual query by selecting the _Security_ button on the **[Query Definition](Query%20Definition.md)** toolbar.  
>   
>  If security is set at this level and fails at run time, then the query will not be invoked. In the case of a query associated with a Multi-Line control (see **[Multi-Line Properties](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.htm#query)**), no query button will be drawn.

The _second level_ of security is at the link file level.

> The initial setting at this level is dependent on the _Security_ setting on the file in **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** (on the _Utilities_ menu). If file security is set and the file is selected when initially creating a new query file link, the file security setting automatically displays in the _Security_ column of the **[Query File Link](Query%20Definition.htm#queryfilelink)** grid. This setting can be changed by selecting the dotted button in the _Security_ column.  
>   
>  If security is set at this level and fails at run time, then the fields from this file, which were included as columns in the Query Definition, will not display in the query results.

The _third level_ of security is at the column level (i.e. file elements and formulas).

> The initial setting for a file element is dependent on the _Security_ setting on the element in **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Element%20Description.md)**. The initial setting for formulas and file elements from files with no Data Dictionary setting is no security. Security can be set on an individual column in the Query Definition by selecting the _Security_ button either in **[Column Options](Query%20Definition.htm#columnoptions)** or in **[Query Formula Definition](Query%20Definition.htm#queryformula)**.  
>   
>  If security is set at this level and fails at run time, then the values of fields that did not pass security will not be used in formulas.

The Security Manager includes _Full Access_ and _View Only_ settings. In most cases, there is no difference between these settings as they apply to a query, as the common function of the query is to display records from a dataset and return a value associated with a selected record. However, there is one instance where these two settings do make a difference: when the query (or query list) is used to populate a Smart Grid. In that case, any files or columns set as _View Only_ will result in the affected cells being locked.

Besides providing **[Query+](Overview.htm#queryplus)** and **[Classic Query](Overview.htm#classicquery)** displays, the Query Subsystem can be used to supply data for **[AutoCharts](../../../NOMADS%20AutoChart/Introduction.md)**, **[Smart Controls](../../Smart%20Controls/Overview.md)** and the **[*QUERY*](../../../file_handling/~query~.md)** file interface. Any security applied to the Query Definition will affect the datasets supplied to these interfaces. If the top-level security set on a query (or query list) definition fails, then the Smart Controls will still be formatted, and files that are opened using *QUERY* will open successfully and have a valid IOList; however, the dataset that is returned will be null.

#### **Note:**  
Although not specifically security related, a file element designated as **[Read Only](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Element%20Description.htm#Mark17)** in the Data Dictionary element definition will be treated as View Only (i.e. locked) when displayed as a column in a Smart Grid.  
  
_(The element definition Read Only option was added in PxPlus 2021.)_

## See Also

**[Defining a Query](Defining%20a%20Query.md)**  
**[Creating a Query List Definition](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark1)**  
**[Creating a Smart Control (or Smart Chart) Definition](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark2)**
