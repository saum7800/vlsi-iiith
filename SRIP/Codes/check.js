var canvas;
var overlapLength;
var k = [-1, -1, -1, -1, -1, -1, -1];
var metal = [];
var nwell = [];
var poly = [];
var nselect = [];
var contact = [];
var pselect = [];
var active = [];
var components = [metal, nwell, poly, nselect, contact, pselect, active];
function init() {

    canvas = new fabric.Canvas('myCanvas');
}
function makeOnCanvas(comp) {

    if (comp ==="metal") {

        k[0]++;
        metal[k[0]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            lockRotation: true,
            fill:"rgba(0,0,255,0.7)"
        });
        canvas.add(metal[k[0]]);
        //alert(components[0][0].width);
        document.getElementById("currentIcon").src = "images/comp1.gif";


    }
    else if (comp ==="nwell") {
        
        k[1]++;
        nwell[k[1]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            lockRotation: true,
            fill:"rgba(192,192,192,0.7)"
        });
        canvas.add(nwell[k[1]]);
        document.getElementById("currentIcon").src = "images/comp5.gif";
    }
    else if (comp ==="poly") {
        k[2]++;
        poly[k[2]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            lockRotation: true,
            fill: "rgba(255,0,0,0.7)"
        });
        canvas.add(poly[k[2]]);
        document.getElementById("currentIcon").src = "images/comp2.gif";

    } else if (comp ==="nselect") {
        k[3]++;
        nselect[k[3]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            lockRotation: true,
            fill: "rgba(127,255,0,0.7)"
        });
        canvas.add(nselect[k[3]]);
        document.getElementById("currentIcon").src = "images/comp6.gif";
    } else if (comp ==="contact") {
        k[4]++;
        contact[k[4]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            lockRotation: true,
            fill: "rgba(0,0,0,0.7)"
        });
        canvas.add(contact[k[4]]);
        document.getElementById("currentIcon").src = "images/comp3.gif";
    } else if (comp ==="pselect") {
        k[5]++;
        pselect[k[5]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            lockRotation: true,
            fill: "rgba(191, 85, 236, 0.7)"
        });
        canvas.add(pselect[k[5]]);
        document.getElementById("currentIcon").src = "images/comp7.gif";
    } else if (comp ==="active") {
        k[6]++;
        active[k[6]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            lockRotation: true,
            fill: "rgba(0,255,0,0.7)"
        });
        canvas.add(active[k[6]]);
        document.getElementById("currentIcon").src = "images/comp4.gif";
    } else if (comp ==="via") {
        alert("not required for this experiment");
    }
}

function checkDRC() {
    var i, j;
    var lambda = 1000000;
    for (i = 0; i < 7; i++) {
        for (j = 0; j <= k[i]; j++) {
            components[i][j].width = components[i][j].width * components[i][j].scaleX;
        }
    }
    //alert(k[0]);
    for (j = 0; j <= k[0]; j++) {
        if (metal[j].width < lambda) {
            lambda = metal[j].width;
            //alert(lambda);
        }

    }
    lambda = lambda / 3;
    lambda--;
    //alert("lambda");
    var checkMinWidth = minWidth(lambda);
    var checkMosfetLayout = mosfetLayout(lambda);
    var checkNplusPplus = NplusPplus(lambda);
    if (checkMinWidth == true && checkMosfetLayout == true && checkNplusPplus == true) {
        alert("good job!the layout satisifes the DRC rules");
    }
    else {
        alert("The layout does NOT satisfy the DRC rules correctly");
        if (checkMinWidth == false) {
            alert("There appears to be a problem with the width and spacing");
        }
        if (checkMosfetLayout == false) {
            alert("There appears to be a problem with the mosfet layout rules");
        }
        if (checkNplusPplus == false) {
            alert("There appears to a problem with the N-plus and P-plus width and spacing");
        }
    }


}

