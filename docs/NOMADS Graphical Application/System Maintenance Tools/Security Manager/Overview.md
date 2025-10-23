# System Maintenance Tools  
  
**Security Manager** |  **__**  
---|---  
  
NOMADS incorporates an optional security system using security classifications to identify and control user access to the system. For example, panel controls can be set up to allow full access, view only access, or no access for a specific user classification.

For added security, PxPlus provides the option to set up **[Two-Factor Authentication](Overview.htm#tfa)** (TFA) to require users to validate their identity beyond their user name and password when logging on to the system.

_(The option to set up Two-Factor Authentication was added in PxPlus 2023.)_

**_Security Set Up_**

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

##  Two-Factor Authentication (TFA)

PxPlus provides the option to set up Two-Factor Authentication (TFA), which can be used to increase system security. When Two-Factor Authentication is set up and a user is logging on to the system, the system will send an email or text message to the user to confirm authorization. This email or text message will contain a random 6-digit number that the user will be prompted to enter in order to proceed.

_(The option to set up Two-Factor Authentication was added in PxPlus 2023.)_

The fundamental purpose of Two-Factor Authentication is to help assure the identity of users, as it requires users to supply their user name and password and confirm their identity by proving they have access to other user resources (email or text account).

To set up Two-Factor Authentication, the system administrator needs to supply to the system an email server with account and/or a text message (SMS) provider and account. Ideally, both can be set up.

Each user then needs to provide a verifiable email address and/or an SMS compatible phone number. This information will be used to contact the user when he/she logs on. If only one of these is provided, then that option will be used. If both an email address and SMS phone number are provided, the user will be allowed to select which one he/she wishes to use for verification.

Once Two-Factor Authentication is obtained, it can be saved on the device used for a period of time, thereby allowing the users to defer from having to re-verify themselves every time they use that device. For example, a user might be on his/her desktop computer, in which case the administrator may feel that requiring authentication on every logon may be burdensome. As such, the administrator can set the system so that authentications remain active for a number of days or maybe for a month.

System administrators can access the Two-Factor Authentication settings through **[User Maintenance](Assigning%20Users%20to%20Classifications.md)**, which is invoked from the IDE Main Launcher or NOMADS _Security_ menu. When running **User Maintenance** with an ADMIN account, a button is presented that allows access to the Two-Factor Authentication settings. When running **User Maintenance** with a non-ADMIN account, only the current user's information can be altered.

Two-Factor Authentication also provides the ability for end users to confirm their identity when they forget their password. During system logon, if a user enters an incorrect password and the user's email address and/or SMS phone number are set up, the system will provide a _Forgot Password_ option. Selecting this option allows the system to re-authenticate the user for the purpose of resetting his/her password.

## OAuth2 Web Service Security

OAuth2 security can be added to restrict access to PxPlus Web services. First, OAuth2 clients must be defined using either **[OAuth2 Client Maintenance](Oauth2%20Client%20Maintenance.md)** or the **[OAuth2 Clients Object](../../../Oauth2%20Clients%20Object.md)**. Next, access is restricted either via NOMADS security on a query or report or by security enabled in **[Web Services Maintenance](../../../Web%20Services%20Maintenance.htm#security)**. For information on how to access restricted PxPlus Web services, see **[Access OAuth2 Restricted Web Service](../../../Access%20Oauth2%20Web%20Service.md)**.

#### **Note:**  
A Web service with security enabled cannot be used with the dashboard or as an IDE task.

_(OAuth2 security was added in PxPlus 2021.)_

## See Also

**[*SECURE Security Control](../../../utilities/secure.md)**  
**[Two-Factor Authentication Setup](Two%20Factor%20Authentication.md)  
[Security Sign On](Security%20Sign%20On.md)**
