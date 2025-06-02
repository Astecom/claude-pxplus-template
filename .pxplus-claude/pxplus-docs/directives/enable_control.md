# Directives

**ENABLE CONTROL** |  **_Enable Control_**  
---|---  
  
##  Formats

1. |  _Enable Single Control_ : |  **ENABLE CONTROL** _ctl_id1_[:_sub_id_][,_ctl_id2_[:_sub_id_]...][,**ERR=**_stmtref_]  
---|---|---  
2. |  _Enable Multiple Controls_ : |  **ENABLE CONTROL** _bin_list_ _$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_bin_list_ _$_ |  One or more three**-** byte binary strings identifying controls: BIN(control_ID,2)+$00$ for most controls or BIN(control_ID,2)+bin(sub_id,1) for radio buttons.  
---|---  
_ctl_id_ |  Value of the control(s) to enable. Numeric expression, integer. If you include a list, use the comma as the separator.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_sub_id_ |  Unique radio button ID. Numeric expression (range 1 to 254).  
  
##  Description

Use the **ENABLE CONTROL** directive to notify PxPlus to reactivate the specified control (button, check box, etc.). To disable the control, use the **DISABLE CONTROL** directive.

##  See Also

**[DISABLE CONTROL](disable_control.md)**

##  Example

00010 print 'CS'  
00020 button 10,@(1,1,20,2)="Show Message"  
00030 obtain x  
00040 if ctl=10 then msgbox "Hello World","Button Message"  
00050 if ctl=4 then stop  
00060 if ctl=1 then enable control 10; print @(24,1),"Enabled"  
00070 if ctl=2 then disable control 10; print @(24,1),"Disabled"  
00080 goto 0030
