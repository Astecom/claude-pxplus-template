# System Parameters

**'GS'** |  **_Get_File_Box_ _List Delimiter_**  
---|---  
  
##  Description

The **'GS'** parameter is used to define the character to be returned between each of the filenames and directory name by the **GET_FILE_BOX** directive when returning multiple file names.

The value in this parameter can be initialized by defining GetFileDelim=_nnn_ in the **[Config]** section of your INI file.

#### **Note:**  
The default for this parameter (TAB) is not compatible with the older Pr _o_ videX software, which uses a comma; cannot be altered and can cause problems for filenames, which do contain commas. If you wish to use the same delimiter as Pr _o_ videX, you will need to set this parameter to 44.

(The 'GS' system parameter was added in PxPlus v8.01, build 9181.)

##  Default

Default setting is 9 (TAB) unless overridden in the INI file.

## See Also

**[GET_FILE_BOX Ask for Filename](../directives/get_file_box.md)**
