# Processing Data Files

**Accessing Files** |  **__**  
---|---  
  
## Direct File Access

PxPlus includes an option called _Direct File Access_ , which eliminates the need for programmers to explicitly OPEN/CLOSE files. _(as of PxPlus v9.00)_

This allows programmers to specify the path name of the file they want to access (as opposed to its channel number) on an IO command directive or function. The system will automatically open the file (if not already open) and use the channel on which it was opened.

**_Examples:_**

The following example shows using the **[READ](../../../directives/read.md)** directive to access the contents of the file "arcust" by key. The **[WRITE](../../../directives/write.md)**, **[REMOVE](../../../directives/remove.md)**, **[EXTRACT](../../../directives/extract.md)**, **[UPDATE](../../../directives/update.md)**, **[LOCK](../../../directives/lock.md)**, **[UNLOCK](../../../directives/unlock.md)** and **[PURGE](../../../directives/purge.md)** directives can also be used.

> READ ("arcust",key="000555")   
>  dump   
>  ! ERR=0, CTL=0, RET=2   
>  ! **********************************************************   
>  ! Level=1   
>  ! PGN="<Unsaved>"   
>  AMT_OWING=11.43   
>  ADDR1$="8450 Buga-Buga Drive"   
>  CITY$="Unionville"   
>  CUST_NO$="000555"   
>  NAME$="Mike was here"   
>  SALESPERSON$="WL"

The system file IO functions, such as the **[FIN](../../../functions/fin.md)** function shown below, can use file names as well.

> PRINT FIN("dealers","KEY_DEFINITION")   
>  ["Primary":1:1:30:"C"],["ByCompany":17:1:8],["ByName":3:1:30]+[4:1:30]

## File Open Rules

When opening the file, the system will apply the standard Prefix rules as applied on an OPEN. The value of HFN (highest unopened file number) will be used to determine the file number. The system variable **[LFO](../../../variables/lfo.md)** will be set to the file number used if a file is required.

The file will remain open until specifically closed using CLOSE ("..."), CLOSE (file_number), or a BEGIN is issued. The file will be left open after the directive so that subsequent IOs to the same file will use the same opened channel. This will allow a Read Next to process the file as long there are no intervening IO requests to the same file name.

The maximum number of concurrent files that will be opened dynamically is controlled by the **[F+](../../../parameters/fplus.md)** system parameter. By default, this parameter is set to 50, which limits the number of concurrent opens to 50. If this limit is reached, the oldest file accessed will automatically be closed by the system.

## Open Options

When a file is open (as a result of direct reference) and it contains an embedded data dictionary, the dictionary will be applied to the channel (i.e. the OPEN will be done as if IOL=* was specified).

Should the directive/function that is accessing the file have a REC= clause, it will **_not_** be applied to the OPEN. Dynamic OPENs will not be tied to an object but rather are accessible to the complete session.

## File Name Matching

When accessing the same file, care should be taken to ensure that the file names match. The system uses the exact spelling of the file names to determine if the file is already open.

Case sensitivity is applied based on the operating system:

  * Windows is **_not_** case sensitive.
  * UNIX/Linux is case sensitive.



#### **Note:**  
When accessing any file whose path starts with '*', the path is considered to be in the system library (_\Lib_). All the '*' in the path will be changed to '_', and all the cases will be converted to lowercase. If an absolute path is given (e.g. C:/temp), then nothing will be converted.
