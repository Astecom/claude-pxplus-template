# Templates

**Template Directory Structure/Files**|   
---|---  
  
To allow NOMADS screens to be presented on the Web in a manner consistent with a client's website, a series of control files is used to generate the required HTML. These control files (file suffix of _.tpl_) reside in the _templates_ directory.

By default, the normal template files reside in a sub-directory called _default_. These should **_not_** be changed, but rather user custom template directories should be created.

#### **Important Note:**  
Changes to the _default_ template directory files may be lost when upgrading your software to a newer release.

For each template that you want to create, you need to create a new sub-directory in the _templates_ directory, add customized template files and a CSS Style Sheet (if needed).

Two basic types of windows are currently supported:

> The _main_ window: This is the format used by the initial panel displayed when iNomads starts a transaction/process.

> A _popup_ window: This is used for all subsequent windows.

Generally, the _main_ window will contain more information about the website such as a banner and additional hyperlinks, whereas a _popup_ window will only show an abbreviated heading.

## Template Files

The template files used by iNomads are listed below:

**File** |  **Description**  
---|---  
**style.css** |  Standard CSS Style Sheet  
**close_popup.tpl** |  Special HTML used to force switch from Ajax interface to a new HTML request  
**footer.tpl** |  Final footer contents for  _main_ window  
**footer_popup.tpl** |  Final footer for  _popup_ window  
**header.tpl** |  Initial HTML contents for  _main_ window  
**header_popup.tpl** |  Initial HTML contents for  _popup_ window  
**maximize.tpl** |  Logic to insert 'Maximize' panel button on panel header  
**mbx_btn.tpl** |  Generic template used to create a button as used in message box and progress bar  
**msgbox.tpl** |  Message box HTML template  
**normal.tpl** |  Basic panel template for  _main_ window  
**normal_popup.tpl** |  Basic panel template for  _popup_ window  
**popmbx.tpl** |  Special HTML wrapper to allow display of message box when no panel is currently rendered (used by MSGBOX directives between panel displays)  
**popmbx_btn.tpl** |  Button template for above  
**post_header.tpl** |  Fully customizable HTML to include after header. This is an empty template file that is intended to be overridden by the user templates.  
**pre_footer.tpl** |  Fully customizable HTML to include after panel contents by before the footer of the HTML document. This is an empty template file that is intended to be overridden by the user templates.  
**qry_btn.tpl** |  Query button  
**qry_gobtn.tpl** |  Query 'GO' button  
**qry_sort.tpl** |  Query Sort options drop box  
**query.tpl** |  Query HTML template  
**restore.tpl** |  Logic to insert 'Restore' panel button on panel header  
**template.conf** |  Template internal configuration parameters  
  
##  _xxxxx.tpl_ Files

Customized templates can replace any of the above files with ones in the template-specific directory. To provide an easy method of wrapping all panels, the post_header and pre_footer templates, in the default template, have no contents and thus are available for easy customization in each template directory.

The template files themselves contain HTML code and specialized <?bb xxx ?> tags. These tags, when found, will be processed internally by iNomads and the value associated with xxx will be evaluated and inserted into the HTML stream.

#### **Note:**  
Variables set in the _template.conf_ or _inomads.conf_ files will be available within the template.

In addition, when a template is invoked, it can be passed up to 10 parameters in the variables param1$ through param10$. The contents of these parameters vary between template files, and each template file contains documentation for the parameters.

The tag <?bb ! .. ?> can be used to include comments within the template file and will not be output in the final HTML output.

## _template.conf_ File

There may also be a _template.conf_ file present in the template sub-directory. It contains the template-specific configuration settings. You can edit these manually using a text editor or directly from the admin functions in the system.

## _style.css_ File

The _style.css_ file within each template directory can be used to override the default style sheet that exists in the _default_ directory.
