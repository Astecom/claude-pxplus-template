# PxPlus COM Support

**Extended Properties and Methods** |  **__**  
---|---  
  
During the development of the PxPlus COM interface, it was realized that developers may require information and helper functions that are not exposed by all COM objects, such as the container window handle or the internal COM object class name, etc. To accommodate this, a set of properties and methods were created for access by all COM objects instantiated in PxPlus. The DLL handles the execution of these internally, but to the developer, they function identically to the other COM properties and methods of the object.

The following is a list of additional COM members available for use with PxPlus:

**PVXALIAS(**_member$_**,**_user_ _$_**)** |  **_(Method Call)_** This method takes two string parameters. The first,_member$,_ indicates the actual COM member name to alias.   
The second,_user$,_ is the user-defined alias name to use. Upon success, the object can be accessed using the alias name in place of the actual name.  
  
**_Example:_**  
  
If an object had a property called DAY, an Error 20 would occur when attempting to access it. To correct this:   
  
Z = OBJECT'PVXALIAS("DAY", "_DAY")   
A$ = OBJECT'_DAY$  
---|---  
**PVXALLOCRECORD(**_recordname_ _$_**)** |  **_(Method Call)_** This method allocates an instance of a record specified by the _recordname_ _$_ parameter. For a list of available record types, see **[PVXRECORDS$](Extended%20Properties%20and%20Methods.htm#pvxrecord)**.  
**PVXCONSTANTS** |  **_(Read-Only Property)_** This property is used to return a***CONSTANTS** object that is built from the current object's type library enumerated constants. The returned***CONSTANTS** object will expose all constant values as read-only properties. See **[*CONSTANTS](Extended%20Objects.htm#constants)** object.  
**PVXDESCRIBE$(**_member$_**)** |  **_(Method Call)_** This method accepts one string parameter, which is the actual COM member name to "describe" (requires type information to be available). If successful, returns a multi-line string of information describing the member, its return type, as well as parameters and their types. This can also be used to display field information for record-type objects by passing the field name in the _member$_ parameter.  
**PVXDOVERB(**_verb_**)** |  **_(Method Call)_** This method takes one numeric parameter, which is the verb to perform on the COM control. If the object does not expose a control, then no action is performed. Common verbs are as follows: Primary (0), Show (-1), Open (-2), Hide (-3), UIActivate (-4), InPlaceActivate (-5), DiscardUndoState (-6).  
**PVXERROR[$]** |  **_(Read-Only Property)_** Returns the last error code or message (depending on $ suffix) that occurred when accessing a property or method of the object.  
**PVXEVENTS[$]** |  **_(Read-Only Property)_** Returns the PxPlus class object that is handling events, or it provides a list of events names (depending on $ suffix) for the object. See **[Event-Driven COM](../Event-Driven%20COM/Overview.md)**.  
**PVXEXTDATA[$]** |  **_(Read-Only Property)_** This property provides buffering for returned string data that exceeds 32K. If a result returns more than 32K of data, the first 32K bytes will be returned, and the remaining data can be accessed via this property. The numeric value is the amount of data remaining in the buffer; the string value is the next 32000 bytes, or whatever is remaining.  
**PVXFOREACH** |  **_(Read-Only Property)_** This property is only valid for objects that expose a collection (IEnumVariant) or***VARARRAY** objects that contain a single array dimension. Attempting to read this property for any other object type will return an error. On success, a***FOREACH** iterator object will be returned that allows traversal of the object's data. See **[*FOREACH](Extended%20Objects.htm#foreach)** object.  
**PVXFREE(["**_children_**"])** |  **_(Method Call)_** This method will release the instance of the object. This is useful for sub-objects when**DEF OBJECT** has not been called. It also accepts one optional string parameter, which if passed, should be set to "_children_ ". This will cause all the children of the object to be released but will not release the object itself. Any other setting will cause the object to be released.  
**PVXHANDLE** |  **_(Read-Only Property)_** Returns the window handle for the container window that is hosting the control. If the object is not a control, a zero will be returned.  
**PVXHEIGHT** |  **_(Read/Write Property)_** Used to set the height, in pixels, of a control. If the object is not a control, then setting this property has no effect, and reading this value will return a value of (-1).  
**PVXID** |  **_(Read-Only Property)_** This property returns the interop handle to the object. It can be assigned to another integer variable, which can then be used in a**DEF OBJECT** statement. This is useful for situations in WindX where the PxPlus local variable goes out of scope.  
**PVXISA$** |  **_(Read-Only Property)_** Returns the internal COM class interface name from the associated type library, if available. If no type library is available, a blank string is returned.  
**PVXLEFT** |  **_(Read/Write Property)_** Used to set the left border, in pixels, of a control. If the object is not a control, then setting this property has no effect, and reading this value will return a value of (-1).  
**PVXLICENSE$** |  **_(Read-Only Property)_** Returns a hexadecimal string for objects that utilize license keys (providing the key is available). This string can then be used in a**DEF OBJECT** statement, which will allow the code to create an instance of the object without the key being available (run-time client sites).  
**PVXMAKEGLOBAL(**_global$_**)** |  **_(Method Call)_** This method accepts one string parameter, which is the name to make "global". If successful, another PxPlus session can access this object though a**DEF OBJECT** statement using the**[GLOBAL]** parameter. This allows a PxPlus session to expose objects to other sessions in a server-like fashion. This is only valid for COM-based objects.  
**PVXMODE** |  **_(Read/Write Property)_** For controls that differentiate between development and run-time mode, this is used to set the "user mode" state. Setting this to zero will place the control in development mode; any other value will place it into run-time mode. If the object is not a COM control, then setting this property has no effect.  
**PVXNAME** |  **_(Read-Only Property)_** Returns the string used to create the instance of the object. For sub-objects, the string also includes the property/method names.  
**PVXPARENT** |  **_(Read-Only Property)_** Returns the parent handle (interop id, also see **[PVXID](Extended%20Properties%20and%20Methods.htm#pvxid)** above) for the object, or zero if the object is top level.  
**PVXRECORDS$** |  **_(Read-Only Property)_** Returns a comma-delimited list of record type names that are available from the type library associated with the calling object.  
**PVXSAVE(**_filename$_**)** |  **_(Method Call)_** Used for saving a control's design time property set. On success (return not zero), the property set will have been saved as XML content within the specified file. This allows a developer to modify a control during design time and then reload it using the**[DESIGN]** option later.  
**PVXTOP** |  **_(Read/Write Property)_** Used to set the top border, in pixels, of a control. If the object is not a control, then setting this property has no effect, and reading this value will return a value of (-1).  
**PVXTYPELIB$** |  **_(Read-Only Property)_** Returns the file name that exposes type information for the object. (Type information must be available.)  
**PVXVISIBLE** |  **_(Read/Write Property)_** Shows or hides the OLE control. Setting to 0 _zero_ hides the control; any other value shows the control.  
**PVXWIDTH** |  **_(Read/Write Property)_** Used to set the width, in pixels, of a control. If the object is not a control, then setting this property has no effect, and reading this value will return a value of (-1).
