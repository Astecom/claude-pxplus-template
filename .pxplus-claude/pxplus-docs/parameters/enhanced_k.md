# System Parameters

**' >K'** |  **_Enhanced VLR File Format_**  
---|---  
  
##  Description

The system parameter **' >K'** (or **'XK'**) can be used to enable the PxPlus enhanced VLR file format that provides both smaller and faster VLR files, especially when you have large data blocks and small keys.

Files updated while this system parameter is enabled use a modified key tree structure that is able to pack more keys per file key block. This results in less key blocks and smaller key trees.

#### **Note:**  
VLR files written while this system parameter is active are not compatible with earlier versions of PxPlus. To revert files back to a compatible format, turn off the **' >K'** parameter and then open the file and issue a **KEYED LOAD** to rebuild the keys.

This new algorithm has been shown to reduce disk space by as much as 30%, depending on the file structure and keys.

_(The ' >K' system parameter and functionality was added in PxPlus v8.11, build 9182.)_

##  Default

**_Off_**

## See Also

**['XK' Enhanced VLR File Format](xk.md)**

## Example

To give you an idea as to what this means, the following is an analysis program (filecheck):

> begin  
>  input "File to check: ",X$;  
>  if ctl<>0 \  
>  then end  
>  open (1,isz=-1)X$  
>  read record (1,siz=256,ind=0)H$  
>  B_SZ=(dec(H$(241,1))+1)*1024  
>  !  
>  ! Process all segments  
>  !  
>  for SEG=1 to 100  
>  print "Processing:",pth(1)  
>  B_ADR=512  
>  !  
>  while 1  
>  read record (1,ind=B_ADR,siz=B_SZ,err=*break)B$  
>  TOT_BLK++  
>  if B$(1,1)=$FE$ \  
>  then KEY_BLK++;  
>  KEY_FREE+=B_SZ-len(stp(B$,1,$00$))  
>  if B$(1,1)=$80$ \  
>  then DTA_FREE+=dec($00$+B$(7,2));  
>  DTA_BLK++  
>  if B$(1,1)=$00$ \  
>  then FRE_BLK++  
>  if B$(1,1)=$FC$ \  
>  then INV_BLK++  
>  if B$(1,1)=$FB$ \  
>  then DCT_BLK++  
>  B_ADR+=B_SZ  
>  wend  
>  !  
>  ! Open next segment if present  
>  !  
>  close (1)  
>  open (1,isz=-1,err=*break)X$+"."+str(SEG:"000")  
>  next  
>  !  
>  print "Total Blks:",TOT_BLK:"##,###,##0"," (for",TOT_BLK*B_SZ+512," bytes)"  
>  print "Total Segs:",SEG:"##,###,##0"  
>  print " Key Blks:",KEY_BLK:"##,###,##0"," (for",KEY_BLK*B_SZ," bytes of which",KEY_FREE," is unused)"  
>  print " Free Blks:",FRE_BLK:"##,###,##0"," (for",FRE_BLK*B_SZ," bytes)"  
>  print " Inv Blks:",INV_BLK:"##,###,##0"," (for",INV_BLK*B_SZ," bytes)"  
>  print " DictBlks:",DCT_BLK:"##,###,##0"," (for",DCT_BLK*B_SZ," bytes)"  
>  print " Data Blks:",DTA_BLK:"##,###,##0"," (for",DTA_BLK*B_SZ," bytes of which",DTA_FREE," is unused)"  
>  end

And a program to load a test data file (fileload):

> erase "tstdta",err=*next  
>  keyed "tstdta",6,0,0,bsz=8  
>  open purge (1)"tstdta"  
>  for I=1 to 10000  
>  write (1,key=str(I:"000000"))"This is record ",I  
>  next I

And the results:

> **set_param '>k'=0  
>  run "fileload  
>  run "filecheck'  
> **File to check: tstdta  
> Processing:c:\temp\tstdta  
>  Total Blks:  99 (for 811520 bytes)  
> Total Segs: 1  
>  Key Blks: 54 (for 442368 bytes of which 331450 is unused)  
>  Free Blks: 0 (for 0 bytes)  
> Inv Blks: 1 (for 8192 bytes)  
> Dict Blks: 0 (for 0 bytes)  
>  Data Blks: 44 (for 360448 bytes of which 41202 is unused)  
> **set_param '>k'  
>  run "fileload  
>  run "filecheck  
> **File to check: tstdta  
> Processing:c:\temp\tstdta  
>  Total Blks: 64 (for 524800 bytes)  
> Total Segs: 1  
>  Key Blks: 19 (for 155648 bytes of which 45325 is unused)  
>  Free Blks: 0 (for 0 bytes)  
> Inv Blks: 1 (for 8192 bytes)  
> Dict Blks: 0 (for 0 bytes)  
>  Data Blks: 44 (for 360448 bytes of which 41202 is unused)

In this example, the file went from 99 blocks down to 64 blocks (a 33% saving in disk space). In addition, the number of key blocks dropped from 54 to 19 (a 65% saving). Not only does using this option reduce the file size, but also the changes improve execution time by reducing the number of levels in the key tree.

For instance, without the **' >K'** option, a file with over 62,500 records **_must_** have a three (3) level key tree, regardless of key/block size. With this new option, a file with a 10-character key size and an 8K block can support a file with well over 250,000 records with only a two (2) level key tree.
