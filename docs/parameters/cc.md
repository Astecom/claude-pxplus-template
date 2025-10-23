# System Parameters

**'CC'** |  **_Check Cache First for Programs_**  
---|---  
  
##  Description

Determines if the system will first check the current list of programs in cache **_before_** checking to see if a program exists.

When this parameter is enabled _(default)_ , the system will first check to see if the requested program is in cache before processing the PREFIX search rules. When not enabled, the system will always search the PREFIX rules first.

_(The 'CC' system parameter was added in PxPlus v11.50.)_

##  Default

**'CC'=1** _(Check Cache first)_

## Example

If the PREFIX settings are to search "mydir/app/ mydir/custom/ /mydir/prog/" and the application issues a CALL "PROG99"; with the parameter disabled, the system will always search for "PROG99" in /mydir/app and /mydir/custom directories even if a copy of PROG99 exists in program cache. By enabling the parameter, the system will first check the cache and, if found, skip searching the directories (thereby increasing performance).

The downside of enabling this parameter is that should the application create (or remove) the program in one of the pathnames that would normally be searched while a copy of the program exists in cache, the cached version will still be used.
