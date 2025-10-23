# Security Manager 

**Security Class Maintenance** |  **__**  
---|---  
  
In **Security Class Maintenance** , add and maintain the security classifications assigned to users. Security classifications are used in **[Object Security Definition](Restricting%20Access.htm#objectsecurity)** to control which users have full or view only access to specific objects (i.e. screens, panel controls, queries, query columns, data dictionary, data elements, views, reports).

By default, the system creates two classifications: ADMIN (for system administration) and USER (for general users). Only users in the ADMIN classification are allowed to add/edit security classes and other users. Users who are not in this classification can only view existing security class information.

#### **Important Note:**  
You **_must_** first set up security classifications prior to setting up users.

> To invoke **Security Class Maintenance** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Security_ category and select _Security roles/classifications_.  
From the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the menu bar, select _Security > Classifications_.  
  
This window consists of the following:

_Security Class_ |  Name of the security classification (e.g. ADMIN, SALES). Existing classifications and their descriptions are displayed in the list box.  
---|---  
_Description_ |  Free-form description to identify the classification of users (e.g. Sales Dept.).  
_Classification/Description_ |  Lists the security classes added to the system.  
_Record_ |  Updates your system's security settings with the new or modified security class.  
_Delete_ |  Removes the selected security class from your system.

#### **Warning!**  
**_DO NOT DELETE_ _the ADMIN security classification._**  
  
The ADMIN classification provides full access and is required when adding new or modifying users and classifications.  
  
The general USER classification does not have permission to add new or modify users and classifications. Only the current user's information can be altered.  
  
_Exit_ |  Closes **Security Class Maintenance** without saving any changes.

#### **Note:**  
When a security class has been added or modified, clicking the _Exit_ button does not automatically save changes. You must first click _Record_ to save any changes prior to exiting.  
  
## Setting Up Security Classifications

When you are setting up security classifications for the first time, the following steps occur:

**Step** |  **Description**  
---|---  
1. |  The system detects that the NOMADS security classification file does not exist and asks to create it. Click _Yes_ to continue. (Click _No_ if you do not want to proceed with the set up process at this time. You can restart the set up later.)  
2. |  The system displays a notification that this default file will be created with two default classes: |  |  ADMIN |  For system administration functions such as adding and modifying users and security classifications.  
---|---|---  
|  USER |  For general users who are not permitted to perform system administration functions.  
  
Click _Yes_ to acknowledge this message. This allows the system to create the file and complete the set up by launching **Security Class Maintenance**.

(Click _No_ if you do not want to complete the set up process at this time. You can restart the set up later.)  
  
3. |  When **Security Class Maintenance** displays, the ADMIN class is initially selected. The _Record_ and _Delete_ buttons are also available only for users with the ADMIN classification. At this point, you can either add other classifications or click the _Exit_ button and add more classifications later if needed.  
4. |  The next step is to add users in **[User Maintenance](Assigning%20Users%20to%20Classifications.md)**.  
  
## See Also

**[Restricting Access](Restricting%20Access.md)**  
**[Security Sign On](Security%20Sign%20On.md)**
