# Object Controls

**ODC Server** |  **__**  
---|---  
  
The primary purpose of an ODC Server is to provide a means to re-host all or part of your application in another environment. When used, it allows the application designer to map existing graphical and other operating system related functions to your own objects, thereby giving the application developer the ability to handle his/her own presentation independent of platform.

The following syntax can be used to define an ODC Server to the system:

> **DEFCTL OBJECT SERVER** _objectid_

**_Where:_**

_objectid_ |  Handle of your ODC Server object  
---|---  
  
#### **Note:**  
The handle of the currently defined ODC Server can be found in TCB(510), which will be 0 if a non-ODC Server is present.

Whenever the system executes a control creation directive such as BUTTON or LIST_BOX, the ODC Server can create and define an ODC to service the request. In addition, the ODC Server can also intercept a wide variety of graphical related commands and functions to process these based on the target environment.

For each type of control created, the system will invoke the following methods within the ODC Server:

|  Button(_option$_) |  Chart(_option$_) |  Check_box(_option$_)  
---|---|---|---  
|  Drop_box(_option$_) |  Grid(_option$_) |  List_box(_option$_)  
|  List_view(_option$_) |  Multi_line(_option$_) |  Radio_button(_option$_)  
|  Tree_view(_option$_) |  Tristate_box(_option$_) |  VarDrop_box(_option$_)  
|  VarList_box(_option$_) |  |   
  
For each of these control types, the _option$_ value will contain the values for the various directive creation values.

**_Example:_**

The following example shows a typical Button create method Call:

> button 11,@(4,5,10,1.5)="Test",fnt="Arial"

This would invoke the 'Button( ) method in the ODC Server, passing it the _option$_ of:

> Ctlno=11,Col=4,Line=5,Cols=10,Lines=1.5,Text$="Test",Font$="Arial"

#### **Note:**  
The value contained in _option$_ is designed to be passed directly to an **[EXECUTE](../../directives/execute.md)** directive to simplify the loading of the values into object properties.

## Control Creation Values

This table contains the list of variables provided on a control creation command:

**Variable** |  **Contents Derived From**  
---|---  
_Altkey_ _$_ |  Contains the value specified in the KEY= option.  
_Col_ |  Contains the column number as defined in the @().  
_Cols_ |  Contains the width of the control.  
_Ctlno_ __ |  Contains the control number assigned to the control.  
_Delim_ _$_ |  Contains the SEP= character.  
_Font$_ |  Contains the FNT= specification.   
_Format$_ |  Contains the format specification from the FMT= option.  
_Help$_ |  Contains the HLP= specification. _(build 9201)_  
_Id_ |  Contains the Radio_Button ID (1 through 255).  
_Line_ |  Contains the line number as defined in the @().  
_Lines_ |  Contains the height of the control.  
_MaxLen_ __ |  Contains the maximum input length as given in the LEN= option.  
_MenuCtl_ __ |  Contains the right mouse click CTL value as given in the CTL= option.  
_Message$_ |  Contains the message bar text as given in the MSG= option.  
_NullText_ _$_ |  Contains the null value text for the Multi_Line as given in the NUL= option.  
_Options$_ |  Contains the options string as given in the OPT= option.  
_Text$_ |  Contains the text associated with the Button/Check box  
_Tip$_ |  Contains the floating tip associated with the control in the TIP= option.  
_Xlate_ _$_ |  Contains the translation table value as given in the TBL= option.  
  
## Non-Create Functions

In addition to the control creation functions, the system invokes the ODC Server on the following conditions:

**Condition** |  **Processing within ODC Server**  
---|---  
_Wait for INPUT_ |  If present, the method 'Input(_len_ _, echo, line, col_) will be called whenever the application request input.   
_MSE Variable_ |  If present, the method 'GetMse$( ) will be called to return the MSE variable value.   
_MSGBOX Directive_ |  If present, the method 'MsgBox(_params_) is passed the parameters from the MSGBOX directive.   
_POPUP_MENU Directive_ |  If present, the method 'Popup_Menu(_params_) is passed the parameters from the POPUP_MENU directive.   
_PREINPUT Directive_ |  If present, the method 'Pre_Input(_params_) is passed the parameters from the PREINPUT directive. _(build 9201) _  
_CLIP_BOARD Directive_ |  If present, the property 'Clip_Board will be used as a reference to an object to process the various Clip_Board related directives. Within the object, the methods 'Read and 'Write are called to process READ and WRITE functions.  
_MENU_BAR Directive_ |  If present, the property 'Menu_Bar will be used as a reference to an object to process the various Menu_Bar related directives.  
_DROP n ON n Directive_ |  If present, the property 'DragDrop will be used as a reference to an object to process the various Drag and Drop related directives.  
_GET_FILE_BOX Directive_ |  If present, the property 'GetFile will be used as a reference to an object to process the various Get_File_Box related directives.  
_Graphical, 'CS' and 'DO' Mnemonics_ |  If present, the property 'Mnemonics will be used as a reference to an object to process the various the graphic mnemonics. See **[Mnemonic Processing](e.md)**.  
  
## Foundation Classes

The _*plus/ctls_ directory contains the following foundation classes:

_addclip.pvc_ |  This sub-class can be used by your own application to add a CLIP_BOARD emulation class to your ODC server.  
---|---  
_adddragdrop.pvc_ |  This sub-class can be used by your own application to add a DRAG and DROP emulation class to your ODC server.  
_addgetfile.pvc_ |  This sub-class can be used by your own application to add a GET_FILE_BOX emulation class to your ODC server.  
_addmenu.pvc_ |  This sub-class can be used by your own application to add a MENU_BAR emulation class to your ODC server.  
_addmnem.pvc_ |  This sub-class can be used by your own application to add a MNEMONIC processing class to your ODC server.  
_clipboard.pvc_ |  This class supplies CLIP_BOARD directive emulation.  
_dragdrop.pvc_ |  This class defines the methods required to handle DRAG and DROP functionality. The actual class does little other than provide the required method prototypes.  
_getfile.pvc_ |  This class defines the methods required to emulate the GET_FILE_BOX directive. It effectively calls the UNIX Get File Box emulator subroutine.  
_input.pvc_ |  This class can be used within an ODC server to intercept all INPUT/OBTAIN requests on the system.  
_menubar.pvc_ |  This class defines the methods required to emulate the MENU_BAR directive. The actual class does little other than provide the required method prototypes.  
_mnemonics.pvc_ |  This class is used to handle all the Graphical mnemonics as routed to the ODC server. The actual class does little other than provide the required method prototypes.  
_mse.pvc_ |  This class defines the methods required to emulate access to the MSE system variable. The actual class simply returns a dummy MSE variable based on the current structured string definition.  
_msgbox.pvc_ |  This class defines the methods required to emulate the MSGBOX directive. It calls the text-based MSGBOX emulator subroutine.  
_popup.pv_ |  This class defines the methods required to emulate the POPUP_MENU directive. The actual class does little other than provide the required method prototypes.  
_server.pvc_ |  This class provides the foundation logic for an ODC server object. It includes common functionality needed to handle multiple windows.  
_window.pvc_ |  This sub-class provides the structure and window methods needed within an ODC server.  
  
#### **Note:**  
These foundation classes provide details regarding the methods and properties that are generally required by the system. Review their source coding for additional details on their usage.
