# Introduction to Using PxPlus

**Programming Constructs** |  **__**  
---|---  
  
This Help section explains basic programming constructs using the building blocks described under **[Language Elements](../Language%20Elements/Introduction.md)**. See **[Directives](../../directives.md)** to access information on the syntax elements.

While PxPlus is an **_extensible_** language that has the flexibility to incorporate new functionality and sophisticated coding techniques, the more advanced capabilities are built upon universal concepts. Therefore, learning PxPlus begins with some programming fundamentals (described below).

The PxPlus tools for writing and modifying program code are described under **[Development Tools](../Development%20Tools/Introduction.md)**.

## General Concepts

**_Order of Execution_**

Directives can be executed individually from the command line, or they can be entered as numbered statements to be saved in memory before execution. See **[Directives, Statements and Programs](../Language%20Elements/Directives,%20Statements%20and%20Programs/Overview.md)**.

Program statements are grouped into the constructs for receiving and manipulating data, doing calculations, and printing output. During execution, the statements are evaluated and processed in the order they are read by the system. Logic flows through all the statements in one pass, from left to right and top to bottom, until the last statement is processed - this direction remains fixed unless specific commands are used to change this sequence.

**_Changing the Sequence_**

PxPlus employs various **[Flow Control](Flow%20Control/Overview.md)** mechanisms in order to perform conditional or repetitive instructions or to improve structure and maintainability of a program. Statements may be subject to certain conditions (decisions), executed repeatedly (loops), or packaged into code modules (subroutines/subprograms) that can be accessed from different points in the main program. See **[Modular Programming Facilities](Introduction.htm#modular)**.

Like most programming languages, PxPlus maintains a type of data buffer called a **_stack_** , which is used to store dynamic information associated with active counters, loops and subroutines during execution of a program. For example, the primary purpose of a _subroutine_ stack is to keep track of the location in the program (address) to which each procedure will return control when it is completed. At the start of every subroutine, a new return address will be placed on the top of the stack. When the procedure finishes, it _pops_ the return address off the stack and transfers control to that address.

This type of information is continuously stacking up and unstacking the buffer as the program requires. An operational error that causes a stack to exceed its buffer allocation is called a _stack overflow_.

**_Input/Output_ _Operations_**

Input/Output (I/O) in PxPlus programming refers to activities where source data is accepted into a program for processing or where resultant data is sent from a program for storage or display. Depending on the process, I/O may take place to or from a device or file, with or without user interaction. Interfaces can include the keyboard, mouse, monitor, printer, and a variety of other connected devices.

For an introduction to input/output operations (at the PxPlus console), see **[Basic Input and Output](Basic%20Input%20and%20Output/Overview.md)**. For an introduction to graphical user interface development, see **[Graphical User Interfaces](../Graphical%20User%20Interfaces/Introduction.md)**.

Data can take different forms: defined as **[Numeric Values](../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Numeric%20Values.md)** or **[String Values](../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/String%20Values.md)**, presented as **[Literals](../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Literals.md)**, or stored in **[Variables](../Language%20Elements/Data%20Types,%20Literals%20and%20Variables/Variables.md)**. Once a session is terminated, the processed data also disappears. However, if a more permanent storage solution is required, the data can be saved to a data file. For information on the PxPlus file system and file I/O operations, see **[File Handling](../File%20Handling/Introduction.md)**.

During execution, files, as well as devices, are opened for access via the **[OPEN](../../directives/open.md)** directive. See **[Opening/Closing Devices and Files](Basic%20Input%20and%20Output/Overview.htm#Mark2)**.

**_Modular Programming Facilities_**

As an application becomes larger and more complex, it becomes increasingly difficult to keep track of where certain procedures are to be executed. PxPlus allows you to organize and extend the built-in capabilities of the language using modular programming facilities, referred to as **[Called Procedures](Called%20Procedures/Overview.md)**. Commonly used expressions or calculations can be packaged into user-defined functions for reference by name elsewhere in the program. A similar approach includes transferring execution to subroutines (inside) or separately written subprograms (outside) from points in the main program.

## Advanced Concepts

The PxPlus language supports programming techniques where the coded lines are not necessarily written and executed as a fixed series of statements. This flexibility enables the use of different constructs that are better-suited for incorporating new user functionality and advanced programming paradigms; i.e. **[Event-Driven Methodology](../Graphical%20User%20Interfaces/Introduction.htm#methodology)**, **[Graphical User Interfaces](../Graphical%20User%20Interfaces/Introduction.md)** and **[Object-Oriented PxPlus](../Object-Oriented%20PxPlus/Introduction.md)**.

**_Event-Driven Programming_**

Traditionally, programs operated in a sequential fashion: they received some data, did some processing, produced output, received more data, and so on. In **_event-driven programming_** , processing is invoked only in response to specific inputs or _events_. Each call to a single subroutine or function is a sequential process, but the application as a whole does nothing until it is triggered by an event.

**[Graphical User Interfaces](../Graphical%20User%20Interfaces/Introduction.md)** are event driven by nature. Graphical user interface based programs must run continuous event loops to check for, capture and process the different sources of user input; e.g. dragging a mouse, clicking a button, and pulling down a menu.

**_Object-Oriented Programming_**

While the functionality of a graphical user interface based application appears simple and natural to the user, the algorithms behind this type of interface design can be extremely complex. One of the more efficient ways in which graphical, event-handling operations can be expressed in PxPlus is via **[Object-Oriented Programming (OOP)](../Object-Oriented%20PxPlus/Introduction.md)**.

The idea of object orientation is to keep data and processing methods together as a single indivisible thing - an object. As an example, each element of a graphical user interface can be represented by one object. The object determines both the state and the behavior of the corresponding elements. For example, an object representing a window would have data for its position, size and title. If the user closes the window, a message is sent to the window object telling it to close itself. The window then executes a process that erases its image from the desktop.
