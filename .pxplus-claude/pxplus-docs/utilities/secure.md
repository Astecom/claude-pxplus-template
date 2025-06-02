# Utility Routines

***SECURE** |  **_Security Control_**  
---|---  
  
## Description

The ***SECURE** object is used to control security within NOMADS/iNomads. It stores and then validates user IDs, passwords and associated security class definitions.

## Methods and Properties

The following **_methods_** (in alphabetical order) are supported:

**Method** |  **Description**  
---|---  
**AddUser**(_Userid_ _$,Name$,Classlist$,Password$_) |  Add user.  
**CanDo2FA** _(Userid$)_ |  Checks to see if user can do Two-Factor Authentication. _(The CanDo2FA method was added in PxPlus 2023.)_  
**ChgUser**(_Userid_ _$,Name$,Classlist$,Password$_) |  Change user.  
**ChgUserClasses**(_Userid_ _$,Classlist$_) |  Change class list.  
**ChgUserEmail** _(Userid$,Email$)_ |  Change user's email address. _(The ChgUserEmail method was added in PxPlus 2023.)_  
**ChgUserName**(_Userid_ _$,Name$_) |  Change user name.  
**ChgUserPswd**(_Userid_ _$,Password$_) |  Change password.  
**ChkClass**(_Userid_ _$,Class$_) |  Return True/False.  
**ChkClassRights$**(_Userid_ _$,Classes$_) |  Returns "", "V", or "F".  
**ClrClass**(_Userid_ _$,Class$_) |  Removes a class.  
**DelUser**(_Userid_ _$_) |  Delete user.  
**GetClass$**(_Userid_ _$,Index_) |  Get class (loop through index).  
**GetToken$**( ) |  Returns a token that can be used to pass sign-on for one minute.  
**Load_TFA**( ) |  Load **[Two-Factor Authentication](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.htm#tfa)** (TFA) values into the Secure object. Only allowed if user has ADMIN privileges. Returns 1 if successful, 0 if failure. _(The Load_TFA method was added in PxPlus 2023.)_  
**LogOff**( ) |  Logoff and drops the Secure object if it was logged on.  
**LogOn**(_Userid_ _$,Password_or_Token$_) |  Logon using password and/or token.  
**Save_TFA**( ) |  Encrypt and save **[Two-Factor Authentication](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.htm#tfa)** (TFA) values onto user control file. Only allowed if user has ADMIN privileges. Returns 1 if successful, 0 if failure. _(The Save_TFA method was added in PxPlus 2023.)_  
**SetClass**(_Userid_ _$,Class$_) |  Add a single class.  
**SetUserField**(V _ariable$, Value$_) |  This function is used to define user variables that will be loaded into %usr._variable_ _$_ and made accessible to the application. **_Where:_** |  _Variable$_ |  Name of the string variable that will be prefixed with "%usr." whose value will be saved and loaded.  
---|---  
_Value$_ |  Contains the value that will be saved and loaded.  
  
This routine will allow values to be saved to the profile information for the current user. A maximum of 1K worth of data values may be saved.

**_Example:_**

%objSecure'SetUserField("CellPhone","4165551212")

This would result in the value %usr.CellPhone$ being set to "4165551212" on subsequent sessions for the current user.

_(The SetUserField method was added in PxPlus 2023.)_  
  
**UpgradeSecurity**( ) |  Migrate OLD security file format.  
**VerifyByEmail**(_EmailAddress_ _$_**[**_,Name$_**]**) |  Send user Two-Factor Authentication confirmation email. _Name$ is optional._ Returns 1 if successful, 0 if failure. _(The VerifyByEmail method was added in PxPlus 2023.)_  
**VerifyBySMS**(_SmsNumber_ _$_**[**_,Name$_**]**__) |  Send user Two-Factor Authentication confirmation text message. _Name$ is optional._ Returns 1 if successful, 0 if failure. _(The VerifyBySMS method was added in PxPlus 2023.)_  
**Verify2FA**(_Userid_ _$_) |  Send either a text message or email (depending on capabilities and user preference) to user to confirm Two-Factor Authentication and await/confirm response. Returns 1 if successful, 0 if failure or user did not enter proper confirmation number. _(The Verify2FA method was added in PxPlus 2023.)_  
  
The following **_properties_** (in alphabetical order) are supported:

**Property** |  **Description**  
---|---  
**ChangePswdReqd** |  Flags if password change required.  
**Company$** |  Company name for current user. _(The Company$ property was added in PxPlus 2023.)_  
**Email$** |  User email address, if verified. _(The Email$ property was added in PxPlus 2023.)_  
**LogonFailed** |  Flag indicating a logon failed. _(The LogonFailed property was added in PxPlus 2023.)_  
**NeedNewPasswd** |  Flag to indicate new password needed.  
**Name$** |  User name.  
**Retries** |  Number of allowed logon attempts. (For NOMADS, defaults to 3. For iNomads, defaults to the value of **%inomads'failed_logon_tries**.) _(The Retries property was added in PxPlus 2023.)_  
**SMSno$** |  User SMS phone number, if verified. _(The SMSno$ property was added in PxPlus 2023.)_  
**TFA_Application$** |  Application name that will be used in verification emails and/or text messages sent to users. _(The TFA_Application$ property was added in PxPlus 2023.)_  
**TFA_Nomads_Time** |  Time for NOMADS/Windows application. _(The TFA_Nomads_Time property was added in PxPlus 2023.)_  
**TFA_Nomads_UOM$** |  Unit of Measure: M - Minutes  
H - Hours  
D - Days _(The TFA_Nomads_UOM$ property was added in PxPlus 2023.)_  
**TFA_SMS_Auth$** |  SMS account information. _(The TFA_SMS_Auth$ property was added in PxPlus 2023.)_  
**TFA_SMS_Provider$** |  SMS service provider. _(The TFA_SMS_Provider$ property was added in PxPlus 2023.)_  
**TFA_SMTP_From$** |  User ID to send email from. _(The TFA_SMTP_From$ property was added in PxPlus 2023.)_  
**TFA_SMTP_Port** |  SMTP port number. _(The TFA_SMTP_Port property was added in PxPlus 2023.)_  
**TFA_SMTP_Pswd$** |  Password for account. _(The TFA_SMTP_Pswd$ property was added in PxPlus 2023.)_  
**TFA_SMTP_Srvr$** |  SMTP mail server. _(The TFA_SMTP_Srvr$ property was added in PxPlus 2023.)_  
**TFA_SMTP_SSL** |  Indicator if SSL/TLS used to connect. _(The TFA_SMTP_SSL property was added in PxPlus 2023.)_  
**TFA_SMTP_User$** |  User ID to connect with. _(The TFA_SMTP_User$ property was added in PxPlus 2023.)_  
**TFA_State$** |  Two-Factor Authentication (TFA) state: Y - Enabled  
N - Disabled  
O - Optional by user _(The TFA_State$ property was added in PxPlus 2023.)_  
**TFA_Web_Time** |  Time for Web access (iNomads, Webster). _(The TFA_Web_Time property was added in PxPlus 2023.)_  
**TFA_Web_UOM$** |  Unit of Measure: M - Minutes  
H - Hours  
D - Days _(The TFA_Web_UOM$ property was added in PxPlus 2023.)_  
**Unsecured** |  Current states (0 - Not signed on).  
**UserID$** |  Current User ID.  
**UseTFA$** |  Indicates if user requires Two-Factor Authentication: N - Never  
Y - On new/expired devices  
A - Always _(The UseTFA$ property was added in PxPlus 2023.)_  
  
## Examples

**_Example 1_** __ \- Get the current User Name:

> ! Get the current username  
> secObj=new("*secure");  
>  Who$=secObj'UserID$;  
>  drop object secObj

**_Example 2_** \- Logon with User Name and Password:

> ! Logon given a user and password  
> secObj=new("*secure");  
> secObj'Logon(userId$,token$);  
>  drop object secObj

## See Also

**[Security Manager](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Overview.md)**
