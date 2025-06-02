# NOMADS Run-Time Utilities

**NOMADS Panel/Program Editor**|   
---|---  
  
When processing a panel in the NOMADS environment, the **Panel/Program Editor** allows you to edit the currently displayed panel(s) and the associated default program(s).

The steps to invoke the Panel/Program Editor are:

|  1. |  Open the panel from within the application.  
---|---|---  
|  2. |  Position the mouse pointer on a **_blank_** area of the panel, not on a panel control.  
|  3. |  Press **CTRL+SHIFT+Right Click** to invoke the Panel/Program Editor popup menu:  
  
  
  
The Panel/Program Editor popup menu consists of three sections - _Edit Panels, Edit Programs_ and _Capture Screen_ :

_Edit Panels_ |  Lists the names of the active panel(s) currently displayed, including the names of any sub-panels if a **[Folder](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)** control exists on the main panel. Clicking on a panel name opens the panel in the **[NOMADS Panel Designer](../../Panel%20Designer/Introduction.md)**. **_Example:_** In the screen shot, _Salesreps_ is the Main panel and _Salesreps.1_ is the active folder tab currently displayed (_Contact_). The _Details_ folder tab _(Salesreps.2)_ is not listed, as it is not the active folder tab currently.  
---|---  
_Edit Programs_ |  Lists the associated default program(s). Clicking on a program loads the program in the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_. _(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_  
_Capture Screen_ |  Lists two options for saving an image of the window to an image file - _Full Window_ and _Contents only_ : |  _Full Window_ |  Displays the entire window as it is, **_including_** the top title bar with the Minimize, Maximize and Close buttons.  
---|---  
_Contents only_ |  Displays only the inner entry portion of the window, **_excluding_** the top title bar, Minimize, Maximize and Close buttons.
