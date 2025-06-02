# Message Library Maintenance  
  
**Message Library Reference**|   
---|---  
  
When defining library defaults, panel headers, panel controls and queries, certain properties include _Message Lib Ref_ as one of the available selections. When it is selected, a _Key_ field displays for specifying a key associated with an existing message in the current message library. The specified _Key_ is used to retrieve the message text when the panel is processed.

**_Example:_**

> If no value is specified in the _Key_ field, clicking the Query button will invoke the **Message Library Reference** window for selecting an existing _Message Key_.

If a new _Key_ value is specified, clicking the Query button will display a prompt to add the key as a new message. Responding _Yes_ invokes **[Message Library Maintenance](Overview.md)** for entering the message details. Responding _No_ invokes the **Message Library Reference** window (the _Message Key_ field will be blank).

> **Message Library Reference** is used to select and view an existing message in the message library file (**_default_** is _*msglib.en_). New messages can be created on the fly by entering a new _Message Key_ value and then responding _Yes_ to the prompt to add this key as a new message, which brings up **Message Library Maintenance**. The button beside the _Message Key_ field can be used to quickly access **Message Library Maintenance**.

This window consists of the following:

_Library File_ |  Name of the current message library. (**_Default_** is _*msglib.en_.) If a message library has been specified in the Library Defaults **[Setup](../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#setup)** tab, that file name will display as the default. If the name of the library file entered does not exist, a prompt to create the file will display. Click the Query button to select a different message library file. The **_selected_** library file remains in use for as long as **Message Library Reference** is open. Once **Message Library Reference** is closed and reopened, the **_default_** message library is used.  
---|---  
_Message Key_ |  Unique key that identifies a message. Click the Query button _(binoculars)_ for a list of existing messages in the current message library file. If the message key entered cannot be found in the current message library, a prompt to add it as a new message will display. Responding _Yes_ invokes **[Message Library Maintenance](Overview.md)** for entering the message details. Responding _No_ clears the message key entered and leaves **Message Library Reference** open. _(The capability to create messages on the fly was added in PxPlus 2019.)_  
_(Message Library Maintenance)_ |  Button used to invoke **[Message Library Maintenance](Overview.md)** for adding a new message, as well as updating or deleting an existing message. _(The Message Library Maintenance button was added in PxPlus 2019.)_  
_Message Arguments_ |  Optional arguments (comma-separated strings) for a message that has placeholders for arguments. See the **[Edit Message](Overview.htm#editmessage)** tab in **Message Library Maintenance**.  
_Text_ |  Text for the message.  
_OK_ |  Populates the _Key_ field (for the property defined with the _Message Lib Ref_ option) and closes **Message Library Reference**.  
_Cancel_ |  Closes **Message Library Reference** without saving changes.
