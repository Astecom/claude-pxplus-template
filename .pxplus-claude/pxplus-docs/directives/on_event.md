# Directives 

**ON EVENT** |  **_Event Processing_**  
---|---  
  
##  Formats

1\. _External Control via OOP Object_ _:_ |  **ON EVENT FROM** _ext_id_ __**PROCESS** _oop_id_  
---|---  
2\. _External Control via CTL Event_ _:_ |  **ON EVENT** _evtname_ _$_**FROM** _ext_id_ __**PREINPUT** _ctl_id_  
3\. _[Remove CTL Event](on_event.htm#Mark7):_ |  **ON EVENT** _evtname_ _$_**FROM** _ext_id_ __**REMOVE**  
  
**_Where:_**

_ext_id_ |  Numeric CTL value of a Windows external object.  
---|---  
_ctl_id_ |  Numeric CTL signal to generate (pre-input) when a given event occurs.  
_evtname_ _$_ |  Event name, maximum 255 characters.  
_oop_id_ |  Numeric identifier of an OOP object. See **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**.  
  
##  Description

This directive is used to activate support for individual external control events for use in PxPlus applications. COM, .NET and *Browser controls are supported. See **[DEF OBJECT](def_object.md)** directive.

_(.NET support was added in PxPlus 2025.)_

The **[.NET Interface](../Dot%20Net%20Interface.md)** allows developers to leverage the power of .NET's robust libraries in PxPlus when using .NET applications.

All .NET events have two arguments, _sender_ and _evtArgs_ , where _sender_ is the .NET object that triggered the event while _evtArgs_ is a .NET object that contains additional event arguments, if needed. What these are exactly will depend on the .NET object, and you can use the .NET objects documentation to find out details about specific events, _evtArgs_. Event arguments are supported only when handling events via a class.

#### **Note:**  
Only Format 1 supports event arguments. In Format 2, they are not supported.

##  Format 1

**_External Control via OOP Object_**  
  
**ON EVENT FROM** _ext_id_ __**PROCESS** _oop_id_

This format is used to register a numeric OOP object identifier (_oop_id_) to service a given external control (_ext_id_). The OOP object identifier is stored in a read-only property of the external object called **'PvxEvents**. A comma-separated list of the events that are supported by the external object is available by querying **'PvxEvents$** via the [**Apostrophe Operator**](../appendix/apostrophe_operator.md). Supported events are prefixed with a **+** (_plus sign_) while unmanaged events are prefixed with a leading **-** (_minus sign_). This format will not work across WindX.

#### **Note:**  
The list of events reported in **'PvxEvents$** is only available after the **ON EVENT FROM**  _ext_id_ **PROCESS**  _oop_id_ has been executed. This behavior is intended to minimize communication with the interop layer when event support is not required.

An invalid _ext_id_ generates an Error #65: Window element does not exist or already exists. An invalid _oop_id_ generates an Error #95: Bad Object Identifier. Other errors, such as when an external object does not support events, will generate an Error #88: Invalid/unknown property name and, if available, place a description of what caused the error in the **'PvxError$** property for the external object, as well as in **MSG(-1)**.

An _oop_id_ of 0 (_zero_) deactivates event processing for the current external object. Dropping a PxPlus OOP object deactivates event processing for all external objects associated with the OOP object. Issuing a subsequent **ON EVENT** directive for an external control discontinues event processing for the first PxPlus OOP object and then activates it for the new OOP object (provided the new _oop_id_ contains a non-zero value).

##  Formats 2 and 3

**_COM Control via CTL Event_**  
  
**ON EVENT** _evtname_ _$_**FROM** _ext_id_ __**PREINPUT** _ctl_id_  
  
** _Generate Event_**

The **PREINPUT** option is used to generate a PxPlus CTL event whenever the identified external control event occurs. This format simplifies the event interface by eliminating the need to create an OOP object to manage events. This format will work across WindX. The event process does not have access to any event parameters, as it will not be running in-line when the event occurs.

**ON EVENT** _evtname_ _$_**FROM** _ext_id_ __**REMOVE**

**_Remove Event_**

The **REMOVE** option stops the process of generating a CTL signal for the specified event; however, the removal of an assigned event will have no effect on currently queued events.

##  See Also

**[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)**  
[**DEF OBJECT Define Windows Object**](def_object.md)  
[**Apostrophe Operator**](../appendix/apostrophe_operator.md)  
**[Automation in PxPlus](../Automation%20in%20PxPlus/Introduction.md)**
