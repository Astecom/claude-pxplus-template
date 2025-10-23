# NOMADS - Appendix  
  
**NOMADS Variables** |  **__**  
---|---  
  
Your program can gain access to NOMADS reserved variables for NOMADS objects when you include Call, Perform or Execute processing in the NOMADS Panel Designer (i.e. the **Logic** tab if using **[NOMADS Folder Style](../../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** or the **Events** group if using **[NOMADS Property Sheets](../../Panel%20Designer/Properties%20Table/Overview.md)**). When you select Call as in the **[Events Logic](../../Program%20Interaction/Events%20Logic/Overview.md)**, only non-global variables specified in the Call's parameter list are available to your called program.

NOMADS makes the variables that are listed below available to your program. (This list also includes **[Query Variables](../../Dictionary-Based%20Development/Query%20Subsystem/Designing%20and%20Using%20the%20Query%20Subsystem.htm#queryvariables)**.)

The **[NOMADS Environment Maintenance](../../Maintain%20Nomads%20Environment.md)** utility provides **_one central location_** to display and set the **[%NOMADS Properties](Overview.htm#properties)** used by the %NOMADS object (*obj/nomads.pvc) to control the behavior of different aspects of the NOMADS environment.

_(The NOMADS Environment Maintenance utility was added in PxPlus 2020.)_

## NOMADS Control Variables

This table lists the control-related variables that are available in the NOMADS environment:

**Control Variables** |  **Description**  
---|---  
_For these variables,**xxxxxx** represents the control name:_  
**_xxxxxx_{.VAL}$** |  Control value (.VAL can be suppressed).  
**_xxxxxx_.CTL** |  CTL value for the control.  
**_xxxxxx_.DATASET** |  **_(Chart Controls Only)_** Contains current dataset for a chart.  
**_xxxxxx._ NOCHANGE** |  NOMADS will decrement the CHANGE_FLG variable using the value in **_xxxxxx._ NOCHANGE**.  
**_xxxxxx_.ROW  
 _xxxxxx_.COLUMN** |  **_(Grid Controls Only)_** Contains the current row and column being processed in a grid.  
**_xxxxxx_.TAG$** |  User defined tag value as per the control definition.  
  
##  NOMADS Reserved Variables

The NOMADS engine (***winproc**) creates and monitors many special reserved variables that make information available to your routines or can be used to alter NOMADS behavior.

This table lists the reserved NOMADS variables that are available to your programs:

#### **Important Note:**  
NOMADS variables that begin with **_** (_underscore_), with the exception of _EOM$, are **_for internal use only_** by PVX Plus Technologies Ltd. and should **_not_** be used.

**NOMADS Reserved Variables** |  **Description**  
---|---  
**_EOM$** |  Contains the Hex code of the key that triggered the last control; e.g. $02$ = double click, $09$ = Tab key.  
**ALTERNATE_PANEL$** |  Contains the panel name to be used for **[Alternate Panel Layouts](../../Program%20Interaction/Alternate%20Panel%20Layouts/Overview.md)**.  
**ALTERNATE_PANEL_TYPE$** |  If one alternate panel is used, then this variable should be set to a value of "M" if the panel is not part of a folder control or "F" if the panel is in a folder control. See **[Alternate Panel Layouts](../../Program%20Interaction/Alternate%20Panel%20Layouts/Overview.md)**.  
**ARG_1$ ARG_20$** |  You can pass a maximum of 20 arguments when you select the Link command or use the **[PROCESS](../../../directives/process.md)** and **[CALL](../../../directives/call.md)** directives to call another panel. NOMADS places the values in the corresponding reserved variables, ARG_1$, ARG_2$ ... to ARG_20$ and makes these values available to your panel.  
**CHANGE_FLG** |  Non-zero value whenever a control changes on a panel. NOMADS increments this variable automatically whenever the value in a control changes, allowing you to detect change. NOMADS does not reinitialize this variable; therefore, you should reset it to 0 (zero) in your program(s) when required. If you do **_not_** want the CHANGE_FLG variable to be updated when a control value is changed, select the _Ignore Change Flag_ check box property for the control in the NOMADS Panel Designer. _(The Ignore Change Flag check box property was added in PxPlus 2017.)_  
**CMD_STR$** |  Logic to be executed next. Set using the following values: "END" or "E" to terminate the current panel. "ENDPANEL,_panelname_ ,_library_ " or "ENDPANEL _panelname library_ " to terminate a concurrent panel. (_Library_ is **_optional_**.) "J _panelname_[  _,library_]" to JumpTo another panel. "U _panelname_ [ _,__library_]" to launch a concurrent window. (_Library_ is **_optional_**.) "ENDALL" or "A" to close all active windows (used with concurrent windows).

#### **Note:**  
The Library name may be a specific or generic reference. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.  
  
**CORRECT_WHO$** |  **_(NOMADS Only)_** Current User ID. When running in WindX, returns the User ID on the client machine.  
**DEFAULT_PROG$** |  Default program for panel.  
**DISP_CMD$** |  Command after display of panel.  
**DROPFILES$** |  A list of file names dropped on an input control from an external source, such as Windows Explorer, using the *FILE source option in a defined Drag and Drop event. The list consists of full pathnames of the dragged files, separated by a SEP character. See **[Drag and Drop Utility](../../Panel%20Designer/Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)**. _(The DROPFILES$ variable was added in PxPlus 2021 Update 1.)_  
**ENTIRE_RECORD$** |  **_Query_** variable. Contains the contents of the entire main file record. Can be used in **[Selection Logic](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Selection%20Criteria.htm#Mark4)** or in **[Return Value](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.htm#returnvaluehead)** expressions. (The Query Subsystem uses the **[REC( )](../../../functions/rec.md)** function to obtain this value.) You can use this variable alone or in conjunction with **[PRIME_KEY$](Overview.htm#prime_key)**. **_Example:_** PRIME_KEY$+ENTIRE_RECORD$ _(The ability to use the ENTIRE_RECORD$ variable in Selection Logic also was added in PxPlus 2024 Update 1.)_  
**EXIT_CMD$** |  Command prior to EXIT.  
**FLD#1$....FLD#_xxx_ $** |  **_Query_** variable. Access fields by number in *winqry.  
**FLDR** |  Object identifier for **[Folder Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)**.  
**FLDR._xxxxxx_.CTL** |  Contains the CTL value used to reference the tabs within **[Folder Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)**.  
**FLDR_DEFAULT_PROG$** |  Default program for **[Folder Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)**.  
**FOLDER_ID$** |  Contains the current sub-panel object name (if any) for **[Folder Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)**.  
**_ggggg_.GRP$** |  Contains a string defining the controls and display elements that belong to the group _ggggg_. See **[Manipulating and Controlling Groups](../../Program%20Interaction/Event-Handler%20Routines/Manipulating%20and%20Controlling%20Groups.md)**.  
**ID** |  Contains the current control's CTL identifier.  
**ID$** |  Name of the current control.  
**ID.COLUMN** |  Column number of the cell.  
**ID.DATASET** |  Dataset number selected on a chart.  
**ID.ROW** |  Row number of the cell.  
**ID_VARNAME$** |  Variable name associated with the current control.  
**IGNORE_EXIT** |  If set to a non-zero value, the window close/F4 key is ignored. If set during panel On Exit logic, the panel will not be closed. NOMADS resets this variable to 0 (zero) after On Exit logic.  
**IGNORE_EXIT$** |  If set to a "Y" value, the window close/F4 key is ignored. If set during panel On Exit logic, the panel will not be closed. NOMADS resets this variable to null after On Exit logic.  
**IGNORE_POPUP** |  Set to 1 to suppress the next popup menu. Usually set conditionally in the Prior Popup logic of the **[Assign Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/Applying%20a%20Popup%20Menu.md)** dialogue. Automatically reset to 0 after the popup has been skipped. _(The IGNORE_POPUP variable was added in PxPlus 2020.)_  
**INIT_TEXT$** |  Contains initial list for loading a control. (This will only be processed once before the control is drawn.)  
**INIT_VAL$** |  Contains the default value of a control.  
**INITIALIZE_FLG** |  If set to: **1** \- Resets the screen.  
**2** \- Resets all folders.  
**3** \- Resets the current folder.  
**MAIN_SCRN_K$** |  Screen key.  
**MNU_LN$** |  Menu definition.  
**NEXT_FOLDER** |  Set to **FLDR._xxxx_.CTL** to change folders. See **[Folder Controls](../../Creating%20Panel%20Controls/Folder%20Controls/Overview.md)**.  
**NEXT_ID** |  If changed by the program, this will represent the CTL identifier of the next control to receive focus. By default, when you set NEXT_ID, the system will clear the input queue unless the NOMADS variable NO_FLUSH is set.  
**NEXT_ID$** |  If NEXT_ID is loaded with a value other than -1, then the variable named in NEXT_ID$ will be evaluated and its value used as NEXT_ID. This is used in conjunction with NEXT_FOLDER to set focus to a control on a Folder that is about to become active. By default, when you set NEXT_ID, the system will clear the input queue unless the NOMADS variable NO_FLUSH is set. **_Example:_** NEXT_FOLDER=FLDR.FOLDER3.CTL,NEXT_ID=0,   
NEXT_ID$="CST_ID.CTL"  
**NO_FLUSH** |  Do not clear input when NEXT_ID is set.  
**PRIME_KEY$** |  **_Query_** variable. Returns the primary key in *winqry.  
**PRIOR_VAL** |  Prior value of the current control that has just been changed.  
**PRIOR_VAL$** |  Prior value of the current control that has just been changed.  
**QRY_REC_COUNT** |  **_Query_** variable. Returns the number of query records successfully selected at the point it is accessed. See **[Query Selection Criteria](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Selection%20Criteria.htm#Mark3)**. _(The QRY_REC_COUNT variable was added in PxPlus 2023.)_  
**QRY_VAL$** |  This variable is used in two ways: To contain the value of the control whose attached query is invoked. This value is passed into the query and will be used as the _Start From_ value in the query. To contain the value that was returned from the query.  
**QUERY_ROW$** |  Contains the contents of a row in the query. Can be used in **[Selection Logic](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Selection%20Criteria.htm#Mark4)** or in **[Return Value](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.htm#returnvaluehead)** expressions. **_Example:_** In the Query **Selection Logic** , you could use the following test to display all records that contain the value of the associated multi-line (ARG_1$): ARG_1$="" OR POS(UCS(ARG_1$)=UCS(QUERY_ROW$))>0 _(The QUERY_ROW$ variable was added in PxPlus 2024 Update 1.)_  
**REFRESH_FLG** |  If set to a non-zero value, all controls will be updated on the screen.  
**REPLACEMENT_FOLDER$** |  Name of the folder to replace current. (Available in Pre-Display logic)  
**REPLACEMENT_LIB$** |  Name of the library to replace current library. (Available in Pre-Display logic)  
**REPLACEMENT_SCRN$** |  Name of the screen to replace current. (Available in Pre-Display logic)  
**REPLACEMENT_TAB_TITLE$** |  **_(NOMADS Only)_** Tab title for the replacement folder.  
**SCRN_ID$** |  Contains the panel object name.  
**SCRN_K$** |  Key prefix for screen. Uppercase, padded with spaces up to 12 characters.  
**SCRN_LIB$** |  Contains the object library pathname.  
**TAB_TABLE$** |  Contains a list of all controls using the _Tab Stop_ attribute, broken down into three components: |  _Tab Sequence Number_ |  4-digit field, initially set to 1000. This field is updated with a value in the range 0001 - 0999 when the tab order is changed.  
---|---  
_Skip Flag_ |  This field will contain an "S" if the _Auto Tab Skip_ attribute is set for the control; otherwise, the field will contain a space.  
_Control ID_ |  5-digit field, CTL value for the control.  
  
## NOMADS Global Variables

This table lists the global variables that are available to your programs:

#### **Note:**  
Not to be used as arguments in CALLed programs.

**NOMADS Global Variables** |  **Description**  
---|---  
**%FLMAINT_LIB$** |  Path and file name of an alternate panel library to override File Maintenance panels and use customized buttons. See **[Custom Buttons and Bitmaps](../../Dictionary-Based%20Development/File%20Maintenance%20Generator/Overview.htm#custombuttons)**.  
**%FLMAINT_MSG$** |  Name of Message Library to override the Message Library used to display a File Maintenance panel. See **[Custom Buttons and Bitmaps](../../Dictionary-Based%20Development/File%20Maintenance%20Generator/Overview.htm#custombuttons)**.  
**%SCR_3D** |  Library Defaults Visual Mode setting (0-2D, 1-3D, 2-4D). The variable %NOMAD_Visual_Override (if > 0) overrides this setting.  
**%SCR_DEF_ATTR$** |  Default attributes (font, color).  
**%SCR_DEF_H_FL$** |  Default Help file.  
**%SCR_DEF_H_ID$** |  Default Help ID.  
**%SCR_LIB** |  Screen library file number.  
**%SCR_LIB$** |  Screen library path.  
  
## %NOMADS Methods

This table lists the methods that are used by the %NOMADS object:

**%NOMADS Methods** |  **Description**  
---|---  
**%NOMADS'AddCTL** |  Provides the ability to dynamically add CTL logic to panels. **_Formats:_** |  x = **%NOMADS'AddCTL(** "_command_ "**)** |  **_Example:_** To add an OnTipCtl to a control, the following could be used to dynamically assign an unused CTL value and add to the user CTL table an entry to EXECUTE _command_. x = %NOMADS'AddCTL("_command_ ")  
Btn_xxx.ctl'OnTipCtl = x  
---|---  
x = **%NOMADS'AddCTL(**_ctl_value_ , "_command_ "**)** |  If the first parameter _ctl_value_ is numeric, it is the CTL number to be added.  
x = **%NOMADS'AddCTL(** {_ctl_value_ ,} "_method_ ", _objectID_**)** |  Instead of it being an EXECUTE, the system would INVOKE the named _method_ in the specified _objectID_. This could be called with a CTL to use or you could let the system dynamically add it.  
x = **%NOMADS'AddCTL(** {_ctl_value_ ,} "_panel_ ", "_library_ "**)** |  Instead of it being an EXECUTE, the system would issue a PROCESS "_panel_ ","_library_ ". This could be called with a CTL to use or you could let the system dynamically add it.  
  
**_Example:_**

The following example could be used to set the OnTipCtl for dynamically created controls such as Buttons:

Btn_id = %NOMADS'AddCtl("Do_Button", _obj)  
Button Btn_id,@(l,c,w,h)="Hit me"

_(The %NOMADS'AddCTL method was added in PxPlus 2019.)_  
  
##  %NOMADS Properties

The ***obj/nomads** class was created to hold NOMADS and iNomads-based parameters and settings. Its purpose was to use property settings to replace the global variables prefixed with %NOMAD_ or %NOMADS_ that had generally been used to control the behavior of different aspects of the NOMADS environment.

_(The *obj/nomads class was added in PxPlus v11.00.)_

#### **Note:**  
The existing global variables are interchangeable with property usage and may still be used.

The *obj/nomads class is automatically instantiated when the NOMADS environment is invoked. The reference to this object is loaded into the %NOMADS global variable when it is created. Its properties and methods can then be accessed using the %NOMADS variable as the object identifier.

When the class is instantiated, the values' existing variables prefixed with %NOMAD_ or %NOMADS_ are automatically loaded into the corresponding properties and can be accessed either as a property or using the original global variable name. This means that NOMADS variables that you have set in a legacy START_UP program, for example, do not have to be changed to property references. If, however, you choose to use property references in a START_UP program, you would have to instantiate the *obj/nomads class first, as it would not yet exist at this time.

**_Example:_**

Below are some sample lines from a START_UP program using the %obj/nomads class:

> X=NEW("*obj/nomads") !Instantiate the %NOMADS object  
>  %NOMADS'VISUAL_OVERRIDE=4  
>  %NOMADS'CHART$="google"  
>  %NOMADS'QRY_BTN$="{!16X16/Buttons/Help}"  
>  %NOMADS'QRY_WIDE=3

This is the same as:

> %NOMAD_VISUAL_OVERRIDE=4  
>  %NOMAD_CHART$="google"  
>  %NOMAD_QRY_ BTN$="{!16X16/Buttons/Help}"  
>  %NOMAD_QRY_WIDE=3

#### **Note:**  
Since the %NOMAD_xxx and %NOMADS_xxx variables now map onto the *obj/nomads properties, certain functions, such as accessing sub-strings of the variables, are no longer valid and return an Error #88: Invalid/unknown property name. In such cases, you can use the **[MID](../../../functions/mid.md)** function instead.

**_NOMADS Environment Maintenance Utility_**

The **[NOMADS Environment Maintenance](../../Maintain%20Nomads%20Environment.md)** utility is used to set and maintain **[%NOMADS Properties](Overview.htm#properties_list)** used by the %NOMADS object (***obj/nomads.pvc**) to control the behavior of different aspects of the NOMADS environment.

On instantiation, the %NOMADS object checks the property values that were set with this utility.

_(The NOMADS Environment Maintenance utility was added in PxPlus 2020.)_

**_%NOMADS Properties_**

Many NOMADS global variables affect the entire application, such as **%NOMAD_Enter_Tab** that regulates the behavior of the **Enter** key or **%NOMAD_Object_Resize** that turns on object resizing at the application level. These variables are generally set during the initialization phase of the application itself (such as in the START_UP program) rather than as part of an event-handler routine.

Some NOMADS global variables affect event logic, such as **%NOMADS_Pre_Display$** and **%NOMADS_OnExit$** that specify optional panel pre-display and exit routines or **%NOMADS_Post_Display** that allows you to override the sequence of the Post Display logic when there are Folders on a panel.

#### **Important Note:**  
As of PxPlus v11.50, you can _either_ use the NOMADS global variables %NOMAD[S]__XXXXX_ or access the variables using the %NOMADS object as properties whose name will be the same _XXXXX_ as from the variable name.  
  
**_Example:_**  
  
**%NOMADS_Process$** would be **%NOMADS'Process$**   
  
**%NOMAD_Turbo_Off** would be **%NOMADS'Turbo_Off**  
  
These properties are provided with Read/Write access.

This table lists the available properties and their possible values, which can also be viewed by loading and listing the class program **"*obj/nomads.pvc"** :

**%NOMADS Properties** |  **Description**  
---|---  
**%NOMADS'Activation_Ok  
%NOMADS_Activation_Ok** |  **_(Not Used in PxPlus)_** *winproc checks if the activation corresponds to the NOMADS version and displays a message if it is incorrect. The value in this variable determines whether the message box is displayed or not. If the value is 0 (zero), the message will appear and the global variable will be set to 1.  
**%NOMADS'Actv_Folder_Colors$  
%NOMAD_Actv_Folder_Colors$** |  Sets the default color(s) of the active folder tab button. **_Format:_** _fill pattern,fill color1,fill color2 (**Optional**)_ **_Example:_** The following example fills the tab from left to right using Light Green as the first color and ending with Light Yellow: %NOMAD_Actv_Folder_Colors$="3,Light Green,Light Yellow" This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect. _(Support for this property to set the active folder tab default color(s) was added in PxPlus 2022.)_  
**%NOMADS'Actv_Folder_TextClr$  
%NOMADS_Actv_Folder_TextClr$** |  Color of the text displayed in the tab of the active folder. This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect.  
**%****NOMADS'Alt_Sfx$  
%NOMAD_Alt_Sfx$** |  Comma-separated list of alternate language suffixes to apply when opening panel libraries when the specified or default libraries are not available (e.g. _fr,de,es_ _,_). Overrides the alternate suffixes defined in **[NOMADS System Defaults](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.md)**.  
**%NOMADS'Auto_Close  
%NOMAD_Auto_Close** |  Set to 1 to turn on the auto close feature for all panels rather than setting the internal auto close property on each panel in the header properties. **_Default_** is 0 (zero).  
**%****NOMADS'AutoLogon  
%NOMADS_AutoLogon** |  This property controls if the security system will automatically log on a Windows user based on his/her Windows User ID. Setting this to non-zero enables the auto logon. When the auto logon is enabled, the system will attempt to automatically and silently log the user on using his/her Windows User ID. See **[Security Sign On](../../System%20Maintenance%20Tools/Security%20Manager/Security%20Sign%20On.md)**. _(Added in PxPlus 2023)_  
**%NOMADS'Automation_Enabled** |  Set to 1 to turn on the QA Automation support feature at the application level. If activated, NOMADS sets the value for the graphical user interface controls using an OWN= clause when the controls are created.  
**%NOMADS'Auto_Qry  
%NOMADS_Auto_Qry** |  If set to non-zero, NOMADS will automatically initiate the query window if a value fails the Input Validation routine.  
**%NOMADS'Caption$  
%NOMAD_Caption$** |  Returns the current panel title, if specified for the panel definition.

#### **Note:**  
Applies when running the panel in the NOMADS and iNomads environments.  
  
**%NOMADS'Captionbar_Height  
%NOMAD_Captionbar_Height** |  **_(Read Only)_** Height (in pixels) of the window caption bar.  
**%NOMADS'Capture_Directory$** |  Directory to capture screen image when using the Direct NOMADS Editor interface (CTRL-SHIFT-MouseClick).  
**%NOMADS'Center_Wdw  
%NOMAD_Center_Wdw** |  If set to non-zero, center next panel.  
**%****NOMADS'Chart$  
%NOMAD_Chart$** |  The chart brand to use in a NOMADS environment. Valid values are "plus", "rgraph" and "google". See **[Charting](../../../Charting/Introduction.md)**. When not set, the default is "plus" charts. See **[Plus Charts](../../../Charting%20Alternatives%20in%20PxPlus/Introduction.htm#pluscharts)**. _(Plus Charts were added in PxPlus 2019.)  
__(Support to default to Plus Charts when %NOMADS'Chart$ is not set was added in PxPlus 2024 Update 1.)_  
**%****NOMADS'Chart_Colors$  
%NOMAD_Chart_Colors$** |  Colors used to display individual data sets within a chart (e.g. "Light Red/Light Blue/Dark Green/Yellow/RGB:192 255 192/").  
**%****NOMADS'Class'** |  Used in conjunction with **[Dynamic Data Classes and Dynamic Control Properties](../../../Data%20Dictionary/Data%20Classes/Dynamic.md)** in NOMADS. Corresponds to a data class field (i.e. %NOMADS'Class'Length), which is evaluated at run time. _(Added in PxPlus 2018)_  
**%NOMADS'CompanyColor$** |  Standard color used for grid headers, etc. in PxPlus utilities.  
**%NOMADS'Concurrent_Wdw  
%NOMAD_Concurrent_Wdw** |  Set to 1 to launch **[Concurrent Panels](../../Program%20Interaction/Concurrent%20Panels/Overview.md)**.  
**%NOMADS'Ctl_Reset$  
%NOMADS_Ctl_Reset$** |  List of control types to be reset when a folder panel is deactivated. **_Default_** value is "#BRC3LDVXM|_G".  
**%****NOMADS'Custom_Define  
%NOMAD_Custom_Define** |  This CTL value is used rather than 9999 to access a customized panel definition. See **[Defining Custom Information](../../Customizer/Defining%20Custom%20Information.md)**.  
**%****NOMADS'Custom_Dir$  
%NOMAD_Custom_Dir$** |  Directory for user files. See **[Custom User Files](../../Customizer/Custom%20User%20Files.md)**.  
**%****NOMADS'Custom_Exclude_Program$** |  Program to call to determine if the user should be allowed to access the custom definition for the current panel. See **[Restricting Access to the Run-Time Definition](../../Customizer/Defining%20Custom%20Information.htm#restrictingaccess)**. _(Added in PxPlus 2018)_  
**%****NOMADS'Custom_Genmtc  
%NOMAD_Custom_Genmtc** |  This CTL value is used rather than 9996 for Customizer General Maintenance. See **[Defining Custom Information](../../Customizer/Defining%20Custom%20Information.md)**.  
**%****NOMADS'Custom_GenWdw** |  Set to a CTL value to be used internally by NOMADS to generate custom concurrent windows. (**_Default_** CTL is 9995.) See **[Displaying Custom Information](../../Customizer/Overview.htm#Mark1)**. _(Added in PxPlus 2018)_  
**%NOMADS'Custom_Skip_Definition  
%NOMAD_Custom_Skip_Definition** |  If the CTL values for panel definition and Customizer General Maintenance have not been set to values other than 9999 and 9996, and you wish to use these CTL values for your own User CTL values, set this to 1 to skip the definitions. See **[Defining Custom Information](../../Customizer/Defining%20Custom%20Information.md)**.  
**%****NOMADS'Custom_Wdw** |  Set to 1 to use a concurrent window to display custom information for a panel. If not set (i.e. zero), then the default display at the bottom of the panel is used. See **[Displaying Custom Information](../../Customizer/Overview.htm#Mark1)**. _(Added in PxPlus 2018)_  
**%****NOMADS'Def_Sfx$  
%NOMAD_Def_Sfx$** |  The two-character language suffix to append to panel library files (e.g. _en_). Overrides the language suffix defined in **[NOMADS System Defaults](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.md)**. See **[Message Library Maintenance](../../Message%20Library%20Maintenance/Overview.md)**.  
**%****NOMADS'DeveloperCharts** |  Set to 1 to save new AutoChart definitions in the developer file _(chart.dev)_. See **[Defining an AutoChart](../../../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.htm#Defining_an_AutoChart)**. _(Added in PxPlus 2020)_  
**%****NOMADS'Disable_Customizer  
%NOMAD_Disable Customizer** |  Set to 1 to disable the PxPlus **[Customizer](../../Customizer/Overview.md)**. Setting this to 1 overrides all other Customizer settings. _(Added in PxPlus 2025)_  
**%NOMADS'Disable_Debug  
%NOMADS_Disable_Debug** |  Set to 1 to disable the use of the _Debug_ window (accessible by pressing CTRL-F11).  
**%****NOMADS'Disable_Folder_Colors$  
%NOMAD_Disable_Folder_Colors$** |  **_(NOMADS Only - Not Applicable to Left Rotated or Right Rotated Tabs)_** Sets the default color(s) of a disabled folder tab. **_Format:_** _fill pattern,fill color1,fill color2 (**Optional**)_ **_Example:_** The following example fills the tab from left to right using Light Green as the first color and ending with Light Yellow: %NOMAD_Disable_Folder_Colors$="3,Light Green,Light Yellow" This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect. _(Added in PxPlus 2022)_  
**%****NOMADS'Disable_Folder_TextClr$  
%NOMADS_Disable_Folder_TextClr$** |  **_(NOMADS Only)_** Color of the text displayed in the tab of a disabled folder. This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect. _(Added in PxPlus 2022)_  
**%NOMADS'Disable_Trace  
%NOMADS_Disable_Trace** |  Set to 1 to disable the use of the _Trace_ window (accessible by pressing CTRL-F12).  
**%NOMADS'DisplayHeight** |  In the **NOMADS** environment, this is the monitor display height (in rows). In the **iNomads** environment, this is the height of the browser window (in rows) at the time a panel is invoked. (This value will **_not_** change dynamically if the browser is resized.)  
**%NOMADS'DisplayWidth** |  In the **NOMADS** environment, this is the monitor width (in columns). In the **iNomads** environment, this is the width of the browser window (in columns) at the time a panel is invoked. (This value will **_not_** change dynamically if the browser is resized.)  
**%****NOMADS'Drop_Qry_All** |  Set to 1 to default the query display to **[Drop Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#dropquery)**. This setting has been superseded by the **[%NOMADS'Query_View$](Overview.htm#queryview)** setting, which has more options. If set to a non-zero value, %NOMADS'Query_View will **_override_** the setting in %NOMADS'Drop_Qry_All.  
**%****NOMADS'Drop_Qry_Color$** |  Set to default background color for **[Drop Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#dropquery)**. (**_Default_** is RGB:240,255,240.) See **[Query Colors](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Colors.md)** for information on applying color settings and Themes to a query display. _(Added in PxPlus 2017)_  
**%NOMADS'Dup_Okay  
%NOMAD_Dup_Okay** |  Set to a non-zero value to allow duplicate control names at run time.  
**%****NOMADS'Enable_Customizer_Popup** |  Enable the _Customize Panel_ option on the panel popup system wide. Overrides **[%NOMADS'No_Customize](Overview.htm#nocustomize)**. _(Added in PxPlus 2017)_  
**%NOMADS'Enter_Tab  
%NOMAD_Enter_Tab** |  Options are: |  **0** |  Pressing the Enter key will not move the cursor (same as setting **['-E'](../../../mnemonics/+e.md)** mnemonic).  
---|---  
**1** |  The Enter key behaves like a Tab key and does not fire the On Change logic of an object. **['-E' and '+E'](../../../mnemonics/+e.md)** mnemonics should be used to govern behavior.  
**2** |  Legacy behavior (if set to non-zero, Enter = Tab).  
**%NOMADS'Esc_Sel  
%NOMAD_Esc_Sel** |  If set to non-zero, processes the current control with focus when Esc is pressed or the _Close_ button on the panel is clicked. CHANGE_FLG is incremented.  
**%NOMADS'Fkey_Handler$  
%NOMADS_Fkey_Handler$** |  Name of program to handle function keys. See **[User-Defined CTLS](../../Panel%20Designer/Options%20and%20Utilities/User-Defined%20CTLs.md)**.  
**%NOMADS'Fkey_Help  
%NOMAD_Fkey_Help** |  Set the function key (1 - 15) used to invoke the Help system.  
**%NOMADS'Fkey_Qry  
%NOMAD_Fkey_Qry** |  Set the function key (1 - 15) used to invoke the Query system. See **[Query Subsystem](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**.  
**%NOMADS'Fkey_Tbl$  
%NOMADS_Fkey_Tbl$** |  When focus is on a control and the user exits using a keystroke, *winproc loads the Hex value of the terminating keystroke into the variable _EOM$. To bypass the On Change logic for the particular keystroke(s), load the Hex value(s) into %NOMADS_Fkey_Tbl$. *winproc bypasses the OnChange logic for a user's _EOM$ value if found in the %NOMADS_Fkey_Tbl$. (The Validator and Formatter are also bypassed.) **_Example:_** %NOMADS_Fkey_Tbl$=$8409$ loads the F4 key and Tab key Hex values. If a user exits a control using either of these keys, the bypass will occur.  
**%NOMADS'FM_Acknowledge_Writes$** |  Set to 1 to display a message to acknowledge a record was written. **_Default_** is no message.  
**%NOMADS'FM_Auto_Save_Option$** |  Screen behavior for saving changes. Options are: **0** \- Standard Save **_(Default)_**  
**1** \- Auto-Save Changes  
**%NOMADS'FM_Clear_Option$** |  Screen behavior after writing or deleting a record. Options are: **0** \- Do Not Clear Fields **_(Default)_**  
**1** \- Auto-Clear All Fields  
**%NOMADS'FM_Confirm_New_Rec$** |  Set to 1 to display a message to confirm that a new record should be created. **_Default_** is no message.  
**%NOMADS'FM_New_Option$** |  Screen behavior on a new record. Options are: **0** \- Do Not Clear Fields **_(Default)_**  
**1** \- Auto-Clear All Fields  
**%NOMADS'FM_Skip_Acknowledge_Deletes$** |  Set to 1 to suppress the message to acknowledge that a record was deleted. **_Default_** is to display message.  
**%NOMADS'FM_Skip_Confirm_Deletes$** |  Set to 1 to suppress the message to confirm that a record is to be deleted. **_Default_** is to display message.  
**%NOMADS'FM_Update_Option$** |  Record locking behavior when a record is updated. Options are: **R** \- Review Before Write **_(Default)_**  
**L** \- Lock Record  
**N** \- No Record Lock  
**%****NOMADS'FolderAdvance** |  Auto advance to the next folder when tabbing. Options are: |  **""** (null) |  Default  
---|---  
**0** |  Off (Advance to the main panel).  
**1** |  Advance to the next folder tab.  
**2** |  Advance to the first control on the next folder.  
| |   
  
#### **Note:**  
If set to 1, this value will be overridden with option 2 if the folder is tab-less, as there are no folder tabs on which to place focus. See **[Tabless Folders](../../Creating%20Panel%20Controls/Folder%20Controls/Tabless%20Folders.md)**.

_(Added in PxPlus 2018)_  
  
**%NOMADS'Folder_Redraw  
%NOMADS_Folder_Redraw** |  Set to 1 to force a folder panel to be redrawn.  
**%NOMADS'Frame_Width  
%NOMAD_Frame_Width** |  Number of pixels wide to draw a frame in NOMADS.  
**%****NOMADS'Full_Screen_Drag** |  Set to 1 to turn on _Full Screen Drag_ at the application level. The _Full Screen Drag_ feature allows a panel to be moved by clicking anywhere on the panel outside of the controls (as well as on the title bar) and dragging the panel to the desired location. This setting can be overridden by the _Full Screen Drag_ setting at the library level in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)** or at the panel level in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)**. If _Full Screen Drag_ is turned **_On_** , it will override the **[%NOMADS'Object_Resize](Overview.htm#objectresize)** setting. _(Added in PxPlus 2017)_  
**%****NOMADS'Gfb_Dir_Tbl$** |  Used in conjunction with the **[GET_FILE_BOX](../../../directives/get_file_box.md)** directive. If present, this can contain a semi-colon delimited list of directories to which the user can have access. The system will not allow the user to select any other directories. _(Added in PxPlus 2019)_  
**%NOMADS'Help_Preprocess$  
%NOMADS_Help_Preprocess$** |  Name of a program to call prior to the invocation of the Help logic. Arguments passed to the program are the HelpFileName$, the HelpID$ (keyword or reference number), the ID$ (the control name) and ID (the control CTl value). If the HelpFileName$ is null upon exit, the Help logic is skipped.  
**%****NOMADS'Hover_Folder_Colors$  
%NOMAD_Hover_Folder_Colors$** |  **_(NOMADS Only - Not Applicable to Left Rotated or Right Rotated Tabs)_** Sets the default color(s) of a folder tab when the mouse is over it. **_Format:_** _fill pattern,fill color1,fill color2 (**Optional**)_ **_Example:_** This example fills the tab from left to right using Light Green as the first color and ending with Light Yellow: %NOMAD_Hover_Folder_Colors$="3,Light Green,Light Yellow" This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect. _(Added in PxPlus 2022)_  
**%****NOMADS'Hover_Folder_TextClr$  
%NOMADS_Hover_Folder_TextClr$** |  **_(NOMADS Only - Not Applicable to Left Rotated or Right Rotated Tabs)_** Color of the text displayed in a folder when the mouse is over it. This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect. _(Added in PxPlus 2022)_  
**%NOMADS'IsJavx  
%NOMAD_IsJavx** |  Will contain a 0 (zero) value if not running JavX.  
**%NOMADS'IsWindx  
%NOMAD_IsWindx** |  WindX version number or 0 (zero) if not running under a WindX session.  
**%NOMADS'IsWindx$  
%NOMAD_IsWindx$** |  If running a WindX session, this variable will be loaded with "[WDX]".  
**%****NOMADS'Last_View$  
%NOMAD_Last_View$** |  Set to control the View associated with the **[Library Object Selection](../../NOMADS%20Development/Library%20Object%20Selection/Overview.md)** interface. Set to "objselect" for the Button view, "objselvt" for the Toolbar view, or "objselvm" for the Menubar view.  
**%****NOMADS'List_Popup** |  Set this property to add system popup menus to all List Boxes and Grids. See **[List Box and Grid System Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.md)**. _(Added in PxPlus 2020)_  
**%****NOMADS'List_Popup$** |  Set this property to replace the default text associated with the system popup menu (**_List Options ..._**). See **[List Box and Grid System Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.htm#Mark1)**. Since the text will become a popup menu item, an **&**  _(ampersand)_ character may be used to indicate the hot key associated with the item. **_Example:_** S&ystem Items ... If no **&**  _(ampersand)_ is included in the text, the first character of the text entered will be used as the hot key. _(Added in PxPlus 2020)_  
**%****NOMADS'List_Popup_Suppress_Options$** |  Set this property to suppress any combination of system popup menu options. See **[List Box and Grid System Popup Menu](../../Creating%20Panel%20Controls/Popup%20Menu/List%20Box%20and%20Grid%20System%20Popup%20Menu.htm#Mark1)**. Any combination of "C", "E", "F", "G", and/or "P" will cause the _Copy_ , _Export_ , _Find_ , _Chart_ and/or _Print_ items respectively to be suppressed. **_Example:_** CE **_or_** P _(Added in PxPlus 2020)_  
**%NOMADS'Load_Text$  
%NOMAD_Load_Text$** |  Text to show in the title bar of a dialogue box that displays while a panel is loading.  
**%****NOMADS'LogFile$** |  **_(Read Only)_** Contains the path of the current NOMADS log file derived from the Windows **PxP_LogFile** environment variable. See **[NOMADS Run-Time Events Logging](../../Program%20Interaction/NOMADS%20Run-Time%20Utilities/Nomads%20Run-Time%20Logging.md)**. _(Added in PxPlus 2017)_  
**%NOMADS'Menu$  
%NOMAD_Menu$** |  Contains the menu group or item to be pasted to a menu bar definition in a different panel.  
**%****NOMADS'Menu_LeftEdge_Clr$  
%NOMAD_Menu_LeftEdge_Clr$** |  **_(NOMADS Only)_** Default left edge color for menu items. **_Example:_** %NOMAD_Menu_LeftEdge_Clr$="Light Green" See **[Menu Colors](../../Creating%20Panel%20Controls/Menu%20Bar/Menu%20Colors.md)**. _(Added in PxPlus 2017)_  
**%****NOMADS'Menu_Text_Clr$  
%NOMAD_Menu_Text_Clr$** |  **_(NOMADS Only)_** Default text color for menu items. **_Example:_** %NOMAD_Menu_Text_Clr$="#FFD700" See **[Menu Colors](../../Creating%20Panel%20Controls/Menu%20Bar/Menu%20Colors.md)**. _(Added in PxPlus 2024)_  
**%****NOMADS'Menu_TextBackground_Clr$  
%NOMAD_Menu_TextBackground_Clr$** |  **_(NOMADS Only)_** Default background color for menu items. **_Example:_** %NOMAD_Menu_TextBackground_Clr$="RGB:255 182 225" See **[Menu Colors](../../Creating%20Panel%20Controls/Menu%20Bar/Menu%20Colors.md)**. _(Added in PxPlus 2017)_  
**%****NOMADS'Menu_Top_Option$  
%NOMAD_Menu_Top_Option$** |  **_(NOMADS Only)_** Set to Y to apply the _Text_ and _Background_ menu colors to the top level of the menu bar as the default. _(Added in PxPlus 2024)_  
**%NOMADS'MenuBar_Height  
%NOMAD_MenuBar_Height** |  **_(Read Only)_** Height (in pixels) of the window menu bar.  
**%****NOMADS'Min_Windx_Ver _(Read Only)_**   
See ***Note**.  
  
**%NOMAD_Min_Windx_Ver** | 

#### ***Note:**  
Because this value is required on the instantiation of the global NOMADS object, setting the **%NOMADS'Min_Windx_Ver** property will not have the desired results; therefore, it has been defined as **_Read Only_**.  
  
The global variable **%NOMAD_Min_Windx_Ver** must be used to set the property value and must be set **_prior_** to the instantiation of the NOMADS object.

Normally, the NOMADS object checks that the version of PxPlus installed on each WindX workstation is at least at the same level as the version installed on the server. This is to ensure that any new features present in the server executable will also be available on the workstations. Setting the %NOMAD_Min_Windx_Ver in the START_UP program on the server may be used to override this behavior. **_Example:_** Suppose that the server is running PxPlus 2016 (version 13.00), and the workstations are all running PxPlus 2014 FP1 (version 12.50). Instantiating the NOMADS object will result in a Configuration Mismatch error message. If you are certain that the code does **_not_** make any reference to any new features added since PxPlus 2014 FP1 (version 12.50), adding the following line to the START_UP program running on the server will allow the workstations to access NOMADS without an error: %NOMAD_Min_Windx_Ver=12.5 _(Added in PxPlus 2017)_  
**%NOMADS'Mln_Sep$  
%NOMAD_Mln_Sep$** |  Overrides the default separator ($8A$) on any multi-line control.  
**%NOMADS'Msgmnt$  
%NOMAD_Msgmnt$** |  Contains name of message library being updated in the **[Message Library Maintenance](../../Message%20Library%20Maintenance/Overview.md)**.  
**%****NOMADS'No_Customize  
%NOMAD_No_Customize** |  Set to non-zero to suppress the **[Customizer](../../Customizer/Overview.md)** popup menu. Overridden by **[%NOMADS'Enable_Customizer_Popup](Overview.htm#enablecustpopup)**.  
**%NOMADS'No_Qry_Msg  
%NOMADS_No_Qry_Msg** |  Set to 1 to suppress the warning message at run time when the user invokes the query on a field that has no query defined.  
**%NOMADS'NoPlusW  
%NOMAD_NoPlusW** |  If 0 (zero), NOMADS will issue a PRINT '+W' to enable creation of Windows-style windows.  
**%NOMADS'NoTest  
%NOMADS_NoTest** |  Disable use of Test screen.  
**%NOMADS'Object_Persistence  
%NOMAD_Object_Persistence** |  Set this to 1 to turn on **[Object Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Object%20Persistence.md)** at the application level.  
**%****NOMADS'Object_Resize  
%NOMAD_Object_Resize** |  Set to 1 to turn on object resizing at the application level rather than setting the internal _Size Adjustment_ attribute on each panel in the Header properties. **_Default_** is 0 (zero). See **[Resizing Input Controls](../../Panel%20Designer/Resizing%20and%20Persistence/Resizing%20Input%20Controls.md)**.  
**%NOMADS'OnExit$  
%NOMADS_OnExit$** |  Program run on exit of any panel.  
**%NOMADS'Opanel  
%NOMADS_Opanel** |  Provides the object handle to the current (topmost) NOMADS panel. This is only valid when using the OOP-based NOMADS interface.  
**%NOMADS'Open_Load  
%NOMAD_Open_Load** |  When set to 0 (zero), a standard **[OPEN](../../../directives/open.md)** directive is used to open the library file. When set to a non-zero value, an **OPEN LOAD** directive is used. **OPEN LOAD** can be used to improve panel display performance.  
**%NOMADS'Override_Font$  
%NOMAD_Override_Font$** |  Override system defaults font. Same format used by **[%NOMAD_Pnl_Def_Font$](Overview.htm#pnldeffont)**.  
**%NOMADS'Palette_Loaded  
%NOMAD_Palette_Loaded** |  If set to 0 (zero), NOMADS will open the user defined color file _providex.clr_ and load the color palette. This variable is set after the palette is loaded to 1.  
**%NOMADS'Panel_Info_Force  
%NOMAD_Panel_Info_Force** |  Used with **[Panel Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md)**. If set to a non-zero value and panel/object persistence is turned on, then panel/control coordinates are saved automatically on the termination of a panel whether or not their values have changed. **_Default_** is 0 (zero).  
**%****NOMADS'Panel_Info_Prog$  
%NOMAD_Panel_Info_Prog$** |  Used with **[Panel Persistence](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md)**. Load this variable with the name of the program that will read and write the panel information to a disk file. Use the generic program ***winpnl** or create your own.  
**%NOMADS'Paste_Lib$  
%NOMAD_Paste_Lib$** |  Default panel library used by the NOMADS Designer **Block Paste** utility. If a different library is selected in the utility, %NOMAD_Paste_Lib$ will be set to the new value.  
**%NOMADS'Pnl_Def_Colour$  
%NOMAD_Pnl_Def_Colour$** |  **_(Internal Use Only)_** Default foreground and background colors. **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** colors override settings in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**. User-defined colours consist of "Colour _nnn_ ".  
**%****NOMADS'Pnl_Def_Font$  
%NOMAD_Pnl_Def_Font$** |  **_(Internal Use Only)_** Default font for controls. Font settings in the **[Panel Header](../../Panel%20Designer/Panel%20Header/Overview.md)** override font settings in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**. (**_Format:_** "_font name,font size,fontattr_ ")  
**%NOMADS'Post_Display  
%NOMADS_Post_Display** |  Override sequence of the Post Display logic. The default sequence executes Post Display logic prior to displaying any folders on the panel. By setting this to 1, Post Display logic will be executed after any folders are displayed.  
**%NOMADS'Pre_Display$  
%NOMADS_Pre_Display$** |  Optional program that will be performed before the panel and controls are drawn.  
**%NOMADS'Prg_Cache  
%NOMAD_Prg_Cache** |  Program cache count.  
**%NOMADS'Process$  
%NOMADS_Process$** |  Pre-processing for panel name and library. Program is called using the SCRN_ID$ and SCRN_LIB$ as arguments.  
**%****NOMADS'Program_Editor  
%NOMAD_Program_Editor** |  Default program editor that NOMADS will launch when opening and editing PxPlus programs (e.g. the **Logic** tab in the **Properties** window for applicable panel controls). **0** \- *IT - Integrated Toolkit **_(Default)_**  
**1** \- Ed+ See **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)** and **[Ed+ Program Editor](../../../Ed%20Program%20Editor.md)**. _(Added in PxPlus 2023)_  
**%****NOMADS'PublicAutoChart** |  Set to non-zero to allow the user to create public AutoCharts. See **[Defining an AutoChart](../../../NOMADS%20AutoChart/Defining%20and%20Displaying%20an%20AutoChart.htm#Defining_an_AutoChart)**. **_Default_** is 0.  
**%****NOMADS'Qry_Attr$  
%NOMAD_Qry_Attr$** |  **_(Multi-Lines Only)_** Sets query button attributes. Options are: **B** \- Bitmap  
**F** \- Flat  
**f** \- Flat, No Border  
**T** \- Transparent  
**Q** \- Embedded **_Example:_** To set a flat bitmap button: %NOMAD_Qry_Attr$="FB" To view a video presentation on how to use the embedded query feature, which includes the %NOMAD_Qry_Attr$ property, see **[How to Use Embedded Query](https://www.youtube.com/watch?v=K01hzcnYNlk&feature=youtu.be)**. This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#querybtn_attr)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#querybtn_attr)** is in effect that has a _Query Button Attributes_ setting defined for a multi-line control.  
**%NOMADS'Qry_Btn$  
%NOMAD_Qry_Btn$** |  **_(Multi-Lines Only)_** Load this with a bitmap reference to display a different default bitmap for the query button. **_Example:_** {!Help} This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#querybtn_bitmp)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#querybtn_bitmp)** is in effect that has a _Query Button Bitmap_ setting defined for a multi-line control.  
**%NOMADS'Qry_Clear_Start  
%NOMAD_Qry_Clear_Start** |  **_(Classic Query Only)_** If 0 (zero), position at _Start At_ value in the query. **_(Default)_** A non-zero value overrides _Start At_ value and starts display at the beginning of the file. The variable QRY_VAL$ will be cleared before the query panel is displayed.  
**%NOMADS'Qry_Print$  
%NOMAD_Qry_Print$** |  Name of a user program to call when the Print button is selected in a query. Arguments passed to the program are the 12-character space-padded uppercase screen key and the path to the screen library. The program logic totally replaces the query's default print logic.  
**%NOMADS'Qry_Tip$  
%NOMAD_Qry_Tip$** |  **_(Multi-Lines Only)_** Tip Value text to be displayed when the mouse is on the query button.  
**%NOMADS'Qry_Wide  
%NOMAD_Qry_Wide** |  **_(Multi-Lines Only)_** Set this to change the default width (in number of columns) of the query button. This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#querybtn_width)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.htm#querybtn_width)** is in effect that has a _Query Button Width_ setting defined for a multi-line control.  
**%****NOMADS'Query_AutoColSize** |  Set to 1 to automatically adjust the sizes of the columns to fit the width of a query. _(Added in PxPlus 2019)_  
**%NOMADS'Query_Clear_Status  
%NOMAD_Query_Clear_Status** |  **_(Classic Query Only)_** If non-zero, the query window status bar is cleared.  
**%****NOMADS'Query_ColumnDisplay$** |  Set the query column display class. **_Default_** is "*obj/qrycoldsp".  
**%NOMADS'Query_Fave_Color$  
%NOMAD_Query_Fave_Color$** |  Highlight records designated as favorites in the normal query display by specifying a highlight color. **_Example:_** %NOMADS'Query_Fave_Color$="Dark Green" **_or_** %NOMADS'Query_Fave_Color$="RGB:192 64 0"  
**%****NOMADS'Query_GridLines** |  Displays grid lines in the query. Options are: **0** \- No grid lines  
**1** \- Full grid  
**2** \- Vertical lines  
**3** \- Horizontal lines To define the grid lines display for a query assigned to a control, see **[Query Header](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.htm#display)**. _(Added in PxPlus 2017)_  
**%NOMADS'Query_Hide_On_Maint  
%NOMAD_Query_Hide_On_Maint** |  Set to 1 to hide the query panel when the query maintenance button is selected and redisplay the query when the maintenance process is finished.  
**%NOMADS'Query_Kno  
%NOMAD_Query_Kno** |  If non-zero, overrides value in the **[Query Definition](../../Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)**. The run-time query logic uses this value to override the key number used to sort the query.  
**%****NOMADS'Query_NoDropHeader** |  Set to 1 to suppress the display of the column headings in **[Drop Queries](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#dropquery)**. _(Added in PxPlus 2019)_  
**%NOMADS'Query_No_Gray  
%NOMAD_Query_No_Gray** |  Set this to non-zero to override the Gray/White Display setting and display a White Only background.  
**%NOMADS'Query_Odb_Ignore  
%NOMAD_Query_Odb_Ignore** |  **_(Classic Query Only)_** A non-zero value ignores the ODBC table flag and processes as a native file. See **[Query Subsystem](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)**.  
**%****NOMADS'Query_ProfileClean  
%NOMAD_Query_ProfileClean** |  Number of days of disuse after which query profile records are removed from _query.inf_. (**_Default_** is 90.)  
**%****NOMADS'QueryProgram$** |  Set the NOMADS query program (*winqry or *winqry2). **_Default_** is "*winqry2" (Query+) if Smart Control is activated; otherwise, "*winqry" (Classic Query).  
**%NOMADS'Query_RetKno  
%NOMAD_Query_RetKno** |  Contains the value of the last key number used to sort the query.  
**%NOMADS'Query_Sbar_Max  
%NOMAD_Query_Sbar_Max** |  Number of records in a large file used to determine if alternate scrollbar logic is to be used. See **[Performance Considerations](../../Dictionary-Based%20Development/Query%20Subsystem/Designing%20and%20Using%20the%20Query%20Subsystem.htm#performance)**.  
**%NOMADS'Query_Suppress_Export  
%NOMAD_Query_Suppress_Export** |  Set to 1 to suppress the _Export_ and _Copy_ features in the run-time query.  
**%NOMADS'Query_Suppress_Favorites  
%NOMAD_Query_Suppress_Favorites** |  Set to 1 to suppress the _Favorites_ feature in the run-time query.  
**%****NOMADS'Query_Suppress_Persistence** |  **_(Query+ and Classic Query Only)_** Suppress persistence on the query. Options are: **0** \- Do not suppress persistence (if set).  
**1** \- Suppress persistence (location/size of query will be the original location/size).  
**2** \- Suppress location persistence (location will be the original location, but size will persist if changed). If %NOMADS'Query_Suppress_Persistence>0, then maximized panels are overridden.

#### **Note:**  
For information on suppressing panel persistence, see [**Panel Persistence**](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md) and the [**%NOMADS'RelPnl_Suppress_Persistence**](Overview.htm#relpnlsuppresspersistence) property.

_(Added in PxPlus 2019)_  
**%NOMADS'Query_Suppress_Popup$  
%NOMAD_Query_Suppress_Popup$** |  Exclude certain types of menu options from the query popup menu. Suppress menu items by setting the variable with any combination of the following options: **E** \- Export  
**C** \- Copy  
**H** \- Hidden columns  
**F** \- Filters  
**G** \- Charting  
**V** \- Favorites  
**P** \- Profile  
**U** \- User formulas **_Example:_** A setting of "EC" suppresses the _Export_ and _Copy_ options.  
A setting of "CEFGHPUV" or "*" suppresses the entire popup menu.

#### **Note:**  
The order of the letter codes is not important.  
  
**%****NOMADS'Query_View** |  Default **[Query+](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#queryplus)** view to use. Options are: **0** \- Default _(Toolbar View)_  
**1** \- Drop Query  
**2** \- Toolbar View  
**3** \- Menu View  
**4** \- Hybrid View  
**5** \- Drop Tree For information on the Drop Query and Drop Tree Query, see **[Drop Queries](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#dropquery)**.

#### **Note:**  
This variable supersedes the [**%NOMADS'Drop_Qry_All**](Overview.htm#dropqryall) variable.

_(Added in PxPlus 2017)  
(Drop Tree option was added in PxPlus 2021.)_  
**%NOMADS'Quiet_Load_Error  
%NOMAD_Quiet_Load_Error** |  Set to 1 to suppress the display of an error message when the panel or panel library cannot be found when the NOMADS run-time engine (*winproc) attempts to load a panel.  
**%NOMADS'RefreshAllWdws** |  Set to non-zero to have Refresh Screen do all concurrent windows. **_(Default)_**  
**%NOMADS'Relative_Wdw  
%NOMAD_Relative_Wdw** |  If set to non-zero, the next window will be relative to current window.  
**%****NOMADS'RelPnl_Suppress_Persistence** |  [**Panel Persistence**](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Persistence.md) ** _must_** be turned **_On_** for this property to have any effect. Suppresses panel persistence for all dialogue panels with **[Relative](../../Panel%20Designer/Panel%20Header/Overview.htm#position)** positioning. Options are: **0** \- Panel persistence is not suppressed. **_(Default)_**  
**1** \- Suppress panel persistence (location & size).  
**2** \- Suppress location persistence only (panel size persists).

#### **Note:**  
Panel persistence can be suppressed for Queries (see **[Query+](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#queryplus)** and **[Classic Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.htm#classicquery)**) on a **_system-wide_** basis by setting the **[%NOMADS'Query_Suppress_Persistence](Overview.htm#querysuppresspersistence)** property.

_(Added in PxPlus 2019)_  
**%NOMADS'Save_Qry_Path  
%NOMAD_Save_Qry_Path** |  If set to a value of 1, then the full library path is saved when assigning a query object to a control.  
**%NOMADS'Script_File$  
%NOMAD_Script_File$** |  Path of the NOMADS script playback file to process.  
**%NOMADS'Script_Fn  
%NOMAD_Script_Fn** |  Script playback file number.  
**%NOMADS'Script_Log  
%NOMAD_Script_Log** |  Script log file channel number.  
**%****NOMADS'ScriptSuppress** |  Set to non-zero to suppress NOMADS scripting capabilities.  
**%NOMADS'Script_Wdw  
%NOMAD_Script_Wdw** |  Window number for the script 'Dialogue'.  
**%NOMADS'Sec_Msg  
%NOMAD_Sec_Msg** |  Set to 1 to display an error message at run time when the user does not have access to a panel.  
**%NOMADS'Security_Lib$  
%NOMAD_Security_Lib$** |  Path to the panel library that contains the security "Logon" panel. ** _Default_** is *win/scrnlib.en.  
**%****NOMADS'Shifted_Query** |  Set to 1 to restrict query invocation to the shifted function key. _(Added in PxPlus 2016)_  
**%****NOMADS'SidebarFolderTabHeight** |  System-wide default tab height for sidebar folders. If not set, **_default_** is 2.5 lines. This is overridden by the **[Tab Height](../../Creating%20Panel%20Controls/Folder%20Controls/Folder%20Properties.htm#tabheight)** set in a Folder definition. _(Added in PxPlus 2017)_  
**%NOMADS'Skip_Change_Logic  
%NOMAD_Skip_Change_Logic** |  Set to 1 to stop the On Change logic from executing if you click on the grey area of the panel while focus is on a multi-line control.  
**%NOMADS'Skip_OnSelect_Logic  
%NOMAD_Skip_OnSelect_Logic** |  If set to 1, %NOMAD_Enter_Tab > 0, then the On Change logic is only triggered once when the **Enter** key is pressed on a multi-line using the _Signal On Exit_ attribute.  
**%NOMADS'Statusbar_Height  
%NOMAD_Statusbar_Height** |  **_(Read Only)_** Height (in pixels) of the window status bar.  
**%NOMADS'Stk$  
%NOMAD_Stk$** |  Error handler stack.  
**%****NOMADS'Suppress_Auc  
%NOMADS_Suppress_Auc** |  Set to 1 to suppress **[Auto Complete](../../System%20Maintenance%20Tools/System%20Options/Auto%20Complete.md)** functionality.  
**%****NOMADS'SuppressCommandErrorTrap** |  Set to non-zero to suppress internal error handling for errors occurring when processing PERFORM, CALL and EXECUTE logic assigned to Pre-Display, Post-Display, OnFocus, OnChange, etc. logic assigned to panel headers and controls. _(Added in PxPlus 2014 - Feature Pack 1)_  
**%****NOMADS'SuppressWindXMakeFolder  
%NOMADS_SuppressWindXMakeFolder** |  Set to non-zero to hide the _Make New Folder_ button on the WindX **[GET_FILE_BOX](../../../PxPlus%20User%20Guide/Graphical%20User%20Interfaces/Interface%20Windows/Getfilebox.md)**. _(Added in PxPlus 2019)_  
**%NOMADS'Tab_Dir  
%NOMAD_Tab_Dir** |  Returns the tab direction at run time. A value of 1 indicates tabbing forward. A value of -1 indicates tabbing backward.  
**%****NOMADS'Tab_Folder_Colors$  
%NOMAD_Tab_Folder_Colors$** |  **_(NOMADS Only)_** Sets the default color(s) of a normal folder tab. **_Format:_** _fill pattern,fill color1,fill color2 (**Optional**)_ **_Example:_** This example fills the tab from left to right using Light Green as the first color and ending with Light Yellow: %NOMAD_Tab_Folder_Colors$="3,Light Green,Light Yellow" This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect. _(Added in PxPlus 2022)_  
**%****NOMADS'Tab_Folder_TextClr$  
%NOMADS_Tab_Folder_TextClr$** |  **_(NOMADS Only)_** Color of the text displayed in a normal folder tab. This setting is ignored if a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** or **[Visual Class](../../System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)** is in effect. _(Added in PxPlus 2022)_  
**%****NOMADS'Theme$  
%NOMADS_Theme$** |  Load with the name of a pre-defined Theme to set the _general_ graphical user interface Theme for your application.

#### **Note:**  
Can be overridden at the library and panel levels. Can also be overridden by an iNomads _Template_ setting and the **%NOMADS'ThemeOverride** setting. See **[Applying a Theme to Your Application](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#applyingtheme)**.  
  
**%****NOMADS'ThemeOverride$  
%NOMADS_ThemeOverride$** |  Load with the name of a pre-defined Theme to set the graphical user interface Theme for your application.

#### **Note:**  
Overrides **_all_** other Theme settings, including iNomads _Template_ Theme. See [**Applying a Theme to Your Application**](../../System%20Maintenance%20Tools/System%20Options/Themes.htm#applyingtheme).  
  
Does not override the NOMADS **[Toolkit Theme](../../System%20Maintenance%20Tools/System%20Options/System%20Defaults.htm#Mark4)**.

_(Added in PxPlus 2017)_  
**%****NOMADS'Timeout  
%NOMAD_Timeout** |  Input timeout value.  
**%****NOMADS'TipTimerCycles** |  Length of time (in seconds) that a tip will be displayed.

#### **Note:**  
Cannot be set lower than the value indicated by the **[TipTimerCycles](../../../mnemonics/option.htm#tiptimer)** option when the NOMADS object was instantiated.

_(Added in PxPlus 2020)_  
**%****NOMADS'TitleBar$** |  Specify a panel and library (comma separated) to use as the system-wide default custom title bar to be inserted at the top of panels. Overridden by Library Default and Panel Header settings (see **[Assigning Custom Title Bars](../../Custom%20Title%20Bars.htm#assigning)**). **_Example:_** %NOMADS'TitleBar$="mypanel,mylib" _(Added in PxPlus 2017)_  
**%NOMADS'Trace_File$  
%NOMADS_Trace_File$** |  Name of file to be created when the Trace window is invoked. If blank when running in Windows, the **_default_** file is "C:\NOMADS.TRC". In UNIX, the **_default_** filename is "/tmp/ _userid_ +.trace".  
**%NOMADS'Turbo_Off  
%NOMAD_Turbo_Off** |  A non-zero value causes *winproc to turn off turbo mode (see **['TU'](../../../parameters/tu.md)** system parameter) during the drawing of a panel. Turbo mode is turned back on after all controls are drawn.  
**%NOMADS'Userid$** |  Returns the current user.  
**%NOMADS'User_Reserved_Words$** |  Enter the full path name for the user-defined reserved words data file. Defaults to "pxplus.wds" if not set. See **[User Reserved Words Maintenance](../../../Reserved%20Words.md)**. Can also be defaulted system-wide by setting the **[PXP_USER_RESERVED_WORDS](../../../PxPlus%20Installation%20and%20Configuration/Customizing%20PxPlus/Environment%20Variables.htm#Mark19)** environment variable. _(Added in PxPlus 2017)_  
**%****NOMADS'Visual_Effect  
%NOMAD_Visual_Effect** |  Set default visual look for a library. **_Where:_** **2 -** Turns on 2D mode.  
**3 -** Turns on 3D mode.  
**4 -** Turns on 4D mode.

#### **Note:**  
Default option in the **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#display)** **Display** tab must be set when using this global variable.  
  
To take full advantage of NOMADS and the new visual enhancements, **4D** mode is required.  
  
**%****NOMADS'Visual_Override  
%NOMAD_Visual_Override** |  Force all panels to a particular visual mode (regardless of the **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.htm#display)** setting). **_Where:_** **2** \- Turns on 2D mode.  
**3** \- Turns on 3D mode.  
**4** \- Turns on 4D mode.

#### **Note:**  
To take full advantage of NOMADS and the new visual enhancements, **4D** mode is required.  
  
**%****NOMADS'WikiUrl$  
%NOMADS_WikiUrl$** |  URL to be used with the NOMADS Wiki. See **[NOMADS Wiki Help](../../System%20Maintenance%20Tools/Nomads%20Wiki%20Help.md)**. **_Example:_** localhost:8086 _(Added in PxPlus 2023)_  
**%NOMADS'Win_Ver  
%NOMAD_Win_Ver** |  Windows version number.  
**%NOMADS'WizardImage$** |  Path to the Wizard image. ** _Default_** is "*win/images/dimple.bmp".  
**%NOMADS'WizardTextColor$** |  Color of the text appearing over the Wizard image. **_Default_** is "WHITE".  
**%NOMADS'Workarea_H  
%NOMAD_Workarea_H** |  **_(Read Only)_** Height (in pixels) of the work area (excluding toolbar) of the current monitor.  
**%NOMADS'Workarea_W  
%NOMAD_Workarea_W** |  **_(Read Only)_** Width (in pixels) of the work area (excluding toolbar) of the current monitor.  
**%NOMADS'Workarea_X  
%NOMAD_Workarea_X** |  **_(Read Only)_** Horizontal location (in pixels) of the work area (excluding toolbar) from the left edge of the main monitor.  
**%NOMADS'Workarea_Xoffset  
%NOMAD_Workarea_Xoffset** |  **_(Read Only)_** Horizontal offset (in pixels) of the work area (excluding toolbar) from the left edge of the main monitor.  
**%NOMADS'Workarea_Y  
%NOMAD_Workarea_Y** |  **_(Read Only)_** Vertical location (in pixels) of the work area (excluding toolbar) from the top edge of the monitor.  
**%NOMADS'Workarea_Yoffset  
%NOMAD_Workarea_Yoffset** |  **_(Read Only)_** Vertical offset (in pixels) of the work area (excluding toolbar) from the top edge of the monitor.  
**%NOMADS'Xchar  
%NOMAD_Xchar** |  Text width (single character value in pixels).  
**%NOMADS'Xmax  
%NOMAD_Xmax** |  Screen width (single character value in pixels).  
**%NOMADS'Ychar  
%NOMAD_Ychar** |  Text height (single character value in pixels).  
**%NOMADS'Ymax  
%NOMAD_Ymax** |  Screen height (single character value in pixels).  
  
The ***obj/nomads** class definition contains an ACCEPT PROPERTIES clause. This means that developers can add their own properties to the object on the fly. This can be done simply by using a property reference with the **%NOMADS** object identifier.

**_Example:_**

> %NOMADS'ourCompanyLogo$="images/CompanyLogo.gif"

This will add an 'ourCompanyLogo$ property to the object.

#### **Note:**  
It is recommended that you use a prefix on your property names so that there is no issue with duplicating possible future property names.

##  Using NOMADS Variables - Examples

**_Example 1:_** **Using NOMADS Variables to Pass and Store Values**

This example of a panel and its associated event-handler routines shows how various NOMADS variables can be used to pass and store values and affect behavior.

A panel named PRODCODE has been created to enter and validate a product code. It has a Multi-Line called PRODUCTCODE and two buttons, _OK_ and _Cancel_. The Panel Header has a default program set and Pre_Display logic that is set to perform ";PC _Pre_Display".

The PRODUCTCODE Multi-Line has an _Input Length_ of 1, the _Uppercase_ attribute is turned On, _Initial Value_ is set to X, and On Change Logic is set to perform ";PC_Validate_ProductCode". The On Change event for the _OK_ button is set to perform ";PC _Okay". The On Change event for the _Cancel_ button is set to END. The event-handler routines are as follows (NOMADS variables are marked in **bold text**):

> ! Process ProdCode panel  
>  !  
> PC_Pre_Display:  
>  if **Arg_1$** ="" \  
>  then ProductCode$=**Init_Val$** \  
>  else ProductCode$=**Arg_1$**  
>  Arg_1$=""  
>  return  
>  !  
> PC_Validate_ProductCode:  
>  if ProductCode$="" \  
>  then ProductCode$=**Init_Val$** \  
>  else if pos(ProductCode$="ADPX")=0 \  
>  then msgbox "Invalid product code"+sep+"Valid entries are A, D, P and X","Error";  
>  ProductCode$=**Prior_Val$** ;  
>  **Next_ID** =ProductCode.ctl;  
>  **Refresh_Flg** =1  
>  return  
>  ! PC_Okay:  
>  **Arg_1$** =ProductCode$  
>  **Cmd_Str** **$** ="END"  
>  return

#### **Note:**  
Refresh_Flg would not have to be set in the PC_Validate_ProductCode routine if the _Auto Refresh_ attribute is set for the Panel Header.

**_Example 2:_** **Using NOMADS _EOM$ Variable to Filter Events**

This example shows how the **_EOM$** variable can be used to filter events and control the behavior of the interface. Normally, On Change logic is triggered when the user changes the value of a control and then either presses the Enter key or moves focus to another control. In the case of a List Box control, double-clicking on an item with the mouse also triggers On Change logic.

In the panel below, we want to select a client from the List Box on the left either by highlighting an item and pressing the Enter key or by double-clicking on the item. We want to filter out the On Change logic triggered when the List Box is exited.

> A default program is assigned in the Panel Header, as well as Pre-Display and Exit logic, and _Auto Refresh_ is set.

The Multi-Lines on the right side of the panel are named using data field names and are loaded when the data file is read. The properties for the List Box are defined as follows:

|  **_Property_** |  **_Value_**  
---|---|---  
__ |  _Control Name_ |  CLIENTLIST  
__ |  _Control Type_ |  List Box  
__ |  _List Box Type_ |  Report View  
__ |  _On Change_ |  Perform=";Process_CLIENTLIST"  
__ |  _Post Create_ |  Perform=";Load_CLIENTLIST"  
__ |  _Alt-Key_ |  $  
__ |  _Format Definition_ |  [Client Name]L20.00,[Client ID]L8.00,  
__ |  _Full Line Highlight_ |  On  
  
We also want to restrict the Client List to a specific sales representative so the Sales Rep Code is passed as Arg_1$:

> PANEL_PREDISPLAY:  
>  sRep$=arg_1$ ! Sales Rep to be processed passed in as Arg_1$  
>  PanelTitle$="Client Information for "+sRep$ ! Set title for panel  
>  channel=0  
>  open (hfn,iol=*,err=*return)"client";  
>  channel=lfo  
>  return  
>  !  
>  PANEL_EXIT:  
>  if channel<>0 \  
>  then close (channel)  
>  return  
>  !  
>  LOAD_CLIENTLIST:  
>  list_box load ClientList.ctl,"" ! Clear the list box  
>  select * from channel,kno=1 where SalesRep$=sRep$ ! sRep$ records only  
>  list_box load ClientList.ctl,0,ClientName$+sep+ClientID$ ! Load list box  
>  next record  
>  read data from "" to iol=iol(channel) ! Clear the multi_lines  
>  return  
>  !  
>  PROCESS_CLIENTLIST:  
>  ! Process only if list item selected by CR ($0D$) or doubleclick ($02$)  
>  if _eom$=$0D$ or _eom$=$02$ \  
>  then read data from ClientList$ to ClientName$,ClientID$;  
>  read (channel,kno=1,key=ClientName$:ClientID$)  
>  return

**_Example 3:_** **Using Folder Variables**

In applications that use Folder controls, you may want to set focus to a control on a different tab. This can be accomplished by using the NOMADS variables **FOLDER_ID$** , **NEXT_FOLDER** , **NEXT_ID** and **NEXT_ID$**.

This example shows a panel with a Folder control consisting of three tabs: _Shipto_  _Information_ , _Payment_ and _Details_. The _Payment_ tab contains a Multi-Line called SALESREP.

_Shipto_ _Information_ tab:

> _Payment_ tab:

> The On Change event for the _Write_ button will validate the SALESREP Multi-Line. If the Multi-Line is empty, a message box will display and focus will be set to the control:

> WRITE_REC:  
>  if Salesrep$="" \  
>  then msgbox "SalesRep Id is mandatory","Error";  
>  if Folder_Id$<>"Payment" \  
>  then Next_Folder=Fldr.Payment.Ctl;  
>  Next_Id=0,Next_Id$="Salesrep.ctl" \  
>  else Next_Id=Salesrep.ctl  
>  Refresh_Flg=1  
>  return
