# System Variables

**PRM** |  **_PxPlus Parameter Settings_**  
---|---  
  
**_String System Variable_**

##  Contents

String, comma-delimited list of current system parameter settings

##  Description

The **PRM** variable contains a comma-delimited string listing the current settings of operating system parameters for PxPlus use. Some parameters only appear in the list when set, and some are operating system specific.

## See Also

**[System Parameters](../parameters.md)**

##  Example

print prm ! PxPlus _version_number_ Windows settings  
  
-'3D',-'AD',-'AH','AI'=10,-'B0','BF'=10,-'BT',-'BX','BY'=1970,-'CD','CS','CT'=0,  
'CU'=36,-'D0','DC','DF'=0,'DL'=0,'DP'=46,'DT'=0,'DW'=0,-'EG','EL'=0,-'EO',-'ES',  
-'EX',-'F4','FB'=5,-'FC','FF'=0,-'FI','FO'=0,-'FU',-'FL','FP','FS'=138,-'FT',-'F X',-'F,',-'I0',-'I2','IC',-'IM','IR','IS'=5,-'IZ',-'KR','LB'=4,-'LC',-'LD',-'LE'  
,'LS'=1,-'LU',-'LZ','MB'=0,'MF'=50,-'MP','NE',-'NI',-'NK',-'NL',-'NN',-'NR',-'OC  
','OL'=25,'OM',-'OP','OR','OW'=0,'PC'=10,'PD'=2,-'PO',-'PU','PW'=36,-'PZ','QF'=1  
,'Q_'=2,'Q^'=2,-'QS',-'QT',-'RI','RN'=1,'RP',-'RR',-'RS',-'SC',-'SD',-'SF',-'SK'  
,'SL'=32,-'SP',-'SR','SV'=1,'SZ'=32000,-'TB','TC'=0,'TH'=44,-'TL',-'TN',-'TT',-' TU',-'TX','VP'=48,'VR'=0,'VW'=0,'WB','WD'=10000,-'WF','WH'=0,'  
'=2,-'XC',-'XF',-'XI',-'XT',-'ZP',-'DD','!B'=3,'!U'=0,-'1U'

You can have the **PRM( )** function return a specific parameter's current setting (or the Boolean value, 1=ON / 0=OFF, for a switch), even when it is hidden from the **PRM** listing:

> ?prm('!i') ! hidden unless ON  
>  0
