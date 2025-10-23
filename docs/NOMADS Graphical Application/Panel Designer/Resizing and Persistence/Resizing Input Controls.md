# Resizing and Persistence 

**Resizing Input Controls** |  **__**  
---|---  
  
This feature in NOMADS allows users to resize specific input-style **[Panel Controls](../../Creating%20Panel%20Controls)** at run time by simply dragging their edges. **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls)**, **[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control)**, **[Multi-Line](../../Creating%20Panel%20Controls/Multi-Line%20Control)** and **[Grid](../../Creating%20Panel%20Controls/Grid%20Control)** controls all qualify as resizable. The cursor will automatically change to a _resize_ pointer when it is within four pixels from the edge of the selected control.

Most input controls can be expanded both vertically and horizontally; however, drop boxes and multi-lines that are one line high can only be expanded horizontally. **[Standard](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)** and **[Formatted](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)** list boxes should have their _No Height Adjustment_ attribute turned **_On_** to prevent the bottom of the list box from 'fluttering' when the size is adjusted and to give a true indication of the bottom edge.

To activate object resizing at the panel level, check the Size Adjustment property in the **[Panel Header](../Panel%20Header/Overview.md)**.

To activate at the application level, set the global variable %NOMAD_OBJECT_RESIZE=1. The global variable takes precedence over the Panel Header setting. See **[NOMADS Variables](../../Appendix/NOMADS%20Variables/Overview.htm#objectresize)**.

#### **Note:**  
When the panel itself is resized, individual objects that have been resized using this feature will be reset to their original dimensions. Then, they will be resized based on **[Panel Resizing](Panel%20Resizing.md)**.
