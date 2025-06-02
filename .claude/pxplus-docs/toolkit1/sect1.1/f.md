# IT - Integrated Toolkit™

**Library Manager** |  **__**  
---|---  
  
The *IT - Integrated Toolkit supports three types of libraries, which can be launched from the _View_ menu: _Program Library, NOMADS Object Library_ and _Text Macro Library_.

Each library management utility opens its own separate window that can be independently positioned and resized. These library types are explained below.

**Library Type** |  **Description**  
---|---  
_Program Library_ |  Provides the ability to add, delete and/or rename programs within a library. A built-in Program library manager allows you to easily view, access and edit the contents of a program library. You can also drag and drop program files from the desktop into the library manager when running on Windows. Right clicking on an existing program in the library manager displays a popup menu with additional options.  
_NOMADS Object Library_ |  Contains NOMADS panel layouts, queries and menu definitions. The NOMADS library manager calls up the last referenced library and displays a list of its contents automatically. The _Library Path_ drop box provides a list of the last nine NOMADS libraries that were accessed. NOMADS object libraries can be directly accessed from within the environment, providing easy access to NOMADS objects and their associated utility set. The tight integration between *IT and NOMADS means that the developer can easily work on all aspects of the application without having to switch between environments. To edit a NOMADS object, double click on it within the object list. Based on the type of object selected, *IT launches the appropriate window for editing the object. Right clicking on an existing object in the library manager displays a popup menu with additional options.  
_Text Macro Library_ |  Allows you to define text to insert, launch programs or run PxPlus code. The standard suffix for text macro libraries is **_.txtlib_**. Right clicking on an existing macro in the library manager displays a popup menu with additional options. The Macro library manager organizes the Macro library definitions in a hierarchal tree view, allowing the developer to group his/her desired functions in a logical manner. Each entry in the Macro library has a logical name, which defines its location within the hierarchy by using a slash as a tree level separator between the sections of logical names. **_Example:_** To add a group called _Program_ with an entry called _Comments_ , the logical name would be _Program/Comments_. Each entry also has a text value and type indicator. A standardized text value can be inserted directly into the program being edited. The text can be dynamically generated using run-time text substitution. An operating system Command type will invoke the Command line provided in the text value, whereas a PxPlus code type will execute the logic provided in the text field. The text provided in a Macro library is always passed through an expression evaluator that replaces any values surrounded by **< < >>** with its associated value. **_Example:_** If you entered the macro text "Updated on <<DAY>>", the value <<DAY>> would be replaced with the value in the system **DAY** variable. Any valid PxPlus string expression or variable may be used between the << >> characters.  Some preset values are always present during the execution of the expression evaluator. The current values are: |  **Variable** |  **Contents**  
---|---  
_Filename$_ |  Simple name of file being edited  
_Pathname$_ |  Pathname of the file being edited  
_CurrentLine_ _$_ |  Current line  
_SelectedText_ _$_ |  Currently selected text  
  
The value _Textot_ _$_ may be optionally set by a PxPlus code Macro. If this value is set to non-null, its contents will be pasted into the program at the current position.

To invoke a Macro, the user simply double clicks the desired entry. Alternatively, the Macro can be assigned to any Function key (unshifted, shifted, with or without the CTRL key), allowing quick access to the Macro functionality through keyboard entry. The system will remember the last accessed Macro library for the user and automatically load the Function keys defined for the Macro entries in that library during IT start_up.  
  
To **_create a new_** NOMADS, Program or Text Macro library, select _Make Library_ from the _File_ menu.

To **_open an existing_** NOMADS, Program or Text Macro library, use the _View_ menu or select _Open_ from the _File_ menu. The built-in librarian is able to recognize various files by their type and physical characteristics. During the File Open logic, it determines the type of file being accessed, and if the file is determined to be a known library format, the appropriate library manager is launched.

The librarian further extends this feature to recognize data files and will cause the system to launch the graphical file maintenance program to allow for file viewing and/or updating.

*IT also provides a _Find File_ option on the _File_ menu that can be used as an alternate to the _File > Open_ option. This option performs the same function as _File > Open_ except that the current prefix rules apply to the file name entered. This allows the developer to directly access programs or files based on the system prefix and current directory.
