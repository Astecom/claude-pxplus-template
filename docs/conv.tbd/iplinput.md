# Toolkit for Conversion from Thoroughbred

**IPLINPUT and TERMINAL File Conversion**|   
---|---  
  
The IPLINPUT and optional TERMINAL files are used in Thoroughbred to control your application configuration. These two configuration files can be processed by the program _"*conv.tbd/iplinput"_ to simplify the conversion process.

This program serves two purposes: the _first_ (its primary role) is to read an IPLINPUT file and TERMINAL file to establish a working environment for your application, and the _second_ is to read an IPLINPUT and create 'Link' files for the various printers that are defined.

## Environment Setup

If you want to continue to maintain some of your configuration options in the IPLINPUT and TERMINAL files, you can add a call to _"*conv.tbd/iplinput"_ in your system START_UP. Calling this procedure will load your PREFIX value, ERROR_HANDLER and establish your terminals FID value.

**_Calling Sequence:_**

> **CALL** "*conv.tbd/iplinput", "IPLINPUT", "TERMINAL"

The first parameter supplies the name (pathname) of the IPLINPUT file to be processed. If left blank, then no IPLINPUT processing will be done, thus the PREFIX or ERROR_HANDLER will not be altered.

The second parameter supplies the name (pathname) of the TERMINAL file used to control the assignment of FIDs. If left blank, then no FID assignment will be done by this program.

#### **Note:**  
To speed up processing where the IPLINPUT rarely changes, it may be desirable to run the environment setup once then directly code the resultant ERROR_HANDLER and PREFIX into your START_UP program. It may also be preferable to use a different mechanism to establish the FID of the terminal as opposed to using the TERMINAL file. Many applications use the user identification as opposed to the workstation ID for this purpose.

## Creating Link Files

The _"*conv.tbd/iplinput"_ program has a secondary entry point "Makelinks" which can be called to read an IPLINPUT and create link files automatically for all printers in the system.

In PxPlus, the relationship between logical printer names and physical printers can be accomplished using a link file. A link file is simply a file, which contains the true printer pathname and the name of the device driver for the printer. 

**_Example:_**

You might have a printer defined in your IPLINPUT called "LP" which maps to _/dev/lp1_. In the system, you would create a file called LP, which would contain a linkage definition pointing to _/dev/lp1_ and the name of the printer driver to use (normally _std_prtr_).

The _"*conv.tbd/iplinput;MakeLinks"_ entry point will process an IPLINPUT file and create link files based on the printer configuration found.

**_Calling Sequence:_**

> **CALL** "*conv.tbd/iplinput;Makelinks", "IPLINPUT"

The first parameter supplies the name (pathname) of the IPLINPUT file to be processed. Generally, this program only needs to be run once during the conversion process.

Thoroughbred is a registered trademark of Thoroughbred Software International, Inc.
