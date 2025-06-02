# Customizing PxPlus

**START_UP Initialization Program** |  **__**  
---|---  
  
The START_UP initialization program allows for the preloading of variables and/or files, the setting of various PxPlus system parameters, and the implementation of a security system. During the initialization process for an application, PxPlus executes the system start-up program ***start.up** , which, in turn, calls the user-developed program **START_UP** , if it exists.

START_UP must be physically located in the _Start-In_ (_HWD)_ directory for it to be read during initialization. If it is not defined (in the correct directory), no initialization will be performed; however, an initialization program other than START_UP can be assigned using **[PVXSTART](Environment%20Variables.htm#Mark13)**.

Some typical uses of a START_UP program include:

  * Setting system parameters
  * Opening global files
  * Defining global variables/functions
  * Setting **PREFIX**
  * Assigning FID value



**_Example:_**

Below is a sample START_UP program:

> 0010 ! Sample START_UP program   
>  0020 PREFIX "PROG/ DATA/"   
>  0030 ERROR_HANDLER "*ERROR"   
>  0040 ADDR "DATCHK"   
>  0050 SET_PARAM 'SZ'=400,'CE','PC'=10   
>  0060 LET %CUSTDB = GFN; OPEN (%CUSTDB) "CUSTDB"   
>  0070 END

## %NOMADS Object

The START_UP program can be used to instantiate the %NOMADS object. The *obj/nomads (%NOMADS) object was created to hold NOMADS and iNomads-based parameters and settings. Its purpose was to use property settings to replace the global variables prefixed with %NOMAD_ or %NOMADS_ that had generally been used to control the behaviour of different aspects of the NOMADS environment.

The following example contains some sample lines from a START_UP program using the %obj/nomads class:

> **X=NEW("*obj/nomads") !Instantiate the %NOMADS object**  
>  %NOMADS'VISUAL_OVERRIDE=4  
>  %NOMADS'CHART$="plus"  
>  %NOMADS'QRY_BTN$="{!16X16/Buttons/Help}"  
>  %NOMADS'QRY_WIDE=3

> This is the same as:

> %NOMAD_VISUAL_OVERRIDE=4  
>  %NOMAD_CHART$="plus"  
>  %NOMAD_QRY_ BTN$="{!16X16/Buttons/Help}"  
>  %NOMAD_QRY_WIDE=3

See **[%NOMADS Properties](../../NOMADS%20Graphical%20Application/Appendix/NOMADS%20Variables/Overview.htm#properties)** for information on the *obj/nomads class and a list of available %NOMADS properties.

If the **[NOMADS Environment Maintenance](../../NOMADS%20Graphical%20Application/Maintain%20Nomads%20Environment.md)** utility was used to set the values for any %NOMADS properties, those settings will automatically be applied each time the %NOMADS object is instantiated.

If instantiation of the %NOMADS object is done within the START_UP program, any property values that have been set using the **NOMADS Environment Maintenance** utility will be applied automatically on START_UP. Following that, a property value may still be subject to change if the START_UP contains subsequent lines to set a %NOMADS variable.

If instantiation is **_not_** done within the START_UP program, then the property values will be applied **_after_** the START_UP program has been executed.

## Running Applications from Initialization

Once the initialization program has completed execution, PxPlus will load and run a _lead program,_ if specified on the command line. The **[LPG](../../variables/lpg.md)** system variable can be used to determine the name of the lead program.

#### **Note:**  
The initialization procedure should **_not_** execute the application directly.

Attempting to run an application within START_UP causes PxPlus to incorrectly report application errors. PxPlus internally does a CALL "START_UP" when initializing PxPlus. Doing a RUN _within_ the initialization procedure will prevent START_UP from terminating and will not let the initialization process conclude. It also causes PxPlus programs to run 1 level deeper than normal.

This also affects the use of the WindX thin-client to connect via *NTHOST/*NTSLAVE or the Application Server, as well as spawning processes via *WINDX.UTL;SPAWN or *SERVER;SPAWN.

For information on START_UP Initialization issues, see **[Troubleshooting](../Troubleshooting/START_UP%20Initialization%20Failure.md)**.
