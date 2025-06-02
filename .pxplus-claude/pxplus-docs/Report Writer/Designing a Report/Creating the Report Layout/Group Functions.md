# Creating the Report Layout 

**Group Functions** |  **__**  
---|---  
  
Group functions are calculated values that can be applied at a group level (i.e. totals, averages, minimums, maximums, record and group counts). For example, if the data is grouped by company and department, the **Sum** function can be used to calculate company totals, as well as department totals, etc.

In addition, the **Count** function can count records (i.e. details) at each level, as well as count the number of times a control break group changes; e.g. the number of departments in a company, the number of companies and total number of departments in the report.

To define group functions, select the **Group Functions** tab on the **Groups** window. To invoke the **Groups** window, select _Groups_ from the Report Designer _Edit_ menu or right click on the data source in the left data pane and select _Define Groups and Group Functions_ from the popup menu. Alternatively, click on the cell displaying a small arrow next to a section line in the leftmost column of the layout.

> Group functions are defined in terms of their function (i.e. **Sum** , **Average** , etc.), as well as the data element to be used in the calculation.

A format display mask is assigned to the function; however, this may be changed for the individual function, or the default may be changed in **[Report Designer Options](../../Designer%20Options/Introduction.md)**.

Once defined, group functions appear in the list of available items on the left data pane in the **Report Designer** window.
