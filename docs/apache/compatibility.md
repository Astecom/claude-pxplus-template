# Apache HTTP Interface

**Compatibility with Web Server** |   
---|---  
  
## Differences between the Apache Interface and the PxPlus Web Server 

For the most part, applications designed to work with the PxPlus Web Server will run without modification under the Apache HTTP Interface. The following is a list of some of the differences you will see in the interface.

  * To access the body of the request, the Apache interface loads the complete body contents into the global variable **%BODY_CONTENT$** instead of requiring you to access the information via the memory file contained in **%BODY_BUFF**. Existing logic that attempts to parse the body of the request should be changed to use the global variable **%BODY_CONTENT$**.
  * When processing multi-part forms, such as those used when uploading data files, the field contents will be extracted automatically from the request and loaded into the appropriate variables. See [**Uploading Files**](multipart.md) via the browser.
  * The global functions **_fn_ _%__HtmlEncode_** and **_fn%HtmlDecode_** are not presently provided.
  * Since each session is an independent process, global variables, files, and objects will never be maintained across sessions. Using the Web Server, it was possible, although not desirable, to maintain these across different sessions from different workstations. The Apache interface makes sure this will not happen.
  * Not all global variables available in the Webserver are present in the Apache HTTP interface.
  * By default, the **START_UP** program from the **_cgi_ _-bin_** directory is run as opposed to the **_*web/start_up_** program. If desired, you can add a **SetEnv PVXSTART *web/start_up** to your Apache configuration file to replicate the Web Server functionality.


