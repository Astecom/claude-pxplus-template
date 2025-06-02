# Control Object Properties

**AutoTrack** |  **_Control Scrollbar Tracking_**  
---|---  
  
## Description

Controls the automatic tracking of the contents of a grid relative to movement of the scrollbars (vertical/horizontal)

By default, when a scrollbar position is changed by dragging the "thumb", the grid will **_not_** follow the movement until the thumb is released. This reduces the screen re-draw overhead within the system but does not allow the user to view the data during the scroll operation.

The 'AutoTrack property can be used to control whether the grid is to be updated while the thumb is being moved -- in effect, having the grid contents track the thumb position. The value in 'AutoTrack determines which, if any, scrollbars will be tracked.

Possible values are:

0 |  The grid will not track thumb movements.  
---|---  
1 |  The grid will track thumb movements on the vertical scrollbar.  
2 |  The grid will track thumb movements on the horizontal scrollbar.  
3 |  The grid will track thumb movements on both scrollbars.  
  
## Default 

0 - No automatic tracking

## Used By 

**GRID**
