# Directives

**DEF MSG** |  **_Define Temporary Message_**  
---|---  
  
##  Formats

1. |  _Override Message for Number:_ |  **DEF MSG(**_nnn_**)="**_message"_  
---|---|---  
2. |  _Define Message & Name:_ |  **DEF MSG(**_name$_**)="**_message"_  
3. |  _Remove Message Override:_ |  **DEF MSG(**_nnn_**) DELETE**  
4. |  _Remove Message Name:_ |  **DEF MSG(**_name$_**) DELETE**  
  
**_Where:_**

_message_ |  String containing message text associated with _name$_ or to override the message text in _nnn_.  
---|---  
_name$_ |  New system message name.  
_nnn_ |  Message number from the system message library (i.e. __mlfile.en_).  
  
##  Description

The **DEF MSG** directive allows you to change system messages on the fly. It can be used to temporarily override values returned by the **MSG( )** function for specific message numbers. It also allows the creation of text-based message names.

#### **Note:**  
To permanently define different system messages for a different language, create a **_*mlfile.xx_** for a different language and use the ***msgupd** program to define all the messages.  
  
See **[Customizing System Messages for Different Languages](../PxPlus%20System%20Programs%20and%20Files/Message%20Library/Overview.htm#customizing)**.

##  See Also

**[MSG( ) Return Message Text](../functions/msg.md)**  
**[MSGBOX Display Popup Message Box](msgbox.md)**  
**[MESSAGE_LIB Establish Message Library](message_lib.md)**
