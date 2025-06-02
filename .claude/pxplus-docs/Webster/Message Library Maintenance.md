# Webster+ Setup and Configuration

**Message Library Maintenance**|   
---|---  
  
Most end-user facing messages in Webster+ come from a system message library. This allows for standardized messaging that can be easily maintained and updated from a common source. Message libraries are also useful in supporting multilingual environments. The **Message Library Maintenance** utility is used to create an application specific library and to add/edit the text of messages that will be displayed to the user.

To run the **Message Library Maintenance** utility, select **Messages** from the top menu of the Webster+ system setup. The following window is displayed:

> #### **Important Note:**  
**_*webster/msglib.en_** is the standard system message library used by Webster+; therefore, adding application-specific messages to this library is ** _not_** recommended because it will be overwritten with subsequent upgrades.

This window consists of the following:

_Library_ |  By default, the system will be set to access your application library, if present. You can select the desired library you are working with by using the drop list.  
---|---  
_Message Key_ |  Each message in the system has a unique case insensitive _Message Key_ , which can be used in your application to recall the message text. Click the lookup button to display a list of the messages currently in the library. Use the navigation buttons to move between the messages in the library.  
_Message Text_ |  Message text that will be displayed. This can contain plain text and/or a combination of replaceable arguments.  
_Save_ |  Click this button to record the changes.  
_Delete_ |  Click this button to delete the currently selected message.  
_Make Library_ |  Click this button to create an application specific message library. This new library will be pre-initialized with the contents of the standard Webster+ system message library.  
  
**_To create or edit a message:_**

Enter the message key and press Tab. If there is an existing message on file for that key, its contents will be displayed; otherwise, the message text area will be cleared. Enter/edit the desired message text and click the _Save_ button to record the changes.

## Using the Message Library in your application

Message library entries can be used to compose the text of messages that will be displayed to the user. There are a couple of ways that you can access the message library. You can use the PxPlus **[MSG](../functions/msg.md)** function or the **[%Webster'Message$](Webster%20Object%20Methods.htm#message)** method.

**_Example 1:_**

> Using the **MSG( )** function to obtain the message text:

> Text$ = MSG("OnHold")

This would return the text message retrieved from the library. The message in Text$ would contain:

> "The client is on hold"

**_Example 2:_**

For the next two examples, the variable AccountNo$ contains the value "123456".

> Using the **MSG( )** function to obtain the message text:

> Text$ = MSG("OnHold", AccountNo$)

This would return the text message retrieved from the library and replace the string %1 with the value contained in AccountNo$. The message in Text$ would contain:

> "The client 123456 is on hold"

**_Example 3:_**

The Webster+ method **'Message$** provides enhanced replacement capabilities. However, instead of replacing parameters by ordinal number (%1, %2, %3, etc.), it replaces values using a variable name.

> Using the method **'Message$** to obtain the message text:

> Text$ = %Webster'Message$("OnHold" with Acct$=AccountNo$)

This would return the text message retrieved from the library and replace the string %Acct$ with the value contained in AccountNo$. The message in Text$ would contain:

> "The client 123456 is on hold"

#### **Note:**  
The **%Acct$** in the sample message text above should not be confused with a global variable. The leading **%** simply identifies the variable to be replaced and is designed to be consistent with the numbered parameters %1, $2, %3, etc.
