# Customizing PxPlus

**System Messages**|   
---|---  
  
System messages are defined using the PxPlus message library file **_*mlfile.xx_** (default: **_*mlfile.en_**). See **[*MLFILE.xx Message Library](../../PxPlus%20System%20Programs%20and%20Files/Message%20Library/Overview.md)**.

Error messages maintained in this file can be customized to support different languages using either of the following two methods:

|  **_Method 1:_** |  Use the **[DEF MSG](../../directives/def_msg.md)** directive to temporarily override the **[MSG( )](../../functions/msg.md)** function.  
---|---|---  
|  **_Method 2:_** |  Create a copy of the **_*mlfile.en_** file and give it a different language extension such as _de_ or _fr_. Then, use the ***msgupd** program to define the messages.  
  
See **[Customizing System Messages for Different Languages](../../PxPlus%20System%20Programs%20and%20Files/Message%20Library/Overview.htm#customizing)**.
