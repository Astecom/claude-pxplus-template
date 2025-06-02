# Language Reference - Appendix 

**Input/Output and Control Options** |   
---|---  
  
Several directives and system functions include optional syntax elements in their formats. Some are defined individually, and some are listed in format groups _(ctrlopt or fileopt)_.

**[File Options](input~output_and_control_options.htm#Mark1)** (_fileopt_) are used to fine tune code and redirect processing; e.g. they can be used to handle exceptions, set the position of the key, deal with data errors, etc.

**[Control Options](input~output_and_control_options.htm#Mark2)** (_ctrlopt_) are used primarily to set various aspects of a control object.

Refer to the format (syntax) descriptions of the specific directive and function for information on the use of each option listed below.

##  File Options

Common input/output file options are listed below.

**BSY=**_stmtref_ |  On record or file busy status, transfer to program line number/statement label.  
---|---  
**BSZ=**_num_ |  Block size in bytes.  
**DIR=**_num_ |  Direction indicator. This adjusts the record pointer by _num_ records where a positive value advances the pointer, a negative pointer reverses the pointer, and a DIR=0 indicates no movement. This option is **_not_** supported with use of the **[WDX]** tag.  
**DOM=**_stmtref_ |  When specified, the DOM option indicates the statement number (nnnn) to transfer to if the record referenced by the directive is either missing (in the case of READ directives) or already exists (in the case of WRITE directives).  
**END=**_stmtref_ |  When specified on a READ directive, the END option indicates the statement number (nnnn) to transfer to if the end of the file is reached (Error #2). On a WRITE directive, the END option causes a transfer if the output file has reached its maximum size or no more file space is available.  
**ERR=**_stmtref_ |  The ERR option specifies the statement to transfer to should any error occur during the processing of the directive. If used in conjunction with the BSY=, DOM= or END= options, the other options take precedence.  
**IND=**_num_ |  Generally used to define the record being accessed by its record 32-bit record index. For **_Fixed Length Keyed_** files, _num_ represents an offset into the data file (first record has an index of 0, second is 1, and so on). However, some record indexes will be set aside by the system to be used for key tables and may yield gaps where the record indexes have been used for keys. For **_Variable Length Keyed_** files, _num_ represents a logical page address and record index within that page. The page address is contained in the top 24-bits (high order 3 bytes) with a record index within that page in the lower 8 bits. For VLR files, the page address is the actual physical address for the data page. For EFF files, the page address is a logical page number in the file. For **_TCP/IP Server_** files, _num_ represents an internal socket connection to the client that can be used to manually direct output to specific sockets. Used with the **[INPUT](../directives/input.md)** directive, **IND=**_num_ sets the starting position (column number) of the cursor in the input field.  
**IOL=**_iolref_ |  Either a string variable containing the object code of an IOLIST, the name of the IOLIST (for files with multiple record formats) or a statement reference to an IOList (statement number/label).  
**ISZ=**_num_ |  File open for access in binary mode.  
**KEY=**_string$_ |  Record key or Password to open file. (KEY\="?" provides list of databases (tables) defined in PxPlus ODBC.)  
**KNO=**_num_ |_name_ _$_ |  File access key number (_num_) or name (_name$_), where _num_ is 0 based (0 - 15 for VLR/FLR files; 0 - 255 for EFF files).

#### **Note:**  
Using the **[SELECT](../directives/select.md)** directive with the KNO= option to access records by a logical position is **_not supported on FLR files_** because the key blocks are randomly intermingled with the data and deleted records are not distinguishable from live data.  
  
**LEN=**_num_ |  The LEN option can be used with the INPUT directive to limit the length of the input data. If this option is specified the INPUT directive, only the number of characters specified by _num_ will be read. No further data will be accepted. The input must be terminated by a <**ENTER** > key, control key, or other function key.  
**NBF=**_num_ |  Dedicated number of buffers.  
**NUL=**_stmtref_ |  On no input, transfer to program line number/statement label.  
**OPT=**_string$_ |  File open options.  
**REC=**_string$_ |  Record prefix (**REC=VIS(**_string$_**)** can also be used).  
**RNO=**_num_ |  Record number.  
**RTY=**_num_ |  Number of times to retry (one second intervals). Default is set via the [**'WT'=**](../parameters/wt.md) system parameter.  
**SEP=**_char$_ |  Default field separator character. Hex or ASCII string value.  
**SIZ=**_num_ |  **_Number of Characters to Read:_** If negative, _num_ identifies the number of characters to be read. If _num_ is a positive number, the read continues until _num_ characters are received.  
  
**_Number of Bytes to Write:_** If _num_ exceeds the amount of data being written from the variable, the data is padded with nulls.  
**TBL=**_stmtref_ |  Data translation table.  
**TIM=**_num_ |  Maximum time delay to wait before returning a Record/File Busy error.  
  
##  Control Options

The following options are used in control directives:

**ERR=**_stmtref_ |  Error transfer.  
---|---  
**FNT=**_"font,size_[_,attr_]_"_ |  Font name, size, optional attributes. See **['FONT'](../mnemonics/font.md)** mnemonic.  
**FMT=**_def_ _$_ |_mask$_ |  Format definition for the associated control. For character string masks, see [**Data Format Masks**](data_format_masks.md).  
**KEY=**_char$_ |  Hot key.  
**LEN=**_num_ |  Maximum input characters.  
**MSG=**_text$_ |  Message line.  
**MNU=**_ctl_ |  CTL value associated with right-click menu event.  
**NUL=**_string$_ |  Empty value.  
**OPT=**_char$_ |  Single character parameter/option.  
**SEP=**_char$_ |  Single character translation.  
**TIP=**_text$_ |  Mouse pointer message. See **['TC'=](../parameters/tc.md)** system parameter to change the colour.
