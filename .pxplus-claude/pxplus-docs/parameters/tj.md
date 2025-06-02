# System Parameters

**'TJ'** |  **_Jump History Tracking_**  
---|---  
  
##  Description

Setting the **'TJ'** parameter to non-zero enables the jump/transfer history tracking with PxPlus. To delete/stop jump history tracking, you can set this parameter to 0 (zero).

The value of the parameter defines the number of jumps/transfers that will be recorded. Maximum value is 10,000.

When the history table is full, older entries will be overwritten, preserving only the most recent entries.

The jump history will record each time a transfer of control occurs within the code indicating the line number, program, directive, and for error transfers, the error code that caused the jump and the location (line/program) to which execution jumped.

The **DUMP GOTO** directive is used to display/output the jump transfer history to either the screen or a file.

#### **Note:**  
Setting the **'TJ'** parameter clears any existing jump/transfer history.

_(The 'TJ' system parameter was added in PxPlus v10.10.)_

##  Default

**0** \- No jump/transfer history is tracked.

## See Also

[**DUMP GOTO Display Variables**](../directives/dump.md)
