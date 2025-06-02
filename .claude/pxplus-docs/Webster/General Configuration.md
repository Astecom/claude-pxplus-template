# Webster+ Setup and Configuration

**General Configuration**|   
---|---  
  
The Configuration settings for Webster+ are used to define the format and look of a Web site, as well as various internal settings required by the system, such as the Email and SMS servers used to contact users. Many of the settings defined in the Configuration utility are accessible through the **%Webster** system object.

The Configuration consists of the following eight sections:

**Section** |  **Contents**  
---|---  
**[Site Info](General%20Configuration.htm#siteinfo)** |  General site information, such as name, icon, contact email, etc.  
**[Customizations](General%20Configuration.htm#customizations)** |  Custom CSS and Java Script to be added to all the Web pages on the site.  
**[Template](General%20Configuration.htm#template)** |  Template File and colors to use within the system for various standard elements.  
**[Security](General%20Configuration.htm#security)** |  Option to enable system security (highly recommended) and Administrator user name, password and email address.  
**[Access Control](General%20Configuration.htm#accesscontrol)** |  **_(Available when Webster+ Security is enabled)_** Access control setting used to select which specific group of users is allowed to create/delete files and directories, as well as edit programs and HTML files, through the **[Webster+ Inspector](Inspector.md)**. _(Access Control was added in PxPlus 2021 Update 1.)_  
**[Email](General%20Configuration.htm#email)** |  System email settings used to send emails to users regarding notifications such as forgotten password or two-step authorization.  
**[SMS](General%20Configuration.htm#sms)** |  System SMS settings used to send SMS text messages to users.  
**[Misc.](General%20Configuration.htm#misc)** |  Miscellaneous system settings, such as chart legend location, grid lines settings, query list colors, Wiki documentation, error dumps, etc. _(The ability to set options for Wiki documentation was added in PxPlus 2022.)_  
  
When this utility first comes up, it will display the **Site Info**. You can click on the desired section from the tab line on the **System Configuration** page. This will display the input screen for that section and allow you to edit and save the settings. The _Save_ button will save the entries for all the sections.

> ##  Site Information

Click on **Site Info** to bring up the Site Information page:

> The following settings can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
_Site Name_ |  Name to appear across the top of the screen. It will be included in all site generated emails. |  SiteName$  
_Site Image_ |  Image to be displayed centered in the upper left of the standard site template. If desired, you can change this by clicking or dropping a new file in the region below the input. |  SiteImage$  
_Site Homepage_ |  URL of the site you want the users to be directed to when they click the Image in the top left corner of the page. This URL will be brought up in a separate tab. |  SiteHomePage$  
_Contact Email_ |  If provided, an email address that can be used to contact the site administrator. If present, a link to generate the email will be provided on the left side bar. |  SiteEmail$  
_Privacy Page_ |  If provided, a page that describes the site privacy rules. If not present, the system will check for the page _privacy in the application or use *webster/page/privacy.html. |  SitePrivacy$  
_Accept Cookies_ |  System will confirm that user will accept persistent cookies before creating any. |  CookieQuery  
_Temporary File Directory_ |  Location for the system to store any temporary files it may need. |  TempDirectory$  
_Force JS/CSS Reload_ |  This option can be set during development to effectively disable the browser caching of JavaScript or CSS files used by the site. This helps assure and changes on the server are applied immediately. |  ForceLoad  
  
##  Customizations

Click on **Customizations** to bring up the Customization options:

> The following settings can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
_Create/update Local Library_ |  Webster+ uses a number of JavaScript and stylesheet files. These are maintained in a library directory, which should be downloaded to your _docroot_ **/lib** sub-directory. Click the _Download lib_ button to create the library or to refresh the data. |  N/A  
_Download Editors_ |  Click this button to download the ED+ program editor and HTML editor to your _docroot_ **/lib** sub-directory. This allows authorized users to edit programs and HTML files through the Webster+ Inspector. See **[Viewing Program Files](Inspector.htm#view_pgm)** and **[Viewing HTML Files](Inspector.htm#view_html)**. _(The Download Editors button was added in PxPlus 2021 Update 1.)_ |  N/A  
_External Library URL Prefix_ |  This should contain the prefix for any referenced CSS or JavaScript files used by the application. If not specified, the system will assume the default of the site name **/lib**. |  Library$  
_Custom CSS_ |  This can contain any CSS code you want included in your application pages. |  CustomCSS$  
_CSS File URL_ |  This can contain the URL of a CSS file you want included in your pages. Only the URL is included, not the contents of the URL, so that the page can generally load faster. If the contents are **_not_** a true URL (starts with HTTP or HTTPS), then the Library prefix above will be added to the value. |  ExtraCSSFile$  
_HTML_ |  This can contain any additional HTML code you want added at the end of all pages generated by the system. |  ExtraHTML$  
_JavaScript File URL_ |  This can contain the URL of a JavaScript file you want included in your pages. If the contents are ** _not_** a true URL (starts with HTTP or HTTPS), then the Library prefix above will be added to the value. |  ExtraJSFile$  
  
##  Template Definition

Click on **Template** to bring up the Template definition:

> The following settings can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
_Default Template File_ |  This field contains the name of the template file used to create the Webster+ pages. It can be blank, in which case no template will be applied, or it can contain the name of a page to use. If the first character is an _asterisk_ (*****), then the system will first check for a file of the same name in your application search rules, replacing the ***** with a semi-colon. If that is not found, the system will drop the asterisk and look for the file in _*webster/pages_. **_Default_** value is _*template.html_. |  Template$  
_Header Height_ |  This field defines the height of the header found in the template file. **_Default_** is 50 pixels. |  HeaderHeight  
_Left Edge Width_ |  This field defines the width of the left edge found in the template file. **_Default_** is 180 pixels. |  HeaderWidth  
_Default Start page_ |  This field defines the system default starting page to be used when a browser connects. **_Default_** value is *default, which will come from the _*webster/pages/default.html_ file or __default.html_ in the application _pages_ directory. _(The Default Start page option was added in PxPlus 2023 Update 1.)_ |  DfltStartPage$  
  
The **Template Colors** values define the various colors used by the standard template/CSS files. You can define the color of the background and, for some sections, the color of the text to appear in that area.

The _Reset to Default colors_ button will reset the colors selected to the system default color set.

##  System Security

Click on **Security** to bring up the system security settings.

Webster+ has been modified to allow it to share the user registration files with NOMADS/iNomads. A check box has been added to the Setup **Security** tab that will enable this option. Once it is enabled, user information will be maintained in Webster+ on the same file as NOMADS uses. The use of **[User Groups](Group%20Maintenance.md)** in Webster+ will remain independent of the **[Security Classes](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/Security%20Manager/Defining%20Classifications.md)** in NOMADS. Two-factor authentication also remains independently controlled; however, the authentication for Webster+ will be shared with iNomads and vice-versa.

> The following settings can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
**Security Enabled** |  Check box that controls whether the system will enable security. |  HasSecurity  
**Use Nomads Security file** |  Set this option to allow Webster+ to share the user registration files with NOMADS/iNomads. Once it is enabled, user information will be maintained in Webster+ on the same file as NOMADS uses. If NOMADS security is not set up, the NOMADS user registration files will be created with the ADMIN user. _(The Use Nomads Security file option was added in PxPlus 2023.)_ |  UseNomadsSecurity  
_Self-registration Group_ |  Name of the user group that will be assigned to any user that self-registers. If left blank, self-registration is not possible. |  SelfRegister$  
_Password Regular Expression_ |  Regular expression to be used to validate that the password entered matches the Site security requirements. **_Default_** is 8 characters with at least one uppercase letter, one lowercase letter, and a digit. |  PswdRegExp$  
_Password Tip_ |  Tip that will be assigned to the system password fields. |  PswdTip$  
_Web Password Duration_ |  This is the number of days that the system will allow the user's password to be preserved on a workstation before forcing the user to reset the password. **_Default_** is 30 days. _(The Password Duration option was changed to Web Password Duration in PxPlus 2022 Update 1.)_ |  PswdDuration  
_Desktop Password Duration_ |  This is the number of hours that the password will remain active when running a Webster+ application using the **[*Webster/Desktop](Webster%20Desktop.md)** utility. **_Default_** is 4 hours. _(The Desktop Password Duration option was added in PxPlus 2022 Update 1.)_ |  DesktopPswdHrs  
_Two-step Verification_ |  This controls whether the system will force two-step verification. Three options are available (internal value shown in parenthesis): _Don't use_ (N)  
_Use on new device_ (Y)  
_Always use_ (A) |  TwoStepVerify$  
_Workstation Duration_ |  When using two-step verification, this is the number of days before a workstation will have to be re-validated. |  WsDuration  
_Group if not signed on_ |  If present, this is the Security group that will be assigned for public access. Group specified can be used to define what that user can access beyond the logon prompt. |   
**Administrative User** |  |  _Userid_ |  User name to be used for the system administrator. **_Default_** is Admin.  
---|---  
_Password_ |  Administrator's password. You can enter a new password and click _Save_ to change the administrator's password.  
_Email_ |  Administrator's email address.  
AdminUser$  
AdminEmail$  
  
##  Access Control Setting

**_(Available when Webster+ Security is enabled)_**

Click on **Access Control** to bring up the _Inspector Edit Access_ group setting:

> The following setting can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
_Inspector Edit Access_ |  This controls which specific group of users is allowed to create/delete files and directories, as well as make changes using the _Edit_ button when viewing a file's contents through the **[Webster+ Inspector](Inspector.md)**. **_Default_** is the System Administrators group. User groups are defined in **[Group Maintenance](Group%20Maintenance.md)**. |  EditAccess$  
  
_(Access Control was added in PxPlus 2021 Update 1.)_

##  Email Settings

Click on **Email** to bring up the system email settings:

> The following settings can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
_Email Address_ |  Email address used for all emails sent by the system, such as password reset requests and two-step verifications. |  EmailFrom$  
_SMTP Server_ |  Name of the SMTP server used to send emails. |  EmailSmtp$  
_SMTP Port_ |  Port number that the email server monitors. Some commonly used ports are 25, 465 or 587. |  EmailPort  
_SMTP Account_ |  Account name to use when connecting to the email server, if required. |  EmailAcct$  
_Account Password_ |  Account password for the SMTP account. |  EmailPswd$  
  
To setup a test email using these settings, enter an email address and then click the _Test_ button.

##  SMS (Text Messaging) Settings

Click on **SMS** to bring up the text messaging settings:

> The following settings can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
_SMS Provider_ |  SMS provider to be used to send any SMS by the system, such as requests for two-step verifications. Values allowed: _smsmatrix  
extexting  
grouptexting  
nexmo  
twillio  
smsbroadcast_ |  SMSService$  
_SMS Account_ |  Account name to use when connecting with the SMS provider. |  SMSAcct$  
_SMS Passcode_ |  Account password/passcode. |  SMSPasscode$  
  
To setup a test SMS message using these settings, enter a cell phone number and then click the _Test_ button.

##  Miscellaneous

Click on **Misc** to bring up additional system settings:

> The following settings can be maintained on this page:

**Input Label** |  **Description** |  **%Webster Property**  
---|---|---  
_Chart legend location_ |  Defines where the legend should be placed when rendering a chart in Webster+. Possible values are: _Top  
Right  
Bottom  
Left  
None_ |  ChartLegendLocation$  
_Grid lines on Queries and Smart lists_ |  Defines whether you want grid lines enabled by default for Queries and Smart Lists (which use the Query system). Possible values are (internal value shown in parenthesis): _None_ (n)  
_Vertical_ (v)  
_Horizontal_ (h)  
_Both_ (*) |  GridLines$  
_Use alternating colors in queries_ |  Set this option if you want queries to use alternating colors by default. |  QueryAlternating  
_Wiki Subsystem Enabled_ |  Set this option if you want the system to check for Wiki documentation on the pages in the system. _(The Wiki Subsystem Enabled option was added in PxPlus 2022.)_ |  WikiEnabled  
_Wiki link text_ |  Set this value to the HTML text you want displayed in the top right corner of the page when Wiki documentation is available or can be edited/added to the system. **_Default_** is <i>Info</i>. The text will appear blue if the Wiki is present or red if not present but could be added. _(The Wiki link text option was added in PxPlus 2022.)_ |  WikiLinkText$  
_Dynamic Wiki Creation_ |  Set this option if you want the system to dynamically create basic Wiki documentation on the fly for the pages displayed. _(The Dynamic Wiki Creation option was added in PxPlus 2022.)_ |  WikiOnTheFly  
_Google Maps APIKEY_ |  If you are going to use the Webster+ Google Maps interface, you can supply your Google Maps API key to the system so that it does not have be supplied in the form **[[map]](Short%20Codes.htm#map)** short codes. _(The Google Maps APIKEY option was added in PxPlus 2022.)_ |  GoogleMapKey$  
_Enable MSGBOX directive_ |  This option, when enabled, will allow the application to issue **[MSGBOX](../directives/msgbox.md)** directives for display on the server console. By default, this option is **_Off_** and should only be enabled during local development on the Webster+ server. _(The Enable MSGBOX directive option was added in PxPlus 2022.)_ |  EnableMSGBOX  
_File_ _Maint_ _to use Message box_ |  When checked (default), all messages will display in message boxes. If unchecked, all messages will use option boxes. See Webster+ **[OptionBox](Webster%20Object%20Methods.htm#optionbox)** method. _(The File Maint to use Message box option was added in PxPlus 2023.)_ |  FM_MsgBox  
_iNomads URL/port_ |  If you are going to use iNomads with Webster+, specify the URL that will be used to launch iNomads. If you will be using the same domain and protocol (HTTP vs. HTTPS) but on a different port, you only need to specify the port number to be used. Webster will automatically determine the domain and protocol to use.

#### **Note:**  
To support embedded iNomads Webster+ pages, Webster+ and iNomads should be on the same domain and use the same protocol (HTTP vs. HTTPS).  
  
This makes it easier to just specify an iNomads port number instead of a URL.

See **[Using iNomads with Webster+](Using%20iNomads%20with%20Webster.md)**. _(The iNomads URL/port option was added in PxPlus 2023.)_ |  iNomadsURL$  
_Save error dumps_ |  Set this option if you want error dumps to be saved in the _data/dump_ directory. This information will be viewable via the **[Statistics](Statistics.md)** page. _(The Save error dumps option was added in PxPlus 2023.)_ |  SaveErrorDumps  
_Error dump email notification_ |  **_(Available when Save error dumps check box is selected)_** Email address to send a notification to when an error dump occurs. Email server information must be set up on the **Email** tab. See **[Email Settings](General%20Configuration.htm#email)**. _(The Error dump email notification option was added in PxPlus 2023.)_ |  DumpNotificationEmail$  
_New user email notification_ |  Email address to send a notification to when a new user creates an account. Email server information must be set up on the **Email** tab. See **[Email Settings](General%20Configuration.htm#email)**. _(The New user email notification option was added in PxPlus 2023.)_ |  NewUserNotificationEmail$  
  
## See Also

**[Properties](Webster%20Object%20Properties.md)**
