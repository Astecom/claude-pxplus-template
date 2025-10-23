# System Parameters

**'SH'** |  **_Share Handle and Buffers_**  
---|---  
  
##  Description

**_(Windows Only)_**

The **'SH'** parameter controls the sharing of operating system handles (the logical connection between your application and a data file) and data buffers whenever the same file is opened more than once.

When the **'SH'** parameter is enabled during the file open process, the system will compare pathnames of the file being opened with those of other currently open VLR/FLR files. If the same file is already opened, the system will internally share that connection and all associated file buffers.

Files that are opened for LOCK or files opened in one instance for Read/Write and another for Read Only will not be shared.

#### **Note:**  
The **'SH'** parameter only works with VLR or FLR files, **_not_** EFF files.

The **'SH'** parameter can be used to increase system performance in cases where the same file is opened more than once. It avoids the OS overheads associated with opening the file and by sharing buffers allows the system to access the data quicker.

There are many instances where the same file is opened more than once in most applications. For example, a typical maintenance program will open a master file and often provide access to a generic query facility to lookup record IDs. Usually this means that the master file will be opened once by the maintenance program and once by the query.

_(The 'SH' system parameter was added in PxPlus v7.10.)_

##  Default

**_Off_**

## Example

This sample program can be used to see the difference that sharing handles and buffers can make:

> begin  
>  SV_SH=prm('SH')  
>  for SH=0 to 1  
>  set_param 'SH'=SH  
>  print tbl(SH,'black','blue'),"'SH'=",str(SH)  
>  randomize 1.235  
>  erase "testfile",err=*next  
>  RIO=tcb(50),WIO=tcb(51)  
>  keyed "testfile",6  
>  open (1)"testfile"  
>  open (2)"testfile"  
>  open (3)"testfile"  
>  open (4)"testfile"  
>  X=tmr(0)  
>  WR=0,RD=0,DEL=0,OP=0  
>  for I=1 to 200000  
>  FL=1+rnd(4)  
>  N=rnd(100)  
>  if N=99 \  
>  then close (FL);  
>  open (FL)"testfile";  
>  OP++;  
>  continue  
>  K$=str(rnd(1000):"000")+str(rnd(1000):"000")  
>  if N<50 \  
>  then WR++;  
>  write (FL,key=K$)K$,WR,num(K$)+WR;  
>  continue  
>  read (FL,key=K$,dom=*continue)K,S,V  
>  if K<>num(K$) or V<>K+S \  
>  then escape  
>  if N<80 \  
>  then RD++;  
>  continue  
>  remove (FL,key=K$)  
>  DEL++  
>  next  
>  close (*)  
>  RIO=tcb(50)-RIO,WIO=tcb(51)-WIO  
>  print "Writes=",@(15),WR  
>  print "Reads=",@(15),RD  
>  print "Removes=",@(15),DEL  
>  print "Reopens=",@(15),OP  
>  print "Phys Rd=",@(15),RIO  
>  print "Phys Wr=",@(15),WIO  
>  print "Seconds=",@(15),tmr(1)  
>  next SH  
> set_param 'SH'=SV_SH  
>  print 'RM',  
>  end

#### **Note:**  
While the **'SH'** parameter can be used in most instances to improve system performance, if a file is renamed while open, there is a possibility that the logic might fail.

**_Example:_**

Assuming that the parameter is **_On_** and your application issued:

> open (10)"/myapp/data/company_1/file1"

If the directory '**company_1** ' was then renamed to '**company_xx** ' and a new **file1** was created:

> rename "/myapp/data/company_1","company_xx"  
>  directory "/myapp/data/company_1"  
>  serial "/myapp/data/company_1/file1"

Now, if your application issued another open to the same pathname:

> open (100)"/myapp/data/company_1/file1"

The system will incorrectly assume that this is the same as the original **file1** opened on channel 10. The net effect is that channel 100 will be actually pointing to what is now **"/myapp/data/company_xx/file1"** , not **"/myapp/data/company_1/file1"**.

Without the **'SH'** parameter enabled, the system would have correctly opened the new **file1**.

**_The possibilities of this occurring are _very, very low_ and most applications will never encounter this situation._**
