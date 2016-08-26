var canvas=document.getElementById("screen");
var context=canvas.getContext("2d");
var x=0;
var y=0;
var speed=1000/16;

var input={
	up:false,
	down:false,
	left:false,
	right:false
}

window.onkeydown=function(event){
	event.preventDefault();
	switch(event.keyCode){
		
		//Up
		case 38:
		case 87:
			input.up=true;
			break;
		
		//Left
		case 37:
		case 65:
			input.left=true;
			break;
		
		//Right
		case 39:
		case 68:
			input.right=true;
			break;
		
		//Down
		case 40:
		case 83:
			input.down=true;
			break;
	}
}

window.onkeyup=function(event){
	event.preventDefault();
	switch(event.keyCode){
		
		//Up
		case 38:
		case 87:
			input.up=false;
			break;
		
		//Left
		case 37:
		case 65:
			input.left=false;
			break;
		
		//Right
		case 39:
		case 68:
			input.right=false;
			break;
		
		//Down
		case 40:
		case 83:
			input.down=false;
			break;
	}
}

function loop(){
	if(input.up)y-=1;
	if(input.down)y+=1;
	if(input.left)x-=1;
	if(input.right)x+=1;
	context.fillStyle="red";
	context.fillRect(x,y,5,5);
	
	setTimeout(loop,speed);
}
loop();