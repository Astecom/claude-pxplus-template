# PxPlus System Programs and Files

***QUERY.DEF** |  **_Query Definition and Maintenance Program_**  
---|---  
  
The ***QUERY.DEF** utility program is called by the Help subsystem to create or modify 'standard' query definitions. Standard queries present a series of items from the records of a specified file. The definition utility allows the programmer to define the file name, fields to display and their format.

The query definition must include the following:

**Query Title** |  Title line for the query window.  
---|---  
**Query File** |  Name of the keyed file to be presented.  
**Query Key No.** |  Key number of the keyed file to be used. This will determine the order of the records to be displayed.  
**Query Flds** |  There can be up to nine fields displayed within a query. Each field must define the field within a record of the file to display, the offset within the field, the length of the field, a format specifier, a return indicator, and title. Valid format specifiers are: |  0 - 9 |  Number of decimal points  
---|---  
D |  Date format 99/99/99  
$ |  Currency display $#,##0.00  
  
All fields with the return indicator set to "Y" are returned to the program, which invoked the Query. Each field is placed into the input queue, one field at a time.
