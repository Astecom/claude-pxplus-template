# Query Subsystem

**Query File Link**|   
---|---  
  
**Query File Link** allows additional data to be retrieved from associated cross-reference data files or database tables. For example, if the Customer data file contains a classification code, but the associated class description has to be retrieved from a ClassInfo data file, you can define the ClassInfo file as a link file using the classification code from the Customer data file as its key.

To invoke the **Query File Link** window, click the _Add Link_ button on the **[Query Definition](Query%20Definition.md)** toolbar to define a new link.

To modify or remove an existing link, highlight the link file in the **File Elements** list and then select either the _Update Link_ button or the _Remove Link_ button on the **Query Definition** toolbar.

> The **Query File Link** window displays a list of all currently defined links, if any, for the selected query. Link definitions can be added, modified or removed.

A link definition consists of the following:

_(Select a Link Definition)_ |  Click this button (in the first column) to access the **Select a File Link Definition** window for choosing an existing file link definition. The selected definition is loaded into the list and can be adjusted if desired. (File link definitions are defined in **[File Link Maintenance](../../../Data%20Dictionary/File%20Link%20Maintenance.md)**.) Alternatively, you can select the **Pre-Defined File Links** button in the bottom left corner.  
---|---  
_Expr_ |  Select this check box if the entry for _Link To File/Table_ is an expression.  
_Link To File/Table_ |  Name of the link file/table. This can be defined as a fixed value or an expression (see _Expr_ above), which is entered or selected from the drop-down list of existing files/tables. **_For PxPlus Data Files_** You can select your file from a list of files defined in the NOMADS **[Data Dictionary](../../../Data%20Dictionary/Introduction.md)**, enter the name of a **[PxPlus View](../../../Views%20System/Introduction.md)**, or enter the name of a physical file path or prefix file reference. **_For External Database Files_** Your selection **_must_** be a table. If the query's main file is a prefix file reference to an external table, then you can use prefix file references instead.  
_Access Key_ |  Key to be used to read a link file. Select a key from the drop-down list.  
_Key Expression_ |  PxPlus expression consisting of field(s) from the main file (or other link files) and literals to build the key value to read the link file. A key expression may be string or numeric. **_Examples:_** TRN_CUSTID$ "D"+FLD#2$(1,3) PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum) KEY(__fileFN,KNO=0,KEY=Company$:Department$:EmployeeNum) **_Multi-Segment Keys_** When dealing with multi-segmented keys (i.e. keys made up of more than one field), you can use a **+**  _(plus sign)_ to concatenate multiple string segments of a key when entering a free-form expression. Be sure to add the correct padding logic to the initial key segments. By default, the initial segments of native PxPlus keys are padded with $00$ characters, and the final segment is not padded. Such a key definition might look like this: PAD(Company$,5,$00$)+PAD(Department$,10,$00$)+STR(EmployeeNum) Individual applications can pad key segments with other characters, such as spaces; therefore, knowledge of the key architecture of individual files is a **_must_**. Knowledge of segment characteristics is not necessary; however, if the key expression uses the **KEY(__linkFN,KNO=_n_ ,KEY=FLD1$:FLD2$)** format where **__linkFN** is a special channel variable used by the system when evaluating the key, **_n_** is the key number used by the file, and **FLD1$:FLD2$** are the key segment variables. The latter format is also more flexible as it can handle changes in key segment length if keys are updated for a file. In addition, this format allows a mixture of string and numeric segments. **_Key Expression Builder_** An easy way to build a key expression is to use the key builder utility. This is invoked by clicking the dotted button in the cell associated with this option. The key expression is built by specifying key segments to match the target key definition. These segments can consist of fields from the parent file, literal values and variables. Partial items can be defined, and segments can be padded, have characters stripped, or be converted to upper/lower case. In the case of **_multi-segment keys_** , a _Generate a KEY=F1$:F2$ expression_ check box option is available: |  |  If it is not selected, the key segments will be concatenated, and individual key segments would have to be padded or manipulated appropriately.  
---|---  
|  If it is selected, then a key expression in the format **KEY(__linkFN,KNO=_n_ ,KEY=FLD1$:FLD2$)** will be generated where the segments need not be manipulated. (For an explanation of the contents of the generated key, see **[Multi-Segment Keys](Query%20Definition.htm#multiseg_keys)**.)  
  
Simple numeric keys can be built using a numeric field. Multi-segment numeric keys should be built using the _Generate a KEY=F1$:F2$ expression_ option.

_(The Generate a KEY=F1$:F2$ expression check box was added in PxPlus 2023.)  
__(Support for numeric key definitions when defining query links was added in PxPlus 2023 Update 1.)_  
  
_Record Prefix_ |  Prefix to affix to field names to identify the file to which they belong. **_Example:_** If the CUSTOMER file is given a Record Prefix of CST, then the ID and NAME elements of the CUSTOMER file would be identified as CST.ID$ and CST.NAME$.  
_Read Record_ |  **_(Valid Only for Native Files with No Embedded Dictionary)_** Select this check box if the file is to be read as an unparsed record.   
_Connect Options_ |  Connection options for opening an external database table.  
_Security_ |  Click the dotted button associated with this option to launch the **[Object Security Definition](../../System%20Maintenance%20Tools/Security%20Manager/Restricting%20Access.htm#objectsecurity)** window for setting up link file level security for the query. See **[Query Security](Query%20Security.md)**. _(The Security column was added in PxPlus 2021.)_  
**Pre-Defined File Links** |  Click this button to access the **Select a File Link Definition** window for choosing an existing file link definition. The selected definition is loaded into the list and can be adjusted if desired. (File link definitions are defined in **[File Link Maintenance](../../../Data%20Dictionary/File%20Link%20Maintenance.md)**.) Alternatively, you can select the link button in the first column of the grid. _(The Pre-Defined File Links button was added in PxPlus 2021 Update 1.)_  
  
The sequence of link files/tables in the list defines the sequence in which they are to be read. If you have multiple levels of link files, for example, the main file links to File_A, which links to File_B, then File_A should be read before File_B and thus precede it in the list. To rearrange the order, use the _Move Up/Move Down_ buttons.

Changes that are applied in this window will be applied to the **File Elements** and **Columns** lists on the main **Query Definition** window. The **_exception_** to this is that columns belonging to deleted links are not removed from formulas.

## See Also

**[Query Definition](Query%20Definition.md)**
