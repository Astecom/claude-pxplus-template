# Directives

**CONTINUE** |  **_Initiates Next Iteration of Loop_**  
---|---  
  
##  Format

**CONTINUE**

##  Description

Use the **CONTINUE** directive to go immediately to the next iteration of a loop (or terminate the loop if it is the last iteration). The *CONTINUE label emulates a **CONTINUE** directive for use as a statement reference.

##  See Also

**[Labels/Logical Statement References](../appendix/labels~logical_statement_references.md)**

##  Example

for I=-1 to 3 step 1  
if I<=0 \  
then print " TESTING ",;  
continue  
print I,  
next  
  
->run  
TESTING TESTING 1 2 3-:  
  
for I=1 to 100  
if X$[I]<K$ \  
then continue  
print X$[I]  
next
