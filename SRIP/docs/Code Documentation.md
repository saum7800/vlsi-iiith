VLSI Design Layout Code Documentation

Introduction

This document captures the experiment implementation details.

Code Details

File Name : design\_layout\_SRIP.js

File Description : This file contains all the code for implementation of the canvas and the buttons.

Function : init()

Function Description :

makes a canvas-fabric object to provide the functionality for making shapes and makes the dots on the canvas.

Function : makeOnCanvas(num,colorfill,imgID)

Function Description :

fired on clicking of components and makes the components on the canvas and stores them in DD array.

Function : spaceBetween(i1,j,i2,l)

Function Description :

finds the distance in pixels between the right edge of components\[i1\]\[j\] and left edge of components\[i2\]\[l\] or vice versa and returns the spacing.

Function : overlap(i1,j,i2,l)

Function Description :

Finds if there is overlap between components\[i1\]\[j\] and components\[i2\]\[l\] and sets value of amount of overlap if there is overlap.

Function : polyActiveRules(lambda)

Function Description :

checks the rules relating to poly component’s interaction with the active components.

Function : polyContact(lambda)

Function Description :

checks the rules relating to poly component’s interaction with the contact components.

Function : minWidth(lambda)

Function Description :

checks the minimum width and minimum spacing rules that each component has to follow with itself.

Function : mosfetLayout(lambda)

Function Description :

checks if polyActiveRules() and polyContact() is satisfied hence satisfying the mosfet layout rules

Function : NplusPplus(lambda)

Function Description :

checks the overlap of poly over the contact or active over the contact and returns boolean value accordingly.

Function : removeCurrent()

Function Description :

Fired when “Delete selected component” is clicked. Removes the currently selected component and also removes it’s position from the array.

Function : checkDRC()

Function Description :

fired when “check DRC rules” is clicked. Converts the width to real width. Checks mosfet layout rules, Nplus Pplus rules and min width and spacing rules by calling their respective functions. Alerts user whether drc rules are valid or not. If invalid, informs which rule is violated. Re-converts real width to original width.

Other details:

Formulas used in the Experiment:

LAYER			 TYPE OF RULE			 VALUE
POLY 			Minimum Width			 2 λ
			Minimum Spacing			 2 λ

ACTIVE 			Minimum Width			 3 λ
			Minimum Spacing			 3 λ

NSELECT 		Minimum Width			 3 λ
			Minimum Spacing			 3 λ 

PSELECT 		Minimum Width			 3 λ
			Minimum Spacing			 3 λ

N-Well			Minimum Width			 10 λ
			Minimum Spacing			 6 λ

METAL1 			Minimum Width			 3 λ
			Minimum Spacing			 3 λ 

		MOSFET LAYOUT RULES
RULE 			MEANING 			VALUE
POLY Overlap	Minimum extension over ACTIVE		2 λ

POLY-ACTIVE	Minimum Spacing				1 λ

MOSFET Width	Minimum N+/P+ MOSFET W			3 λ

ACTIVE CONTACT	Minimum Space to ACTIVE Edge		2 λ 

POLY CONTACT	Minimum Space to POLY Edge 		2 λ 






