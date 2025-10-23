# NOMADS Graphical Application

**Query Subsystem**|   
---|---  
  
The **NOMADS Query Subsystem** generates panels that display records from datasets and return a value associated with a record selected by the user. The selected value populates the control with which it is associated.

When defining a query, the element and key information can come from the **[Data Dictionary](../../../Data%20Dictionary/Introduction.md)**. The query is usually invoked via a _query_ button, which can be associated with certain **[Panel Controls](../../Creating%20Panel%20Controls/Introduction.md)** and appears next to **_single line_** Multi-Line controls at run time. A query can also be invoked by pressing **Shift + F2** or through program control.

The **Query Subsystem** has _three_ modes of display: **[Query+](Overview.htm#queryplus)**, **[Drop Queries](Overview.htm#dropquery)** and **[Classic Query](Overview.htm#classicquery)** (original). The **Query+** mode is the _default_ mode. An example of each display is pictured below.

In general, a query presents a panel with a list containing data from one or more linked files that can be filtered based on specified selection criteria. A toolbar and popup menu are available with options to do the following: copy or export columns, records or all the data, add dynamic filters to the data shown, designate certain records as favorites, hide and show selected columns, edit the data, or print the data. You can also match a value to the beginning of a selected column or key to place your focus in the data list, or you can search all the data for a specified value.

A query definition can also be used as the **[Input Source](../../../Report%20Writer/Designing%20a%20Report/Defining%20the%20Data/Input%20Source.md)** in Report Writer when determining the source of the data to display on a report.

_(The ability to use a query definition as a source for Report Writer reports was added in PxPlus 2020.)_

By default, a query has no security assigned to it. This means that all users can view all data that can be displayed by means of a Query Definition. Security can be added to the Query Definition through the NOMADS Security Manager by using security classifications to identify and control user access. For information on how to set up security for a query, see **[Query Security](Query%20Security.md)**.

##  Query+

The **Query+** display, which is the _default_ mode, sorts by column. Advanced column sorting ignores case and accents, supports sort algorithms and can handle complex date sorting. Query+ includes the ability to resize and reorder the columns and to create new formulas at run time.

Query+ supports visual cues, such as bold and colored text, background highlight colors and images. It also supports the **[AutoChart](../../../NOMADS%20AutoChart/Introduction.md)** feature, which generates charts based on the query data. Query+ makes use of load-on-demand and background loading techniques to enhance performance.

The **[Query Profile](Run-time%20Query.htm#qryprofiles)** feature makes it convenient for end users to save run-time query settings, such as column order/width, filters and additional formulas, etc., so that the settings can be reloaded at a later time by selecting a named profile.

Three views are available that feature a toolbar **_(Default)_** , a menu, or both.

_(The ability to save Query Profile settings was added in PxPlus 2019.)_

|    
**_Query+_**  
---|---  
  
##  Drop Queries

**Drop Queries** are displayed directly on the current panel adjacent to their associated Multi-Line rather than on a separate panel like the other query types. These queries have no toolbar or _Select_ button; however, many features of the Query+ are available via the right-click popup menu.

#### **Note:**  
Drop Queries are designed to display small datasets, as would be displayed in a drop box. These queries are **_not_** recommended for large datasets as the entire dataset is loaded when the query is invoked.

Two types of Drop Queries are available, **_Drop Query_** and **_Drop Tree_** :

_Drop Query_ |  Displays data in a Report View list box and emulates an enhanced Drop Box. The Drop Query does not support the **[AutoChart](../../../NOMADS%20AutoChart/Introduction.md)** feature in its right-click popup menu. _(Drop Query functionality was added in PxPlus 2014 - Feature Pack 1.)_  
---|---  
_Drop Tree_ __|  Displays data using a Tree View display, which is useful when records can be grouped (e.g. like detail lines in an invoice). The Drop Tree supports only the _Find_ , _Refresh_ , _Print_ , _Filters_ and _Profile_ features in its right-click popup menu. The Drop Tree does not support display options such as colors, images, percent bars, etc. _(Drop Tree Query functionality was added in PxPlus 2021.)_  
  
#### **Note:**  
Drop Queries are only displayed as such if they are associated with a Multi-Line in the Multi-Line definition and invoked at run time via the query button. See **[Assigning a Query](Invoking%20a%20Query.htm#assigningquery)**.  
  
If a Drop Query is invoked programmatically with a **[PROCESS](../../../directives/process.md)** command, it will be displayed using the default Query+ format, as there is no associated control.

##  Classic Query

The **Classic Query** sorts by key value but has an option to switch to column sorting. The _Sort by Column_ option supports column sort algorithms. The Classic Query also supports column sub-queries.

**  
_Classic Query_**  
---  
  
## Additional Query Information

Query datasets can be based on an existing **[Data Dictionary](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)** definition, a **[PxPlus View](../../../Views%20System/Introduction.md)**, an ODBC data source, or a manually defined file with no embedded dictionary. Query panels are built using element and key information from the Data Dictionary, View definition or ODBC data source. Column names, headings, widths, formats and associated sub-queries are derived from this information. If no data dictionary is available for the file being queried, then you must provide the element information.

**_Query Subsystem Help_**

The **Query Subsystem** Help provides detailed information on the following topics:

**Topic** |  **Description**  
---|---  
**[Defining a Query](Defining%20a%20Query.md):** |  Explains the components for defining a query.  
**[Query Header](Query%20Header.md)** |  Defines the main file or table for the dataset and the general characteristics of the query.  
**[Query Definition](Query%20Definition.md)** |  Defines the contents of the query. This includes cross-reference files, columns and formulas.  
**[Defining Query Column and Row Display](Query%20Column%20and%20Row%20Display.md)** |  Explains how to assign visual attributes, such as bold text, text color or highlight color, to a query column or a row in the query data list based on specified conditions being met.  
**[Query Security](Query%20Security.md)** |  Explains how security can be set up for a query.  
**[Query Colors](Query%20Colors.md)** |  Explains how to customize the look of a query display using color settings and Themes.  
**[Query Selection Criteria](Query%20Selection%20Criteria.md)** |  Defines selection criteria to filter the data.  
**[Invoking a Query](Invoking%20a%20Query.md)** |  Describes the various ways to invoke a query, as well as how to switch modes to Query+ or the Classic Query.  
**[Run-Time Query](Run-time%20Query.md)** |  Describes the options available to the user at run time.  
**[Service Queries for Web, Email, Map and Open File](Service%20Queries%20for%20Web,%20Email%20and%20Map.md)** |  Explains the three service programs that are launched via the query interface: |  _Web Query_ |  Launches a website.  
---|---  
_Email Query_ |  Launches an email window.  
_Map Query_ |  Launches a Google map.  
_Open File_ |  Launches a standardized file selection dialog.  
  
_(The Open File Query was added in PxPlus 2020.)_  
  
**[Designing and Using the Query Subsystem](Designing%20and%20Using%20the%20Query%20Subsystem.md)** |  Describes design and interface considerations.  
**Suppressing Query Persistence** |  By default, when NOMADS **[Panel Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md)** is turned **_On_** , it affects all dialogue panels and queries. Panel persistence can be suppressed (for Query+ and Classic Query) on a **_system-wide_** basis by setting the **[%NOMADS'Query_Suppress_Persistence](../../Appendix/NOMADS%20Variables/Overview.htm#querysuppresspersistence)** property. The settings for this property are: |  **0** |  _Do not suppress persistence_(if set)_**(Default)**_  
---|---  
**1** |  _Suppress persistence_(the location/size of the query will be the original location/size)  
**2** |  _Suppress location persistence_(the location will be the original location, but size will persist if changed)  
  
_(Support for suppressing panel and query persistence was added in PxPlus 2019.)_
