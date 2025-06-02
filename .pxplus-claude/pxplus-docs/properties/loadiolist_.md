# Control Object Properties

**LoadIOList $** |  **_In Compiled IOList Format_**  
---|---  
  
## Description

'LoadList$ in compiled IOList format

This property contains the list of columns that will be returned in **['RowData](rowdata_.md)** in compiled IOList format.

## See Also

[**Loading/Accessing by Row**](../control_object_properties/grid_by_row.md)  
[**'LoadList$**](loadlist_.md)

## Default

By **_default_** , the list of columns will contain the column names starting from the first column (far left) through the end of the grid. It can be altered by setting either the 'LoadList$ or 'LoadIOList$ property.

#### **Note:**  
By **_default_** , the compiled IOList generated for the grid uses fields formatted as **CHR**(_dlm_). See **CHR**(_dlm_) in the **[IOLIST](../directives/iolist.htm#Mark2)** directive.

## Used By 

**GRID**
