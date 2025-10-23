# Directives 

**TRY .. CATCH .. FINALLY .. END_TRY** |  **_Exception/Error Trapping_**  
---|---  
  
##  Format

**TRY [WITH ERROR_HANDLER]  
**... logic to run with the option to enable error handler

**CATCH  
**... logic to execute should an error occur

**FINALLY  
**... optional logic to execute after the **TRY** or **CATCH** logic completes

**END_TRY**

##  Description

Using the **TRY .. CATCH .. FINALLY** allows you to execute a block of code and trap any/all errors that might occur within it.

The basic construct of a **TRY .. CATCH** block of code is as follows:

> try  
>  ! Logic to execute  
>  ! Any errors that occur in this code or code that it  
>  ! calls via GOSUB, PERFORM, CALL or Object Method  
>  ! will invoke the CATCH logic.  
>  catch  
>  ! Execution will transfer to this block of code should an exception occur in the TRY block.  
>  ! If no exception occurs in the TRY block, the CATCH block will be skipped.  
>  finally  
>  ! This optional block of code will always get executed regardless  
>  ! whether an exception occurs or not. Generally this logic will attempt  
>  ! clean up from either the TRY block or CATCH block, such as closing  
>  ! files, resetting the display, etc.  
>  end_try

The **TRY, CATCH, FINALLY** and **END_TRY** directives must appear in the above sequence. There must be only one **CATCH** and **FINALLY** block within the structure, with the **CATCH** block being mandatory, and the **FINALLY** block being optional. Any error in the structure of the logic will be reported as an Error #67: Invalid Try/Catch/Finally structure or transfer.

Execution of a **CATCH** , **FINALLY** or **END_TRY** outside the scope of a **TRY** directive will result in an error. In addition, transferring out of **TRY** structure without completing it will result in an internal stack error being generated: Error #27 - Unexpected or incorrect WEND, RETURN, WITH or NEXT.

A **TRY/CATCH** logic block will trap errors that are not handled by **ERR=** clauses or other error handling logic and that normally would have been trapped by **ERROR_HANDLER** or **SETERR** or returned to the user. While a **TRY/CATCH** is in effect, the system will ignore any **ERROR_HANDLER** or **SETERR** you may have set unless you add the **WITH ERROR_HANDLER** clause to the **TRY** directive. If a **SETERR** is set within a **TRY** , the **SETERR** is ignored unless you add the **WITH ERROR_HANDLER** clause. Inclusion of the **ERROR_HANDLER** clause will result in an error being forwarded to your error handler for processing, and only if it initiates the error will the **TRY/CATCH** logic take effect. If a **SETERR** is set _outside_ either a **TRY** or **TRY WITH ERROR_HANDLER** , it is always ignored.

#### **Note:**  
Any error in the **CATCH** logic will first execute its related **FINALLY** block then report the error back to any higher level error trapping logic. An error in the **FINALLY** logic will also report the error back to a higher level error trap.

_(The TRY .. CATCH ..FINALLY .. END_TRY directives were added in PxPlus v10.10.)  
(Support for the TRY WITH ERROR_HANDLER directive was added in PxPlus 2016.)_

##  See Also

[**ERROR_HANDLER Define Generic Handler**](error_handler.md)  
**[SETERR Set Error Transfer](seterr.md)**
