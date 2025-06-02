# Event-Driven COM

**Handling Events** |  **__**  
---|---  
  
It is highly recommended that event functions be kept relatively short and simple. One reason for this is that normal code execution will be suspended when an event is handled and will not resume until the event function is finished. It is also possible to introduce code (or use commands such as **[MSGBOX](../../../directives/msgbox.md)**) to create a re-entrancy issue in the event function.

Re-entrancy is allowed; however, a limit has been imposed to prevent runaway objects. If the event call stack reaches a depth of 64, all further events will be discarded while waiting for the current events to finish.

The following related TCB values have been added to PxPlus to expose this information:

|  **TCB(120)** |  Returns the interop handle (see **[PVXID](../PxPlus%20COM%20Support/Extended%20Properties%20and%20Methods.htm#pvxid)**) for the COM object that fired this event. Similar to the _obj when in a class function.  
---|---|---  
|  **TCB(121)** |  Returns the number of events that have been **_dispatched_** to PxPlus.  
|  **TCB(122)** |  Returns the current depth of the event call stack.  
|  **TCB(123)** |  Returns the number of events that have been **_discarded_** by PxPlus due to excessive outstanding event calls.  
  
It is important that the function declaration in the PxPlus class matches that of the COM event. Otherwise, your function may not be called or may cause an error when the event is fired. If a situation occurs where an event argument is defined as variant (and may receive either string or numeric data), then a second overloaded event function should be defined.

## OnData(data)

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

Another aspect of event handling deals with the scope of passed arguments. All arguments passed into an event are local in scope and should not be considered to exist when the event is finished. It is common for many event routines to pass COM objects in as parameters. These can be programmed against during the event but should not be persisted (assigned for later use) when the event is finished.
