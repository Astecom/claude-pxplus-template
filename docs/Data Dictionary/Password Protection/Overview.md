# Data Dictionary  
  
**Data File Password Utility** |  **__**  
---|---  
  
The **Data File Password Utility** allows you to add, change or remove passwords in PxPlus data dictionary files.

This utility is invoked from the **[PxPlus IDE Main Launcher](../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** by expanding the _Data Management_ category and selecting _Data File Password Utility_.

> This utility consists of the following:

_Table Name_ |  Enter an existing table name or click the Query button for a tree view of table names by Group. For information on creating a filter to locate a specific table name, see **[Filtering the Table Names Lookup](../Data%20Dictionary%20Maintenance/Filtering%20the%20Table%20Names%20Lookup.md)**. If the data file is already passworded, a password entry dialog box will display. If an invalid password is entered, the **Data File Password Utility** will exit automatically.  
---|---  
_Remove password from table_ |  **_(Available when data file has password)_** Check box to remove the existing password on a data file.  
_New Password_ |  New password to be applied to the data file.  
**Access** |  Access options are: |  _Password required to access table_ |  Toggle for password to be required for all IO operations. By default, this option is selected.  
---|---  
_Permit READ only access without password_ |  Toggle for read-only access when no password is supplied. Password is required for write access only.  
_Encrypt data_ |  Indicates that the data that is written to the file is encrypted.  
_Mask password_ |  Hides the password from view. By default, this option is selected.  
_Ok_ |  Saves any changes and closes the **Data File Password Utility**.  
_Cancel_ |  Closes the **Data File Password Utility** without saving changes.  
_Apply_ |  Saves the changes and keeps the **Data File Password Utility** open.
