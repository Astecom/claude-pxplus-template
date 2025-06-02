# Processing Data Files

**Accessing Directory Files** |  **__**  
---|---  
  
Directory files represent the operating system's directory tables that are used to maintain the list of files present in the system. PxPlus provides read access to these. When a directory file is opened, the records read from it contain the names of the files contained within the directory. The names are not returned in any specific order. The sequence of the entries within a directory is controlled by the operating system.

Use the**INPUT** keyword in an **[OPEN](../../../directives/open.htm#Mark11)** statement to access a disk directory:

> 0010 OPEN INPUT (1) LWD ! Open current directory   
>  0020 READ (1,END=1000) FL_NAME$ ! Get file name   
>  0030 PRINT FL_NAME$ ! Display file name   
>  0040 GOTO 0020   
>  1000 CLOSE (1)   
>  1010 END

#### **Note:**  
PxPlus does not allow the user to write to a directory file and will otherwise report an Error #13: File access mode invalid.

Normally, when reading a directory, PxPlus will return each of the file and sub-directory names in the directory. If the **['SD'](../../../parameters/sd.md)** system parameter is enabled, sub-directories names will be returned with a trailing directory delimiter (slash).

## Special Directory Processing

If using PxPlus and the programmer specifies OPT="+INFO" on the OPEN of a directory, the system will return six fields:

  * File name
  * File type ("F" for file, "D" for directory)
  * File size in bytes
  * Date created
  * Date last modified
  * Date last accessed



All dates will be returned in the form YYYY-MM-DD hh:mm:ss.
