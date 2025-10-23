# File Handling

**Prefix Processing** |  **__**  
---|---  
  
The **[PREFIX](../../../directives/prefix.md)** directive allows you to specify up to 10 different prefix strings to be inserted automatically in front of all file name references:

> **PREFIX** [_search_string_ _$_]

The prefixes are provided as a string to the **PREFIX** directive using a blank as a separator character:

> 0010 PREFIX "DATA/ PROGS/"  
>  0020 OPEN (1) "ARDATA"

ARDATA would be searched for first as DATA/ARDATA , then PROGS/ARDATA , then as ARDATA. The first occurrence of a file found with the name specified would be used.

The **PREFIX** directive causes all file creation directives to search for the file using these prefixes before considering the file as currently non-existent and proceeding with the creation. If the file cannot be created in the first directory (permissions denied or no such directory), it will try to create the file in the next directory.

The system variable **[PFX](../../../variables/pfx.md)** and function **[PFX( )](../../../functions/pfx.md)** will return the current setting of the **PREFIX** directive and can be used to extend the **PREFIX** search rules:

> 0010 PREFIX "TESTDATA/ "+PFX

For syntax details, see **[PREFIX](../../../directives/prefix.md)** directive.

The use of prefixes should be limited to just one or two at most, with the first entries being the most likely entries to return the file desired. Since PxPlus will try to open the file using each prefix until the request is satisfied, much time and I/O overhead will be wasted if a long list of prefixes is used.

## Program Prefix

A special prefix may be defined within PxPlus specifically for use when accessing programs. Using a program prefix can increase system performance by reducing the time it takes to locate and load a program. This prefix is defined as follows:

> **PREFIX PROGRAM** [_search_string_ _$_]

Once a program prefix is defined, it will be the first prefix used for all **[LOAD](../../../directives/load.md)**, **[RUN](../../../directives/run.md)**, **[CALL](../../../directives/call.md)**, **[PERFORM](../../../directives/perform.md)**, **[PROGRAM](../../../directives/program.md)** and **[SAVE](../../../directives/save.md)** directives. After the program prefix has been searched, any other prefixes will be checked. All other file accesses will search the other prefixes first, then the program prefix. The current setting of a program prefix may be obtained via the **[PFX(PGN)](../../../functions/pfx.md)** function.

## Dynamic Prefix Assignment

In many systems, the file names are standardized; i.e., the leading 2 or 3 characters indicate the sub-system or application to which the program/file belongs.

**_Example:_**

> 'ARHIST' or 'ARINFO' might belong to the **_Accounts Receivable_** subsystem.

The **[PREFIX](../../../directives/prefix.md)** directive allows for the automatic separation of these files based on the first characters. Substituting the **=**  _equals sign_ character in the **PREFIX** directive causes PxPlus to take the first character of the file name. Each character of the file name that corresponds by position to an equals sign will be used to form a subdirectory name to be used in the search.

For instance, if you include 1 equals sign, PxPlus will interpret that to mean that the first character of _filename_ $ is also the sub-directory name. If you include 2 equals signs, it will take the first 2 characters as matching the subdirectory name, and so on.

PxPlus automatically finds the location to retrieve or create files by looking first for a subdirectory with a name matching, character-for-character, the portion of the file name that corresponds to the equals signs. This allows you to sort files into subdirectories based on automated substitution of the first few characters of your file name.

**_Example:_**

> 0010 PREFIX "==/"   
>    
>  0100 OPEN (1) "ARDATA"   
>  0110 OPEN (2) "CSTDTA"   
>    
>  0300 RUN "ARPOST"

The following searches would be performed:

|  **_File:_** |  **_1 st Search:_** |  **_2 nd Search:_**  
---|---|---|---  
|  ARDATA |  AR/ARDATA |  ARDATA  
|  CSTDTA |  CS/CSTDTA |  CSTDTA  
|  ARPOST |  AR/ARPOST |  ARPOST  
  
## Asterisk Wildcards

You can also use *****  _asterisk_ and ******  _double asterisk_ as wildcard characters to support the use of file name extensions without modifying your code. With the wildcard characters, you can rename files on disk with a common file extension without modifying the program code.

**_Using_** _***** **Single Asterisk**_

If the **[PREFIX](../../../directives/prefix.md)** directive includes a single **_*_**_asterisk_ plus a specified extension as a file name, PxPlus inserts the file name from your **OPEN** command in place of the _asterisk_ and searches for the file name with the added prefix:

