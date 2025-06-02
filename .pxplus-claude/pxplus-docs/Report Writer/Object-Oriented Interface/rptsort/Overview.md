# Object-Oriented Interface  
  
**rptsort** |  **__**  
---|---  
  
The **rptsort** object is a data member of the **[pvxreport](../pvxreport/Overview.md)** object interface, delegated to store and manipulate a sort segment definition. One object is created for each segment in the sort order, and the creation sequence must match the sort order sequence. The **[pvxreport](../pvxreport/Overview.md)** **GetSortItem( )** method can be used to retrieve the object handle for an **rptsort** object, which allows access to all the object's methods and properties.

## rptsort Properties

The following table lists the properties of the **rptsort** object:

**Property** |  **Description**  
---|---  
**SegmentName$** |  Name of the table element used in the sort order. This must start with an alpha character, optionally followed by alphanumeric, period or underscore characters. Set to null if invalid.  
**Type$** |  Single-character code to indicate whether the sort order segment contains string or numeric data: **S** \- String/text   
**N** \- Numeric/computational  
  
Default is **S**.  
**Length** |  Positive numeric value indicating the number of characters in the sort element to be used to determine sort order.  
**Order$** |  Single-character code to indicate the sequence of the segment: **A** \- Ascending   
**D** \- Descending  
**IgnoreCase** |  Boolean value indicating whether case should be ignored when sorting the segment. Default is 1; i.e. a case-insensitive sort.
