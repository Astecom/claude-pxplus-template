# Drawing and Modifying Panel Objects 

**Tab Order** |  **__**  
---|---  
  
NOMADS automatically adds each control to the panel's _tab order_ as they are created. This sets the order where focus will move from control to control when the **Tab** key is pressed. Changing the location of a control will not affect the original sequence for tabbing; therefore, once your panel design is finalized, it is a good idea to test this functionality to ensure that the tab order makes sense to the user.

You can reorder the tab sequence in the **Tab Order Definition** window. To invoke this window in the **[NOMADS Panel Designer](../Introduction.md)**, either select _Tab order_ on the _Edit_ menu or select the **Tabs** tool bar option (if using **[Folder Style](../Folder%20Style/Using%20the%20Folder%20Style.md)** or **[Property Sheets](../Properties%20Table/Overview.md)**).

> The current order is listed. This can be changed by moving control names into a new order either by using the drag-and-drop method or by using the _Move Up/Move Down_ buttons beside the list.

To include or exclude a control name from the tab order, double click to select or deselect the _Tab Stop_ check box.

[**Embedded Panels**](../../Creating%20Panel%20Controls/Embedded%20Panels/Overview.md) are also included in the **Tab Order Definition**. Only the panel name of the embedded panel is displayed in the controls list, as the controls on an embedded panel will always be grouped together when placed in the tab sequence. If an embedded panel is **_not_** assigned a _Tab Stop_ , this does **_not_** mean that its controls will be skipped in the tab sequence but that the tab sequence of its controls will be inserted into the tab sequence of the panel based on its _location_ on the panel. If a _Tab Stop_ is assigned, however, the tab sequence of its controls will be placed into the tab sequence of the panel at the _assigned_ stop.

#### **Helpful Tip:**  
Assigning meaningful names to controls is useful when selecting which ones to include in the tab sequence.

_(Embedded panels were added to the tab order in PxPlus 2018.)  
(The Control Type column was added in PxPlus 2023.)_
