# Service Functions 

**PxIOSetServiceOption** |  **__**  
---|---  
  
## Description

Changes a service option

## Format

**intPxIOSetServiceOption(PxIOService service, PxIOServiceOptionType type, int value);**

**_Where:_**

**service** |  A valid PxIOService handle. See **[PxIOCreateService](PxIOCreateService.md)** for more information on creating a service and obtaining a service handle.  
---|---  
**type** |  Service option value to set. The available options are listed in **[Appendix B](../Appendix%20References/Appendix%20B.md)**.  
**value** |  New option value. The range of allowed values for each option are outlined in **[Appendix B](../Appendix%20References/Appendix%20B.md)**.  
  
## Return Value

If the function succeeds, a value of PXIO_SUCCESS_STATUS is returned; otherwise, an error value is returned. More information on the nature of the error can be found by calling **[PxIOGetError](../Error%20Functions/PxIOGetError.md)**.
