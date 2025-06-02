# Security Features

**Password Protection** |  **__**  
---|---  
  
There are several places in PxPlus to assign passwords for restricting access to programs and data files at the language level and in the development environment.

## Program Security

The **[PASSWORD](../../../directives/password.md)** directive may be used to place a user-specified password on the current _program code._ Simply load the program, enter the**PASSWORD** directive, followed by the desired _password,_ and then save the program. Once saved with a password, the program may not be listed or modified in any way without first removing the password by re-entering the**PASSWORD** directive with the correct password string.

If the password string is preceded by an*****_asterisk_ , the**PASSWORD** directive defines a common password which will be automatically applied to all passworded programs as they are loaded and assigned to all new programs.

Passwords are maintained within the actual object code of the program and are encrypted. If a password is placed on a program and subsequently forgotten, there is no simple way to remove it. If you need to remove a password, contact _PxPlus Support_ for assistance.

The **['EL'=](../../../parameters/el.md)** system parameter can be used to check the current encryption setting or set encryption to a new level.

## Data Passwording and Encryption

The**PASSWORD** directive can also be used to assign passwords to _files_ with the option to encrypt data. The**KEY=**_pswd_ _$_ option is required to**OPEN** files that have been passworded. Encryption is only available for VLR and EFF files. To define/change a password, you must have exclusive access to the file and it must be empty.

The different syntax formats for passwording data via the **[PASSWORD](../../../directives/password.md)** directive are listed and described in the _PxPlus Language Reference_.

The following table shows the usage, access level, and encryption associated with each syntax format used to assign a password to a data file:

**PASSWORD** _Format_ |  **_Access  
Level_** |  **_Without Password_** |  **_With Correct Password_** |  **_Encrypted_**  
---|---|---|---|---  
_Open_ |  _Read_ |  _Write_ |  _Open_ |  _Read_ |  _Write_| |   
**OPEN** |  0 |  No |  No |  No |  Yes |  Yes |  Yes |  No  
**WRITE** |  1 |  Yes |  Yes |  No |  Yes |  Yes |  Yes |  No  
**OPEN AND ON DATA** |  2 |  No |  No |  No |  Yes |  Yes |  Yes |  Yes  
**WRITE AND ON DATA** |  3 |  Yes |  Yes |  No |  Yes |  Yes |  Yes |  Yes  
  
Another level of data security may be added by introducing the hash function into the process. See **[Hash Function](Hash%20Function.md)**.

## Other Passwording in PxPlus

The following are some of the other password-related mechanisms used in the PxPlus development suite:

**_Data Dictionary_** |  The Data Dictionary Maintenance interface in the NOMADS toolset includes a Data File Password Utility that allows you to add, change or remove passwords in PxPlus data dictionary files.  
---|---  
**_Views System_** |  The PxPlus Views System allows you to lock View definitions with a password to control modification.  
**_Application Server_** |  The administrator is able to set passwording for server-side access, as well as on remote user access to the application server.  
**_Multi-Lines_** |  Creating a Multi-Line control in NOMADS and at the language level includes the option to cover password entries using the**$**_dollar sign_ symbol as substitute for each character entered. The **[Auto Complete](../../../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)** feature is disabled when the Multi-Line is used for a password field.
