# Extended Commands  
  
**FMGEN Console Command** |  **_Open File Maintenance Generator_**  
---|---  
  
## Format

**FMGEN** _fm_name$,library_file$_

**_Where:_**

_fm_name_ _$_ |  Name of the file maintenance object.  
---|---  
_library_file_ _$_ |  Name of the library file. If the location of the library file is **_different_** from the current directory, enter the **_full pathname_** of the library file.  
  
The _fm_name_ _$_ and _library_file_ _$_ must be separated by either a **_comma_** or a **_semi-colon_**.

## Description

The **FMGEN** command can be used to invoke the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for opening a file maintenance panel in the NOMADS **[File Maintenance Generator](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** if _fm_name_ _$_ exists.

If _fm_name_ _$_ does not exist, the File Maintenance Generator will launch, treating this as a new file maintenance panel definition.

_(The FMGEN command was added in PxPlus 2025.)_

## Example:

FMGEN clients;scrnlib.en

FMGEN depts,c:\work\data\scrnlib.en
