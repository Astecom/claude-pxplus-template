# Security Manager

**Two-Factor Authentication Setup**|   
---|---  
  
**[Two-Factor Authentication](Overview.htm#tfa)** increases system security by requiring users to validate their identity beyond entering their user name and password before they are allowed to log on. When Two-Factor Authentication is set up and a user is logging on, the system sends the user an email or text message to confirm authorization. See **[Security Sign On](Security%20Sign%20On.htm#two_factor)**.

_(Two-Factor Authentication Setup was added in PxPlus 2023.)_

To set up Two-Factor Authentication, click the _Two-Factor Authentication Setup_ button in **[User Maintenance](Assigning%20Users%20to%20Classifications.md)**. This button is available only to users with the ADMIN classification.

The following window displays:

> This window consists of the following:

_Authentication Required_ |  This option controls whether Two-Factor Authentication will be set up or disabled on the system. Click the drop-down arrow for a list of selections: |  _Disabled_ |  **_(Default)_** Two-Factor Authentication is not set up.  
---|---  
_Optional by user_ |  Two-Factor Authentication is determined on a user-by-user basis, depending on the **[Verify](Assigning%20Users%20to%20Classifications.htm#twofa)** drop box selection in **User Maintenance**.  
_Mandatory_ |  Two-Factor Authentication is required for all users. All users **_must_** provide a verified email address and/or SMS phone number before they are allowed to log on.  
_Application Name_ |  Enter the application name that will be used in verification emails and/or text messages sent to users.  
**Email Server** |  Define the email server that will be used to validate the user: |  _SMTP Server_ |  Internet address of the email server to use to send out email verification requests.  
---|---  
_Port Number_ |  Port number to use to connect to the email server. Generally, this will be 465 for a secure connection or 587 for a START TLS connection. **_(Default: 465)_**  
_Use SSL/TLS_ |  Indicates if you want to connect to the email server securely, thereby encrypting all communications between your system and the server. ** _(Defaults to On - Recommended)_**  
_Send From_ |  Email address that you want the system to use as the "From" address in any emails that are sent.  
_Userid_ __|  User ID that is needed to sign on to the email server. Generally, this will be the same as the _Send From_ email address. **_(Defaults to the Send From address)_**  
_Password_ |  Password associated with the User ID. It will be saved in an encrypted format in the system control file to minimize the potential of it being exposed. Click the _Password_ eye button to toggle between displaying an encrypted and unencrypted password. This is useful for checking that the password is entered correctly.  
_Test Email_ |  Button that invokes the **Test Email** window for entering an email address to send a test email to (defaults to the _Send From_ email address). It is strongly recommended to use this button to ensure the settings are correct before saving:  
**SMS Text Message Server** |  Define the SMS server that will be used to validate the user: |  _SMS Provider_ |  Service provider that will be used to issue your SMS messages.

#### **Important Note:**  
You must first set up an account with any service provider you choose from the list of providers on the **[*TOOLS/SMS](../../../utilities/sms.md)** Help page.  
  
---|---  
_Account Information_ |  Account information as required by the selected service provider.

#### **Important Note:**  
See the **[*TOOLS/SMS](../../../utilities/sms.md)** Help page for details on the format of this field when entering account information, as this varies based on the service provider chosen.  
  
_Test SMS_ |  Button that invokes the **Test SMS** window for entering a phone number to send a test SMS message to. It is strongly recommended to use this button to ensure the settings are correct before saving:  
**Authentication Duration New/Expired Devices** | 

#### **Note:**  
Applies only to users with the **[Verify](Assigning%20Users%20to%20Classifications.htm#twofa)** option in **User Maintenance** set to _On new/expired device_.

When a user is authenticated, the system can be set to defer future authentication requests for a period of time (_Minutes_ , _Hours_ or _Days_), depending on the device the user used. This can range from 0 minutes (forces re-authentication ever time the user logs on) to 99999 days (effectively never ask again). The period chosen can be different when the user is on a Desktop system (using NOMADS) or a Web Browser (using iNomads).  
_Save_ |  Saves the settings and closes the **Setup Two-Factor Authentication** window.  
_Cancel_ |  Closes the **Setup Two-Factor Authentication** window without saving changes.  
  
## See Also

**[User Maintenance](Assigning%20Users%20to%20Classifications.md)**  
**[Restricting Access](Restricting%20Access.md)**  
**[Security Sign On](Security%20Sign%20On.md)**
