# System Parameters

**'WT'=** |  **_Number of Retries_**  
---|---  
  
##  Description

Assigns the number of retries PxPlus makes internally for busy records/files. The retries are performed at one-second intervals.

When an Error# 0 occurs, the system will use the retry count to determine the number of times to internally execute a WAIT 1 and then retry the instruction.

If **'WT'** is 0 (or the IO directive specifies RTY=0), no retries occur and the Error# 0 is reported immediately.

##  Default

**'WT'=2** __(Retry for 2 seconds)
