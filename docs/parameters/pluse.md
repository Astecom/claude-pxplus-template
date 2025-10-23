# System Parameters

**'+E'** |  **_Automatically Erase Related Segments_**  
---|---  
  
##  Description

The **'+E'** parameter tells the system to automatically delete all the related segments of a multi-segmented key file when the file is deleted and/or re-initialized.

This will also delete both the ".dat" and ".idx" files for C-ISAM files when they are deleted. This parameter performs the same logic as specifying OPT="ALLSEG" on a **REFILE** or **ERASE** directive.

_(The '+E' system parameter was added in PxPlus v6.30.)_

##  Default

**_On_**

_(Defaulted to OFF in PxPlus prior v7.00, build 9163)_

## See Also

**[REFILE Clear Record from File](../directives/refile.md)**  
**[ERASE Delete File/Directory from System](../directives/erase.md)**
