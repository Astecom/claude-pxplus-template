# System Parameters

**'+L'** |  **_Enable Logical Disk Drive Specifications_**  
---|---  
  
##  Description

The **'+L'** parameter is used to enable the use of logical disk drives on file create commands such as **DIRECT** , **KEYED** , **SORT** , **PROGRAM** and **SAVE**. By default, PxPlus ignores the disk drive specification on these directives, allowing it to be specified for compatibility purposes only.

When the **'+L'** parameter is set, PxPlus will use the drive number to control which prefix will be used to create the file.

_(The '+L' system parameter was added in PxPlus v7.65.)_

##  Default

**_Off_** \- Logical drive specification is ignored.

## See Also

**[DIRECT Create File with Keyed Access](../directives/direct.md)**  
**[KEYED Create Single/Multi-Keyed File](../directives/keyed.md)**  
**[SORT Create File for Sorting](../directives/sort.md)**  
**[PROGRAM Create or Assign Program File](../directives/program.md)**  
**[SAVE Write Program to File](../directives/save.md)**
