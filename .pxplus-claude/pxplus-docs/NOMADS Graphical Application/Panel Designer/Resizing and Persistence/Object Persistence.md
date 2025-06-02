# Resizing and Persistence 

**Object Persistence** |  **__**  
---|---  
  
This feature is similar to **Panel Persistence** in NOMADS but is used specifically with input-type controls (multi-lines, list boxes, drop boxes and grids). The coordinates and format information for the controls specified will be saved on termination of a panel. The controls are restored to the same size and location along with the new format definition, if applicable, the next time they are created.

The same generic program *winpnl is used. You can also choose to write your own program. For information on *winpnl, see **[Panel Persistence](Panel%20Persistence.md)**.

Once **Panel Persistence** and **[Resizing Input Controls](Resizing%20Input%20Controls.md)** have been turned **_On_** , you need to decide whether you want object persistence set globally or on individual controls. For _global activation_ (at the application level), set the global variable %NOMAD_OBJECT_PERSISTENCE=1.

To activate this feature for _individual controls_ , use the _Object Persistence_ setting (**Attributes** tab in the Folder Style view) for **[List Box](../../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**, **[Drop Box](../../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[Multi-Line](../../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)** or **[Grid](../../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.md)** controls. Three options are provided:

|  **_Default_** |  Determined by _global activation_ setting.  
---|---|---  
|  **_Always_** |  Object Persistence will always be on for the selected control.  
|  **_Never_** |  Object Persistence is never set for the selected control.
