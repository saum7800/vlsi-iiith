var canvas;
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

    if (comp == 'metal') {
        k[0]++;
        metal[k[0]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            fill: 'rgba(0,0,255,0.7)'
        });
        canvas.add(metal[k[0]]);
        //alert(components[0][0].width);
        document.getElementById("currentIcon").src = "images/comp1.gif";


    }
    else if (comp == 'nwell') {
        k[1]++;
        nwell[k[1]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            fill: 'rgba(192,192,192,0.7)'
        });
        canvas.add(nwell[k[1]]);
        document.getElementById("currentIcon").src = "images/comp5.gif";
    }
    else if (comp == 'poly') {
        k[2]++;
        poly[k[2]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            fill: 'rgba(255,0,0,0.7)'
        });
        canvas.add(poly[k[2]]);
        document.getElementById("currentIcon").src = "images/comp2.gif";

    } else if (comp == 'nselect') {
        k[3]++;
        nselect[k[3]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            fill: 'rgba(127,255,0,0.7)'
        });
        canvas.add(nselect[k[3]]);
        document.getElementById("currentIcon").src = "images/comp6.gif";
    } else if (comp == 'contact') {
        k[4]++;
        contact[k[4]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            fill: 'rgba(0,0,0,0.7)'
        });
        canvas.add(contact[k[4]]);
        document.getElementById("currentIcon").src = "images/comp3.gif";
    } else if (comp == 'pselect') {
        k[5]++;
        pselect[k[5]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            fill: 'rgba(191, 85, 236, 0.7)'
        });
        canvas.add(pselect[k[5]]);
        document.getElementById("currentIcon").src = "images/comp7.gif";
    } else if (comp == 'active') {
        k[6]++;
        active[k[6]] = new fabric.Rect({
            top: 100,
            left: 100,
            width: 60,
            height: 70,
            fill: 'rgba(0,255,0,0.7)'
        });
        canvas.add(active[k[6]]);
        document.getElementById("currentIcon").src = "images/comp4.gif";
    } else if (comp == 'via') {
        alert("not required for this experiment");
    }
}

function checkDRC() {
    var i, j;
    var lambda = 1000000;
    alert(k[0]);
    for (j = 0; j <= k[0]; j++) {
        if (metal[j].width < lambda) {
            lambda = metal[j].width;
        }

    }
    lambda = lambda / 3;
    lambda--;
    alert("lambda");
    var checkMinWidth = minWidth(lambda)
    if(checkMinWidth==true)
    {
        alert("good job!");
    }
    else
    {
        alert("bad job!");
    }
    

}

function minWidth(lambda) {
    var i, j, l;
    for (i = 0; i < 7; i++) {
        if (i != 1 && i != 4)//1=nwell and 4=contact
        {
            if (i == 2)//2=poly
            {
                for (j = 0; j <= k[i]; j++) {
                    if (components[i][j].width < lambda * 2) {
                        return false;
                    }
                    for(l=j+1;l<=k[i];l++)
                    {
                        var spacing=components[i][j].left+components[i][j].width-components[i][l].left;
                        if(Math.abs(spacing)<lambda*2)
                        {
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
                    for(l=j+1;l<=k[i];l++)
                    {
                        var spacing=components[i][j].left+components[i][j].width-components[i][l].left;
                        if(Math.abs(spacing)<lambda*3)
                        {
                            return false;
                        }
                    }

                }
            }
        }

    }
    return true;
}











