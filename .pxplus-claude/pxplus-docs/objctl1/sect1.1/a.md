# Object Controls

**Using Object Controls** |  **__**  
---|---  
  
Both Object Enhanced and Object Defined Controls have the property **['ObjectID](../../control_object_properties/properties_list.htm#Mark246)**, which is set to the object that will handle the requests to the control. A value in this property distinguishes an Object Control from a regular control.

See **[Object Enhanced Controls](b.md)** and **[Object Defined Controls](c.md)**.

## Property References

Whenever an Object Control's property is referenced, the system will first check its associated object to see if it has that property. If so, the system will use the property from the object instead of property in the control. This allows the object to intercept all property accesses external of the application program. 

In the case of an Object Defined Control (ODC), all properties for the control must exist within the object, as there is not related system control. 

In the case of an Object Enhanced Control (OEC), should the object itself make references to the properties of the control, the reference will be sent directly to the control, not the object itself. This means that should an OEC want to return a modified **'Value$** property for a control, internally it could read the control's **'Value$** property and then pass back the modified version.

## Directive Mapping

Whenever the application issues a standard graphical control directive against an Object Control, the system will attempt to map the directive to a method within the object. For example, when the directive LIST_BOX DISABLE is issued against an object control, the system will first attempt to execute a **'Disable( )** method in the object should it exist.

For Enhanced controls, if the method does not exist, the system will apply the directive to the actual control as it would normally. For Defined controls, the method must exist; otherwise, the directive will fail.

The full list of the directive mappings is displayed below.

**Directive** |  **Object Method** |  **Purpose**  
---|---|---  
_control_ GOTO nn  |  Focus( )  |  Set Focus to control   
_control_ REMOVE nn  |  Remove( )  |  Remove control   
_control_ LOCK nn  |  Lock( )  |  Lock the control   
_control_ UNLOCK nn  |  UnLock( )  |  Unlock the control   
_control_ AUTO nn  |  Auto( )  |  Set Automatic mode (Signal All Changes)   
_control_ ENABLE nn  |  Enable( )  |  Enable the control   
_control_ DISABLE nn  |  Disable( )  |  Disable the control   
_control_ FIND nn,a$  |  Find(a$)  |  Find element in list   
_control_ FIND nn,c,r  |  Find(c,r,a$)  |  Find element in grid   
_control_ READ nn,a$,e$  |  Read(a$,e$)  |  Read value from control   
_control_ WRITE nn,v$  |  Write(v$)  |  Write value to control   
_control_ LOAD nn,i,v$  |  Load(i,v$)  |  Load specific value to control   
_control_ LOAD nn,l$  |  Load(l$)  |  Load list of values to control   
_control_ LOAD nn,i,*  |  Delete(i)  |  Delete entry from list   
_control_ SET_FOCUS nn,fctl  |  SetFocus(fctl)  |  Set On Focus CTL value   
_control_ ON nn  |  SetOn( )  |  Set control to ON state   
_control_ OFF nn  |  SetOff( )  |  Set control to OFF state   
_control_ HIDE nn  |  Hide( )  |  Hide the control   
_control_ SHOW nn  |  Show( )  |  Show the control   
**GRID Specific Functions**  
GRID CLEAR nn,c,r [,w,h]  |  Clear(c,r [,w,h ])  |  Clear range of grid type control   
GRID WRITE nn,c,r,v$  |  Write(c,r,v$)  |  Write value to grid   
GRID READ nn,c,r,a$,e$  |  Read(c,r,a$,e$)  |  Read value from grid   
GRID DELETE nn,c,r  |  Delete(c,r)  |  Delete columns/rows   
GRID ADD nn,c,r  |  Add(c,r)  |  Add rows/columns   
GRID SELECT nn,c,r [,w,h]  |  Select(c,r [,w,h])  |  Select range   
GRID SELECT READ nn,c,r  |  SelectRead(c,r)  |  Read first selected cell   
GRID SELECT NEXT nn,c,r  |  SelectNext(c,r)  |  Read next selected cell   
GRID SELECT RESET nn,c,r  |  SelectReset(c,r)  |  Read next selected cell   
**_control_ will vary depending on the type of control being enhanced/defined**
