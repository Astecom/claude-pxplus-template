# Introduction to Using PxPlus

**Event Handling**|   
---|---  
  
PxPlus includes application event handling that allows for the simple generation and intervention of key specific events within an application program. The built-in event processing logic provides the ability to define (by name) application generated events, the parameters associated with each event, and how each of these events will be processed.

Using this approach to event handling has several benefits:

  * Performance of the system and handling of events is more efficient as this logic will be done internally within the PxPlus executive modules as opposed to external 'interpreted' application logic.
  * Multiple actions for an event can be easily supported by the system.
  * Works with Objects and 3GL style coding.
  * Allows virtually unlimited number of events with very low overhead to initiate event.



_(Event handling interface was added in PxPlus v11.00.)_

Two directives are used for this process, **[ON PROCESS EVENT](../directives/onprocessevent.md)** and **[PROCESS EVENT](../directives/processevents.md)**. The **ON PROCESS EVENT** directive is used to define what action will occur when an event occurs in terms of program to **CALL** or **PERFORM**. Once defined, the actions are kept internally within PxPlus. The **PROCESS EVENT** directive actually initiates the event and can optionally pass values to/from the event handler.

If no action is defined for an event, the event will be ignored. If one or more actions are specified for an event, the actions will be executed in the order in which they were defined.

**_Accessing the Event Action Table_**

The **[TSK( )](../functions/tsk.md)** function is used to view which events are defined in the system and what the associated action is for each event.

The **TSK (EVENT)** option returns a list of all events that currently have actions associated with them. Each entry consists of the event name followed by a TAB ($09$) and the action followed by another TAB ($09$) and a Line Feed ($0A$).

The same values can be returned by the system inter-task debugger using **TSK(*EVENT)** and returns the list for the task currently being debugged.
