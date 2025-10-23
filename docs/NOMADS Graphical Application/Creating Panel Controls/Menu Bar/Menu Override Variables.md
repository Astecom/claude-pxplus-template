# Menu Bar   
  
**Menu Override Variables** |  **__**  
---|---  
  
NOMADS supplies three reserved variables that can be used to override the logic, text or item status on a menu item or group. These can be used in a program or through the Execute function. To use these variables in a program, select _Perform_ from the drop-down list and enter the program name (with optional entry label).

**_MNU_DESC$** |  Contains the item or group description (i.e. the text label on the menu) and must include an **&**  _(ampersand)_ to indicate a unique selection character. When the menu is displayed, the character following the ampersand is underlined and acts as a hot key. **_Example:_** _MNU_DESC$="Sales &Invoices" displays as "Sales _I_ nvoices" (I is underlined).  
---|---  
**_MNU_FUNCTION$** |  Function or event that will be triggered when the menu item is clicked.  
**_MNU_OPTION$** |  Defines the state of the menu item or group. The five possible states are _Bold_ , _Checkmark_ , _Disabled_ , _Suppress/Hide_ and _Ignore_ (show menu item). In your code, you represent the state by the uppercase first character. **_Example:_** **B** for Bold
