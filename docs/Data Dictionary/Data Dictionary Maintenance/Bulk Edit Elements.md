# Data Dictionary Maintenance

**Bulk Edit Data Elements**|   
---|---  
  
The **Bulk Edit Data Elements** utility allows bulk changes to be made to data elements in the PxPlus data dictionary and applied simultaneously to multiple selected tables. This utility provides a way to quickly update data elements values, which are common or similar in multiple tables, or easily correct any inconsistencies in the data dictionary.

The utility loads the **Element Definitions** grid based on the tables selected in the **Select Tables** tree view. The grid columns are based only on certain fields in the data element definition, not all the fields. The utility uses the data elements values in the grid columns to determine how to display the data elements and tables. It does not check all the fields in the data dictionary record.

A data element with the same values across multiple (*All*) tables will be listed once in the grid. If an element value in the grid columns is slightly different in two (or more) tables, the data element will be listed with the same name more than once. An example of this is shown in the screen shot below where _ContactName_ is listed twice because of the different _Description_ in the two tables.

A log showing the applied data element changes is also available.

_(The Bulk Edit Data Elements utility was added in PxPlus 2023.)_

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[Data Dictionary Maintenance](Overview.md)** |  Click the _Bulk Edit_ tool bar button.  
From **[Data Dictionary Maintenance](Overview.md)** |  Enter or select the name of an existing data dictionary table. From the menu bar, select _Edit_ > _Bulk Edit Elements_.  
  
The **Bulk Edit Data Elements** window is displayed below with a sample entry:

> This window consists of the following:

**Select Tables** |  Tree view list of tables in the data dictionary, sorted by group, in alphabetical order. To select/deselect all the tables, click the _All tables_ check box at the top of the tree view. To select/deselect a single table, click the check box beside the table name. To select/deselect all the tables within a group, click the check box beside the group name. Tables that are not assigned to a group are listed under "No group assigned" at the top of the tree view.  
---|---  
**Element Definitions** |  Grid that lists all the data elements in alphabetical order for all the tables selected in the **Select Tables** tree view. Once tables are selected, the **[Load Table Elements](Bulk%20Edit%20Elements.htm#load_elements)** button is used to load the grid. When a value in a cell changes, the cell shows a blue background. To put back the previous value, right click on the cell and select _Reset Value_. The value can only be reset if the change has not been applied. This grid consists of the following: |  _Element_ |  **_(Display Only)_** Name of the data element.  
---|---  
_Type_ |  **_(Display Only)_** Type of data element (**_N_** _umeric_ or **_S_** _tring_).  
_Size_ |  **_(Display Only)_** Maximum length of the data element.  
_Class_ |  Name of the **[Data Class](Overview.htm#data_class)** currently assigned to the data element, if applicable. A predefined data class can be entered or selected using the Query button. Only data classes defined with correct values for _Type_ and _Size_ based on the data element are allowed. When a data class is entered, a message will display about updating the element. Responding _Yes_ will automatically apply the changes to the selected table(s). A data class can also be created on the fly, using the element's _Type_ and _Size_ values. Enter a new _Class_ name and respond _Yes_ to the displayed message, which launches **[Data Class Definitions](../Data%20Classes/Overview.htm#Mark1)** maintenance. When the new data class is added, a message will display about updating the element. Responding _Yes_ will automatically update the element. Responding _No_ or _Cancel_ will not update the element.  
_Description_ |  Current description assigned to the data element.  
_Format_ |  Current **[Format](Overview.htm#format)** assigned to the data element.  
_U/C_ |  Check box that indicates the current uppercase property for the data element.  
_Update Tables_ |  If a single table is being updated, the table name will be shown (e.g. ClientMaster). If multiple tables are being updated with the same data elements values, the word ***All*** will be shown. Click the drop down arrow to see all the tables that will be updated.  
_Dtl_ __|  Button that invokes the **Element Description** window (similar to the **[Element Description](Element%20Description.md)** window in **Data Dictionary Maintenance**). Data element details are displayed based on the _Update Tables_ cell. If this cell shows the word *All*, the element details from the first table in the drop down list will display. Clicking this button automatically applies any pending changes in the grid row (cells will have a blue background). The changes are applied either to a single table or to multiple (*All*) tables, based on the _Update Tables_ cell. **_Example:_** This example shows a change to the _Description_ value for the _City_ element. Clicking the _Dtl_ button invokes the **Element Description** window for the _ClientContacts_ table with this change automatically applied to all tables containing this element: When the _Update Tables_ field shows the word *All*, hovering over this field displays a list of all the files that were updated or will be updated if changes are made.  
_Collapse/Expand_ |  Toggle button used to collapse/expand the list of tables in the **Select Tables** tree view.  
_Load Table Elements_ |  Button that loads the grid with data elements based on the tables selected in the **Select Tables** tree view. If the grid is already loaded and has pending changes (cells will have a blue background), a message will display about applying the changes.  
_Update Physical Files_ |  Button that invokes the **[Update Physical Files](Update%20Physical%20Files.md)** utility. If there are data element changes that have not been applied, a message will display.  
_View Log_ |  **_(Available when data element changes are applied)_** Button that displays a log of the changes applied. The log can also be printed and saved, if desired. The log accumulates the changes until you exit the utility.  
_Apply_ |  **_(Available when changes are entered in the Element Definitions grid)_** Button that is used to update tables with the changes made to the element values in the grid columns. If the _Update Tables_ column for an element shows the word *All*, changes will be applied to all tables in the drop down list.  
_Exit_ |  Button that closes the **Bulk Edit Data Elements** utility. If there are data element changes that have not been applied, a message will display.
