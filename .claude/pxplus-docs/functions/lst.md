# System Functions

**LST( )** |  **_Return List Form of Statement_**  
---|---  
  
##  Formats

**LST([EDIT][*]**_internal$_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

***** |  _(Asterisk)_ Returns the listing in colourized syntax.  
---|---  
**EDIT** |  Keyword indicating that listing is to be returned with indented format.  
_internal$_ |  Character string containing the internal (compiled) form of a PxPlus statement. String expression; e.g. X$=lst(pgm(10)).  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

List format from compiled statement.

##  Description

The **LST( )** function converts a PxPlus statement from internal form to normal source format. You must ensure that the string processed by the **LST( )** function is a statement in valid internal form. If it is not valid, PxPlus returns either an Error #30: Statement too complex -- cannot compile or an Error #49: <*> Internal program format error <*>.

Use the **EDIT** keyword to return a formatted statement and the ***** (_asterisk_) to display colourized syntax (the **['CS'](../parameters/cs.md)** system parameter must be **_On_**):

> X$=lst(edit *pgm(10))

#### **Note:**  
A *CMD command line utility called COLOUR (or COLOR) can be used to display or alter the current settings. Typing COLOUR or COLOR at a PxPlus prompt displays online help for this utility.

##  See Also

**['*H' Control Screen Colours](../mnemonics/~h.md)**  
**['CS' Coloured Syntax](../parameters/cs.md)**

##  Example

0030 input "Enter statement to display:",A  
0035 if A=0 then goto 2000  
0040 let X$=pgm(A,err=1000)  
0050 print lst(X$)  
0060 goto 0030  
1000 print "Cannot find statement"  
1010 goto 0030  
2000 print "DONE"; stop

->run  
Enter statement to display:50  
0050 print LST(X$)  
Enter statement to display:  
DONE
