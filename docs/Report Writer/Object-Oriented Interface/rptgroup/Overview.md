# Object-Oriented Interface

**rptgroup** |  **__**  
---|---  
  
The **rptgroup** object is a data member of the **[pvxreport](../pvxreport/Overview.md)** object interface, delegated to store and manipulate a group or section definition. One object is created for each report section.

The order in which various **rptgroup** objects are created is important, as the sections must be added in a very specific sequence: Page header, [Group 01 header], [Group 02 header], [Group _nn_ header], Detail Line, [Detail Line _nn_ ], [Group _nn_ footer], [Group 02 footer], [Group 01 footer], Report Summary, Page Footer. The **pvxreportGetGroup( )** method can be used to retrieve the object handle for a **rptgroup** object, which allows access to all the object's methods and properties.

The **rptgroup** object has its own subordinate object, the **[rptline](../rptline/Overview.md)** object, which in turn has its own subordinate object, the **[rptcell](../rptcell/Overview.md)** object. These are used to define the report lines and data cells in a report section. The **[rptfilterset](../rptfilterset/Overview.md)** object defines conditions associated with conditional detail line groups. The **rptgroup** object has methods to create and access all these objects.

## rptgroup Properties

The following table lists the properties of the **rptgroup** object:

**Property** |  **Description**  
---|---  
**BlankPageToFollow** |  **_(Report Header Only)_** Follow the Report Header with a blank page (for duplex printing).  
**CenterContents** |  **_(Report Header/Trailer Only)_** Centre contents in the page.  
**Columns$** |  Comma-separated list of column widths in points.  
**CountPage** |  **_(Report Header Only)_** Include the Header page(s) in the page count.  
**DataSource$** |  Reference for the data source that is associated with this calculated field. Format is _Source, SourceType._  
  
**_Examples:  
  
_** LogicalFileName,L   
Path,P  
ViewName,V   
SourceClass;SourceName,O  
  
