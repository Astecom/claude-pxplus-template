# Interface Windows

**PxPlus Console Window** |  **__**  
---|---  
  
The PxPlus environment under MS Windows is itself invoked within a graphical user interface window. Some applications may be designed to appropriate this window directly (the PxPlus console populated with various control objects) as the primary window for the application. The NOMADS toolset is itself an example of how an application would use the PxPlus console in this context.

The characteristics of the PxPlus console window are as follows:

  * Freestanding window that can be moved, resized, minimized, maximized and restored.
  * Accessible workspace is not resizable after creation, leaving a gray area surrounding it when the window is enlarged.
  * Title bar for displaying application name.
  * Displays PxPlus icon (top left corner of the window) that invokes a drop-down menu to control session-related actions/characteristics.
  * Supports optional menu, tool and status bars, including global menus and buttons.
  * Supports creation of dependent windows in a parent-child relationship. See **[Child Window](Child%20Window.md)**.
  * Has an icon in the Windows task bar.



Due to the static nature of the workspace area presented by the console window, or to take advantage of the more flexible display options offered by the dialogue window, many developers may prefer to launch a dialogue window for their main application window, either hiding the PxPlus console completely or using it only as a launch/login screen during the initial start_up of their PxPlus application. See **[Dialogue Window](Dialogue%20Window.md)**.

#### **Note:**  
Use the -HD command line option to hide the console at PxPlus start_up. See **[Launching PxPlus](../../../PxPlus%20Installation%20and%20Configuration/Launching%20PxPlus/Overview.md)**. To hide the console once your application is running, use the mnemonic 'SHOW'(-1).
