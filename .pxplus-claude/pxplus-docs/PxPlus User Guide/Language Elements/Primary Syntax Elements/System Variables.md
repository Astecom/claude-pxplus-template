# Primary Syntax Elements  
  
**System Variables** |  **__**  
---|---  
  
System variables are internally defined numeric and string variables for providing system information, such as the date and time. All system variables have reserved three-character names.

#### **Note:**  
To avoid potential conflicts with the reserved list, it is strongly recommended that you **_do not_** use three-character names when defining your own program variables.

Below is a list of some system variables that can be used wherever program variables are used (but they cannot be assigned a value). For a list of all system variables, see **[System Variables](../../../variables.md)**.

**[CTL](../../../variables/ctl.md)** |  Code indicating how input was terminated.  
---|---  
**[DAY](../../../variables/day.md)** |  System date in MM/DD/YY format (unless reset via**DAY_FORMAT**).  
**[DLM](../../../variables/dlm.md)** |  Operating system path delimiter.  
**[EOM](../../../variables/eom.md)** |  Character string that terminated last input.  
**[ERR](../../../variables/err.md)** |  Value of the last error detected by the system.  
**[HFN](../../../variables/hfn.md)** |  Highest unused local file number (see **[UNT](../../../variables/unt.md)**).  
**[LFA](../../../variables/lfa.md)** |  Number of the last file accessed.  
**[LWD](../../../variables/lwd.md)** |  Current working directory.  
**[MSE](../../../variables/mse.md)** |  Current state (details) of the mouse.  
**[PGN](../../../variables/pgn.md)** |  Current program pathname.  
**[PRM](../../../variables/prm.md)** |  Current parameter settings for PxPlus.  
**[QUO](../../../variables/quo.md)** |  ASCII quote character **"**.  
**[SEP](../../../variables/sep.md)** |  PxPlus record field separator.  
**[SSN](../../../variables/ssn.md)** |  System software identifier.  
**[TIM](../../../variables/tim.md)** |  Current system time in hours past midnight (see **[TMS](../../../variables/tms.md)**).  
**[WHO](../../../variables/who.md)** |  Current User ID (see **[UID](../../../variables/uid.md)**).  
  
## Examples

The **[PRINT](../../../directives/print.md)** directive (or **?** shortcut) and system variables can be used to display current system information:

> ? lwd  
>  C:\PVX Plus Technologies\ PxPlus _version_number_  
>   
>  ? tim  
>  11.055314  
>   
>  ? prm  
>  -'3D',-'AD',-'AH','AI'=10,-'AP',-'AW',-'B0','BF'=10,'BL'=0,-'BT',-'BX','BY'=1970,  
>  -'CD','CH'=12,'CI','CO'=4,'CS','CT'=0,'CU'=36,-'D0','DB'=31,-'DC','DF'=0,'DL'=0,  
>  'DP'=46,'DT'=0,'DW'=0,-'EG','EL'=1,-'EO',-'ES',-'EX',-'F4','FB'=5,-'FC','FF'=0,  
>  -'FI','FO'=0,-'FU',-'FL','FP','FS'=138,-'FT',-'FX',-'F,',-'I0',-'I2','IC',-'IM',  
>  'IR','IS'=5,'IW',-'IZ','KF'=0,-'KR','LB'=4,-'LC',-'LD',-'LE',-'LM','LS'=1,-'LU',  
>  -'LW',-'LZ','MB'=0,-'MC','MF'=50,-'MP',-'MX',-'NE',-'NI',-'NK',-'NL',-'NN',-'NR',  
>  -'OC','OL'=25,'OM',-'OP','OR','OW'=0,'PC'=0,'PD'=2,-'PE','PL'=10,-'PO','PP','PQ'=100,  
>  -'PU','PW'=36,-'PZ','QD'=4,'QF'=1,'Q_'=2,'Q^'=2,'QK',-'QS',-'QT',-'RI','RN'=1,  
>  'RP',-'RR',-'RS',-'SC',-'SD',-'SF',-'SK','SL'=32,-'SP',-'SR',-'SS','SV'=1,  
>  'SW'=1,'SZ'=32000,'TA'=0,-'TB','TC'=0,'TH'=44,-'TL',-'TN',-'TT',-'TU',-'TX','UL',-  
>  'VC','VP'=48,'VR'=0,'VW'=0,'WB','WD'=100,-'WF','WH'=0,'WI'=1000,-'WK','WT'=2,'WZ'=512,  
>  -'XC',-'XF',-'XI',-'XT',-'ZP',-'DD','!B'=3,'!P'=0,'!U'=0,-'1U'  
>   
>  ? ssn  
>  0829-001-0012345  
>   
>  ? who  
> akhodge

The **[QUO](../../../variables/quo.md)** variable can be used to include quotes within a string:

> print "These are "+quo+"QUOTES"+quo  
>  These are "QUOTES"

Applying **[DLM](../../../variables/dlm.md)** and **[QUO](../../../variables/quo.md)** to a pathname:

> save "C:"+dlm+quo+PVXTRAIN$+quo+dlm+"TEST"

Using the **[DAY](../../../variables/day.md)** variable to get system date and the **[DAY_FORMAT](../../../directives/day_format.md)** directive to change the display:

> ? day  
>  11/20/08  
> day_format "YYYY/MM/DD"  
>  ? day  
>  2008/11/20

Using **[HFN](../../../variables/hfn.md)** to open a file to the highest available channel:

> MY_FN=hfn  
>  open (MY_FN)"."

Code sample using **[ERR](../../../variables/err.md)** to retrieve the number of the last error:

> MY_FN=hfn  
>  open (MY_FN,err=OOPS)"my_file";  
>  goto DONE  
>  OOPS: \  
>  print "YOU MADE BOOBOO NUMBER "+str(err)  
>  DONE: \  
>  end

Displaying the default separator **[SEP](../../../variables/sep.md)**:

> print sep ! PVX executes the separator (carriage return & line feed)  
>  print hta(sep) ! HTA( ) function converts unprintable hex to ASCII  
>  print "hello "+sep+"world"

Retrieving the screen and mouse-position information using the **[MSE](../../../variables/mse.md)** variable:

> CUR_STAT$=mid(mse,1,1) ! MID string function gives substring  
>  print hta(CUR_STAT$)

System variables are generally read only; however, certain ones (e.g. **[CTL](../../../variables/ctl.md)**, **[ERR](../../../variables/err.md)**, **[LFO](../../../variables/lfo.md)**, **[LFA](../../../variables/lfa.md)**, **[EOM](../../../variables/eom.md)**) can have their contents modified via **DEF _sysvar=_** syntax:

> print err  
>  0  
> def err=12  
>  print err  
>  12
