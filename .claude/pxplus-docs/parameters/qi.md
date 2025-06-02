# System Parameters

**'QI'** |  **_Quit on User Input_**  
---|---  
  
##  Description

The **'QI'** parameter is used to force the termination of a session should the application ever attempt to request user input from channel 0. This parameter can be set in jobs that are effectively background processes where the application wants to be sure the process terminates should some event cause the application to request input from the user.

A typical use for this parameter would be in iNomads where the application might attempt to incorrectly request input from the user keyboard but be running as a service or other background process.

_(The 'QI' system parameter was added in PxPlus v10.20 (v10FP2).)_

##  Default

**_Off_** \- Will allow user input
