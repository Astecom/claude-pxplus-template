# Historical File Splitting  
  
**Embedded IO Methods**|   
---|---  
  
This table lists the embedded IO methods used with the Historical File Splitting utility:

**Method** |  **Description**  
---|---  
**POST_OPEN(*)** |  This function is invoked immediately following the OPEN of the file and is passed the original pathname specified, the file channel number and the actual full pathname for the file.  
**PRE_CLOSE(*)** |  Called just before the file closed. Should close all associated data files.  
**PRE_READ(*)** |  Called before the file is read and will need to perform the actual READ request on the appropriate file.  
**PRE_WRITE(*)** |  Called before the file will be written to and will output/update the record onto the proper data file. Before issuing the actual write, any UNIQUE keys will be validated against the associated data files.  
**PRE_REMOVE(*)** |  Called just before the record should be removed from the file. If the record exists in the 'active' file, it will be removed; otherwise, a file access error will be generated.  
**PRE_PURGE(*)** |  If **_only_** the 'active' file is defined, the 'active' file will be cleared; otherwise, an error will be generated.  
**KEF(*) / KEL(*)** |  Called to return the first/last key on the file. This routine will return the lowest/highest key on all associated files.  
**KEC(*)** |  Called to return the current key. Will return the current key on the last file accessed by a READ/WRITE/REMOVE.  
**KEY(*) / KEP(*)** |  Called to return the next/prior key on the file. This routine will need to determine what would be the next/prior logical key for all the associated files.  
**FIN(*,"NUMREC")** |  This specific FIN function will return the sum of the number of records on all associated files.  
  
#### **Note:  
** All the embedded IO methods will have the standard embedded IO parameter list.
