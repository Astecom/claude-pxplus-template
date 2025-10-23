# Library Functions - Appendix References  
  
**Appendix H** |  **__**  
---|---  
  
The information below outlines the definition of the KEYDEF structure, which is used as an argument to the **[PxIOAddIndex](../Miscellaneous%20File%20Functions/PxIOAddIndex.md)** function. If you are going to call the **[PxIOAddIndex](../Miscellaneous%20File%20Functions/PxIOAddIndex.md)** function, you must define a variable of this type and use it to define the key you want to add to the file.

struct KEYDEF

{ char *pKeyName; /* Key name */

int lenKeyName; /* size of key name */

int nSeg; /* number of segments in this key */

struct

{ int fld; /* field number of segment */

int ofs; /* offset to segment */

int len; /* length of segment */

int opt; /* segment options */

int knul; /* null byte */

} Seg[32]; /* List of segment definitions */

};
