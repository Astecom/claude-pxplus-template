# Mnemonics 

**'BEEP'** |  **_Simple Sound Effect_**  
---|---  
  
**Behaviour**

##  Description

The '**BEEP** ' mnemonic allows applications to play sounds in a simpler manner than the **MULTI_MEDIA** command. This mnemonic accepts a string that contains the same keywords as the **MSGBOX** directive relative to the system sounds of "STOP","QUESTION", "INFO", "EXCLAMATION", "?" and "!".

## See Also

**[MULTI_MEDIA Control Multimedia Interface](../directives/multi_media.md)  
[MSGBOX Display Popup Message Box](../directives/msgbox.md)**

## Example

print 'beep'("STOP")  
print 'beep'("STOP,w")

The **,w** after the name causes PxPlus to **_wait_** until the sound has completed before continuing any processing.

If the first character of the sound name provided is an ***** (_asterisk_), the system will look up the sound name as defined in the Windows registry (which is not the same as the sound name in the control panel) or a specific pathname:

> print 'beep'("*MailBeep") ! Registered Sound Event  
>  print 'beep'("*C:\Windows\Media\ada.wav") ! Specific File  
>  print 'beep'("*Windows XP Logoff Sound") ! Found by automatic search

In the last example, the real filename is C:\Windows\Media\Windows XP Logoff Sound.wav. If the name given does not match a registered sound, then the Windows operating system searches its list of possible sound locations (current directory, Windows directory, System directory, etc.).

For more details, consult the Microsoft documentation on "Registering Sound Events"__ or check the registry for HKEY_CURRENT_USER\AppEvents\EventLabels\\*.
