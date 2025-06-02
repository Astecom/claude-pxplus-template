# Event-Driven COM

**Accessing a Specific Event via an OOP Object** |  **__**  
---|---  
  
To receive events, a PxPlus object must first be designed with a method written for each event to be handled. The following syntax sets a method to be processed for a particular incoming event:

> **FUNCTION** _method_**(_args_ )**_logic_**FOR EVENT** { _event$_ | **SAME** }

**_Where:_**

_method_ |  Name of the _method/function_ that the object can perform.  
---|---  
_(args)_ |  Optional list of arguments to be used in the logic when the method is actually invoked. Parentheses are required with/without arguments.  
_logic_ |  Procedure associated with _method._ This should return a value; if not, the system forces 0 or " ".  
_event$_ |  Name of the corresponding COM event.  
_SAME_ |  Keyword to use if the _method_ name matches _event$_ name _._  
  
**_Example:_**

When writing an event class for a COM object that exposes the event 

> **ONCLICK(X _as Integer,_ Y _as Integer,_ Button _as Integer_ , Shift _as Integer_)**

... the following code would be required:

> 10 DEF CLASS "FOO"  
>  20 FUNCTION ONCLICK(X, Y, B, S) ONCLICK FOR EVENT "ONCLICK"  
>  30 END DEF  
>  40 STOP  
>  50 ONCLICK:  
>  60 ENTER X, Y, B, S  
>  70 PRINT "OnClick was fired"  
>  80 RETURN

The method and label name are not required to match the name of the event. It is the string after the **FOR EVENT** portion of the statement that determines the event name that will be handled. The event name is not case sensitive, and argument names are not required to match the COM object's event declaration. When the OOP method name matches the COM event name, then **SAME** can be used to describe the name of the event.

Once the class is complete, an instance of the class must be instantiated in order to bind the COM object to the event handler. An example of the binding is listed on line 30:

> 10 DEF OBJECT FOO, "{Your Com Object Name}"   
>  20 FOOEVENTS = NEW("FOO")   
>  30 ON EVENT FROM FOO PROCESS FOOEVENTS

Once bound, the PxPlus event class function will be called when the corresponding event occurs.
