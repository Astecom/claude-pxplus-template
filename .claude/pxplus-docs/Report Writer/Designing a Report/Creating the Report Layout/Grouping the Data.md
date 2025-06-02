# Creating the Report Layout 

**Grouping the Data** |  **__**  
---|---  
  
Data can also include logical data groupings based on sort sequence. Whenever a value in the sort sequence changes, this marks the end of one data group and the beginning of the next. This is also known as a **_control break_**. For example, if an input source is sorted by company and department, then the data may be grouped by company, with each department as a sub-group.

In addition, you can generate multiple individual reports based on data groupings. For example, if you want to produce invoices using the Report Writer, you may want each invoice in a separate PDF file. If you are printing customer statements, you may want each statement in an individual file for emailing.

See **[Generating Multiple Reports](Grouping%20the%20Data.htm#Mark2)**.

_(The ability to generate multiple reports by groups was added in PxPlus 2022.)_

Each group level can have associated group functions to calculate counts, totals, averages, minimums and maximums. Each group can also have its own header and footer lines defined.

#### **Note:**  
If the sort sequence does not match the groupings you need, you will have to redefine the sequence to reflect your groups.

To add, update or remove control break groups, select the **Control Break Groups** tab on the **Groups** window.

To invoke the **Groups** window, select _Groups_ from the Report Designer _Edit_ menu or right click on the data source in the left data pane and select _Define Groups and Group Functions_ from the popup menu. Alternatively, click on the cell displaying a small arrow next to a section line in the leftmost column of the layout.

> The  **Control Break Groups** tab consists of the following:

_Add_ |  Launches the **Group Definition** window for adding a new group. When adding groups, start with Group level 01 (based on the first element in the sort sequence), then add other groupings in sequential order. You cannot skip groups. If you do not want headers/footers for a particular group, you can later remove the lines from that section of the report. This window consists of the following: |  **Group Header Options** |  |  _When group changes_ |  Click the drop-down arrow for a list of selections: |  _Continue with in-line placement_ |  Group lines continue on the next line available.  
---|---  
_Start new page_ |  Starts a new page for each new group.  
_Start new report_ |  Creates a separate individual report for the group, including report summary, header and footer sections. See **[Generating Multiple Reports](Grouping%20the%20Data.htm#Mark2)**. (Can only be assigned to one group.)  
_Reset page number to one (1)_ |  Resets the current page to 1 (whenever the group changes).  
_Repeat group header on each new page_ |  Forces header lines to be printed at the top of each page.  
  
_("When group changes" drop box was added in PxPlus 2022.)_  
  
**Group Footer Options** |  |  _Lock group footer to bottom of page_ |  Forces the group footer to be displayed at the bottom of the page.  
---|---  
_Use Filler line to fill gap between last line and page bottom_ |  **_(Available when Include Filler line section check box on the Main panel is selected)_** Causes a **[Filler Line](Filler%20Line.md)** to be output between the last line of the control break footer and the bottom of the page (if the control break footer is the last section to be output to a page).  
_Remove_ |  Deletes a selected group. Prior to deleting the group, a message will display.  
_Properties_ |  Updates the settings for a selected group.  
_Include Filler line section_ |  Adds a Filler section to the Report Designer grid immediately before the Page Footer. See **[Filler Line](Filler%20Line.md)**.  
  
When groups have been added, the layout will be updated with header and footer sections for the new groups, highlighted in green.

#### **Helpful Tips:**  
Select the _Repeat group header on each new page_ option to reprint the group header lines when paging occurs so that the group information is displayed for the remaining detail lines.  
  
It is also recommended that blank lines between groups be included at the top of the group header rather than at the bottom of a footer. This avoids situations where a header is displayed with no details when the _Repeat group header on each new page_ option is selected for a group and the footer consists of a single blank line.

##  Generating Multiple Reports

By default, a single output report is generated for a report definition. It is also possible to generate separate reports for individual groups within a report. For example, if you want to produce invoices using the Report Writer, you may want each invoice in a separate PDF file. If you are printing customer statements, you may want each statement in an individual file for emailing.

To create individual reports for a particular group, set the **Group Header** option _When_ _group changes_ to _Start new report_. (This option can only be set for one group.) The result will be individual reports based on that group, which will include their own report header, summary and report footer sections, if defined. This will apply to reports being sent to the printer, PDF files, HTML files and tab-delimited files. Reports sent to the Viewer or Clipboard, however, will result in a single output (i.e. a single Viewer instance or Clipboard data), but each grouping that would have been a single report will still have its own report header, summary and footer.

To create separate reports, it is necessary to specify a **[Destination Path Expression](../Report%20Designer/Overview.htm#dest_path)** in the report definition, as each report going to PDF, HTML or tab-delimited output requires a unique name. The _Destination Path Expression_ should be designed to evaluate to a unique path name for each file, possibly using record fields or date/time stamps in the path expression. If unique names are not generated for each file, the individual reports will be written together in one physical file.

Once a report is defined for multiple file output, the report can be generated interactively through the **Report Designer** interface or programmatically using either the called program ***rpt/runreport** with a single argument being the name of the report definition file or the **RunReport(**_RptDefFile_ _$_**)** method of the **pvxreport** object. You can also generate reports using the ***rpt/runreport** program with two arguments (the second being an output file path or output channel) or the **RunReport(**_RptDefFile$,Chan_**)** method. However, when a file name or channel is supplied, the _Destination Path Expression_ is overridden, and the individual reports are written together in a single output file. See **[Generating a Report](../../Generating%20a%20Report/Introduction.md)**.

_(The ability to generate multiple reports by groups was added in PxPlus 2022.)_

## See Also

**[Conditional Detail Groups](Conditional%20Detail%20Groups.md)**  
**[Report Header and Trailer](Report%20Header%20and%20Trailer.md)**  
**[Group Functions](Group%20Functions.md)**  
**[Line and Page Advancement](Line%20Advancement.md)**
