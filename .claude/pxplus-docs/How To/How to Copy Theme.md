# How To Tutorials

**How to Copy a Theme**|   
---|---  
  
Starting with PxPlus 2024, the **[Copy Theme](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Copy%20Theme.md)** utility provides the ability to copy and create Themes. With this utility, you can copy a selected Theme from one directory to another and optionally copy related Visual Classes. You can use this utility to create new Themes, as well as Visual Classes.

Using Themes and Visual Classes enhances the look of your application and gives it a fresh, modern look.

Standard PxPlus Themes and Visual Classes are found in the **_*plus/winutl_** directory. Themes are stored in the **_providex.dfs_** file, and Visual Classes are stored in the **_providex.ccl_** file.

> **_How to Copy a Theme_**

These steps show you how to copy a Theme:

1. |  From the IDE Main Launcher, expand the _Graphical Application Builder (NOMADS)_ category, and then expand the _Setup_ menu.  
---|---  
2. |  From the _Setup_ menu, select _Copy Theme_. If the Themes file does not exist, the following message will display:  
3. |  Click _OK_. The **Copy Theme** utility is displayed.  
4. |  If the Themes file exists, the _Input Directory_ will be populated based on Project settings. A different directory can be entered or selected by clicking the Query (_folder_) button. If the Themes file does not exist, the **Copy Theme** utility will display, and the _Input Directory_ will be blank.  
5. |  To copy PxPlus Themes, select the _Use PxPlus Themes_ check box. The _Input Directory_ defaults to the location where the PxPlus Themes and Visual Class definitions are stored and is disabled. |    
**_When Use PxPlus Themes check box is selected_**  
---  
6. |  Enter an _Output Directory_ or click the Query (_folder_) button to specify where the Themes/Visual Classes are to be copied. The _Output Directory_ can be the same as or different from the _Input Directory_. It cannot be the same location where the PxPlus Themes and Visual Class definitions are stored (i.e. *plus/winutl); otherwise, a message will display.  
7. |  Select a _Copy from Theme_ from the drop box. All the Themes are loaded into the drop box.  
8. |  Enter a new _Copy to Theme_ or keep the defaulted value. If the _Input Directory_ and _Output Directory_ are the same, a new _Copy to Theme_ name that is different from the _Copy from Theme_ name must be entered; otherwise, a message will display.  
9. |  Select the _Copy Visual Class Records_ check box to copy all Visual Classes for the selected Theme. |    
**_Example of a Visual Class with a Theme_**  
---  
10. |  Click _Proceed_ to start the copy process. If the Themes/Visual Classes already exist, see **[Step 15](How%20to%20Copy%20Theme.htm#Mark1)**.  
11. |  If you click _Proceed_ but the Themes file does not exist in the _Output Directory_ , a message will display, asking to create it.  
12. |  Select _Yes_ to create the Themes (Templates) file or select _No_ to abort the file creation and close the utility.  
13. |  If you select _Yes_ to create the Themes file but the Visual Classes file does not exist in the _Output Directory_ , a message will display, asking to create it. This will only apply if the _Copy Visual Class Records_ check box was selected.  
14. |  Select _Yes_ to create the Visual Classes file or select _No_ to abort the file creation and close the utility.  
15. |  If the Theme already exists, the following message will display:  
16. |  Select an option to continue copying Themes.  
17. |  If the Visual Class for the Theme already exists, the following message will display:  
18. |  Select an option to continue copying Visual Classes.  
19. |  Once the copy is completed, a **Copy Complete** dialog displays the number of Theme and Visual Class records that were copied.  
20. |  Click _OK_. You are returned to the **Copy Theme** utility. You can copy more Themes/Visual Classes or exit the utility.  
  
## See Also

**[Copy Theme](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Copy%20Theme.md)**  
**[Themes](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Themes.md)**  
**[Visual Classes](../NOMADS%20Graphical%20Application/System%20Maintenance%20Tools/System%20Options/Visual%20Classes.md)**

****
