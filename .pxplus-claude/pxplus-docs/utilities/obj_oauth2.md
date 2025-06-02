# Utility Routines

***OBJ/OAUTH2** |  **_Authenticate with Third-Party oAuth2 Web Services_**  
---|---  
  
## Invocation

_objHandle_ =**NEW("*obj/oauth2")**

## Description

The **"*obj/oauth2"** object performs oAuth2 authorization with third-party Web services. It allows you to get authorized with Web services such as Google, Salesforce, or any Web service that uses oAuth2 authorization.

Not all oAuth2 Web services need to use this object for authorization. Only oAuth2 authorization using grant type **authorization_code** needs to use the object. oAuth2 that uses grant type **client_credentials** is simpler and can be handled with a simple Web request to the token URL. See **[Access OAuth2 Restricted Web Service](../Access%20Oauth2%20Web%20Service.md)** for an example.

**_How It Works_**

You set up a UserID/Client with the Web service provider. They, in turn, will provide you with a Client ID and a secret code. They will also provide you with two URLs: one to the Authorization server, and one to the Token server (these may be the same). Once you have this information, the process consists of two stages.

The **_First_** stage is to have the user grant your application (based on Client ID and secret code) access to an account of the provider (e.g. grant your application access to a Salesforce account). If you have done this step before and saved the Refresh token, you can skip this step.

First stage steps are:

1. |  The application identifies itself to the provider, giving it the Client ID and secret code.  
---|---  
2. |  The service provider returns PVX Plus a URL that the user must go to in order to authorize access.  
3. |  The user authorizes access to the provider via a Web browser.  
  
The **_Second_** stage is where you can actually access the user data from the server. To do this, you need to get a temporary Access token. This token must be included in the HTML header for any subsequent requests. How long the Access token is good for varies, but generally, it is only a few minutes. When it expires, you will need to request a new Access token.

If you have saved a Refresh token, you can skip the First stage and directly pass it to the provider (assuming it is still valid). The server will grant you temporary access by giving you a temporary Access token.

Second stage steps are:

