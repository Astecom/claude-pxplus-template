# Defining the Data 

**Data Filters** |  **__**  
---|---  
  
To define selection criteria for a report, you can set up two different kinds of filters, _Static_ and _Dynamic_. **[Static Filters](Data%20Filters.htm#static)** are set filters that are automatically applied to the report whenever it is run. **[Dynamic Filters](Data%20Filters.htm#dynamic)** are filters that are defined by the end user at run time.

_(Support for defining Dynamic Filters was added in PxPlus 2022.)_

##  Static Filters

The **Define Static Filters** window is used to set up static selection criteria to filter the data for the report. Data is filtered based on filter sets. A filter set consists of one or more conditions, all of which must be true for the filter set to be true. For each filter set, select any conditions you wish to apply for each table element to be used in the filter.

In addition, a **[System Value](../Creating%20the%20Report%20Layout/Selecting%20Report%20Elements.htm#filter)** called _Static Filter_ can be placed on the report layout to display a description of the Static filters.

To invoke the **Define Static Filters** window, select _Filters_ > _Static Filters_ from the Report Designer _Data_ menu.

> This window consists of the following:

_Element_ |  List of table elements.  
---|---  
_Condition_ |  The drop down presents a list of the conditions that can be applied to data filters: _None  
Equal to <Value1>  
Not equal to <Value1>  
Less than <Value1>  
Greater than <Value1>  
Less than or equal to <Value1>  
Greater than or equal to <Value1>  
Between <Value1> and <Value2> inclusive  
Between <Value1> and <Value2> exclusive  
Any of <Value1>, <Value2>, <Value3>,  
None of <Value1>, <Value2>, <Value3>,  
Contains <Value1>  
Starts with <Value1>_  
_Case Sensitive_ |  Check box to indicate if the filter condition is case sensitive.  
_Value 1, Value 2,_ |  Enter any value(s) to be used in comparisons. Comparison values can be selected from a set of options consisting of formulas, parameters or other table elements, or fixed text/numeric values can also be entered. Use _double quotes_ (**""**) to indicate a null value.  
_Accept (Reject) data if all conditions in this set are met_ |  A filter set also includes an option to accept or reject a data record based on the outcome of its conditions. If a filter set is evaluated as _not true_ , then the next set is evaluated (and the next) until a set is evaluated as true, at which point the associated option determines whether the record is accepted or rejected. Up to eight filter sets may be defined. If no filter sets are found to be true, then the inverse of the last filter set option determines if the record is accepted or rejected. **_Example 1:_** |  |  Set 1 |  Accept |  CustNum |  Between 1000 and 1999 inclusive  
---|---|---|---|---  
|  Set 2 |  Accept |  CustNum |  Between 4000 and 4999 inclusive  
  
The above filter sets would be used to process records from 1000 to 1999 and 4000 to 4999.

**_Example 2:_**

|  Set 1 |  Accept |  Type$  
Amount |  Equal to "A"  
Greater than 1000  
---|---|---|---|---  
|  Set 2 |  Accept |  Type$  
Amount |  Equal to "B"  
Greater than 2000  
|  Set 3 |  Reject |  Type$  
Amount |  Equal to "C"  
Less than 5000  
  
The above filter sets will process all "A" records with Amount > 1000, all "B" records with Amount > 2000, reject all "C" records or records with Amount < 5000.  
  
**Filter Set** |  A group of buttons located in the bottom left corner of the panel: |  _Add/Remove Filter Set_ |  The Add or Remove buttons are used to add a new or remove the current filter set.  
---|---  
_Move Up/Move Down_ |  New filter sets will be added at the end. The _Move Up_ and _Move Down_ buttons are used to arrange the order in which the filter sets will be evaluated.  
_Arrow Buttons_ |  Four arrow buttons that are used to navigate through the filter set definitions.  
_Ok_ |  Saves the Static filters and closes the **Define Static Filters** window.  
_Cancel_ |  Cancels any changes and closes the **Define Static Filters** window.  
  
When a report is generated, if a report has one filter set with an _Accept_ option, the filters are analyzed to determine if minimum/maximum values can be applied to the sort sequence of reports using predefined sorts. These can be used to optimize the data retrieval process. In the case of custom sort sequences, an attempt is made to map the sort to an existing internal key so the same optimization may be used.

##  Dynamic Filters

The **Define Dynamic Filters** window is used to set up dynamic selection criteria to filter the report. To set up dynamic filters, first select the _Use Dynamic Filters_ check box and then select which report items are to be made available to the end user to set up filter conditions at run time.

In addition, a **[System Value](../Creating%20the%20Report%20Layout/Selecting%20Report%20Elements.htm#filter)** called _Dynamic Filter_ can be placed on the report layout to display a description of the Dynamic filters.

To invoke the **Define Dynamic Filters** window, select _Filters_ > _Dynamic Filters_ from the Report Designer _Data_ menu.

> This window consists of the following:

_Use Dynamic Filters_ |  Select this check box to invoke the end-user **[Define Filters](Data%20Filters.htm#definefltr)** window at run time. If parameters have been defined for the report, the run-time **Define Filters** window is accessed by clicking the _Advanced Filters_ hyperlink button on the generic interactive parameter interface.

#### **Note:**  
The run-time **Define Filters** window will not be presented if the report is running in the background.  
  
---|---  
_Select items to include in the Dynamic Filters_ |  Displays a tree view that lists all the data fields (file fields and calculated fields). Select the check box beside the fields that are to be made available to the end user at run time to set up filter conditions.

#### **Note:**  
It is recommended that you do not include fields that have been used in Static filters, as the end user may set up conditions that may be overridden by the Static filters, producing confusing results.  
  
_Ok_ |  Saves the selections and closes the **Define Dynamic Filters** window.  
_Cancel_ |  Cancels any changes and closes the **Define Dynamic Filters** window.  
  
##  Define Filters (Run Time)

If the _Use Dynamic Filters_ check box has been selected for a report, at run time, the end-user **Define Filters** window will be presented (unless the report is running in the background):

> If **[Parameters](Parameters.md)** have been defined for the report, the _Advanced Filters_ hyperlink button on the generic interactive parameter interface is used to invoke the end-user **Define Filters** window:

> The **Define Filters** window consists of the following:

_Include/Exclude/And_ |  Filters can be set to include or exclude records based on conditions. The drop down presents a list of available functions: _Include if_ , _Exclude if_ , and _And_. A condition can be simple, or it can be compound using multiple _Include if_ , _Exclude if_ , or _And_ functions in combination. **_Examples:_** An _Include if_... or _Exclude if_... function followed immediately by one or more _And_ functions means that all conditions must be true for the _Include if_ or _Exclude if_ function to be implemented: Include if... CST_BALANCE Is greater than 0  
And CST_DUE_DATE$ Is less than or equal to DAY The record would only be included if (CST_BALANCE>0) AND (CST_DUE_DATE$<DAY). Using multiple _Include if_... functions in succession will result in records being included if any of the _Include if_ functions are found to be true: Include if... CST_BALANCE Is greater than 0  
And CST_DUE_DATE Is less than or equal to DAY  
Include if... CST_BALANCE Is greater than CREDITLIMIT The record would be included if either is true: ((CST_BALANCE>0) AND (CST_DUE_DATE$<DAY)) OR ((CST_BALANCE>CREDITLIMIT)) The same is true excluding records with successive _Exclude if_... functions. If there is a combination of _Include if_... and _Exclude if_... functions, then the record would only be included if the _Include if_... function was true and the _Exclude if_... function was false.  
---|---  
_Fields to test_ |  The drop down presents a list of available fields to test, which may be data file fields or calculated fields. The fields in this list were selected in the **[Define Dynamic Filters](Data%20Filters.htm#dynamic)** window when designing the report.  
_Condition_ |  The drop down presents a list of conditions that can be applied to Dynamic filters: _Is Equal To  
Is Not Equal To  
Is Less Than  
Is Greater Than  
Is Less Than Or Equal To  
Is Greater Than Or Equal To  
Is Any Of: ?|?|?|  
Contains  
Starts With_ _(The "Is Any of: ?|?|?|" condition was added in PxPlus 2023.)_  
_Case Sensitive_ |  Check box to indicate if the value is case sensitive.  
_Value to compare_ |  Values are literal values (without quotation marks), and null values are left blank. By default, text values are not case sensitive unless the _Case Sensitive_ check box is selected. All conditions support a single value to compare, except for the _Is Any of: ?|?|?|_ condition which can have several assigned values separated by the **|**  _(pipe)_ character. Some fields may have associated queries. In this case, the _Value to compare_ may be selected by clicking the lookup button to invoke a **Select Items** window to select single or multiple values: This window consists of the following: |  _Find text_ |  Allows the user to search for occurrences of a specified text value. An option to specify whether the search should be case sensitive is also provided.  
---|---  
_Selected Records_ |  Browse buttons that allow the user to locate all items that have been selected.  
_Select_ |  Toggles the check boxes of the highlighted items On/Off, based on their current settings.  
_Clear_ |  Clears the currently selected items.  
_OK_ |  Exits the **Select Items** window and passes the checked items back to the _Value to compare_.  
_Cancel_ |  Exits the **Select Items** window and returns to the main **Define Filters** window.  
  
_(The Select Items window for selecting records was added in PxPlus 2023.)_  
  
_Delete_ |  Button located beside the grid that is used to remove the selected filter condition.  
_Apply Filters_ |  **_(Available when a Filter condition is defined)_** Generates the report with the filter condition(s) applied.  
_Skip Filters_ |  Generates the report without the filter condition(s) applied.  
  
When Dynamic filters are defined, they are temporarily added to the report definition prior to generating the report, and when the report is completed, they are removed.
