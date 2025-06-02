# System Functions

**RND( )** |  **_Return Random Number_**  
---|---  
  
##  Format

**RND(**_seed_[,**ERR=**_stmtref_]**)**  
  
**_Where:_**

_seed_ |  Numeric expression must be (or result in) an integer. The value of this number is used to determine the result of the function.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Random numbers based on given seed.

##  Description

The **RND( )** function returns random numbers based on the _seed_ given. The following table describes the value returned based on the seed value:

> 0 |  If _seed_ is **_greater than_** zero, the random number returned will range from 0 to one less than the given number.  
---|---  
= 0 |  If _seed**equals**_ zero, the random number returned is between 0 and 1 with PRECISION=8.  
< 0 |  If _seed_ is **_less than_** zero, the function initializes the seed value used to generate random numbers and returns a random number between 0 and 1 with PRECISION=8.  
  
Each call to the **RND( )** function will return a different random number. To change the seed value for the random number generation, you can either execute a **[RANDOMIZE](../directives/randomize.md)** directive or call **RND( )** with a negative value. If your value is not an integer, PxPlus returns Error #41: Invalid integer encountered (range error or non-integer).

##  See Also

[**RANDOMIZE Set Random Key**](../directives/randomize.md)  
[**RND Random Number Generator**](../variables/rnd.md)

##  Example

rem  
for I=1 to 10  
print rnd(9),  
next  
print 'LF',rnd(0)  
print rnd(-1)  
print " DONE";  
end  
  
->run  
1 1 7 0 7 7 4 4 5 7  
0.05947216  
0.11337858  
DONE
