const width = 800, height = 500;

let canvas = document.querySelector('#draw');
// could be 3d, if you want to make a video game
let ctx = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = 'black';

let lastX = undefined;
let lastY = undefined;

function draw(e) {
    // stop the function if they are not mouse down
    // listen for mouse move event
    if (lastX !== undefined && lastY !== undefined) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);

document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
    case 66: // blue
        ctx.strokeStyle = 'blue'; break;
    case 82: // red
        ctx.strokeStyle = 'red'; break;
    case 89: // yellow
        ctx.strokeStyle = 'yellow'; break;
    case 71: // green
        ctx.strokeStyle = 'green'; break;
    case 38: // up
        ctx.lineWidth += 1; break;
    case 40: // down
        ctx.lineWidth -= 1; break;
    case 32: // space
        ctx.clearRect(0, 0, width, height); break;
    }
});
