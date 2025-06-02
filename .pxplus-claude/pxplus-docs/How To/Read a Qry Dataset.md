# How to Use PxPlus Query Definitions in Non-NOMADS Environments

**Read a Query Dataset**|   
---|---  
  
The **[*QUERY*](../file_handling/~query~.md)** interface allows a NOMADS query to be used to define the contents of a logical file for use by an application program. It allows the program to access the contents of a query as if it was a standard read-only file. If the query accesses multiple related files, you only have to open and read one *QUERY* file to return selected data from all of them.

To open the contents of a query, specify the file name *QUERY* followed by the panel and library name for the query you wish to access, separated by **;** (_semi-colons_).

**_Example:_**

> OPEN (1)"*QUERY*;qClient;panels.en"

When opened, the system will process the query definition and return the contents of the query in the channel number specified as a memory file with an embedded IOLIST based on the selected columns.

There are several file parameter options available to set up keys, and different ways to handle duplicate keys and bad data.

**_Example:_**

> This example reads data based on the qClient query, using KNO=1 of the main file and using sequence numbers added to the key since this key has duplicates.

After opening the file, it lists the embedded IOLIST to show the columns being returned. This is not a necessary step but is done here to show the columns from the query definition.

It then reads a record and prints the contents of the record based on the column names.
