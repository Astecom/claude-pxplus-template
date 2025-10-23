# Automation in PxPlus

**Events** |  **__**  
---|---  
  
Whenever a COM object wants to notify its clients that something has happened, it sends out a message. This message is called an **_event_** , and the process of sending the message is referred to as **_event firing_**. If an event is fired and nobody is listening, did the event ever occur? Obviously, the client application that is controlling the COM object has to be listening for the events. When a client application wishes to receive events from a COM object, it advises the COM object of this fact.

## Receiving Events

To receive events from a COM object, a PxPlus class must first be designed. A class function must be written for each event to be handled.

**_Example:_**

If writing an event class for a COM object that exposed the event 

> **ONCLICK(X _as Integer,_ Y _as Integer_ , Button _as Integer_ , Shift _as Integer_)**

... the following would be required in your PxPlus class:

> 10 DEF CLASS "FOO"   
>  20 FUNCTION ONCLICK(X, Y, B, S) ONCLICK FOR EVENT "ONCLICK"   
>  30 END DEF   
>  40 STOP   
>  50 ONCLICK:   
>  60 ENTER X, Y, B, S   
>  70 PRINT "OnClick was fired"   
>  80 RETURN

The function and label name are not required to match the name of the event. It is the string after the FOR EVENT portion of the statement that determines the event name that will be handled. The event name is not case sensitive, and argument names are not required to match the COM object's event declaration. When the OOP method name matches the COM event name, then **SAME** can be used to describe the name of the event.

Once the class is complete, an instance of the class must be instantiated to bind the COM object to the event handler. An example of the binding is listed on line 30:

**_Example:_**

> 10 DEF OJBECT FOO, "{Your Com Object Name}"   
>  20 FOOEVENTS = NEW("FOO")   
>  30 ON EVENT FROM FOO PROCESS FOOEVENTS

Once bound, the PxPlus event class function will be called when the corresponding event occurs.

##  Handling Events

It is highly recommended that event functions be kept relatively short and simple. One reason for this is that normal code execution will be suspended when an event is handled and will not resume until the event function is finished. It is also possible to introduce code (or use commands such as **[MSGBOX](../../directives/msgbox.md)**) to create a re-entrancy issue in the event function.

Re-entrancy is allowed; however, a limit has been imposed to prevent runaway objects. If the event call stack reaches a depth of 64, all further events will be discarded while waiting for the current events to finish.

The following related TCB values have been added to PxPlus to expose this information:

|  **TCB(120)** |  Returns the interop handle (see **[PVXID](../PxPlus%20COM%20Interface%20Extensions/Overview.htm#pvxid)**) for the COM object that fired this event. Similar to the _obj when in a class function.  
---|---|---  
|  **TCB(121)** |  Returns the number of events that have been **_dispatched_** to PxPlus.  
|  **TCB(122)** |  Returns the current depth of the event call stack.  
|  **TCB(123)** |  Returns the number of events that have been **_discarded_** by PxPlus due to excessive outstanding event calls.  
  
It is important that the function declaration in the PxPlus class matches that of the COM event. Otherwise, your function may not be called or may cause an error when the event is fired. If a situation occurs where an event argument is defined as variant (and may receive either string or numeric data), then a second overloaded event function should be defined, e.g. OnData(data).

The following would be required in your PxPlus class to properly handle both cases:

> 010 DEF CLASS "FOO"   
>  020 FUNCTION ON_DATA(N) ON_NDATA FOR EVENT "ONDATA"  
>  030 FUNCTION ON_DATA(S$) ON_SDATA FOR EVENT "ONDATA"  
>  040 END DEF  
>  050 STOP  
>  060 ON_NDATA:  
>  070 ENTER N  
>  080 PRINT "Numeric data ", N  
>  090 RETURN  
>  100 ON_SDATA:  
>  110 ENTER S$  
>  120 PRINT "String data ", S$  
>  130 RETURN

Another aspect of event handling deals with the scope of passed arguments. All arguments passed into an event are local in scope and should not be considered to exist when the event is finished. It is common for many event routines to pass COM objects in as parameters. These can be programmed against during the event, but should not be persisted (assigned for later use) when the event is finished.

## Event Templates

The PxPlus Type Library Browser (TLB) was developed to provide extended type information for Windows COM objects and to help simplify the process of creating event class objects. See **[PxPlus Type Library Browser](../../PxPlus%20User%20Guide/External%20Components/PxPlus%20Type%20Library%20Browser/Overview.md)**.

The following steps outline the event template generation feature of the Type Library Browser:

|  1. |  Use the _Type Library Browser_ to open the desired type library. The COM object's **PvxTypeLib$** and **PvxISA$** properties are useful for determining this information.  
---|---|---  
|  2. |  Locate the CoClass (COM Class) that supports the COM object, and locate the Default Event Interface in the Entity Documentation section.  
|  3. |  Browse to the event interface by clicking the link in the Entity Documentation or by double clicking the interface in the Members list.  
|  4. |  In the Entity Documentation section of the utility, a link is available to generate an event template. Click this link to open the **Save As** dialog.  
|  5. |  Save the template to the desired file name. The **DEF CLASS** statement in the template is automatically updated to reflect the file name assigned.  
  
The event template (in text form) can then be edited in any text processor. All event functions, type casting, and DEF OBJECT statements will have been automatically created. The only thing that is required is to fill in the event function bodies with the necessary PxPlus code. Each function will have a commented section identified with the tag "< Insert code here >", which is where the custom code should be placed.

## Errors in Events

In a typical PxPlus program that uses class objects, an error raised by an object will be cascaded back to the calling program. Events, on the other hand, are called by COM objects and not PxPlus code. If an error occurs during the event handling, the COM interop layer will notify the COM object that the event failed. However, nothing is reported on the PxPlus side; i.e. there is no program to which to report. For this reason, all error handling should be performed within the class object.

In addition, it is not wise to release the calling COM object or its event handler object during the execution of the event. Releasing the COM object during the event can lead to unpredictable results. Objects that were passed in as event parameters may be safely released.