> PREFIX "c:\somedir\\*.PRG"   
> OPEN(chan)"FOOFOO"

In the example above, PxPlus scans the disk for "c:\somedir\FOOFOO.PRG" and opens that file if found. If FOOFOO.PRG is not found, PxPlus attempts to find and open a file named "FOOFOO" . If the file name in the **OPEN** command already includes an extension, no substitution will occur:

> PREFIX "c:\somedir\\*.PRG"   
> OPEN(nahc)"MyFile.Dat"

In this case, PxPlus does not add the .PRG extension when it executes the search to find and open MyFile.Dat.

**_Using_** _****** **Double Asterisk**_

If the **[PREFIX](../../../directives/prefix.md)** directive includes two ******  _asterisks_ plus a specified extension, PxPlus inserts the file name from your **OPEN** command in place of the _asterisks_ and searches first for the file name with the extension specified in the prefix:

> PREFIX "c:\somedir\\**.PRG"   
> OPEN(chan)"FOOFOO"

In the example above, PxPlus scans the disk for "c:\somedir\FOOFOO.PRG" and opens that file if found. If FOOFOO.PRG is not found, PxPlus attempts to find and open a file named "FOOFOO".

If the file name in the **OPEN** command already includes an extension, PxPlus adds the additional extension specified by the **PREFIX** directive when it searches for the file name:

> PREFIX "c:\somedir\\**.PRG"   
> OPEN(chan)"FOOFOO.PRG"

In this case, PxPlus scans for "c:\somedir\FOOFOO.PRG.PRG". However, if FOOFOO.PRG.PRG is not found, PxPlus attempts to find and open a file named "FOOFOO.PRG".

## Prefix File

You can use the prefix file to do dynamic translations of file names using a **Keyed** file as a lookup table. The prefix file consists of a file name (which is the key) and a data portion that contains two fields (the path to the file and the options field used in the **OPT=** clause in **OPEN**). Prefix files must be variable length.

The following example creates the prefix file:

> KEYED "PVX_PFXF",15

The following sets search rules using the prefix file:

> PREFIX FILE "PVX_PFXF"

##  PxPlus Search Rules

The PxPlus default is to search all prefixes in the following order:

**OPEN Directive** |  **LOAD** /**RUN** /**CALL** /**PERFORM** /**SAVE Directives**  
---|---  
1\. **PREFIX FILE,** if set; replaces pathname then continues sequence 2\. Current Directory; if **['CD'](../../../parameters/cd.md)** system parameter is set 3\. **PREFIX** 0 to 9 4\. **PREFIX PROGRAM,** if set 5\. Current Directory; if **['CD'](../../../parameters/cd.md)** system parameter _not_ set |  1\. **PREFIX FILE,** if set; replaces pathname then continues sequence 2\. Program Cache 3\. Current Directory; if **['CD'](../../../parameters/cd.md)** system parameter is set 4\. **PREFIX PROGRAM** , if set 5\. **PREFIX** 0 to 9 6\. Current Directory; if **['CD'](../../../parameters/cd.md)** system parameter _not_ set  
  
The**PREFIX** search rules apply not only to files being found but also to files being created. PxPlus creates files in the first location that is permitted by the**PREFIX** rules. If **'CD'** (_Search Current Directory_) is on, then all files are created in the current directory (the first permitted location). If the **'CD'** system parameter is off, then PxPlus creates the file in the first location permitted by the search rules above.

For syntax details, see **'[CD](../../../parameters/cd.md)'** parameter.

Windows search rules are used to find DLLs (i.e. not**PREFIX** search rules or current directory).

Use the**ENABLE** and**DISABLE** directives to control which of the numbered prefixes PxPlus will use in the search. (While scanning prefixes 0 to 9, PxPlus ignores any prefix that is disabled.)

The initial check for**PROGRAM** cache checks for a match against the original file names. If you used CALL "ABCD" and you had previously loaded a program with the same name, PxPlus would use the one in cache. This eliminates the directory searches involved, but if you have duplicate program names in your system, it is possible to get the wrong one; i.e., if you CALL "ABCD", change the directory/prefix, then re- CALL "ABCD". If this happens for duplicate program names in your system, either clear the cache or do not use it.

For syntax details, see **[DISABLE](../../../directives/disable.md)** and **[ENABLE](../../../directives/enable.md)** directives.
