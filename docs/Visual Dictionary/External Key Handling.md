# Visual Dictionary™ Utility

**External Key Handling**|   
---|---  
  
External Keys need special handling when defining the dictionary. Two different types of External Keys can be handled by the Visual Dictionary™ system: those where the External Key values can be found in the data record fields, and those where the External Key is independently derived.

If the External Key consists of data that exists in the fields within the record, define the fields in the External Key with the same name, size and type. During the save sequence, the system will then recognize these fields and assign them accordingly.

If the External Key consists of data that cannot be found in the record, define the External Key using a unique field name, and the system will define it as an independent field in the file.
