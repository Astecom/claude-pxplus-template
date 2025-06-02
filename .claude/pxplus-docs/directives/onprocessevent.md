# Directives   
  
**ON PROCESS EVENT** |  **_Define Internal Event Logic_**  
---|---  
  
##  Formats

1\. _Define CALL to Handle Event:_ |  **ON PROCESS EVENT** _eventname_ _$_**[ REMOVE ] CALL** _program$_  
---|---  
2\. _Define PERFORM to Handle Event:_ |  **ON PROCESS EVENT** _eventname_ _$_**[ REMOVE ] PERFORM** _program$_  
  
**_Where:_**

_eventname_ _$_ |  Name of the event that will trigger the execution of the logic (**CALL** or **PERFORM** invocation).  
---|---  
_program$_ |  Name of the program (with _option;label_) that will be called or performed when the event is triggered.  
**REMOVE** |  Keyword that indicates the logic is to be removed.  
  
##  Description

This directive is used to define the action to be done when the event specified in _eventname_ _$_ occurs. Possible actions include calling a program or performing a program.

The actual name of the event is up to the user and is case insensitive. Event names must be non-blank between 1 and 32 characters in length.

To remove an action, the programmer can specify the same **CALL** or **PERFORM** parameters used to add the event preceded by the keyword **REMOVE**. No error will be generated if the action/event specified does not exist.

_(The ON PROCESS EVENT directive was added in PxPlus v11.00.)_

##  See Also

[**Event Handling**](../PxPlus%20User%20Guide/Event%20Handling.md)  
**[PROCESS EVENT Generate Internal Event](processevents.md)**
