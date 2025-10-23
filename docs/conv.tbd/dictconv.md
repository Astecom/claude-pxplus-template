# Toolkit for Conversion from Thoroughbred

**Data Dictionary Conversion**|   
---|---  
  
The conversion of a Thoroughbred data dictionary is a two-step process:

  * The _first_ step extracts the dictionary definitions to a flat text file.
  * The _second_ step reads the text file and loads the data definitions into the PxPlus data dictionary.



The data dictionary conversion process and conversion programs are GETIDDBD and GENDICT respectively.

## Step 1: Extract the LINK/FORMAT Definitions

Launch Thoroughbred, load and run the program GETIDDBD, which is found in the _*conv.tbd_ directory. It will prompt you for the name of the library to process. An output file, _tbddict.txt_ , will be created.

This program will then read the IDDBD file to determine the "LINKs" to convert and output the related file and format information for each.

## Step 2: Load PxPlus Dictionary

To complete the conversion of the dictionary, launch PxPlus, then load and run the program **"*conv.tbd/gendict"**. It will prompt you for the name of output file generated in Step 1. This program will read the data dictionary definitions extracted in the first stage and create the PxPlus data dictionary

The Link Name, in the Thoroughbred, will be used as the data dictionary Table Name. The Library, in the Thoroughbred, will be used as the Group for the Table.

#### **Note:**  
Before starting Step 2, you will need to make sure that the output data dictionary exists. This can be done by launching PxPlus and running **"*nomads"**. Select _Dictionary_ and then _Maintenance_ from the menus. This will create the required dictionary files _providex.ddf_ and _providex.dde_.

Thoroughbred is a registered trademark of Thoroughbred Software International, Inc.
