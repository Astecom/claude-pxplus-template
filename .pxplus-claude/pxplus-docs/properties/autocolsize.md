# Control Object Properties

**AutoColSize** |  **_Automatically Size Columns to Fit_**  
---|---  
  
## Description

Automatically size columns to fit

This property is used to control the automatic adjustment of column sizes so that the total space occupied by the columns will fill the control width. When this property is set to 1, the system will adjust all columns in the control so that the sum of the column widths will completely fill the control width exclusive of any scrollbars that may be present. Once set, any resizing of the control will again re-apply the automatic columns sizing logic.

When adjusting the column sizes, the system will compute the new size based on percentages.

**_Example:_**

Consider the following - Control has three columns:

  * Column 1 is 40 pixels wide.
  * Column 2 is 10 pixels wide.
  * Column 3 is 50 pixels wide.



If this control had AutoColSize enabled, it would determine that column 1 was 40% of the total column width, column 2 was 10%, and column 3 was 50%. These columns would each be adjusted based on the total width of the control to retain the same percentages. Therefore, if the control itself was 150 pixels wide, column 1 would become 150*40%=60 pixels, column 2 would become 150*10%=15 pixels, and column 3 would become 150*50%=75 pixels.

## Default 

0 - No automatic column resizing

## Used By 

**GRID** **REPORT_VIEW**
