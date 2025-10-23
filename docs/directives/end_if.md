# Directives 

**END_IF** |  **_End IF Directive_**  
---|---  
  
##  Format

_Mark the end of an_**'IF'**_prior end of line:_ |  **IF**  _expression_**THEN** ... **ELSE** ... **END_IF** ...  
---|---  
  
**_Where:_**

_expression_ |  Condition to control processing.  
---|---  
... |  Directives, processing.  
  
#### **Note:**  
**FI** is an accepted substitute for **END_IF**.

##  Description

Use **END_IF**(or __**FI**) to terminate an **IF** directive before the end of a statement or line. When an **END_IF** directive follows an **IF** directive, execution resumes immediately after the **END_IF** directive, regardless of whether the condition was found to be _true_ or _false_.

##  See Also

[**IF ... THEN ... ELSE Test Condition**](if.md)

##  Example

00100 print "The customer has ",  
00200 if bal<=0 \   
then print "NO", \  
else print "$",bal, \  
end_if ;  
print " credit available"  
  
->BAL=0  
->run  
The customer has NO credit available  
  
->BAL=1.98  
->run  
The customer has $ 1.98 credit available
