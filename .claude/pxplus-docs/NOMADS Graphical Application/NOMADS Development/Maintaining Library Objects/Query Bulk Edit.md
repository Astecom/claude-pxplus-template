# Maintaining Library Objects   
  
**Query Bulk Edit Utility** |  **__**  
---|---  
  
The **Query Bulk Edit** utility allows header properties to be changed simultaneously for multiple query objects within the same library. See **[Query Header](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.md)** for information on defining a query object.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[NOMADS Session Manager](../Getting%20Started.htm#sessionmgr)** |  From the menu bar, select _Library > Query Bulk Edit_.  
From **[NOMADS Library Object Selection](../Library%20Object%20Selection/Overview.md)** |  From the menu bar, select _Utilities > Query Bulk Edit_.  
  
If invoked from **Library Object Selection** , the **Query Bulk Edit** utility opens with the current library selected. To specify a different library file, click the Query button or use the drop-down arrow.

> This window consists of the following:

_Library_ |  Enter the path to the library containing the query object(s) or click the Query button to find the library. Click the drop-down arrow for a list (up to nine) of previous selections.  
---|---  
_Retain Changes Between Libraries_ |  Retains the bulk edit changes after they have been applied (with the _Apply_ button). This makes it easier to apply the same changes to query objects in other libraries. By default, this check box is selected.

#### **Note:**  
When applying the same bulk edit changes to query objects in other libraries, ensure that the _Retain Changes Between Libraries_ check box is selected **_prior_** to switching library files.  
  
_(Query List)_ |  A tree view list of all the query objects belonging to the currently selected library. One or more queries can be selected for bulk edit via their associated check boxes. To select or deselect the _entire list_ , click on the library name check box at the top of the tree view.  
_Property_ |  Lists the query header properties available for bulk editing. This represents a subset of the options available in the **[Query Header](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.md)**. The properties are grouped into categories based on the **Query Header Definition** tabs: _Display, Options, Colours, Font, Other_. The properties are sorted alphabetically within each group by default. These categories can be expanded/collapsed by clicking the **+**_(plus)_ or **-**  _(minus)_ button adjacent to the category name.  
_Value_ |  Displays the current value assigned to a given property. The method for entering or displaying these values is dependent on the property type. By default, values are assigned the _As is_ option to indicate that the current/default setting for a given property will be maintained "as is" for the queries selected. The _Reset_ button can be used to reset all the property values to _As is_. Some of the _Display_ properties allow you to set new size and position values across all selected queries, but they also include _Increase_ and _Decrease_ options for adjusting each currently set value by a specified increment (decrement) amount. Drop box style cells are identified by a down arrow button, which indicates that pre-set selections are available; e.g. _Center Text Vertically, Gray/White Display, Grid lines_ , etc. Query style cells are identified by a three-dotted button. These cells are often associated with more than one field, and clicking the button invokes a separate dialog for entering/changing field values. The dialog that is invoked varies depending on the property. Double clicking inside the cell either invokes the same dialog as the dotted button or allows values to be entered directly into the cell. _(The ability to double click inside a Query style cell was added in PxPlus 2023.)_  
_Reset_ |  **_(Available when a property value in the Properties grid is changed for a selected query)_** Resets all the property values to _As is_.  
_OK_ |  **_(Available when a property value in the Properties grid is changed for a selected query)_** Processes the property changes for the selected query objects and subsequently closes the Query Bulk Edit utility.  
_Cancel_ |  Closes the Query Bulk Edit utility without applying any changes.  
_Apply_ |  **_(Available when a property value in the Properties grid is changed for a selected query)_** Processes the property changes for the selected query objects. The Query Bulk Edit utility remains open for additional changes (i.e. to query objects in other libraries).
