# Event-Driven COM

**Linking to an OOP Object** |  **__**  
---|---  
  
Linkage to a COM object can be managed/controlled through the use of a PxPlus object using **[Data Integration](../../Data%20Integration/Introduction.md)** functionality.

> **ON EVENT FROM** _com_id_**PROCESS** _oop_id_

**_Where:_**

_com_id_ |  Numeric CTL value of a Windows COM object.  
---|---  
_oop_id_ |  Numeric identifier of an OOP object.  
  
Support for events from a COM object is limited to a single PxPlus OOP object, whereas a single PxPlus OOP object is capable of supporting events from multiple COM objects. In other words, the relationship from a COM object to an OOP object is "one-to-one", while the relationship from OOP object to COM object(s) can be "one-to-many".

If PxPlus receives an event while processing another event, it will suspend the first event, process the second entirely, then resume the first event before returning to the main task. With this in mind, it is possible for a PxPlus task to become overloaded with event requests; therefore, a limit of 64 outstanding event requests has been imposed. PxPlus ignores subsequent event requests when there are 64 active requests being processed. Regular processing continues once the number of outstanding requests drops below 64.

Generally speaking, files can be shared between currently running tasks and event handlers. However, it is possible for an event to interrupt a task when it is part way through the execution of a file I/O directive or function. Under these circumstances, the file will not be available to the code associated with the event, and the (new message) Error #89: File access denied -- I/O operation pending will be reported.

## Usage Notes

  * An invalid _com_id_ generates an Error #65: Window element does not exist or already exists.

  
---  
  
  * An invalid _oop_id_ generates an Error #95: Bad Object Identifier.

  
  
  * Unexpected errors, such as when a COM object does not support events, will generate an Error #88: Invalid/unknown property name and, if available, place a description of what caused the error in the**PvxError$** property for the COM object, as well as in **MSG(-1)**.

  
  
  * An _oop_id_ of 0 (zero) deactivates event processing for the current COM object.

  
  
  * Dropping a PxPlus OOP object deactivates event processing for all COM objects associated with the OOP object.

  
  
  * The numeric OOP object identifier is stored in a read-only property called**PvxEvents**.

  
  
  * A comma-separated list of the events that are supported by the COM object is available by querying the**PvxEvents$** property. Supported events are prefixed with a _plus sign_ ( **+** ), while unmanaged events are prefixed with a leading _minus sign_ ( **-** ).

  
  
  * While the**PvxEvents** and**PvxEvents$** properties will appear in the property list for a COM object, they will not contain an available list of events until an **[ON EVENT](../../../directives/on_event.md)** directive has been executed.

  
  
  * Issuing a subsequent ON EVENT directive for a COM control will discontinue event processing for the first PxPlus OOP object, then activate it for the new OOP object (provided the new oop_id contains a non-zero value).


