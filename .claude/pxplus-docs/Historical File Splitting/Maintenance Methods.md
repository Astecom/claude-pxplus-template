# Historical File Splitting

**Maintenance Methods**|   
---|---  
  
This table lists the maintenance methods used with the Historical File Splitting utility:

**Method** |  **Description**  
---|---  
**Open** _(pathname$)_ |  Opens file whose historical file split information is to be edited/defined.  
**AddSegment** _(pathname$_[_,condval$_]) |  Creates a new _active_ segment. This function automatically converts a non-split file into a split file when the first active segment is created. The file specified in _pathname$_ does not have to exist; the system will create it automatically. If the split file has a _conditional_ test field defined, you need to pass the condition values that will cause records to be added to this segment. If no conditional test field exists, it will set the segment that was currently active as updatable, the new segment as able to receive new records, and all other segments will be set as locked/read only.  
**GetSegmentCount( )** |  Returns the number of segments/files (0 if not split).  
**DropSegment** _(segment)_ |  Removes file/segment by Index. If removing the last segment, the file is reverted back to a non-splitting format.  
**LockSegment** _(segment)_ |  Sets the specified segment as locked (no updates allowed).  
**UnLockSegment** _(segment)_ |  Sets the specified segment as unlocked (updatable). Current/last added segment is always updatable and is where all new records will be placed.  
**isSegmentLocked** _(segment)_ |  Returns true (non-zero) if specified segment is locked. Returns false if it is not locked.  
**SetTestField** _(fieldDesc$)_ |  Defines the field to test when adding records. _fieldDesc_ _$_ may contain a simple field name or field name with offset/length in standard PxPlus format. **_Example:_** DateCreated$(1,4)  
**GetTestField$( )** |  Returns the field tested when adding records. Will return "" if not specified.  
**SetSegmentTest** _(segment,condVal$)_ |  Changes conditional field test value(s).  
**GetSegmentTest$**_(segment)_ |  Returns conditional field test value(s) for the given segment.  
**SetSegmentPath** _(segment,NewPath$)_ |  Changes/renames pathname.  
**GetSegmentPath$**_(segment)_ |  Returns pathname for the given segment.  
**GetSegmentTime$**_(segment)_ |  Return the date/time that the given segment was added. The format is YYYY-MM-DD hh:mm:ss.  
**GetKeySortSeq** _(keyno)_ |  Returns 1 if the specified key number is marked as _Ascending_ , -1 if marked as _Descending_ ; otherwise, returns 0 (zero) if not specified.  
**GetUniqueKey** _(keyno)_ |  Returns 1 if the specified key number is marked as being _Unique_ in the file description.  
**SetKeySortSeq** _(keyno,order)_ |  Sets the specified key as either _Ascending_ (_order_ =1), _Descending_ (_order_ =-1), or _Unspecified_ (_order_ =0).
