# Data Dictionary

**Converting Other Formats** |  **__**  
---|---  
  
Data conversion can be one of the most lengthy and difficult procedures involved in the migration of any database. While there are tools available for importing the different applications and files into PxPlus, there are no generic utilities for converting the formatted data to the PxPlus data dictionary. Each external/legacy database system requires a unique transfer strategy for converting and verifying the integrity of its data.

This page describes the procedures for mapping the old format to a new PxPlus data dictionary and then for embedding the newly created definitions into their corresponding data files.

## Mapping the Data

Create and load the new PxPlus data dictionary files (providex.ddf and providex.dde). Data sources must be represented in the new definition (table) in a way that accurately matches the original layout. This involves mapping the contents of the original files to the appropriate fields in a new definition, including all **General File Information** and **Data Elements**.

This process can be achieved manually for each data file via the NOMADS **[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)** interface. However, if a conversion is going to involve many different data files with several elements in each, it might be more practical to write a program that automatically generates the new data dictionary definitions.

## Embedding New Definitions

Once the new definitions (tables) are created in the data dictionary, they can be embedded into their corresponding data files one at a time. This task can be achieved manually via the NOMADS **[Data Dictionary Maintenance](../Data%20Dictionary%20Maintenance/Overview.md)** interface, or it can also be automated by writing a program that calls a routine for embedding the definitions:

> ***dict/dd_updt;Update_Physical**

For information on the syntax for using this routine, see **[Automating the Embedded (Physical) Definition](../Data%20Dictionary%20Maintenance/Updating%20the%20Data%20Dictionary.htm#autoembedded)**.

If you plan to make changes to the original file layout or attributes during the conversion, do it **_after_** the definition has been embedded into the file.
