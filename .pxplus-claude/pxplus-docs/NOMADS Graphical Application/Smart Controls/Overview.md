# NOMADS Graphical Application

**Smart Controls** |  **__**  
---|---  
  
NOMADS **_Smart Controls_** allow you to create controls that auto-load data. A dataset based on a Query object definition can be automatically loaded into all types of **[List Box](../Creating%20Panel%20Controls/List%20Box%20Controls/List%20Box%20Type.md)**, **[Drop Box](../Creating%20Panel%20Controls/Drop%20Box%20Control/Drop%20Box%20Properties.md)**, **[Grid](../Creating%20Panel%20Controls/Grid%20Control/Grid%20Properties.md)**, **[Multi-Line](../Creating%20Panel%20Controls/Multi-Line%20Control/Multi-Line%20Properties.md)** or **[Chart](../Creating%20Panel%20Controls/Chart%20Control/Chart.md)** controls or written into a data file - **_with little or no additional coding_**.

**_Standard List Boxes_** , **_Drop Boxes_** and **_List View List Boxes_** will display lists consisting of a **_single_** column. **_Formatted List Boxes_** , **_Report View List Boxes_** and **_Grids_** will display **_multiple_** columns with titles. **_Smart Multi-Lines_** are **_display-only_** lookup fields that are loaded with a single value. **_Smart Charts_** will display a graphical representation of the data.

With **_Smart List_** controls, you can set up columns and filter records based on a simple Query List definition. Column formats can be derived automatically from the Query definition; however, you can override this. The Query definition also supplies the information to automatically do all the file handling to create the dataset that will be loaded into the Smart control, including reading the main and cross-reference files and filtering the data to attain only the required records.

**_Smart Chart_** controls are based on Query+ _public_ AutoChart definitions, which can be created in the **[Query Definition](../Dictionary-Based%20Development/Query%20Subsystem/Query%20Definition.md)** or at run-time through the **[Query AutoChart](../Dictionary-Based%20Development/Query%20Subsystem/Run-time%20Query.htm#charts)** feature.

You can also determine exactly when to load and reload the Smart control by specifying the fields/variables that will trigger that event. When the value in a trigger variable changes, this causes the Load logic to be invoked. If no trigger variable is specified, the list will be loaded after the panel is drawn. For further control, a conditional trigger test can be defined so that the loading process is only invoked when the test is true. Pre- and Post-Load logic may also be specified. Any type of List Box, Drop Box, Grid, Multi-Line or Chart can be used with any selection of attributes.

**_Smart Controls_** can also be used to load the dataset into a **_data file_** instead of a NOMADS control. A **CALL** to the ***winlist** interface loads the data into a **[Keyed File](../../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Keyed%20Files.md)** (with internal or external keys), a **[Serial File](../../PxPlus%20User%20Guide/File%20Handling/Data%20Files/Serial%20Files.md)**, or a keyed **[*MEMORY*](../../file_handling/~memory~.md)** file. Key information is derived from the first column of the Query definition. The resulting file can be used as a temporary file, for example, when creating reports.

#### **Note:**  
**_Smart Controls_** are **_not_** compatible with _Load On Demand_ or _Background Load_ logic.  
  
**_Smart Multi-Lines_** are **_not_** compatible with **[EZ Load](../Creating%20Panel%20Controls/Multi-Line%20Control/Ez%20Load%20Multiline.md)** logic.

## See Also

**_Smart List Boxes, Drop Boxes, Grids, Multi-Lines:_** |  **[Creating a Smart Control Definition](Defining%20Smart%20Controls.htm#Mark2)**  
---|---  
**_Smart Charts:_** |  **[Creating a Smart Chart Definition](Defining%20Smart%20Controls.htm#Mark5)**  
**_Smart File:_** |  **[Creating a Smart File](Creating%20a%20Smart%20File.md)**
