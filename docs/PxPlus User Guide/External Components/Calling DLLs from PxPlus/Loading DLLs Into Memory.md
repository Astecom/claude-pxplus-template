# Calling DLLs from PxPlus

**Loading DLLs into Memory** |  **__**  
---|---  
  
Typically, a DLL would be loaded and unloaded for each use; however, when multiple calls are required to complete an operation, then that DLL should be loaded into memory for the duration. This also speeds up DLL calls considerably.

The following provides an example of a **_single-use DLL_**. It sends a message (number 1047) to a PxPlus Window, and then PxPlus internally traps a 1047 and exits.

> x=DLL("User32.dll","SendMessageA",Handle,1047,0,0)

When **_multiple DLL_** calls are expected, then the **[ADDR](../../../directives/addr.md)** directive can be used to load the specified executable into memory. The example below shows a Windows Registry operation where the DLL call involves placing the DLL into memory (via**ADDR)**. To perform such an operation, the DLL requires a handle to the registry. That handle can then be used in subsequent DLL calls for specific operations. Failure to return a handle would be considered a "resource leak".

> ! Read the Windows registry for a Key\SubKey\Name and   
>  ! return its current Value and Type of Value if you want it   
>  !   
> function GetRegistryValue(RegKey%,RegSubKey$,Name$,Value$,ValueType%)   
>  enter (RegKey%),(RegSubKey$),(Name$),Value$,ValueType%   
>  if not(IsWin32) \   
>  then return 0   
>  if RegKey%>=0 \   
>  then RegKey%+=dec($80000000$)   
> RegSubKey$=sub(RegSubKey$,$00$,"")   
>  Name$=sub(Name$,$00$,"")   
>  Value$=""   
> ValueType%=0   
>  if mid(RegSubKey$,1,1)="\" \   
>  then RegSubKey$=RegSubKey$(2)   
>  if mid(RegSubKey$,-1)="\" \   
>  then RegSubKey$=RegSubKey$(1,len(RegSubKey$)-1)   
> RegSubKey$+=$00$   
>  Name$+=$00$   
> SecurityMask%=9 ! KEY_QUERY_VALUE | KEY_ENUMERATE_SUB_KEYS   
>  dim KeyHnd$(4)   
> DllHnd=dll(addr "advapi32.dll",err=*proceed)   
>  if DllHnd=0 \   
>  then return 0   
>  if dll(DllHnd,"RegOpenKeyExA",RegKey%,RegSubKey$,0,SecurityMask%,KeyHnd$) \   
>  then result=dll(drop DllHnd,err=*proceed);   
>  return 0   
> KeyHnd%=dec(swp(KeyHnd$))   
>  dim DataValueType$(4,$00$)   
>  dim DataValue$(256,$00$)   
> DataValueLength$=swp(bin(len(DataValue$),4))   
>  error=dll(DllHnd,"RegQueryValueExA",KeyHnd%,Name$,0,DataValueType$,DataValue$,DataValueLength$)   
>  if not(error) then \   
>  { ValueType%=dec(swp(DataValueType$))   
>  switch ValueType%   
>  case 1,2,7   
>  Value$=DataValue$(1,dec(swp(DataValueLength$))-1)   
>  break   
>  case 4,5,11   
>  Value$=swp(DataValue$(1,dec(swp(DataValueLength$))))   
>  break default   
>  Value$=DataValue$(1,dec(swp(DataValueLength$)))   
>  break   
>  end switch   
>  success=1   
>  }   
>  result=dll(DllHnd,"RegCloseKey",KeyHnd%)   
>  result=dll(drop DllHnd,err=*proceed)   
>  return success 

#### **Note:**  
DLLs not placed into memory are considered single use only. Attempting the above operation without an**ADDR** would result in most of the DLL calls failing.
