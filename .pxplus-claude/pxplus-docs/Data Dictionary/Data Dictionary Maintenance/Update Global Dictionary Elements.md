# Data Dictionary Maintenance

**Update Global Dictionary Elements**|   
---|---  
  
The **Update Global Dictionary Elements** window is used to quickly update all or only selected occurrences of a **_global element_** in the data dictionary with any changes saved to the element definition in the **[Global Dictionary](Overview.htm#global)**.

A **_global element_** can be added to one or multiple data files in the data dictionary. When a global element definition is changed, the element is updated in the Global Dictionary but is not updated automatically in other data files where it exists. The update can be done using the **Update Global Dictionary Elements** window.

To apply this functionality, **_two_** conditions must be met:

|  The element being updated ** _must_** be a **[Global Dictionary](Overview.htm#global)** element. **_AND_**  
---|---  
|  Elements with the same _Name_ and _Type_ as the global element exist in other data files.  
  
To invoke this window in the **[Element Description](Element%20Description.md)** window, use one of the following methods:

|  Select a global element. Click the **[Update Global Dictionary Elements in other Files](Element%20Description.htm#Mark9)** button. If no elements with the same _Name_ and _Type_ as the global element exist in other data files, a message will display, and the **Update Global Dictionary Elements** window will not be invoked.  
---|---  
|  When saving changes to a global element: If elements with the same _Name_ and _Type_ exist in other data files, a message asks about applying the same change(s) to the other elements. Respond _Yes_ to invoke the **[Update Global Dictionary Elements](Update%20Global%20Dictionary%20Elements.md)** window.  
  
_(Update Global Dictionary Elements was added in PxPlus 2019.)_

> This window consists of the following:

_Global Element_ |  **_(Display Only)_** Name of the global element currently selected.  
---|---  
_(Global Element List Box)_ |  **_(Display Only)_** Displays information based on the current definition for the selected global element.  
**Elements in the Dictionary with the same Name and Type** |  Lists all occurrences of elements in other data files with the same _Name**and** Type_ (string or numeric) as the selected global element. Details of each definition are displayed for comparison with the global element details in the above list box to see at a glance whether the element found is a copy of the global element. Select the check box for any element that is to be updated with the current global element definition.  
_Select/Deselect all_ |  Selects/deselects all elements in the **Elements in the Dictionary with the same Name and Type** list box.  
_Apply_ |  **_(Available when one or more elements are selected in the Elements in the Dictionary with the same Name and Type list box)_** Applies the current global element definition to the element(s) selected in the **Elements in the Dictionary with the same Name and Type** list box. A message asks if you also want to rewrite the Data Dictionary on the physical file. Responding _Yes_ rewrites **_only_** the Data Dictionary on the physical file. Responding _No_ does not update the physical file.

#### **Note:**  
The definitions for the selected elements will be overwritten with the current information from the global element.

_(The message to rewrite the Data Dictionary on the physical file was added in PxPlus 2020.)_  
_Cancel_ |  Cancels any selections and closes the **Update Global Dictionary Elements** window.
