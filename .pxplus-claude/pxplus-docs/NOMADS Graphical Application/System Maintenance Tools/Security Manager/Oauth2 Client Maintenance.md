# Security Manager

**OAuth2 Client Maintenance**|   
---|---  
  
**OAuth2 Client Maintenance** is used for adding and maintaining OAuth2 clients. OAuth2 clients are required to access PxPlus Web services that have access restricted either via NOMADS security on the query or report or by security enabled in **[Web Services Maintenance](../../../Web%20Services%20Maintenance.htm#security)**. For information on how to access restricted PxPlus Web services, see **[Access OAuth2 Restricted Web Service](../../../Access%20Oauth2%20Web%20Service.md)**.

OAuth2 allows for strong security by properly managing OAuth2 clients. If a user's system has been compromised, you can change the client secret, thus revoking the compromised credentials access. If a user no longer needs access or access needs to be revoked, the client can be deleted, thus revoking the user access.

OAuth2 clients can be managed programmatically and/or without a graphical user interface. See **[OAuth2 Clients Object](../../../Oauth2%20Clients%20Object.md)**.

#### **Important Note:**  
You must first set up **[Security Classifications](Defining%20Classifications.md)** and at least an ADMIN **[User](Assigning%20Users%20to%20Classifications.md)** prior to setting up OAuth2 clients.

_(The OAuth2 Client Maintenance utility was added in PxPlus 2021.)_

To invoke **OAuth2 Client Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher (Windows)](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Security_ category and select _OAuth2 Client Maintenance_.  
From the **[PxPlus Web IDE](../../../PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)** |  Select _Security_ > _OAuth2 Client Maintenance_.  
  
The following window is displayed:

> This window consists of the following:

_Name_ |  Name of the OAuth2 client. Existing clients are displayed in the list box.  
---|---  
_Create_ |  Invokes a separate panel for creating an OAuth2 client. See **[Create/Update OAuth2 Client](Oauth2%20Client%20Maintenance.htm#create_client)**.  
_Update_ |  Invokes a separate panel for updating an existing OAuth2 client. See **[Create/Update OAuth2 Client](Oauth2%20Client%20Maintenance.htm#create_client)**.  
_Delete_ |  Deletes the selected OAuth2 client from your system.

#### **Warning!**  
Deleting a client will revoke access to any secured PxPlus Web services for any user using that client.  
  
_Exit_ |  Closes **OAuth2 Client Maintenance**.  
  
##  Create/Update OAuth2 Client

**OAuth2 Client Maintenance** is used for creating a new or updating an existing OAuth2 client.

> This window consists of the following:

_Name_ |  Text input field for the name of the new OAuth2 client. (Will be **_Read Only_** if updating an existing OAuth2 client.)  
---|---  
_Client ID_ |  **_(Read Only)_** Auto-generated client ID. The client ID cannot be changed for an existing client.  
_Client Secret_ |  **_(Read Only)_** Auto-generated client secret. The client secret can be changed by using the _Generate New Secret_ button.  
_Security Class_ |  Drop down list of the defined security classes. The security class defines what access this OAuth2 client has to the system.  
_Copy Client Credentials_ |  Copies the client ID and client secret to the Clipboard as _client_id:client_secret_. This is useful for sharing the client credentials with users.  
_Generate New Secret_ |  Generates a new client secret. This is useful for revoking access to a possibly compromised client.  
_Save_ |  Saves the newly created/updated OAuth2 client and returns to the **OAuth2 Client Maintenance** main panel.  
_Cancel_ |  Cancels the creating or updating of the OAuth2 client without saving any changes and returns to the **OAuth2 Client Maintenance** main panel.
