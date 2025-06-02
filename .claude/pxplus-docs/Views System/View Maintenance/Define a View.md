# View Maintenance 

**Define a View** |  **__**  
---|---  
  
The **Define a View** window is used for creating customized views from a selected data source. Once a descriptive _View Name_ is entered, the sort criteria (access key) and elements (fields) to include in the view can be selected.

> This window also provides the ability to:

  * Define calculated items.
  * Assign views to logical groups.
  * Set up record selection criteria.
  * Include logic procedures.
  * Add password protection.
  * Preview a sample of the data that will be returned by the current view.



_(The ability to define calculated items was added in PxPlus 2021.)_

To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From **[Data Source Maintenance](../Data%20Source%20Maintenance/Overview.md)** |  Select the data source to be used and click the _Create View_ tool bar button. Another method is to right click on the data source and select _Create a View from this Data Source_ from the popup menu.  
From **[View Maintenance](Overview.md)** |  Double click to expand the group containing the data source to be used. Then do either of the following: Right click on the data source and select _Create a View from this Data Source_ from the popup menu. **_OR_** Double click on the data source, and when prompted, respond _Yes_ to create a new view from this data source. Another method is to right click on an existing view and select _Add a New View_ from the popup menu. When prompted, select the data source from which to create the view.  
  
This window consists of the following:

_(Elements List)_ |  Displays a tree view list of the elements in the selected data source and its relationships, if applicable. This list is used to select the elements to include for the view definition. Select (or deselect) individual elements by double clicking the check box beside an element. **_To select all elements_** in a particular data source or relationship, right click on the data source or relationship name in the list and choose _Select All elements in xxxxxxx_ from the popup menu (**_where_** _xxxxxxx_ is the data source or relationship name). **_To enter a new name for the column_** , select the check box beside the element and then right click on the element and select _Change column name_ from the popup menu. When prompted, enter a new name for the column. Maximum 60 characters.  
---|---  
_Save_ |  Button used to save a new view definition or save any changes to an existing view.  
_View Data_ |  Button used to display a sample of the data that will be returned by the current view. Any changes to the view definition must be applied using the _Save_ button before viewing the data.  
_Calc_ _Items_ |  Button used to invoke the **[Define Calculated Items](Define%20Calculated%20Items.md)** window for defining expressions that can combine fields from different data sources. Any calculated items that are created can then be selected to display in the view. _(The Calc Items button was added in PxPlus 2021.)_  
_Filters_ |  Button used to invoke the **[Define Filters](Define%20Filters.md)** window for assigning a filter for any element that has been included in the view definition. Also available as a selection on the popup menu when right clicking on an element.  
_Groups_ |  Button used to invoke the **Assign View:_xxxxxxx_ to Groups** window (**_where_** _xxxxxxx_ is the view name) for assigning the current view to, or removing the current view from, existing groups.  
_Logic_ |  Button used to invoke the **[Logic Procedures](../Logic%20Procedures/Overview.md)** window for specifying the logic procedures to be performed at various levels in the definition and/or execution of a view.  
_Lock_ |  Button used to invoke the **Password Change** window for locking the view with an _optional_ password to control modification.  
_Security_ |  Button used to invoke the **[Object Security Definition](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.md)** window for restricting or allowing user access to the view. For information on setting up security, see **[Security Manager](../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)**.  
_Alphabetic Sort_ |  Check box used to indicate how the elements within the data source tree view are to be displayed. By default, elements are displayed in the order in which they are defined in the data source definition. Selecting the _Alphabetic Sort_ option displays elements alphabetically by description within the data source and each relationship. The order of the elements in the tree view is carried through to the order of the elements within the view definition, except for calculated items, which are always processed in their defined order regardless of how they are displayed in the tree view.  
_Rename_ |  Invokes the **Change Column Name** window for entering a new name for the selected element/column (indicated by a check mark). Also available as a selection on the popup menu when right clicking on a selected element/column.  
_View Name_ |  Assigns a unique descriptive name to identify the view. Maximum 64 characters.  
_Sort by_ |  Indicates which key is to be used to access the view in a particular sorted order.  
_Comments_ |  Description or comments related to the selected view, up to 255 characters in length. If a new view is defined, the comments from the associated data source will be loaded into the multi-line as the default comment.  
_Last Update_ |  Indicates when the selected view was last updated and by whom.  
  
#### **Note:**  
Once a linked item is selected to be part of a view, changing the prefix for the relationship in the data source definition will not affect the name of the item.  
  
To change the name of the linked item, you must deselect it from the view (which changes the name to the new _prefix_ \+ _item name_), then select it again, or use the _Change column name_ popup menu option and enter a new name.

In addition, if a selected element has a column name that exceeds 60 characters (due to nested prefixes), the column name would have to be changed.
