# Troubleshooting

**Permission Issues** |  **__**  
---|---  
  
It is important that the files and directories installed with PxPlus have the correct permissions for the users and groups that require access. Incorrect permissions can result in a system's root/administrator user being the only one able to launch PxPlus. Attempts by other users to launch PxPlus will result in an activation error. See **[Activation Issues](Activation%20Issues.md)**.

## Incorrect Permissions in Windows

The activation message below will be reported when there are incorrect permissions on directories that lead to the activation file. PxPlus will not run if it does not have direct access to the activation file.

> This usually occurs when PxPlus is installed for a specific user only, which ultimately disables Write permissions for anyone who is not the owner of the file. You can prevent this from happening by setting correct permissions during installation. Select _Anyone_ _who uses this computer (all users)_ to ensure that anyone who logs on to the computer will also be able to access PxPlus.

> To resolve this issue after the software has been installed, use Windows Explorer to modify the properties of the path to where PxPlus is installed:

> ## Incorrect Permissions in UNIX/Linux

The activation message below will be reported when there are incorrect permissions on directories that lead to the activation file. PxPlus will not run if it does not have direct access to the activation file:

> _Cannot open ACTIVATION key file  
>  NO VALID ACTIVATION FOUND!!_

This problem is usually caused by the default **umask** setting of the user who installed PxPlus (normally root). Most UNIX/Linux machines assign a default **umask** value of 0022 for the root user, which ultimately disables the Write permissions for all but the owner of the file. This problem can be prevented by installing PxPlus **_after_** the user changes their **umask** to a value of 0:

> umask 0

To resolve the issue after the software has been installed, use the UNIX **chmod** command to add Write permission to the activation file:

> chmoda+w /pvx/lib/activate.pvx
