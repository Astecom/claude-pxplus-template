# Introduction to Using PxPlus

**Basic Concepts**|   
---|---  
  
The information below explains the structural concepts of PxPlus. Some of the terminology will be familiar to developers with experience in other Business Basics; however, PxPlus has several unique properties. Before attempting to program in PxPlus, it is a good idea to take some time to understand the different aspects of the language.

##  PxPlus Session

The PxPlus environment comprises a **_Command_** mode and an **_Execution_** mode. When in Command mode, PxPlus will be waiting for a _directive_ or _statement_ to be entered. Execution mode begins once a **[RUN](../directives/run.md)** or a **[CALL](../directives/call.md)** directive is used to execute a program.

By default, PxPlus initializes in Command mode, as indicated by the Command mode prompt '**- >**'.

Directives can be entered in Command mode. If a directive does not include a leading line number, it is executed immediately; otherwise, the statement is used in the construction of a program.

When a statement is inserted into a program, the prompt changes from '**- >**' to '**-:** ' to indicate that the program has been changed but not saved. When PxPlus is in Execution mode, it receives and executes all the statements that constitute a program. The program remains in Execution mode until completed (via the **[STOP](../directives/stop.md)** or **[END](../directives/end.md)** directive), an error occurs, or it is interrupted via a **[BREAK](../directives/break.md)** or **[ESCAPE](../directives/escape.md)** instruction.

The PxPlus session can be terminated using the **[BYE](../directives/bye.md)**, **[QUIT](../directives/quit.md)** or **[RELEASE](../directives/release.md)** directives.

##  Directives and Statements

In PxPlus, all processing is controlled by the use of **_Directives_** \- commands that tell the system what task is to be performed. Each program statement (line of code) consists of one or more directives. When PxPlus executes a program, it executes all directives contained in a statement from left to right and then proceeds to the next line. Some directives provide the ability to alter the normal flow of execution.

The general format of a program statement includes a unique line number (optional), the directive indicating the operation to perform, parameters and comments. Parameters are syntax elements, keywords, operators and arguments that can be used to further define a directive's operation.

**_Example:_**

The complete syntax for the **CLOSE** directive appears as:

> close **(**_chan_ **[** ,err=_stmtref_**])[** ,**(**_chan_**[** ,err=_stmtref_**])...]**

Depending on the statement, it is possible to exclude all but the mandatory parameters from the directive:

> close (14)

See the **[Directives](../directives.md)** Help section for the complete list of PxPlus directives in alphabetical order.

##  System Functions

A PxPlus **_System Function_** consists of a three-character function name followed by an open parenthesis, the parameter(s) for the function, an optional error transfer, and a close parenthesis:

**_Example:_**

> and(A$,B$,err=0300)

The number and type of parameters vary from function to function. All may include the **ERR=** option (even those where an error is unlikely).

See the **[System Functions](../functions.md)** Help section for the complete list of PxPlus system functions in alphabetical order.

##  Data and Variables

PxPlus supports two basic types of data -- **_Numeric_** data and **_String_** data. Numeric data consists of numeric values such as account balances, prices and quantities. String data consists of textual information such as account names and descriptions. A PxPlus program maintains and processes its data using **_Variables_** \- numeric variables to store numeric values and string variables to store textual information. The language includes various internally defined variables for providing system information such as the date and time.

You can use system variables wherever normal program variables would be used; however, you cannot modify them.

See the **[System Variables](../variables.md)** Help section for the complete list of PxPlus system variables in alphabetical order.

#### **Note:**  
All system variables have reserved three-character names and do not have a trailing $ _dollar sign_ ; e.g. **CTL**.  
  
To avoid potential conflicts with the reserved list (since PxPlus might reserve more three-character variables in the future), it is strongly advised that you do **_not_** use three-character variable names.

##  Mnemonics

**_Mnemonics_** are used to control output to terminals and printers. A mnemonic instruction is enclosed in single quotation marks.

**_Example_** :

> print @(5,5),'CL' ! Clears screen - line 5 to its end, starting at column 5  
>  open (30)PRINTER$  
>  print (30)'FF', ! Form-feed instruction to PRINTER$ on channel 30

