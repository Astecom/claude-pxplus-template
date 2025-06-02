# Event-Driven COM 

**Event Templates** |  **__**  
---|---  
  
The PxPlus Type Library Browser was developed to provide extended type information for Windows COM objects and to help simplify the process of creating event class objects. This utility (PVXTLB.EXE) is freely downloadable from **<https://www.pvxplus.com/downloads/misc/PVXTLB.EXE>**. See **[PxPlus Type Library Browser](../PxPlus%20Type%20Library%20Browser/Overview.md)**.

The following steps briefly outline the event template generation feature of the Type Library Browser:

|  1. |  Use the Type Library Browser to open the desired type library. The COM object's **PvxTypeLib$** and **PvxISA$** properties are useful for determining this information.  
---|---|---  
|  2. |  Locate the CoClass (COM Class) that supports the COM object, and locate the Default Event Interface in the Entity Documentation section.  
|  3. |  Browse to the event interface by clicking the link in the Entity Documentation or by double clicking the interface in the Members list.  
|  4. |  In the Entity Documentation section of the utility, a link is available to generate an event template. Click this link to open the _Save As_ dialog.  
|  5. |  Save the template to the desired file name. The**DEF CLASS** statement in the template is automatically updated to reflect the file name assigned.  
  
The event template (in text form) can then be edited in any text processor. All event functions, type casting, and DEF object statements will have been automatically created. The only thing that is required is to fill in the event function bodies with the necessary PxPlus code. Each function will have a commented section identified with the tag "< Insert code here >", which is where the custom code should be placed.
