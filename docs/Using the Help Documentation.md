# PxPlus Language Reference

**Using the Help Documentation**|   
---|---  
  
The information below will be helpful to keep in mind when using the PxPlus Help documentation.

## Linked Cross-References

Blue hyperlinks appear throughout the PxPlus Help documentation wherever a page or section cross-references another. The mouse pointer looks like an index finger when it is positioned over a linked cross-reference - simply click to activate the link.

## Conventions

The following syntax items are used in the PxPlus Help documentation to illustrate the format of program statements in PxPlus:

... |  **Dots** indicate the continuation of a list of elements.  
---|---  
[ ] |  **Square brackets** enclose optional elements in the format. **_Example:_** In **ABS**(_num_[,**ERR=**_stmtref_]), you can omit the **ERR=**_stmtref_ portion of the statement, as in **ABS**(**X-Y**). (Exceptions are noted for individual commands where the brackets are "real"; i.e. part of the syntax.)  
{ } |  **Curly brackets** enclose a list of elements in syntax formats where it is mandatory to select one item. **_Example:_** With {**YES** | **NO**}, you must select either **YES** or **NO**. In descriptions in this documentation, they denote {bitmap/icon} buttons. (Exceptions are noted for individual commands where the brackets are "real"; i.e. part of the syntax.)  
| |  **Vertical bars** (_pipes_) separate a choice. **_Example:_** {**YES** | **NO**}  
_chan_ |  Channel or logical file number. It must be an integer between 0 and 127. This identifies the channel to which your directive applies. **_Example:_** CLOSE (14) Channel zero (0) is the console. If you omit the channel _,_ the system defaults to 0 (the console).  
Channels 1 to 63 are commonly used for local files.  
Channels 64 to 127 are used for global files.

#### **Exception:**  
In extended file mode (see **['XF'](parameters/xf.md)** system parameter), the channels range from 0 - 32767 for local files, and 32768 - 65000 for global files.  
  
_col,ln,wth,ht_ |  Position/coordinates. Numeric expressions. Column and line coordinates for top left corner, width in number of columns, and height in number of lines.  
_ctrlopt,fileopt_ |  Optional syntax elements three-character codes followed by an **=** (_equals sign_) and argument. **_Example:_** DOM=3250  
_stmtref_ |  Statement reference. This can either be the line label or line number of a statement in the current program. Line numbers must be in the range of 0 - 64999. If your given line number does not exist, PxPlus goes to the statement with the next higher line number. **_Example:_** If line 1000 does not exist and 1010 is the next line number, then for GOTO 1000, PxPlus will go to 1010 and proceed with execution from there.

#### **Exception:  
** PxPlus verifies the existence of an IOList and _stmtref_ for **IOL=**_stmtref_. It does not proceed to the next higher statement number.  
  
_varlist_ |  List of comma-separated variables. Typically, a mix of string and/or numeric variables is acceptable. **_Example:_** DEPT,ITEM,DESC$... See the individual **[Directives](directives.md)** for restrictions.  
  
## Numeric Expressions and Variables

When a syntax format in this documentation includes a **_numeric_** variable like _chan_ _, index_ or _num_ (lowercase), you can normally substitute a **_numeric expression_** consisting of variables, literals, functions and operators. For instance, your value could be something like HFN or 4 or NUM(A1$)*3-2. (NUM in uppercase is the function.)

When numeric variables are used in numeric expressions, subscripts are allowed; e.g. COST[4].

**_Example:_**

To apply the format **FOR**  _var_**=**_first_ **TO**  _last_ **[STEP** _val_**] ...**

> FOR I=1 TO 10  
>   
> ** _or  
> _**  
>  FOR LEAPS=-10 TO XYZ STEP ABC*.1

#### **Note:**  
Exceptions and valid values are stated when there are restrictions on the use of numeric or string expressions in a format (e.g. where only variable names are allowed).

## String Expressions and Variables

When a syntax format in this documentation includes a **_string_** variable like _prog_name_ _$_ or _title$_ , you can normally substitute a **_string expression_** consisting of variables, literals, functions, and operators; e.g. PRINT "Printing"+REPORT$.

When string variables are used in string expressions, subscripts and substrings are allowed; e.g. CUSTOMER$(15,4).

**_Example:_**

For the **CHECK_BOX READ [*]**  _ctl_id_**,**  _state$_ **[,**  _mode$_**][,ERR=**_stmtref_**]** format, you need string variables to receive the current **_state_** and optionally, the **_mode_** of selection:

> CHECK_BOX READ 14000,ON_OFF$,KEYSTROKE$
