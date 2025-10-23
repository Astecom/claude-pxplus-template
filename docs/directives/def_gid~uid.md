# Directives 

**DEF GID/UID** |  **_Define Group/User ID_**  
---|---  
  
##  Formats

1\. _Define Group ID:_ |  **DEF GID=**_groupID_**|**_groupname_ _$_ [,**ERR=**_stmtref_]  
---|---  
2\. _Define User ID:_ |  **DEF UID=**_userID_**|**_username$_**[ LOCAL ]**[,**ERR=**_stmtref_]  
  
**_Where:_**

_groupID_ |  Numeric UNIX/Linux group ID number.  
---|---  
_groupname_ _$_ |  UNIX/Linux group name.  
_userID_ |  Numeric UNIX/Linux user ID number.  
_username$_ |  UNIX/Linux user name or username to use when running in Windows.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

These directives allow you to override the effective UNIX/Linux user or group ID of a session if the operating system security allows it. If the _value_ is***** , the system reverts to original effective user or group ID.

For Windows, this directive merely changes the internal value returned in WHO or UID and the value stored in program headers when issuing a SAVE command. It is not validated by the operating system in any way.

The **LOCAL** option can be specified if the change of the user ID is only an internal change to the value returned in UID/WHO and is not passed to or validated by the operating system.

#### **Note:**  
Whether or not you can become a different user is governed by the operating system. If the operating system does not allow the change, an error will be returned.

_(The LOCAL option was added in PxPlus v9.10, build 9201.)_
