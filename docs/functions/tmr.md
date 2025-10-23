# System Functions

**TMR( )** |  **_Timer_**  
---|---  
  
##  Format

**TMR(**_tmr_code_[,**ERR=**_stmtref_]**)**

**_Where:_**

_tmr_code_ |  Value indicating what type of information to be returned. Numeric expression, integer range 0 to 3.  
---|---  
_stmtref_ |  Program line number or statement label to which to transfer control.  
  
##  Returns

Number of seconds (or hours if _tmr_code_ is 2) since last timer setting or start of session.

##  Description

The **TMR( )** function can initialize the timer (to 0) and return the time difference in seconds or hours since the last initialization. The **TMR( )** function is used as follows:

|  **TMR(0)** |  Returns the difference in seconds since the last **TMR(0)** and **_resets_** the timer to 0.  
---|---|---  
|  **TMR(1)** |  Returns the difference in seconds since the last timer reset or start of session.  
|  **TMR(2)** |  Returns the difference in hours since the last timer reset or start of session.  
|  **TMR(3)** |  Returns the time in seconds since start of the session.  
  
#### **Note:**  
**_Prior to PxPlus v7.00, build 9163_** , the value returned by the **TMR** function was limited to one day.  
  
**_As of PxPlus v7.00, build 9163_** , the maximum value returned will be 24 days.

_(The TMR(3) functionality was added in PxPlus v7.00.)_

##  Example

print 'CS'  
a=tmr(0)  
button 10,@(1,1,20,2)="TMR System Function"  
while 1  
obtain x  
if ctl=10 \  
then gosub ShowTime  
if ctl=4 \  
then break  
wend  
end  
ShowTime:  
print @(1,20),"Number of seconds since last occurrence of TMR(0):",tmr(1)  
print @(1,21),"Number of hours since last occurrence of TMR(0):",tmr(2)  
a=tmr(0)  
return
