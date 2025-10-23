# Directives  
  
**SETDEV IOL=** |  **_Alter IOList of Open Channel_**  
---|---  
  
##  Format

**SETDEV (**_chan_**) IOL=**_iolref_ _$_[: {***** |**^** |**KEY**}]  
  
**_Where:_**

***** |  Optional indicator, changes the embedded IOList.  
---|---  
**^** |  Optional indicator for changing the alternate IOList.  
_chan_ |  Channel or logical file number.  
_iolref_ _$_ |  Valid IOList reference.  
**KEY** |  Optional indicator for changing the KEY IOList.  
  
#### **Note:**  
If no {***** |**^** |**KEY**} indicator is used, the default IOList will be changed.

##  Description

Use the **SETDEV IOL=** directive to alter the various IOLists associated with a currently open channel. This will override the current IOList definition for a channel while the channel is open and will not physically alter the file.

##  Example

0020 iolist A$,B$,C$  
0030 setdev (1)iol=0020:* ! Changes the embedded IOList  
0040 setdev (1)iol=0020:^ ! Changes the alternate IOList  
0050 setdev (1)iol=0020:key ! Changes the Key IOList  
0060 X$=cpl("IOLIST A$,B$")  
0070 setdev (1)iol=X$ ! Changes the default IOList
