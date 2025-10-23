# Extended Commands

**QRY Console Command** |  **_Open NOMADS Query_**  
---|---  
  
## Format

**QRY**  _query_name$,library_file$_

**_Where:_**

_query_name_ _$_ |  Name of the NOMADS query object.  
---|---  
_library_file_ _$_ |  Name of the library file. If the location of the library file is **_different_** from the current directory, enter the **_full pathname_** of the library file.  
  
The _query_name_ _$_ and _library_file_ _$_ must be separated by either a **_comma_** or a **_semi-colon_**.

## Description

The **QRY** command can be used to invoke the **[NOMADS Session Manager](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.htm#sessionmgr)** for opening a NOMADS query definition if _query_name_ _$_ exists.

If _query_name_ _$_ does not exist, a prompt for selecting the **[Query Type](../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Defining%20a%20Query.htm#type)** will display, treating this as a new query definition.

_(The QRY command was added in PxPlus 2025.)_

## Example:

QRY clientsqry;scrnlib.en

QRY deptsqry,c:\work\data\scrnlib.en
