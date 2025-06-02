# Processing Data Files

**File Processing Functions** |  **__**  
---|---  
  
There are twelve file processing functions - all expect a file number as first argument.

**[FIB( )](../../../functions/fib.md)** |  Same as**FID( )** but always returns PxPlus native format.  
---|---  
**[FID( )](../../../functions/fid.md)** |  Returns a description of characteristics of the file specified; returns 1 of 5 formats depending on the **['FF'](../../../parameters/ff.md)** parameter.  
**[FIN( )](../../../functions/fin.md)** |  Returns detailed physical aspects of the file specified.  
**[IND( )](../../../functions/ind.md)** |  Returns an index of the next record in the file. Generates an error at the end of file.  
**[KEC( )](../../../functions/kec.md)** |  Returns a key of the current (last read/written) record.Generates an error at the start of file.  
**[KEF( )](../../../functions/kef.md)** |  Returns the key of first record on the file. Generates an error if no records exist.  
**[KEL( )](../../../functions/kel.md)** |  Returns the key of the last record on the file. Generates an error if no records exist.  
**[KEN( )](../../../functions/ken.md)** |  Returns the key of the record after the next record to be read.  
**[KEP( )](../../../functions/kep.md)** |  Returns the key of the previous record - keyed files only. Generates an error at the start of file.  
**[KEY( )](../../../functions/key.md)** |  Returns the key of the next record. Generates an error at the end of file.  
**[RCD( )](../../../functions/rcd.md)** |  Returns contents of a record - equivalent to**READ RECORD**. See **[Processing Records](Processing%20Records.md)**.  
**[RNO( )](../../../functions/rno.md)** |  Returns the record number of a specified record in key sequence.  
  
See **[System Functions](../../../functions.md)** for a complete list of system functions.
