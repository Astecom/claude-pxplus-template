# System Parameters

**'TP'** |  **_Include Program Names in Trace Output_**  
---|---  
  
##  Description

The **'TP'** parameter is used to control the output of the current program name, processing level, and object handle to the trace file and console when processing an ESCAPE directive. This parameter can be used to improve the readability of a trace file by including the current program name whenever it changes.

When this parameter is enabled, the trace file will include the following line whenever the current program, level, or object ID changes:

> **< << path name of program, Level nnn Objid nnn >>>**

When the **'TP'** parameter is set to **_On_** , the output will be generated. Setting this parameter to **_Off_** will suppress this new information, providing backward compatibility.

**_Program Name on Error/ESCAPE_**

The **'TP'** parameter, in addition to the inclusion of the program name in the trace output, will cause the system to output the program name and object ID whenever a program drops to console mode due to an untrapped error or ESCAPE.

Enabling this parameter can assist in program problem support, as it will allow end-users to easily provide this additional information to support staff.

_(The 'TP' system parameter was added in PxPlus v10.00.)_

##  Default

**_Off_**
