# Directives

**SAVE DATA** |  **_Save Program Constants_**  
---|---  
  
##  Format

**SAVE DATA** _filename$_[,**ERR=**_stmtref_], _varlist_  
  
**_Where:_**

_filename_ |  Name of a variable definition file in which to store constant.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_varlist_ |  List of variables.  
  
##  Description

This directive creates a variable definition file on disk that contains the names and values of variables named in _varlist_. These variables and their values can then be loaded into memory using the **LOAD DATA** directive. Variables loaded in this way are read only (constants). Global variables are **_not_** supported.

To change the values of variables in a variable definition file, you must repeat the **SAVE DATA** process. When a variable definition file is resaved, the original contents are replaced.

##  See Also

**[LOAD DATA Load Program Constants](load_data.md)**

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
