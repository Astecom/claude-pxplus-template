# Data Files

**Indexed Files** |  **__**  
---|---  
  
In this type of file, the records may be accessed by index number. Each record on the file is assigned a record index, starting from 0. While the storage space allocated for each record is the same, the contents of the record must fit within the defined record size, with extra spaces padded with $00$. All records in an indexed file are the same length. No keys are maintained for indexed files.

The **[INDEXED](../../../directives/indexed.md)** directive is used to create an indexed file:

> **INDEXED**  _filename$_ ,[_max_recs_ ], _rec_size_ [, **SEP=**_char$_ ]

**_Where:_**

_char$_ |  Separator character. Hex or ASCII string value.  
---|---  
_filename$_ |  Name of the indexed file to create. String expression.  
_max_recs_ |  Maximum number of records in the file. Optional numeric expression. Default is no initial allocation of file space, with no limit as to final size. 0 _(zero)_ indicates that the number is dynamic. A positive value indicates that the file is pre-sized to the specified number of records. An Error #2: END-OF-FILE on read or File full on write will be generated if an attempt is made to add more than this specified number of records or access an**IND=** value above this limit.  
_rec_size_ |  Size of the data portion of each record.  
  
**_Example:_**

> INDEXED "filename",,100

Indexed files support all I/O directives except **[REMOVE](../../../directives/remove.md)**. Whenever an indexed file is read or written to, the current file position is updated to the record index selected (e.g. if a read is issued for record index 80, a read of the next index returns record 81).

The **[READ](../../../directives/read.md)** directive without an index specified returns the record with the next record index. Attempting to**READ** a record whose index exceeds the highest index written results in an error.

A **[WRITE](../../../directives/write.md)** directive without an index specified overwrites the record with the next record index. Attempting to write a record whose index exceeds the highest previously written results in all intermediary records being initialized with Hex zeroes except where the index specified exceeds the maximum record size for the file, in which case an error is returned.

**_Example:_**

> 0010 OPEN (2) "ORDFIL" ! Assign ORDFIL to channel 2   
>  0020 OPEN (3) "ORDLIN" ! Assign ORDLIN to channel 3   
>  0030 NEXT_LINE: INPUT "Enter order number:",ORD_NUM  
>  0040 IF ORD_NUM = 0 THEN END   
>  0050 READ (2,IND=ORD_NUM,END=0030) ORD_CST$,ORD_DTE$, ORD_LINES   
>  0060 PRINT "Order:", ORD_NUM, " Cust:", ORD_CST$   
>  0070 READ (3,IND=ORD_LINES) LIN_QTY, LIN_ITEM$, LIN_AMT, LIN_NEXT   
>  0080 PRINT LIN_QTY:"##0:", LIN_ITEM$,@(60), LIM_AMT   
>  0090 IF LIN_NEXT = 0 THEN GOTO NEXT_LINE   
>  0100 ORD_LINES = LIN_NEXT   
>  0110 GOTO 0070 
