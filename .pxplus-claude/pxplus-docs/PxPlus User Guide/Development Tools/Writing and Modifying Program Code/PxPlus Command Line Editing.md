# Writing and Modifying Program Code

**PxPlus Command Line Editing** |  **__**  
---|---  
  
The simplest way to create/change a program involves entering numbered statements directly at the prompt**- >** in Command mode. As each numbered statement is entered, it is evaluated for syntax, compiled and then placed in memory to represent a line in the current program. While rudimentary, the Command Line Editor has all the tools necessary for creating, editing and saving any size of program.

During this process, the prompt changes from**- >** to**-:** to indicate that the current program is being edited and has not been saved. The first numbered statement adds the first line to a new current program, the second, adds another line, and so on. Regardless of the sequence entered, the lines in the current program are rearranged internally based on their line numbers and are always executed in ascending order. This is true whether you create a new program in memory or **[LOAD](../../../directives/load.md)** an existing program from disk.

See **[PxPlus Environment](../../Getting%20Started/PxPlus%20Environment/Overview.md)**.

## Using the LIST Directive

At any point during the editing process, you can review the entered statements in their proper numeric sequence by issuing a **[LIST](../../../directives/list.md)** of the current program. This gives you a listing of the entire contents of a program.

Because a program is maintained internally in compiled (object) format, the**LIST** version of some statements may not always match the original entries, but the actual logic will appear as intended. 

**_Example:_**

In the following example, subtle changes are made to line 40 after it is listed:

> 40 z=1,y=6; goto 10   
>  list   
>  0010 LET A=4,B=3   
>  0020 LET C=A+B   
>  0030 PRINT C   
>  0040 LET Z=1,Y=6; GOTO 0010

Once listed, the keyword**LET** is inserted, the lowercase variable names are converted to uppercase, and the line number is expanded to four digits.

The**EDIT** keyword can be used with the **[LIST](../../../directives/list.md)** directive to format the display by indenting loops and compound statements.

**_Example:_**

> The behaviour of the**LIST** directive can be affected by various system parameters. When turned on, **['LC'](../../../parameters/lc.md)** lists variables in lowercase, **['MC'](../../../parameters/mc.md)** lists variables using mixed case (dependent on how they were initially entered), and **['LE'](../../../parameters/le.md)** causes**LIST** to display the same as**LIST EDIT**.

## Statement Errors

If an error occurs during compilation, the flawed statement will be indicated by a**?**__(_question mark_) between the line number and the text.

**_Example:_**

> 10 A="Hello"   
>  #26 -- Variable type invalid   
>  LIST   
>  0010?A="Hello"

## Modifying Existing Lines

When a numbered statement is entered with the same line number as a line in the current program, the existing line is automatically overwritten by the new statement. If you want to modify rather than overwrite the statement, use the **[EDIT](../../../directives/edit.md)** directive (or shortcut) to recall the specific line number.

**_Example:_**

> list   
>  0010 PRECISION 2   
>  0020 ROUND OFF   
>  0030 LET A=3*(2/3)   
>  0040 PRINT A   
>  edit 30   
>  0030 LET A=3*(2/3)

Once displayed, the contents of the line (including the line number) can be changed and re-entered. See **[EDIT](../../../directives/edit.md)** directive.

Program code can also be copied, pasted and edited using a variety of other techniques that include **_command line recall_** (up/down cursor keys), as well as the Edit function, which is accessed via the PxPlus icon drop-down menu (top left corner) in the PxPlus (Windows) console.

To **_append_** text to an existing statement, enter the line number, followed by a colon.

**_Example:_**

> _If an existing statement is_  
>  0030 PRINT "End-of-pass"  
> _then_  
>  30:;NEXT I  
>  _results in_  
>  0030 PRINT "End-of-pass"; NEXT I

## Deleting Existing Lines

To remove lines from a program, simply enter the desired line number, followed by no directive (e.g. entering a 20 deletes all of line 0020). Optionally, a range of lines can be deleted using the **[DELETE](../../../directives/delete.md)** directive.

**_Example:_**

> DELETE 260,890 ! Deletes statements from line 0260 to line 0890  
>  DELETE 260, ! Deletes statements from line 0260 to program end  
> DELETE ,890 ! Deletes from program start to line number 0890

## Autonumber Sequences

In Command mode, statements must have line numbers to be accepted in the current program; otherwise, they are executed as commands. If you prefer to add numbered statements without having to type the actual numbers, use the **[AUTO](../../../directives/auto.md)** directive to generate the line numbers automatically.

**_Example:_**

> AUTO 100,10   
>  0100 ! PxPlus generates line 0100 for you. Add the statement.   
> 0110 ! PxPlus adds 10, generates line 0110.   
>  0120

**AUTO** mode remains active until you enter a null line. You can also backspace over to change the generated line number.

## Renumbering

Use the **[RENUMBER](../../../directives/renumber.md)** directive to change line numbers in an existing program without affecting the logic. All references to the original line numbers will be adjusted as required; i.e. **GOTO** and**GOSUB** statements will point to the new line numbers. The starting line number, increment and the range of lines affected can be defined using this directive.

##  Search and Replace

Command mode includes a built-in utility that allows the programmer to search the current program for a specific character string, display it and optionally replace it. For a list of the symbols used to implement this functionality, see **[Punctuation/Syntax](../../../introduction/punctuation~syntax.md)**.

Subject character strings are delimited by square brackets:

|  [PRINT] |  Displays the next line that contains the word PRINT.  
---|---|---  
|  10,100[PRINT] |  Displays all lines between 10 and 100 containing PRINT.  
|  *[PRINT] |  Displays all lines containing PRINT.  
|  *[PRT$]=[PRINT$] |  Changes all instances of PRT$ to PRINT$. The replacement can also apply to a range of lines (e.g. 10,100[PRT$]=[PRINT$] ) or be limited to the next line only ( [PRT$]=[PRINT$] ).  
  
## Saving, Loading, Running a Program

The **[SAVE](../../../directives/save.md)** directive may be used to write a copy of the current program to disk. Once written or "saved" on disk, the program may be recalled for subsequent execution or modification. The **[LOAD](../../../directives/load.md)** or **[RUN](../../../directives/run.md)** command may be used to recall a saved program. The format of the **SAVE** command is as follows:

> SAVE "Progname"

If the file specified by _"Progname"_ does not exist, a _program_ file is created, and the program is written to it. If desired, a string variable or expression may be substituted for the literal _"Progname"_.

The type of file to which the program is being saved determines the format that the saved program will take. If the file is a PxPlus 'Program' file (as indicated in the file header), then the program is saved in internal format (object code), and the final pass of the compiler is performed. For any other type of file, the program is saved in 'LIST' format; that is, the program is saved as it appears in response to a LIST command. Either format of the file can be used to recall and run programs.

The format of the LOAD and RUN commands are as follows:

> LOAD "Progname"  
>  RUN "Progname"

The LOAD command clears the current program and replaces it with the program contained in the file specified. The RUN command loads a program then starts executing it. A RUN command with no file specified executes the current program.

#### **Note:**  
PxPlus provides a code security feature through the use of passwords. See **[Security Features](../../Appendix%20of%20Miscellaneous%20Topics/Security%20Features/Overview.md)**.

## See Also

**[Directives, Statements and Programs](../../Language%20Elements/Directives,%20Statements%20and%20Programs/Overview.md)**
