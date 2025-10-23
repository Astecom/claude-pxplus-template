# Templates  
  
**Template Definition Edit Utility**|   
---|---  
  
The **Template Definition Edit Utility** displays the style sheets and text files (also known as control files) that are used to define a template. Style sheets control items such as font, color, backgrounds, etc., allowing the underlying HTML to be rendered differently by simply changing the style sheet. Control files (file suffix of _.tpl_) reside in the _templates_ directory. By default, the normal template files reside in a sub-directory called _default_.

For a list of the template files used by iNomads, see **[Template Directory Structure/Files](Template%20Directory%20Structure.md)**.

Using this utility, you can load, edit and save these template files as required. It is invoked by using any of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup_ to invoke the **[iNomads Setup](iNomads%20Setup.md)** window. From the _Template_ drop box, select a template, and then click the _View/Edit files_ button.  
From a Web browser |  Launch iNomads from a Web browser. From the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** window, invoke the **[iNomads Setup](iNomads%20Setup.md)** window by either clicking the _Admin_ button or selecting _admin_ from the _Transaction_ drop box. From the _Template_ drop box, select a template, and then click the _View/Edit files_ button.  
From the PxPlus Command prompt |  Invoke the **[iNomads Setup](iNomads%20Setup.md)** window by entering the following command: **RUN "*plus/inomads/admin"** From the _Template_ drop box, select a template, and then click the _View/Edit files_ button.  
  
The **Template Definition Edit Utility** displays with the name of the selected template shown in the title bar (i.e. _default_). The template style sheet (_style.css_) is initially opened, but a different template file can be selected from the _Template Definition File_ drop down list.

> This utility consists of the following:

_Template Definition File_ |  Drop down list of the style sheets _(style.css)_ and control files (file suffix of _.tpl_) used to define the template. Files marked with an *****  _(asterisk)_ come from the _default_ sub-directory of the _templates_ directory. When you edit any of these marked files and then click the _Save_ button, the *****  _asterisk_ is removed, since the file has been customized.  
---|---  
_Revert to Default_ |  Returns the selected file back to its default state, which removes any customized changes previously entered.  
_Save_ |  Saves the changes to a **_copy_** of the selected template file that is automatically created and stored in the template-specific sub-directory within the _templates_ directory.  
_Close_ |  Exits the **Template Definition Edit Utility**. If any unsaved changes are detected, you are asked if you want to save them.
