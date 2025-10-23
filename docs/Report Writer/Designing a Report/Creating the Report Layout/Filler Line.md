# Creating the Report Layout 

**Filler Line** |  **__**  
---|---  
  
A filler line is a single line that is used to fill the space between the last detail, group footer or summary line printed and the page footer (or page bottom). It allows column formats (lines, background colours, etc.) to be extended to the bottom of the page.

**_Example:_**

The report on the left does not have a filler line, while the one on the right does.

  
**_Without a Filler Line_** |    
**_With a Filler Line_**  
---|---  
  
The filler line fills the gap by printing a single line whose vertical height is stretched from the bottom of the last printed line to the top of the page footer or the bottom of the page if no page footer is defined.

To add a filler line, select the _Include Filler line section_ check box at the bottom of the **Groups** window. To invoke the **Groups** window, select _Groups_ from the Report Designer _Edit_ menu or right click on the data source in the left data pane and select _Define Groups and Group Functions_ from the popup menu. Alternatively, click on the cell displaying a small arrow next to a section line in the leftmost column of the layout.

A Filler section will be added to the Report Designer grid immediately before the Page Footer. It will automatically set the _Use Filler line to fill gap between last line and page bottom_ option for all currently defined control breaks and detail lines.

> If desired, the Filler option can be removed from individual control breaks by deselecting this option from the group _Properties_ definition (see **[Grouping the Data](Grouping%20the%20Data.htm#Mark1)**). To remove it from the detail line section, deselect the Filler option at the bottom of the **Detail Line Groups** tab (see **[Conditional Detail Groups](Conditional%20Detail%20Groups.htm#Mark1)**).
