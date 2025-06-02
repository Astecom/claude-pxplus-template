# Automation in PxPlus - Appendix

**OCX Controls** |  **__**  
---|---  
  
The DLL container control exposes all the "ambient" properties that are required by OCX controls. These include _foreground/background_ color, _message reflection_ , _user mode,_ etc.

User mode is the only ambient property that is directly available to the PxPlus programmer; the rest are handled by the DLL. User mode is special in that it tells the OCX control if it should act as a design-time control or as a run-time control. 

**_Example:_**  
  
Control **_A_** displays designer toolbars when _UserMode_ = _false_ but hides these when _UserMode_ = _true_. In PxPlus, this property is accessed via the **'PVXMODE** property. Setting **PVXMODE** = 0 sets _UserMode_ to _false_ (design-time). Any non-zero value will set _UserMode_ to _true_ (run time).

The DLL also supports OCX control property sheet activation by way of the F2 key. To display an OCX controls property sheet (if it has one), set focus to the control and press F2.
