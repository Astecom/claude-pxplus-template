# Special File Command Tags

**[LIB]** |  **_Program Library_**  
---|---  
  
##  Format

1\. _Define Search Rules:_ |  **PREFIX PROGRAM** "**[LIB:_proglib_]**"  
---|---  
2\. _Write to File:_ |  **SAVE** "**[LIB:_proglib_]**_prog_ "  
3\. _Read into Memory:_ |  **LOAD** "**[LIB:_proglib_]**_prog_ "  
4\. _Change Name:_ |  **RENAME** "**[LIB:_proglib_]**_prog_ " **TO ...**  
5\. _Delete from System:_ |  **ERASE** "**[LIB:_proglib_]**_prog_ "  
  
**_Where:_**

**[****LIB:**_proglib_**]** |  File tag clause informs PxPlus that a file belongs to the program library defined by _proglib_.  
---|---  
_prog_ |  Name of program.  
_proglib_ |  Path and filename of program library.  
  
##  Description

The **[LIB]** tag is used as a prefix to denote that PxPlus is to access programs in a **_program library_** , a single keyed file/library, where each record contains the object for a program stored within.

#### **Note:**  
Program libraries cannot be accessed remotely; i.e. the **[WDX]** or **[LCL]** tags are **_not_** supported.

Saving/loading programs from a single file reduces operating system file searching and security checking and can improve system performance. Program libraries also make it easier for application developers to ship and install applications. Fundamentally, program libraries are transparent to applications and are handled much the same way as directories.

The pathname for a program library is indicated as part of the prefix tag, following the colon: **[LIB:_proglib_]**. The actual program name follows the prefix.

**_Example:_**

If the program PROG01 is in the library /usr/myappl/proglib, it would be referenced as:

> [LIB:/usr/myappl/proglib]PROG01

To simplify access to libraries, they can also be defined in a **PREFIX** (generally a program prefix):

> prefix program "[LIB:/usr/myappl/proglib]"

**_Cached Libraries_**

The system automatically maintains a list of open program libraries. Libraries are kept open if any programs within a library are in use. In addition, the system maintains a cache of opened program libraries. By default, the number of cached program libraries is 10; however, this is alterable by setting the [**'PL'=**](../parameters/pl.md) system parameter. Program libraries would be closed on a **START** , **QUIT** or whenever **'PL'** is changed.

**_Adding, Changing or Removing Programs_**

Access to programs within a program library is handled via the standard **[SAVE](../directives/save.md)**, **[LOAD](../directives/load.md)**, **[RENAME](../directives/rename.md)** and **[ERASE](../directives/erase.md)** directives.

A **SAVE** creates a new record in the library. When addressing an existing program, **SAVE** replaces the record containing the program image in the library with new program contents.

The **LOAD** command reads the records from the library. The **ERASE** command deletes records from the library.

The **RENAME** directive can rename a program in a library. It does not allow a program in a library to be renamed into another library or to a stand-alone program, or vice-versa. In **RENAME** syntax, the original (_name1_) can be defined as a "file within a program library"; the new _name2_ is assumed to be its new name in the library.

**_Creating Program Library Files_**

The program library file is automatically created the first time you save a program to it.

**_Example:_**

> save "[lib:proglib]myprog"

This creates a program library called _proglib_ as a keyed file with the following characteristics:

> Maximum Record Size: |  (No limit)  
> ---|---  
> Size of Key Block: |  30720 bytes  
> Record Expansion Factor: |  10%  
> Extended Attributes: |  Extended records  
> External Key Size: |  0  
> Alt. Key 0: |  [0:1:32:"C"]  
  
Typical create statement:

> keyed "PROGLIB",[0:1:32:"C"],0,-30000,opt="X"

The following additional alternate keys can be defined, if desired, for program information:

> 0:51:12 |  Saved user name  
> ---|---  
> 0:103:4 |  Save time in binary  
> 0:115:2 |  Owner ID in binary  
  
The file can be encrypted; however, pre-open the application and provide its password before trying to use it so that its password can be cached.

The actual keys used in a program library will be subject to the same rules as normal path names with regards to the **['FU'](../parameters/fu.md)** and **['FL'](../parameters/fl.md)** system parameters. If **'FU'** is set, the file names (key value) will be converted to uppercase. If **'FL'** is set, the file names (key value) will be converted to lowercase.

In addition, the directory delimiters "/" and "\" will both be converted to "/", thus allowing applications to be portable between operating systems.
