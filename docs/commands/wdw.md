# Extended Commands

**WDW Console Command** |  **_Change Main Window Size_**  
---|---  
  
## Format

**WDW** _option_

## Description

The **WDW** command allows you to set the size of the main (Command) window. By default, the main PxPlus Command window is created 80 columns wide and 25 lines high. This command can be used to change the size of the window.

If no _option_ parameter is supplied, the **WDW** command will change the size of the main window to match the size of the outer PxPlus dialogue frame.

The _option_ parameter can also specify the columns wide and lines high desired; e.g. **WDW** 100x30.

If the _option_ value of **AUTO** is used, the system will **_auto-adjust_** the main window to the size of the outer frame so that as the outer frame is resized, the main window size will be automatically adapted to fit. This will only be done if the user is sitting at Command mode and has no other windows open.

#### **Note:**  
The **AUTO** option is **_not_** supported under WindX.

The _option_ value of **MANUAL** is used to reset the automatic resizing.

If the _option_ value of **ZOOM** is used, the system will attempt to adjust the font size to fill the primary window, instead of changing the number of lines and columns. The **ZOOM** logic will determine the font based on the largest font that will fit in the specified window size. The minimum font size is 6 pixels high and the maximum is 30 pixels high. If you only expand the width or height of a window, the font size may remain the same since both the width and height are used to calculate the font. 

If **ZOOM** mode is enabled ** _and_** a **WDW AUTO** command is issued, the automatic sizing logic will also change the font size, instead of changing lines and columns. To disable **ZOOM** mode, issue either a **WDW ZOOM OFF** or **WDW NO ZOOM** command.

_(The WDW command was added in PxPlus v9.00.)  
(The ZOOM option was added in PxPlus 2021.)_

## Validation

The main window will never be made smaller than 30 columns and no wider than 250 columns. It also will never be made smaller than 5 lines high or higher than 250 lines.
