# Automation in PxPlus - Appendix  
  
**PXPOCX Misnomer** |  **__**  
---|---  
  
The "OCX" reference is a bit misleading, given the fact that PxPlus supports any object or control that exposes an IDispatch interface. The "OCX" reference was assigned during initial development when the desired results were the use of OCX controls within PxPlus.

In its current implementation, PxPlus COM support includes OLE, OCX and ActiveX technologies:

**_OLE_** |  Out of the DDE protocol grew OLE version 1.0 (1991), which was made available to all developers as a standard. The acronym "OLE" is an abbreviation of "Object Linking and Embedding".  
  
OLE 1.0 greatly enhanced the creation and management of compound documents. One placed "embedded objects" or "linked objects" in a document that retained the native data used to create them (or a "link" to that data), as well as information about the format. All the complexity of editing content was reduced to a double-click of the mouse, and the object data was automatically brought back into the original editor.  
---|---  
**_OCX_** |  The original OLE control specification required every control to implement at least nine specified interfaces, containing a combined total of 60 methods, in addition to whatever interfaces the control might implement to expose its own methods. There were also seven other interfaces that might be required, depending on whether the control had a user interface, and whether it supported events, property change notifications, ambient properties, property sets, property pages, or external connections.  
  
This standardization of interfaces made OLE controls easy to use, if not easy to program. A container application knew exactly what interfaces it could expect from any OLE control and could treat all OLE controls in a uniform manner. The one problem was that, in order to support all this functionality, OLE controls tend to be rather large, which makes them impractical for use on the Internet.  
**_ActiveX_** |  In 1996, Microsoft released a new specification for controls. This specification essentially only requires a control to support one interface, IUnknown, and two API functions, DllRegisterServer and DllUnregisterServer.  
  
Because an ActiveX control does not have to support the standard set of interfaces required for an OLE control, a container has to have more specific knowledge about an ActiveX control than it would have to have in order to use an OLE control. On the other hand, an ActiveX control only needs to support those interfaces it actually requires to do its job. Therefore, ActiveX controls can be very small and very responsive.
