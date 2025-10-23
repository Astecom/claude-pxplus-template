# Event-Driven COM

**Errors in Events** |  **__**  
---|---  
  
In a typical PxPlus program that uses class objects, an error raised by an object will be cascaded back to the calling program. Events, on the other hand, are called by COM objects and not PxPlus code.

If an error occurs during the event handling, the COM interop layer will notify the COM object that the event failed. However, nothing is reported on the PxPlus side; i.e. there is no program to which to report. For this reason, all error handling should be performed within the class object.

In addition, it is not wise to release the calling COM object or its event handler object during the execution of the event. Releasing the COM object during the event can lead to unpredictable results.

Objects that were passed in as event parameters may be safely released.
