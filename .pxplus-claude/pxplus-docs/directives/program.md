# Directives

**PROGRAM** |  **_Create or Assign Program File_**  
---|---  
  
##  Formats

1. |  _Create Program File:_ |  **PROGRAM** _filename$_[,_prog_size_][,**ERR=**_stmtref_]  
---|---|---  
2. |  _[Assign Default Program (OOP)](program.htm#Mark6):_ |  **PROGRAM** _"interface_prog"_  
  
**_Where_** _:_

_interface_prog_ |  Name of default program that contains object logic.  
---|---  
_filename$_ |  Name of the program file to create. String expression.  
_prog_size_ |  Ignored. Size of a program that can be contained in the file. Numeric expression.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **PROGRAM** directive can be used to create a program file or it can be used in **[Object Oriented Programming](../PxPlus%20User%20Guide/Object-Oriented%20PxPlus/Introduction.md)** (OOP) to define a default program name intended to service an object.

##  Format 1

**_Create Program File_**  
  
**PROGRAM** _filename$_**[** ,_prog_ __size_][,**ERR=**_stmtref_**]**

This format of the **PROGRAM** directive is used to create a PxPlus program file. The file size is for documentation purposes only and is ignored by the system.

**_Example:_**

> 0010 program "CSTUPD",1024,err=1200

Program files have a special header format indicating that the file contains PxPlus object code. Program files should only be used with the **SAVE** or **LOAD** commands. Any attempt to use **READ** or **WRITE** directives with this type of file can yield unpredictable results when the program file is subsequently loaded.

If a given filename already exists, PxPlus returns an Error #12: File does not exist (or already exists).

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. PROGRAM "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

##  Format 2

**_Assign Default Program in Object-Oriented Programming_**  
  
**PROGRAM** _"interface_prog"_  
  
In Object Oriented Programming, the **PROGRAM** directive is used to define the default program name that is going to service an object. This can be used to override the program that contains the **DEF CLASS**.

If this clause is specified for an object class:

  * Whenever an object is created, the system will attempt to call the specified program at the label ON_CREATE.
  * Whenever an object of this class is deleted, the system will attempt to call the specified program at the label ON_DELETE.



No error is reported if the label does not exist. In addition, any references to program logic in a property read/write or a method definition can contain a leading **;** (_semi-colon_).

**_Example:_**

The following class definitions are effectively the same:

> program "Cust"  
>  function Find(X$)"LookupByName"

## See Also

**[DEF CLASS Define Object Class](def_class.md)**  
**[DROP CLASS Delete Class Definition](drop_class.md)**  
**[DROP OBJECT Delete Object](drop_object.md)**  
**[FUNCTION Declare Object Method](function.md)**  
**[LIKE Inherit Properties](like.md)**  
**[LOAD CLASS Pre-Load Class Definition](load_class.md)**  
**[LOCAL Designation of Local Data](local.md)**  
**[PROPERTY Declare Object Properties](property.md)**  
**[RENAME CLASS Change Name of Class](rename_class.md)**  
**[STATIC Add Local Properties at Runtime](static.md)**  
**[NEW( ) Create New Object](../functions/new.md)**  
**[REF( ) Control Reference Count](../functions/ref.md)**

****

****
