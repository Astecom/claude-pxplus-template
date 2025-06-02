# View Maintenance

**Define Calculated Items**|   
---|---  
  
Calculated items are view elements that are derived by creating expressions that combine view elements that have been selected from different files and other calculated items. A name is associated with the calculated item, and the value of the expression is evaluated and stored in the named variable after each data record is retrieved. When evaluating items, the sequence of the calculated items is also important.

_(The ability to define calculated items was added in PxPlus 2021.)_

To create calculated items for a view, invoke the **Define Calculated Items** window by clicking the _Calc_ _Items_ toolbar button on the **[Define a View](Define%20a%20View.md)** window.

> #### **Important Note****:**  
The order in which calculated items appear in the defined items list is significant, as it reflects the order in which fields are evaluated. This is important when a calculated field contains a reference to another calculated field because the referenced field would have to be evaluated first. Use the _Move Up/Move Down_ buttons beside the list to change the list sequence.  
  
This is also the order in which selected calculated items will appear at the end of the view's embedded IOList.

A calculated item definition consists of the following:

_Name_ |  Name of the data variable in which to store the result when the expression is evaluated. The variable will be prefixed by "**calc_** " and **_must_** contain only alphanumeric characters, underscore or period. Maximum 30 characters.  
---|---  
_Description_ |  **_(Optional)_** Short description of the calculated item.  
_Type_ |  Text or numeric (computational) value.  
_Maximum Length_ |  Maximum length of the value to be stored. If numeric, the length may contain a scaling factor (e.g. 10.2 where total length is 10 with two digits to the right of the decimal).  
_(Transfer)_ |  Button used to transfer to the **Expression** input box (below the main list) to enter an expression for the calculated item.  
_Select_ |  Click to select/deselect the calculated item as a view element.  
_Remove_ |  Button used to remove the currently selected calculated item from the list.  
_Move Up  
Move Down_ |  Buttons used to move the selected calculated item up or down within the list.  
**Expression** |  Input box used for manually entering an expression for the calculated item.  
_Click to build an expression_ |  **_If Type is Numeric:_** Select this link to invoke the **Define a Numeric Expression** window for building a numeric expression. **_If Type is Text:_** Select this link to invoke the **Define a Text Expression** window for building a text expression.  
_Items available to use in expression_ |  Displays a list of the selected view elements that can be used in the expression. Add individual items to the **Expression** input box by double clicking an item or using drag and drop. The Clipboard button beside the list can also be used.  
_(Clipboard)_ |  Button used to place a highlighted item in the _Items available to use in expression_ list onto the Clipboard so that it can then be copied to the **Expression** input box.  
  
Once calculated items are defined and selected, they appear in the element lists in the **Define a Numeric (Text) Expression** windows (when the **[Click to build an expression](Define%20Calculated%20Items.htm#Mark2)** link is selected) and in the **[Define Filters](Define%20Filters.md)** window. Whether they are selected or not, they also display under the ***Calculated Items** section of the tree view list in the **[Define a View](Define%20a%20View.md)** window where they can be selected/deselected as view elements.

If an element on which a calculated item is based is deselected from the view definition, the data for that element will not be available to the calculated item, rendering its results invalid.

If an error occurs while evaluating a calculated item during execution, default values (0 for numeric and null for string) are assigned to the item.

## See Also

**[Define a View](Define%20a%20View.md)**  
**[Define Filters](Define%20Filters.md)**
