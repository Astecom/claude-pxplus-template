# Webster+ HTML Merge/Bind Object

**Bind Object Methods**|   
---|---  
  
The Webster+ bind object methods are listed below. When referencing the method, it would normally be prefixed with **%Webster'Bind'**.

**Method** |  **Description**  
---|---  
**File$(** "_html_file_ "**)** |  Will read the contents of _html_file_ , process the embedded codes to bind the data, and return the bound output as a string.  
**FileTo(** "_html_file_ ", _channel_**)** |  Will read the contents of _html_file_ , process the embedded codes to bind the data, and output the specified _channel_.  
**FileTo(** "_html_file_ ", _filename$_**)** |  Will read the contents of _html_file_ , process the embedded codes to bind the data, and output the specified output file given in _filename$_.  
**Html$(**_html$_**)** **HtmlTo(**_html$_ , _channel_**)** **HtmlTo(**_html$_ , _filename$_**)** |  These three methods provide the same functionality as the **Bind'File** methods; however, instead of working from an input HTML file, the input HTML can be passed in directly.  
**Reload(**_controlname_ _$_**)** |  Can be used during an update cycle to regenerate the contents of a list or grid where you want to replace the full contents. If necessary, it can be used on any control for which there is an associated variable name to cause the control to be redrawn. **_Where:_** |  _controlname_ _$_ is a string that contains the name of the variable on the Webster+ generated page that is to be regenerated.  
---  
  
#### **Note:**  
This function should only be used when doing an Ajax style update.
