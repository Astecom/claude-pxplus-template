# 

**PxPlus System Programs and Files** |  **__**  
---|---  
  
The links below provide information on the programs used by PxPlus to handle hot keys and built-in Help and Query facilities. Normally, application programs should **_not_** call these routines; however, they have been included as part of the Help documentation to provide application designers with a better understanding of how the system internals operate.

**Program/File** |  **Description**  
---|---  
**[ACTIVATE.PVX](System%20Activation%20Information/Overview.md)** |  File that contains the internal activation information for your version of PxPlus.  
**[*CONTROL](Hot-Key%20Intercept%20Program/Overview.md)** |  Hot-key intercept utility program that is invoked internally by the PxPlus executive whenever a terminal input encounters a CTL value between -1 and -999.  
**[*DEV](Device%20Drivers/Overview.md)** |  Device drivers.  
**[*ERROR](Generic%20Error%20Handler/Overview.md)** |  Intended to serve primarily as a sample error handling program.  
**[*KYBRD.CFG and *KYBRD.STD](Keyboard%20Definition%20Files/Overview.md)** |  Two keyed files that contain the keyboard command sequences and their respective CTL values.  
**[*LEXTBL and *LEXDEF](PxPlus%20LEX%20Definition%20Tables/Overview.md)** |  ***LEXTBL** file contains an internal format image of the syntax tables used by the PxPlus compiler and lister components. ***LEXDEF** file contains the same information but in a conventional keyed file format to be used by the utility ***LEXEDIT**.  
**[*MLFILE](Message%20Library/Overview.md)** |  File that contains all the textual elements of the PxPlus executive, including a list of data validation messages. _(Data validation messages 180 through 193 were added in PxPlus 2019.)_  
**[*PRMDEF](Parameter%20Definitions/Overview.md)** |  Used by the system utility program *UCP to maintain the descriptions and the valid ranges for the system parameters.  
**[*QUERY](On-Line%20Query%20Processor/Overview.md)** |  'Standard' query processor that uses the information created by **'*QUERY.DEF'** to create and display a query.  
**[*QUERY.DEF](Query%20Definition%20and%20Maintenance%20Program/Overview.md)** |  Utility program called by the Help subsystem to create or modify 'standard' query definitions.  
**[*START_UP](System%20Start_Up/Overview.md)** |  General system start-up program that is always executed during PxPlus initialization or after a **[START](../directives/start.md)** directive.  
**[*TTY](Load%20Keyboard%20Definitions/Overview.md)** |  Used by most terminal device drivers to load the keyboard control sequences for the terminal.  
  
The following files have a two- or three-character language code as part of the file name:

> *LEXTBL.EN/*LEXDEF.EN

> *MLFILE.EN

> *PRMDEF.EN

This language code is taken from the system environment variable LANG. If undefined, the value of EN (for English) will be used.
