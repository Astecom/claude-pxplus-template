# System Parameters

**'EH'** |  **_Error History Tracking_**  
---|---  
  
##  Description

Setting the **'EH'** parameter to non-zero enables the error history tracking with PxPlus. To delete/stop error history tracking, you can set this parameter to 0 (_zero_). The value of the parameter defines the number of errors that will be recorded (maximum 100). When the history table is full, older entries will be overwritten, preserving only the most recent entries.

Each time an error is reported/trapped, the system will save information regarding the error. This information can be recalled using the **ERR( )** function, providing it the type of the error information you want and the index to the error with 1 being the last error, 2 second to last, and so on.

#### **Note:**  
Setting the **'EH'** parameter clears all existing error history.

_(The 'EH' system parameter was added in PxPlus v10.10.)_

##  Default

**0** \- No error history is tracked.

##  See Also

[**ERR( ) Test Error Value**](../functions/err.md)
