# Control Object Properties

**FindItemText $** |  **_Search List and Set Item Property_**  
---|---  
  
## Description

Search list and set item property

This property, when set, causes the system to search the list box or grid for the text supplied. If the text is found, the system will set the **['Column](column.md)** and **['Item](item.md)** (or **['Row](row.md)**) property for the control to the entry where the match was found. If no match is found, the 'Column and 'Item ('Row for the Grid) property is set to zero.

A typical use of this property would be to locate a value in the list box and then change or delete it. It can also be used to validate that an entry exists in the list box. This property is generally only written to. Reading this value will return the same as reading the **['ItemText$](itemtext_.md)** property.

**Controlling the Search (List View/Grid Only)**

The search is controlled by the settings found in 'FindOptions$. These options are provided as a series of characters in 'FindOptions$:

**Char.** |  **Function**  
---|---  
C |  Search is case insensitive.  
A |  Accents will be ignored when comparing data.  
W |  Search should start from current position and wrap around.  
* |  Match is for data anywhere in the text (cannot be used with Sort option).  
S |  Data is sorted.  
R |  Search backwards.  
  
**Search Range (List View/Grid Only)**

When searching, if the "W"rap option is not specified, the search will start from the beginning of the data in the control and proceed through the end. If the "R"everse option is set, the search starts at the end and proceeds to the beginning. If the "W"rap option is set, the search will start from the position immediately after that specified in the 'Item ('Row for Grid) and 'Column and search through all the data wrapping around the end/start back to the starting point. 

If the property 'FindColNo (or 'Column for Grid) is set, only data in that column will be searched. If the "S"ort option is specified, only the column specified in the **['Sort](sort.md)** property will be checked and its setting (Ascending/Descending) will be used to determine the assumed sort sequence. If 'Sort is not set, the system will assume that the column specified in 'FindColNo has been pre-sorted in Ascending order. If 'FindColNo is not set, then the system will assume the first column is to be used and is in ascending sequence. 

If both "W"rap and "S"ort options are specified, the system will use the starting point set in 'Item ('Row on Grid) and 'Column and determine the search direction based on the value at the starting point. If the value at the start point matches that of the search value, the "R" option will determine the search direction.

#### **Note:**  
Prior to PxPlus v11, this property and functionality was not available on the grid. In addition, the 'Column was not set nor were the 'FindOptions$ and 'FindColNo ** _(list view only)_** supported.

_(The FindItemText$ property was added in PxPlus v7.10.)  
(Support for the Grid, the FindOptions$ and FindColNo properties was added in PxPlus v11.00.)_

## Examples

**Example 1: Changing item text in a list box**

To change the value of the list box entry of "CAT" to "DOG" for list box "LIST1", you could do the following:

> List1'FindItemText$="CAT" ! Locate the item  
>  List1'ItemText$ = "DOG" ! Change the value

**Example 2: Locate and delete an item from a list box**

To locate and delete a value from a list box:

> List1'FindItemText$="CAT" ! Locate the item to delete  
>  LIST_BOX LOAD List1, List1'Item, *

**Example 3: Validate the existence of an item in a list**

To search a list box to find a specific value, set the FindItemText$ to the desired search value then read 'Item. If zero, the item does not exist.

> List1'FindItemText$=X$ ! Locate the item  
>  IF List1'Item=0 THEN MSGBOX X$+" is not found"

## See Also

[**'FindColNo**](findcolno.md)  
[**'FindOptions$**](findoptions.md)

## Used By 

**DROP_BOX****GRID****LIST_BOX****LIST_VIEW****REPORT_VIEW****TREE_VIEW****VARDROP_BOX****VARLIST_BOX**
