# Templates

**Template Maintenance**|   
---|---  
  
**Template Maintenance** is used to view and modify the settings for a previously created template. A _template_ defines the layout of a panel and how it will be presented to the Web browser. It controls the visual characteristics of the Web page such as size, font, colors and images.

When a new template is created and saved using the **[Template Designer Wizard](Template%20Designer%20Wizard.md)**, a directory is created for that template in the _lib\\_plus\inomads\templates_ directory. Depending on the settings used to create the template, the template directory can contain any or all of the following files:

**File** |  **Contents Description**  
---|---  
_template.conf_ |  Template configuration settings  
_.tpl_ files |  HTML segments  
_style.css_ file |  Style sheet information used by the browser to define the presentation of the panel (i.e. font, color and background)  
_sysimage_ directory |  Replacement system images (!xxx)  
_custom.conf_ and _custom.ini_ |  Custom settings  
  
**Template Maintenance** is invoked by using any of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup_ to invoke the **[iNomads Setup](iNomads%20Setup.md)** window. From the _Template_ drop box, select a template with custom settings previously defined (i.e. the template-specific directory contains the _custom.ini_ file). Then, click the _Custom_ button located below the _Options_ button.  
From a Web browser |  Launch iNomads from a Web browser. From the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** window, invoke the **[iNomads Setup](iNomads%20Setup.md)** window by either clicking the _Admin_ button or selecting _admin_ from the _Transaction_ drop box. From the _Template_ drop box, select a template with custom settings previously defined (i.e. the template-specific directory contains the _custom.ini_ file). Then, click the _Custom_ button located below the _Options_ button.  
From the PxPlus Command prompt |  Invoke the **[iNomads Setup](iNomads%20Setup.md)** window by entering the following command: **RUN "*plus/inomads/admin"** From the _Template_ drop box, select a template with custom settings previously defined (i.e. the template-specific directory contains the _custom.ini_ file). Then, click the _Custom_ button located below the _Options_ button.  
  
**Template Maintenance** is launched for the selected template, allowing you to view and modify any of the settings as needed.

> This window consists of the following:

