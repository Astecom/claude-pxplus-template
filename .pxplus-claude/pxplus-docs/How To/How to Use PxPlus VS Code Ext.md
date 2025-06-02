# How To Tutorials

**How to Set Up and Use the PxPlus Visual Studio Code Extension**|   
---|---  
  
Starting with PxPlus 2024, you can maintain PxPlus programs and text-based PxPlus programs using Visual Studio Code. Visual Studio Code is an industry-leading, free code editor, which has grown in popularity with developers. It is available on Windows, Linux and macOS platforms.

PxPlus programs and text-based PxPlus programs that are opened via this **[PxPlus Extension](../Visual%20Studio.md)** are recognized as PxPlus programs by Visual Studio Code. This enables all the Visual Studio Code features and allows PxPlus programs to be edited with syntax checking.

> **_How to Install and Set Up the PxPlus Extension in Visual Studio Code_**

These steps show you how to install and then set up the PxPlus Extension in Visual Studio Code:

1. |  Download and install Visual Studio Code from the Visual Studio Code Web site **<https://code.visualstudio.com/>** for your platform (i.e. Windows). If you are new to Visual Studio Code, this Web site is a great resource to learn more about it.  
---|---  
2. |  On the **Activity Bar** on the far left side of Visual Studio Code, click the **Extension** icon. This displays the **Extensions** view and the **Extensions Marketplace**.  
3. |  Find the PxPlus extension by entering _PxPlus_ in the **Search Extensions in Marketplace** input box.  
4. |  In the list that displays, click on **PxPlus** and then click the **Install** button to install the PxPlus extension.  
5. |  With the PxPlus extension installed, click the **Gear** icon and select **Settings** from the menu that displays.  
6. |  Expand the **Extensions** node.  
7. |  Scroll down the list and select the **PxPlus** node.  
8. |  Set the **PxPlus Path** so that it points to a PxPlus 2024 or newer version (i.e. C:\PVX Plus Technologies\PxPlus 2024).  
9. |  If working with text-based PxPlus programs, you **_must_** specify the file extensions that should be treated as a PxPlus program by adding them one at a time. Under **Text Program File Extensions** , click the **Add Item** button. Input a **_.xxx_** file extension and then click **OK** to add it to the list. To add more than one file extension, repeat this step as many times as needed. If you need to edit an extension after it is added, select the extension in the list and then click the Pencil button beside the item. To delete an extension, click the **X** button beside the item.  
10. |  Review the other **[Settings](How%20to%20Use%20PxPlus%20VS%20Code%20Ext.htm#settings)** for the PxPlus extension and select the ones that apply to your needs.  
  
**_PxPlus Extension Settings_**

This table describes the settings:

|  |  **Setting** |  **Description**  
---|---  
_PxPlus Path_ |  **_(Required)_** Specify the path to the directory where the PxPlus executable is located (i.e. C:\PVX Plus Technologies\PxPlus 2024).

#### **Important Note:**  
**_PxPlus 2024 (or newer) that is properly activated with any license type is required._**  
  
_Text Program File Extensions_ |  Specify the file extensions that Visual Studio Code should consider a text-based PxPlus program. **_(Default: .pxprg)_** To **_add_** a new extension, click the **Add Item** button. To **_edit_** an existing extension, click the Pencil button beside the item. To **_delete_** an extension, click the **X** button beside the item.  
_Maximum Number Of Problems_ |  This setting controls the maximum number of problems reported for PxPlus programs. **_(Default: 100)_**  
_Lowercase Directives_ |  Displays the code with lowercase directives. **_(Default:_**_**Off)**_  
_Lowercase Variables_ |  Displays the code with lowercase variables. **_(Default:_**_**Off)**_  
_Mixed Case Variables_ |  Displays the code with mixed case variables. **_(Default:_**_**On)**_  
_Suppress LET_ |  Display the code without LET directives. **_(Default:_**_**Off)**_  
  
With the PxPlus extension now set up, you are ready to edit or create a PxPlus program by using the steps below.

**_How to Edit a PxPlus Program_**

1. |  Select the directory where the program to edit is located. This is done by using one of the following two methods: **_Method 1:_** Click the PxPlus icon in the upper right corner. **_OR_** **_Method 2:_** On the **Activity Bar** on the far left side of Visual Studio Code, click the **Explorer** icon. This displays the **Extensions** view. Click the **Open PxPlus Folder** button.  
---|---  
2. |  The **Select Folder** window is displayed. Select the directory where the program to edit is located and click the **Select folder** button.  
3. |  The selected directory is displayed in the **Explorer** view where you can select the program to edit.

#### **Note:**  
If the program has a password, you will be asked to enter it.  
  
4. |  Syntax errors are identified with a wavy line, and the number or errors are displayed beside the program name. In addition, hovering over the error displays a dialog that provides additional details about the error.  
  
**_How to Create a New Program_**

1. |  To create a new program and add it to your directory, use one of the following two methods: **_Method 1:_** Right click on the directory, and on the displayed menu, select **Create a PxPlus Program**. **_OR_** **_Method 2:_** In the top menu bar, select **File** > **New File** , and then select **Create a PxPlus Program**.  
---|---  
2. |  The **Create a new PxPlus program** window is displayed. Enter the File name of the new program and then click the **Save** button.  
3. |  You can now create the new PxPlus program.  
  
## See Also

**[PxPlus Visual Studio Code Extension](../Visual%20Studio.md)**
