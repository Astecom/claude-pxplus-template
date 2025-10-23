# System Parameters

**'MB'=** |  **_MegaBytes_ _: File Segment Size_**  
---|---  
  
##  Description

Controls segment size in multi-segmented files. **'MB'** must be set to a value to activate the multi-segmented file feature.

PxPlus uses the value set in the **'MB'** parameter as a target size for each segment. If, for example, you wanted all files to be around 1 GB, you would set the **'MB'** parameter to 1024 representing 1024 megabytes or 1 GB.

The actual size of each segment will be determined based on the block size of the file. Internally files are partitioned into logical 'units' where each unit represents a portion of the file whose free space is managed by a single block (an inventory block). The Unit size can be computed as follows:

> Unit size = ((_bksz_ \- 6) * _bksz_) 

The value _bksz_ above represents the block size of the file -- normally between 1 and 8 kilobytes. You can use the **BSZ=** option when you create the file to override the default block size for a file.

As a unit is filled, the system will check to see if the file exceeds the **'MB'** setting. If so, the next unit of the file will be placed in a new segment.

The following table lists the maximum number of segments allowed for a file based on valid block sizes (1 to 31 kilobytes):

**Block Size** |  **Unit Size** |  **Segments** |  **Block Size** |  **Unit Size** |  **Segments** |  **Block Size** |  **Unit Size** |  **Segments**  
---|---|---|---|---|---|---|---|---  
31 _K_ |  961MB |  **124** |  30 _K_ |  901MB |  **120** |  29 _K_ |  841MB |  **116**  
28 _K_ |  784MB |  **112** |  27 _K_ |  730MB |  **108** |  26 _K_ |  676MB |  **104**  
25 _K_ |  625MB |  **100** |  24 _K_ |  577MB |  **96** |  23 _K_ |  529MB |  **92**  
22 _K_ |  484MB |  **88** |  21 _K_ |  442MB |  **84** |  20 _K_ |  400MB |  **80**  
19 _K_ |  361MB |  **76** |  18 _K_ |  325MB |  **72** |  17 _K_ |  289 _MB_ |  **68**  
16 _K_ |  256MB |  **64** |  15 _K_ |  226MB |  **60** |  14 _K_ |  196 _MB_ |  **56**  
13 _K_ |  169MB |  **52** |  12 _K_ |  144MB |  **48** |  11 _K_ |  121MB |  **44**  
10 _K_ |  100MB |  **40** |  9 _K_ |  81 _MB_ |  **36** |  8 _K_ |  64MB |  **32**  
7 _K_ |  49MB |  **28** |  6 _K_ |  36MB |  **24** |  5 _K_ |  25MB |  **20**  
4 _K_ |  16MB |  **16** |  3 _K_ |  9MB |  **12** |  2 _K_ |  4MB |  **8**  
1 _K_ |  1MB |  **4**| | | | | |   
  
****

#### **Note:**  
This feature is available for variable length records (VLR) format **_only_**.

##  Default

**'MB'=0**

## See Also

**[EFF vs. VLR File Formats](../PxPlus%20User%20Guide/File%20Handling/Data%20Files/EFF%20vs%20VLR%20File%20Formats.md)**
