# Webster+

**Webster+ Application Design**|   
---|---  
  
Within Webster+, the application starts upon receipt of a URL request from a browser. The URL will cause the **_webster.pxp_** program to be run and may contain the name of an HTML page (**pg$** =_xxx_) to load or program to run (**tx$** =_xxx_), along with various other application specific parameters.

Any program or page referenced in the URL that starts with an ***** (_asterisk_) indicates that the request is for a Webster+ utility program/page. The system will therefore look for that program/page in the **_*webster_** directory.

#### **Note:**  
You can override any of these programs/pages by creating your own version and placing it in your application directory, replacing the ***** (_asterisk_) in the file name with an **_** (_underscore_). Therefore, things such as the page **_*default_** would first look to see if there is an  __default.html_ page in your application or otherwise use _*webster/pages/default.html_.

If neither a page nor a program is specified, the system will load the page **_*default_**.

The response to an initial request **_must_** be an HTML page. If the initial request was for a page, then the specified page will be run through the Webster+ page binding logic. The value specified in the **_pg_ _$=_** parameter should be the name of an HTML or plain text file. If there is no suffix on the name supplied, the suffix "_.html_ " will be applied (thus _pg_ _$=page1_ becomes file _page1.html_). If desired, you can supply a simple text file with no HTML, only text and short codes; the Webster+ bind logic will convert this into an HTML file.

If the initial request indicated a program was to run, the program must define the pathname to the HTML to generate and place it in **[%Webster'BindFile$](Bind%20Object%20Methods.md)**.

#### **Note:**  
Technically, if the application does not want to have Webster+ generate the page, it can output the HTML directly by printing the HTML to the %PRINT_FN channel. However, this is **_not_** advisable.

The page should contain input fields, buttons, or menu items that either accept/display values or provide a way to send 'events' to the applications. Input fields, such as standard inputs, check boxes, radio buttons or lists, will have their respective values returned to the application. These, along with button and menu items, can have events associated with them.

These events will be received by the program identified in the HTML panels **[form** _xxx_**]** short code. When an event is triggered, the event name will be passed to the program in the variable **__event$_**.

Once the initial page has been sent, the application can, upon receipt of an event, regenerate and resend the page, send a different page, or update values on the page.

If the application code does nothing other than EXIT, the same page is regenerated and sent. If desired, the application can set the **%Webster'BindFile$** to a new page and it will be sent. To update fields on the page, the application can call **[%Webster'Update( )](Webster%20Object%20Methods.htm#update)** with the name of the field/fields to update and their values.

A number of Update routines are available that allow updating a single field, a list of fields specified in an IOList, or replace a complete field such as a list box or grid.

**_Example:_**

Below is an example of a simple Webster+ page:

> <!DOCTYPE html>  
>  <html>  
>  <head>  
>  </head>  
>  <body>  
>  [ttl]Client File[/ttl]  
>  <hr>  
>  [form program=MyProg]  
>  <table width="500">  
>  <tr>  
>  <td>Client ID:<td>  
>  <td>[input ClientID$ format="000000" tip="Enter Client #" event=FindClient]</td>  
>  </tr>  
>  <tr>  
>  <td>Name:<td>  
>  <td>[input Name$ len=30]</td>  
>  </tr>  
>  <tr>  
>  <td>Address:<td>  
>  <td>[input Address$ len=30]</td>  
>  </tr>  
>  <tr>  
>  <td>Address:<td>  
>  <td>[input City$ len=30]</td>  
>  </tr>  
>  <tr>  
>  <td>Balance:<td>  
>  <td>[input Balance format="-###,##0.00"]</td>  
>  </tr>  
>  </table><hr>  
>  [button event=Save text="Save"] [button event=Delete text="Delete"]  
>  [/form]  
>  </body>  
>  </html>

The above code would generate a page similar to this:

> From the application perspective, whenever something was entered into the ClientID$ field, Webster+ would run the program "MyProg" and pass in the event "FindClient" in the variable __event$_ , along with all the data from the form. Selecting _Save_ or _Delete_ would generate their respective events.

In addition to the __event$_ variable, the following variables would also be present:

|  __changed$_ |  Name of variable that changed and caused event ("Custid$")  
---|---|---  
|  __prog$_ |  Name of program ("MyProg")  
|  __topmenu$_ |  Top menu to display (used by default Webster+ template)  
  
## See Also

**[Webster+ Setup and Configuration](Webster%20Setup.md)  
[Short Codes](Short%20Codes.md)  
[Short Code Options](Short%20Code%20Options.md)  
[Short Codes Examples](Webster%20Code%20Examples.md)**
