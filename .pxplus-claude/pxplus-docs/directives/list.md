# Directives 

**LIST** |  **_List Program Statements_**  
---|---  
  
##  Formats

1. |  _List a Range of Lines:_ |  **LIST** [**EDIT**] [(_chan,fileopt_)][_from_stmt_][,[_to_stmt_]]  
---|---|---  
2. |  _List a Range of Lines_ : |  **/**[**EDIT**] [(_chan,fileopt_)][_from_stmt_][,[_to_stmt_]]  
  
**_Where:_**

_/ or \_ |  Use either of the slashes (forward or back) as a substitute for typing **LIST**.

#### **Note:**  
PxPlus also accepts **LSIT**(i.e. mistyped version).  
  
---|---  
**EDIT** |  Use the optional keyword **EDIT** with the **LIST** directive to have PxPlus both logically break the lines and indent them. See [**'LE'**](../parameters/le.md) system parameter.  
_chan_ |  Channel or logical file number to receive the readable listing of the contents of a program.  
_fileopt_ |  Supported file options (see **[File Options](../appendix/input~output_and_control_options.htm#Mark1)**): |  **END=**_stmtref_ __ |  End**-** Of**-** File transfer (File full)  
---|---  
**ERR=**_stmtref_ __ |  Error transfer  
**IND=**_num_ __ |  Record index  
**TBL=**_stmtref_ |  Data translation table  
_stmtref_ |  Program line number or statement label to which to transfer control  
_from_stmt_ __ |  Starting statement to list. Optional. If you omit this, the default is to LIST from the start of the program.  
_to_stmt_ __ |  Ending statement to list. Optional. If you omit this, the default is to LIST to the end of the program.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **LIST** directive converts program statements from the internal (compiled) format to a readable listing, which can be sent to a file or to the screen. This directive gives you a listing of the contents of a program's statements as they were entered into the system originally; that is, it will return a series of directives, variables and operators with line numbers. The listing will not necessarily match _exactly_ the way in which a statement was entered in the first place but will be _syntactically_ the same.

For instance, if you entered 

> 510 A$="Example"

and then used the **LIST** directive, PxPlus would return 

> 0510 let A$="Example"

If you use the **LIST** directive with no file number or options, the output will be displayed on your screen. You can direct the output of the **LIST** directive to any serial or indexed file or to a device (e.g. a printer or terminal). See **[File Handling](../PxPlus%20User%20Guide/File%20Handling/Introduction.md)**.

If the output of a **LIST** command goes to your terminal, the listing stops to allow you to read the program page by page. To continue the listing, simply hit the **Enter** key. To stop the listing, use the **F4** key. All other input is discarded.

If the listing of a statement exceeds the maximum allowed length of a record for a given file (e.g. 80 for terminals), the statement will be broken into multiple segments (records/lines). The first _n_ characters (where _n_ is the maximum segment length) will be contained in the first segment with each subsequent _n_ characters up to the end of the statement sent in subsequent segments. Each continuation segment will be prefixed by the line number followed by a colon "**:** " and a space.

## Coloured Syntax Displays

If the '**CS'** system parameter is **_On_** , your listing will be displayed with a different colour for each syntax element. See [**'CS'**](../parameters/cs.md) system parameter and [**'*H'**](../mnemonics/~h.md) mnemonic.

A command line utility called COLOUR (or COLOR) can be used to display or alter the current settings. Type COLOUR or COLOR at a PxPlus prompt to display online help for this utility.

## Highlighted Search Strings

If a search has been implemented for the currently loaded program and the **['LM'](../parameters/lm.md)** parameter is **_On_** , the system will automatically highlight the search string when the program is listed.

See **[Punctuation/Syntax](../introduction/punctuation~syntax.md)** for a description of the search utility syntax.

##  Example

Given a file with twenty character records 

0020 print "The quick brown fox licked the dog"

becomes 

> 0020 print "The quic  
>  0020: k brown fox li  
>  0020: cked the dog"

|  **LIST _Directive_** |  **_Result_**  
---|---|---  
|  LIST 30 |  Lists line 0030  
|  / 30 |  Also lists line 0030  
|  LIST 30,100 |  Lists lines 0030 to 0100  
|  LIST 30, |  Lists lines from 0030 to the end of the program LIST,WRAP_UP  
Lists entire program  
|  LIST (1) |  Lists entire program to logical file #(1), which can be a file/device (e.g. a printer)
