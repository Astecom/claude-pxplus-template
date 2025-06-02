# Directives 

**MERGE OBJECT** |  **_Merge Existing Objects_**  
---|---  
  
##  Formats

_Merge Object Properties/Methods:_ |  **MERGE OBJECT** _object_to_extend_ __**WITH** _object_to_merge_  
---|---  
  
**_Where:_**

_object_to_extend_ |  This object will be extended as a result of the merge operation.  
---|---  
_object_to_merge_ |  This object contains the properties/methods that will be logically merged into _object_to_extend_ _._  
  
##  Description

The **MERGE OBJECT** directive logically merges the properties/methods of two objects. All properties and methods in the o _bject_to_merge_ __ will be logically added to the _object_to_extend_ _._ Both objects must exist in the system. The system will reject any attempt to create a loop within the merged object list. For example, if object 1 is merged with object 2, which in turn is merged with object 3, attempting to merge object 3 with either 1 or 2 will result in an error.

Typical uses would be to merge or join two objects, such as an invoice header and invoice detail, so that the resultant object has the properties from both. Each invoice detail line object could merge itself with its respective parent invoice header, making all the properties of the header available while accessing the detail.

Objects can have only **_one_** object that they are merged with; however, an object can have any number of objects that are merged with it.
