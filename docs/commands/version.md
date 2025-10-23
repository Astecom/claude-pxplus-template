# Extended Commands

**VER Console Command** |  **_Version Information_**  
---|---  
  
## Format

The following commands can be used to change version information for the current program (or other programs):

**VER *** (_or_ **VER LIST**) |  Displays all versions on the current program.  
---|---  
**VER CLEAN** |  Removes all interim versions (other than the current version) from program file(s).  
**VER DROP**  _vn.nn.nnnn_ |  Drops a specific version from a program file.  
**VER GOTO**  _vn.nn.nnnn_ |  Restores program file to the specified version. All versions whose version number is greater than the version specified will be removed.  
**VER SET**  _vn.nn.nnnn_ |  Changes the version number for the current version of a program on the file to the number specified.  
**VER SINGLE** |  Removes all versions except the most recent from program file(s).  
**VER UPD**  _vn.nn.nnnn_ (_or_ **UPDATE**) |  Changes the version number for the current version of a program on the file to the number specified but only if the current version on the file is an interim version. This is designed to allow the developer to update the version number for only those programs that have changed since a prior release.  
  
All of the above commands (except **VER */LIST**) can include **FOR**  _program/directory_ on the end of the command. If a _program name_ is specified, the command will execute against that program file. If a _directory_ is specified, the command will execute against all programs in that directory.

## Description

The **VER** command is available from Command mode and can be used to view and change the versions information on the current program or a series of programs.

**_Typical Uses of the VER Command_**

To **_prepare a release_** , copy programs to an _output_ directory, then issue:

> VER CLEAN FOR dir   
>  VER UPDATE vn.nn ! Sets all programs to that version

To **_recall a release_** , copy programs to a _temp_ directory, then issue:

> VER GOTO vn.nn   
>   
>  (e.g. VER GOTO v1.23 would restore all programs to 1.23 version)
