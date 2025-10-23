# Directives 

**REPEAT DATA TO..ON..** |  **_Repeat/Duplicate Output_**  
---|---  
  
## Formats

1\. _Replicate Output Sent to One File on Another_: |  **REPEAT DATA TO** _file1_**ON** _file2_ , **ERR=**_stmtref_  
---|---  
2\. _Terminate Replication_: |  **REPEAT DATA TO** _file1_**END** , **ERR=**_stmtref_  
3\. _Define a Control File for Auto-Replication_: |  **REPEAT DATA CONTROL FILE** _ctrlfile$_ , **ERR=**_stmtref_  
4\. _Define an Error Handler for Replication_: |  **REPEAT DATA ERROR_HANDLER** _errhdlr_ _$_ , **ERR=**_stmtref_  
  
**_Where_** _:_

_file1_ |  File number whose output commands will be replicated. (Primary)  
---|---  
_file2_ |  File number that will receive the replicated output commands. (Replicated)  
_ctrlfile_ _$_ |  A string containing the name of a file that defines the auto-replication rules for data files.  
_errhdlr_ _$_ |  A string containing the name of an error handler that will be called to process any errors that occur during the replication process.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Description

The **REPEAT DATA** directive is used to control the automatic replication of all **PRINT** , **WRITE** , **INSERT** , **UPDATE** or **REMOVE** directives sent to one file (the primary file) to another file (the replicated file).

The purpose of this directive is to allow programs to create mirror copies of reports and/or data files without having to issue identical PRINT or WRITE statements to two separate files. While data replication is active, all output directives to the primary file will be sent to the replicated file.

When repeating the output, the system will internally process the directive twice - once for the primary file and again for the replicated file.

#### **Note:**  
Auto-increment/decrement options will only be done once.

A unique error handler can be specified to trap any errors that might occur during the replication process. If no error handler is present, normal error processing will occur with the value in LFA indicating the file on which the error occurred.

_(The REPEAT DATA directive was added in PxPlus v 7.00.)_

##  Format 1

**_Replicate Output Sent to One File on Another_**

**REPEAT DATA TO** _file1_**ON** _file2_ , **ERR=**_stmtref_

This format initiates the replication of all **PRINT** , **WRITE** , **INSERT** , **UPDATE** or **REMOVE** directives sent to _file1_ on _file2_. Once the directive is executed, all subsequent output directives to _file1_ will also be sent to _file2_. Both files must be open at the time the directive is executed.

When doing **REPEAT DATA** , the system re-processes the **WRITE** or **REMOVE** directive. This allows you to replicate the data to files with different IOLists or formats. For example, you might have a Customer master file with a large amount of detail and a potential cross reference key file that could be used to provide additional keys. The updates would effectively allow you to have your alternate keys in the secondary file always in sync with the main master file. It also would allow you to write the data to an external database where the format may be different. The main file might have fixed fields using the CHR or LEN formatting, whereas on the database, you might want everything in unique columns.

#### **Note:**  
The system will check to see if the file you are repeating data for itself is the target of data replication. If a looping condition exists within the data replication (_file1_ repeats _file2_ and _file2_ repeats _file1_), an Error #89: File access denied - I/O operation pending will be generated.

## Format 2

**_Terminate Replication_**

**REPEAT DATA TO** _file1_**END** , **ERR=**_stmtref_

This format terminates the replication of the output going to _file1_.

## Format 3

**_Define a Control File for Auto-Replication_**

**REPEAT DATA CONTROL FILE** _ctrlfile$_ , **ERR=**_stmtref_

This format defines the control file that the system will check to see if automatic replication is desired. If the pathname of a file being updated matches an entry in this control file, the system will initiate replication automatically. The pathname check is performed whenever the first output operation is done to a file.

#### **Note:**  
This directive format can only be used when the Data Mirroring (SQL Mirror) module is enabled within PxPlus.

For additional information on the format of this file, see **[Data Mirroring](../Data%20Mirroring/Introduction.md)**.

## Format 4

**_Define an Error Handler for Replication_**

**REPEAT DATA ERROR_HANDLER** _errhdlr_ _$_ , **ERR=**_stmtref_

