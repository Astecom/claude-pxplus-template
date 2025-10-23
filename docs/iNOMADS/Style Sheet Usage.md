# Templates

**Style Sheet Usage**|   
---|---  
  
By using a Cascading Style Sheet (CSS), you can tailor most controls in an application. If a NOMADS control has a class defined (see **[Data Classes](../Data%20Dictionary/Data%20Classes/Overview.md)**), the system automatically inserts an **nmdClass=' '** into the control definition. You can test this in CSS Style Sheets using Selectors.

**_Example:_**

For a button with a class of "BIGBUTTON", the button HTML control would be:

> <button .. nmdClass="BIGBUTTON" ..>

In your CSS, the look of this button can be controlled using the following:

> button[nmdClass="BIGBUTTON"] {font-size: 200%; background-color: Pink;}

For non-standard/composite controls such as Grids and List Views, these are generally defined using **< div>**.

**_Example:_**

To control the look of a Grid with a NOMADS class of "TEST", you would enter the following:

> div[nmdClass="TEST"]

For Grid _cells_ , **< div> ID** is used to define the cell. These IDs are as follows:

> **gc_CCCCC_R_C**

**_Where:_**

> **CCCCCC** is the CTL number, **R** is the row, and **C** is the column. (For negative rows and columns, the values are **N1** , **N2** , **N3** for **-1** , **-2** , **-3** , etc.)

By using CSS Selectors, you can change the look of all cells in a specific column for a specific class of Grid, as in the following example:

**_Example:_**

If you wanted the "BILLING" class of a Grid to always display a different cursor for the cells in column 2, you would use the following:

> div[nmdClass="BILLING"] div[id$="_2"] {cursor: no-drop;}

#### **Note:**  
Use the **$=** selector to check for a specific column.

To exclude the column header, you can include multiple selectors, as in the following example:

**_Example:_**

> div[nmdClass="BILLING"] div[id$="_2"][id^="gc_"] {cursor: no-drop; background-color: Orange;}

Using **^=** omits the column headers and selects only Grid cells. This example would result in a no-drop cursor and Orange background on all column 2 cells in any Grid with a NOMADS class of "BILLING".
