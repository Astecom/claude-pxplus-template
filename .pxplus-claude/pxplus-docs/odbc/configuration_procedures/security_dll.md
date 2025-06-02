# Configuration Procedures

**Security DLL**|   
---|---  
  
The purpose of the security DLL is to provide PxPlus developers with a means of adding user and file security within the PxPlus SQL ODBC Driver.

The security DLL is a stand-alone DLL created by an application developer based on the specifications outlined in the **[API](security_dll.htm#api)** below. The security DLL should consist of four function calls that are needed by the PxPlus SQL ODBC Driver: one for checking if logon information is valid, a second for determining if a user has access to a table, a third for determining if a user may see a column, and a fourth for providing a user sign-off procedure.

## Using the Security DLL

The local PxPlus SQL ODBC Driver and the SQL Server use the _pvodbsec.ini_ (32-bit) or _pvodbsec64.ini_ (64-bit) file to determine the location and filename of the security DLL. The INI file should have the following format:

> [Security]  
>  DLL=xxxxxxxx.DLL

If the INI file cannot be found or opened, or the DLL cannot be found or opened, then logon information validation will only happen on Sage MAS 90 or Sage MAS 200 systems and passwords will not be validated and should not be used. If it is not a MAS system, then no validation will occur.

The client PxPlus SQL ODBC Driver works a little differently and requires the security DLL (the same one used on the server side) to be in the PxPlus SQL ODBC Driver install directory (i.e. C:\PVX Plus Technologies\PxPlus SQL ODBC Driver). This is so that the client can present the user with a user interface for entering in the logon information, which will be passed onto the server for validation.

##  API

**PVXLogon(** **)**

This function is used for checking if logon information is valid. The parameters, pClientBuffer and nClientBufferSize, are marshalled to the client to enable the security DLL to be used for client-side UI. UserDef will be for the security DLL's use only and will not be marshalled across the C/S connection.

#### **Note:**  
When processing the client-side UI, the security DLL should not report a failure. The call should return to the server and the server should report the failure.  
  
If the client-side call to PVXLogon does report failure, then the server-side DLL will not be called again. The failure will be marshalled up to the server, and the PVXLogon function will do whatever cleanup it needs without calling the security DLL then report a failure to the client.

**_BOOL PVXLogon(szUser, szCompany, szPswd, szSID, fSilent, szDirectory, UserDef, pClientBuffer, nClientBufferSize, nError, szErrMsg)_**

**_Where:_**

_char *szUser_ |  _[in, out]_ Pointer to a 64-byte buffer with a null terminated string containing the User ID.  
---|---  
_char *szCompany_ |  _[in, out]_ Pointer to a 128-byte buffer with a null terminated string containing Company information this buffer can be modified and is cascaded to subsequent function calls.  
_char *szPswd_ |  _[in, out]_ Pointer to a 64-byte buffer with a null terminated string containing the Password.  
_char *szSID_ |  _[in, out]_ Pointer to a 16-byte buffer with a null terminated string containing the Session ID.  
_int_  _*fSilent_ |  _[in, out]_ Operate silently? 0 = No Display errors, warnings or prompts to the user  
1 = Yes Return immediately without user interaction  
2 = Yes Server-side processing  
4 = No Client-side processing  
8 = Yes Client-side processing  
_char *szDirectory_ |  _[in, out]_ Pointer to a 256-byte buffer with a null terminated string containing the data file directory.  
_char *UserDef_ |  _[in, out]_ Pointer to a buffer which is cascaded to subsequent function calls and can be used to maintain a pointer to a user defined structure.  
_char *pClientBuffer_ |  _[in, out]_ Pointer to a buffer that will be marshalled to and from the server for client-side UI.  
_int_  _*nClientBufferSize_ |  _[in, out]_ Size of the user defined buffer. This is required for the Client/Server version to marshal the buffer to the client side.  
_int_  _*nError_ |  _[in, out]_ Error Code 0 = Failure  
1 = Success  
2 = Need more information *  
_char *szErrMsg_ |  _[in, out]_ Pointer to a 256-byte buffer with a null terminated string, which can be used to provide a descriptive error message of why the function failed. This is initialized to nulls by the Pvkio DLL.  
**_*_**_This return value should only apply to server-side processing. If a 2 is received when calling a server-side DLL, then the same function will be called on the client-side, and if that call is successful, then the result will be returned to the server for processing. The server-client loop will only be done MAX_ATTEMPTS times before the Pvkio driver will return a failure status. If this return value is received when not on the server-side, then it will be considered the same as a failure._  
  
**_Return Values:_**

This function will return 0 (failure) or 1 (success).

**PVXLogoff(** **)**

This function is for closing a connection and should do any required housekeeping.

**_BOOL PVXLogoff(szUser, szCompany, szPswd, szSID, fSilent, UserDef, nError, szErrMsg)_**

**_Where:_**

_char *szUser_ |  _[in]_ Pointer to a 64-byte read-only buffer with a null terminated string containing the User ID.  
---|---  
_char *szCompany_ |  _[in]_ Pointer to a 128-byte buffer with a null terminated string.  
_char *szPswd_ |  _[in]_ Pointer to a 64-byte buffer with a null terminated string.  
_char *szSID_ |  _[in, out]_ Pointer to a 16-byte buffer with a null terminated string containing the Session ID.  
_int_  _fSilent_ |  _[in]_ Operate silently? 0 = No - Display errors, warnings or prompts to the user  
1 = Yes - Return immediately without user interaction  
_char *UserDef_ |  _[in, out]_ Pointer to user defined buffer.  
_int_  _*nError_ |  _[in, out]_ Error Code. A PVKIO error code.  
_char *szErrMsg_ |  _[in, out]_ Pointer to a 256-byte buffer with a null terminated string, which can be used to provide a descriptive error message of why the function failed. The buffer is initialized to nulls by the Pvkio DLL.  
  
**_Return Values:_**

This function will return 0 (failure) or 1 (success). If the return value is a failure, the Pvkio function PVLogoff( ) will report the failure, but no other action will be taken.

**PVXAccessFile(** **)**

This function will be called to return the pathname to a given table; this is used to control/restrict access to the file. It will be passed the directory and table name plus the pathname as was read from the DDF or INI file (thus it may be ="AR"+%c+"/AR1"+%c+".SOA"). The function is required to alter the pathname as needed. Whatever pathname is returned by the function will still go under the standard check for expression and will be prefixed with the root directory should it be necessary (first character not / or second character not ":").

**_int_** ** _PVXAccessFile_ _(szUser, szCompany, szPswd, szSID, bSilent, bReadOnly, szTableName, szDirectory, szPrefix, szPath, szCatalog, UserDef, szErrMsg)_**

**_Where:_**

_char *szUser_ |  _[in]_ Pointer to a 64-byte read-only buffer with a null terminated string containing the User ID.  
---|---  
_char *szCompany_ |  _[in]_ Pointer to a 128-byte buffer with a null terminated string containing Company information supplied during the PVXLogon request.  
_char *szPswd_ |  _[in, out]_ Pointer to a 64-byte buffer with a null terminated string to be returned from the function call containing the Password, if one is required to access the file.  
_char *szSessionID_ |  _[in]_ Pointer to a 16-byte buffer with a null terminated string containing the Session ID.  
_int_  _bSilent_ |  _[in]_ Operate silently? 0 = No  
1 = Yes  
_int_  _bReadOnly_ |  _[in]_ Read-only access requested? 0 = No  
1 = Yes  
_char *szTableName_ |  _[in]_ Pointer to a 64-byte read-only buffer with a null terminated string containing the Table name to access.  
_char *szDirectory_ |  _[in]_ Pointer to a 256-byte buffer with a null terminated string containing the directory, which can be altered and subsequently used when accessing the physical file.  
_char *szPrefix_ |  _[in]_ Pointer to a 1024-byte buffer with a null terminated string containing a list of alternate paths separated by ';' which can be subsequently used when accessing the physical file.  
_char *szPath_ |  _[in, out]_ Pointer to a 256-byte buffer with a null terminated string to be returned from the function call containing the actual file/pathname to use for the table.  
_char *szCatalog_ |  _[in]_ Pointer to a buffer with a null terminated string containing the path and filename of the definition file.  
_char *UserDef_ |  _[in, out]_ Pointer to a buffer originally supplied to the PVXLogon function call.  
_char *szErrMsg_ |  _[in, out]_ Pointer to a 256-byte buffer with a null terminated string, which can be used to provide a descriptive error message of why the function failed. The Pvkio DLL initializes the buffer to nulls.  
  
**_Return Values:_**

This function will return 0 if the file is not to be accessed or 1 if the file can be accessed.

**PVXAccessColumn(** **)**

This function is used to determine whether the user has the ability to see the field or the field's data.

**_int_** ** _PVXAccessColumn_ _(szUser, szCompany, szPswd, szSID, bSilent, szTableName, szPath, szColumnName, szCatalog, fOption, UserDef, szErrMsg)_**

**_Where:_**

_char *szUser_ |  _[in]_ Pointer to a 64-byte read-only buffer with a null terminated string containing the User ID.  
---|---  
_char *szCompany_ |  _[in]_ Pointer to a 128-byte buffer with a null terminated string containing Company information supplied during the PVXLogon request.  
_char *szPswd_ |  _[in]_ Pointer to a 64-byte buffer with a null terminated string containing the password returned by the PVXAccessFile( ) function.  
_char *szSessionID_ |  _[in]_ Pointer to a 16-byte buffer with a null terminated string containing the Session ID.  
_int_  _fSilent_ |  _[in]_ Operate silently? 0 = No  
1 = Yes  
_char *szTableName_ |  _[in]_ Pointer to a 64-byte read-only buffer with a null terminated string containing the Table name to access.  
_char *szPath_ |  _[in]_ Pointer to a 256-byte buffer with a null terminated string to be returned from the function call containing the actual file/pathname to use for the table as returned by the PVXAccessFile( ) function.  
_char *szCatalog_ |  _[in]_ Pointer to a buffer with a null terminated string containing the path and filename of the definition file.  
_char *szColumnName_ |  _[in]_ Pointer to a 64-byte read-only buffer with a null terminated string containing the column name.  
_int_  _*fOption_ |  _[in, out]_ The users access to the column will be determined by the return value of this parameter. Values are: 0 User sees the field and its data  
1 User sees the field but the data is never shown  
2 The field and data are hidden from the user  
_char *UserDef_ |  _[in, out]_ Pointer to a buffer originally supplied to the PVXLogon( ) function call.  
_char *szErrMsg_ |  _[in, out]_ Pointer to a 256-byte buffer with a null terminated string, which can be used to provide a descriptive error message of why the function failed. The Pvkio DLL initializes the buffer to nulls.  
  
**_Return Values:_**

This function will return 0 if the field is not to be accessed or 1 if the field can be accessed.
