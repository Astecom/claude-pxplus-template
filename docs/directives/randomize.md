# Directives

**RANDOMIZE** |  **_Set Random Key_**  
---|---  
  
##  Format

**RANDOMIZE** _seed_  
  
** _Where_** _:_

_seed_ |  Numeric value or expression to be used as the seed by the random number generator.  
---|---  
  
##  Description

Use the **RANDOMIZE** directive to assign a seed to be used by the random number generator. PxPlus uses the given value to define the starting point for the random number generator (**RND** system variable). Use the **RANDOMIZE** directive to have PxPlus return a repeatable random sequence.

##  See Also

**[RND Random Number Generator](../variables/rnd.md)**  
**[RND( ) Return Random Number](../functions/rnd.md)**

##  Example

In the following example, PxPlus will **RANDOMIZE** 1 or create a repeatable random sequence using 1 as the seed. Then, for instance, each time the number 2 is encountered in the loop below, it will generate 0.59859266:

> for I=1 to 2  
>  randomize 1  
>  for J=1 to 5  
>  print rnd," ",  
>  next J  
>  print "END OF LOOP ",str(I)  
>  next I  
>   
>  ->run  
>  0.11337858 0.59859266 0.81950925 0.76559375 0.5199119 END OF LOOP 1  
>  0.11337858 0.59859266 0.81950925 0.76559375 0.5199119 END OF LOOP 2

In the following example, PxPlus will use a repeatable random sequence for indices; i.e. to create a repeatable number to use each time a particular index number is encountered:

> 0010 input "Enter random seed:",N  
>  0020 randomize N  
>  0030 open (31)"TESTFILE"  
>  0040 for I=1 to 1000  
>  0050 read (31,ind=int(rnd*100),err=0090)R$  
>  0060 print rnd," ",R$," ",  
>  0070 next I  
>  0080 print "DONE"; close (31); stop  
>  0090 
