# NOMADS Graphical Application

**Wizard Creation Wizard**|   
---|---  
  
The **Wizard Creation Wizard** is a PxPlus utility that uses a five-step process to guide developers through the creation of the fundamental navigation components of a wizard. See **[Wizard Creation Wizard Steps](Wizard%20Creation%20Wizard.htm#steps)**.

Upon completion of this process, the basic structure for the wizard is defined, which consists of a short wizard program and a series of blank library panels. To make this into a fully operational wizard, the remaining details must then be completed, which is to add the necessary programming and screen changes.

_(The Wizard Creation Wizard was added in PxPlus 2016.)_

To invoke the **Wizard Creation Wizard** , use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (Nomads)_ category. Then, expand the _Utilities_ category and select _Wizard Creation Wizard_.  
From the **[NOMADS Session Manager](NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  From the _Utilities_ menu, select _Wizard Creation Wizard_.  
  
## Welcome Panel

The **Welcome** panel provides general information about the **Wizard Creation Wizard** and a Help link for creating a wizard.

> Click _Next_ to proceed to **[Step 1: Names and Locations](Wizard%20Creation%20Wizard.htm#step1)**. The wizard panel for each step consists of three sections:

_Progress Bar_ |  This section extends across the top of the panel and lists the five steps for creating a wizard. A white step number against a dark red background indicates the current step being defined. A gray step number against a gray background indicates that the step is temporarily unavailable until required information has been entered first. The step number will change to white when that step becomes available for entry. Clicking on a step number will go directly to that step without having to select intermediate steps in order. This is useful when reviewing or changing previous selections before exiting the wizard. Keep in mind that certain steps may require data before advancing to subsequent steps.  
---|---  
_Work Area_ |  This section is the body of the panel and consists of fields used for processing each step.  
_Navigation Bar_ |  This section extends across the bottom of the panel and consists of buttons for moving through the steps.  
  
#### **Note:**  
To guide you in completing the wizard and panels, you may find it helpful to refer to the program and panels used to create the Wizard Creation Wizard utility. The program _Wz_wizard_ resides in the ***plus/winutl** directory, and the associated panels listed below reside in the library file ***plus/winutl/scrnlib.en** :  
  
_Wz_wiz_ (Main wizard panel)  
_Wz_wel_ (Welcome tab)  
_Wz_1_ to _Wz_4_ (Tabs for Steps 1 through 4)  
_Wz_fin_ (Finish tab)

##  Wizard Creation Wizard Steps

**[Step 1: Names and Locations](Wizard%20Creation%20Wizard.htm#step1)**

Define the wizard and the program names and locations.

**[Step 2: Welcome/Finish](Wizard%20Creation%20Wizard.htm#step2)**

Configure the Welcome and Finish pages.

**[Step 3: Step Section](Wizard%20Creation%20Wizard.htm#step3)**

Define the appearance of the elements in the step (top) section.

**[Step 4: Steps](Wizard%20Creation%20Wizard.htm#step4)**

Configure the text for the step buttons and titles.

**[Step 5: Finish](Wizard%20Creation%20Wizard.htm#step5)**

Review the summary and create the wizard.

##  Step 1: Names and Locations

Enter a _Wizard Name_ , followed by the _Program Directory_ , _Screen Library_ and _Short Prefix_ that will be used by the utility to create the necessary files for the completed wizard. When you are ready to proceed to the next step, click _Next_.

#### **Note:**  
_Wizard Name_ , _Program Directory_ , _Screen Library_ and _Short Prefix_ are all **_required_** fields. You will not be allowed to proceed to Step 2 until they have all been entered.

> This panel consists of the following:

**Choose a name for the Wizard**  
---  
_Wizard Name_ |  **_(Required)_** Enter a name for the wizard. This name will display at the top of the **Welcome** and **Finish** panels of the new wizard after it is created. **_Example:_**  
  
For the Wizard Creation Wizard utility, the _Wizard Name_ is _Wizard Creation Wizard_. As a result, the **Welcome** panel reads _Welcome to the Wizard Creation Wizard_ , and the **Finish** panel reads _Wizard Creation Wizard is Complete_.  
**Choose the program directory**  
_Program Directory_ |  **_(Required)_** Specify the full pathname to the directory in which the completed wizard program is to be placed. Click the Browse button to navigate to the desired directory or type the full pathname.  
**Choose a screen library**  
_Screen Library_ |  **_(Required)_** Specify the library file in which the completed wizard panels are to be placed. If the library file is located in the same directory as the _Program Directory_ specified above, a simple screen library name can be entered. If the library file is in a different location, the full pathname must be specified by clicking the Browse button or typing the full pathname.

#### **Note:**  
The library file must already exist.  
  
**Choose a short prefix for the program and panels**  
_Short Prefix_ |  **_(Required)_** Enter a short prefix (up to 8 characters) that will precede the names of the completed wizard program and wizard panels. Valid characters are letters A to Z and numbers 0 to 9. Special characters are **_not_** allowed. **_Example:_**  
  
Entering a _Short Prefix_ of _test_ would result in the wizard program being named _test_wizard_ , and the wizard panels names being named _test_wiz_ , _test_wel_ , _test_1, test_2_ and _test_fin_.  
  
##  Step 2: Welcome/Finish

Define the options for customizing the **Welcome** and **Finish** pages for the completed wizard.

> This panel consists of the following:

**Picture at the top of the Welcome Page**  
---  
_Picture Path_ |  Specify the full pathname to the image file or corresponding expression for the image that can be optionally included on the **Welcome** page. This image will display in the upper left corner of the **Welcome** page. If you **[Open the Library File](NOMADS%20Development/Library%20Object%20Selection/Opening%20a%20Library%20File.md)** in NOMADS and view the completed wizard panel, it will contain an image type control named WELCOME_IMAGE. If _Picture Path_ is blank, then no image control will be created. Upon completion of the wizard, the image entered will be scaled and dynamic. See **[Image Properties](Creating%20Panel%20Controls/Image%20Control/Image.htm#imageproperties)**.  
**Enter the text for the Welcome page**  
|  Enter the text to display on the **Welcome** page.  
**Help Link for the Welcome Page**  
_Help Link Text_ |  Enter the text to display on a Web-style Help link button that can be optionally included on the **Welcome** page. If you **[Open the Library File](NOMADS%20Development/Library%20Object%20Selection/Opening%20a%20Library%20File.md)** in NOMADS and view the completed wizard panel, it will contain a button type control named BUTTON_HELP. If the _Help Link Text_ is blank, then no button control will be created.

#### **Note:**  
If _Help Link Text_ is entered, then you will need to edit the BUTTON_HELP control on the WEL panel (i.e. _NAME_WEL_) after completing the wizard to enter the correct Help Reference (go to the **[User Aid](Creating%20Panel%20Controls/Button%20Control/Overview.htm#useraid)** tab on the button's properties window using the **[NOMADS Panel Designer](Panel%20Designer/Introduction.md)**).  
  
**Enter a short message for the end of the Finish page**  
_Finish Text_ |  Enter the text to display at the bottom of the **Finish** page. **_Example:_**  
  
For the Wizard Creation Wizard utility, the _Finish Text_ at the bottom of the **Finish** page reads _Click Finish to create the Wizard_.  
  
##  Step 3: Step Section

Define the options for customizing the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section at the top of the wizard panels. To illustrate what part of the progress bar section is affected by each of these options, these options have been defaulted to the same settings used in the Wizard Creation Wizard utility.

**_Example:_**

The _Active Button Color_ defaults to _Dark Red_ , which is also the color used by the Wizard Creation Wizard utility to indicate the active step _(Step Section 3)_ in the progress bar section.

#### **Note:**  
Since these values are required, they are assigned as variables in the PREDISPLAY_WIZARD_INIT section of the completed wizard program.

> This panel consists of the following:

**Define the appearance of the step titles**  
---  
_Text Color_ |  Color to use for the step titles that describe each step at the top of the panel.  
**Define the appearance of the step buttons**  
_Number of Steps_ |  Number of total steps/pages (**_not_** including the **Welcome** page) that will be needed to create the wizard for the applicable task. The number of steps depends on the complexity of the task for which the wizard is being created. Valid values are from 2 to 8 steps.

#### **Note:**  
If more than 8 steps are required, you can create a wizard with 8 steps and then add more manually. Keep in mind that you may need to adjust the width of the wizard panels using the **[NOMADS Panel Designer](Panel%20Designer/Introduction.md)** to accommodate the additional steps in the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section.  
  
_Step Button Color_ |  Background color to use for the step buttons in the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section.  
_Active Button Color_ |  Background color to use for the active step button. As the user progresses through each step, the corresponding step button in the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section will change to this color.  
_Button Text Color_ |  Color to use for the number (text) displayed inside the step buttons in the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section.

#### **Note:**  
If using dark colors for the _Step Button Color_ and _Active Button Color_ , then the _Button Text Color_ should be a contrasting light color so that the text is clearly visible. If using light colors for the step button background, then select a dark color for the button text.  
  
**Define the appearance of the step name text**  
_Name Text Color_ |  Color to use for the name text that displays below the step buttons in the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section.  
  
##  Step 4: Steps

Define the text to display as the step name under each step button in the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section, as well as the text to display for each step at the top of each panel. The name of the final step defaults to _Finish_ , but this can be changed.

#### **Note:**  
These step titles are assigned to variables in the PREDISPLAY_WIZARD_INIT section of the completed wizard program.

> This panel consists of the following:

**Define the Step Button Names as well as the Step Titles for each step.**  
---  
_Step_ |  Number of the step being defined. (This field is locked.)  
_Step Title_ |  Enter the text that describes each step. This text will display at the top of the panel for that step. A maximum of 150 characters can be entered.

#### **Note:**  
If the maximum 150 characters is entered, you may need to adjust the width of the corresponding TAB_TITLE control on the WIZ panel (i.e. _NAME_WIZ_) by using the **[NOMADS Panel Designer](Panel%20Designer/Introduction.md)** after completing the wizard.

**_Example:_**  
  
For the Wizard Creation Wizard utility, the title for Step 1 is defined as _Step 1: Name and Location Define the Wizard and Program names and locations._ This text is saved in the completed wizard program as _stepxtitle_ _$_ (**_where_**  _x_ is the step number) or _finishtitle_ _$_ (for the **Finish** page).  
_Name_ |  Text to display below each step button. A maximum of 25 characters can be entered.

#### **Note:**  
If more than 8 steps are defined or the maximum 25 characters is entered, you may need to adjust the width of the corresponding FONTED_TEXT control on the WIZ panel (i.e. _NAME_WIZ_) by using the **[NOMADS Panel Designer](Panel%20Designer/Introduction.md)** after completing the wizard.  
  
##  Step 5: Finish

Review the selections for the previous steps, which are presented in a grid format with a vertical scroll bar.

> To change any previous selections, navigate to the applicable step(s) by using the _Back/Next_ buttons or by clicking the numbered _Step_ button in the **[Progress Bar](Wizard%20Creation%20Wizard.htm#progress)** section.

To launch the main Wizard panel (i.e. _NAME_WIZ_) in the **[NOMADS Panel Designer](Panel%20Designer/Introduction.md)** after completing the Wizard Creation Wizard utility, select the _Open Wizard panel for editing after completion_ check box prior to clicking the _Finish_ button.

## Wizard Completion

When the _Finish_ button is selected, a wizard program is created in the directory specified in the _Program Directory_ field (see **[Program Directory](Wizard%20Creation%20Wizard.htm#directory)**). At the same time, NOMADS panels are created for the wizard and all the steps in the library file specified in the _Screen Library_ field (see **[Screen Library](Wizard%20Creation%20Wizard.htm#screenlib)**).

With the basic structure for the wizard created, the wizard program and panels are ready to be modified as needed to customize the wizard's appearance and complete its functionality.
