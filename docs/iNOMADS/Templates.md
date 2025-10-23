# iNomads  
  
**Templates**|   
---|---  
  
Templates are used to define how your NOMADS panels will be displayed under iNomads. They control the presentation of your application panels within the browser and provide an easy means to externally customize the appearance.

One way to better understand what templates do is to look at some examples. Below are screen shots of **[Template Maintenance](Template%20Maintenance.md)**, first as normally rendered in a graphical environment, then using a variety of different templates.

Pictured below is the original Windows image of a NOMADS panel:

> The screen shots below illustrate the same panel rendered with different templates.

This is the _default_ template:

> The _admin_ template is used by iNomads for internal administration screens:

> The _ide2020_ template uses a similar header but a different panel header and colors:

> ##  Style Sheet Definitions

Style sheets are used throughout iNomads to simplify the layout and presentation. A default style sheet _(style.css)_ located in the _templates/default_ directory contains the standard definitions for all the panels. These standard definitions can be selectively overridden by _style.css_ files in each template directory. See **[Style Sheet Usage](Style%20Sheet%20Usage.md)**.

#### **Note:**  
When overriding styles, care should be taken to avoid changes that alter the size of some elements, as this could cause unexpected results.

## Template Definitions

Templates define the presentation formatting to use when rendering a NOMADS panel. They include the HTML definitions that are used in the creation of the page layout, the style sheet to be applied to the layout, images to be used within the page layout, overrides for system standard images **(!xxxx images)** and other configuration information.

Templates are created using the **[Template Designer Wizard](Template%20Designer%20Wizard.md)**. After the template is created, use **[Template Maintenance](Template%20Maintenance.md)** to view and modify the template as needed.

**_Template Sub-Directory_**

Each template is defined by a sub-directory within the _*plus/inomads/templates_ directory.

When rendering a page, the system will load and use either the template definitions from the sub-directory or, if not present, use the definition found in the _templates/default_ sub-directory. Generally, each template sub-directory will only contain a few files -- just the files that it needs to override from the standard default template.

The template files contain a suffix of _.tpl_ and contain HTML fragments. The contents of each file will be loaded and used by the system to generate the appropriate HTML document. A parameter passing mechanism is included, allowing for dynamic HTML generation.

**_Style Sheets_**

A template directory can also contain a style sheet to be applied  _after_ the system default style sheet. This style sheet _(style.css)_ contains information that will be used by the browser to define the presentation of the panels. Generally, this includes font, color and background information. Other information can be included in the style sheet; however, care should be taken when overriding things such as the size and placement of controls, as they can adversely affect the final layout of the panel.

**_Images_**

Images used by the template can also be included in the directory along with a sub-directory called _sysimages_ , which can contain any system images to be used. For example, if you wish to override the normal **!folder** image, simply add a file called **folder._xxx_** to this sub-directory (where **_xxx_** would identify the file type such as .jpg, .gif, .png). The system will then use this image instead of its supplied default.

**_Example:_**

For this example, three system images in the Halloween template were replaced:

> 
