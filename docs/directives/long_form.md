# Directives

**LONG_FORM** |  **_Use Long Variable Names_**  
---|---  
  
##  Format

**LONG_FORM**

##  Description

Use the **LONG_FORM** directive to have the PxPlus compiler's input parsing routine accept long variable names (default mode). The complementary directive is **SHORT_FORM** , which allows only short variable names.

You can write programs in either **SHORT_FORM** or **LONG_FORM** or a combination of both. You can also run programs in either mode.

##  See Also

**['LF' Long Form Variables](../parameters/lf.md)**  
**[SHORT_FORM Use Short Variable Names](short_form.md)**

##  Example

long_form  
LONG_NAME$="OK"  
short_form  
LONG_NAME$="NOT OK IN SHORT_FORM"  
Error #20: Syntax error ...ONGNAME$="L... (Long variable name not accepted)  
L$="OKAY IN SHORT_FORM"
