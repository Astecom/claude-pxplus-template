# Utility Routines  
  
***TOOLS/HOSTTEST** |  **_Test *plus/cs/spawn Interface_**  
---|---  
  
## Invocation

**CALL "*tools/hosttest"**

## Description

This utility will test your system to confirm that WindX can spawn a subordinate task using the **[*plus/cs/spawn](../simplecs/clienthost.htm#spawn)** (*plus/spawn) utility. When using WindX, it can be run to confirm your setup or to assist in analyzing what might be wrong should you find you are having trouble with the spawn logic.

It runs the following tests:

  * Format and contents of the **%PXPLUS_HOST$** global variable
    * Valid Host name and Port number provided
  * Access to spawning queue management file (***plus/cs/queue**)
  * Server provided and Port can be accessed by the WindX workstation
  * Spawn of known test program works



_(The HostTest utility was added in PxPlus 2022.)_

## See Also

**[WindX™ Thin-Client](../windx.md)**