This format defines an error handler that will be invoked whenever an error occurs while attempting to replicate an output directive, at which point the program defined by _errhdlr_ _$_ will be called with the following information:

**Arg** |  **Type** |  **Contents** |  **Description**  
---|---|---|---  
1 |  String |  Directive$ |  This string will contain the type of operation being performed (WRITE, INSERT, UPDATE, PRINT, REMOVE, PURGE).  
2 |  Number |  ERR |  This argument will have the error condition that was detected during the replication operation.  
3 |  Number |  PrimFileno |  This will contain the primary file number.  
4 |  Number |  ReplFileno |  This will contain the replication file number (or -1 if the error occurs during the OPEN).  
5 |  String |  RepPath$ |  This will contain the pathname for the replication data file.  
  
The error handler is intended to allow the application to log the problem encountered and to take the necessary corrective action. Generally, it should EXIT in order to resume execution of the original program.

If the error handler exits with an error itself (EXIT _nnn_), the application will have the **_original_** error code reported and the standard program exception logic processing will apply.

##  Example

In the following example, the printed report will be sent both to the viewer and to a PDF file. All **PRINT** directives will send output to both files.

> begin  
>  open (1)"*viewer*"  
>  open (2)"*pdf*;file=\junk.pdf"  
>  **repeat data to 1 on 2**  
>  print (1)'font'("Courier New",1),'DF',  
>  while 1  
>  read data COMPANY$,CUSTNO$,NAME$,ADDR$,OWES,end=*break  
>  if LINESLEFT<1 or COMPANY$<>CURCOMP$ \  
>  then gosub NEWPAGE  
>  print (1)CUSTNO$,@(10),NAME$,@(40),ADDR$,@(70),OWES:"-$###,##0.00"  
>  LINESLEFT--  
>  wend  
>  end  
>  !  
> NEWPAGE:  
>  if PAGENO<>0 \  
>  then print (1)'FF',  
>  PAGENO++  
>  print (1)"Page:",PAGENO:"###0",@(30),"Client list for "+COMPANY$  
>  print (1)  
>  print (1)"Client",@(10),"Name",@(40),"Address",@(70),"Balance"  
>  print (1)"------",@(10),dim(20,"-"),@(40),dim(20,"-"),@(70),"------------"  
>  print (1)  
>  LINESLEFT=50  
>  CURCOMP$=COMPANY$  
>  return  
>  data "ABC","000047","Cyclops Car Dealer","6675 Cherry",3.12  
>  data "ABC","000122","Global Undergarments","823 Maple Lodge Court",99.54  
>  data "ABC","000192","The Hungry Incorporated","5582 2nd Avenue",.55  
>  data "ABC","000295","The Hungry Magazine","8576 Major Mackenzie",71.74  
>  data "ABC","000310","New Dimensions Company","8052 Center Avenue",5.93  
>  data "ABC","000332","Cyclops Computing","7723 Fantasy Island",7.61  
>  data "DEF","000355","Kitty Kay Undergarments","2124 Major Mackenzie",4.55  
>  data "DEF","000385","New Age Importers","1743 Allstate Parkway",73.84  
>  data "DEF","000461","SOTA Golf club","4377 Major Mackenzie",63.66  
>  data "DEF","000555","Mike was here","8450 Buga-Buga Drive",11.43

File replication can be cascaded for output to multiple files. For example, the logic in NEWPAGE could be changed to produce one PDF file for each company:

> NEWPAGE:  
>  if PAGENO<>0 \  
>  then print (1)'FF',  
>  **close (3)  
>  open (3)"*pdf*;file=\"+COMPANY$+".pdf"  
>  print (3)'font'("Courier New",1),'DF', ! Set font  
>  repeat data to 2 on 3**  
>  PAGENO++  
>  print (1)"Page:",PAGENO:"###0",@(30),"Client list for "+COMPANY$  
>  print (1)  
>  print (1)"Client",@(10),"Name",@(40),"Address",@(70),"Balance"  
>  print (1)"------",@(10),dim(20,"-"),@(40),dim(20,"-"),@(70),"------------"  
>  print (1)  
>  LINESLEFT=50  
>  CURCOMP$=COMPANY$  
>  return
