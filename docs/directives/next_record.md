# Directives

**NEXT RECORD** |  **_End SELECT Statement_**  
---|---  
  
##  Format

**NEXT RECORD**

##  Description

Use the **NEXT RECORD** directive to end a **SELECT** directive. As each record is read, PxPlus processes any logic you include following the **SELECT** directive up to the **NEXT RECORD**. When PxPlus encounters a **NEXT RECORD** statement with no records found for a nested **SELECT** , it will locate the corresponding **SELECT** statement.

##  See Also

**[SELECT Select/Query From ... Where](select.md)**

##  Example

0010 select iol=0100 from "CUST_FILE",kno=1 begin "ABC CO" end "NEW CO" where CITY$="CLARENDON"  
0020 print rec(iol=0100)  
0030 next record  
0100 iolist CUST$,NAME$,ADDR1$,ADDR2$,CITY$,PROV$,POSTAL$,INV_DT$,AMT,TERMS,DUE_DT$  
0110 print "DONE";end  
  
->run  
123460  
ACME LTD.  
SUITE 1900  
2000 1ST ST.  
CLARENDON  
ON  
K0K0K0  
0
