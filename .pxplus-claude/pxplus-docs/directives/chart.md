# Directives 

**CHART** |  **_Create/Control Chart_**  
---|---  
  
##  Formats

1. |  _[Define/Create:](chart.htm#Mark6)_ |  **CHART** _ctl_id_ ,**@(**_col,ln,wth,ht_**)** ,[,_ctrlopt_]  
---|---|---  
2. |  _[Load:](chart.htm#Mark8)_ |  **CHART LOAD** _ctl_id,strvar_ _$_[,**ERR** =_stmtref_]  
3. |  _[Clear Data:](chart.htm#Mark11)_ |  **CHART CLEAR** _ctl_id_[,**ERR** =_stmtref_]  
4. |  _[Clear Data and Titles:](chart.htm#Mark25)_ |  **CHART DELETE** _ctl_id_[,**ERR** =_stmtref_]  
5. |  _[Enable/Disable:](chart.htm#Mark14)_ |  **CHART** {**ENABLE** | **DISABLE**} _ctl_id_[,**ERR** =_stmtref_]  
6. |  _[Retrieve Value:](chart.htm#Mark16)_ |  **CHART FIND** _ctl_id,dataset_ ,_point,_{_numvar_ __ | _label$_}[,**ERR** =_stmtref_]  
7. |  _[Read Selected Set:](chart.htm#Mark18)_ |  **CHART READ** _ctl_id, dataset,eom$_[,**ERR** =_stmtref_]  
8. |  _[Update Existing Values:](chart.htm#Mark20)_ |  **CHART WRITE** _ctl_id,dataset,point,_{_data_ | _label$_}[,**ERR** =_stmtref_]  
9. |  _[Hide/Show:](chart.htm#Mark22)_ |  **CHART** {**HIDE** | **SHOW**} _ctl_id_[,**ERR** =_stmtref_]  
10. |  _[Remove:](chart.htm#Mark24)_ |  **CHART REMOVE** _ctl_id_[,**ERR** =_stmtref_]  
  
**_Where_**:

**@(**_col,ln,wth,ht_**)** |  Position and size of the check box region. Numeric expressions. Column and line coordinates for top left corner, width in number of columns and height in number of lines.  
---|---  
_ctl_id_ |  Unique logical identifier for the chart (any integer **-** 32000 to +32000). Avoid integers that conflict with keyboard definitions (e.g. 4 cancels CTL=4 for the **F4** key) or [**Negative CTL Definitions**](../appendix/negative_ctl_definitions.md). Use this value with the **[Apostrophe Operator](../appendix/apostrophe_operator.md)** to access various [**CHART Properties**](../control_object_properties/chart_properties.md).  
_ctrlopt_ |  Control options. Supported options for **CHART** include: |  **ERR=**_stmtref_ |  Error transfer.  
---|---  
**FMT=**_def_ _$_ |  Format type. The **_standard chart types_** for **FMT=** are 3DLINE (**_Default_**), 2DAREA, 3DAREA, 2DBAR, 3DBAR, 2DCOLUMN, 3DCOLUMN, 2DLINE, 2DPIE, 3DPIE, 2DRIBBON, 3DRIBBON, 2DSCATTER, 3DSCATTER, 2DSTACK and 3DSTACK.  
**FNT=**_"font"_ |  Font name (size controlled by window coordinates).  
**OPT=**_char$_ |  Single character parameter. The single character parameters for **OPT=** are: |  "B" |  Chart has no border or frame  
---|---  
"D" |  Initially disabled  
"d" |  Permanently disabled  
"h" |  Permanently hidden  
**SEP=**_char$_ |  Delimiter character; Hex or ASCII string value.  
**TIP=**_text$_ |  Mouse pointer message. To change the colour, see [**'TC'=**](../parameters/tc.md) system parameter.  
_dataset_ |  Dataset from which values will be drawn.  
_numvar_ |  Name of variable that will contain returned numeric data value.  
_eom_ _$_ |  EOM character sequence used to select the set. Hex string expression.  
_label$_ |  Name of variable that will contain returned label value.  
_point_ |  Data point within the dataset.  
_strvar_ _$_ |  String containing the chart data.  
  
##  Description

Use the **CHART** directive to create two and three dimensional chart illustrations in a graphical application. When defining the chart, you can select from several available chart types including Area, Bar, Column, Line, Pie, Ribbon, Scatter, and Stack. The chart type and visual look information is determined by the **FMT=** option.

**_Chart Properties_**

The **[Apostrophe Operator](../appendix/apostrophe_operator.md)** can be used with the unique logical identifier (_ctl_id_) to dynamically read and alter a wide variety of control attributes (properties) directly from the programming language.

See **[CHART Properties](../control_object_properties/chart_properties.md)** for the list of properties available for manipulating a chart object.

##  Format 1

**_Creating a Chart_**

**CHART** _ctl_id_ ,**@(**_col,ln,wth,ht_**)** ,[,_ctrlopt_]

Use this format to create the chart. The value in _ctl_id_ is a unique identifier that is used to generate a CTL value whenever the chart is selected and changed.

##  Format 2

**_Loading Data into a Chart_**

**CHART LOAD** _ctl_id,strvar_ _$_[,**ERR** =_stmtref_]

Use this format to load chart data into a chart. The last character in _strvar_ _$_ identifies the separator for the dataset while the value defined by **SEP=** when the chart is created, is used to identify the different data points within each set. Legend labels can be specified as the first element in a dataset definition followed by an **=** (_equals sign_).

**_Example:_**

> chart load 10,"100,200,300,400/150,250,350,450/"

The above example loads a chart with two datasets consisting of four points (or data elements).

> chart load 10,"Last Year=100,200,300,400/This Year=150,250,350,450/"

This example includes legend labels for the first example.

##  Format 3

**_Clearing Data from a Chart_**

**CHART CLEAR** _ctl_id_[,**ERR** =_stmtref_]

This clears the data values from the chart but not the titles and labels.

##  Format 4

**_Clearing Data and Titles from a Chart_**

**CHART DELETE** _ctl_id_[,**ERR** =_stmtref_]

This clears all of the data values and all of the titles from the chart.

##  Format 5

**_Enabling/Disabling a Chart_**

**CHART** {**ENABLE** | **DISABLE**} _ctl_id_[,**ERR** =_stmtref_]

If the mouse is clicked on a chart while it is **_enabled_** , then the program receives a CTL event based on the _ctl_id_ of the chart. This does not occur when the chart is **_disabled_**.

##  Format 6

**_Retrieving Values from a Chart_**

**CHART FIND** is used to retrieve values from a chart based on the specified dataset and data point. The format is described below.

> **CHART FIND**  _ctl_id_ _, dataset, point, data$_[,**ERR** =_stmtref_]

The data is read from the chart and returned in _data_ _$_.

> **CHART FIND**  _ctl_id_ _, dataset, point, label$_[,**ERR** =_stmtref_]

This format retrieves the label in _label$_. Legend labels are determined for a specified _dataset_ when the _point_ value is set to zero. Point labels are determined for a specified point when the _dataset_ value is set to zero.

The following example reads the value and label for the second point of the first dataset:

> chart find 10,1,2,RETURN_VALUE  
>  chart find 10,1,0,LEGEND_LABEL_1$  
>  chart find 10,0,1,POINT_LABEL_1$

##  Format 7

**_Reading Selected Set from a Chart_**

**CHART READ** _ctl_id, dataset,eom$_[,**ERR** =_stmtref_]

Use **CHART READ** upon receiving a CTL notification that the control was selected with the mouse. The _eom_ _$_ character will yield $01$ indicating that the dataset was selected by a mouse click.

##  Format 8

**_Updating Existing Values in a Chart_**

**CHART WRITE** is used to change existing values in a chart based on the specified dataset and data point. 

> **CHART WRITE**  _ctl_id,set,point,data_ _$_[,**ERR** =_stmtref_] 

The above format updates the data for an individual point. 

> **CHART WRITE**  _ctl_id,set,point,label_ _$_[,**ERR** =_stmtref_]

The above format changes chart labels. Legend labels are updated for a specified dataset when the point value is set to zero. Point labels are updated for a specified point when the dataset value is zero.

##  Format 9

**_Hide/Show a Chart_**

**CHART** {**HIDE** | **SHOW**} _ctl_id_[,**ERR** =_stmtref_]

With the **CHART HIDE** format, the chart remains active but is not displayed. It is still accessible to program(s). Use the **CHART SHOW** to restore the user's display and access.

##  Format 10

**_Removing a Chart_**

**CHART REMOVE** _ctl_id_[,**ERR** =_stmtref_]

Use this format to delete an entire chart.

## See Also

**[Charting Alternatives in PxPlus](../Charting%20Alternatives%20in%20PxPlus/Introduction.md)**  
**[CHART Properties](../control_object_properties/chart_properties.md)**
