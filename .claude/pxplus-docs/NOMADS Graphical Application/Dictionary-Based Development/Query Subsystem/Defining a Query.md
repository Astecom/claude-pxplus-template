# Query Subsystem 

**Defining a Query** |  **__**  
---|---  
  
When defining a query, three basic steps are involved:

|  1. |  **_Define query characteristics._**  
  
The **[Query Header](Query%20Header.md)** window is used to define basic file information, display options, font and color selections, and user aids.  
---|---|---  
|  2. |  **_Define query contents._**  
  
The **[Query Definition](Query%20Definition.md)** window is used to define the contents of the query by setting up cross-reference files and by defining columns and formulas.  
|  3. |  **_Define criteria for selecting records._**  
  
The **[Query Selection Definition](Query%20Selection%20Criteria.md)** window defines filters for selecting the records to be displayed in the query.  
  
Access the **Query Definition** window via **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)**. Click the _Query_ button and enter a query name in the _Name_ field (or vice versa depending on the selected **[View](../../NOMADS%20Development/Library%20Object%20Selection/Menu%20Options.htm#views)**) to create a new query.

You can also select the **[Query Definition](../../NOMADS%20Development/Query%20Def_ide.md)** task on the IDE Main Launcher.

_(The Query Definition task on the IDE was added in PxPlus 2023 Update 1.)_

##  Query Type

When defining a **_new_** query, a prompt displays to select a _Query Type_ , either ** _Standard Query_** or **_Query List_**.

> This section provides information on defining a **_Standard Query_** :

  * Creating a **_new_** Standard query brings up the **[Query Header](Query%20Header.md)** window.
  * Modifying an **_existing_** Standard query proceeds directly to the **_[Query Definition](Query%20Definition.md)_** window.



The **_Query List_** is intended for use by **Smart** controls to auto-load a list of records from a data file or database table into a control:

  * Creating a **_new_** Query List brings up the **[Query Definition - File Information](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark1)** window for defining the Query List header information.
  * Modifying an **_existing_** Query List proceeds directly to the **[Query List Definition](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark4)** window for defining the Query List contents.



See **[Smart Controls](../../Smart%20Controls/Overview.md)** for information on using, defining and formatting Smart controls.
