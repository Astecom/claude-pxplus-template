# Webster+

**Using Grids in Webster+**|   
---|---  
  
One of the key features of Webster+ is its ability to handle grids. Grids consist of multiple rows of consistent fields shown in a list. To exchange data between the application and a rendered grid, a memory table is used. Each record in the memory file represents the contents of a row in the grid. The IOList assigned to the memory file defines the column values.

The grid is defined by the **[[grid]](Short%20Codes.htm#grid)** short code with the name of the grid (numeric variable that holds the channel number of the memory file). The individual columns are defined by **[[col]](Short%20Codes.htm#col)** short codes.

**_Example - Defining a Grid:_**

In the HTML page:

> <!DOCTYPE html>  
>  <html>  
>  <head>  
>  </head>  
>  <body>  
>  [ttl]Grid[/ttl]<br>  
>  [form]  
>  [grid MyGrid program=MyProg;MakeGrid size=auto/20]  
>  [col Source=ClientID$ ttl="Client" width=10 locked]  
>  [col Source=Name$ ttl="Name" width=30]  
>  [col Source=City$ ttl="City" width=20]  
>  [/grid]  
>  [/form]  
>  </body>  
>  </html>

The above defines the grid as follows:

  * Its memory file channel is found in the numeric variable MyGrid.
  * The program MyProg at entry point MakeGrid is used to define the grid and its IOList.
  * Its width (auto) will be dynamically defined based on the columns and browser window.
  * Its height will be the equivalent of 20 lines high. (Due to a gap between the lines and header, this will show about 15 rows.)
  * It contains three columns - ClientID$, Name$ and City$. Only ClientID$ is locked, and all others can be edited.



In your application program MyProg, to define the grid, you might have logic as follows:

> MakeGrid:  
>  enter MyGrid  
>  open (hfn,iol=GridIOL)"*memory*"  
>  MyGrid=lfo  
>  select * from "ClientFile"  
>  write (MyGrid)  
>  next record  
>  exit  
> GridIOL:iolist ClientID$,Name$,City$

Webster+ will load the grid with the contents of the memory file, and whenever the page generates an event, an updated/new memory file will be passed in to your application with the updated values.

The individual cells in the grid will be named **_gggggg-rrr-var_ _$_** where **_ggggggg_** is the name of the grid, **_rrr_** is the row in the grid, and **_var_ _$_** is the variable as defined by the **[[col]](Short%20Codes.htm#col)** short code.

#### **Note:**  
Due to the presence of the **-** (_dash_) in the cell names, these are **_not_** valid variable names and thus can only be referenced using the grid memory file.

To update the grid, you can use the **[%Webster'Update](Webster%20Object%20Methods.htm#update)** method to change cell contents as is done for normal values in the page. Either you can specify the cell name with the dashes, or this function allows you to provide the grid name and row in the method call.

To update the complete grid, you can use **%Webster'Bind'Reload(** "_gridname_ "**)** , which will cause the complete grid to be reloaded from the memory file. See **[%Webster'Bind'Reload](Bind%20Object%20Methods.htm#reload)**.

## Accessing Grids

Grids are accessed in Webster+ through the use of memory files. Every grid on a page is controlled by the contents of a related memory file that will hold its contents. The IOList associated with the grid defines the columns in the grid.

When a page is bound to the data, every record in the memory file becomes a row in the grid with the record contents used to define the cells. When the page is submitted to Webster+, a new memory file will be opened with the same IOList and field separator and then loaded with the contents of the cells as potentially modified by the user.

**_Example:_**

Below is a sample grid definition:

> [grid myGrid nosort]  
>  [col source=Account$ ttl="Acct"]  
>  [col source=Name$ ttl="Client name"]  
>  [col source=Owing format="-###,##0.00"]  
>  [col ttl="Hold"][checkbox onHold$ on="Y" off="N" text="On Hold"]  
>  [/grid]

Each **[col]** can define the source field to be displayed/edited in the grid. If desired, rather than a **source=** option, you can include the definition of an input control to be used to accept/display the value.

The logic to define the associated memory file would look something like this:

> if myGrid=0 open (hfn,iol=MyGridiol) "*memory*; myGrid=lfo  
>    
> MyGridiol: IOLIST Account$, Name$, Owing, onHold$

This should be done at the start of processing the panel. If the program is being run in response to the grid coming from a previous rendering, the value of the variable "myGrid" will already have the channel number of a memory file with the current contents.

To clear the grid, simply **_purge_** the contents of the memory file. Removing a record from the memory file will remove the row from the grid. Adding records to the memory file will add rows to the grid.

The IOList for the memory file **_must_** consist of a simple list of fields. No formatting options are allowed. Columns/fields in the memory file not present in the column definitions will be preserved as hidden values in the rendered page.

#### **Important Note:**  
Use the **[SETDEV (n) SEP=](../directives/setdev_sep.md)** directive to set a separator character between each column based on potential contents.  
  
The default SEP $8A$ may not be suitable should the columns be used to maintain accented data; thus, the **_recommendation_** is to use $00$ or characters in the range $1C$ through $1F$.

## Special Grid Events

Two special grid events that can be applied to a column definition are *RowDel and *RowDrag.

See **[Special Webster+ Events](Webster%20Events.md)**.

## See Also

**[Webster+ Calculations](Webster%20Calculations.md)**
