# Event-Driven COM

**Generating a CTL Event for a COM Event** |  **__**  
---|---  
  
PxPlus can also process external events by generating a PxPlus CTL whenever an identified COM event occurs. 

The following**ON EVENT** syntax places a CTL value into the input queue:

> **ON EVENT** _evtname$_**FROM** _com_id_**PREINPUT** _ctl_id_

**_Where:_**

_evtname_ _$_ |  Event name, maximum 255 characters.  
---|---  
_com_id_ |  Numeric CTL value of a Windows COM object.  
_ctl_id_ |  Numeric CTL signal to generate (preinput) when a given event occurs.  
  
The**PREINPUT** format simplifies the event interface by eliminating the need to create an OOP object to manage events. This also works across WindX. The event process does not have access to any event parameters, as it will not be running in-line when the event occurs. If event parameters are required, see **[Linking to an OOP Object](Linking%20to%20an%20OOP%20Object.md)**.

**_Example:_**

**_Automated Timer, COM Event_**

The following event-driven program sets an automated timer by generating a PxPlus CTL to process the associated COM event.

> 0010 def object Timer,"*system"   
>  0020 on event "Timeout" from Timer preinput 500   
>  0030 Timer'SetTimer(5)   
>  0040 input a$,; if ctl=500 then print "Got a Timer Event"; goto *same   
>  0050 Timer'SetTimer(0)   
>  0060 drop object Timer
