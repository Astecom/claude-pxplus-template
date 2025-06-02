# Directives 

**KEYED LOAD** |  **_Load and Repair Keyed File_**  
---|---  
  
##  Format

**KEYED LOAD** (_chan_ _,_[**KNO=**_num_ | _name$_])  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file to be read/repaired.  
---|---  
_name$_ |  Name of the key (if assigned) to load. String expression.  
_num_ |  Number of the key to load. Integer >= 0.  
  
##  Description

This directive is used to rebuild the key tables of a file that is currently open on a channel. **KEYED LOAD (**_chan_**)** rebuilds all key trees. To rebuild a specific key chain, use the file access key value **KNO=**_num_ __ | _name$_. **KEYED LOAD** will identify duplicate primary or unique keys.

The file does not have to be locked for **KEYED LOAD** to work. **KEYED LOAD** rebuilds the key chains within the file without using more disk space, while the file is in use, and while the file is being updated by others. **KEYED LOAD** is much faster than ***UFAR** in repairing key trees. 

However, it performs much faster if the file is locked, and if there is sufficient ram available for its key block buffering operations. In addition, **KEYED LOAD** will update the number of records for fixed length files if the file is locked.

Once the **KEYED LOAD** command is completed, **TCB(67)** will be set to one of the following values:

**TCB(67)** |  **Contents**  
---|---  
**> = 0** |  Number returned indicates the number of keys reloaded.  
**-1** |  A value of -1 indicates that a different number of keys were encountered on different key chains. This may or may not indicate that the file being re-loaded has physical damage that **KEYED LOAD** is unable to correct; i.e. the file can be reloaded on the fly while others are adding records and therefore the number of keys on a given key chain may have changed while **KEYED LOAD** was working.  
  
If using PxPlus and reloading all keys on a VLR keyed file, the system will physically walk through all pages within the file to assure that their page headers are correct. Any invalid page header will be cleared and put back into the free space. This helps assure the integrity of the output file, guarantees recovery of lost space, and ultimately speeds up processing.

#### **Note:**  
**KEYED LOAD** reports invalid file type when used on Sort files. **KEYED LOAD** and will not operate on files opened in read-only mode.

_(The enhanced reload algorithm was added in PxPlus v8.11.)_

##  Example

open (1)"datafile.dat"  
keyed load (1)  
Done - loaded key number 0 with 263 keys  
Done - loaded key number 1 with 263 keys  
Done - loaded key number 2 with 263 keys  
Done - loaded key number 3 with 263 keys  
Done - loaded key number 4 with 263 keys  
Done - loaded key number 5 with 263 keys
