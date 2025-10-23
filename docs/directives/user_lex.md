# Directives

**USER_LEX** |  **_Define Directive Keywords_**  
---|---  
  
##  Format

**USER_LEX** _alt_string_ _$_**=**_directive$_  
  
**_Where:_**

_alt_string_ _$_ |  Alternate/translated form to be used in place of a PxPlus directive.  
---|---  
_directive$_ |  Standard PxPlus directive.  
  
##  Description

Use the **USER_LEX** directive to extend the internal PxPlus compiler definitions to include new symbols and directives. Use this directive to simplify a conversion from other languages to PxPlus.

After PxPlus executes the **USER_LEX** directive, any statements sent to the PxPlus compiler where the alternate string expression is found will be translated into the internal object code for the standard string in _directive$_. It is mandatory that you use valid PxPlus object syntax in the _directive$_. Use spaces in the string expression to indicate that spaces can exist in the string when compiling.

##  Example

To allow the use of **SPC( )** in lieu of **PAD( )** :

> user_lex "SPC ("= "PAD ("

#### **Note:**  
The internal syntax values in the _directive$_ must include the proper spacing and all related control characters.  
  
In the above example, "SPC"="PAD" alone is not acceptable. You must include the space **_and_** open parenthesis after SPC and after PAD to indicate that a space can occur between the words (SPC/PAD) and the open parenthesis.
