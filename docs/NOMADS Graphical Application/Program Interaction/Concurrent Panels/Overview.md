# Program Interaction

**Concurrent Panels** |  **__**  
---|---  
  
PxPlus supports multiple active windows. To create a panel that logically attaches to the current panel (in other words, leaves the current panel active and shares controls), an **&**  _(ampersand)_ option is added to the panel definition at run time. This attaches the new panel to the current one.

Technically, there is no limit to the number of common/active panels that the system will support; however, due to table constraints, the maximum number of common/active windows allowed in NOMADS is five (the main window plus four active windows).

The number of interactive controls on a concurrent panel is limited to 199 and will affect the number of controls allowed on the parent panel. See **[Maximum Number of Controls](../../Creating%20Panel%20Controls/Introduction.htm#limits)**.

_(Support to increase the maximum number of controls on a panel was added in PxPlus 2021.)_

When an active panel is created, all the controls are assigned unique CTL values. If the current control being created already exists in another active window (has the same control name), the control is not created, and a message is displayed indicating the existence of duplicate controls. This message is only displayed once.

All variables are shared between all panels.

Group names and the CHANGE_FLG variable are passed across all active panels. Duplicate group names are allowed. From any active panel, you can launch a stand-alone window using the existing panel invoke commands...LINK, JUMPTO, PROCESS. Common/active windows should be defined as a Dialogue type. See **[Object List](../../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.htm#objectlist)**.

The **[Drag and Drop Utility](../../Panel%20Designer/Options%20and%20Utilities/Drag%20and%20Drop%20Utility.md)** can be used to drag and drop between concurrent windows.

_(Support for drag and drop between concurrent windows was added in PxPlus 2020.)_

## Invoking an Active Panel

The three ways to invoke an active panel are listed below.

  1. Merge-Jumpto selection is available to all controls. This selection can be found under each control's On Change logic settings. The syntax is the same as using the Jumpto selection where you pass the panel name and optional library, as in the following example.



> **_Example:_**

> Merge-Jumpto "_panel_ ","_library_ "

> If the panel is in the current library, you do not need to include the library name.

#### **Note:**  
The Library name may be a specific or generic reference. See **[Cascading Language Suffixes](../../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md)**.

  2. A concurrent panel can also be invoked from code. To do so, you need to load three variables and issue a **PERFORM** into a specific label in *winproc:



> REPLACEMENT_SCRN$="_panel name_ "  
>  REPLACEMENT_LIB$="_optional library name_ "  
>  %NOMAD_CONCURRENT_WDW=1

> **_Example:_**

> REPLACEMENT_SCRN$="PANELA",%NOMAD_CONCURRENT_WDW=1;   
>  PERFORM "*winproc;overlay_screen"

#### **Note:**  
The global variable is initialized back to zero after the concurrent panel is created.

  3. It can also be invoked through variable assignment:



> CMD_STR$="U"+"_panel_  _name_ , _library name_ "

#### **Note:**  
"U" must be uppercase.

> **_Example:_**

> CMD_STR$="UPNLA,LIB1.EN"   
>  CMD_STR$="UPNLA" (if panel is in the current active library)

## Special Closing Logic

All panels (including the main panel and all attached active panels) can be closed by either clicking the X _(Close)_ button in the top right corner of the main panel or using one of the options listed below. The On Exit logic for each window is executed just before the window is closed.

  1. End All Active Wdws option, which is available to all controls. This selection can be found under each control's On Change logic settings.
  2. Variable assignment: CMD_STR$="ENDALL" or CMD_STR$="A". Note that "ENDALL" and "A" must be uppercase.



#### **Note:**  
If the **X** button is used to close the main panel, all attached active panels will be automatically closed as well.

## Closing a Specific Concurrent Window

The CMD_STR$ variable can be used to close a specific concurrent window. The format is as follows:

> CMD_STR$="ENDPANEL, _panel name_ , _library_ "

#### **Note:**  
"ENDPANEL" must be uppercase.
