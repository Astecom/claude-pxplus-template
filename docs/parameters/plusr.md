# System Parameters

**'+R'** |  **_Enable Recall of Prior Program Versions_**  
---|---  
  
##  Description

The **'+R'** parameter is used to define the number of prior versions of a program to automatically maintain on a program file. By default, it is set to 0, indicating that no prior versions of a program will be kept.

Setting **'+R'** to 1 will cause the **SAVE** directive to maintain one prior copy of the program on the program file, setting it to 2 will save two, and so on.

When you issue a **SAVE** command **_on PxPlus 2018_** and have multiple versions enabled, if saving a version that **_has a password_** , the system will only preserve passworded versions up to the first non-passworded version. Saving a non-passworded version will preserve both passworded **_and_** non-passworded versions.

The PxPlus command **"RECALL"** can be used to load a prior version of the program into your current workspace where it can be viewed, edited or resaved onto the program file (thus becoming the current version).

To recall prior versions, you can enter RECALL _nn_ from Command mode where _nn_ represents the relative version number (1= prior version, 2=version before that, etc.). Alternatively, you can enter _n.nnn_ where the number matches the actual program version number that can be either set by the SAVE "...",IND=_n.nnn_ or automatically assigned by the system. The VERS * command can be used to view all versions of the program that exist for the currently loaded program.

_(The '+R' system parameter was added in PxPlus v7.10.)_

##  Default

**5**

## See Also

**[SAVE Write Program to File](../directives/save.md)**
