# Directives 

**SAVE** |  **_Write Program to File_**  
---|---  
  
##  Format

**SAVE** [**EDIT**] **[**_prog_name$_**[** ,_prog_size_** __] [**,**IND=**_ver_**][**,**MSG=**_note_**] [** ,**OWN=**_owner_id_ __**[** ,**FLG=**_flg:flg:flg_**] ] ]**

**_Where:_**

**EDIT** |  Use the optional keyword **EDIT** with the **SAVE** directive to have the system logically break the lines into segments and indent them. See [**'LE'**](../parameters/le.md) system parameter and [**LIST**](list.md) directive.  
---|---  
_flg_ |  Optional package flags. If you use these, delimit them with a **:** (_colon_) and use numeric expressions; i.e. integers between 1 and 25.  
_note_ |  Optional note/message to be included in the header of the program. This can be retrieved using the **[VER](../commands/version.md)** system command.  
_ver_ |  Optional version number to be set on the saved program. This can be retrieved using the **[VER](../commands/version.md)** system command.  
_prog_name_ _$_ |  Filename to receive the program. Optional. String expression.  
_prog_size_ |  Program size. Optional. Numeric expression.  
_owner_id_ |  Optional package number (owner ID) to which this program is to be assigned. Numeric expression.  
  
#### **Note:**  
The **OWN=** and **FLG=** options are designed for use by registered application developers. They are used to encrypt programs and establish activation keys to run the programs.

##  Description

Use the **SAVE** directive to copy/write the current program to your given filename. (Include the pathname if the directory you want is neither current nor in your **PREFIX** definition.)

If the file does not already exist, a program file is created. If you include the _prog_size_ __ argument, the file specified must not already exist.

If the output of the file is a program file type, the system writes it to the file in internal (compiled) format. For serial and indexed file types, the system writes the program in display (**LIST**) format. You can only use the **SAVE** directive for serial, indexed, and program files.

#### **Note 1:**  
You can **RUN** , **CALL** or **PERFORM** text files that contain programs just as you would any regular program file.  
  
**Note 2:**  
When using PxPlus (version 7.00 or later) and you have a _.pluscvs_ file in the target directory where a program is being saved, a source/text copy of the program will be placed in the directory whose name is contained within the _.pluscvs_ file. The source/text file will have a suffix of ".pxprg" appended to its file name to identify it as a PxPlus program.

_(The ability to add a Note to a program, the Source Control interface and the ability to store multiple versions of a program on a program file were added in PxPlus v8.00.)_

## Source Control Interface

This process is designed to provide an automated means to feed program changes to a source control system.

## Structured SAVE

The **SAVE** directive can also be used to verify modified programs for structural integrity (see **['SS'](../parameters/ss.md)** system parameter). Logical errors (e.g. a FOR with no corresponding NEXT or a SWITCH without an END SWITCH) will result in a Warning #125: Improper Structure Detected, indicating where the fault was detected.

For more information on logical structures, see **[Structured SAVE](../PxPlus%20User%20Guide/Development%20Tools/Error%20Handling%20and%20Debugging/Structured%20SAVE.md)**.

##  Multiple Program Versions

If the [**'+R'**](../parameters/plusr.md) system parameter is non-zero, the **SAVE** command will maintain prior '_Interim'_ versions of the program in the program file. The value set in the '+R' system parameter defines the number of prior versions that the **SAVE** command will keep (maximum 200, default 5).

When you issue a **SAVE** command **_on PxPlus 2018_** and have multiple versions enabled, if saving a version that **_has a password_** , the system will only preserve passworded versions up to the first non-passworded version. Saving a non-passworded version will preserve both passworded **_and_** non-passworded versions.

Maintaining prior versions of the program on the program file will not affect the performance or program size during normal execution. The only impact of keeping prior versions is the physical size of the file and the time required to issue a **SAVE** command when updating the program.

See **[Version Control](../PxPlus%20User%20Guide/Development%20Tools/Writing%20and%20Modifying%20Program%20Code/Version%20Control.md)**.

##  See Also

[**SERIAL Create a Sequential File**](serial.md)  
[**PROGRAM Create a Program File**](program.md)

##  Example

save "PROG1A"  
save "/usr/a-r/PROGS/ARLIST"

You can **SAVE** or **SAVE EDIT** a text file containing the source of a program (be sure to pre-create your **SERIAL** text file):

> serial "PROG00.TXT"  
>  load "PROG00"  
>  save edit "PROG00.TXT" ! Formatted with line breaks and indents
