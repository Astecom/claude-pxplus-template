# Writing and Modifying Program Code

**Full-Screen Editors** |  **__**  
---|---  
  
In addition to using the Command line editor to create and revise a program in PxPlus, full-screen editors are provided for program development and maintenance.

## *IT - Integrated Toolkit

The graphical user interface based **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)** requires either Windows or the use of one of the PxPlus graphical thin-clients. This utility is specifically designed for writing and modifying PxPlus code. It can maintain programs with/without line numbers and allows the source to be loaded/saved either as ASCII text or as program files.

The *IT program editor is completely menu-driven but can also be manipulated using various quick key combinations. It includes a number of other features:

  * Formatted text with color highlighting
  * Automatic syntax checking
  * Line number removal and insertion facilities
  * Auto renumber and bracketing
  * Built-in print facility
  * Direct access to other PxPlus utilities, such as NOMADS and panel execution



A single user may have the same file opened multiple times in one edit session. The program editor keeps track of the last version saved and displays a warning message if a previous version is being saved over the latest version.

If a user attempts to open a file currently being edited by another user, a warning message is presented. If the second user continues and opens the file, neither user can save the file until one relinquishes control by closing the file.

## Ed+ Program Editor

The **[Ed+](../../../Ed%20Program%20Editor.md)** program editor is a Web-based program editor that is easily accessible from the **[PxPlus Web IDE](http://manual.pvxplus.com/PXPLUS/PxPlus%20IDE/IDE%20Main%20Launcher_Web.md)**, as well as from the Windows-based **[IDE Main Launcher](http://manual.pvxplus.com/PXPLUS/PxPlus%20IDE/IDE%20Main%20Launcher.md)**. Like the *IT program editor, Ed+ provides some of the more common functionality used to create and modify your application programs. These functions are available as **[Menu Options](http://manual.pvxplus.com/PXPLUS/Ed%20Program%20Editor.htm#menu)** and **[Tool Bar Options](http://manual.pvxplus.com/PXPLUS/Ed%20Program%20Editor.htm#toolbar)**.

_(The Ed+ Program Editor was added in PxPlus 2016.)_

## Character-Based Program Editor (*E)

The***E** utility provides a character-based editor for editing the current program on the screen. One of the primary advantages of using this editor is that it runs in all PxPlus environments, text or graphical.

To invoke the utility, select _Edit_ from the main utilities menu or enter **CALL "*E"** at the PxPlus prompt**- >**. If a program is currently running when the editor is invoked, it will display a termination message; otherwise, the editor displays the current program on the screen.

The top of the screen contains the editor menu: _F1-Text edit F2-Line edit F3-Program F4-Quit._

The cursor keys (or mouse) can be used to position the cursor anywhere in the displayed program.

Program compile errors are displayed on the screen below the lines on which they occur.
