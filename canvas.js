let canvas = document.querySelector('#draw');
// could be 3d, if you want to make a video game
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

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
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);

function keyboardfeature(e){
    if (canvas.keys && canvas.keys[66]) {ctx.strokeStyle = 'blue'; }
    if (canvas.keys && canvas.keys[71]) {ctx.strokeStyle = 'green'; }
    if (canvas.keys && canvas.keys[82]) {ctx.strokeStyle = 'red'; }
    if (canvas.keys && canvas.keys[89]) {ctx.strokeStyle = 'yellow'; }
    if (canvas.keys && canvas.keys[38]) {ctx.lineWidth +=1; }
    if (canvas.keys && canvas.keys[40]) {ctx.lineWidth -=1; }
    if (canvas.keys && canvas.keys[32]) {this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)}
}

canvas.addEventListener('keyboard',function(e){
    if (canvas.keys && canvas.keys[66]) {ctx.strokeStyle = 'blue'; }
    if (canvas.keys && canvas.keys[71]) {ctx.strokeStyle = 'green'; }
    if (canvas.keys && canvas.keys[82]) {ctx.strokeStyle = 'red'; }
    if (canvas.keys && canvas.keys[89]) {ctx.strokeStyle = 'yellow'; }
    if (canvas.keys && canvas.keys[38]) {ctx.lineWidth +=1; }
    if (canvas.keys && canvas.keys[40]) {ctx.lineWidth -=1; }
    if (canvas.keys && canvas.keys[32]) {this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)}
})
