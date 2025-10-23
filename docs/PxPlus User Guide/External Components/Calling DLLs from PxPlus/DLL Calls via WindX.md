# Calling DLLs from PxPlus

**DLL Calls via WindX** |  **__**  
---|---  
  
Be aware of the following issues when accessing DLLs from within WindX:

  * Know where to find the data - _Is it on the client or the server?_
  * Do not pass pointers to data if they exist on a server to a DLL call that is being handled by a WindX workstation.
  * DLLs on a WindX workstation cannot access a memory location on the server.
  * It is often best to encapsulate DLL work into a single program that can be called from the server via the **[[WDX]](../../../command_tags/wdx.htm)** command tag; e.g. CALL "[WDX]...


