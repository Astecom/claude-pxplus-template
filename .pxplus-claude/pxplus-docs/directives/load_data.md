# Directives

**LOAD DATA** |  **_Load Program Constants_**  
---|---  
  
##  Format

**LOAD DATA** _filename$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_filename_ |  Name of a variable definition file in which to store constant.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

This directive loads into memory the contents of a variable definition file (created via the **[SAVE DATA](save_data.md)** directive). These variables are read only, and any attempt to change them will result in an Error #61: Authorization failure. Global variables are not supported.

##  See Also

**[SAVE DATA Save Program Constants](save_data.md)**

##  Example

COMPANY$="ABC Company"  
DIVISION$="Laundry Division"  
COMPANY_CODE=1  
save data "CO_DATA",COMPANY$,DIVISION$,COMPANY_CODE  
  
start  
  
load data "CO_DATA"  
  
dump  
! ERR=0, CTL=0, RET=2  
! Level=1  
! PGN="<Unsaved>"  
! Loaded data....CO_DATA (C:\data\CO_DATA)  
COMPANY$="ABC Company"  
DIVISION$="Laundry Division"  
COMPANY_CODE=1  
  
COMPANY_CODE=2  
Error #61: Authorization failure
