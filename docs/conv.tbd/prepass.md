# Toolkit for Conversion from Thoroughbred

**Prepass Program Conversions**|   
---|---  
  
To facilitate the conversion of programs, the PxPlus conversion utilities include a prepass that can be used to make most common changes to you application code.

The prepass itself is controlled by two files:

|  **_prepass.sys_** |  This file contains the system supplied prepass rules that have been found to work on all Thoroughbred programs.  
---|---|---  
|  **_prepass.usr_** |  This file can be tailored by the user to perform custom prepass conversions based on their specific application needs.  
  
## File Format

The format of the conversion lines is:

> _oldval_ _- >newval  
> oldvar=>newvar_

**_Where:_**

|  _oldval_ _/var_ |  The text that will be scanned for   
---|---|---  
|  newval/var |  The value that will be inserted instead  
  
If the separator is **- >**, the replacement is a simple pure text replacement; that is, all occurrences of _oldval_ will become _newval_.

If the separator is **= >**, the replacement will only replace a variable whose name is _oldvar_ with _newvar_. The convertor assures the value is a variable by testing the characters before and after the value to make sure it is one of the following: 

> **" ; : , + / - * ^ ( ) [ ] = "**

To allow for function name recognition, if the last character is one of the above, then the value will be considered a variable.

In addition, when replacing variables, the number of quotes preceding the value **_must_** be even thus assuring that the text does not appear in a string.

The Variable assignment **(= >)** can also be used for logical statements or other such replacements where the contents is not part of a longer text, thus in many cases, it is preferable over **- >**.

A line starting with an _exclamation mark_ ("!") is considered a comment line and is ignored by the _prepass_ processor.

## Current System prepass.sys

The following is a Feb. 2006 listing of _prepass.sys_ :

> 'CN'=>'C1'  
>  'CO'=>'C0'  
>  !  
> ! Escape On/Off  
>  ESCON=>SETESC ENABLE  
>  ESCOFF=>SETESC DISABLE  
>  !  
> ! INF Functions  
>  !  
> INF(3,2)=>WHO  
>  INF(4,=>ENV(  
>  !  
>  ! Tbred functions/Variables provided in Function.def  
>  !  
>  CPP(=>FN%CPP$(  
>  FST(=>FN%FST$(  
>  NEA(=>FN%NEA(  
>  DTN(=>FN%DTN(  
>  NTD(=>FN%NTD$(  
>  NMV(=>FN%NMV(  
>  CDS(=>FN%CDS(  
>  XFD(=>FN%XFD$(  
>  !  
> STL(=>LEN(  
>  !  
>  CDS=>FN%CDS$  
>  CDN=>FN%CDN  
>  !  
> ! WIN Functions  
>  !  
>  !WIN(GET SCREEN)=>FN%WIN$("GET SCREEN")  
>  !WIN(GET TEXT)=>FN%WIN$("GET TEXT")  
>  WIN(GET CURSOR)=>$00$+MID(FIB(0),85,1)+$00$+MID(FIB(0),86,1)  
>  !WIN(GET LIST)=>FN%WIN$("GET LIST")  
>  !  
>  ! Date string loaded in Function.def  
>  !  
>  DATESTRINGS=>%DATE_STRING$  
>  !  
>  INPUT EDT=>INPUT EDIT  
>  DROP ALL=>CALL "*conv.tbd/utils;drop_all"  
>  !  
>  DELETE 00001,65534->DELETE 00001,65000

Thoroughbred is a registered trademark of Thoroughbred Software International, Inc.
