# Visual Dictionary™ Utility

**Splitting a Field into Logical Parts**|   
---|---  
  
It is quite common to have a file where a physical field contains multiple logical fields. To define these types of fields using the Visual Dictionary™, place the mouse pointer over the position in the existing field that is to define the start of a new field. Click the right mouse button and select the _New field at pos xx in Fld#x_ option from the popup menu.

This will split the physical field into two unique logical fields. The area in front of the split point will retain the original field name but will have its size adjusted. The area split off will have a new name/description assigned, a new length calculated and be set to a String data type, but these can be changed. For more information on changing the characteristics of a field, such as name, description, type, etc., refer to **[Changing Field Details](Changing%20Field%20Details.md)**.

Each physical field can have any number of logical splits. The only restriction is that each split must consist of at least one character.

**_Example:_**

Consider a physical field consisting of 60 characters with the first 30 characters being the address line and the second 30 characters being the city. To split this field, you would position the mouse over column 31, click the right mouse button and select the _New field_ option. This would result in two 30-character fields.
