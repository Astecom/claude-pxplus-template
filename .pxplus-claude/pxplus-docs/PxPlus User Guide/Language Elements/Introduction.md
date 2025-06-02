# Introduction to Using PxPlus

**Language Elements** |  **__**  
---|---  
  
This section provides an overview of the basic concepts and elements used for building PxPlus applications. While the language itself is easy to learn, the method of execution may seem a little unusual for novices, particularly if they are used to **_compiled_** languages. PxPlus is **_interpreted_** , which means it is executed directly from its source form:

  * When a valid instruction is entered at the PxPlus console, it is evaluated for syntax, converted to tokenized code, and then executed **_immediately_**.
  * When several instructions are entered together in the form of a program, they are evaluated for syntax, converted to tokenized code, and then stored in memory.
  * A program can be executed directly from memory, or saved to a file for later use. All program files are loaded and executed within the PxPlus session itself.



PxPlus is ideal for development, debugging and testing. By comparison, most **_compiled_** languages require separate procedures for entering source and for generating object code, which must be saved to a different file outside of the development environment to be executed. **_Interpreted_** code is quicker because it requires fewer steps; i.e. _enter_ **+**  _interpret_ instead of _enter_ **+**  _compile_ **+**  _run_.

When PxPlus tokenizes source statements, each multi-character reserved word and value is compressed into 1-byte tokens (ignoring white spaces). Maintaining tokenized source uses far less memory and is much faster to interpret and execute than working in the original format. When further editing is required, the tokenized code is simply reconstructed back into readable text when displayed in PxPlus.

#### **Note:**  
If you are new to PxPlus, remember that applications written in PxPlus can only be executed on systems that run a copy of PxPlus.

## See Also

**[Directives, Statements and Programs](Directives,%20Statements%20and%20Programs/Overview.md)**  
**[Primary Syntax Elements](Primary%20Syntax%20Elements/Overview.md)**  
**[Data Types, Literals and Variables](Data%20Types,%20Literals%20and%20Variables/Overview.md)**