1. |  Request an Access token and a Refresh token from the Web service provider using the **[Token_URL$](obj_oauth2.htm#tokenurl)**.  
---|---  
2. |  Make a Web request to the Web service passing in the Access token via the HTML header.  
3. |  If this is the first time, save the Refresh token to avoid logging in the next time.  
  
## Methods and Properties

The following **_methods_** are supported:

**Method** |  **Description**  
---|---  
**Enable_Certification([**_msg_ _$_**])** |  Initiate the oAuth2 authorization process with the oAuth2 agent. |  _msg_ _$_ |  **_(Optional)_** You can provide a message that is displayed to the user after he/she has approved access to his/her account to the application.  
---|---  
**Get_Access_Token( )** |  Get the Access and Refresh tokens from the oAuth2 token server.  
**Get_Authorization_URL$([**_scope$,_**[**_prompt$_**]])** |  Get the URL that is used to get the user to allow the application access to his/her account. |  _scope$_ |  **_(Optional)_** Some oAuth2 Web services require you to specify a scope of the access required. Specify the scope if the Web service requires it. What you specify depends on the Web service. For example, "https://www.googleapis.com/auth/spreadsheets%20https://www.googleapis.com/auth/drive" is used to allow access to Google Drive and Google Sheets.  
---|---  
_prompt$_ |  **_(Optional)_** Specifies whether the user is prompted and for what when they request authorization. For details, visit **<https://developers.google.com/identity/openid-connect/openid-connect#prompt>**.  
**Retrieve_Certification( )** |  Get the current refresh token from the oAuth2 agent. This can only be done if oAuth2 authorization has been completed before.  
  
The following **_properties_** are supported:

**Property** |  **Description**  
---|---  
**Access_Token$** |  The Access token returned via oAuth2 authorization that can be used to access the Web service. The Access token will expire; therefore, new ones will need to be requested.  
**Agent_URL$** |  URL for the oAuth2 agent that acts as a go-between for your PxPlus application and the oAuth2 Web service. If not set, this defaults to the PVX Plus hosted oAuth2 agent. If set, this must be a URL to a self-hosted oAuth2 agent. See **[Agent](obj_oauth2.htm#agent)**.  
**Authorization_URL$** |  URL to the oAuth2 authorization server. If you set the **service$** property to one of the known services, then this is set for you.  
**Certification_Token$** |  Unique ID returned by the oAuth2 agent used to identify and secure the oAuth2 requests.  
**Client_ID$** |  The Client ID is a public identifier of your application. This is given to you by the provider of the Web service.  
**Client_Secret$** |  The Client secret is a secret string known only by your application and the oAuth2 authorization server. This is given to you by the provider of the Web service.  
**Jsondata$** |  Read-only JSON response from the last call to **[Get_Access_Token( )](obj_oauth2.htm#getaccesstoken)**. This is useful if the Web service returns other information with the Access token, such as a special URL to make Web service requests from.  
**LastError$** |  Read-only property used to get information about the last error encountered.  
**Refresh_Token$** |  The Refresh token returned via oAuth2 authorization that can be used to acquire an Access token without having to login again. Once retrieved, you should save this in a secure way so it can be used later.  
**Service$** |  Optional name of the Web service to perform oAuth2 authorization with. This can be set to one of the following to automatically set the authorization and token URLs for those services: "salesforce"  
"google"  
"microsoft" If using a different service, do not set this property, and set the **Authorization_URL$** and **Token_URL** **$** properties manually. _(Support for the "microsoft" service was added in PxPlus 2025.)_  
**Token_URL$** |  URL to the oAuth2 token server. If you set the **service$** property to one of the known services, then this is set for you.  
  
##  Agent

It is possible to use the PVX Plus hosted oAuth2 agent **www.pvxplus.com/oauth.pvp**. It is also possible to self-host the oAuth2 agent. Self-hosting may be desirable if you want to avoid relying on the PVX Plus servers being up or if you want to improve security.

Self-hosting the agent is simple. Copy the files from the ***web/services/oauth2/agent** directory to the Web server **docroot** directory. Then, set the **[Agent_URL$](obj_oauth2.htm#agenturl)** property to **my_server_url/oauthagent.pvp**. There is no requirement for the files to be copied to the **docroot** directory specifically, You can have the files anywhere as long as the Web server has rules set up so it can access the files. The only requirement is that the files in the ***web/services/oauth2/agent** directory **_must_** all be together in the same directory.

You may need to register the agent URL used with the Web service so that it knows it is safe to redirect to that URL. This is usually done from a Web browser via a site provided by the Web service. For example, for Google, you can set this via the Google API console.

_(Support for self-hosting the oAuth2 agent was added in PxPlus 2023.)_

## Example

**_Example 1:_**

> ! This is an example of doing a fill authorization  
>  clientID$="this_should_be_your_client_id"  
>  clientSecret$="this_should_be_your_client_secret"  
>  !  
>  ! Init oAuth2 object  
>  oAuth2=new("*obj/oauth2")  
>  oAuth2'Service$="salesforce"  
>  oAuth2'client_id$=clientID$  
>  oAuth2'client_secret$=clientSecret$  
>  !  
>  oAuth2'Enable_Certification("Do you consent to allow access of your Salesforce account to example app?")  
>  !  
>  ! Wait a little for it to process  
>  wait 1  
>  !  
>  ! Get user logon URL  
>  url$=oAuth2'Get_Authorization_URL$()  
>  !  
>  ! Open login URL in users default browser  
>  system_helpurl$  
>  !  
>  ! Wait for user to complete sign-in and allow us access  
>  input "Press any key to continue after logging into account and allowing PxPlus access:",*;  
>  print ""  
>  !  
>  oAuth2'Get_Access_token() ! Gets a short lived token  
>  !  
>  ! Save the refresh token  
>  serial "token",err=*next  
>  open purge (hfn)"token"  
>  print (lfo)oAuth2'Refresh_token$  
>  close (lfo)  
>  ! Set this into header for all subsequent requests  
>  extrahdr$="Authorization: Bearer "+oAuth2'Access_token$  
>  ! Response ALSO included which server has users data  
>  dim oAuth2$  
>  dim load oAuth2${all}=oAuth2'jsonData$  
>  ! So we need to derive the system that has the user data  
>  base_url$=oAuth2$["instance_url"]+"/services/data/v30.0"  
>  drop object oAuth2 ! Done with this object  
>  ! So now let us run a query  
>  q$="SELECT NAME FROM Account"  
>  url$=base_url$+"/query/?q="+cvs(q$,"ASCII:URL")  
>  call "*plus/web/request",url$,"",resp$,resphdr$,"","",extrahdr$  
>  dim json$  
>  dim load json${all}=resp$  
>  print "Formatted reply:",'LF',dim(list edit json${all})

**_Example 2:_**

> ! This is an example of using a saved refresh token to re-authorize  
>  clientID$="this_should_be_your_client_id"  
>  clientSecret$="this_should_be_your_client_secret"  
>  !  
>  ! Init oAuth2 object  
>  oAuth2=new("*obj/oauth2")  
>  oAuth2'Service$="salesforce"  
>  oAuth2'client_id$=clientID$  
>  oAuth2'client_secret$=clientSecret$  
>  ! Read the token we just got  
>  open (hfn)"token";  
>  read record (lfo)x$;  
>  close (lfo)  
>  oAuth2'Refresh_token$=x$  
>  ! Gets a short lived token  
>  oAuth2'Get_Access_token()  
>  ! Set this into header for all subsequent requests  
>  extrahdr$="Authorization: Bearer "+oAuth2'Access_token$  
>  ! Response ALSO included which server has users data  
>  dim oAuth2$  
>  dim load oAuth2${all}=oAuth2'jsonData$  
>  ! So we need to derive the system that has the user data  
>  base_url$=oAuth2$["instance_url"]+"/services/data/v30.0"  
>  drop object oAuth2 ! Done with this object  
>  ! So now let us run a query  
>  q$="SELECT NAME FROM Account"  
>  url$=base_url$+"/query/?q="+cvs(q$,"ASCII:URL")  
>  call "*plus/web/request",url$,"",resp$,resphdr$,"","",extrahdr$  
>  dim json$  
>  dim load json${all}=resp$  
>  print "Formatted reply:",'LF',dim(list edit json${all})

## See Also

**[Web Services](../Web%20Services/Overview.md)**
