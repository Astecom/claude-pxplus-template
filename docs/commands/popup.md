# Extended Commands

**POPUP Console Command** |  **_Open NOMADS Popup Menu_**  
---|---  
  
## Format

**POPUP**  _popup_menu_name$,library_file$_

**_Where:_**

_popup_menu_name_ _$_ |  Name of the NOMADS popup menu object.  
---|---  
_library_file_ _$_ |  Name of the library file. If the location of the library file is **_different_** from the current directory, enter the **_full pathname_** of the library file.  
  
The _popup_menu_name_ _$_ and _library_file_ _$_ must be separated by either a **_comma_** or a **_semi-colon_**.

## Description

The **POPUP** command can be used to invoke the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for opening a NOMADS popup menu definition, if _popup_menu_name_ _$_ exists.

If _popup_menu_name_ _$_ does not exist, the popup **[Menu Bar Definition](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Popup%20Menu/Overview.md)** window will launch, treating this as a new popup menu definition.

_(The POPUP command was added in PxPlus 2025.)_

## Example:

POPUP mymenu;scrnlib.en

POPUP testmenu,c:\work\data\scrnlib.en
