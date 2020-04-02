'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 25, 50);
ctx.fillStyle = 'yellow';
ctx.fillRect(150, 150, 50, 60);
ctx.fillStyle = 'red';
ctx.fillRect(400, 200, 100, 90);
