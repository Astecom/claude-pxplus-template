# Security Manager

**Security Sign On**|   
---|---  
  
Once security has been set up, a **Sign on** window prompts users to enter their user ID and password when they select a specific object that has access restrictions.

For information on defining object security and the various locations where security can be applied, see **[Restricting Access](Restricting%20Access.md)**.

In addition to entering user ID and password, if **[Two-Factor Authentication](Overview.htm#tfa)** is set up, users will be required to enter a random 6-digit security code, which is sent to them in an email or text message, to verify their identity when they are logging on.

> This window consists of the following:

_Userid_ |  Unique name for identifying a user (not case sensitive).

#### **Important Note:**  
If the **[%NOMADS'AutoLogon](../../Appendix/NOMADS%20Variables/Overview.htm#autologon)** property is enabled and the user registration file contains a user ID that is **_identical_** to the user ID used for the Windows login, the password is **_not_** checked; therefore, the login window does **_not_** display.  
  
---|---  
_Password_ |  Password used to log on to the system (case sensitive). To check that the password is entered correctly, click the _Password_ eye button to toggle between displaying an encrypted and unencrypted password. Each new user is initially assigned a default password that is the same as the user ID. For example, if the user ID is SMITH, the default password is SMITH (case sensitive). To maintain system security, this default password should be changed as soon as possible by using the **[Password Change](Security%20Sign%20On.htm#pswd_chng)** window. _(The Password toggle button was added in PxPlus 2023.)_  
_Change Password_ |  When selected, invokes the **Password Change** window when the _Logon_ button is clicked. (By default, this check box is not selected.)  
_Logon_ |  Button used to access the system. If the log in is unsuccessful after three consecutive attempts, a message will display. The user then needs to exit and try logging on again.  
  
**_Two-Factor Verification_**

When **[Two-Factor Authentication](Overview.htm#tfa)** is set up, the **Two-Factor Verification** window displays when a user is required to provide identity verification before being allowed to log on. This window instructs the user to enter the security code sent to his/her email address or SMS phone number, depending on which one was provided in **[User Maintenance](Assigning%20Users%20to%20Classifications.md)**.

**_Example:_**

This example shows that the security code was sent to the user's email address. The user has entered that code and needs to click the _Verify_ button. This message is similar to the one that is sent to a user's SMS phone number.

This window consists of the following:

_(Input field)_ |  Enter the 6-digit security code sent to you by the system via email or text message.  
---|---  
_Verify_ |  **_(Available when security code is entered)_** Button that is used to verify that the security code entered matches the one sent by the system for validating the user's identity. The system allows a total of 10 minutes to enter correct code.  
_Resend_ |  The system sends a new security code to the user's email address or SMS phone number, which the user must enter for verification. This new code replaces the previous code that was sent.  
_Cancel_ |  Stops the verification process. User is not allowed to log on.  
  
If the user has provided **_both_** an email address and an SMS phone number in **User Maintenance** , the system displays the **Device Authentication Required** window to allow the user to select the preferred option:

This window consists of the following:

_Send it to your email account_ |  Security code will be sent in an email to the user's email address provided in **User Maintenance**.  
---|---  
_Send it to your phone as a text message_ |  Security code will be sent in a text message to the user's SMS phone number provided in **User Maintenance**.  
_Cancel_ |  Stops the verification process. User is not allowed to log on.  
  
**_Password Change_**

The **Password Change** window allows users to change their password. This window displays automatically when users are logging on to the system for the first time using their default password. After their initial logon, users can change their password at any time by selecting the _Change Password_ check box in the **Sign on** window prior to clicking the _Logon_ button.

> This window consists of the following:

_New Password_ |  Enter the new password. To check that the password is entered correctly, click the eye button to toggle between displaying an encrypted and unencrypted password.  
---|---  
_Confirm Password_ |  Enter the new password again. Must match the _New Password_ entry. To check that the password is entered correctly, click the eye button to toggle between displaying an encrypted and unencrypted password.  
_Update_ |  Button that is used to create the valid password and update the NOMADS user registration file.  
  
**_Forgot Password_**

When **[Two-Factor Authentication](Overview.htm#tfa)** is set up, if a user enters an incorrect password during system logon and the user's email address and/or SMS phone number are available, the system will provide a _Forgot Password_ option in the **Sign on** window:

> Selecting this option allows the system to re-authenticate the user for the purpose of resetting his/her password by displaying the following message:

> If the user responds _Yes_ , the system proceeds to verify the user's identity by sending a security code to the user's email address or SMS phone number. If the verification is successful, the **[Password Change](Security%20Sign%20On.htm#pswd_chng)** window displays to allow the user to create a new password.

If the user responds _No_ , no identity verification is done, and the user is returned to the **Sign on** window.
