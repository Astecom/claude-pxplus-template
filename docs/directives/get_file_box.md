# Directives 

**GET_FILE_BOX** |  **_Ask for Filename_**  
---|---  
  
##  Formats

1. |  _Create File Box_ _:_ |  **GET_FILE_BOX** _path$,dir$,title$_[_ex_list_ _$_[,_def_ex_ _$_]][,**ERR=**_stmtref_]  
---|---|---  
2. |  _Check File Box_: |  **GET_FILE_BOX READ** _path$,dir$,title$_[_ex_list_ _$_[,_def_ex_ _$_]][,**ERR=**_stmtref_]  
3. |  _Write to File Box_ _:_ |  **GET_FILE_BOX WRITE** _path$,dir$,title$_[_ex_list_ _$_[,_def_ex_ _$_]][,**ERR=**_stmtref_]  
4. |  _Find Directory_ _:_ |  **GET_FILE_BOX DIRECTORY** _path$,dir$,title$_[,_root$_][,**ERR=**_stmtref_]  
5. |  _[Multiple Selection:](get_file_box.htm#format5)_ |  **GET_FILE_BOX READ LIST**  _path$,dir$,title$_[_ex_list_ _$_[_,def_ex$_]][,**ERR=**_stmtref_]  
  
**_Where:_**

_dir_ _$_ |  Initial directory to display. String expression.  
---|---  
_def_ex_ _$_ |  Default file extension to use if no file extension is specified via the file extension drop box or the file path input field. Optional. String expression. **_Example:_** "txt"  
_ex_list_ _$_ |  List of standard file extensions (e.g. .jpg, .pdf, .txt, etc.). Comma or your choice of character as the delimiter (the last extension **_must_** end with the delimiter). Optional. String expression. To define a list of file extensions along with their associated descriptions, use the format **_Description|*.XXX,_** as in the following examples: **_Example:_** |  Applications|*.exe,Text|*.txt,PDFs|*.pdf,All|*.*, |  In this list of file extensions, four descriptions are specified. Each description is associated with **_one_** file extension:  
  
_Applications_ (displays all _.exe_ files)  
_Text_ (displays all _.txt_ files)  
_PDFs_ (displays all _.pdf_ files)  
_All_ (displays _all_ files)

#### **Note:**  
If defining only one file type, a delimiter (i.e. comma) **_must_** be added to the end. PxPlus uses this last character as the delimiter.  
  
---|---  
Text|*.txt;*.log,Images|*.png;*.bmp;*.jpg;*.jpeg, |  In this list of file extensions, two descriptions are specified. Each description is associated with **_multiple_** file extensions:  
_  
Text_ (displays all _.txt_ ** _and_** _.log_ files)  
_Images_ (displays all _.png_ , _.bmp_ , _.jpg_ ** _and_**  _.jpeg_ files)

#### **Note:**  
Use the _semi-colon_ to separate multiple file extensions.  
  
_path$_ |  String variable that contains the file path. Initialize this prior to executing this directive. See **[Note](get_file_box.htm#note)**.  
_root$_ |  **_(For Windows XP or later)_** Optional highest level directory in which browsing can occur. (This parameter overrides _dir_ _$_.)  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_title$_ |  Window title. String expression. If not specified, the defaults for the various formats will be used.  
  
#### **Note:**  
**GET_FILE_BOX** is supported when you use WindX with UNIX file systems and supported calls to [WDX]. See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm).

##  Description

Use the **GET_FILE_BOX** directive to display a standardized window for the user, allowing the entry or selection of a file in the system.

##  Format 1

**_Create_**

**GET_FILE_BOX**  _path$,dir$,title$_[_ex_list_ _$_[,_def_ex_ _$_]][,**ERR** =_stmtref_]

#### **Note****:**  
The _path$_ variable will receive the full pathname of the file selected. Because its initial contents will be used as the _default_ pathname, initialize it prior to executing this directive.

Use this format to select a file. If the initial directory string is null, PxPlus uses the current directory. If no _title$_ is supplied, the window title will read as: "File to be Opened".

Use the format **_Description|*.XXX,_** to list standard file extensions, along with their associated descriptions. You can include multiple extensions, comma**-** delimited (with the last extension terminated by a comma). If desired, choose a character other than a comma to delimit each entry. PxPlus uses the last character in _ex_list_ _$_(the comma or your choice) as the delimiter. See **[ex_list$](get_file_box.htm#Mark2)** for examples.

##  Format 2

**_Check_**

**GET_FILE_BOX READ**  _path$,dir$,title$_[_ex_list_ _$_[,_def_ex_ _$_]][,**ERR** =_stmtref_]

Use the **READ** format to make sure that the file you want returned exists:

> get_file_box read X$,"C:\VX","File to View"

If no _title$_ is supplied, the window title will read as: "File to be Read".

##  Format 3

**_Write_**

**GET_FILE_BOX WRITE**  _path$,dir$,title$_[_ex_list_ _$_[,_df_ex_ _$_]][,**ERR** =_stmtref_]

Use the **WRITE** format to save or rewrite the file. If you do this and a user selects a file that already exists, PxPlus will confirm that the file is to be overwritten prior returning to the program:

> get_file_box write X$,lwd,"Report file","Report files|*.RPT,All files|*.*,","RPT"

This allows the user to have a filename with the default extension .RPT and gives the user a list of files of two types - report files (*.RPT) and All files (*.*).

If no _title$_ is supplied, the window title will read as: "File to be Written".

##  Format 4

**_Directory_**

**GET_FILE_BOX DIRECTORY**  _path$,dir$,title$_[,_root$_][,**ERR** =_stmtref_]

Use the **DIRECTORY** format to return a directory name to the application. The system will only allow the user to select a directory starting with directory set in _dir_ _$_.

If no _title$_ is supplied, the window title will read as: "Browse for Folder".

**_(For Windows XP or later)_** The optional _root$_ parameter sets the highest level directory in which browsing can occur (overriding what is set in _dir_ _$_). When _not_ using WindX or iNomads, then the terms "_My Computer_ " and "_My Documents_ " can be used, as well as the full path to an existing folder.

##  Format 5

**_Multiple Selection_**

**GET_FILE_BOX READ LIST**  _path$,dir$,title$_[_ex_list_ _$_[_,df_ex$_]][,**ERR** =_stmtref_]

Use the **LIST** format to specify multiple selections for **GET_FILE_BOX READ**. If a single entry is selected, then _path$_ will contain the full path of the file (as with a **GET_FILE_BOX READ**). If more than one entry is selected, then _path$_ will consist of the full directory where the files are located terminated by **SEP** , followed by a delimited list of the selected files where the delimiter is defined by the **['GS'](../parameters/gs.md)** parameter.

If no _title$_ is supplied, the window title will read as: "File to be Read".

#### **Note:**  
Windows ignores selected directories. This format is **_not_** supported in the text version of **GET_FILE_BOX**.

## See Also

**[GET_FILE_BOX File Selection Dialog](../PxPlus%20User%20Guide/Graphical%20User%20Interfaces/Interface%20Windows/Getfilebox.md)**
