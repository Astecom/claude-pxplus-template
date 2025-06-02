# Printing

**Printing via Thin-Clients** |  **__**  
---|---  
  
Print requests are handled differently, depending on the thin-client type. Methods for printing via **WindX** are outlined below.

Windows printers can be accessed via**WindX** by prefixing the name of the print destination with the **[[WDX]](../../../command_tags/wdx.htm)** tag.

**_Example:_**

> OPEN (30)"[WDX]*WINPRT*"   
>  OPEN (1)"[WDX]\\\Print_Server\HP_Laser"

Under UNIX/Linux, the**[WDX]** tag is not required for access to***WINPRT*** and***WINDEV*** because these print requests default to the WindX client automatically.

Access to***WINPRT*** and***WINDEV*** under a Windows server will open the printer relative to the host. The**[WDX]** tag is required in order to direct print requests to the WindX client's print system.

To determine if WindX is being used, use the **[TCB( )](../../../functions/tcb.md)** function or test the **[MSE](../../../variables/mse.md)** system variable:

> %WINDX$=""; IF TCB(88)>0 THEN %WINDX$="[wdx]"  
>    
> **_or  
> _**  
>  %WINDX$=""; IF DEC(MID(MSE,22,1))>0 THEN %WINDX$="[wdx]"

To make all**OPEN** printer requests WindX aware:

> OPEN (1)%WINDX$+"*WINPRT*;AsIs"   
>  OPEN (1)%WINDX$+"*WINDEV*;AsIs"   
>  OPEN (1)%WINDX$+"*WINPRT*;HP Laser Jet on \\\Main_Server\HPLaser"   
>  OPEN (1)%WINDX$+"*WINPRT*;HP Laser Jet;Orientation=Landscape"
