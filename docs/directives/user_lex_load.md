# Directives

**USER_LEX LOAD** |  **_Load Directive Keywords_**  
---|---  
  
##  Format

**USER_LEX LOAD** _filename$_  
  
**_Where:_**

_filename$_ |  Name of a file containing a user lexicon. String expression.  
---|---  
  
##  Description

Use the **USER_LEX LOAD** directive to load an alternate internal lexicon table. This lexicon can be used to simplify a conversion from other programming languages to PxPlus or to provide for support of languages other than English. The lexicon table consists of all the PxPlus keywords for _directives_ , _functions_ and _variables_. PxPlus supplies a utility program, *LEXEDIT, to create and maintain these tables.

#### **Warning!**  
**_Be very careful_** when modifying syntax tables. While it is possible to create syntax tables for other languages and to add additional syntax to the external table, the wrong changes can make your programs "unlistable". (The syntax tables affect both the listing and editing of programs.)   
  
**_Do not_** attempt to create or edit the syntax tables unless you are an experienced programmer and are familiar with these tables. Contact your local PxPlus reseller for assistance.

__

__
