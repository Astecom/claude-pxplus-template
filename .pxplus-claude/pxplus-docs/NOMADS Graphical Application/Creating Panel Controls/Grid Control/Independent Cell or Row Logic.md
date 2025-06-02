# Grid Control 

**Independent Cell or Row Logic** |  **__**  
---|---  
  
You can assign logic that is specific to a particular cell, column or row. The definition consists of a column name or number, row number and logic event. A maximum of 999 cell logic records can be created for a panel. The default logic that is defined on the **Logic** folder of the **Grid** dialogue will execute if a cell does not contain independent logic.

Access the **Grid** dialogue for the grid control (using the NOMADS Folder Style), and select the **Cell Logic** tab to specify the following:

_Column or Name_ |  Value to be placed in the **'Column** or **'Column$** property (string or numeric). If zero (0), then the defined preset is assigned to _all columns_.  
  
If no column names are assigned in **[Grid Format Definition](Formatting%20a%20Grid.md)** (_Format_ button on the **Attributes** folder), then the _Column or Name_ column (on the **Cell Logic** folder) uses a Normal cell type.  
  
If column names are assigned in **[Grid Format Definition](Formatting%20a%20Grid.md)**, then the _Column or Name_ column uses a Variable drop box that is loaded with the assigned column names. You can either select a column name from the drop box, type a column name, or enter a numeric value.  
  
If the column name is not a valid variable, a message is displayed and you must enter a value. If the column name is a valid variable but does not match any of the known column names, a warning message informs you of the mismatch, and the value is considered valid. Warning messages are displayed only when the column value is initially entered or changed.  
---|---  
_Row_ |  Value to be placed in the **'Row** property. It must be numeric. If zero (0) is entered, then the defined preset is assigned to _all rows._  
_On Focus Logic_ |  To be executed when a cell receives focus. Click the drop-down arrow to access a list of selections: _Ignore, Perform, Call,_  _Execute_.  
_On Change Logic_ |  To be executed when a cell loses focus. Click the drop-down arrow to access a list of selections: _Ignore, Link, Perform, Call, Execute, Help, Jumpto, End_.  
_Validation Logic_ |  Validation program (no quotes) to be called when cell loses focus. NOMADS calls the validation program, using the following format in its call:  
  
_"subprog[;entrypoint]",input$,id.column,id.row,err_msg$,tag_field$,old_value$,input_eom$_ **_Where:_** |  _input$_ |  Input that the user entered is automatically passed to this variable.  
---|---  
_id.column_ |  Column number of the cell.  
_id.row_ |  Row number of the cell.  
_err_msg_ _$_ |  Error message to display. By default, this returns a _null_ to the calling program.  
_tag_field_ _$_ |  User-defined tag field value (if any). NOMADS picks this up from your setting in the _Validator_ property of the cell and passes it to the sub-program in the call.  
_old_value_ _$_ |  Old value for the field, passed to your sub-program in the call.  
_input_eom_ _$_ |  Hex value of the terminator used to end input. Terminator examples include $0D$ for **Enter** or $09$ for **Tab** to leave a cell.  
  
Equivalent parameters should be used (a maximum of seven valid variable names) in the called program.

If the input is found to be invalid by your program, load the fourth variable with error message text. Once the exit is executed in your sub-program, control returns to ***winproc** , which checks this variable. If it contains a value other than _null_ , a message box is displayed using the text assigned by your program and focus returns to the cell for a retry. The user cannot exit that cell until valid input is entered.  
  
_Formatting Logic_ |  Formatter program (no quotes) to be called when cell loses focus. NOMADS calls the formatting program, using the following format in its call: "_subprog_[;_entrypoint_]",_id_._column_ ,_id_._row_ ,_input_ $,_tag_field_ $ **_Where:_** |  _id.column_ |  Column number of the cell.  
---|---  
_id.row_ |  Row number of the cell.  
_input$_ |  Input that the user entered is automatically passed to this variable.  
_tag_field_ _$_ |  User-defined tag field value (if any). NOMADS picks this up from your setting in the _Formatter_ property of the cell and passes it to the sub-program in the call.  
  
Equivalent parameters should be used (a maximum of four valid variable names) in the called program.  
  
This interface consists of two grids. Various logic definition rows from the lower grid can be dragged to become columns in the upper grid (and vice versa) to customize the interface. Drag on the row or column header to transfer the logic definition. In addition, columns in the upper grid may be re-ordered by dragging the column header to its new location.
