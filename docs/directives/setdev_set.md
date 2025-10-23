# Directives 

**SETDEV** |  **_Set File Options_**  
---|---  
  
##  Format

**SETDEV (**_chan_**)**__**SET** _option$_**TO** _value_[_$_]  
  
**_Where:_**

_chan_ |  Channel or logical file number of the file affected.  
---|---  
_option$_ |  File option you wish to set/change.  
_value_[_$_] |  New value (string or numeric) for the specified option.  
  
##  Description

Use this form of the **SETDEV** directive to dynamically change various options on files. This is an alternative to using the **'OPTION'** mnemonic and targets the file specified in _chan_.

See [**'OPTION'**](../mnemonics/option.md) mnemonic for the various options you can change.

_(The SETDEV SET directive was added in PxPlus v11.00.)_
