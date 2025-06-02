# WindX™ Thin-Client

**Turbo Mode Operation** |   
---|---  
  
During normal operation, each tokenized message sent by the host to the client requires an acknowledgment. While this process guarantees that the application and client are synchronized fully, it can slow down overall transmission speeds. However, WindX also supports a **'Turbo Mode** ', which allows it to receive and process many requests locally without the need to acknowledge each transmission from the host.

In the **_Normal Mode_** of operation, each packet sent to WindX receives an acknowledgment back confirming that it was executed and no errors were detected.

When **_Turbo Mode_** is enabled, packets that do not return any information other than just an acknowledgement that they succeeded can be sent without waiting for a response from the WindX client. While in Turbo mode, acknowledgments are not sent by WindX for directives and functions that do not return a value, for example, a write command for a graphical control.

If an error does occur during the execution of any of the commands received by WindX, it is reported locally, or in the case of WindX, can be ignored depending on the configuration option.

To **_enable Turbo mode_** , set the system parameter **['TU'](../parameters/tu.md)** on the host system. This is done automatically by the NOMADS Graphical Environment.

#### **Note:**  
While Turbo mode improves performance, any code that relies on error detection may not work as expected. For example, relying on an error branch to detect a bad value when issuing a WRITE command to a control will not work. Either change the application logic or turn off the 'TU' system parameter to avoid this situation.

**_Example:_**

> LIST_BOX WRITE 10,"AAA",ERR=BADID

The above logic will not work in Turbo mode as the LIST_BOX WRITE directive returns no data thus the error will be reported locally.
