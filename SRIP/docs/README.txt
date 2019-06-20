SRIP

VLSI | issue no 387 | Layout Design

---------------------------------------------------------------------------------------------------------------------------------

Simulator:
The Simulator can be used by clicking the design_layout_SRIP.html file.

The following are the files used for the simulator:

design_layout_SRIP.html
design_layout_SRIP.css
design_layout_SRIP.js

The following are the libraries used for the simulator:

fabricJS
jQuery

-----------------------------------------------------------------------------------------------------------------------------------
PROCEDURE

On the simulator page, there are 10 buttons. 8 of the 10 buttons are for the various components that may be used.
The components used are Metal-1, Active, Contact, Poly, N-well, N-select, P-select and via.
The 2 remaining buttons are "clear all" and "check DRC".

Procedure for using the simulator:

1.  Click on the button for any of the components. You will see that component appear on the canvas to the right of the buttons.

2.  Click on the component that just appeared. You will see 8 small squares on the component. 4 on the corners and 4 at the
    middle points of the sides of the rectangle.

3.  Press and drag the corner squares to resize the component without changing the aspect ratio of the component.

4.  Press and drag the mid-point squares to resize the component by changing height or width only in direction of dragging.

5.  Press and drag anywhere else on the component to change it's position on the canvas.

6.  Click on the button of any component. New component will appear on the canvas and you may manipulate it's position and size
    in the same way as shown in steps 3,4 and 5.
7.  Make the layout design using the components.

8.  Click on the " Check DRC " button to check if the layout made satisfies the design layout rules correctly.

9.  You will get an alert which will tell you if DRC rules are satisfied or not.

10. If DRC rules are not satisfied, you will also get an alert to tell you which specific DRC rule has been violated.

11. Click the " clear all " button to start making and testing a new layout.

-------------------------------------------------------------------------------------------------------------------------------------  


