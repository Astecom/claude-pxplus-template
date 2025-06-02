# Multi-Line Control 

**Format and Validation Logic** |  **__**  
---|---  
  
NOMADS allows you to specify a sub-program to be called for the purpose of data validation and/or formatting whenever there is input in a Multi-Line.

## Formatter

NOMADS can **CALL** a sub-program to convert the data from internal format to the format used in the display of a Multi-Line.

To associate formatter logic with a Multi-Line control, enter the name of a formatter sub-program (no quotes) with an optional entry point label into the _Formatter_ property of the Multi-Line control (on the **[Validation](Multi-Line%20Properties.htm#validation)** tab of the **Multi-Line Properties** dialogue). The Panel Header Default Program is automatically assumed if a label name _(;label)_ is used omitting the program name.

Click the Program Logic button beside the _Formatter_ property to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_.

_(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_

At run time, ***winproc** will **CALL** formatter logic using the following syntax:

> **CALL** "_subprog_[;_label_]",_data_value_ _$_ , _tag_field_ _$_

**_Where:_**

_data_value_ _$_ |  NOMADS passes the internal value of the input to the sub-program in the CALL. The sub-program converts it for display.  
---|---  
_tag_field_ _$_ |  User-defined tag field value (if any). NOMADS picks this up from your setting in the _Formatter_ property of the Multi-Line control and passes it to the sub-program in the CALL  
  
Equivalent parameters should be used (a maximum of two valid variable names) in the called program.

## Validator

NOMADS can **CALL** a sub-program to validate Multi-Line input. To associate validator logic with a Multi-Line control, enter the name of a validator sub-program (no quotes) with an optional entry point label into the _Validator_ property of the Multi-Line control (on the **[Validation](Multi-Line%20Properties.htm#validation)** tab of the **Multi-Line Properties** dialogue). The Panel Header Default Program is automatically assumed if a label name (_;label_) is used omitting the program name.

Click the Program Logic button beside the _Validator_ property to launch the default program editor, which is typically the **[*IT - Integrated Toolkit](../../../toolkit1/overview.md)**. To make **[Ed+](../../../Ed%20Program%20Editor.md)** the default program editor, change the setting for the **[%NOMADS'Program_Editor](../../Appendix/NOMADS%20Variables/Overview.htm#programeditor)** property to _Ed+_.

_(The ability to set Ed+ as the default program editor was added in PxPlus 2023.)_

At run time, ***winproc** will **CALL** the validator logic using the following format:

> **CALL** "_subprog_[_;entrypoint_]"_,input$,err_msg$,tag_field$,old_value$,input_eom$_

**_Where:_**

_input$_ |  Input that the user entered is automatically passed to this variable.  
---|---  
_err_msg_ _$_ |  Error message to display. By default, this returns a _null_ to the calling program.  
_tag_field_ _$_ |  User-defined tag field value (if any). NOMADS picks this up from your setting in the Validator property of the Multi-Line control and passes it to the sub-program in the **CALL**.  
_old_value_ _$_ |  Old value for the field, passed to your sub-program in the call.  
_input_eom_ _$_ |  Hex value of the terminator used to end input. Terminator examples include $0D$ for **Enter** or $09$ for **Tab** to leave a Multi-Line.  
  
Equivalent parameters should be used (a maximum of five valid variable names) in the called program. If the input is found to be invalid by your program, load the second variable with error message text. Once the exit is executed in your sub-program, control returns to ***winproc** , which checks this variable. If it contains a value other than _null_ , a message box is displayed using the text assigned by your program and focus returns to the Multi-Line input field for a retry. The user cannot exit that control until valid input is entered.
