# Language Reference - Appendix

**Returning Error Codes and Messages**|   
---|---  
  
Often, when writing generic routines, it is desirable to not only return an error code but also an error message.

A simple technique that can be used to return an error condition and a message to a calling application is to use one of the unused system error codes. Within PxPlus, error codes are in the range from 0 to 255; however, most errors codes are below 200. For a list of all the current error codes and their meanings, see **[Error Codes and Messages](list_of_messages.md)**.

To return an application error, select one of these error codes (suggest 250) and use it in an **EXIT**  _nnn_ directive to report an error to the user. To return an associated error message, simply issue a **DEF MSG(250)= "My Error Test"** prior to issuing the exit, and then the programmer can use **MSG(250)** to determine the cause of the error. This has the added advantage that, if the error causes the system to return to Command mode, the error message will be displayed automatically.

**_Example:_**

> -:list  
>  0010 ENTER TYPE$  
>  0020 IF TYPE$<>"A" THEN GOTO BAD_TYPE  
>  0030 ! ...  
>  8000 BAD_TYPE:  
>  8010 DEF MSG(250)="Unable to process Order - Wrong type"  
>  8020 EXIT 250  
>  -:save "tstord  
>  C:\Pvxsrc\tstord  
>  ->call "tstord","B"  
>  Unable to process Order - Wrong type  
>  ->print err  
>  250

This approach can be used for called sub-programs and objects.

 

 

 
