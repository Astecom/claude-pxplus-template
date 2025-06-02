# Extended Commands

**NOM Console Command** |  **_Invoke NOMADS Session Manager_**  
---|---  
  
## Format

**NOM** [  _panel_ __name$,library_file$_ ]

**_Where:_**

_panel_name_ _$_ |  Name of the NOMADS panel object to open.  
---|---  
_library_file_ _$_ |  Name of the library file. If the location of the library file is **_different_** from the current directory, enter the **_full pathname_** of the library file.  
  
The _panel_name_ _$_ and _library_file_ _$_ must be separated by either a **_comma_** or a **_semi-colon_**.

## Description

The **NOM** command invokes the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for accessing the NOMADS graphical application development toolset.

The **NOM** [  _panel_name$,library_file$_ ] command opens a NOMADS panel object in the **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)** if _panel_name_ _$_ exists. If _panel_name_ _$_ does not exist, it will be treated as a new panel definition.

If the panel was created with the **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)**, a message will ask you to choose between opening the panel in the File Maintenance Generator or in the NOMADS Panel Designer.

_(The ability to open a file maintenance panel in the File Maintenance Generator was added in PxPlus 2025.)_

## Example:

NOM clients;scrnlib.en

NOM depts,c:\work\data\scrnlib.en
