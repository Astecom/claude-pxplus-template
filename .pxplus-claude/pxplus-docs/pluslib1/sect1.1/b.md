# PLUSLIB DLL Library

**File Lists** |  **__**  
---|---  
  
To make adding/removing multiple files from the DLL library easier, the **[Maintenance Utility](a.md)** allows a control file to be used. This control file is a simple text file with each program/file to add or remove on a separate line.

White space (blanks or tabs) are ignored on the file, along with any data on the file following an _exclamation mark_ ("**!** ").

Lines that start with an _exclamation mark_ ("**!** ") followed by white space will be displayed on the console while processing the control file.

## System Files

To simplify the process of creating a DLL library that contains the files required to run PxPlus, a control file **"*plus/dll/core_files"** is included. It contains the list of files needed to run PxPlus with **[NOMADS](../../NOMADS%20Graphical%20Application/Introduction.md)** and PDF output (including the ability to use *PDF*;View" as a report viewer). Only the run-time elements of NOMADS are included, not the designer.

The contents of the ***plus/dll/core_files** as provided with the initial release of the DLL library is shown below (subject to change with future releases):

**"*plus/dll/core_files"**  
---  
!   
! Standard system core files needed to start system and run NOMADS   
!   
!! -- Includes files required to output to PDF files and use *PDF*;VIEW   
!   
!! Format of this file is one line per file to include   
!! Anything following "!" is ignored   
!! Lines that start with !! are not printed during processing   
!! Lines with single ! will be printed unless empty   
!   
!! ----------------------------------------   
!   
! These are needed in PLUSLIB.DLL to eliminate need for LIB programs   
!   
! -- English syntax/error message files   
!   
*lextbl.en !Syntax table   
*mlfile.en !Message library   
!   
! -- Windows terminal definition   
!   
*dev/windows !Device driver   
*tty !Generic Keyboard CTL key loader   
*kybrd.std !Standard Keyboard definitions   
!   
! -- System *START.UP program and theme processor   
!   
*start.up  
*obj/theme.pvc   
*theme/autoload   
!   
!! -- If you need themes to be autoloaded you will need to add   
!   
!! *theme/autoload   
!! *theme/override   
!! ... plus as required   
!! *theme/system/....   
!   
!   
! -- PxPlus start logic   
!   
*plus/start_up !Standard Startup   
*plus/spawn !Generic spawn processor   
!   
!! The following are optional if you don't intend to use command   
!! mode. They simply load the 'Utilities' menu at command mode.   
!!   
!! *** OPTIONAL ***   
!   
*plus/util/config !Menu bar loaded   
*plus/util/util.conf !Menu bar settings   
*cmd/system/_plus !Plus Extensions   
*cmd/system/_plus.en !Library for Nomads (Would require Nomads)   
!   
! -- *CONTROL (Hot key processor)   
!   
*control   
*query   
!   
! -- PDF drivers   
!   
*pdf* !Logical name   
*dev/pdf2 !Device handler   
*ext/system/pdf !PDF driver   
*ext/system/pdfview !PDF Viewer logic   
*ext/system/forms.en !PDF Forms library   
*scrnlib.en !PDF screen   
*fl.nme !Temporary file logic   
!   
! -- NOMADS files   
!! (could be omitted if not using)   
!! ** WARNING *PDF* use this **   
!   
*winproc !Core NOMADS processor   
*winproc.tbl !Internal table manager   
*winproc.dsp !Display routine   
*winproc.rsz !Resize logic   
*winproc.cus !Customizer (Optional)   
*winproc.grd !Grid processor   
*winproc.xeq !Logic processor   
*winproc.sad !Save/restore logic   
*winproc.emb !Embedded panels   
*winproc.ocx !OCX logic   
*winproc.mnu !Menu handler   
*winerr !Error handler   
*winapi   
!   
*wintab !Tab processor   
*wingrp !Group processor   
*winlist !List processor   
*win/color.dsp !Colour load logic   
*info !Screen/monitor information   
*secure !Nomads security module   
*msglib !Message library control   
*msglib.en !English messages   
!   
*windx.utl !Windx interface utility (Used by Nomads)   
!   
!! Query processor   
!   
*winqry !Query processor   
!   
**key.inf !Key information   
*progbar !Progress bar   
!   
!! File maintenance   
!   
*win/flmaint !File maintenance   
!   
! -- PLUS extensions for NOMADS   
!!   
!! Mostly optional if not using PLUS features   
!   
*plus/nomads !Drag logic for Widgets   
*plus/winutl/copylbox !Copy listbox to clipboard utility   
*plus/winutl/richtext !Richtext logic for Find/Format   
*plus/winutl/scrnlib.en !Screen information   
*plus/winutl/winqry !Winqry extensions   
*plus/winutl/transparency !Transparency routine   
!   
!! *winproc.cnv !Include to convert old form libraries   
!
