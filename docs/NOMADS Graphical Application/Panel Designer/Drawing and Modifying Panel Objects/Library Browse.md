# Drawing and Modifying Panel Objects

**Library Browse**|   
---|---  
  
**Library Browse** is used within NOMADS to copy the parameters of an existing object in a specified library to another object that is being created or modified. This is particularly useful when you want to maintain a consistent look and feel for controls on panels. It also saves time and development effort.

To invoke **Library Browse** , select the Browse Library button on the _Name_ property in the object's properties window.

> This window consists of the following:

_Object Name_ |  Displays the name of the current object.  
---|---  
_Library to Browse_ |  Indicates the library to use for browsing. Displays the full path for the current library. Click the Browse button to locate a different library.  
_Resulting Object Name_ |  **_(Available only when Match Name check box is not selected)_** Determines the _name_ that will be assigned to the current object. |  _Use Control Name - xxxxxx_ |  Uses the _Control Name_ of the object selected in the **Matching Objects** list box (_xxxxxx_ represents the _Control Name_ of the selected object).  
---|---  
_Use Object Name - xxxxxx_ |  Uses the name in the _Object Name_ field (_xxxxxx_ represents the current _Object Name_ , which is displayed only when the _Match Name_ check box is unchecked).  
_Match Name_ |  Determines the contents that will be loaded into the **Matching Objects** list box from the selected library. By default, this check box is selected. When selected, only the objects with _Control Name_ matching the _Object Name_ are displayed. _Control Names_ that do not match the _Object Name_ are not displayed. When this check box is not selected, objects with _any_  _Control Name_ are displayed. The _Control Name_ is not required to match the _Object Name_. Selecting/deselecting this check box reloads the list box.  
**Matching Objects** |  Displays a list of objects that are the same control type as the current object and reside in panels within the selected _Library to Browse_. Select an object in this list with the parameters that you want copied to the current object.  
_OK_ |  Copies the parameters from the selected object in the list box to the current object. This button is available only when an object in the list box is selected.

#### **Note:**  
**_When copying to a new object:_**  
  
If the _Object Name_ that you want to use for the **_new_  _object_** already exists for an object on the current panel, selecting _OK_ displays a _Duplicate control name_ error message. When this happens, modify the _Object Name_ to make it unique.  
  
_Cancel_ |  Closes the **Library Browse** window with no further action taken.
