'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

/* function draw (x: number, y: number) {
  for ( let i: number = 0; i < 3; i++) {
    
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(x, y);
    ctx.lineTo(x+50, y);
    ctx.stroke();
    x = x+50;
    ctx.closePath();
  }
}draw (200,100) */

function draw (x: number, y: number) {
  for (let i: number = 0; i<3; i++){
    x = x+50;
    y = y+50;
  
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(x,y);
ctx.lineTo(x+50, y);
ctx.stroke();
ctx.closePath;
}
}
draw (150,200);

