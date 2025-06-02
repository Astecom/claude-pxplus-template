# Compound Properties

**Load on Demand Properties** |  **_List Box, List View_**  
---|---  
  
The following properties are used to improve **_List Box_** load times:

|  **['ItemCount](properties_list.htm#Mark68)** |  Defines number of items  
---|---|---  
|  **['ItemNeededCtl](properties_list.htm#Mark233)** |  CTL issued when data needed  
|  **['ItemNeededFrom](properties_list.htm#Mark234)** |  Lowest item needed  
|  **['ItemNeededTo](properties_list.htm#Mark69)** |  Highest item needed  
  
On-demand loading allows an application to load a List Box with only those items that the user actually scrolls into view. This reduces network traffic and file access since a List Box is only loaded with those items required by the user. In addition, it assures proper function of the scrollbar and its relationship to the list. 

This feature requires the developer to pre-declare the number of items that the List Box is to have (by setting the **'ItemCount** property). When the user scrolls items into view, the system generates a CTL event. 

Upon receiving the CTL event (set by **'ItemNeededCtl**), the application queries **'ItemNeededFrom** and **'ItemNeededTo** to determine the index number and the number of items. The application then loads the List Box with the contents of the specified items by setting **['Item](properties_list.htm#Mark66)** and **['ItemText$](properties_list.htm#Mark72)**. If no elements are needed, then **'ItemNeededFrom** and **'ItemNeededTo** will be zero. Once the value has been loaded into **'ItemNeededTo** , PxPlus checks if further items are required, and if so, it generates another CTL event. 

In the case of a **_Report-style List View_** , should the user request that the list be sorted or attempt to auto-size the width of a column, the system will force a load of all List Box elements before processing the request. In some instances, the contents of the List Box may need to be shown prior to the contents being loaded, in which case the system will display five dots in place of the data.

## See Also

[**LIST_BOX Create/Control List Box**](../directives/list_box.md)
