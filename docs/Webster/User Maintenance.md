# Webster+ Setup and Configuration

**User Maintenance**|   
---|---  
  
When the security system in Webster+ is enabled, you will need to define the users who are allowed access to the system.

To run the **User Maintenance** utility, select **Users** from the top menu of the Webster+ system setup. The following window is displayed:

> The maintenance program begins by displaying **_your_** user information. If you are part of the _Admin_ group, the system will allow you to enter/edit other users; otherwise, you can only edit your own user information.

This window consists of the following:

_User Name_ |  A **_unique_** name used to identify a user and allow access to the system. If this User Name is known, the system will fill in the fields with the current user information; otherwise, all the user information fields will be cleared.  
---|---  
_User #_ |  **_(Display Only)_** Internal user number assigned to the user.  
**User information** |  Additional user information: |  _First Name_ |  User's first name.  
---|---  
_Last Name_ |  User's last name.  
_Password_ |  Password used to logon.  
_Re-enter Password_ |  Re-enter the password to confirm it is correct.  
_Email Address_ |  User's email address. This must be unique in the system, as this can also be used to logon.  
_Cell Phone Number_ |  **_(Optional)_** Cell phone number used to send SMS messages.  
_Company_ |  **_(Optional)_** Company name.  
_Default template_ |  **_(Optional)_** If provided, this will override the group and system default **[Template](General%20Configuration.htm#dflttemplate)** settings for this user. _(The Default template option was added in PxPlus 2023 Update 1.)_  
_User Start page_ |  **_(Optional)_** If provided, this will override the group and system default **[Starting Page](General%20Configuration.htm#dfltstartpg)** for this user. _(The Default template option was added in PxPlus 2023 Update 1.)_  
_Security Group_ |  Security group assigned to the user.  
_Disabled_ |  Check box used to block user access to the system. The user record is not deleted.  
**User status** |  **_(Display Only)_** |  _User created_ |  Date and time when user was created.  
---|---  
_Last signon_ |  Date and time when user last signed on to the system.  
_Last known IP address_ |  IP address used to connect to the system.  
_Email verified_ |  Date and time when user confirmed email address.  
_SMS verified_ |  Date and time when user confirmed SMS.  
_Pending two-step code_ |  Displays code sent to user for two-step verification until user successfully logs on.  
_Invalid code attempts_ |  Displays number of times user has entered an invalid code in an attempt to gain access.  
_Save_ |  Click this button to record the information for the user. The system will validate the information provided, including confirming that both passwords match.  
_Delete_ |  Click this button to delete the user.  
_Reset_ |  Reverts back to the previously saved information for the user.  
  
#### **Note:**  
Users cannot edit their own group, disable or delete themselves, regardless of the group to which they belong.
