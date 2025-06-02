# Automation in PxPlus - Appendix

**OLE Container Support** |  **__**  
---|---  
  
During the creation of the COM object, the DLL queries the dispatch interface to see if IOleControl is exposed. If it is, then the DLL will create a container window that will be embedded within a PxPlus window. The object is then shown or activated, depending on the flags it exposes. For objects that are "in place" activated (i.e., they expose the IOleInPlaceActiveObject interface), special note should be taken.

Some of these controls (e.g. Excel) have routines that are input-synchronous. Double-clicking a cell in Excel is an example of this - the cell is put into edit mode and it captures focus. If you attempt to make a method or property call at this point, it would fail with an error indicating that the "call was rejected".

A workaround to this problem is to send a WM_ACTIVATEAPP to the PxPlus window before making the COM call.

**_Example:_**

> 10 HWND$=OBJ(0); HWND=DEC(HWND$(17,4))   
>  20 X=DLL("USER32", "SendMessageA", HWND, 28, 1, 0)   
>  30 X=OBJECT'METHOD(PARAM1, PARAM2, )

Line 20 ensures that the control is activated and will reset **_most_** input synchronized states.
