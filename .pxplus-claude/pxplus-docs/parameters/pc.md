# System Parameters

**'PC'=** |  **_Program Caching_**  
---|---  
  
##  Description

Defines the maximum number of programs to remain in program cache. For **'PC'=**_nnn_ , PxPlus will maintain the last _nnn_ programs (subprograms) in memory, thus reducing the time required to reload them.

Any changes to the **'PC'** setting will cause the cache to be flushed and all programs to be reloaded from disk and flushes the object cache. (as of PxPlus v11.50)

Use the following to reset cached programs so that changes on disk are reloaded:

> SET_PARAM 'PC'=PRM('PC') 

#### **Note:**  
PxPlus does **_not_** check the network for program changes because if it did, there would be little, if any, performance improvement using program cache. Since the program cache setting is local to the machine, any changes to the "disk file" will not be reflected across the network until the user initiates a new session, changes the **'PC'** setting, or saves the program locally.

##  Default

**'PC'=0** (_No programs in cache)_
