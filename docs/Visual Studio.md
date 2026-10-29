#  

**PxPlus Visual Studio Code Extension**|   
---|---  
  
The PxPlus Visual Studio Code extension is an extension for Visual Studio Code to enable working with PxPlus programs.

#### **Important Note:**  
**_A local PxPlus 2024 or a WindX PxPlus 2026 (or newer) that is properly activated with any license type is required.  
  
_**_(Support for WindX connections was added in PxPlus 2026.)_

It provides the following functionality:

  * **[Create](Visual%20Studio.htm#create)** new PxPlus programs
  * Open and **[Edit](Visual%20Studio.htm#edit)** existing PxPlus programs
  * Work with binary PxPlus programs
  * Work with text-based PxPlus programs
  * PxPlus syntax highlighting
  * **[Code Navigation](Visual%20Studio.htm#codenavigation)**
  * PxPlus program error diagnostics
  * **[Compiling or Listing](Visual%20Studio.htm#compilelist)** of PxPlus programs
  * **[Auto Complete](Visual%20Studio.htm#autocomplete)** based on PxPlus language elements (directives, mnemonics, system functions, system parameters, system variables) and the current document
  * **[Compare](Visual%20Studio.htm#compare)** binary PxPlus programs
  * **[View Properties](Visual%20Studio.htm#properties)** for binary PxPlus programs



See the tutorial **[How to Set Up PxPlus Visual Studio Code Extension](How%20To/How%20to%20Use%20PxPlus%20VS%20Code%20Ext.md)**.

_(The PxPlus Visual Studio Code extension was added in PxPlus 2024.)_

     

## How to Install and Set Up the PxPlus Extension in Visual Studio Code

#### **Important Note:**  
**_A local PxPlus 2024 or a WindX PxPlus 2026 (or newer) that is properly activated with any license type is required._**

1. |  Download and install Visual Studio Code from the Visual Studio Code website **<https://code.visualstudio.com/>** for your platform (i.e. Windows). If you are new to Visual Studio Code, this website is a great resource to learn more about it.  
---|---  
2. |  On the **Activity Bar** on the left side of Visual Studio Code, click the **Extension** icon. This displays the **Extensions** view and the **Extensions Marketplace**.  
3. |  Find the PxPlus extension by entering _PxPlus_ in the **Search Extensions in Marketplace** input box.  
4. |  In the displayed list, click on **PxPlus** and then click the **Install** button to install the PxPlus extension.  
  
Before you can use the PxPlus Visual Studio Code extension, you **_must_** tell the extension where PxPlus or a PxPlus WindX Plug-in is installed:

5. |  Open the Visual Studio Code settings. To do this, click the **Gear** icon in the bottom left corner and select **Settings**.  
---|---  
6. |  Expand the **Extensions** node and select **PxPlus**.  
7. |  Under the **PxPlus Path** sub-heading, enter the path to the directory where the PxPlus executable is located (i.e. C:\PVX Plus Technologies\PxPlus 2024 or C:\PVX Plus Technologies\WindX Plugin 2026).  
  
If you plan to work with text-based PxPlus programs, you **_must_** specify which file extensions Visual Studio Code should consider as text-based PxPlus programs:

8. |  Under the **Text Program File Extensions** sub-heading, add a file extension to the list by clicking the **Add Item** button. Enter a **_.xxx_** file extension and then click **OK**. To add more than one file extension, repeat this step as many times as needed. By default, the only extension in the list is **_.pxprg_**.  
---|---  
  
If pointing to a WindX Plug-in, you **_must_** also set up the WindX connection:

9. |  Under the **WindX** sub-heading, specify what type of WindX connection to use. Then provide the following: the WindX server IP address or host name, the port, and whether the host is using SSL/TLS.  
---|---  
  
If using WindX SSH, you **_must_** also set up the SSH connection information:

10. |  Under the **WindX-SSH** sub-heading, enter the **Username** and then click **Set password** to securely save the SSH password. You **_must_** also specify the path to PxPlus on the WindX SSH host.  
---|---  
  
If you plan to compile or list PxPlus programs, then you **_should_** also specify the output directories and file extensions:

11. |  Under the **Conversion** sub-heading, enter the **Compiled Output Directory** and/or the **Listed Output Directory**. You can also optionally specify a file extension to be added to the output file for both _compile_ and _list_.  
---|---  
  
For a description of these and other settings, see **[PxPlus Extension Settings](Visual%20Studio.htm#settings)**.

_(Support for WindX connections was added in PxPlus 2026.)_

##  Workspace-Specific Settings

If you work on multiple projects, you may want different settings for different projects. For example, for one project, you may want **Suppress LET**  _On_ , and for another project, you want it _Off_. This can be accomplished with workspace-specific settings, which override global settings.

Click the **PxPlus >** **Edit Workspace Settings** menu item from the Explorer right click menu. This will create or open an existing **_pxpvsc.ini_** file in the workspace root directory. Within this file, you can uncomment the settings you want to override and specify the value you want to use for this project.

The settings name in the INI file match the settings name without spaces from within the Settings screen. If you hover over the setting in the Settings screen, you can see a tooltip with the name without spaces.

_(Support for workspace-specific settings was added in PxPlus 2026.)_

##  How to Use the Extension

Once the extension is set up, you can work with PxPlus programs. You can:

  * **[Create](Visual%20Studio.htm#create)** new PxPlus programs.
  * Open and **[Edit](Visual%20Studio.htm#edit)** existing PxPlus programs.
  * **[Compile or List](Visual%20Studio.htm#compilelist)** PxPlus programs.
  * Use **[Code Navigation](Visual%20Studio.htm#codenavigation)** to save time and work more efficiently.
  * **[Compare](Visual%20Studio.htm#compare)** binary programs.
  * **[View Properties](Visual%20Studio.htm#properties)** for binary programs.



**_Create New PxPlus Programs_**

To create a new PxPlus program, use **_one_** of the following methods:

  * Click the PxPlus icon in the top right corner of an Edit window and select **Create New PxPlus Program**.
  * From the **File** menu or from the **Welcome** screen, select **New File**.
  * Right click in the Explorer and select **PxPlus** > **Create New PxPlus Program**.
  * A list of possible file types to create will display. From the list, select **Create a PxPlus Program**.
  * Use the **Save** dialog to choose a pathname for your new program.



**_Open and Edit Existing PxPlus Programs_**

To start editing PxPlus programs, you first need to add a PxPlus folder to the workspace. This is initiated by using **_one_** of the following methods:

  * Click the PxPlus icon in the top right corner of an Edit window and select **Add PxPlus Folder to Workspace**.
  * Click the **Open PxPlus Folder** button in the Explorer window when no folders are open.
  * Click the **PxPlus > Add PxPlus Folder to Workspace** menu item from the Explorer right click menu.



This will allow you to select a PxPlus folder to add to the workspace.

Any PxPlus programs or text-based PxPlus programs that are opened via this workspace will be recognized as a PxPlus program by Visual Studio Code. This enables all the features and allows PxPlus programs to be edited.

**_Compile or List PxPlus Programs_**

To compile a text-based PxPlus program or to list a binary/tokenized PxPlus program, use **_one_** of the following methods:

  * Click the PxPlus icon in the top right corner of an Edit window and select **Compile** or **List**. This will allow you to select a folder (or folders) to perform the operation on the contents.
  * Click the **PxPlus > Compile** or the **PxPlus > List** menu item from the Explorer right click menu. This will take the current selection of file and folders in the Explorer and perform the operation on the contents.



Any PxPlus programs or text-based PxPlus programs that are selected or in the selected directories (or their sub-directories) will be compiled or listed.

_(Support for compiling or listing PxPlus programs was added in PxPlus 2026.)_

**_Use Code Navigation_**

To navigate to different sections within a PxPlus program, use **_one_** of the following methods:

  * Use the breadcrumb menu at the top of the editor tab. Click the **...** (_ellipsis_) to display a list of possible selections.  
  
       
  

  * Select the **OUTLINE** section in the Explorer view to display a list of possible selections.  
  
    



The list includes all labels, functions, classes and methods defined in the program. Select an item in the list to jump to its location in the code.

_(Support for code navigation was added in PxPlus 2026.)_

**_Compare Binary Programs_**

To compare binary programs:

#### **Important Note:**  
**_PxPlus 2026 (or newer) is required._**

1. |  Open a binary PxPlus program in the editor.  
---|---  
2. |  Right click anywhere in the editor.  
3. |  Select the **PxPlus** sub-menu. Select the **Compare Programs** option.  
4. |  The PxPlus **[Program Compare Utility](toolkit1/Program%20Compare.md)** is launched.  
  
_(Support for comparing binary programs was added in PxPlus 2026.)_

**_View Properties for Binary Programs_**

To view binary program properties:

#### **Important Note:**  
**_PxPlus 2026 (or newer) is required._**

1. |  Open a binary PxPlus program in the editor.  
---|---  
2. |  Right click anywhere in the editor.  
3. |  Select the **PxPlus** sub-menu. Select the **Program Properties** option.  
4. |  The PxPlus **[Program Properties Utility](toolkit1/sect1.1/c.md)** is launched.  
  
_(Support for viewing binary program properties was added in PxPlus 2026.)_

##  Auto Complete

When a PxPlus program is open and you begin typing, Auto Complete displays suggestions for all PxPlus language components (directives, mnemonics, system functions, system parameters, system variables) and the current document.

Click the arrow to the far right of a suggestion to expand it and view its description. To manually trigger Auto Complete, press **Ctrl** \+ **Spacebar**.

> _(Support for Auto Complete based on PxPlus Language elements was added in PxPlus 2026.)_

##  PxPlus Extension Settings

The PxPlus extension settings are described below, grouped by category: **[PxPlus](Visual%20Studio.htm#set_pxplus)**, **[WindX](Visual%20Studio.htm#set_windx)**, **[WindX-SSH](Visual%20Studio.htm#set_windxssh)**, **[Conversion](Visual%20Studio.htm#set_conversion)** and **[Language Preferences](Visual%20Studio.htm#set_language)**.

**_PxPlus_**

**Setting** |  **Description**  
---|---  
_Pxplus Path_ |  **_(Required)_** Specify the path to the directory where the PxPlus executable is located (i.e. C:\PVX Plus Technologies\PxPlus 2024 or C:\PVX Plus Technologies\WindX Plugin 2026).  
_Text Program File Extensions_ |  Specify which file extensions Visual Studio Code should consider a text-based PxPlus program. **_(Default:  .pxprg)_** To **_add_** a new extension, click the **Add Item** button. To **_edit_** an existing extension, click the Pencil button beside the item. To **_delete_** an extension, click the **X** button beside the item.  
_Maximum Number Of Problems_ |  Controls the maximum number of problems reported for PxPlus programs. **_(Default:_**_ **100)**_  
  
**_WindX_**

**Setting** |  **Description**  
---|---  
_Using Windx_ |  Specify the WindX connection type. Available selections are _No_ , _Simple CS_ , _NThost_ , _SSH_. **_(Default: No)_**  
_Server_ |  Specify the IP address or host name of the WindX host (ignored if **Using Windx** is set to **_No_**).  
_Port_ |  Specify the port of the WindX host (ignored if **Using Windx** is set to **_No_**).

#### **Note:**  
Default port 4093 is used by the Simple Client Server.  
Default port 10000 is used for NTHost or the Application Server.  
  
_Secure_ |  Specify whether WindX host is using SSL/TLS (ignored if **Using Windx** is set to **_No_** or **_SSH_**). **_(Default: Off)_**  
  
**_WindX-SSH_**

**Setting** |  **Description**  
---|---  
_User_ |  Specify the operating system login username of the WindX host (ignored unless **Using WindX** is set to **_SSH_**).  
_Password_ |  Securely manage the operating system login password of the WindX host (ignored unless **Using WindX** is set to **_SSH_**). Click the **Set password** button to save an SSH password securely. Click the **Clear password** button to remove a saved SSH password.  
_Pxplus Path_ |  Specify the remote path of PxPlus on the WindX host (ignored unless **Using WindX** is set to **_SSH_**).  
  
**_Conversion_**

#### **Note:**  
These settings can be overridden by **[Workspace-Specific Settings](Visual%20Studio.htm#wkspace)**.

**Setting** |  **Description**  
---|---  
_Compiled Output Directory_ |  Specify the path where compiled programs are created.  
_Compiled File Extension_ |  Specify the file extension used for compiled programs.  
_Listed Output Directory_ |  Specify the path where listed programs are created.  
_Listed File Extension_ |  Specify the file extension used for listed programs.  
  
**_Language Preferences_**

#### **Note:**  
These settings can be overridden by **[Workspace-Specific Settings](Visual%20Studio.htm#wkspace)**.

**Setting** |  **Description**  
---|---  
_Lowercase Directives_ |  Displays the code with lowercase directives. **_(Default:_**_ **Off)**_  
_Lowercase Variables_ |  Displays the code with lowercase variables. **_(Default:_**_ **Off)**_  
_Mixed Case Variables_ |  Displays the code with mixed case variables. **_(Default:_**_ **On)**_  
_Suppress LET_ |  Displays the code without LET directives. **_(Default:_**_ **Off)**_  
  
## See Also

**[How to Set Up PxPlus Visual Studio Code Extension](How%20To/How%20to%20Use%20PxPlus%20VS%20Code%20Ext.md)**

 

 

 
