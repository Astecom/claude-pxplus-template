# Program Interaction

**Substitute Panels**|   
---|---  
  
Substitute panels are panels that can be processed instead of the originally specified panel when certain conditions are met. This is useful when, for example, you want unique panel designs based on running **[iNomads](../../iNOMADS/iNOMADS%20Introduction.md)**, different screen resolutions, different operating systems, different users, etc. For a particular panel, you can define various conditions, which result in a different panel being processed rather than the one named. Substitute panels can also have different controls and different logic.

When a panel is to be loaded, substitute panel definitions associated with that panel are processed to determine if a substitute panel is to be used instead. This occurs before the original panel's PreLoad logic is to be executed. A substitute panel definition consists of a condition, an associated library and a panel. The conditions specified in the substitute panel definitions are evaluated in order until a condition is evaluated as true. When a condition is true, the new library and panel in the definition are substituted for the original library and panel that was being loaded. This means that the original panel is not loaded. Instead, the panel and library references are changed to the new panel/library, the PreLoad logic for the new panel is executed and the new panel is loaded. If no conditions are true, then the originally specified panel is loaded.

## Substitute Panel Maintenance

The **Substitute Panel Maintenance** utility allows you to specify the conditions to apply when loading the panel currently being defined in the **[NOMADS Panel Designer](../Panel%20Designer/Introduction.md)**, as well as specify the panel/library to substitute when a condition is true.

This utility is invoked by selecting _Assign Substitute Panels_ from the _Utilities_ menu in the NOMADS Panel Designer.

> _(The Substitute Panel Maintenance utility was added in PxPlus 2016.)_

This utility consists of the following:

**Condition** |  Conditional expression that is to be evaluated to determine if a substitute panel will be used instead of the originally specified panel.

#### **Note:**  
The order in which the conditions are displayed is the order in which they are evaluated.

Conditions are evaluated prior to any logic associated with the original panel. This means that variables used in the conditions must be set up prior to the processing of the original panel. Global variables can be set up in a START_UP program or in application launch programs. System variables and functions can also be used to identify iNomads, operating systems, users, terminal ID's, etc. (i.e. SYS, WHO, FID(0)). In addition, %NOMADS properties such as '**DisplayHeight** and '**DisplayWidth** can be used. See **[%NOMADS Properties](../Appendix/NOMADS%20Variables/Overview.htm#properties)**. The **%iNomads >0** condition can be checked to run a different panel when using iNomads.  
---|---  
**Library** |  Path to the library containing the substitute panel. Click the drop-down arrow to invoke a list of recently used libraries. Click the Browse button to look through the directory structure to find the library or type the library path. An expression can also be entered by preceding the expression with an **_=_**_(equals sign)_ ; e.g. _=libname$_ or _="mylib.en"_. If the library does not currently exist, a warning is displayed, but the library is considered valid.

#### **Note:**  
The Library name may be a specific or generic reference. See [**Cascading Language Suffixes**](../Multilingual%20Capabilities/Cascading%20Language%20Suffixes/Overview.md).

_(Support for entering an expression for a Library name was added in PxPlus 2019.)_  
**Panel** |  Name of the panel that is to be substituted when the associated condition is true. The drop-down list contains all panels in the library. You can also type the panel name. If the panel does not currently exist, a warning is displayed, but the panel is considered valid.  
  
> #### **Note:**  
To test substitute panel logic in the **[NOMADS Panel Designer](../Panel%20Designer/Introduction.md)**, select the _Test Alt/Subs Pnls_ check box (if using **[Folder Style](../Panel%20Designer/Folder%20Style/Using%20the%20Folder%20Style.md)** or **[Property Sheets](../Panel%20Designer/Properties%20Table/Overview.md)**) or the _Test using Alternate/Substitute Panels_ check box (if using **[NOMADS+ Toolbar](../../NOMADS+%20Toolbar/Introduction.md)**) on the Panel Designer tool bar. This check box option is available **_only_** when alternate and/or substitute panels have been assigned to the current panel. The substitute panel logic is tested when the Panel Designer _Test_ option is selected.  
  
To test the current panel without the substitute panel logic, uncheck this option.  
  
When a selected panel with substitute panel logic is tested from the **[Library Object Selection](../NOMADS%20Development/Library%20Object%20Selection/Console%20and%20Object%20List.md)** window, testing will always enforce substitute panel logic.  
  
_(The Test Alternate/Substitute Panels option was added in PxPlus 2017 Update 0002.)_
