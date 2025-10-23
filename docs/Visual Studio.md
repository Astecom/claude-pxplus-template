# 

**PxPlus Visual Studio Code Extension**|   
---|---  
  
The PxPlus Visual Studio Code extension is an extension for Visual Studio Code to enable working with PxPlus programs.

#### **Important Note:**  
**_PxPlus 2024 (or newer) that is properly activated with any license type is required._**

It provides the following functionality:

  * Create new PxPlus programs
  * Open and edit existing PxPlus programs
  * Work with binary PxPlus programs
  * Work with text-based PxPlus programs
  * PxPlus syntax highlighting
  * PxPlus program error diagnostics
  * Current document-based Auto Complete



See the tutorial **[How to Set Up and Use the PxPlus Visual Studio Code Extension](How%20To/How%20to%20Use%20PxPlus%20VS%20Code%20Ext.md)**.

_(The PxPlus Visual Studio Code extension was added in PxPlus 2024.)_

## How to Install and Set Up the PxPlus Extension in Visual Studio Code

#### **Important Note:**  
**_PxPlus 2024 (or newer) that is properly activated with any license type is required._**

1. |  Download and install Visual Studio Code from the Visual Studio Code Web site **<https://code.visualstudio.com/>** for your platform (i.e. Windows). If you are new to Visual Studio Code, this Web site is a great resource to learn more about it.  
---|---  
2. |  On the **Activity Bar** on the far left side of Visual Studio Code, click the **Extension** icon. This displays the **Extensions** view and the **Extensions Marketplace**.  
3. |  Find the PxPlus extension by entering _PxPlus_ in the **Search Extensions in Marketplace** input box.  
4. |  In the list that displays, click on **PxPlus** and then click the **Install** button to install the PxPlus extension.  
  
Before you can use the PxPlus Visual Studio Code extension, you **_must_** tell the extension where PxPlus is installed.

5. |  Open the Visual Studio Code settings by clicking the **Gear** icon in the bottom left corner and then select **Settings** from the menu that displays.  
---|---  
6. |  Expand the **Extensions** node and then select the **PxPlus** node.  
7. |  Under **PxPlus Path** , enter the path to the directory where the PxPlus executable is located (i.e. C:\PVX Plus Technologies\PxPlus 2024).  
  
If you plan to work with text-based PxPlus programs, then you **_must_** also specify which file extensions Visual Studio Code should consider a text-based PxPlus program:

8. |  Under **Text Program File Extensions** , add a file extension to the list by clicking the **Add Item** button. Enter a ** _.xxx_** file extension and then click **OK**. To add more than one file extension, repeat this step as many times as needed. By default, the only extension on the list is **_.pxprg_**.  
---|---  
  
For a description of these and other settings, see **[PxPlus Extension Settings](Visual%20Studio.htm#settings)**.

## How to Use the Extension

With the extension set up, you can now work with PxPlus programs. You can create new PxPlus programs, as well as open and edit existing PxPlus programs.

**_To Create New PxPlus Programs:_**

1. |  From the **File** menu or from the **Welcome** screen, select **New File**. You can also right click in the Explorer and select **Create New PxPlus Program**.  
---|---  
2. |  A list of possible file types to create will display. From the list, select **Create a PxPlus Program**.  
3. |  Use the **Save** dialog to choose a pathname for your new program.  
  
**_To Edit Existing PxPlus Programs:_**

To start editing PxPlus programs, you first need to add a PxPlus folder to the workspace. This is initiated by using **_one_** of the following methods:

  * Click on the PxPlus icon on the top right of an Edit window.
  * Click the **Open PxPlus Folder** button in the Explorer window when no folders are open.
  * Click the **Add PxPlus Folder to Workspace...** menu item from the Explorer right click menu.



This will allow you to select a PxPlus folder to add to the workspace.

Any PxPlus programs or text-based PxPlus programs that are opened via this workspace will be recognized as a PxPlus program by Visual Studio Code. This enables all the features and allows PxPlus programs to be edited.

##  PxPlus Extension Settings

This table describes the settings:

**Setting** |  **Description**  
---|---  
_PxPlus Path_ |  **_(Required)_** Specify the path to the directory where the PxPlus executable is located (i.e. C:\PVX Plus Technologies\PxPlus 2024).  
_Text Program File Extensions_ |  Specify the file extensions that Visual Studio Code should consider a text-based PxPlus program. **_(Default:_**__**_.pxprg)_** To **_add_** a new extension, click the **Add Item** button. To **_edit_** an existing extension, click the Pencil button beside the item. To **_delete_** an extension, click the **X** button beside the item.  
_Maximum Number Of Problems_ |  This setting controls the maximum number of problems reported for PxPlus programs. **_(Default:_**_**100)**_  
_Lowercase Directives_ |  Displays the code with lowercase directives. **_(Default:_**_**Off)**_  
_Lowercase Variables_ |  Displays the code with lowercase variables. **_(Default:_**_**Off)**_  
_Mixed Case Variables_ |  Displays the code with mixed case variables. **_(Default:_**_**On)**_  
_Suppress LET_ |  Displays the code without LET directives. **_(Default:_**_**Off)**_  
  
## See Also

**[How to Set Up and Use the PxPlus Visual Studio Code Extension](How%20To/How%20to%20Use%20PxPlus%20VS%20Code%20Ext.md)**
