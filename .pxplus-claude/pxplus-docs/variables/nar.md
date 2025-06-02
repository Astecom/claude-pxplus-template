# System Variables

**NAR** |  **_Number of Arguments, Start PxPlus_**  
---|---  
  
**_Numeric System Variable_**

##  Contents

Integer, number of arguments in PxPlus start_up

##  Description

The **NAR** variable contains a numeric value (integer) representing the number of arguments in the PxPlus command that launches PxPlus (e.g. in using a batch file or from a command statement).

##  See Also

**[ARG( ) Get/Process Arguments](../functions/arg.md)**  
**[DEF NAR Define Number of ARGs](../directives/def_nar.md)  
[Launching PxPlus](../PxPlus%20Installation%20and%20Configuration/Launching%20PxPlus/Overview.md)**

##  Example

pxplus -sz=20 -arg TOM JONES  
?nar  
2
