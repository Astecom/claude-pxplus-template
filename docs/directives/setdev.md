# Directives 

**SETDEV** |  **_Set File/Device Characteristics_**  
---|---  
  
The **SETDEV** directive has a variety of formats that allow for the dynamic definition of file characteristics and for the definition of the system TSK tables.

##  Formats

Use the links below to access additional information for a **_specific_** format:

**Format** |  **Description**  
---|---  
[**SETDEV (**_chan_**) IOL=**_iolref_ _$_](setdev_iol.md) |  Use the **SETDEV IOL=** directive to alter the various IOLists associated with a currently open channel.  
[**SETDEV (**_chan_**) KEY:**_numexpr,strexpr_](setdev_key.md) |  Use the **SETDEV KEY** directive to either assign or alter named keys for an open channel.  
[**SETDEV (**_chan_**)**_lcs_devtype_ _$_](setdev_name.md) |  Use the **SETDEV** directive to make dynamic changes in the value of the **DEVICE TYPE** field maintained for device files.  
[**SETDEV (**_chan1_**) MERGE WITH (**_chan2_**)**](setdev_merge.md) |  Use the **SETDEV MERGE WITH** directive to transfer all TCP sockets associated with one channel (chan2) to another (chan1). _(The SETDEV MERGE WITH directive was added in PxPlus v10.20.)_  
[**SETDEV (**_chan_**) PROGRAM** _"prog_name"_](setdev_program.md) |  Use the **SETDEV PROGRAM** directive to define an Embedded I/O program, which will be attached to an open channel if the file does not already have one associated with it.  
[**SETDEV (**_chan_**)SEP=**_char$_](setdev_sep.md) |  Use this form of the **SETDEV** directive to dynamically change the field separator for a file.  
[**SETDEV (**_chan_**)SET** _option$_**TO** _value$_](setdev_set.md) |  Use this form of the **SETDEV** directive to dynamically change various file options. _(The SETDEV SET directive was added in PxPlus v11.00.)_  
[**SETDEV TSK( )**_task$_](setdev_tsk.md) |  Use the **SETDEV TSK( )** directive to add a string to the end of the internal table for the **TSK( )** function.
