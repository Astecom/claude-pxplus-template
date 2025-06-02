# PxPlus System Programs and Files  
  
***LEXTBL.xx / *LEXDEF.xx (xx indicates language)** |  **_PxPlus LEX Definition Tables_**  
---|---  
  
The ***LEXTBL** file contains an internal format image of the syntax tables used by the PxPlus compiler and lister components. The ***LEXDEF** file contains the same information but in a conventional keyed file format to be used by the utility ***LEXEDIT**. The contents of these files have the textual display formats for all internal PxPlus object code elements.

Whenever PxPlus compiles a statement, it converts it to an internal code. This internal code consists of a one or two character code, which represents a directive, function or system variable. These codes are saved to program files. The codes are translated back to viewable text when a statement is listed.

Altering the syntax tables within PxPlus can change the translation process. This functionality allows for the definition of a completely different set of directives, functions and variables, as far as the entry and listing of the program is concerned.

One of the primary uses for this functionality is to allow for multi-lingual systems. By defining directives in other languages, users in the field who may be responsible for interfacing with support personnel can be provided with an environment that allows them to read the program in their native language.

A secondary use of this functionality is to assist in the conversion of systems to PxPlus.
