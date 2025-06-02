# Language Reference

**System Parameters** |   
---|---  
  
System parameters are used at start up to define a system's operation under PxPlus. Each consists of a two-character code enclosed in single quotes. Most parameters are Boolean switches (0 or negative sign indicates **_Off_** , 1 or no sign indicates **_On_**), but some require specific values in order to be set. See **[Setting/Resetting Parameters](parameters.htm#Mark1)** below.

#### **Note:  
** In this reference, some parameters are **_always_** described with an = _equals sign_ to indicate that they are set (On) using non-Boolean values; e.g. 'BY'= _or_ 'DW'=.

Most often, system parameters are set only once at the beginning of an application, typically in a start_up program; however, any system parameter can be set or reset in your software at any time, whenever required.

For related information and examples, see [**SET_PARAM Directive**](directives/set_param.md), [**PRM System Variable**](variables/prm.md), and [**PRM( ) Function**](functions/prm.md).

For a complete list of system parameters, see **[System Parameters List](parameters%20list%20introduction.md)**.

##  Setting/Resetting Parameters

The **[SET_PARAM](directives/set_param.md)** directive and the PxPlus *UCP utility allow you to alter the current settings of system parameters. The specific method for setting/resetting each parameter is explained with each definition.

**_Examples:_**

> SET_PARAM 'AH' Switches Alternative Heading **_On  
> _** SET_PARAM -'AH' Switches Alternative Heading **_Off  
> _** SET_PARAM 'AH'=0 Switches Alternative Heading **_Off  
> _** SET_PARAM 'BY'=0 Sets the Base Year to Julian calendar base  
>  SET_PARAM 'BY'=1970 Sets Base Year to 1970

**_Off:_** Parameter shows a _negative sign_ or is set to equal _0_ _(zero)_.  
  
**_On:_** Parameter is _not negative_ or is set to equal a _specific value_.

##  Parameter Defaults

The [**PRM**](variables/prm.md) system variable can be used to return a string of the current system parameters and their values. (Some will be hidden from the **PRM** list unless they are actually set.)

**PRINT PRM** lists the following defaults in PxPlus for Windows 32-bit:

> PRINT PRM !   
> -'3D',-'AD',-'AH','AI'=10,-'B0','BF'=10,-'BT',-'BX','BY'=1970,-'CD','CS',  
>  'CT'=0,'CU'=36,-'D0',-'DC','DF'=0,'DL'=0,'DP'=46,'DT'=0,'DW'=0,-'EG','EL'=0,  
>  -'EO',-'ES',-'EX',-'F4','FB'=5,-'FC','FF'=0,-'FI','FO'=0,-'FU',-'FL','FP',  
>  'FS'=138,-'FT',-'FX',-'F,',-'I0',-'I2','IC',-'IM','IR','IS'=5,-'IZ',-'KR',  
>  'LB'=4,-'LC',-'LD',-'LE','LS'=1,-'LU',-'LZ','MB'=0,-'MC','MF'=50,-'MP','NE',  
>  -'NI',-'NK',-'NL',-'NN',-'NR',-'OC','OL'=25,'OM',-'OP','OR','OW'=0,'PC'=0,  
>  'PD'=2,-'PO',-'PU','PW'=36,-'PZ','QF'=1,'Q_'=2,'Q^'=2,-'QS',-'QT',-'RI',  
>  'RN'=1,'RP',-'RR',-'RS',-'SC',-'SD',-'SF',-'SK','SL'=32,-'SP',-'SR','SV'=1,  
>  'SZ'=32000,-'TB','TC'=0,'TH'=44,-'TL',-'TN',-'TT',-'TU',-'TX','VP'=48,'VR'=0,  
>  'VW'=0,'WB','WD'=10000,-'WF','WH'=0,'WI'=1000,-'WK','WT'=2,-'XC',-'XF',-'XI',  
>  -'XT',-'ZP',-'DD','!B'=3,'!U'=0,-'1U'

##  Saving/Restoring System Parameters

To avoid conflicts with other software components, it is **_strongly_** recommended that you save the current settings for parameters you need to change and then reset them when done.

#### **Note:**  
The **['BX'](parameters/bx.md)** parameter is the only exception to this recommendation since it affects a series of system parameters. **_Never_** attempt to save/change/restore **'BX'**. It should be set/reset only at the start of a session.

**_Example_**** _:_**

> 0010 sv_ex=prm('ex'); SET_PARAM -'EX'   
>  .....   
>  9900 SET_PARAM 'EX'=sv_ex
