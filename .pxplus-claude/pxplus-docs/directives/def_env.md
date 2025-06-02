# Directives

**DEF ENV** |  **_Add, Change or Delete Environment Variables_**  
---|---  
  
## Format

**DEF ENV(**_name$_**)** = _value$_

**_Where:_**

_name$_ |  Contains the name of the environment variable to add, change or delete. The name must be less than 256 characters and only contain non-space printable characters below 0x7F and not an **=**_(equals sign)_.  
---|---  
_value$_ |  Defines the value for the environment variable. If null, then the variable, if defined, will be deleted. Maximum length allowed is 8192 characters.  
  
## Description

The **DEF ENV( )** directive allows you to add, change or delete environment variables from the current process and any subsequent spawned process.

_(The DEF ENV directive was added in PxPlus 2024.)_
