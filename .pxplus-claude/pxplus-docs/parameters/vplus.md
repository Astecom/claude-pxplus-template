# System Parameters

**'V+'** |  **_Program Source Control Format_**  
---|---  
  
##  Description

The 'V+' parameter is used to control how the text of programs will be 'saved' into the source control files. Its value will consist of a mask consisting of:

**0** |  CVS/SVN source will use lowercase variables***** , directives, and suppress the LET  
---|---  
**1** |  CVS/SVN source will use uppercase variables***** , directives, and suppress the LET  
**2** |  CVS/SVN source will use the 'LD', 'LC' and 'NL' parameters in effect  
**+4** |  A SAVE to a serial file will use the CVS/SVN settings  
**_* The case of the variables will change ONLY if 'MC' is not set._**  
  
Adding 4 to the value of 0, 1 or 2 will force the format of a SAVE to a serial file to match that of the CVS/SVN auto-output.

_(The 'V+' system parameter was added in PxPlus v9.10, build 9201.)_

##  Default

**0**
