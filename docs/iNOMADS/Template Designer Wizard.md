# Templates  
  
**Template Designer Wizard**|   
---|---  
  
The **Template Designer Wizard** provides a simple and convenient eight-step process for creating templates for use in iNomads. A _template_ defines the way that panels will be presented to the Web browser and controls the visual characteristics of the Web page such as size, font, colors and images. See **[Template Designer Wizard Steps](Template%20Designer%20Wizard.htm#steps)**.

After the template is created, you can use **[Template Maintenance](Template%20Maintenance.md)** to modify your template as needed. See **[Modifying Selections After the Template is Created](Template%20Designer%20Wizard.htm#modifyselections)**.

_(The Template Designer Wizard was added in PxPlus 2016.)_

To invoke the wizard, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Web Deployment_ category and select _iNomads Setup_ to invoke the **[iNomads Setup](iNomads%20Setup.md)** window. Click the _New Template_ button.  
From a Web browser |  Launch iNomads from a Web browser. From the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** window, invoke the **[iNomads Setup](iNomads%20Setup.md)** window by either clicking the _Admin_ button or selecting _admin_ from the _Transaction_ drop box. Click the _New Template_ button.  
From the PxPlus Command prompt |  Invoke the **[iNomads Setup](iNomads%20Setup.md)** window by entering the following command: **RUN "*plus/inomads/admin"**. Click the _New Template_ button.  
  
This launches the **Welcome** panel, which provides general information about the Template Designer Wizard and a Help link for creating an iNomads Template.

> Click _Next_ to proceed to **[Step 1: Name](Template%20Designer%20Wizard.htm#step1)**.

The wizard panel for each step consists of three sections:

_Progress Bar_ |  This section extends across the top of the wizard panel and lists the eight steps for creating a template. A white step number against a dark red background indicates the current step being defined. A gray step number against a gray background indicates that the step is temporarily unavailable until required information has been entered first. The step number will change to white when that step becomes available for entry. Clicking on a step number will go directly to that step without having to select intermediate steps in order. This is useful when reviewing or changing previous selections before exiting the wizard. Keep in mind that certain steps may require data before advancing to subsequent steps.  
---|---  
_Work Area_ |  This section is the body of the wizard panel and consists of fields used for processing each step.  
_Navigation Bar_ |  This section extends across the bottom of the wizard panel and consists of buttons for moving through the steps.  
  
As you proceed through the wizard, you may notice that some panels contain several fields. While entering a template _Name_ (step 1) is a required field, you are not required to enter data for all the fields. Data only needs to be entered for fields that you want to customize to generate a template tailored to your specific needs and that is different from the standard iNomads template.

To determine what data you need to enter, you may find it helpful to review the configuration settings for some of the sample templates first. This is done by invoking the **[iNomads Setup](iNomads%20Setup.md)** window, selecting a sample template such as _admin_ or _dentist_ from the _Template_ drop box and clicking the _Custom_ button (within the _Template Settings_ frame box) to launch **[Template Maintenance](Template%20Maintenance.md)** where the settings for the selected template can be viewed.

##  Template Designer Wizard Steps

**[Step 1: Name](Template%20Designer%20Wizard.htm#step1)**

Name the template and configure the page background.

**[Step 2: Layout](Template%20Designer%20Wizard.htm#step2)**

Choose the layout from a selection of pre-defined template layouts.

**[Step 3: Sections](Template%20Designer%20Wizard.htm#step3)**

Configure the layout for each section of the template.

**[Step 4: Panel Header](Template%20Designer%20Wizard.htm#step4)**

Configure the appearance of the panel header and borders.

**[Step 5: Panel Body](Template%20Designer%20Wizard.htm#step5)**

Configure the appearance of the panel text and background.

**[Step 6: Frames](Template%20Designer%20Wizard.htm#step6)**

Configure the appearance of any frames within the panel.

**[Step 7: Folders](Template%20Designer%20Wizard.htm#step7)**

Configure the appearance of any folders on the panel.

**[Step 8: Finish](Template%20Designer%20Wizard.htm#step8)**

Review the summary and save the template.

##  Step 1: Name Template

Enter a _Name_ for the template and define the page background color and image. When you are ready to proceed to the next step, click _Next_.

> This panel consists of the following:

**Define a name for the template**  
---  
_Name_ |  **_(Required)_** A name for the template must be entered to allow the remaining wizard steps to become available. Valid characters are A-Z, a-z, numbers 0-9, **.**  _(dot)_ and **_**  _(underscore)_. A message displays when an invalid character has been entered. Hovering the mouse pointer over the button adjacent to this field displays a floating tooltip that includes a templates Help link.  
**Define the page background color or image** The following four options will be the default used in any section of the template not specifically defined in **[Step 3: Sections](Template%20Designer%20Wizard.htm#step3)**.  
_Color_ |  Specify a color to use for the background. See **[Color Specification](Color%20Specification.md)** for information on applying a color. When a color is selected/entered, a preview of that color is displayed.  
_Image_ |  Select the image to display for the background. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_.  
_Repeat_ |  **_(Available only when an Image is selected)_** Displays the following selections for duplicating the image: |  _repeat_ |  **_(Default)_** Duplicates the image.  
---|---  
_no-repeat_ |  Does not duplicate the image.  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_.  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_.  
_Position_ |  **_(Available only when an Image is selected)_** Displays the following selections for positioning the image: _left top_** _(Default)_** , _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
  
##  Step 2: Layout

Select a basic layout for the template by clicking on the image that most closely resembles the desired layout. By default, the first layout is selected. When you are ready to proceed to the next step, click _Next_.

> If more sections need to be added to the layout, first complete Step 8 of the wizard by clicking _Finish_ to save the template and then access **[Template Maintenance](Template%20Maintenance.md)** to modify the settings on the _Advanced Layout_ tab.

#### **Important Note:**  
Returning to the **Layout** panel to change the template layout after section options have been defined will result in the section options being lost.

##  Step 3: Sections

Determine the layout for each section of the template.

> A diagram of the template layout selected in Step 2 is displayed with a number identifying each section. By default, the first section is highlighted, indicating that this section is currently being configured, and the words **Section: 1** displayed in bold above the list of options confirms this. To configure a different section, click that section in the diagram. The **Section** heading above the list of options to the right changes to match the number of the selected section.

To illustrate this further, refer to the following example.

**_Example:_**

|  1. |  Start the Template Designer Wizard. In Step 2, click on the layout below to select it.  
---|---|---  
|  2. |  Proceed to Step 3. A diagram of this layout is displayed (see below). Section 1 is highlighted in dark red by default, and the words **Section: 1** display above the list of options to the right, indicating that these option settings belong to Section 1.  
|  3. |  Click on Section 2 inside this diagram (see below). Section 2 is highlighted in dark red, and the words **Section: 2** display above the list of options to the right, indicating that these option settings belong to Section 2.  
  
This panel consists of the following:

_Background Color_ |  Specify the color to use for the section background. See **[Color Specification](Color%20Specification.md)** for information on applying a color. When a color is selected/entered, a preview of that color is displayed.  
---|---  
_Background Image_ |  Select the image to display for the section background. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_.  
_Repeat_ |  **_(Available only when a Background Image is selected)_** Selections for duplicating the image are: |  _repeat_ |  **_(Default)_** Duplicates the image.  
---|---  
_no-repeat_ |  Does not duplicate the image.  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_.  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_.  
_Position_ |  **_(Available only when a Background Image is selected)_** Selections for positioning the image are _left top_ ** _(Default)_** , _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
_Width_ |  Enter a width of the section (in pixels). If the width of the section increases as the panel is resized, leave the _Width_ blank.  
_Height_ |  Enter a height of the section (in pixels). If the height of the section increases as the panel is resized, leave the _Height_ blank.  
  
##  Section Contents

The lower portion of the **Step 3: Sections** panel allows you to optionally include additional contents such as _Text_ , _Images_ , _Menus_ and _Other_ parameters in the selected section of the template layout.

To do this, click the Add Section Contents button beside the list box. From the popup menu, select the type of contents you are adding. When you have made your selection, a separate dialog with options pertaining to your selection will display. After saving the section contents, you can use the Delete, Edit and Move Up/Move Down buttons to the right of the Section Contents list box to remove, modify or rearrange the order of these additions.

The options for adding **[Text](Template%20Designer%20Wizard.htm#text)**, **[Images](Template%20Designer%20Wizard.htm#image)**, **[Menus](Template%20Designer%20Wizard.htm#menu)** and **[Other](Template%20Designer%20Wizard.htm#other)** parameters are described below.

**Text**

**Section Contents - Text Template**  
---  
_Text_ |  Enter the text to add to the current section.  
_Font_ |  Enter a font for the text.  
_Color_ |  Specify a color for the text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_URL_ |  Enter a URL if the text will be a hyperlink. If the text launches a Web page, enter the URL address preceded with _http://_.  
_Vertical Position_ |  Enter a vertical position for the text. Selections are _Top_ ** _(Default)_** , _Middle_ , _Bottom_.  
_Vertical Adjustment_ |  Enter a value (in pixels) to adjust the vertical position of the text, if necessary.  
_Horizontal Position_ |  Enter a horizontal position for the text. Selections are _Left_ ** _(Default)_** , _Center_ , _Right_.  
_Horizontal Adjustment_ |  Enter a value (in pixels) to adjust the horizontal position of the text, if necessary.  
  
**Image**

**Section Contents - Image Template**  
---  
_Image_ |  Select the image to add to the current section. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_. To clear the image from the input control, click the Delete Image button.  
_Width_ |  Enter a width for the image (in pixels). The image will be scaled to the specified height and width.  
_Height_ |  Enter a height for the image (in pixels). The image will be scaled to the specified height and width.  
_URL_ |  Enter a URL if the image will be a hyperlink. If the image launches a Web page, enter the URL address preceded with _http://_.  
_Vertical Position_ |  Enter a vertical position for the image. Selections are _Top_ ** _(Default)_** , _Middle_ , _Bottom_.  
_Vertical Adjustment_ |  Enter a value (in pixels) to adjust the vertical position of the image, if necessary.  
_Horizontal Position_ |  Enter a horizontal position for the image. Selections are _Left_ ** _(Default)_** , _Center_ , _Right_.  
_Horizontal Adjustment_ |  Enter a value (in pixels) to adjust the horizontal position of the image, if necessary.  
  
**Menu**

**Section Contents - Menu Template**  
---  
_Menu Name_ |  Enter a name for the menu.  
_Define Menu_ |  Click this button to invoke the **[Define Menus](Template%20Designer%20Wizard.htm#definemenus)** dialog for defining a new menu for the current section.  
_Width_ |  Enter a width for the menu (in pixels).  
_Height_ |  Enter a height for the menu (in pixels).  
_Vertical Position_ |  Enter a vertical position for the menu. Selections are _Top_ ** _(Default)_** , _Middle_ , _Bottom_.  
_Vertical Adjustment_ |  Enter a value (in pixels) to adjust the vertical position of the menu, if necessary.  
_Horizontal Position_ |  Enter a horizontal position for the menu. Selections are _Left_ ** _(Default)_** , _Center_ , _Right_.  
_Horizontal Adjustment_ |  Enter a value (in pixels) to adjust the horizontal position of the menu, if necessary.  
  
**Other**

**Section Contents - Other Template**  
---  
_Parameter 1 Parameter 8_ |  Define the parameters to be passed to the user-defined Template Definition files (similar to _text.tpl_ , _image.tpl_ or _menu.tpl_).  
  
When you are ready to proceed to the next step, click _Next_.

##  Step 4: Panel Header

Configure the appearance of the panel header and the panel border that will be drawn around the NOMADS panel.

> This panel consists of the following:

**Define the appearance of the panel header**  
---  
_Background Color_ |  Specify a color for the panel header background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Background Image_ |  Select the image to display for the panel background. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_.

#### **Note:**  
The selected image will be repeated horizontally.  
  
_Suppress Header Text_ |  Select this check box to hide the panel header text. When selected, the other panel header text options, _Text Color_ , _Text Font_ and _Font Size_ , are disabled.  
_Text Color_ |  **_(Available if the Suppress Header Text check box is not selected)_** Specify a color for the panel header text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Text Font_ |  **_(Available if the Suppress Header Text check box is not selected)_** Enter a font for the panel header text.  
_Font Size_ |  **_(Available if the Suppress Header Text check box is not selected)_** Enter a font size for the panel header text.  
**Define the appearance of the panel border**  
_Color_ |  Specify a color for the panel border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Style_ |  Select a style for the panel border. Selections are _standard_ ** _(Default)_** , _none_ , _solid_ , _dotted_ , _dashed_ , _double_ , _groove_ , _ridge_ , _inset_ , _outset_.  
_Width_ |  Enter the width for the panel border (in pixels).  
_Rounded Corner Radius_ |  Enter a value for the rounded corner radius. A blank or low value (i.e. <10) produces squared panel corners. A higher value (10 - 30) produces progressively rounded panel corners. Maximum value is 99.  
_Shadow_ |  Select this check box to create a shadow effect behind the panel.  
  
##  Step 5: Panel Body

Configure the appearance of the panel background and any text that displays on the NOMADS panel.

> This panel consists of the following:

**Define the default appearance for the panel background**  
---  
_Background Color_ |  Specify a color for the panel header background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Background Image_ |  Select the image to display for the panel background. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_.  
_Repeat_ |  **_(Available only when a Background Image is selected for the panel background)_** Selections for duplicating the image are: |  _repeat_ |  **_(Default)_** Duplicates the image.  
---|---  
_no-repeat_ |  Does not duplicate the image.  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_.  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_.  
_Position_ |  **_(Available only when a Background Image is selected for the panel background)_** Selections for positioning the image are _left top_ ** _(Default)_** , _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
**Define the default appearance of any text located in the panel**  
_Text Color_ |  Specify a color for the panel text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Text Font_ |  Enter a font for the panel text.  
_Font Size_ |  Enter a font size for the panel text.  
  
##  Step 6: Frames

Configure the appearance of any frame (box) controls on the NOMADS panel.

> This panel consists of the following:

**Define the appearance of the frame backgrounds**  
---  
_Header Background Color_ |  Specify a color for the frame header background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Header Background Image_ |  Select the image to display for the frame header background. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_.  
_Body Background Color_ |  Specify a color for the frame background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
**Define the appearance of the frame border**  
_Color_ |  Specify a color for the frame border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Style_ |  Select a style for the frame border. Selections are _rounded_ ** _(Default)_** , _square_ , _none_.  
**Define the appearance of the text in the frame header**  
_Text Color_ |  Specify a color for the frame header text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Text Font_ |  Enter a font for the frame header text.  
_Text Size_ |  Enter a font size for the frame header text.  
  
##  Step 7: Folders

Configure the appearance of folder controls on the NOMADS panel.

> This panel consists of the following:

**Define the background color for the folder**  
---  
_Background Color_ |  Specify a color for the folder background (excluding the tabs). See **[Color Specification](Color%20Specification.md)** for information on applying a color. If no folder _Background Color_ is defined, the folder background will be the color defined for the _Active Tab Background_.  
**Define the appearance of the folder border**  
_Color_ |  Specify a color for the folder border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.

#### **Note:**  
The folder border _Color_ applies only when a folder _Background Color_ or an _Active Tab Background_ for the folder tabs has been specified.  
  
_Style_ |  Select a border style to apply around the folder and the tabs. Selections are _standard_ ** _(Default)_** , _none_ , _solid_.  
**Define the colors for the folder tabs**  
_Active Tab Background_ |  Specify a color for the background of the active tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Active Tab Text_ |  Specify a color for the text of the active tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Inactive Tab Background_ |  Specify a color for the background of the inactive tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.

#### **Note:**  
If a folder border _Color_ has been specified in addition to an _Inactive Tab Background_ for the folder tabs, the folder border _Color_ will only be applied to the border of the inactive tab, not the entire folder.  
  
_Inactive Tab Text_ |  Specify a color for the text of the inactive tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Disabled Tab Background_ |  Specify a color for the background of the disabled tab. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
  
##  Step 8: Finish

Review your selections for the previous steps. The wizard options and data are presented in a grid format with your selections shown in the second column. A vertical scroll bar, if applicable, allows you to scroll through the grid.

> Select the **Click here to preview the template** hyperlink above the grid to preview the template with your selections applied.

To change any of your selections, you can either use the _Back_ button or click the numbered step button in the progress bar at the top to navigate to any of the previous steps and make the desired changes.

When you are satisfied with the results, click the _Finish_ button to complete the wizard and save the template. In addition, any selected images are copied to an _Images_ directory that is automatically created for the new template under _*plus\inomads\templates_.

## Modifying Selections after the Template is Created

After saving the template and exiting the wizard, you may decide to make additional changes to the template. To do this, follow these steps:

|  1. |  Invoke the **[iNomads Setup](iNomads%20Setup.md)** window from either the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** (go to _Web Deployment_ category and select _iNomads Setup_) or the **[iNomads Application Launchpad](iNOMADS%20Application%20Launchpad.md)** (click _Admin_ button).  
---|---|---  
|  2. |  From the _Template_ drop box, select the name of the template to modify.  
|  3. |  Click the _Custom_ button (within the _Template Settings_ frame box) to invoke **[Template Maintenance](Template%20Maintenance.md)**. From this window, you can change any of your template's previous settings.  
|  4. |  After making changes, click the _Apply_ button and then click _Test_ to preview the template with these changes.  
|  5. |  When you are satisfied with the results, click _OK_ or _Close_ to exit Template Maintenance.  
  
##  Define Menus

The **Define Menus** window is used to create one or more menus to add to a template. It consists of options for defining the menu layout, the menu contents and background image.

To invoke this window, follow these steps:

|  1. |  Go to the **Step 3: Sections** panel of the Template Designer Wizard.  
---|---|---  
|  2. |  Click the Add Section Contents button beside the **[Section Contents](Template%20Designer%20Wizard.htm#sectioncontents)** list box.  
|  3. |  Select _Menu_ from the popup menu. The **Section Contents - Menu Template** window displays.  
|  4. |  Click the _Define Menu_ button. The **Define Menus** window displays.  
  
  
  
This window consists of the following:

_Menu Name_ |  Enter a name for the new menu definition. To view or modify the settings for a previously saved menu definition, select the name from the drop box or manually enter the name. You can create multiple menu definitions for the same template. To do this, highlight the existing menu name and type a new name. If the new menu name does not exist, a message asks if you wish to reset the current menu values and offers three possible responses: _Yes_ , _No_ , _Contents Only_ : |  _Yes_ |  All options are reset back to their default values to allow new settings to be entered for the new menu definition.  
---|---  
_No_ |  All previous settings, _including menu contents_ , are retained and reused for the new menu definition. Edit the settings and menu contents as needed.  
_Contents Only_ |  **_(Default)_** All previous settings, _except menu contents_ , are retained and reused for the new menu definition. Edit the settings and enter new menu contents as needed.  
  
#### **Note:**  
When creating a new menu definition, a menu name is required to enable the other menu options for entry.  
  
_Menu Generation Program_ |  Click the Program browse button to select or manually enter the program file name to use for generating the menu. See **[Menu Generation Program](Menu_Generation.md)**.  
**Define the menu layout**  
_Type_ |  Select either a _vertical_ or _horizontal_ menu layout: |  _vertical_ |  **_(Default)_** Positions the menu options one above the other.  
---|---  
_horizontal_ |  Positions the menu options one beside the other on the same line.  
_Width_ |  Enter a width for the menu options area. This setting is ignored when _Type_ is _horizontal_.  
_Height_ |  Enter a height for the menu options area. (Applies when _Type_ is either _horizontal_ or _vertical_.)  
_Border Color_ |  Specify a color for the menu border. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Corner Radius_ |  **_(Available only when a Border Color is specified)_** Enter a value for the rounded corner radius or use the spinner controls to specify a value. A blank or low value (i.e. <10) produces squared menu corners. A higher value (10 - 30) produces progressively rounded menu corners. Maximum value is 99.  
_Shadow_ |  Select a shadow style for the menu. Selections are _none_ ** _(Default)_** , _bottom right_ , _bottom left_ , _top right_ , _top left_ , _full_ , _bottom_ , _top_ , _left_ , _right_.  
**Define the appearance of the menu contents**  
_Font_ |  Enter a font for the menu text.  
_Size_ |  Enter a font size for the menu text (in pixels).  
_Line Color_ |  Specify a color for the line (vertical or horizontal) separating the menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Bkgrd_ _. Color_ |  Specify a color for the menu background. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Text Color_ |  Specify a color for the menu text. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Bold_ |  Select this check box to bold the menu text.  
_Underscore_ |  Select this check box to underline the menu text.  
**Define the appearance of menu contents with mouse-over**  
_Background Color_ |  Specify a color for the background only when the mouse pointer is positioned over individual menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Text Color_ |  Specify a color for the menu text only when the mouse pointer is positioned over individual menu options. See **[Color Specification](Color%20Specification.md)** for information on applying a color.  
_Bold_ |  Select this check box to bold the menu text only when the mouse pointer is positioned over individual menu options.  
_Underscore_ |  Select this check box to underline the menu text only when the mouse pointer is positioned over individual menu options.  
**Define the appearance of the background image**  
_Image_ |  Select the image to display for the menu background. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) upon completion of the wizard copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_.  
_Mouse Over Image_ |  Select the image to display when the mouse pointer is positioned over the menu. Click the Image browse button to select an image. Clicking _Finish_ (Step 8) upon completion of the wizard copies the image from its current location to an _Images_ directory that will be created for that template under _*plus\inomads\templates_.  
_Repeat_ |  **_(Available only when a Background Image is selected)_** Selections for duplicating the image are: |  _repeat_ |  **_(Default)_** Duplicates the image.  
---|---  
_no-repeat_ |  Does not duplicate the image.  
_repeat-x_ |  Duplicates the image horizontally in conjunction with the selected _Position_.  
_repeat-y_ |  Duplicates the image vertically in conjunction with the selected _Position_.  
_Position_ |  **_(Available only when a Background Image is selected)_** Selections for positioning the image are _left top_ ** _(Default)_** , _left center_ , _left bottom_ , _right top_ , _right center_ , _right bottom_ , _center top_ , _center center_ , _center bottom_ , _full screen_.  
**Menu Contents** |  See **[Menu Contents](Template%20Designer%20Wizard.htm#contents)**.  
_Save_ |  Saves the current record and then closes the window.  
_Cancel_ |  Cancels any changes to the current record and then closes the window.  
_Apply_ |  Applies the changes to the current record and then leaves the window open with the current record displayed.  
  
##  Menu Contents

The **Menu Contents** portion of the **[Define Menus](Template%20Designer%20Wizard.htm#definemenus)** window is used to define the contents for the menu. If a **[Menu Generation Program](Template%20Designer%20Wizard.htm#menugen)** is entered, the _Menu Contents_ grid is not available for entry.

For each option that you want to include in the menu, a separate grid row must be entered with the following details:

_Menu text_ |  Enter the text for the menu option that will be visible to the user.  
---|---  
_Transaction or URL_ |  If the menu launches a different iNomads transaction, enter the Transaction code.  
  
If the menu spawns a sub-menu, enter the sub-menu name in the format _menu:name_ (where _name_ is the sub-menu name).  
  
If the menu launches a Web page, enter the URL address preceded with _http://_.  
  
#### **Note:**  
Both the _Menu text**and** Transaction/URL_ components are needed; however, you may not always know the _Transaction/URL_ when creating the menu. In that case, you can save the menu definition with only the _Menu text_ entered and then complete the _Transaction/URL_ details later using the **[Menus](Template%20Maintenance.htm#menustab)** tab in **Template Maintenance**.

Use the Delete and Move Up/Move Down buttons beside the list box to remove a menu option or rearrange the order of the options within the menu.

To view or change the content for a different menu, select a menu from the _Menu Name_ drop box. Switching to a different menu automatically saves any changes to the current menu definition. You can also click the _Apply_ button to save changes.
