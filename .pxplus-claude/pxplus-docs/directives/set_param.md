# Directives

**SET_PARAM** |  **_Set System Parameters_**  
---|---  
  
##  Format

**SET_PARAM**[_param_list_]  
  
**_Where:_**

_param_list_ |  List of mnemonics and optional values for setting various system parameters for your PxPlus environment.  
---|---  
  
##  Description

Use the **SET_PARAM** directive to set system parameters. These parameters set internal options in PxPlus. For a list of possible parameters that can be set, see **[System Parameters](../parameters.md)**.

You can find the current value or state of these parameters using the **PRM( )** function and the **PRM** system variable.

##  See Also

**[PRM PxPlus Parameter Settings](../variables/prm.md)**  
**[PRM( ) Return Parameter Value](../functions/prm.md)**

##  Example

print pgn  
set_param 'OP'  
print pgn  
  
->run C:\PVX\MANUAL\TST\TST_EGS TST_EGS  
  
set_param 'AH' ! Switches Alternative Heading On  
set_param -'AH' ! Minus sign switches 'AH' Off  
set_param 'BY'=0 ! Sets the Base Year to Julian calendar base  
set_param 'BY'=1970 ! Resets Base Year to default

You can use a Boolean value to reset a switch:

set_param 'AH'=0 ! Switches 'AH' Off  
->?prm('AH')  
0
