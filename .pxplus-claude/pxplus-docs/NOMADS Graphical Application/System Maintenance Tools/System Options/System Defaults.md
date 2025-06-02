# System Maintenance Tools

**System Defaults** |  **__**  
---|---  
  
If you are new to NOMADS, you may want to start your first session by establishing a set of system defaults to use as the common starting point for future graphical user interface designs.

System defaults are maintained in the **System Defaults** window and stored in the PxPlus keyed file, _providex.nmd_. If this file does not exist when the **System Defaults** task is selected, you will be prompted to create this file. This file may be created in different locations for different projects, allowing projects to have different system defaults settings. Defaults may be overridden for individual libraries in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**.

Starting with PxPlus 2024, two new modes - **_Dark_** and **_Light_** \- have been created to enhance the user experience of the PxPlus Development Suite. These new modes are selected from the **[Toolkit Theme](System%20Defaults.htm#Mark4)** drop box and apply to the development toolkit on a "per project" basis. This means that if you have more than one project, you can set a different mode for each project.

#### **Note:**  
Changes to **System Defaults** will not affect existing panels, only new ones.

> To invoke this window, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category and select _System Defaults_.  
From the **[NOMADS Session Manager](../../NOMADS%20Development/Getting%20Started.htm#sessionmgr)** |  Select _Options > System Defaults_ from the menu bar.  
  
This window consists of the following:

**Panel Library Information** |  |  _Language Suffix_ |  Two-character default suffix for any new libraries created (e.g. **_.en_** where all libraries created will be _library_name_.**_en_**). See **[Multilingual Capabilities](../../Multilingual%20Capabilities/Introduction.md)**. This is also the default suffix to try when opening a generic panel library (i.e. a library with no suffix) or if the specified library fails to open. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.  
---|---  
_Alternate Suffixes_ |  Comma-separated list of alternate suffixes to try when opening a panel library (e.g. _fr,es,de_ _,_). These suffixes will be tried when opening the originally specified library and the library with the default suffix has failed. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.  
_Toolkit Theme_ | 

#### **Note:**  
Toolkit Themes are not supported in the PxPlus Web IDE.

Theme that will apply to the development toolkit on a "per project" basis. See the tutorial **[How to Set a Toolkit Theme](../../../How%20To/How%20to%20Set%20Toolkit%20Theme.md)**. Does not apply to the following user facing applications: **[Report Writer](../../../Report%20Writer/Introduction.md)**, **[Views](../../../Views%20System/Introduction.md)**, **[Query](../../Dictionary-Based%20Development/Query%20Subsystem/Overview.md)** and **[Customizer](../../Customizer/Overview.md)**. If the _Toolkit Theme_ is changed, you will be prompted to restart the PxPlus IDE to apply the new Theme when you click _OK_. Click the drop down arrow for a list of predefined PxPlus Themes: _*Dark_ , _*Light_ , _*None_. (**_Default_** is _*None_.) You can copy PxPlus Themes by using the **[Copy Theme](Copy%20Theme.md)** utility. This allows you to create your own copy of these definitions and modify them for use in your application. See the tutorial **[How to Copy a Theme](../../../How%20To/How%20to%20Copy%20Theme.md)**. _(The Toolkit Theme option was added in PxPlus 2024.)_ |  _*Dark_ |  Toolkit displays with a noticeably Dark background and lighter colored controls. This gives a modern look and feel with a sharp color contrast, making controls more prominent. **_Example:_**  
---|---  
_*Light_ |  Toolkit displays with a Light Gray background and slightly darker colored controls. This gives a modern look and feel with a subtle color contrast. **_Example:_**  
_*None_ |  No toolkit Theme is applied. Toolkit looks as it did before without any changes. **_Example:_**  
**Visual Effects** |  |  _Display_ |  Visual mode that will apply to all controls (except where overridden in **[Library Defaults](../../NOMADS%20Development/Maintaining%20Library%20Objects/Library%20Defaults.md)**).  Click the drop down arrow for a list of selections: _Default, 2D Effect, 3D Effect, 4D Effect_. If not previously set, this will default to _4D Effect_.

#### **Note:**  
To take full advantage of NOMADS and the new visual enhancements, **4D** mode is required.

|  _Default_ |  Assumes the currently set mnemonic in PxPlus.  
---|---  
_2D Effect_ |  Two-dimensional look will be applied.  
_3D Effect_ |  Three-dimensional look will be applied.  
_4D Effect_ |  Four-dimensional look will be applied.  
  
See **[%NOMAD_Visual_Effect](../../Appendix/NOMADS%20Variables/Overview.htm#visualeffect)** and **[%NOMAD_Visual_Override](../../Appendix/NOMADS%20Variables/Overview.htm#visualoverride)**.

_(Support to default to "4D Effect" was added in PxPlus 2024.)_  
  
**Panel Setup Defaults** |  |  _Column_ |  Starting column for the top left corner of any new panels created. Format mask is -##0. Valid entries are -620 to 620.  
---|---  
_Line_ |  Starting line for the top left corner of any new panels created. Format mask is -##0. Valid entries are -255 to 255.  
_Width_ |  Width of any new panels created in number of columns. Format mask is -##0. Valid entries are 2 to 620.  
_Height_ |  Height of any new panels created in number of lines. Format mask is -##0. Valid entries are 3 to 255.  
_Suppress.VAL_ |  Suppresses use of the .VAL suffix. Each panel control value is automatically placed into a variable _ctl_name_.VAL$. **_Example:_** A list box defined as LBOX_1 is found in the variable LBOX_1.VAL$ (or LBOX_1$ if .VAL is suppressed).  
  
_(Support for increased Column, Line, Width and Heights maximums was added in PxPlus 2021.)_  
  
**Grid Definition Defaults** |  |  _No Grid  
Full Line  
Half  
Quarter  
Fifth_ |  These options define minimum increments for the height and location of a control when using the mouse or the _Resize_ option in the NOMADS Panel Designer (see **[Panel Resizing](../../Panel%20Designer/Resizing%20and%20Persistence/Panel%20Resizing.md)**). **_Example:_** If set to _Full Line_ , the height of the control will automatically adjust (snap) to one line high when drawn and will resize in increments of one line (i.e. 2, 3, 4, etc.). Setting the grid to a smaller setting allows for finer control of resizing and movement.

#### **Note:**  
Sizing can be overridden in the NOMADS Panel Designer by selecting _Edit > Grid Alignment_ from the menu bar. See **[Menu Options](../../Panel%20Designer/Work%20Area/Menu%20Options.htm#edit)**.  
  
---|---  
**Pathnames**  
**Pathname Case** |  _(Options Not Applicable to Current Windows Systems)_  
_OK_ |  Saves changes and closes the **System Defaults** window. If the **[Toolkit Theme](System%20Defaults.htm#Mark2)** was changed, you will be prompted to restart the Plus IDE to apply the new Theme. _(The IDE restart message was added in PxPlus 2024.)_  
_Cancel_ |  Closes the **System Defaults** window without saving changes.  
  
## See Also

**[Themes Maintenance](Themes.htm#themesutil)**  
**[Visual Classes Maintenance](Visual%20Classes.htm#vcutility)**  
**[Copy Theme](Copy%20Theme.md)**
