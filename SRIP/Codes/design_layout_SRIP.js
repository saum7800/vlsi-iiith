function makeOnCanvas(comp)
{
	var canvas = document.getElementById("myCanvas");
	var	stage = new createjs.Stage(canvas);	
    var rectangle = new createjs.Shape();
    
    
    
    if(comp=='metal')
    {
		
		rectangle.graphics.beginFill("DeepSkyBlue").drawRect(10, 10, 50,50);
    	stage.addChild(rectangle);
    	stage.update();   
        document.getElementById("currentIcon").src="images/comp1.gif";    
	}
	else if(comp=='nwell')
	{
		rectangle.graphics.beginFill("grey").drawRect(10, 10, 50,50);
    	stage.addChild(rectangle);
    	stage.update();   
        document.getElementById("currentIcon").src="images/comp5.gif";
	}
	else if(comp=='poly')
	{
		rectangle.graphics.beginFill("red").drawRect(10, 10, 50,50);
    	stage.addChild(rectangle);
    	stage.update();   
        document.getElementById("currentIcon").src="images/comp2.gif";
	}else if(comp=='nselect')
	{
		rectangle.graphics.beginFill("green").drawRect(10, 10, 50,50);
    	stage.addChild(rectangle);
    	stage.update();   
        document.getElementById("currentIcon").src="images/comp6.gif";
	}else if(comp=='contact')
	{
		rectangle.graphics.beginFill("black").drawRect(10, 10, 50,50);
    	stage.addChild(rectangle);
    	stage.update();   
        document.getElementById("currentIcon").src="images/comp3.gif";
	}else if(comp=='pselect')
	{
		rectangle.graphics.beginFill("purple").drawRect(10, 10, 50,50);
    	stage.addChild(rectangle);
    	stage.update();   
        document.getElementById("currentIcon").src="images/comp7.gif";
	}else if(comp=='active')
	{
		rectangle.graphics.beginFill("darkgreen").drawRect(10, 10, 50,50);
    	stage.addChild(rectangle);
    	stage.update();   
        document.getElementById("currentIcon").src="images/comp4.gif";
	}else if(comp=='via')
	{
		alert("not required for this experiment");
	}
	
}

//var canvas, stage;

/*var mouseTarget;	// the display object currently under the mouse, or being dragged
var dragStarted;	// indicates whether we are currently in a drag operation
var offset;
var update = true;

function init() {
	examples.showDistractor();
	// create stage and point it to the canvas:
	

	// enable touch interactions if supported on the current device:
	createjs.Touch.enable(stage);

	// enabled mouse over / out events
	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

	// load the source image:
	//var image = new Image();
	//image.src = "../_assets/art/daisy.png";
	//image.onload = handleImageLoad;
}

function stop() {
	createjs.Ticker.removeEventListener("tick", tick);
}

function handleImageLoad(event) {
	//var image = event.target;
	//var bitmap;
	
		// using "on" binds the listener to the scope of the currentTarget by default
		// in this case that means it executes in the scope of the button.
		bitmap.on("mousedown", function (evt) {
			this.parent.addChild(this);
			this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
		});

		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		bitmap.on("pressmove", function (evt) {
			this.x = evt.stageX + this.offset.x;
			this.y = evt.stageY + this.offset.y;
			// indicate that the stage should be updated on the next tick:
			update = true;
		});

		bitmap.on("rollover", function (evt) {
			this.scale = this.originalScale * 1.2;
			update = true;
		});

		bitmap.on("rollout", function (evt) {
			this.scale = this.originalScale;
			update = true;
		});

	}

	examples.hideDistractor();
	createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
	// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
	if (update) {
		update = false; // only update once
		stage.update(event);
	}
}*/
