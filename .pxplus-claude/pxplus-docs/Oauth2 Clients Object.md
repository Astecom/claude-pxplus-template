# PxPlus Web Services

**OAuth2 Clients Object**|   
---|---  
  
## Usage

The OAuth2 clients object can be used to maintain OAuth2 clients programmatically and without the need for a user interface. The OAuth2 clients object can also be used to add OAuth2 security to any Web service built with PxPlus.

It is possible to implement your own OAuth2 access token server using the OAuth2 clients object if the one provided with PxPlus (_/services/oauth2/token.pxp_) does not meet an application's requirements. See **[Methods](Oauth2%20Clients%20Object.htm#methods)**.

#### **Important Note:**  
You must first set up **[Security Classifications](NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Defining%20Classifications.md)** and at least an ADMIN **[User](NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Assigning%20Users%20to%20Classifications.md)** prior to setting up OAuth2 clients.

_(The OAuth2 Clients object was added in PxPlus 2021.)_

**_Instantiating the OAuth2 Clients Object_**

To instantiate the OAuth2 clients object using the handle **oauth2_clients** (where **oauth2_clients** can be any numeric variable), enter the following command:

> **oauth2_clients=new("*web/services/oauth2/clients"** ,_adminUsername$_ ,_adminPassword$_**)**

The _adminUsername_ _$_ and _adminPassword_ _$_ arguments are **_optional_** and are only needed if you are using the **[DeleteClient](Oauth2%20Clients%20Object.htm#delete_client)**, **[SaveClient](Oauth2%20Clients%20Object.htm#save_client)** and **[SaveNewClient$](Oauth2%20Clients%20Object.htm#save_newclient)** methods so that the object can create/modify users.

To access any of the available methods, the OAuth2 clients object handle **oauth2_clients** is used, followed by an **'** (_apostrophe_) and the method (with the desired parameters).

**_Examples:_**

NewClient$=oauth2_clients'SaveNewClient$(newClientName$,securityClass$)

if oauth2_clients'DeleteClient(oldClientName$)=0 \  
then msgbox "Failed to delete client: "+oldClientName$

##  Methods

The interface supports the following **_methods_** :

**Method** |  **Description**  
---|---  
**DeleteClient**(_clientName_ _$_) |  Deletes the client with the given client name from the OAuth2 clients file and deletes associated OAuth2 client user. Returns 1 on success; otherwise, returns 0.  
**GetClient$**(_clientName_ _$_) |  Given a client name, returns the client authorization information as a **SEP** delimited string. The following fields are returned in this order: Client ID  
Client Secret  
Access Token Key  
Security Class Returns an empty string if there was an error.  
**ListClients$( )** |  Returns a list of all client names as a **SEP** delimited string. Returns an empty string if there was an error.  
**NewAccessToken$**(_clientId_ _$_ , _clientSecret_ _$_ , _expiry_) |  Generates a new OAuth2 access token with the given expiry for the client if the client ID and client secret are valid. Returns the new access token if successful; otherwise, returns an empty string.  
**NewClientSecret$( )** |  Generates and returns a new client secret.  
**NewClientTokens$( )** |  Generates new client tokens (client ID, client secret and access token key) and returns as a **SEP** delimited string. The following fields are returned in this order: Client ID  
Client Secret  
Access Token Key  
**SaveClient**(_clientName_ _$_ , _clientId_ _$_ , _clientSecret_ _$_ , _accessTokenKey_ _$_ , _securityClass_ _$_) |  Saves client to the OAuth2 clients file and saves associated OAuth2 client user. Returns 1 on success; otherwise, returns 0.  
**SaveNewClient$**(_clientName_ _$_ , _securityClass_ _$_) |  Saves a new client to the OAuth2 clients file and adds OAuth2 client user. Returns the new client authorization information as a **SEP** delimited string. The following fields are returned in this order: Client ID  
Client Secret  
Access Token Key Returns an empty string if there was an error.  
**ValidateAccessToken$**(_accessToken_ _$_) |  Validates that the access token is a well-formed access token and is not expired. Then, logon using associated OAuth2 client user to allow access to secured resources. Returns the security class that the access token has been granted access for as a string if access token validated. Returns an empty string if the access token is not valid or there was an error.  
  
## Example

**_Create a New OAuth2 Client:_**

> oauth2_clients=new("*web/services/oauth2/clients",adminUsername$,adminPassword$)  
>  read data from oauth2_clients'SaveNewClient$("ABC Shipping", "USER") to client_Id$,client_Secret$,access_Token_Key$

**_Revoke Access to Compromised Client by Changing Client Secret:_**

> oauth2_clients=new("*web/services/oauth2/clients",adminUsername$,adminPassword$)  
>  read data from oauth2_clients'GetClient$("ABC Shipping") to client_Id$,client_Secret$,access_Token_Key$,security_Class$  
>  oauth2_clients'SaveClient("ABC Shipping", client_Id$, oauth2_clients'NewClientSecret$() ,access_Token_Key$,security_Class$)

**_Add OAuth2 Security to PxPlus-built Web Service:_**

> !  
>  ! Allow access to secure query via OAuth2 authentication passed in the HTTP header as an authorization: bearer token  
>  if len(%http_authorization$)>=7 and lcs(mid(%http_authorization$,1,7))="bearer " \  
>  {  
>  !  
>  ! Parse BASE64 bearer token and convert it to get the access token  
>  base64AccessToken$=stp(mid(%http_authorization$,8,err=Return_auth_err),"B")  
>  accessToken$=cvs(base64AccessToken$,"BASE64URL:ASCII",0)  
>  !  
>  ! Validate the access token using the OAuth2 clients object, this will also do a logon as the client to allow access to secure resource  
>  oauth2clients=new("*web/services/oauth2/clients",err=Return_auth_err)  
>  if oauth2clients'ValidateAccessToken$(accessToken$)="" \  
>  then gotoReturn_auth_err  
>  drop object oauth2clients,err=*next  
>  }
