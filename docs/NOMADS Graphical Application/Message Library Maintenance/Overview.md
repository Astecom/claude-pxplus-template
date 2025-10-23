# NOMADS Graphical Application  
  
**Message Library Maintenance** |  **__**  
---|---  
  
The NOMADS **Message Library Maintenance** is used to set up message libraries that can be accessed by various different graphical user interface applications. Setting up a message library allows standardized messages for prompts, errors and warnings to be easily maintained as they can be updated from a common source. The PxPlus **[File Maintenance Generator](../Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** and **[Query Subsystem](../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** use the message library _*msglib.en_ to maintain prompts and button messages, as well as all warning and error messages.

**_Example:_**

In this example, a message _Key_ was entered when defining the **Text** property for the Button control. This _Key_ is used to retrieve the message text from the message library when the panel is processed. See **[Message Library Reference](Message%20Library%20Reference.md)**.

> When the panel is processed, ***winproc** passes the specified _Key_ ("&WRITE") via the **[MSG( )](../../functions/msg.md)** function to retrieve the message text. The equivalent process in PxPlus would be as follows:

> MESSAGE_LIB "*msglib.en"  
>  print msg("&WRITE")

Message libraries are also useful in supporting multilingual environments. See **[Multilingual Capabilities](../Multilingual%20Capabilities/Introduction.md)**.

For information on the use of message libraries in PxPlus, see **[MESSAGE_LIB](../../directives/message_lib.md)** directive.

## Message Library Maintenance

**Message Library Maintenance** is used to add new messages to a message library in NOMADS, as well as update or delete existing messages.

It is invoked by using one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then expand the _Setup_ category and select _Message Library Maintenance_.  
From the **[NOMADS Session Manager](../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Options_ menu, select _Message Library Maintenance_.  
  
The following window is displayed:

> This window is divided into the following tabbed panels: **[Edit Message](Overview.htm#editmessage)**, **[Compare](Overview.htm#compare)** and **[Copy/Merge](Overview.htm#copymerge)**.

_Library File_ |  Enter the name of the message library to be updated or click the Query button to select a different file. (**_Default_** is _*msglib.en_.) This field can also be used to create a new application-specific message library, in which case a prompt to create the new file will display.

#### **Important Note:**  
**_*msglib.en_** is the message library used by PxPlus sub-systems; therefore, adding application-specific messages to this library is **_not_** recommended because it will be overwritten with subsequent upgrades.  
  
---|---  
**Edit Message**  
**Message** |  |  _Message Key_ |  Key that identifies the message to be added, updated or deleted. Use a string, up to 64 characters in length. Click the Query button _(binoculars)_ for a list of existing messages in the current _Library File_. Use the Message Key with the **[MSG( )](../../functions/msg.md)** function to return values for use in your applications. You can pass optional arguments (comma-separated strings) for messages that have placeholders for arguments.  
---|---  
_Text (Translation)_ |  Can be either _Text_ or _Translation_ based on the following: |  _Text_ |  Available when a _Message Key_ is entered **_and_** the _Reference Library File_ check box is **_not_** selected.  
---|---  
_Translation_ |  Available when the _Reference Library File_ check box is selected.  
  
Enter message text (for either _Text_ or _Translation_). This can contain placeholders for arguments to be passed in the messaging system. The format of the argument placeholder is _%n**where** n_ is the argument sequence number, beginning at _%1_ (one).

Use the Browse buttons to scroll through the message records of the selected message library.  
  
_Write_ |  Button used to update/add the current message to the selected message library file.  
_Delete_ |  Button used to remove the current message from the selected message library file.  
_Print_ |  Button used to print a list of the messages in the selected message library file.  
_Clear_ |  Button used to clear the message input fields. If unsaved changes are detected, a message will display to save the changes.  
**Reference Text** |  |  _Reference Library File_ |  Select this check box to display a reference file when translating. Enter the pathname of the message file in the adjacent field or click the Query button to select a file. The corresponding record will be displayed as _Reference Text_ to aid the translation process.  
---|---  
_Reference Text_ |  **_(Available only when Reference Library File check box is selected)_**  
  
If you enter a _Message Key_ or use the Browse buttons to scroll through a message library file, the corresponding record (if any) is displayed. When browsing, if records exist in the _Reference File_ but not in the _Library_ you are updating, these records are also displayed.  
**Compare**  
**Compare** |  |  _Source_ |  Indicates the name of the source message library to be compared. Default is the current selection. Click the Query button to locate a different file.  
---|---  
_Compare_ |  Indicates the path and file name of the message library to be compared against the source file. Click the Query button to locate a different file.  
_Compare_ |  Button used to compare the two files. Once compared, any differences are presented in the text box provided.  
_Print_ |  Button used to print a hard copy of the Compare results.  
**Copy/Merge**  
**Copy/Merge** |  |  _Copy To_ |  Indicates the name of the file to which records are to be copied.  
---|---  
_Copy From_ |  Indicates the path and name of the file from which records are copied.  
**Copy Option** |  Click the drop-down arrow for selections: |  _Merge Files_ |  Copies just the records that are missing. Existing records are not overwritten.  
---|---  
_Overwrite (No Purge)_ |  Copies all records. Duplicate records are overwritten; however, records that are unique to the receiving file are left alone.  
_Purge File and Copy_ |  NOMADS will clear the receiving file and select all records. The result is a duplicate of the file that was copied.  
_Copy_ |  Button used to perform the Copy process based on the selected option.  
_Exit_ |  Closes **Message Library Maintenance** without saving changes.  
  
## See Also

**[Message Library Reference](Message%20Library%20Reference.md)**  
**[MESSAGE_LIB Directive](../../directives/message_lib.md)**  
**[Multilingual Capabilities](../Multilingual%20Capabilities/Introduction.md)**
