# Directives

**WRITE WINDOW DATA** |  **_Send Data to Another Session_**  
---|---  
  
## Format

**WRITE WINDOW DATA** _strexpr_ _$_**TO** _windowHandle_ __**WITH CTL** _ctlValue_ __**[** , **ERR=**_stmtref_ __**]**

**_Where:_**

_strexpr_ _$_ |  String expression that contains the data to be sent to the receiving window.  
---|---  
_windowHandle_ |  Internal Windows handle to which you want to send the data.  
_ctlValue_ |  CTL value that will be placed into the input queue of the receiving PxPlus program. If the target window is **_not_** a PxPlus program, this value will be placed in the dwData portion of the COPYDATASTRUCT passed.  
_stmtref_ |  Identifies the statement to which control will be transferred in case of an error.  
  
## Description

#### **Note:**  
**WRITE WINDOW DATA** is a **_Windows-only directive_** and can only be used on a Windows version of PxPlus.

This directive will send the data provided to the windows specified, and if the receiving program is a PxPlus program, place the CTL value specified into the input queue. Internally, this directive uses the WM_COPYDATA message to send a COPYDATASTRUCT to the receiving program.

Every **WRITE** ** _must_** be offset by a **READ** to avoid getting the data out-of-sync. See **[Example](writewindowdata.htm#Mark1)**.

_(The WRITE WINDOW DATA directive was added in PxPlus 2016.)_

## See Also

**[READ WINDOW DATA Receive Data from Another Session](readwindowdata.md)**

##  Example

The **WRITE WINDOW DATA** directive is designed to send information to an application on the same Windows machine. The receiving application should wait at an **[INPUT](input.md)** (or **[OBTAIN](obtain.md)**) directive pending the receipt of the CTL value sent via the **WRITE WINDOW DATA** directive. When the CTL is received, the receiving program should issue a **[READ WINDOW DATA](readwindowdata.md)** directive to get the data being sent.

**_Example:_**

Below is a sample _"Sending"_ program:

> 0010 let a=dll("User32","FindWindowA",0,"Target App"+$00$)  
>  0020 if a=0 then print "Cannot find window"; stop  
>  0030 select record R$ from "DataFile"  
>  0040 write window data R$ to a with ctl 1234  
>  0050 next record  
>  0060 write window data "" to a with ctl 9999 ! Send EOF signal

This sending program uses the Windows FindWindow DLL call to locate a window on the system whose caption line is "Target App", then sends the contents of the file "DataFile" to that process. Each line is sent with a CTL value of 1234, and a final EOF signal is sent with a CTL of 9999.

Below is a sample _"Receiving"_ program:

> 0010 print 'caption'("Target App")  
>  0020 while 1  
>  0030 input *  
>  0040 if ctl=1234 then read window data x$ from a; print x$  
>  0050 if ctl=9999 then read window data x$ from a; print "*EOF*"; break  
>  0060 wend

This receiving program will wait at the **[INPUT](input.md)** directive on line 30 for the receipt of a CTL event. When the CTL event of 1234 is received (this being the CTL value used in the **WRITE WINDOW DATA** directive), it will then issue the **[READ WINDOW DATA](readwindowdata.md)** directive to obtain the data sent and display it. If the CTL received was 9999, then the program will exit the loop.

#### **Note:**  
It is important to **_always_** issue a **[READ WINDOW DATA](readwindowdata.md)** whenever receiving a CTL event sent from another application using a **WRITE WINDOW DATA** directive. Failure to do so can cause the INPUT queue to get out-of-sync with the queued data.
