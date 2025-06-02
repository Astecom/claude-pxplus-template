# Directives

**DISABLE CONTROL** |  **_Disable Control_**  
---|---  
  
##  Formats

1. |  _Disable Single Control_ : |  **DISABLE CONTROL** _ctl_id1[_ :_sub_id_][,_ctl_id2_[:_sub_id_]...][,**ERR=**_stmtref_]  
---|---|---  
2. |  _Disable Multiple Controls_ : |  **DISABLE CONTROL** _bin_list_ _$_[,**ERR=**_stmtref_]  
  
**_Where:_**

_bin_list_ _$_ |  One or more three**-** byte binary strings identifying controls: BIN(control_ID,2)+$00$ for most controls or BIN(control_ID,2)+bin(sub_id,1) for radio buttons.  
---|---  
_ctl_id_ |  Value of the control(s) to disable. Numeric expression, integer. If you include a list, use the comma as the separator.  
_stmtref_ |  Program line number or statement label to which to transfer control.  
_sub_id_ |  Unique radio button ID. Numeric expression (range 1 to 254).  
  
##  Description

Use the **DISABLE CONTROL** directive to notify PxPlus that you want the specified control (button, check box, radio button, etc.) disabled. The _bin_list_ _$_ expression will support up to 30 controls (90 characters).

To re**-** enable the control, use the **ENABLE CONTROL** directive.

##  See Also

**[ENABLE CONTROL](enable_control.md)**

##  Example

00010 print 'CS'  
00020 button 10,@(1,1,20,2)="Show Message"  
00030 obtain x  
00040 if ctl=10 then msgbox "Hello World","Button Message"  
00050 if ctl=4 then stop  
00060 if ctl=1 then enable control 10; print @(24,1),"Enabled"  
00070 if ctl=2 then disable control 10; print @(24,1),"Disabled"  
00080 goto 0030
