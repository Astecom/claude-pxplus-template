# Automation in PxPlus

**Error Handling** |  **__**  
---|---  
  
No matter how carefully crafted your code, errors can (and probably will) occur when programming against COM objects. Lack of proper documentation, misbehaved COM objects, and incorrect data types are just a few of the numerous reasons that errors will occur. When a COM error does occur, it normally appears in the form of an Error #88: Invalid/unknown property name. This error should only be taken as an indicator that a COM method (property) call **_failed_**.

To further identify the problem, the following steps should be taken:

**Step** |  **Description**  
---|---  
1. |  **_Break multi-tick (') statement lines into single tick statements._**  
  
Multi-tick statement lines only specify one object variable. The other objects created to resolve the expression are temporary. If an error is reported on one of the temporary objects, it cannot be evaluated after the statement executes, thus the context of the error is lost.  
2. |  **_Check the result of MSG(-1)._**   
  
When a COM error occurs, the interop layer will set the textual error message for **MSG( -1)**.  
3. |  **_Check the PVXERROR[$] for the object._**   
  
The error code returned by **PVXERROR** is also known as the HRESULT by developers in other languages. When working with third-party developers, this information may be required. The string representation of this error is identical to what is displayed by **MSG( -1)**.  
4. |  **_Verify (with documentation or type library viewer) that the information you are passing is correct._**  
  
One of the most common errors is passing incorrect or invalid data to COM methods. The second most common error is passing too many (or too few) parameters.  
  
In most cases, the steps above will be enough to resolve the COM errors that occur. Should this not be the case, then proper documentation will be critical in resolving the issue. If documentation is not available for the COM object, then the use of **PVXDESCRIBE** can be used as a last resort. This extended method takes one string parameter, which is the name of the object's property or method for which to generate information.

If the object does not expose type information, then the interop layer will not be able to provide any detailed information.

#### **Note:**  
An object does not require type library information to be programmable. However, without proper documentation, it will be impossible to determine what member names are available and how they should be called.
