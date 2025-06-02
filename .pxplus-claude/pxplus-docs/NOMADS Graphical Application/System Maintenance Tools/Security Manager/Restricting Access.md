# Security Manager 

**Restricting Access** |  **__**  
---|---  
  
The Security Manager provides the option to restrict or allow access to specific objects (i.e. screens, panel controls, queries, query columns, data dictionary, data elements, views, reports) only for selected security classifications. Only users in the selected classification(s) are allowed access. For example, a panel control will not display to users who are not in the assigned classification.

By default, if no security classifications are assigned, there is no security and all users are granted full access.

For information on the various locations where security can be applied, see **[Applying Object Security](Restricting%20Access.htm#applying)**.

##  Object Security Definition

**Object Security Definition** is used to apply security to a specific object by only selecting security classifications that are allowed either full access or view only access to that object. Doing this allows only users in the selected classifications to have access, as specified.

If you do not want certain security classifications to have either full or view only access, then those classifications should not be selected. In that case, users in the omitted classifications will not be allowed either full or view only access.

> This window consists of the following:

**System Classifications** |  Lists all security classifications currently defined in the system, including the two default classifications, ADMIN (for system administration) and USER (for general users). See **[Security Class Maintenance](Defining%20Classifications.md)**.  
---|---  
**Existing Object Classifications** |  Lists the names/descriptions of selected security classifications, prefixed with either _F_ (full access) or _V_(view only). This list box is initially blank, which indicates all users have full access. Select a classification in the **System Classifications** list. Then click either the _Full Access [/F}_ or _View Only [/V]_ option. The selected classification is added to the **Existing Object Classifications** list, prefixed with either _F_ or _V_. Multiple classifications may be added, one at a time.  
_Full Access [/F]_ |  Button used to apply full (ADMIN) access to the selected security classification.  
_View Only [/V]_ |  Button used to apply view only access to the selected security classification.  
_Delete Access_ |  Button used to delete a selected classification from the **Existing Object Classifications** list. Users in the deleted classification will no longer be allowed to access the object. The classification is deleted from this list. It is not deleted from the NOMADS security classification file.  
_OK_ |  Saves the changes and closes the **Object Security Definition** window.  
_Cancel_ |  Closes the **Object Security Definition** window without saving any changes.  
  
##  Applying Object Security

**Object Security Definition** can be invoked from various locations when defining the following:

**Location** |  **Method**  
---|---  
Panel Header |  Click the _Security_ button at the bottom of the **[Panel Definition](../../Panel%20Designer/Panel%20Header/Overview.md)** window.  
Control Properties |  Click the _Security_ button at the bottom of the **Properties** window for the following panel controls: |  **[Box/Frame](../../Creating%20Panel%20Controls/Frame%20Control/Frame.htm#frameproperties)** |  **[Grid](../../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.md)**  
---|---  
**[Button](../../Creating%20Panel%20Controls/Button%20Control/Overview.htm#properties)** |  **[Image/Picture](../../Creating%20Panel%20Controls/Image%20Control/Image.htm#imageproperties)**  
**[Chart](../../Creating%20Panel%20Controls/Chart%20Control/Chart.htm#chartproperties)** |  **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.htm#standard)**  
**[Check Box](../../Creating%20Panel%20Controls/Check%20Box%20and%20Tri-State%20Control/Overview.htm#chbxproperties)** |  **[Multi-Line](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)**  
**[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)** |  **[Radio Button](../../Creating%20Panel%20Controls/Radio%20Button%20Control/Overview.htm#properties)**  
**[Folder](../../Creating%20Panel%20Controls/Folder%20Controls/Folder%20Properties.md)** |  **[Scrollbars (Horizontal and Vertical)](../../Creating%20Panel%20Controls/Scrollbar%20Controls/Overview.htm#scrollbar_properties)**  
**[Fonted Text](../../Creating%20Panel%20Controls/Text%20Control/Text.htm#textproperties)** |  **[Shape](../../Creating%20Panel%20Controls/Shape%20Control/Shape.htm#shapeproperties)**  
Data Dictionary |  Select _Utilities > Security_ from the menu bar in **[Data Dictionary Maintenance](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md)**.  
Data Element |  Click the _Security_ button at the bottom of the **[Element Description](../../../Data%20Dictionary/Data%20Dictionary%20Maintenance/Element%20Description.md)** window.  
Data Source |  Click the _Security_ button at the bottom of the **Update a Data Source** window when editing an existing data source definition. See **[Data Source Maintenance](../../../Views%20System/Data%20Source%20Maintenance/Overview.md)**.  
View |  Click the _Security_ tool bar button in the **[Define a View](../../../Views%20System/View%20Maintenance/Define%20a%20View.md)** window.  
Standard Query  
Query List |  Click the _Security_ tool bar button in **[Query Definition](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** and in **[Query List Definition](../../Smart%20Controls/Defining%20Smart%20Controls.htm#Mark4)**. See **[Query Security](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Security.md)**.  
Query Column |  Click the _Security_ button at the bottom of the **Column Options** window when editing a selected query column. See **[Query Security](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Security.md)**.  
Query Formula |  Click the _Security_ button at the bottom of the **[Query Formula Definition](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.htm#queryformula)** window. See **[Query Security](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Security.md)**.  
Query File Link |  Click the dotted button in the _Security_ grid column in **[Query File Link](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.htm#queryfilelink)**. See **[Query Security](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Security.md)**.  
Report |  Select _File > Restrict Access_ from the menu bar in **[Report Designer](../../../Report%20Writer/Designing%20a%20Report/Report%20Designer/Overview.md)**.  
Customizer |  Click the _Security_ button at the bottom of the **[Define File Item](../../Customizer/Custom%20User%20Files.htm#Mark2)** window when defining a user file item (field). See Customizer **[Security Considerations](../../Customizer/Security%20Considerations.md)**.  
  
Because it is possible to restrict or allow access to the different levels, a hierarchy is in place that establishes which level of security takes precedence over the other. For example, a user whose security classification does not have access to the folder but has full access to a sub-panel of that folder will find the entire folder is hidden. As a result, this user is unable to access the tab for the sub-panel to which access had been granted.

**_Example:_**

The following examples show the result of the level hierarchy when access is restricted or allowed at different levels:

**Example 1** |  **Result**  
---|---  
Full access to the panel is allowed.  
No access to an individual control on that panel. |  Access to the panel is allowed, and the individual control is hidden.  
**Example 2** |  **Result**  
Full access to the sub-panel is allowed.  
No access to the folder, which has a tab associated to this sub-panel. |  Entire folder is hidden; as a result, there is no access to the tab associated to the sub-panel.  
**Example 3** |  **Result**  
No access to the sub-panel.  
Full access to the folder is allowed. |  Access to the folder is allowed, and the tab (associated to the sub-panel with no access) is hidden. Other tabs on the folder are shown and can be accessed (if full access was granted).  
**Example 4** |  **Result**  
View only access to the panel is allowed. |  All individual controls on the panel are disabled.  
  
##  Tabs/Folders - Viewing Security Settings

Folder controls can be defined to display tabs, which are associated with previously created sub-panels. The tab information for each sub-panel is defined in the **Tabs Definition** grid within the **Tabs/Folders** dialogue. For information on adding, removing or modifying the sub-panels in folder controls, see **[Adding and Modifying Sub-Panels](../../Creating%20Panel%20Controls/Folder%20Controls/Adding%20and%20Modifying%20Sub-Panels.md)**.

You can view the _Security_ column in the **Tabs Definition** grid to determine if any security had been previously applied for each of the sub-panels within the selected folder. If security has been applied, the _Security_ column displays the classification name preceded with either _F_ (Full Access) or _V_ (View Only).

**_Example:_**

In this example, the _Security_ column indicates that security was previously applied to the "Invoices" and "Payments" sub-panels but not to the "Address" sub-panel.

> #### **Note:**  
The information displayed in the _Security_ column is for informational purposes and can only be viewed. Any changes to the security settings for a particular sub-panel must be done in the **[Object Security Definition](Restricting%20Access.htm#objectsecurity)** window, which is accessed by clicking the _Security_ button in the **[Panel Definition](../../Panel%20Designer/Panel%20Header/Overview.htm#paneldef)** for that panel.
