# Control Object Properties

**LoadPoint** |  **_Insertion Point for List/Drop Box Loads_**  
---|---  
  
## Description

Insertion point for list/drop box loads

This property controls where the data loaded to a list_box, drop_box, varlist_box or vardrop_box will be inserted. When a list/drop box **LOAD** directive is issued with no index _,_ the current contents of the control will first be cleared and the new data will replace it. Setting the 'LoadPoint property to a non-zero value alters this behavior.

If 'LoadPoint is set to -1, the data included with the list/drop box **LOAD** directive will be appended to the list box contents.

If 'LoadPoint is set to -2, the data included with the list/drop box **LOAD** directive will replace the current contents of the list starting at the item number set in the **['Item](item.md)** property, which will be updated to the next item number once the load is complete (new items will be added, if required).

If 'LoadPoint is set to a value > 0, the data will be inserted into the list at the point specified and the value in 'LoadPoint will be reset.

#### **Note:**  
A positive value in the 'LoadPoint property is reset to 0 _(zero)_ when a list/drop box **LOAD** directive is executed. A value of -1, which indicates 'append', is not reset by the **LOAD** directive.

This functionality allows drop boxes to be loaded a block of records at a time.

_(The LoadPoint property was added in PxPlus v8.11.)  
(The LoadPoint setting of -2 was added in PxPlus 2019.)_

## Used By 

**DROP_BOX****LIST_BOX****LIST_VIEW****REPORT_VIEW****VARDROP_BOX****VARLIST_BOX**
