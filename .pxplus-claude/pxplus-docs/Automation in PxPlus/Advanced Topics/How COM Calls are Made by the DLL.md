# Automation in PxPlus - Appendix

**How COM Calls are Made by the DLL** |  **__**  
---|---  
  
Upon successful creation, IDispatch is retrieved from the newly created object. IDispatch is a COM interface that allows the DLL to perform three specific functions:

  * Get the function and property listing for an object.
  * Resolve dispatch IDs for given names.
  * Invoke property and method calls on the COM object.



The first step taken by the DLL to get/set a property or method is to get the dispatch ID for a given object. The DLL checks the object's hash table for the name. (The hash table allows for storage and retrieval of previously resolved name/ID pairs). This is referred to as "IDbinding", which is a form of early binding. By using the hash table, the DLL makes only one COM call to resolve any given name versus two COM calls when performing an action on a "late bound" object.

Next, the DLL packs the passed-in parameters. Strings are converted to OLE BSTRings, integers and doubles are packed _as is,_ "*" optional parameters are converted to VT_ERROR types, and object parameters are converted to either IDispatch or VARIANT BYREFs, depending on the object type.

Once the packing is performed, the invoke function is called on the object's IDispatch interface. The COM object has control at this point and will unpack the data, execute the property or method, and set the result value. When control is returned to the DLL, it will check for errors. If no errors have occurred, the result is packaged up and sent back to PxPlus.