See the **[Mnemonics](../mnemonics.md)** Help section for the complete list of PxPlus mnemonics in alphabetical order. See also the **[MNEMONIC](../directives/mnemonic.md)** directive.

##  System Parameters

**_System Parameters_** are normally used at start-up to define the system's operation under PxPlus. For example, the **['BY'](../parameters/by.md)** system parameter is used to define the base year for the **JUL(** **)** and **DTE( )** functions. Like mnemonics, system parameters are enclosed in single quotation marks.

See the **[System Parameters](../parameters.md)** Help section for the complete list of PxPlus system parameters in alphabetical order. See also the **[PRM( )](../functions/prm.md)** function and the **[PRM](../variables/prm.md)** system variable.

##  Graphical Control Objects

**_Graphical Control Objects_** in PxPlus programs are used to display information, input data, and handle event processing.

The following **_Directives_** are used to create and maintain the various control object types:

**Directive** |  **Description**  
---|---  
**[BUTTON](../directives/button.md)** |  Used to create and control buttons on the screen.  
**[CHART](../directives/chart.md)** |  Used to create two and three dimensional chart illustrations in a graphical application.  
**[CHECK_BOX](../directives/check_box.md)** |  Used to create check box control objects on the screen.  
**[DROP_BOX](../directives/drop_box.md)** |  Used to create and manipulate drop box control objects on the screen.  
**[GRID](../directives/grid.md)** |  Used to create a grid or table of cells in columns and rows; i.e. a spreadsheet input format.  
**[LIST_BOX](../directives/list_box.md)** |  Used to create and control list boxes on the screen.  
**[MULTI_LINE](../directives/multi_line.md)** |  Used to create and control a Multi-Line input region on the screen. Multi-Line input is used to enter or display text.  
**[RADIO_BUTTON](../directives/radio_button.md)** |  Used to create and control a group of radio button control objects on the screen. A radio button group is a series of related circular/radio-knob buttons of which only one button can be active at a time.  
**[H_SCROLLBAR](../directives/h_scrollbar.md)** |  Used to create a horizontal scrollbar control object on the screen.  
**[V_SCROLLBAR](../directives/v_scrollbar.md)** |  Used to create a vertical scrollbar control object on the screen.  
**[TRISTATE_BOX](../directives/tristate_box.md)** |  Used to create and control a tristate box control object. A tristate box is a check box in which the user can toggle between three states: ON to select an option, OFF to disable it, or your choice of a third state.  
**[VARDROP_BOX](../directives/vardrop_box.md)** |  Used to create and control a variable drop box on the screen. A variable drop box normally displays a single line on the screen with a down arrow on the right side and allows variable input.  
**[VARLIST_BOX](../directives/varlist_box.md)** |  Used to create and control a variable list box on the screen. The user can select any element from a list of items associated with the variable list box or can enter any other value.  
  
#### **Note:**  
In Windows, the above directives use Graphical Device Interface (GDI) resources/handles that are only released when the window they are in is dropped or cleared.

The attributes of a control object can be referenced and determined by the use of **_Property Names_** (e.g. 'Height, 'Font$, 'Text$, 'TextColor$, etc.). The object itself is defined by a numeric variable containing the CTL value associated with the control followed by an apostrophe and the property. See **[Apostrophe Operator](../appendix/apostrophe_operator.md)**.

For each graphical control object, a list of properties and their descriptions is included with the Help for the associated control directive. For example, a list of _Button Properties_ is available by expanding the Help node for the **BUTTON** directive. A list of _Chart Properties_ is available by expanding the Help node for the **CHART** directive, and so on. See **[Graphical Control Objects](../control_object_properties/graphical_control_objects.md)**.

Graphical control objects can also be created by using the NOMADS toolset for graphical user interface based application design/development. See **[NOMADS Development](../NOMADS%20Graphical%20Application/NOMADS%20Development/Getting%20Started.md)** and **[Creating Panel Controls](../NOMADS%20Graphical%20Application/Creating%20Panel%20Controls/Introduction.md)**.

##  Specialty Files

PxPlus supports the use of a set of device files that are designed for **[Special File Handling](../file_handling.md)**. When these files are used in an **[OPEN](../directives/open.md)** directive, the system recognizes and processes them internally in the language at run time.

