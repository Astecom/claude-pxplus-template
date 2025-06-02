# Directives, Statements and Programs

**Saving, Loading and Executing a Program** |  **__**  
---|---  
  
A PxPlus program is a collection of statements that are stored in memory (or saved to a file) for consecutive execution. In Command mode, the **_current program_** represents all the statements in memory that are immediately available for editing and/or execution. In Execution mode, the current program is also referred to as the **_main-line_** program (also known as _execution level 1_).

The current program can be**RUN** without being saved to a file. Once saved, a program can also be**RUN** directly from a file. By default, program files are saved in a semi-processed state that allows them to be executed as though they are already loaded in memory. These pre-compiled tokenized program files are not readable in a standard text editor and must be loaded into a PxPlus session for editing. For information on working with text-based program files, see**Text (ASCII) Format** below.

Whether you create a new program or**LOAD** an existing program from a file, all changes you make to numbered statements at the command line will apply to the program currently loaded in memory.

For the different methods for creating and saving PxPlus programs, see **[Writing and Modifying Program Code](../../Development%20Tools/Writing%20and%20Modifying%20Program%20Code/Overview.md)**.

## Saving a Program to a File

During a PxPlus session (in Command mode), the current program will cease to exist if a**START** or**DELETE** is issued, or another program is loaded. All changes to the current program will be lost.

To retain your changes for later use, use the**SAVE** directive to copy the current program to a file on disk:

> SAVE "Myprogram"

If the file name specified by _"Myprogram"_ does not exist, a new program file is created, and the program is written to it. If a program exists with the same name, it will be overwritten by the current program. Programs can also be saved in program libraries.

See **[[LIB] Program Library](../../../command_tags/lib.htm)** in the _PxPlus Language Reference_.

## Retrieving a Program File

Programs that are saved to disk may be recalled using the**LOAD** directive. This clears the current program (if any) and replaces it with the program specified:

> LOAD "Myprogram"

## Executing a Program

The**RUN** directive can be used to execute the current program. If the**RUN** command includes a program name, the system will automatically load the specified program from disk before executing it:

> RUN "Myprogram"

## Text (ASCII) Format

It is possible to**RUN** /**CALL** /**PERFORM** /**LOAD** and**SAVE** PxPlus programs in text (ASCII) file format. If the target file for a**SAVE** is not a program file, PxPlus will automatically write the program out in ASCII format:

> DELETE   
>  0010 FOR I = 1 TO 20   
>  0020 PRINT I   
>  0030 NEXT   
>  SERIAL "PROG999"   
>  SAVE "PROG999"

This would output the program to the text file PROG999. If desired, you can insert the keyword**EDIT** following the**SAVE** directive, and the system will save the program in formatted form. Text-based PxPlus programs do have some advantages.

  * Use of more advanced editing/formatting functionality that is available in other types of editors (spell checking, multiple undo, etc.).  
  

  * Version control and configuration management systems.  
  

  * Accessing multiple files via bulk editing tools.



However, when running a text-based program from a PxPlus session, each statement must be evaluated for syntax and converted to tokenized code prior to execution. These extra steps may have an impact on system performance. One way to avoid a performance hit is to**LOAD** a text-based program prior to executing it. At this point, it can be**RUN** as the current program in memory.
