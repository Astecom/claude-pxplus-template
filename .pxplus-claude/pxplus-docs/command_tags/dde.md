# Special File Command Tags

**[DDE]** |  **_Dynamic Data Exchange_**  
---|---  
  
##  Format

**OPEN** (_chan_[,_fileopt_])"**[DDE]**_dde_app_ ;_params_ "  
  
**_Where:_**

**[DDE]** |  File tag clause to inform PxPlus that it will be opening an external **_Dynamic Data Exchange_** (DDE) application.  
---|---  
_chan_ |  Channel or logical file number to open.  
_dde_app_ |  Path and/or name of DDE application; e.g. Excel. String expression.  
_fileopt_ |  File options.  
_params_ |  Optional DDE-specific parameters. Semi-colon separated arguments and/or variables to receive returned values, etc. (Early implementations of PxPlus used a vertical bar instead of a semi-colon as separator both are now acceptable.) Refer to the documentation supplied with the individual product or application to determine how to communicate with it using the **[DDE]** link.  
  
##  Description

#### **Note:**  
DDE is supported for use in **_WindX_** or **_Windows only_**.

The **[DDE]** tag is used as a prefix in an **OPEN** statement to denote that PxPlus is to route all file I/O requests to an external DDE application; e.g. Excel. PxPlus recognizes the tag and deals with it internally at run time.

You can associate a CTL value with an item in a DDE application to have PxPlus generate the CTL value automatically whenever the value of the associated item changes:

> defctl (dde_fileno)"item"=ctl_event

##  Example

**_Example 1:_**

This example illustrates an export to an Excel spreadsheet. Note that the worksheet name is optional; however, the worksheet must exist if you include its name. This example also demonstrates the use of $09$, **Tab** , as the separator for Excel and makes selective graphical requests to draw a pie chart, etc.

> open (1)"[WDX][DDE]excel;existing_worksheet.wk1"  
>  ! or open (1)"[wdx][dde]Excel;"  
>  open (2)"SALES"  
>  R=0  
>  LOOP:  
>  DIV_ID$=key(2,end=DRAW_IT)  
>  read (2,key=DIV_ID$)DIV_NAME$,DIV_SALES  
>  R=R+1 ! Bump row number  
>  K$="R"+str(R)+"C1:R"+str(R)+"C2"  
>  write record (1,key=K$)DIV_NAME$+$09$+str(DIV_SALES)  
>  goto LOOP  
>  DRAW_IT:  
>  if R=0 \  
>  then stop ! No divisions  
>  X$="R"+str(R)  
>  write record (1)"[select(""R1C1:"+X$+"C2"","""+X$+"C2"")]"  
>  write record (1)"[new(2,1)]"  
>  write record (1)"[gallery.3d.pie(6)]"  
>  write record (1)"[window.maximize()]"  
>  write record (1)"[app.maximize()]"

**_Example 2:_**

One of the challenges when reading dates from Excel is determining the date format in order to decide which value is month, day and year. When accessed through DDE, Excel will only return the date as text string as it appears on the screen. To determine the actual date format being used, you can create a simple program to have Excel do this for you. This example illustrates how, using DDE, this can be done by adding a dummy cell in the spreadsheet and writing an Excel expression into it to get the desired results.

Below is a spreadsheet with five columns, and each one has a different date (September 13 to September 16) in a different format:

> Create a program as follows:

> open (1)"[dde]Excel;Mike1.xlsx"  
>  for r=1 to 1 ! Single row  
>  for c=1 to 5  
>  CELL$=mid("ABCDEFGHIJKLMNOPQRST",c,1)+str(r)  
>  x$="=YEAR("+CELL$+")*10000"  
>  x$+="+MONTH("+CELL$+")*100"  
>  x$+="+DAY("+CELL$+")"  
>  write record (1,key="R99C1")x$  
>  read record (1,key="R99C1")V$  
>  print pad(x$,50,"."),":",V$,  
>  next c  
>  next r  
>  end

Run this program and get the following result:

> run  
>  =YEAR(A1)*10000+MONTH(A1)*100+DAY(A1).............:20150913  
>  =YEAR(B1)*10000+MONTH(B1)*100+DAY(B1).............:20150914  
>  =YEAR(C1)*10000+MONTH(C1)*100+DAY(C1).............:20150915  
>  =YEAR(D1)*10000+MONTH(D1)*100+DAY(D1)............:20150915  
>  =YEAR(E1)*10000+MONTH(E1)*100+DAY(E1).............:20150916

This uses the cell in row 99 column 1 as a working value.

Since Excel will detect that the spreadsheet has been altered, you will need to force a "quit" to avoid the message to save the updated file.

##  See Also

**[WRITE RECORD Write Record](../directives/write_record.md)**  
**[OPEN Open a File for Processing](../directives/open.md)**
