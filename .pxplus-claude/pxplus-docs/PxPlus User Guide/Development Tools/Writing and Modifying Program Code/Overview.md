# Development Tools

**Writing and Modifying Program Code** |  **__**  
---|---  
  
While PxPlus allows external methods for writing source instructions, a program cannot be converted to tokenized code and executed unless it exists within an active PxPlus session. In Command mode, the **_current_** program represents all the statements in memory that are immediately available for editing and/or execution. In Execution mode, the current program is also called the **_main-line_** program (execution level 1).

Whether you create a new program or **[LOAD](../../../directives/load.md)** an existing program, the changes you make to numbered statements at the command line apply to the current program in memory.

#### **Note:**  
The current program does not have to be saved to be **[RUN](../../../directives/run.md)**. Conversely, saved program files can be run directly without first being loaded, although the **RUN** will automatically load the specified program if not already loaded.

PxPlus programs can be edited using a variety of techniques, including the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**, **[Ed+](../../../Ed%20Program%20Editor.md)** program editor, Command line editor, **[*E](Full-Screen%20Editors.htm#e_editor)** character-based editor, as well as any other text editor that saves source code in ASCII format.

##  Numberless Programs

Line numbers are considered  _optional_ in PxPlus. However, numberless programs can only be created using the PxPlus graphical user interface based program editors, ***IT** and **Ed+** , or some other text editing tool (because non-numbered statements would be executed immediately at the Command line).

Once created, a numberless program may be loaded and listed (and edited) in Command mode. When issuing a **[LIST](../../../directives/list.md)** of a numberless program, sequential line numbers will be inserted automatically (for reference/editing purposes).
