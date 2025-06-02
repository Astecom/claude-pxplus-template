# PxPlus Wiki

**Wiki Configuration Settings**|   
---|---  
  
## PxPlus Wiki Configuration

Below is a list of system configuration settings in alphabetical order:

**Setting** |  **Current Value** |  **Description** |  **Function**  
---|---|---|---  
**Crypto_Key** |  ###Crypto Key Value### |  The value in this field is used to encrypt logon requests. It is used to assure cookie integrity. This prevents people from spoofing your system and getting access to the Wiki file contents. You can set it to any value you want; however, changing it will force everyone to sign back on to your system.

#### **Note:**  
This field will be set to a random value when the Wiki data file (_pxpwiki.dat_) is first created in your directory.

|  Edit  
**Path_Restrictions** |  * |  This field controls which directories the system information utilities can access. It is a comma-separated list of directories that can be accessed. By default, this will be set to an ***** (_asterisk_), providing access to any directory on the system **_(not recommended)_**. Set to a **.** (_period_) to indicate that only the root directory for the Web site and below will be accessible. |  Edit  
**User_Classes** |  Admin,Editor,Reader |  The types of users that are allowed. (Must have at least _Admin_ , _Editor_ and _Reader_.) Any type **_before_**  _Editor_ will have editing capabilities while any type **_after_**  _Editor_ will only have reading capabilities. |  Edit  
**User_Default** |  Admin |  Controls the security system: |  _Admin_ |  Indicates no user validation supported.  
---|---  
_Editor_ |  Allows anybody to edit without logon.  
_Reader_ |  Forces user to logon and be an _Editor_ to edit pages.  
Edit  
**Wikiimage** |  /services/wikiimages/plusglobe.png |  The image that will appear in the top left corner of all pages. It will be scaled to fit a 50 pixel region (default in CSS). |  Edit  
**Wikititle** |  PxPlus Wiki |  The text that will appear on the top of every page in the Wiki. |  Edit  
  
## User Security/Classifications Configuration

The **User_Classes** list provides a comma-separated list of valid user classifications. Adding additional classes allows you to create pages with custom user class restrictions. The setting **_must_** contain the values _Admin_ , _Editor_ and _Reader_ at a minimum, and they **_must_** be in this order with _Admin_ first, _Reader_ last and _Editor_ somewhere in between.

Additional class names can be added both before and after the _Editor_ class; however, the list **_must_** start with _Admin_ and end with _Reader_. Classes that appear **_before_** the _Editor_ class will be allowed to edit pages. Classes that appear **_after_** the _Editor_ class will only be allowed to view pages.

**_Default Setup_**

By default, when the Wiki is installed, the configuration setting **User_Default** is set to _Admin_. This configures the system with security fully disabled, which means that there will be no option to log on to the system and anybody connecting to the system can access/edit any page, **_including_** the configuration page.

Setting **User_Default** to _Editor_ allows anybody to edit any page without the need to sign on. It does enable system security and restricts access to administrative pages only to users with an _Admin_ class.

Setting **User_Default** to _Reader_ allows anybody to view non-secure pages but requires users to log on to the system to edit pages.

When security is active, this configuration page is only accessible by a system administrator; however, you can edit the page and replace the **[pxpwiki:user](Wiki%20Codes.htm#pxpwiki_user)** tag on the page with the desired types of users you want to have access.

**_Security System Initialization_**

When security is enabled, the system adds a **Logon** option to the top of the Wiki pages. This link may be selected to go to the **Logon** page.

The default setup comes with a standard User ID of _Admin_ whose password is also _Admin_. Once you activate security, it is strongly recommended that you add a new user with _Admin_ privileges and remove the _Admin_ user or at least change the password for the default _Admin_ User ID to something different. To add/edit users, use the **User List** page from a user whose class is _Admin_.

In order to always assure that there is at least one _Admin_ user, the system will not allow users to change their own classification nor delete themselves from the system.

**_Security When Using Webster+_**

Webster+ has special logic to pass the Webster+ logon User ID to the Wiki subsystem. When the Wiki is invoked by a Webster+ user who has signed onto the system, his/her logon ID will be used by the Wiki system to determine his/her security rights.

If the Webster+ logon User ID is not defined in the Wiki system, the user will be assigned the default user classification.