function NplusPplus(lambda) {//Nselect=3,Pselect=5,active=6
    var i, j;
    for (i = 0; i <= k[6]; i++) {
        for (j = 0; j <= k[3]; j++) {
            if (overlap(6, i, 3, j) === true) {
                if (components[6][i].left - components[3][j].left < 2 * lambda || components[3][j].left + components[3][j].width - components[6][i].left - components[6][i].width < 2 * lambda || components[6][i].top - components[3][j].top < 2 * lambda || components[3][j].top + components[3][j].height - components[6][i].top - components[6][i].height < 2 * lambda) {
                    return false;
                }
                else {
                    for (l = 0; l <= k[1]; l++) {
                        if (overlap(3, j, 1, l) === true) {
                            if (components[3][j].left - components[1][l].left < 5 * lambda || components[1][l].left + components[1][l].width - components[3][j].left - components[3][j].width < 5 * lambda || components[3][j].top - components[1][l].top < 5 * lambda || components[1][l].top + components[1][l].height - components[3][j].top - components[3][j].height < 5 * lambda) {
                                return false;
                            }
                        }
                        else {
                            var spacing = spaceBetween(3, j, 1, l);
                            if (spacing < 5 * lambda) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        for (j = 0; j <= k[5]; j++) {
            if (overlap(6, i, 5, j) === true) {
                if (components[6][i].left - components[5][j].left < 2 * lambda || components[5][j].left + components[5][j].width - components[6][i].left - components[6][i].width < 2 * lambda || components[6][i].top - components[5][j].top < 2 * lambda || components[5][j].top + components[5][j].height - components[6][i].top - components[6][i].height < 2 * lambda) {
                    return false;
                }
                else {
                    for (l = 0; l <= k[1]; l++) {
                        if (overlap(5, j, 1, l) === true) {
                            if (components[5][j].left - components[1][l].left < 5 * lambda || components[1][l].left + components[1][l].width - components[5][j].left - components[5][j].width < 5 * lambda || components[5][j].top - components[1][l].top < 5 * lambda || components[1][l].top + components[1][l].height - components[5][j].top - components[5][j].height < 5 * lambda) {
                                return false;
                            }
                        }
                        else {
                            var spacing = spaceBetween(5, j, 1, l);
                            if (spacing < 5 * lambda) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
    }
    return true;

}



function minWidth(lambda) {
    var i, j, l;
    for (i = 0; i < 7; i++) {
        if (i !== 4)//1=nwell and 4=contact
        {
            if (i === 1)//N-well
            {
                for (j = 0; j <= k[i]; j++) {
                    if (components[i][j].width < lambda * 10) {
                        return false;
                    }
                    for (l = j + 1; l <= k[i]; l++) {
                        var spacing = spaceBetween(i, j, i, l);
                        if (spacing < lambda * 6 && (overlap(i, j, i, l) == false)) {
                            return false;
                        }
                    }

                }
            }
            if (i === 2)//2=poly
            {
                for (j = 0; j <= k[i]; j++) {
                    if (components[i][j].width < lambda * 2) {
                        return false;
                    }
                    for (l = j + 1; l <= k[i]; l++) {
                        var spacing = spaceBetween(i, j, i, l);
                        if (spacing < lambda * 2 && (overlap(i, j, i, l) == false)) {
                            return false;
                        }
                    }

                }

            }
            else {
                for (j = 0; j <= k[i]; j++) {
                    if (components[i][j].width < lambda * 3) {
                        return false;
                    }
                    for (l = j + 1; l <= k[i]; l++) {
                        var spacing = spaceBetween(i, j, i, l);
                        if (spacing < lambda * 3 && (overlap(i, j, i, l) == false)) {
                            return false;
                        }
                    }

                }
            }
        }

    }
    return true;
}

function mosfetLayout(lambda) {//poly=2,active=6
    if (polyActiveRules(lambda) === true && polyContact(lambda) === true) {
        return true;
    }
    else {
        /* if(polyActiveRules(lambda)==false)
         {
             alert("poly active rules false");
         }
         if(polyContact(lambda)==false)
         {
             alert("polyContact(lambda)==false")
         }*/
        return false;
    }

}

function polyActiveRules(lambda) {
    var i, j;
    for (i = 0; i <= k[2]; i++) {
        for (j = 0; j <= k[6]; j++) {
            if (overlap(2, i, 6, j) === true && overlapLength < 2 * lambda) {
                return false;
            }
            else if ((overlap(2, i, 6, j) === false) && spaceBetween(2, i, 6, j) < lambda) {
                return false;
            }
        }
    }
    return true;
}

function polyContact(lambda) {//contact=4,poly=2
    var i, j, flag;
    for (i = 0; i <= k[4]; i++) {
        flag = 0;
        for (j = 0; j <= k[2]; j++) {
            if (components[4][i].left - components[2][j].left >= 2 * lambda && components[2][j].left + components[2][j].width - components[4][i].left - components[4][i].width >= 2 * lambda && components[4][i].top - components[2][j].top >= 2 * lambda && components[2][j].top + components[2][j].height - components[4][i].top - components[4][i].height) {
                flag = 1;
            }
        }
        for (j = 0; j <= k[6]; j++) {
            /*alert("reached here1");
            alert(components[4][i].left-components[6][j].left);
            alert(components[6][j].left+components[6][j].width-components[4][i].left-components[4][i].width);
            alert(components[4][i].top-components[6][j].top);
            alert(components[6][j].top+components[6][j].height-components[4][i].top-components[4][i].height);*/
            if ((components[4][i].left - components[6][j].left >= 2 * lambda) && (components[6][j].left + components[6][j].width - components[4][i].left - components[4][i].width >= 2 * lambda) && (components[4][i].top - components[6][j].top >= 2 * lambda) && (components[6][j].top + components[6][j].height - components[4][i].top - components[4][i].height)) {
                flag = 1;
            }
        }
        /*alert(flag);        
        alert(lambda);*/
        if (flag === 0) {
            return false;
        }
    }
    return true;

}


function spaceBetween(i1, j, i2, l) {
    var spacing = 0;
    if (components[i1][j].left < components[i2][l].left) {
        spacing = Math.abs(components[i1][j].left + components[i1][j].width - components[i2][l].left);
    }
    else {
        spacing = Math.abs(components[i2][l].left + components[i2][l].width - components[i1][j].left);
    }
    return spacing;
}

function overlap(i1, j, i2, l) {
    var top1 = components[i1][j].top;
    var down1 = components[i1][j].top + components[i1][j].height;
    var left1 = components[i1][j].left;
    var right1 = components[i1][j].left + components[i1][j].width;
    var top2 = components[i2][l].top;
    var down2 = components[i2][l].top + components[i2][l].height;
    var left2 = components[i2][l].left;
    var right2 = components[i2][l].left + components[i2][l].width;
    if (left1 < left2) {
        if (left2 > right1) {
            return false;
        }
        else if (down2 < top1) {
            return false;
        }
        else if (down1 < top2) {
            return false;
        }
        else {
            if (right2 < left1) {
                overlapLength = right2 - left2;
            }
            else {
                overlapLength = right1 - left2;
            }
            return true;
        }
    }
    else {
        if (left1 > right2) {
            return false;
        }
        else if (down1 < top2) {
            return false;
        }
        else if (down2 < top1) {
            return false;
        }
        else {
            return true;
        }
    }

}