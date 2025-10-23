# Control Object Properties

**FindText** |  **_Control RTF Word Processor Find Option_**  
---|---  
  
## Description

Control RTF word processor Find option

This property controls access to the **Find** text dialogue box within the RTF word processor control. When this control is set to 1, the user can press CTRL-F to initiate a find within the control. Setting the control to 0 disables CTRL-F.

This property also controls the F3 key for Find Next. If desired, the property can be set to 2, which will cause the **Find** dialogue box to be initiated under program control.

#### **Note:**  
The Find logic within the system uses a common buffer for the Find string throughout the session. This means that when the **Find** dialog is initiated, it will default to the string last found within the same session.

_(The FindText property was added in PxPlus v7.10.)_

## Default

1 (CTRL-F enabled)

## Used By 

**MULTI_LINE** ** _(RTF word processing style)_**
