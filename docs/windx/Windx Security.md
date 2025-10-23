# WindX™ Thin-Client

**WindX Security**|   
---|---  
  
When running WindX on your workstation, PxPlus 2016 provides you with the ability to enable security. This allows you to control access to your system and apply restrictions that will protect your workstation from unauthorized access. Once security is enabled, each time that a host tries to execute a program or access a file on the workstation, security settings are first checked to determine if authorization has been granted by the user to perform the operation. WindX will intercept the following operations to check for user authorization:

  * Opening (and reading) a file
  * Creating a file
  * Deleting a file
  * Writing to a file (except for a file that was created on the same session)
  * Running any PxPlus logic (remote CALL, Object, or Execute except CALL *windx.utl)
  * Running an OS command with [WDX]/[LCL] (SYSTEM_HELP, SYS or INVOKE)



You can set a **[WDXTRUST](../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark3)** environment variable on the workstation (client) to define any number of trusted servers (semi-colon separated) to which WindX security will allow full access to the workstation files and programs without requesting user authorization. _(as of PxPlus 2017)_

## Enabling Security

When launching a WindX connection on your workstation for the first time, the following message asks if you want to enable security:

> If you select _Disable_ , security is not enabled, and access to your system is automatically granted without restrictions or notification.

If you select _Enable_ (default), security is enabled. When entering a command that either requires access to a file on the workstation or tries to run a program on the workstation or operating system, the following **Allow Remote Access** window will display, prompting you with an authorization request from the host to perform the indicated operation:

> This window shows the operation for which the host is requesting authorization. For example, this could be logic that the host is trying to run on the workstation, a request to open a file, create a file or write to a file.

Click the _Deny Access_ or _Allow Access_ radio button to indicate your response to the host's request for authorization. Clicking the octagon button also toggles between selecting the _Deny Access_ or _Allow Access_ buttons. (Default is _Deny Access_.)

Click the drop-down arrow to select the scope of the access being denied or allowed. Available selections are:

_This specific request only_ |  **_(Default)_** Deny/allow access for the current operation only. You will be notified for the next operation.  
---|---  
_Similar requests during this session_ |  Deny/allow access for the current and similar operations during the current session only. You will be notified for a different operation during this session. Once you exit this session, you will need to reapply the settings at the start of a new session.  
_All requests during this session_ |  Deny/allow access for all operations during the current session only. Once you exit this session, you will need to reapply the settings at the start of a new session.  
_All similar requests for this host_ |  Deny/allow access for the current and similar operations from this host only. You will be notified if this host requests a different operation or if a different host requests any operation.  
_All similar requests from any host_ |  Deny/allow access for the current and similar operations from any host. You will be notified if any host requests a different operation.  
_All requests from this host_ |  Deny/allow access for all operations from this host only. You will be notified if a different host requests any operation.  
_All requests from any host_ |  Deny/allow access for all operations from any host.  
  
If the request is denied, the server will receive an Error #61: Authorization Failure.

## Clearing Security Settings

If you need to change the security settings you have set, you will first need to clear the existing settings. To do this, select the _Reset WindX Authorization_ option from the system menu (PVX Plus globe on the Command window) or press the CTRL-SHIFT-INSERT keys. Using either of these methods invokes a message that asks if you want to reset all authorization/security settings.

After choosing to clear the settings, you will be prompted to set the security again and select a new default setting.

##  Simple Client-Server Public Key Validation

When using the **[PxPlus Simple Client-Server interface](../simplecs/clienthost.md)** and a SECURE connection (one that uses SSL certificates for security), the system will attempt to validate the server public key.

By default, on the first connect, the client process will save the server public key on the workstation and check that it does not change on subsequent connections. If the key changes, a warning will be issued to the user. The user can decide to accept the connection or reject it, as a change in the key could indicate that the host server is **_not_** the one the user thought he was connecting to due to network spoofing.

In addition, the client program (*plus/cs/client) can be provided a **[PUBKEY](../simplecs/clienthost.htm#pubkey)** option that will ask the user to confirm the initial connection key and/or match the public key value with a specific value.

_(Public Key Validation was added in PxPlus 2017.)_
