# Security Manager   
  
**User Maintenance**|   
---|---  
  
In **User Maintenance** , add/maintain users and assign one or more **[Security Classifications](Defining%20Classifications.md)** to each user defined. This information is used to restrict or allow access to specific objects. For information on defining object security and the various locations where security can be applied, see **[Restricting Access](Restricting%20Access.md)**.

#### **Important Note:**  
You **_must_** first set up security classifications prior to setting up users.

Only users assigned to the ADMIN classification are allowed to add/edit other users and security classifications. Users not assigned to this classification can only edit their own user information.

For added security, PxPlus provides the option to set up **[Two-Factor Authentication](Assigning%20Users%20to%20Classifications.htm#twofa)** to require users to validate their identity beyond entering their user name and password when logging on. If set up, two-factor authorization settings must also be defined for each user.

In addition, **[Webster+ System Security](../../../Webster/General%20Configuration.htm#nomads_security)** provides an option that allows it to use the NOMADS security files.

> To invoke **User Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Security_ category and select _User Definitions_.  
From the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the menu bar, select _Security > Users_.  
  
This window consists of the following:

_Userid_ |  Short form for the user's logon ID. String, maximum of 12 characters in length. Click the drop-down arrow for a list of existing user IDs.  
---|---  
_Name_ |  Free form (full) name of the individual user.  
**Last Signon** |  Displays the device name, date and time when the current user signed on. _(The Last Signon box was added in PxPlus 2023.)_  
_Two-Factor Authentication Setup_ |  **_(Available Only to Users with ADMIN Classification)_** Button that invokes the **[Two-Factor Authentication Setup](Two%20Factor%20Authentication.md)** window for defining the settings for Two-Factor Authentication on the system. _(The Two-Factor Authentication Setup button was added in PxPlus 2023.)_  
**Two-Factor Authorization******|  Define the Two-Factor Authorization settings for the user: |  _Verify (drop box)_ |  This option controls whether the user needs to provide Two-Factor identity verification after entering his/her user name and password. Click the drop-down arrow for a list of selections: |  _Never_ |  User is never prompted to verify his/her identity.  
---|---  
_On new/expired device_ |  User is required to verify his/her identity when signing on to a new or expired device.  
_Always_ |  User is always required to verify his/her identity.  
_Email_ |  Email address for communicating with the user. If Two-Factor Authentication is set up and an email address is entered, a **[Verify](Assigning%20Users%20to%20Classifications.htm#verifybtn)** button displays for validating the user's email address. If the verification is successful, the _Verify_ button is replaced with the text "Verified". If the email address is already assigned to another user, a message will display.  
_SMS Phone_ |  SMS phone number for sending text messages to the user. If Two-Factor Authentication is set up and an SMS phone number is entered, a **[Verify](Assigning%20Users%20to%20Classifications.htm#verifybtn)** button displays for validating the user's phone number for text messages. If the verification is successful, the _Verify_ button is replaced with the text "Verified".  
_Verify (button)_ |  If Two-Factor Authentication is set up ** _and_** an email and/or SMS phone number are entered, a _Verify_ button displays. Clicking this button invokes the **[Two-Factor Verification](Security%20Sign%20On.htm#two_factor)** window in which the user will enter the security code he/she receives for verification.  
  
_(The Verify drop box, Verify buttons, Email and SMS Phone fields were added in PxPlus 2023.)_  
  
**General Information** |  |  _Company_ |  User's company name.  
---|---  
  
_(The Company field was added in PxPlus 2023.)_  
  
**Security Classifications** |  Displays a list of known security classes for your system, along with their descriptions. This list includes the two default classes, ADMIN and USER, as well as any new classes that were added in **[Security Class Maintenance](Defining%20Classifications.md)**. Each new user must be assigned a security classification. To assign one or more classes, select the applicable _Class_ check box.  
_Reset Password on Next Logon_ |  When selected, the **Password Change** window will be invoked after the initial logon at run time to allow the password to be changed. When defining a new user, this option is initially checked and disabled to force the new user to change the password when logging on for the first time. After that, this option becomes enabled and unchecked. _(The wording change from "Reset Password" to "Reset Password on Next Logon" was added in PxPlus 2023.)_  
_Save_ |  Saves a new or modified user record. If Two-Factor Authentication is set up, a verified email address or SMS phone number is required before saving the user record. If an email address or SMS phone number was entered but the _Verify_ button was not selected, a message will display. _(The wording change from "Write User" to "Save" was added in PxPlus 2023.)_  
_Delete_ |  **_(Available Only for Users with ADMIN Classification)_** Removes the selected user record. Before proceeding, a message will ask you to confirm the deletion.

#### **Warning!**  
A User ID can be deleted from the system. **_This action is immediate and cannot be undone._**

_(The wording change from "Delete User" to "Delete" was added in PxPlus 2023.)_  
_Exit_ |  Closes **User Maintenance** without saving any changes.

#### **Note:**  
When a user has been added or modified, clicking the _Exit_ button does not automatically save changes. You must first click the _Save_ button to save any changes prior to exiting.  
  
## Setting Up Users

When setting up users for the first time, the following steps occur:

**Step** |  **Description**  
---|---  
1. |  The system detects that the NOMADS user registration file does not exist and asks to create it. Click _Yes_ to continue. (Click _No_ if you do not want to proceed with the set up process at this time. You can restart the set up later.)  
2. |  The system displays a notification that this default file will be created with a default user ID of ADMIN (default password ADMIN) and automatically assigned the default class of ADMIN. The ADMIN class provides full access and allows a user with this class to add/edit other users and security classes. Click _Yes_ to acknowledge this message. This allows the system to create the file and check for the existence of the security classification file to determine if security classes have been set up. (Click _No_ if you do not want to complete the set up process at this time. You can restart the set up later.) Depending on whether the security classification file exists, the system determines how it should proceed: |  |  If this file is not found, the system detects that no security classes have been defined and displays a message. The set up process is cancelled. You will be allowed to restart it after security classes are set up in **[Security Class Maintenance](Defining%20Classifications.md)**.  
---|---  
|  If this file is found, the system detects that security classes have been defined and launches the **[Security Sign On](Security%20Sign%20On.md)** window. After logging on as user ADMIN, the **[Password Change](Security%20Sign%20On.htm#pswd_chng)** window displays.  
3. |  When **User Maintenance** displays, the ADMIN user shows two default security classes, ADMIN and USER, along with any other classes that might have been previously added in **[Security Class Maintenance](Defining%20Classifications.md)**. The _Delete_ button is available only for users with the ADMIN classification. At this point, you can either add other users or click the _Exit_ button and add more users later if needed. In addition, **[Two-Factor Authentication](Overview.htm#tfa)** can be set up by any user with the ADMIN classification. _(Two-Factor Authentication Setup was added in PxPlus 2023.)_  
  
## See Also

**[Restricting Access](Restricting%20Access.md)**
