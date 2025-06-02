# Creating the Report Layout

**Line and Page Advancement**|   
---|---  
  
##  Line Advancement

For printer type outputs (Printer, PDF and Viewer), as each line is printed, the next line is advanced by the height of the line just printed, which is the default. The _Line Advancement_ option allows you to override normal line advancement and print two consecutive lines at the same vertical location.

_(Line Advancement options were added in PxPlus 2021.)_

This functionality is commonly used to create a grouped report where the information on the group header is combined with the first detail line, and the information on the group footer is combined with the last detail line.

For information on controlling page advancement, see **[Page Advancement](Line%20Advancement.htm#page)**.

**_Example:_**

This report is grouped and sorted by Site, which is displayed in bold in the group header line. The various totals are displayed in bold in the group footer line.

> Below is the report definition for this example.

> Normally, these lines are printed separately. By changing the line advancement of the header line to overlay the next line, it combines with the first detail line. Similarly, by changing the line advancement of the group footer to overlay the previous line, it combines with the last detail line.

#### **Helpful Tips:**  
Select the _Repeat group header on each new page_ option on the **[Group Definition](Grouping%20the%20Data.htm#Mark1)** to reprint the group header lines when paging occurs so that the group information is displayed for the remaining detail lines.  
  
It is also recommended that blank lines between groups be included at the top of the group header rather than at the bottom of a footer. This avoids situations where a header is displayed with no details when the _Repeat group header on each new page_ option is selected for a group and the footer consists of a single blank line.

_Line Advancement_ options are available via popup menus by right clicking on row headers or on individual cells:

_Normal Line Advance_ |  **_(Default)_** The next line is advanced by the height of the line just printed.  
---|---  
_Overlay Next Line_ |  The current and next lines are printed at the same vertical location. When selected, a down arrow is displayed on the row header.  
_Overlay Previous Line_ |  The current and previous lines are printed at the same vertical location. When selected, an up arrow is displayed on the row header.  
  
#### **Note:**  
Line advancement options are applicable to printer type outputs only (i.e. Printer, PDF and Viewer output).  
  
For all other output types (i.e. Clipboard, HTML documents and Tab-delimited files), each report line is output as a separate line.

##  Page Advancement

Page advancement is only applicable to printer compatible outputs (Printer, PDF and Viewer). By default, whenever a report group is printed (whether it is control break group headers and footers, a detail line group or a report summary group), the group is printed as a unit. The height of the group is determined, and if the group of lines does not fit in the remaining space on the page, the page is advanced and the group of lines is printed on the new page.

Page advancement can also be controlled in the context of printing a report header or trailer (see **[Report Header and Trailer](Report%20Header%20and%20Trailer.md)**) and the control break groups and report summary (see **[Grouping the Data](Grouping%20the%20Data.md)**). Report headers and trailers provide a _Use separate page_ option that can be selected. Control break groups and report summary provide a _Start new page when group changes_ option.

It is also possible to force a new page within a Detail line group. To force a new page when a particular detail line is printed, click on the line to select it, and then either right click on the row header to invoke the row popup menu or right click on a cell in the line to invoke the designer popup menu. From the popup menu, click the _Force New Page_ option. This option can be toggled between _On_ and _Off_. By default, it is _Off_. When it is _On_ , a check mark displays beside the option, and a line appears as a top border in the row header to indicate that a form feed will occur prior to printing the line.

_(The Force New Page option was added in PxPlus 2022.)_

## See Also

**[Grouping the Data](Grouping%20the%20Data.md)**
