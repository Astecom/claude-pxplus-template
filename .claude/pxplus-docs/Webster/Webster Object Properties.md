# Webster+ Object

**Properties**|   
---|---  
  
Below is a list of Webster+ properties in alphabetical order. When referencing the property, it would normally be prefixed with **%Webster'**.

**Property** |  **Description**  
---|---  
**AdminEmail$** |  System administrator's email address  
**AdminUser$** |  User name to be used for the system administrator  
**Bind** |  **_(Read Only)_** Object to bind HTML  
**BindFile$** |  HTML file to bind on exit  
**Binding** |  **_(Internal Use Only)_** Set when binding a file  
**CharSet$** |  Character set being used in Web form. By default, this is set to UTF-8 but can be changed in your **webster.pxp** setup program to whatever character set you wish to use (e.g. iso-8859-1 if using Windows native character set).  
**ChartLegendLocation$** |  Default location for charts when running Webster+  
**Class** |  **_(Read Only)_** Generic class object handle  
**CookieQuery** |  This property, when set, indicates that Webster+ will provide an option to stay logged on to the system for a period of time (defined by **[%webster'PswdDuration](Webster%20Object%20Properties.htm#pswdduration)**). To do this, the system will create a cookie on the browser to save the user logon settings so that subsequent access to the system by the same browser will not request the user to log on again.

#### **Important Note:**  
Due to international privacy standards, the option to save any user specific information in a cookie on the browser **_must_** be under the explicit control of the user and in some jurisdictions may be illegal. Please consult your local regulations before enabling this option.  
  
**CopyErrorDump(**_temp_err_dump_path_ _$_**)** |  **_(Internal Use Only)_** Copies a temporary error dump file to the Webster+ _data/dump_ directory to keep it for viewing on the Statistics page. _(The CopyErrorDump function was added in PxPlus 2023.)_  
**CSS$** |  CSS to add to each page  
**CustomCSS$** |  Custom CSS  
**DesktopPswdHrs** |  Number of hours that the password remains active when running a Webster+ application using the **[*Webster/Desktop](Webster%20Desktop.md)** utility. _(The DesktopPswdHrs property was added in PxPlus 2022 Update 1.)_  
**Dump_File** |  **_(Hidden - Internal Use)_** Hold area for dump information  
**Dump_Info$** |  **_(Hidden - Internal Use)_** Hold area for dump information  
**DumpNotificationEmail$** |  Email address to send a notification to when an error dump occurs. _(The DumpNotificationEmail$ property was added in PxPlus 2023.)_  
**EditAccess$** |  Defines the class allowed to create/delete files and directories, as well as make changes using the _Edit_ button when viewing a file's contents through the **[Webster+ Inspector](Inspector.md)**. _(The EditAccess$ property was added in PxPlus 2021 Update 1.)_  
**EmailAcct$** |  Email server sign-on account name  
**EmailFrom$** |  Email address from which outgoing emails are sent  
**EmailPort** |  Email port number  
**EmailPswd$** |  Email server account password  
**EmailSmtp$** |  Name of SMTP server  
**EnableMSGBOX** |  Controls whether the application is allowed to issue **[MSGBOX](../directives/msgbox.md)** directives for display on the server console. By default, this is **_Off_** and should only be enabled during local development on the Webster+ server. _(The EnableMSGBOX property was added in PxPlus 2022.)_  
**ExtraCSSFile$** |  Extra CSS file to include  
**ExtraHTML$** |  Extra HTML to add before </body>  
**ExtraJSFile$** |  Extra JS file to include  
**FirstName$** |  Current user's first name  
**FM_MsgBox** |  Controls whether all messages will display in message boxes or in option boxes. See Webster+ **[OptionBox](Webster%20Object%20Methods.htm#optionbox)** method. A setting of non-zero results in using original Webster+ message boxes while a setting of 0 results in using option boxes. Defaults to 1 on a new system. _(The FM_MsgBox property was added in PxPlus 2023.)_  
**FocusTo$** |  Name of control to set focus to when rebinding page  
**FolderClass$** |  Default folder class  
**Font_Awesome$** |  URL to Font-Awesome (_font-awesome.min.css_)  
**ForceLoad** |  Force load of JavaScript and CSS each time page is loaded (for debugging purposes)  
**FormID$** |  Form ID that submitted request  
**FullName$** |  Current user's full name  
**GoogleMapKey$** |  Google Map API key used to access the Webster+ Google Maps interface (see Webster+ **[*map](Webster%20Events.htm#map)** event) _(The GoogleMapKey$ property was added in PxPlus 2022.)_  
**GridLines$** |  Default for query grid lines  
**HasEmail** |  Non-zero if the system has email access  
**HasSecurity** |  Non-zero if security enabled  
**HasSMS** |  Non-zero if the system has the ability to send SMS messages  
**HeaderHeight** |  Height of the header if using a template file  
**HeaderWidth** |  Width of the left edge if using a template file  
**Images$** |  **_(Internal Use Only)_** List of dynamic images  
**iNomadsURL$** |  URL to launch iNomads. See **[Webster+ Setup for iNomads](Using%20iNomads%20with%20Webster.htm#setup_inomads)**. _(The iNomadsURL$ property was added in PxPlus 2023.)_  
**IsAdmin** |  Non-zero if user is Admin  
**JSPending$** |  **_(Hidden)_** Hold area for JavaScript commands to execute  
**JSPostPop$** |  **_(Hidden)_** Hold area for JavaScript commands to execute after popup  
**LastName$** |  Current user's last name  
**Library$** |  URL to the library used to hold _webster.js_ and its associate _style.css_  
**Max_row** |  Maximum rows (future use to limit list box lengths)  
**Meta$** |  Meta code to add to pages  
**NewUserNotificationEmail$** |  Email address to send a notification to when a new user creates an account _(The NewUserNotificationEmail$ property was added in PxPlus 2023.)_  
**PswdDuration** |  Number of days before forcing the user to reset the password  
**PswdRegExp$** |  Regular expression to use for passwords  
**PswdTip$** |  Tip for validation  
**QueryAlternating** |  Non-zero if using alternating line colors in queries  
**SaveErrorDumps** |  When set, error dumps will be saved to the _data/dump_ directory _(The SaveErrorDumps property was added in PxPlus 2023.)_  
**SecureFields$** |  **_(Internal Use Only)_** List of secure fields  
**Security** |  **_(Read Only)_** Object to handle security  
**SelfRegister$** |  Default Group name assigned to new users  
**SiteEmail$** |  Contact email address for site administrator  
**SiteHomePage$** |  Default home page  
**SiteImage$** |  Icon/image for site  
**SiteName$** |  Name of site (shows in header)  
**SitePrivacy$** |  Privacy page URL  
**SMSAcct$** |  SMS account name  
**SMSPasscode$** |  SMS passcode  
**SMSService$** |  Name of SMS provider  
**Statistics** |  **_(Internal Use Only)_** Object to keep track of statistics _(The Statistics property was added in PxPlus 2023.)_  
**Target$** |  Internal name of the current window in use  
**TempDirectory$** |  Directory where temporary files are stored  
**Template$** |  Name of the default primary template  
**TemplateCSS$** |  **_(Read Only)_** CSS setting for template  
**TwoStepVerify$** |  Controls whether the system will force two-step verification: N - _Don't use_  
Y - _Use on new device_  
A - _Always use_  
**UseNomadsSecurity** |  This property, when set to 1, allows Webster+ to share the user registration files with NOMADS/iNomads. Once it is set, user information will be maintained in Webster+ on the same file as NOMADS uses. (Default is 0) _(The UseNomadsSecurity property was added in PxPlus 2023.)_  
**UserName$** |  Current user name  
**WikiEnabled** |  Controls whether the system will check for Wiki documentation on the pages in the system _(The WikiEnabled property was added in PxPlus 2022.)_  
**WikiLinkText$** |  HTML text you want displayed in the top right corner of the page when Wiki documentation is available or can be edited/added to the system (Default is <i>Info</i>) The text will appear blue if the Wiki is present or red if not present but could be added. _(The WikiLinkText$ property was added in PxPlus 2022.)_  
**WikiOnTheFly** |  Controls whether the system will dynamically create basic Wiki documentation on the fly for the pages displayed _(The WikiOnTheFly property was added in PxPlus 2022.)_  
**WsDuration** |  When using two-step verification, number of days before a workstation will have to be re-validated  
  
## See Also

**[Methods](Webster%20Object%20Methods.md)**
