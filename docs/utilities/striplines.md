# Utility Routines

***TOOLS/STRIPLINES** |  **_Strip Line Numbers_**  
---|---  
  
## Invocation

**CALL "*tools/StripLines"** , _progname_ _$, password$, lbl_pfx$, lbl_opt, emsg$_

**_Where:_**

_progname_ _$_ |  Required |  Input |  Path of the program that you want to have line numbers stripped from.  
---|---|---|---  
_password$_ |  Optional |  Input |  Program password if required (null if no password).  
_lbl_pfx_ _$_ |  Optional |  Input |  Prefix for the label names to replace statement references (e.g. prefix "LBL" **_(Default)_** results in label names such as LBL_00010).  
_lbl_opt_ |  Optional |  Input |  Determines the format of the numeric part of the label name:  
  
0 = Uses sequential numbers **_(Default)_**  
1 = Uses the original numeric statement reference  
_emsg_ _$_ |  Optional |  Output |  Warning messages normally displayed during a SAVE (such as missing/duplicate labels, number of program errors, etc.).  
  
## Description

This utility is a CALLed program that strips line numbers from the specified programs, and replaces statement references with labels.

**_Calling Sequence:_**

> **CALL "*tools/StripLines"** ,ERR=*_next,progname$,password$,lbl_pfx$,lbl_opt,emsg$_

This program can be used to remove all line number references from a program and replace them with labels and/or logical statement labels such as *NEXT or *SAME.

Rules for line number replacement:

  * References by line number to lines labels will be replaced with reference to the existing label.
  * References to lines with no label will generate a new label (using the prefix followed by the line/sequence number).
  * References to line numbers that do not exist (between two lines) will generate new lines with labels.
  * References to the logical next line will be replaced with reference to *NEXT.
  * References to the same line will be replaced with reference to *SAME.



#### **Note:**  
This program will EXIT ERR if an error is encountered.

_(The StripLines utility was added in PxPlus v10.20.)_
