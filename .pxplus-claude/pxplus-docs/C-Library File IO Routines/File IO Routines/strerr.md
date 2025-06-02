# C-Library File IO Routines

**PVK_strerr( )** |  **_Return Last Error Message_**  
---|---  
  
## Format

char * **PVK_strerr**(void);

## Description

This function returns the text of the current error status. Values are:

> "Can't open data file"

> "Bad file handle number"

> "Invalid key specified"

> "End of file reached"

> "Bad file type -- Not a KEYED file"

> "Key number invalid"

> "Length invalid"

> "No system memory available"

> "File error: Offset error"

> "File error: Read of key buffer failed"

> "File error: Key header address invalid"

> "File error: Key size invalid"

> "File error: Record size invalid"

> "File error: Seek failed"

> "File error: Read failed"

> "File error: Truncated read"

> "Bad internal function code"

> "File type is indexed"

> "Write command failed"

> "Keyed Io returned bad address"

> "Deleted record chain corrupted"

> "No EOF marker found in keyed file"

> "File header or record busy -- retry later"

> "File full"

> "Registration Failure"

> "Duplicate key not allowed"

> "File error: Record length invalid"

> "File error: Invalid Segment number"

> "Unable to access Indexed file header"

> "File error: Decompression failed"

> "File error: Password Incorrect"

> "Bad record offset"

> "File does not exist"

> "Unknown operator in restrict routine"

> "Access Violation: File is in Read Only mode"

> "Begin transaction without ending previous transaction"

> "Rollback/Commit without Begin transaction"

> "File header is busy -- retry later"
> 
> "Required information missing"
> 
> "Views object version wrong"

> > > 
