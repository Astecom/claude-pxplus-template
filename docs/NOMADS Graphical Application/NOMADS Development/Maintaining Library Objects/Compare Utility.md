# Maintaining Library Objects 

**Library Compare Utility** |  **__**  
---|---  
  
The **Library Compare** utility allows you to compare panels from the same library or from two different libraries.

To invoke this utility, use one of the following methods:

**Location** |  **Method**  
---|---  
From the **[PxPlus IDE Main Launcher](../../../PxPlus%20IDE/IDE%20Main%20Launcher.md)** |  Expand the _Graphical Application Builder (NOMADS)_ category. Then expand the _Utilities_ category and select _Compare_.  
From **[NOMADS Library Object Selection](../Library%20Object%20Selection/Overview.md)** |  Select the _Compare_ tool bar button or select _Utilities > Compare_ from the menu bar.  
From the **[NOMADS Session Manager](../Getting%20Started.htm#sessionmgr)** |  Select _Library > Compare_ from the menu bar.  
  
The following window is displayed:

> This window consists of the following:

_File Name_ |  Displays the selected library name for comparison. Click the drop-down arrow for a list (up to nine) of previous selections. Click the Query button to specify a file name.  
---|---  
_Panels_ |  Displays a lookup list (name and expanded description) of the available panels in the selected library. You can highlight and select panels individually for comparison.  
_Show Identical Panels_ |  Check box to indicate that a confirmation message is to be issued when compared panels are identical.  
_Case Sensitive_ |  Check box to indicate that the compare should detect differences in text casing. Default behavior is a case insensitive compare. _(The Case Sensitive check box was added in PxPlus 2020.)_  
_Suppress_ |  Provides selections for excluding or not excluding control position coordinates and/or tab stops from the comparison. Available selections are _Nothing, Position, Tab Stop, Both Position & Tab Stop._ (**_Default_** is _Nothing_.) _(The Suppress drop box was added in PxPlus 2018.)_  
**Compare** |  |  _Single_ |  Button used to compare a single selected panel in the **Old Library** with one selected from the **New Library**.  
---|---  
_Corresponding_ |  Button used to compare only panels with the same name when comparing two libraries.  
_All_ |  Button used to compare all panels with the same name in the two libraries and identify panels that are unique to only one of the libraries.  
_Close_ |  Exits the **Library Compare** utility.  
  
Once panels have been compared, NOMADS displays a **Compare List** on the screen. It shows any differences and unique elements found in the comparison. This report can be printed to hard copy, if required.
