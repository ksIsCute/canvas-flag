// Get the canvas element by its ID
const canvas = document.getElementById('myCanvas');

// Get the 2D context from the canvas (this is how you can draw on it)
const ctx = canvas.getContext('2d');

// Set the fill color for drawing
ctx.fillStyle = 'purple';

// Draw a rectangle (x, y, width, height)
ctx.fillRect(50, 50, 200, 100);

// Set the fill color for drawing
ctx.fillStyle = 'gold';

// Draw a rectangle (x, y, width, height)
ctx.fillRect(50, 130, 200, 50);

// Set the stroke color and line width
ctx.strokeStyle = 'gold';
ctx.lineWidth = 5;

// Draw our W (using circles) (centerX, centerY, radius)
ctx.beginPath();
ctx.arc(150, 130, 75, 5, Math.PI * 2);
ctx.arc(100, 140, 70, 5, Math.PI * 2);
ctx.arc(40, 130, 75, 5, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(187, 95, 40, 10, Math.PI * 2);
ctx.stroke();

let i = 0
function wave() {
    if (i >= 10 ){
        alert("stop waving its annoying")
        document.fullscreenEnabled = true
    } else {
        alert("it says hi")
    }
    i++
}