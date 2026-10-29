# Directives 

**KEYED LOAD** |  **_Load and Repair Keyed File_**  
---|---  
  
##  Format

**KEYED LOAD** (_chan,_[**KNO=**_num_ | _name$_])  
    
**_Where:_** 

_chan_ |  Channel or logical file number of the file to be read/repaired.  
---|---  
_name$_ |  Name of the key (if assigned) to load. String expression.  
_num_ |  Number of the key to load. Integer >= 0.  
  
##  Description

This directive is used to rebuild the key tables of a file that is currently open on a channel. **KEYED LOAD (**_chan_**)** rebuilds all key trees. To rebuild a specific key chain, use the file access key value **KNO=**_num  _| _name$_. **KEYED LOAD** will identify duplicate primary or unique keys.

The file does not have to be locked for **KEYED LOAD** to work. **KEYED LOAD** rebuilds the key chains within the file without using more disk space, while the file is in use, and while the file is being updated by others. **KEYED LOAD** is much faster than ***UFAR** in repairing key trees. 

However, it performs much faster if the file is locked, and if there is sufficient ram available for its key block buffering operations. In addition, **KEYED LOAD** will update the number of records for fixed length files if the file is locked.

Once the **KEYED LOAD** command is completed, **TCB(67)** will be set to one of the following values:

**TCB(67)** |  **Contents**  
---|---  
**> = 0** |  Number returned indicates the number of keys reloaded.  
**-1** |  A value of -1 indicates that a different number of keys were encountered on different key chains. This may or may not indicate that the file being reloaded has physical damage that **KEYED LOAD** is unable to correct. The file can be reloaded on the fly while others are adding records; therefore, the number of keys on a given key chain may have changed while **KEYED LOAD** was working.  
  
If using PxPlus and reloading all keys on a VLR keyed file, the system will physically walk through all pages within the file to assure that their page headers are correct. Any invalid page header will be cleared and put back into the free space. This helps assure the integrity of the output file, guarantees recovery of lost space, and ultimately speeds up processing.

#### **Note:**  
**KEYED LOAD** reports invalid file type when used on Sort files. **KEYED LOAD** and will not operate on files opened in read-only mode.

_(The enhanced reload algorithm was added in PxPlus v8.11.)_

##  Recovering Damaged Files

One of the best and fastest ways to recover a damaged file is to use the **KEYED LOAD** directive. It removes the existing key tables for a file and then reads through the file, physically rebuilding the key tables based on the records it finds.

If the file is VLR (Variable Length Record), the records are all kept in pages/blocks. Therefore, the system reads each block from the file, validates that it looks correct (block header intact, record offsets valid, etc.), and if a data block, processes all the records found. If a block has been overwritten or cannot physically be read, then the records that existed on that block are lost (after all, the data is not on the disc anymore), and the file should be recovered from a backup.

EFF (Enhanced File Format) files are similar; however, the system has to use the file inventory to make sure that it uses the "Active" data pages instead of "Old/Shadow" data pages. Other than this, the logic is much the same as VLR.

For FLR files (Fixed Length Records), the process is quite a bit different because the records are not stored in pages whose integrity can be verified. In this case, the file is read record by record, and each record is checked to see if the record length (and any external key) makes sense relative to the file description. If so, the system assumes the data found is a valid record.

Because FLR does not employ a record blocking mechanism, there is more potential for having garbage data (or old key blocks) misinterpreted as data records.

When the **KEYED LOAD** ends normally, the value in **TCB(67)** is a sanity check. Basically, if not -1, then we were able to read all the data blocks from a file. In the case of FLR files with multiple keys, it does attempt to validate that the number of records found when processing each of the key trees match.

If the **KEYED LOAD** fails with an error, the file generally cannot be recovered since there are defective areas (blocks) within the file.

If **TCB(67)** is not -1, then the record count on each of the key trees matched; thus, generally the file is fine. If the value is -1, then there was a mismatch; however, if you had NULL key suppression, the -1 is not meaningful.

Regardless of the value in **TCB(67)** , for VLR and EFF files, it is unlikely that any other process could retrieve the data due to the nature of the file design. For FLR files, it may be possible to write a program to better examine the records and determine the record validity - this is where ***UFAR** and its "assumptions" may be useful.

Another VLR file recover program is available at <https://www.pvxplus.com/downloads/misc/fixvlr2>. This program can be used to copy the data out of a corrupted data file into a new file (it also supports multi-segmented files). It reads the file physically and copies any records it finds into the output file. In many cases, this process is faster than ***UFAR** and can handle data files with major problems, including the loss of file header information.

The data dictionary is not preserved and should be reloaded using the [**Data Dictionary**](../Data%20Dictionary/Data%20Dictionary%20Maintenance/Overview.md) utility.

## Example

open (1)"datafile.dat"  
keyed load (1)  
Done - loaded key number 0 with 263 keys  
Done - loaded key number 1 with 263 keys  
Done - loaded key number 2 with 263 keys  
Done - loaded key number 3 with 263 keys  
Done - loaded key number 4 with 263 keys  
Done - loaded key number 5 with 263 keys

 

 

 
