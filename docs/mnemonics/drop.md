# Mnemonics

**'DROP' or 'WD'** |  **_Drop Identified Window_**  
---|---  
  
**GUI Display _or_ Character Display**

##  Format

_Long or short form:_**'DROP'**_or_**'WD'**  
**  
'DROP'(**_wdw_id_**)**  
  
** _Where_ _:_**

_wdw_id_ |  Window's unique ID number (0 - 255).  
---|---  
  
##  Description

Use either **'DROP'** or **'WD'** in the format to drop the identified window. If this window does not exist or is the only window, PxPlus returns an Error #57: No such window defined. If _wdw_id_**=-1** , all windows except the primary window are dropped.

##  Example

30400 let WW_ADD=hwn(0)  
30410 print %W_MSG$,'window'(20,8,40,8,WW_ADD,"Deleting Sku"),'CS','SB',  
30420 let DEL_SKU$=FROM_SKU$,SAVE_KEY$=COMP$+FORM$  
30430 !  
30440 let ADD_SKU$=TO_SKU$  
30460 gosub DELETE_ITEM  
30470 read (E855FENT_H,key=SAVE_KEY$)iol=0310  
30480 print 'wg'(W_ADD),'wd'(WW_ADD),%NORM_SCR$,
