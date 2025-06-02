# PxPlus Web Services

**Access OAuth2 Restricted Web Service**|   
---|---  
  
Web service access is restricted either via NOMADS security on a query or report or by security enabled in **[Web Services Maintenance](Web%20Services%20Maintenance.htm#security)**. To enable access to restricted Web services, OAuth2 clients must be defined using either **[OAuth2 Client Maintenance](NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Oauth2%20Client%20Maintenance.md)** or the **[OAuth2 Clients Object](Oauth2%20Clients%20Object.md)**.

Trying to access an OAuth2 restricted Web service normally will result in an Error 401.

To access an OAuth2 restricted Web service, an access token must be acquired and then passed in with the header of the Web service request. Access tokens expire after one hour, and once expired, a new access token must be requested to make a new Web service request.

_(OAuth2 security was added in PxPlus 2021.)_

## Get Access Token

To get an access token, make an HTTP POST request to the **MyServer/services/oauth2/token.pxp** OAuth2 authentication endpoint where **MyServer** is an EZWeb/Apache PxPlus Web server URL configured for Web service access. See **[Web Server Configuration](Web%20Services/Overview.htm#configuration)**.

The header of the request must include "Authorization: Basic " followed by the BASE64 encoded client ID and client secret separated by a **:** (_colon_).

The body of the request must be "grant_type=client_credentials".

The response from a successful request is a 200 status in the response header and the following JSON in the response data:

> {  
>  "access_token": "Access-Token",  
>  "token_type": "Bearer",  
>  "expires_in": 3600  
>  }

**_Where:_**

_access_token_ is the returned access token to be used to make the request to the restricted Web service. PxPlus only supports Bearer-type access tokens; therefore, _token_type_ will always be Bearer. Lastly, the lifetime (in seconds) of the access token is returned in _expires_in_. PxPlus OAuth2 access tokens have a one-hour lifetime; therefore, _expires_in_ will always be 3600.

The response from a bad request is either a 400 or 401 status in the response header and the following JSON response data:

> {  
>  "error": "invalid_client"  
>  }

**_Where:_**

_error_ returns the error type (either "invalid_client" or "unsupported_grant_type").

**_Example:_**

> clientId$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
> clientSecret$="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  
>  call "*WEB/BASE64;ENCODE_STR",clientId$+":"+clientSecret$,usrpsw$  
> extrahdr$="Authorization: Basic "+usrpsw$  
> requestData$="grant_type=client_credentials"  
>  call "*plus/web/request","https://www.myserver.com/services/oauth2/token.pxp",requestData$,resp$,resphdr$,"","",extrahdr$  
>  dim load jsonAuth${all}=resp$  
> authHdr$="Authorization: Bearer "+jsonAuth$["access_Token"]  
>   
>  curl -v https://www.myserver.com/services/oauth2/token.pxp -u "client_id:client_secret" -d "grant_type=client_credentials"

## Make Request with Access Token

Once an access token is acquired, request the Web service with an "Authorization: Bearer " followed by the access token in the header. Otherwise, the Web service request is the same as a request to a Web service with no OAuth2 security. See **[Submitting a Web Request](Web%20Services/Overview.htm#submitting)**. For details on the URL and query parameters used to call the various PxPlus Web services, see **[PxPlus Web Services](PxPlus%20Web%20Services.md)**.

The response from a successful request is a 200 status in the response header and the data requested; i.e. the query in CSV format, the report as a PDF document, the chart as a .PNG image, or a **[File Maintenance](NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Fmgen/Fmgen%20Introduction.md)** HTML page.

The response from a bad request is either a 401 or 404 status in the response header and an HTML page describing the error.

**_Example:_**

> authHdr$="Authorization: Bearer "+access_Token$  
>  call "*plus/web/request","https://www.myserver.com/services/service.pxp?id=myQuery","",resp$,resphdr$,"","",authHdr$  
>  if pos("200 OK"=resphdr$)<>0 \  
>  then csvData$=resp$ \  
>  else goto request_err  
>   
>  curl -v -X get https://www.myserver.com/services/service.pxp?id=myQuery -H "Authorization: Bearer access_Token"
