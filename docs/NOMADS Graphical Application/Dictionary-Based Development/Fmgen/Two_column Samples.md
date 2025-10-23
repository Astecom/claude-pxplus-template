# Two-Column Layout  
  
**Two-Column Layout Sample Panels**|   
---|---  
  
The sample panels below were generated using the **[Two-Column Layout](Two_column.md)** in the File Maintenance Generator; however, most settings will also apply to the **[Enhanced Layout](Enhanced%20Layout.md)**.

Beside each sample panel are the settings that generated these results. By adjusting these settings, the appearance of a generated panel can be easily modified.

Use these links to jump to a sample panel on this page:

**Panel** |  **Description**  
---|---  
**[Sample Panel 1](Two_column%20Samples.htm#Mark1)** |  Standard Browse buttons (Bottom Left)  
Standard Action buttons (Bottom Right)  
**[Sample Panel 2](Two_column%20Samples.htm#Mark2)** |  Browse buttons - Embedded Panel (Right of Key)  
Action buttons - Embedded Panel (Bottom Right)  
**[Sample Panel 3](Two_column%20Samples.htm#Mark3)** |  Browse buttons - Embedded Toolbar  
Action buttons - Embedded Toolbar  
Required Fields with preceding * and explanation text  
**[Sample Panel 4](Two_column%20Samples.htm#Mark4)** |  Two-Column Layout  
Horizontal Lines added  
Fonted Text added  
**[Sample Panel 5](Two_column%20Samples.htm#Mark5)** |  Inquiry Only Panel  
**[Sample Panel 6](Two_column%20Samples.htm#Mark6)** |  Multi-Tabbed Panels - Top Folder Tabs  
**[Sample Panel 7](Two_column%20Samples.htm#Mark7)** |  Multi-Tabbed Panels - Left Sidebar Tabs  
**[Sample Panel 8](Two_column%20Samples.htm#Mark8)** |  Combination of settings: Title Bar added  
Multi-Tabbed Panels (Left Sidebar Tabs)  
Browse buttons - Embedded Panel (Right of Key)  
Action buttons - Embedded Panel (Bottom Right)  
Status Bar added  
Right Prompt Alignment (no colon)  
Required Fields with preceding * and explanation text  
Vertical Spacing adjusted  
Fonted Text added  
Horizontal Lines added  
Smart List Box added  
  
##  Sample Panel 1

Standard Browse buttons (Bottom Left)  
Standard Action buttons (Bottom Right)

|  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Sales Rep  
 _  
Panel Title_ : Sales Representatives Maintenance  
**[Step 3: Screen](Screen%20Layout.md)** |  _Location of browse buttons_ : **Bottom Left  
** _  
Location of action buttons_ : **Bottom Right**  
**[Step 6: Fields](Field%20Layout.md)** |   
  
##  Sample Panel 2

Browse buttons - Embedded Panel (Right of Key)  
Action buttons - Embedded Panel (Bottom Right)

#### **Note:**  
Any embedded panels that are selected in the File Maintenance Generator to replace the standard browse and action buttons **_must_** name these controls as follows:  
  
**_Browse Buttons:_** BUTTON_FIRST, BUTTON_PRIOR, BUTTON_NEXT, BUTTON_LAST  
  
 _**Action Buttons:**_ BUTTON_WRITE, BUTTON_DEL, BUTTON_CLEAR, BUTTON_CANCEL  
  
The _Text_ property for these buttons can be set as desired.  
  
See **[File Maintenance and Object Inheritance](File%20Maintenance%20and%20Object%20Inheritance.md)**.

|  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Sales Rep  
 _  
Panel Title_ : Sales Representatives Maintenance  
**[Step 3: Screen](Screen%20Layout.md)** |  _Location of browse buttons_ : **Embedded Panel**  
Specify _Library_ /_Panel_ and set _Position:_ **to Right of Key  
** _  
Location of action buttons_ : **Embedded Panel**  
Specify _Library/Panel_ and set _Position_ : **Bottom Right**  
**[Step 6: Fields](Field%20Layout.md)** |   
  
##  Sample Panel 3

Browse buttons - Embedded Toolbar  
Action buttons - Embedded Toolbar  
Required Fields with preceding * and explanation text

|  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Sales Rep  
 _  
Panel Title_ : Sales Representatives Maintenance  
**[Step 3: Screen](Screen%20Layout.md)** |  _Location of browse buttons_ : **Embedded Toolbar**  
 _  
Location of action buttons_ : **Embedded Toolbar**  
**[Step 4: Controls](Control%20Settings.md)** |  _Required Fields_ : **Indicate with preceding * and include explanation text**  
**[Step 6: Fields](Field%20Layout.md)** |   
  
##  Sample Panel 4

Two-Column Layout  
Horizontal Lines added  
Fonted Text added

|  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Sales Rep  
 _  
Panel Title_ : Sales Representatives Maintenance  
**[Step 3: Screen](Screen%20Layout.md)** |  _Location of browse buttons_ : **Bottom Left**  
 _  
Location of action buttons_ : **Bottom Right**  
**[Step 4: Controls](Control%20Settings.md)** |  _Visual Class_ : Select Visual Class from drop box  
  
Visual Class definition for **[Fonted Text](../../System%20Maintenance%20Tools/System%20Options/Themes_vc%20Text.md)**:  
\- Foreground Color = Dark Red  
\- Font = Cambria, Bold = On, Size = 14 points  
**[Step 6: Fields](Field%20Layout.md)** |   
  
To reduce the gap between the two _SALES_ columns, change the _Name_ row from "Half Row" to "Full Row". This allows the _Name_ field to extend across both columns rather than widen only the left side column.

|  |  **[Step 6: Fields](Field%20Layout.md)** |   
---|---  
  
##  Sample Panel 5

Inquiry Only Panel

  
**_"Department" query button hidden  
Clear/Exit buttons displayed_** |  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Sales Rep  
 _  
Panel Title_ : Sales Representatives Inquiry  
  
Set _Inquiry Only_ check box to **On**  
**[Step 3: Screen](Screen%20Layout.md)** |  _Location of browse buttons_ : **Bottom Left**  
 _  
Location of action buttons_ : **Bottom Right**  
**[Step 4: Controls](Control%20Settings.md)** |  _Required Fields_ : Automatically set to **Do not indicate required fields** and disabled  
  
 _Visual Class_ : Select Visual Class from drop box  
  
Visual Class definition for **[Fonted Text](../../System%20Maintenance%20Tools/System%20Options/Themes_vc%20Text.md)**:  
\- Foreground Color = Dark Red  
\- Font = Cambria, Bold = On, Size = 14 points  
**[Step 6: Fields](Field%20Layout.md)** |   
  
##  Sample Panel 6

Multi-Tabbed Panels - Top Folder Tabs

  
**_Main Panel / Address Tab (Top Folder Tabs)_**  
  
  
  
**_Contact Tab_**  
  
  
  
** _Sales Tab_** |  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Client Master File  
 _  
Panel Title_ : Client Master File Maintenance  
**[Step 3: Screen](Screen%20Layout.md)** |  _Location of browse buttons_ : **Bottom Left**  
 _  
Location of action buttons_ : **Bottom Right**  
**[Step 4: Controls](Control%20Settings.md)** |  _Visual Class_ : Select Visual Class from drop box  
  
Visual Class definition for **[Fonted Text](../../System%20Maintenance%20Tools/System%20Options/Themes_vc%20Text.md)**:  
\- Foreground Color = Dark Red  
\- Font = Cambria, Bold = On, Size = 14 points  
**[Step 6: Fields](Field%20Layout.md)** |  Set **[Folder](Folder.md)** check box to **On**  
 _  
_ Select _Folder Options_ button: In **Folder Options** window, set _Tab Position_ to **Top** _  
  
Folder/Tabs_ (in addition to **Main Panel**): Define new tabs for **Address** , **Contact** , **Sales**  
  
  
  
  
  
  
  
  
  
##  Sample Panel 7

Multi-Tabbed Panels - Left Sidebar Tabs

  
**_Main Panel / Address Panel (Left Sidebar Tabs)_** |  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Client Master File  
 _  
Panel Title_ : Client Master File Maintenance  
**[Step 3: Screen](Screen%20Layout.md)** |  _Location of browse buttons_ : **Bottom Left**  
 _  
Location of action buttons_ : **Bottom Right**  
**[Step 6: Fields](Field%20Layout.md)** |  Set **[Folder](Folder.md)** check box to **On**  
 _  
_ Select _Folder Options_ button: In **Folder Options** window, set _Tab Position_ to **Left Sidebar** _  
  
Folder/Tabs_ (in addition to **Main Panel**): Define new tabs for **Address** , **Contact** , **Sales**  
  
  
  
##  Sample Panel 8

Combination of settings:

Title Bar added  
Multi-Tabbed Panels (Left Sidebar Tabs)  
Browse buttons - Embedded Panel (Right of Key)  
Action buttons - Embedded Panel (Bottom Right)  
Status Bar added  
Right Prompt Alignment (no colon)  
Required Fields with preceding * and explanation text  
Vertical Spacing adjusted  
Fonted Text added  
Horizontal Line added  
Smart List Box added

#### **Note:**  
Any embedded panels that are selected in the File Maintenance Generator to replace the standard browse and action buttons **_must_** name these controls as follows:  
  
**_Browse Buttons:_** BUTTON_FIRST, BUTTON_PRIOR, BUTTON_NEXT, BUTTON_LAST  
  
**_Action Buttons:_** BUTTON_WRITE, BUTTON_DEL, BUTTON_CLEAR, BUTTON_CANCEL  
  
The _Text_ property for these buttons can be set as desired.  
  
See **[File Maintenance and Object Inheritance](File%20Maintenance%20and%20Object%20Inheritance.md)**.

  
**_Main Panel / Address Tab (Left Sidebar Tabs)_**  
  
  
  
**_Contact Tab_**  
  
  
  
** _Sales Tab_** |  |  **Step** |  **Settings**  
---|---  
**[Step 1: Definition](Object%20Definition.md)** |  _Table Name_ : Client Master File  
 _  
Panel Title_ : Client Master File Maintenance  
**[Step 3: Screen](Screen%20Layout.md)** |  Select _Screen Options_ button: In **Screen Options** window, set _TitleBar_ _Option_ to **TitleBar**.  
Specify _Library/Panel_ to use. Set _Status Bar_ check box to **On**._  
  
Location of browse buttons_ : **Embedded Panel**  
Specify _Library_ /_Panel_ and set _Position:_ **to Right of Key  
** _  
Location of action buttons_ : **Embedded Panel**  
Specify _Library/Panel_ and set _Position_ : **Bottom Right**  
**[Step 4: Controls](Control%20Settings.md)** |  _Prompt Alignment_ : **Right**  
Set _Append Colon on Prompt_ check box to **Off**  
 _Required Fields_ : **Indicate with preceding * and include explanation text**  
 _Vertical Spacing_ : **1.00**  
 _  
Visual Class_ : Select Visual Class from drop box  
  
Visual Class definition for **[Fonted Text](../../System%20Maintenance%20Tools/System%20Options/Themes_vc%20Text.md)**:  
\- Foreground Color = Dark Red  
\- Font = Cambria, Bold = On, Size = 14 points _Vertical Spacing_ (horizontal line option): **0.75**  
**[Step 6: Fields](Field%20Layout.md)** |  Set **[Folder](Folder.md)** check box to **On**  
 _  
_ Select _Folder Options_ button: In **Folder Options** window, set _Tab Position_ to **Left Sidebar** _  
  
Folder/Tabs_ (in addition to **Main Panel**): Define new tabs for **Address** , **Contact** , **Sales**  
  
  
  
  
  
  
  
**Sales** tab: Select _Add Object_ button: Select **[Smart List Box](Listbox.md)**  
  
  
  
## See Also

**[Enhanced Layout Sample Panels](Enhanced%20Samples.md)**  
**[Webster+](../../../Webster/Webster.md)**
