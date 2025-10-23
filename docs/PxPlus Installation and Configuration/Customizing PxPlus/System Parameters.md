# Customizing PxPlus

**System Parameters** |  **__**  
---|---  
  
System parameters can be used at start-up to define system operations under PxPlus, including system settings, default operating modes, and environmental emulation modes. Each parameter consists of a two-character code enclosed in single quotes. Some are Boolean switches (0 or negative sign to indicate _Off_ , 1 or "no sign" to indicate _On_), and some require specific values in order to be set.

System parameters are usually set once at the beginning of an application; e.g. in a lead program following the START_UP procedure. They can also be specified directly on the PxPlus Command line; in which case, they do not require single quotes and must be prefixed with a dash or slash. See **[Launching PxPlus](../Launching%20PxPlus/Overview.md)**.

Use the **[SET_PARAM](../../directives/set_param.md)** directive to set/reset parameters within your PxPlus applications. The *UCP utility can also be used to display and change parameters in the system.

Use the **[PRM](../../variables/prm.md)** system variable to return a string of all current system parameters.

Use the **[PRM( )](../../functions/prm.md)** function to return the settings for specific parameters.

**_Example:_**

> PRINT PRM   
>  -'3D',-'AD',-'AH','AI'=10,-'B0','BF'=10,-'BT',-'BX','BY'=1970,-'CD','CS',   
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
>  PRINT PRM('LC')   
>  0 

## See Also

**[System Parameters](../../parameters.md)**