_Template_ |  Name of the selected template. The name is for viewing only.  
---|---  
**Page**  
**Page Background** |  Settings for defining the page background color or image. |  _Background Color_ |  Specify the color to use for the background. See **[Color Specification](Color%20Specification.md)** for information on applying a color. When a color is selected/entered, a preview of that color is displayed.  
---|---  
_Background Image_ |  Select the image to display for the background. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Repeat_ |  **_(Available only when an Image has been selected)_** Displays the following selections for duplicating the image: |  _repeat_ |  Duplicates the image _(Default)_  
---|---  
_no-repeat_ |  Does not duplicate the image  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_  
_Position_ |  **_(Available only when an Image has been selected)_** Displays the following selections for positioning the image: _left top_ (Default), _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
**Sections**  
_Click or select the section you wish to edit_ |  Displays a diagram of the layout that was selected when the template was initially created. To view or modify the settings for a particular section, click on that section inside the diagram or use the adjacent _Section_ spinner control. By default, the first section is highlighted. You can also add new sections to the template layout using the grid on the **Advanced Layout** tab. See **[Advanced Layout](Template%20Maintenance.htm#advlayout)**.  
_Section_ |  Indicates the number of the template section currently highlighted. To change to a different section, use the up/down arrows attached to this field or manually enter the number. You can also click on the desired section inside the diagram shown on the left.

#### **Note:**  
Some sections may be too small to display in the diagram, and you will not be able to click on it to select it. In that case, use the _Section_ field to enter the section number.  
  
**Background/Size** |  |  _Color_ |  Specify the color to use for the section background. See **[Color Specification](Color%20Specification.md)** for information on applying a color. When a color is selected/entered, a preview of that color is displayed.  
---|---  
_Image_ |  Select the image to display for the section background. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Image Repeat_ |  **_(Available only when a Background Image has been selected)_** Selections for duplicating the image are: |  _repeat_ |  Duplicates the image _(Default)_  
---|---  
_no-repeat_ |  Does not duplicate the image  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_  
_Position_ |  **_(Available only when a Background Image has been selected)_** Selections for positioning the image are: _left top_ (Default), _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
_Width/Height_ |  Enter a _Width/Height_ for the section (in pixels). If the width/height of the section increases as the panel is resized, leave the _Width/Height_ blank.  
**Fixed Attributes (Use Advanced Layout to Change)** |  The settings in this section are **_view only_**. To modify them, select the **[Advanced Layout](Template%20Maintenance.htm#advlayout)** tab (see details below). |  _Columns Wide_ |  Width of the section, which is measured by the number of columns over which it extends horizontally.  
---|---  
_Rows High_ |  Height of the section, which is measured by the number or rows over which it extends vertically.  
_Last Column on Row_ |  Check box that indicates whether the section is in the last column at the end of the current row.  
_Last Row in Table_ |  Check box that indicates whether the section is in the last row of the table.  
_Includes Panel_ |  Check box that indicates whether the section contains a panel.  
**Section Contents** |  You can optionally include additional contents such as _Text_ , _Images_ , _Menus_ and _Other_ parameters in the currently selected section. See **[Section Contents](Template%20Maintenance.htm#sectioncontents)**.  
**Menus**  
_Menu Name_ |  Enter a name for the new menu definition. To view or modify the settings for a previously saved menu definition, select the name from the drop box or manually enter the name. You can also create multiple menu definitions for the same template. To do this, highlight the existing menu name and type a new name. If the new menu name does not exist, a message asks if you wish to reset the current menu values and offers three possible responses: _Yes_ , _No_ , _Contents Only_ : |  _Yes_ |  All options are reset back to their default values to allow new settings to be entered for the new menu definition.  
---|---  
_No_ |  All previous settings, _including menu contents_ , are retained and reused for the new menu definition. Edit the settings and menu contents as needed.  
_Contents Only_ |  **_(Default)_** All previous settings, _except menu contents_ , are retained and reused for the new menu definition. Edit the settings and enter new menu contents as needed.  
  
Save the new menu definition either by clicking _OK_ (closes **Template Maintenance**) or by clicking _Apply_ (leaves **Template Maintenance** open with the current record displayed).

#### **Note:**  
When creating a new menu definition, a menu name is required to enable the other menu options for entry.  
  
_Menu Generation Program_ |  Name of the program file to use for generating the menu. Click the Program browse button to specify the program file or enter the program pathname. See **[Menu Generation Program](Menu_Generation.md)**. _(Added in PxPlus 2016)_  
**Layout** |  |  _Type_ |  Indicates whether the menu layout is _vertical_ or _horizontal_ : |  _vertical_ |  Positions the menu options one above the other _(Default)_  
---|---  
_horizontal_ |  Positions the menu options one beside the other on the same line  
_Wide_ |  Width of the menu options area (in pixels). This setting is ignored when _horizontal_ is selected for the _Type_.  
_High_ |  Height of the menu (in pixels).  
**Border** |  |  _Color_ |  Menu border color. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Corner Radius_ |  **_(Available only when a Border Color has been specified)_** Enter a value for the rounded corner radius or use the spinner controls to specify a value. A blank or low value (i.e. <10) produces squared menu corners. A higher value (10 - 30) produces progressively rounded menu corners. Maximum value is 99.  
_Shadow_ |  Shadow style for the menu. Selections are _none_ (Default), _bottom right_ , _bottom left_ , _top right_ , _top left_ , _full_ , _bottom_ , _top_ , _left_ , _right_.  
**Contents** |  |  _Font_ |  Font for the menu text.  
---|---  
_Size_ |  Font size for the menu text (in pixels).  
_Line Color_ |  Color for the line (vertical or horizontal) separating the menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
**Normal Display** |  |  _Background Color_ |  Specify a color for the menu background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Text Color_ |  Specify a color for the menu text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Bold_ |  Select this check box to bold the menu text.  
_Underscore_ |  Select this check box to underline the menu text.  
**Mouse Over Display** |  |  _Background Color_ |  Specify a color for the background only when the mouse pointer is positioned over individual menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Text Color_ |  Specify a color for the menu text only when the mouse pointer is positioned over individual menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Bold_ |  Select this check box to bold the menu text only when the mouse pointer is positioned over individual menu options.  
_Underscore_ |  Select this check box to underline the menu text only when the mouse pointer is positioned over individual menu options.  
**Background Image** |  |  _Image_ |  Select the image to display for the menu background. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
---|---  
_Mouse Over Image_ |  Select the image to display when the mouse pointer is positioned over the menu. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Repeat_ |  **_(Available only when an image has been selected for the menu background Image (see above))_** Selections for duplicating the image are: |  _repeat_ |  Duplicates the image _(Default)_  
---|---  
_no-repeat_ |  Does not duplicate the image  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_  
_Position_ |  **_(Available only when an image has been selected for the menu background Image (see above))_** Selections for positioning the image are: _left top_ (Default), _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
**Menu Content** |  This section is used to define the contents for the menu. If a **[Menu Generation Program](Template%20Maintenance.htm#menugen)** is entered, the _Menu Contents_ grid is not available for entry. For each option that you want to include in the menu, a separate grid row must be entered with the following details: |  _Menu text_ |  Enter the text for the menu option that will be visible to the user.  
---|---  
_Transaction or URL_ |  If the menu launches a different iNomads transaction, enter the Transaction code. If the menu spawns a sub-menu, enter the sub-menu name in the format _menu:name_ (**_where_**  _name_ is the sub-menu name). If the menu launches a Web page, enter the URL address preceded with _http://_.  
  
#### **Note:**  
Both the _Menu text**and** Transaction/URL_ components are needed; however, you may not always know the _Transaction/URL_ when creating the menu. In that case, you can save the menu definition with only the _Menu text_ entered and then complete the _Transaction/URL_ details later using the **[Menus](Template%20Maintenance.htm#menustab)** tab in **Template Maintenance**.  
  
Use the Delete and Move Up/Move Down buttons beside the list box to remove a menu option or rearrange the order of the options within the menu.

To view or change the content for a different menu, select a menu from the _Menu Name_ drop box. Selecting a different menu (or a different folder tab) automatically saves any changes to the current menu definition. You can also click the _Apply_ button to save changes.  
  
**Panel Header**  
**Panel Header** |  |  _Background Color_ |  Specify a color for the panel header background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Background Image_ |  Select the image to display for the panel header background. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.

#### **Note:**  
The selected image will be repeated horizontally.  
  
_Suppress Header Text_ |  Select this check box to hide the panel header text. When selected, the other panel header text options, _Text Color_ , _Text Font_ and _Font Size_ , are disabled.  
_Text Color_ |  **_(Available if the Suppress Header Text check box is not selected)_** Specify a color for the panel header text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Text Font_ |  **_(Available if the Suppress Header Text check box is not selected)_** Enter a font for the panel header text.  
_Font Size_ |  **(_Available if the Suppress Header Text check box is not selected)_** Enter a font size for the panel header text.  
**Panel Border** |  |  _Color_ |  Specify a color for the panel border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Style_ |  Select a style for the panel border. Selections are _standard_ (default), _none_ , _solid_ , _dotted_ , _dashed_ , _double_ , _groove_ , _ridge_ , _inset_ , _outset_.  
_Width_ |  Enter the width for the panel border (in pixels).  
_Corner Radius_ |  Enter a value for the rounded corner radius. A blank or low value (i.e. <10) produces squared panel corners. A higher value (10 - 30) produces progressively rounded panel corners. Maximum value is 99.  
_Shadow_ |  Select this check box to create a shadow effect behind the panel.  
**Panel Body**  
**Panel Background** |  |  _Background Color_ |  Specify a color for the panel header background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Background Image_ |  Select the image to display for the panel background. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Repeat_ |  **_(Available only when a Background Image has been selected for the panel background)_** Selections for duplicating the image are: |  _repeat_ |  Duplicates the image _(Default)_  
---|---  
_no-repeat_ |  Does not duplicate the image  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_  
_Position_ |  **_(Available only when a Background Image has been selected for the panel background)_** Selections for positioning the image are: _left top_ (Default), _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
**Panel Text** |  |  _Text Color_ |  Specify a color for the panel text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Text Font_ |  Enter a font for the panel text.  
_Font Size_ |  Enter a font size for the panel text.  
**Frames**  
**Frame Header and Body** |  |  _Header Background Color_ |  Specify a color for the frame header background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Header Background Image_ |  Select the image to display for the frame header background. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Body Background Color_ |  Specify a color for the frame background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
**Frame Border** |  |  _Color_ |  Specify a color for the frame border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Style_ |  Select a style for the frame border. Selections are _rounded_ (default), _square_ , _none_.  
**Frame Text** |  |  _Text Color_ |  Specify a color for the frame header text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Text Font_ |  Enter a font for the frame header text.  
_Text Size_ |  Enter a font size for the frame header text.  
**Folders**  
**Folder Background** |  |  _Background Color_ |  Specify a color for the folder background (excluding the tabs). See **[Color Specification](Color%20Specification.md)** for information on applying a color. If no folder _Background Color_ is defined, the folder background will be the color defined for the _Active Tab Background_.  
---|---  
**Folder Border** |  |  _Color_ |  Specify a color for the folder border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Style_ |  Select a border style to apply around the folder and the tabs. Selections are _standard_ (Default), _none_ , _solid_.  
  
#### **Note:**  
The folder border _Color_ applies only when a folder _Background Color_ or an _Active Tab Background_ for the folder tabs has been specified.  
  
**Folder Tab Colors** |  |  _Active Tab Background_ |  Specify a color for the background of the active tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
---|---  
_Active Tab Text_ |  Specify a color for the text of the active tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Inactive Tab Background_ |  Specify a color for the background of the inactive tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.

#### **Note:**  
If a folder border _Color_ has been specified in addition to an _Inactive Tab Background_ for the folder tabs, the folder border _Color_ will only be applied to the border of the inactive tab, not the entire folder.  
  
_Inactive Tab Text_ |  Specify a color for the text of the inactive tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Disabled Tab Background_ |  Specify a color for the background of the disabled tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
**Advanced Layout**  
**Define layout for each section and optional fixed contents** |  Displays a grid with the settings that were entered for each section of the layout when the template was created. Each grid row represents a numbered section (identified by the _SectID_ column). Each grid column heading represents the name of an option, similar to those on the **[Sections](Template%20Maintenance.htm#sectionstab)** tab. Use this grid to refine and adjust the appearance of the template. This is done by modifying the settings for the numbered section(s) you want to adjust and then clicking the _Apply_ button. To add a new section, enter the applicable settings in a blank grid row and then click the _Apply_ button. You can use the Move Up/Move Down buttons to the right of the grid to rearrange the order of the sections. However, keep in mind that other sections of the template layout may be impacted, and the settings for those sections may need to be adjusted. To view the template with these changes on a Web browser, click the _Test_ button.

#### **Important Note:**  
Care should be taken when changing the settings for the _Cols_ , _Rows_ , _Panel_ , _EndRow_ and _EndTbl_ columns, as these options impact the appearance of the template layout. Changes to the template layout after section options have already been defined will result in section options being lost.

See **[Advanced Layout Examples](Template%20Maintenance.htm#layout)**. |  _SectID_ |  Number that identifies each section of the template layout.  
---|---  
_Cols_ |  Width of the section, which is measured by the number of columns over which it extends horizontally.  
_Rows_ |  Height of the section, which is measured by the number or rows over which it extends vertically.  
_Panel_ |  Check box that indicates whether the section contains a panel.  
_EndRow_ |  Check box that indicates whether the section is in the last column at the end of the current row.  
_EndTbl_ |  Check box that indicates whether the section is in the last row of the table.  
_Wide_ |  Width of the section (in pixels). To change the width of a section, click on this cell for the _SectID_ row that you want to change, enter the new value and click the _Apply_ button. The new value is automatically reflected in the **[Sections](Template%20Maintenance.htm#sectionstab)** tab.  
_Hi_ |  Height of the section (in pixels). To change the height of a section, click on this cell for the _SectID_ row that you want to change, enter the new value and click the _Apply_ button. The new value is automatically reflected in the **[Sections](Template%20Maintenance.htm#sectionstab)** tab.  
_BackColor_ |  Background color for the section. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_BackImage_ |  Background image for the section. Click the Image browse button inside this cell to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Repeat_ |  **_(Available only when a BackImage has been selected)_** Selections for duplicating the image are: |  _repeat_ |  Duplicates the image _(Default)_  
---|---  
_no-repeat_ |  Does not duplicate the image  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_  
_Position_ |  **_(Available only when a BackImage has been selected)_** Selections for positioning the image are: _left top_ (Default), _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
**Section Contents** |  Displays any additional contents such as _Text_ , _Images_ , _Menus_ and _Other_ parameters that were included in the selected section of the template layout. See **[Section Contents](Template%20Maintenance.htm#sectioncontents)**.  
**Advanced Menus**  
**Define layout and options for system generated menus** |  The first grid displays the settings for each menu defined for the selected section. If more than one menu has been defined for the same section, all of menu names will be listed. Each row represents a different menu definition, and each column heading represents the name of an option, similar to those on the **[Menus](Template%20Maintenance.htm#menustab)** tab. The second grid displays the menu contents for the menu definition selected in the first grid. After a template has been created, you can access the **Advanced Menus** tab to refine and adjust the menu definition by changing the desired settings and then clicking the _Apply_ button. To view the template with these changes on a Web browser, click the _Test_ button. See **[Menu Generation Program](Menu_Generation.md)**. |  _Name_ |  Enter a name for the new menu definition or select an existing menu name from the drop box.  
---|---  
_Type_ |  Select either a _vertical_ or _horizontal_ menu layout: |  _vertical_ |  Positions the menu options one above the other _(Default)_  
---|---  
_horizontal_ |  Positions the menu options one beside the other on the same line  
_Text font_ |  Enter a font for the menu text.  
_Font Sz_ |  Enter a font size for the menu text (in pixels).  
_Text Color_ |  Color for the menu text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Bold_ |  Select this check box to bold the menu text.  
_U/L_ |  Select this check box to underline the menu text.  
_Width_ |  Enter a width for the menu options area. This setting is ignored when _horizontal_ is selected for the menu layout _Type_.  
_Height_ |  Enter a height for the menu options area. (Applies to either _horizontal_ or _vertical_ menu layout _Type_.)  
_Shadow_ |  Select a shadow style for the menu. Selections are _none_ (default), _bottom right_ , _bottom left_ , _top right_ , _top left_ , _full_ , _bottom_ , _top_ , _left_ , _right_.  
_Border Clr_ |  Color for the menu border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Corner Rad_ |  **_(Available only when a Border Color has been specified)_** Enter a value for the rounded corner radius or use the spinner controls to specify a value. A blank or low value (i.e. <10) produces squared menu corners. A higher value (10 - 30) produces progressively rounded menu corners. Maximum value is 99.  
_Sep Color_ |  Color for the line (vertical or horizontal) separating the menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Back Clr_ |  Color for the menu background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Back Image_ |  Image to display for the menu background. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Repeat_ |  **_(Available only when an image has been selected for the menu background Image (see above))_** Selections for duplicating the image are: |  _repeat_ |  Duplicates the image _(Default)_  
---|---  
_no-repeat_ |  Does not duplicate the image  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_  
_Position_ |  **_(Available only when an image has been selected for the menu background Image (see above))_** Selections for positioning the image are: _left top_ (Default), _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
_Menu Generation Program_ |  Pathname of the program file to use for generating the menu. See **[Menu Generation Program](Menu_Generation.md)**. _(added in PxPlus 2016)_  
  
#### **Note:**  
For the following options, ***** indicates style with mouse over.  
  
_*Bold_ |  Select this check box to bold the menu text only when the mouse pointer is positioned over individual menu options.  
_*U/L_ |  Select this check box to underline the menu text only when the mouse pointer is positioned over individual menu options.  
_*Text Color_ |  Color for the menu text only when the mouse pointer is positioned over individual menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_*Back Clr_ |  Color for the background only when the mouse pointer is positioned over individual menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_*Back Image_ |  Image to display when the mouse pointer is positioned over the menu. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
**Menu Contents** |  This section is used to define the contents for the menu. If a **[Menu Generation Program](Template%20Maintenance.htm#menugen)** is entered, the _Menu Contents_ grid is not available for entry. For each option that you want to include in the menu, a separate grid row must be entered with the following details: |  _Menu text_ |  Enter the text for the menu option that will be visible to the user.  
---|---  
_Transaction or URL_ |  If the menu launches a different iNomads transaction, enter the Transaction code. If the menu spawns a sub-menu, enter the sub-menu name in the format _menu:name_ (**_where_**  _name_ is the sub-menu name). If the menu launches a Web page, enter the URL address preceded with _http://_.  
  
#### **Note:**  
Both the _Menu text**and** Transaction/URL_ components are needed; however, you may not always know the _Transaction/URL_ when creating the menu. In that case, you can save the menu definition with only the _Menu text_ entered and then complete the _Transaction/URL_ details later using the **[Menus](Template%20Maintenance.htm#menustab)** tab in **Template Maintenance**.

Use the Delete and Move Up/Move Down buttons beside the list box to remove a menu option or rearrange the order of the options within the menu.

To view or change the content for a different menu, select a menu _Name_ in the upper grid. Selecting a different menu (or a different folder tab) automatically saves any changes to the current menu contents. You can also click the _Apply_ button to save changes.  
  
_Test_ |  Displays the selected template on a Web browser in "test" mode with the current settings in **Template Maintenance** applied. This allows you to preview the template and make any further adjustments if needed. _(added in PxPlus 2016)_  
  
Changing any of the template settings disables the _Test_ button only until the _Apply_ button is selected. This ensures that you are testing the template with the most recent changes applied.

#### **Note:**  
This "test" functionality is **_not_** available when running WindX.  
  
_Edit "custom.conf"_ |  This button is displayed only when a _custom.conf_ file with custom options defined for the selected template exists in that template's sub-directory (within the _inomads_ _/templates_ directory). Selecting this button invokes Configuration Maintenance that displays the template's custom settings.  
_OK_ |  Saves any changes and closes **Template Maintenance**.  
_Close_ |  Closes **Template Maintenance**. A confirm-save message displays if you have changed any of the data but did not select the _Apply_ button prior to closing.  
_Apply_ |  This button is available only when any of the template settings is changed. Selecting this button applies the changes to the selected template. **Template Maintenance** remains open to allow you to _Test_ the template and make further adjustments if needed.  
  
##  Advanced Layout Examples

The first grid in the Advanced Layout tab displays the settings entered for each section of the layout when the template was created. The settings for the _Cols_ , _Rows_ , _Panel_ , _EndRow_ and _EndTbl_ columns are based on the template layout selected, and changing these settings impacts the appearance of the template layout. To illustrate this, refer to the example below.

**_Example:_**

This example demonstrates how changing a setting for one section of a template can impact the other sections and affect the overall appearance of the template layout.

1. |  A template is created using the following layout and settings: |   
---|---|---  
|  |  |   
2. |  The _Wide_ setting for SectID 3 is manually changed from 150 to 600: |   
|  |   
3. |  For this layout, changing the _Wide_ setting not only impacts Section 3 but also impacts Section 7 because both sections are in the same column. At the same time, the width of Sections 1, 2, 5 and 6 are impacted to accommodate this change.  
|   
| | | |   
  
To further explain the advanced layout settings, refer to the template layout examples below.

#### **Note:**  
A _panel_ is a display window consisting of panel controls, which are the graphical components that allow users to interact with an application. For information on creating a panel and panel controls, see **[NOMADS Panel Designer](../NOMADS%20Graphical%20Application/Panel%20Designer/Introduction.md)**.

**Template Layout** |  **Advanced Layout Tab Settings**  
---|---  
  
> |  |   
---  
This template is made up of 2 sections:  
**Section 1:** |  This section is 1 column wide and 1 row high. Although it extends horizontally across the full width of the table, it takes up 1 column, as does the section below it. _EndRow_ is selected because this section ends the current row.  
**Section 2:** |  This section is 1 column wide and 1 row high. Like Section 1, it extends horizontally across the full width of the table. It contains a panel. _EndTbl_ is selected because this is the last section of the table.  
  
> |  |   
---  
This template is made up of 3 sections:  
**Section 1:** |  This section is 2 columns wide and 1 row high. At first glance, **Section 1** of this layout looks similar to **Section 1** in the previous layout, but the _Cols_ setting is different. Although this section is not visibly broken into 2 separate columns, its width extends horizontally across the full width of the 2 sections below it, which together take up 2 columns. _EndRow_ is selected because this section ends the current row.  
**Section 2:** |  This section is 1 column wide and 1 row high. This section is at the beginning of the row; therefore, _EndRow_ is not selected.  
**Section 3:** |  This section is 1 column wide and 1 row high. It contains a panel. _EndTbl_ is selected because this is the last section of the table.  
  
> |  |   
---  
This template is made up of 4 sections:  
**Section 1:** |  This section is 3 columns wide and 1 row high. Although **Section 1** of this layout looks similar to **Section 1** of the previous two layouts, the _Cols_ setting is again different. This section is not visibly broken into 3 separate columns, but its width extends horizontally across the full width of the 3 sections below it, which together take up 3 columns. _EndRow_ is selected because this section ends the current row.  
**Section 2:** |  This section is 1 column wide and 1 row high. This section is at the beginning of the row; therefore, _EndRow_ is not selected.  
**Section 3:** |  This section is 1 column wide and 1 row high. It contains a panel. This section is in the middle of the row; therefore, _EndRow_ is not selected.  
**Section 4:** |  This section is 1 column wide and 1 row high. _EndTbl_ is selected because this is the last section of the table.  
  
> |  |   
---  
This template is made up of 4 sections:  
**Section 1:** |  This section is 2 columns wide and 1 row high. As explained earlier, this section is not visibly broken into 2 separate columns, but its width extends horizontally across the full width of the 2 sections below it, which together take up 2 columns. _EndRow_ is selected because this section ends the current row.  
**Section 2:** |  This section is 1 column wide and 1 row high. This section is at the beginning of the row; therefore, _EndRow_ is not selected.  
**Section 3:** |  This section is 1 column wide and 1 row high. It contains a panel. _EndRow_ is selected because this section ends the current row.  
**Section 4:** |  This section is 2 columns wide and 1 row high. Similar to **Section 1** , its width extends horizontally across the full width of the 2 sections above it, which together take up 2 columns. _EndTbl_ is selected because this is the last section of the table.  
  
> |  |   
---  
This template is made up of 4 sections:  
**Section 1:** |  This section is 1 column wide and 2 rows high. Although this section is not visibly broken into 2 separate rows, its height extends vertically to include the height of the 2 sections beside it, which together take up 2 rows. This section is at the beginning of the row; therefore, _EndRow_ is not selected.  
**Section 2:** |  This section is 1 column wide and 1 row high. This section is in the middle of the row; therefore, _EndRow_ is not selected.  
**Section 3:** |  This section is 1 column wide and 2 rows high, similar to **Section 1**. _EndRow_ is selected because this section ends the current row.  
**Section 4:** |  This section is 1 column wide and 1 row high. Although the height of this section differs from **Section 2** , it is still considered a single row. It contains a panel. _EndTbl_ is selected because this is the last section of the table.  
  
> |  |   
---  
This template is made up of 7 sections:  
**Section 1:** |  This section is 1 column wide and 1 row high. This section is at the beginning of the row; therefore, _EndRow_ is not selected.  
**Section 2:** |  This section is 1 column wide and 1 row high. This section is in the middle of the row; therefore, _EndRow_ is not selected.  
**Section 3:** |  This section is 1 column wide and 1 row high. _EndRow_ is selected because this section ends the current row.  
**Section 4:** |  This section is 3 columns wide and 1 row high. It contains a panel. _EndRow_ is selected because this section ends the current row.  
**Section 5:** |  This section is 1 column wide and 1 row high. This section is at the beginning of the row; therefore, _EndRow_ is not selected.  
**Section 6:** |  This section is 1 column wide and 1 row high. This section is in the middle of the row; therefore, _EndRow_ is not selected.  
**Section 7:** |  This section is 1 column wide and 1 row high. _EndTbl_ is selected because this is the last section of the table.  
  
##  Section Contents

Section Contents allows you to optionally include additional contents such as **[Text](Template%20Maintenance.htm#text)**, **[Images](Template%20Maintenance.htm#image)**, **[Menus](Template%20Maintenance.htm#menu)** and **[Other](Template%20Maintenance.htm#other)** parameters in the selected section of the template layout. To do this, click the Add Section Contents button beside the list box. From the popup menu, select the type of contents you are adding. When you have made your selection, a separate window with options pertaining to your selection will display. After saving the section contents, you can use the Delete, Edit and Move Up/Down buttons to the right of the Section Contents list box to remove, modify or rearrange the order of these additions.

The options for adding **[Text](Template%20Designer%20Wizard.htm#text)**, **[Images](Template%20Designer%20Wizard.htm#image)**, **[Menus](Template%20Designer%20Wizard.htm#menu)** and **[Other](Template%20Designer%20Wizard.htm#other)** parameters are described below.

**Text**

**Section Contents - Text Template**  
---  
_Text_ |  Enter the text to add to the current section.  
_Font_ |  Enter a font for the text.  
_Color_ |  Specify a color for the text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_URL_ |  Enter a URL if the text will be a hyperlink. If the text launches a Web page, enter the URL address preceded with _http://_.  
_Vertical Position_ |  Enter a vertical position for the text. Selections are _Top_ (default), _Middle_ , _Bottom_.  
_Vertical Adjustment_ |  Enter a value (in pixels) to adjust the vertical position of the text, if necessary.  
_Horizontal Position_ |  Enter a horizontal position for the text. Selections are _Left_ (default), _Center_ , _Right_.  
_Horizontal Adjustment_ |  Enter a value (in pixels) to adjust the horizontal position of the text, if necessary.  
  
**Image**

**Section Contents - Image Template**  
---  
_Image_ |  Select the image to add to the current section. Click the Image browse button to select an image. If the image selected is not located under the _*plus/inomads_ directory, you are asked if you want to copy the image file to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. It is a good idea to keep a copy of the image file in the template's directory so that it can be easily located and displayed when the template is applied.  
_Width_ |  Enter a width for the image (in pixels). The image will be scaled to the specified height and width.  
_Height_ |  Enter a height for the image (in pixels). The image will be scaled to the specified height and width.  
_URL_ |  Enter a URL if the image will be a hyperlink. If the image launches a Web page, enter the URL address preceded with _http://_.  
_Vertical Position_ |  Enter a vertical position for the image. Selections are _Top_ (default), _Middle_ , _Bottom_.  
_Vertical Adjustment_ |  Enter a value (in pixels) to adjust the vertical position of the image, if necessary.  
_Horizontal Position_ |  Enter a horizontal position for the image. Selections are _Left_ (default), _Center_ , _Right_.  
_Horizontal Adjustment_ |  Enter a value (in pixels) to adjust the horizontal position of the image, if necessary.  
  
**Menu**

**Section Contents - Menu Template**  
---  
_Menu Name_ |  Enter a name for the menu. To define menu content and display settings, see the **[Menus](Template%20Maintenance.htm#menustab)** tab.  
_Define Menu_ |  Click this button to invoke the **[Define Menus](Template%20Designer%20Wizard.htm#definemenus)** window for defining a new menu for the current section.  
_Width_ |  Enter a width for the menu (in pixels).  
_Height_ |  Enter a height for the menu (in pixels).  
_Vertical Position_ |  Enter a vertical position for the menu. Selections are _Top_ (default), _Middle_ , _Bottom_.  
_Vertical Adjustment_ |  Enter a value (in pixels) to adjust the vertical position of the menu, if necessary.  
_Horizontal Position_ |  Enter a horizontal position for the menu. Selections are _Left_ (default), _Center_ , _Right_.  
_Horizontal Adjustment_ |  Enter a value (in pixels) to adjust the horizontal position of the menu, if necessary.  
  
**Other**

**Section Contents - Other Template**  
---  
_Parameter 1 - Parameter 8_ |  Define the parameters to be passed to the user-defined Template Definition files (similar to _text.tpl_ , _image.tpl_ or _menu.tpl_). 
