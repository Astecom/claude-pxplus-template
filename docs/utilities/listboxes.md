# Utility Routines  
  
***PLUS/WINUTL/LISTPOPUP;SUBMENU** |  **_Invoke List Box Popup Sub-Menu_**  
---|---  
  
## Invocation

**CALL "*plus/winutl/listpopup;SubMenu",**_ctl_id_

**_Where:_**

_ctl_id_ |  Required |  Input |  This value contains the identifier of the List Box (or Grid) that you want use as the source for the popup options.  
---|---|---|---  
  
## Description

This routine will invoke the standard popup menu that is provided with PxPlus for List Boxes and/or Grids. The options provided by the utility are:

  * Copy all or portions of the List Box to the Clipboard.
  * Export the records to a text file suitable as input to a spreadsheet.
  * Find a string/pattern with the contents of the List Box/Grid.
  * Print the contents of a List Box.



#### **Note:**  
The value passed in the _ctl_id_ must refer to a List Box or Grid.

_(The *Plus/Winutl/ListPopup;SubMenu utility was added in PxPlus v10.00.)_
