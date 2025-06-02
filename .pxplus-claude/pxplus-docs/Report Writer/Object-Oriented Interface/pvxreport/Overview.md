# Object-Oriented Interface   
  
**pvxreport** |  **__**  
---|---  
  
The **pvxreport** object embodies the report definition, which consists of a series of subordinate objects for filter processing, sort sequence, parameters, groups, lines and cells. Methods are available to create, update and delete these objects. See **[pvxreport Methods](Overview.htm#methods)**.

The **pvxreport** object also has methods to generate the report. See **[Generating a Report](../../Generating%20a%20Report/Introduction.md)**.

Use the **[NEW( )](../../../functions/new.md)** function to create the **pvxreport** object:

> ObjectHandle=NEW("*rpt/pvxreport")

Sub-objects are created and maintained by **pvxreport** methods. Many of these methods are used by the **pvxreport** object itself to store the report definition and generate the report.

## pvxreport Properties

The following table lists the properties of the **pvxreport** object:

**Property** |  **Description**  
---|---  
**BookMarkPDF** |  Indicates whether bookmarks are to be generated in PDF output. **1** \- On  
**0** \- Off (Default)  
**CurrentCalcs$** |  Returns current values of calculated fields. Can be parsed into the individual calculated fields using the **[GetCalcFieldIolist$( )](Overview.htm#getcalcfldiol)** method. **_Example:_** read data from rpt'CurrentCalcs$ TO IOL=rpt'GetCalcFieldIolist$( ) **_Where:_** _rpt_ would be the report object handle. _(The CurrentCalc$ property was added in PxPlus 2022.)_  
**CurrentKey$** |  Returns the external key value for the current record. Blank if the file does not have an external key. Can be parsed into individual key fields using the **[SourceKeyIolist$( )](Overview.htm#sourcekeyiol)** method. **_Example:_** read data from rpt'CurrentKey$ TO IOL=rpt'SourceKeyIolist$( ) **_Where:_** _rpt_ would be the report object handle. _(The CurrentKey$ property was added in PxPlus 2022.)_  
**CurrentRecord$** |  Returns the current record. Can be parsed into the individual file fields using the **[RecordIolist$( )](Overview.htm#recordiol)** method. **_Example:_** read data from rpt'CurrentRecord$, SEP=rpt'SourceSep$( ) TO IOL=rpt'RecordIolist$( ) **_Where:_** _rpt_ would be the report object handle. _(The CurrentRecord$ property was added in PxPlus 2022.)_  
**Designer** |  Object handle for the **[rptdesigner](../rptdesigner/Overview.md)** object that stores and saves Report Designer options and preferences.  
**DynamicFilterDescription$** |  Description of the Dynamic filter condition. See **[Dynamic Filters](../../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.htm#dynamic)**. **_Example:_** InvoiceDate$ is between StartDate$ and EndDate$ Can be set on its own or in conjunction with the **[SetDynamicFilter( )](Overview.htm#setdynfiltr)** method. _(The DynamicFilterDescription$ property was added in PxPlus 2022.)_  
**isLibrary** |  Boolean value to indicate if processing in report or library mode.  
**LastUpdate$** |  Date/time stamp (DTE(0:"%Ys/%Mz/%Dz%Hz:%mz")) and user ID associated with the last change to the report definition.  
**MultipleReportList$** |  SEP-separated list of the report files created when multiple individual reports are generated. _(The MultipleReportList$ property was added in PxPlus 2022.)_  
**MultipleReports** |  Flag to indicate whether multiple individual reports are to be generated based on the **[NewReport](../rptgroup/Overview.htm#newrpt)** property setting of a group. This property is set automatically when the **NewReport** property of a group is altered. _(The MultipleReports property was added in PxPlus 2022.)_  
**PaginateHTML** |  Indicates whether page breaks are to be inserted into HTML output when a group changes. (The **rptgroup** **[NewPage](../rptgroup/Overview.htm#newpage)** property must be set to **1**.) **1** \- On  
**0** \- Off (Default - HTML is output as a single page)  
**ReportDestinationPath$** |  **_(Read Only)_** Report destination path expression. When supplied, the destination path will be evaluated by the **[EvaluateReportDestinationPath$(*)](Overview.htm#evalrptdestpath)** method to provide the path of the report output file for PDF, HTML, tab-delimited and custom output unless the output file is independently opened. The destination path is optional for single reports but is required for definitions that generate multiple reports. The destination path expression may or may not include a file extension. If omitted, a file extension will be added when the **ReportDestinationPath$** property is evaluated using the **EvaluateReportDestinationPath$( )** method (_.pdf_ for PDF documents, _.htm_ for HTML files, and _.txt_ for tab-delimited files). If an extension is included in the expression but does not match the output destination specified for the report, the output destination can be changed to match the extension using the "R" option with the **EvaluateReportDestinationPath$(**_PathExpr$,Option$_**)** method. **_Example:_** "custlist" will result in a report file called custlist.pdf, custlist.htm or custlist.txt if the output destination is PDF, HTML or tab-delimited. "custlist."+%EXT$ will result in a report name based on the value of %EXT$. Destination paths for reports that generate multiple files should be designed to evaluate to a unique path name for each file, possibly using record fields or time/date stamps in the path expression. If unique names are not generated, the individual reports will be written together in a single physical file, as is the case when the output file is independently opened when generating the report. **_Example:_** "Acct_"+ACCT_NUM$ Set this property using **[SetReportDestinationPath$(_PathExp$_)](Overview.htm#setrptdestpath)** after the report definition has been opened. _(The ReportDestinationPath$ property was added in PxPlus 2022.)_  
**ReportFile$** |  Report definition file.  
**ReportName$** |  Assigned name of the report.  
**ScaleToFit** |  Boolean property indicating if the report is to be scaled to fit. **1** \- On   
**0** \- Off (Default)  
**SuppressEmpty** |  Indicates that output to reports that have no data available is to be suppressed. **1** \- On   
**0** \- Off (Default - Reports with no data will be printed with a page header, summary and page footer, if defined)  
**SuppressMultipleReportList** |  Set to **1** to suppress the generation of a SEP-separated list of report files created when multiple individual reports are generated. See **[MultipleReportList$](Overview.htm#multrptlist)** property. _(The SuppressMultipleReportList property was added in PxPlus 2022.)_  
**UseDynamicFilters** |  Boolean property indicating if the report is to accept Dynamic filters. See **[Dynamic Filters](../../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.htm#dynamic)**. _(The UseDynamicFilters property was added in PxPlus 2022.)_  
**UserLogic** |  Name of user logic object. See **[Report Writer User Interfaces](../../Report%20Writer%20User%20Interfaces/Introduction.md)**.  
  
## pvxreport Methods

The following table lists the methods of the **pvxreport** object:

**Method** |  **Description**  
---|---  
**AcceptDynamicFilters( )** |  Display the interactive interface to accept **[Dynamic Filters](../../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.htm#dynamic)** from the end user. Returns **1** if Dynamic filters are added.

#### **Note:**  
The Dynamic filter interface is not displayed when the report is running in the background.

_(The AcceptDynamicFilters( ) method was added in PxPlus 2022.)_  
**AcceptParameters( )** |  Display the interactive interface to accept parameter values from the user. Returns **1**.  
**AddAlternateCell(**_ObjID_**)** |  Add an **AlternateCell rptcell** object to the main **[rptcell](../rptcell/Overview.md)** object specified in _ObjID_. Returns **AlternateCell**.  
**AddCalcField( )** |  Creates a new **[rptcalcfield](../rptcalcfield/Overview.md)** object using the next available sequence number. One object is created for each calculated field. The sequence number can be used as the index number to identify the object when using the **RemoveCalcField( )** and **GetCalcField( )** methods. **CalcFieldCount** is incremented. Returns the object handle if successful, **0** if not.  
**AddCell(**_Grpidx_**,**_Lnidx_**)** |  Creates a new **[rptcell](../rptcell/Overview.md)** object using the next available sequence number. Only cells with data or formatting need to have an **rptcell** object created for them. _Grpidx -_ Sequence number of the section where the cell is located. _Lnidx_ \- Sequence number of the line where the cell is located. **CellCount** for the specified line is incremented. Returns the object handle if successful, **0** if not.  
**AddFilter(**_ObjID_**,**_Setidx_**)  
  
AddFilter(**_Setidx_**)  
  
AddFilter( )** |  Creates a new **[rptfilter](../rptfilter/Overview.md)** object within the **[rptfilterset](../rptfilterset/Overview.md)** object specified by _Setidx_ in the given _ObjID_ object, using the next available sequence number. If no arguments are specified, the **rptfilter** object is created in the first **rptfilterset** object of the current object. One object is created for each filter definition. The sequence number can be used as the index number to identify the object when using **RemoveFilter( )** and **GetFilter( )** methods. If _Setidx_ is not specified, an **rptfilter** object will be added to the first **rptfilterset** object. **FilterCount** for the **rptfilterset** is incremented. Returns the object handle if successful, **0** if not.  
**AddFilterSet(**_ObjID_**)  
  
AddFilterSet( )** |  Creates a new **[rptfilterset](../rptfilterset/Overview.md)** object in the specified object _ObjID_ (or current object if omitted), using the next available sequence number. One object is created for each filter set. The sequence number can be used as the index number to identify the object when using the **RemoveFilterSet( )** and **GetFilterSet( )** methods. **FilterSetCount** is incremented. Returns the object handle if successful, **0** if not.  
**AddGroup(**_RWobj_**)** |  Creates a new **[rptgroup](../rptgroup/Overview.md)** object using the next available sequence number. Group sequence is very important, as the sections must be added in a very specific sequence: Page header, [Group 01 header], [Group 02 header], [Group _nn_ header], Detail Line, [Detail Line _nn_ ] [Group _nn_ footer], [Group 02 footer], [Group 01 footer], Report Summary, Page Footer. One group is created for each report section. The sequence number can be used as the index number to identify the object when using the**RemoveGroup( )** and **GetGroup( )** methods. **BreakCount** is incremented. Returns the object handle if successful, **0** if not. _RWobj_ \- The report writer object handle must be passed as an argument to process multiple output file reports. _(The RWobj argument was added in PxPlus 2022.)_  
**AddGroupFunction( )** |  Creates a new **[rptgroupfunc](../rptgroupfunc/Overview.md)** object using the next available sequence number. One object is created for each function definition. The sequence number can be used as the index number to identify the object when using the **RemoveGroupFunction( )** and **GetGroupFunction( )** methods. **FunctionCount** is incremented. Returns the object handle if successful, **0** if not.  
**AddLine(**_Grpidx_**)** |  Creates a new **[rptline](../rptline/Overview.md)** object using the next available sequence number. It is important to add the lines in the correct sequence, as this is the sequence in which the lines will be displayed in the report. _Grpidx_ \- Sequence number of the section where the report line belongs. One object is created per line. **LineCount** relative to the specified section is incremented. Returns the object handle if successful, **0** if not.  
**AddLink( )** |  Creates a new **[rptlink](../rptlink.md)** object using the next available sequence number. One object is created for each related data source. The sequence number can be used as the index number to identify the object when using the **GetLink( )** , **SetLink( )** and **RemoveLink( )** methods. **LinkCount** is incremented. Returns the object handle if successful, **0** if not.  
**AddLinks(**_LinkString$_**)** |  Clears any current **[rptlink](../rptlink.md)** objects, then adds and populates new **rptlink** objects based on the links defined in _LinkString$_. Also opens a channel to the related data source specified for each **rptlink** object.  
  
_LinkString$_ \- A string comprised of one or more link chains separated by the terminating character. Each link chain consists of a concatenated list of _LinkID$_ values that represent the chain of links from the main data source to the related data source.  
  
Returns **1** if successful, **0** if not.  
**AddParam( )** |  Creates a new **[rptparam](../rptparam/Overview.md)** object using the next available sequence number. One object is created for each parameter.  
  
The sequence number can be used as the index number to identify the object when using the **RemoveParam( )** and **GetParam( )** methods.  
  
**ParamCount** is incremented. Returns the object handle if successful, **0** if not.  
**AddSortItem( )** |  Creates a new **[rptsort](../rptsort/Overview.md)** object using the next available sequence number. These objects are added in sequence, one for each segment.  
  
The sequence number can be used as the index number to identify the object when using the **RemoveSortItem( )** and **GetSortItem( )** methods.  
  
**SortItemCount** is incremented. Returns the object handle if successful, **0** if not.  
**AssociateLibrary(**_LibraryName$_**)** |  Associates an existing Report Writer Library, specified by _LibraryName$_ with the report currently being edited in the Report Designer so that its parameter and calculated field definitions, as well as its layouts, can be made available to the report definition.  
  
A maximum of 99 libraries may be associated.  
  
Returns **1** if successful, **-1** if the library was already associated, and **0** if not successful.  
**BreakCount( )** |  Returns the number of sections in the report. This includes the Page header, Detail Lines, Report Summary, Page footer, as well as the headers and footers for all control break group definitions.  
**BuildRecordIolist$( )** |  Builds and returns a compiled IOList of all data fields from all selected data sources (i.e. main and related data sources).  
**CalcFieldCount( )** |  Returns the number of defined calculated fields.  
**CellCount(**_Grpidx_**,**_Lnidx_**)** |  Returns the number of data-bearing cells in a line.  
  
_Grpidx -_ Sequence number of the section where the cell is located.  
  
_Lnidx -_ Sequence number of the line where the cell is located.  
  
Returns **0** if the arguments are invalid.

#### **Note:**  
A cell contains data or formatting. Empty cells do not have an assigned object.  
  
**CheckFilters(**_Fset_**,**_R$_**,**_K$,C$_**)** |  Evaluates the conditions in an **[rptfilterset](../rptfilterset/Overview.md)** object based on record and key data.  
  
_Fset -_ Object handle for the **rptfilterset** to be evaluated.  
  
_R$ -_ Record data.  
_  
K$ -_ Key data.   
_  
C$ -_ Calculated field data.  
  
_R$,_  _K$_ and _C$_ are in record format. If not specified, the current data, key and calculated field values will be used. Returns **1** (true) or **0** (false).  
**ClearCalcFields( )** |  Removes all **[rptcalcfield](../rptcalcfield/Overview.md)** objects. Returns **1**.  
**ClearFilters(**_ObjID_**)  
  
ClearFilters( )** |  Removes all **[rptfilterset](../rptfilterset/Overview.md)** objects from the specified object, or current object if _ObjID_ is not specified. Returns **1**.  
**ClearGroupFunctions( )** |  Removes all **[rptgroupfunc](../rptgroupfunc/Overview.md)** objects. Returns **1**.

#### **Note:  
** The result of any function used in an expression in the report will be zero.  
  
**ClearGroups( )** |  Removes all sections in the report (basically clears all sections, lines and cells). Returns **1**.  
**ClearLinks( )** |  Removes all **[rptlink](../rptlink.md)** objects. Returns **1**.  
**ClearParams( )** |  Removes all **[rptparam](../rptparam/Overview.md)** objects. Returns **1**.  
**ClearSort( )** |  Removes all **[rptsort](../rptsort/Overview.md)** objects. Returns **1**.

#### **Note:  
** If used, **SetSort( )** or **AddSortItem( )** is used to create a new sort order.  
  
**Close( )** |  Reset workspace and sub-objects. Returns **1**.  
**DataSource$( )** |  Returns the name of the current source. Depending on the source type, this could be the logical table name, the simple path, a view name or the source name for a custom data source object.  
**DataSourceObject$( )** |  Returns the current data source class.  
**DisassociateLibrary(**_LibraryName$_**)  
  
DisassociateLibrary( )** |  Disassociates a Report Writer Library specified by _LibraryName$_ from the report currently being edited in the Report Designer. If no library name is specified, all libraries will be disassociated.  
**EvaluateCalcFields$( )** |  Evaluates the calculated fields and returns the values in record format, based on the IOList returned by **GetCalcFieldIolist$( )**.  
**EvaluateReportDestinationPath$([**_PathExpr$_**],[**_Option$_**])** |  Evaluate and return the expression in _PathExpr$_. If _PathExpr$_ is omitted or is null, the value in the **[ReportDestinationPath$](Overview.htm#rptdestpath)** property is evaluated. If the resulting destination path expression does not include a file extension, then a file extension will be added if the output destination is a PDF file (_.pdf_), an HTML file (_.htm_) or a tab-delimited file (_.txt_). **_Example:_** "custlist" will result in a report file called custlist.pdf, custlist.htm or custlist.txt if the output destination is PDF, HTML or tab-delimited. "custlist."+%EXT$ will result in a report name based on the value of %EXT$. If an extension is included in the expression but does not match the output destination specified for the report, then the appropriate extension for PDF, HTML or tab-delimited output will be appended to the evaluated expression, or the output destination can be changed to match the extension by setting the optional _Option$_ to "R" (Reset). **_Example:_** f$=Objid'EvaluateReportDestinationPath$("","R") _(The EvaluateReportDestinationPath$ method was added in PxPlus 2022.)_  
**FilterCount(**_ObjID_**,**_Setidx_**)  
  
FilterCount(**_Setidx_**)  
  
FilterCount( )** |  Returns the number of **[rptfilter](../rptfilter/Overview.md)** objects in the **[rptfilterset](../rptfilterset/Overview.md)** object specified by _Setidx_ , in the given _ObjID_ (or current object if not specified).  
  
If no arguments are specified, returns the number of **rptfilter** objects in the first **rptfilterset** object of the current object.  
**FilterSetCount(**_ObjID_**)  
  
FilterSetCount( )** |  Returns the number of **[rptfilterset](../rptfilterset/Overview.md)** objects in the given _ObjID_ object, or current object if not specified.  
**FinishReport( )** |  Wraps up the report. Returns **1** when a report is generated.  
**FunctionCount( )** |  Returns the number of defined group functions.  
**GetBackgroundColor$(**_n_**)  
  
GetBackgroundColour$(**_n_**)** |  Returns background colour **1** or **2** , depending on _n_.  
**GetBackgroundColorOption$( )  
  
GetBackgroundColourOption$( )** |  Returns the background colour option. See **[SetBackgroundColourOption$( )](Overview.htm#setbkgrcoloropt)**.  
**GetBottomMargin( )** |  Returns the size of the bottom margin in 1000's of an inch. Printer default is indicated as **-1**.  
**GetCalcField(**_idx_ | _Name$_**)** |  Returns the handle for an **[rptcalcfield](../rptcalcfield/Overview.md)** object.  
  
_idx_ _-_ Sequence number of the object.  
  
_Name$ -_ Name of the calculated field.  
  
This allows access to all **rptcalcfield** properties and methods. Returns **0** if the sequence number is invalid.  
**GetCalcFieldEvaluationString$( )** |  Returns a PxPlus expression comprised of the assignment pairs used to evaluate the calculated fields.  
**GetCalcFieldIolist$( )** |  Returns a compiled IOList consisting of the calculated fields.  
**GetCalcFieldList$([**_Sep$_**[,**_Flag$_**]]** |  Returns a list of calculated field names.  
  
_Sep$_ \- **_(Optional)_** Separator to use after each name. If null or omitted, the default is a comma.  
  
_Flag$_ \- **_(Optional)_** Set to "D" to include the description in parentheses with each field name. Set to "V" to use variable names. (Options may be combined; i.e. "DV".) _(The "V" option was added in PxPlus 2022.)_  
**GetCell(**_Grpidx_**,**_Lnidx_**,**_Cellidx_**)** |  Returns the handle for an **[rptcell](../rptcell/Overview.md)** object.  
  
_Grpidx -_ Sequence number of the section where the cell is located.  
  
_Lnidx -_ Sequence number of the line where the cell is located.   
_  
Cellidx -_ Sequence number of the **rptcell** object.  
  
This allows access to all **rptcell** properties. Returns **0** if the arguments are invalid.  
**GetColumnCount( )** |  Returns the number of columns in the report.

#### **Note:   
**This cycles through all the groups, lines and cells to determine the highest column number; therefore, save off this value if you need to use it more than once rather than calling this method repeatedly.  
  
**GetColumnCount(**_idx_**)** |  Returns the number of columns in the group specified by the index value _idx_.  
**GetColumnLocation(**_Column_**)** |  Returns the location of the start of a column relative to the leftmost margin. The first column is at location **0**.  
  
_Column -_ Number of the column whose location is to be returned.  
  
Units are points (72's of an inch).  
**GetColumnWidth(**_Column_**)** |  Returns width of the specified column in points (72's of an inch).  
**GetCondition$(**_ObjID_**)** |  Returns a PxPlus expression encompassing all conditions in all filter sets in the given _ObjID_ object.  
  
**_Example:  
  
_** If an object has two filter sets, one which has two filters, TYPE$="M" and BALANCE>1000, and the other also has two filters, TYPE$="P" and BALANCE>10000, then this method will combine these and return ((TYPE$="M" AND BALANCE>1000) OR (TYPE$="P" AND BALANCE>10000)).  
**GetCondition$(**_ObjID_**,**_Setidx_**,**_Filteridx_**)  
  
GetCondition$(**_Setidx_**,**_Filteridx_**)  
  
GetCondition$(**_Filteridx_**)** |  Returns a string containing the PxPlus expression associated with a filter.  
  
_ObjID_ \- Object handle for object containing the **[rptfilterset](../rptfilterset/Overview.md)** objects. Current object, if omitted.  
  
_Setidx_ \- Index of the **rptfilterset** object. If omitted, default is first filter set in the current object.   
_  
Filteridx - Index of the**[rptfilter](../rptfilter/Overview.md)** object._  
  
Returns null if the sequence number is invalid.  
**GetConditionDescription$(**_ObjID_ ,**[**_Opt$_**])** |  Returns a prose description of conditions.  
  
**_Example:_**  
  
"CustomerBalance is less than 0."  
_  
ObjID_ \- Object ID for an object containing filter information, such as the ***rpt/rptfilterctl** object.  
  
_Opt$_ \- **_(Optional)_** May be set to "S" to return the description for **[Static Filters](../../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.htm#static)** only.  
  
(The description does not indicate case sensitivity of the condition.)  
  
_(The "S" option was added in PxPlus 2022.)_  
**GetData$(**_VarName$_**)** |  Returns the string data contained in a variable used in a report.  
  
_VarName$ -_ Name of the variable whose value is to be returned.  
  
**_Example:_**  
  
MyVar$=x'GetData$("MyVar$")  
  
Returns **0** if not successful.  
**GetDataFieldList$([**_Sep$_**[**_,Flag$_**]])** |  Returns a list of data file fields available in the report, including those in the main file and related files. _Sep$_ \- **_(Optional)_** Item separator (If omitted, default separator is a _comma_.) _Flag$_ \- **_(Optional)_** Set to "D" to include the description in parentheses with each field name. Set to "V" to use variable names. (Options may be combined; i.e. "DV".) _(The GetDataFieldList$( ) method was added in PxPlus 2022.)_  
**GetDestination$( )** |  Returns the output destination (i.e. the file to be opened, such as ***winprt*** , ***viewer*** , ***pdf*** or ***.htm** files, etc.) of currently set output device.  
**GetDestinationFile$( )** |  Returns the file to be specified in the **FILE=** clause of the open option for ***winprt*** or ***pdf***.  
**GetDestinationOption$( )** |  Returns the output destination option (e.g. Normal, Default, Asis) of the currently-set output device.  
**GetDynamicFilterFields$( )** |  Returns a list of fields to be included or excluded from the list of fields available for **[Dynamic Filters](../../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.htm#dynamic)**. The list consists of a **+** (_plus sign_) followed by the variables to include or a **-** (_minus sign_) followed by the variables to exclude. The field separator may be any character and is the last character of the list. **_Example:_** A return value of: -CST_Balance,CST_Code$, would exclude the CST_Balance and CST_Code$ variables from the list of variables available for Dynamic filters. +Country$;Region$;State$; would mean that only the Country$, Region$ and State$ variables would be available for Dynamic filters. If a null value is returned, all fields are available. _(The GetDynamicFilterFields$( ) method was added in PxPlus 2022.)_  
**GetFilter(**_ObjID_**,**_Setidx_**,**_Filteridx_**)  
  
GetFilter(**_Setidx_**,**_Filteridx_**)  
  
GetFilter(**_Filteridx_**)** |  Returns the handle for an **[rptfilter](../rptfilter/Overview.md)** object.  
  
_ObjID_ \- Object handle for object containing **[rptfilterset](../rptfilterset/Overview.md)** objects. Current object, if omitted.  
  
_Setidx_ \- Index indicating which **rptfilterset** object. If omitted, default is first filter set.   
_  
Filteridx - Index of the**rptfilter** object._  
  
This allows access to all **rptfilter** properties and methods. Returns **0** if sequence number is invalid.  
**GetFilterSet(**_ObjID_**,**_Setidx_**)  
  
GetFilterSet(**_Setidx_**)** |  Returns the handle for an **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_ObjID_ \- Object handle for object containing **rptfilterset** objects. Current object, if omitted.  
  
_Setidx_ \- Index indicating which **rptfilterset** object.  
  
This allows access to all **rptfilterset** properties and methods. Returns **0** if not successful.  
**GetFont$( )** |  Returns a comma-separated string denoting the default font name, its point size, and optionally, its attributes: **I** (italics), **B** (bold).  
**GetGroup(**_idx_**)** |  Returns the handle for an **[rptgroup](../rptgroup/Overview.md)** object.  
  
 _idx_ _-_ Sequence number of the object.  
  
This allows access to all **rptgroup** properties and methods. Returns **0** if the sequence number is invalid.  
**GetGroup(**_Type$_**,**_Level$_**)** |  Returns the handle for an **[rptgroup](../rptgroup/Overview.md)** object.  
  
_Type$ -_ Section type code:  
  
**H** \- Header   
**F** \- Footer   
**D** \- Detail line  
  
 _Level$ -_ Two-letter level code:  
  
**PG** \- Page   
**Ln** \- Detail line   
**00** \- Report summary   
**nn** \- Control break group level (e.g. 01)   
**RP** \- Report level  
  
Returns **0** if any arguments are invalid.  
**GetGroupFunction(**_idx_**)** |  Returns the handle for an **[rptgroupfunc](../rptgroupfunc/Overview.md)** object.  
  
_idx_ _-_ Sequence number of the object.  
  
This allows access to all **rptgroupfunc** properties and methods. Returns **0** if the sequence number is invalid.  
**GetIolist$(**_Grpidx_**,**_Lnidx_**)** |  Returns the compiled IOList for a report line.  
  
_Grpidx -_ Sequence number of the report section.  
  
_Lnidx -_ Sequence number of the line in the specified section.  
  
Returns null if either argument is invalid.  
**GetInputSortkey( )** |  Returns the key number to be used for the input sort or **-1** if the report generator should automatically determine this.  
**GetInputSortkey$( )** |  Returns a string containing the key number to be used for the input sort, or null if the report generator should automatically determine this.  
**GetLeftMargin( )** |  Returns the size of the left margin in 1000's of an inch. Printer default is indicated as **-1**.  
**GetLibraryCalcFieldInfo(**_Objid,Lib$,Name$_**)** |  Retrieves calculation field information for the field specified by _Name$_ in the library file _Lib$,_ and loads it into a ***rpt/rptcalcfield** object whose ID is _Objid_. (The ***rpt/rptcalcfield** object must be created and destroyed by the calling program.) Returns **1** if successful, **0** if not.  
**GetLibraryCalcFields$(**_Lib$,Sep$,Opt$_**)** |  Returns a _Sep$-_ separated list of calculated fields in the library file specified in _Lib$._ If the option _Opt$_ contains "D", then the list of fields will include the field descriptions in brackets following the field name.  
**GetLibraryGroup(**_Name$_**)** |  Returns the object handle of the library layout group specified by _Name$._ Returns **0** if the group is not found.  
**GetLibraryLayouts$(**_LibName$,Sep$_**)  
  
GetLibraryLayouts$(**_Sep$_**)  
  
GetLibraryLayouts$( )** |  If a library name is specified in _LibName$_ , then this method returns a _Sep$_ -separated list of layouts from that library.  
  
If a library name is not specified, then this method returns a _Sep$_ -separated list of layouts from the library currently being edited. If _Sep$_ is not specified, then a comma is used to separate the list.  
**GetLibraryList$([**_Sep$_**])** |  Returns a _Sep$_ -separated list of currently associated libraries. If _Sep$_ is not specified, then a comma is used to separate the libraries.  
**GetLibraryParameterInfo(**_Objid,Lib$,Name$_**)** |  Retrieves parameter information for the parameter specified by _Name$_ in the library file _Lib$_ and loads it into a ***rpt/rptparam object** whose ID is _Objid_. (The ***rpt/rptparam** object must be created and destroyed by the calling program.) Returns **1** if successful, **0** if not.  
**GetLibraryParameters$(**_Lib$,Sep$,Opt$_**)** |  Returns a _Sep$_ -separated list of parameter fields in the library file specified in _Lib$._ If the option _Opt$_ contains "D", then the list of fields will include the field descriptions in brackets following the field name.  
**GetLine(**_Grpidx_**,**_Lnidx_**)** |  Returns the handle for an **[rptline](../rptline/Overview.md)** object.  
  
_Grpidx -_ Sequence number of the report section.  
  
_Lnidx -_ Sequence number of the line in the specified section.  
  
This allows access to all **rptline** properties and methods. Returns **0** if the arguments are invalid.  
**GetLink(**_idx_**)**  
**  
GetLink(**_String$_**)** |  Returns the handle for an **[rptlink](../rptlink.md)** object.  
  
_idx_ Sequence number for the **rptlink** object.  
  
_String$_ \- The current value of either the **[LinkID$](../rptlink.htm#linkid)** or **[Description$](../rptlink.htm#desc)** property of the **rptlink** object.  
  
This allows access to all **rptlink** properties and methods. Returns **0** if the arguments are invalid.  
**GetMargins$( )** |  Returns a colon-separated string consisting of the size of the left:top:right:bottom margins. Units are in 1000's of an inch. Printer default is indicated as **-1**.  
**GetOutputChannel( )** |  Returns the channel number to the output device.  
**GetOutputDevice$( )** |  Returns a code representing the current output device: **P** \- Printer   
**C** \- Clipboard   
**H** \- HTML   
**V** \- PxPlus Viewer   
**U** \- Custom output object  
**GetPageOrientation$( )** |  Returns orientation setting: **P** \- Portrait   
**L** \- Landscape  
**GetPageSetup$( )  
  
GetPageSetup$(**_RptDef_**$)** |  Retrieve the printer setup string containing margin and orientation settings to be used with an **[OPEN](../../../directives/open.md)** directive to an output device (***winprt*** , ***pdf*** , ***viewer***). When used, must include printer option string (i.e. Normal; Asis; etc.) prepended to it. _RptDef$_ \- Name of the report definition file from which to get the setup string. If no file name is given, returns the setup string of the currently open report. **_Example:_** OPEN(1,ERR=*END)"*winprt*;OPT="Normal;File=test.prn;"+rpt'GetPageSetup$("myreport.pvr")  
**GetPaperSize( )** |  Returns the currently selected form number. Default is **0**.  
**GetParam(**_idx_**)**  
**  
GetParam(**_Name$_**)** |  Returns the handle for an **[rptparam](../rptparam/Overview.md)** object. _idx_ _-_ Sequence number of the object. _Name$_ \- Name assigned to the parameter. (The name match is not case sensitive.) This allows access to all **rptparam** properties and methods. Returns **0** if the sequence number is invalid.  
**GetParameter$(**_ParmName$_**)** |  Returns the string value of a parameter. _ParmName$_ \- Name of parameter (not case sensitive) whose value is to be returned. The name should **_not_** end with $. Returns null if a parameter with the specified name does not exist.  
**GetParameter(**_ParmName$_**)** |  Returns the numeric value of a parameter. _ParmName$ -_ Name of parameter (not case sensitive) whose value is to be returned. Returns **0** if _ParmName$_ is invalid.  
**GetParameterLibrary$( )** |  Returns the name of the library where the parameter interface panel is located.  
**GetParameterPanel$( )** |  Returns the name of the panel to be used in the user parameter interface.  
**GetParameterProgram$( )** |  Returns the program path and optional program label (separated by a _semi-colon_) to be used as the user parameter interface, or an expression (prefixed by an _equals sign_) that can be evaluated to determine the program name and optional label.  
**GetParamList$([**_Sep$_ **[**_,Flag$_**]])** |  Returns a list of parameter names. _Sep$_ \- **_(Optional)_** Item separator (If omitted, default separator is a _comma_.) _Flag$_ \- **_(Optional)_** Set to "D" to include the description in parentheses with each parameter name. Set to "V" to use variable names. (Options may be combined; i.e. "DV".) _(The "D" and "V" options were added in PxPlus 2022.)_  
**GetPostReportLogic$( )** |  Returns a string consisting of the logic type, _C_ , _X_ or _M_ as the first character, followed by the logic definition string. For each logic type, the following gets returned: |  **C** |  Returns "C" and the name of the called program and optional arguments, comma-separated. **_Example:_** C"programName",OutputDevice$, DestinationPath$,INV_NUM$  
---|---  
**X** |  Returns "X" and a PxPlus statement. **_Example:_** Xmsgbox DestinationPath$,"Testing Post Report Logic"  
**M** |  Returns "M" and the name of a method in the user **[Logic Object Interface](../../Report%20Writer%20User%20Interfaces/Logic%20Object%20Interface/Overview.md)** and its arguments. **_Example:_** MPostReportLogic(this)  
  
_(The GetPostReportLogic$ method was added in PxPlus 2022.)_  
  
**GetPostReportLogicExpression$( )** |  Returns the statement that gets executed when the **[Post Report Logic](../../Designing%20a%20Report/Report%20Options/Overview.htm#post_rpt)** is invoked. **_Call Example:_** call "programName",OutputDevice$, DestinationPath$,INV_NUM$ **_Execute Example:_** msgbox DestinationPath$,"Testing Post Report Logic" **_Method Example:_** If UserLogic then UserLogic'PostReportLogic(this) If the statement to be invoked is not valid, a null value is returned. _(The GetPostReportLogicExpression$ method was added in PxPlus 2022.)_  
**GetRightMargin( )** |  Returns the size of the right margin in 1000's of an inch. Printer default is indicated as **-1**.  
**GetSortDescription$( )** |  Returns a "+"-separated string consisting of the columns that make up the sort sequence. Returns null if unsuccessful.  
**GetSortItem(**_idx_**)** |  Returns the handle for an **[rptsort](../rptsort/Overview.md)** object. _idx_ _-_ Sequence number of the object. This allows access to all **rptsort** properties and methods. Returns **0** if sequence number is invalid.  
**GetSortKey( )** |  Returns the key number of a pre-defined key or **-1** for a custom key.  
**GetSourceType$( )** |  Returns a code representing the source type: **P** \- PxPlus file with an embedded dictionary, identified by the path name  
**L** \- PxPlus file with an embedded dictionary, identified by the table name  
**V** \- PxPlus View  
**O** \- Custom data source object  
**GetSystemVariable$(**_idx_**)** |  Returns the specified system variable name.  
**GetSystemVariableCount( )** |  Returns the total number of standard system and user-defined system variables.  
**GetSystemVariableDescription$(**_idx_**)** |  Returns the specified system variable description.  
**GetSystemVariableDescriptions$( )  
  
GetSystemVariableDescriptions$(**_Sep$_**)** |  Returns a string of _Sep$_ -separated descriptions. Default _Sep$_ = **SEP**.  
**GetSystemVariableLength(**_idx_**)** |  Returns the maximum length of the value stored in the specified variable.  
**GetSystemVariables$( )  
  
GetSystemVariables$(**_Sep$_**)** |  Returns a string of _Sep$_ -separated descriptions. Default _Sep$_ = **SEP**.  
**GetTopMargin( )** |  Returns the size of the top margin in 1000's of an inch. Printer default is indicated as **-1**.  
**GetUserOutputObject$(**_Level$_**)** |  Returns the user output object for the indicated Level$: |  **D** |  Returns the name of the default user output object.  
---|---  
**R** |  Returns either the name of the user output object specified for the current report, or an expression (prefixed by an _equals sign_ (**=**) that can be evaluated to determine the name of the user output object specified for the current report.  
**GroupCount( )** |  Returns the number of sections in the report. This includes the Page header, Detail Lines, Report Summary, Page footer, as well as the headers and footers for all control break group definitions. Same as **[BreakCount( )](Overview.htm#breakcount)**.  
**IsAnyOf(**_Val$,Seq,Type$,Case_**)** |  Method used in dynamic filter expressions to test the value of a field against multiple values. |  _Val$_ |  Value of a field to be tested.  
---|---  
_Seq_ |  Sequence number in which the associated IsAnyOf( ) parameters were set up using the **[SetIsAnyOf( )](Overview.htm#setisanyof)** method.  
_Type$_ |  Field type: **N** (Numeric) or **S** (String).  
_Case_ |  Case flag for the comparison: **0** (Case insensitive) or **1** (Case sensitive).  
  
_(The IsAnyOf method( ) was added in PxPlus 2023.)_  
  
**IsOutputNoChannel( )** |  Returns a Boolean value (0/1) indicating whether the output is not to be sent to an output channel, such as output to the clipboard.  
**IsOutputNoPaging( )** |  Returns a Boolean value (0/1) indicating whether the report is to be printed without page breaks.  
**IsOutputPrinterCompatible( )** |  Boolean value indicating whether or not the output is printer compatible, and if page properties (such as orientation and margins) are to be set up when the output device is opened. This is applicable for output to ***winprt*** , ***pdf*** , and ***viewer***. This should be set to zero for HTML or Clipboard output, for example.  
**LibraryCount( )** |  Returns the number of associated libraries.  
**LineCount(**_Grpidx_**)** |  Returns the number of lines in a section. Returns **0** if the argument is invalid.  
  
_Grpidx -_ Sequence number of the report section.  
**LinkCount( )** |  Returns the number of related data sources that have been defined.  
**LoadLibraryLayout(**_Libname$,Libref$_**)** |  Loads the layout specified by _Libref$_ from the _Libname$_ library so that the layout definition can be edited. Returns **1** if successful, **0** if not.  
**Open(**_RptDefFile$_**)** |  Open and initialize the report. Returns the handle for the data source object if successful. _RptDefFile$ -_ Name of the report definition or library file. This method opens the data source and creates the sub-objects used by the Report Writer and loads them with the information contained in the definition file. If an error occurs during the execution of this method, the error will invoke the **ERR=** branch in the method call, so be sure to include this as part of the application program logic; e.g. sts=rpt'Open(RptDef$,err=RptErr).  
**OutputClipboard( )** |  Sets the output device to be the Windows clipboard, and sets the output channel to **0**. Returns **1**.  
**OutputDevice(**_DeviceCode$,Chan,_[_Opt$_]**)** |  Generic method to set the output destination and channel. The output device is identified by a device code: **C** \- Clipboard   
**F** \- PDF output   
**H** \- HTML output   
**P** \- Printer   
**T** \- Tab-delimited output   
**V** \- PxPlus Report Viewer   
**U** \- Custom user output object _Chan_ \- Sets the output channel. By default, the **ReportDestinationPath$** property is cleared. In the case of report definitions generating multiple reports, the reports will be written to the output channel in a single output file. _Opt$_ \- **_(Optional)_** Can be set to "P" to prevent clearing the **ReportDestinationPath$**. _(The Opt$ option was added in PxPlus 2022.)_  
**OutputHTML(**_Chan_**)** |  Sets the output destination to HTML and sets the output channel. The **ReportDestinationPath$** property is cleared. In the case of report definitions generating multiple reports, the reports will be written to the output channel in a single physical file. Returns **1**. _Chan_ \- Output channel number to an _.htm_ file.  
**OutputPDF(**_Chan_**)** |  Sets the output destination to PDF and sets the output channel. The **ReportDestinationPath$** property is cleared. In the case of report definitions generating multiple reports, the reports will be written to the output channel in a single physical file. Returns **1**.

#### **Note:  
** You can also output to PDF using the **OutputPrint( )** method if the channel is open using ***pdf***.  
  
**OutputPrint(**_Chan_**)** |  Sets the output destination to be a printer and sets the output channel. The **ReportDestinationPath$** property is cleared. In the case of report definitions generating multiple reports, the reports will be written to the output channel in a single physical file. Returns **1**. _Chan_ \- Output channel number to the printer device (***winprt*** or ***pdf***).

#### **Note:**  
If using this method to generate a PDF file, the channel should be opened, using the ***pdf*** device with the **FILE=** option:  
  
OPEN(chan)"*pdf*;File=FileName"  
  
If PDF output is detected, the device type will be switched to PDF.  
  
**OutputTabDelimited(**_Chan_**)** |  Sets the output destination to a tab-delimited file, and sets the output channel. The **ReportDestinationPath$** property is cleared. In the case of report definitions generating multiple reports, the reports will be written to the output channel in a single physical file. Returns **1**.  
**OutputUser([**_Chan_**])** |  Sets the output destination to be a custom user output object, and sets the output channel.  
**OutputViewer(**_Chan_**)** |  Sets the output destination to be the PxPlus Report Viewer, and sets the output channel.  
**ParamCount( )** |  Returns the number of defined parameters.  
**ProcessData( )** |  Processes the current data record. Processing includes dealing with control breaks, group function calculations, and outputting the data. Returns **1**.  
**ProcessData(**_Record$_**)** |  Processes the data using the data in a record. _Record$ -_ Data record Processing includes dealing with control breaks, group function calculations, and outputting the data. Returns **1**.  
**ReadData$( )** |  Reads a record from the data source. Returns the record, or null at End-of-File.  
**RecordIolist$( )** |  Returns the compiled IOList of all data fields from all selected data sources (i.e. main and related data sources).  
**RemoveAlternateCell(**_ObjID_**)** |  Drop the **AlternateCell rptcell** object from the main **[rptcell](../rptcell/Overview.md)** object specified in _ObjID_ and set **AlternateCell** to zero.  
**RemoveCalcField(**_idx_**)** |  Removes an **[rptcalcfield](../rptcalcfield/Overview.md)** object. _idx_ \- Sequence number of object to be removed. If an **rptcalcfield** object is removed, the sequence number of the **rptcalcfield** objects with higher sequence numbers is adjusted down. **CalcFieldCount** is decremented. Returns the object handle if successful, **0** if not.  
**RemoveCell(**_Grpidx_**,**_Lnidx_**,**_Cellidx_**)** |  Removes an **[rptcell](../rptcell/Overview.md)** object. _Grpidx -_ Sequence number of the section in which the cell is located. _Lnidx -_ Sequence number of the line in which the cell is located. _Cellidx -_ Sequence number of the cell to be removed. If an **rptcell** object is removed, the sequence number of the **rptcell** objects with higher sequence numbers is adjusted down. **CellCount** is decremented for the line. Returns the object handle if successful, **0** if not.  
**RemoveFilter(**_ObjID_**,**_Setidx_**,**_Filteridx_**)  
  
RemoveFilter(**_Setidx_**,**_Filteridx_**)  
  
RemoveFilter(**_Filteridx_**)** |  Removes an **[rptfilter](../rptfilter/Overview.md)** object. _ObjID_ \- Object handle for the object containing the **[rptfilterset](../rptfilterset/Overview.md)** object. Current object, if omitted. _Setidx_ \- Index indicating which **rptfilterset** object. If not specified, defaults to the first **rptfilterset** object in the current object. _Filteridx_ \- Sequence number of the **rptfilter** object to be removed. If an **rptfilter** object is removed, the sequence number of the **rptfilter** objects with higher sequence numbers is adjusted down. **FilterCount** is decremented. Returns the object handle if successful, **0** if not.  
**RemoveFilterSet(**_ObjID_**,**_Setidx_**)  
  
RemoveFilterSet(**_Setidx_**)** |  Removes an **[rptfilterset](../rptfilterset/Overview.md)** object. _ObjID_ \- Object handle for the object containing the **rptfilterset** object. Current object, if omitted. _Setidx_ \- Sequence number of the object to be removed. If an **rptfilterset** object is removed, the sequence number of the **rptfilterset** objects with higher sequence numbers is adjusted down. **FilterSetCount** is decremented. Returns the object handle if successful, **0** if not.  
**RemoveGroup(**_idx_**)** |  Removes an **[rptgroup](../rptgroup/Overview.md)** object. _idx_ _-_ Sequence number of object to be removed. If an **rptgroup** object is removed, the sequence number of the **rptgroup** objects with higher sequence numbers is adjusted down. This removes all lines and cells associated with the section. The **[MultipleReports](Overview.htm#multrpts)** property may be adjusted depending on the setting of the **[NewReport](../rptgroup/Overview.htm#newrpt)** property of the **rptgroup** object being removed. **BreakCount** is decremented. Returns the object handle if successful, **0** if not.

#### **Note:   
**If a control break group is to be removed, remove both the header and footer sections.  
  
**RemoveGroupFunction(**_idx_**)** |  Removes an **[rptgroupfunc](../rptgroupfunc/Overview.md)** object. _idx_ _-_ Sequence number of object to be removed. If an **rptgroupfunc** object is removed, the sequence number of the **rptgroupfunc** objects with higher sequence numbers is adjusted down. **FunctionCount** is decremented. Returns the object handle if successful, **0** if not.  
**RemoveLine(**_Grpidx_**,**_Lnidx_**)** |  Removes an **[rptline](../rptline/Overview.md)** object and all cells associated with the line. _Grpidx -_ Sequence number of the section in which the line is located. _Lnidx -_ Sequence number of the line to be removed. If an **rptline** object is removed, the sequence number of the **rptline** objects with higher sequence numbers is adjusted down. **LineCount** is decremented for the section. Returns the object handle if successful, **0** if not.  
**RemoveLink(**_idx_**)** |  Remove an **[rptlink](../rptlink.md)** object. _idx_ \- Sequence number of object to be removed. If an **rptlink** object is removed, the sequence number of the **rptlink** objects with higher sequence numbers is adjusted down. **LinkCount** is decremented. Returns the object handle if successful, **0** if not.  
**RemoveParam(**_idx_**)** |  Removes an **[rptparam](../rptparam/Overview.md)** object. _idx_ _-_ Sequence number of object to be removed. If an **rptparam** object is removed, the sequence number of the **rptparam** objects with higher sequence numbers is adjusted down. **ParamCount** is decremented. Returns the object handle if successful, **0** if not.  
**RemoveSortItem(**_idx_**)** |  Removes an **[rptsort](../rptsort/Overview.md)** object. _idx_ _-_ Sequence number of object to be removed. If an **rptsort** object is removed, the sequence number of the **rptsort** objects with higher sequence numbers is adjusted down. **SortItemCount** is decremented. Returns the object handle if successful, **0** if not.  
**ResetPrinterProperties( )** |  Resets the original printer properties. Must be preceded by the **SetPrinterProperties( )** method.  
**RunReport( )** |  Generates a report. This format gives the application program control over the report definition and output channel. The program must do all the initial setup: open the output channel, open the report definition, impose any desired changes to the definition, and get user parameters (if necessary). After the report is generated, the program must close the report and the output channel. See **[RunReport( ) Method](../../Generating%20a%20Report/Introduction.htm#runreport)**.  
**RunReport(**_RptDefFile_ _$_**)** |  Generate a report using default settings. Returns **1** if successful, **0** if not. _RptDefFile$ -_ Name of the report definition file. If the printer is the defined output destination, the default printer will be used. This method can also be used to generate PDF, HTML and tab-delimited files if a **[ReportDestinationPath$](Overview.htm#rptdestpath)** has been specified for the report. It can also be used to generate output files using custom output object interfaces and specifying the output file in the output object's **'DestinationFile$** property. See **[RunReport( ) Method](../../Generating%20a%20Report/Introduction.htm#runreport)**. _(The ability to specify the report output was added in PxPlus 2022.)_  
**RunReport(**_RptDefFile$_**,**_Chan_**)** |  Generate a report; output to channel. _RptDefFile$_ \- Name of the report definition file. _Chan -_ Channel to which to output the report. The **ReportDestinationPath$** property is cleared. In the case of report definitions generating multiple reports, the reports will be written to the output channel in a single physical file. The application program must first open the channel to the output device, which must be compatible with the defined output destination, and pass the channel as an argument. When the **RunReport( )** method is complete, the application program must then close the channel. See **[RunReport( ) Method](../../Generating%20a%20Report/Introduction.htm#runreport)**.  
**Save(**_RptDefFile$_**)** |  Save the report definition or library currently stored in the **pvxreport** object and its subordinate objects. _RptDefFile$_ \- Name of the file to which to save the report definition or library. The standard extension for report file definitions is _.pvr_ , and _.pvrlib_ for report libraries; however, this is not necessary. Returns **1**.  
**SetBackgroundColor(**_Clr1$_**[,**_Clr2$_**])  
  
SetBackgroundColour(**_Clr1$_**[,**_Clr2$_**])** |  Set up to two colours for alternating background colours on detail lines (if one colour is set, the second colour defaults to white). Use colour names ("White", "Dark Gray", "Light Red", etc.) or RGB settings; e.g. RGB:255,0,128.  
**SetBackgroundColorOption(**_Opt$_**)  
  
SetBackgroundColourOption(**_Opt$_**)** |  Set the background colour option: **0** \- _(Off)_ Report does not use alternating background colours.  
**1** \- _(On)_ Report uses alternating background colours, set using **SetBackgroundColour( )** method.  
**2** \- _(Default)_ Use of alternating background colours based on setting %RW_BgColour1$ and %RW_BgColour2$ variables.  
**SetBottomMargin(**_MargSize_**)** |  Sets the size of the bottom margin. Returns **1**. _MargSize -_ Size of the margin in 1000's of an inch or **-1** to set printer default. See **[SetPrinterProperties( )](Overview.htm#setprintprops)**.  
**SetColumnWidth(**_Col_**,**_Width_**)** |  Sets the width of a column. Returns **1**. _Col -_ Number of column whose width is to be adjusted. _Width -_ Width of the column, in points (72's of an inch).  
**SetData$(**_VarName$,Val$_**)** |  Assigns a string value to a variable used in the report. _VarName$ -_ Name of the variable to which a value will be assigned. _Val$ -_ String value to assign to the _VarName$_ variable. **_Example:_** CurrentRecord$=x'SetData$("MyVar$","abc") returns the current record with the updated value.  
**SetData$(**_VarName$,Val_**)** |  Assigns a numeric value to a variable used in the report. _VarName$ -_ Name of the variable to which a value will be assigned. _Val_ \- Numeric value to assign to the _VarName$_ variable. **_Example:_** CurrentRecord$=x'SetData$("MyVar",12) returns the current record with the updated value.  
**SetDataSource(**_ds$_**,**_st$_**[,**_fo$_**])  
  
SetDataSource( )** |  Sets the data source to be used by the report. Arguments include: _ds_ _$ -_ Table name, file path, view name or data source name for a custom data source object. _st_ _$ -_ Source type: **L** (table name), **P** (file path), **V** (view name), **O** (custom data source object). _fo_ _$ -_ File object name (i.e. name of the custom data source object). For source type **O** only. Returns the object handle if successful, **0** if not.  _No arguments_ will reset the data source, source type and source class to null.  
**SetDynamicFilter(**_Expression_ ,**[**_Desc$_**])** |  Creates a filter set consisting of a filter containing a free-form PxPlus expression that can be evaluated to a Boolean value (0/1). **_Example:_** InvoiceDate$>=StartDate$ AND InvoiceDate$<=EndDate$ An optional description may be included to set the **[DynamicFilterDescription$](Overview.htm#dynfiltrdesc)** property. (This can also be set individually.) **_Example:_** InvoiceDate$ is between StartDate$ and EndDate$ Returns **1** if the expression is valid. _(The SetDynamicFilter( ) method was added in PxPlus 2022.)_  
**SetDynamicFilterFields([**_Fields$_**])** |  Sets a list of fields to be included or excluded from the list of fields available for **[Dynamic Filters](../../Designing%20a%20Report/Defining%20the%20Data/Data%20Filters.htm#dynamic)**. The list consists of a **+** (_plus sign_) followed by the variables to include or a **-** (_minus sign_) followed by the variables to exclude. The field separator can be any character but should also trail the list. **_Example:_** -CST_Balance,CST_Code$, would exclude the CST_Balance and CST_Code$ variables from the list of variables available for Dynamic filters. +Country$;Region$;State$; would mean that only the Country$, Region$ and State$ variables would be available for Dynamic filters. If _Fields$_ is null or omitted, all fields are available. Returns **1**. _(The SetDynamicFilterFields( ) method was added in PxPlus 2022.)_  
**SetFont(**_Font$_**)** |  Sets the default font for the report. Returns **1**. _Font$ -_ Comma-separated string consisting of the font name and optionally, the negative point size and the style (**B** \- bold and/or **I** \- italics). **_Example:_** SetFont("Arial,-12,BI")  
**SetHyperlink(**_Groupidx,Lineidx,Cellidx,Hyperlink$,Xflg$,Option$_**)  
  
SetHyperlink(**_CellObjID,Hyperlink$,Xflg$,Option$)_ |  Puts an HTML hyperlink in the specified cell. (The associated text to be displayed on the report must be specified by setting the cell's **Format$** and **Value$** properties independently.) **_Where:_** _Hyperlink$_ \- Hyperlink address (may be fixed literal or expression). _Xflg$_ \- X, F or blank (Default). "X" indicates that _Hyperlink$_ is an expression. _Option$_ \- Display option: **0** \- Use current browser window. (Default)  
**1** \- Use new browser window.  
**SetImage(**_Groupidx,Lineidx,Cellidx,ImagePath$,Xflg$,DispOpt$_**)  
  
SetImage(**_CellObjID,ImagePath$,Xflg$,DispOpt$_**)** |  Puts an image in the specified cell. (Alternate text may be specified by setting the cell's **Format$** and **Value$** properties independently.) **_Where:_** _ImagePath$_ \- Path to the image (may be fixed or expression). _Xflg$_ \- X, F or blank (Default). "X" indicates that _ImagePath$_ is an expression. _DispOpt$_ \- Display option: **1** \- Original size, align top left  
**2** \- Original size, centre in region  
**3** \- Resize to fit region  
**4** \- Resize with same aspect ratio, align top left  
**5** \- Resize with same aspect ratio, centre in region  
**SetInputSort([**_KeyNumber_**])** |  Sets the key number for reading data in a custom sort. _KeyNumber_ \- Input key number for reading in the data or **-1** to set it to Auto; i.e. the report generator will automatically determine the input key number.  
**SetIsAnyOf(**_Seq,Values$,Type$,Case$_**)** |  Invokes the **SetAnyOfValues( )** method in the ***rpt/rptfilter** class to set up a memory file for the associated **[IsAnyOf( )](Overview.htm#isanyof)** method. |  _Seq_ |  Sequence number to set up an **isAnyOf( )** method. The first reference to an **isAnyOf( )** method should have a sequence of 1, the second instance 2, etc.  
---|---  
_Values$_ |  String of **|**  _(pipe)_ separated values to be tested in the **isAnyOf( )** method.  
_Type$_ |  Type of value (**N** =Numeric or **S** =String) to be tested in the **isAnyOf( )** method.  
_Case$_ |  Case flag for testing: **0** (Case insensitive) or **1** (Case sensitive).  
  
_(The SetIsAnyOf method( ) was added in PxPlus 2023.)_  
  
**SetLeftMargin(**_MargSize_**)** |  Sets the size of the left margin. Returns **1**. _MargSize -_ Size of the margin in 1000's of an inch or **-1** to set printer default. See **[SetPrinterProperties( )](Overview.htm#setprintprops)**.  
**SetLink(**_idx,LinkString$_**)** |  Populates the **[rptlink](../rptlink.md)** object and opens a channel to the related data source. _idx_ \- Sequence number for the **rptlink** object. _LinkString$_ \- A string comprised of a concatenated list of _LinkID$_ values that represent the chain of links from the main data source to the related data source specified in the **rptlink** object. Returns **1** if successful, **0** if not.  
**SetMargins(**_Left_**,**_Top_**,**_Right_**,**_Bot_**)** |  Sets all printer margins. Returns **1**. _Left -_ Left margin size  
_Top_ \- Top margin size  
_Right -_ Right margin size  
_Bot_ \- Bottom margin size Margin sizes are in 1000's of an inch. Printer default is indicated using **-1**. If a value is negative, then the default **-1** is set. See **[SetPrinterProperties( )](Overview.htm#setprintprops)**.  
**SetOutputChannel(**_Chan_**)** |  Sets the output channel. The **ReportDestinationPath$** property is cleared. In the case of report definitions generating multiple reports, the reports will be written to the output channel in a single output file. _(The SetOutputChannel method was added in PxPlus 2022.)_  
**SetOutputDevice(**_DevCode$_**)** |  Sets the device to handle output. _DevCode$ -_ Single letter code to indicate the output device: **P** \- Printer   
**C** \- Clipboard   
**F** \- PDF file   
**H** \- HTML file   
**T** \- Tab-delimited file   
**V** \- PxPlus Viewer   
**U** \- Custom output object If code is invalid, the device is set to P. Returns **1** if successful, **0** if not.  
**SetPageOrientation(**_OrCode$_**)** |  Sets printer orientation. _OrCode$ -_ Valid arguments are **P** (Portrait) or **L** (Landscape). Returns **1** if the argument is valid, **0** if not. See **[SetPrinterProperties( )](Overview.htm#setprintprops)**.  
**SetParameter(**_Parm$_**,**_Val$_**)  
  
SetParameter(**_Parm$_**,**_Val_**)  
  
SetParameter(**_idx_**,**_Val$_**)  
  
SetParameter(**_idx_**,**_Val_**)** |  Sets the string value of a parameter. _Parm$ -_ Name of parameter (not case sensitive) to be set. _idx_ _-_ Sequence number of the parameter to be set. _Val$ -_ Parameter value to be assigned. May be used for string or numeric parameter values. _Val -_ Numeric parameter value to be assigned. Returns **1** if successful, **0** if the named parameter does not exist or if value is outside defined range.  
**SetPaperSize(**_FormNumber_**)** |  Sets the form number to use when opening a printer device. If the _FormNumber_ is non-zero, then the **PAPERSIZE=**_FormNumber_ clause will be used when opening the printer.  
**SetParameterPanel([**_Panel$_**,**_Lib$_**])** |  Set the name of the panel and panel library to be used in the user parameter interface. If set, the parameter program will be set to null. **SetParameterPanel( )** with no arguments resets the parameter panel to null.  
**SetParameterProgram(**_Prog$_**[,**_Xflg$_**])** |  Set the path of the program to be used in the user parameter interface. If set, the parameter panel and library will be set to null. _Prog$_ \- Contains the pathname of the program or an expression that will be evaluated to get the pathname. _Xflg$_ \- "F" or "X" to indicate whether _Prog$_ contains a fixed value (F) or an expression (X). **_Example:_** SetParameterProgram("%ParamProgR","X"),   
SetParameterProgram("ParamProg") **SetParameterProgram( )** with no arguments resets the parameter program to null.  
**SetPostReportLogic([**_Type$,Logic$_**])** |  Specify logic to invoke when a report is complete. A report is considered complete when the report file is physically closed or, in the case where physical files are not being generated (such as output to the printer, Clipboard or Viewer), when the virtual file would logically be closed. In the case where multiple reports are being generated for individual groups using the **[Start New Report](../../Designing%20a%20Report/Creating%20the%20Report%20Layout/Grouping%20the%20Data.htm#Mark3)** group option, the logic is invoked after each individual file is complete. Logic types can consist of: |  **C** |  A program and optional arguments to call. **_Example:_** "programName",OutputDevice$, DestinationPath$, INV_NUM$  
"myprogram;mylabel",CurrentRecord$, this'recordIolist$()  
---|---  
**X** |  PxPlus statement to execute. **_Example:_** msgbox DestinationPath$, "Testing Post Report Logic"  
**M** |  A method from the user defined **[Logic Object Interface](../../Report%20Writer%20User%20Interfaces/Logic%20Object%20Interface/Overview.md)** to invoke. **_Example:_** myMethod(OutputDevice$, DestinationPath$, INV_NUM$)  
PostReportLogic(this)  
  
When the logic is invoked, it has access to report properties, field names and method calls (using the report object handle variable THIS), which can be used as arguments.

If _Type$_ and _Logic$_ are omitted or blank, the Post Report Logic is set to null.

_(The SetPostReportLogic method was added in PxPlus 2022.)_  
  
**SetPrinterProperties( )** |  Sets defined printer properties. The **SetMargins( )** , **SetLeftMargin( )** , **SetRightMargin( )** , **SetTopMargin( )** , **SetBottomMargin( )** , and **SetPageOrientation( )** must be followed by a **SetPrinterProperties( )** method in order to be set. All must precede an **OPEN** to take effect. **SetPrinterProperties( )** also saves off the original printer defaults so they can be restored using the **ResetPrinterProperties( )** method. Returns **1**.  
**SetReportDestinationPath(**_PathExpr$_**)** |  Validates and sets the report destination path expression stored in the **[ReportDestinationPath$](Overview.htm#rptdestpath)** property. The destination path must be a valid PxPlus expression. Returns **1** if successful, **0** if not. _(The SetReportDestinationPath method was added in PxPlus 2022.)_  
**SetRightMargin(**_MargSize_**)** |  Sets the size of the right margin. Returns **1**. _MargSize_ \- Size of the margin in 1000's of an inch or **-1** to set printer default. See **[SetPrinterProperties( )](Overview.htm#setprintprops)**.  
**SetScale(**_ScalingFactor$_**)** |  **_(For Internal Use Only)_** Sets the scaling factor. Scaling factor is a computed fractional number greater than **0**. A factor between **0** and **1** would decrease the size of the output, and a factor greater than **1** would increase the size. The scaling factor is set internally in the **StartReport( )** method.  
**SetSort(**_KeyName$_**)  
  
SetSort(**_KeyNumber_**)**  
**  
SetSort(**_KeyNumber_**[**_,InputKeyNumber_**])** |  Sets pre-defined sort sequence. Returns **1** if successful, **0** if not. _KeyName$ -_ Name of key to be used as sort sequence. _KeyNumber -_ Set to **-1** for a custom sort. For a pre-defined sort, set to the number of the key to be used as the sort sequence. (Base **0** for primary key). _InputKeyNumber -_ Input key number for reading in the data.  
**SetTopMargin(**_MargSize_**)** |  Sets the size of the top margin. Returns **1**. _MargSize -_ Size of the margin in 1000's of an inch or **-1** to set printer default. See **[SetPrinterProperties( )](Overview.htm#setprintprops)**.  
**SetUserOutputObject$(**_Lvl$,ObjNm$_**[,**_Xflg$_**])** |  Set the name of the user output object for the specified level. _Lvl$_ \- Level at which to apply the output object: **D** \- Default level  
**R** \- Report level _ObjNm$_ \- Contains the name of the object or an expression that will be evaluated to get the object name. _Xflg$_ \- "F" or "X" to indicate whether _ObjName$_ contains a fixed value (F) or an expression (X).  
**SortItemCount( )** |  Returns the number of segments in the sort sequence.  
**Source( )** |  Returns the handle for the data source object.  
**SourceIolist$( )** |  Returns the data source IOList in compiled format.  
**SourceKeyIolist$( )** |  Returns the key IOList in compiled format for data sources with external keys.  
**StartReport( )** |  Initialize the workspace required to generate the report. Returns **1**.  
**StaticSourceIolist$( )** |  Returns a data source IOList in compiled format that can be used to declare a Static IOL (i.e. variables have no formatting).  
**_InitInternalLibraryBlock( )** |  **_(For Internal Use Only)_**  
**_LoadInternalLibraryBlock( )** |  **_(For Internal Use Only)_**
