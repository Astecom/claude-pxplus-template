# Directives

**SHORT_FORM** |  **_Use Short Variable Names_**  
---|---  
  
##  Format

**SHORT_FORM**

##  Description

Use the **SHORT_FORM** directive to have the compiler input-parsing accept only short variable names (emulation/compatibility mode). Its complementary directive is **LONG_FORM** , which allows long variable names.

Programs can be written in either **SHORT_FORM** or **LONG_FORM** or in a combination of both and can run in either mode.

#### **Note:**  
This directive is included for compatibility with other languages.

##  See Also

**[LONG_FORM Use Long Variable Names](long_form.md)**  
**['SF' Short Form Variables](../parameters/sf.md)**

##  Example

short_form  
ABCDE$="ABCDE$ IS NOT OK"  
Error #20: Syntax error ...BCDE$="ABC... (Long variable name not accepted)  
A$="A$ IS OKAY"  
long_form  
LONG_NAME$="LONG_NAME$ IS OK"
