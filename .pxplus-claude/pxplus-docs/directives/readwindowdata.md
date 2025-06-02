# Directives

**READ WINDOW DATA** |  **_Receive Data from Another Session_**  
---|---  
  
## Format

**READ WINDOW DATA** _strvar_ _$_**FROM** _windowHandle_ __**[ ,ERR=**_stmtref_ __**]**

**_Where:_**

_strvar_ _$_ |  Name of a string variable to receive the incoming data.  
---|---  
_windowHandle_ |  Name of a numeric variable to receive the sending window's handle.  
_stmtref_ |  Identifies the statement to which control will be transferred in case of an error.  
  
## Description

#### **Note:**  
This is a **_Windows-only_** directive and can only be used on a Windows version of PxPlus.

The **READ WINDOW DATA** directive will receive the data sent to it from another process. Generally, this is executed in response to a CTL being received, indicating that the data is available. An Error #2: End-of-File will be generated if no data is available. When data is returned, this directive will also set CTL to the original value provided by the sender's WRITE command, thereby assuring synchronization of the data and the CTL value.

#### **Important Note:**  
Every **WRITE** ** _must_** be offset by a **READ** to avoid getting the data out-of-sync. See **[Example](readwindowdata.htm#Mark1)**.

_(The READ WINDOW DATA directive was added in PxPlus 2016.)_

## See Also

**[WRITE WINDOW DATA Send Data to Another Session](writewindowdata.md)**

##  Example

The **[WRITE WINDOW DATA](writewindowdata.md)** directive is designed to send information to an application on the same Windows machine. The receiving application should wait at an **[INPUT](input.md)** (or **[OBTAIN](obtain.md)**) directive pending the receipt of the CTL value sent via the **WRITE WINDOW DATA** directive. When the CTL is received, the receiving program should issue a **READ WINDOW DATA** directive to get the data being sent.

Below is a sample _"Sending"_ program:

> 0010 let a=dll("User32","FindWindowA",0,"Target App"+$00$)  
>  0020 if a=0 then print "Cannot find window"; stop  
>  0030 select record R$ from "DataFile"  
>  0040 write window data R$ to a with ctl 1234  
>  0050 next record  
>  0060 write window data "" to a with ctl 9999 ! Send EOF signal

This sending program uses the Windows FindWindow DLL call to locate a window on the system whose caption line is "Target App" and then sends the contents of the file "DataFile" to that process. Each line is sent with a CTL value of 1234, and a final EOF signal is sent with a CTL of 9999.

Below is a sample _"Receiving"_ program:

> 0010 print 'caption'("Target App")  
>  0020 while 1  
>  0030 input *  
>  0040 if ctl=1234 then read window data x$ from a; print x$  
>  0050 if ctl=9999 then read window data x$ from a; print "*EOF*"; break  
>  0060 wend

This receiving program will wait at the **[INPUT](input.md)** directive on line 30 for the receipt of a CTL event. When the CTL event of 1234 is received (this being the CTL value used in the **WRITE WINDOW DATA** directive), it will then issue the **READ WINDOW DATA** directive to obtain the data sent and display it. If the CTL received was 9999, then the program will exit the loop.

#### **Note:**  
It is important to **_always_** issue a **READ WINDOW DATA** whenever receiving a CTL event sent from another application using a **WRITE WINDOW DATA** directive. Failure to do so can cause the INPUT queue to get out-of-sync with the queued data.
