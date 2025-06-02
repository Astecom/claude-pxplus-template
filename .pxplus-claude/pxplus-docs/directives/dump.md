# Directives 

**DUMP** |  **_Display Variables_**  
---|---  
  
##  Formats

1. |  _Display Variables:_ |  **DUMP[ (**_chan_**) ] { * |** **OBJECT**  _obj_id_ __**|**  _level_**| GOTO}**  
---|---|---  
2. |  _Hide Variables:_ |  **DUMP DISABLE** **[**_variable_**|**_pattern_**]** **[** , **[**_variable_**|**_pattern_**]** , ...**]**  
  
**_Where:_**

* |  If using the _asterisk_ as an argument, all levels are dumped.  
---|---  
_chan_ |  Channel or logical file number of the file to receive the dump/output of all variables in use by the current program.  
_level_ |  Program level to dump (current level dumped if omitted). If the value is negative, it is considered the relative number based on the current level (i.e. -1 will dump the level that called the current program).  
_variable_ |  Can be either a string or numeric variable that you do not want to be displayed during a **DUMP** operation. This can be used to hide sensitive information such as passwords and encryption keys.  
_pattern_ |  A string which contains a pattern that matches the variable(s) to be disabled. The variable name it is matched against does not include the **$** (_dollar sign_) at the end for string variables. The ***** (_asterisk_) wildcard can be used anywhere in the string and will match any character zero to many times. The **?** (_question_ _mark_) wildcard can be used anywhere in the string and will match any character one time. See **[Example 5](dump.htm#Mark5)**.  
  
_( Support to allow a pattern to be specified was added in PxPlus 2025.)_  
**_Jump History:_**  
GOTO |  Keyword to request a dump of the jump history queue.  
**_Object Oriented Programming (OOP):_**  
OBJECT |  Keyword to request a dump of an active object.  
_obj_id_ |  Object identifier of the object.  
  
##  Description

Use the **DUMP** directive to get a listing of all variables in use by the current program/object. The output is sent to the specified file number. If you omit the file number, the console, file (0), is the default.

The output includes the value of the system variable **ERR** , the current program name, line number, the **FOR** /**NEXT-GOSUB** /**RETURN** stack, and all variables.

The **DUMP DISABLE** directive is used if you do not want a variable to be displayed during a **DUMP** operation.

_(The DUMP OBJECT directive was added in PxPlus v7.00.)  
(The DUMP GOTO directive was added in PxPlus v10.10.)  
(The DUMP DISABLE directive was added in PxPlus 2023.)_

##  Examples

**_Example 1_** \- The following illustrates the use of **DUMP** for listing variables in a program:

dump  
! ERR=0, CTL=0, RET=2  
! Level=1  
! PGN="C:\OTHER\PGMS\PVX\PVX_TESTS"  
A$=$000000$+"T0 "+$0F0000000000000000$+"*"+$0100000700$+"CON"+$0000$+"P"+$190100000000$+"P"+$190000$+"P"+$19000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000$+"WINDOWS"  
CUST$="<*> IOLIST NAME$,ADR1$,ADR2$"  
CUST.ADR1$="123 SOME ST."  
CUST.ADR2$="ANYTOWN SK S0M 0V0"  
CUST.NAME$="M MOUSE"  
DT$="04/01/99"  
F$="abcd"  
R$="ab"  
X$="M MOUSE"+sep+"123 SOME ST."+sep+"ANYTOWN SK S0M 0V0"+sep  
%NORM_SCR$=esc+"F7"+esc+"B4"  
%ST_ATTR$=$000007$  
%W_MSG$=esc+"F0"+esc+"B6"

**_Example 2_** \- The following illustrates the use of **DUMP OBJECT** :

dump object 100015  
! Dump of OBJECT information  
_Obj=100015  
_Class$="*rpt/RptSort"  
_Refcnt=1  
! External Properties  
Order$="A"  
Length=6  
Type$="S"  
SegmentName$="AccountID"

**_Example 3_** \- The following illustrates the use of **DUMP GOTO** :

->set_param 'TJ'=100  
->run "**"  
->dump goto  
---  
From |  Dir |  To |  Loops |  Err |  From |  To  
      
    
    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  
      
    
    00050

| 
    
    
    ENTER

| 
    
    
    08000

| 
    
    
     

| 
    
    
    36

| 
    
    
    C:\pxplus\lib\__

| 
    
    
       
      
    
    08060

| 
    
    
    GOTO

| 
    
    
    00100

| 
    
    
     

| 
    
    
     

| 
    
    
    C:\pxplus\lib\__

| 
    
    
       
      
    
    00130

| 
    
    
    GOSUB

| 
    
    
    05000

| 
    
    
     

| 
    
    
     

| 
    
    
    C:\pxplus\lib\__

| 
    
    
       
      
    
    05150

| 
    
    
    ON

| 
    
    
    05230

| 
    
    
     

| 
    
    
     

| 
    
    
    C:\pxplus\lib\__

| 
    
    
       
      
    
    05260

| 
    
    
    GOTO

| 
    
    
    05400

| 
    
    
     

| 
    
    
     

| 
    
    
    C:\pxplus\lib\__

| 
    
    
       
      
    
    05420

| 
    
    
    EXITTO

| 
    
    
    09000

| 
    
    
     

| 
    
    
     

| 
    
    
    C:\pxplus\lib\__

| 
    
    
       
  
**_Example 4_** \- The following illustrates the use of **DUMP DISABLE** to hide the password property from the dump:

def class "user"  
property name$  
local password$  
function checkPassword(checkPassword$)checkPassword  
end def  
!  
on_create:  
enter name$,password$  
dump disable password$  
password$=hsh(password$,512)  
return  
!  
checkPassword:  
enter checkPassword$  
if hsh(checkPassword$,512)=password$ \  
then return 1  
return 0

**_Example 5_** The following illustrates the use of **DUMP DISABLE** to specify a pattern, and if a variable name matches, it will be disabled from a dump:

%param_a$="a"  
%param_b=1  
c_ignore$="c"  
d_ignore=1  
myvar=1  
DUMP DISABLE "%param_*","?_ignore"  
DUMP  
! ERR=0, CTL=0, RET=13  
! **********************************************************  
! Level=1  
! PGN="<Unsaved>"  
myvar=1

_(Example 5 was added in PxPlus 2025.)_
