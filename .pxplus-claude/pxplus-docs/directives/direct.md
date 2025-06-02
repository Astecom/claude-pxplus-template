# Directives

**DIRECT** |  **_Create File with Keyed Access_**  
---|---  
  
##  Format

**DIRECT** _filename$_ ,_max_ __len_[,_max_recs_[,_rec_size_]][,**ERR=**_stmtref_]  
  
**_Where:_**

_filename$_ |  **_(Required)_** Filename of the Direct (Keyed) file. String expression.  
---|---  
_max_len_ |  **_(Required)_** Maximum length of the key for all records in the file. Numeric expression, integer.  
_max_recs_ |  Maximum number of records in the file. Optional numeric expression. The default is 0 (no limit). (Use a _comma_ with no value to set the default.) If a positive value is supplied, PxPlus creates and pre-allocates disk space for the file. With a negative value, PxPlus allocates sufficient disk space for the file but will set the _max_recs_ count back to 0 (unlimited).  
_rec_size_ |  Maximum size of the data portion of each record (excluding the key). Optional. Numeric expression. You can use: |  |  _No Value_ |  Default is VLR with maximum size of 256  
---|---|---  
|  _Positive Integer_ |  FLR of size specified  
|  _Negative Integer_ |  VLR with maximum length specified  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

Use the **DIRECT** directive to create a Direct file with an external key field. PxPlus considers a Direct file to be the same as a Keyed file with an external key. If you use a filename that already exists, PxPlus returns an Error #12: File does not exist (or already exists). The maximum size of the key to the file is mandatory along with the filename. The file type can be controlled by setting the **['KF'=](../parameters/kf.md)** system parameter.

You can limit the number of records by specifying a maximum (an integer other than 0). If you do attempt to set a maximum, then attempt to exceed this value (e.g. on a **WRITE** statement), an Error #2 is generated. You can use 0 to create a dynamic file, limited by physical file size limits and the amount of available drive space.

If you include the maximum data length, it must be long enough to hold the combined length of all the data fields and field separators for each record written to the file.

#### **Note:  
** WindX in PxPlus supports the use of this directive via the [WDX] or [LCL] tags; e.g. DIRECT "[WDX]somefile.ext". Non-PxPlus versions require you to encapsulate the command in an EXECUTE directive with a [WDX] tag (i.e. EXECUTE "[WDX]..."). See [**[WDX] Direct Action to Client Machine**](../command_tags/wdx.htm) or **[[LCL] Access to Users Local Machine](../command_tags/lcl.htm)**.

##  See Also

**[CREATE TABLE Create Keyed File (EFF)](create_table.md)**  
**[KEYED Create Single/Multi-Keyed File](keyed.md)**

##  Example

0110 direct A$+"-"+B$,10,100,50,err=1090  
0200 direct "CSTFLE",6,0,-128

Line 0200 creates a file with the following structure:

|  Keyed file: C:\MANUALS\PVX\CST\CSTFLE  
  
  
---|---  
|  Maximum Record Size: |  128 (variable)  
|  Maximum # Records: |  (No limit)  
|  Current # Records: |  0  
|  Size of Key Block: |  2048 bytes  
|  External Key Size: |  6
