# Defining the Data 

**Sort Sequence** |  **__**  
---|---  
  
After selecting the **[Input Data Source](Input%20Source.md)**, select _Sort Sequence_ from the Report Designer _Data_ menu to invoke the **Sort Order** window.

The default for PxPlus files and Views is to sort via primary key. For Query input, the default is the sort key specified in the **[Query](../../../NOMADS%20Graphical%20Application/Dictionary-Based%20Development/Query%20Subsystem/Query%20Header.htm#keyinfo)** definition.

_(The ability to select a query definition as an input source was added in PxPlus 2020.)_

## Defining the Sort Sequence

The sort sequence can be defined in two ways: _Pre-defined Sort_ and _Custom Sort_. Each of these sort types is explained below.

_Pre-defined Sort_ |  Select _Pre-defined Sort_ to sort the data based on one of the file's internal key structures (i.e. built-in key).  
---|---  
_Custom Sort_ |  Create a _Custom Sort_ sequence. When defining a _Custom Sort_ , you may specify two sorting sequences. The first is the **_Input_** sort, which specifies how the data is to be extracted from the data source. Input sorts are based on the data source's built-in keys. By default, data is read using the primary key; however, if **[Static Filters](Data%20Filters.htm#static)** are being applied to the data, it improves performance if the filters can be mapped to one of the built-in keys. **_Example:_**  
  
If report filters specify a division number and location ID, then the built-in keys will be analyzed to see if there is one starting with these fields. If so, then a minimum/maximum key range can be established to reduce the number of records read. The _Auto_ setting analyzes the keys to determine an optimum key choice; however, there may be instances where a different key would be a better choice. In this scenario, you may specify which input key to use. The second sorting sequence is for the report itself; that is, how the data is to be sequenced on the report. A custom report sort sequence can be comprised of up to 16 table elements in ascending or descending order. Custom sort elements can also be defined as case insensitive to ensure that upper and lowercase letters are sorted together.  
  
#### **Note:**  
Pre-defined sort sequences are generally processed faster than Custom sort sequences. If it is advantageous to read and organize the data using different sort sequences, however, a Custom sort could be faster.

The grouping of data to be used in the report is a major consideration when determining a sort sequence. For example, if the data is to be grouped by department, and then by each manager within the department, the sort sequence must be by department first, then by manager.

If you create groupings based on your sort selection but decide to change the sort later, the Report Designer will attempt to remap the groupings to the new sequence. You can choose to make the changes, clear the current groupings, or cancel the new sort order.
