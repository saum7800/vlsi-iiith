issue: width and height of shapes not getting updated but x and y coordinates getting updated.
test steps:
1. add component.
2. check drc
3. add another component
expected output: no change in size of old component
actual output: change in size of old component
status: passed

issue: HTML-javascript linking problems.
status: fixed

issue: via should not be allowed to be used for experiment.
status: fixed

issue:all buttons should produce their respective components only.
status: fixed

issue:rotation of the shape should not be allowed.
test steps:
1. click on component and try to rotate
expected output:should not rotate
actual output:rotates
status: passed

issue:"checkDRC" without any components added
test steps:
1. when site opens,click on check drc
expected output:Alert saying no component found
actual output: Alert saying “drc satisfied”
status: passed

issue:"delete selected component" without selection causing issues
status: fixed



