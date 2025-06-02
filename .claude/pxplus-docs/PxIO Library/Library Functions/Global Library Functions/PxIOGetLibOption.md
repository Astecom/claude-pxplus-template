# Global Library Functions 

**PxIOGetLibOption** |  **__**  
---|---  
  
## Description

Obtains the current setting of a global library option

## Format

**int** **PxIOGetLibOption(PxIOService service, PxIOLibOptionType type, int *value);**

**_Where:_**

**service** |  A valid PxIOService handle. See **[PxIOCreateService](../Service%20Functions/PxIOCreateService.md)** for more information on creating a service and obtaining a service handle. This option is necessary to ensure that the calling process is a legitimate client of the library.  
---|---  
**type** |  Library option value to retrieve. The available options are listed in **[Appendix A](../Appendix%20References/Appendix%20A.md)**.  
**value** |  A pointer to an _int_ variable to be used to save the option value  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
