# Troubleshooting

**START_UP Initialization Failure** |  **__**  
---|---  
  
If the initialization fails, consider the following reasons that START_UP may not be executing correctly:

  * START_UP does not exist in the directory from which the application launches PxPlus. Prior to executing a **[PREFIX](../../directives/prefix.md)** directive, PxPlus does not know where to search for any program or file, aside from the current directory.
  * START_UP has incorrect file permissions (primarily in UNIX).
  * START_UP is not a valid program file. The START_UP file is not a PxPlus program or a recognizable Serial program.
  * The environment variable PVXSTART is set, but points to an invalid program.
  * The START_UP file name is not completely uppercase on a UNIX machine. PxPlus will be unable to locate the start_up routine if the name is not completely in capitals; i.e., START_UP.
  * START_UP stops executing prematurely due to an untrapped error.


