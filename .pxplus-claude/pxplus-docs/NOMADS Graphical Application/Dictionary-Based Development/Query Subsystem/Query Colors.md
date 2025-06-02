# Query Subsystem  
  
**Query Colors**|   
---|---  
  
You can customize the look of each type of query display (**Query+** , **Drop Query** and **Classic Query**) by applying color settings and Themes.

_(Query Colors support was added in PxPlus 2017.)_

##  Query+

The setting for the background color for the query panel (below the records list) can be specified on the **Query Header Definition[Font/Color](Query%20Header.htm#font)** tab. The foreground color has no effect.

If the system-wide **[StdRowHilight1](../../../mnemonics/option.htm#StdRowHilight1)** (and **[StdRowHilight2](../../../mnemonics/option.htm#StdRowHilight2)**) options are set using the **['OPTION'](../../../mnemonics/option.md)** mnemonic, the records list on the query lookup panel will display using the specified colors:

> **'OPTION'("StdRowHilight1"** ,_color_ _$_**)**

If a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** is specified, all controls on the query lookup panel (excluding those in the tool bar), including the column headers and records list, will display using the Theme colors, and the system-wide colors will be overridden.

If the _Gray/White Display_ option on the **Query Header Definition[Options](Query%20Header.htm#options)** tab is selected for the query, this option will override the Theme's highlight/background colors for the records list. The color of individual query columns is also configurable as a _Display Option_ when defining the column. See **[Query Column Display](Query%20Definition.htm#querycolumndisplay)**.

_(Background color support for Query+ was added in PxPlus 2021.)_

##  Drop Query

The setting for the background color for the drop query can be specified on the **Query Header Definition[Font/Color](Query%20Header.htm#font)** tab.

If the system-wide **[StdRowHilight1](../../../mnemonics/option.htm#StdRowHilight1)** (and **[StdRowHilight2](../../../mnemonics/option.htm#StdRowHilight2)**) options are set using the **['OPTION'](../../../mnemonics/option.md)** mnemonic, the records list on the query lookup panel will display using the specified colors:

> **'OPTION'("StdRowHilight1"** ,_color_ _$_**)**

If a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)** is specified, the column headers and records list colors will display using the Theme colors. The background color of the records list will display using the color specified in **[%NOMADS'Drop_Qry_Color$](../../Appendix/NOMADS%20Variables/Overview.htm#dropqrycolor)**, and any Theme-related color will be overridden.

If %NOMADS'Drop_Qry_Color$ is not specified **_and_** a Theme is in effect that specifies a background color for a List Box, then the Theme color is used as the background color.

If %NOMADS'Drop_Qry_Color$ is not specified **_and_** no Theme is specified, then the background color will be RGB:240,255,240 (Light Green) unless a color is specified on the **Query Header Definition[Font/Color](Query%20Header.htm#font)** tab.

If the _Gray/White Display_ option on the **Query Header Definition[Options](Query%20Header.htm#options)** tab is selected for the query, then the highlight/background colors will be gray and white, overriding all other colors. The color of the individual query columns is also configurable as a _Display Option_ when defining the column. See **[Query Column Display](Query%20Definition.htm#querycolumndisplay)**.

_(Background color support for Drop Query was added in PxPlus 2021.)_

##  Classic Query

The settings for the foreground and background colors for the query panel label region (above the records list) can be specified on the **Query Header Definition[Font/Color](Query%20Header.htm#font)** tab.

If a **[Theme](../../System%20Maintenance%20Tools/System%20Options/Themes.md)**is specified, then the _Foreground_ and _Background_ colors are overridden, and the Theme colors are applied to the various controls on the panel (i.e. Multi-Lines, Buttons, etc.) but **_not_** to the records list.

To display alternating gray/white backgrounds in the records list, select the _Gray/White Display_ option on the **Query Header Definition[Options](Query%20Header.htm#options)** tab.