This property is only used in report libraries. Read only. Set using **[SetDataSource( )](Overview.htm#setdatasource)** method.  
**FillToBottom** |  Boolean value (0/1) to indicate if the filler line is to be used to fill the space between the current section and the page footer (or page bottom) when the current section is the last section to be output to a page.  
**IncludePageFooter** |  **_(Report Header/Trailer Only)_** Output the page footer with the Report Header or Trailer.  
**IncludePageHeader** |  **_(Report Header/Trailer Only)_** Output the page header with the Report Header or Trailer.  
**Level$** |  Two-character code indicating the section level: |  **PG** |  Page level  
---|---  
**L1** |  Detail line  
**00** |  Report summary level  
**01 - 16** |  Control break levels  
****** |  Library  
  
When PG and L1 levels are set, the **Name$** property is set to null, and the **NewPage** and **RepeatHeader** properties are set to 0. When the 00 and RP levels are set, the **Name$** property is set to null. **Level$** is set to null if the code is invalid.  
  
**Name$** |  Name of the sort element on which a control break group is based following rules of element names; i.e. starts with an alpha character, followed optionally by alphanumeric, period and underscore characters. **Name$** is null for page, detail and report summary section levels.  
**NewPage** |  Boolean value (0/1) to indicate if a new page is to be started when a control break or report summary occurs. Not applicable to page and detail line levels.  
**NewReport** |  **_(Control Break Level Only)_** Boolean value (0/1) to indicate whether a new report file is to be created whenever the group changes. The **[MultipleReports](../pvxreport/Overview.htm#multrpts)** property of the parent **pvxreport** object is automatically adjusted based on this setting. Only one control break level can have this property turned On. _(The NewReport property was added in PxPlus 2022.)_  
**OutputOddPageCount** |  **_(Report Trailer Only)_** Output Report Trailer only if true page count is odd (for duplex printing).  
**RepeatHeader** |  Boolean value (0/1) to indicate if the control break group header lines are to be repeated at the top of each page.  
**ResetPage** |  **_(Control Break Level Only)_** Boolean value (0/1) to indicate whether to reset the current page number to one when the group changes.  
**Type$** |  Single-character code indicating the type of report section:   
  
**H** \- Header   
**D** \- Detail line   
**F** \- Footer   
**L** \- Library   
  
Set to null if code is invalid.  
  
## rptgroup Methods

The following table lists the methods of the **rptgroup** object:

**Method** |  **Description**  
---|---  
**AddCell(**_Lnidx_**)** |  Creates a new **[rptcell](../rptcell/Overview.md)** object using the next available sequence number. Only cells with data or formatting need to have an **rptcell** object created for them.  
  
_Lnidx_ _-_ Sequence number of the line where the cell is located.  
  
**CellCount** for the specified line is incremented. Returns the object handle if successful, **0** if not.  
**AddFilter(**_Setidx_**)** |  Creates a new **[rptfilter](../rptfilter/Overview.md)** object within the **[rptfilterset](../rptfilterset/Overview.md)** object specified by _Setidx_ using the next available sequence number. One object is created for each filter set. The sequence number can be used as the index number to identify the object when using the **[RemoveFilter( )](Overview.htm#removefilter)** and **[GetFilter( )](Overview.htm#getfilter)** methods.  
  
**FilterCount** for the **rptfilterset** object is incremented. Returns the object handle if successful, **0** if not.  
**AddFilterSet( )** |  Creates a new **[rptfilterset](../rptfilterset/Overview.md)** object using the next available sequence number. One object is created for each filter set. The sequence number can be used as the index number to identify the object when using the **[RemoveFilterSet( )](Overview.htm#removefilterset)** and **[GetFilterSet( )](Overview.htm#getfilterset)** methods.  
  
**FilterSetCount** is incremented. Returns the object handle if successful, **0** if not.  
**AddLine( )** |  Creates a new **[rptline](../rptline/Overview.md)** object using the next available sequence number. It is important to add the lines in the correct sequence, as this is the sequence in which the lines in the group will be displayed in the report.  
  
**[LineCount](Overview.htm#linecount)** for the group is incremented. Returns the object handle if successful, **0** if not.  
**CellCount(**_Lnidx_**)** |  Returns the number of data bearing cells in a line.  
  
_Lnidx_ _-_ Sequence number of the line where the cell is located. Returns **0** if the argument is invalid.

#### **Note:  
** A cell contains data or formatting information. Empty cells do not have an assigned object.  
  
**ClearFilters( )** |  Removes all **[rptfilterset](../rptfilterset/Overview.md)** objects in the set and resets **FilterSetCount** to **0**.  
**ClearLines( )** |  Removes all **[rptline](../rptline/Overview.md)** objects from the group and resets **LineCount** to **0**.  
**FilterCount(**_Setidx_**)** |  Returns the number of **[rptfilter](../rptfilter/Overview.md)** objects in the **[rptfilterset](../rptfilterset/Overview.md)** object specified by _Setidx_ _._ If _Setidx_ is omitted, returns the number of **rptfilter** objects in the first filter set.  
**FilterSetCount( )** |  Returns number of **[rptfilterset](../rptfilterset/Overview.md)** objects in the set.  
**GetCell(**_Lnidx**,** Cellidx_**)** |  Returns the handle for an **[rptcell](../rptcell/Overview.md)** object.  
  
_Lnidx_ _-_ Sequence number of the line where the cell is located.  
  
_Cellidx_ _-_ Sequence number of the **rptcell** object.  
  
This allows access to all **rptcell** properties. Returns **0** if the arguments are invalid.  
**GetCondition$(**_Setidx_**,**_Filteridx_**)** |  Returns a string containing the PxPlus expression associated with a filter.  
  
_Setidx_ \- Index indicating which **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_Filteridx_ \- Index of the **[rptfilter](../rptfilter/Overview.md)** object.  
**GetFilter(**_Setidx**,** Filteridx_**)** |  Returns the handle for an **[rptfilter](../rptfilter/Overview.md)** object.  
  
_Setidx_ \- Index indicating which **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_Filteridx_ \- Index of the **rptfilter** object.t  
**GetFilterSet(**_idx_**)** |  Returns the handle for an **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_idx_ _-_ Sequence number of the **rptfilterset** object. This allows access to all **rptfilterset** properties and methods. Returns **0** if not successful.  
**GetGroupDefinition$( )** |  Returns a formatted string based on section information. The format of the string is that used to define a **BREAK=** entry in the report definition file. Returns null if the information in the **rptgroup** object is invalid. |  **Section** |  **Format**  
---|---  
Page header section |  **Header PG**  
Control break group headers |  **Header** _nn Name_**[OPT=P1H]** **_Where:_** |  _nn_ |  The control break level number  
---|---  
**OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**1** |  Indicates **ResetPage** property is set  
**H** |  Indicates **RepeatHeader** property is set; e.g. Header 01 CompanyId OPT=H  
Detail line section |  **Detail L1 [OPT=F]** **_Where:_** |  **OPT=** |  Optional: |  **F** |  Indicates **FillToBottom** property is set  
---|---  
Control break group footers |  **Footer** _nn Name_**[OPT=FL]** **_Where:_** |  _nn_ |  The control break level number; e.g. Footer 01 CompanyId  
---|---  
**OPT=** |  Optional: |  **F** |  Indicates **FillToBottom** property is set  
---|---  
**L** |  Indicates **LockToBottom** property is set  
Report summary section |  **Footer 00 [OPT=P1FL]** **_Where:_** |  **OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**1** |  Indicates **ResetPage** property is set  
**F** |  Indicates **FillToBottom** property is set  
**L** |  Indicates **LocktoBottom** property is set  
Filler section |  **Filler**  
Page footer section |  **Footer PG**  
Report header section |  **Header RP [OPT=PTBCF+]** **_Where:_** |  **OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**T** |  Indicates **IncludePageHeader** property is set  
**B** |  Indicates **IncludePageFooter** property is set  
**C** |  Indicates **CenterContents** property is set  
**F** |  Indicates **BlankPageToFollow** property is set  
**+** |  Indicates **CountPage** property is set  
Report trailer section |  **Footer RP [OPT=PTBCOF]** **_Where:_** |  **OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**T** |  Indicates **IncludePageHeader** property is set  
**B** |  Indicates **IncludePageFooter** property is set  
**C** |  Indicates **CenterContents** property is set  
**O** |  Indicates **OutputIfOddPageCount** property is set  
**F** |  Indicates **FillToBottom** property is set  
Report library sections |  **Library** _nn Name_  
**GetLine(**_idx_**)** |  Returns the handle for an **[rptline](../rptline/Overview.md)** object.  
  
_idx_ _-_ Sequence number of line within the group.  
  
This allows access to all **rptline** properties and methods. Returns **0** if the arguments are invalid.  
**LineCount( )** |  Returns the number of lines in the section.  
**RemoveCell(**_Lnidx,Cellidx_**)** |  Removes an **[rptcell](../rptcell/Overview.md)** object from the section.  
  
_Lnidx_ _-_ Sequence number of the line in which the cell is located.  
  
_Cellidx_ _-_ Sequence number of the cell to be removed.  
  
If an **rptcell** object is removed, the sequence number of the **rptcell** objects with higher sequence numbers is adjusted down. **CellCount** is decremented for the line. Returns the object handle if successful, **0** if not.  
**RemoveFilter(**_Setidx_**,**_Filteridx_**)** |  Removes an **[rptfilter](../rptfilter/Overview.md)** object.  
  
_Setidx_ \- Index indicating which **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_Filteridx_ \- Index of the **rptfilter** object.  
**RemoveFilterSet(**_idx_**)** |  Removes an **[rptfilterset](../rptfilterset/Overview.md)** object.  
  
_idx_ \- Sequence number of the object to be removed.  
  
If an **rptfilterset** object is removed, the sequence number of the **rptfilterset** objects with higher sequence numbers is adjusted down. **FilterSetCount** is decremented. Returns the object handle if successful, **0** if not.  
**RemoveLine(**_idx_**)** |  Removes an **[rptline](../rptline/Overview.md)** object from the section.  
  
_idx_ _-_ Sequence number of line to be removed.  
  
If an **rptline** object is removed, the sequence number of the **rptline** objects with higher sequence numbers is adjusted down. Removes all **[rptcell](../rptcell/Overview.md)** objects associated with the line. **LineCount** is decremented for the section. Returns the object handle if successful, **0** if not.  
**SetDataSource( )  
  
SetDataSource(**_Source$,Type_ _$_**)  
  
** |  Format and set the value in the **[DataSource$](Overview.htm#datasource)** property.  
  
_Source$_ \- Name of the data source. This can be a logical table name, a file path, a view or a class name;source name. (Custom source objects consist of the both the class name and source name separated by a semi-colon.)   
  
_Type$_ \- Single letter code denoting type of data source:  
  
**L** \- Logical table **  
** **P** \- File path  
**V** \- View  
**O** \- Custom source class  
  
Returns **1** if successful, **0** if not. If no arguments, resets the **DataSource$** property to null.  
**SetGroupDefinition(**_Def$_**)** |  Assigns **rptgroup** properties based on a formatted string. Returns **1**. The format of the string is that used to define a **BREAK=** entry in the report definition file.   
  
_Def$ -_ Formatted string containing the section information: |  **Section** |  **Format**  
---|---  
Page header section |  **Header PG**  
Control break group headers |  **Header** _nn Name_**[OPT=P1H]** **_Where:_** |  _nn_ |  The control break level number  
---|---  
**OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**1** |  Indicates **ResetPage** property is set  
**H** |  Indicates **RepeatHeader** property is set; e.g. Header 01 CompanyId OPT=H  
Detail line section |  **Detail L1 [OPT=F]** **_Where:_** |  **OPT=** |  Optional: |  **F** |  Indicates **FillToBottom** property is set  
---|---  
Control break group footers |  **Footer** _nn Name_**[OPT=FL]** **_Where:_** |  _nn_ |  The control break level number; e.g. Footer 01 CompanyId  
---|---  
**OPT=** |  Optional: |  **F** |  Indicates **FillToBottom** property is set  
---|---  
**L** |  Indicates **LockToBottom** property is set  
Report summary section |  **Footer 00 [OPT=P1FL]** **_Where:_** |  **OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**1** |  Indicates **ResetPage** property is set  
**F** |  Indicates **FillToBottom** property is set  
**L** |  Indicates **LocktoBottom** property is set  
Filler section |  **Filler**  
Page footer section |  **Footer PG**  
Report header section |  **Header RP [OPT=PTBCF+]** **_Where:_** |  **OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**T** |  Indicates **IncludePageHeader** property is set  
**B** |  Indicates **IncludePageFooter** property is set  
**C** |  Indicates **CenterContents** property is set  
**F** |  Indicates **BlankPageToFollow** property is set  
**+** |  Indicates **CountPage** property is set  
Report trailer section |  **Footer RP [OPT=PTBCOF]** **_Where:_** |  **OPT=** |  Optional: |  **P** |  Indicates **NewPage** property is set  
---|---  
**T** |  Indicates **IncludePageHeader** property is set  
**B** |  Indicates **IncludePageFooter** property is set  
**C** |  Indicates **CenterContents** property is set  
**O** |  Indicates **OutputIfOddPageCount** property is set  
**F** |  Indicates **FillToBottom** property is set  
Library headers |  **Library** _nn Name_
