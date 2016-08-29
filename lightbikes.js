var canvas = document.getElementById("screen");
var context = canvas.getContext('2d');
var x = 0;
var y = 0;
var timescale = 1/30;
var speed = 1;

var input = {
    up: false,
    down: false,
    left: false,
    right: false
}

window.onkeydown = function (event) {
    switch (event.keyCode) {

        //Up
        case 38:
        case 87:
            event.preventDefault();
            input.up = true;
            break;

        //Left
        case 37:
        case 65:
            event.preventDefault();
            input.left = true;
            break;

        //Right
        case 39:
        case 68:
            event.preventDefault();
            input.right = true;
            break;

        //Down
        case 40:
        case 83:
            event.preventDefault();
            input.down = true;
            break;
    }
}

window.onkeyup = function (event) {
    switch (event.keyCode) {

        //Up
        case 38:
        case 87:
            event.preventDefault();
            input.up = false;
            break;

        //Left
        case 37:
        case 65:
            event.preventDefault();
            input.left = false;
            break;

        //Right
        case 39:
        case 68:
            event.preventDefault();
            input.right = false;
            break;

        //Down
        case 40:
        case 83:
            event.preventDefault();
            input.down = false;
            break;
    }
}

function loop(timestamp) { // timestamp = deltaTime 
    if (input.up) y -= speed;
    if (input.down) y += speed;
    if (input.left) x -= speed;
    if (input.right) x += speed;
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	for(var i = 0; i < 1000; i++) {
		context.fillStyle = "blue";
		context.fillRect(i * 20 % 1000, i * 20 % 1000, 10, 10);
	}
	
    context.fillStyle = "cyan";
    context.fillRect(x, y, 5, 5);

    //setTimeout(loop, timescale);
	
	requestAnimationFrame(loop); // syncs with refresh rate
}
//loop();

//var intervalID = setInterval(loop, timescale); // doesnt sync with monitor refresh rate

requestAnimationFrame(loop);
