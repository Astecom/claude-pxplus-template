# Directives 

**DICTIONARY** |  **_Data Dictionary Access_**  
---|---  
  
#### **Restricted!**  
**Use of the DICTIONARY directive is reserved exclusively for PVX Plus Technologies' data dictionary utilities.** Its use is beyond the scope of this document, and its syntax is provided on this page for completeness only.

##  Formats

1. |  _Read:_ |  **DICTIONARY READ (**_chan_ ,_fileopt_**)**_varlist_  
---|---|---  
2. |  _Write:_ |  **DICTIONARY WRITE (**_chan_ ,_fileopt_**)**_varlist_  
3. |  _Write Record:_ |  **DICTIONARY WRITE RECORD** **(**_chan,fileopt_**)**_varlist_  
4. |  _Remove_ : |  **DICTIONARY REMOVE (**_chan_ ,_fileopt_**)**  
  
**_Where:_**

_chan_ |  Channel or logical file number of file containing the data dictionary to access.  
---|---  
_fileopt_ |  File options. Supported options for **DICTIONARY** include: |  **DOM=**_stmtref_ |  Missing record transfer  
---|---  
**END=**_stmtref_ |  End-of-File transfer  
**ERR=**_stmtref_ |  Error transfer  
**IND=**_num_ |  Field number |  <0 |  For external key  
---|---  
>0 |  For internal fields  
=0 |  File information record  
_varlist_ |  Comma**-** separated list of variables and/or literals.  
  
##  Description

The **DICTIONARY** directive allows the system utilities to access and maintain the internal PxPlus data dictionary portions of the PxPlus databases. It is primarily used within various data dictionary programs to maintain the dictionary information on the files.

The **DICTIONARY WRITE RECORD** format is used to write a complete dictionary record to a file as opposed to writing multiple fields.
