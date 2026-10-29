# System Maintenance Tools

**Security Manager** |  **_ _**  
---|---  
  
NOMADS incorporates an optional security system using security classifications to identify and control user access to the system. For example, panel controls can be set up to allow full access, view only access, or no access for a specific user classification.

For added security, PxPlus provides the option to set up **[Two-Factor Authentication](Overview.htm#tfa)** (2FA), which requires users to verify their identity using a second method - such as email, text message, or an authenticator app - in addition to their user ID and password when logging into the system.

_(The option to set up Two-Factor Authentication was added in PxPlus 2023.)  
(The ability to integrate to a third-party authenticator app was added in PxPlus 2026.)_

## Security Set Up

The security system is maintained by accessing the _Security_ category on the **[PxPlus IDE Main Launcher (Windows)](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** or **[PxPlus Web IDE](../../../PxPlus%20IDE/IDE%20Main%20Launcher_Web.htm#webide)**, or by selecting the _Security_ menu in the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)**.

To set up security, two key components, classifications and users, **_must_** be defined:

  |  **_Classifications_** |  In **[Security Class Maintenance](Defining%20Classifications.md)**, define your system's classifications of users (i.e. ADMIN, SALES, MANAGER).  
---|---|---  
  |  **_Users_** |  In **[User Maintenance](Assigning%20Users%20to%20Classifications.md)**, create User IDs and assign one or more security classifications to each user defined. If desired, Two-Factor Authentication can also be set up by any user with the ADMIN classification.  
  
Once your system's classifications and users are identified, you can restrict or allow access to specific objects by using **[Object Security Definition](Restricting%20Access.htm#objectsecurity)**.

In addition, **[Webster+ System Security](../../../Webster/General%20Configuration.htm#nomads_security)** provides an option that allows it to use the NOMADS security files.

**_How the System Works_**

By default, security classifications are not assigned; therefore, there is no security and all users are granted full access. When you assign security classifications to specific objects, only users in the assigned classifications are allowed access. For example, a panel control will not display to users who are not in the assigned classification.

For information on defining object security and the various locations where security can be applied, see **[Restricting Access](Restricting%20Access.md)**.

##  Two-Factor Authentication (2FA)

PxPlus provides the option to set up Two-Factor Authentication (2FA) to enhance system security. When Two-Factor Authentication is set up, users logging into the system must verify their identity by entering a six-digit security code sent via email, text message, or an authenticator app.

_(The option to set up Two-Factor Authentication was added in PxPlus 2023.)  
(The ability to integrate to a third-party authenticator app was added in PxPlus 2026.)_

The primary purpose of Two-Factor Authentication (2FA) is to help ensure user identity by requiring **_both_** something the user knows (user ID and password) **_and_** something the user has access to (email account, device for text messages, or an authenticator app).

**_Setting Up Two-Factor Authentication_**

Two-Factor Authentication (2FA) can be set up using email, SMS text messaging, and/or an authenticator app. Based on the methods selected, the system administrator must set up the required services within the system. Users must then provide the necessary information for the chosen authentication methods, such as a verified email address, an SMS-compatible phone number, or a registered authenticator app. This information is used to verify the user's identity during login.

If only one authentication method is specified, that method will be used automatically. If more than one authentication method is specified (email, SMS, authenticator app), the user can choose the method to use for verification at login.

Once Two-Factor Authentication is obtained, it can be saved on the device used for a period of time, thereby allowing the users to defer from having to re-verify their identity every time they log in from the same device.

For example, a user might be working on a desktop computer in a secure office environment, in which case the system administrator may feel that requiring authentication at every logon may be burdensome. In such cases, the administrator can set the system so that authentications remain active for a number of days or maybe for a month.

System administrators can access the Two-Factor Authentication settings through **[User Maintenance](Assigning%20Users%20to%20Classifications.md)**, which is launched from the IDE Main Launcher or NOMADS _Security_ menu. When **User Maintenance** is run using an **ADMIN** account, a button is available to access the Two-Factor Authentication settings. When **User Maintenance** is run using a **non-ADMIN** account, only the current user's information can be modified.

Two-Factor Authentication also allows end users to confirm their identity if they forget their password. During system logon, if a user enters an incorrect password and has a valid email address, SMS phone number or authenticator app on file, the system will display a _Forgot Password_ option. Selecting this option allows the system to re-authenticate the user for the purpose of resetting his/her password.

See **[Two-Factor Authentication Setup](Two%20Factor%20Authentication.md)**.

**_Login Process with Two-Factor Authentication_**

This table outlines the key steps for logging in using Two-Factor Authentication:

1. |  **Enter Credentials** The user enters his/her User ID and Password in the **Sign on** window.       
---|---  
2. |  **Select Authentication Method (if applicable)** If **_more than one_** authentication method is specified for the user in **User Maintenance** , the **Device Authentication Required** window displays, showing the authentication methods enabled for that user. The user then selects the method to use for verification. If **_only one_** authentication method is specified in **User Maintenance** , then the **Two-Factor Verification** window (see **Step 4**) displays that method automatically.       
3. |  **Receive Security Code** The user receives a randomly generated six-digit security code.  
4. |  **Enter and Verify the Security Code** The **Two-Factor Verification** window displays. The user enters the six-digit security code and selects **Verify**. **_Example:_** This **Two-Factor Verification** window is for an email verification:       
5. |  **Complete Sign-In** If the security code is valid, authentication is successful. The user is granted access. If the security code is invalid or expired, the user must re-enter a valid security code or request a new security code by selecting **Resend**.  
  
## OAuth2 Web Service Security

OAuth2 security can be added to restrict access to PxPlus Web services. First, OAuth2 clients must be defined using either **[OAuth2 Client Maintenance](Oauth2%20Client%20Maintenance.md)** or the **[OAuth2 Clients Object](../../../Oauth2%20Clients%20Object.md)**. Next, access is restricted either via NOMADS security on a query or report or by security enabled in **[Web Services Maintenance](../../../Web%20Services%20Maintenance.htm#security)**. For information on how to access restricted PxPlus Web services, see **[Access OAuth2 Restricted Web Service](../../../Access%20Oauth2%20Web%20Service.md)**.

#### **Note:**  
A Web service with security enabled cannot be used with the dashboard or as an IDE task.

_(OAuth2 security was added in PxPlus 2021.)_

## See Also

**[*SECURE Security Control](../../../utilities/secure.md)**  
**[Two-Factor Authentication Setup](Two%20Factor%20Authentication.md)  
[Security Sign On](Security%20Sign%20On.md)  
[User Maintenance](Assigning%20Users%20to%20Classifications.md)**

 

 

 
