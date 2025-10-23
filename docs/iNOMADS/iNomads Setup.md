# Setup and Installation

**iNomads Setup**|   
---|---  
  
The iNomads Setup window is used to access functions that allow you to control and maintain system settings, create a new template, define template display options, view and modify existing templates, as well as edit text files used in template definitions.

> To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup._  
From a Web browser |  Launch iNomads from a Web browser. From the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** window, click the _Admin_ button. You can also select _admin_ from the _Transaction_ drop box and then click the _Run_ button.  
From the PxPlus Command prompt |  Enter the following command: **RUN "*plus/inomads/admin"**  
  
This window consists of the following:

**System Settings**  
---  
_TX Maint_ |  Button used to invoke iNomads **[Transaction Maintenance](Transaction%20Maintenance.md)** for defining and maintaining the transaction definitions that control the panel/programs that can be executed.  
_Config_ |  Button used to invoke Configuration Maintenance for setting system parameters such as timeouts, default template and admin password.  
_Custom_ |  This button is available only when a _custom.conf_ file consisting of customized system settings exists in the __plus/inomads_ directory.  
**Template Settings**  
_Template_ |  Presents a drop down list of sample and user-created templates stored in the __plus/inomads/templates_ directory. Default template is _default_ , which is set in **[Configuration Maintenance](System%20Configuration.md)**. To delete a template, select the template from this list and click the Delete Template button adjacent to the drop box. You will then be prompted to confirm your deletion selection. To copy a template, click the Copy Template button to invoke the **[Copy Template](Copy%20Template.md)** dialog.

#### **Note:**  
The _default_ template **_cannot_** be deleted.  
  
_New Template_ |  Button used to invoke the **[Template Designer Wizard](Template%20Designer%20Wizard.md)** for creating a new template.  
_Options_ |  Button used to invoke **[Template Configuration Maintenance](Template%20Configuration.md)** for maintaining template configuration settings.  
_Custom_ |  This button is available only when selecting an existing template from the _Template_ drop box that has custom settings defined in a _custom.conf_ and/or _custom.ini_ file within the template directory. Selecting this button invokes **[Template Maintenance](Template%20Maintenance.md)** (or **[Configuration Maintenance](System%20Configuration.md)** if applicable).  
_View/Edit files_ |  Button used to invoke **[Template Definition Edit Utility](Template%20Definition%20Edit.md)** for displaying any text files used to define a template.  
_Test_ |  Button used to test the template selected from the _Template_ drop box. The selected template is displayed on a Web browser in "test" mode with the current settings in **[Template Maintenance](Template%20Maintenance.md)** applied. When the _Test_ button is selected, EZWeb Server will automatically start (if not already running), using the default port and secure (HTTPS) settings specified in the **[Launch EZWeb Server](../EZWebServer/EZweb%20Introduction.htm#Mark1)** window. If no default port has been assigned, a message will prompt you to define it. _(The ability to enable secure TLS/SSL mode for the EZWeb server was added in PxPlus 2022.)_

#### **Note:**  
The _Test_ button is **_not applicable_** when running WindX.

_(The Test button was added in PxPlus 2017.)_
