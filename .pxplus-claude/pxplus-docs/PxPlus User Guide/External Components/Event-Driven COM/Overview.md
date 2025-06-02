# External Components  
  
**Event-Driven COM** |  **__**  
---|---  
  
In COM automation, when a control wants to notify its client applications that an action has occurred, it sends out a message called an event. The process of sending these types of messages is referred to as **_event firing_**. As with any event-driven program in PxPlus, the client application that is interacting with a control must be listening for its events. However, in the COM case, it is imperative for the client application to advise the COM object that it is ready and expecting to receive events.

For information on handling COM objects, see **[PxPlus COM Support](../PxPlus%20COM%20Support/Overview.md)**.

## Response Required

External events must be responded to immediately. This is a standard requirement for COM. While access to properties and methods is typically controlled from the client application's side, the timing for when events can fire is determined by the COM object itself. An event can happen whenever the application is reading or updating files, processing data, printing reports, or waiting for user input. An event can even fire while the application is in the process of servicing another event. The client application has to be ready to receive an event at any time.

## Working with Events

There are a few ways to access, receive and process COM control events in a PxPlus application:

**Linking to an OOP Object** |  Events from a COM object may be linked to an OOP object in PxPlus using the syntax **ON EVENT FROM _.._ PROCESS.** See **[Accessing a Specific Event Via an OOP Object](Accessing%20a%20Specific%20Event%20Via%20an%20OOP%20Object.md)**.  
---|---  
**Accessing a Specific Event via an OOP Object** |  Individual events can be activated via an associated PxPlus OOP object using the syntax **FUNCTION** _.._**FOR EVENT**. See **[Accessing a Specific Event Via an OOP Object](Accessing%20a%20Specific%20Event%20Via%20an%20OOP%20Object.md)**.  
**Generating a CTL Event for a COM Event** |  A CTL value can be placed into the input queue when the COM event occurs using **ON EVENT _.._ FROM** _.._**PREINPUT**. See **[Generating a CTL Event for a COM Event](Generating%20a%20CTL%20Event%20for%20a%20COM%20Event.md)**.
