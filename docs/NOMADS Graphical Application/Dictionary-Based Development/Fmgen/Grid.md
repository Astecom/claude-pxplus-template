# File Maintenance Generator  
  
**Grid** |  **_Step 6: Field Layout_**  
---|---  
  
#### **Note:**  
The _Grid_ option is only available when the [ **HTML Page**](Object%20Definition.htm#formtype) check box is selected for _Form Type_.

The **Add a Webster+ Grid** window is used to add (and edit) a Grid control on the file maintenance HTML page only. It is not available for file maintenance NOMADS panels.

_(The ability to add/edit a Grid was added in PxPlus 2022.)_

To invoke this window, use one of the following methods:

Click the _Add Object_ button (above the _Layout Grid_) and select the _Grid_ option. **_OR_**

Right click on a cell in the _Layout Grid_ , select _Add Object_ from the popup menu and then select the _Add or Edit a Grid_ option.

The data entered in the **Column Definitions** grid is used to define the Webster+ **[[grid]](../../../Webster/Short%20Codes.htm#grid)** and **[[col]](../../../Webster/Short%20Codes.htm#col)** short codes, which are needed to render a Grid on the generated HTML page. See **[Using Grids in Webster+](../../../Webster/Using%20Grids%20in%20Webster.md)**.

For an example of a Grid definition, see **[Grid Example](Grid.htm#grid_example)**.

> This window consists of the following:

_Grid Variable_ |  Enter the name of the Grid variable that will be the handle to the memory file used to load the Grid. The Grid must be associated with an **[HTML Interface Program](Object%20Definition.htm#program)** (entered in **Step 1: Definition**) that contains a method for loading the Grid using a memory file. The HTML interface program must contain the method: **LOAD_**_xxxx_ **_Where:_** _xxxx_ (case insensitive) is the _Grid Variable_ entered (e.g. ADD_GRID_1). For an example of a Grid definition with a sample **Load_MyGrid** method, see **[Grid Example](Grid.htm#grid_example)**. The _Grid Variable_ defaults to ADD_GRID_1, ADD_GRID_2, etc.; however, it can be changed to any numeric variable. Other events that are associated with entering values in the Grid at run time are also added to this interface program.  
---|---  
**Size** |  |  _Width_ |  Enter the width for the Grid either in number of _Columns_ ** _(Default)_** or as a _Percentage_ of the column width. When _Columns_ is selected, the width defaults to _Auto_. In Webster+, a width of _Columns - Auto_ will result in the Grid being just wide enough to display all of the columns or fill the section. To set it back to _Auto_ , enter 0. Otherwise, enter the desired value or use the spinner control. Valid entries are 0 to 300. When _Percentage_ is selected, the percentage defaults to 100%. Otherwise, enter the desired percentage or use the spinner control.  
---|---  
_Height_ |  Enter the height for the Grid in number of lines or use the spinner control. Valid entries are 0 to 255. **_Default_** is 10.  
**Appearance** |  |  _Grid Class_ |  Controls the appearance of the cells in the Grid. A single Grid Class can be entered (e.g. bold). Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes (e.g. "bold text_red fill_cyan" or bold,text_red,fill_cyan). See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**.  
---|---  
_Header Class_ |  Controls the appearance of the Grid header row. A single Header Class can be entered (e.g. bold). Multiple classes can be entered, separated by either spaces or commas. When spaces are used as the delimiter, the values must be within double quotes (e.g. "bold text_red fill_cyan" or bold,text_red,fill_cyan). If no text color is specified for the Header Class, the text color for the Grid Class will be used. See **[Webster+ Defined Classes](../../../Webster/Webster%20Defined%20Classes.md)**. _(Header Class was added in PxPlus 2022 Update 1.)_  
_Grid Lines_ |  Check box to indicate that lines will be shown between the Grid columns and rows. By default, this check box is selected.  
_Include Drag Column_ |  Check box to indicate that the first column in the Grid will be a "Drag" column, which will have a triple bar symbol that is used to drag a row up/down in the Grid. By default, this check box is not selected.  
_Include Delete Column_ |  Check box to indicate that the last column in the Grid will be a "Delete" column, which will have a trash can symbol that is used to delete a row in the Grid. By default, this check box is not selected.  
**Interfaces** |  |  _Initialization Program_ |  The program and method (separated with a **;**  _semi-colon_) that is to be run to load the Grid memory file. If an **[HTML Interface Program](Object%20Definition.htm#program)** has been entered in **Step 1: Definition** , the _Initialization Program_ will default to that _interface_program_**+** '_;load_ ___ '**+**_grid_variable_ (e.g. interface_program;load_ADD_GRID_1). If the Grid is being defined elsewhere in the interface program (such as the FM_INIT method), the _Initialization Program_ may be left blank (shows _< none>_). _(Initialization Program was added in PxPlus 2022 Update 1.)_  
---|---  
_(Program Logic)_ |  **_(Available when Initialization Program is entered)_** Button (beside the _Initialization Program_ field) that is used to create or edit the initialization program by launching the program editor. The program editor that is launched will either be the **[Integrated Toolkit](../../../toolkit1/overview.md)**™ (*IT) or **[Ed+](../../../Ed%20Program%20Editor.md)**, depending on whether the **[%NOMADS'Program_Editor$](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property has been set. If this property is not set, the default will be the Integrated Toolkit. If running the File Maintenance Generator from the Web IDE, the program editor will be Ed+. _(The Program Logic button was added in PxPlus 2025.)_  
**Column Definitions** |  The data entered in the **Column Definitions** grid is used to define the Webster+ **[Short Codes](../../../Webster/Short%20Codes.md)** on the generated HTML page. For each column to be added to the Grid, define a new row with the following details: |  _Definition Type_ |  Type of Grid column being defined: _Simple Variable_ , _File_ or _Data Class_. Defaults to _Simple Variable_ for the first column when defining a new Grid. To select a _Definition Type_ , click the Query button _(magnifying glass)_ to invoke the **Grid Column Definition Type** window: |    
**_All Nodes Collapsed_** |    
**_Specific Nodes Expanded_**  
---|---  
  
This window displays a tree view and consists of the following:

_Simple Variable_ |  If the Grid column does not relate to a field in a data file or to a data class, select _Simple Variable_.  
---|---  
_File_ |  If the Grid column relates to a field in a particular data file, expand the _File_ node and select a file from the list of data files in the data dictionary, organized by group.  
_Data Class_ |  If the Grid column relates to a particular data class, expand the _Data Class_ node and select a data class from the list of defined data classes. See **[Data Classes](../../../Data%20Dictionary/Data%20Classes/Overview.md)**.  
_Expand (Collapse)_ |  Toggle button that either expands or collapses the entire tree view. To collapse or expand a single "parent" node, click the corresponding **+**  _plus_ or **-**  _minus_ sign.  
_Ok_ |  Enters the selected _Definition Type_ into the **Column Definitions** grid.  
_Cancel_ |  Cancels any selections and returns to the **Column Definitions** grid.  
  
When a _File_ is selected, the _Definition Type_ is populated with the group and file name, and the _Variable_ column drop box is loaded with fields from that file. At the same time, a new row is added to the **Column Definitions** grid with _Definition Type_ defaulting to the same file name. By defining a Grid column in this way, the **[usefile=_xxx_](../../../Webster/Short%20Code%20Options.htm#usefile)** option will be used with the **[[col]](../../../Webster/Short%20Codes.htm#col)** short code, allowing additional options (i.e. format, default, etc.) to be set from the data dictionary.

When a _Data Class_ is selected, the _Definition Type_ is populated with the data class. The values for _Variable_ , _Title_ , _Width_ and _Cell Type_ default into the **Column Definitions** grid based on the data class definition; however, this can be changed. By defining a Grid column in this way, the **[dataclass=_xxx_](../../../Webster/Short%20Code%20Options.htm#dataclass)** option will be used.

When _Simple Variable_ is selected, any options that are needed must be specified in the **[Other Options](Grid.htm#other_opts)** column.  
  
_Variable_ |  If the _Definition Type_ is _Simple Variable_ , enter a unique name for the variable in the Grid definition. If the _Definition Type_ is _File_ , select a field from the _Variable_ drop box, which will be loaded with fields from the selected data file. If the _Definition Type_ is _Data Class_ , the name of the selected data class is defaulted as the variable; however, this can be changed. The variable must also correspond directly to the variable in the IOList that is used in the **[HTML Interface Program](Object%20Definition.htm#program)** entered in **Step 1: Definition** to load the memory file corresponding to the Grid.  
_Title_ |  Enter the title to display for the Grid column.  
_Width_ |  Enter the width for the Grid column. It should be wide enough to display the _Title_ and the data.  
_Align_ |  Select the alignment for the data in the Grid column: _Left_ , _Right_ or _Center_. **_Default_** is _Left_.  
_Cell Type_ |  Select the type of cell being defined: |  _Normal_ |  **_(Default)_** Normal text cell that contains one line of data. |  See **[[input]](../../../Webster/Short%20Codes.htm#input)** short code.  
---|---|---  
_Button_ |  Contains a button. |  See **[[button]](../../../Webster/Short%20Codes.htm#button)** short code.  
_CheckBox_ |  Contains a check box with no 3D effect. |  See **[[checkbox]](../../../Webster/Short%20Codes.htm#checkbox)** short code.  
_DropBox_ |  Allows a selection to be made from a drop-down list. |  See **[[list]](../../../Webster/Short%20Codes.htm#list)** short code.  
_Image_ |  Contains a specified image. |  See **[[image]](../../../Webster/Short%20Codes.htm#image)** or **[[picture]](../../../Webster/Short%20Codes.htm#picture)** short codes.  
_ListBox_ |  Allows a selection to be made from a list box. |  See **[[list]](../../../Webster/Short%20Codes.htm#list)** short code.  
_Lck_ |  Check box to indicate that the Grid column will be locked to prevent its contents from being changed. Defaults to **_On_** if _Definition Type_ is a _File_ and the selected field (in the _Variable_ column) is defined as _Read Only_ in the data dictionary.

#### **Note:**  
If a data dictionary field is defined as _Read Only_ but the Grid column being defined should not be locked, uncheck the _Lck_ check box and enter **locked=""** in the _Other Options_ column. See **[locked](../../../Webster/Short%20Code%20Options.htm#locked)** short code option.  
  
_Other Options_ |  Specify other short code options that are associated with the **[[input]](../../../Webster/Short%20Codes.htm#input)** short code or other cell types (if needed). See Webster+ **[Short Code Options](../../../Webster/Short%20Code%20Options.md)**. **_Examples:_** |  class=bold,text_red |  See **[class=_xxx_](../../../Webster/Short%20Code%20Options.htm#class)** short code option.  
---|---  
event=button_event |  See **[event _=xxx_](../../../Webster/Short%20Code%20Options.htm#event)** short code option.  
format="###.00" |  See **[format _=xxx_](../../../Webster/Short%20Code%20Options.htm#format)** short code option.  
query=scrnlib.en;client.q |  See **[query=_xxx_](../../../Webster/Short%20Code%20Options.htm#query)** short code option.  
tip="Enter Client Name" |  See **[tip=_xxx_](../../../Webster/Short%20Code%20Options.htm#tip)** short code option.  
  
Multiple options can be entered for each column with a space separating each option.

For an example of a Grid definition with options entered, see **[Grid Example](Grid.htm#grid_example)**.  
  
_Insert Above  
Insert Below_ |  Adds a blank row above or below the currently selected row for creating a new column.  
_Delete_ |  Removes the currently selected row, which also removes the column from the Grid being defined.  
_Move Up  
Move Down_ |  Changes the order of the existing columns in the Grid being defined.  
  
##  Grid Example

The example below shows a Grid definition with eight rows of data entered in the **Column Definitions** grid:

|  Rows 1, 2, 3 and 5 define columns that are based on the _SalesRepCode_ , _Name_ , _ImagePath_ _$_ and _ytdOrders_ fields in the **Salesreps** data file.  
---|---  
|  Row 4 defines a column that is based on the _Department_ data class.  
|  Rows 6, 7 and 8 define columns that are based on Simple Variables named _email$_ , _image$_ and _comments$_.  
  
> The following program, which contains an event (Mail) and a method to load the grid (Load_MyGrid), was defined as the **[HTML Interface Program](Object%20Definition.htm#program)**:

> ! grid_interface demo program  
>  !  
>  goto lno(_event$,err=*next)  
>  %webster'msgbox("Invalid event: "+_event$,"Internal Error - "+pgm(-3),"!")  
>  exit  
>  !  
>  Mail:  
>  ! code needed when Mail button is pushed  
>  %webster'msgbox("Pushed Mail button","Button event","!")  
>  exit  
>  !  
> Load_MyGrid:  
>  enter MyGrid  
>  if MyGrid<>0 \  
>  then exit  
>  open (hfn,iol=*)"salesreps"  
>  reps=lfo  
>  open (hfn,iol=MyGridIOL)"*memory*"  
>  MyGrid=lfo  
>  select * from reps  
>  write (MyGrid)  
>  next record  
>  close (reps,err=*proceed)  
>  exit  
>  !  
> MyGridIOL: \  
>  iolist SalesRepCode$,Name$,ImagePath$,Department$,ytdOrders,Email$,Image$,Comment$

When the HTML file is generated, the Webster+ short codes for this Grid look like this:

> [grid MyGrid program="test_interface;Load_MyGrid" gridlines size=Auto/10 class=""]  
>  [col width=5 ttl="Drag" align=center event=*Rowdrag][symbol reorder][/col]  
>  [col usefile=Salesreps source=SalesRepCode$ ttl="Sales Rep Code" width=20 align=left class=bold,text_red]  
>  [col usefile=Salesreps source=Name$ ttl="Name" width=25 align=left]  
>  [col ttl="Image" width=6 align=center][picture file=(ImagePath$) size=6/2][/col]  
>  [col ttl="Department" width=24 align=left][list Department$ dataclass=Department program=*class;ClassList,"Department"][/list][/col]  
>  [col usefile=Salesreps source=ytdOrders ttl="YTD Orders" width=15 align=right locked]  
>  [col ttl="Send Email" width=12 align=left][button email$ size=auto size=11/1.5 event=mail][symbol envelope] Email[/button][/col]  
>  [col ttl="Fixed Image" width=12 align=left][picture size=auto file=*plus/inomads/sysimage/book_open.png][/col]  
>  [col source=comment$ ttl="Comment" width=20 align=left tip="Enter Comment"]  
>  [col width=4.5 align=center ttl="Del"][symbol trash event=*Rowdel][/col]  
>  [/grid]

In Webster+, the Grid looks like this:

> > This Grid shows the following, based on the **[Grid Definition](Grid.htm#grid_example)**:

|  The _Drag_ column is shown because the  _Include Drag Column_ check box was selected.  
---|---  
|  The Grid is loaded with records from the **Salesreps** file in the data dictionary. All the columns are populated, except for _Comments_ , which is not a field in the **Salesreps** file.  
|  The _Sales Rep Code_ column contains a query button because the _SalesRepCode_ _$_ field was defined with a query in the data dictionary. The data in this column is red and bolded because a class was entered in the _Other Options_ column.  
|  The _Image_ column was defined with a _Cell Type_ of _Image_ and contains the image referred to in the _ImagePath_ _$_ column of the **Salesreps** file with a width of 6 and a height of 2. If no size was specified in the _Other Options_ column, the cell would be made large enough to fit the image.  
|  The _Department_ column shows a drop-down arrow in each cell because the _Department_ data class was defined for a Drop Box control, which the _Cell Type_ column indicates.  
|  The _YTD Orders_ column is locked because the _ytdOrders_ field was defined as _Read Only_ in the data dictionary. The data in this column is right aligned because _Right_ was selected in the _Align_ column.  
|  The _Send Email_ column shows a button in each cell because _Button_ was selected in the _Cell Type_ column. The button's size, symbol, text and event are based on the text, symbol, size and event options that were entered in the _Other Options_ column. When the button is clicked, the mail event in the HTML interface program will be triggered. This needs to be coded to determine the email address and launch the email program.  
|  The _Fixed Image_ column is defined with a _Cell Type_ of _Image_ and displays the file specified in the _Other Options_ column in all rows of the Grid.  
|  The _Comments_ column shows a tip when you hover over it because a tip option was entered in the _Other Options_ column.  
|  The _Del_ column is shown because the  _Include Delete Column_ check box was selected.
