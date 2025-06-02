# Directives 

**PREFIX** |  **_Set File Search Rules_**  
---|---  
  
##  Formats

1\. _Set Prefix 0 (Zero)__:_ |  **PREFIX** [_search_string_ $]  
---|---  
2\. _Set Any Prefix Number_ _:_ |  **PREFIX**(_num_)[_search_string_ $]  
3\. _Set Program Retrieval Rules_ _:_ |  **PREFIX PROGRAM**[_search_string_ $]  
4\. _Specify Search Rules in Keyed File_ _:_ |  **PREFIX FILE** [_filename_ $]  
5\. _Define Virtual Directory_ _:_ |  **PREFIX DIRECTORY**  _dirpfx_ $ = _dirpath_ _$_  
  
**_Where_** _:_

_filename_ |  Name of a variable-length Keyed file containing data records that define the locations of specific files (in effect, a lookup or translation table).  
---|---  
_num_ |  Numeric value between 0 (zero) and 9 that defines the **PREFIX** entry to use. If you omit this value, the default is 0 (_zero_).  
_search_string_ _$_ |  One or more pathname prefixes (search locations) you want PxPlus to search when attempting to find files/programs. Optional string expression. Omit the string **PREFIX [(**_num_**)])** to have PxPlus remove a **PREFIX**. When you have more than one search location in a **PREFIX** directive, the different locations must be space separated. If you need to include a space within a directory name, then that directory location must be enclosed in double quotation marks: prefix "C:\Tmp\C:\Usr\""C:\Program Files\"""  
_dirpfx_ _$_ |  Logical directory prefix that the program will use when referencing files.  
_dirpath_ |  Target actual directory to be used when using virtual directories.  
  
##  Description

Use the **PREFIX** directive to define a series of search paths to be inserted in front of all relative file references used in **[OPEN](open.md)**, **[LOAD](load.md)**, **[RUN](run.md)**, **[CALL](call.md)** and **[PERFORM](perform.md)** directives. (PxPlus opens files with absolute paths directly without performing a search.)

Each prefix can contain 0 or more search locations. (A search location is either a directory or a disk/directory pair.) You can specify up to 10 differently numbered prefixes (i.e. PREFIX(0) through PREFIX(9)), as well as a **PREFIX PROGRAM** and a **PREFIX FILE**.

##  Format 1

**_Set Prefix 0 (Zero)_**

**PREFIX** [_search_string_ $]

If no numbered prefix is specified, then the **PREFIX** command affects PREFIX(0) by default.

**_Example:_**

> prefix "C:\TMP" would apply to PREFIX(0).

##  Format 2

**_Set Any Prefix Number_**

**PREFIX**(_num_)[_search_string_ $]

Use this format to define a maximum of 35 numbered prefix table entries (range 0 to 34) to set file search rules. Each table entry can contain multiple paths.

**_Example:_**

> prefix (4)"PGMS\CST\CASHRCPT\\\PGMS\MGMT\MISC\ \PGMS\SALES\"

##  Format 3

**_Set Program Retrieval Rules_**

**PREFIX PROGRAM**[_search_string_ $]

Use the **PREFIX PROGRAM** format to define the search location(s) PxPlus will search first when it attempts to **LOAD** /**RUN** /**CALL** /**PERFORM** /**SAVE** programs.

**_Example:_**

> prefix program "\other\pgm\tst\"

If you omit the prefix string or use a null string (i.e. prefix program ""), PxPlus will reset the program prefix to null.

##  Format 4

**_Using Paths in Keyed File_**

**PREFIX FILE** [_filename_ $]

Use the **PREFIX FILE** format to specify the special Keyed file that contains information to be used for dynamic translations of files when they are opened in your applications. Any file you define as a **PREFIX FILE** must be a variable length Keyed file or PxPlus returns an Error #17: Invalid file type or contents.

If you define a **PREFIX FILE** , PxPlus searches this special Keyed file for a search location whenever it encounters an **OPEN** command with a relative filename, using _filename_ $ as the key to the **PREFIX FILE**. (PxPlus opens filenames with absolute paths directly without performing a search.) Normal **PREFIX** search rules still apply after a filename has been located in the **PREFIX FILE**.

When you write to this special Keyed file, treat the filename from your program's **OPEN** command as the key. The data record for each key contains the true filename you want opened instead. (PxPlus retrieves the data record internally with a **READ RECORD**.)

**_Example:_**

> keyed "someloc.dat",25  
>  open (chan)"someloc.dat"  
>  write record (chan,key="myfile")"c:\tmp\myfile"  
>  close (chan)  
>    
>  prefix file "someloc.dat"  
>  open (chan)"myfile" ! Internally this becomes open(chan)"c:\tmp\myfile" instead

The return value from the [**PFX(-1)**](../functions/pfx.htm#file) function can be used to determine if a **PREFIX FILE** is set and what its pathname is.

**_PREFIX FILE Record Layout_**

The **PREFIX FILE** is defined as a Keyed file with a primary/external key equal to the largest filename that your application will use. The first field in this file will contain the real pathname to be accessed, and the second field will contain the option OPT= option value to be used during the OPEN. Any options specified in this second field will be added to any options specified on the OPEN.

In PxPlus, a third field may be specified that contains the IOList to use when opening the file with an **IOL=*** option.

_(Support for the PREFIX FILE to include IOLISTs was added in PxPlus v8.11, build 9182.)_

**_Example:_**

> 10 prefix file "";z$="mypfx.dat";erase z$,err=*next  
>  20 keyed z$,32;open lock(1)z$  
>  30 write (1,key="xyz")"/mydata/company","","A$,B$"  
>  40 close(1)  
>   
>  ->run  
>  open (1,iol=*)"/mydata/company"  
>  print mid(lst(iol(1)),1,70)  
> iolist CODE$,NAME$,ADDRESS$,COUNTRY$,ZIP$,ZIP2$,PLACE$,CLASS$,NAMEALFA  
>  prefix file "mypfx.dat"  
>  open(2,iol=*)"xyz"  
>  print lst(iol(2))  
> iolist A$,B$

In addition, if the pathname (the first field) is empty in the **PREFIX FILE** record, the original file name will be used, allowing the **PREFIX FILE** to add only the open options and IOLIST.

As of PxPlus 2014, the **PREFIX FILE** may be defined with an internal key. This allows internal key options, such as case insensitivity and accents stripping, to be applied to the file names. When a **PREFIX FILE** has an internal key, it **_must_** be the first field, and the values in all other fields must be adjusted up by one field (thus true pathname is field 2, options in field 3, and IOList in field 4).

## PxPlus Search Rules

The PxPlus default is to search all prefixes in the following order:

**OPEN** **Directive** |  **LOAD** / **RUN** / **CALL** / **PERFORM** / **SAVE** **Directives**  
---|---  
1\. **PREFIX FILE** , if set; replaces pathname then continues sequence |  1\. **PREFIX FILE** , if set; replaces pathname then continues sequence  
|  2\. Program Cache  
2\. Current Directory; if '**CD'** system parameter is set |  3\. Current Directory; if '**CD'** system parameter is set  
3\. **PREFIX** 0 to 9 |  4\. **PREFIX PROGRAM** if set  
4\. **PREFIX PROGRAM** , if set |  5\. **PREFIX** 0 to 9  
5\. Current Directory; if '**CD'** system parameter _not_ set |  6\. Current Directory; if '**CD'** system parameter  _not_ set  
  
The **PREFIX** search rules apply not only to files being found but also to files being created. PxPlus creates files in the first location that is permitted by the **PREFIX** rules. If the **['CD'](../parameters/cd.md)** system parameter (Check Current Directory) is **_On_** , then all files are created in the current directory (the first permitted location). If the **'CD'** system parameter is **_Off_** , then PxPlus creates the file in the first location permitted by the search rules above. Windows search rules are used to find DLLs (i.e. not **PREFIX** search rules or current directory).

Use the **[ENABLE](enable.md)** and **[DISABLE](disable.md)** directives to control which of the numbered prefixes PxPlus will use in the search. (While scanning prefixes 0 to 9, PxPlus ignores any prefix that is disabled.)

Note that the initial check for **PROGRAM** cache checks for a match against the original filenames; thus, if you used CALL"ABCD" and you had previously loaded a program with the same name, PxPlus would use the one in cache. This eliminates the directory searches involved; however, if you have duplicate program names in your system, it is possible to get the wrong one (i.e. if you CALL"ABCD", change the directory/prefix, then re-CALL"ABCD"). If this happens for duplicate program names in your system, either clear the cache or do not use it.

##  Equals Signs for Matching

Equals signs in a **PREFIX** search string have special meaning. Each character of the filename that corresponds by position to an _equals sign_ will be used to form a subdirectory name to be used in the search. For example, if you include one _equals sign_ , PxPlus will interpret that to mean that the first character of _filename_ $ is also the subdirectory name. If you include two _equals_ _signs_ , it will take the first two characters as matching the subdirectory name, and so on.

PxPlus automatically finds the location to retrieve or create files by looking first for a subdirectory with a name matching, character by character, in sequence, the portion of the filename that corresponds to the _equals_ _signs_. This allows you to sort files into subdirectories based on automated substitution of the first few characters of your filename and accelerates the search for and/or creation and saving of files in subdirectories.

**_Example:_**

> prefix (4)"C:\MYAPP\==\ ...

If a directory entry in a **PREFIX** contains _equals signs_ as in the above example, PxPlus evaluates the initial two characters as matching characters and uses them as the name of the subdirectory where the search will commence for relative file references. In the following example, PxPlus evaluates the filename "arhist" as "c:\myapp\ar\arhist" for purposes of the initial search:

> prefix "C:\MYAPP\==\"  
>  open (1)"ARHIST"

##  Asterisks as PREFIX Wildcards

You can also use ***** and ****** as wildcard characters to support the use of filename extensions without modifying your code. This feature was added to the PxPlus language as of version 4.20 primarily for Windows 2000 users since the Microsoft Certification rules for Windows 2000 required that all files have file extensions. With the wildcard characters, you can rename files on disk with a common file extension without modifying the program code.

**_Using a Single Asterisk (*)_**

If the **PREFIX** directive includes an _asterisk_ plus a specified extension as a filename, PxPlus inserts the filename from your **OPEN** command in place of the _asterisk_ and searches first for the filename with the extension you specify in the prefix.

**_Example:_**

> prefix "c:\somedir\\*.PRG"  
>  open (chan)"FOOFOO"

PxPlus will scan the disk for "c:\somedir\FOOFOO.PRG" and open that file if found. If "FOOFOO.PRG" is not found, PxPlus will attempt to find and open a file named "FOOFOO".

**_Using Two Asterisks (**)_**

If the **PREFIX** directive includes two _asterisks_ plus a specified extension as a filename, the substitution described above for a single _asterisk_ will occur only if your **OPEN** directive includes a simple filename (i.e. a filename without an extension). If your filename is complex (e.g. MYFILE.DAT), no substitution occurs.

**_Example:_**

> prefix "c:\somedir\\**.PRG"  
>  open (chan)"FOOFOO"  
>  open (nahc)"MYFILE.DAT"

Since "open (chan)"FOOFOO" contains a simple filename, PxPlus will look first for "c:\somedir\FOOFOO.PRG", then if not found, for "FOOFOO". Since "MYFILE.DAT" is a complex filename and two asterisks are used in the **PREFIX** filename, PxPlus does not add a ".PRG" extension to "MYFILE.DAT" when it executes the search to find and open the file.

##  Format 5

**_Virtual Directories_**

**PREFIX DIRECTORY** _dirpfx_ _$_ =_dirpath_ _$_

The **PREFIX DIRECTORY** format is used to define virtual directories within your PxPlus system. When the system is parsing pathnames, it will compare the pathname specified by the program with all the virtual directory names specified in the **PREFIX DIRECTORY** directive. If a match is found, the system will replace the directory name with the value specified in _dirpath_ _$_.

To delete a virtual directory entry, set _dirpath_ _$_ to a null string.

**_Example:_**

Suppose you issued the following directive:

> prefix directory "*usr"="/user/mike"

Any reference to "*usr/" would reference the directory "/user/mike"; therefore, accessing a file "*usr/tempdata" would actually reference "/user/mike/tempdata".

If desired, the _dirpfx_ _$_ may consist of "*/**_name..._** ", in which case any pathname that ends with **_name..._** will be replaced with the value in _dirpath_ _$_.__(This option was added in PxPlus 8.30, build 9190.)

#### **Note:**  
If the directory specified in _dirpath_ _$_ does not exist, the system will create it upon first reference.

##  See Also

**PxPlus Search Rules**  
**Equals Signs for Matching****  
** **Asterisks as PREFIX Wildcards**  
**[Using the PREFIX Directive](../PxPlus%20User%20Guide/File%20Handling/Prefix%20Processing/Overview.md)**