##  Special Command Tags

PxPlus supports the use of **[Special File Command Tags](../command_tags.md)**, which are used to modify paths and filenames for specific I/O uses in PxPlus. They may include a series of semi-colon separated parameters to be processed at run time. Some of these tags are supported only in specific operating environments.

##  Object Oriented Programming

The PxPlus language has been extended to support all of the key design principles of **_Object Oriented Programming_** (OOP). The three basic principles of OOP are _Encapsulation, Inheritance_ and _Polymorphism_. These concepts provide a major part of the framework used to create and interact with _objects_. See **[Concepts and Terminology](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.htm#concepts)**.

PxPlus OOP objects are defined through the use of  _Classes_. A **_Class_** defines the name given to the object definition, as well as the object's _properties_ and _methods_. **_Properties_** are the data portion of the object, consisting of fields or variables. **_Methods_** (or _functions_) are the actions that the object will perform. The defined properties/methods are accessible via the **[Apostrophe Operator](../appendix/apostrophe_operator.md)**.

The following **_Directives_** and **_Functions_** are used to handle OOP mechanisms in PxPlus:

**[DEF CLASS](../directives/def_class.md)** |  Defines the object class.  
---|---  
**[DROP CLASS](../directives/drop_class.md)** |  Deletes class definition and all related information.  
**[DROP OBJECT](../directives/drop_object.md)** |  Deletes an object.  
**[FUNCTION](../directives/function.md)** |  Declares functions or methods for the object.  
**[LIKE](../directives/like.md)** |  Specifies other objects that this object inherits from.  
**[LOAD CLASS](../directives/load_class.md)** |  Change name of an existing class.  
**[LOCAL](../directives/local.md)** |  Declares internal data/properties for the object.  
**[NEW( )](../functions/new.md)** |  Creates an object instance.  
**[PRECISION](../directives/precision.md)** |  Sets default program precision for use within the object.  
**[PROGRAM](../directives/program.md)** |  Defines the default program that contains the object logic.  
**[PROPERTY](../directives/property.md)** |  Declares data/properties for the object.  
**[REF( )](../functions/ref.md)** |  Controls reference counts.  
**[STATIC](../directives/static.md)** |  Dynamically declares **LOCAL** variables.  
  
##  Accessing Data Files

PxPlus supports a wide variety of file formats: proprietary/non-proprietary, program, link, device, data, etc. When referring specifically to **[Data Files](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Overview.md)** in PxPlus, the primary file types and record formats are defined as follows:

**_Serial_** |  Records can vary in length and are typically accessed in a sequential manner from beginning to end.  
---|---  
**_Indexed_** |  Records are the same length and are accessed by index number.  
**_Keyed_** |  Records are accessed via key, a string of characters used to identify the records in a file. Keyed files are the most common data file type used by applications written in PxPlus. Three Keyed formats are supported: **FLR** (fixed-length records), **VLR** (variable-length records), and **EFF** (enhanced file format). See **[EFF vs. VLR File Formats](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/EFF%20vs%20VLR%20File%20Formats.md)** for an explanation of these two file formats. Keyed files are also considered to be: |  _Direct_ |  Consisting of a single key per record (FLR/VLR)  
---|---  
_Keyed_ |  Consisting of one or more keys per record (FLR/VLR, EFF)  
_Sort_ |  Consisting of keys but no data (FLR/VLR, EFF)  
  
Access to a data file is controlled by the use of a **_Channel_** __ or **_Logical File Number_**. The link between data file and channel is established using the **[OPEN](../directives/open.md)** directive. All subsequent input and output to the file uses the same channel, which cannot be reused until the file is closed (via **CLOSE** , **START** , **BEGIN** , or by termination of the user session).

The following **_Directives_** are used to create, delete and rename data files:

**Directive** |  **Description**  
---|---  
**[ADD INDEX](../directives/add_index.md)** |  Add key to keyed file.  
**[CREATE TABLE](../directives/create_table.md)** |  Create keyed file (EFF).  
**[DIRECT](../directives/direct.md)** |  Create file with keyed access.  
**[DIRECTORY](../directives/directory.md)** |  Create subdirectory.  
**[DROP INDEX](../directives/drop_index.md)** |  Drop key from keyed file.  
**[ERASE](../directives/erase.md)** |  Delete file/directory from system.  
**[INDEXED](../directives/indexed.md)** |  Create indexed file.  
**[KEYED](../directives/keyed.md)** |  Create single/multi-keyed file.  
**[RENAME](../directives/rename.md)** |  Change a file's name.  
**[RENAME..INDEX](../directives/rename_index.md)** |  Rename keys in keyed file.  
**[SERIAL](../directives/serial.md)** |  Create a sequential file.  
**[SORT](../directives/sort.md)** |  Create file for sorting.  
  
The following **_Directives_** are used for file input/output and access:

**Directive** |  **Description**  
---|---  
**[CLOSE](../directives/close.md)** |  Close file.  
**[EXTRACT](../directives/extract.md)** |  Read and lock data.  
**[FIND](../directives/find.md)** |  Locate and read data.  
**[LOCK](../directives/lock.md)** |  Reserve file for exclusive use.  
**[OPEN](../directives/open.md)** |  Open a file for processing.  
**[PRINT](../directives/print.md)** |  Display information.  
**[PURGE](../directives/purge.md)** |  Clear data from a file.  
**[READ](../directives/read.md)** |  Read data from file.  
**[REMOVE](../directives/remove.md)** |  Delete record from file.  
**[UNLOCK](../directives/unlock.md)** |  Remove exclusive use from file.  
**[WRITE](../directives/write.md)** |  Add/update data in file.  
  
Several **_System Functions_** are used for file processing, including:

**System Function** |  **Description**  
---|---  
**[FIB( )](../functions/fib.md)** |  Return file information block.  
**[FID( )](../functions/fid.md)** |  Return file information descriptor.  
**[FIN( )](../functions/fin.md)** |  Return file information.  
**[IND( )](../functions/ind.md)** |  Return next record index.  
**[KEC( )](../functions/kec.md)** |  Return key of current record.  
**[KEF( )](../functions/kef.md)** |  Return first key of file.  
**[KEL( )](../functions/kel.md)** |  Return last key of file.  
**[KEN( )](../functions/ken.md)** |  Return key after next.  
**[KEP( )](../functions/kep.md)** |  Return prior record's key.  
**[KEY( )](../functions/key.md)** |  Return key of next record.  
**[KGN( )](../functions/kgn.md)** |  Generate record key.  
**[RCD( )](../functions/rcd.md)** |  Return next record.  
**[RNO( )](../functions/rno.md)** |  Return next record number.  
  
##  Error Report and Handling

If an error condition is detected during the execution of a program, the associated error code(s) can be obtained using the **[ERR](../variables/err.md)** and **[RET](../variables/ret.md)** system variables. The line number of the last system-detected error can be determined by the **[ERS](../variables/ers.md)** variable. The **[MSG( )](../functions/msg.md)** function provides a description for any known PxPlus error in the range of 0 to 255. The **'[ES](../parameters/es.md)'** system parameter, if enabled, can be used to display any operating system error messages, along with the normal PxPlus error, from a Command prompt.

By default, when an error occurs in an application, PxPlus will stop processing, display the error code/message and statement where it occurred, and then return to Command mode. Most PxPlus directives and functions, for which errors are anticipated, provide an error transfer option denoted by an **ERR=_stmtref_** option in the syntax description (**_stmtref_** represents a number or statement label to which to transfer control). Error handling can also be specified via the **[SETERR](../directives/seterr.md) **directive.

The **[ERROR_HANDLER](../directives/error_handler.md)** directive is used to assign a generic application-wide, error-handling program that will intercept any "un-trapped" errors in an application.

PxPlus features several utilities and language elements that will help you locate and handle errors during the coding, testing and debugging stages of the development cycle. See **[Error Handling and Debugging](../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Overview.md)** and **[Error Messages and Codes](../appendix/list_of_messages.md)**.

## See Also

**[Punctuation/Syntax](punctuation~syntax.md)**  
**[Language Reference Appendix](../appendix.md)**
