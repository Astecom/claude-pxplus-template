# Writing and Modifying Program Code

**Version Control** |  **__**  
---|---  
  
PxPlus provides a built-in versioning system for programs, allowing the developer to maintain multiple versions of a program on a program file. The system recognizes two types of versions: **_Committed_** versions, which are generally versions that become part of an official release, and **_Interim_** versions, which represent the versions of a program saved during the development process.

## Version Numbers

Every time PxPlus saves a program, the system assigns it a version number. This version number is a sequence number of the form:

|  vNNN.NN |  For **_Committed_** versions  
---|---|---  
|  vNNN.NN.NNNN |  For **_Interim_** versions  
  
As a convention, the first segment of the version number represents the major version code (range from 0 to 650), the second number represents the minor version code (range from 00 to 99), and the third, when present, represents the Interim version sequence number (range 0001 thru 9999).

Internally, an Interim sequence number of 0000 indicates a Committed version and the trailing .0000 is suppressed.

## Versions and the SAVE Directive

When the programmer issues a **[SAVE](../../../directives/save.md)** directive to a program file, the system automatically creates a new version of the program on the file. The version number, if desired, can be specified on the SAVE command by specifying IND=nnn.nn. If a SAVE command is issued without an IND= option, an Interim version is created. Starting with a new program (version 0.00), a simple SAVE, without an IND= clause, will give you version v0.00.0001, the next SAVE will add v0.00.0002, etc.

To create a Committed version of the program, the developer can issue a SAVE _pgn_ , IND=nnn.nn specifying what major/minor version number is desired. Assuming that the SAVE command included IND=1.00, the next time a SAVE is issued without an IND= specification, the version number will be v1.00.0001, and so on. The value specified on the IND= clause for the SAVE can **_only_** specify a major/minor version number, **_not_** an Interim sequence number.

Should the Interim sequence number ever happen to get to 9999, the next Interim version saved will have its minor number incremented by 1 and Interim sequence number set to 0001 (e.g. the next Interim version number after v1.00.9999 would be v1.01.0001).

**_Impact on Performance_**

While a program file can maintain multiple versions of a program, only the version last saved to the file will be loaded and used by the system.

There is no performance penalty in terms of program load or execution times or in terms of memory requirements for program files with multiple versions. The only impact multiple versions have on the system is program file size and the time it takes for a SAVE command to execute.

## Managing Versions

To a large extent, the management of multiple versions is done automatically by the system. Interim versions of programs are considered to be "work-in-progress" whereas Committed versions are considered to be permanent critical copies of the program.

To control the number of versions of a program that a program file will contain, the system applies the following logic:

|  Old Interim versions of a program are subject to automatic removal from a program file during the SAVE process. The **['+R'](../../../parameters/plusr.md)** system parameter limits the number of Interim versions a program file will contain. Once a file has the number of Interim versions specified by the '+R' parameter, the next Interim version will cause the oldest prior Interim version to be removed. The default setting for '+R' is set to five, which means the system will maintain the last five Interim versions on a program file. You can set the '+R' parameter to any value between 0 and 200 as desired. Setting '+R' to 0 (zero) effectively disables the saving of Interim versions of the program.  
---|---  
|  Committed versions are neither counted nor affected by the '+R' parameter nor will they be subject to automatic removal during the SAVE process. They must be manually removed with the **[VER](../../../commands/version.md)** command or through an **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)** or **[Ed+](../../../Ed%20Program%20Editor.md)** utility.  
  
## Version Control Utilities

**_*IT - Integrated Toolkit and Ed+_**

**[*IT](../../../toolkit1/Using%20the%20Program%20Editor.htm#properties)** and **[Ed+](../../../Ed%20Program%20Editor.htm#properties)** have a _Properties_ option (on the _File_ menu) that provides a list of all the versions on the current program file. From this option, the developer can extract, delete or compare a version(s).

**_Example:_**

> If you extract v1.00.0002 from program ABCDEF, the system will create the program file ABCDEF.v1.00.0002 and optionally open it.

The **[Program Compare](../../../toolkit1/Program%20Compare.md)** utility allows the developer to compare any version to the current version or compare any two versions.

**_Command Mode_**

Two commands are available from Command mode to provide access to the versioning information: **[RECALL](../../../commands.htm#recall)** and **[VER](../../../commands/version.md)**. The **RECALL** command can be used to retrieve any version from the file:

**RECALL** |  Entering this command will recall and load the last version (version prior to the currently saved version) of the current program from the program file into your current workspace.  
---|---  
**RECALL** 2 |  Entering a simple number following the RECALL command will allow you to recall prior versions. The number specified will be used to determine the version to recall: RECALL 1 would recall the prior version or the program.  
RECALL 2 would indicate the version before that, and so on.  
**RECALL**  _vn.nn.nnnn_ |  Entering _vn.nn.nnnn_ recalls a specific version from the program file.  
  
The **VER** command can be used to view and change the versions information on the current program or a series of programs.

## See Also

**[PxPlus Version Control System Using TortoiseSVN](../../../PxPlus%20Version%20Control%20System%20Using%20TortoiseSVN/Introduction.md)**
